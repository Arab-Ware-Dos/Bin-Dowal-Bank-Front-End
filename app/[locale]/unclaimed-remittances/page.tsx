import { buildLocalizedAlternates } from "@/lib/seo/alternates"
import { isLocale } from "@/i18n/config"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import { PageHero } from "@/components/ui/page-hero"
import { UnclaimedRemittancesContent } from "@/components/unclaimed-remittances/unclaimed-remittances-content"
import { locales } from "@/i18n/config"

type LocalizedPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: LocalizedPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {}
  }

  if (locale === "en") {
    return {
      alternates: buildLocalizedAlternates({ pathname: "/unclaimed-remittances", locale: locale as "ar" | "en" }),
      title: "Unclaimed Remittances - Bin Dowal Islamic Microfinance Bank",
      description: "Search for your unclaimed remittances using your full name."
    }
  }

  return {
    alternates: buildLocalizedAlternates({ pathname: "/unclaimed-remittances", locale: locale as "ar" | "en" }),
    title: "الحوالات غير المستلمة - بنك بن دول للتمويل الأصغر الإسلامي",
    description: "ابحث عن الحوالات غير المستلمة الخاصة بك باستخدام اسمك الرباعي."
  }
}

export default async function LocalizedUnclaimedRemittancesPage({
  params
}: LocalizedPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const isAr = locale === "ar";
  const title = isAr ? "الحوالات غير المستلمة" : "Unclaimed Remittances";
  const subtitle = isAr 
    ? "خدمة تتيح لك التحقق من وجود حوالات مالية غير مستلمة باسمك بكل سهولة وأمان."
    : "A service that allows you to easily and securely check for unclaimed financial remittances in your name.";

  return (
    <div data-localized-route="unclaimed-remittances" data-locale={locale}>
      <PageHero
        title={title}
        subtitle={subtitle}
        breadcrumbs={[
          { labelKey: "nav.home", href: "/" },
          { labelKey: "nav.unclaimedRemittances" }
        ]}
      />
      <UnclaimedRemittancesContent />
    </div>
  );
}
