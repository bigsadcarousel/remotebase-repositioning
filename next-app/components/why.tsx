/* eslint-disable @next/next/no-img-element */
'use client';

import { useInView } from '@/lib/use-in-view';

export function Why() {
  const [ref] = useInView<HTMLDivElement>({ threshold: 0.4 });

  return (
    <section className="section alt" id="why">
      <div className="container">
        <div className="shead">
          <div>
            <div className="chap">10</div>
            <div className="clabel">Why us</div>
          </div>
          <div>
            <span className="eyebrow">A short list of what&apos;s true</span>
            <h2>
              We ship when others don&apos;t<span className="acc">.</span>
            </h2>
          </div>
        </div>

        <div className="why-grid">
          <div className="why-feat" ref={ref}>
            <span className="pillar-num">01 · Track record</span>
            <h3>We&apos;ve shipped real AI in production.</h3>
            <p className="why-feat-body">
              The world&apos;s first DAO-based pet insurance platform. AI-driven health and
              fitness data systems. Production AI features at companies you&apos;ve heard
              of.
            </p>
            <div className="why-feat-logos">
              <img src="/clients/northwestern.png" alt="Northwestern Mutual" />
              <img src="/clients/fireflies.png" alt="Fireflies.ai" />
              <img src="/clients/gridware.png" alt="Gridware" />
            </div>
          </div>

          <div className="why-pillars">
            <div className="why-pillar">
              <div className="pn">02</div>
              <div>
                <h4>We sell deadlines, not retainers.</h4>
                <p>
                  Fixed scope. Fixed price. Fixed date. The opposite of a discovery phase
                  that bills forever.
                </p>
              </div>
            </div>
            <div className="why-pillar">
              <div className="pn">03</div>
              <div>
                <h4>Senior engineers only.</h4>
                <p>
                  The same engineers shipping for Northwestern Mutual ship for you. No
                  staffing pyramid, no junior shadow team.
                </p>
              </div>
            </div>
            <div className="why-pillar">
              <div className="pn">04</div>
              <div>
                <h4>We turn down work we can&apos;t deliver.</h4>
                <p>
                  Most agencies don&apos;t. The diagnostic exists so we both know
                  what&apos;s worth building before anyone signs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
