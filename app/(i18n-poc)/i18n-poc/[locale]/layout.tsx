import { ReactNode } from "react";
import { Locale, locales, getLocaleDirection, isLocale } from "@/i18n/config";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

interface Props {
  children: ReactNode;
  params: Promise<{ locale: string }> | { locale: string };
}

export default async function I18nPocLayout({ children, params }: Props) {
  const resolvedParams = await Promise.resolve(params);
  const locale = resolvedParams.locale;

  if (!isLocale(locale)) {
    return <div>Unsupported Locale</div>;
  }

  return (
    <div
      lang={locale}
      dir={getLocaleDirection(locale)}
      data-locale={locale}
      style={{ padding: "2rem", border: "2px dashed #ccc", minHeight: "100vh" }}
    >
      {children}
    </div>
  );
}
