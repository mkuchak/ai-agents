import { jsonrepair } from "jsonrepair";
import type {
  RawStreamObject,
  ThoughtObject,
  ToolResultObject,
  TransformedMessage,
} from "../types/message";

export class StreamingStateParser {
  // Buffer for the current (potentially incomplete) JSON object
  private currentJsonChunk: string = "";
  // List of already completed and transformed messages
  private completedMessages: TransformedMessage[] = [];
  private onUpdate: (messages: TransformedMessage[]) => void;

  constructor(onUpdate: (messages: TransformedMessage[]) => void) {
    this.onUpdate = onUpdate;
  }

  /**
   * Finalizes processing, ensuring the last chunk is processed.
   */
  public finish(): void {
    // Force a final update with the last buffer
    this.parseAndEmit();
  }

  public processChunk(chunk: string): void {
    this.currentJsonChunk += chunk;
    this.parseAndEmit();
  }

  private transformRawObject(
    rawObject: RawStreamObject
  ): TransformedMessage | null {
    if (
      !rawObject ||
      typeof rawObject !== "object" ||
      Object.keys(rawObject).length === 0
    ) {
      return null;
    }

    // Type guard for tool result
    if ("is_tool_result" in rawObject && rawObject.is_tool_result === true) {
      const toolResult = rawObject as ToolResultObject;
      return {
        role: "tool",
        metadata: {
          tool: {
            name: toolResult.name,
            input: toolResult.input,
            output: toolResult.output,
          },
        },
      };
    }

    // Type guard for thought object
    if ("thought" in rawObject) {
      const thoughtObj = rawObject as ThoughtObject;
      const message: TransformedMessage = {
        role: "assistant",
        metadata: {
          reasoning: {
            thought: thoughtObj.thought,
            isFinalAnswer: thoughtObj.is_final_answer === true,
          },
        },
      };
      if (thoughtObj.response_to_user) {
        message.content = thoughtObj.response_to_user;
      }
      return message;
    }
    return null;
  }

  private parseAndEmit(): void {
    // Regex to find boundaries between JSON objects: `}` followed by `{`
    const jsonBoundaries = /}(?=\s*?{)/g;
    const parts = this.currentJsonChunk.split(jsonBoundaries);

    // If `split` returned more than one part, it means one or more JSONs were completed
    if (parts.length > 1) {
      const completeJsonStrings = parts.slice(0, -1);

      for (const str of completeJsonStrings) {
        const completeJson = `${str}}`; // Add the '}' removed by split
        try {
          const parsed = JSON.parse(completeJson);
          const transformed = this.transformRawObject(parsed);
          if (transformed) {
            this.completedMessages.push(transformed);
          }
        } catch (e) {
          console.error("Error processing complete JSON:", completeJson, e);
        }
      }
      // The new chunk to be processed is the last part, which is incomplete
      this.currentJsonChunk = parts[parts.length - 1] || "";
    }

    // Now, try to process the current chunk (which may be partial)
    let currentPartialMessage: TransformedMessage | null = null;
    if (this.currentJsonChunk.trim()) {
      try {
        const repaired = jsonrepair(this.currentJsonChunk);
        const parsed = JSON.parse(repaired);
        currentPartialMessage = this.transformRawObject(parsed);
      } catch {
        // Ignore errors from parsing very incomplete JSON
      }
    }

    // Build the final list of messages for the UI
    const allMessages = [...this.completedMessages];
    if (currentPartialMessage) {
      allMessages.push(currentPartialMessage);
    }

    this.onUpdate(allMessages);
  }

  public reset(): void {
    this.currentJsonChunk = "";
    this.completedMessages = [];
  }
}
