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
  const newPath = replaceLocaleInPath(pathname, targetLocale);

  const queryString = search ? `?${search}` : "";
  const hashString = hash ? (hash.startsWith("#") ? hash : `#${hash}`) : "";

  return `${newPath}${queryString}${hashString}`;
}
