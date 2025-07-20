export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  isStreaming?: boolean;
  // New structured data for AI agent responses
  reasoning?: AgentReasoning[];
  toolCalls?: ToolCall[];
  toolResults?: ToolResult[];
  finalResponse?: string;
}

// New types for structured AI agent data
export interface AgentReasoning {
  id: string;
  thought: string;
  timestamp: Date;
  isStreaming?: boolean;
}

export interface ToolCall {
  id: string;
  name: string;
  input: Record<string, unknown>;
  timestamp: Date;
  status: "pending" | "running" | "completed" | "error";
}

export interface ToolResult {
  id: string;
  toolCallId: string;
  name: string;
  input: Record<string, unknown>;
  output: unknown;
  timestamp: Date;
  error?: string;
}

export interface AgentStreamChunk {
  thought?: string;
  action?: {
    tool_name: string;
    tool_input: Record<string, unknown>;
  };
  response_to_user?: string;
  is_final_answer: boolean;
  isToolResult?: boolean;
  name?: string;
  input?: Record<string, unknown>;
  output?: unknown;
  timestamp?: string;
}

export interface ChatState {
  messages: Message[];
  isLoading: boolean;
}

export interface ChatActions {
  sendMessage: (content: string) => Promise<void>;
  stopGeneration: () => void;
  clearChat: () => void;
}
