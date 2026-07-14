"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n-context"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FileText, Shield, Check, ChevronRight, Phone, ArrowRight, Building2, TrendingUp, Globe2, Scale, ClipboardCheck, BadgeCheck, Handshake, Clock } from "lucide-react"

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } } }
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }

const features = [
  { icon: BadgeCheck, titleAr: "ضمان الالتزامات التعاقدية", titleEn: "Contractual Commitment Guarantee", descAr: "نُصدِر خطابات ضمان تجارية تُثبِت التزام شركتك بالعقود والمتطلبات التعاقدية أمام الأطراف الثالثة.", descEn: "We issue commercial guarantee letters proving your company's commitment to contracts and contractual requirements before third parties." },
  { icon: Handshake, titleAr: "تعزيز مصداقية الشركة", titleEn: "Enhancing Company Credibility", descAr: "أداة إثبات الجدارة المالية أمام العملاء والشركاء والجهات الحكومية.", descEn: "A financial credibility proof tool before clients, partners, and government entities." },
  { icon: Scale, titleAr: "أنواع متعددة من الضمانات", titleEn: "Multiple Guarantee Types", descAr: "ضمانات الأداء، الدفع، المناقصات، والضمانات الجمركية والمصرفية حسب حاجة شركتك.", descEn: "Performance, payment, tender, and customs and banking guarantees based on your company's needs." },
  { icon: Shield, titleAr: "اعتماد مؤسسي موثوق", titleEn: "Trusted Institutional Credibility", descAr: "تحمل خطاباتنا توقيع البنك المؤسسي ومراجعة شرعية، مما يرفع مستوى القبول لدى الأطراف المتعاملة.", descEn: "Our letters bear the institutional bank signature and Sharia review, raising acceptance levels among dealing parties." },
  { icon: ClipboardCheck, titleAr: "إجراءات إصدار مبسّطة", titleEn: "Simplified Issuance Procedures", descAr: "نسعى إلى تقديم عملية إصدار سلسة وسريعة تلبّي مواعيد تعاملاتك التجارية.", descEn: "We strive to provide a smooth and fast issuance process to meet your commercial transaction deadlines." },
  { icon: Clock, titleAr: "سرعة الاستجابة", titleEn: "Swift Response", descAr: "فريق متخصص يتابع طلباتك بأعلى مستويات الكفاءة ويوفر لك كل الدعم اللازم.", descEn: "A specialized team follows your requests with the highest levels of efficiency and provides all necessary support." },
]
const benefits = [
  { ar: "تعزيز ثقة الأطراف الأخرى في الوفاء بالالتزامات", en: "Enhancing third-party confidence in meeting obligations" },
  { ar: "المشاركة في المناقصات والعطاءات الحكومية والخاصة", en: "Participating in government and private tenders" },
  { ar: "دعم العقود التجارية والبناء والمقاولات", en: "Supporting commercial, construction, and contracting agreements" },
  { ar: "ضمان الدفع في العمليات الاستيرادية والتصديرية", en: "Payment guarantee in import and export operations" },
  { ar: "إصدار بأنواع الضمانات المختلفة وفق الاحتياج", en: "Issuance of various guarantee types as needed" },
  { ar: "إجراءات مبسّطة ومتابعة احترافية متخصصة", en: "Simplified procedures and specialized professional follow-up" },
]
const requirements = [
  { ar: "السجل التجاري والترخيص المهني ساريا المفعول", en: "Valid commercial registration and professional license" },
  { ar: "الوثيقة التجارية المطلوب الضمان لأجلها", en: "Commercial document requiring the guarantee" },
  { ar: "تغطية نقدية أو ضمانات بديلة معتمدة", en: "Cash coverage or approved alternative collateral" },
  { ar: "طلب إصدار خطاب الضمان موقّعاً من المفوّض", en: "Guarantee letter issuance request signed by authorized person" },
]
const steps = [
  { num: "01", ar: "تحديد نوع الضمان المطلوب", en: "Identify Required Guarantee Type", descAr: "حدد نوع الضمان (أداء، دفع، مناقصة..) ومعطياته مع مدير علاقاتك.", descEn: "Identify the guarantee type (performance, payment, tender..) and its details with your relationship manager." },
  { num: "02", ar: "تقديم الطلب والوثائق", en: "Submit Request & Documents", descAr: "قدّم طلب الإصدار مع الوثائق التجارية والمستندات الداعمة.", descEn: "Submit the issuance request with commercial documents and supporting materials." },
  { num: "03", ar: "مراجعة واعتماد الطلب", en: "Review & Approval", descAr: "يراجع فريقنا الطلب ويتحقق من اكتمال الشروط ثم يصدر الاعتماد.", descEn: "Our team reviews the request, verifies all conditions are met, then issues approval." },
  { num: "04", ar: "إصدار خطاب الضمان", en: "Issue Guarantee Letter", descAr: "يُصدَر خطاب الضمان الرسمي ويُسلَّم للجهة المستفيدة وفق المتطلبات.", descEn: "The official guarantee letter is issued and delivered to the beneficiary entity per requirements." },
]
const faqs = [
  { q: "ما هي أنواع خطابات الضمان التي يُصدِرها البنك؟", a: "يُصدِر البنك خطابات ضمان الأداء، وضمان الدفع، وضمان المناقصات، وضمان الدفعة المقدمة، وخطابات الضمان الجمركية وغيرها وفق متطلبات العملاء." },
  { q: "هل يمكن إصدار خطابات ضمان لجهات حكومية؟", a: "نعم، يُصدِر البنك خطابات ضمان مقبولة لدى الجهات الحكومية وشبه الحكومية وفق المتطلبات المعتمدة." },
  { q: "ما هي التغطية المطلوبة لإصدار خطاب الضمان؟", a: "يُقيَّم طلب الإصدار بناءً على الملاءة المالية للشركة وتاريخها الائتماني. قد تُطلَب تغطية نقدية كاملة أو جزئية أو ضمانات بديلة معتمدة." },
  { q: "كم تستغرق عملية إصدار خطاب الضمان؟", a: "تتفاوت المدة حسب نوع الضمان واكتمال الوثائق؛ نسعى إلى إنجاز الطلبات في أسرع وقت ممكن لمواكبة متطلبات أعمالك." },
  { q: "هل خطابات الضمان متوافقة مع الشريعة الإسلامية؟", a: "نعم، تُصدَر خطابات الضمان وفق الصيغ الإسلامية المعتمدة من هيئة الرقابة الشرعية للبنك." },
]
const related = [
  { href: "/business/corporate-current-account", icon: Building2, titleAr: "الحساب الجاري للشركات", titleEn: "Corporate Current Account", descAr: "إدارة التدفقات النقدية" },
  { href: "/business/corporate-investment-deposits", icon: TrendingUp, titleAr: "الودائع الاستثمارية", titleEn: "Investment Deposits", descAr: "استثمر فائض السيولة" },
  { href: "/business/swift-transfers", icon: Globe2, titleAr: "حوالات السويفت", titleEn: "SWIFT Transfers", descAr: "تحويلات دولية لمبالغ كبيرة" },
]

export default function BankGuaranteesPage() {
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
          <Breadcrumbs items={[{ labelKey: "nav.businessBanking", href: "/business-banking" }, { labelKey: "nav.bankGuarantees" }]} />
          <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-2xl mt-6">
            <motion.span variants={fadeUp} className="inline-block text-xs font-semibold uppercase tracking-[0.22em] text-white/50 mb-4">{ar ? "بن دول أعمال" : "Business Banking"}</motion.span>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">{ar ? "خطابات الضمان" : "Bank Guarantees"}</motion.h1>
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-white/75 leading-relaxed mb-10">{ar ? "نوفر لعملائنا إمكانية استخراج خطابات الضمان، لتلبية متطلبات التعاملات التجارية والمصرفية وضمان الالتزامات التعاقدية بكل سهولة وثقة." : "We provide our clients with the ability to obtain bank guarantee letters to meet commercial and banking transaction requirements and ensure contractual commitments with ease and confidence."}</motion.p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b0d36]">{ar ? "ما يميّز خطابات الضمان" : "What Sets Bank Guarantees Apart"}</h2>
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
              <h2 className="text-3xl md:text-4xl font-bold text-[#0b0d36] mb-6 leading-snug">{ar ? "أداة الثقة في عالم الأعمال" : "The Trust Tool in the Business World"}</h2>
              <p className="text-slate-600 leading-relaxed mb-8">{ar ? "خطابات الضمان من بنك بن دول تُرسِّخ ثقة شركائك وعملائك في التزاماتك التجارية. سواء كنت تتقدم لمناقصة، أو تُبرم عقداً ضخماً، أو تستورد بضائع — نضمن لك تغطية احترافية تعزز مكانتك." : "Bank guarantees from Bin Dowal Bank cement your partners' and clients' confidence in your commercial commitments — whether bidding for a tender, concluding a major contract, or importing goods."}</p>
              <ul className="space-y-3">{benefits.map((b, i) => (<li key={i} className="flex items-center gap-3 text-slate-700"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#262b80] text-white"><Check className="h-3.5 w-3.5" /></span>{ar ? b.ar : b.en}</li>))}</ul>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0b0d36] to-[#262b80] text-white"><FileText className="h-7 w-7" /></div>
              <h3 className="mb-2 text-xl font-bold text-slate-900">{ar ? "خطابات الضمان" : "Bank Guarantees"}</h3>
              <p className="mb-6 text-sm text-slate-500">{ar ? "بنك بن دول للتمويل الأصغر الإسلامي" : "Bin Dowal Islamic Microfinance Bank"}</p>
              <div className="space-y-4">
                {[{ labelAr: "أنواع الضمانات", labelEn: "Guarantee Types", valAr: "الأداء، الدفع، المناقصات", valEn: "Performance, Payment, Tender" }, { labelAr: "الجهات المستفيدة", labelEn: "Beneficiary Entities", valAr: "حكومية وخاصة", valEn: "Government & Private" }, { labelAr: "التوافق الشرعي", labelEn: "Sharia Compliance", valAr: "معتمد شرعياً", valEn: "Sharia Certified" }, { labelAr: "خدمة العملاء", labelEn: "Client Service", valAr: "مدير علاقات مخصص", valEn: "Dedicated Relationship Manager" }].map((row, i) => (
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b0d36]">{ar ? "متطلبات إصدار خطاب الضمان" : "Bank Guarantee Issuance Requirements"}</h2>
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
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/50 mb-3 block">{ar ? "آلية الإصدار" : "Issuance Process"}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">{ar ? "كيف تحصل على خطاب الضمان؟" : "How to Obtain a Bank Guarantee Letter?"}</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b0d36]">{ar ? "الأسئلة الشائعة حول خطابات الضمان" : "Common Questions About Bank Guarantees"}</h2>
          </motion.div>
          <div className="max-w-2xl mx-auto"><Accordion type="single" collapsible>{faqs.map((faq, i) => (<AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-start font-medium text-slate-800 hover:text-[#262b80]">{faq.q}</AccordionTrigger><AccordionContent className="text-slate-500 leading-relaxed">{faq.a}</AccordionContent></AccordionItem>))}</Accordion></div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mx-auto max-w-3xl text-center rounded-3xl bg-gradient-to-br from-[#0b0d36] via-[#262b80] to-[#0b0d36] px-8 py-16 shadow-[0_40px_80px_rgba(7,10,30,0.3)]">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45 mb-4 block">{ar ? "ابدأ الآن" : "Get Started"}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{ar ? "عزِّز ثقة شركائك بخطاب ضمان رسمي" : "Strengthen Partner Confidence with an Official Guarantee Letter"}</h2>
            <p className="text-white/65 mb-10 text-lg leading-relaxed">{ar ? "تواصل مع فريق علاقات الأعمال اليوم واحصل على خطاب الضمان الذي يحتاجه عملك." : "Contact our business relations team today and obtain the guarantee letter your business needs."}</p>
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
