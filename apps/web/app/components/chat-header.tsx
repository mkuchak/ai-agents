import { Button } from "@repo/ui/components/button";
import { ThemeSwitcher } from "@repo/ui/components/theme-switcher";
import { TrashIcon } from "lucide-react";
import { useTheme } from "next-themes";

interface ChatHeaderProps {
  onClearMessages: () => void;
}

export function ChatHeader({ onClearMessages }: ChatHeaderProps) {
  const { theme, setTheme } = useTheme();

  return (
    <div className="sticky top-0 z-10 flex shrink-0 items-center justify-between border-b bg-background/80 p-6 backdrop-blur-sm">
      <div>
        <h1 className="font-bold text-2xl tracking-tight">AI Assistant</h1>
        <p className="text-muted-foreground text-sm">
          Powered by advanced AI agents
        </p>
      </div>
      <div className="flex items-center gap-4">
        <ThemeSwitcher
          value={theme as "light" | "dark" | "system"}
          onChange={setTheme}
        />
        <Button
          type="button"
          onClick={onClearMessages}
          variant="ghost"
          size="sm"
          className="gap-2 text-muted-foreground hover:text-foreground"
        >
          <TrashIcon size={16} />
          Clear
        </Button>
      </div>
    </div>
  );
}
