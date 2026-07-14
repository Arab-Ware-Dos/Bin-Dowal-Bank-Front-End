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
  Globe2,
  Landmark,
  MapPin,
  ShieldCheck,
  Smartphone,
  Wallet,
  Zap,
} from "lucide-react"

type Locale = "ar" | "en"
type ChannelKey = "app" | "branch"

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

type ChannelCard = {
  key: ChannelKey
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
    active: true,
  },
  {
    href: "/personal/international-transfers",
    key: "international",
    icon: Globe2,
    labelAr: "التحويلات الدولية",
    labelEn: "International Transfers",
  },
  {
    href: "/personal/express-transfers",
    key: "express",
    icon: Zap,
    labelAr: "الحوالات السريعة",
    labelEn: "Express Transfers",
  },
]

const heroStats: StatItem[] = [
  {
    labelAr: "قنوات التنفيذ",
    labelEn: "Execution Channels",
    valueAr: "التطبيق أو الفرع",
    valueEn: "App or branch",
  },
  {
    labelAr: "الرسوم",
    labelEn: "Fees",
    valueAr: "تظهر قبل التأكيد",
    valueEn: "Shown before confirmation",
  },
  {
    labelAr: "التنبيهات",
    labelEn: "Notifications",
    valueAr: "إشعار بعد التنفيذ",
    valueEn: "Notification after execution",
  },
  {
    labelAr: "التحقق",
    labelEn: "Verification",
    valueAr: "متعدد الطبقات",
    valueEn: "Multi-layer verification",
  },
]

const overviewItems: OverviewItem[] = [
  {
    icon: ArrowLeftRight,
    titleAr: "خدمة تحويل أوضح",
    titleEn: "A Clearer Transfer Service",
    descAr:
      "واجهة مبنية حول رحلة التنفيذ الفعلية للحوالة بدل صياغة تعريفية عامة.",
    descEn:
      "An interface built around the actual transfer journey instead of generic service messaging.",
  },
  {
    icon: Wallet,
    titleAr: "رسوم أكثر وضوحًا",
    titleEn: "Clearer Fee Visibility",
    descAr:
      "إظهار الرسوم والملاحظات التشغيلية في مواضع منطقية تساعد العميل قبل الاعتماد.",
    descEn:
      "Fees and operational notes appear in logical places to support better decision-making before approval.",
  },
  {
    icon: ShieldCheck,
    titleAr: "هيكل أكثر ثقة",
    titleEn: "A More Trusted Structure",
    descAr:
      "الترتيب الجديد يركّز على المتطلبات، الخطوات، الحدود، والتنبيهات بأسلوب مصرفي راقٍ.",
    descEn:
      "The new structure focuses on requirements, steps, limits, and alerts in a refined banking style.",
  },
]

const channelCards: ChannelCard[] = [
  {
    key: "app",
    icon: Smartphone,
    labelAr: "عبر التطبيق",
    labelEn: "Via App",
    titleAr: "تنفيذ يومي سريع عبر التطبيق البنكي",
    titleEn: "Quick daily execution via the banking app",
    introAr:
      "هذا المسار مناسب عندما تكون بيانات المستفيد جاهزة وتحتاج إلى تنفيذ سريع ومراجعة واضحة قبل الإرسال.",
    introEn:
      "This path is ideal when beneficiary details are ready and you need fast execution with clear review before submission.",
    stepsAr: [
      "الدخول إلى التطبيق والانتقال إلى خدمة الحوالات المحلية.",
      "اختيار المستفيد أو إدخال بياناته بدقة.",
      "إدخال المبلغ ومراجعة الرسوم والتفاصيل.",
      "تأكيد العملية واستلام الإشعار.",
    ],
    stepsEn: [
      "Open the app and go to the local transfers service.",
      "Select a beneficiary or enter the details accurately.",
      "Enter the amount and review fees and details.",
      "Confirm the transaction and receive the notification.",
    ],
    requirementsAr: [
      "حساب نشط وخدمة رقمية مفعلة.",
      "رقم هاتف مسجل للتحقق.",
      "بيانات مستفيد صحيحة ومحدثة.",
    ],
    requirementsEn: [
      "An active account and enabled digital service.",
      "A registered phone number for verification.",
      "Correct and updated beneficiary details.",
    ],
    notesAr: [
      "قد تختلف مدة التنفيذ حسب وقت الطلب والجهة المستفيدة.",
      "تظهر الرسوم قبل التأكيد النهائي.",
      "قد تتطلب بعض العمليات تحققًا إضافيًا.",
    ],
    notesEn: [
      "Execution timing may vary by request time and beneficiary institution.",
      "Fees are displayed before final confirmation.",
      "Some transactions may require extra verification.",
    ],
  },
  {
    key: "branch",
    icon: Building2,
    labelAr: "عبر الفرع",
    labelEn: "Via Branch",
    titleAr: "تنفيذ بمساندة مباشرة من موظف الخدمة",
    titleEn: "Execution with direct support from branch staff",
    introAr:
      "هذا المسار مناسب عندما تحتاج إلى مراجعة مباشرة أو عندما تتطلب العملية تحققًا أو مستندات إضافية.",
    introEn:
      "This path is suitable when you need direct assistance or when the transaction requires extra verification or supporting documents.",
    stepsAr: [
      "زيارة الفرع والتوجه إلى موظف الخدمة المختص.",
      "تقديم بيانات المستفيد والوثائق المطلوبة إن وجدت.",
      "مراجعة تفاصيل العملية والرسوم.",
      "اعتماد الطلب واستلام تأكيد التنفيذ.",
    ],
    stepsEn: [
      "Visit the branch and approach the responsible service officer.",
      "Provide beneficiary details and any required documents.",
      "Review the transaction details and fees.",
      "Approve the request and receive execution confirmation.",
    ],
    requirementsAr: [
      "هوية سارية المفعول.",
      "بيانات مستفيد دقيقة وواضحة.",
      "حضور صاحب العلاقة عند الحاجة وفق سياسة البنك.",
    ],
    requirementsEn: [
      "A valid identification document.",
      "Accurate and clear beneficiary details.",
      "Presence of the account holder when required by bank policy.",
    ],
    notesAr: [
      "تخضع العملية لأوقات العمل الرسمية.",
      "قد تُطلب مستندات إضافية بحسب نوع العملية.",
      "تعتمد مدة التنفيذ على إجراءات التحقق والجهة المستفيدة.",
    ],
    notesEn: [
      "The transaction is subject to official branch hours.",
      "Additional documents may be required depending on the transaction type.",
      "Execution timing depends on verification procedures and the beneficiary institution.",
    ],
  },
]

const processSteps: StepItem[] = [
  {
    number: "01",
    titleAr: "اختيار القناة",
    titleEn: "Choose Channel",
    descAr: "ابدأ من التطبيق أو الفرع بحسب نوع العملية وحاجتك.",
    descEn:
      "Start from the app or the branch based on the transaction type and your need.",
  },
  {
    number: "02",
    titleAr: "إدخال البيانات",
    titleEn: "Enter Details",
    descAr: "أدخل بيانات المستفيد والمبلغ بدقة قبل المتابعة.",
    descEn:
      "Enter the beneficiary details and amount accurately before proceeding.",
  },
  {
    number: "03",
    titleAr: "المراجعة",
    titleEn: "Review",
    descAr: "راجع الرسوم والتفاصيل التشغيلية الظاهرة قبل التأكيد.",
    descEn:
      "Review displayed fees and operational details before confirmation.",
  },
  {
    number: "04",
    titleAr: "التحقق",
    titleEn: "Verify",
    descAr: "أكمل خطوات التحقق المعتمدة بحسب القناة المستخدمة.",
    descEn:
      "Complete the required verification steps according to the selected channel.",
  },
  {
    number: "05",
    titleAr: "التنفيذ والإشعار",
    titleEn: "Execute & Notify",
    descAr: "تتم العملية ثم تصلك حالة التنفيذ أو المعالجة.",
    descEn:
      "The transfer is executed and you receive the execution or processing status.",
  },
]

const policyItems: StatItem[] = [
  {
    labelAr: "الرسوم",
    labelEn: "Fees",
    valueAr: "تظهر بوضوح قبل اعتماد الحوالة",
    valueEn: "Displayed clearly before transfer approval",
  },
  {
    labelAr: "الحدود",
    labelEn: "Limits",
    valueAr: "تختلف حسب نوع الحساب وقناة التنفيذ",
    valueEn: "Vary by account type and execution channel",
  },
  {
    labelAr: "مدة التنفيذ",
    labelEn: "Execution Time",
    valueAr: "ترتبط بوقت الطلب والجهة المستفيدة",
    valueEn: "Depends on request time and beneficiary institution",
  },
  {
    labelAr: "التحقق الإضافي",
    labelEn: "Additional Verification",
    valueAr: "قد يُطلب لبعض العمليات حفاظًا على الأمان",
    valueEn: "May be required for some transactions for security purposes",
  },
]

const faqs: FAQItem[] = [
  {
    qAr: "هل يمكن تنفيذ الحوالة المحلية من التطبيق؟",
    qEn: "Can a local transfer be executed through the app?",
    aAr:
      "نعم، يمكن تنفيذ الحوالات المحلية عبر التطبيق متى كانت الخدمة الرقمية مفعلة وكانت بيانات المستفيد متوفرة بشكل صحيح، مع مراعاة سياسات التحقق والحدود المطبقة على القناة.",
    aEn:
      "Yes. Local transfers can be executed through the app when the digital service is enabled and beneficiary information is correctly available, subject to verification policies and channel limits.",
  },
  {
    qAr: "متى تظهر الرسوم الخاصة بالحوالة؟",
    qEn: "When are transfer fees shown?",
    aAr:
      "تُعرض الرسوم قبل التأكيد النهائي للحوالة حتى يتمكن العميل من مراجعة التكلفة بوضوح قبل الاعتماد.",
    aEn:
      "Fees are displayed before final transfer confirmation so the customer can clearly review the cost before approval.",
  },
  {
    qAr: "هل تختلف مدة التنفيذ بين التطبيق والفرع؟",
    qEn: "Does execution timing differ between the app and the branch?",
    aAr:
      "قد تختلف مدة التنفيذ بحسب قناة التنفيذ ووقت الطلب والجهة المستفيدة وإجراءات التحقق المرتبطة بالعملية.",
    aEn:
      "Execution timing may vary depending on the execution channel, request time, beneficiary institution, and the verification procedures linked to the transaction.",
  },
  {
    qAr: "ما البيانات التي يجب التأكد منها قبل الإرسال؟",
    qEn: "Which details should be checked before submission?",
    aAr:
      "يجب التأكد من اسم المستفيد، رقم الحساب أو الآيبان عند الحاجة، قيمة الحوالة، وأي بيانات إضافية مطلوبة لضمان تنفيذ العملية بسلاسة.",
    aEn:
      "You should verify the beneficiary name, account number or IBAN when needed, transfer amount, and any additional required data to ensure smooth execution.",
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

export default function LocalTransfersPage() {
  const { locale } = useI18n()
  const currentLocale: Locale = locale === "ar" ? "ar" : "en"
  const isAr = currentLocale === "ar"

  const [activeChannel, setActiveChannel] = useState<ChannelKey>("app")

  const relatedServices = allRelatedServices.filter(s => s.id !== 'local-transfer')

  const CTAArrow = isAr ? ArrowLeft : ArrowRight

  const activeChannelCard = useMemo(
    () => channelCards.find((item) => item.key === activeChannel) ?? channelCards[0],
    [activeChannel],
  )

  const ActiveChannelIcon = activeChannelCard.icon

  return (
    <>
      <PageHero
        title={isAr ? "الحوالات المحلية" : "Local Transfers"}
        subtitle={
          isAr
            ? "تصميم أكثر نضجًا لصفحات الحوالات، يركّز على وضوح التنفيذ، سهولة المراجعة، وتناسق التجربة ضمن نظام خدمات التحويل في البنك."
            : "A more mature design for transfer pages, focused on execution clarity, easy review, and a consistent experience across the bank’s transfer services."
        }
        breadcrumbs={[
          { labelKey: "nav.personalBanking", href: "/personal-banking" },
          { labelKey: "nav.localTransfers" },
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
            href="/digital#mobile"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#1e2d72] shadow-[0_14px_34px_rgba(7,10,30,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_44px_rgba(7,10,30,0.22)]"
          >
            {isAr ? "ابدأ عبر التطبيق" : "Start via App"}
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
            title={isAr ? "نظرة تشغيلية سريعة" : "A quick operational overview"}
            description={
              isAr
                ? "ملخص مختصر وواضح للعناصر الأساسية في خدمة الحوالات المحلية، بنفس هدوء وتنظيم الصفحات السابقة."
                : "A concise and clear summary of the core elements of the local transfer service, with the same calm structure used across previous pages."
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
                ? "واجهة أقل ازدحامًا وأكثر ملاءمة للحوالات"
                : "A cleaner interface better suited for transfers"
            }
            description={
              isAr
                ? "تمت إعادة ضبط التسلسل البصري ليخدم منطق الحوالات نفسها: شريط عائلة الحوالات، لوحة تشغيلية، مبدّل قناة التنفيذ، ومسار خطوات واضح يسهل تكراره على بقية الصفحات."
                : "The visual sequence has been restructured around the transfer service itself: a transfer-family bar, an operational panel, an execution-channel switcher, and a clear step flow that can be reused across the rest of the pages."
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
              description={pick(currentLocale, item, "descAr", "descEn") as string}
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
              eyebrow={isAr ? "قناة التنفيذ" : "Execution Channel"}
              title={
                isAr
                  ? "اختر طريقة تنفيذ الحوالة"
                  : "Choose how to execute the transfer"
              }
              description={
                isAr
                  ? "بدلاً من عرض معلومات عامة، يتغير هذا القسم بحسب قناة التنفيذ ليعطي المستخدم صورة أوضح عما سيحتاجه قبل البدء."
                  : "Instead of showing generic information, this section changes by execution channel to give the user a clearer view of what will be needed before getting started."
              }
              centered={false}
            />

            <div
              className="mt-8 flex flex-wrap gap-3"
              role="tablist"
              aria-label={isAr ? "قنوات تنفيذ الحوالة" : "Transfer execution channels"}
            >
              {channelCards.map((item) => {
                const Icon = item.icon
                const isActive = item.key === activeChannel
                const tabId = `channel-tab-${item.key}`
                const panelId = `channel-panel-${item.key}`

                return (
                  <button
                    key={item.key}
                    id={tabId}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={panelId}
                    onClick={() => setActiveChannel(item.key)}
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
                      ? "معلومات أساسية قبل بدء العملية"
                      : "Key information before starting the transaction"}
                  </h3>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: Wallet,
                    labelAr: "الرسوم",
                    labelEn: "Fees",
                    valueAr: "تظهر قبل الاعتماد النهائي",
                    valueEn: "Visible before final approval",
                  },
                  {
                    icon: Clock3,
                    labelAr: "التنفيذ",
                    labelEn: "Execution",
                    valueAr: "بحسب وقت الطلب والقناة",
                    valueEn: "Depends on request time and channel",
                  },
                  {
                    icon: BellRing,
                    labelAr: "الإشعار",
                    labelEn: "Notification",
                    valueAr: "بعد التنفيذ أو عند المعالجة",
                    valueEn: "After execution or during processing",
                  },
                  {
                    icon: ShieldCheck,
                    labelAr: "الأمان",
                    labelEn: "Security",
                    valueAr: "تحقق إضافي لبعض العمليات",
                    valueEn: "Extra verification for some transactions",
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
            id={`channel-panel-${activeChannelCard.key}`}
            role="tabpanel"
            aria-labelledby={`channel-tab-${activeChannelCard.key}`}
            className="relative overflow-hidden rounded-[34px] border border-slate-200/80 bg-white p-7 shadow-[0_24px_60px_rgba(15,23,42,0.06)]"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#24357f_0%,#324198_55%,#6f7fd8_100%)]" />
            <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-[#324198]/[0.05] blur-3xl" />

            <div className="relative z-10">
              <div className="mb-7 flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#324198]/10 text-[#324198]">
                  <ActiveChannelIcon className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-950">
                    {pick(currentLocale, activeChannelCard, "titleAr", "titleEn")}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {pick(currentLocale, activeChannelCard, "introAr", "introEn")}
                  </p>
                </div>
              </div>

              <div className="grid gap-5 lg:grid-cols-3">
                <div className="rounded-[24px] border border-slate-200/80 bg-[linear-gradient(180deg,#ffffff_0%,#f8faff_100%)] p-5">
                  <h4 className="mb-4 text-sm font-semibold text-slate-900">
                    {isAr ? "خطوات التنفيذ" : "Execution Steps"}
                  </h4>
                  <BulletList
                    items={
                      pick(
                        currentLocale,
                        activeChannelCard,
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
                        activeChannelCard,
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
                        activeChannelCard,
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
                  ? "رحلة تحويل أوضح ويمكن تكرارها على بقية الصفحات"
                  : "A clearer transfer journey that can be reused across the rest of the pages"
              }
              description={
                isAr
                  ? "تم تخفيف الطابع البصري الثقيل للكروت وتحويل الرحلة إلى مسار خطوات أكثر نظامية وملاءمة لصفحات الحوالات."
                  : "The heavy card treatment has been reduced and replaced with a more structured step flow better suited for transfer pages."
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
              eyebrow={isAr ? "الرسوم والحدود" : "Fees & Limits"}
              title={
                isAr
                  ? "صياغة تشغيلية أوضح للسياسات"
                  : "A clearer operational presentation of policies"
              }
              description={
                isAr
                  ? "بدلاً من الاكتفاء ببطاقات عامة، يعرض هذا القسم قواعد تشغيلية مختصرة بصياغة أوضح وأقرب إلى تجربة عميل بنكي فعلية."
                  : "Instead of relying on generic cards, this section presents brief operational rules in a clearer way, closer to a real banking customer experience."
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
                ? "الأسئلة الأكثر ارتباطًا بتنفيذ الحوالة"
                : "The most relevant questions about transfer execution"
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
                    ? "ابدأ حوالاتك المحلية بتجربة أكثر وضوحًا واتساقًا"
                    : "Start your local transfers with a clearer and more consistent experience"}
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
                  {isAr
                    ? "التصميم الجديد يجعل صفحة الحوالات المحلية أقرب إلى نظام خدمات مالي متكامل، ويضع أساسًا جاهزًا لتوسيع نفس التجربة إلى التحويلات الدولية والحوالات السريعة."
                    : "The new design makes the local transfers page feel closer to an integrated financial service system and creates a ready foundation for extending the same experience to international and express transfers."}
                </p>
              </div>

              <div className="flex flex-wrap gap-4 lg:justify-end">
                <Link
                  href="/digital#mobile"
                  className="inline-flex items-center gap-2 rounded-full bg-[#324198] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_16px_34px_rgba(50,65,152,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2b397f]"
                >
                  {isAr ? "استخدم التطبيق الآن" : "Use the App"}
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