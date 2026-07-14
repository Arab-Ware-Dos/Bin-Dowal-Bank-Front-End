import { AboutPageContent } from "@/components/about/about-page-content"
import { isLocale } from "@/i18n/config"
import { notFound } from "next/navigation"
import { Metadata } from "next"

type LocalizedAboutPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: LocalizedAboutPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {}
  }

  if (locale === "en") {
    return {
      title: "About Us - Bin Dowal Islamic Microfinance Bank",
      description: "A national Islamic microfinance bank delivering trusted financial and banking solutions that combine Islamic values with innovation.",
      openGraph: {
        title: "About Us - Bin Dowal Islamic Microfinance Bank",
      },
      robots: { index: false, follow: false },
    }
  }

  return {
    title: "عن البنك - بنك بن دول للتمويل الأصغر الإسلامي",
    description: "بنك وطني للتمويل الأصغر الإسلامي، نقدّم حلولاً مالية ومصرفية موثوقة تجمع بين القيم الإسلامية والابتكار، وتدعم الأفراد والأعمال وتعزز الشمول المالي في اليمن.",
    openGraph: {
      title: "عن البنك - بنك بن دول للتمويل الأصغر الإسلامي",
    },
    robots: { index: false, follow: false },
  }
}

export default async function LocalizedAboutPage({
  params,
}: LocalizedAboutPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <div data-localized-route="about" data-locale={locale}>
      <AboutPageContent />
    </div>
  );
}
