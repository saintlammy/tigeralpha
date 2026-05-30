import { Fragment } from "react";
import { marqueePhrase } from "@/lib/content";

function Row() {
  return (
    <span>
      {marqueePhrase.map((word, i) => (
        <Fragment key={i}>
          {word} <i>✦</i>{" "}
        </Fragment>
      ))}
    </span>
  );
}

/** Full-width infinite ticker (CSS-animated, pauses on hover). */
export function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        <Row />
        <Row />
      </div>
    </div>
  );
}
