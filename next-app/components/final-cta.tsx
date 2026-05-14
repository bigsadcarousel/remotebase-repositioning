import { Icon } from './icon';

export function FinalCTA() {
  return (
    <section className="final" id="contact">
      <div className="final-bg" aria-hidden="true">
        <svg
          className="final-bg-svg"
          viewBox="0 0 600 600"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern
              id="final-grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M40 0H0V40"
                fill="none"
                stroke="rgba(14,11,61,0.06)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect x="0" y="0" width="600" height="600" fill="url(#final-grid)" />
          <circle
            cx="500"
            cy="300"
            r="240"
            fill="none"
            stroke="rgba(92,63,232,0.18)"
            strokeWidth="1"
            strokeDasharray="2 6"
          />
          <circle
            cx="500"
            cy="300"
            r="180"
            fill="none"
            stroke="rgba(92,63,232,0.22)"
            strokeWidth="1"
          />
          <circle
            cx="500"
            cy="300"
            r="120"
            fill="none"
            stroke="rgba(92,63,232,0.3)"
            strokeWidth="1"
          />
          <circle
            cx="500"
            cy="300"
            r="60"
            fill="none"
            stroke="rgba(92,63,232,0.45)"
            strokeWidth="1"
          />
          <line
            x1="500"
            y1="240"
            x2="500"
            y2="360"
            stroke="rgba(92,63,232,0.4)"
            strokeWidth="1"
          />
          <line
            x1="440"
            y1="300"
            x2="560"
            y2="300"
            stroke="rgba(92,63,232,0.4)"
            strokeWidth="1"
          />
          <circle cx="500" cy="300" r="4" fill="#5C3FE8" />
          <circle
            cx="500"
            cy="300"
            r="10"
            fill="none"
            stroke="#5C3FE8"
            strokeWidth="1.5"
          />
          <g stroke="rgba(92,63,232,0.6)" strokeWidth="1.25">
            <line x1="500" y1="56" x2="500" y2="68" />
            <line x1="500" y1="532" x2="500" y2="544" />
            <line x1="256" y1="300" x2="268" y2="300" />
          </g>
          <text
            x="500"
            y="50"
            textAnchor="middle"
            fontFamily="JetBrains Mono, monospace"
            fontSize="9"
            letterSpacing="0.22em"
            fill="rgba(92,63,232,0.7)"
          >
            TARGET / 30D
          </text>
        </svg>
      </div>

      <div className="container final-inner">
        <div>
          <div className="chap">11</div>
          <div className="clabel">Talk to us</div>
        </div>
        <div>
          <h2>
            Tell us what&apos;s broken.
            <br />
            We&apos;ll tell you what we can ship<span className="acc">.</span>
          </h2>
          <div className="italic">{'"30 minutes. That\'s all we need."'}</div>
          <p className="sub">
            If we can ship it, we&apos;ll tell you when. If we can&apos;t, we&apos;ll tell
            you why.
          </p>
          <a
            className="btn btn-violet btn-lg"
            href="https://api.leadconnectorhq.com/widget/bookings/meet-remotebase"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a 30-min call <Icon name="arrow-right" size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
