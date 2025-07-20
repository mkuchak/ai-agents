import type { TokenUsage } from "./llm";
import type { ToolMetadata } from "./tool";

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
