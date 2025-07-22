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

      // Use a stable key for the current reasoning session
      // Since reasoning happens sequentially, we can use a single key
      const messageKey = `reasoning-current`;

      // Get or create message state for this specific reasoning session
      if (!this.messageStates.has(messageKey)) {
        this.messageStates.set(messageKey, {
          completed: false,
          startTime: now,
        });
      } else {
        // If this is a new reasoning session (not just an update), reset the start time
        const currentState = this.messageStates.get(messageKey)!;
        if (currentState.completed) {
          // Previous session was completed, start a new one
          this.messageStates.set(messageKey, {
            completed: false,
            startTime: now,
          });
        }
      }

      const messageState = this.messageStates.get(messageKey)!;
      const durationInSeconds =
        (now.getTime() - messageState.startTime.getTime()) / 1000;
      // Format duration: show 2 decimal places if less than 1 second, otherwise round to nearest integer
      const duration =
        durationInSeconds < 1
          ? Math.round(durationInSeconds * 100) / 100
          : Math.round(durationInSeconds);

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
    // Find complete JSON objects by tracking braces while respecting strings
    const completeJsonStrings: string[] = [];
    let currentJson = "";
    let braceCount = 0;
    let inString = false;
    let escapeNext = false;

    for (let i = 0; i < this.currentJsonChunk.length; i++) {
      const char = this.currentJsonChunk[i];
      currentJson += char;

      if (escapeNext) {
        escapeNext = false;
        continue;
      }

      if (char === "\\") {
        escapeNext = true;
        continue;
      }

      if (char === '"' && !escapeNext) {
        inString = !inString;
        continue;
      }

      if (!inString) {
        if (char === "{") {
          braceCount++;
        } else if (char === "}") {
          braceCount--;

          // If we've closed all braces, we have a complete JSON
          if (braceCount === 0 && currentJson.trim().startsWith("{")) {
            completeJsonStrings.push(currentJson.trim());
            currentJson = "";
          }
        }
      }
    }

    // Store remaining incomplete JSON
    this.currentJsonChunk = currentJson;

    // Process complete JSON objects
    if (completeJsonStrings.length > 0) {
      for (const completeJson of completeJsonStrings) {
        try {
          const parsed = JSON.parse(completeJson);
          const transformed = this.transformRawObject(parsed, true); // Mark as complete
          if (transformed) {
            // Each message is unique, so just add it
            this.completedMessages.push(transformed);
          }
        } catch (jsonError) {
          console.warn(
            "⚠️ JSON parsing failed for complete object:",
            jsonError instanceof Error ? jsonError.message : String(jsonError)
          );
          console.warn(
            "📝 JSON content:",
            `${completeJson.substring(0, 150)}...`
          );
          // Don't throw error for malformed JSON, just skip it
        }
      }
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
