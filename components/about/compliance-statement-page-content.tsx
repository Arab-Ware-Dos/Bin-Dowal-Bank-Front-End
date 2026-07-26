"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useI18n } from "@/lib/i18n-context"
import { PageHero } from "@/components/ui/page-hero"
import {
  ShieldCheck,
  Globe2,
  Users,
  Scale,
  FileText,
  CheckCircle2,
  Copy,
  Check,
  Award,
  Lock,
  Phone,
  ArrowLeft,
  ArrowRight
} from "lucide-react"

const FADE_UP = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: "easeOut" },
}

const STAGGER_CONTAINER = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const STAGGER_ITEM = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

export function ComplianceStatementPageContent() {
  const { locale, direction } = useI18n()
  const isAr = locale === "ar"
  const [copied, setCopied] = useState(false)

  const giinNumber = "6PTVIH.99999.SL.886"

  const handleCopy = () => {
    navigator.clipboard.writeText(giinNumber)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const text = {
    heroTitle: isAr ? "بيان الامتثال" : "Compliance Statement",
    heroSubtitle: isAr
      ? "التزامنا التام بالمعايير المحلية والدولية لمكافحة غسل الأموال وتمويل الإرهاب وتعزيز النزاهة المصرفية."
      : "Our steadfast commitment to local and international AML/CFT standards and banking integrity.",
    home: isAr ? "الرئيسية" : "Home",
    about: isAr ? "عن البنك" : "About Us",
    
    headerTitle: isAr ? "بيان الامتثال" : "Compliance Statement",
    headerSubtitle: isAr 
      ? "تؤكد إلتزام بنك بن دول للتمويل الأصغر الإسلامي بتطبيق أعلى معايير الرقابة المالية ومكافحة غسل الأموال وتمويل الإرهاب وفقاً للقوانين المحلية والتوصيات الدولية."
      : "Bin Dowal Islamic Microfinance Bank affirms its strict adherence to the highest standards of financial control, AML, and CFT in accordance with local laws and international recommendations.",

    sections: [
      {
        id: "international",
        title: isAr ? "الالتزام بالمعايير الدولية (FATF & MENAFATF)" : "International Compliance (FATF & MENAFATF)",
        icon: Globe2,
        content: isAr
          ? "اليمن وبصفته عضواً في المينافاتف (منطقة الشرق الأوسط وشمال أفريقيا) (MENAFATF)، يسعى إلى الامتثال بالتوصيات الـ 40 للفاتف FATF الخاصة بمكافحة غسل الأموال (AML) ومكافحة تمويل الإرهاب (CFT). ووفقاً لبيان صدر مؤخراً عن مجموعة العمل المالي (FATF)، فقد نجح اليمن في تنفيذ خطة العمل المتفق عليها. وبالتالي، ستواصل مجموعة العمل المالي مراقبة الوضع عن كثب وتحديد موعد لزيارة الموقع في أقرب فرصة ممكنة."
          : "As a member of MENAFATF (Middle East and North Africa Financial Action Task Force), Yemen strives to comply with the FATF (Financial Action Task Force) 40 Recommendations on Anti-Money Laundering (AML) and Combating the Financing of Terrorism (CFT). According to a recent statement issued by the FATF, Yemen has successfully implemented its agreed-upon action plan. Consequently, the FATF will continue to monitor the situation closely and schedule an on-site visit at the earliest possible opportunity.",
        badge: isAr ? "المعايير الدولية" : "Global Standards",
      },
      {
        id: "internal",
        title: isAr ? "الرقابة والسياسات الداخلية لبنك بن دول" : "Bin Dowal Bank Internal Policies & Controls",
        icon: Users,
        content: isAr
          ? "فيما يتعلق بتدابير مكافحة غسل الأموال وتمويل الإرهاب، لدى بنك بن دول فريق التزام متخصص تم تعيينه من قبل مجلس الإدارة. كما وضع البنك أيضاً إجراءات وسياسات داخلية لتحديد ومكافحة الأنشطة مثل غسل الأموال وتمويل الإرهاب والاحتيال والفساد والرشوة."
          : "Regarding AML/CFT measures, Bin Dowal Bank has a dedicated compliance team appointed by the Board of Directors. The Bank has also established comprehensive internal procedures and policies to identify and combat activities such as money laundering, terrorism financing, fraud, corruption, and bribery.",
        badge: isAr ? "الرقابة المؤسسية" : "Internal Governance",
      },
      {
        id: "legal",
        title: isAr ? "التوافق مع القوانين اليمنية والجهات الرقابية" : "Alignment with Yemeni Laws & Regulatory Bodies",
        icon: Scale,
        content: isAr
          ? "تتوافق هذه الجهود مع القانون اليمني رقم (1) لسنة 2010 بشأن مكافحة غسل الأموال ومكافحة تمويل الإرهاب والذي دخل حيز التنفيذ في 1 يناير 2010 في اليمن. تم إصدار هذا القانون في البداية وفقاً لتوصيات مجموعة العمل المالي (FATF)، وقد خضع لتعديلات بموجب القانون رقم (17) لسنة 2013. تم تقديم المبادئ التوجيهية المقابلة من قبل وحدة المعلومات المالية (FIU) والبنك المركزي اليمني، لتوضيح الواجبات القانونية المرتبطة بالامتثال لمكافحة غسل الأموال وتمويل الإرهاب."
          : "These efforts align with Yemeni Law No. (1) of 2010 concerning Anti-Money Laundering and Combating the Financing of Terrorism, which entered into force on January 1, 2010, in Yemen. Originally issued in accordance with FATF recommendations, this law underwent amendments under Law No. (17) of 2013. Corresponding guidelines have been provided by the Financial Information Unit (FIU) and the Central Bank of Yemen to clarify the legal duties associated with AML/CFT compliance.",
        badge: isAr ? "الإطار القانوني" : "Legal Framework",
      },
      {
        id: "fatca",
        title: isAr ? "قانون الامتثال الضريبي الأمريكي للحسابات الأجنبية (FATCA)" : "Foreign Account Tax Compliance Act (FATCA)",
        icon: Award,
        content: isAr
          ? "قانون الامتثال الضريبي الامريكي للحسابات الأجنبية: تم تسجيل بنك بن دول كمؤسسة مالية أجنبية مشاركة."
          : "Foreign Account Tax Compliance Act: Bin Dowal Bank is registered as a Participating Foreign Financial Institution (PFFI).",
        badge: isAr ? "الامتثال الضريبي" : "Tax Compliance",
        hasGiin: true,
      },
    ],

    pillarsTitle: isAr ? "ركائز منظومة الامتثال في بنك بن دول" : "Pillars of Compliance at Bin Dowal Bank",
    pillars: [
      {
        title: isAr ? "فريق التزام متخصص" : "Dedicated Compliance Team",
        desc: isAr
          ? "فريق مستقل ومتخصص معين مباشرة من قبل مجلس الإدارة لضمان تطبيق أعلى معايير الحوكمة والنزاهة المصرفية."
          : "An independent, specialized team appointed directly by the Board of Directors to ensure the highest standards of governance.",
        icon: ShieldCheck,
      },
      {
        title: isAr ? "إجراءات رقابية صارمة" : "Strict Internal Controls",
        desc: isAr
          ? "أنظمة وسياسات داخلية متطورة لرصد ومكافحة غسل الأموال وتمويل الإرهاب والاحتيال والرشوة بفعالية عالية."
          : "Advanced internal systems and policies to monitor and combat money laundering, terrorism financing, fraud, and bribery.",
        icon: Lock,
      },
      {
        title: isAr ? "اعتراف وتسجيل دولي" : "International Recognition",
        desc: isAr
          ? "الامتثال الكامل للمبادئ التوجيهية للبنك المركزي اليمني ووحدة المعلومات المالية والتسجيل في نظام FATCA الأمريكي."
          : "Full compliance with Central Bank of Yemen and FIU guidelines, as well as registration in the U.S. FATCA system.",
        icon: CheckCircle2,
      },
    ],

    giinLabel: isAr ? "الرقم التعريفي لبيان الامتثال (GIIN):" : "Compliance Identification Number (GIIN):",
    copiedText: isAr ? "تم النسخ بنجاح!" : "Copied successfully!",
    copyTooltip: isAr ? "نسخ الرقم التعريفي" : "Copy GIIN",

    ctaTitle: isAr ? "هل لديك استفسار حول سياسات الامتثال في البنك؟" : "Have Questions About Our Compliance Policies?",
    ctaDesc: isAr
      ? "فريق الامتثال وخدمة العملاء لدينا متاحون للرد على كافة استفساراتكم وتوفير المعلومات المطلوبة حول معايير وإجراءات الالتزام."
      : "Our compliance and customer service teams are available to answer all your inquiries regarding compliance standards and procedures.",
    ctaBtn: isAr ? "تواصل مع خدمة العملاء" : "Contact Customer Service",
  }

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#262b80] selection:text-white" dir={direction}>
      {/* Hero Section */}
      <PageHero
        title={text.heroTitle}
        subtitle={text.heroSubtitle}
        breadcrumbs={[
          { labelKey: text.home, href: "/" },
          { labelKey: text.about, href: "/about" },
          { labelKey: text.heroTitle },
        ]}
      />

      {/* Main Content Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
        {/* Background Decorative Glows */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#262b80]/5 to-[#8b1e3f]/5 rounded-full blur-3xl -z-10" />
        <div className="pointer-events-none absolute bottom-10 -right-24 w-[400px] h-[400px] bg-[#262b80]/5 rounded-full blur-2xl -z-10" />

        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          
          {/* Top Header Section with Logo & Title (Per User Specific Request) */}
          <motion.div
            className="text-center mb-16 md:mb-20"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Bank Logo Container */}
            <div className="inline-flex items-center justify-center p-6 bg-white rounded-3xl shadow-[0_10px_35px_rgba(11,13,54,0.08)] border border-slate-100 mb-8 transition-transform duration-300 hover:scale-[1.02]">
              <Image
                src="/images/logo.png"
                alt="Bin Dowal Bank Logo"
                width={260}
                height={80}
                priority
                className="h-12 sm:h-14 md:h-16 w-auto object-contain"
              />
            </div>

            {/* Title Below Logo */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0b0d36] tracking-tight font-cairo mb-5">
              {text.headerTitle}
            </h2>

            {/* Gradient Accent Bar */}
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#262b80] via-[#8b1e3f] to-[#ed1c24] mx-auto rounded-full mb-6 shadow-sm" />

            {/* Subtitle */}
            <p className="max-w-3xl mx-auto text-base md:text-lg text-slate-600 leading-relaxed font-cairo">
              {text.headerSubtitle}
            </p>
          </motion.div>

          {/* Official Statement Document Card */}
          <motion.div
            className="bg-white rounded-3xl shadow-[0_16px_50px_rgba(11,13,54,0.07)] border border-slate-200/80 p-6 sm:p-10 md:p-14 mb-20 relative overflow-hidden"
            variants={FADE_UP}
            initial="initial"
            whileInView="whileInView"
          >
            {/* Document Header Accent & Watermark */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#0b0d36] via-[#262b80] to-[#8b1e3f]" />
            <ShieldCheck className="absolute -bottom-16 -left-16 w-96 h-96 text-slate-100/50 pointer-events-none -rotate-12" />

            {/* Document Content Sections */}
            <div className="space-y-10 md:space-y-12 relative z-10">
              {text.sections.map((sec, index) => {
                const IconComponent = sec.icon
                return (
                  <motion.div
                    key={sec.id}
                    className="group relative pb-10 border-b border-slate-100 last:border-b-0 last:pb-0"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex flex-col sm:flex-row gap-5 md:gap-6 items-start">
                      {/* Section Icon Box */}
                      <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-[#0b0d36] to-[#262b80] text-white flex items-center justify-center shadow-lg shadow-[#262b80]/20 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 md:w-7 md:h-7" />
                      </div>

                      {/* Section Text & Content */}
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#262b80]/10 text-[#262b80] font-cairo">
                            {sec.badge}
                          </span>
                          <h3 className="text-xl md:text-2xl font-bold text-[#0b0d36] font-cairo">
                            {sec.title}
                          </h3>
                        </div>

                        <p className="text-base md:text-lg text-slate-700 leading-relaxed font-cairo text-justify">
                          {sec.content}
                        </p>

                        {/* Special FATCA GIIN Highlight Box */}
                        {sec.hasGiin && (
                          <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-[#0b0d36] to-[#1e2266] text-white shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-white/10">
                            <div>
                              <span className="block text-xs sm:text-sm text-slate-300 font-medium mb-1 font-cairo">
                                {text.giinLabel}
                              </span>
                              <div className="font-mono text-lg sm:text-xl md:text-2xl font-bold tracking-wider text-amber-400">
                                {giinNumber}
                              </div>
                            </div>

                            <button
                              type="button"
                              onClick={handleCopy}
                              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 active:bg-white/30 text-white font-medium text-sm flex items-center justify-center gap-2 transition-all duration-200 border border-white/20 hover:border-white/40 shadow-sm"
                              title={text.copyTooltip}
                            >
                              {copied ? (
                                <>
                                  <Check className="w-4 h-4 text-emerald-400" />
                                  <span className="text-emerald-300">{text.copiedText}</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="w-4 h-4" />
                                  <span>{isAr ? "نسخ الرقم" : "Copy Number"}</span>
                                </>
                              )}
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Document Footer Verification Note */}
            <div className="mt-12 pt-6 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs md:text-sm text-slate-500 font-cairo">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>{isAr ? "بيان امتثال معتمد وصادر عن إدارة الالتزام - بنك بن دول" : "Certified Compliance Statement issued by Bin Dowal Bank Compliance Dept"}</span>
              </div>
              <div className="font-semibold text-slate-600">
                {isAr ? "تاريخ التحديث: 2026" : "Last Updated: 2026"}
              </div>
            </div>
          </motion.div>

          {/* Pillars of Compliance Section */}
          <motion.div
            className="mb-20"
            variants={STAGGER_CONTAINER}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0b0d36] font-cairo mb-3">
                {text.pillarsTitle}
              </h3>
              <div className="w-16 h-1 bg-[#8b1e3f] mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {text.pillars.map((pillar, idx) => {
                const IconComp = pillar.icon
                return (
                  <motion.div
                    key={idx}
                    variants={STAGGER_ITEM}
                    className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgba(11,13,54,0.05)] border border-slate-100 hover:border-[#262b80]/30 transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-center text-center group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#262b80]/5 text-[#262b80] group-hover:bg-[#262b80] group-hover:text-white flex items-center justify-center mb-6 transition-colors duration-300">
                      <IconComp className="w-7 h-7" />
                    </div>
                    <h4 className="text-lg md:text-xl font-bold text-[#0b0d36] font-cairo mb-3">
                      {pillar.title}
                    </h4>
                    <p className="text-sm md:text-base text-slate-600 leading-relaxed font-cairo">
                      {pillar.desc}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Customer Support CTA Section */}
          <motion.div
            className="bg-gradient-to-r from-[#0b0d36] via-[#262b80] to-[#1e2266] rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden text-center sm:text-start flex flex-col sm:flex-row items-center justify-between gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="pointer-events-none absolute right-0 top-0 w-80 h-80 bg-white/5 rounded-full blur-2xl -mr-20 -mt-20" />
            
            <div className="max-w-xl relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-3 font-cairo">
                {text.ctaTitle}
              </h3>
              <p className="text-slate-300 text-base md:text-lg font-cairo leading-relaxed">
                {text.ctaDesc}
              </p>
            </div>

            <div className="relative z-10 flex-shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-[#0b0d36] hover:bg-slate-100 font-bold text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-cairo group"
              >
                <Phone className="w-5 h-5 text-[#8b1e3f]" />
                <span>{text.ctaBtn}</span>
                {isAr ? (
                  <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                ) : (
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                )}
              </Link>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  )
}
