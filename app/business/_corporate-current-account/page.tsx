"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n-context"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Building2, Smartphone, Shield, Wallet, Check, ChevronRight, Phone, ArrowRight, TrendingUp, Globe2, FileText, Clock, CreditCard, BarChart3 } from "lucide-react"

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } } }
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }

const features = [
  { icon: Wallet, titleAr: "إدارة التدفقات النقدية", titleEn: "Cash Flow Management", descAr: "أدِر إيرادات ومصروفات شركتك بدقة عبر حساب جاري مرن يدعم جميع أنواع المعاملات.", descEn: "Manage your company's revenues and expenses accurately through a flexible current account supporting all transaction types." },
  { icon: CreditCard, titleAr: "دفاتر الشيكات", titleEn: "Checkbook Facility", descAr: "احصل على دفاتر شيكات لاستخدامها في المعاملات التجارية اليومية مع الموردين والشركاء.", descEn: "Obtain checkbooks for daily commercial transactions with suppliers and partners." },
  { icon: Smartphone, titleAr: "الوصول الرقمي للشركات", titleEn: "Corporate Digital Access", descAr: "إدارة حساب شركتك عبر الويب بنك المخصص للشركات وتطبيق الجوال المتكامل.", descEn: "Manage your corporate account through the dedicated corporate web bank and integrated mobile app." },
  { icon: Shield, titleAr: "أمان مصرفي مؤسسي", titleEn: "Institutional Banking Security", descAr: "بنية أمنية متقدمة تحمي معاملات شركتك مع صلاحيات وصول قابلة للضبط لكل مستخدم.", descEn: "Advanced security architecture protecting your company's transactions with configurable access permissions per user." },
  { icon: BarChart3, titleAr: "تقارير مالية مفصّلة", titleEn: "Detailed Financial Reports", descAr: "كشوف حساب شاملة وتقارير مالية دورية تدعم متطلبات المحاسبة والمراجعة.", descEn: "Comprehensive account statements and periodic financial reports supporting accounting and auditing requirements." },
  { icon: Clock, titleAr: "خدمة على مدار الساعة", titleEn: "24/7 Service", descAr: "إمكانية إجراء المعاملات وتتبع الأرصدة في أي وقت عبر قنوات البنك الرقمية.", descEn: "Ability to transact and track balances at any time through the bank's digital channels." },
]
const benefits = [
  { ar: "إدارة سيولة الشركة بكفاءة عالية", en: "Efficient corporate liquidity management" },
  { ar: "تسهيل المدفوعات التجارية اليومية بدفاتر الشيكات", en: "Facilitating daily commercial payments with checkbooks" },
  { ar: "ربط الحساب بمنظومة الرواتب والمدفوعات", en: "Linking account to payroll and payment systems" },
  { ar: "تقارير مالية متوافقة مع متطلبات المراجعة", en: "Financial reports compliant with audit requirements" },
  { ar: "صلاحيات وصول متعددة لموظفي الشركة", en: "Multiple access permissions for company employees" },
  { ar: "متوافق مع أحكام الشريعة الإسلامية", en: "Sharia-compliant" },
]
const requirements = [
  { ar: "السجل التجاري للشركة ساري المفعول", en: "Valid commercial registration" },
  { ar: "عقد التأسيس والنظام الأساسي للشركة", en: "Articles of association and bylaws" },
  { ar: "هويات المفوّضين بالتوقيع", en: "IDs of authorized signatories" },
  { ar: "طلب فتح الحساب المؤسسي موقّعاً", en: "Signed institutional account opening form" },
]
const steps = [
  { num: "01", ar: "تقديم الطلب", en: "Submit Request", descAr: "تواصل مع مدير علاقات الأعمال لتقديم طلب فتح الحساب.", descEn: "Contact the business relationship manager to submit the account opening request." },
  { num: "02", ar: "توثيق الشركة", en: "Company Documentation", descAr: "يراجع فريقنا الوثائق ويتحقق من صحة بيانات شركتك ومفوّضيها.", descEn: "Our team reviews documents and verifies your company's and authorized persons' data." },
  { num: "03", ar: "تفعيل الحساب", en: "Account Activation", descAr: "يُفعَّل الحساب المؤسسي وتُسلَّم بيانات الدخول ودفتر الشيكات الأول.", descEn: "The institutional account is activated and login credentials and first checkbook are delivered." },
  { num: "04", ar: "ابدأ العمليات", en: "Start Operations", descAr: "ابدأ بإدارة تدفقاتك النقدية ومعاملاتك التجارية فوراً.", descEn: "Start managing your cash flows and commercial transactions immediately." },
]
const faqs = [
  { q: "هل يمكن تعيين أكثر من مفوّض بالتوقيع على الحساب؟", a: "نعم، يمكن تعيين أكثر من مفوّض بالتوقيع بصلاحيات مختلفة وفق هيكل الشركة وقرارات مجلس الإدارة." },
  { q: "هل تُفرض رسوم شهرية على الحساب الجاري للشركات؟", a: "تُطبَّق رسوم رمزية على بعض الخدمات المصرفية الإضافية، أما الحساب الجاري الأساسي فيُفتح بأقل التكاليف الممكنة." },
  { q: "كيف يمكن للشركة إدارة رواتب موظفيها من الحساب؟", a: "يمكن ربط الحساب بنظام الرواتب الخاص بالبنك لصرف رواتب الموظفين بصورة آلية ومنتظمة في تواريخ محددة." },
  { q: "ما هو حد السحب اليومي للحساب الجاري المؤسسي؟", a: "تُحدَّد حدود السحب وفق اتفاق مع البنك، ويمكن تخصيصها بما يتناسب مع حجم عمليات الشركة واحتياجاتها." },
  { q: "هل الحساب متوافق مع الشريعة الإسلامية؟", a: "نعم، جميع منتجات بنك بن دول متوافقة مع الشريعة الإسلامية وتحت إشراف هيئة رقابة شرعية مستقلة." },
]
const related = [
  { href: "/business/corporate-investment-deposits", icon: TrendingUp, titleAr: "الودائع الاستثمارية", titleEn: "Investment Deposits", descAr: "استثمر فائض السيولة بعوائد تنافسية" },
  { href: "/business/swift-transfers", icon: Globe2, titleAr: "حوالات السويفت", titleEn: "SWIFT Transfers", descAr: "تحويلات دولية لمبالغ كبيرة" },
  { href: "/business/bank-guarantees", icon: FileText, titleAr: "خطابات الضمان", titleEn: "Bank Guarantees", descAr: "ضمانات تجارية ومصرفية موثوقة" },
]

export default function CorporateCurrentAccountPage() {
  const { locale } = useI18n()
  const ar = locale === "ar"
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden py-16 md:py-24 min-h-[580px] flex items-center">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0b0d36] via-[#262b80] to-[#0b0d36]" />
        <div className="absolute inset-0 -z-10 opacity-[0.07]" style={{ backgroundImage: "url('/images/new-pattern.png')", backgroundSize: "cover" }} />
        <div className="absolute -top-32 -start-32 h-[500px] w-[500px] rounded-full bg-sky-400/10 blur-3xl opacity-50" />
        <div className="absolute -bottom-24 -end-24 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
        <div className="container mx-auto px-4 relative w-full">
          <Breadcrumbs items={[{ labelKey: "nav.businessBanking", href: "/business-banking" }, { labelKey: "nav.corporateCurrentAccount" }]} />
          <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-2xl mt-6">
            <motion.span variants={fadeUp} className="inline-block text-xs font-semibold uppercase tracking-[0.22em] text-white/50 mb-4">{ar ? "بن دول أعمال" : "Business Banking"}</motion.span>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">{ar ? "الحساب الجاري للشركات" : "Corporate Current Account"}</motion.h1>
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-white/75 leading-relaxed mb-10">{ar ? "لإدارة التدفقات النقدية بكفاءة، مع ميزة الحصول على دفاتر شيكات تُسهِّل معاملاتك التجارية مع الموردين والشركاء." : "For efficient cash flow management, with the advantage of checkbooks that facilitate your commercial transactions with suppliers and partners."}</motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#0b0d36] shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl">{ar ? "تواصل مع فريق الأعمال" : "Contact Business Team"}<ArrowRight className="h-4 w-4" /></Link>
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/18 hover:-translate-y-0.5"><Phone className="h-4 w-4" />{ar ? "اطلب الخدمة الآن" : "Request Service"}</Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-14 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#262b80] mb-3 block">{ar ? "مزايا الخدمة" : "Service Features"}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b0d36]">{ar ? "ما يميّز الحساب الجاري المؤسسي" : "What Sets the Corporate Current Account Apart"}</h2>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => { const Icon = f.icon; return (
              <motion.div key={i} variants={fadeUp} className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#262b80]/20 hover:shadow-[0_16px_40px_rgba(38,43,128,0.08)]">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#262b80]/8 text-[#262b80] transition-colors group-hover:bg-[#262b80] group-hover:text-white"><Icon className="h-5 w-5" /></div>
                <h3 className="mb-2 font-semibold text-slate-900">{ar ? f.titleAr : f.titleEn}</h3>
                <p className="text-sm leading-relaxed text-slate-500">{ar ? f.descAr : f.descEn}</p>
              </motion.div>
            )})}
          </motion.div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 bg-slate-50/70">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#262b80] mb-3 block">{ar ? "القيمة المؤسسية" : "Business Value"}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0b0d36] mb-6 leading-snug">{ar ? "حساب مصمّم للعمليات المؤسسية" : "An Account Designed for Corporate Operations"}</h2>
              <p className="text-slate-600 leading-relaxed mb-8">{ar ? "الحساب الجاري للشركات في بنك بن دول هو الركيزة الأساسية لكل عملية مؤسسية ناجحة. يمنح فريقك المالي السيطرة الكاملة على السيولة والمدفوعات بأدوات احترافية ومنظومة رقمية متكاملة." : "The Corporate Current Account at Bin Dowal Bank is the cornerstone of every successful institutional operation, giving your finance team full control over liquidity and payments."}</p>
              <ul className="space-y-3">{benefits.map((b, i) => (<li key={i} className="flex items-center gap-3 text-slate-700"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#262b80] text-white"><Check className="h-3.5 w-3.5" /></span>{ar ? b.ar : b.en}</li>))}</ul>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0b0d36] to-[#262b80] text-white"><Building2 className="h-7 w-7" /></div>
              <h3 className="mb-2 text-xl font-bold text-slate-900">{ar ? "الحساب الجاري للشركات" : "Corporate Current Account"}</h3>
              <p className="mb-6 text-sm text-slate-500">{ar ? "بنك بن دول للتمويل الأصغر الإسلامي" : "Bin Dowal Islamic Microfinance Bank"}</p>
              <div className="space-y-4">
                {[{ labelAr: "دفاتر الشيكات", labelEn: "Checkbooks", valAr: "متاحة", valEn: "Available" }, { labelAr: "الوصول الرقمي", labelEn: "Digital Access", valAr: "الويب بنك + الجوال", valEn: "Web Bank + Mobile" }, { labelAr: "تعدد المفوّضين", labelEn: "Multiple Signatories", valAr: "مدعوم", valEn: "Supported" }, { labelAr: "التوافق الشرعي", labelEn: "Sharia Compliance", valAr: "معتمد", valEn: "Certified" }].map((row, i) => (
                  <div key={i} className="flex items-center justify-between border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                    <span className="text-sm text-slate-500">{ar ? row.labelAr : row.labelEn}</span>
                    <span className="text-sm font-semibold text-[#262b80]">{ar ? row.valAr : row.valEn}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ELIGIBILITY */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-14 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#262b80] mb-3 block">{ar ? "المتطلبات" : "Requirements"}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b0d36]">{ar ? "وثائق فتح الحساب المؤسسي" : "Corporate Account Opening Documents"}</h2>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
            {requirements.map((req, i) => (
              <motion.div key={i} variants={fadeUp} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center">
                <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#262b80] text-white text-sm font-bold">{i + 1}</div>
                <p className="text-sm font-medium text-slate-700">{ar ? req.ar : req.en}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-gradient-to-br from-[#0b0d36] via-[#262b80] to-[#0b0d36]">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-14 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/50 mb-3 block">{ar ? "آلية العمل" : "How It Works"}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">{ar ? "كيف تفتح حساب شركتك؟" : "How to Open Your Corporate Account?"}</h2>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div key={i} variants={fadeUp} className="relative rounded-2xl bg-white/6 border border-white/10 p-6 backdrop-blur-sm">
                {i < steps.length - 1 && <ChevronRight className="absolute -end-3 top-1/2 hidden -translate-y-1/2 text-white/25 lg:block h-5 w-5" />}
                <span className="mb-4 block text-4xl font-extrabold text-white/18">{step.num}</span>
                <h3 className="mb-2 font-semibold text-white">{ar ? step.ar : step.en}</h3>
                <p className="text-sm leading-relaxed text-white/55">{ar ? step.descAr : step.descEn}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-14 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#262b80] mb-3 block">{ar ? "أسئلة شائعة" : "FAQ"}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b0d36]">{ar ? "الأسئلة الشائعة" : "Frequently Asked Questions"}</h2>
          </motion.div>
          <div className="max-w-2xl mx-auto">
            <Accordion type="single" collapsible>
              {faqs.map((faq, i) => (<AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-start font-medium text-slate-800 hover:text-[#262b80]">{faq.q}</AccordionTrigger><AccordionContent className="text-slate-500 leading-relaxed">{faq.a}</AccordionContent></AccordionItem>))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mx-auto max-w-3xl text-center rounded-3xl bg-gradient-to-br from-[#0b0d36] via-[#262b80] to-[#0b0d36] px-8 py-16 shadow-[0_40px_80px_rgba(7,10,30,0.3)]">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45 mb-4 block">{ar ? "ابدأ الآن" : "Get Started"}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{ar ? "افتح حساب شركتك الجاري اليوم" : "Open Your Corporate Current Account Today"}</h2>
            <p className="text-white/65 mb-10 text-lg leading-relaxed">{ar ? "دع فريق علاقات الأعمال لدينا يرشدك خلال عملية الفتح ويضمن تلبية جميع احتياجات شركتك المصرفية." : "Let our business relationship team guide you through the opening process and ensure all your corporate banking needs are met."}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#0b0d36] transition-all hover:-translate-y-0.5 hover:shadow-xl">{ar ? "تواصل مع فريق الأعمال" : "Contact Business Team"}<ArrowRight className="h-4 w-4" /></Link>
              <Link href="/branches" className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/18 hover:-translate-y-0.5">{ar ? "ابحث عن فرع" : "Find a Branch"}</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* RELATED */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-10 text-center"><h2 className="text-2xl font-bold text-slate-800">{ar ? "خدمات أعمال ذات صلة" : "Related Business Services"}</h2></motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
            {related.map((r, i) => { const Icon = r.icon; return (
              <motion.div key={i} variants={fadeUp}>
                <Link href={r.href} className="group flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-6 text-center transition-all hover:-translate-y-1 hover:border-[#262b80]/30 hover:shadow-lg">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-600 transition-colors group-hover:bg-[#262b80] group-hover:text-white"><Icon className="h-5 w-5" /></div>
                  <h3 className="mb-1 font-semibold text-slate-800 group-hover:text-[#262b80]">{ar ? r.titleAr : r.titleEn}</h3>
                  <p className="text-xs text-slate-400">{r.descAr}</p>
                </Link>
              </motion.div>
            )})}
          </motion.div>
        </div>
      </section>
    </>
  )
}
