import { useCallback, useRef } from "react";
import { useChatStore } from "../stores/chat-store";
import { StreamingStateParser } from "../utils/streaming-parser";

export function useChat() {
  const {
    messages,
    streamingMessages,
    state,
    error,
    addUserMessage,
    updateStreamingMessages,
    finalizeChatResponse,
    setState,
    setError,
    clearMessages,
  } = useChatStore();

  const abortControllerRef = useRef<AbortController | null>(null);
  const parserRef = useRef<StreamingStateParser | null>(null);

  const sendMessage = useCallback(
    async (message: string) => {
      if (state === "loading" || state === "streaming") {
        return;
      }

      try {
        // Add user message to store
        addUserMessage(message);
        setState("loading");

        // Create abort controller for this request
        abortControllerRef.current = new AbortController();

        // Initialize parser
        parserRef.current = new StreamingStateParser((messages) => {
          updateStreamingMessages(messages);
        });

        // Make request to chat API
        const response = await fetch("http://localhost:3000/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message }),
          signal: abortControllerRef.current.signal,
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        if (!response.body) {
          throw new Error("No response body received");
        }

        setState("streaming");

        // Create reader for streaming response
        const reader = response.body.getReader();
        const decoder = new TextDecoder();

        try {
          while (true) {
            const { done, value } = await reader.read();

            if (done) {
              break;
            }

            // Decode chunk and process with parser
            const chunk = decoder.decode(value, { stream: true });
            parserRef.current?.processChunk(chunk);
          }

          // Finalize parsing
          parserRef.current?.finish();

          // Convert streaming messages to final messages
          finalizeChatResponse();
        } finally {
          reader.releaseLock();
        }
      } catch (error) {
        if (error instanceof Error) {
          if (error.name === "AbortError") {
            // Request was aborted, don't show error
            setState("idle");
          } else {
            setError(error.message);
          }
        } else {
          setError("An unexpected error occurred");
        }
      } finally {
        abortControllerRef.current = null;
        parserRef.current = null;
      }
    },
    [
      state,
      addUserMessage,
      updateStreamingMessages,
      finalizeChatResponse,
      setState,
      setError,
    ]
  );

  const stopGeneration = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      setState("idle");
    }
  }, [setState]);

  const isLoading = state === "loading" || state === "streaming";

  return {
    messages,
    streamingMessages,
    state,
    error,
    isLoading,
    sendMessage,
    stopGeneration,
    clearMessages,
  };
}
