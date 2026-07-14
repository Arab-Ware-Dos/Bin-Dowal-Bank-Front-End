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
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Phone,
  ArrowLeft,
  ArrowRight,
  Zap,
  Clock,
  ShieldCheck,
  Smartphone,
  ScanLine,
  Send,
  Building2,
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

type RelatedItem = {
  href: string
  icon: LucideIcon
  titleAr: string
  titleEn: string
  descAr: string
  descEn: string
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
    icon: Zap,
    titleAr: "استجابة فورية",
    titleEn: "Instant Response",
    descAr:
      "تُرسل وتُستلم الحوالات السريعة في زمن قياسي، لتلبية متطلباتك المالية العاجلة.",
    descEn:
      "Fast transfers are sent and received in record time to meet your urgent financial requirements.",
  },
  {
    icon: Smartphone,
    titleAr: "تجربة مبسطة",
    titleEn: "Simplified Experience",
    descAr:
      "خطوات محدودة وواضحة لتنفيذ الحوالة عبر التطبيق الموبايل أو الفروع.",
    descEn:
      "Limited and clear steps to execute the transfer via the mobile app or branches.",
  },
  {
    icon: ScanLine,
    titleAr: "تتبع سريع ومباشر",
    titleEn: "Direct & Quick Tracking",
    descAr:
      "متابعة حالة الحوالة لحظة بلحظة واستلام إشعارات دقيقة عن مسارها.",
    descEn:
      "Track the transfer status moment by moment and receive accurate notifications about its progress.",
  },
  {
    icon: ShieldCheck,
    titleAr: "أمان عملي",
    titleEn: "Practical Security",
    descAr:
      "عمليات سريعة دون المساس بمعايير الأمان لحماية أموالك من الاحتيال.",
    descEn:
      "Fast operations without compromising security standards to protect your money from fraud.",
  },
]

const benefits: BenefitItem[] = [
  {
    ar: "إرسال الأموال للحالات الطارئة أو الاحتياجات الفورية بكل ثقة",
    en: "Sending money for emergencies or instant needs with confidence",
  },
  {
    ar: "شبكة تغطية تضمن استلام الحوالة بسهولة",
    en: "A coverage network that ensures easy transfer reception",
  },
  {
    ar: "رسوم مدروسة ومناسبة لسرعة إنجاز الخدمة",
    en: "Carefully considered fees suitable for the service speed",
  },
  {
    ar: "لا تتطلب إجراءات ورقية معقدة عند استخدام القنوات الرقمية",
    en: "No complex paperwork required when using digital channels",
  },
]

const requirements: RequirementItem[] = [
  { ar: "حساب فعّال أو استخدام نظام التحويل المعتمد لدى البنك", en: "An active account or use of the bank's approved transfer system" },
  { ar: "تقديم بيانات شخصية لمستلم الحوالة (كاسم رباعي ورقم هاتف)", en: "Provide personal details of the receiver (e.g., full name and phone number)" },
  { ar: "رمز أو رقم الحوالة المرجعي لتأكيد التسليم", en: "Reference number or code of the transfer to confirm delivery" },
  { ar: "إثبات شخصية أصلي ومطابق للاستلام الميداني", en: "Original matching identification for field collection" },
]

const steps: StepItem[] = [
  {
    num: "01",
    ar: "إنشاء الحوالة",
    en: "Create Transfer",
    descAr: "اختر خدمة الحوالة السريعة من التطبيق أو عبر موظف الفرع.",
    descEn: "Select the fast money transfer service from the app or through a branch employee.",
  },
  {
    num: "02",
    ar: "تعبئة البيانات الأساسية",
    en: "Fill Basic Details",
    descAr: "أدخل اسم المستلم، رقم الهاتف، والمبلغ المراد إرساله بدقة.",
    descEn: "Accurately enter the receiver's name, phone number, and the amount to be sent.",
  },
  {
    num: "03",
    ar: "نشر وإشعار",
    en: "Broadcast & Notify",
    descAr: "بمجرد التأكيد، ستصدر الحوالة برقم مرجعي ويصل إشعار للمستفيد.",
    descEn: "Once confirmed, the transfer is issued with a reference number and the beneficiary is notified.",
  },
  {
    num: "04",
    ar: "الاستلام الفوري",
    en: "Instant Receipt",
    descAr: "يمكن للمستفيد استلام المبلغ مباشرة بتزويد الرقم المرجعي وإثبات الهوية.",
    descEn: "The beneficiary can directly receive the amount by providing the reference number and ID.",
  },
]

const faqs: FAQItem[] = [
  {
    qAr: "ما هو الفرق بين الحوالات المحلية والحوالات السريعة؟",
    qEn: "What is the difference between local transfers and fast money transfers?",
    aAr:
      "الحوالات السريعة تركز على التسليم الفوري وغالباً ما تكون عبر نظم دفع سريعة تعتمد على رقم مرجعي واسم المستلم، بينما التحويلات المحلية قد تعتمد على الحسابات البنكية أو الآيبان وتستغرق دورة المقاصة المعتادة.",
    aEn:
      "Fast money transfers focus on instant delivery and often use fast payment systems based on a reference number and receiver's name, while local transfers rely on bank accounts or IBAN and take the usual clearing cycle.",
  },
  {
    qAr: "كيف يستلم المستفيد الحوالة السريعة؟",
    qEn: "How does the beneficiary receive the fast money transfer?",
    aAr:
      "يتوجه المستفيد المدون اسمه في بيانات الحوالة لأي فرع معتمد مزوداً بالهوية سارية المفعول والرقم المرجعي للحوالة ليتمكن من استلام المبلغ فوراً.",
    aEn:
      "The beneficiary listed in the transfer details visits any authorized branch with a valid ID and the transfer reference number to receive the amount immediately.",
  },
  {
    qAr: "هل يمكن إلغاء الحوالة السريعة؟",
    qEn: "Can the fast money transfer be canceled?",
    aAr:
      "نعم، يمكن للمرسل طلب إلغاء الحوالة واسترداد المبلغ طالما أن المستفيد لم يستلمها بعد، وفق السياسات المحددة.",
    aEn:
      "Yes, the sender can request the cancellation of the transfer and refund the amount as long as the beneficiary has not received it yet, subject to specific policies.",
  },
  {
    qAr: "ما الذي يجب فعله في حال فقدان رقم الحوالة؟",
    qEn: "What should be done if the transfer number is lost?",
    aAr:
      "يمكن للمرسل العودة لسجل العمليات في التطبيق البنكي لاستخراج الرقم، أو زيارة الفرع للتحقق وتزويده بالرقم مرة أخرى.",
    aEn:
      "The sender can return to the transaction history in the banking app to retrieve the number, or visit the branch for verification and get the number again.",
  },
]

const related: RelatedItem[] = [
  {
    href: "/personal/local-transfers",
    icon: Building2,
    titleAr: "التحويلات المحلية",
    titleEn: "Local Transfers",
    descAr: "حلول مرنة لإرسال الأموال محليًا ضمن تجربة مصرفية واضحة",
    descEn: "Flexible solutions to send money locally within a clear banking experience",
  },
  {
    href: "/digital#wallet",
    icon: Smartphone,
    titleAr: "المحفظة الإلكترونية",
    titleEn: "e-Wallet",
    descAr: "وسيلة دفع رقمية سريعة لمعاملاتك اليومية",
    descEn: "A fast digital payment method for your daily transactions",
  },
  {
    href: "/personal/international-transfers",
    icon: Send,
    titleAr: "التحويلات الدولية",
    titleEn: "International Transfers",
    descAr: "خدمة احترافية لتنفيذ التحويلات الخارجية بثقة وتنظيم",
    descEn: "Professional service for executing external transfers with confidence and organization",
  },
]

const accountHighlights: HighlightItem[] = [
  {
    labelAr: "طريقة الاستلام",
    labelEn: "Receiving Method",
    valAr: "نقداً أو إلى الحساب",
    valEn: "Cash or to Account",
  },
  {
    labelAr: "السرعة",
    labelEn: "Speed",
    valAr: "فورية",
    valEn: "Instantaneous",
  },
  {
    labelAr: "متطلبات الاستلام",
    labelEn: "Receipt Requirements",
    valAr: "رقم الحوالة، هوية",
    valEn: "Transfer Code, ID",
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

export default function FastTransfersPage() {
  const { locale } = useI18n()
  const ar = locale === "ar"

  const CTAArrow = ar ? ArrowLeft : ArrowRight
  const StepConnector = ar ? ChevronLeft : ChevronRight

  return (
    <>
      <PageHero
        title={ar ? "الحوالات السريعة" : "Fast Money Transfers"}
        subtitle={
          ar
            ? "خدمة مخصصة للحوالات السريعة تمنح العملاء تجربة أكثر بساطة وانسيابية لإنجاز التحويلات المالية بصورة عملية وواضحة."
            : "A dedicated service for fast money transfers providing customers with a simplified and smooth experience to execute financial transfers practically and clearly."
        }
        breadcrumbs={[
          { labelKey: "nav.personalBanking", href: "/personal-banking" },
          { labelKey: ar ? "الحوالات السريعة" : "Fast Money Transfers" },
        ]}
        tagline={ar ? "الخدمات المالية" : "Financial Services"}
      >
        <div className="flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#0b0d36] shadow-[0_12px_34px_rgba(7,10,30,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_44px_rgba(7,10,30,0.28)]"
          >
            {ar ? "أرسل حوالة الآن" : "Send Transfer Now"}
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
            eyebrow={ar ? "كفاءة وموثوقية" : "Efficiency & Reliability"}
            title={ar ? "حلول تتناسب مع وقتك" : "Solutions That Respect Your Time"}
          />
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
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
              eyebrow={ar ? "مرونة متناهية" : "Ultimate Flexibility"}
              title={
                ar
                  ? "خيارات متعددة تلبي متطلبات الدفع العاجلة"
                  : "Multiple Options Fulfilling Urgent Payment Needs"
              }
              centered={false}
            />

            <p className="mb-8 mt-6 max-w-xl leading-8 text-slate-600">
              {ar
                ? "صُممت خدمة الحوالات السريعة لتقديم أداة عملية تضمن تدفق أموالك بسرعة منقطعة النظير، لتصل للمستفيدين أينما كانوا، بدون تعقيدات وبأعلى معايير الإنجاز."
                : "The fast money transfers service is designed to provide a practical tool ensuring your funds flow with unmatched speed, reaching beneficiaries wherever they are, without complications and with the highest accomplishment standards."}
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
                <Zap className="h-8 w-8" />
              </div>

              <h3 className="mb-2 text-xl font-bold text-slate-900">
                {ar ? "خدمة الحوالات السريعة" : "Fast Transfers Service"}
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
            title={ar ? "متطلبات إرسال واستلام الحوالة" : "Transfer Sending & Receiving Requirements"}
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
              title={ar ? "كيف تجري تحويلاً سريعاً؟" : "How to Make a Fast Transfer?"}
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
                ? "الأسئلة الشائعة حول الحوالات السريعة"
                : "Common Questions About Fast Money Transfers"
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

            <SectionEyebrow dark>{ar ? "أرسل أموالك الآن" : "Send Money Now"}</SectionEyebrow>

            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
              {ar ? "وفر وقتك مع خدمة الحوالات السريعة" : "Save your time with the fast money transfers service"}
            </h2>

            <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-white/72">
              {ar
                ? "ارسل واستقبل الأموال بسرعة، سهولة، ودون تعقيد."
                : "Send and receive money swiftly, easily, and without complications."}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/digital#mobile"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#0b0d36] shadow-[0_12px_30px_rgba(255,255,255,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(255,255,255,0.18)]"
              >
                {ar ? "حمل التطبيق لتحويل أسرع" : "Download App for Faster Transfer"}
                <CTAArrow className="h-4 w-4" />
              </Link>

              <Link
                href="/branches"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/16"
              >
                {ar ? "ابحث عن أقرب فرع" : "Find Nearest Branch"}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <SectionShell className="border-t border-slate-100 bg-white">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mb-10"
        >
          <SectionHeading
            eyebrow={ar ? "المزيد من الخدمات" : "More Services"}
            title={ar ? "خيارات مالية متنوعة" : "Diverse Financial Options"}
          />
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mx-auto grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {related.map((item) => {
            const Icon = item.icon

            return (
              <motion.div key={item.href} variants={fadeUp}>
                <Link
                  href={item.href}
                  className="group relative flex h-full flex-col items-center overflow-hidden rounded-[26px] border border-slate-200/80 bg-white p-6 text-center shadow-[0_10px_28px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#262b80]/15 hover:shadow-[0_24px_54px_rgba(7,10,30,0.1)]"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#262b80]/20 to-transparent" />
                  <div className="absolute -top-10 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-[#262b80]/[0.04] blur-2xl" />

                  <div className="relative z-10">
                    <div className="mb-4 flex h-13 w-13 items-center justify-center rounded-2xl bg-slate-100 text-slate-600 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-[#0b0d36] group-hover:to-[#262b80] group-hover:text-white group-hover:shadow-[0_14px_32px_rgba(38,43,128,0.2)]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="mb-1 text-base font-semibold text-slate-800 transition-colors group-hover:text-[#262b80]">
                      {ar ? item.titleAr : item.titleEn}
                    </h3>
                    <p className="text-xs leading-7 text-slate-400">
                      {ar ? item.descAr : item.descEn}
                    </p>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </SectionShell>
    </>
  )
}
