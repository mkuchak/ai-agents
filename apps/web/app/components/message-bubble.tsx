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
import type {
  Message,
  ReasoningComponent,
  ResponseComponent,
  ToolComponent,
  ToolResultComponent,
} from "../hooks/types";

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
          // Rich assistant message with ordered component stream
          <div className="space-y-4">
            {/* Debug info */}
            {process.env.NODE_ENV === "development" && (
              <div className="rounded bg-gray-100 p-2 text-xs">
                <strong>Debug:</strong>
                <div>
                  Components: {message.componentStream?.length || 0} items
                </div>
                <div>Content: {message.content ? "Yes" : "No"}</div>
                <div>Is Streaming: {message.isStreaming ? "Yes" : "No"}</div>
              </div>
            )}

            {/* Render ordered component stream */}
            {message.componentStream && message.componentStream.length > 0 ? (
              <div className="space-y-3">
                {message.componentStream.map((component) => {
                  if (component.type === "reasoning") {
                    const reasoningComp = component as ReasoningComponent;
                    return (
                      <AIReasoning
                        key={component.id}
                        isStreaming={component.isStreaming}
                        defaultOpen={true}
                      >
                        <AIReasoningTrigger />
                        <AIReasoningContent>
                          {reasoningComp.thought}
                        </AIReasoningContent>
                      </AIReasoning>
                    );
                  }

                  if (component.type === "tool") {
                    const toolComp = component as ToolComponent;

                    // Find corresponding tool result
                    const toolResult = message.componentStream?.find(
                      (comp) =>
                        comp.type === "tool_result" &&
                        (comp as ToolResultComponent).toolId === component.id
                    ) as ToolResultComponent | undefined;

                    return (
                      <AITool key={component.id} defaultOpen={true}>
                        <AIToolHeader
                          name={toolComp.name}
                          status={toolComp.status}
                          description={`Called at ${component.timestamp.toLocaleTimeString()}`}
                        />
                        <AIToolContent>
                          <AIToolParameters parameters={toolComp.input} />
                          {toolResult && (
                            <AIToolResult
                              result={
                                <pre className="whitespace-pre-wrap text-xs">
                                  {typeof toolResult.output === "string"
                                    ? toolResult.output
                                    : JSON.stringify(
                                        toolResult.output,
                                        null,
                                        2
                                      )}
                                </pre>
                              }
                              error={toolResult.error}
                            />
                          )}
                        </AIToolContent>
                      </AITool>
                    );
                  }

                  if (component.type === "response") {
                    const responseComp = component as ResponseComponent;
                    return (
                      <div key={component.id} className="mt-4">
                        <h4 className="mb-2 font-medium text-sm">Response:</h4>
                        <AIResponse>{responseComp.response}</AIResponse>
                        {component.isStreaming && (
                          <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="animate-pulse rounded-full bg-muted-foreground size-2" />
                            <span>Generating response...</span>
                          </div>
                        )}
                      </div>
                    );
                  }

                  // Skip tool_result components as they're rendered with their corresponding tool
                  return null;
                })}
              </div>
            ) : (
              // Fallback for messages without component stream
              <>
                {message.content && (
                  <div className="fallback-content">
                    <h4 className="mb-2 font-medium text-sm">Message:</h4>
                    <AIResponse>{message.content}</AIResponse>
                  </div>
                )}
              </>
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
              !message.content &&
              (!message.componentStream ||
                message.componentStream.length === 0) && (
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
