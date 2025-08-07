import { Button } from "@repo/ui/components/button";
import { ThemeSwitcher } from "@repo/ui/components/theme-switcher";
import { FileTextIcon, TrashIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Link } from "react-router";

interface AppHeaderProps {
  title: string;
  description: string;
  navigationTo: string;
  navigationIcon: React.ComponentType<{ size?: number }>;
  navigationLabel: string;
  onClear?: () => Promise<void>;
}

export function AppHeader({ 
  title, 
  description, 
  navigationTo, 
  navigationIcon: NavigationIcon, 
  navigationLabel,
  onClear 
}: AppHeaderProps) {
  const { theme, setTheme } = useTheme();

  const handleClearAll = async () => {
    // Clear both messages and audit logs
    try {
      await Promise.all([
        fetch("http://localhost:3000/messages/clear", { method: "POST" }),
        fetch("http://localhost:3000/audit-logs/clear", { method: "POST" })
      ]);
      
      // Call the optional onClear callback (for local state updates)
      if (onClear) {
        await onClear();
      }
    } catch (error) {
      console.warn("Failed to clear data:", error);
    }
  };

  return (
    <div className="sticky top-0 z-10 flex shrink-0 items-center justify-between border-b bg-background/80 p-6 backdrop-blur-sm">
      <div>
        <h1 className="font-bold text-2xl tracking-tight">{title}</h1>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
      <div className="flex items-center gap-4">
        <Link to={navigationTo}>
          <Button variant="ghost" size="sm" className="gap-2">
            <NavigationIcon size={16} />
            {navigationLabel}
          </Button>
        </Link>
        <Button
          type="button"
          onClick={handleClearAll}
          variant="ghost"
          size="sm"
          className="gap-2 text-muted-foreground hover:text-foreground"
        >
          <TrashIcon size={16} />
          Clear
        </Button>
        <ThemeSwitcher
          value={theme as "light" | "dark" | "system"}
          onChange={setTheme}
        />
      </div>
    </div>
  );
}

// Keep the old ChatHeader as a wrapper for backward compatibility
interface ChatHeaderProps {
  onClearMessages: () => Promise<void>;
}

export function ChatHeader({ onClearMessages }: ChatHeaderProps) {
  return (
    <AppHeader
      title="AI Assistant"
      description="Powered by advanced AI agents"
      navigationTo="/logs"
      navigationIcon={FileTextIcon}
      navigationLabel="Logs"
      onClear={onClearMessages}
    />
  );
}
