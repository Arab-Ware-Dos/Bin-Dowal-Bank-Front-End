import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { PrepaidCardPageContent } from "@/components/cards/prepaid-card-page-content";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return {
    title: locale === "ar" ? "بطاقة الدفع المسبق" : "Prepaid Card",
    robots: {
      index: false,
      follow: false,
    },
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
