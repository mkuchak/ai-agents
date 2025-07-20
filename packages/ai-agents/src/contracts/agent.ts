import type * as z from "zod";
import type { StreamingCallback } from "./llm";
import type { Message, OnMessage } from "./message";
import type { Tool, ToolResultStreamingCallback } from "./tool";

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
    /** Callback for handling tool execution results in streaming mode */
    onToolResult?: ToolResultStreamingCallback;
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
