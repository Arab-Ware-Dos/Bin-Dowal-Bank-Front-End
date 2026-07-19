import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { DebitCardPageContent } from "@/components/cards/debit-card-page-content";
import { buildLocalizedAlternates } from "@/lib/seo/alternates"

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return {
    alternates: buildLocalizedAlternates({ pathname: "/cards/debit-card", locale: locale as "ar" | "en" }),
    title: locale === "ar" ? "بطاقة الخصم الفوري" : "Debit Card"
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
