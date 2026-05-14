'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`rb-nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container rb-nav-inner">
        <a href="#top" className="rb-mark" aria-label="Remotebase home">
          <Image
            src="/remotebase-logo-dark.png"
            alt="Remotebase"
            width={1950}
            height={338}
            priority
            className="rb-mark-img"
          />
        </a>

        <div className="rb-nav-links">
          <a
            href="https://remotebase.com/staffaugmentation"
            target="_blank"
            rel="noopener noreferrer"
            className="rb-nav-link"
          >
            Staff Augmentation
          </a>
          <a
            href="https://remotebase.com/axis"
            target="_blank"
            rel="noopener noreferrer"
            className="rb-nav-link"
          >
            Axis
          </a>
        </div>

        <a
          className="rb-cta"
          href="https://api.leadconnectorhq.com/widget/bookings/meet-remotebase"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book a call
          <span className="rb-cta-arr" aria-hidden="true">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M3 9 L9 3 M5 3 H9 V7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </a>
      </div>
    </nav>
  );
}
