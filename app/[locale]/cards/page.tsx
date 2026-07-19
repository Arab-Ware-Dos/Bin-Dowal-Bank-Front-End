import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { CardsPageContent } from "@/components/cards/cards-page-content";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return {
    title: locale === "ar" ? "البطاقات المصرفية" : "Banking Cards"
};
}

export default async function LocalizedCardsPage({ params }: Props) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <div data-localized-route="cards" data-locale={locale}>
      <CardsPageContent />
    </div>
  );
}
