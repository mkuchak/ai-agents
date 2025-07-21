import { useState } from "react";
import { useChat } from "../hooks/use-chat";

export function ChatInterface() {
  const [input, setInput] = useState("");
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    await sendMessage(input);
    setInput("");
  };

  return (
    <div className="mx-auto flex h-screen max-w-4xl flex-col p-4">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="font-bold text-2xl">AI Chat</h1>
        <button
          type="button"
          onClick={clearMessages}
          className="rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
        >
          Clear Chat
        </button>
      </div>

      {/* Messages Area */}
      <div className="mb-4 flex-1 overflow-y-auto rounded-lg bg-gray-50 p-4">
        {messages.length === 0 && streamingMessages.length === 0 && (
          <div className="text-center text-gray-500">
            Start a conversation by typing a message below.
          </div>
        )}

        {/* Final Messages */}
        {messages.map((message) => (
          <div
            key={message.id}
            className={`mb-4 rounded-lg p-3 ${
              message.role === "user"
                ? "ml-auto max-w-[80%] bg-blue-100"
                : "max-w-[80%] bg-white"
            }`}
          >
            <div className="mb-1 font-semibold text-gray-600 text-sm">
              {message.role.charAt(0).toUpperCase() + message.role.slice(1)}
            </div>
            {message.content && (
              <div className="text-gray-800">{message.content}</div>
            )}
            {message.metadata && (
              <details className="mt-2">
                <summary className="cursor-pointer text-gray-500 text-xs">
                  Metadata
                </summary>
                <pre className="mt-1 overflow-x-auto text-gray-600 text-xs">
                  {JSON.stringify(message.metadata, null, 2)}
                </pre>
              </details>
            )}
          </div>
        ))}

        {/* Streaming Messages */}
        {streamingMessages.map((message, index) => (
          <div
            // biome-ignore lint/suspicious/noArrayIndexKey: it has a prefix so this is fine
            key={`streaming-${index}`}
            className="mb-4 max-w-[80%] rounded-lg border-yellow-400 border-l-4 bg-yellow-50 p-3"
          >
            <div className="mb-1 font-semibold text-gray-600 text-sm">
              {message.role.charAt(0).toUpperCase() + message.role.slice(1)}{" "}
              (streaming...)
            </div>
            {message.content && (
              <div className="text-gray-800">{message.content}</div>
            )}
            {message.metadata && (
              <details className="mt-2">
                <summary className="cursor-pointer text-gray-500 text-xs">
                  Real-time Reasoning
                </summary>
                <pre className="mt-1 overflow-x-auto text-gray-600 text-xs">
                  {JSON.stringify(message.metadata, null, 2)}
                </pre>
              </details>
            )}
          </div>
        ))}

        {/* Loading State */}
        {state === "loading" && (
          <div className="text-center text-gray-500">
            Connecting to AI agent...
          </div>
        )}
      </div>

      {/* Error Display */}
      {error && (
        <div className="mb-4 rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700">
          <strong>Error:</strong> {error}
        </div>
      )}

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="rounded-lg bg-blue-500 px-6 py-2 text-white hover:bg-blue-600 disabled:cursor-not-allowed disabled:bg-gray-400"
        >
          {isLoading ? "..." : "Send"}
        </button>
        {isLoading && (
          <button
            type="button"
            onClick={stopGeneration}
            className="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
          >
            Stop
          </button>
        )}
      </form>

      {/* State Debug Info */}
      <div className="mt-2 text-gray-500 text-xs">
        State: {state} | Messages: {messages.length} | Streaming:{" "}
        {streamingMessages.length}
      </div>
    </div>
  );
}
