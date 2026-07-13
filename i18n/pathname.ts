import { type Locale, locales } from "./config";

/**
 * Builds a localized path.
 * 
 * Examples:
 * buildLocalizedPath("ar", "/about") -> "/ar/about"
 * buildLocalizedPath("en", "/ar/about") -> "/en/about"
 * buildLocalizedPath("en", "/") -> "/en"
 * buildLocalizedPath("ar", "https://example.com") -> "https://example.com"
 * buildLocalizedPath("ar", "mailto:test@example.com") -> "mailto:test@example.com"
 * buildLocalizedPath("ar", "#services") -> "#services"
 */
export function buildLocalizedPath(locale: Locale, href: string): string {
  if (!href) return `/${locale}`;
  
  // Don't modify external links, email, or tel links
  if (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("//")) {
    return href;
  }

  // Don't modify hash-only links
  if (href.startsWith("#")) {
    return href;
  }

  const match = href.match(/^([^?#]*)([?#].*)?$/);
  const pathPart = match ? match[1] : href;
  const queryAndHash = match && match[2] ? match[2] : "";
  const hasTrailingSlash = pathPart.length > 1 && pathPart.endsWith("/");
  let segments = pathPart.split("/").filter(Boolean);

  // If the first segment is an existing locale, remove it
  if (segments.length > 0 && locales.includes(segments[0] as Locale)) {
    segments.shift();
  }

  let newPath = `/${locale}${segments.length > 0 ? "/" + segments.join("/") : ""}`;
  if (hasTrailingSlash && !newPath.endsWith("/")) {
    newPath += "/";
  }
  
  return `${newPath}${queryAndHash || ""}`;
}

/**
 * Replaces the locale in an existing pathname.
 * 
 * Examples:
 * replaceLocaleInPath("/ar/about", "en") -> "/en/about"
 * replaceLocaleInPath("/news", "ar") -> "/ar/news"
 */
export function replaceLocaleInPath(pathname: string, targetLocale: Locale): string {
  return buildLocalizedPath(targetLocale, pathname);
}
