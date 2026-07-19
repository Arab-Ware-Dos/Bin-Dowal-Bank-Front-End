import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { NoorCardPageContent } from "@/components/cards/noor-card-page-content";
import { buildLocalizedAlternates } from "@/lib/seo/alternates"

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return {
    alternates: buildLocalizedAlternates({ pathname: "/cards/noor-card", locale: locale as "ar" | "en" }),
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
