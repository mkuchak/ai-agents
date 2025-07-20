import {
  AIInput,
  AIInputSubmit,
  AIInputTextarea,
  AIInputToolbar,
} from "@repo/ui/components/ai/input";
import { useState } from "react";

interface MessageInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
  onStopGeneration: () => void;
}

export function MessageInput({
  onSendMessage,
  isLoading,
  onStopGeneration,
}: MessageInputProps) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    onSendMessage(input.trim());
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const handleStopGeneration = () => {
    onStopGeneration();
  };

  const getSubmitStatus = () => {
    if (isLoading) return "streaming";
    if (!input.trim()) return "ready";
    return "ready";
  };

  return (
    <AIInput onSubmit={handleSubmit}>
      <AIInputTextarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ask me anything... (⌘/Ctrl + Enter to send)"
        disabled={isLoading}
        minHeight={48}
        maxHeight={200}
      />
      <AIInputToolbar>
        <div className="flex-1" />
        <AIInputSubmit
          status={getSubmitStatus()}
          disabled={!input.trim() && !isLoading}
          onClick={isLoading ? handleStopGeneration : undefined}
        >
          {isLoading ? "Stop" : undefined}
        </AIInputSubmit>
      </AIInputToolbar>
    </AIInput>
  );
}
