export const PERSONAL_ACCOUNT_DEPOSIT_SLUGS = [
  "current-account",
  "savings-account",
  "minors-account",
  "investment-deposit",
] as const;

export type PersonalAccountDepositSlug =
  (typeof PERSONAL_ACCOUNT_DEPOSIT_SLUGS)[number];

export const PERSONAL_ACCOUNT_DEPOSIT_ROUTE_PATHS =
  PERSONAL_ACCOUNT_DEPOSIT_SLUGS.map(
    (slug) => `/services/${slug}` as const,
  );

export function isPersonalAccountDepositSlug(
  slug: string,
): slug is PersonalAccountDepositSlug {
  return PERSONAL_ACCOUNT_DEPOSIT_SLUGS.includes(
    slug as PersonalAccountDepositSlug,
  );
}
