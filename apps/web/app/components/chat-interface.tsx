import { Button } from "@repo/ui/components/button";
import { useAutoScroll, useChat } from "../hooks";
import { ChatHeader } from "./chat-header";
import { MessageBubble } from "./message-bubble";
import { MessageInput } from "./message-input";

export function ChatInterface() {
  const { messages, isLoading, sendMessage, stopGeneration, clearChat } =
    useChat();
  const { scrollRef } = useAutoScroll({ dependency: messages });

  return (
    <div className="flex h-screen flex-col bg-gray-50 dark:bg-gray-900">
      <ChatHeader onClearChat={clearChat} />

      <div className="flex flex-1 flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto px-4 py-6">
          <div className="mx-auto max-w-4xl space-y-6">
            <Button
              variant="destructive"
              onClick={() => {
                alert("clicked");
              }}
            >
              Click me
            </Button>
            {messages.length === 0 ? (
              <div className="py-12 text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                  <svg
                    className="h-8 w-8 text-blue-600 dark:text-blue-400"
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
                <h3 className="mb-2 font-medium text-gray-900 text-lg dark:text-gray-100">
                  Welcome to AI Agents Chat
                </h3>
                <p className="mx-auto mb-6 max-w-md text-gray-600 dark:text-gray-400">
                  I can help you with calculations, weather information, and
                  general questions. Try asking me something like:
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {[
                    "What is 25 * 4?",
                    "What's the weather in Paris?",
                    "Explain quantum computing",
                  ].map((example) => (
                    <button
                      key={example}
                      type="button"
                      onClick={() => sendMessage(example)}
                      className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-750"
                    >
                      {example}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              messages.map((message) => (
                <MessageBubble key={message.id} message={message} />
              ))
            )}
            <div ref={scrollRef} />
          </div>
        </div>

        <div className="border-gray-200 border-t bg-white dark:border-gray-700 dark:bg-gray-800">
          <div className="mx-auto max-w-4xl px-4 py-4">
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
