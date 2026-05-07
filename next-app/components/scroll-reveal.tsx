'use client';

import { useEffect } from 'react';

const SELECTORS = [
  '.shead > div',
  '.section h2',
  '.section h3:not(.cs-headline)',
  '.section p:not(.lede-italic):not(.sub)',
  '.cs-callout',
  '.lb-logo',
  '.why-pillar',
  '.why-feat',
  '.cmp-col',
  '.tw-col',
  '.fail-row',
  '.product-row',
  '.final-inner > *',
];

declare global {
  interface Window {
    __rbReveal?: boolean;
  }
}

export function ScrollReveal() {
  useEffect(() => {
    if (window.__rbReveal) return;
    window.__rbReveal = true;

    const sel = SELECTORS.join(',');
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            (e.target as HTMLElement).setAttribute('data-reveal', 'in');
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    );

    const tag = () => {
      document.querySelectorAll(sel).forEach((el) => {
        if (el.hasAttribute('data-reveal')) return;
        el.setAttribute('data-reveal', 'out');
        const parent = el.parentElement;
        if (parent) {
          const sibs = Array.from(parent.children).filter((c) => c.matches(sel));
          const idx = sibs.indexOf(el);
          if (idx > 0) {
            (el as HTMLElement).style.setProperty(
              '--reveal-delay',
              `${Math.min(idx, 4) * 70}ms`
            );
          }
        }
        io.observe(el);
      });
    };

    tag();
    const mo = new MutationObserver(() => tag());
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      mo.disconnect();
      io.disconnect();
    };
  }, []);

  return null;
}
