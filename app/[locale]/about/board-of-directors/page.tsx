import { buildLocalizedAlternates } from "@/lib/seo/alternates"
import { BoardOfDirectorsPageContent } from "@/components/about/board-of-directors-page-content"
import { isLocale } from "@/i18n/config"
import { notFound } from "next/navigation"

type LocalizedBoardOfDirectorsPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({ params }: LocalizedBoardOfDirectorsPageProps) {
  const { locale } = await params;
  const isAr = locale === "ar";
  
  return {
    alternates: buildLocalizedAlternates({ pathname: "/about/board-of-directors", locale: locale as "ar" | "en" }),
    title: isAr ? "مجلس الإدارة | بنك بن دول" : "Board of Directors | Bin Dowal Bank",
    description: isAr 
      ? "تعرف على أعضاء مجلس إدارة بنك بن دول للتمويل الأصغر الإسلامي"
      : "Meet the Board of Directors of Bin Dowal Islamic Microfinance Bank"
  };
}

export default async function LocalizedBoardOfDirectorsPage({
  params
}: LocalizedBoardOfDirectorsPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <div data-localized-route="about/board-of-directors" data-locale={locale}>
      <BoardOfDirectorsPageContent />
    </div>
  );
}
