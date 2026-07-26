"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useI18n } from "@/lib/i18n-context"
import { getLocalizedHref } from "@/lib/localized-routes"
import { PageHero } from "@/components/ui/page-hero"
import {
  Scale,
  Building2,
  ShieldCheck,
  Users,
  BookOpen,
  HeartHandshake,
  CheckCircle2,
  Lock,
  FileText,
  Phone,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  ArrowUpRight
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

export function CorporateGovernancePageContent() {
  const { locale, direction } = useI18n()
  const isAr = locale === "ar"

  const text = {
    heroTitle: isAr ? "الحوكمة المؤسسية" : "Corporate Governance",
    heroSubtitle: isAr
      ? "إطار مؤسسي متكامل لإدارة مسؤولة، وقرارات حكيمة، وشفافية مطلقة تعزز ثقة عملائنا ومساهمينا."
      : "An integrated institutional framework for responsible management, sound decision-making, and absolute transparency.",
    home: isAr ? "الرئيسية" : "Home",
    about: isAr ? "عن البنك" : "About Us",
    
    headerTitle: isAr ? "الحوكمة المؤسسية" : "Corporate Governance",
    headerSubtitle: isAr 
      ? "يولي بنك بن دول للتمويل الأصغر الإسلامي الحوكمة المؤسسية أهمية قصوى لضمان كفاءة الأداء، وحماية حقوق المساهمين وأصحاب المصالح، والالتزام بأعلى معايير النزاهة والشفافية."
      : "Bin Dowal Islamic Microfinance Bank attaches paramount importance to corporate governance to ensure operational efficiency, protect shareholder and stakeholder rights, and uphold the highest standards of integrity and transparency.",

    sections: [
      {
        id: "framework",
        title: isAr ? "الأهمية الإستراتيجية والإطار القانوني" : "Strategic Importance & Legal Framework",
        icon: Scale,
        content: isAr
          ? "يولي البنك الحوكمة المؤسسية أهمية أساسية باعتبارها إطارًا متكاملًا لإدارة أعماله بكفاءة ومسؤولية، وضمان سلامة القرارات، وحماية حقوق المساهمين والعملاء وأصحاب المصالح. ويحرص البنك على ممارسة أعماله وفقًا للتشريعات المصرفية النافذة، وقانون الشركات التجارية، والتعليمات والضوابط الصادرة عن البنك المركزي اليمني، إلى جانب السياسات واللوائح الداخلية المعتمدة."
          : "Bin Dowal Bank attaches fundamental importance to corporate governance as an integrated framework for managing its operations efficiently and responsibly, ensuring sound decision-making, and protecting the rights of shareholders, customers, and stakeholders. The Bank is committed to conducting its business in accordance with prevailing banking laws, commercial company laws, and regulations issued by the Central Bank of Yemen, alongside approved internal policies and regulations.",
        badge: isAr ? "الإطار التشريعي" : "Legal Framework",
      },
      {
        id: "manual",
        title: isAr ? "ترسيخ مبادئ الحوكمة والدليل المؤسسي" : "Embedding Governance Principles & Institutional Manual",
        icon: BookOpen,
        content: isAr
          ? "وانطلاقًا من رؤية مجلس الإدارة، يعمل البنك على ترسيخ مبادئ الحوكمة ضمن مختلف مستوياته الإدارية والتنظيمية، من خلال تحديد واضح للصلاحيات والمسؤوليات، وتعزيز المساءلة والرقابة، وضمان استقلالية الوظائف الرقابية. كما يعتمد البنك دليلًا للحوكمة المؤسسية يحدد الأطر المنظمة للعلاقة بين مجلس الإدارة والإدارة التنفيذية والمساهمين وأصحاب المصالح، ويوضح آليات اتخاذ القرار والمتابعة والإفصاح."
          : "Guided by the Board of Directors' vision, the Bank works to embed governance principles across all administrative and organizational levels through clear demarcation of authority and responsibilities, enhanced accountability and oversight, and guaranteed independence of control functions. The Bank also adopts a Corporate Governance Manual that defines the relationship framework among the Board, Executive Management, shareholders, and stakeholders, establishing clear mechanisms for decision-making, monitoring, and disclosure.",
        badge: isAr ? "دليل الحوكمة" : "Governance Manual",
      },
      {
        id: "committees",
        title: isAr ? "لجان مجلس الإدارة المتخصصة" : "Specialized Board Committees",
        icon: Users,
        content: isAr
          ? "وقد شكّل مجلس الإدارة عددًا من اللجان المتخصصة المنبثقة عنه، وفقًا لمتطلبات العمل المصرفي وأفضل الممارسات المؤسسية، ومن أبرزها لجنة الحوكمة والترشيحات والمكافآت، ولجنة المراجعة، ولجنة إدارة المخاطر. وتمارس هذه اللجان مهامها باستقلالية وحياد، بما يدعم قدرة المجلس على الإشراف الفاعل ومتابعة الأداء وإدارة المخاطر وتعزيز سلامة أنظمة الرقابة الداخلية."
          : "The Board of Directors has formed several specialized committees in accordance with banking requirements and institutional best practices, notably the Governance, Nominations and Remuneration Committee, the Audit Committee, and the Risk Management Committee. These committees exercise their duties independently and impartially, supporting the Board's capacity for effective oversight, performance tracking, risk management, and strengthening internal control systems.",
        badge: isAr ? "الإشراف والرقابة" : "Board Oversight",
      },
      {
        id: "controls",
        title: isAr ? "التكامل مع الوظائف الرقابية المستقلة" : "Integration with Independent Control Functions",
        icon: ShieldCheck,
        content: isAr
          ? "وتتكامل أعمال لجان مجلس الإدارة مع الإدارات والوظائف الرقابية المستقلة في البنك، وفي مقدمتها إدارة الامتثال، وإدارة التدقيق الداخلي، وإدارة المخاطر، بما يضمن الالتزام بالقوانين والتعليمات والسياسات المعتمدة، والكشف المبكر عن المخاطر، والتحقق من كفاءة الإجراءات والضوابط الداخلية."
          : "The work of the Board committees integrates seamlessly with the Bank's independent control departments—primarily Compliance, Internal Audit, and Risk Management—to ensure strict adherence to approved laws, regulations, and policies, enable early risk detection, and verify the efficiency of internal control procedures.",
        badge: isAr ? "الرقابة المستقلة" : "Independent Controls",
      },
      {
        id: "transparency",
        title: isAr ? "الشفافية، وحماية المستهلك المالي، والتطوير المستمر" : "Transparency, Consumer Protection & Continuous Improvement",
        icon: HeartHandshake,
        content: isAr
          ? "ويواصل البنك تطوير منظومة الحوكمة المؤسسية، وتعزيز مبادئ الشفافية والنزاهة والمساءلة والإفصاح، وتطبيق متطلبات دليل حوكمة البنوك الصادر عن البنك المركزي اليمني. كما يحرص على تبني الممارسات التي تسهم في حماية المستهلك المالي، والحد من تعارض المصالح، وترسيخ السلوك المهني والأخلاقي، بما يدعم الاستقرار المؤسسي ويعزز ثقة العملاء والمساهمين والمجتمع في أعمال البنك."
          : "The Bank continuously advances its corporate governance framework, reinforcing the principles of transparency, integrity, accountability, and disclosure in full adherence to the Central Bank of Yemen's Bank Governance Guidelines. Furthermore, the Bank is dedicated to adopting practices that foster financial consumer protection, mitigate conflicts of interest, and instill professional and ethical conduct, thereby underpinning institutional stability and earning the enduring trust of customers, shareholders, and the wider community.",
        badge: isAr ? "الشفافية والثقة" : "Trust & Transparency",
      },
    ],

    committeesTitle: isAr ? "أبرز اللجان المنبثقة عن مجلس الإدارة" : "Key Specialized Board Committees",
    committeesList: [
      {
        title: isAr ? "لجنة الحوكمة والترشيحات والمكافآت" : "Governance, Nominations & Remuneration Committee",
        desc: isAr
          ? "تعمل على صياغة ومتابعة سياسات الحوكمة، وتقييم أداء المجلس، والإشراف على سياسات المكافآت والترشيحات القيادية."
          : "Responsible for formulating governance policies, evaluating Board performance, and overseeing remuneration and executive nominations.",
        icon: Scale,
      },
      {
        title: isAr ? "لجنة المراجعة والتدقيق" : "Audit Committee",
        desc: isAr
          ? "تراقب سلامة التقارير المالية، وتشرف على كفاءة التدقيق الداخلي والخارجي، وتضمن الالتزام بالمعايير الرقابية والمالية."
          : "Monitors the integrity of financial reporting, oversees internal and external audit efficiency, and ensures compliance with financial standards.",
        icon: FileText,
      },
      {
        title: isAr ? "لجنة إدارة المخاطر" : "Risk Management Committee",
        desc: isAr
          ? "تتولى رصد وتقييم المخاطر المالية والتشغيلية، ووضع إستراتيجيات إدارة المخاطر لضمان استقرار البنك وحماية أصوله."
          : "Monitors and assesses financial and operational risks, establishing comprehensive risk strategies to safeguard Bank assets.",
        icon: Lock,
      },
    ],

    shortcutSectionTitle: isAr ? "التنقل السريع بين الأطر التنظيمية والرقابية" : "Quick Navigation: Regulatory & Governance Frameworks",
    shortcutSectionSubtitle: isAr ? "تصفح السياسات والأطر المكملة لمنظومة الحوكمة في بنك بن دول" : "Explore complementary policies and governance frameworks at Bin Dowal Bank",
    shortcutCardTitle: isAr ? "بيان الامتثال" : "Compliance Statement",
    shortcutCardDesc: isAr 
      ? "تعرف على التزامنا التام بتوصيات مكافحة غسل الأموال (AML) وتمويل الإرهاب (CFT) والتسجيل في قانون FATCA."
      : "Learn about our steadfast adherence to AML/CFT recommendations and FATCA GIIN registration.",
    shortcutCardBtn: isAr ? "انتقل إلى بيان الامتثال" : "Go to Compliance Statement",

    ctaTitle: isAr ? "هل لديك استفسار حول سياسات الحوكمة والإفصاح؟" : "Have Questions About Our Governance & Disclosure Policies?",
    ctaDesc: isAr
      ? "فريقنا متاح للإجابة على استفسارات العملاء والمساهمين وتوفير المعلومات المتعلقة بالحوكمة والشفافية المؤسسية."
      : "Our team is available to answer inquiries from customers and shareholders and provide information on corporate transparency.",
    ctaBtn: isAr ? "تواصل معنا" : "Contact Us",
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
        <div className="pointer-events-none absolute bottom-10 -left-24 w-[400px] h-[400px] bg-[#8b1e3f]/5 rounded-full blur-2xl -z-10" />

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

          {/* Official Governance Statement Document Card */}
          <motion.div
            className="bg-white rounded-3xl shadow-[0_16px_50px_rgba(11,13,54,0.07)] border border-slate-200/80 p-6 sm:p-10 md:p-14 mb-20 relative overflow-hidden"
            variants={FADE_UP}
            initial="initial"
            whileInView="whileInView"
          >
            {/* Document Header Accent & Watermark */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#0b0d36] via-[#262b80] to-[#8b1e3f]" />
            <Building2 className="absolute -bottom-16 -left-16 w-96 h-96 text-slate-100/50 pointer-events-none -rotate-12" />

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
                <span>{isAr ? "وثيقة الحوكمة المؤسسية المعتمدة من مجلس الإدارة - بنك بن دول" : "Certified Corporate Governance Framework approved by the Board of Directors"}</span>
              </div>
              <div className="font-semibold text-slate-600">
                {isAr ? "تاريخ التحديث: 2026" : "Last Updated: 2026"}
              </div>
            </div>
          </motion.div>

          {/* Key Board Committees Section */}
          <motion.div
            className="mb-20"
            variants={STAGGER_CONTAINER}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0b0d36] font-cairo mb-3">
                {text.committeesTitle}
              </h3>
              <div className="w-16 h-1 bg-[#8b1e3f] mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {text.committeesList.map((comm, idx) => {
                const IconComp = comm.icon
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
                      {comm.title}
                    </h4>
                    <p className="text-sm md:text-base text-slate-600 leading-relaxed font-cairo">
                      {comm.desc}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Quick Navigation / Shortcut Section (As requested by User) */}
          <motion.div
            className="mb-20 bg-slate-100/70 rounded-3xl p-8 md:p-10 border border-slate-200/80"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <Sparkles className="w-5 h-5 text-[#8b1e3f]" />
              <h3 className="text-xl md:text-2xl font-bold text-[#0b0d36] font-cairo">
                {text.shortcutSectionTitle}
              </h3>
            </div>
            <p className="text-sm md:text-base text-slate-600 mb-6 font-cairo">
              {text.shortcutSectionSubtitle}
            </p>

            <Link
              href={getLocalizedHref("/about/compliance-statement", locale)}
              className="group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-6 md:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-md hover:shadow-xl hover:border-[#262b80]/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0b0d36] to-[#262b80] text-white flex items-center justify-center shadow-lg shadow-[#262b80]/20 shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-[#0b0d36] font-cairo mb-1 group-hover:text-[#262b80] transition-colors">
                    {text.shortcutCardTitle}
                  </h4>
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed font-cairo">
                    {text.shortcutCardDesc}
                  </p>
                </div>
              </div>

              <div className="w-full sm:w-auto shrink-0 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#262b80]/5 group-hover:bg-[#262b80] text-[#262b80] group-hover:text-white font-bold text-sm md:text-base transition-all duration-300 font-cairo shadow-sm">
                <span>{text.shortcutCardBtn}</span>
                {isAr ? (
                  <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                ) : (
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                )}
              </div>
            </Link>
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
                href={getLocalizedHref("/contact", locale)}
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
