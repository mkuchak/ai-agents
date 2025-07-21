export type TransformedMessage = {
  role: "assistant" | "tool";
  content?: string;
  metadata: Record<string, unknown>;
};

export type ToolResultObject = {
  is_tool_result: true;
  name: string;
  input: Record<string, unknown>;
  output: Record<string, unknown>;
  timestamp?: string;
};

export type ThoughtObject = {
  thought: string;
  is_final_answer?: boolean;
  response_to_user?: string;
  action?: Record<string, unknown>;
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
};

export type ChatState = "idle" | "loading" | "streaming" | "error";
