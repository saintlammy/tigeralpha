import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

// fs access (fonts + logo) needs the Node runtime, not Edge.
export const runtime = "nodejs";

export const alt = "TigerAlpha · $TIGAL — community-powered impact on BNB Smart Chain";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const root = process.cwd();

export default function OpengraphImage() {
  const sg700 = readFileSync(join(root, "assets/fonts/SpaceGrotesk-700.woff"));
  const sg500 = readFileSync(join(root, "assets/fonts/SpaceGrotesk-500.woff"));
  const logo = readFileSync(join(root, "public/assets/tiger.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#0A0D12",
          color: "#F5F4F2",
          fontFamily: "Space Grotesk",
          fontWeight: 500,
          overflow: "hidden",
        }}
      >
        {/* gradient top hairline */}
        <div
          style={{
            position: "absolute",
            display: "flex",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            backgroundImage: "linear-gradient(90deg, #FEA054, #F58A3C 45%, #D3722E)",
          }}
        />
        {/* orange glow behind the logo */}
        <div
          style={{
            position: "absolute",
            display: "flex",
            right: -170,
            top: 60,
            width: 740,
            height: 740,
            backgroundImage:
              "radial-gradient(circle, rgba(245,138,60,0.30), rgba(245,138,60,0) 60%)",
          }}
        />

        {/* left: copy */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: 740,
            height: "100%",
            padding: "0 0 0 80px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              alignSelf: "flex-start",
              border: "1px solid rgba(255,255,255,0.14)",
              background: "rgba(255,255,255,0.03)",
              borderRadius: 999,
              padding: "10px 18px 10px 14px",
              fontSize: 22,
              color: "#C7CCD3",
            }}
          >
            <div
              style={{ display: "flex", width: 12, height: 12, borderRadius: 6, background: "#39d98a", marginRight: 12 }}
            />
            <div style={{ display: "flex" }}>Live on BNB Smart Chain</div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 30,
              fontSize: 68,
              fontWeight: 700,
              lineHeight: 1.03,
              letterSpacing: -2,
            }}
          >
            <div style={{ display: "flex" }}>The apex of</div>
            <div style={{ display: "flex" }}>meme culture</div>
            <div style={{ display: "flex", color: "#FEA054" }}>with real impact</div>
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 27,
              color: "#8C95A2",
              maxWidth: 560,
              lineHeight: 1.4,
            }}
          >
            A community-powered token funding transparent, real-world charity.
          </div>

          <div style={{ display: "flex", alignItems: "center", marginTop: 44, fontSize: 32, fontWeight: 700 }}>
            <div style={{ display: "flex" }}>Tiger</div>
            <div style={{ display: "flex", color: "#FEA054" }}>Alpha</div>
            <div style={{ display: "flex", color: "#5C6675", marginLeft: 14, marginRight: 14 }}>·</div>
            <div style={{ display: "flex", color: "#8C95A2" }}>$TIGAL</div>
          </div>
        </div>

        {/* right: logo */}
        <div style={{ display: "flex", flexGrow: 1, alignItems: "center", justifyContent: "center", height: "100%" }}>
          { }
          <img src={logoSrc} width={400} height={400} alt="" />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Space Grotesk", data: sg700, weight: 700, style: "normal" },
        { name: "Space Grotesk", data: sg500, weight: 500, style: "normal" },
      ],
    },
  );
}
