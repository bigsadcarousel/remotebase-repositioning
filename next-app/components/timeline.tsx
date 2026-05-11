'use client';

import { useInView } from '@/lib/use-in-view';

const STOPS = [
  {
    day: 'Day 01',
    step: '01',
    title: 'A workflow worth building.',
    sub: 'Scoped, priced, on the calendar.',
  },
  {
    day: 'Days 02–14',
    step: '02',
    title: 'A working prototype.',
    sub: 'Running on your real data, in your environment.',
  },
  {
    day: 'Days 15–30',
    step: '03',
    title: 'Senior engineers ship.',
    sub: 'Build, integrate, deploy. Weekly progress demos.',
  },
  {
    day: 'Day 31',
    step: '04',
    title: 'AI in production.',
    sub: 'Your code. Your team. Your stack. Done.',
  },
];

export function Timeline() {
  const [ref, seen] = useInView<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section className="section alt" id="process">
      <div className="container">
        <div className="shead">
          <div>
            <div className="chap">06</div>
            <div className="clabel">Process</div>
          </div>
          <div>
            <span className="eyebrow">What you get in thirty days</span>
            <h2>
              {'From "let\'s chat" to "it\'s running" in 30 days'}
              <span className="acc">.</span>
            </h2>
          </div>
        </div>

        <div className="tl-wrap">
          <div className={`tl-track ${seen ? 'in-view' : ''}`} ref={ref}>
            <div className="tl-rail" />
            <div className="tl-fill" />
            <div className="tl-stops">
              {STOPS.map((s) => (
                <div className="tl-stop" key={s.step}>
                  <div className="tl-day">{s.day}</div>
                  <div className="tl-dot">{s.step}</div>
                  <div className="tl-body">
                    <div className="tl-h">{s.title}</div>
                    <div className="tl-sub">{s.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="tl-track-vertical" aria-hidden="true">
            {STOPS.map((s) => (
              <div className="tl-stop-v" key={`v-${s.step}`}>
                <div className="tl-dot-v">{s.step}</div>
                <div>
                  <div className="tl-day-v">{s.day}</div>
                  <div className="tl-h-v">{s.title}</div>
                  <div className="tl-sub-v">{s.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
