import { notFound } from "next/navigation"
import { isLocale } from "@/i18n/config"
import { FinancingPageContent } from "@/components/banking/financing-page-content"
import { buildLocalizedAlternates } from "@/lib/seo/alternates"

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  
  return {
    alternates: buildLocalizedAlternates({ pathname: "/financing", locale: locale as "ar" | "en" }),
    title: locale === "ar" ? "التمويل | بنك بن دول" : "Financing | Bin Dowal Bank",
    description: locale === "ar" 
      ? "استكشف التمويل المقدمة من بنك بن دول للتمويل الأصغر الإسلامي."
      : "Explore Financing provided by Bin Dowal Islamic Microfinance Bank."
  }
}

type LocalizedFinancingPageProps = {
  params: Promise<{
    locale: string
  }>
}

export default async function LocalizedFinancingPage({
  params
}: LocalizedFinancingPageProps) {
  const { locale } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  return (
    <div data-localized-route="financing" data-locale={locale}>
      <FinancingPageContent />
    </div>
  )
}
