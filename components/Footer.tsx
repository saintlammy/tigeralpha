import Image from "next/image";
import { site } from "@/lib/site";
import { CopyButton } from "./CopyButton";
import { DiscordIcon, TelegramIcon, XIcon } from "./icons";

const COLS = [
  {
    title: "Explore",
    links: [
      { href: "#mission", label: "Mission" },
      { href: "#metrics", label: "Tokenomics" },
      { href: "#impact", label: "Pledge" },
      { href: "#roadmap", label: "Roadmap" },
    ],
  },
  {
    title: "Community",
    links: [
      { href: "#community", label: "Telegram" },
      { href: "#community", label: "X / Twitter" },
      { href: "#community", label: "Discord" },
      { href: "#faq", label: "FAQ" },
    ],
  },
  {
    title: "Token",
    links: [
      { href: site.links.buy, label: "Buy $TIGAL" },
      { href: "#metrics", label: "Tokenomics" },
      { href: "#roadmap", label: "Governance" },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <a className="brand" href="#top">
              <Image src="/assets/tiger.png" alt="TigerAlpha logo" width={38} height={38} />
              <span className="name">
                Tiger<span>Alpha</span>
              </span>
            </a>
            <p>
              A community-powered meme ecosystem on BNB Smart Chain, built to fund real-world impact.
            </p>
          </div>
          {COLS.map((col) => (
            <div className="foot-col" key={col.title}>
              <h5>{col.title}</h5>
              {col.links.map((l, i) => {
                const external = l.href.startsWith("http");
                return (
                  <a
                    key={`${l.label}-${i}`}
                    href={l.href}
                    {...(external ? { target: "_blank", rel: "noopener" } : {})}
                  >
                    {l.label}
                  </a>
                );
              })}
            </div>
          ))}
        </div>

        <div className="contract" style={{ marginTop: 40 }}>
          <span className="lbl">CONTRACT</span>
          <code>{site.contract}</code>
          <CopyButton value={site.contract} />
        </div>

        <div className="foot-bottom">
          <p>
            © <span>{year}</span> TigerAlpha · $TIGAL. The pack runs together.
          </p>
          <div className="soc">
            <a href={site.links.telegram} target="_blank" rel="noopener" aria-label="Telegram">
              <TelegramIcon />
            </a>
            <a href={site.links.x} target="_blank" rel="noopener" aria-label="X">
              <XIcon />
            </a>
            <a href={site.links.discord} target="_blank" rel="noopener" aria-label="Discord">
              <DiscordIcon />
            </a>
          </div>
        </div>

        <p className="disclaimer">
          Disclaimer: $TIGAL is a community meme token. Nothing on this page is financial advice.
          Cryptocurrency involves significant risk and you may lose your entire investment. On-chain
          metrics (supply, holders, burn) are sourced from BscScan and can change; the charity
          program is a forward-looking commitment — no campaigns have run yet. Always do your own
          research and verify the official contract address before transacting.
        </p>
      </div>
    </footer>
  );
}
