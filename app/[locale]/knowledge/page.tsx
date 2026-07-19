import { notFound } from "next/navigation";
import { locales, isLocale } from "@/i18n/config";
import { KnowledgeCenterPageContent } from "@/components/knowledge-center/knowledge-center-page-content";

type LocalizedPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocalizedPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return { title: "Not Found" };
  }

  const isAr = locale === "ar";
  return {
    title: `${isAr ? "مركز المعرفة" : "Knowledge Center"} | Bin Dowal Bank`,
    description: isAr 
      ? "مصدرك الأول لفهم الخدمات المصرفية، وتعزيز وعيك المالي" 
      : "Your primary source to understand banking services and enhance financial awareness",
    openGraph: {
      title: `${isAr ? "مركز المعرفة" : "Knowledge Center"} | Bin Dowal Bank`,
      description: isAr 
        ? "مصدرك الأول لفهم الخدمات المصرفية، وتعزيز وعيك المالي" 
        : "Your primary source to understand banking services and enhance financial awareness",
    },
  };
}

export default async function LocalizedKnowledgePage({ params }: LocalizedPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <div data-localized-route="knowledge" data-locale={locale}>
      <KnowledgeCenterPageContent />
    </div>
  );
}
