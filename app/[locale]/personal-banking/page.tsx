import { notFound } from "next/navigation"
import { isLocale } from "@/i18n/config"
import { PersonalBankingPageContent } from "@/components/banking/personal-banking-page-content"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  
  return {
    title: locale === "ar" ? "الخدمات الشخصية | بنك بن دول" : "Personal Services | Bin Dowal Bank",
    description: locale === "ar" 
      ? "استكشف الخدمات الشخصية المقدمة من بنك بن دول للتمويل الأصغر الإسلامي."
      : "Explore Personal Services provided by Bin Dowal Islamic Microfinance Bank.",
    robots: {
      index: false,
      follow: false,
    }
  }
}

type LocalizedPersonalBankingPageProps = {
  params: Promise<{
    locale: string
  }>
}

export default async function LocalizedPersonalBankingPage({
  params,
}: LocalizedPersonalBankingPageProps) {
  const { locale } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  return (
    <div data-localized-route="personal-banking" data-locale={locale}>
      <PersonalBankingPageContent />
    </div>
  )
}
