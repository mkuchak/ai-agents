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
 *   process.stdout.write(chunk); // Display text chunk in real-time
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
