import {
  AIConversation,
  AIConversationContent,
  AIConversationScrollButton,
} from "@repo/ui/components/ai/conversation";
import {
  AIInput,
  AIInputSubmit,
  AIInputTextarea,
  AIInputToolbar,
} from "@repo/ui/components/ai/input";
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
  AISources,
  AISourcesContent,
  AISourcesTrigger,
} from "@repo/ui/components/ai/source";
import {
  AITool,
  AIToolContent,
  AIToolHeader,
  AIToolParameters,
  AIToolResult,
} from "@repo/ui/components/ai/tool";
import { Button } from "@repo/ui/components/button";
import { TrashIcon } from "lucide-react";
import { type FormEventHandler, useState } from "react";
import { useChat } from "../hooks/use-chat";
import { ChatSuggestions } from "./chat-suggestions";

export function ChatInterface() {
  const [text, setText] = useState<string>("");
  const {
    messages,
    streamingMessages,
    state,
    error,
    isLoading,
    sendMessage,
    stopGeneration,
    clearMessages,
  } = useChat();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    if (!text.trim() || isLoading) return;

    await sendMessage(text);
    setText("");
  };

  const handleSuggestionClick = async (suggestion: string) => {
    if (isLoading) return;
    await sendMessage(suggestion);
  };

  const getSubmitStatus = () => {
    if (state === "loading") return "submitted";
    if (state === "streaming") return "streaming";
    if (state === "error") return "error";
    return "ready";
  };

  const hasMessages = messages.length > 0 || streamingMessages.length > 0;

  return (
    <div className="flex h-screen w-full flex-col bg-background">
      {/* Header */}
      <div className="sticky top-0 z-10 flex shrink-0 items-center justify-between border-b bg-background/80 p-6 backdrop-blur-sm">
        <div>
          <h1 className="font-bold text-2xl tracking-tight">AI Assistant</h1>
          <p className="text-muted-foreground text-sm">
            Powered by advanced AI agents
          </p>
        </div>
        <Button
          type="button"
          onClick={clearMessages}
          variant="ghost"
          size="sm"
          className="gap-2 text-muted-foreground hover:text-foreground"
        >
          <TrashIcon size={16} />
          Clear
        </Button>
      </div>

      {/* Chat Area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <AIConversation>
          <AIConversationContent className="mx-auto w-full max-w-4xl px-4 py-6">
            {!hasMessages && (
              <div className="flex h-full items-center justify-center">
                <div className="w-full space-y-8 text-center">
                  <div className="space-y-4">
                    <h2 className="font-bold text-3xl tracking-tight">
                      How can I help you today?
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                      I'm your AI assistant, ready to help with coding,
                      explanations, analysis, and much more. Choose a suggestion
                      below or ask anything.
                    </p>
                  </div>
                  <div className="pt-4">
                    <ChatSuggestions
                      onSuggestionClick={handleSuggestionClick}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Messages */}
            <div className="grid w-full gap-1 [&>div]:pb-0">
              {/* Final Messages */}
              {messages.map((message) => (
                <div key={message.id} className="block gap-1 [&>div]:pb-0">
                  {message.role === "user" ? (
                    /* User Message */
                    message.content && (
                      <AIMessage from="user">
                        <AIMessageContent>
                          <AIResponse>{message.content}</AIResponse>
                        </AIMessageContent>
                        <AIMessageAvatar
                          name="You"
                          src="https://github.com/ghost.png"
                        />
                      </AIMessage>
                    )
                  ) : (
                    /* Assistant Message */
                    <div className="space-y-2">
                      {/* Sources - No Avatar */}
                      {message.metadata &&
                        (message.metadata as any).sources && (
                          <AISources>
                            <AISourcesTrigger
                              count={(message.metadata as any).sources.length}
                            />
                            <AISourcesContent>
                              {(message.metadata as any).sources.map(
                                (source: any, idx: number) => (
                                  <div
                                    key={idx}
                                    className="rounded-lg border bg-muted/50 p-3"
                                  >
                                    <a
                                      href={source.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="font-medium text-primary hover:underline"
                                    >
                                      {source.title}
                                    </a>
                                  </div>
                                )
                              )}
                            </AISourcesContent>
                          </AISources>
                        )}

                      {/* Reasoning/Thoughts - No Avatar */}
                      {message.metadata &&
                        (message.metadata as any).reasoning && (
                          <AIReasoning
                            duration={
                              (message.metadata as any).reasoning.duration || 0
                            }
                            isStreaming={
                              (message.metadata as any).reasoning.isStreaming ||
                              false
                            }
                          >
                            <AIReasoningTrigger />
                            <AIReasoningContent>
                              {(message.metadata as any).reasoning.thought ||
                                "Thinking..."}
                            </AIReasoningContent>
                          </AIReasoning>
                        )}

                      {/* Tool Calls - No Avatar */}
                      {message.metadata && (message.metadata as any).tool && (
                        <AITool>
                          <AIToolHeader
                            name={`Tool: ${(message.metadata as any).tool.name || "Unknown"}`}
                            description={`${(message.metadata as any).tool.description || `Executing ${(message.metadata as any).tool.name || "tool"}`}`}
                            status={
                              (message.metadata as any).tool.status ||
                              message.status ||
                              "completed"
                            }
                          />
                          <AIToolContent>
                            {(message.metadata as any).tool.input && (
                              <AIToolParameters
                                parameters={
                                  (message.metadata as any).tool.input
                                }
                              />
                            )}
                            {(message.metadata as any).tool.output && (
                              <AIToolResult
                                result={JSON.stringify(
                                  (message.metadata as any).tool.output,
                                  null,
                                  2
                                )}
                              />
                            )}
                          </AIToolContent>
                        </AITool>
                      )}

                      {/* AI Response Content - With Avatar */}
                      {message.content && (
                        <AIMessage from="assistant">
                          <AIMessageContent>
                            <AIResponse>{message.content}</AIResponse>
                          </AIMessageContent>
                          <AIMessageAvatar
                            name="AI"
                            src="https://github.com/openai.png"
                          />
                        </AIMessage>
                      )}
                    </div>
                  )}
                </div>
              ))}

              {/* Streaming Messages */}
              {streamingMessages.map((message, index) => (
                <div
                  key={`streaming-${index}`}
                  className="block gap-1 [&>div]:pb-0"
                >
                  <div className="space-y-2">
                    {/* Reasoning/Thoughts - No Avatar */}
                    {message.metadata &&
                      (message.metadata as any).reasoning && (
                        <AIReasoning
                          isStreaming={
                            (message.metadata as any).reasoning.isStreaming !==
                            false
                          }
                          duration={
                            (message.metadata as any).reasoning.duration || 0
                          }
                        >
                          <AIReasoningTrigger />
                          <AIReasoningContent>
                            {(message.metadata as any).reasoning.thought ||
                              "Thinking..."}
                          </AIReasoningContent>
                        </AIReasoning>
                      )}

                    {/* Tool Calls - No Avatar */}
                    {message.metadata && (message.metadata as any).tool && (
                      <AITool>
                        <AIToolHeader
                          name={`Tool: ${(message.metadata as any).tool.name || "Unknown"}`}
                          description={`${(message.metadata as any).tool.description || `Executing ${(message.metadata as any).tool.name || "tool"}`}`}
                          status={
                            (message.metadata as any).tool.status || "running"
                          }
                        />
                        <AIToolContent>
                          {(message.metadata as any).tool.input && (
                            <AIToolParameters
                              parameters={(message.metadata as any).tool.input}
                            />
                          )}
                          {(message.metadata as any).tool.output && (
                            <AIToolResult
                              result={JSON.stringify(
                                (message.metadata as any).tool.output,
                                null,
                                2
                              )}
                            />
                          )}
                        </AIToolContent>
                      </AITool>
                    )}

                    {/* AI Response Content - With Avatar */}
                    {message.content && (
                      <AIMessage from="assistant">
                        <AIMessageContent>
                          <AIResponse>{message.content}</AIResponse>
                          <span className="ml-2 inline-flex items-center gap-1 text-muted-foreground">
                            <span className="animate-pulse">●</span>
                            <span className="text-xs">Streaming...</span>
                          </span>
                        </AIMessageContent>
                        <AIMessageAvatar
                          name="AI"
                          src="https://github.com/openai.png"
                        />
                      </AIMessage>
                    )}
                  </div>
                </div>
              ))}

              {/* Loading State */}
              {state === "loading" && (
                <div className="block gap-1 [&>div]:pb-0">
                  <AIMessage from="assistant">
                    <AIMessageContent>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <div className="flex space-x-1">
                          <div className="h-2 w-2 animate-bounce rounded-full bg-current [animation-delay:-0.3s]"></div>
                          <div className="h-2 w-2 animate-bounce rounded-full bg-current [animation-delay:-0.15s]"></div>
                          <div className="h-2 w-2 animate-bounce rounded-full bg-current"></div>
                        </div>
                        <span>Connecting to AI agent...</span>
                      </div>
                    </AIMessageContent>
                    <AIMessageAvatar
                      name="AI"
                      src="https://github.com/openai.png"
                    />
                  </AIMessage>
                </div>
              )}
            </div>
          </AIConversationContent>
          <AIConversationScrollButton />
        </AIConversation>
      </div>

      {/* Suggestions when there are messages - Horizontal scroll */}
      {hasMessages && (
        <div className="border-t bg-background/80 p-4 backdrop-blur-sm">
          <div className="mx-auto max-w-4xl">
            <ChatSuggestions onSuggestionClick={handleSuggestionClick} />
          </div>
        </div>
      )}

      {/* Error Display */}
      {error && (
        <div className="mx-auto mb-4 w-full max-w-4xl px-4">
          <div className="rounded-lg border border-destructive/20 bg-destructive/5 px-4 py-3 text-destructive">
            <div className="flex items-center gap-2">
              <span className="font-medium">Error:</span>
              <span>{error}</span>
            </div>
          </div>
        </div>
      )}

      {/* Input Area */}
      <div className="shrink-0 border-t bg-background/80 p-4 backdrop-blur-sm">
        <div className="mx-auto max-w-4xl">
          <AIInput onSubmit={handleSubmit}>
            <AIInputTextarea
              onChange={(event) => setText(event.target.value)}
              value={text}
              placeholder="What would you like to know?"
              disabled={isLoading}
              className="resize-none"
            />
            <AIInputToolbar>
              <div className="flex items-center gap-3">
                {/* Status indicator */}
                <span className="rounded-full bg-muted/50 px-2 py-1 text-muted-foreground text-xs">
                  {state === "idle" && "Ready"}
                  {state === "loading" && "Connecting..."}
                  {state === "streaming" && "Streaming..."}
                  {state === "error" && "Error"}
                </span>

                {/* Stop button when streaming */}
                {(state === "loading" || state === "streaming") && (
                  <Button
                    type="button"
                    onClick={stopGeneration}
                    variant="outline"
                    size="sm"
                  >
                    Stop
                  </Button>
                )}
              </div>

              <AIInputSubmit
                disabled={!text.trim()}
                status={getSubmitStatus()}
              />
            </AIInputToolbar>
          </AIInput>
        </div>
      </div>
    </div>
  );
}
