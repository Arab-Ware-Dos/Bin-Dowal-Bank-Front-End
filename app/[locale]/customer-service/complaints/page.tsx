import { notFound } from "next/navigation"
import { isLocale } from "@/i18n/config"
import { ComplaintsPageContent } from "@/components/customer-service/complaints-page-content"
import type { Metadata } from "next"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }> | { locale: string }
}): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params)
  const locale = resolvedParams.locale

  if (!isLocale(locale)) return {}

  const title = locale === "ar" ? "الشكاوى والملاحظات" : "Complaints and Feedback"

  return {
    title,
    robots: {
      index: false,
      follow: false,
    },
  }
}

export default async function ComplaintsPageLocalized({
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
    <main data-localized-route="customer-service/complaints" data-locale={locale}>
      <ComplaintsPageContent />
    </main>
  )
}
