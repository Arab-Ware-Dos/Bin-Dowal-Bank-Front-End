import { notFound } from "next/navigation"
import { isLocale } from "@/i18n/config"
import { BusinessBankingPageContent } from "@/components/banking/business-banking-page-content"

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  
  return {
    title: locale === "ar" ? "خدمات الأعمال | بنك بن دول" : "Business Services | Bin Dowal Bank",
    description: locale === "ar" 
      ? "استكشف خدمات الأعمال المقدمة من بنك بن دول للتمويل الأصغر الإسلامي."
      : "Explore Business Services provided by Bin Dowal Islamic Microfinance Bank."
  }
}

type LocalizedBusinessBankingPageProps = {
  params: Promise<{
    locale: string
  }>
}

export default async function LocalizedBusinessBankingPage({
  params
}: LocalizedBusinessBankingPageProps) {
  const { locale } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  return (
    <div data-localized-route="business-banking" data-locale={locale}>
      <BusinessBankingPageContent />
    </div>
  )
}
