import { buildLocalizedAlternates } from "@/lib/seo/alternates"
import { AnnualReportsPageContent } from "@/components/knowledge-center/annual-reports-page-content"
import { isLocale } from "@/i18n/config"
import { notFound } from "next/navigation"

type LocalizedAnnualReportsPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({ params }: LocalizedAnnualReportsPageProps) {
  const { locale } = await params;
  const isAr = locale === "ar";
  
  return {
    alternates: buildLocalizedAlternates({ pathname: "/knowledge-center/annual-reports", locale: locale as "ar" | "en" }),
    title: isAr ? "التقارير السنوية | مركز المعرفة | بنك بن دول" : "Annual Reports | Knowledge Center | Bin Dowal Bank",
    description: isAr 
      ? "أرشيف التقارير السنوية لبنك بن دول للتمويل الأصغر الإسلامي"
      : "The annual reports archive of Bin Dowal Islamic Microfinance Bank"
  };
}

export default async function LocalizedAnnualReportsPage({
  params
}: LocalizedAnnualReportsPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <div data-localized-route="knowledge-center/annual-reports" data-locale={locale}>
      <AnnualReportsPageContent />
    </div>
  );
}
