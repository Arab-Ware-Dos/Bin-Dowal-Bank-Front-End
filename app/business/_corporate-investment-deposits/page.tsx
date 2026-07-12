"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n-context"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { TrendingUp, Shield, Check, ChevronRight, Phone, ArrowRight, Building2, Globe2, FileText, BarChart3, Calendar, Star, Lock, RefreshCw } from "lucide-react"

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } } }
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }

const features = [
  { icon: TrendingUp, titleAr: "عوائد تنافسية على الفائض", titleEn: "Competitive Returns on Surplus", descAr: "استثمر فائض السيولة وحقق عوائد مجزية وفق صيغ استثمارية إسلامية معتمدة.", descEn: "Invest surplus liquidity and achieve rewarding returns under approved Islamic investment formulas." },
  { icon: Calendar, titleAr: "فترات استثمار مرنة", titleEn: "Flexible Investment Terms", descAr: "اختر المدة الأنسب لشركتك: شهر، ثلاثة أشهر، ستة أشهر، أو سنة أو أكثر.", descEn: "Choose the term best suited for your company: 1 month, 3 months, 6 months, or 1 year or more." },
  { icon: Shield, titleAr: "ضمان أمان السيولة", titleEn: "Liquidity Safety Guarantee", descAr: "وديعتك في بيئة مصرفية منظمة تضمن الحفاظ على رأس المال وتحقيق عوائد مستقرة.", descEn: "Your deposit in a regulated banking environment ensures capital preservation and stable returns." },
  { icon: BarChart3, titleAr: "تخطيط مالي خزيني دقيق", titleEn: "Precise Treasury Financial Planning", descAr: "أداة احترافية لإدارة الخزينة تدعم تخطيط التدفقات النقدية المؤسسية.", descEn: "A professional treasury management tool that supports institutional cash flow planning." },
  { icon: Star, titleAr: "خدمة عملاء مؤسسية متخصصة", titleEn: "Specialized Institutional Service", descAr: "مدير علاقات أعمال مخصص يُرافقك طوال دورة حياة وديعتك.", descEn: "A dedicated business relationship manager accompanies you throughout your deposit lifecycle." },
  { icon: RefreshCw, titleAr: "تجديد تلقائي عند الاستحقاق", titleEn: "Automatic Renewal at Maturity", descAr: "خيار التجديد التلقائي يضمن استمرار استثمار فائض سيولة شركتك دون انقطاع.", descEn: "Auto-renewal option ensures your company's surplus liquidity continues to be invested uninterrupted." },
]
const benefits = [
  { ar: "تحقيق عوائد فعلية على فائض سيولة الشركة", en: "Achieving real returns on company surplus liquidity" },
  { ar: "تخطيط مالي خزيني منظم وفق مدد مرنة", en: "Organized treasury financial planning with flexible terms" },
  { ar: "تجنب توقف السيولة عبر التجديد التلقائي", en: "Avoiding liquidity stagnation through automatic renewal" },
  { ar: "تقارير دورية شفافة عن أداء الودائع", en: "Transparent periodic reports on deposits performance" },
  { ar: "إدارة الودائع عبر الويب بنك المؤسسي", en: "Managing deposits via institutional web bank" },
  { ar: "توافق تام مع أحكام الشريعة الإسلامية", en: "Full compliance with Islamic Sharia principles" },
]
const requirements = [
  { ar: "حساب جارٍ نشط في بنك بن دول", en: "Active current account at Bin Dowal Bank" },
  { ar: "السجل التجاري للشركة ساري المفعول", en: "Valid company commercial registration" },
  { ar: "قرار مجلس الإدارة بالاستثمار", en: "Board of directors resolution authorizing investment" },
  { ar: "طلب إيداع الوديعة المؤسسية موقّعاً", en: "Signed institutional deposit request form" },
]
const steps = [
  { num: "01", ar: "تحديد متطلبات الاستثمار", en: "Define Investment Needs", descAr: "حدد المبلغ والمدة مع مدير علاقاتك لبناء خطة استثمارية مناسبة.", descEn: "Define amount and term with your relationship manager to build a suitable investment plan." },
  { num: "02", ar: "تقديم الطلب والوثائق", en: "Submit Request & Documents", descAr: "قدّم طلب الوديعة مع الوثائق الداعمة للمراجعة والاعتماد.", descEn: "Submit the deposit request with supporting documents for review and approval." },
  { num: "03", ar: "تفعيل الوديعة", en: "Activate Deposit", descAr: "تُفعَّل وديعتك ويبدأ احتساب العوائد من اليوم الأول وفق الشروط المتفق عليها.", descEn: "Your deposit is activated and returns are calculated from day one per agreed terms." },
  { num: "04", ar: "الاستحقاق والتجديد", en: "Maturity & Renewal", descAr: "عند الاستحقاق، استلم عوائدك أو جدد الوديعة تلقائياً لاستمرار النمو.", descEn: "At maturity, collect your returns or auto-renew the deposit for continued growth." },
]
const faqs = [
  { q: "ما هو الحد الأدنى لمبلغ الوديعة الاستثمارية للشركات؟", a: "يختلف الحد الأدنى وفق نوع الوديعة ومدتها؛ تواصل مع مدير علاقاتك لمعرفة الشروط المحددة لشركتك." },
  { q: "هل يمكن استرداد الوديعة قبل انتهاء مدتها؟", a: "يمكن الاسترداد المبكر وفق الشروط التعاقدية المتفق عليها، مع مراعاة أن ذلك قد يؤثر على حجم العوائد." },
  { q: "كيف تُحسَب عوائد الوديعة الاستثمارية المؤسسية؟", a: "تُحسَب العوائد على أساس صيغة المضاربة الإسلامية المعتمدة بناءً على أرباح استثمار الوديعة وفق نسبة الربح المتفق عليها." },
  { q: "هل تُقدَّم تقارير دورية عن أداء الوديعة؟", a: "نعم، يتلقى فريقك المالي كشوف دورية تفصيلية توضح أداء الوديعة وتوزيع العوائد بشكل شفاف." },
  { q: "هل يمكن فتح ودائع متعددة بمدد مختلفة في وقت واحد؟", a: "نعم، يمكن إدارة محفظة ودائع متنوعة بمدد مختلفة لتحقيق تنويع فعّال لإدارة السيولة المؤسسية." },
]
const related = [
  { href: "/business/corporate-current-account", icon: Building2, titleAr: "الحساب الجاري للشركات", titleEn: "Corporate Current Account", descAr: "إدارة التدفقات النقدية بكفاءة" },
  { href: "/business/swift-transfers", icon: Globe2, titleAr: "حوالات السويفت", titleEn: "SWIFT Transfers", descAr: "تحويلات دولية لمبالغ كبيرة" },
  { href: "/business/bank-guarantees", icon: FileText, titleAr: "خطابات الضمان", titleEn: "Bank Guarantees", descAr: "ضمانات تجارية موثوقة" },
]

export default function CorporateInvestmentDepositsPage() {
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
          <Breadcrumbs items={[{ labelKey: "nav.businessBanking", href: "/business-banking" }, { labelKey: "nav.corporateInvestmentDeposits" }]} />
          <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-2xl mt-6">
            <motion.span variants={fadeUp} className="inline-block text-xs font-semibold uppercase tracking-[0.22em] text-white/50 mb-4">{ar ? "بن دول أعمال" : "Business Banking"}</motion.span>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">{ar ? "الودائع الاستثمارية للشركات" : "Corporate Investment Deposits"}</motion.h1>
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-white/75 leading-relaxed mb-10">{ar ? "استثمر فائض السيولة وحقق عوائد تنافسية متوافقة مع الشريعة الإسلامية عبر ودائع مرنة ومدروسة تخدم أهداف شركتك المالية." : "Invest your surplus liquidity and achieve competitive Sharia-compliant returns through flexible, well-structured deposits serving your company's financial goals."}</motion.p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b0d36]">{ar ? "ما يميّز الودائع الاستثمارية المؤسسية" : "What Sets Corporate Investment Deposits Apart"}</h2>
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
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#262b80] mb-3 block">{ar ? "القيمة الاستثمارية" : "Investment Value"}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0b0d36] mb-6 leading-snug">{ar ? "سيولتك تعمل لصالح شركتك" : "Your Liquidity Working for Your Company"}</h2>
              <p className="text-slate-600 leading-relaxed mb-8">{ar ? "الودائع الاستثمارية المؤسسية من بنك بن دول تُحوِّل فائض سيولة شركتك من عبء إلى أصل منتج. بدلاً من ترك السيولة خاملة، استثمرها بشكل منظم وحقق عوائد مجزية في ظل بيئة مصرفية آمنة." : "Corporate Investment Deposits from Bin Dowal Bank transform your company's surplus liquidity from a burden into a productive asset — invest it in an organized manner and achieve rewarding returns."}</p>
              <ul className="space-y-3">{benefits.map((b, i) => (<li key={i} className="flex items-center gap-3 text-slate-700"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#262b80] text-white"><Check className="h-3.5 w-3.5" /></span>{ar ? b.ar : b.en}</li>))}</ul>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0b0d36] to-[#262b80] text-white"><TrendingUp className="h-7 w-7" /></div>
              <h3 className="mb-2 text-xl font-bold text-slate-900">{ar ? "الودائع الاستثمارية للشركات" : "Corporate Investment Deposits"}</h3>
              <p className="mb-6 text-sm text-slate-500">{ar ? "بنك بن دول للتمويل الأصغر الإسلامي" : "Bin Dowal Islamic Microfinance Bank"}</p>
              <div className="space-y-4">
                {[{ labelAr: "أقصر مدة متاحة", labelEn: "Shortest Available Term", valAr: "شهر واحد", valEn: "1 Month" }, { labelAr: "صيغة الاستثمار", labelEn: "Investment Formula", valAr: "مضاربة إسلامية", valEn: "Islamic Mudarabah" }, { labelAr: "التجديد", labelEn: "Renewal", valAr: "تلقائي أو يدوي", valEn: "Auto or Manual" }, { labelAr: "إدارة الوديعة", labelEn: "Deposit Management", valAr: "الويب بنك المؤسسي", valEn: "Corporate Web Bank" }].map((row, i) => (
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b0d36]">{ar ? "متطلبات فتح الوديعة المؤسسية" : "Corporate Deposit Opening Requirements"}</h2>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
            {requirements.map((req, i) => (<motion.div key={i} variants={fadeUp} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center"><div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#262b80] text-white text-sm font-bold">{i + 1}</div><p className="text-sm font-medium text-slate-700">{ar ? req.ar : req.en}</p></motion.div>))}
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-gradient-to-br from-[#0b0d36] via-[#262b80] to-[#0b0d36]">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-14 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/50 mb-3 block">{ar ? "آلية العمل" : "How It Works"}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">{ar ? "كيف تستثمر فائض سيولة شركتك؟" : "How to Invest Your Company's Surplus Liquidity?"}</h2>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (<motion.div key={i} variants={fadeUp} className="relative rounded-2xl bg-white/6 border border-white/10 p-6 backdrop-blur-sm">{i < steps.length - 1 && <ChevronRight className="absolute -end-3 top-1/2 hidden -translate-y-1/2 text-white/25 lg:block h-5 w-5" />}<span className="mb-4 block text-4xl font-extrabold text-white/18">{step.num}</span><h3 className="mb-2 font-semibold text-white">{ar ? step.ar : step.en}</h3><p className="text-sm leading-relaxed text-white/55">{ar ? step.descAr : step.descEn}</p></motion.div>))}
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
          <div className="max-w-2xl mx-auto"><Accordion type="single" collapsible>{faqs.map((faq, i) => (<AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-start font-medium text-slate-800 hover:text-[#262b80]">{faq.q}</AccordionTrigger><AccordionContent className="text-slate-500 leading-relaxed">{faq.a}</AccordionContent></AccordionItem>))}</Accordion></div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mx-auto max-w-3xl text-center rounded-3xl bg-gradient-to-br from-[#0b0d36] via-[#262b80] to-[#0b0d36] px-8 py-16 shadow-[0_40px_80px_rgba(7,10,30,0.3)]">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45 mb-4 block">{ar ? "ابدأ الاستثمار" : "Start Investing"}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{ar ? "حوِّل فائض سيولتك إلى عائد" : "Turn Your Surplus Liquidity into Returns"}</h2>
            <p className="text-white/65 mb-10 text-lg leading-relaxed">{ar ? "تواصل مع فريق علاقات الأعمال اليوم وابدأ في بناء خطة ودائع استثمارية مؤسسية مخصصة لشركتك." : "Contact our business relations team today and start building a customized institutional investment deposit plan for your company."}</p>
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
            {related.map((r, i) => { const Icon = r.icon; return (<motion.div key={i} variants={fadeUp}><Link href={r.href} className="group flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-6 text-center transition-all hover:-translate-y-1 hover:border-[#262b80]/30 hover:shadow-lg"><div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-600 transition-colors group-hover:bg-[#262b80] group-hover:text-white"><Icon className="h-5 w-5" /></div><h3 className="mb-1 font-semibold text-slate-800 group-hover:text-[#262b80]">{ar ? r.titleAr : r.titleEn}</h3><p className="text-xs text-slate-400">{r.descAr}</p></Link></motion.div>)})}
          </motion.div>
        </div>
      </section>
    </>
  )
}
