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
  const policy = getLegalPolicy("policy_mobil_app")
  
  return {
    alternates: buildLocalizedAlternates({ pathname: "/policy_mobil_app", locale: locale as "ar" | "en" }),
    title: isAr
      ? `${policy?.heroTitle.ar || "الشروط والأحكام الخاصة بتطبيق الهاتف المحمول"} | بنك بن دول`
      : `${policy?.heroTitle.en || "Mobile App Terms & Conditions"} | Bin Dowal Bank`,
    description: isAr ? policy?.heroSubtitle.ar : policy?.heroSubtitle.en,
  }
}

export default async function MobileAppTermsPage({ params }: Props) {
  const { locale } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  const policy = getLegalPolicy("policy_mobil_app")
  if (!policy) {
    notFound()
  }

  return (
    <div data-localized-route="policy_mobil_app" data-locale={locale}>
      <LegalPolicyPageContent policy={policy} />
    </div>
  )
}
