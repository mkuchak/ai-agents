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
  // Track which messages are currently streaming vs completed
  private messageStates: Map<string, { completed: boolean; startTime: Date }> =
    new Map();
  private messageCounter: number = 0;
  private onUpdate: (messages: TransformedMessage[]) => void;

  constructor(onUpdate: (messages: TransformedMessage[]) => void) {
    this.onUpdate = onUpdate;
  }

  /**
   * Finalizes processing, ensuring the last chunk is processed.
   */
  public finish(): void {
    // Mark all messages as completed
    this.messageStates.forEach((state, _key) => {
      state.completed = true;
    });

    // Try to process any remaining data, but don't fail if it's incomplete
    try {
      this.parseAndEmit();
    } catch (finishError) {
      console.warn("Non-critical error during stream finish:", finishError);
      // Still emit the current completed messages even if final parsing fails
      this.onUpdate([...this.completedMessages]);
    }
  }

  public processChunk(chunk: string): void {
    this.currentJsonChunk += chunk;
    this.parseAndEmit();
  }

  private getMessageKey(
    message: TransformedMessage,
    messageId?: string
  ): string {
    // Create unique key for each individual message
    if (messageId) {
      return messageId;
    }

    if (message.metadata?.reasoning) {
      return `reasoning-${this.messageCounter++}`;
    }
    if (message.metadata?.tool) {
      return `tool-${(message.metadata.tool as any).name || "unknown"}-${this.messageCounter++}`;
    }
    return `unknown-${this.messageCounter++}`;
  }

  private transformRawObject(
    rawObject: RawStreamObject,
    isComplete: boolean = false
  ): TransformedMessage | null {
    if (
      !rawObject ||
      typeof rawObject !== "object" ||
      Object.keys(rawObject).length === 0
    ) {
      return null;
    }

    const now = new Date();

    // Type guard for tool result
    if ("is_tool_result" in rawObject && rawObject.is_tool_result === true) {
      const toolResult = rawObject as ToolResultObject;
      const message: TransformedMessage = {
        role: "tool",
        timestamp: now,
        isStreaming: !isComplete,
        metadata: {
          tool: {
            name: toolResult.name,
            input: toolResult.input,
            output: toolResult.output,
            status: isComplete ? "completed" : "running",
            startTime: now,
            endTime: isComplete ? now : undefined,
          },
        },
      };

      // Create unique key for this specific tool message
      const messageKey = this.getMessageKey(message);
      if (!this.messageStates.has(messageKey)) {
        this.messageStates.set(messageKey, {
          completed: false,
          startTime: now,
        });
      }
      if (isComplete) {
        this.messageStates.get(messageKey)!.completed = true;
      }

      return message;
    }

    // Check for tool start (when we have tool name/input but maybe no output yet)
    if ("name" in rawObject && "input" in rawObject) {
      const toolStart = rawObject as any;
      const message: TransformedMessage = {
        role: "tool",
        timestamp: now,
        isStreaming: !isComplete,
        metadata: {
          tool: {
            name: toolStart.name,
            input: toolStart.input,
            output: toolStart.output || undefined, // Output might not be available yet
            status: isComplete ? "completed" : "running",
            startTime: now,
            endTime: isComplete ? now : undefined,
          },
        },
      };

      // Create unique key for this specific tool message
      const messageKey = this.getMessageKey(message);
      if (!this.messageStates.has(messageKey)) {
        this.messageStates.set(messageKey, {
          completed: false,
          startTime: now,
        });
      }
      if (isComplete) {
        this.messageStates.get(messageKey)!.completed = true;
      }

      return message;
    }

    // Type guard for thought object
    if ("thought" in rawObject) {
      const thoughtObj = rawObject as ThoughtObject;

      // Create unique key for this specific reasoning message
      const messageKey = `reasoning-${this.messageCounter}`;

      // Get or create message state for this unique message
      if (!this.messageStates.has(messageKey)) {
        this.messageStates.set(messageKey, {
          completed: false,
          startTime: now,
        });
      }

      const messageState = this.messageStates.get(messageKey)!;
      const duration = Math.round(
        (now.getTime() - messageState.startTime.getTime()) / 1000
      );

      if (isComplete) {
        messageState.completed = true;
      }

      const message: TransformedMessage = {
        role: "assistant",
        timestamp: now,
        isStreaming: !isComplete,
        metadata: {
          reasoning: {
            thought: thoughtObj.thought,
            isFinalAnswer: thoughtObj.is_final_answer === true,
            isStreaming: !isComplete,
            startTime: messageState.startTime,
            endTime: isComplete ? now : undefined,
            duration: duration,
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
          const transformed = this.transformRawObject(parsed, true); // Mark as complete
          if (transformed) {
            // Each message is unique, so just add it
            this.completedMessages.push(transformed);
          }
        } catch (_e) {
          console.warn(
            "Error processing complete JSON (ignoring):",
            `${completeJson.substring(0, 100)}...`
          );
          // Don't throw error for malformed JSON, just skip it
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
        currentPartialMessage = this.transformRawObject(parsed, false); // Mark as still streaming
      } catch {
        // Ignore errors from parsing very incomplete JSON - this is normal during streaming
      }
    }

    // Build the final list of messages for the UI
    const allMessages = [...this.completedMessages];
    if (currentPartialMessage) {
      // Add the current streaming message
      allMessages.push(currentPartialMessage);
    }

    this.onUpdate(allMessages);
  }

  public reset(): void {
    this.currentJsonChunk = "";
    this.completedMessages = [];
    this.messageStates.clear();
    this.messageCounter = 0;
  }
}
