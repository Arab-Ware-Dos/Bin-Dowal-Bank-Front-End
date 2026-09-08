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
  const policy = getLegalPolicy("terms_and_conditions_bank_account")
  
  return {
    alternates: buildLocalizedAlternates({ pathname: "/terms_and_conditions_bank_account", locale: locale as "ar" | "en" }),
    title: isAr
      ? `${policy?.heroTitle.ar || "شروط وأحكام الحساب المصرفي"} | بنك بن دول`
      : `${policy?.heroTitle.en || "Bank Account Terms & Conditions"} | Bin Dowal Bank`,
    description: isAr ? policy?.heroSubtitle.ar : policy?.heroSubtitle.en,
  }
}

export default async function BankAccountTermsPage({ params }: Props) {
  const { locale } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  const policy = getLegalPolicy("terms_and_conditions_bank_account")
  if (!policy) {
    notFound()
  }

  return (
    <div data-localized-route="terms_and_conditions_bank_account" data-locale={locale}>
      <LegalPolicyPageContent policy={policy} />
    </div>
  )
}
