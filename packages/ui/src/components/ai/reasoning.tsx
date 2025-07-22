"use client";

import { useControllableState } from "@radix-ui/react-use-controllable-state";
import { AIResponse } from "@repo/ui/components/ai/response";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@repo/ui/components/collapsible";
import { cn } from "@repo/ui/lib/utils";
import { ChevronDownIcon } from "lucide-react";
import type { ComponentProps } from "react";
import { createContext, memo, useContext, useEffect, useState } from "react";

type AIReasoningContextValue = {
  isStreaming: boolean;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  duration: number | undefined;
};

const AIReasoningContext = createContext<AIReasoningContextValue | null>(null);

const useAIReasoning = () => {
  const context = useContext(AIReasoningContext);
  if (!context) {
    throw new Error("AIReasoning components must be used within AIReasoning");
  }
  return context;
};

export type AIReasoningProps = ComponentProps<typeof Collapsible> & {
  isStreaming?: boolean;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  duration?: number;
  showDuration?: boolean;
};

export const AIReasoning = memo(
  ({
    className,
    isStreaming = false,
    open,
    defaultOpen = false,
    onOpenChange,
    duration: durationProp,
    showDuration = true,
    children,
    ...props
  }: AIReasoningProps) => {
    const [isOpen, setIsOpen] = useControllableState({
      prop: open,
      defaultProp: defaultOpen,
      onChange: onOpenChange,
    });
    const [internalDuration, setInternalDuration] = useState(0);
    const [hasAutoClosedRef, setHasAutoClosedRef] = useState(false);
    const [startTime, setStartTime] = useState<number | null>(null);
    const [wasManuallyOpened, setWasManuallyOpened] = useState(false);

    // Use external duration prop if provided, otherwise use internal calculation (only if showDuration is true)
    const duration = showDuration
      ? durationProp !== undefined
        ? durationProp
        : internalDuration
      : undefined;

    // Track duration when streaming starts and ends (only if showDuration is true and no external duration provided)
    useEffect(() => {
      if (!showDuration || durationProp !== undefined) return; // Skip internal calculation if duration is disabled or external duration is provided

      if (isStreaming) {
        if (startTime === null) {
          setStartTime(Date.now());
        }
      } else if (startTime !== null) {
        const durationInSeconds = (Date.now() - startTime) / 1000;
        // Format duration: show 2 decimal places if less than 1 second, otherwise round to nearest integer
        const formattedDuration =
          durationInSeconds < 1
            ? Math.round(durationInSeconds * 100) / 100
            : Math.round(durationInSeconds);
        setInternalDuration(formattedDuration);
        setStartTime(null);
      }
    }, [isStreaming, startTime, durationProp, showDuration]);

    // Auto-open when streaming starts
    useEffect(() => {
      if (isStreaming && !isOpen) {
        setIsOpen(true);
      }
    }, [isStreaming, isOpen, setIsOpen]);

    // Auto-close when streaming ends (only if not manually opened and not defaultOpen)
    useEffect(() => {
      if (
        !isStreaming &&
        isOpen &&
        !defaultOpen &&
        !hasAutoClosedRef &&
        !wasManuallyOpened
      ) {
        // Add a small delay before closing to allow user to see the content
        const timer = setTimeout(() => {
          setIsOpen(false);
          setHasAutoClosedRef(true);
        }, 1000);
        return () => clearTimeout(timer);
      }
    }, [
      isStreaming,
      isOpen,
      defaultOpen,
      hasAutoClosedRef,
      wasManuallyOpened,
      setIsOpen,
    ]);

    const handleOpenChange = (open: boolean) => {
      setIsOpen(open);
      // If user manually opens/closes, track this to prevent auto-closing
      if (open) {
        setWasManuallyOpened(true);
      }
    };

    return (
      <AIReasoningContext.Provider
        value={{ isStreaming, isOpen, setIsOpen, duration }}
      >
        <Collapsible
          className={cn("not-prose mb-4 pb-1", className)}
          onOpenChange={handleOpenChange}
          open={isOpen}
          {...props}
        >
          {children}
        </Collapsible>
      </AIReasoningContext.Provider>
    );
  }
);

export type AIReasoningTriggerProps = ComponentProps<
  typeof CollapsibleTrigger
> & {
  title?: string;
};

export const AIReasoningTrigger = memo(
  ({
    className,
    title = "Reasoning",
    children,
    ...props
  }: AIReasoningTriggerProps) => {
    const { isStreaming, isOpen, duration } = useAIReasoning();

    return (
      <CollapsibleTrigger
        className={cn(
          "flex items-center gap-2 text-muted-foreground text-sm",
          className
        )}
        {...props}
      >
        {children ?? (
          <>
            {isStreaming ? (
              <p>Thinking...</p>
            ) : duration === undefined || duration === 0 ? (
              <p>Thought</p>
            ) : (
              <p>
                Thought for{" "}
                {duration < 2 ? duration.toFixed(2) : Math.round(duration)}{" "}
                seconds
              </p>
            )}
            <ChevronDownIcon
              className={cn(
                "size-4 text-muted-foreground transition-transform",
                isOpen ? "rotate-180" : "rotate-0"
              )}
            />
          </>
        )}
      </CollapsibleTrigger>
    );
  }
);

export type AIReasoningContentProps = ComponentProps<
  typeof CollapsibleContent
> & {
  children: string;
};

export const AIReasoningContent = memo(
  ({ className, children, ...props }: AIReasoningContentProps) => (
    <CollapsibleContent
      className={cn("mt-4 text-muted-foreground text-sm", className)}
      {...props}
    >
      <AIResponse className="grid gap-2">{children}</AIResponse>
    </CollapsibleContent>
  )
);

AIReasoning.displayName = "AIReasoning";
AIReasoningTrigger.displayName = "AIReasoningTrigger";
AIReasoningContent.displayName = "AIReasoningContent";
