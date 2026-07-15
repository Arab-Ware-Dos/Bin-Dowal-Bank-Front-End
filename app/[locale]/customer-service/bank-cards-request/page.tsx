import { notFound } from "next/navigation"
import { isLocale } from "@/i18n/config"
import { BankCardsRequestPageContent } from "@/components/customer-service/bank-cards-request-page-content"
import type { Metadata } from "next"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }> | { locale: string }
}): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params)
  const locale = resolvedParams.locale

  if (!isLocale(locale)) return {}

  const title = locale === "ar" ? "طلب بطاقة بنكية" : "Bank Card Request"

  return {
    title,
    robots: {
      index: false,
      follow: false,
    },
  }
}

export default async function BankCardsRequestPageLocalized({
  params,
}: {
  params: Promise<{ locale: string }> | { locale: string }
}) {
  const resolvedParams = await Promise.resolve(params)
  const locale = resolvedParams.locale

  if (!isLocale(locale)) {
    notFound()
  }

  return (
    <main data-localized-route="customer-service/bank-cards-request" data-locale={locale}>
      <BankCardsRequestPageContent />
    </main>
  )
}
