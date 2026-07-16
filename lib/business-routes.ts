export const BUSINESS_SLUGS = [
  "corporate-current-account",
  "corporate-investment-deposits",
  "swift-transfers",
  "bank-guarantees",
] as const;

export type BusinessSlug = (typeof BUSINESS_SLUGS)[number];

export const BUSINESS_ROUTE_PATHS = BUSINESS_SLUGS.map(
  (slug) => `/business/${slug}` as const
);

export function isBusinessSlug(slug: string): slug is BusinessSlug {
  return BUSINESS_SLUGS.includes(slug as BusinessSlug);
}
