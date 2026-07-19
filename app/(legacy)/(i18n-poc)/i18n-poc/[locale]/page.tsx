import { getDictionary } from "@/i18n/get-dictionary";
import { Locale, isLocale } from "@/i18n/config";
import { Suspense } from "react";
import LocaleSwitcherPoc from "@/components/i18n/locale-switcher-poc";
import Link from "next/link";
import { buildLocalizedPath } from "@/i18n/pathname";
import { I18nProvider } from "@/lib/i18n-context";
import { UrlLocaleProviderProbe } from "@/components/providers/url-locale-provider-probe";
import { Header } from "@/components/layout/header";

interface Props {
  params: Promise<{ locale: string }> | { locale: string };
}

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await Promise.resolve(params);
  const rawLocale = resolvedParams.locale;
  if (!isLocale(rawLocale)) {
    return { title: "Unsupported Locale" };
  }
  const locale = rawLocale;
  return {
    title: locale === "ar" ? "تجربة الترجمة العربية" : "English i18n POC",
    robots: {
      index: false,
      follow: false,
      nocache: true,
    }
  };
}

export default async function I18nPocPage({ params }: Props) {
  const resolvedParams = await Promise.resolve(params);
  const rawLocale = resolvedParams.locale;

  if (!isLocale(rawLocale)) {
    return <div>Unsupported Locale</div>;
  }
  
  const locale = rawLocale;

  const dictionary = await getDictionary(locale);

  return (
    <I18nProvider mode="url" initialLocale={locale}>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <h1>{locale === "ar" ? "تجربة الترجمة - النسخة العربية" : "i18n POC - English Version"}</h1>
        
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
          <span>{locale === "ar" ? "تغيير اللغة:" : "Change Language:"}</span>
          <Suspense fallback={<div style={{ padding: "0.5rem 1rem", background: "#ccc", borderRadius: "4px" }}>...</div>}>
            <LocaleSwitcherPoc currentLocale={locale} />
          </Suspense>
        </div>

        <div style={{ border: "2px solid green", padding: "1rem", borderRadius: "8px" }}>
          <h2>{locale === "ar" ? "اختبار Header URL Mode" : "Header URL Mode Test"}</h2>
          <div style={{ position: "relative", zIndex: 10 }}>
            {/* Using Header directly as a harness to avoid double-footer from SharedSiteShell */}
            <Header localeMode="url" locale={locale} />
          </div>
        </div>

        <UrlLocaleProviderProbe />

        <div style={{ background: "#f0f0f0", padding: "1rem", borderRadius: "8px", marginTop: "1rem" }}>
          <h2>{locale === "ar" ? "نصوص من القاموس" : "Dictionary Texts"}</h2>
          <ul>
            <li><strong>nav.home:</strong> {dictionary["nav.home"]}</li>
            <li><strong>nav.creditCard:</strong> {dictionary["nav.creditCard"]}</li>
            <li><strong>nav.localTransfers:</strong> {dictionary["nav.localTransfers"]}</li>
            <li><strong>appPromo.feature5:</strong> {dictionary["appPromo.feature5"]}</li>
          </ul>
        </div>

        <div style={{ background: "#e6f7ff", padding: "1rem", borderRadius: "8px" }}>
          <h2>{locale === "ar" ? "روابط تجريبية" : "Test Links"}</h2>
          <ul>
            <li>
              <Link href={buildLocalizedPath(locale, "/i18n-poc/test?q=1#hash")}>
                {locale === "ar" ? "رابط تجريبي مع بارامترات" : "Test link with query/hash"}
              </Link>
            </li>
            <li>
              <Link href={buildLocalizedPath(locale, "https://example.com")}>
                {locale === "ar" ? "رابط خارجي" : "External Link"}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </I18nProvider>
  );
}
