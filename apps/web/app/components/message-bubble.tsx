import type { Message } from "../hooks";

interface MessageBubbleProps {
  message: Message;
}

export function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === "user";
  const isAssistant = message.role === "assistant";

  return (
    <div className={`flex gap-3 ${isUser ? "justify-end" : "justify-start"}`}>
      {isAssistant && (
        <div className="flex-shrink-0">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600">
            <svg
              className="h-4 w-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <title>AI Assistant</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          </div>
        </div>
      )}

      <div className={`max-w-3xl ${isUser ? "ml-12" : "mr-12"}`}>
        <div
          className={`rounded-2xl px-4 py-3 ${
            isUser
              ? "bg-blue-600 text-white"
              : "border border-gray-200 bg-white text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
          }`}
        >
          <div className="prose prose-sm dark:prose-invert max-w-none">
            {message.content ? (
              <div className="whitespace-pre-wrap break-words">
                {message.content}
                {message.isStreaming && (
                  <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-current" />
                )}
              </div>
            ) : message.isStreaming ? (
              <div className="flex items-center gap-1">
                <div className="h-2 w-2 animate-pulse rounded-full bg-current" />
                <div className="h-2 w-2 animate-pulse rounded-full bg-current delay-75" />
                <div className="h-2 w-2 animate-pulse rounded-full bg-current delay-150" />
              </div>
            ) : null}
          </div>
        </div>

        <div
          className={`mt-1 text-gray-500 text-xs dark:text-gray-400 ${
            isUser ? "text-right" : "text-left"
          }`}
        >
          {message.timestamp.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      </div>

      {isUser && (
        <div className="flex-shrink-0">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-600">
            <svg
              className="h-4 w-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <title>User</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
