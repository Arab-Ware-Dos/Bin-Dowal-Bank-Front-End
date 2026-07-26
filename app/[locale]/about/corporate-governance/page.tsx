import { buildLocalizedAlternates } from "@/lib/seo/alternates"
import { CorporateGovernancePageContent } from "@/components/about/corporate-governance-page-content"
import { isLocale } from "@/i18n/config"
import { notFound } from "next/navigation"

type LocalizedCorporateGovernancePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({ params }: LocalizedCorporateGovernancePageProps) {
  const { locale } = await params;
  const isAr = locale === "ar";
  
  return {
    alternates: buildLocalizedAlternates({ pathname: "/about/corporate-governance", locale: locale as "ar" | "en" }),
    title: isAr ? "الحوكمة المؤسسية | بنك بن دول" : "Corporate Governance | Bin Dowal Bank",
    description: isAr 
      ? "إطار الحوكمة المؤسسية في بنك بن دول للتمويل الأصغر الإسلامي، ولجان مجلس الإدارة المتخصصة، ودليل الحوكمة والرقابة والشفافية."
      : "Bin Dowal Bank Corporate Governance framework, specialized Board committees, governance manual, oversight, and transparency."
  };
}

export default async function LocalizedCorporateGovernancePage({
  params
}: LocalizedCorporateGovernancePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <div data-localized-route="about/corporate-governance" data-locale={locale}>
      <CorporateGovernancePageContent />
    </div>
  );
}
