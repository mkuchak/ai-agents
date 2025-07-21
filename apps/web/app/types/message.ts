export type TransformedMessage = {
  role: "assistant" | "tool";
  content?: string;
  metadata: Record<string, unknown>;
  timestamp: Date;
  isStreaming?: boolean;
};

export type ToolResultObject = {
  is_tool_result: true;
  name: string;
  input: Record<string, unknown>;
  output: Record<string, unknown>;
  timestamp?: string;
  status?: "pending" | "running" | "completed" | "error";
  startTime?: Date;
  endTime?: Date;
};

export type ThoughtObject = {
  thought: string;
  is_final_answer?: boolean;
  response_to_user?: string;
  action?: Record<string, unknown>;
  startTime?: Date;
  endTime?: Date;
  duration?: number;
  isStreaming?: boolean;
};

export type RawStreamObject =
  | ToolResultObject
  | ThoughtObject
  | Record<string, unknown>;

export type ChatMessage = {
  id: string;
  role: "user" | "assistant" | "tool";
  content?: string;
  metadata?: Record<string, unknown>;
  timestamp: Date;
  isStreaming?: boolean;
  status?: "pending" | "running" | "completed" | "error";
};

export type ChatState = "idle" | "loading" | "streaming" | "error";
