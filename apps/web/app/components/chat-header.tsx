interface ChatHeaderProps {
  onClearChat: () => void;
}

export function ChatHeader({ onClearChat }: ChatHeaderProps) {
  return (
    <header className="border-gray-200 border-b bg-white px-4 py-3 dark:border-gray-700 dark:bg-gray-800">
      <div className="mx-auto flex max-w-4xl items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
            <svg
              className="h-5 w-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <title>AI Agents Logo</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div>
            <h1 className="font-semibold text-gray-900 text-lg dark:text-gray-100">
              AI Agents Chat
            </h1>
            <p className="text-gray-500 text-xs dark:text-gray-400">
              Calculator • Weather • Assistant
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onClearChat}
          className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-gray-600 text-sm transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-100"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <title>Clear Chat</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
          Clear Chat
        </button>
      </div>
    </header>
  );
}
