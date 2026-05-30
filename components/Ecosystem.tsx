import { ecosystem, ecosystemWide } from "@/lib/content";
import { cx } from "@/lib/cx";
import { Reveal } from "./Reveal";

function Card({ num, title, body, chips, wide }: (typeof ecosystem)[number] & { wide?: boolean }) {
  return (
    <Reveal className={cx("facet eco", wide && "eco-wide")}>
      <div className="num">{num}</div>
      <h3>{title}</h3>
      <p>{body}</p>
      <div className="chips">
        {chips.map((c) => (
          <span key={c}>{c}</span>
        ))}
      </div>
    </Reveal>
  );
}

export function Ecosystem() {
  return (
    <section className="ecosystem pad-y" id="ecosystem">
      <div className="wrap">
        <div className="stats-head">
          <div>
            <Reveal className="eyebrow">The Ecosystem</Reveal>
            <Reveal as="h2" className="section-title" style={{ marginTop: 18 }}>
              Four parts,
              <br />
              one pack.
            </Reveal>
          </div>
          <Reveal as="p" className="section-sub">
            Token, community, charity, and governance — the building blocks of a movement that lasts
            beyond the hype cycle.
          </Reveal>
        </div>
        <div className="eco-grid">
          {ecosystem.map((c) => (
            <Card key={c.num} {...c} />
          ))}
          <Card {...ecosystemWide} wide />
        </div>
      </div>
    </section>
  );
}
