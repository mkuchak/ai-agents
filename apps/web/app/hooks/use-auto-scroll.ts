import { useEffect, useRef } from "react";

interface UseAutoScrollOptions {
  dependency?: any;
  behavior?: ScrollBehavior;
}

export function useAutoScroll(options: UseAutoScrollOptions = {}) {
  const { dependency, behavior = "smooth" } = options;
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    scrollRef.current?.scrollIntoView({ behavior });
  };

  useEffect(() => {
    scrollToBottom();
  }, [dependency]);

  return { scrollRef, scrollToBottom };
}
