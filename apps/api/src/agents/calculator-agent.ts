import { Agent } from "@repo/ai-agents";
import { z } from "zod";
import { geminiCallLlm } from "../adapters/gemini-call-llm";

export const calculatorAgent = new Agent(
  "You are a calculator agent specialized in mathematical computations. You can perform calculations, solve mathematical expressions, and help with numerical problems. Always use the calculator tool for any mathematical operations, no matter how simple they may seem.",
  geminiCallLlm
);

/**
 * This tool is used to evaluate mathematical expressions using JavaScript syntax.
 *
 * WARNING: This is a demonstration only and should NOT be used in production.
 * For production use, run this in an isolated environment such as a sandbox,
 * serverless function with restricted permissions, or a containerized environment
 * to mitigate security risks. Consider using a proper mathematical expression
 * parser library instead of eval() for better security.
 */
calculatorAgent.registerTool({
  name: "calculator",
  description:
    "Evaluate mathematical expressions using JavaScript syntax. Supports arithmetic operations (+, -, *, /), exponentiation (**), parentheses, and mathematical functions like Math.sqrt(), Math.pow(), Math.sin(), etc.",
  schema: z.object({
    expression: z
      .string()
      .describe("The mathematical expression to evaluate in JavaScript syntax"),
  }),
  execute: async (input) => {
    try {
      // Basic security: only allow mathematical expressions
      const sanitizedExpression = input.expression.trim();

      // Check for potentially dangerous patterns
      const dangerousPatterns = [
        /require\s*\(/,
        /import\s+/,
        /process\./,
        /global\./,
        /console\./,
        /eval\s*\(/,
        /Function\s*\(/,
        /setTimeout/,
        /setInterval/,
      ];

      for (const pattern of dangerousPatterns) {
        if (pattern.test(sanitizedExpression)) {
          throw new Error("Expression contains potentially unsafe operations");
        }
      }

      // Evaluate the mathematical expression
      // biome-ignore lint/security/noGlobalEval: Using eval for mathematical expressions as requested by user
      const result = eval(sanitizedExpression);

      // Validate result is a number
      if (typeof result !== "number" || !Number.isFinite(result)) {
        throw new Error("Expression did not evaluate to a valid number");
      }

      return {
        expression: sanitizedExpression,
        result: result,
        formatted_result: result.toString(),
      };
    } catch (error) {
      return {
        expression: input.expression,
        error:
          error instanceof Error ? error.message : "Unknown error occurred",
        result: null,
      };
    }
  },
});
