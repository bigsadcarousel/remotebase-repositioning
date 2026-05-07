const CALLOUTS = [
  { tag: "World's first", body: 'DAO-based pet insurance platform' },
  { tag: 'AI-powered', body: 'Risk assessment, claims processing, customer support' },
  {
    tag: 'Variable Space',
    body: "NWM's new emerging-tech division grew out of this work",
  },
];

export function CaseStudy() {
  return (
    <section className="section" id="case">
      <div className="container">
        <div className="shead">
          <div>
            <div className="chap active">07</div>
            <div className="clabel">Case study</div>
          </div>
          <div>
            <span className="eyebrow">Featured case · Northwestern Mutual</span>
            <h3 className="cs-headline">
              {'"How a leading American insurer launched the world\'s first DAO-based pet insurance platform."'}
            </h3>
            <p className="cs-deck">
              A 169-year-old financial services company partnered with Remotebase to build
              an AI-powered, blockchain-based insurance product — the first of its kind in
              the world.
            </p>
          </div>
        </div>

        <div className="cs-callouts">
          {CALLOUTS.map((c, i) => (
            <div className="cs-callout" key={c.tag}>
              <div className="cs-callout-tag">{`0${i + 1}`}</div>
              <div className="cs-callout-head">{c.tag}</div>
              <div className="cs-callout-body">{c.body}</div>
            </div>
          ))}
        </div>

        <a
          className="tlink violet"
          href="https://remotebase.com/case-studies/northwestern-mutual"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read the full case study <span className="arr">→</span>
        </a>
      </div>
    </section>
  );
}
