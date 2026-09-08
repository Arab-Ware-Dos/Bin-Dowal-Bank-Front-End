import { buildLocalizedAlternates } from "@/lib/seo/alternates"
import { isLocale } from "@/i18n/config"
import { notFound } from "next/navigation"
import { getLegalPolicy } from "@/data/legal-policies-data"
import { LegalPolicyPageContent } from "@/components/legal/legal-policy-page-content"

type Props = {
  params: Promise<{
    locale: string
  }>
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  const isAr = locale === "ar"
  const policy = getLegalPolicy("data-privacy-mobile-app")
  
  return {
    alternates: buildLocalizedAlternates({ pathname: "/data-privacy-mobile-app", locale: locale as "ar" | "en" }),
    title: isAr
      ? `${policy?.heroTitle.ar || "خصوصية البيانات"} | بنك بن دول`
      : `${policy?.heroTitle.en || "Data Privacy"} | Bin Dowal Bank`,
    description: isAr ? policy?.heroSubtitle.ar : policy?.heroSubtitle.en,
  }
}

export default async function Page({ params }: Props) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const policy = getLegalPolicy("data-privacy-mobile-app")
  if (!policy) notFound()

  return (
    <div data-localized-route="data-privacy-mobile-app" data-locale={locale}>
      <LegalPolicyPageContent policy={policy} />
    </div>
  )
}
