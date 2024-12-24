import type { Message } from 'chat/types';

import { useEffect, useRef } from 'react';

export function useChatScroll({ messages }: { messages: Message[] }) {
  const scrollableRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollableElement = scrollableRef.current;
    if (scrollableElement) {
      setTimeout(() => {
        scrollableElement.scrollTop = scrollableElement.scrollHeight;
      }, 0);
    }
  }, [messages]);

  return { scrollableRef };
}
