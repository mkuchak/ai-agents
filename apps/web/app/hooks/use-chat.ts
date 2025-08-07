import { useCallback, useEffect, useRef } from "react";
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
    loadMessages,
  } = useChatStore();

  const abortControllerRef = useRef<AbortController | null>(null);
  const parserRef = useRef<StreamingStateParser | null>(null);

  // Load existing messages on mount
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch("http://localhost:3000/messages");
        if (response.ok) {
          const existingMessages = await response.json();
          loadMessages(existingMessages);
        }
      } catch (error) {
        console.warn("Failed to load existing messages:", error);
        // Don't show error to user for this - it's not critical
      }
    };

    fetchMessages();
  }, [loadMessages]);

  const sendMessage = useCallback(
    async (message: string) => {
      if (state === "loading" || state === "streaming") {
        return;
      }

      try {
        // Add user message to store
        addUserMessage(message);
        setState("loading");
        setError(null); // Clear any previous errors

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
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        if (!response.body) {
          throw new Error("No response body received from server");
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
          try {
            finalizeChatResponse();
          } catch (finalizeError) {
            console.error("Error finalizing chat response:", finalizeError);
            setState("idle"); // Set to idle even if finalization fails
          }
        } catch (streamError) {
          // Only log actual streaming errors, not normal completion
          if (streamError instanceof Error) {
            console.error("Stream reading error:", streamError);
            // Only show error if it's not a normal stream completion
            if (
              !streamError.message.includes("input stream") &&
              !streamError.message.includes("done") &&
              streamError.name !== "AbortError"
            ) {
              setError(`Streaming error: ${streamError.message}`);
              setState("idle"); // Ensure we set to idle even on error
              return; // Don't finalize if there was a real error
            }
          }

          // If it's just a normal stream completion error, continue with finalization
          try {
            parserRef.current?.finish();
            finalizeChatResponse();
          } catch (finalizeError) {
            console.error(
              "Error finalizing after stream completion:",
              finalizeError
            );
            setState("idle");
          }
        } finally {
          try {
            reader.releaseLock();
          } catch (_releaseError) {
            // Ignore errors when releasing lock - stream might already be closed
            console.log("Stream already closed, ignoring release error");
          }
          // Always ensure we're in idle state after streaming
          setState("idle");
        }
      } catch (error) {
        if (error instanceof Error) {
          if (error.name === "AbortError") {
            // Request was aborted, don't show error
            setState("idle");
          } else {
            console.error("Network error:", error);
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
