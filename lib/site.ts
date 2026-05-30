/**
 * Single source of truth for project identity + outbound links.
 *
 * Everything a non-developer might need to change before launch lives here.
 * Items marked TODO are placeholders flagged in the design review.
 */
export const site = {
  name: "TigerAlpha",
  ticker: "TIGAL",
  chain: "BNB Smart Chain",

  /** Verified-correct on the design handoff. */
  contract: "0xd8ee344a49dC8236e8cA9A74DAaaf69D99164014",

  links: {
    telegram: "https://t.me/tigeralphaofficial/1",
    x: "https://x.com/tigeralphatoken",
    discord: "#", // TODO(launch): real Discord invite URL — placeholder per review.
    buy: "https://pancakeswap.finance/swap?outputCurrency=0xd8ee344a49dC8236e8cA9A74DAaaf69D99164014&inputCurrency=BNB&chain=bsc",
  },
} as const;

export type Site = typeof site;
