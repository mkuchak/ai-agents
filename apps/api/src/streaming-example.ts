import { jsonrepair } from "jsonrepair";

// --- DATA AND SIMULATION ---
const fakeResponse = `{
  "thought": "The user is asking a mathematical question. The current vertical \`assistant\` does not have the capability to perform calculations. I need to load skills from the \`mathematician\` vertical to perform this calculation. After loading the skills, I will use the calculator tool to answer the question.",
  "action": {
   "tool_input": {
    "targetVerticalId": "mathematician"
   },
   "tool_name": "load_skills_from"
  },
  "is_final_answer": false
 }{"is_tool_result":true,"name":"load_skills_from","input":{"targetVerticalId":"mathematician"},"output":{"status":"success","message":"Successfully loaded skills from mathematician."},"timestamp":"2025-07-20T19:57:49.059Z"}{
  "thought": "The user asked a mathematical question. I have successfully loaded the skills from the 'mathematician' vertical. Now I need to use the 'calculator' tool to evaluate the expression '25 * 4'.",
  "action": {
   "tool_input": {
    "expression": "25 * 4"
   },
   "tool_name": "calculator"
  },
  "is_final_answer": false
 }{"is_tool_result":true,"name":"calculator","input":{"expression":"25 * 4"},"output":{"expression":"25 * 4","result":100,"formatted_result":"100"},"timestamp":"2025-07-20T19:57:50.312Z"}{
   "thought": "The user asked for the result of '25 * 4'. I used the 'calculator' tool and obtained the result, which is 100. All tasks have been completed.",
   "response_to_user": "25 multiplied by 4 is 100.",
   "is_final_answer": true
 }`;

async function streamFakeResponse(
  writeFn: (chunk: string) => void | Promise<void>,
  delayMs: number = 10
): Promise<void> {
  for (const char of fakeResponse) {
    await writeFn(char);
    if (delayMs > 0) {
      await new Promise((resolve) => setTimeout(resolve, delayMs));
    }
  }
}

// ======================================================================================
// PARSER IMPLEMENTATION]
// ======================================================================================

type TransformedMessage = {
  role: "assistant" | "tool";
  content?: string;
  metadata: Record<string, unknown>;
};

type ToolResultObject = {
  is_tool_result: true;
  name: string;
  input: Record<string, unknown>;
  output: Record<string, unknown>;
  timestamp?: string;
};

type ThoughtObject = {
  thought: string;
  is_final_answer?: boolean;
  response_to_user?: string;
  action?: Record<string, unknown>;
};

type RawStreamObject =
  | ToolResultObject
  | ThoughtObject
  | Record<string, unknown>;

class StreamingStateParser {
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
        const completeJson = str + "}"; // Add the '}' removed by split
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
}

// ======================================================================================
// REAL-TIME DEMONSTRATION
// ======================================================================================

async function runDemonstration() {
  console.log("Starting real-time streaming demonstration...");
  await new Promise((res) => setTimeout(res, 1500));

  let lastLoggedState = "";

  const onUpdateCallback = (messages: TransformedMessage[]) => {
    // Do not render an empty array at the beginning
    if (messages.length === 0) return;

    const currentState = JSON.stringify(messages, null, 2);
    if (currentState === lastLoggedState) return;
    lastLoggedState = currentState;

    console.clear();
    console.log("--- CURRENT STREAM STATE ---");
    console.log(`[${new Date().toLocaleTimeString()}]`);
    console.log(currentState);
  };

  const parser = new StreamingStateParser(onUpdateCallback);

  await streamFakeResponse((chunk) => parser.processChunk(chunk), 50); // 50ms delay

  // Ensure the last state is rendered correctly
  parser.finish();

  console.log("\n--- STREAMING COMPLETE ---");
  console.log("Final state received:");
  console.log(lastLoggedState);
}

runDemonstration();
