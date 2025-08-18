import dedent from "dedent";
import type { AgentInterface } from "../contracts/agent";
import type {
  LlmInteractionCallback,
  StreamingCallback,
} from "../contracts/llm";
import type { Message, OnMessage } from "../contracts/message";
import type { OrchestratorContext } from "../contracts/orchestrator";
import type { ToolResultStreamingCallback } from "../contracts/tool";
import { AgentRegistry } from "./agent-registry";
import { handoffTool } from "./handoff-tool";

/**
 * AgentOrchestrator handles the coordination of multiple agents,
 * managing handoffs between them while maintaining a single conversation thread.
 */
export class AgentOrchestrator {
  private agents: Map<string, AgentInterface<{ currentVerticalId?: string }>> =
    new Map();
  private gatekeeperAgentId: string;
  private maxSteps: number;

  /**
   * Creates a new AgentOrchestrator instance
   * @param gatekeeperAgentId The ID of the agent that will act as the primary/default agent
   * @param maxSteps Maximum number of steps allowed before stopping to prevent infinite loops
   */
  constructor(gatekeeperAgentId: string, maxSteps: number = 12) {
    this.gatekeeperAgentId = gatekeeperAgentId;
    this.maxSteps = maxSteps;
  }

  /**
   * Registers an agent with the orchestrator and the registry
   * @param agentId Unique ID for the agent
   * @param agent Agent instance
   * @param capabilities Array of capabilities this agent has
   */
  registerAgent(
    agentId: string,
    agent: AgentInterface<{ currentVerticalId?: string }>,
    capabilities: string[] = []
  ): void {
    // Register with the registry
    AgentRegistry.getInstance().registerAgent(agentId, agent, capabilities);

    // Store locally for direct access
    this.agents.set(agentId, agent);

    // Register the handoff tool with this agent
    agent.registerTool(handoffTool);
  }

  /**
   * Generates information about available agents and their capabilities
   * to be injected into system prompts
   */
  private generateAgentCapabilitiesInfo(currentAgentId: string): string {
    const agentIds = AgentRegistry.getInstance().getAllAgentIds();

    if (agentIds.length <= 1) {
      return ""; // No need to add handoff info if there's only one agent
    }

    const agentInfos = agentIds.map((agentId) => {
      const registeredAgent = AgentRegistry.getInstance().getAgent(agentId);
      const capabilities = registeredAgent?._capabilities || [];
      return `* The vertical agent ID \`${agentId}\` can ${capabilities.join(", ")}`;
    });

    return dedent`
      <verticals_info>
        <!-- ATTENTION: IF YOU DISREGARD THESE RULES, THE SYSTEM WILL COLLAPSE -->
        <!-- BE AWARE, THAT YOU ARE IN THE ${currentAgentId} VERTICAL CURRENTLY, THIS IS THE SOURCE OF THE TRUTH ABOUT THE CURRENT VERTICAL -->
        <current_vertical>${currentAgentId}</current_vertical>

        <available_verticals>
          ${agentInfos.join("\n          ")}
        </available_verticals>

        <vertical_system_explanation>
          * You are currently operating in the ${currentAgentId} vertical domain.
          * If needed, you can load skills from other verticals for specialized capabilities.
          * WHEN CHANGE THE VERTICAL CALL THE \`load_skills_from\` TOOL TO LOAD THE SKILLS FROM THE NEW VERTICAL WITH THE EXACTELY TARGET VERTICAL ID
        </vertical_system_explanation>
      </verticals_info>
    `;
  }

  /**
   * Injects agent capabilities information into an agent's system prompt
   * @param originalSystemPrompt The original system prompt of the agent
   * @param agentId The ID of the agent receiving this system prompt
   * @returns An enhanced system prompt with agent capabilities
   */
  private injectAgentCapabilitiesInfo(
    originalSystemPrompt: string,
    agentId: string
  ): string {
    const agentCapabilitiesInfo = this.generateAgentCapabilitiesInfo(agentId);

    // If there's no capabilities info (only one agent registered), return the original prompt
    if (!agentCapabilitiesInfo) {
      return originalSystemPrompt;
    }

    // First check if the verticals information is already present
    if (originalSystemPrompt.includes("<verticals_info>")) {
      return originalSystemPrompt; // Already injected
    }

    // Just append to the beginning of the system prompt
    return `${agentCapabilitiesInfo}\n\n${originalSystemPrompt}`;
  }

  /**
   * Runs a user message by routing it through the appropriate agent
   * and handling any handoffs that occur
   *
   * @param params Object containing the parameters for the run method
   * @param params.message The user's message
   * @param params.history Previous conversation history
   * @param params.context Context information including account ID
   * @param params.onMessage Callback for processing messages
   * @param params.onToolResult Callback for handling tool execution results
   * @param params.preferredAgentId Optional agent ID to use instead of gatekeeper
   * @returns All messages generated during processing
   */
  async run({
    message,
    history = [],
    context = {},
    onMessage,
    onStreamingChunk,
    onLlmInteraction,
    onToolResult,
    preferredAgentId,
  }: {
    message: Message;
    history?: Message[];
    context?: OrchestratorContext;
    onMessage?: OnMessage;
    onStreamingChunk?: StreamingCallback;
    onLlmInteraction?: LlmInteractionCallback;
    onToolResult?: ToolResultStreamingCallback;
    preferredAgentId?: string;
  }): Promise<Message[]> {
    // Create a new sequence for each execution
    const handoffSequence: string[] = [];

    // Start with either the preferred agent or the gatekeeper
    const agentId = preferredAgentId || this.gatekeeperAgentId;
    return this.invokeAgent({
      agentId,
      message,
      history,
      context,
      onMessage,
      onStreamingChunk,
      onLlmInteraction,
      onToolResult,
      steps: 0,
      handoffSequence, // Pass the sequence as a parameter
    });
  }

  /**
   * Invokes a specific agent and handles potential handoffs
   *
   * @param agentId ID of the agent to invoke
   * @param message Message to process
   * @param history Conversation history
   * @param context Context information
   * @param onMessage Callback for processing messages
   * @param onStreamingChunk Callback for streaming chunks
   * @param onLlmInteraction Callback for handling LLM interactions
   * @param onToolResult Callback for handling tool execution results
   * @param steps Current number of steps taken
   * @param handoffSequence Current handoff sequence (array of agent IDs)
   * @returns All messages generated during processing
   */
  private async invokeAgent({
    agentId,
    message,
    history,
    context,
    onMessage,
    onStreamingChunk,
    onLlmInteraction,
    onToolResult,
    steps,
    handoffSequence,
  }: {
    agentId: string;
    message?: Message;
    history: Message[];
    context: OrchestratorContext;
    onMessage?: OnMessage;
    onStreamingChunk?: StreamingCallback;
    onLlmInteraction?: LlmInteractionCallback;
    onToolResult?: ToolResultStreamingCallback;
    steps: number;
    handoffSequence: string[];
  }): Promise<Message[]> {
    // Check if we've exceeded the maximum number of steps
    if (steps >= this.maxSteps) {
      const errorMessage: Message = {
        role: "assistant",
        content:
          "I apologize, but I seem to be stuck in a loop. Please try rephrasing your request or breaking it down into smaller steps.",
        metadata: {
          reasoning: {
            thought:
              "Maximum number of steps reached. Stopping to prevent infinite loop.",
            isFinalAnswer: true,
          },
        },
      };
      await onMessage?.(errorMessage);
      return [errorMessage];
    }

    const agent = this.agents.get(agentId);
    if (!agent) {
      throw new Error(`Agent with ID ${agentId} not found`);
    }

    // Track this agent in the handoff sequence
    handoffSequence.push(agentId);

    // Create a storage for all messages produced during this invocation
    const allMessages: Message[] = [];

    // The wrapped onMessage callback that stores messages and forwards them
    const wrappedOnMessage: OnMessage = async (msg) => {
      allMessages.push(msg);
      await onMessage?.(msg);
    };

    // Temporarily store original system prompt
    const originalSystemPrompt = agent.systemPrompt;

    // Inject agent capabilities information into system prompt
    if (originalSystemPrompt) {
      const enhancedSystemPrompt = this.injectAgentCapabilitiesInfo(
        originalSystemPrompt,
        agentId
      );
      agent.systemPrompt = enhancedSystemPrompt;
    }

    try {
      // Run the agent
      await agent.run({
        message,
        history,
        context: { ...context, currentVerticalId: agentId },
        onMessage: wrappedOnMessage,
        onStreamingChunk,
        onLlmInteraction,
        onToolResult,
      });

      // Check if skills loading was requested
      const lastToolMessage = allMessages
        .filter(
          (msg) =>
            msg.role === "tool" &&
            msg.metadata?.tool?.name === "load_skills_from"
        )
        .pop();

      if (lastToolMessage?.metadata?.tool?.input?.targetVerticalId) {
        const targetVerticalId =
          lastToolMessage.metadata?.tool?.input?.targetVerticalId;

        console.log(`Handoff requested from ${agentId} to ${targetVerticalId}`);

        // Get the target agent
        const targetAgent = this.agents.get(targetVerticalId as string);
        if (!targetAgent) {
          console.error(`Target agent ${targetVerticalId} not found`);
          return allMessages;
        }

        const skillsLoadedMessage: Message = {
          role: "system",
          // content: `Task handed off from ${agentId} to ${targetVerticalId}`,
          content: `Vertical ${targetVerticalId} skills were recovered`,
        };

        // Combine full history with current messages, excluding internal skill loading messages
        const fullHistory = [
          ...history,
          ...allMessages.filter(
            (msg) =>
              // Keep messages that are not part of the skills loading mechanism
              msg.role !== "system" &&
              !(
                msg.role === "tool" &&
                msg.metadata?.tool?.name === "load_skills_from"
              )
          ),
          skillsLoadedMessage,
        ];

        // Recursively invoke the target agent with incremented steps
        const targetAgentMessages = await this.invokeAgent({
          agentId: targetVerticalId as string,
          history: fullHistory,
          context,
          onMessage,
          onStreamingChunk,
          onLlmInteraction,
          onToolResult,
          steps: steps + 1,
          handoffSequence,
        });

        // Return all messages, including those from the target agent
        return [...allMessages, ...targetAgentMessages];
      }

      // If no skills loading was requested, return the messages generated by this agent
      return allMessages;
    } finally {
      // Restore original system prompt to avoid accumulating injections
      if (originalSystemPrompt) {
        agent.systemPrompt = originalSystemPrompt;
      }
    }
  }
}
