"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n-context"
import { getLocalizedHref } from "@/lib/localized-routes"
import { SectionTitle } from "@/components/ui/section-title"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Car,
  Home,
  User,
  Calculator,
  ArrowUpRight,
  BadgePercent,
  Wallet,
  Coins,
  Landmark,
  Sparkles,
  CheckCircle2,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

type FinancingType = "auto" | "home" | "personal"
type LocaleKey = "ar" | "en"

type FinancingConfig = {
  icon: LucideIcon
  minAmount: number
  maxAmount: number
  defaultAmount: number
  amountStep: number
  minPeriod: number
  maxPeriod: number
  defaultPeriod: number
  periodStep: number
  profitRate: number
  href: string
}

const financingConfig: Record<FinancingType, FinancingConfig> = {
  auto: {
    icon: Car,
    minAmount: 30000,
    maxAmount: 500000,
    defaultAmount: 100000,
    amountStep: 1000,
    minPeriod: 6,
    maxPeriod: 60,
    defaultPeriod: 24,
    periodStep: 6,
    profitRate: 4.5,
    href: "/financing",
  },
  home: {
    icon: Home,
    minAmount: 250000,
    maxAmount: 5000000,
    defaultAmount: 750000,
    amountStep: 10000,
    minPeriod: 12,
    maxPeriod: 300,
    defaultPeriod: 240,
    periodStep: 12,
    profitRate: 3.8,
    href: "/financing",
  },
  personal: {
    icon: User,
    minAmount: 5000,
    maxAmount: 250000,
    defaultAmount: 50000,
    amountStep: 1000,
    minPeriod: 6,
    maxPeriod: 60,
    defaultPeriod: 24,
    periodStep: 6,
    profitRate: 5.0,
    href: "/financing",
  },
}

const financingTypes: FinancingType[] = ["auto", "home", "personal"]

const copy = {
  ar: {
    title: "حاسبة التمويل",
    subtitle:
      "قدّر قيمة القسط الشهري التقديري بخطوات واضحة وتجربة أكثر اتساقًا مع هوية بنك بن دول.",
    heroBadge: "حلول تمويل مرنة",
    heroTitle: "تقدير أوضح لالتزامك المالي قبل التقديم",
    heroText:
      "اختر نوع التمويل وحدد المبلغ ومدة السداد للحصول على ملخص تقديري يساعدك على تكوين صورة أولية قبل طلب التمويل.",
    heroItems: [
      "نتائج تقديرية محدثة فورًا",
      "ملخص مالي واضح ومنظم",
      "واجهة أبسط وأكثر احترافية",
    ],
    calculatorBadge: "حاسبة تقديرية",
    calculatorTitle: "احسب التمويل بما يناسب احتياجك",
    calculatorText:
      "يعتمد التقدير على معدل ربح سنوي تقريبي ثابت لأغراض العرض الأولي، وقد تختلف النتائج النهائية وفق سياسة التسعير والاعتماد لدى البنك.",
    amount: "مبلغ التمويل",
    period: "مدة السداد",
    months: "شهر",
    min: "الحد الأدنى",
    max: "الحد الأعلى",
    step: "التدرج",
    currency: "ر.ي",
    monthlyInstallment: "القسط الشهري التقديري",
    instantEstimate: "تحديث فوري",
    financingType: "نوع التمويل",
    principalAmount: "أصل التمويل",
    annualProfitRate: "معدل الربح السنوي التقديري",
    totalPayment: "إجمالي السداد التقديري",
    totalProfit: "إجمالي الربح التقديري",
    apply: "قدّم طلب التمويل",
    summaryNote:
      "هذه الحاسبة لأغراض تقديرية فقط ولا تمثل عرضًا تمويليًا نهائيًا أو موافقة ائتمانية. يخضع التمويل للشروط والأحكام وسياسة البنك.",
    types: {
      auto: "تمويل السيارات",
      home: "التمويل السكني",
      personal: "التمويل الشخصي",
    },
  },
  en: {
    title: "Financing Calculator",
    subtitle:
      "Estimate your monthly installment through a clearer, more polished experience aligned with Bin Dowal Bank.",
    heroBadge: "Flexible Financing Solutions",
    heroTitle: "A clearer first estimate before you apply",
    heroText:
      "Choose the financing type, amount, and repayment period to get an indicative summary that helps you form an initial picture before applying.",
    heroItems: [
      "Instantly updated estimates",
      "Cleaner financial summary",
      "Simpler premium interface",
    ],
    calculatorBadge: "Indicative Calculator",
    calculatorTitle: "Estimate the right financing for your needs",
    calculatorText:
      "This estimate uses a flat indicative annual profit rate for initial guidance only. Final results may differ based on the bank’s pricing and approval policy.",
    amount: "Financing Amount",
    period: "Repayment Period",
    months: "months",
    min: "Min",
    max: "Max",
    step: "Step",
    currency: "YER",
    monthlyInstallment: "Estimated Monthly Installment",
    instantEstimate: "Live estimate",
    financingType: "Financing Type",
    principalAmount: "Principal Amount",
    annualProfitRate: "Indicative Annual Profit Rate",
    totalPayment: "Estimated Total Payment",
    totalProfit: "Estimated Total Profit",
    apply: "Apply for Financing",
    summaryNote:
      "This calculator is for indicative purposes only and does not constitute a final financing offer or credit approval. Financing remains subject to the bank’s policy, terms, and conditions.",
    types: {
      auto: "Auto Financing",
      home: "Home Financing",
      personal: "Personal Financing",
    },
  },
} as const

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}

function snapToStep(value: number, min: number, max: number, step: number) {
  const clamped = clamp(value, min, max)
  const snapped = Math.round((clamped - min) / step) * step + min
  return clamp(snapped, min, max)
}

function roundCurrency(value: number) {
  return Math.round(value)
}

/**
 * Indicative flat-profit estimate:
 * totalProfit = amount * annualProfitRate * years
 * totalPayment = amount + totalProfit
 * monthlyInstallment = totalPayment / months
 *
 * This is intentionally simpler and more aligned with a fixed-profit
 * indicative financing preview than a conventional amortized interest loan.
 */
function calculateIndicativeFinancing(
  amount: number,
  periodInMonths: number,
  annualProfitRate: number
) {
  const years = periodInMonths / 12
  const totalProfitRaw = amount * (annualProfitRate / 100) * years
  const totalPaymentRaw = amount + totalProfitRaw
  const monthlyInstallmentRaw = totalPaymentRaw / periodInMonths

  return {
    totalProfit: roundCurrency(totalProfitRaw),
    totalPayment: roundCurrency(totalPaymentRaw),
    monthlyInstallment: roundCurrency(monthlyInstallmentRaw),
  }
}

export function CalculatorSection() {
  const { locale, mode } = useI18n()
  const localeKey: LocaleKey = locale === "ar" ? "ar" : "en"
  const isArabic = localeKey === "ar"
  const text = copy[localeKey]

  const [type, setType] = useState<FinancingType>("auto")
  const [amount, setAmount] = useState(financingConfig.auto.defaultAmount)
  const [period, setPeriod] = useState(financingConfig.auto.defaultPeriod)

  const config = financingConfig[type]

  const numberFormatter = useMemo(() => {
    return new Intl.NumberFormat(isArabic ? "ar-YE" : "en-YE", {
      maximumFractionDigits: 0,
    })
  }, [isArabic])

  const estimate = useMemo(() => {
    return calculateIndicativeFinancing(amount, period, config.profitRate)
  }, [amount, period, config.profitRate])

  const formatNumber = (value: number) => numberFormatter.format(value)

  const handleTypeChange = (value: string) => {
    const nextType = value as FinancingType
    const nextConfig = financingConfig[nextType]

    setType(nextType)
    setAmount(nextConfig.defaultAmount)
    setPeriod(nextConfig.defaultPeriod)
  }

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fafc_0%,#f3f6fb_46%,#edf2f7_100%)] py-16 md:py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300/70 to-transparent" />
        <div className="absolute left-0 top-16 h-56 w-56 rounded-full bg-[#1d4ed8]/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#7f1d3a]/10 blur-3xl" />
        <div className="absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-slate-200/70 to-transparent lg:block" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <SectionTitle title={text.title} subtitle={text.subtitle} />

        <div className="mx-auto mt-8 grid max-w-7xl grid-cols-1 gap-6 lg:mt-12 lg:grid-cols-2 lg:items-stretch lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            className={isArabic ? "lg:order-2" : "lg:order-1"}
          >
            <div className="group relative h-[360px] overflow-hidden rounded-[30px] border border-white/70 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.08)] md:h-[460px] lg:h-full lg:min-h-[680px]">
              <Image
                src="/images/Financing Services Section Picture.png"
                alt={isArabic ? "خدمات التمويل" : "Financing services"}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />

              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,14,38,0.18)_0%,rgba(9,14,38,0.28)_34%,rgba(9,14,38,0.78)_100%)]" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/15" />

              <div className="absolute inset-x-4 bottom-4 md:inset-x-6 md:bottom-6">
                <div className="rounded-[24px] border border-white/15 bg-white/10 p-4 backdrop-blur-xl md:p-6">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90">
                    <Sparkles className="h-3.5 w-3.5" />
                    {text.heroBadge}
                  </div>

                  <h3 className="max-w-xl text-xl font-semibold leading-snug text-white md:text-[1.9rem]">
                    {text.heroTitle}
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-6 text-white/75 md:text-[15px]">
                    {text.heroText}
                  </p>

                  <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {text.heroItems.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/12 bg-white/10 p-3.5 text-white"
                      >
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-white/80" />
                          <p className="text-xs font-medium leading-5 text-white/85 md:text-sm">
                            {item}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            viewport={{ once: true }}
            className={isArabic ? "lg:order-1" : "lg:order-2"}
          >
            <Card className="h-full overflow-hidden rounded-[30px] border-white/70 bg-white/90 shadow-[0_24px_90px_rgba(15,23,42,0.08)] backdrop-blur-xl lg:min-h-[680px]">
              <div className="border-b border-slate-200/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(247,249,252,0.96)_100%)] px-5 py-5 md:px-7 md:py-6">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#1d4ed8]/10 bg-[#1d4ed8]/5 px-3 py-1.5 text-xs font-medium text-[#1d4ed8]">
                  <Calculator className="h-3.5 w-3.5" />
                  {text.calculatorBadge}
                </div>

                <h3 className="text-xl font-semibold tracking-tight text-slate-950 md:text-2xl">
                  {text.calculatorTitle}
                </h3>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                  {text.calculatorText}
                </p>
              </div>

              <CardContent className="flex h-full flex-col p-5 md:p-7">
                <Tabs value={type} onValueChange={handleTypeChange}>
                  <TabsList className="grid h-auto grid-cols-3 rounded-[20px] border border-slate-200 bg-slate-100/80 p-1.5">
                    {financingTypes.map((item) => {
                      const Icon = financingConfig[item].icon
                      const isActive = type === item

                      return (
                        <TabsTrigger
                          key={item}
                          value={item}
                          className="rounded-[16px] px-2.5 py-3 text-slate-600 transition-all data-[state=active]:bg-white data-[state=active]:text-slate-950 data-[state=active]:shadow-[0_10px_24px_rgba(15,23,42,0.08)] md:px-3"
                        >
                          <div className="flex items-center gap-2.5">
                            <div
                              className={`flex h-8 w-8 items-center justify-center rounded-full transition-all ${
                                isActive
                                  ? "bg-[#1d4ed8]/10 text-[#1d4ed8]"
                                  : "bg-slate-200/70 text-slate-600"
                              }`}
                            >
                              <Icon className="h-4 w-4" />
                            </div>
                            <span className="text-xs font-medium sm:text-sm">
                              {text.types[item]}
                            </span>
                          </div>
                        </TabsTrigger>
                      )
                    })}
                  </TabsList>
                </Tabs>

                <div className="mt-5 flex h-full flex-col justify-between gap-5">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="rounded-[24px] border border-slate-200/80 bg-slate-50/80 p-4 md:p-5">
                      <div className="mb-4 flex items-center justify-between gap-3">
                        <Label className="text-sm font-medium text-slate-700">
                          {text.amount}
                        </Label>

                        <div className="rounded-full border border-[#1d4ed8]/10 bg-[#1d4ed8]/5 px-3 py-1.5 text-xs font-semibold text-[#1d4ed8] md:text-sm">
                          {formatNumber(amount)} {text.currency}
                        </div>
                      </div>

                      <Slider
                        aria-label={text.amount}
                        value={[amount]}
                        onValueChange={(value) =>
                          setAmount(
                            snapToStep(
                              value[0],
                              config.minAmount,
                              config.maxAmount,
                              config.amountStep
                            )
                          )
                        }
                        min={config.minAmount}
                        max={config.maxAmount}
                        step={config.amountStep}
                        className="py-2"
                      />

                      <div className="mt-4 grid grid-cols-3 gap-2">
                        <div className="rounded-2xl border border-white bg-white p-3 shadow-sm">
                          <p className="text-[11px] text-slate-500">{text.min}</p>
                          <p className="mt-1 text-xs font-semibold text-slate-900 md:text-sm">
                            {formatNumber(config.minAmount)}
                          </p>
                        </div>
                        <div className="rounded-2xl border border-white bg-white p-3 shadow-sm">
                          <p className="text-[11px] text-slate-500">{text.step}</p>
                          <p className="mt-1 text-xs font-semibold text-slate-900 md:text-sm">
                            {formatNumber(config.amountStep)}
                          </p>
                        </div>
                        <div className="rounded-2xl border border-white bg-white p-3 shadow-sm">
                          <p className="text-[11px] text-slate-500">{text.max}</p>
                          <p className="mt-1 text-xs font-semibold text-slate-900 md:text-sm">
                            {formatNumber(config.maxAmount)}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-[24px] border border-slate-200/80 bg-slate-50/80 p-4 md:p-5">
                      <div className="mb-4 flex items-center justify-between gap-3">
                        <Label className="text-sm font-medium text-slate-700">
                          {text.period}
                        </Label>

                        <div className="rounded-full border border-[#7f1d3a]/10 bg-[#7f1d3a]/5 px-3 py-1.5 text-xs font-semibold text-[#7f1d3a] md:text-sm">
                          {formatNumber(period)} {text.months}
                        </div>
                      </div>

                      <Slider
                        aria-label={text.period}
                        value={[period]}
                        onValueChange={(value) =>
                          setPeriod(
                            snapToStep(
                              value[0],
                              config.minPeriod,
                              config.maxPeriod,
                              config.periodStep
                            )
                          )
                        }
                        min={config.minPeriod}
                        max={config.maxPeriod}
                        step={config.periodStep}
                        className="py-2"
                      />

                      <div className="mt-4 grid grid-cols-3 gap-2">
                        <div className="rounded-2xl border border-white bg-white p-3 shadow-sm">
                          <p className="text-[11px] text-slate-500">{text.min}</p>
                          <p className="mt-1 text-xs font-semibold text-slate-900 md:text-sm">
                            {formatNumber(config.minPeriod)}
                          </p>
                        </div>
                        <div className="rounded-2xl border border-white bg-white p-3 shadow-sm">
                          <p className="text-[11px] text-slate-500">{text.step}</p>
                          <p className="mt-1 text-xs font-semibold text-slate-900 md:text-sm">
                            {formatNumber(config.periodStep)}
                          </p>
                        </div>
                        <div className="rounded-2xl border border-white bg-white p-3 shadow-sm">
                          <p className="text-[11px] text-slate-500">{text.max}</p>
                          <p className="mt-1 text-xs font-semibold text-slate-900 md:text-sm">
                            {formatNumber(config.maxPeriod)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <motion.div
                      key={`${type}-${amount}-${period}`}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,#0f1a43_0%,#1d2e6f_62%,#6d1731_145%)] p-5 text-white shadow-[0_24px_70px_rgba(15,23,42,0.24)] md:p-6"
                    >
                      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                        <div className="lg:min-w-[240px] xl:min-w-[280px]">
                          <div className="flex flex-wrap items-center justify-between gap-3 lg:block">
                            <p className="text-sm text-white/70">
                              {text.monthlyInstallment}
                            </p>

                            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/85 lg:mt-3">
                              <ArrowUpRight className="h-3.5 w-3.5" />
                              {text.instantEstimate}
                            </div>
                          </div>

                          <div className="mt-3 flex items-end gap-2">
                            <span className="text-3xl font-semibold tracking-tight md:text-4xl xl:text-[2.75rem]">
                              {formatNumber(estimate.monthlyInstallment)}
                            </span>
                            <span className="pb-1 text-sm text-white/70">
                              {text.currency}
                            </span>
                          </div>
                        </div>

                        <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2">
                          <div className="rounded-2xl border border-white/10 bg-white/10 p-3.5">
                            <div className="mb-2 flex items-center gap-2 text-white/70">
                              <Landmark className="h-4 w-4" />
                              <span className="text-xs">{text.financingType}</span>
                            </div>
                            <p className="text-sm font-semibold md:text-base">
                              {text.types[type]}
                            </p>
                          </div>

                          <div className="rounded-2xl border border-white/10 bg-white/10 p-3.5">
                            <div className="mb-2 flex items-center gap-2 text-white/70">
                              <BadgePercent className="h-4 w-4" />
                              <span className="text-xs">{text.annualProfitRate}</span>
                            </div>
                            <p className="text-sm font-semibold md:text-base">
                              {config.profitRate.toFixed(1)}%
                            </p>
                          </div>

                          <div className="rounded-2xl border border-white/10 bg-white/10 p-3.5">
                            <div className="mb-2 flex items-center gap-2 text-white/70">
                              <Wallet className="h-4 w-4" />
                              <span className="text-xs">{text.totalPayment}</span>
                            </div>
                            <p className="text-sm font-semibold md:text-base">
                              {formatNumber(estimate.totalPayment)} {text.currency}
                            </p>
                          </div>

                          <div className="rounded-2xl border border-white/10 bg-white/10 p-3.5">
                            <div className="mb-2 flex items-center gap-2 text-white/70">
                              <Coins className="h-4 w-4" />
                              <span className="text-xs">{text.totalProfit}</span>
                            </div>
                            <p className="text-sm font-semibold md:text-base">
                              {formatNumber(estimate.totalProfit)} {text.currency}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-3.5">
                        <div className="flex items-center justify-between gap-3">
                          <p className="text-xs text-white/65">{text.principalAmount}</p>
                          <p className="text-sm font-semibold text-white">
                            {formatNumber(amount)} {text.currency}
                          </p>
                        </div>
                      </div>

                      <p className="mt-4 text-[11px] leading-5 text-white/60 md:text-xs">
                        {text.summaryNote}
                      </p>
                    </motion.div>

                    <Button
                      asChild
                      size="lg"
                      className="h-12 w-full rounded-2xl bg-[linear-gradient(135deg,#1d4ed8_0%,#1e40af_50%,#7f1d3a_180%)] text-sm font-medium text-white shadow-[0_18px_40px_rgba(15,23,42,0.18)] transition-all hover:opacity-95 md:h-14 md:text-base"
                    >
                      <Link href={mode === "url" ? getLocalizedHref(config.href, locale) : config.href}>
                        <Calculator className="me-2 h-5 w-5" />
                        {text.apply}
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}