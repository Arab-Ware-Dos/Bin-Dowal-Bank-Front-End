"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { PageHero } from "@/components/ui/page-hero"
import { useI18n } from "@/lib/i18n-context"
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CreditCard,
  FileText,
  Phone,
  Smartphone,
} from "lucide-react"
import { RelatedServicesSlider } from "@/components/shared/related-services-slider"
import { accountsRelatedServices } from "@/data/related-services"

type LocalizedText = {
  ar: string
  en: string
}

type ListItem = LocalizedText & {
  id: string
}

type StepItem = {
  id: string
  title: LocalizedText
  description: LocalizedText
}


const viewport = { once: true, amount: 0.18 }

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
}

const sectionLinks: ListItem[] = [
  {
    id: "details",
    ar: "تفاصيل الخدمة",
    en: "Service Details",
  },
  {
    id: "benefits",
    ar: "كيف أستفيد من الخدمة؟",
    en: "How Do I Benefit?",
  },
  {
    id: "get-service",
    ar: "كيف أحصل على الخدمة؟",
    en: "How Do I Get It?",
  },
  {
    id: "subscribe",
    ar: "طريقة الاشتراك",
    en: "How to Subscribe",
  },
]

const featurePoints: ListItem[] = [
  {
    id: "feature-1",
    ar: "حساب عملي لإدارة الإيداعات والسحوبات والتحويلات اليومية بوضوح وسهولة.",
    en: "A practical account for managing daily deposits, withdrawals, and transfers with clarity and ease.",
  },
  {
    id: "feature-2",
    ar: "الوصول إلى الحساب عبر الفروع والقنوات الرقمية المتاحة حسب الخدمة.",
    en: "Access to the account through branches and available digital banking channels.",
  },
  {
    id: "feature-3",
    ar: "متابعة الرصيد والحركات بصورة مستمرة بما يساعد على إدارة الاستخدام اليومي للحساب.",
    en: "Ongoing visibility of balances and transactions to support everyday account use.",
  },
  {
    id: "feature-4",
    ar: "إمكانية ربط الحساب بالخدمات المصرفية المناسبة وفق السياسة المعتمدة لدى البنك.",
    en: "The account can be linked to eligible banking services according to the bank’s approved policy.",
  },
]

const benefitPoints: ListItem[] = [
  {
    id: "benefit-1",
    ar: "تنفيذ معاملاتك اليومية من خلال حساب واحد مخصص لاستخدامك المصرفي المستمر.",
    en: "Handle your routine banking through one account built for continuous daily use.",
  },
  {
    id: "benefit-2",
    ar: "سهولة الوصول إلى أموالك ومتابعة العمليات عبر القنوات المناسبة في الوقت الذي تحتاجه.",
    en: "Access your funds and review transactions through suitable channels when you need them.",
  },
  {
    id: "benefit-3",
    ar: "تنظيم أفضل للحركة المالية الشخصية أو العائلية عبر سجل واضح للعمليات.",
    en: "Better organization of personal or household cash flow through a clear transaction history.",
  },
  {
    id: "benefit-4",
    ar: "الاستفادة من الخدمات المرتبطة بالحساب عند توفرها مثل البطاقات أو التنبيهات أو القنوات الإلكترونية.",
    en: "Benefit from related services when available, such as cards, alerts, or digital access channels.",
  },
]

const requirements: ListItem[] = [
  {
    id: "requirement-1",
    ar: "هوية سارية المفعول أو الوثائق التعريفية المطلوبة حسب الفئة.",
    en: "A valid ID or the required identification documents based on the applicant category.",
  },
  {
    id: "requirement-2",
    ar: "رقم هاتف جوال فعّال للتواصل والتنبيهات إن وجدت.",
    en: "An active mobile number for communication and alerts when applicable.",
  },
  {
    id: "requirement-3",
    ar: "استكمال نموذج الطلب والتوقيع على النماذج المعتمدة.",
    en: "Completion of the application form and signing the approved documents.",
  },
]

const channels: ListItem[] = [
  {
    id: "channel-1",
    ar: "زيارة أحد فروع البنك للحصول على الخدمة مباشرة.",
    en: "Visit one of the bank’s branches to obtain the service directly.",
  },
  {
    id: "channel-2",
    ar: "التواصل مع خدمة العملاء للاستفسار عن المتطلبات والتفاصيل المحدثة.",
    en: "Contact customer service for updated requirements and service details.",
  },
  {
    id: "channel-3",
    ar: "الاستفادة من القنوات الرقمية المتاحة لبدء الطلب أو متابعة الخدمة بحسب الإتاحة.",
    en: "Use available digital channels to start or follow up on the request when supported.",
  },
]

const steps: StepItem[] = [
  {
    id: "step-1",
    title: {
      ar: "تجهيز البيانات والوثائق",
      en: "Prepare Documents",
    },
    description: {
      ar: "أحضر الهوية والبيانات المطلوبة وتأكد من اكتمال المعلومات الأساسية قبل تقديم الطلب.",
      en: "Bring your ID and required information, and make sure the key details are complete before applying.",
    },
  },
  {
    id: "step-2",
    title: {
      ar: "تقديم الطلب",
      en: "Submit the Request",
    },
    description: {
      ar: "قدّم الطلب عبر الفرع أو من خلال القناة المتاحة وفق آلية البنك المعتمدة.",
      en: "Submit the request through the branch or any available channel according to the bank’s approved process.",
    },
  },
  {
    id: "step-3",
    title: {
      ar: "مراجعة الطلب وتفعيل الحساب",
      en: "Review and Activation",
    },
    description: {
      ar: "يقوم البنك بمراجعة الطلب والوثائق ثم تفعيل الحساب بعد استيفاء الشروط المعتمدة.",
      en: "The bank reviews the request and documents, then activates the account once the approved conditions are met.",
    },
  },
]



function getText(text: LocalizedText, isArabic: boolean) {
  return isArabic ? text.ar : text.en
}

function SectionTitle({
  title,
  subtitle,
  align = "start",
}: {
  title: string
  subtitle?: string
  align?: "start" | "center"
}) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <h2 className="text-[2rem] font-bold tracking-[-0.02em] text-[#172048] md:text-[2rem]">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 max-w-3xl text-md font-medium leading-7 text-slate-600 md:text-[15px]">{subtitle}</p>
      ) : null}
    </div>
  )
}

function BulletList({
  items,
  isArabic,
}: {
  items: ListItem[]
  isArabic: boolean
}) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li
          key={item.id}
          className={`flex items-start gap-3 rounded-2xl px-4 py-4 text-md font-medium leading-7 text-slate-700 ${
            isArabic ? "text-right" : "text-left"
          }`}
        >
          <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#324198]/10 text-[#324198]">
            <Check className="h-3.5 w-3.5" />
          </span>
          <span>{getText(item, isArabic)}</span>
        </li>
      ))}
    </ul>
  )
}


function SectionLabel({ children }: { children: string }) {
  return <p className="text-sm font-bold text-[#b27a1f]">{children}</p>
}

export default function CurrentAccountPage() {
  const { locale } = useI18n()
  const shouldReduceMotion = useReducedMotion()
  const isArabic = locale === "ar"
  const CTAArrow = isArabic ? ArrowLeft : ArrowRight
  const sideBorderClass = isArabic ? "lg:border-l" : "lg:border-r"

  const relatedServices = accountsRelatedServices.filter(s => s.id !== 'current')

  return (
    <>
      <PageHero
        title={isArabic ? "الحساب الجاري" : "Current Account"}
        subtitle={
          isArabic
            ? "حساب مصرفي عملي يساعدك على إدارة معاملاتك اليومية بسهولة ووضوح عبر القنوات المتاحة من البنك."
            : "A practical banking account that helps you manage daily transactions with clarity through the bank’s available channels."
        }
        breadcrumbs={[
          { labelKey: "nav.personalBanking", href: "/personal-banking" },
          { labelKey: "nav.currentAccount" },
        ]}
        tagline={isArabic ? "خدمات الأفراد" : "Personal Banking"}
      >
        <div className="flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#172048] shadow-[0_14px_34px_rgba(10,18,45,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(10,18,45,0.24)]"
          >
            {isArabic ? "اطلب الخدمة الآن" : "Request This Service"}
            <CTAArrow className="h-4 w-4" />
          </Link>
        </div>
      </PageHero>

      <section className="bg-[linear-gradient(180deg,#f5f7fb_0%,#eef2f8_100%)] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-[1460px] rounded-[32px] border border-slate-200/70 bg-white p-4 shadow-[0_24px_80px_rgba(15,23,42,0.07)] md:p-5 lg:p-6">
            <div className="grid gap-5 lg:grid-cols-[260px_minmax(0,1fr)] xl:gap-6">
              <aside
                className={`rounded-[28px] border border-slate-200/70 bg-white px-6 py-7 lg:sticky lg:top-24 lg:self-start lg:px-6 lg:py-8 ${sideBorderClass}`}
              >
                <div className="mb-6">
                  <p className="text-xs font-bold tracking-[0.18em] text-[#324198]">
                    {isArabic ? "محتوى الصفحة" : "ON THIS PAGE"}
                  </p>
                </div>

                <nav aria-label={isArabic ? "أقسام الصفحة" : "Page sections"}>
                  <ul className="space-y-3">
                    {sectionLinks.map((link) => (
                      <li key={link.id}>
                        <a
                          href={`#${link.id}`}
                          className="group flex items-center gap-3 rounded-2xl px-2 py-2 text-sm font-semibold text-slate-600 transition-all duration-200 hover:bg-[#324198]/[0.04] hover:text-[#324198]"
                        >
                          <span className="h-9 w-[3px] rounded-full bg-slate-200 transition-colors duration-200 group-hover:bg-[#324198]" />
                          <span>{getText(link, isArabic)}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="mt-7 rounded-[24px] bg-[linear-gradient(180deg,#f8f9fd_0%,#f3f6fb_100%)] p-4">
                  <p className="text-xs font-semibold tracking-[0.16em] text-slate-500">
                    {isArabic ? "هل تحتاج مساعدة؟" : "NEED HELP?"}
                  </p>
                  <a
                    href="tel:+967000000000"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-[#324198] transition-opacity duration-200 hover:opacity-80"
                  >
                    <Phone className="h-4 w-4" />
                    {isArabic ? "تواصل مع خدمة العملاء" : "Contact Customer Service"}
                  </a>
                </div>
              </aside>

              <div className="space-y-5">
                <motion.section
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewport}
                  className="overflow-hidden rounded-[28px] bg-[#324198]"
                >
                  <div className="grid gap-8 px-6 py-7 md:px-8 md:py-8 xl:grid-cols-[minmax(0,1fr)_420px] xl:items-center 2xl:grid-cols-[minmax(0,1fr)_460px]">
                    <div>
                      <h1 className="mt-5 max-w-2xl text-[4rem] font-bold leading-tight tracking-[0.14em] text-white md:text-[4rem]">
                        {isArabic ? "الحساب الجاري" : "CURRENT ACCOUNT"}
                      </h1>

                      <h2 className="mt-5 max-w-2xl text-[2rem] font-bold leading-tight tracking-[-0.03em] text-white md:text-[2rem]">
                        {isArabic
                          ? "حساب يومي واضح وعملي لاحتياجاتك المصرفية"
                          : "A Clear, Practical Account for Everyday Banking Needs"}
                      </h2>

                      <p className="mt-4 max-w-2xl text-md leading-8 text-white/78 md:text-[15px]">
                        {isArabic
                          ? "الحساب الجاري مصمم للاستخدام اليومي، ويمنحك وسيلة مباشرة لإدارة المعاملات الأساسية مثل الإيداع والسحب والتحويل ومتابعة حركة الحساب، مع إمكانية الاستفادة من القنوات المصرفية المتاحة لدى البنك حسب نوع الخدمة."
                          : "The current account is built for everyday use, giving you a direct way to manage essential transactions such as deposits, withdrawals, transfers, and account activity tracking, with access to the bank’s available service channels depending on the offering."}
                      </p>

                    </div>

                    <motion.div
                      className="relative mx-auto w-full max-w-[450px] 2xl:max-w-[460px] flex justify-center items-center"
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={viewport}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      <motion.div
                        animate={
                          shouldReduceMotion
                            ? undefined
                            : {
                                y: [0, -10, 0],
                                rotate: [0, -0.9, 0, 0.9, 0],
                              }
                        }
                        transition={
                          shouldReduceMotion
                            ? undefined
                            : {
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }
                        }
                        className="relative"
                      >

                        <div className="relative">
                          <div className="relative w-[470px] h-[400px]">
                            <motion.div
                              className="absolute inset-0"
                              whileHover={shouldReduceMotion ? undefined : { scale: 1.035 }}
                              transition={{ duration: 0.45, ease: "easeOut" }}
                            >
                              <Image
                                src="/images/customer-services/Current-account-removebg-preview.png"
                                alt={
                                  isArabic
                                    ? "صورة توضيحية لخدمة الحساب الجاري"
                                    : "Illustration for current account service"
                                }
                                fill
                                className="object-cover"
                                priority
                              />
                            </motion.div>
                            <div className="absolute inset-0" />
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.section>

                <div className="space-y-5">
                  <motion.section
                    id="details"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={viewport}
                    className="scroll-mt-28 rounded-[28px] px-6 py-8 shadow-[0_14px_40px_rgba(15,23,42,0.04)] md:px-8"
                  >
                    <div className="grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)]">
                      <div >
                        <SectionLabel>
                          {isArabic ? "تفاصيل الخدمة" : "Service Details"}
                        </SectionLabel>
                        <SectionTitle 
                          title={
                            isArabic
                              ? "ما الذي يقدمه لك الحساب الجاري؟"
                              : "What Does the Current Account Offer?"
                          }
                          subtitle={
                            isArabic
                              ? "يوفر الحساب الجاري أساسًا واضحًا لإدارة استخدامك المالي اليومي بطريقة منظمة وسهلة، مع تركيز على الوظائف المصرفية الأساسية التي يحتاجها العميل بصورة متكررة."
                              : "The current account provides a clear foundation for managing everyday financial activity in an organized way, with focus on the core banking functions clients use regularly."
                          }
                        />
                      </div>

                      <div>

                        <div className="mt-6">
                          <BulletList items={featurePoints} isArabic={isArabic} />
                        </div>
                      </div>
                    </div>
                  </motion.section>

                  <motion.section
                    id="benefits"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={viewport}
                    className="scroll-mt-28 rounded-[28px] px-6 py-8 shadow-[0_14px_40px_rgba(15,23,42,0.04)] md:px-8"
                  >
                    <div className="grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)]">
                      <div>
                        <SectionLabel>
                          {isArabic ? "كيف أستفيد من الخدمة؟" : "How Do I Benefit?"}
                        </SectionLabel>
                        <SectionTitle
                          title={
                            isArabic
                              ? "فائدة عملية في الاستخدام اليومي"
                              : "Practical Value for Daily Use"
                          }
                          subtitle={
                            isArabic
                              ? "تكمن أهمية الحساب الجاري في أنه يسهل إدارة التعاملات المتكررة، ويمنحك حضورًا مصرفيًا منظمًا يساعدك على تنفيذ العمليات الأساسية ومتابعتها بصورة أوضح."
                              : "The value of the current account lies in simplifying repeated banking activity and giving you a more organized way to execute and track essential transactions."
                          }
                        />
                      </div>

                      <div>
                       
                        <div className="mt-6">
                          <BulletList items={benefitPoints} isArabic={isArabic} />
                        </div>
                      </div>
                    </div>
                  </motion.section>

                  <motion.section
                    id="get-service"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={viewport}
                    className="scroll-mt-28 rounded-[28px] px-6 py-8 shadow-[0_14px_40px_rgba(15,23,42,0.04)] md:px-8"
                  >
                    <div className="grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)]">
                      <div>
                        <SectionLabel>
                          {isArabic ? "كيف أحصل على الخدمة؟" : "How Do I Get It?"}
                        </SectionLabel>
                        <SectionTitle
                          title={
                            isArabic
                              ? "سهولة الإجراءات في متناول اليد"
                              : "Streamlined Procedures at Your Fingertips"
                          }
                          subtitle={
                            isArabic
                              ? "تتسم خطوات الحصول على الحساب الجاري بوضوحها، حيث يمكنك إكمال المتطلبات الأساسية وتقديم الطلب عبر القنوات المصرفية المتاحة للوصول إلى خدماتك بسهولة وسرعة."
                              : "Getting a current account is straightforward: complete the basic requirements and submit your application through the bank’s available channels for fast and easy access to your accounts and services."
                          }
                        />
                      </div>

                      <div className="grid gap-5 xl:grid-cols-2">
                        <div className="p-5">
                          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#324198]/8 px-3 py-1.5 text-xs font-bold text-[#324198]">
                            <FileText className="h-3.5 w-3.5" />
                            {isArabic ? "المتطلبات الأساسية" : "Basic Requirements"}
                          </div>
                          <BulletList items={requirements} isArabic={isArabic} />
                        </div>

                        <div className="p-5">
                          <div className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 text-xs font-bold text-[#324198]">
                            <Smartphone className="h-3.5 w-3.5" />
                            {isArabic ? "قنوات الحصول على الخدمة" : "Service Channels"}
                          </div>
                          <BulletList items={channels} isArabic={isArabic} />
                        </div>
                      </div>
                    </div>
                  </motion.section>

                  <motion.section
                    id="subscribe"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={viewport}
                    className="scroll-mt-28 rounded-[28px] px-6 py-8 shadow-[0_14px_40px_rgba(15,23,42,0.04)] md:px-8"
                  >
                    <div className="grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)]">
                      <div>
                        <SectionLabel>
                          {isArabic ? "طريقة الاشتراك" : "How to Subscribe"}
                        </SectionLabel>
                        <SectionTitle
                          title={
                            isArabic
                              ? "وصول سهل وتجربة بسيطة"
                              : "Easy Access and Streamlined Experience"
                          }
                          subtitle={
                            isArabic
                              ? "لفتح الحساب الجاري، يمكنك اختيار الطريقة الأنسب لك بين زيارة أحد فروع البنك أو إكمال الإجراءات عبر القنوات الرقمية المتاحة، مع توفير المستندات اللازمة وتقديم الطلب وفقًا للشروط المعتمدة."
                              : "To open a current account, choose the most convenient method: visit a bank branch or complete the application through available digital channels. Submit the required documents and follow the standard procedures to complete your application."
                          }
                        />
                      </div>

                      <div>
 
                        <div className="mt-8 space-y-6">
                          {steps.map((step, index) => (
                            <div
                              key={step.id}
                              className="grid gap-4 p-5 md:grid-cols-[56px_minmax(0,1fr)]"
                            >
                              <div className="flex items-start justify-center md:pt-1">
                                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#324198]/20 bg-[#324198]/8 text-sm font-bold text-[#324198]">
                                  {index + 1}
                                </div>
                              </div>

                              <div>
                                <h3 className="text-base font-bold text-[#172048] md:text-[1.05rem]">
                                  {getText(step.title, isArabic)}
                                </h3>
                                <p className="mt-2 text-sm leading-7 text-slate-600">
                                  {getText(step.description, isArabic)}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.section>
                </div>

                <motion.section
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewport}
                  className="overflow-hidden]"
                >
                  <div className="flex flex-col gap-6 px-6 py-7 md:flex-row md:items-center md:justify-between md:px-8">
                    <div className="max-w-2xl">
                      <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#324198]/8 px-3 py-1.5 text-xs font-bold text-[#324198]">
                        <CreditCard className="h-3.5 w-3.5" />
                        {isArabic ? "الخطوة التالية" : "Next Step"}
                      </div>
                      <h3 className="text-xl font-bold tracking-[-0.02em] text-[#172048]">
                        {isArabic ? "جاهز لطلب الخدمة؟" : "Ready to Request the Service?"}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600 md:text-[15px]">
                        {isArabic
                          ? "ابدأ طلبك عبر البنك أو تواصل مع خدمة العملاء لمعرفة المتطلبات الأحدث الخاصة بالحساب الجاري."
                          : "Start your request through the bank or contact customer service for the latest current account requirements."}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#324198] px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-[#2b387f]"
                      >
                        {isArabic ? "تواصل الآن" : "Contact Us"}
                        <CTAArrow className="h-4 w-4" />
                      </Link>

                      <a
                        href="tel:+967000000000"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-[#324198]/16 bg-white px-6 py-3 text-sm font-bold text-[#172048] transition-all duration-300 hover:border-[#324198]/28 hover:bg-[#f7f9fd]"
                      >
                        <Phone className="h-4 w-4 text-[#324198]" />
                        {isArabic ? "اتصل بخدمة العملاء" : "Call Customer Service"}
                      </a>
                    </div>
                  </div>
                </motion.section>
              </div>
            </div>
          </div>
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
