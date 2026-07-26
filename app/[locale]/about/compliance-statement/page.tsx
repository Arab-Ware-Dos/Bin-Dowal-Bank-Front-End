import { buildLocalizedAlternates } from "@/lib/seo/alternates"
import { ComplianceStatementPageContent } from "@/components/about/compliance-statement-page-content"
import { isLocale } from "@/i18n/config"
import { notFound } from "next/navigation"

type LocalizedComplianceStatementPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({ params }: LocalizedComplianceStatementPageProps) {
  const { locale } = await params;
  const isAr = locale === "ar";
  
  return {
    alternates: buildLocalizedAlternates({ pathname: "/about/compliance-statement", locale: locale as "ar" | "en" }),
    title: isAr ? "بيان الامتثال | بنك بن دول" : "Compliance Statement | Bin Dowal Bank",
    description: isAr 
      ? "بيان الامتثال لبنك بن دول للتمويل الأصغر الإسلامي ومكافحة غسل الأموال وتمويل الإرهاب والالتزام بتوصيات مجموعة العمل المالي (FATF) وقانون FATCA"
      : "Bin Dowal Bank Compliance Statement for AML and CFT, adherence to FATF recommendations, and FATCA GIIN registration."
  };
}

export default async function LocalizedComplianceStatementPage({
  params
}: LocalizedComplianceStatementPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <div data-localized-route="about/compliance-statement" data-locale={locale}>
      <ComplianceStatementPageContent />
    </div>
  );
}
