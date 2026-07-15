import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { DebitCardPageContent } from "@/components/cards/debit-card-page-content";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return {
    title: locale === "ar" ? "بطاقة الخصم الفوري" : "Debit Card",
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function LocalizedDebitCardPage({ params }: Props) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <div data-localized-route="cards/debit-card" data-locale={locale}>
      <DebitCardPageContent />
    </div>
  );
}
