import { site } from "@/lib/site";
import { Reveal } from "./Reveal";
import { ArrowUpRight, DiscordIcon, TelegramIcon, XIcon } from "./icons";

const CARDS = [
  {
    name: "Telegram",
    href: site.links.telegram,
    icon: <TelegramIcon />,
    body: "The heartbeat of the pack — announcements, support, and round-the-clock energy.",
    cta: "Open Telegram",
  },
  {
    name: "X / Twitter",
    href: site.links.x,
    icon: <XIcon />,
    body: "Memes, market updates, community spotlights, and impact reports — all in one feed.",
    cta: "Follow on X",
  },
  {
    name: "Discord",
    href: site.links.discord, // TODO(launch): real invite URL
    icon: <DiscordIcon />,
    body: "Go deeper — governance talks, campaign planning, and the core of the community.",
    cta: "Join Discord",
  },
];

export function Community() {
  return (
    <section className="community pad-y" id="community">
      <div className="wrap">
        <Reveal className="eyebrow" style={{ justifyContent: "center" }}>
          Join The Pack
        </Reveal>
        <Reveal
          as="h2"
          className="section-title"
          style={{ marginTop: 18, maxWidth: "16ch", marginInline: "auto" }}
        >
          A movement is louder together.
        </Reveal>
        <div className="comm-grid">
          {CARDS.map((c, i) => (
            <Reveal
              key={c.name}
              as="a"
              className="comm"
              delay={i * 90}
              href={c.href}
              target="_blank"
              rel="noopener"
            >
              <span className="glow" />
              <div className="ci">{c.icon}</div>
              <h3>{c.name}</h3>
              <p>{c.body}</p>
              <span className="go">
                {c.cta} <ArrowUpRight />
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
