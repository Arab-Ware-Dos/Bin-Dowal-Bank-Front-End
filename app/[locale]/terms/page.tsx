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
  const policy = getLegalPolicy("terms")
  
  return {
    alternates: buildLocalizedAlternates({ pathname: "/terms", locale: locale as "ar" | "en" }),
    title: isAr
      ? `${policy?.heroTitle.ar || "الشروط والأحكام"} | بنك بن دول`
      : `${policy?.heroTitle.en || "Terms & Conditions"} | Bin Dowal Bank`,
    description: isAr ? policy?.heroSubtitle.ar : policy?.heroSubtitle.en,
  }
}

export default async function TermsPage({ params }: Props) {
  const { locale } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  const policy = getLegalPolicy("terms")
  if (!policy) {
    notFound()
  }

  return (
    <div data-localized-route="terms" data-locale={locale}>
      <LegalPolicyPageContent policy={policy} />
    </div>
  )
}
