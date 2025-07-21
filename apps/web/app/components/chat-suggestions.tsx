import { AISuggestion, AISuggestions } from "@repo/ui/components/ai/suggestion";

const defaultSuggestions = [
  "Can you explain how to use React hooks effectively?",
  "What are the latest trends in AI?",
  "How does machine learning work?",
  "Explain quantum computing basics",
  "Best practices for React development",
  "Tell me about TypeScript benefits",
  "How to optimize database queries?",
  "What is the difference between SQL and NoSQL?",
  "Explain cloud computing architecture",
  "Help me debug this JavaScript error",
  "What are design patterns in programming?",
  "How does blockchain technology work?",
];

interface ChatSuggestionsProps {
  onSuggestionClick: (suggestion: string) => void;
  isVisible?: boolean;
}

export function ChatSuggestions({
  onSuggestionClick,
  isVisible = true,
}: ChatSuggestionsProps) {
  if (!isVisible) return null;

  return (
    <div className="w-full">
      <AISuggestions className="px-0">
        <div className="scrollbar-hide flex gap-3 overflow-x-auto pb-2">
          {defaultSuggestions.map((suggestion) => (
            <AISuggestion
              key={suggestion}
              onClick={() => onSuggestionClick(suggestion)}
              suggestion={suggestion}
              className="shrink-0 whitespace-nowrap rounded-lg border border-border/40 bg-background/60 px-4 py-2.5 font-medium text-sm shadow-sm transition-all duration-200 hover:border-border hover:bg-background hover:shadow-md"
            />
          ))}
        </div>
      </AISuggestions>
    </div>
  );
}
