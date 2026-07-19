import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { PrepaidCardPageContent } from "@/components/cards/prepaid-card-page-content";
import { buildLocalizedAlternates } from "@/lib/seo/alternates"

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return {
    alternates: buildLocalizedAlternates({ pathname: "/cards/prepaid-card", locale: locale as "ar" | "en" }),
    title: locale === "ar" ? "بطاقة الدفع المسبق" : "Prepaid Card"
};
}

export default async function LocalizedPrepaidCardPage({ params }: Props) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <div data-localized-route="cards/prepaid-card" data-locale={locale}>
      <PrepaidCardPageContent />
    </div>
  );
}
