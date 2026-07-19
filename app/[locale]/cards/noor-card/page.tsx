import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { NoorCardPageContent } from "@/components/cards/noor-card-page-content";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return {
    title: locale === "ar" ? "بطاقة نور" : "Noor Card"
};
}

export default async function LocalizedNoorCardPage({ params }: Props) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <div data-localized-route="cards/noor-card" data-locale={locale}>
      <NoorCardPageContent />
    </div>
  );
}
