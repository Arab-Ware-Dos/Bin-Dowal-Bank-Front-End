"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import type { ReactNode } from "react"
import type { LucideIcon } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { RelatedServicesSlider } from "@/components/shared/related-services-slider"
import { accountsRelatedServices } from "@/data/related-services"
import {
  TrendingUp,
  Shield,
  Wallet,
  Check,
  HandCoins,
  ChevronLeft,
  ChevronRight,
  Phone,
  Users,
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Calendar,
  Lock,
  Star,
} from "lucide-react"

type FeatureItem = {
  icon: LucideIcon
  titleAr: string
  titleEn: string
  descAr: string
  descEn: string
}

type BenefitItem = {
  ar: string
  en: string
}

type RequirementItem = {
  ar: string
  en: string
}

type StepItem = {
  num: string
  ar: string
  en: string
  descAr: string
  descEn: string
}

type FAQItem = {
  qAr: string
  qEn: string
  aAr: string
  aEn: string
}



type HighlightItem = {
  labelAr: string
  labelEn: string
  valAr: string
  valEn: string
}

const viewport = { once: true, amount: 0.2 }

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
}

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
}

const features: FeatureItem[] = [
  {
    icon: TrendingUp,
    titleAr: "عوائد تنافسية مرتفعة",
    titleEn: "Competitive High Returns",
    descAr:
      "استمتع بعوائد استثمارية تنافسية على وديعتك محسوبة وفق صيغة المضاربة الإسلامية ضمن إطار واضح ومنظم.",
    descEn:
      "Enjoy competitive investment returns on your deposit calculated under the Islamic Mudarabah formula within a clear and structured framework.",
  },
  {
    icon: Calendar,
    titleAr: "فترات مرنة للاستثمار",
    titleEn: "Flexible Investment Terms",
    descAr:
      "اختر المدة التي تناسبك: ستة أشهر، سنة، أو أكثر وفق احتياجاتك وأهدافك المالية.",
    descEn:
      "Choose the term that suits you — six months, one year, or more based on your needs and financial goals.",
  },
  {
    icon: Shield,
    titleAr: "أمان وحماية استثمارية",
    titleEn: "Investment Security & Protection",
    descAr:
      "وديعتك محفوظة في بيئة مصرفية آمنة ومنظمة وفق أحكام الشريعة الإسلامية وإجراءات رقابية موثوقة.",
    descEn:
      "Your deposit is safeguarded in a secure banking environment regulated under Sharia principles and trusted controls.",
  },
  {
    icon: Star,
    titleAr: "خدمة عملاء مميزة",
    titleEn: "Premium Customer Service",
    descAr:
      "دعم مصرفي متخصص يساعدك على اختيار المدة والهيكل الأنسب لاستثمار وديعتك بثقة أكبر.",
    descEn:
      "Specialized banking support helps you choose the most suitable term and structure for your investment deposit with greater confidence.",
  },
  {
    icon: BarChart3,
    titleAr: "تقارير دورية للعوائد",
    titleEn: "Periodic Returns Reports",
    descAr:
      "احصل على كشوف دورية مفصلة توضح عوائد وديعتك الاستثمارية بشفافية ووضوح.",
    descEn:
      "Receive detailed periodic statements clearly showing your investment deposit returns with transparency and clarity.",
  },
  {
    icon: Lock,
    titleAr: "تجديد تلقائي للوديعة",
    titleEn: "Automatic Deposit Renewal",
    descAr:
      "خيار التجديد التلقائي عند الاستحقاق يضمن استمرار نمو وديعتك دون انقطاع بحسب الإعداد المعتمد.",
    descEn:
      "The automatic renewal option at maturity helps your deposit continue growing without interruption according to your approved setup.",
  },
]

const benefits: BenefitItem[] = [
  {
    ar: "عوائد استثمارية تنافسية متوافقة مع الشريعة",
    en: "Competitive Sharia-compliant investment returns",
  },
  {
    ar: "فترات استثمار مرنة تبدأ من 6 أشهر",
    en: "Flexible terms starting from 6 months",
  },
  {
    ar: "إمكانية تجديد الوديعة تلقائياً عند الاستحقاق",
    en: "Option to auto-renew at maturity",
  },
  {
    ar: "دعم مصرفي متخصص عند الحاجة",
    en: "Specialized banking support when needed",
  },
  {
    ar: "إمكانية فتح الوديعة بالعملات المتعددة",
    en: "Multi-currency deposit options",
  },
  {
    ar: "كشوف دورية مفصلة وشفافة",
    en: "Transparent and detailed periodic statements",
  },
]

const requirements: RequirementItem[] = [
  { ar: "هوية سارية المفعول", en: "Valid identification document" },
  { ar: "حساب جارٍ نشط في البنك", en: "Active current account at the bank" },
  { ar: "الحد الأدنى لمبلغ الوديعة", en: "Minimum deposit amount" },
  { ar: "نموذج طلب الوديعة مكتملاً", en: "Completed deposit request form" },
]

const steps: StepItem[] = [
  {
    num: "01",
    ar: "حدد المبلغ والمدة",
    en: "Define Amount & Term",
    descAr:
      "اختر مبلغ وديعتك والمدة المناسبة، سواء ستة أشهر أو سنة أو أكثر بحسب خطتك المالية.",
    descEn:
      "Choose your deposit amount and the term that fits your financial plan, whether six months, one year, or more.",
  },
  {
    num: "02",
    ar: "قدّم الطلب",
    en: "Submit Request",
    descAr:
      "تواصل مع أحد فروعنا أو عبر القنوات المتاحة لتقديم طلب فتح الوديعة الاستثمارية.",
    descEn:
      "Contact one of our branches or use available channels to submit your investment deposit request.",
  },
  {
    num: "03",
    ar: "التوقيع والتفعيل",
    en: "Sign & Activate",
    descAr:
      "بعد استكمال الإجراءات وتوقيع الاتفاقية، يتم تفعيل الوديعة وفق الشروط المعتمدة.",
    descEn:
      "After completing the process and signing the agreement, the deposit is activated according to the approved terms.",
  },
  {
    num: "04",
    ar: "استلم عوائدك",
    en: "Receive Returns",
    descAr:
      "تابع نمو استثمارك واستلم عوائدك عند الاستحقاق وفق الصيغة والشروط المتفق عليها.",
    descEn:
      "Track the growth of your investment and receive your returns at maturity according to the agreed formula and terms.",
  },
]

const faqs: FAQItem[] = [
  {
    qAr: "ما هي المدة الدنيا للوديعة الاستثمارية؟",
    qEn: "What is the minimum term for the investment deposit?",
    aAr:
      "تبدأ المدة عادة من ستة أشهر، مع إمكانية اختيار مدد أطول بحسب المنتج والسياسة المعتمدة لدى البنك.",
    aEn:
      "The term typically starts from six months, with longer options available depending on the product and the bank’s approved policy.",
  },
  {
    qAr: "هل يمكن سحب الوديعة قبل انتهاء مدتها؟",
    qEn: "Can the deposit be withdrawn before maturity?",
    aAr:
      "قد تتوفر إمكانية السحب المبكر وفق الشروط المتفق عليها في العقد، مع مراعاة أن ذلك قد يؤثر على العوائد المتوقعة.",
    aEn:
      "Early withdrawal may be available according to the terms agreed in the contract, noting that this may affect the expected returns.",
  },
  {
    qAr: "كيف تُحتسب عوائد الوديعة الاستثمارية؟",
    qEn: "How are the investment deposit returns calculated?",
    aAr:
      "تُحتسب العوائد وفق صيغة المضاربة الإسلامية وبناءً على آلية التوزيع المعتمدة لدى البنك ضمن إطار استثماري متوافق مع الشريعة.",
    aEn:
      "Returns are calculated under the Islamic Mudarabah structure and according to the bank’s approved distribution mechanism within a Sharia-compliant investment framework.",
  },
  {
    qAr: "هل يمكن تجديد الوديعة تلقائياً؟",
    qEn: "Can the deposit be renewed automatically?",
    aAr:
      "نعم، يمكن اختيار التجديد التلقائي عند الاستحقاق وفق الإعدادات المعتمدة عند فتح الوديعة.",
    aEn:
      "Yes, automatic renewal can be selected at maturity according to the approved setup chosen when opening the deposit.",
  },
  {
    qAr: "هل الوديعة الاستثمارية متوافقة مع الشريعة الإسلامية؟",
    qEn: "Is the investment deposit Sharia-compliant?",
    aAr:
      "نعم، تُدار الوديعة الاستثمارية ضمن إطار مصرفي متوافق مع أحكام الشريعة الإسلامية ووفق الضوابط المعتمدة لدى البنك.",
    aEn:
      "Yes, the investment deposit is managed within a banking framework that complies with Sharia principles and the bank’s approved controls.",
  },
]



const accountHighlights: HighlightItem[] = [
  {
    labelAr: "الحد الأدنى للمدة",
    labelEn: "Minimum Term",
    valAr: "6 أشهر",
    valEn: "6 months",
  },
  {
    labelAr: "العوائد",
    labelEn: "Returns",
    valAr: "تنافسية — وفق المضاربة",
    valEn: "Competitive — Mudarabah",
  },
  {
    labelAr: "صيغة الاستثمار",
    labelEn: "Investment Formula",
    valAr: "إسلامية معتمدة",
    valEn: "Approved Islamic",
  },
  {
    labelAr: "التجديد",
    labelEn: "Renewal",
    valAr: "تلقائي أو يدوي",
    valEn: "Auto or Manual",
  },
]

function SectionEyebrow({
  children,
  dark = false,
}: {
  children: ReactNode
  dark?: boolean
}) {
  return (
    <span
      className={`mb-3 inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] ${
        dark
          ? "border-white/15 bg-white/8 text-white/70"
          : "border-[#262b80]/10 bg-[#262b80]/[0.04] text-[#262b80]"
      }`}
    >
      {children}
    </span>
  )
}

function SectionHeading({
  eyebrow,
  title,
  centered = true,
  dark = false,
}: {
  eyebrow: string
  title: string
  centered?: boolean
  dark?: boolean
}) {
  return (
    <div className={centered ? "text-center" : ""}>
      <SectionEyebrow dark={dark}>{eyebrow}</SectionEyebrow>
      <h2
        className={`text-3xl font-bold tracking-tight md:text-4xl ${
          dark ? "text-white" : "text-[#0b0d36]"
        }`}
      >
        {title}
      </h2>
    </div>
  )
}

function SectionShell({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <section className={`relative overflow-hidden py-20 ${className}`}>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-56 w-56 rounded-full bg-[#262b80]/[0.04] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[#0b0d36]/[0.04] blur-3xl" />
      </div>
      <div className="container relative z-10 mx-auto px-4">{children}</div>
    </section>
  )
}

export default function InvestmentDepositPage() {
  const { locale } = useI18n()
  const ar = locale === "ar"

  const CTAArrow = ar ? ArrowLeft : ArrowRight
  const StepConnector = ar ? ChevronLeft : ChevronRight

  const relatedServices = accountsRelatedServices.filter(s => s.id !== 'investment')

  return (
    <>
      <section className="relative flex min-h-[620px] items-center overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#08112d] via-[#1d2a72] to-[#0b0d36]" />
        <div
          className="absolute inset-0 -z-10 opacity-[0.05]"
          style={{
            backgroundImage: "url('/images/new-pattern.png')",
            backgroundSize: "cover",
          }}
        />
        <div className="absolute -top-32 -start-32 h-[520px] w-[520px] rounded-full bg-sky-400/10 blur-3xl opacity-50" />
        <div className="absolute bottom-0 end-0 h-[360px] w-[360px] rounded-full bg-white/6 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="container relative mx-auto w-full px-4">
          <Breadcrumbs
            items={[
              { labelKey: "nav.personalBanking", href: "/personal-banking" },
              { labelKey: "nav.investmentDeposit" },
            ]}
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-3xl"
          >
            <motion.div variants={fadeUp}>
              <SectionEyebrow dark>{ar ? "خدمات الأفراد" : "Personal Banking"}</SectionEyebrow>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
            >
              {ar ? "حساب الوديعة الاستثمارية" : "Investment Deposit Account"}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mb-10 max-w-2xl text-lg leading-8 text-white/78 md:text-xl"
            >
              {ar
                ? "لتنمية مدخراتك بعوائد تنافسية عبر استثمارها لفترات زمنية مرنة تبدأ من ستة أشهر وتمتد وفق أهدافك المالية."
                : "Grow your savings with competitive returns by investing them over flexible periods starting from six months and extending according to your financial goals."}
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#0b0d36] shadow-[0_12px_34px_rgba(7,10,30,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_44px_rgba(7,10,30,0.28)]"
              >
                {ar ? "افتح وديعتك الآن" : "Open Your Deposit"}
                <CTAArrow className="h-4 w-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/16"
              >
                <Phone className="h-4 w-4" />
                {ar ? "تواصل معنا" : "Contact Us"}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <SectionShell className="bg-white">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mb-14"
        >
          <SectionHeading
            eyebrow={ar ? "مزايا الوديعة" : "Deposit Features"}
            title={
              ar
                ? "ما الذي يميز الوديعة الاستثمارية؟"
                : "What Makes the Investment Deposit Stand Out?"
            }
          />
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => {
            const Icon = feature.icon

            return (
              <motion.div
                key={feature.titleEn}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-[26px] border border-slate-200/80 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#262b80]/15 hover:shadow-[0_24px_54px_rgba(7,10,30,0.1)]"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#262b80]/25 to-transparent" />
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#262b80]/[0.045] blur-2xl transition-transform duration-500 group-hover:scale-125" />

                <div className="relative z-10">
                  <div className="mb-5 flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0b0d36] to-[#262b80] text-white shadow-[0_10px_24px_rgba(38,43,128,0.22)]">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mb-2 text-base font-semibold text-slate-900">
                    {ar ? feature.titleAr : feature.titleEn}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-500">
                    {ar ? feature.descAr : feature.descEn}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </SectionShell>

      <SectionShell className="bg-[linear-gradient(180deg,#f8faff_0%,#ffffff_100%)]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}>
            <SectionHeading
              eyebrow={ar ? "لماذا تختارها؟" : "Why Choose It?"}
              title={
                ar
                  ? "استثمار منظم بعوائد تنافسية"
                  : "Structured Investment with Competitive Returns"
              }
              centered={false}
            />

            <p className="mb-8 mt-6 max-w-xl leading-8 text-slate-600">
              {ar
                ? "الوديعة الاستثمارية من بنك بن دول خيار مناسب لمن يسعى إلى تنمية مدخراته بأسلوب منظم وآمن. استثمر لفترة محددة واستفد من عوائد مجزية ضمن إطار مصرفي متوافق مع أحكام الشريعة الإسلامية."
                : "Bin Dowal’s Investment Deposit is a suitable choice for those seeking to grow their savings in an organized and secure way. Invest for a defined period and benefit from rewarding returns within a Sharia-compliant banking framework."}
            </p>

            <ul className="space-y-3.5">
              {benefits.map((benefit) => (
                <li
                  key={benefit.en}
                  className={`group flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-3 text-slate-700 shadow-[0_8px_24px_rgba(15,23,42,0.03)] transition-all duration-300 hover:border-[#262b80]/10 hover:bg-white ${
                    ar ? "text-right" : "text-left"
                  }`}
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#0b0d36] to-[#262b80] text-white shadow-[0_8px_18px_rgba(38,43,128,0.18)]">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm font-medium">
                    {ar ? benefit.ar : benefit.en}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="relative overflow-hidden rounded-[30px] border border-slate-200/80 bg-white p-8 shadow-[0_28px_70px_rgba(7,10,30,0.08)]"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0b0d36] via-[#262b80] to-[#5c6cff]" />
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#262b80]/[0.05] blur-3xl" />
            <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-[#0b0d36]/[0.05] blur-3xl" />

            <div className="relative z-10">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-[22px] bg-gradient-to-br from-[#0b0d36] via-[#262b80] to-[#324198] text-white shadow-[0_16px_36px_rgba(38,43,128,0.24)]">
                <TrendingUp className="h-8 w-8" />
              </div>

              <h3 className="mb-2 text-xl font-bold text-slate-900">
                {ar ? "الوديعة الاستثمارية" : "Investment Deposit"}
              </h3>
              <p className="mb-7 text-sm text-slate-500">
                {ar
                  ? "بنك بن دول للتمويل الأصغر الإسلامي"
                  : "Bin Dowal Islamic Microfinance Bank"}
              </p>

              <div className="space-y-3">
                {accountHighlights.map((row) => (
                  <div
                    key={row.labelEn}
                    className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50/80 px-4 py-4"
                  >
                    <span className="text-sm text-slate-500">
                      {ar ? row.labelAr : row.labelEn}
                    </span>
                    <span className="text-sm font-semibold text-[#262b80]">
                      {ar ? row.valAr : row.valEn}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </SectionShell>

      <SectionShell className="bg-white">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mb-14"
        >
          <SectionHeading
            eyebrow={ar ? "الشروط والمتطلبات" : "Requirements"}
            title={ar ? "متطلبات فتح الوديعة" : "Deposit Opening Requirements"}
          />
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mx-auto grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {requirements.map((requirement, index) => (
            <motion.div
              key={requirement.en}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-[24px] border border-slate-200/80 bg-white p-6 text-center shadow-[0_10px_28px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(7,10,30,0.08)]"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#262b80]/20 to-transparent" />
              <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#0b0d36] to-[#262b80] text-sm font-bold text-white shadow-[0_10px_24px_rgba(38,43,128,0.2)]">
                {index + 1}
              </div>
              <p className="text-sm font-medium leading-7 text-slate-700">
                {ar ? requirement.ar : requirement.en}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </SectionShell>

      <section className="relative overflow-hidden bg-gradient-to-br from-[#08112d] via-[#1d2a72] to-[#0b0d36] py-20">
        <div className="absolute inset-0">
          <div className="absolute left-[8%] top-14 h-40 w-40 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute bottom-10 right-[10%] h-56 w-56 rounded-full bg-[#7e8cff]/10 blur-3xl" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="mb-14"
          >
            <SectionHeading
              eyebrow={ar ? "خطوات بسيطة" : "Simple Steps"}
              title={
                ar
                  ? "كيف تفتح وديعتك الاستثمارية؟"
                  : "How to Open Your Investment Deposit?"
              }
              dark
            />
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.num}
                variants={fadeUp}
                className="relative rounded-[26px] border border-white/10 bg-white/[0.08] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.12)] backdrop-blur-md"
              >
                {index < steps.length - 1 && (
                  <StepConnector
                    className={`absolute top-1/2 hidden h-5 w-5 -translate-y-1/2 text-white/30 lg:block ${
                      ar ? "-left-3" : "-right-3"
                    }`}
                  />
                )}

                <span className="mb-4 block text-4xl font-extrabold tracking-tight text-white/16">
                  {step.num}
                </span>
                <h3 className="mb-2 text-base font-semibold text-white">
                  {ar ? step.ar : step.en}
                </h3>
                <p className="text-sm leading-7 text-white/68">
                  {ar ? step.descAr : step.descEn}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <SectionShell className="bg-white">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mb-14"
        >
          <SectionHeading
            eyebrow={ar ? "أسئلة شائعة" : "FAQ"}
            title={
              ar
                ? "الأسئلة الشائعة حول الوديعة الاستثمارية"
                : "Common Questions About the Investment Deposit"
            }
          />
        </motion.div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.qEn}
                value={`faq-${index}`}
                className="overflow-hidden rounded-[22px] border border-slate-200/80 bg-white px-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
              >
                <AccordionTrigger
                  className={`py-5 text-[15px] font-semibold text-slate-800 hover:text-[#262b80] ${
                    ar ? "text-right" : "text-left"
                  }`}
                >
                  {ar ? faq.qAr : faq.qEn}
                </AccordionTrigger>
                <AccordionContent className="pb-5 leading-8 text-slate-500">
                  {ar ? faq.aAr : faq.aEn}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </SectionShell>

      <section className="relative overflow-hidden bg-slate-50 py-20">
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#262b80]/[0.05] blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="mx-auto max-w-4xl overflow-hidden rounded-[34px] border border-white/40 bg-gradient-to-br from-[#0b0d36] via-[#262b80] to-[#111a4e] px-8 py-16 text-center shadow-[0_45px_90px_rgba(7,10,30,0.28)]"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

            <SectionEyebrow dark>{ar ? "ابدأ الآن" : "Get Started"}</SectionEyebrow>

            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
              {ar
                ? "نمّ مدخراتك مع الوديعة الاستثمارية"
                : "Grow Your Savings with an Investment Deposit"}
            </h2>

            <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-white/72">
              {ar
                ? "استثمر بثقة واحصل على عوائد تنافسية متوافقة مع الشريعة الإسلامية ضمن إطار مصرفي واضح ومنظم."
                : "Invest with confidence and earn competitive Sharia-compliant returns within a clear and structured banking framework."}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#0b0d36] shadow-[0_12px_30px_rgba(255,255,255,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(255,255,255,0.18)]"
              >
                {ar ? "افتح وديعتك الآن" : "Open Your Deposit Now"}
                <CTAArrow className="h-4 w-4" />
              </Link>

              <Link
                href="/branches"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/16"
              >
                {ar ? "ابحث عن فرع" : "Find a Branch"}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <RelatedServicesSlider
        services={relatedServices}
        titleAr="منتجات ذات صلة"
        titleEn="Related Products"
      />
    </>
  )
}