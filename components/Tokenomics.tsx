import { tokenStats, taxSplit } from "@/lib/content";
import { CountUp } from "./CountUp";
import { Reveal } from "./Reveal";

export function Tokenomics() {
  return (
    <section className="stats pad-y" id="metrics">
      <div className="wrap">
        <div className="stats-head">
          <div>
            <Reveal className="eyebrow">Tokenomics</Reveal>
            <Reveal as="h2" className="section-title" style={{ marginTop: 18 }}>
              Built to be
              <br />
              held, not hyped.
            </Reveal>
          </div>
          <Reveal as="p" className="section-sub">
            Fair, fixed, and locked. $TIGAL is engineered for a long-term community — not a
            pump-and-dump cycle.
          </Reveal>
        </div>

        <div className="stat-grid">
          {tokenStats.map((s, i) => (
            <Reveal key={s.tag} className="facet stat" delay={i * 90}>
              <span className="tag">{s.tag}</span>
              <div className="v">
                <CountUp to={s.value} decimals={s.decimals ?? 0} prefix={s.prefix} />
                {s.suffix ? <small>{s.suffix}</small> : null}
              </div>
              <div className="k">{s.label}</div>
            </Reveal>
          ))}
        </div>

        <Reveal className="tax-split">
          <div className="ts-head">
            <span className="ts-title">
              Where the <b>9%</b> goes
            </span>
            <span className="ts-sub">Every transaction fuels the ecosystem</span>
          </div>
          <div className="ts-bar">
            <span className="s1" />
            <span className="s2" />
            <span className="s3" />
          </div>
          <div className="ts-legend">
            {taxSplit.map((t, i) => (
              <div className="tl" key={t.label}>
                <span className={`d d${i + 1}`} />
                <span className="tn">
                  <b>{t.pct}</b> {t.label}
                </span>
                <em>{t.desc}</em>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal as="p" className="note">
          Max supply &amp; holders are live from BscScan (555,555,555,555,555 TIGAL · 423 holders,
          May 30 2026). Roughly 20% of supply has already been burned to <code>0x…dEaD</code> — view
          the exact burned balance on BscScan’s Holders tab.
        </Reveal>
      </div>
    </section>
  );
}
