import { useCallback, useEffect, useRef } from "react";

interface UseAutoScrollOptions {
  dependency?: unknown;
  behavior?: ScrollBehavior;
}

export function useAutoScroll(options: UseAutoScrollOptions = {}) {
  const { dependency, behavior = "smooth" } = options;
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    scrollRef.current?.scrollIntoView({ behavior });
  }, [behavior]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: dependency is intentionally unknown type to allow flexibility
  useEffect(() => {
    scrollToBottom();
  }, [scrollToBottom, dependency]);

  return { scrollRef, scrollToBottom };
}
