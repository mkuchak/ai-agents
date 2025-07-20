export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  isStreaming?: boolean;
  // New ordered stream structure
  componentStream?: StreamComponent[];
}

// Ordered components in the stream
export interface StreamComponent {
  id: string;
  type: "reasoning" | "tool" | "tool_result" | "response";
  timestamp: Date;
  isStreaming?: boolean;
  content?: string; // For incremental streaming updates
}

export interface ReasoningComponent extends StreamComponent {
  type: "reasoning";
  thought: string;
}

export interface ToolComponent extends StreamComponent {
  type: "tool";
  name: string;
  input: Record<string, unknown>;
  status: "pending" | "running" | "completed" | "error";
}

export interface ToolResultComponent extends StreamComponent {
  type: "tool_result";
  toolId: string; // Links to the corresponding tool component
  name: string;
  input: Record<string, unknown>;
  output: unknown;
  error?: string;
}

export interface ResponseComponent extends StreamComponent {
  type: "response";
  response: string;
}

// Legacy types for backward compatibility
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
