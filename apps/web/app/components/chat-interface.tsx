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
import { type FormEventHandler, useEffect, useRef, useState } from "react";
import { useChat } from "../hooks/use-chat";
import { ChatHeader } from "./chat-header";
import { ChatSuggestions } from "./chat-suggestions";

export function ChatInterface() {
  const [text, setText] = useState<string>("");
  const [isLocalLoading, setIsLocalLoading] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
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
    const isCurrentlyLoading = isLoading || isLocalLoading;
    if (!text.trim() || isCurrentlyLoading) return;

    // Immediately freeze the input
    setIsLocalLoading(true);
    const messageToSend = text;
    setText("");

    try {
      await sendMessage(messageToSend);
    } finally {
      // Reset local loading state when done
      setIsLocalLoading(false);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Enter without shift sends the message
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      const isCurrentlyLoading = isLoading || isLocalLoading;
      if (text.trim() && !isCurrentlyLoading) {
        handleSubmit(event as any);
      }
    }
    // Shift+Enter allows line break (default behavior)
  };

  const handleSuggestionClick = async (suggestion: string) => {
    const isCurrentlyLoading = isLoading || isLocalLoading;
    if (isCurrentlyLoading) return;
    
    // Immediately freeze the input
    setIsLocalLoading(true);
    setText("");

    try {
      await sendMessage(suggestion);
    } finally {
      setIsLocalLoading(false);
    }
  };

  // Auto-focus input after agent stops responding
  useEffect(() => {
    if (state === "idle" && !isLocalLoading && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [state, isLocalLoading]);

  // Focus input on component mount
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, []);

  const getSubmitStatus = () => {
    if (state === "loading" || isLocalLoading) return "submitted";
    if (state === "streaming") return "streaming";
    if (state === "error") return "error";
    return "ready";
  };

  const hasMessages = messages.length > 0 || streamingMessages.length > 0;

  return (
    <div className="relative flex h-screen w-full flex-col divide-y overflow-hidden bg-background">
      {/* Header */}
      <ChatHeader onClearMessages={clearMessages} />

      {/* Chat Conversation */}
      <AIConversation>
        <AIConversationContent className="mx-auto w-full max-w-4xl">
          {!hasMessages && (
            <div className="flex h-full items-center justify-center">
              <div className="w-full text-center">
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
                <div className="pt-8">
                  <ChatSuggestions onSuggestionClick={handleSuggestionClick} />
                </div>
              </div>
            </div>
          )}

          {/* Messages */}
          <div className="space-y-1">
            {/* Final Messages */}
            {messages.map((message) => (
              <div key={message.id}>
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
                  <div className="space-y-1">
                    {/* Sources */}
                    {message.metadata?.sources && (
                      <AISources>
                        <AISourcesTrigger
                          count={message.metadata.sources.length}
                        />
                        <AISourcesContent>
                          {message.metadata.sources.map(
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

                    {/* Tools */}
                    {message.metadata?.tool && (
                      <AITool className="mt-4">
                        <AIToolHeader
                          name={`Tool: ${message.metadata.tool.name || "Unknown"}`}
                          description={`${message.metadata.tool.description || `Executing ${message.metadata.tool.name || "tool"}`}`}
                          status={
                            message.metadata.tool.status ||
                            message.status ||
                            "completed"
                          }
                        />
                        <AIToolContent>
                          {message.metadata.tool.input && (
                            <AIToolParameters
                              parameters={message.metadata.tool.input}
                            />
                          )}
                          {message.metadata.tool.output && (
                            <AIToolResult
                              result={JSON.stringify(
                                message.metadata.tool.output,
                                null,
                                2
                              )}
                            />
                          )}
                        </AIToolContent>
                      </AITool>
                    )}

                    {/* Reasoning */}
                    {message.metadata?.reasoning && (
                      <AIReasoning
                        className="my-0"
                        duration={message.metadata.reasoning.duration || 0}
                        isStreaming={
                          message.metadata.reasoning.isStreaming || false
                        }
                      >
                        <AIReasoningTrigger />
                        <AIReasoningContent>
                          {message.metadata.reasoning.thought || "Thinking..."}
                        </AIReasoningContent>
                      </AIReasoning>
                    )}

                    {/* AI Response Content */}
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
              <div key={`streaming-${index}`}>
                <div className="space-y-1">
                  {/* Reasoning */}
                  {message.metadata?.reasoning && (
                    <AIReasoning
                      isStreaming={
                        message.metadata.reasoning.isStreaming !== false
                      }
                      duration={message.metadata.reasoning.duration || 0}
                    >
                      <AIReasoningTrigger />
                      <AIReasoningContent>
                        {message.metadata.reasoning.thought || "Thinking..."}
                      </AIReasoningContent>
                    </AIReasoning>
                  )}

                  {/* Tools */}
                  {message.metadata?.tool && (
                    <AITool>
                      <AIToolHeader
                        name={`Tool: ${message.metadata.tool.name || "Unknown"}`}
                        description={`${message.metadata.tool.description || `Executing ${message.metadata.tool.name || "tool"}`}`}
                        status={message.metadata.tool.status || "running"}
                      />
                      <AIToolContent>
                        {message.metadata.tool.input && (
                          <AIToolParameters
                            parameters={message.metadata.tool.input}
                          />
                        )}
                        {message.metadata.tool.output && (
                          <AIToolResult
                            result={JSON.stringify(
                              message.metadata.tool.output,
                              null,
                              2
                            )}
                          />
                        )}
                      </AIToolContent>
                    </AITool>
                  )}

                  {/* AI Response Content */}
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
              <div>
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

      {/* Bottom Section */}
      <div className="grid shrink-0 gap-4 pt-4">
        {/* Suggestions */}
        {hasMessages && (
          <div className="px-4">
            <ChatSuggestions onSuggestionClick={handleSuggestionClick} />
          </div>
        )}

        {/* Error Display */}
        {error && (
          <div className="px-4">
            <div className="rounded-lg border border-destructive/20 bg-destructive/5 px-4 py-3 text-destructive">
              <div className="flex items-center gap-2">
                <span className="font-medium">Error:</span>
                <span>{error}</span>
              </div>
            </div>
          </div>
        )}

        {/* Input Area */}
        <div className="w-full px-4 pb-4">
          <AIInput onSubmit={handleSubmit}>
            <AIInputTextarea
              ref={textareaRef}
              onChange={(event) => setText(event.target.value)}
              onKeyDown={handleKeyDown}
              value={text}
              placeholder="What would you like to know?"
              disabled={isLoading || isLocalLoading}
              className="resize-none"
            />
            <AIInputToolbar>
              <div className="flex items-center gap-3">
                {/* Status indicator */}
                <span className="rounded-full bg-muted/50 px-2 py-1 text-muted-foreground text-xs">
                  {(isLoading || isLocalLoading) && state !== "error" && (
                    <>
                      {(state === "loading" || isLocalLoading) && "Connecting..."}
                      {state === "streaming" && "Streaming..."}
                    </>
                  )}
                  {state === "idle" && !isLocalLoading && "Ready"}
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
