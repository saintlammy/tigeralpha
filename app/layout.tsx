import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const title = "TigerAlpha · $TIGAL — Community-Powered Impact on BNB Chain";
const description =
  "TigerAlpha (TIGAL) is a purpose-driven meme token on BNB Smart Chain pairing community culture with real-world charitable impact.";

// Resolves to the deploy's production URL automatically (Netlify `URL`, or Vercel),
// falling back to localhost in dev. Set a custom domain on your host to override.
function resolveBaseUrl(): string {
  if (process.env.URL) return process.env.URL; // Netlify production URL
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  return "http://localhost:3000";
}
const baseUrl = resolveBaseUrl();

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title,
  description,
  // Favicons resolved from app/favicon.ico, app/icon.png, app/apple-icon.png
  openGraph: {
    title,
    description,
    type: "website",
    siteName: "TigerAlpha",
    // image provided by app/opengraph-image.tsx
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    // image provided by app/twitter-image.tsx
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0D12",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
