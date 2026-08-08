export const PERSONAL_INDEPENDENT_TRANSFER_SLUGS = [
  "dool-express",
  "unified-network",
] as const;

export type PersonalIndependentTransferSlug =
  (typeof PERSONAL_INDEPENDENT_TRANSFER_SLUGS)[number];

export const PERSONAL_INDEPENDENT_TRANSFER_ROUTE_PATHS =
  PERSONAL_INDEPENDENT_TRANSFER_SLUGS.map(
    (slug) => `/services/${slug}` as const,
  );

export function isPersonalIndependentTransferSlug(
  slug: string,
): slug is PersonalIndependentTransferSlug {
  return PERSONAL_INDEPENDENT_TRANSFER_SLUGS.includes(
    slug as PersonalIndependentTransferSlug,
  );
}
