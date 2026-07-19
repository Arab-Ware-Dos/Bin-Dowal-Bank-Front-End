import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { CreditCardPageContent } from "@/components/cards/credit-card-page-content";
import { buildLocalizedAlternates } from "@/lib/seo/alternates"

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return {
    alternates: buildLocalizedAlternates({ pathname: "/cards/credit-card", locale: locale as "ar" | "en" }),
    title: locale === "ar" ? "البطاقة الائتمانية" : "Credit Card"
};
}

export default async function LocalizedCreditCardPage({ params }: Props) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <div data-localized-route="cards/credit-card" data-locale={locale}>
      <CreditCardPageContent />
    </div>
  );
}
