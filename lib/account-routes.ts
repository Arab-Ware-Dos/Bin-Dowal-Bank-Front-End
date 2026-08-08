export const ACCOUNT_SLUGS = [
  "vip",
  "noor",
  "youth",
  "expat",
  "noor-ladies-card",
] as const;

export type AccountSlug = (typeof ACCOUNT_SLUGS)[number];

export const ACCOUNT_ROUTE_PATHS = ACCOUNT_SLUGS.map(
  (slug) => `/services/${slug}` as const
);

export function isAccountSlug(slug: string): slug is AccountSlug {
  return ACCOUNT_SLUGS.includes(slug as AccountSlug);
}
