export const PERSONAL_REMITTANCE_SLUGS = [
  "moneygram",
  "shift",
  "upt",
  "bin-yaala",
  "alawneh",
  "zamzam",
  "swift",
] as const;

export type PersonalRemittanceSlug = (typeof PERSONAL_REMITTANCE_SLUGS)[number];

export const PERSONAL_REMITTANCE_ROUTE_PATHS = PERSONAL_REMITTANCE_SLUGS.map(
  (slug) => `/services/${slug}` as const
);

export function isPersonalRemittanceSlug(slug: string): slug is PersonalRemittanceSlug {
  return PERSONAL_REMITTANCE_SLUGS.includes(slug as PersonalRemittanceSlug);
}
