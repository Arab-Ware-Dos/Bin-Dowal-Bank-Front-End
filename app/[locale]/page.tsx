import { buildLocalizedAlternates } from "@/lib/seo/alternates"
import { HomePageContent } from "@/components/home/home-page-content"
import { isLocale, locales } from "@/i18n/config"
import { notFound } from "next/navigation"

type LocalizedHomePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocalizedHomePageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  return {
    alternates: buildLocalizedAlternates({ pathname: "/", locale: locale as "ar" | "en" }),
    title: locale === 'ar' ? 'بنك بن دول للتمويل الأصغر الإسلامي | Bin Dowal Islamic Microfinance Bank' : 'Bin Dowal Islamic Microfinance Bank',
    description: locale === 'ar' ? 'البنك الرائد في التمويل الأصغر الإسلامي.' : 'The leading Islamic microfinance bank.',
    openGraph: {
      title: locale === 'ar' ? 'بنك بن دول للتمويل الأصغر الإسلامي' : 'Bin Dowal Islamic Microfinance Bank',
      description: locale === 'ar' ? 'البنك الرائد في التمويل الأصغر الإسلامي.' : 'The leading Islamic microfinance bank.'
}
  }
}

export default async function LocalizedHomePage({
  params
}: LocalizedHomePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <div data-localized-home="true" data-locale={locale}>
      <HomePageContent />
    </div>
  )
}
