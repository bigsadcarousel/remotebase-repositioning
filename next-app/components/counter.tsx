'use client';

import { useEffect, useRef, useState } from 'react';

export function Counter({
  to,
  duration = 1400,
  prefix = '',
  suffix = '',
  format,
  trigger = true,
}: {
  to: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  format?: (v: number) => string;
  trigger?: boolean;
}) {
  const [val, setVal] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!trigger || started.current) return;
    started.current = true;
    const t0 = performance.now();
    let raf = 0;
    const step = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(to * eased);
      if (p < 1) raf = requestAnimationFrame(step);
      else setVal(to);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [trigger, to, duration]);

  const display = format ? format(val) : Math.round(val).toLocaleString();
  return (
    <span>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
