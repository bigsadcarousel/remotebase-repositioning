import { Icon } from './icon';

const ROWS: [string, string, string][] = [
  [
    'Engineers learning AI on the job',
    '$500K upfront, nothing ships',
    'Working software in 30 days',
  ],
  [
    'Pilots that never leave staging',
    'Nine months of discovery',
    'Fixed scope, fixed price, fixed deadline',
  ],
  [
    'No production system after months',
    'Final deliverable: a slide deck',
    'Senior engineers who’ve already built AI',
  ],
  ['Team morale tanks', 'Implementation sold separately', 'Your team owns the code'],
  [
    'Board still asks "where’s the AI?"',
    'Demos that die in slides',
    'One conversation to start',
  ],
];

export function Comparison() {
  return (
    <section className="section" id="compare">
      <div className="container">
        <div className="shead">
          <div>
            <div className="chap">09</div>
            <div className="clabel">Compare</div>
          </div>
          <div>
            <span className="eyebrow">Three paths · one finish line</span>
            <h2>
              Three ways to put AI in production. Two of them don&apos;t work
              <span className="acc">.</span>
            </h2>
          </div>
        </div>

        <div className="cmp-grid">
          <div className="cmp-col">
            <div className="cmp-head">
              <div className="cmp-head-title">Doing it yourself</div>
              <div className="cmp-head-meta">In-house</div>
            </div>
            {ROWS.map((r, i) => (
              <div className="cmp-row" key={`a-${i}`}>
                <Icon name="x" className="cmp-icon" size={16} stroke={2} />
                <span>{r[0]}</span>
              </div>
            ))}
          </div>

          <div className="cmp-col">
            <div className="cmp-head">
              <div className="cmp-head-title">Big consultancy</div>
              <div className="cmp-head-meta">$$$$</div>
            </div>
            {ROWS.map((r, i) => (
              <div className="cmp-row" key={`b-${i}`}>
                <Icon name="x" className="cmp-icon" size={16} stroke={2} />
                <span>{r[1]}</span>
              </div>
            ))}
          </div>

          <div className="cmp-col us">
            <div className="cmp-pill">Recommended</div>
            <div className="cmp-head">
              <div className="cmp-head-title">Remotebase</div>
              <div className="cmp-head-meta">30 days</div>
            </div>
            {ROWS.map((r, i) => (
              <div className="cmp-row" key={`c-${i}`}>
                <Icon
                  name="check"
                  className="cmp-icon cmp-check"
                  size={16}
                  stroke={2.4}
                />
                <span>{r[2]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
