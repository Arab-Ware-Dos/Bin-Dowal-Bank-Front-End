import { PartnersPageContent } from "@/components/about/partners-page-content"
import { isLocale } from "@/i18n/config"
import { notFound } from "next/navigation"

type LocalizedPartnersPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({ params }: LocalizedPartnersPageProps) {
  const { locale } = await params;
  const isAr = locale === "ar";
  
  return {
    title: isAr ? "شركاؤنا | بنك بن دول" : "Our Partners | Bin Dowal Bank",
    description: isAr 
      ? "تعرف على شركاء بنك بن دول للتمويل الأصغر الإسلامي"
      : "Discover the partners of Bin Dowal Islamic Microfinance Bank"
  };
}

export default async function LocalizedPartnersPage({
  params
}: LocalizedPartnersPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <div data-localized-route="about/partners" data-locale={locale}>
      <PartnersPageContent />
    </div>
  );
}
