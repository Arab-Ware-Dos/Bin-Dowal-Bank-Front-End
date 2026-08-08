import { buildLocalizedAlternates } from "@/lib/seo/alternates"
import { RiskManagementPageContent } from "@/components/about/risk-management-page-content"
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
    alternates: buildLocalizedAlternates({ pathname: "/about/risk-management", locale: locale as "ar" | "en" }),
    title: isAr ? "إدارة المخاطر | بنك بن دول" : "Risk Management | Bin Dowal Bank",
    description: isAr
      ? "إطار إدارة المخاطر في بنك بن دول للتمويل الأصغر الإسلامي، ولجان مجلس الإدارة المتخصصة، ودليل الحوكمة والرقابة والشفافية."
      : "Risk Management framework at Bin Dowal Bank, specialized Board committees, governance manual, oversight, and transparency."
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
    <div data-localized-route="about/risk-management" data-locale={locale}>
      <RiskManagementPageContent />
    </div>
  );
}
