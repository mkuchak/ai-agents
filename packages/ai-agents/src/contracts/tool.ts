import type * as z from "zod";

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
