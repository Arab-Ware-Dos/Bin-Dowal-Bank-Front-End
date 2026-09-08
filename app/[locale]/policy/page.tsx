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
  const policy = getLegalPolicy("policy")
  
  return {
    alternates: buildLocalizedAlternates({ pathname: "/policy", locale: locale as "ar" | "en" }),
    title: isAr
      ? `${policy?.heroTitle.ar || "سياسة الخصوصية"} | بنك بن دول`
      : `${policy?.heroTitle.en || "Privacy Policy"} | Bin Dowal Bank`,
    description: isAr ? policy?.heroSubtitle.ar : policy?.heroSubtitle.en,
  }
}

export default async function PolicyPage({ params }: Props) {
  const { locale } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  const policy = getLegalPolicy("policy")
  if (!policy) {
    notFound()
  }

  return (
    <div data-localized-route="policy" data-locale={locale}>
      <LegalPolicyPageContent policy={policy} />
    </div>
  )
}
