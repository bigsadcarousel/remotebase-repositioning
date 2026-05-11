'use client';

import { useEffect, useRef } from 'react';
import { Icon } from './icon';

const STEPS = [
  { day: 'D01', label: 'Scope' },
  { day: 'D02–14', label: 'Prototype' },
  { day: 'D15–30', label: 'Ship' },
  { day: 'D31', label: 'Live' },
];

function HeroBg() {
  return (
    <div className="hero-bg" aria-hidden="true">
      <div className="hero-bg-grid" />
      <div className="hero-bg-orb hero-bg-orb-a" />
      <div className="hero-bg-orb hero-bg-orb-b" />
      <div className="hero-bg-vignette" />
    </div>
  );
}

function HeroProcess() {
  return (
    <div className="hp" aria-hidden="true">
      <div className="hp-head">
        <span className="hp-tag">PROCESS</span>
        <span className="hp-rule" />
        <span className="hp-tag hp-tag-acc">30 DAYS</span>
      </div>
      <div className="hp-track">
        <div className="hp-rail" />
        <div className="hp-fill" />
        <div className="hp-stops">
          {STEPS.map((s, i) => (
            <div key={s.day} className={`hp-stop hp-stop-${i + 1}`}>
              <div className="hp-day">{s.day}</div>
              <div className="hp-dot">
                <span className="hp-dot-inner" />
                <span className="hp-pulse" />
              </div>
              <div className="hp-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const t = setTimeout(() => {
      heroRef.current?.classList.add('h1-anim');
    }, 350);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="top" className="hero" ref={heroRef}>
      <HeroBg />
      <div className="container hero-inner">
        <div>
          <div className="chap">01</div>
          <div className="clabel">Pitch</div>
        </div>
        <div>
          <h1>
            You don&apos;t need <span className="strike">another AI deck</span>.
            <br />
            You need it shipped<span className="acc">.</span>
          </h1>
          <p className="lede-italic">{'"Built to ship. Not to impress."'}</p>
          <p className="sub">
            We build AI that runs your business. In 30 days. Trusted by Northwestern Mutual,
            Gridware, and Fireflies AI.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-violet btn-lg" href="#contact">
              Book a 30-min call <Icon name="arrow-right" size={16} />
            </a>
            <a className="btn btn-outline-ink btn-lg" href="#process">
              See how we work <Icon name="arrow-right" size={16} />
            </a>
          </div>
        </div>
      </div>
      <HeroProcess />
    </section>
  );
}
