import {
  AIConversation,
  AIConversationContent,
  AIConversationScrollButton,
} from "@repo/ui/components/ai/conversation";
import { AISuggestion, AISuggestions } from "@repo/ui/components/ai/suggestion";
import { Button } from "@repo/ui/components/button";
import { useChat } from "../hooks";

import { ChatHeader } from "./chat-header";
import { MessageBubble } from "./message-bubble";
import { MessageInput } from "./message-input";

const EXAMPLE_PROMPTS = [
  "What is 25 * 4?",
  "What's the capital of France and its weather?",
  "Explain quantum computing",
  "Calculate compound interest for $1000 at 5% for 10 years",
  "What are the latest AI developments?",
];

export function ChatInterface() {
  const {
    messages,
    isLoading,
    sendMessage,
    stopGeneration,
    clearChat,
    injectTestData,
  } = useChat();

  return (
    <div className="flex h-screen flex-col bg-background">
      <ChatHeader onClearChat={clearChat} />

      <div className="flex flex-1 flex-col overflow-hidden">
        <AIConversation className="relative flex-1 overflow-y-auto">
          <AIConversationContent className="mx-auto max-w-4xl p-4">
            {messages.length === 0 ? (
              <div className="flex min-h-full flex-col items-center justify-center py-12">
                {/* Welcome Section */}
                <div className="mb-8 text-center">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <svg
                      className="h-8 w-8 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <title>AI Chat Icon</title>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.959 8.959 0 01-4.906-1.414L3 21l2.414-5.094A8.959 8.959 0 013 12c0-4.418 3.582-8 8-8s8 3.582 8 8z"
                      />
                    </svg>
                  </div>
                  <h1 className="mb-3 font-semibold text-2xl text-foreground">
                    Welcome to AI Agents Chat
                  </h1>
                  <p className="mx-auto max-w-md text-muted-foreground">
                    I can help you with calculations, research, analysis, and
                    answer questions using specialized tools. Watch as I think
                    through problems step by step.
                  </p>
                </div>

                {/* Test Button for Development */}
                {process.env.NODE_ENV === "development" && (
                  <div className="mb-6">
                    <Button onClick={injectTestData} variant="outline">
                      Test UI Components (Show Sample AI Reasoning)
                    </Button>
                  </div>
                )}

                {/* Suggestions Section */}
                <div className="w-full max-w-2xl">
                  <h2 className="mb-4 text-center font-medium text-muted-foreground text-sm">
                    Try asking me something like:
                  </h2>
                  <AISuggestions className="justify-center">
                    {EXAMPLE_PROMPTS.map((prompt) => (
                      <AISuggestion
                        key={prompt}
                        suggestion={prompt}
                        onClick={sendMessage}
                        className="flex-shrink-0"
                      />
                    ))}
                  </AISuggestions>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {messages.map((message) => (
                  <MessageBubble key={message.id} message={message} />
                ))}
              </div>
            )}
          </AIConversationContent>
          <AIConversationScrollButton />
        </AIConversation>

        <div className="border-t bg-background p-4">
          <div className="mx-auto max-w-4xl">
            <MessageInput
              onSendMessage={sendMessage}
              isLoading={isLoading}
              onStopGeneration={stopGeneration}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
