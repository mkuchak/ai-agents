import { create } from "zustand";
import type {
  ChatMessage,
  ChatState,
  TransformedMessage,
} from "../types/message";

interface ChatStore {
  messages: ChatMessage[];
  streamingMessages: TransformedMessage[];
  state: ChatState;
  error: string | null;

  // Actions
  addUserMessage: (content: string) => void;
  updateStreamingMessages: (messages: TransformedMessage[]) => void;
  finalizeChatResponse: () => void;
  setState: (state: ChatState) => void;
  setError: (error: string | null) => void;
  clearMessages: () => void;
}

export const useChatStore = create<ChatStore>((set, get) => ({
  messages: [],
  streamingMessages: [],
  state: "idle",
  error: null,

  addUserMessage: (content: string) => {
    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content,
      timestamp: new Date(),
    };

    set((state) => ({
      // Mark previous assistant tools as completed when new user message comes
      messages: [
        ...state.messages.map((msg) => {
          if (msg.role === "assistant" && msg.metadata?.tool) {
            return {
              ...msg,
              status: "completed" as const,
              metadata: {
                ...msg.metadata,
                tool: {
                  ...msg.metadata.tool,
                  status: "completed",
                },
              },
            };
          }
          return msg;
        }),
        userMessage,
      ],
      streamingMessages: [],
      error: null,
    }));
  },

  updateStreamingMessages: (messages: TransformedMessage[]) => {
    // Pass through the messages with their individual timing and status information
    // The streaming parser now handles individual message completion tracking
    set({ streamingMessages: messages, error: null }); // Clear errors during streaming
  },

  finalizeChatResponse: () => {
    try {
      const { streamingMessages } = get();

      // Convert streaming messages to chat messages, preserving their individual states
      const newMessages: ChatMessage[] = streamingMessages.map((msg, index) => {
        const finalMessage: ChatMessage = {
          id: `${msg.role}-${Date.now()}-${index}`,
          role: msg.role,
          content: msg.content,
          metadata: msg.metadata,
          timestamp: msg.timestamp,
          isStreaming: false, // All messages are no longer streaming
          status: msg.role === "tool" ? "running" : "completed", // Tools stay running until next user message
        };

        // Update metadata to reflect final state
        if (
          finalMessage.metadata?.reasoning &&
          typeof finalMessage.metadata.reasoning === "object"
        ) {
          const reasoning = finalMessage.metadata.reasoning;
          reasoning.isStreaming = false; // Mark reasoning as no longer streaming
        }

        // Keep tools in running state until next user message
        if (
          finalMessage.metadata?.tool &&
          typeof finalMessage.metadata.tool === "object"
        ) {
          const tool = finalMessage.metadata.tool;
          if (tool.status === "completed") {
            // If already completed by parser, keep it completed
            finalMessage.status = "completed";
          } else {
            // Otherwise, keep it running until next user message
            tool.status = "running";
            finalMessage.status = "running";
          }
        }

        return finalMessage;
      });

      set((state) => ({
        messages: [...state.messages, ...newMessages],
        streamingMessages: [],
        state: "idle",
        error: null, // Clear any errors on successful completion
      }));
    } catch (error) {
      console.error("Error in finalizeChatResponse:", error);
      // Still try to set state to idle even if there's an error
      set((_state) => ({
        streamingMessages: [],
        state: "idle",
      }));
    }
  },

  setState: (state: ChatState) => {
    set({ state });
  },

  setError: (error: string | null) => {
    set({ error, state: error ? "error" : "idle" });
  },

  clearMessages: () => {
    set({
      messages: [],
      streamingMessages: [],
      state: "idle",
      error: null,
    });
  },
}));
