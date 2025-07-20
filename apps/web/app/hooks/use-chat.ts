import { jsonrepair } from "jsonrepair";
import { useCallback, useRef, useState } from "react";
import type {
  AgentReasoning,
  AgentStreamChunk,
  ChatActions,
  ChatState,
  Message,
  ToolCall,
  ToolResult,
} from "./types";

interface UseChatOptions {
  apiUrl?: string;
}

interface UseChatReturn extends ChatState, ChatActions {
  injectTestData: () => void; // Add test function
}

const DEFAULT_API_URL = "http://localhost:3000/chat";

function parseMultipleJsonObjects(text: string): AgentStreamChunk[] {
  const results: AgentStreamChunk[] = [];
  let buffer = text.trim();

  while (buffer.length > 0) {
    try {
      // Try to find the end of the current JSON object
      let braceCount = 0;
      let inString = false;
      let escapeNext = false;
      let endIndex = -1;

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
          } else if (char === "}") {
            braceCount--;
            if (braceCount === 0) {
              endIndex = i + 1;
              break;
            }
          }
        }
      }

      if (endIndex === -1) {
        // No complete JSON object found
        break;
      }

      const jsonStr = buffer.substring(0, endIndex);
      console.log("Attempting to parse JSON:", jsonStr);

      try {
        const parsed = JSON.parse(jsonStr);
        console.log("Successfully parsed:", parsed);
        results.push(parsed);
      } catch (error) {
        console.log("Direct parse failed, trying jsonrepair:", error);
        try {
          const repaired = jsonrepair(jsonStr);
          const parsed = JSON.parse(repaired);
          console.log("Successfully parsed after repair:", parsed);
          results.push(parsed);
        } catch (repairError) {
          console.log("Repair also failed:", repairError);
          // Skip this object and continue
        }
      }

      // Move to the next JSON object
      buffer = buffer.substring(endIndex).trim();
    } catch (error) {
      console.log("Error in parsing loop:", error);
      break;
    }
  }

  return results;
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
      content: "",
      timestamp: new Date(),
      isStreaming: false,
      reasoning: [
        {
          id: "r1",
          thought:
            "The user is asking a mathematical question. The current vertical `assistant` does not have the capability to perform calculations. I need to load skills from the `mathematician` vertical to perform this calculation.",
          timestamp: new Date(),
          isStreaming: false,
        },
        {
          id: "r2",
          thought:
            "The user asked a mathematical question. I have successfully loaded the skills from the 'mathematician' vertical. Now I need to use the 'calculator' tool to evaluate the expression '25 * 4'.",
          timestamp: new Date(),
          isStreaming: false,
        },
      ],
      toolCalls: [
        {
          id: "tc1",
          name: "load_skills_from",
          input: { targetVerticalId: "mathematician" },
          timestamp: new Date(),
          status: "completed",
        },
        {
          id: "tc2",
          name: "calculator",
          input: { expression: "25 * 4" },
          timestamp: new Date(),
          status: "completed",
        },
      ],
      toolResults: [
        {
          id: "tr1",
          toolCallId: "tc1",
          name: "load_skills_from",
          input: { targetVerticalId: "mathematician" },
          output: {
            status: "success",
            message: "Successfully loaded skills from mathematician.",
          },
          timestamp: new Date(),
        },
        {
          id: "tr2",
          toolCallId: "tc2",
          name: "calculator",
          input: { expression: "25 * 4" },
          output: {
            expression: "25 * 4",
            result: 100,
            formatted_result: "100",
          },
          timestamp: new Date(),
        },
      ],
      finalResponse: "25 multiplied by 4 is 100.",
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
        reasoning: [],
        toolCalls: [],
        toolResults: [],
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
          const parsedChunks = parseMultipleJsonObjects(buffer);

          if (parsedChunks.length > 0) {
            // Clear the buffer since we successfully parsed something
            buffer = "";

            for (const parsed of parsedChunks) {
              console.log("Processing parsed chunk:", parsed);

              setMessages((prev) =>
                prev.map((msg) => {
                  if (msg.id !== assistantMessage.id) return msg;

                  const updatedMsg = { ...msg };
                  console.log("Updating message with:", parsed);

                  // Handle tool results
                  if (
                    parsed.isToolResult &&
                    parsed.name &&
                    parsed.input &&
                    parsed.output
                  ) {
                    console.log("Adding tool result:", parsed);
                    const toolResult: ToolResult = {
                      id: Date.now().toString(),
                      toolCallId: `${parsed.name}-${Date.now()}`,
                      name: parsed.name,
                      input: parsed.input,
                      output: parsed.output,
                      timestamp: parsed.timestamp
                        ? new Date(parsed.timestamp)
                        : new Date(),
                    };

                    updatedMsg.toolResults = [
                      ...(updatedMsg.toolResults || []),
                      toolResult,
                    ];

                    // Update corresponding tool call status
                    updatedMsg.toolCalls = (updatedMsg.toolCalls || []).map(
                      (call) =>
                        call.name === parsed.name
                          ? { ...call, status: "completed" as const }
                          : call
                    );
                  }
                  // Handle thoughts/reasoning
                  else if (parsed.thought) {
                    console.log("Adding reasoning:", parsed.thought);
                    const reasoning: AgentReasoning = {
                      id: Date.now().toString(),
                      thought: parsed.thought,
                      timestamp: new Date(),
                      isStreaming: !parsed.is_final_answer,
                    };

                    updatedMsg.reasoning = [
                      ...(updatedMsg.reasoning || []),
                      reasoning,
                    ];
                  }

                  // Handle tool calls/actions
                  if (parsed.action?.tool_name) {
                    console.log("Adding tool call:", parsed.action);
                    const toolCall: ToolCall = {
                      id: Date.now().toString(),
                      name: parsed.action.tool_name,
                      input: parsed.action.tool_input,
                      timestamp: new Date(),
                      status: "running",
                    };

                    updatedMsg.toolCalls = [
                      ...(updatedMsg.toolCalls || []),
                      toolCall,
                    ];
                  }

                  // Handle final response
                  if (parsed.response_to_user) {
                    console.log(
                      "Adding final response:",
                      parsed.response_to_user
                    );
                    updatedMsg.finalResponse = parsed.response_to_user;
                    updatedMsg.content = parsed.response_to_user;
                  }

                  // Mark as complete if final answer
                  if (parsed.is_final_answer) {
                    console.log("Marking as final answer");
                    updatedMsg.isStreaming = false;
                  }

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
          // Request was aborted
          console.log("Request aborted");
          return;
        }

        console.error("Error sending message:", error);

        // Update with error message
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

      // Mark current streaming message as complete
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
