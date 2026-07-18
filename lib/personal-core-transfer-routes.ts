export const PERSONAL_CORE_TRANSFER_SLUGS = [
  "local-transfers",
  "international-transfers",
  "fast-money-transfers",
] as const;

export type PersonalCoreTransferSlug =
  (typeof PERSONAL_CORE_TRANSFER_SLUGS)[number];

export function isPersonalCoreTransferSlug(
  slug: string,
): slug is PersonalCoreTransferSlug {
  return PERSONAL_CORE_TRANSFER_SLUGS.includes(
    slug as PersonalCoreTransferSlug,
  );
}

export const PERSONAL_CORE_TRANSFER_ROUTE_PATHS =
  PERSONAL_CORE_TRANSFER_SLUGS.map(
    (slug) => `/personal/${slug}` as const,
  );
