import { getBankingServiceBySlug } from "@/services/banking-service-pages";

export const PERSONAL_E_CHANNEL_COMPATIBILITY_SLUGS = [
  "mobile-banking",
  "e-wallet",
  "mushtarayati-network",
] as const;

export type PersonalEChannelCompatibilitySlug =
  (typeof PERSONAL_E_CHANNEL_COMPATIBILITY_SLUGS)[number];

export function isPersonalEChannelCompatibilitySlug(
  slug: string,
): slug is PersonalEChannelCompatibilitySlug {
  return PERSONAL_E_CHANNEL_COMPATIBILITY_SLUGS.includes(
    slug as PersonalEChannelCompatibilitySlug,
  );
}

function createPersonalCompatibilityBreadcrumbs(slug: PersonalEChannelCompatibilitySlug) {
  const rootBreadcrumb = {
    labelKey: "nav.personalBanking",
    href: "/personal-banking"
  };

  if (slug === "mobile-banking") {
    return [
      rootBreadcrumb,
      {
        labelKey: "nav.mobileBanking",
        label: { ar: "الموبايل البنكي", en: "Mobile Banking" }
      }
    ];
  }
  
  if (slug === "e-wallet") {
    return [
      rootBreadcrumb,
      {
        labelKey: "nav.eWallet",
        label: { ar: "المحفظة الإلكترونية", en: "e-Wallet" }
      }
    ];
  }

  if (slug === "mushtarayati-network") {
    return [
      rootBreadcrumb,
      {
        labelKey: "nav.pos",
        label: { ar: "نقاط البيع شبكة مشترياتي", en: "POS Mushtarayati" }
      }
    ];
  }

  return [rootBreadcrumb];
}

function getLegacyPersonalRelatedServicesKeys(slug: PersonalEChannelCompatibilitySlug): string[] {
  if (slug === "mobile-banking") {
    return ["e-wallet", "mushtarayati-network", "virtual-card"];
  }
  if (slug === "e-wallet") {
    return ["mobile-banking", "mushtarayati-network", "virtual-card"];
  }
  if (slug === "mushtarayati-network") {
    // Was empty in personal based on previous findings, but let's just return empty array
    return [];
  }
  return [];
}

export async function getPersonalEChannelCompatibilityService(
  slug: PersonalEChannelCompatibilitySlug,
) {
  const canonicalService = await getBankingServiceBySlug("e-services", slug);

  if (!canonicalService) {
    return null;
  }

  return {
    ...canonicalService,
    section: "personal" as const,
    breadcrumbs: createPersonalCompatibilityBreadcrumbs(slug),
    relatedServicesKeys: getLegacyPersonalRelatedServicesKeys(slug),
  };
}
