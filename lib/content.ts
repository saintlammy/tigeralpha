/**
 * Static page content. Kept separate from markup so a content swap is one edit.
 *
 * SOURCE OF TRUTH = the design HTML (the team's "Claude Design" edits). The bundled
 * handoff README was stale, so the LIVE BscScan tokenomics below — not the README's
 * placeholder numbers — are canonical. The superseded handoff set is preserved as
 * `HANDOFF_PLACEHOLDER_STATS` for reference.
 *
 * Tax is presented consistently as 9% (3/3/3) everywhere — matching the design's
 * tax-split card and Tax tile. The FAQ's old "zero buy/sell tax" line (which the
 * design still contradicts itself on) is corrected to 9% here.
 */

export type Stat = {
  tag: string;
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  placeholder?: boolean;
};

/** Live from BscScan — matches the updated design file. */
export const tokenStats: Stat[] = [
  { tag: "Max Supply", value: 555.56, decimals: 2, suffix: "T", label: "Fixed max supply on-chain" },
  { tag: "Holders", value: 423, label: "Wallets holding on BNB Chain" },
  { tag: "Burned", value: 20, suffix: "%", label: "Of supply burned to 0x…dEaD" },
  { tag: "Tax", value: 9, suffix: "%", label: "Buy & sell — split three ways" },
];

/** Superseded placeholder set from the stale handoff README — kept for reference only. */
export const HANDOFF_PLACEHOLDER_STATS: Stat[] = [
  { tag: "Supply", value: 1, suffix: "B", label: "Total fixed supply of TIGAL" },
  {
    tag: "Holders",
    value: 12400,
    suffix: "+",
    label: "Wallets in the pack and growing",
    placeholder: true,
  },
  { tag: "Tax", value: 9, suffix: "%", label: "Buy & sell — split three ways" },
  { tag: "Liquidity", value: 100, suffix: "%", label: "Locked & contract renounced" },
];

export type TaxSegment = { pct: string; label: string; desc: string };

export const taxSplit: TaxSegment[] = [
  { pct: "3%", label: "Marketing", desc: "Growth, reach & visibility" },
  { pct: "3%", label: "Charity", desc: "Funds the impact treasury" },
  { pct: "3%", label: "Buyback & Burn", desc: "Reduces supply over time" },
];

export type EcoCard = { num: string; title: string; body: string; chips: string[] };

export const ecosystem: EcoCard[] = [
  {
    num: "01",
    title: "TIGAL Token",
    body: "The ecosystem's core asset — for trading, holding, rewards, and governance eligibility.",
    chips: ["Trade", "Hold", "Rewards"],
  },
  {
    num: "02",
    title: "Community Hub",
    body: "Telegram, X, and Discord — where the pack engages, votes, and rallies behind campaigns.",
    chips: ["Engage", "Vote", "Campaigns"],
  },
  {
    num: "03",
    title: "Charity Program",
    body: "Food, education, medical aid, and community development — every initiative documented in public.",
    chips: ["Food", "Education", "Medical"],
  },
  {
    num: "04",
    title: "Governance Layer",
    body: "Future voting rights let holders steer charity allocation, partnerships, and priorities.",
    chips: ["Proposals", "Voting", "Treasury"],
  },
];

export const ecosystemWide: EcoCard = {
  num: "UTILITY",
  title: "From holding to real influence",
  body: "TIGAL's utility deepens in phases — starting with rewards, growing into voting, an impact marketplace, staking, and partner benefits.",
  chips: ["Community rewards", "Voting rights", "Crowdfunding", "Staking", "NFT & badges"],
};

export type PhaseState = "done" | "now" | "next";
export type Phase = {
  title: string;
  state: PhaseState;
  stateLabel: string;
  lead: string;
  items: string[];
};

export const roadmap: Phase[] = [
  {
    title: "Phase 1 — Foundation",
    state: "done",
    stateLabel: "Completed",
    lead: "Lighting the fire — token, liquidity, and the first members of the pack.",
    items: ["Token deployment", "Liquidity creation", "Community formation"],
  },
  {
    title: "Phase 2 — Growth",
    state: "now",
    stateLabel: "In progress",
    lead: "Going wide — launch the brand and grow reach with the first charity pilot.",
    items: ["Website launch", "Community expansion", "Influencer outreach", "Charity pilot campaign"],
  },
  {
    title: "Phase 3 — Governance",
    state: "next",
    stateLabel: "Upcoming",
    lead: "Power to the pack — proposals, voting, and a public transparency dashboard.",
    items: ["Proposal system", "Community voting", "Transparency dashboard"],
  },
  {
    title: "Phase 4 — Ecosystem",
    state: "next",
    stateLabel: "Upcoming",
    lead: "The full movement — staking, NFTs, partnerships, and an impact marketplace.",
    items: ["Staking", "NFT programs", "Partnerships", "Impact marketplace"],
  },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "What is TigerAlpha (TIGAL)?",
    a: "TigerAlpha is a community-driven meme token on the BNB Smart Chain that pairs internet culture with real-world charitable impact. It's built so entertainment, community participation, and social good can coexist — not just speculation.",
  },
  {
    q: "How will the charity program work?",
    a: "As the ecosystem grows, a share of its success will be set aside in a transparent multi-sig treasury. The community will propose and vote on which causes to back — food distribution, education, medical assistance, and community development — and every deployment will be documented publicly and verifiable on-chain. We haven't run campaigns yet; this is the model we're building toward in the open.",
  },
  {
    // Review fix: previously claimed "zero buy/sell tax", contradicting the 9% tax split.
    q: "Is the contract safe?",
    a: "$TIGAL is built around the trust signals standard to credible BSC projects: locked liquidity, a renounced contract, a transparent 9% tax split three ways (3% marketing, 3% charity, 3% buyback & burn), and a multi-signature treasury. Always verify the official contract address before buying — it's listed in the hero above and the footer.",
  },
  {
    q: "How do I buy $TIGAL?",
    a: "Connect a BSC-compatible wallet (such as MetaMask or Trust Wallet), fund it with BNB, then swap on a supported decentralized exchange using the official TIGAL contract address. Always double-check the address to avoid imposter tokens.",
  },
  {
    q: "Will holders get a say in the project?",
    a: "Yes. Governance rolls out in Phase 3, giving holders voting rights over charity allocation, campaign priorities, partnerships, and ecosystem initiatives. The long-term vision is a decentralized movement steered by its community.",
  },
];

export const marqueePhrase = [
  "$TIGAL",
  "COMMUNITY",
  "REAL IMPACT",
  "BNB CHAIN",
  "TRANSPARENT",
  "GOVERNANCE",
  "THE PACK",
];
