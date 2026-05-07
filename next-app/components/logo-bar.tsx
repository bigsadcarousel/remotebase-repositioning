/* eslint-disable @next/next/no-img-element */

const CLIENTS = [
  { name: 'Aktos', src: '/clients/aktos.png', scale: 1.0 },
  { name: 'Scale', src: '/clients/scaleai.png', scale: 0.95 },
  { name: 'Fireflies.ai', src: '/clients/fireflies.png', scale: 0.95 },
  { name: 'Placer.ai', src: '/clients/placerai.png', scale: 0.92 },
  { name: 'Atoms', src: '/clients/atoms.png', scale: 0.92 },
  { name: 'Gridware', src: '/clients/gridware.png', scale: 0.95 },
  { name: 'Northwestern Mutual', src: '/clients/northwestern.png', scale: 0.8 },
];

export function LogoBar() {
  const list = [...CLIENTS, ...CLIENTS, ...CLIENTS];
  return (
    <section className="section tight" id="trusted">
      <div className="container">
        <div className="lb-head">
          <span className="lb-eyebrow-tag">Trusted by</span>
          <span className="lb-eyebrow-rule" aria-hidden="true" />
        </div>
        <div className="lb-track-wrap">
          <div className="lb-track">
            {list.map((c, i) => (
              <span className="lb-logo" key={`${c.name}-${i}`}>
                <img
                  src={c.src}
                  alt={c.name}
                  className="lb-logo-img"
                  style={{ height: `calc(var(--lb-h) * ${c.scale})` }}
                  draggable={false}
                />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
