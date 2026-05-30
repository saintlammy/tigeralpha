import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    // OG/Twitter routes use Satori's <img>; Hero's reduced-motion fallback is a
    // percentage-sized plain <img> on purpose (next/image fill doesn't fit it).
    files: ["app/opengraph-image.tsx", "app/twitter-image.tsx", "components/Hero.tsx"],
    rules: { "@next/next/no-img-element": "off" },
  },
]);

export default eslintConfig;
