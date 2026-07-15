import { notFound } from "next/navigation"
import { isLocale } from "@/i18n/config"
import { CalculatorPageContent } from "@/components/self-service/calculator-page-content"

type LocalizedCalculatorPageProps = {
  params: Promise<{
    locale: string
  }>
}

export async function generateMetadata({
  params,
}: LocalizedCalculatorPageProps) {
  const { locale } = await params

  if (!isLocale(locale)) {
    return {}
  }

  return {
    title:
      locale === "ar"
        ? "حاسبة التمويل | بنك بن دول"
        : "Financing Calculator | Bin Dowal Bank",
    description:
      locale === "ar"
        ? "قدّر قيمة القسط الشهري التقديري لتمويل السيارات أو التمويل السكني أو التمويل الشخصي بخطوات واضحة وسريعة."
        : "Estimate your monthly installment for auto, home, or personal financing in a few simple steps.",
    robots: {
      index: false,
      follow: false,
    },
  }
}

export default async function LocalizedCalculatorPage({
  params,
}: LocalizedCalculatorPageProps) {
  const { locale } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  return (
    <div data-localized-route="calculator" data-locale={locale}>
      <CalculatorPageContent />
    </div>
  )
}
