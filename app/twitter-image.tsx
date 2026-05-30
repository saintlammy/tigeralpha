import OpengraphImage from "./opengraph-image";

// Reuse the OpenGraph card for the Twitter/X summary_large_image.
export const runtime = "nodejs";
export const alt = "TigerAlpha · $TIGAL — community-powered impact on BNB Smart Chain";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return OpengraphImage();
}
