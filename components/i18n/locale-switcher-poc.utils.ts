import { Locale } from "@/i18n/config";
import { replaceLocaleInPath } from "@/i18n/pathname";

interface BuildLocaleSwitchTargetParams {
  pathname: string;
  search: string;
  hash: string;
  targetLocale: Locale;
}

export function buildLocaleSwitchTarget({
  pathname,
  search,
  hash,
  targetLocale,
}: BuildLocaleSwitchTargetParams): string {
  // Fix for POC paths
  let newPath = pathname;
  if (pathname.startsWith('/i18n-poc/ar')) {
    newPath = pathname.replace('/i18n-poc/ar', `/i18n-poc/${targetLocale}`);
  } else if (pathname.startsWith('/i18n-poc/en')) {
    newPath = pathname.replace('/i18n-poc/en', `/i18n-poc/${targetLocale}`);
  } else {
    newPath = replaceLocaleInPath(pathname, targetLocale);
  }

  const queryString = search ? `?${search}` : "";
  const hashString = hash ? (hash.startsWith("#") ? hash : `#${hash}`) : "";

  return `${newPath}${queryString}${hashString}`;
}
