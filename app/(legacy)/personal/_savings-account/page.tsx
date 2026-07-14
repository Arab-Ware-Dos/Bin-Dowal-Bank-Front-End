"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import type { ReactNode } from "react"
import type { LucideIcon } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"
import { PageHero } from "@/components/ui/page-hero"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { RelatedServicesSlider } from "@/components/shared/related-services-slider"
import { accountsRelatedServices } from "@/data/related-services"
import {
  HandCoins,
  TrendingUp,
  Shield,
  Wallet,
  Check,
  ChevronLeft,
  ChevronRight,
  Phone,
  Users,
  ArrowLeft,
  ArrowRight,
  BarChart3,
  RefreshCw,
  Lock,
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
    icon: BarChart3,
    titleAr: "عوائد متوافقة مع الشريعة",
    titleEn: "Sharia-Compliant Returns",
    descAr:
      "احصل على عوائد مجزية على مدخراتك محسوبة وفق صيغ إسلامية معتمدة وتحت إشراف شرعي يعزّز الثقة والوضوح.",
    descEn:
      "Earn rewarding returns on your savings through approved Sharia-compliant structures with trusted oversight and clarity.",
  },
  {
    icon: RefreshCw,
    titleAr: "حرية السحب المرن",
    titleEn: "Flexible Withdrawal",
    descAr:
      "الوصول إلى مدخراتك عند الحاجة بسهولة ومرونة، بما يمنحك توازناً عملياً بين الادخار والسيولة.",
    descEn:
      "Access your savings when needed with ease and flexibility, giving you a practical balance between saving and liquidity.",
  },
  {
    icon: Shield,
    titleAr: "أمان تام للمدخرات",
    titleEn: "Full Security",
    descAr:
      "مدخراتك محفوظة ضمن بيئة مصرفية موثوقة بمعايير حماية عالية وإجراءات رقابية تعزز الاستقرار.",
    descEn:
      "Your savings are protected within a trusted banking environment supported by high security standards and strong controls.",
  },
  {
    icon: Lock,
    titleAr: "مرونة في البدء",
    titleEn: "Flexible Start",
    descAr:
      "ابدأ رحلة الادخار بسهولة دون تعقيد، واجعل نمو رصيدك التدريجي جزءًا من خطتك المالية اليومية.",
    descEn:
      "Start your savings journey with ease and make steady balance growth part of your everyday financial plan.",
  },
  {
    icon: TrendingUp,
    titleAr: "نمو تدريجي للمدخرات",
    titleEn: "Gradual Growth",
    descAr:
      "تابع نمو مدخراتك بانتظام مع عوائد تضاف بصورة دورية ضمن إطار مصرفي منظم وواضح.",
    descEn:
      "Watch your savings grow steadily with periodic returns added through a clear and structured banking framework.",
  },
  {
    icon: HandCoins,
    titleAr: "إدارة ذكية للأهداف",
    titleEn: "Smart Goal Management",
    descAr:
      "حدّد أهدافك الادخارية وراقب تقدمك عبر القنوات الرقمية، بما يساعدك على تنظيم قراراتك المالية بفعالية.",
    descEn:
      "Set savings goals and monitor your progress through digital channels, helping you organize your financial decisions effectively.",
  },
]

const benefits: BenefitItem[] = [
  {
    ar: "عوائد دورية متوافقة مع الشريعة الإسلامية",
    en: "Periodic Sharia-compliant returns",
  },
  {
    ar: "سهولة الوصول وسحب الأموال عند الحاجة",
    en: "Easy access and withdrawal when needed",
  },
  {
    ar: "مرونة عالية في إدارة الادخار",
    en: "High flexibility in managing savings",
  },
  {
    ar: "إدارة الحساب عبر التطبيق والخدمات الرقمية",
    en: "Manage the account through the app and digital services",
  },
  {
    ar: "كشف حساب إلكتروني مفصل",
    en: "Detailed electronic account statement",
  },
  {
    ar: "إمكانية التحويل التلقائي من الحساب الجاري",
    en: "Automatic transfer from the current account",
  },
]

const requirements: RequirementItem[] = [
  { ar: "هوية سارية المفعول", en: "Valid identification document" },
  { ar: "نموذج طلب فتح حساب مكتمل", en: "Completed savings account application form" },
  { ar: "رقم هاتف جوال مسجل", en: "Registered mobile number" },
  { ar: "استيفاء أي متطلبات تنظيمية إضافية عند الحاجة", en: "Any additional regulatory requirements if needed" },
]

const steps: StepItem[] = [
  {
    num: "01",
    ar: "قدّم الطلب",
    en: "Submit Request",
    descAr: "أكمل طلب فتح حساب التوفير عبر القنوات المتاحة أو من خلال زيارة أحد الفروع.",
    descEn: "Complete your savings account request through available channels or by visiting one of our branches.",
  },
  {
    num: "02",
    ar: "استكمال الوثائق",
    en: "Complete Documents",
    descAr: "قدّم الوثائق المطلوبة لإتمام التحقق ومراجعة البيانات وفق الإجراء المعتمد.",
    descEn: "Submit the required documents to complete verification and data review according to the approved process.",
  },
  {
    num: "03",
    ar: "تفعيل الحساب",
    en: "Activate Account",
    descAr: "بعد اعتماد الطلب، يتم تفعيل الحساب وإتاحة خدماته الأساسية لك مباشرة.",
    descEn: "Once the request is approved, the account is activated and its core services become available.",
  },
  {
    num: "04",
    ar: "ابدأ الادخار",
    en: "Start Saving",
    descAr: "ابدأ بإيداع أول مبلغ وراقب نمو مدخراتك عبر القنوات المصرفية المختلفة.",
    descEn: "Deposit your first amount and begin tracking the growth of your savings through the bank’s channels.",
  },
]

const faqs: FAQItem[] = [
  {
    qAr: "كيف تُحتسب العوائد على حساب التوفير؟",
    qEn: "How are returns calculated on the savings account?",
    aAr:
      "تُحتسب العوائد وفق الصيغة المعتمدة للمنتج وبحسب آلية البنك المعتمدة، ويتم توضيح تفاصيلها للعملاء ضمن إطار متوافق مع الشريعة الإسلامية.",
    aEn:
      "Returns are calculated according to the approved product structure and the bank’s applicable mechanism, with details provided within a Sharia-compliant framework.",
  },
  {
    qAr: "هل يمكن فتح أكثر من حساب توفير؟",
    qEn: "Can I open more than one savings account?",
    aAr:
      "قد يتيح البنك فتح أكثر من حساب توفير وفق السياسة المعتمدة، بما يساعد على تنظيم الأهداف الادخارية المختلفة.",
    aEn:
      "The bank may allow more than one savings account subject to approved policy, helping customers organize different savings goals.",
  },
  {
    qAr: "هل توجد قيود على السحب من حساب التوفير؟",
    qEn: "Are there restrictions on withdrawing from the savings account?",
    aAr:
      "يتمتع الحساب بمرونة جيدة في السحب، مع إمكانية اختلاف بعض التفاصيل بحسب سياسة المنتج المعتمدة لدى البنك.",
    aEn:
      "The account offers good withdrawal flexibility, while certain details may vary depending on the bank’s approved product policy.",
  },
  {
    qAr: "هل يمكن الربط بين حساب التوفير والحساب الجاري؟",
    qEn: "Can the savings account be linked to the current account?",
    aAr:
      "نعم، قد تتوفر إمكانية الربط أو التحويل المنتظم بين الحسابات وفق الخدمات المتاحة، بما يدعم الادخار المنهجي.",
    aEn:
      "Yes, linking or scheduled transfers between accounts may be available depending on the offered services, supporting disciplined saving.",
  },
  {
    qAr: "هل حساب التوفير متوافق مع أحكام الشريعة الإسلامية؟",
    qEn: "Is the savings account Sharia-compliant?",
    aAr:
      "نعم، يتم تقديم الحساب ضمن إطار مصرفي متوافق مع أحكام الشريعة الإسلامية ووفق الضوابط المعتمدة لدى البنك.",
    aEn:
      "Yes, the account is offered within a banking framework that complies with Sharia principles and the bank’s approved controls.",
  },
]



const accountHighlights: HighlightItem[] = [
  {
    labelAr: "رسوم فتح الحساب",
    labelEn: "Account Opening Fee",
    valAr: "حسب السياسة المعتمدة",
    valEn: "Subject to approved policy",
  },
  {
    labelAr: "العوائد",
    labelEn: "Returns",
    valAr: "متوافقة مع الشريعة",
    valEn: "Sharia-compliant",
  },
  {
    labelAr: "الوصول إلى الأموال",
    labelEn: "Access to Funds",
    valAr: "مرن",
    valEn: "Flexible",
  },
  {
    labelAr: "الخدمات الرقمية",
    labelEn: "Digital Services",
    valAr: "متوفرة",
    valEn: "Available",
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

export default function SavingsAccountPage() {
  const { locale } = useI18n()
  const ar = locale === "ar"

  const CTAArrow = ar ? ArrowLeft : ArrowRight
  const StepConnector = ar ? ChevronLeft : ChevronRight

  const relatedServices = accountsRelatedServices.filter(s => s.id !== 'savings')

  return (
    <>
      <PageHero
        title={ar ? "حساب التوفير" : "Savings Account"}
        subtitle={
          ar
            ? "خيار ادخاري عملي وآمن يساعدك على تنمية مدخراتك ضمن إطار متوافق مع الشريعة الإسلامية مع مرونة الوصول إلى أموالك."
            : "A practical and secure savings solution that helps grow your funds within a Sharia-compliant framework while maintaining flexible access to your money."
        }
        breadcrumbs={[
          { labelKey: "nav.personalBanking", href: "/personal-banking" },
          { labelKey: "nav.savingsAccount" },
        ]}
        tagline={ar ? "خدمات الأفراد" : "Personal Banking"}
      >
        <div className="flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#0b0d36] shadow-[0_12px_34px_rgba(7,10,30,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_44px_rgba(7,10,30,0.28)]"
          >
            {ar ? "افتح حسابك الآن" : "Open Your Account"}
            <CTAArrow className="h-4 w-4" />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/16"
          >
            <Phone className="h-4 w-4" />
            {ar ? "تواصل معنا" : "Contact Us"}
          </Link>
        </div>
      </PageHero>

      <SectionShell className="bg-white">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mb-14"
        >
          <SectionHeading
            eyebrow={ar ? "مزايا الحساب" : "Account Features"}
            title={ar ? "ما الذي يميز حساب التوفير؟" : "What Makes the Savings Account Stand Out?"}
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
              eyebrow={ar ? "لماذا تختاره؟" : "Why Choose It?"}
              title={
                ar
                  ? "ادخار حكيم يدعم أهدافك المستقبلية"
                  : "Smart Saving That Supports Your Future Goals"
              }
              centered={false}
            />

            <p className="mb-8 mt-6 max-w-xl leading-8 text-slate-600">
              {ar
                ? "حساب التوفير مصمم للأفراد الراغبين في بناء مدخرات منظمة وآمنة مع الاستفادة من عوائد متوافقة مع الشريعة الإسلامية، مع الحفاظ على مرونة جيدة في الوصول إلى الأموال عند الحاجة."
                : "The savings account is designed for individuals who want to build organized and secure savings while benefiting from Sharia-compliant returns and maintaining flexible access to funds when needed."}
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
                  <span className="text-sm font-medium">{ar ? benefit.ar : benefit.en}</span>
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
                <HandCoins className="h-8 w-8" />
              </div>

              <h3 className="mb-2 text-xl font-bold text-slate-900">
                {ar ? "حساب التوفير" : "Savings Account"}
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
            eyebrow={ar ? "الشروط والوثائق" : "Requirements"}
            title={ar ? "متطلبات فتح الحساب" : "Account Opening Requirements"}
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
              title={ar ? "كيف تفتح حساب التوفير؟" : "How to Open Your Savings Account?"}
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
                ? "الأسئلة الشائعة حول حساب التوفير"
                : "Common Questions About the Savings Account"
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
              {ar ? "ابدأ رحلة ادخارك اليوم" : "Begin Your Savings Journey Today"}
            </h2>

            <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-white/72">
              {ar
                ? "كل مبلغ تدّخره اليوم هو خطوة نحو مستقبل أكثر استقرارًا. افتح حساب التوفير وابدأ إدارة مدخراتك بثقة."
                : "Every amount you save today is a step toward a more stable future. Open your savings account and start managing your savings with confidence."}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#0b0d36] shadow-[0_12px_30px_rgba(255,255,255,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(255,255,255,0.18)]"
              >
                {ar ? "افتح حسابك الآن" : "Open Your Account Now"}
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