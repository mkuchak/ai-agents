/** biome-ignore-all lint/suspicious/noExplicitAny: false positive */

export type TransformedMessage = {
  role: "assistant" | "tool";
  content?: string;
  metadata: Record<string, any>;
  timestamp: Date;
  isStreaming?: boolean;
};

export type ToolResultObject = {
  is_tool_result: true;
  name: string;
  input: Record<string, any>;
  output: Record<string, any>;
  timestamp?: string;
  status?: "pending" | "running" | "completed" | "error";
  startTime?: Date;
  endTime?: Date;
};

export type ThoughtObject = {
  thought: string;
  is_final_answer?: boolean;
  response_to_user?: string;
  action?: Record<string, any>;
  startTime?: Date;
  endTime?: Date;
  duration?: number;
  isStreaming?: boolean;
};

export type RawStreamObject =
  | ToolResultObject
  | ThoughtObject
  | Record<string, any>;

export type ChatMessage = {
  id: string;
  role: "user" | "assistant" | "tool";
  content?: string;
  metadata?: Record<string, any>;
  timestamp: Date;
  isStreaming?: boolean;
  status?: "pending" | "running" | "completed" | "error";
};

export type ChatState = "idle" | "loading" | "streaming" | "error";
