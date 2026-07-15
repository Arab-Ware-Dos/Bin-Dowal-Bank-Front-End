"use client"

import { useI18n } from "@/lib/i18n-context"
import { PageHero } from "@/components/ui/page-hero"
import { CalculatorSection } from "@/components/home/calculator-section"

export function CalculatorPageContent() {
  const { locale } = useI18n()
  const isArabic = locale === "ar"

  return (
    <>
      <PageHero
        title={isArabic ? "حاسبة التمويل" : "Financing Calculator"}
        subtitle={
          isArabic
            ? "قدّر قيمة القسط الشهري التقديري لتمويل السيارات أو التمويل السكني أو التمويل الشخصي بخطوات واضحة وسريعة."
            : "Estimate your monthly installment for auto, home, or personal financing in a few simple steps."
        }
        tagline={isArabic ? "حلول تمويل مرنة" : "Flexible Financing Solutions"}
        breadcrumbs={[{ labelKey: "nav.calculator", href: "/calculator" }]}
      />

      <CalculatorSection />
    </>
  )
}
