import { notFound } from "next/navigation"
import { isLocale } from "@/i18n/config"
import { DigitalChannelsPageContent } from "@/components/banking/digital-channels-page-content"
import { buildLocalizedAlternates } from "@/lib/seo/alternates"

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  
  return {
    alternates: buildLocalizedAlternates({ pathname: "/digital-channels", locale: locale as "ar" | "en" }),
    title: locale === "ar" ? "القنوات الرقمية | بنك بن دول" : "Digital Channels | Bin Dowal Bank",
    description: locale === "ar" 
      ? "استكشف القنوات الرقمية المقدمة من بنك بن دول للتمويل الأصغر الإسلامي."
      : "Explore Digital Channels provided by Bin Dowal Islamic Microfinance Bank."
  }
}

type LocalizedDigitalChannelsPageProps = {
  params: Promise<{
    locale: string
  }>
}

export default async function LocalizedDigitalChannelsPage({
  params
}: LocalizedDigitalChannelsPageProps) {
  const { locale } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  return (
    <div data-localized-route="digital-channels" data-locale={locale}>
      <DigitalChannelsPageContent />
    </div>
  )
}
