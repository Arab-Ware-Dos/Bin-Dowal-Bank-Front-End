export const PERSONAL_FINANCING_SLUGS = [
  "financing-personal",
  "financing-home",
  "financing-business",
  "financing-takamul",
  "financing-thimar",
  "financing-taameer",
  "financing-noor",
  "financing-zad",
] as const;

export type PersonalFinancingSlug = (typeof PERSONAL_FINANCING_SLUGS)[number];

export const PERSONAL_FINANCING_ROUTE_PATHS = PERSONAL_FINANCING_SLUGS.map(
  (slug) => `/personal/${slug}` as const
);

export function isPersonalFinancingSlug(slug: string): slug is PersonalFinancingSlug {
  return PERSONAL_FINANCING_SLUGS.includes(slug as PersonalFinancingSlug);
}
