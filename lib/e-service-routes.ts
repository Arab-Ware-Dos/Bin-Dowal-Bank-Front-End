export const E_SERVICE_SLUGS = [
  "mobile-banking",
  "internet-banking",
  "e-wallet",
  "mushtarayati-network",
] as const;

export type EServiceSlug = (typeof E_SERVICE_SLUGS)[number];

export const E_SERVICE_ROUTE_PATHS = E_SERVICE_SLUGS.map(
  (slug) => `/e-services/${slug}` as const
);
