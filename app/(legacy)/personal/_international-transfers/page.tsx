"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useMemo, useState, type ReactNode } from "react"
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
import { allRelatedServices } from "@/data/related-services"
import {
  ArrowLeft,
  ArrowRight,
  ArrowLeftRight,
  BellRing,
  Building2,
  Check,
  Clock3,
  FileCheck2,
  Globe2,
  Landmark,
  MapPin,
  ShieldCheck,
  Smartphone,
  Wallet,
  Zap,
  BriefcaseBusiness,
} from "lucide-react"

type Locale = "ar" | "en"
type ServiceTabKey = "request" | "tracking"

type StatItem = {
  labelAr: string
  labelEn: string
  valueAr: string
  valueEn: string
}

type FamilyLink = {
  href: string
  key: string
  icon: LucideIcon
  labelAr: string
  labelEn: string
  active?: boolean
}

type ServiceTab = {
  key: ServiceTabKey
  icon: LucideIcon
  labelAr: string
  labelEn: string
  titleAr: string
  titleEn: string
  introAr: string
  introEn: string
  stepsAr: string[]
  stepsEn: string[]
  requirementsAr: string[]
  requirementsEn: string[]
  notesAr: string[]
  notesEn: string[]
}

type StepItem = {
  number: string
  titleAr: string
  titleEn: string
  descAr: string
  descEn: string
}

type FAQItem = {
  qAr: string
  qEn: string
  aAr: string
  aEn: string
}



type OverviewItem = {
  icon: LucideIcon
  titleAr: string
  titleEn: string
  descAr: string
  descEn: string
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
    transition: { staggerChildren: 0.08 },
  },
}

const transferFamily: FamilyLink[] = [
  {
    href: "/personal/local-transfers",
    key: "local",
    icon: Landmark,
    labelAr: "الحوالات المحلية",
    labelEn: "Local Transfers",
  },
  {
    href: "/personal/international-transfers",
    key: "international",
    icon: Globe2,
    labelAr: "التحويلات الدولية",
    labelEn: "International Transfers",
    active: true,
  },
  {
    href: "/personal/fast-money-transfers",
    key: "express",
    icon: Zap,
    labelAr: "الحوالات السريعة",
    labelEn: "Fast Money Transfers",
  },
]

const heroStats: StatItem[] = [
  {
    labelAr: "العملات",
    labelEn: "Currencies",
    valueAr: "العملات الأجنبية الرئيسية",
    valueEn: "Major foreign currencies",
  },
  {
    labelAr: "الرسوم",
    labelEn: "Fees",
    valueAr: "تُعرض قبل الاعتماد",
    valueEn: "Shown before approval",
  },
  {
    labelAr: "المدة",
    labelEn: "Timing",
    valueAr: "بحسب الدولة والبنك المراسل",
    valueEn: "Depends on country and correspondent bank",
  },
  {
    labelAr: "التتبع",
    labelEn: "Tracking",
    valueAr: "متاح عبر الرقم المرجعي",
    valueEn: "Available via reference number",
  },
]

const overviewItems: OverviewItem[] = [
  {
    icon: Globe2,
    titleAr: "تغطية دولية أوضح",
    titleEn: "Clearer International Coverage",
    descAr:
      "الواجهة الجديدة تعرض خدمة التحويل الخارجي ضمن منطق مصرفي أوضح يرتبط بالعملة والوجهة والبنك المراسل.",
    descEn:
      "The new interface presents the external transfer service in a clearer banking logic tied to currency, destination, and correspondent bank.",
  },
  {
    icon: FileCheck2,
    titleAr: "امتثال ومراجعة منظمة",
    titleEn: "Structured Compliance & Review",
    descAr:
      "إبراز المتطلبات والمستندات والضوابط التشغيلية في مواضع منطقية تسهّل فهم العملية قبل التنفيذ.",
    descEn:
      "Requirements, documents, and operational controls are highlighted in logical places to simplify understanding before execution.",
  },
  {
    icon: ShieldCheck,
    titleAr: "متابعة أكثر احترافية",
    titleEn: "More Professional Tracking",
    descAr:
      "يتم التركيز على التتبع، الرسوم، المدة، وأسعار الصرف ضمن تجربة أكثر هدوءًا واحترافية من الصفحات التقليدية.",
    descEn:
      "The design emphasizes tracking, fees, timing, and exchange rates within a calmer and more professional experience than conventional pages.",
  },
]

const serviceTabs: ServiceTab[] = [
  {
    key: "request",
    icon: Building2,
    labelAr: "بدء الطلب",
    labelEn: "Start Request",
    titleAr: "بدء التحويل الدولي من خلال الفرع",
    titleEn: "Start the international transfer through the branch",
    introAr:
      "هذا المسار مخصص لبدء طلب التحويل الدولي عندما تحتاج إلى مراجعة بيانات المستفيد، العملة، والوثائق المرتبطة بالعملية.",
    introEn:
      "This path is intended for initiating the international transfer request when beneficiary details, currency, and supporting documents need to be reviewed.",
    stepsAr: [
      "زيارة الفرع وتقديم طلب التحويل الدولي.",
      "تحديد العملة والمبلغ والوجهة المستفيدة.",
      "إدخال بيانات المستفيد ورمز السويفت أو الآيبان عند الحاجة.",
      "مراجعة الرسوم وسعر الصرف واعتماد الطلب.",
    ],
    stepsEn: [
      "Visit the branch and submit the international transfer request.",
      "Choose the currency, amount, and destination.",
      "Provide beneficiary details and the SWIFT code or IBAN when required.",
      "Review the fees and exchange rate, then approve the request.",
    ],
    requirementsAr: [
      "حساب نشط بالعملة المناسبة أو وفق آلية البنك.",
      "بيانات مستفيد كاملة ودقيقة.",
      "رمز السويفت أو رقم الحساب أو الآيبان حسب الوجهة.",
    ],
    requirementsEn: [
      "An active account in the relevant currency or according to the bank’s process.",
      "Complete and accurate beneficiary data.",
      "SWIFT code or account number or IBAN depending on the destination.",
    ],
    notesAr: [
      "قد تُطلب مستندات إضافية بحسب طبيعة العملية أو الوجهة.",
      "يتم توضيح الرسوم وسعر الصرف قبل الاعتماد النهائي.",
      "تعتمد بعض العمليات على ضوابط رقابية وامتثال إضافية.",
    ],
    notesEn: [
      "Additional documents may be required depending on the destination or transaction nature.",
      "Fees and exchange rates are clarified before final approval.",
      "Some transactions depend on additional compliance and regulatory checks.",
    ],
  },
  {
    key: "tracking",
    icon: BriefcaseBusiness,
    labelAr: "المتابعة والتتبع",
    labelEn: "Tracking & Follow-up",
    titleAr: "متابعة حالة الحوالة بعد التنفيذ",
    titleEn: "Follow up on the transfer status after execution",
    introAr:
      "بعد تنفيذ الطلب، تبرز أهمية الرقم المرجعي ومتابعة حالة الحوالة مع البنوك المراسلة حتى وصولها إلى الجهة المستفيدة.",
    introEn:
      "After execution, the reference number becomes important for following the transfer status with correspondent banks until it reaches the beneficiary.",
    stepsAr: [
      "الاحتفاظ بالرقم المرجعي الخاص بالعملية.",
      "التواصل مع البنك عند الحاجة إلى متابعة الحالة.",
      "التحقق من مسار الحوالة مع البنك المراسل عند التأخير.",
      "استلام تحديثات الحالة حتى اكتمال الوصول.",
    ],
    stepsEn: [
      "Keep the transaction reference number محفوظًا for follow-up.",
      "Contact the bank when status follow-up is required.",
      "Check the transfer route with the correspondent bank in case of delay.",
      "Receive status updates until final completion.",
    ],
    requirementsAr: [
      "الرقم المرجعي للحوالة.",
      "بيانات العملية الأساسية وتاريخ التنفيذ.",
      "توضيح سبب المتابعة عند وجود تأخير أو استفسار.",
    ],
    requirementsEn: [
      "The transfer reference number.",
      "Core transaction details and execution date.",
      "A clear reason for follow-up in case of delay or inquiry.",
    ],
    notesAr: [
      "مدة التنفيذ تختلف بحسب الدولة والبنك المستفيد.",
      "بعض التأخيرات تكون مرتبطة بعطل رسمية أو مراجعات وسيطة.",
      "يتم دعم المتابعة وفق الإجراءات المعتمدة مع الجهات الخارجية.",
    ],
    notesEn: [
      "Execution timing varies by destination country and beneficiary bank.",
      "Some delays may be linked to public holidays or intermediary reviews.",
      "Follow-up support is provided according to approved procedures with external parties.",
    ],
  },
]

const processSteps: StepItem[] = [
  {
    number: "01",
    titleAr: "تجهيز البيانات",
    titleEn: "Prepare Details",
    descAr: "جهّز بيانات المستفيد الدولي والمستندات اللازمة بدقة قبل بدء الطلب.",
    descEn:
      "Prepare the international beneficiary details and required documents accurately before starting the request.",
  },
  {
    number: "02",
    titleAr: "اختيار العملة والمبلغ",
    titleEn: "Select Currency & Amount",
    descAr: "حدّد العملة المناسبة وقيمة التحويل وفق الجهة والوجهة المستفيدة.",
    descEn:
      "Choose the appropriate currency and transfer amount based on the beneficiary and destination.",
  },
  {
    number: "03",
    titleAr: "مراجعة الرسوم وسعر الصرف",
    titleEn: "Review Fees & FX Rate",
    descAr: "راجع الرسوم وأسعار الصرف والملاحظات التشغيلية قبل اعتماد العملية.",
    descEn:
      "Review fees, exchange rates, and operational notes before approving the transaction.",
  },
  {
    number: "04",
    titleAr: "التنفيذ والتحقق",
    titleEn: "Execute & Verify",
    descAr: "تُنفذ العملية وفق إجراءات البنك والضوابط المرتبطة بالتحويلات الخارجية.",
    descEn:
      "The transaction is executed according to bank procedures and controls related to external transfers.",
  },
  {
    number: "05",
    titleAr: "المتابعة والتتبع",
    titleEn: "Track & Follow Up",
    descAr: "استخدم الرقم المرجعي لمتابعة حالة الحوالة حتى وصولها للجهة المستفيدة.",
    descEn:
      "Use the reference number to track the transfer status until it reaches the beneficiary.",
  },
]

const policyItems: StatItem[] = [
  {
    labelAr: "الرسوم",
    labelEn: "Fees",
    valueAr: "تُعرض بوضوح قبل اعتماد التحويل",
    valueEn: "Displayed clearly before transfer approval",
  },
  {
    labelAr: "أسعار الصرف",
    labelEn: "Exchange Rates",
    valueAr: "تُراجع وقت التنفيذ بحسب السوق",
    valueEn: "Reviewed at execution time according to the market",
  },
  {
    labelAr: "التغطية",
    labelEn: "Coverage",
    valueAr: "تعتمد على شبكة البنوك المراسلة والوجهة",
    valueEn: "Depends on the correspondent banking network and destination",
  },
  {
    labelAr: "الامتثال",
    labelEn: "Compliance",
    valueAr: "قد يتطلب مستندات أو مراجعات إضافية",
    valueEn: "May require additional documents or reviews",
  },
]

const faqs: FAQItem[] = [
  {
    qAr: "كم تستغرق الحوالة الدولية عادةً؟",
    qEn: "How long does an international transfer usually take?",
    aAr:
      "تختلف مدة التنفيذ بحسب الدولة المستقبلة والبنك المراسل والبنك المستفيد، وعادةً ما تستغرق من يوم عمل إلى عدة أيام مصرفية.",
    aEn:
      "Timing varies depending on the receiving country, correspondent bank, and beneficiary bank, and usually ranges from one business day to several banking days.",
  },
  {
    qAr: "كيف يتم احتساب الرسوم وأسعار الصرف؟",
    qEn: "How are fees and exchange rates calculated?",
    aAr:
      "يتم توضيح الرسوم وسعر الصرف قبل اعتماد العملية النهائية، وقد تتأثر التكلفة بطبيعة التحويل والعملة والجهات الوسيطة المشاركة.",
    aEn:
      "Fees and exchange rates are clarified before final approval, and cost may be affected by the transfer type, currency, and intermediary institutions involved.",
  },
  {
    qAr: "هل يمكن تتبع الحوالة بعد التنفيذ؟",
    qEn: "Can the transfer be tracked after execution?",
    aAr:
      "نعم، يمكن متابعة الحوالة من خلال الرقم المرجعي للعملية وبالتنسيق مع فريق البنك عند الحاجة إلى تتبع الحالة.",
    aEn:
      "Yes. The transfer can be followed up using the transaction reference number and in coordination with the bank team when status tracking is needed.",
  },
  {
    qAr: "ما أهم البيانات المطلوبة قبل الإرسال؟",
    qEn: "What are the most important details required before sending?",
    aAr:
      "تشمل اسم المستفيد، رقم الحساب أو الآيبان، رمز السويفت للبنك المستفيد، العملة، المبلغ، وأي مستندات مرتبطة بغرض التحويل عند الحاجة.",
    aEn:
      "These include the beneficiary name, account number or IBAN, beneficiary bank SWIFT code, currency, amount, and any documents related to the transfer purpose when required.",
  },
]



function pick<T extends Record<string, string | string[]>>(
  locale: Locale,
  item: T,
  arKey: keyof T,
  enKey: keyof T,
) {
  return locale === "ar" ? item[arKey] : item[enKey]
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
        <div className="absolute left-0 top-0 h-56 w-56 rounded-full bg-[#324198]/[0.04] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[#324198]/[0.025] blur-3xl" />
      </div>
      <div className="container relative z-10 mx-auto px-4">{children}</div>
    </section>
  )
}

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
          ? "border-white/15 bg-white/10 text-white/72"
          : "border-[#324198]/12 bg-[#324198]/[0.05] text-[#324198]"
      }`}
    >
      {children}
    </span>
  )
}

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = true,
  dark = false,
}: {
  eyebrow: string
  title: string
  description?: string
  centered?: boolean
  dark?: boolean
}) {
  return (
    <div className={centered ? "text-center" : ""}>
      <SectionEyebrow dark={dark}>{eyebrow}</SectionEyebrow>
      <h2
        className={`text-3xl font-bold tracking-tight md:text-4xl ${
          dark ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 max-w-3xl text-base leading-8 ${
            centered ? "mx-auto" : "mx-0"
          } ${dark ? "text-white/70" : "text-slate-600"}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}

function BulletList({
  items,
  light = false,
}: {
  items: string[]
  light?: boolean
}) {
  return (
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={`${item}-${index}`} className="flex items-start gap-3">
          <span
            className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
              light
                ? "bg-white/12 text-white"
                : "bg-[#324198]/10 text-[#324198]"
            }`}
          >
            <Check className="h-3.5 w-3.5" />
          </span>
          <span
            className={
              light
                ? "text-sm leading-7 text-white/72"
                : "text-sm leading-7 text-slate-600"
            }
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  )
}

function FamilyTabs({ locale }: { locale: Locale }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      className="mx-auto max-w-6xl"
    >
      <nav className="overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/90 p-3 shadow-[0_22px_54px_rgba(15,23,42,0.06)] backdrop-blur-md">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {transferFamily.map((item) => {
            const Icon = item.icon
            const isActive = item.active

            return (
              <Link
                key={item.key}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`group relative overflow-hidden rounded-[22px] border px-5 py-4 transition-all duration-300 ${
                  isActive
                    ? "border-[#324198]/12 bg-[linear-gradient(135deg,rgba(36,53,127,0.08),rgba(50,65,152,0.04))] shadow-[0_16px_34px_rgba(50,65,152,0.10)]"
                    : "border-transparent bg-slate-50/70 hover:border-[#324198]/10 hover:bg-white"
                }`}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#324198]/22 to-transparent" />

                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-2xl transition-all duration-300 ${
                      isActive
                        ? "bg-[#324198] text-white shadow-[0_12px_28px_rgba(50,65,152,0.18)]"
                        : "bg-white text-slate-600 group-hover:bg-[#324198] group-hover:text-white"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                      {locale === "ar" ? "نظام الحوالات" : "Transfer System"}
                    </p>
                    <h3
                      className={`mt-1 text-sm font-semibold ${
                        isActive ? "text-[#24357f]" : "text-slate-800"
                      }`}
                    >
                      {locale === "ar" ? item.labelAr : item.labelEn}
                    </h3>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </nav>
    </motion.div>
  )
}

function OverviewCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon
  title: string
  description: string
}) {
  return (
    <motion.div
      variants={fadeUp}
      className="rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-[0_12px_34px_rgba(15,23,42,0.04)]"
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#324198]/10 text-[#324198]">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mb-2 text-base font-semibold text-slate-950">{title}</h3>
      <p className="text-sm leading-7 text-slate-600">{description}</p>
    </motion.div>
  )
}

function PolicyRow({
  label,
  value,
}: {
  label: string
  value: string
}) {
  return (
    <div className="grid gap-3 border-b border-slate-200/70 py-4 last:border-b-0 md:grid-cols-[0.3fr_0.7fr]">
      <p className="text-sm font-semibold text-[#324198]">{label}</p>
      <p className="text-sm leading-7 text-slate-600">{value}</p>
    </div>
  )
}

export default function InternationalTransfersPage() {
  const { locale } = useI18n()
  const currentLocale: Locale = locale === "ar" ? "ar" : "en"
  const isAr = currentLocale === "ar"

  const [activeTab, setActiveTab] = useState<ServiceTabKey>("request")

  const relatedServices = allRelatedServices.filter(s => s.id !== 'international-transfer')

  const CTAArrow = isAr ? ArrowLeft : ArrowRight

  const activeServiceTab = useMemo(
    () => serviceTabs.find((item) => item.key === activeTab) ?? serviceTabs[0],
    [activeTab],
  )

  const ActiveTabIcon = activeServiceTab.icon

  return (
    <>
      <PageHero
        title={isAr ? "التحويلات الدولية" : "International Transfers"}
        subtitle={
          isAr
            ? "تصميم أكثر نضجًا لصفحات الحوالات الدولية، يركّز على وضوح الإجراءات، مراجعة الرسوم والعملات، وسهولة متابعة الحوالة ضمن نظام خدمات التحويل في البنك."
            : "A more mature design for international transfer pages, focused on procedural clarity, reviewing fees and currencies, and easier transfer follow-up within the bank’s transfer service system."
        }
        breadcrumbs={[
          { labelKey: "nav.personalBanking", href: "/personal-banking" },
          { labelKey: "nav.internationalTransfers" },
        ]}
        tagline={isAr ? "الخدمات المالية" : "Financial Services"}
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-8 flex flex-wrap gap-4"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#1e2d72] shadow-[0_14px_34px_rgba(7,10,30,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_44px_rgba(7,10,30,0.22)]"
          >
            {isAr ? "تواصل مع فريق العمليات" : "Contact Operations Team"}
            <CTAArrow className="h-4 w-4" />
          </Link>

          <Link
            href="/atm-and-branches"
            className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/16"
          >
            <MapPin className="h-4 w-4" />
            {isAr ? "الفروع والصرافات" : "Branches & ATMs"}
          </Link>
        </motion.div>
      </PageHero>

      <FamilyTabs locale={currentLocale} />

      <SectionShell className="bg-white pt-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mb-10"
        >
          <SectionHeading
            eyebrow={isAr ? "ملخص الخدمة" : "Service Snapshot"}
            title={
              isAr ? "نظرة تشغيلية سريعة" : "A quick operational overview"
            }
            description={
              isAr
                ? "ملخص واضح لأهم عناصر التحويل الدولي: العملات، الرسوم، المدة، وإمكانية التتبع، بنفس هدوء وتنظيم الصفحة السابقة."
                : "A clear summary of the most important international transfer elements: currencies, fees, timing, and tracking, with the same calm structure used in the previous page."
            }
          />
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4"
        >
          {heroStats.map((item) => (
            <motion.div
              key={item.labelEn}
              variants={fadeUp}
              className="rounded-[26px] border border-slate-200/80 bg-white p-6 shadow-[0_12px_34px_rgba(15,23,42,0.04)]"
            >
              <p className="text-sm font-semibold text-[#324198]">
                {pick(currentLocale, item, "labelAr", "labelEn")}
              </p>
              <p className="mt-3 text-base leading-8 text-slate-700">
                {pick(currentLocale, item, "valueAr", "valueEn")}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </SectionShell>

      <SectionShell className="bg-white pt-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mb-14"
        >
          <SectionHeading
            eyebrow={isAr ? "نظرة النظام" : "System View"}
            title={
              isAr
                ? "واجهة أوضح للتحويلات الخارجية"
                : "A clearer interface for external transfers"
            }
            description={
              isAr
                ? "تمت إعادة صياغة الصفحة لتخدم منطق الحوالات الدولية نفسها: شريط عائلة الحوالات، ملخص تشغيلي، آلية واضحة لبدء الطلب، ثم مسار متابعة وتتبّع أكثر احترافية."
                : "The page has been restructured around the logic of international transfers themselves: a transfer-family bar, an operational summary, a clear request-starting flow, and a more professional tracking path."
            }
          />
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {overviewItems.map((item) => (
            <OverviewCard
              key={item.titleEn}
              icon={item.icon}
              title={pick(currentLocale, item, "titleAr", "titleEn") as string}
              description={
                pick(currentLocale, item, "descAr", "descEn") as string
              }
            />
          ))}
        </motion.div>
      </SectionShell>

      <SectionShell className="bg-[linear-gradient(180deg,#f8faff_0%,#ffffff_100%)]">
        <div className="grid gap-10 xl:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <SectionHeading
              eyebrow={isAr ? "آلية الخدمة" : "Service Flow"}
              title={
                isAr
                  ? "ابدأ الطلب ثم تابع حالة الحوالة"
                  : "Start the request and follow the transfer status"
              }
              description={
                isAr
                  ? "بدلاً من المعلومات العامة، يعرض هذا القسم مسارين واضحين: بدء طلب التحويل الدولي، ثم متابعة حالته بعد التنفيذ."
                  : "Instead of general information, this section presents two clear paths: initiating the international transfer request and following its status after execution."
              }
              centered={false}
            />

            <div
              className="mt-8 flex flex-wrap gap-3"
              role="tablist"
              aria-label={
                isAr ? "آلية خدمة التحويل الدولي" : "International transfer service flow"
              }
            >
              {serviceTabs.map((item) => {
                const Icon = item.icon
                const isActive = item.key === activeTab
                const tabId = `service-tab-${item.key}`
                const panelId = `service-panel-${item.key}`

                return (
                  <button
                    key={item.key}
                    id={tabId}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={panelId}
                    onClick={() => setActiveTab(item.key)}
                    className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                      isActive
                        ? "border-[#324198]/15 bg-[#324198] text-white shadow-[0_16px_32px_rgba(50,65,152,0.22)]"
                        : "border-slate-200 bg-white text-slate-700 hover:border-[#324198]/15 hover:text-[#324198]"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {pick(currentLocale, item, "labelAr", "labelEn")}
                  </button>
                )
              })}
            </div>

            <div className="mt-8 rounded-[30px] border border-slate-200/80 bg-white p-6 shadow-[0_12px_34px_rgba(15,23,42,0.04)]">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#324198]/10 text-[#324198]">
                  <Clock3 className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    {isAr ? "ملخص تشغيلي" : "Operational Summary"}
                  </p>
                  <h3 className="mt-1 text-base font-semibold text-slate-950">
                    {isAr
                      ? "معلومات أساسية قبل وأثناء المتابعة"
                      : "Key information before and during follow-up"}
                  </h3>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: Wallet,
                    labelAr: "الرسوم",
                    labelEn: "Fees",
                    valueAr: "تُعرض قبل الاعتماد النهائي",
                    valueEn: "Visible before final approval",
                  },
                  {
                    icon: ArrowLeftRight,
                    labelAr: "العملة",
                    labelEn: "Currency",
                    valueAr: "بحسب الوجهة والعملة المطلوبة",
                    valueEn: "Based on destination and required currency",
                  },
                  {
                    icon: BellRing,
                    labelAr: "المتابعة",
                    labelEn: "Follow-up",
                    valueAr: "عبر الرقم المرجعي والحالة التشغيلية",
                    valueEn: "Via reference number and operational status",
                  },
                  {
                    icon: ShieldCheck,
                    labelAr: "الامتثال",
                    labelEn: "Compliance",
                    valueAr: "قد يلزم تحقق أو مستندات إضافية",
                    valueEn: "May require extra checks or documents",
                  },
                ].map((item) => {
                  const Icon = item.icon

                  return (
                    <div
                      key={item.labelEn}
                      className="rounded-[22px] border border-slate-200/80 bg-slate-50/80 p-4"
                    >
                      <div className="mb-3 flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#324198] shadow-sm">
                          <Icon className="h-4 w-4" />
                        </div>
                        <p className="text-sm font-semibold text-slate-900">
                          {isAr ? item.labelAr : item.labelEn}
                        </p>
                      </div>
                      <p className="text-sm leading-7 text-slate-600">
                        {isAr ? item.valueAr : item.valueEn}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            id={`service-panel-${activeServiceTab.key}`}
            role="tabpanel"
            aria-labelledby={`service-tab-${activeServiceTab.key}`}
            className="relative overflow-hidden rounded-[34px] border border-slate-200/80 bg-white p-7 shadow-[0_24px_60px_rgba(15,23,42,0.06)]"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#24357f_0%,#324198_55%,#6f7fd8_100%)]" />
            <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-[#324198]/[0.05] blur-3xl" />

            <div className="relative z-10">
              <div className="mb-7 flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#324198]/10 text-[#324198]">
                  <ActiveTabIcon className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-950">
                    {pick(currentLocale, activeServiceTab, "titleAr", "titleEn")}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {pick(currentLocale, activeServiceTab, "introAr", "introEn")}
                  </p>
                </div>
              </div>

              <div className="grid gap-5 lg:grid-cols-3">
                <div className="rounded-[24px] border border-slate-200/80 bg-[linear-gradient(180deg,#ffffff_0%,#f8faff_100%)] p-5">
                  <h4 className="mb-4 text-sm font-semibold text-slate-900">
                    {isAr ? "الخطوات" : "Steps"}
                  </h4>
                  <BulletList
                    items={
                      pick(
                        currentLocale,
                        activeServiceTab,
                        "stepsAr",
                        "stepsEn",
                      ) as string[]
                    }
                  />
                </div>

                <div className="rounded-[24px] border border-slate-200/80 bg-[linear-gradient(180deg,#ffffff_0%,#f8faff_100%)] p-5">
                  <h4 className="mb-4 text-sm font-semibold text-slate-900">
                    {isAr ? "المتطلبات" : "Requirements"}
                  </h4>
                  <BulletList
                    items={
                      pick(
                        currentLocale,
                        activeServiceTab,
                        "requirementsAr",
                        "requirementsEn",
                      ) as string[]
                    }
                  />
                </div>

                <div className="rounded-[24px] border border-slate-200/80 bg-[linear-gradient(180deg,#ffffff_0%,#f8faff_100%)] p-5">
                  <h4 className="mb-4 text-sm font-semibold text-slate-900">
                    {isAr ? "ملاحظات مهمة" : "Important Notes"}
                  </h4>
                  <BulletList
                    items={
                      pick(
                        currentLocale,
                        activeServiceTab,
                        "notesAr",
                        "notesEn",
                      ) as string[]
                    }
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </SectionShell>

      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#17245d_0%,#24357f_45%,#324198_100%)] py-20">
        <div className="absolute inset-0">
          <div className="absolute left-[8%] top-14 h-40 w-40 rounded-full bg-white/6 blur-3xl" />
          <div className="absolute bottom-10 right-[10%] h-56 w-56 rounded-full bg-[#93a2f4]/12 blur-3xl" />
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
              eyebrow={isAr ? "مسار العملية" : "Process Flow"}
              title={
                isAr
                  ? "رحلة أوضح للتحويل الدولي ومتابعته"
                  : "A clearer journey for international transfer and follow-up"
              }
              description={
                isAr
                  ? "تم بناء رحلة الخدمة لتغطي تجهيز البيانات، مراجعة الرسوم والعملات، تنفيذ العملية، ثم المتابعة والتتبّع حتى الوصول."
                  : "The service journey is structured to cover data preparation, fees and currency review, execution, then follow-up and tracking until completion."
              }
              dark
            />
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-5"
          >
            {processSteps.map((step) => (
              <motion.div
                key={step.number}
                variants={fadeUp}
                className="relative rounded-[28px] border border-white/10 bg-white/[0.08] p-6 shadow-[0_20px_54px_rgba(0,0,0,0.12)] backdrop-blur-md"
              >
                <div className="mb-5 flex items-center justify-between gap-3">
                  <span className="text-4xl font-extrabold tracking-tight text-white/16">
                    {step.number}
                  </span>
                  <span className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
                </div>

                <h3 className="mb-2 text-base font-semibold text-white">
                  {pick(currentLocale, step, "titleAr", "titleEn")}
                </h3>
                <p className="text-sm leading-7 text-white/72">
                  {pick(currentLocale, step, "descAr", "descEn")}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <SectionShell className="bg-white">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <SectionHeading
              eyebrow={isAr ? "الرسوم والضوابط" : "Fees & Controls"}
              title={
                isAr
                  ? "صياغة تشغيلية أوضح للتحويل الخارجي"
                  : "A clearer operational presentation for external transfers"
              }
              description={
                isAr
                  ? "يعرض هذا القسم أهم القواعد التشغيلية المرتبطة بالحوالة الدولية بصياغة أبسط وأقرب لتجربة عميل مصرفي فعلية."
                  : "This section presents the key operational rules related to international transfers in a simpler format, closer to a real banking customer experience."
              }
              centered={false}
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="overflow-hidden rounded-[32px] border border-slate-200/80 bg-white p-6 shadow-[0_20px_54px_rgba(15,23,42,0.05)]"
          >
            {policyItems.map((item) => (
              <PolicyRow
                key={item.labelEn}
                label={pick(currentLocale, item, "labelAr", "labelEn") as string}
                value={pick(currentLocale, item, "valueAr", "valueEn") as string}
              />
            ))}
          </motion.div>
        </div>
      </SectionShell>

      <SectionShell className="bg-slate-50/70">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mb-14"
        >
          <SectionHeading
            eyebrow={isAr ? "الأسئلة الشائعة" : "FAQ"}
            title={
              isAr
                ? "الأسئلة الأكثر ارتباطًا بالتحويلات الدولية"
                : "The most relevant questions about international transfers"
            }
          />
        </motion.div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.qEn}
                value={`faq-${index}`}
                className="overflow-hidden rounded-[24px] border border-slate-200/80 bg-white px-6 shadow-[0_12px_34px_rgba(15,23,42,0.04)]"
              >
                <AccordionTrigger
                  className={`py-5 text-[15px] font-semibold text-slate-900 hover:text-[#324198] ${
                    isAr ? "text-right" : "text-left"
                  }`}
                >
                  {pick(currentLocale, faq, "qAr", "qEn")}
                </AccordionTrigger>

                <AccordionContent className="pb-5 text-sm leading-8 text-slate-600">
                  {pick(currentLocale, faq, "aAr", "aEn")}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </SectionShell>

      <section className="relative overflow-hidden bg-white py-20">
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#324198]/[0.05] blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="mx-auto max-w-5xl overflow-hidden rounded-[36px] border border-[#324198]/10 bg-[linear-gradient(135deg,#f9fbff_0%,#eef2ff_100%)] px-8 py-12 shadow-[0_30px_80px_rgba(50,65,152,0.10)] md:px-10 md:py-14"
          >
            <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <SectionEyebrow>{isAr ? "ابدأ الآن" : "Get Started"}</SectionEyebrow>
                <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                  {isAr
                    ? "ابدأ تحويلاتك الدولية ضمن تجربة أوضح وأكثر اتساقًا"
                    : "Start your international transfers within a clearer and more consistent experience"}
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
                  {isAr
                    ? "تجعل هذه النسخة صفحة التحويلات الدولية جزءًا من نظام صفحات موحّد، مع تركيز أكبر على العملة والرسوم والتتبع والامتثال."
                    : "This version makes the international transfers page part of a unified page system, with stronger emphasis on currency, fees, tracking, and compliance."}
                </p>
              </div>

              <div className="flex flex-wrap gap-4 lg:justify-end">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#324198] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_16px_34px_rgba(50,65,152,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2b397f]"
                >
                  {isAr ? "تواصل مع فريق العمليات" : "Contact Operations Team"}
                  <CTAArrow className="h-4 w-4" />
                </Link>

                <Link
                  href="/atm-and-branches"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-slate-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#324198]/15 hover:text-[#324198]"
                >
                  {isAr ? "ابحث عن أقرب فرع" : "Find the Nearest Branch"}
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <RelatedServicesSlider
        services={relatedServices}
        titleAr="خدمات أخرى مرتبطة"
        titleEn="Related Services"
      />
    </>
  )
}