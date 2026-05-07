'use client';

import { useInView } from '@/lib/use-in-view';

const NODES = [
  { step: 'Month 01', text: 'Hire a consultancy', meta: '$$$' },
  { step: 'Month 02', text: 'Sit through demos', meta: 'Slideware' },
  { step: 'Month 03', text: 'Pilot stalls in IT', meta: 'Security review' },
  { step: 'Month 04', text: 'Buy ChatGPT seats', meta: '"Empower the team"' },
  { step: 'Month 06', text: 'Steering committee', meta: 'Roadmap reset' },
  { step: 'Outcome', text: 'Nothing in production', meta: 'Budget gone' },
];

export function FailureFlow() {
  const [ref, seen] = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section className="section alt" id="problem">
      <div className="container">
        <div className="shead">
          <div>
            <div className="chap">04</div>
            <div className="clabel">Problem</div>
          </div>
          <div>
            <span className="eyebrow">The pattern we keep seeing</span>
            <h2>
              Two years of &ldquo;AI strategy&rdquo; later. What&apos;s actually running
              <span className="acc">?</span>
            </h2>
          </div>
        </div>

        <div className={`fail-flow ${seen ? 'in-view' : ''}`} ref={ref}>
          <div className="fail-spine" aria-hidden="true" />
          {NODES.map((n, i) => {
            const dead = i === NODES.length - 1;
            return (
              <div
                key={n.step}
                className={`fail-row ${dead ? 'dead' : ''}`}
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <div className="fail-row-step">{n.step}</div>
                <div className="fail-row-dot" aria-hidden="true">
                  {dead ? (
                    <svg viewBox="0 0 16 16" width="16" height="16">
                      <path
                        d="M4 4 L12 12 M12 4 L4 12"
                        stroke="#B22B2B"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                      />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 16 16" width="16" height="16">
                      <circle cx="8" cy="8" r="3.2" fill="#0E0B3D" fillOpacity="0.55" />
                    </svg>
                  )}
                </div>
                <div className="fail-row-card">
                  <div className="fail-row-text">{n.text}</div>
                  <div className="fail-row-meta">{n.meta}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="fail-close">
          That&apos;s why we&apos;ll only take your engagement if we&apos;re certain we can
          deliver<span className="acc">.</span>
        </div>
      </div>
    </section>
  );
}
