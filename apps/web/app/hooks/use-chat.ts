import { jsonrepair } from "jsonrepair";
import { useCallback, useRef, useState } from "react";
import type {
  AgentStreamChunk,
  ChatActions,
  ChatState,
  Message,
  ReasoningComponent,
  ResponseComponent,
  StreamComponent,
  ToolComponent,
  ToolResultComponent,
} from "./types";

interface UseChatOptions {
  apiUrl?: string;
}

interface UseChatReturn extends ChatState, ChatActions {
  injectTestData: () => void;
}

const DEFAULT_API_URL = "http://localhost:3000/chat";

function parseMultipleJsonObjects(text: string): {
  parsed: AgentStreamChunk[];
  remainingBuffer: string;
} {
  const results: AgentStreamChunk[] = [];
  let buffer = text.trim();
  let totalProcessed = 0;

  while (buffer.length > 0) {
    try {
      // Try to find the end of the current JSON object
      let braceCount = 0;
      let inString = false;
      let escapeNext = false;
      let endIndex = -1;
      let foundStart = false;

      for (let i = 0; i < buffer.length; i++) {
        const char = buffer[i];

        if (escapeNext) {
          escapeNext = false;
          continue;
        }

        if (char === "\\") {
          escapeNext = true;
          continue;
        }

        if (char === '"') {
          inString = !inString;
          continue;
        }

        if (!inString) {
          if (char === "{") {
            braceCount++;
            foundStart = true;
          } else if (char === "}") {
            braceCount--;
            if (braceCount === 0 && foundStart) {
              endIndex = i + 1;
              break;
            }
          }
        }
      }

      if (endIndex === -1) {
        // No complete JSON object found, keep remaining buffer
        break;
      }

      const jsonStr = buffer.substring(0, endIndex);
      console.log("Attempting to parse JSON:", jsonStr);

      try {
        const parsed = JSON.parse(jsonStr);
        console.log("Successfully parsed:", parsed);
        results.push(parsed);
        totalProcessed += endIndex;
      } catch (error) {
        console.log("Direct parse failed, trying jsonrepair:", error);
        try {
          const repaired = jsonrepair(jsonStr);
          const parsed = JSON.parse(repaired);
          console.log("Successfully parsed after repair:", parsed);
          results.push(parsed);
          totalProcessed += endIndex;
        } catch (repairError) {
          console.log("Repair also failed, skipping:", repairError);
          // Skip this object and continue from the next character
          totalProcessed += 1;
        }
      }

      // Move to the next JSON object
      buffer = buffer.substring(endIndex).trim();
    } catch (error) {
      console.log("Error in parsing loop:", error);
      break;
    }
  }

  return {
    parsed: results,
    remainingBuffer: text.substring(totalProcessed),
  };
}

export function useChat(options: UseChatOptions = {}): UseChatReturn {
  const { apiUrl = DEFAULT_API_URL } = options;

  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const abortControllerRef = useRef<AbortController | null>(null);

  const injectTestData = useCallback(() => {
    const userMessage: Message = {
      id: `test-user-${Date.now()}`,
      role: "user",
      content: "What is 25 * 4?",
      timestamp: new Date(),
    };

    const mockMessage: Message = {
      id: `test-assistant-${Date.now()}`,
      role: "assistant",
      content: "25 multiplied by 4 is 100.",
      timestamp: new Date(),
      isStreaming: false,
      componentStream: [
        {
          id: "comp-1",
          type: "reasoning",
          thought:
            "The user is asking a mathematical question. The current vertical `assistant` does not have the capability to perform calculations. I need to load skills from the `mathematician` vertical to perform this calculation.",
          timestamp: new Date(),
          isStreaming: false,
        } as ReasoningComponent,
        {
          id: "comp-2",
          type: "tool",
          name: "load_skills_from",
          input: { targetVerticalId: "mathematician" },
          timestamp: new Date(),
          status: "completed",
          isStreaming: false,
        } as ToolComponent,
        {
          id: "comp-3",
          type: "tool_result",
          toolId: "comp-2",
          name: "load_skills_from",
          input: { targetVerticalId: "mathematician" },
          output: {
            status: "success",
            message: "Successfully loaded skills from mathematician.",
          },
          timestamp: new Date(),
          isStreaming: false,
        } as ToolResultComponent,
        {
          id: "comp-4",
          type: "reasoning",
          thought:
            "The user asked a mathematical question. I have successfully loaded the skills from the 'mathematician' vertical. Now I need to use the 'calculator' tool to evaluate the expression '25 * 4'.",
          timestamp: new Date(),
          isStreaming: false,
        } as ReasoningComponent,
        {
          id: "comp-5",
          type: "tool",
          name: "calculator",
          input: { expression: "25 * 4" },
          timestamp: new Date(),
          status: "completed",
          isStreaming: false,
        } as ToolComponent,
        {
          id: "comp-6",
          type: "tool_result",
          toolId: "comp-5",
          name: "calculator",
          input: { expression: "25 * 4" },
          output: {
            expression: "25 * 4",
            result: 100,
            formatted_result: "100",
          },
          timestamp: new Date(),
          isStreaming: false,
        } as ToolResultComponent,
        {
          id: "comp-7",
          type: "reasoning",
          thought:
            "The user asked for the result of '25 * 4'. I used the 'calculator' tool and obtained the result, which is 100. All tasks have been completed.",
          timestamp: new Date(),
          isStreaming: false,
        } as ReasoningComponent,
        {
          id: "comp-8",
          type: "response",
          response: "25 multiplied by 4 is 100.",
          timestamp: new Date(),
          isStreaming: false,
        } as ResponseComponent,
      ],
    };

    console.log("Injecting test data:", { userMessage, mockMessage });
    setMessages([userMessage, mockMessage]);
  }, []);

  const sendMessage = useCallback(
    async (content: string) => {
      if (!content.trim() || isLoading) return;

      const userMessage: Message = {
        id: Date.now().toString(),
        role: "user",
        content: content.trim(),
        timestamp: new Date(),
      };

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "",
        timestamp: new Date(),
        isStreaming: true,
        componentStream: [],
      };

      console.log("Created assistant message:", assistantMessage);

      setMessages((prev) => [...prev, userMessage, assistantMessage]);
      setIsLoading(true);

      // Create abort controller for this request
      abortControllerRef.current = new AbortController();

      try {
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: content }),
          signal: abortControllerRef.current.signal,
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        if (!response.body) {
          throw new Error("Response body is null");
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let buffer = "";

        while (true) {
          const { done, value } = await reader.read();

          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          console.log("Current buffer:", buffer);

          // Parse multiple JSON objects from the buffer
          const { parsed: parsedChunks, remainingBuffer } =
            parseMultipleJsonObjects(buffer);

          // Update buffer to only keep unparsed content
          buffer = remainingBuffer;

          if (parsedChunks.length > 0) {
            for (const parsed of parsedChunks) {
              console.log("Processing parsed chunk:", parsed);

              setMessages((prev) =>
                prev.map((msg) => {
                  if (msg.id !== assistantMessage.id) return msg;

                  const updatedMsg = { ...msg };
                  const currentStream = [...(updatedMsg.componentStream || [])];

                  // Handle tool results - these update existing tool components
                  if (
                    parsed.isToolResult &&
                    parsed.name &&
                    parsed.input &&
                    parsed.output
                  ) {
                    console.log("Adding tool result:", parsed);

                    // Find the most recent tool component with the same name
                    let toolIndex = -1;
                    for (let i = currentStream.length - 1; i >= 0; i--) {
                      const comp = currentStream[i];
                      if (
                        comp &&
                        comp.type === "tool" &&
                        (comp as ToolComponent).name === parsed.name
                      ) {
                        toolIndex = i;
                        break;
                      }
                    }

                    if (toolIndex !== -1 && currentStream[toolIndex]) {
                      // Update the tool status to completed
                      const toolComp = currentStream[
                        toolIndex
                      ] as ToolComponent;
                      const updatedTool: ToolComponent = {
                        ...toolComp,
                        status: "completed",
                        isStreaming: false,
                      };
                      currentStream[toolIndex] = updatedTool;
                    }

                    // Add the tool result as a new component
                    const toolResult: ToolResultComponent = {
                      id: `comp-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
                      type: "tool_result",
                      toolId:
                        toolIndex !== -1 && currentStream[toolIndex]
                          ? currentStream[toolIndex]!.id
                          : "",
                      name: parsed.name,
                      input: parsed.input,
                      output: parsed.output,
                      timestamp: parsed.timestamp
                        ? new Date(parsed.timestamp)
                        : new Date(),
                      isStreaming: false,
                    };

                    currentStream.push(toolResult);
                  }
                  // Handle thoughts/reasoning
                  else if (parsed.thought) {
                    console.log("Adding reasoning:", parsed.thought);

                    const reasoning: ReasoningComponent = {
                      id: `comp-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
                      type: "reasoning",
                      thought: parsed.thought,
                      timestamp: new Date(),
                      isStreaming: !parsed.is_final_answer,
                    };

                    currentStream.push(reasoning);
                  }

                  // Handle tool calls/actions
                  if (parsed.action?.tool_name) {
                    console.log("Adding tool call:", parsed.action);

                    const toolCall: ToolComponent = {
                      id: `comp-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
                      type: "tool",
                      name: parsed.action.tool_name,
                      input: parsed.action.tool_input,
                      timestamp: new Date(),
                      status: "running",
                      isStreaming: false,
                    };

                    currentStream.push(toolCall);
                  }

                  // Handle final response
                  if (parsed.response_to_user) {
                    console.log(
                      "Adding final response:",
                      parsed.response_to_user
                    );

                    const response: ResponseComponent = {
                      id: `comp-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
                      type: "response",
                      response: parsed.response_to_user,
                      timestamp: new Date(),
                      isStreaming: !parsed.is_final_answer,
                    };

                    currentStream.push(response);
                    updatedMsg.content = parsed.response_to_user;
                  }

                  // Mark as complete if final answer
                  if (parsed.is_final_answer) {
                    console.log("Marking as final answer");
                    updatedMsg.isStreaming = false;

                    // Mark all streaming components as complete
                    currentStream.forEach((comp, index) => {
                      if (comp && comp.isStreaming) {
                        const updatedComp = { ...comp, isStreaming: false };
                        currentStream[index] = updatedComp;
                      }
                    });
                  }

                  updatedMsg.componentStream = currentStream;
                  console.log("Updated message:", updatedMsg);
                  return updatedMsg;
                })
              );
            }
          }
        }

        // Mark streaming as complete
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === assistantMessage.id
              ? { ...msg, isStreaming: false }
              : msg
          )
        );
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") {
          console.log("Request aborted");
          return;
        }

        console.error("Error sending message:", error);

        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === assistantMessage.id
              ? {
                  ...msg,
                  content:
                    "Sorry, I encountered an error while processing your request. Please try again.",
                  isStreaming: false,
                }
              : msg
          )
        );
      } finally {
        setIsLoading(false);
        abortControllerRef.current = null;
      }
    },
    [apiUrl, isLoading]
  );

  const stopGeneration = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      setIsLoading(false);

      setMessages((prev) =>
        prev.map((msg) =>
          msg.isStreaming ? { ...msg, isStreaming: false } : msg
        )
      );
    }
  }, []);

  const clearChat = useCallback(() => {
    setMessages([]);
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      setIsLoading(false);
    }
  }, []);

  return {
    messages,
    isLoading,
    sendMessage,
    stopGeneration,
    clearChat,
    injectTestData,
  };
}
