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
    title: isAr ? "مجلس الإدارة | بنك بن دول" : "Board of Directors | Bin Dowal Bank",
    description: isAr 
      ? "تعرف على أعضاء مجلس إدارة بنك بن دول للتمويل الأصغر الإسلامي"
      : "Meet the Board of Directors of Bin Dowal Islamic Microfinance Bank",
    robots: {
      index: false,
      follow: false,
    }
  };
}

export default async function LocalizedBoardOfDirectorsPage({
  params,
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
