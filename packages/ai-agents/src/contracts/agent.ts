import * as z from "zod";

/**
 * Zod schema defining the structure for LLM responses.
 * This schema enforces a consistent format for agent reasoning and decision-making.
 *
 * @example
 * ```typescript
 * const response = {
 *   thought: "I need to calculate 25 * 4",
 *   action: {
 *     tool_name: "calculator",
 *     tool_input: { expression: "25 * 4" }
 *   },
 *   is_final_answer: false
 * };
 * ```
 */
export const llmResponseFormatSchema = z.object({
  thought: z
    .string()
    .describe("Analysis and reasoning about the current situation"),
  response_to_user: z
    .string()
    .optional()
    .describe("Optional response to show to the user"),
  action: z
    .object({
      tool_name: z.string().describe("Name of the tool to use"),
      tool_input: z.any().describe("Input parameters for the tool"),
    })
    .optional(),
  is_final_answer: z
    .boolean()
    .describe("Whether this is the final response or needs more steps"),
});

/**
 * Type representing the structure of an LLM response after parsing.
 * Inferred from the `llmResponseFormatSchema` to ensure type safety.
 */
export type LlmResponseFormat = z.infer<typeof llmResponseFormatSchema>;

/**
 * Information about token usage and costs for LLM calls.
 * Used for tracking resource consumption and billing.
 *
 * @example
 * ```typescript
 * const usage: TokenUsage = {
 *   model: "gpt-4",
 *   inputTokens: 150,
 *   outputTokens: 75,
 *   cost: 0.0045
 * };
 * ```
 */
export type TokenUsage = {
  /** The model used for the LLM call (e.g., "gpt-4", "claude-3") */
  model?: string;
  /** Number of tokens used in the input prompt */
  inputTokens?: number;
  /** Number of tokens generated in the response */
  outputTokens?: number;
  /** Total cost of the LLM call in USD */
  cost?: number;
};

/**
 * Interface for values that can be safely serialized to JSON.
 * Used to ensure tool inputs and outputs can be transmitted across network boundaries.
 *
 * @example
 * ```typescript
 * const toolInput: SerializableValue = {
 *   query: "weather in Paris",
 *   units: "metric",
 *   includeForecast: true
 * };
 * ```
 */
export interface SerializableValue {
  [key: string]: unknown;
}

/**
 * Metadata about tool execution for logging and debugging purposes.
 * Contains the tool name, input parameters, and execution results.
 *
 * @example
 * ```typescript
 * const toolMeta: ToolMetadata = {
 *   name: "calculator",
 *   input: { expression: "25 * 4" },
 *   output: { result: 100, formatted_result: "100" }
 * };
 * ```
 */
export interface ToolMetadata {
  /** The name of the tool that was executed */
  name: string;
  /** The input parameters passed to the tool (null if no input required) */
  input: SerializableValue | null;
  /** The result returned by the tool execution */
  output: SerializableValue;
}

/**
 * Comprehensive metadata attached to messages for tracking execution details.
 * Includes error information, reasoning data, tool execution details, and token usage.
 *
 * @example
 * ```typescript
 * const metadata: Metadata = {
 *   reasoning: {
 *     thought: "User wants to calculate something",
 *     isFinalAnswer: false
 *   },
 *   tool: {
 *     name: "calculator",
 *     input: { expression: "25 * 4" },
 *     output: { result: 100 }
 *   },
 *   usage: {
 *     model: "gpt-4",
 *     inputTokens: 50,
 *     outputTokens: 25,
 *     cost: 0.001
 *   }
 * };
 * ```
 */
export type Metadata = {
  /** Error information if something went wrong during processing */
  error?: {
    /** Human-readable error message */
    message: string;
    /** The prompt that caused the error */
    prompt: string;
    /** The response that triggered the error */
    response: string;
  };
  /** Agent's reasoning and decision-making information */
  reasoning?: {
    /** The agent's internal thought process */
    thought?: string;
    /** Whether this represents the final answer */
    isFinalAnswer?: boolean;
  };
  /** Information about tool execution */
  tool?: ToolMetadata;
  /** Token usage and cost information for the LLM call */
  usage?: TokenUsage;
};

/**
 * Represents a single message in the conversation history.
 * Messages can be from users, assistants, or system/tool execution results.
 *
 * @example
 * ```typescript
 * const userMessage: Message = {
 *   role: "user",
 *   content: "What is 25 * 4?",
 *   timestamp: new Date()
 * };
 *
 * const assistantMessage: Message = {
 *   role: "assistant",
 *   content: "25 * 4 equals 100",
 *   metadata: {
 *     reasoning: { thought: "Need to calculate this", isFinalAnswer: true },
 *     usage: { inputTokens: 10, outputTokens: 5 }
 *   },
 *   timestamp: new Date()
 * };
 * ```
 */
export type Message = {
  /** The role of the message sender ("user", "assistant", "system", "tool") */
  role: string;
  /** The text content of the message (optional for tool/system messages) */
  content?: string;
  /** Additional metadata about message processing */
  metadata?: Metadata;
  /** When the message was created */
  timestamp?: Date;
};

/**
 * Definition of a tool that can be executed by an agent.
 * Tools provide specific capabilities like calculations, API calls, or data processing.
 *
 * @template T - Zod schema type for input validation
 * @template C - Context type passed to the tool during execution
 *
 * @example
 * ```typescript
 * const calculatorTool: Tool = {
 *   name: "calculator",
 *   description: "Performs mathematical calculations",
 *   schema: z.object({
 *     expression: z.string().describe("Math expression to evaluate")
 *   }),
 *   execute: async (input) => {
 *     return { result: eval(input.expression) };
 *   }
 * };
 * ```
 */
export type Tool<T extends z.ZodType = z.ZodType, C = unknown> = {
  /** Unique name identifier for the tool */
  name: string;
  /** Human-readable description of what the tool does */
  description: string;
  /** Zod schema for validating tool input parameters */
  schema: T;
  /**
   * Async function that executes the tool logic
   * @param input - Validated input parameters matching the schema
   * @param context - Optional context data passed from the agent
   * @returns Promise resolving to the tool's output
   */
  execute: (input: z.infer<T>, context?: C) => Promise<unknown>;
};

/**
 * Response structure returned by LLM function calls.
 * Contains the generated content and optional usage statistics.
 *
 * @example
 * ```typescript
 * const llmResponse: CallLlmResponse = {
 *   content: "The weather in Paris is sunny, 22°C",
 *   usage: {
 *     model: "gpt-4",
 *     inputTokens: 25,
 *     outputTokens: 15,
 *     cost: 0.0008
 *   }
 * };
 * ```
 */
export type CallLlmResponse = {
  /** The generated text content from the LLM */
  content: string;
  /** Optional token usage and cost information */
  usage?: TokenUsage;
};

/**
 * Callback function type for handling streaming LLM responses.
 * Called for each chunk of data as it's received from the LLM.
 *
 * @param chunk - A piece of the streaming response text
 *
 * @example
 * ```typescript
 * const streamHandler: StreamingCallback = (chunk: string) => {
 *   process.stdout.write(chunk); // Display chunk in real-time
 * };
 * ```
 */
export type StreamingCallback = (chunk: string) => void;

/**
 * Function type for calling an LLM (Large Language Model).
 * Handles the communication with the underlying AI model.
 *
 * @param input - The prompt/input text to send to the LLM
 * @param onStreamingChunk - Optional callback for handling streaming responses
 * @returns Promise that resolves to the LLM response, or undefined if streaming-only
 *
 * @example
 * ```typescript
 * const geminiLlm: CallLlm = async (input, onStreaming) => {
 *   const response = await gemini.generateContent(input);
 *   return {
 *     content: response.text(),
 *     usage: { inputTokens: 50, outputTokens: 25 }
 *   };
 * };
 * ```
 */
export type CallLlm = (
  input: string,
  onStreamingChunk?: StreamingCallback
) => Promise<CallLlmResponse> | undefined;

/**
 * Callback function type for handling processed messages.
 * Called whenever a message is generated during agent execution.
 *
 * @param message - The message that was processed or generated
 * @returns void or Promise<void> for async processing
 *
 * @example
 * ```typescript
 * const messageHandler: OnMessage = async (message) => {
 *   console.log(`[${message.role}]: ${message.content}`);
 *   await logMessageToDatabase(message);
 * };
 * ```
 */
export type OnMessage = (message: Message) => void | Promise<void>;

/**
 * Core interface that all AI agents must implement.
 * Defines the essential capabilities for agent execution, tool management, and handoff coordination.
 *
 * @template C - Context type that can be passed to the agent during execution
 *
 * @example
 * ```typescript
 * class MyAgent implements AgentInterface {
 *   systemPrompt = "You are a helpful assistant";
 *
 *   enableHandoff() { this.handoffEnabled = true; }
 *   disableHandoff() { this.handoffEnabled = false; }
 *
 *   registerTool(tool) { this.tools.set(tool.name, tool); }
 *
 *   async run({ message, history, onMessage, context }) {
 *     // Agent execution logic here
 *     return [responseMessage];
 *   }
 * }
 * ```
 */
export interface AgentInterface<C = unknown> {
  /** The system prompt that defines the agent's role and behavior */
  systemPrompt: string;

  /** Enable the ability for this agent to hand off tasks to other agents */
  enableHandoff(): void;

  /** Disable handoff capabilities for this agent */
  disableHandoff(): void;

  /**
   * Register a tool that this agent can use
   * @param tool - The tool definition to register
   */
  registerTool<T extends z.ZodType>(tool: Tool<T, C>): void;

  /**
   * Execute the agent with the given parameters
   * @param params - Execution parameters including message, history, and callbacks
   * @returns Promise resolving to array of messages generated during execution
   */
  run(params: {
    /** The current message to process (optional for continuation scenarios) */
    message?: Message;
    /** Previous conversation history */
    history?: Message[];
    /** Callback for handling generated messages */
    onMessage?: OnMessage;
    /** Callback for handling streaming responses */
    onStreamingChunk?: StreamingCallback;
    /** Context data to pass to tools and execution logic */
    context?: C;
  }): Promise<Message[]>;
}

/**
 * Extended agent interface used by the agent registry for management purposes.
 * Includes additional metadata fields for tracking agent identity and capabilities.
 *
 * @template C - Context type that can be passed to the agent during execution
 *
 * @example
 * ```typescript
 * const registeredAgent: ExtendedAgentInterface = {
 *   ...myAgent,
 *   _id: "weather-agent",
 *   _capabilities: ["weather", "forecast", "climate"]
 * };
 * ```
 */
export interface ExtendedAgentInterface<C = unknown> extends AgentInterface<C> {
  /** Unique identifier for this agent instance */
  _id: string;
  /** Array of capability keywords that describe what this agent can do */
  _capabilities: string[];
}
