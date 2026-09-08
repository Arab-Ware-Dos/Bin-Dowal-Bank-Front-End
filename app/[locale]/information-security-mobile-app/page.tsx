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
  const policy = getLegalPolicy("information-security-mobile-app")
  
  return {
    alternates: buildLocalizedAlternates({ pathname: "/information-security-mobile-app", locale: locale as "ar" | "en" }),
    title: isAr
      ? `${policy?.heroTitle.ar || "سياسة أمن المعلومات لتطبيق الهاتف المحمول"} | بنك بن دول`
      : `${policy?.heroTitle.en || "Mobile App Information Security Policy"} | Bin Dowal Bank`,
    description: isAr ? policy?.heroSubtitle.ar : policy?.heroSubtitle.en,
  }
}

export default async function Page({ params }: Props) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const policy = getLegalPolicy("information-security-mobile-app")
  if (!policy) notFound()

  return (
    <div data-localized-route="information-security-mobile-app" data-locale={locale}>
      <LegalPolicyPageContent policy={policy} />
    </div>
  )
}
