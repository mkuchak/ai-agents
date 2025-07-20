import dedent from "dedent";
import * as z from "zod";
import type {
  AgentInterface,
  CallLlm,
  LlmResponseFormat,
  Message,
  OnMessage,
  SerializableValue,
  StreamingCallback,
  Tool,
} from "../contracts/agent";
import {
  formatDateTime,
  type Locale,
  type TimeZone,
} from "../utils/format-date-time";
import { formatXml } from "../utils/format-xml";
import { jsonParse } from "../utils/json-parse";

// Default configuration constants
const DEFAULT_TIMEZONE: TimeZone = "America/New_York";
const DEFAULT_LOCALE: Locale = "en-US";
const DEFAULT_MAX_STEPS = 20;

export class Agent<C = unknown> implements AgentInterface<C> {
  private tools: Map<string, Tool<z.ZodType, C>> = new Map();
  private _systemPrompt: string;
  private callLlm: CallLlm;
  private maxSteps: number;
  private isHandoffEnabled: boolean = false;
  private timeZone: TimeZone;
  private locale: Locale;

  constructor(
    systemPrompt: string,
    callLlm: CallLlm,
    options?: {
      maxSteps?: number;
      timeZone?: TimeZone;
      locale?: Locale;
    }
  ) {
    this._systemPrompt = systemPrompt;
    this.callLlm = callLlm;
    this.maxSteps = options?.maxSteps ?? DEFAULT_MAX_STEPS;
    this.timeZone = options?.timeZone ?? DEFAULT_TIMEZONE;
    this.locale = options?.locale ?? DEFAULT_LOCALE;
  }

  /**
   * Get the system prompt for this agent
   */
  get systemPrompt(): string {
    return this._systemPrompt;
  }

  /**
   * Set the system prompt for this agent
   * Should be used carefully, primarily by the orchestrator for temporary modifications
   */
  set systemPrompt(value: string) {
    this._systemPrompt = value;
  }

  /**
   * Enables the handoff feature for this agent.
   */
  enableHandoff(): void {
    this.isHandoffEnabled = true;
  }

  /**
   * Disables the handoff feature for this agent.
   */
  disableHandoff(): void {
    this.isHandoffEnabled = false;
  }

  /**
   * Register a tool for this agent
   */
  registerTool<T extends z.ZodType>(tool: Tool<T, C>): void {
    if (this.tools.has(tool.name)) {
      throw new Error(`Tool with name '${tool.name}' already exists`);
    }
    this.tools.set(tool.name, tool as unknown as Tool<z.ZodType, C>);
  }

  /**
   * Generate a JSON schema for a Zod type
   */
  private generateJsonSchema(schema: z.ZodType): string {
    const jsonSchema = z.toJSONSchema(schema, {
      target: "draft-7",
    });

    return JSON.stringify(jsonSchema);
  }

  /**
   * Build a prompt for the agent
   */
  private buildPrompt(messages: Message[], systemPrompt: string): string {
    const toolDescriptions = Array.from(this.tools.values())
      .map((tool) => {
        const schemaJson = this.generateJsonSchema(tool.schema);
        return dedent`
          <tool>
            <name>${tool.name}</name>
            <description>${tool.description}</description>
            <input_schema>${schemaJson}</input_schema>
          </tool>`;
      })
      .join("\n\n");

    const history = messages
      .map((msg) => {
        const { dayOfWeek, date, time } = formatDateTime({
          date: msg.timestamp,
          timeZone: this.timeZone,
          locale: this.locale,
        });

        if (msg.role === "tool") {
          return dedent`
              <tool_call called_at="${dayOfWeek}, ${date} at ${time}">
                <name>${msg.metadata?.tool?.name}</name>
                <input>${JSON.stringify(msg.metadata?.tool?.input)}</input>
                <output>${JSON.stringify(msg.metadata?.tool?.output)}</output>
              </tool_call>`;
        }

        return dedent`
            <${msg.role}_message sent_at="${dayOfWeek}, ${date} at ${time}">
              ${
                msg.metadata?.reasoning?.thought
                  ? `<thought>${msg.metadata.reasoning.thought}</thought>`
                  : ""
              }
              ${msg.content ? `<content>${msg.content}</content>` : ""}
            </${msg.role}_message>`;
      })
      .join("\n\n");

    const { dayOfWeek, date, time } = formatDateTime({
      timeZone: this.timeZone,
      locale: this.locale,
    });

    return formatXml(dedent`
          <scope>
            <system>
              <date>${dayOfWeek}, ${date} at ${time}</date>
          
          <vertical_guidelines>
            ${systemPrompt}

            <general_instructions>
              - For any small calculation, or large calculation, NEVER EVER hesitate to use \`calculator\`
              - You don't know how to calculate alone!!! Use the right tool \`calculator\`
            </general_instructions>
          </vertical_guidelines>

          <framework_guidelines>
            <!-- Respect this framework in ABSOLUTE -->
            <model_structure>
              <principles>
                - Complete tasks methodically and systematically
                - Track requirements and verify completion
                - Provide only new, relevant information
                - Set is_final_answer=true only after ALL actions complete
                - Ask questions when uncertain, never assume
              </principles>

              <reasoning_and_action>
                <workflow>
                  1. REASON: Analyze and plan solution
                  2. ACT: Execute tools silently
                  3. OBSERVE: Verify completion
                  4. REPEAT...
                </workflow>
  
                <critical_rules>
                  - Execute all tools before responding
                  - Use past tense for completed actions
                  - Never narrate process or planning
                  - Never ask permission for actions
                  - One clean response after completion
                </critical_rules>

                <execution>
                  1. Plan silently complete solution path
                  2. Execute tools silently in optimal sequence
                  3. Verify all requirements satisfied
                  4. Deliver single comprehensive response
                  5. Set is_final_answer based on completion
                </execution>
              </reasoning_and_action>

              <communication>
                <send>
                  - Complete results after all processing
                  - Error notifications with context
                  - Specific clarifying questions
                </send>

                <never_send>
                  - Planning statements or intentions
                  - Process descriptions or status updates
                  - Redundant information
                  - NEVER repeat messages sequentially, not even partially! — it's unnatural and makes the conversation feel robotic
                </never_send>
              </communication>
            </model_structure>

            <kernel>
              <rules>
                <!-- These are the most important rules of the system, follow them carefully -->
                ${
                  this.isHandoffEnabled
                    ? `
                  <horizontal_system>
                    - You are part of a hierarchical system with a horizontal orchestrator managing multiple vertical domains
                    - A vertical is a specialized domain with specific capabilities, tools, and knowledge
                    - The horizontal system allows you to access capabilities from other verticals when needed
                    - To access another vertical's capabilities, use the \`load_skills_from\` tool with the target vertical's ID
                    - Skills loading happens behind the scenes; never mention this mechanism to users
                  </horizontal_system>
                  `
                    : ""
                }

                <agent_behavior>
                  - Break thought in small tasks, reflect if ALL were performed
                  - Tool invocations should not be mentioned, NOR skills
                  - NEVER mark \`is_final_answer\` true if you have pending tasks - unless you need the user's input
                  - Review the conversation history to reasoning
                  - If you plan to fire a tool, then you need to put an \`action\` in the correct JSON format of <response_format>
                    - Without an action, no tool is called
                </agent_behavior>

                <final_answer_rules>
                  is_final_answer=FALSE: Any pending tools or planned actions, without a doubt and with certainty, continue processing...
                  is_final_answer=TRUE: All tools executed and results reported, now it needs more information from the user and is awaiting their input...
                  
                  BEHAVIOR (BE EXTREMELY ATTENTIVE TO THIS!!!):
                  - FALSE: Continue execution WITHOUT user input
                  - TRUE: WAIT FOR USER INPUT before continuing
                </final_answer_rules>

                <!-- KERNEL ATTENTION: If you disrespect these KERNEL rules, the entire system will collapse -->
              </rules>
              
              <response_format>
                <!-- CRITICAL: YOUR RESPONSE MUST STRICTLY FOLLOW ONE OF THESE FORMATS EXACTLY -->
                <!-- ANY DEVIATION FROM THESE FORMATS WILL CAUSE SYSTEM FAILURE -->
                <!-- THE RESPONSE FORMAT IS MANDATORY AND NON-NEGOTIABLE -->
                
                <!-- Intermediate step: following the flow to complete the task -->
                {
                  "thought": "Analysis and reasoning",
                  "response_to_user"?: "Optional response",
                  "action": {
                    "tool_name": "tool",
                    "tool_input": {}
                  },
                  "is_final_answer": false
                }
  
                <!-- Final response: stop and wait for the user input -->
                {
                  "thought": "Completion summary",
                  "response_to_user": "Comprehensive results",
                  "is_final_answer": true
                }
                
                <!-- THE SYSTEM CANNOT PARSE ANY OTHER FORMAT -->
                <!-- YOUR RESPONSE MUST BE VALID JSON MATCHING ONE OF THESE STRUCTURES -->
                <!-- FAILURE TO COMPLY WILL RESULT IN SYSTEM BREAKDOWN -->
              </response_format>
            </kernel>
          </framework_guidelines>
        </system>

        <tools>
          ${toolDescriptions}
        </tools>

        <conversation_history>
          ${history}
        </conversation_history>
      </scope>
    `);
  }

  /**
   * Parse a response from the LLM
   */
  private parseResponse(response: string): {
    thought?: string;
    content?: string;
    action?: { tool: string; input: string };
    error?: string;
    isFinalAnswer: boolean;
  } {
    const parsed = jsonParse<LlmResponseFormat>(response);

    if (!parsed) {
      // Fallback: treat unparseable responses as final answers with the raw content
      // This prevents infinite loops when LLM doesn't follow the expected format
      return {
        content: response.trim(),
        thought:
          "LLM response could not be parsed as expected JSON format, treating as direct answer",
        isFinalAnswer: true,
      };
    }

    const isSkillsLoadingTool = parsed.action?.tool_name === "load_skills_from";
    const thought = parsed.thought?.trim() || "";
    const content = parsed.response_to_user?.trim();
    const isFinalAnswer = isSkillsLoadingTool
      ? false
      : parsed.is_final_answer || false;

    // If final answer, ignore any actions
    if (isFinalAnswer) {
      return { thought, content, isFinalAnswer };
    }

    const toolName = parsed.action?.tool_name?.trim().toLowerCase();

    // Return action only if it's a valid tool
    if (
      parsed.action?.tool_name &&
      parsed.action?.tool_input &&
      toolName &&
      toolName !== "none" &&
      this.tools.has(toolName)
    ) {
      return {
        thought,
        content,
        action: {
          tool: toolName,
          input:
            typeof parsed.action.tool_input === "string"
              ? parsed.action.tool_input
              : JSON.stringify(parsed.action.tool_input),
        },
        isFinalAnswer,
      };
    }

    return { thought, content, isFinalAnswer };
  }

  /**
   * Execute a tool
   */
  private async executeTool(
    toolName: string,
    toolInput: string,
    context?: C
  ): Promise<string> {
    const tool = this.tools.get(toolName);
    if (!tool) {
      return JSON.stringify({ error: `Tool '${toolName}' not found` });
    }

    try {
      const parsedInput = jsonParse(toolInput);
      if (!parsedInput) {
        return JSON.stringify({ error: "Invalid JSON input" });
      }

      const validatedInput = tool.schema.parse(parsedInput);
      const result = await tool.execute(validatedInput, context as C);

      return JSON.stringify(result);
    } catch (error: unknown) {
      if (error instanceof z.ZodError) {
        return JSON.stringify({
          error: `Invalid tool input - ${error.issues
            .map((e) => e.message)
            .join(", ")}`,
        });
      }
      if (error instanceof SyntaxError) {
        return JSON.stringify({ error: "Invalid JSON input" });
      }
      return JSON.stringify({
        error: error instanceof Error ? error.message : "Tool execution failed",
      });
    }
  }

  /**
   * Run the agent
   */
  async run({
    message,
    history = [],
    onMessage,
    onStreamingChunk,
    context,
  }: {
    message?: Message;
    history?: Message[];
    onMessage?: OnMessage;
    onStreamingChunk?: StreamingCallback;
    context?: C;
  }): Promise<Message[]> {
    const messages: Message[] = [];

    const addMessage = async (message: Message) => {
      const messageWithTimestamp = {
        ...message,
        timestamp:
          message.timestamp ||
          formatDateTime({
            timeZone: this.timeZone,
            locale: this.locale,
          }).now,
      };

      messages.push(messageWithTimestamp);
      if (onMessage) {
        await onMessage(messageWithTimestamp);
      }
    };

    if (message) {
      await addMessage(message);
    }

    let isRunning = true;
    let steps = 0;

    while (isRunning) {
      steps++;
      if (steps > this.maxSteps) {
        console.warn(
          `Agent reached maximum steps (${this.maxSteps}). This may indicate an infinite loop or complex workflow.`
        );
        await addMessage({
          role: "assistant",
          content:
            "I apologize, but I seem to be stuck. Please try rephrasing your request or breaking it down into smaller steps.",
          metadata: {
            reasoning: {
              thought: `Maximum number of running steps (${this.maxSteps}) reached. Stopping to prevent infinite loop.`,
              isFinalAnswer: true,
            },
          },
          timestamp: formatDateTime({
            timeZone: this.timeZone,
            locale: this.locale,
          }).now,
        });
        break;
      }

      // Build the prompt with the system prompt
      const prompt = this.buildPrompt(
        [...history, ...messages],
        this._systemPrompt
      );
      const response = await this.callLlm(prompt, onStreamingChunk);

      if (!response) {
        throw new Error("Failed to get response from LLM");
      }

      const parsed = this.parseResponse(response.content);

      if (parsed.content || parsed.thought) {
        await addMessage({
          role: "assistant",
          content: parsed.content,
          metadata: {
            ...(parsed.error
              ? {
                  error: {
                    message: parsed.error,
                    prompt: prompt,
                    response: response.content,
                  },
                }
              : {}),
            ...(parsed.thought
              ? {
                  reasoning: {
                    thought: parsed.thought,
                    isFinalAnswer: parsed.isFinalAnswer,
                  },
                }
              : {}),
            usage: response.usage,
          },
          timestamp: formatDateTime({
            timeZone: this.timeZone,
            locale: this.locale,
          }).now,
        });
      }

      if (parsed.isFinalAnswer) {
        break;
      }

      if (!parsed.action) {
        continue;
      }

      const toolOutput = await this.executeTool(
        parsed.action.tool,
        parsed.action.input,
        context
      );

      // Check if this was a skills loading tool call
      if (parsed.action.tool === "load_skills_from") {
        try {
          const parsedOutput = jsonParse<{ status: string }>(toolOutput);
          if (parsedOutput?.status === "success") {
            // Stop processing with this agent - the orchestrator will take over
            isRunning = false;
          }
        } catch (error: unknown) {
          console.error("Error parsing handoff tool output:", error);
        }
      }

      // Parse the tool output safely
      // If parsing fails, wrap the raw output in an object
      const parsedToolOutput: SerializableValue =
        jsonParse(toolOutput) ||
        ({
          error: `Failed to parse tool output: ${toolOutput}`,
        } as SerializableValue);

      await addMessage({
        role: "tool",
        metadata: {
          tool: {
            name: parsed.action.tool,
            input: jsonParse(parsed.action.input) || null,
            output: parsedToolOutput,
          },
        },
        timestamp: formatDateTime({
          timeZone: this.timeZone,
          locale: this.locale,
        }).now,
      });
    }

    return messages;
  }
}
