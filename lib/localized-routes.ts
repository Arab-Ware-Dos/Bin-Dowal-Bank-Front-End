import { Locale } from "@/i18n/config";

export const LOCALIZED_STATIC_ROUTES = [
  "/",
  "/about",
  "/contact"
] as const;

export type LocalizedStaticRoute = (typeof LOCALIZED_STATIC_ROUTES)[number];

export function getLocalizedHref(href: string, locale: Locale): string {
  // Don't modify external links, anchors, or mailto/tel
  if (
    href.startsWith("http") ||
    href.startsWith("//") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("#") ||
    href.startsWith("?")
  ) {
    return href;
  }

  // Parse to separate pathname, search, and hash
  const dummyBase = "http://localhost";
  let urlObj;
  try {
    urlObj = new URL(href, dummyBase);
  } catch (e) {
    return href;
  }

  let pathname = urlObj.pathname;
  if (pathname.length > 1 && pathname.endsWith("/")) {
    pathname = pathname.slice(0, -1);
  }

  // Remove existing locale if present (exact segment match)
  const segments = pathname.split("/");
  if (segments.length > 1 && (segments[1] === "ar" || segments[1] === "en")) {
    segments.splice(1, 1);
    pathname = segments.join("/") || "/";
  }

  // Exact match only against the allowed localized routes
  const isLocalized = LOCALIZED_STATIC_ROUTES.some((route) => pathname === route);

  if (isLocalized) {
    const newPath = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;
    return newPath + urlObj.search + urlObj.hash;
  }

  // Return unchanged legacy route (with original search/hash if it was passed in href)
  return href;
}
