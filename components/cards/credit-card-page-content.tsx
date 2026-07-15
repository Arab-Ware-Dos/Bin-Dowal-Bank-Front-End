"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n-context"
import { getLocalizedHref } from "@/lib/localized-routes"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { PageHero } from "@/components/ui/page-hero"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CardMockup } from "@/components/ui/card-mockup"
import { CreditCard, Globe2, Shield, Star, Check, ChevronRight, Phone, ArrowRight, Banknote, Landmark, Wallet, Zap, BarChart3, Award } from "lucide-react"

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } } }
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }

const features = [
  { icon: Star, titleAr: "مخصصة لكبار العملاء", titleEn: "Designed for Premier Clients", descAr: "بطاقة حصرية صُمِّمت لتلبية متطلبات رجال الأعمال والعملاء ذوي الإنفاق العالي.", descEn: "Exclusive card designed to meet the requirements of business people and high-spending clients." },
  { icon: BarChart3, titleAr: "قدرة شرائية استثنائية", titleEn: "Exceptional Purchasing Power", descAr: "حدود ائتمانية مرتفعة تمنحك مرونة مالية حقيقية في معاملاتك الكبيرة.", descEn: "High credit limits offering real financial flexibility in your large transactions." },
  { icon: Globe2, titleAr: "قبول عالمي شامل", titleEn: "Comprehensive Global Acceptance", descAr: "تُقبَل في جميع المتاجر والمواقع العالمية عبر شبكة Mastercard الدولية.", descEn: "Accepted at all international merchants and websites via the global Mastercard network." },
  { icon: Shield, titleAr: "حماية شاملة للمعاملات", titleEn: "Comprehensive Transaction Protection", descAr: "نظام أمان متعدد الطبقات مع تأمين ضد الاحتيال وتنبيهات فورية.", descEn: "Multi-layer security system with fraud insurance and instant alerts." },
  { icon: Award, titleAr: "برامج المكافآت والامتيازات", titleEn: "Rewards & Privileges Programs", descAr: "اكسب نقاط مكافآت في كل معاملة واستمتع بامتيازات حصرية لحاملي البطاقة.", descEn: "Earn reward points on every transaction and enjoy exclusive cardholder privileges." },
  { icon: Zap, titleAr: "خدمة عملاء VIP", titleEn: "VIP Client Service", descAr: "خط مخصص لخدمة حاملي البطاقة الائتمانية على مدار الساعة.", descEn: "Dedicated service line for credit cardholders around the clock." },
]
const benefits = [
  { ar: "حدود ائتمانية مرتفعة حسب الملف المالي", en: "High credit limits based on financial profile" },
  { ar: "مرونة في جدولة المدفوعات", en: "Flexibility in payment scheduling" },
  { ar: "قبول في أكثر من 150 دولة", en: "Accepted in over 150 countries" },
  { ar: "برنامج مكافآت ونقاط على كل إنفاق", en: "Rewards and points program on every spend" },
  { ar: "تأمين ضد الاحتيال والسرقة", en: "Insurance against fraud and theft" },
  { ar: "متوافقة مع أحكام الشريعة الإسلامية", en: "Sharia-compliant" },
]
const useCases = [
  { titleAr: "السفر التجاري والترفيهي", titleEn: "Business & Leisure Travel", descAr: "ادفع الإقامات والرحلات والتجارب الفاخرة بثقة تامة.", descEn: "Pay for accommodation, flights, and luxury experiences with complete confidence." },
  { titleAr: "المشتريات التجارية الكبيرة", titleEn: "Large Business Purchases", descAr: "أنجِز صفقاتك التجارية الكبيرة بمرونة الائتمان المناسب.", descEn: "Complete your large business deals with appropriate credit flexibility." },
  { titleAr: "التسوق الإلكتروني الدولي", titleEn: "International Online Shopping", descAr: "تسوّق من أفخم المتاجر الدولية بأمان واطمئنان.", descEn: "Shop from the most prestigious international stores safely." },
  { titleAr: "المطاعم والفنادق الفاخرة", titleEn: "Fine Dining & Luxury Hotels", descAr: "استمتع بالضيافة الفاخرة مع بطاقة تناسب أسلوب حياتك.", descEn: "Enjoy luxury hospitality with a card that matches your lifestyle." },
]
const requirements = [
  { ar: "الهوية الوطنية سارية المفعول", en: "Valid national ID" },
  { ar: "إثبات مصدر الدخل أو السجل التجاري", en: "Income proof or commercial registration" },
  { ar: "حساب جارٍ نشط في بنك بن دول", en: "Active current account at Bin Dowal" },
  { ar: "استيفاء الحد الأدنى لمتطلبات الملف الائتماني", en: "Meeting minimum credit profile requirements" },
]
const steps = [
  { num: "01", ar: "التقديم للحصول على البطاقة", en: "Apply for the Card", descAr: "تواصل مع مدير علاقاتك أو قدّم طلبك عبر الويب بنك أو التطبيق.", descEn: "Contact your relationship manager or apply via web bank or app." },
  { num: "02", ar: "تقييم الملف الائتماني", en: "Credit Profile Assessment", descAr: "يُجري البنك تقييماً للملف الائتماني وتُحدَّد الحدود الائتمانية الملائمة.", descEn: "The bank conducts a credit profile assessment and appropriate credit limits are set." },
  { num: "03", ar: "اعتماد الطلب وإصدار البطاقة", en: "Approval & Card Issuance", descAr: "عند اعتماد الطلب تُطبَع البطاقة وتُسلَّم إليك مباشرة.", descEn: "Upon approval the card is printed and delivered directly to you." },
  { num: "04", ar: "التفعيل والاستخدام", en: "Activate & Use", descAr: "فعِّل بطاقتك عبر التطبيق أو الاتصال وابدأ في الاستفادة من امتيازاتها فوراً.", descEn: "Activate your card via app or call and immediately start benefiting from its privileges." },
]
const faqs = [
  { q: "كيف يُحدَّد الحد الائتماني للبطاقة؟", a: "يُحدَّد الحد الائتماني بناءً على الملف المالي للعميل ومستوى دخله وتاريخه الائتماني وعلاقته المصرفية مع البنك." },
  { q: "هل البطاقة الائتمانية متوافقة مع الشريعة الإسلامية؟", a: "نعم، تُدار البطاقة الائتمانية وفق صيغ إسلامية معتمدة تتجنب الفوائد الربوية المحرمة وتعمل وفق آليات موافقة شرعياً." },
  { q: "ما هي مدة السماح قبل استحقاق الدفع؟", a: "تُحدَّد مدة السماح وتواريخ الاستحقاق عند إصدار البطاقة وفق الشروط المتفق عليها مع البنك." },
  { q: "هل يمكن إضافة بطاقات مكملة لأفراد العائلة؟", a: "نعم، يمكن إصدار بطاقات مكملة لأفراد العائلة أو الموظفين المفوّضين بحدود استخدام مخصصة." },
  { q: "كيف أستبدل نقاط المكافآت؟", a: "يمكن استبدال النقاط المتراكمة بخصومات على المشتريات أو خدمات مختارة وفق برنامج المكافآت المعمول به." },
]
const related = [
  { href: "/cards/debit-card", icon: CreditCard, titleAr: "بطاقة الخصم الفوري", titleEn: "Debit Card", descAr: "للاستخدام اليومي محلياً ودولياً" },
  { href: "/cards/prepaid-card", icon: Wallet, titleAr: "بطاقة الدفع المسبق", titleEn: "Prepaid Card", descAr: "تحكم كامل في التسوق الرقمي" },
  { href: "/cards/noor-card", icon: Landmark, titleAr: "بطاقة نور", titleEn: "Noor Card", descAr: "استقلالية مالية كاملة" },
]

export function CreditCardPageContent() {
  const { locale, mode } = useI18n()
  const resolveHref = (target: string) => mode === "url" ? getLocalizedHref(target, locale) : target
  const ar = locale === "ar"
  return (
    <>
      <PageHero
        title={ar ? "البطاقة الائتمانية" : "Credit Card"}
        subtitle={ar ? "مصممة لكبار العملاء ورجال الأعمال، بطاقة تمنحك قوة شرائية ومرونة مالية استثنائية." : "Designed for premier clients and business people — a card that grants you exceptional purchasing power and financial flexibility."}
        breadcrumbs={[{ labelKey: "nav.cards", href: resolveHref("/cards") }, { labelKey: "nav.creditCards" }]}
        tagline={ar ? "البطاقات المصرفية" : "Banking Cards"}
      >
        <div className="flex flex-wrap gap-4">
          <Link href={resolveHref("/contact")} className="inline-flex items-center gap-2 rounded-full bg-[#c9a96e] px-7 py-3.5 text-sm font-bold text-[#0b0d36] shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl">{ar ? "اطلب البطاقة الآن" : "Request Card Now"}<ArrowRight className="h-4 w-4" /></Link>
          <Link href={resolveHref("/contact")} className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/18 hover:-translate-y-0.5"><Phone className="h-4 w-4" />{ar ? "تواصل معنا" : "Contact Us"}</Link>
        </div>
      </PageHero>

      {/* FEATURES */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-14 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#262b80] mb-3 block">{ar ? "مزايا البطاقة" : "Card Features"}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b0d36]">{ar ? "ما يميّز البطاقة الائتمانية" : "What Sets the Credit Card Apart"}</h2>
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

      {/* BENEFITS + USE CASES */}
      <section className="py-20 bg-slate-50/70">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#262b80] mb-3 block">{ar ? "لماذا تختارها؟" : "Why Choose It?"}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0b0d36] mb-6 leading-snug">{ar ? "بطاقة صُمِّمت للتميز" : "A Card Designed for Excellence"}</h2>
              <p className="text-slate-600 leading-relaxed mb-8">{ar ? "البطاقة الائتمانية من بنك بن دول هي الخيار الأمثل لمن يبحث عن مرونة مالية حقيقية وامتيازات استثنائية في حياته اليومية التجارية والشخصية." : "The Credit Card from Bin Dowal Bank is the ideal choice for those seeking real financial flexibility and exceptional privileges in their daily business and personal life."}</p>
              <ul className="space-y-3 mb-10">{benefits.map((b, i) => (<li key={i} className="flex items-center gap-3 text-slate-700"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#262b80] text-white"><Check className="h-3.5 w-3.5" /></span>{ar ? b.ar : b.en}</li>))}</ul>
            </motion.div>
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {useCases.map((u, i) => (<motion.div key={i} variants={fadeUp} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><h3 className="font-semibold text-slate-800 mb-2">{ar ? u.titleAr : u.titleEn}</h3><p className="text-sm text-slate-500 leading-relaxed">{ar ? u.descAr : u.descEn}</p></motion.div>))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ELIGIBILITY */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-14 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#262b80] mb-3 block">{ar ? "المتطلبات" : "Requirements"}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b0d36]">{ar ? "شروط ووثائق الحصول على البطاقة" : "Eligibility & Documents"}</h2>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
            {requirements.map((req, i) => (<motion.div key={i} variants={fadeUp} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center"><div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#262b80] text-white text-sm font-bold">{i + 1}</div><p className="text-sm font-medium text-slate-700">{ar ? req.ar : req.en}</p></motion.div>))}
          </motion.div>
        </div>
      </section>

      {/* HOW TO GET */}
      <section className="py-20 bg-gradient-to-br from-[#0b0d36] via-[#262b80] to-[#0b0d36]">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-14 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/50 mb-3 block">{ar ? "خطوات بسيطة" : "Simple Steps"}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">{ar ? "كيف تحصل على بطاقتك؟" : "How to Get Your Card?"}</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b0d36]">{ar ? "الأسئلة الشائعة حول البطاقة الائتمانية" : "Common Questions About the Credit Card"}</h2>
          </motion.div>
          <div className="max-w-2xl mx-auto"><Accordion type="single" collapsible>{faqs.map((faq, i) => (<AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-start font-medium text-slate-800 hover:text-[#262b80]">{faq.q}</AccordionTrigger><AccordionContent className="text-slate-500 leading-relaxed">{faq.a}</AccordionContent></AccordionItem>))}</Accordion></div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mx-auto max-w-3xl text-center rounded-3xl bg-gradient-to-br from-[#0b0d36] via-[#262b80] to-[#0b0d36] px-8 py-16 shadow-[0_40px_80px_rgba(7,10,30,0.4)]">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c9a96e]/70 mb-4 block">{ar ? "ابدأ الآن" : "Get Started"}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{ar ? "اطلب بطاقتك الائتمانية اليوم" : "Request Your Credit Card Today"}</h2>
            <p className="text-white/65 mb-10 text-lg leading-relaxed">{ar ? "تواصل مع فريق خدمة العملاء المخصص وابدأ رحلتك نحو مرونة مالية استثنائية." : "Contact the dedicated client services team and begin your journey to exceptional financial flexibility."}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href={resolveHref("/contact")} className="inline-flex items-center gap-2 rounded-full bg-[#c9a96e] px-7 py-3.5 text-sm font-semibold text-[#0b0d36] transition-all hover:-translate-y-0.5 hover:shadow-xl">{ar ? "اطلب البطاقة الآن" : "Request Card Now"}<ArrowRight className="h-4 w-4" /></Link>
              <Link href={resolveHref("/branches")} className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/18 hover:-translate-y-0.5">{ar ? "ابحث عن فرع" : "Find a Branch"}</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* RELATED */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-10 text-center"><h2 className="text-2xl font-bold text-slate-800">{ar ? "بطاقات أخرى قد تناسبك" : "Other Cards You May Like"}</h2></motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
            {related.map((r, i) => { const Icon = r.icon; return (<motion.div key={i} variants={fadeUp}><Link href={resolveHref(r.href)} className="group flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-6 text-center transition-all hover:-translate-y-1 hover:border-[#262b80]/30 hover:shadow-lg"><div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-600 transition-colors group-hover:bg-[#262b80] group-hover:text-white"><Icon className="h-5 w-5" /></div><h3 className="mb-1 font-semibold text-slate-800 group-hover:text-[#262b80]">{ar ? r.titleAr : r.titleEn}</h3><p className="text-xs text-slate-400">{r.descAr}</p></Link></motion.div>)})}
          </motion.div>
        </div>
      </section>
    </>
  )
}
