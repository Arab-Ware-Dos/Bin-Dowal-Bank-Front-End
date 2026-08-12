import { Locale } from "@/i18n/config";
import { ACCOUNT_ROUTE_PATHS } from "./account-routes";
import { E_SERVICE_ROUTE_PATHS } from "./e-service-routes";
import { BUSINESS_ROUTE_PATHS } from "./business-routes";
import { PERSONAL_FINANCING_ROUTE_PATHS } from "@/lib/personal-financing-routes";
import { PERSONAL_REMITTANCE_ROUTE_PATHS } from "@/lib/personal-remittance-routes";
import { PERSONAL_INDEPENDENT_TRANSFER_ROUTE_PATHS } from "@/lib/personal-independent-transfer-routes";
import { PERSONAL_CORE_TRANSFER_ROUTE_PATHS } from "@/lib/personal-core-transfer-routes";
import { PERSONAL_ACCOUNT_DEPOSIT_ROUTE_PATHS } from "@/lib/personal-account-deposit-routes";
import { CAREER_ROUTE_PATHS } from "@/lib/career-routes";

export const LOCALIZED_STATIC_ROUTES = [
  "/",
  "/about",
  "/contact",
  "/knowledge-center/annual-reports",
  "/about/board-of-directors",
  "/about/partners",
  "/about/social-responsibility",
  "/about/compliance-statement",
  "/about/risk-management",
  "/business-banking",
  "/personal-banking",
  "/financing",
  "/digital-channels",
  "/specialized-services",
  "/knowledge",
  "/cards",
  "/cards/credit-card",
  "/cards/debit-card",
  "/cards/noor-card",
  "/cards/prepaid-card",
  "/calculator",
  "/knowledge-center/faq",
  "/customer-service/complaints",
  "/customer-service/service-request",
  "/customer-service/bank-cards-request",
  "/customer-service/forms",
  "/branches",
  "/atm-and-branches",
  "/news",
  "/news/bank-bin-dowl-for-islamic-microfinance-participates-in-the-arab-banks-union-forum-in-beirut",
  "/news/saba-african-bank-on-an-official-visit-to-bank-bin-dowal-for-islamic-microfinance",
  "/news/conclusion-of-the-financial-and-credit-analysis-course",
  "/news/conclusion-of-the-two-courses-on-financial-and-credit-analysis",
  ...ACCOUNT_ROUTE_PATHS,
  ...E_SERVICE_ROUTE_PATHS,
  ...BUSINESS_ROUTE_PATHS,
  ...PERSONAL_FINANCING_ROUTE_PATHS,
  ...PERSONAL_REMITTANCE_ROUTE_PATHS,
  ...PERSONAL_INDEPENDENT_TRANSFER_ROUTE_PATHS,
  ...PERSONAL_CORE_TRANSFER_ROUTE_PATHS,
  ...PERSONAL_ACCOUNT_DEPOSIT_ROUTE_PATHS,
  ...CAREER_ROUTE_PATHS
] as const;

export type LocalizedStaticRoute = (typeof LOCALIZED_STATIC_ROUTES)[number];

export function getLocalizedHref(href: string, locale: Locale): string {
  // Don't modify external links, anchors, mailto/tel, or relative paths
  if (!href.startsWith("/") || href.startsWith("//")) {
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

  // Match exact static routes or dynamic routes (/services/*, /news/*, /customer-service/*, etc.)
  const isLocalized =
    LOCALIZED_STATIC_ROUTES.some((route) => pathname === route) ||
    pathname.startsWith("/services/") ||
    pathname.startsWith("/news/") ||
    pathname.startsWith("/customer-service/") ||
    pathname.startsWith("/knowledge-center/") ||
    pathname.startsWith("/about/");

  if (isLocalized) {
    const newPath = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;
    return newPath + urlObj.search + urlObj.hash;
  }

  // Return unchanged legacy route but with stripped locale if it had one
  return pathname + urlObj.search + urlObj.hash;
}
