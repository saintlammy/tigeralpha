import { Reveal } from "./Reveal";

const STEPS = [
  {
    title: "A share flows to the treasury",
    body: "As the ecosystem grows, a portion of its success is set aside in a transparent, multi-sig treasury earmarked for impact.",
  },
  {
    title: "The community chooses causes",
    body: "Holders propose and vote on which initiatives to back — allocation is decided by the pack, not behind closed doors.",
  },
  {
    title: "Every deployment is documented",
    body: "When funds go out, the transaction and the outcome are published — verifiable on-chain and reported back to the community.",
  },
];

const CAUSES = [
  {
    title: "Food distribution",
    body: "Meals and essentials for communities facing hunger.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M3 11l18-5v12L3 14v-3z" />
        <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
      </svg>
    ),
  },
  {
    title: "Educational support",
    body: "Books, tools, and access for learners who need it.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M22 10L12 5 2 10l10 5 10-5z" />
        <path d="M6 12v5c0 1 2.7 2 6 2s6-1 6-2v-5" />
      </svg>
    ),
  },
  {
    title: "Medical assistance",
    body: "Help covering urgent care and medical needs.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: "Community development",
    body: "Local projects that lift whole neighborhoods.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-3" />
      </svg>
    ),
  },
];

export function Pledge() {
  return (
    <section className="impact pad-y" id="impact">
      <div className="wrap">
        <Reveal className="eyebrow">The Pledge</Reveal>
        <div className="impact-grid" style={{ marginTop: 34, alignItems: "start" }}>
          <div>
            <Reveal as="h2" className="section-title">
              Built to
              <br />
              give back.
            </Reveal>
            <Reveal as="p" className="section-sub">
              We&apos;re just getting started — so we won&apos;t pretend otherwise. Here&apos;s the
              commitment the pack is building toward, and exactly how it will work in the open.
            </Reveal>
            <div className="steps">
              {STEPS.map((s, i) => (
                <Reveal key={s.title} className="step" delay={i * 90}>
                  <span className="sn">{i + 1}</span>
                  <div>
                    <h4>{s.title}</h4>
                    <p>{s.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <Reveal as="p" className="pillars-lead">
              The causes we&apos;ll champion
            </Reveal>
            <div className="impact-cards" style={{ marginTop: 18 }}>
              {CAUSES.map((c, i) => (
                <Reveal key={c.title} className="facet pcard" delay={i * 90}>
                  <div className="ic">{c.icon}</div>
                  <h4>{c.title}</h4>
                  <p>{c.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <Reveal className="pledge-bar">
          <span>
            <b>Documented publicly</b> — every initiative
          </span>
          <span>
            <b>On-chain treasury</b> — multi-sig secured
          </span>
          <span>
            <b>Community-voted</b> — allocation by the pack
          </span>
        </Reveal>
      </div>
    </section>
  );
}
