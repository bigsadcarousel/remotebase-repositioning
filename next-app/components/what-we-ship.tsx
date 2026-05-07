function OfferCard({
  num,
  title,
  dur,
  head,
}: {
  num: string;
  title: string;
  dur: string;
  head: string;
}) {
  return (
    <a href="#" className="offer-card">
      <div className="offer-top">
        <span className="offer-num">{num}</span>
        <span className="offer-title">{title}</span>
        <span className="offer-chip">{dur}</span>
      </div>
      <h3 className="offer-h">{head}</h3>
      <span className="offer-link">
        Learn more <span className="arr">→</span>
      </span>
    </a>
  );
}

export function WhatWeShip() {
  return (
    <section className="section" id="work">
      <div className="container">
        <div className="shead">
          <div>
            <div className="chap active">05</div>
            <div className="clabel">Offerings</div>
          </div>
          <div>
            <span className="eyebrow">Four ways in. Pick one.</span>
            <h2>
              Fixed scope. Fixed price. Fixed deadline<span className="acc">.</span>
            </h2>
            <div className="tertiary">
              No discovery phases that bill forever. No retainers without an end date.
            </div>
          </div>
        </div>
        <div className="offer-grid">
          <div />
          <div className="offer-rows">
            <div className="offer-row offer-row-1">
              <OfferCard
                num="01"
                title="Diagnostic"
                dur="Two weeks"
                head="We tell you what's worth building."
              />
              <OfferCard
                num="02"
                title="Sprint"
                dur="Four weeks"
                head="We build it. End-to-end. Production by day 30."
              />
            </div>
            <div className="offer-row offer-row-2">
              <OfferCard
                num="03"
                title="Operations"
                dur="Optional"
                head="When you'd rather we run it. Most teams take their workflow and run."
              />
              <OfferCard
                num="04"
                title="Embedded Engineers"
                dur="Flexible"
                head="Senior AI engineers in your codebase from day one."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
