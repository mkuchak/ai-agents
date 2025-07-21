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
      messages: [...state.messages, userMessage],
      streamingMessages: [],
      error: null,
    }));
  },

  updateStreamingMessages: (messages: TransformedMessage[]) => {
    set({ streamingMessages: messages });
  },

  finalizeChatResponse: () => {
    const { streamingMessages } = get();

    // Convert streaming messages to chat messages
    const newMessages: ChatMessage[] = streamingMessages.map((msg, index) => ({
      id: `${msg.role}-${Date.now()}-${index}`,
      role: msg.role,
      content: msg.content,
      metadata: msg.metadata,
      timestamp: new Date(),
    }));

    set((state) => ({
      messages: [...state.messages, ...newMessages],
      streamingMessages: [],
      state: "idle",
    }));
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
