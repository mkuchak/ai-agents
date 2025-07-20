import {
  AIMessage,
  AIMessageAvatar,
  AIMessageContent,
} from "@repo/ui/components/ai/message";
import {
  AIReasoning,
  AIReasoningContent,
  AIReasoningTrigger,
} from "@repo/ui/components/ai/reasoning";
import { AIResponse } from "@repo/ui/components/ai/response";
import {
  AITool,
  AIToolContent,
  AIToolHeader,
  AIToolParameters,
  AIToolResult,
} from "@repo/ui/components/ai/tool";
import type { Message } from "../hooks/types";

interface MessageBubbleProps {
  message: Message;
}

export function MessageBubble({ message }: MessageBubbleProps) {
  console.log("Rendering message:", message);

  return (
    <AIMessage from={message.role}>
      <AIMessageAvatar
        src=""
        name={message.role === "user" ? "You" : "AI Assistant"}
      />

      <AIMessageContent>
        {message.role === "user" ? (
          // Simple user message display
          <AIResponse>{message.content}</AIResponse>
        ) : (
          // Rich assistant message with reasoning, tools, and response
          <div className="space-y-4">
            {/* Debug info */}
            {process.env.NODE_ENV === "development" && (
              <div className="rounded bg-gray-100 p-2 text-xs">
                <strong>Debug:</strong>
                <div>Reasoning: {message.reasoning?.length || 0} items</div>
                <div>Tool Calls: {message.toolCalls?.length || 0} items</div>
                <div>
                  Tool Results: {message.toolResults?.length || 0} items
                </div>
                <div>
                  Final Response: {message.finalResponse ? "Yes" : "No"}
                </div>
                <div>Content: {message.content ? "Yes" : "No"}</div>
                <div>Is Streaming: {message.isStreaming ? "Yes" : "No"}</div>
              </div>
            )}

            {/* Reasoning Section */}
            {message.reasoning && message.reasoning.length > 0 && (
              <div className="reasoning-section">
                <AIReasoning
                  isStreaming={message.isStreaming}
                  defaultOpen={true} // Always open for debugging
                >
                  <AIReasoningTrigger />
                  <AIReasoningContent>
                    {message.reasoning.map((r) => r.thought).join("\n\n")}
                  </AIReasoningContent>
                </AIReasoning>
              </div>
            )}

            {/* Tool Calls Section */}
            {message.toolCalls && message.toolCalls.length > 0 && (
              <div className="space-y-2">
                {message.toolCalls.map((toolCall) => {
                  const toolResult = message.toolResults?.find(
                    (result) => result.name === toolCall.name
                  );

                  return (
                    <AITool key={toolCall.id} defaultOpen={true}>
                      <AIToolHeader
                        name={toolCall.name}
                        status={toolCall.status}
                        description={`Called at ${toolCall.timestamp.toLocaleTimeString()}`}
                      />
                      <AIToolContent>
                        <AIToolParameters parameters={toolCall.input} />
                        {toolResult && (
                          <AIToolResult
                            result={
                              <pre className="whitespace-pre-wrap text-xs">
                                {typeof toolResult.output === "string"
                                  ? toolResult.output
                                  : JSON.stringify(toolResult.output, null, 2)}
                              </pre>
                            }
                            error={toolResult.error}
                          />
                        )}
                      </AIToolContent>
                    </AITool>
                  );
                })}
              </div>
            )}

            {/* Final Response Section */}
            {message.finalResponse && (
              <div className="mt-4">
                <h4 className="mb-2 font-medium text-sm">Response:</h4>
                <AIResponse>{message.finalResponse}</AIResponse>
              </div>
            )}

            {/* Fallback content if no structured data but has content */}
            {!message.finalResponse &&
              (!message.reasoning || message.reasoning.length === 0) &&
              (!message.toolCalls || message.toolCalls.length === 0) &&
              message.content && (
                <div className="fallback-content">
                  <h4 className="mb-2 font-medium text-sm">Message:</h4>
                  <AIResponse>{message.content}</AIResponse>
                </div>
              )}

            {/* Loading indicator for streaming */}
            {message.isStreaming && (
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <div className="size-2 animate-pulse rounded-full bg-muted-foreground" />
                <span>AI is thinking...</span>
              </div>
            )}

            {/* No content warning */}
            {!message.isStreaming &&
              !message.finalResponse &&
              !message.content &&
              (!message.reasoning || message.reasoning.length === 0) &&
              (!message.toolCalls || message.toolCalls.length === 0) && (
                <div className="text-muted-foreground text-sm italic">
                  No content to display
                </div>
              )}
          </div>
        )}
      </AIMessageContent>
    </AIMessage>
  );
}
