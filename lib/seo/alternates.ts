import type { Metadata } from "next";
import { SITE_URL } from "./site-config";
import { LEGACY_CANONICAL_OVERRIDES } from "./legacy-canonical-overrides";

type SupportedLocale = "ar" | "en";
type Alternates = NonNullable<Metadata["alternates"]>;

function normalizeFamilyPath(pathname: string): string {
  const withoutQueryOrHash = pathname.split(/[?#]/, 1)[0] ?? "/";
  const withLeadingSlash = `/${withoutQueryOrHash.replace(/^\/+/, "")}`;
  const withoutLocale = withLeadingSlash.replace(/^\/(?:ar|en)(?=\/|$)/, "");
  const withoutTrailingSlash = withoutLocale.replace(/\/+$/, "");

  return withoutTrailingSlash || "/";
}

function joinLocalePath(
  locale: "ar" | "en",
  familyPath: string,
): string {
  return familyPath === "/" ? `/${locale}` : `/${locale}${familyPath}`;
}

export function buildLocalizedAlternates({
  pathname,
  locale,
}: {
  pathname: string;
  locale: SupportedLocale;
}): Alternates {
  const familyPath = normalizeFamilyPath(pathname);
  const arPath = joinLocalePath("ar", familyPath);
  const enPath = joinLocalePath("en", familyPath);

  return {
    canonical: `${SITE_URL}${locale === "ar" ? arPath : enPath}`,
    languages: {
      ar: `${SITE_URL}${arPath}`,
      en: `${SITE_URL}${enPath}`,
    },
  };
}

export function buildLegacyAlternates({
  pathname,
}: {
  pathname: string;
}): Alternates {
  const familyPath = normalizeFamilyPath(pathname);

  if (familyPath in LEGACY_CANONICAL_OVERRIDES) {
    const overridePath = LEGACY_CANONICAL_OVERRIDES[familyPath as keyof typeof LEGACY_CANONICAL_OVERRIDES];
    return {
      canonical: `${SITE_URL}/ar${overridePath}`,
      languages: {
        ar: `${SITE_URL}/ar${overridePath}`,
        en: `${SITE_URL}/en${overridePath}`,
      },
    };
  }

  const arPath = joinLocalePath("ar", familyPath);
  const enPath = joinLocalePath("en", familyPath);

  return {
    canonical: `${SITE_URL}${arPath}`,
    languages: {
      ar: `${SITE_URL}${arPath}`,
      en: `${SITE_URL}${enPath}`,
    },
  };
}
