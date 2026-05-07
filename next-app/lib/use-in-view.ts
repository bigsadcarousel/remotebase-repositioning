'use client';

import { useEffect, useRef, useState, type RefObject } from 'react';

export function useInView<T extends Element>(
  options: IntersectionObserverInit = { threshold: 0.2 }
): [RefObject<T | null>, boolean] {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const ob = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          ob.disconnect();
        }
      },
      options
    );
    ob.observe(node);
    return () => ob.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [ref, seen];
}
