"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n-context"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Globe2, Shield, Check, ChevronRight, Phone, ArrowRight, Building2, TrendingUp, FileText, Zap, Lock, Clock, BarChart3, ArrowLeftRight } from "lucide-react"

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } } }
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }

const features = [
  { icon: Globe2, titleAr: "شبكة SWIFT العالمية", titleEn: "Global SWIFT Network", descAr: "الوصول إلى الشبكة المصرفية الدولية SWIFT لإرسال واستقبال المدفوعات من وإلى أي بنك في العالم.", descEn: "Access to the international SWIFT banking network to send and receive payments to/from any bank worldwide." },
  { icon: Zap, titleAr: "سرعة التنفيذ", titleEn: "Execution Speed", descAr: "معالجة طلبات التحويل الدولي بكفاءة عالية وتتبع حالة الحوالة في الوقت الفعلي.", descEn: "Processing international transfer requests with high efficiency and real-time status tracking." },
  { icon: Shield, titleAr: "أمان ومطابقة دولية", titleEn: "International Security & Compliance", descAr: "جميع حوالاتنا تلتزم بمعايير الامتثال الدولية ومكافحة غسل الأموال.", descEn: "All our transfers comply with international compliance standards and anti-money laundering regulations." },
  { icon: ArrowLeftRight, titleAr: "دعم العملات المتعددة", titleEn: "Multi-Currency Support", descAr: "إرسال واستقبال التحويلات بمختلف العملات الرئيسية العالمية بأسعار صرف تنافسية.", descEn: "Send and receive transfers in various major global currencies at competitive exchange rates." },
  { icon: BarChart3, titleAr: "متابعة الحوالات آنياً", titleEn: "Real-time Transfer Tracking", descAr: "اعرف حالة تحويلك الدولي في أي وقت من خلال نظام متابعة مباشر عبر الويب بنك.", descEn: "Know your international transfer status anytime through a direct tracking system via web bank." },
  { icon: Clock, titleAr: "دعم العمليات الكبيرة", titleEn: "Large-Value Operations Support", descAr: "نوفر الدعم الكامل لتحويل المبالغ الكبيرة مع خدمة مخصصة بإجراءات احترافية.", descEn: "We provide full support for large-value transfers with dedicated service and professional procedures." },
]
const benefits = [
  { ar: "ربط شركتك بالأسواق المالية الدولية", en: "Connecting your company to international financial markets" },
  { ar: "تحويل واستقبال مبالغ كبيرة بكفاءة وأمان", en: "Efficient and secure transfer and receipt of large amounts" },
  { ar: "دعم العمليات التجارية عبر الحدود", en: "Supporting cross-border commercial operations" },
  { ar: "أسعار صرف تنافسية للعملات الرئيسية", en: "Competitive exchange rates for major currencies" },
  { ar: "تتبع الحوالة في الوقت الفعلي", en: "Real-time transfer tracking" },
  { ar: "امتثال كامل للأنظمة الدولية", en: "Full compliance with international regulations" },
]
const requirements = [
  { ar: "حساب جارٍ نشط في بنك بن دول", en: "Active current account at Bin Dowal Bank" },
  { ar: "وثائق المستفيد (بيانات البنك المحوَّل له)", en: "Beneficiary documents (receiving bank details)" },
  { ar: "الغرض من التحويل مع المستندات الداعمة", en: "Transfer purpose with supporting documents" },
  { ar: "طلب التحويل الدولي موقّعاً من المفوّض", en: "International transfer request signed by authorized person" },
]
const steps = [
  { num: "01", ar: "تقديم طلب التحويل", en: "Submit Transfer Request", descAr: "قدّم طلبك عبر الويب بنك أو من خلال مدير علاقاتك مع تفاصيل المستفيد.", descEn: "Submit your request via web bank or through your relationship manager with beneficiary details." },
  { num: "02", ar: "مراجعة الامتثال", en: "Compliance Review", descAr: "يراجع فريقنا المعاملة للتحقق من الامتثال للمعايير الدولية ومكافحة غسل الأموال.", descEn: "Our team reviews the transaction to verify compliance with international standards and anti-money laundering rules." },
  { num: "03", ar: "تنفيذ الحوالة", en: "Transfer Execution", descAr: "تُنفَّذ الحوالة عبر شبكة SWIFT وترسل رسالة تأكيد فورية.", descEn: "The transfer is executed via the SWIFT network and an immediate confirmation message is sent." },
  { num: "04", ar: "التسليم والتأكيد", en: "Delivery & Confirmation", descAr: "استلم إشعار التسليم وتابع حالة الحوالة حتى وصولها للمستفيد.", descEn: "Receive delivery notification and track the transfer status until it reaches the beneficiary." },
]
const faqs = [
  { q: "كم تستغرق حوالات SWIFT لتصل إلى المستفيد؟", a: "تستغرق حوالات SWIFT في الغالب من يوم إلى ثلاثة أيام عمل بحسب البنك المستفيد والدولة المحوَّل إليها." },
  { q: "هل توجد حدود لمبالغ التحويل عبر SWIFT؟", a: "لا توجد حدود دنيا محددة مسبقاً، غير أن المبالغ الكبيرة تستلزم إجراءات امتثال إضافية وفق اللوائح الدولية." },
  { q: "ما هي المستندات المطلوبة لتحويل مبالغ كبيرة؟", a: "تُطلَب مستندات تثبت الغرض التجاري للتحويل كعقود البيع أو فواتير الشراء أو خطابات الاعتماد حسب طبيعة المعاملة." },
  { q: "هل يمكن تتبع الحوالة الدولية بعد إرسالها؟", a: "نعم، يمكنك متابعة حالة حوالتك من خلال الويب بنك أو بالتواصل مع مدير علاقاتك للحصول على رقم مرجعي للتتبع." },
  { q: "ما هي العملات المدعومة في حوالات SWIFT؟", a: "يدعم البنك التحويل بمعظم العملات الرئيسية كالدولار الأمريكي واليورو والجنيه الإسترليني، وغيرها وفق الاتفاقيات القائمة." },
]
const related = [
  { href: "/business/corporate-current-account", icon: Building2, titleAr: "الحساب الجاري للشركات", titleEn: "Corporate Current Account", descAr: "إدارة التدفقات النقدية" },
  { href: "/business/corporate-investment-deposits", icon: TrendingUp, titleAr: "الودائع الاستثمارية", titleEn: "Investment Deposits", descAr: "استثمر فائض السيولة" },
  { href: "/business/bank-guarantees", icon: FileText, titleAr: "خطابات الضمان", titleEn: "Bank Guarantees", descAr: "ضمانات تجارية موثوقة" },
]

export default function SwiftTransfersPage() {
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
          <Breadcrumbs items={[{ labelKey: "nav.businessBanking", href: "/business-banking" }, { labelKey: "nav.swiftTransfers" }]} />
          <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-2xl mt-6">
            <motion.span variants={fadeUp} className="inline-block text-xs font-semibold uppercase tracking-[0.22em] text-white/50 mb-4">{ar ? "بن دول أعمال" : "Business Banking"}</motion.span>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">{ar ? "حوالات السويفت (SWIFT)" : "SWIFT Transfers"}</motion.h1>
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-white/75 leading-relaxed mb-10">{ar ? "بوابتك لتحويل واستقبال المبالغ الكبيرة حول العالم بأمان وسرعة عبر شبكة SWIFT الدولية." : "Your gateway to transferring and receiving large amounts around the world securely and swiftly via the international SWIFT network."}</motion.p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b0d36]">{ar ? "ما يميّز حوالات السويفت" : "What Sets SWIFT Transfers Apart"}</h2>
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
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#262b80] mb-3 block">{ar ? "القيمة التجارية" : "Commercial Value"}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0b0d36] mb-6 leading-snug">{ar ? "اتصال مباشر بالأسواق المالية العالمية" : "Direct Connection to Global Financial Markets"}</h2>
              <p className="text-slate-600 leading-relaxed mb-8">{ar ? "حوالات SWIFT من بنك بن دول تفتح أمام شركتك أبواب التجارة الدولية بثقة. سواء كنت تُغطي التزامات تجارية أو تدير دفعات دولية، نضمن لك تنفيذاً سريعاً وآمناً ومعتمداً دولياً." : "SWIFT transfers from Bin Dowal Bank open the doors of international trade for your company with confidence — ensuring fast, secure, and internationally certified execution."}</p>
              <ul className="space-y-3">{benefits.map((b, i) => (<li key={i} className="flex items-center gap-3 text-slate-700"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#262b80] text-white"><Check className="h-3.5 w-3.5" /></span>{ar ? b.ar : b.en}</li>))}</ul>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0b0d36] to-[#262b80] text-white"><Globe2 className="h-7 w-7" /></div>
              <h3 className="mb-2 text-xl font-bold text-slate-900">{ar ? "حوالات السويفت (SWIFT)" : "SWIFT Transfers"}</h3>
              <p className="mb-6 text-sm text-slate-500">{ar ? "بنك بن دول للتمويل الأصغر الإسلامي" : "Bin Dowal Islamic Microfinance Bank"}</p>
              <div className="space-y-4">
                {[{ labelAr: "شبكة التحويل", labelEn: "Transfer Network", valAr: "SWIFT الدولية", valEn: "International SWIFT" }, { labelAr: "مدة التنفيذ", labelEn: "Execution Time", valAr: "1-3 أيام عمل", valEn: "1-3 Business Days" }, { labelAr: "العملات المدعومة", labelEn: "Supported Currencies", valAr: "العملات الرئيسية", valEn: "Major Currencies" }, { labelAr: "الامتثال", labelEn: "Compliance", valAr: "معايير AML الدولية", valEn: "International AML" }].map((row, i) => (
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b0d36]">{ar ? "متطلبات خدمة حوالات SWIFT" : "SWIFT Transfer Service Requirements"}</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white">{ar ? "كيف تُرسِل حوالة دولية؟" : "How to Send an International Transfer?"}</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b0d36]">{ar ? "الأسئلة الشائعة حول حوالات SWIFT" : "Common Questions About SWIFT Transfers"}</h2>
          </motion.div>
          <div className="max-w-2xl mx-auto"><Accordion type="single" collapsible>{faqs.map((faq, i) => (<AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-start font-medium text-slate-800 hover:text-[#262b80]">{faq.q}</AccordionTrigger><AccordionContent className="text-slate-500 leading-relaxed">{faq.a}</AccordionContent></AccordionItem>))}</Accordion></div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mx-auto max-w-3xl text-center rounded-3xl bg-gradient-to-br from-[#0b0d36] via-[#262b80] to-[#0b0d36] px-8 py-16 shadow-[0_40px_80px_rgba(7,10,30,0.3)]">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45 mb-4 block">{ar ? "ابدأ الآن" : "Get Started"}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{ar ? "حوِّل أموالك دولياً بثقة" : "Transfer Your Funds Internationally with Confidence"}</h2>
            <p className="text-white/65 mb-10 text-lg leading-relaxed">{ar ? "تواصل مع فريق علاقات الأعمال وابدأ في تفعيل خدمة حوالات SWIFT لشركتك اليوم." : "Contact our business relations team and start activating SWIFT transfer services for your company today."}</p>
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
