import { site } from "@/lib/site";
import { ButtonLink } from "./ButtonLink";
import { Reveal } from "./Reveal";
import { ArrowRight } from "./icons";

export function CtaBand() {
  return (
    <section className="cta-band pad-y" id="buy">
      <div className="wrap">
        <Reveal className="cta-card">
          {/* decorative watermark */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="cta-watermark" src="/assets/tiger.png" alt="" />
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            Join the movement
          </div>
          <h2 style={{ marginTop: 18 }}>
            Run with the
            <br />
            <span className="g">apex pack.</span>
          </h2>
          <p>
            Be early to a meme token with a mission. Grab $TIGAL, join the community, and help turn
            viral energy into real-world impact.
          </p>
          <div className="hero-cta" style={{ marginTop: 32 }}>
            <ButtonLink href={site.links.buy} magnetic external>
              Buy $TIGAL
              <ArrowRight />
            </ButtonLink>
            <ButtonLink href={site.links.telegram} variant="ghost" external>
              Join Telegram
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
