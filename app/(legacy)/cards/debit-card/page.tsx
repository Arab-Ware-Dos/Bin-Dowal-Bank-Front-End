"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n-context"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { PageHero } from "@/components/ui/page-hero"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CardMockup } from "@/components/ui/card-mockup"
import { CreditCard, Globe2, Shield, Smartphone, Check, ChevronRight, Phone, ArrowRight, Banknote, Landmark, Wallet, ShoppingBag, Building2, Zap } from "lucide-react"

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } } }
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }

const features = [
  { icon: Globe2, titleAr: "قبول عالمي عبر Mastercard", titleEn: "Global Mastercard Acceptance", descAr: "تُقبَل في ملايين المتاجر والمواقع الإلكترونية حول العالم عبر شبكة Mastercard الدولية.", descEn: "Accepted at millions of merchants and websites worldwide via the international Mastercard network." },
  { icon: CreditCard, titleAr: "سحب نقدي من الصرافات الآلية", titleEn: "ATM Cash Withdrawal", descAr: "سُحب نقدي آمن من أي صراف آلي مدعوم بشبكة Mastercard في مختلف أنحاء العالم.", descEn: "Secure cash withdrawal from any ATM supported by the Mastercard network worldwide." },
  { icon: Shield, titleAr: "حماية متقدمة في كل معاملة", titleEn: "Advanced Protection Per Transaction", descAr: "تقنية OTP وتنبيهات رسائل قصيرة فورية تضمن الأمان الكامل في كل عملية شراء.", descEn: "OTP technology and instant SMS alerts ensure full security on every purchase." },
  { icon: Smartphone, titleAr: "إدارة البطاقة عبر التطبيق", titleEn: "Card Management via App", descAr: "تفعيل وتجميد البطاقة، وتغيير الحدود، ومتابعة المعاملات في الوقت الفعلي.", descEn: "Activate or freeze the card, change limits, and track transactions in real time." },
  { icon: Zap, titleAr: "دفع مباشر بالنقر للدفع", titleEn: "Contactless Tap-to-Pay", descAr: "ادفع بلمسة سريعة عبر تقنية NFC في المتاجر المدعومة دون الحاجة لإدخال الرمز.", descEn: "Pay with a quick tap via NFC technology at supported merchants without PIN entry." },
  { icon: ShoppingBag, titleAr: "بدون فوائد — متوافقة مع الشريعة", titleEn: "Interest-Free — Sharia-Compliant", descAr: "يُخصم المبلغ فوراً من رصيد حسابك دون أي فوائد، وفق أحكام الشريعة الإسلامية.", descEn: "The amount is immediately deducted from your account balance with no interest, as per Islamic Sharia." },
]
const benefits = [
  { ar: "مقبولة في أكثر من 150 دولة حول العالم", en: "Accepted in over 150 countries worldwide" },
  { ar: "لا رسوم إصدار — بطاقة مجانية مع الحساب", en: "No issuance fee — free card with account" },
  { ar: "رسائل SMS فورية لكل معاملة", en: "Instant SMS for every transaction" },
  { ar: "سحب نقدي محلي ودولي", en: "Local and international cash withdrawal" },
  { ar: "إمكانية تعيين حدود إنفاق يومية", en: "Daily spending limit setting option" },
  { ar: "متوافقة مع Apple Pay وGoogle Pay", en: "Compatible with Apple Pay and Google Pay" },
]
const useCases = [
  { titleAr: "التسوق اليومي", titleEn: "Daily Shopping", descAr: "استخدمها في محلات السوبرماركت والمطاعم ومحطات الوقود بأمان تام.", descEn: "Use it at supermarkets, restaurants, and fuel stations with complete security." },
  { titleAr: "التسوق الإلكتروني", titleEn: "Online Shopping", descAr: "تسوّق من المتاجر الإلكترونية المحلية والدولية بثقة وحماية OTP.", descEn: "Shop from local and international online stores with confidence and OTP protection." },
  { titleAr: "استخدام الصرافات الآلية", titleEn: "ATM Usage", descAr: "سحب نقدي متى احتجت من أي صراف آلي في أي مكان.", descEn: "Cash withdrawal whenever you need it from any ATM anywhere." },
  { titleAr: "السفر والتنقل", titleEn: "Travel & Mobility", descAr: "مصاحبتك المثالية في السفر مع قبول عالمي دون رسوم مزعجة.", descEn: "Your ideal travel companion with global acceptance." },
]
const requirements = [
  { ar: "الهوية الوطنية سارية المفعول", en: "Valid national ID" },
  { ar: "حساب جارٍ نشط في بنك بن دول", en: "Active current account at Bin Dowal" },
  { ar: "طلب إصدار البطاقة عبر التطبيق أو الفرع", en: "Card issuance request via app or branch" },
  { ar: "رقم هاتف جوال مسجل", en: "Registered mobile number" },
]
const steps = [
  { num: "01", ar: "قدّم الطلب", en: "Apply", descAr: "اطلب البطاقة عبر تطبيق الجوال أو في أي فرع من فروع البنك.", descEn: "Request the card via the mobile app or at any bank branch." },
  { num: "02", ar: "التحقق والاعتماد", en: "Verify & Approve", descAr: "يُتحقق من بياناتك ويُعتمد الطلب ويُجهَّز طباعة البطاقة.", descEn: "Your details are verified, the request approved, and the card prepared for printing." },
  { num: "03", ar: "استلام البطاقة", en: "Receive Card", descAr: "تُسلَّم البطاقة للفرع أو تُرسَل إلى عنوانك وفق خياراتك.", descEn: "The card is delivered to the branch or sent to your address per your preference." },
  { num: "04", ar: "التفعيل والاستخدام", en: "Activate & Use", descAr: "فعِّل بطاقتك فوراً عبر التطبيق وابدأ في التسوق والسحب.", descEn: "Activate your card immediately via the app and start shopping and withdrawing." },
]
const faqs = [
  { q: "هل بطاقة الخصم الفوري مجانية؟", a: "يُصدَر البنك بطاقة الخصم بدون رسوم إصدار مع فتح الحساب الجاري، مع قد تُطبَّق رسوم رمزية سنوية للبطاقة الدولية." },
  { q: "كيف أحمي بطاقتي في حالة السرقة أو الفقدان؟", a: "يمكنك تجميد البطاقة فوراً عبر تطبيق الجوال، أو الاتصال بمركز خدمة العملاء على مدار الساعة." },
  { q: "ما هو الحد الأقصى للسحب النقدي اليومي؟", a: "تُحدَّد حدود السحب النقدي اليومية وفق نوع الحساب والاتفاق مع البنك، ويمكن تعديلها عبر التطبيق." },
  { q: "هل يمكن استخدام البطاقة لعمليات الدفع الإلكتروني؟", a: "نعم، تُقبَل بطاقة الخصم الفوري في جميع مواقع التسوق الإلكتروني الداعمة لشبكة Mastercard." },
  { q: "هل هناك رسوم على المعاملات الدولية؟", a: "قد تُطبَّق رسوم تحويل عملة معيارية على المعاملات المنجزة بعملات غير المحلية، تبعاً للشروط المتفق عليها." },
]
const related = [
  { href: "/cards/credit-card", icon: Banknote, titleAr: "البطاقة الائتمانية", titleEn: "Credit Card", descAr: "قوة شرائية لكبار العملاء" },
  { href: "/cards/prepaid-card", icon: Wallet, titleAr: "بطاقة الدفع المسبق", titleEn: "Prepaid Card", descAr: "تحكم كامل في التسوق الرقمي" },
  { href: "/cards/noor-card", icon: Landmark, titleAr: "بطاقة نور", titleEn: "Noor Card", descAr: "استقلالية مالية كاملة" },
]

export default function DebitCardPage() {
  const { locale } = useI18n()
  const ar = locale === "ar"
  return (
    <>
      <PageHero
        title={ar ? "بطاقة الخصم الفوري" : "Debit Card"}
        subtitle={ar ? "تسوق، واسحب نقداً بأمان من ملايين المتاجر والصرافات الآلية حول العالم عبر شبكة Mastercard العالمية." : "Shop and withdraw cash safely from millions of merchants and ATMs worldwide via the global Mastercard network."}
        breadcrumbs={[{ labelKey: "nav.cards", href: "/cards" }, { labelKey: "nav.debitCards" }]}
        tagline={ar ? "البطاقات المصرفية" : "Banking Cards"}
      >
        <div className="flex flex-wrap gap-4">
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#262b80] shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl">{ar ? "اطلب البطاقة الآن" : "Request Card Now"}<ArrowRight className="h-4 w-4" /></Link>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/18 hover:-translate-y-0.5"><Phone className="h-4 w-4" />{ar ? "تواصل معنا" : "Contact Us"}</Link>
        </div>
      </PageHero>

      {/* FEATURES */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-14 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#262b80] mb-3 block">{ar ? "مزايا البطاقة" : "Card Features"}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b0d36]">{ar ? "ما يميّز بطاقة الخصم الفوري" : "What Sets the Debit Card Apart"}</h2>
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
              <h2 className="text-3xl md:text-4xl font-bold text-[#0b0d36] mb-6 leading-snug">{ar ? "رفيقك اليومي في كل مكان" : "Your Daily Companion Everywhere"}</h2>
              <p className="text-slate-600 leading-relaxed mb-8">{ar ? "بطاقة الخصم الفوري من بنك بن دول هي الأداة الأمثل لإدارة إنفاقك اليومي بطريقة آمنة وذكية عبر شبكة Mastercard العالمية." : "Bin Dowal's Debit Card is the ideal tool to manage your daily spending safely and smartly via the global Mastercard network."}</p>
              <ul className="space-y-3 mb-10">{benefits.map((b, i) => (<li key={i} className="flex items-center gap-3 text-slate-700"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#262b80] text-white"><Check className="h-3.5 w-3.5" /></span>{ar ? b.ar : b.en}</li>))}</ul>
            </motion.div>
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {useCases.map((u, i) => (
                <motion.div key={i} variants={fadeUp} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-800 mb-2">{ar ? u.titleAr : u.titleEn}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{ar ? u.descAr : u.descEn}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ELIGIBILITY */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-14 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#262b80] mb-3 block">{ar ? "المتطلبات" : "Requirements"}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b0d36]">{ar ? "شروط ووثائق الحصول على البطاقة" : "Card Eligibility & Documents"}</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b0d36]">{ar ? "الأسئلة الشائعة حول بطاقة الخصم الفوري" : "Common Questions About the Debit Card"}</h2>
          </motion.div>
          <div className="max-w-2xl mx-auto"><Accordion type="single" collapsible>{faqs.map((faq, i) => (<AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-start font-medium text-slate-800 hover:text-[#262b80]">{faq.q}</AccordionTrigger><AccordionContent className="text-slate-500 leading-relaxed">{faq.a}</AccordionContent></AccordionItem>))}</Accordion></div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mx-auto max-w-3xl text-center rounded-3xl bg-gradient-to-br from-[#0b0d36] via-[#262b80] to-[#0b0d36] px-8 py-16 shadow-[0_40px_80px_rgba(7,10,30,0.3)]">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45 mb-4 block">{ar ? "ابدأ الآن" : "Get Started"}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{ar ? "اطلب بطاقة الخصم الفوري اليوم" : "Request Your Debit Card Today"}</h2>
            <p className="text-white/65 mb-10 text-lg leading-relaxed">{ar ? "بطاقتك جاهزة في خطوات بسيطة — تواصل مع البنك أو قدّم طلبك الآن." : "Your card is ready in simple steps — contact the bank or submit your request now."}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#262b80] transition-all hover:-translate-y-0.5 hover:shadow-xl">{ar ? "اطلب البطاقة الآن" : "Request Card Now"}<ArrowRight className="h-4 w-4" /></Link>
              <Link href="/branches" className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/18 hover:-translate-y-0.5">{ar ? "ابحث عن فرع" : "Find a Branch"}</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* RELATED */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-10 text-center"><h2 className="text-2xl font-bold text-slate-800">{ar ? "بطاقات أخرى قد تناسبك" : "Other Cards You May Like"}</h2></motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
            {related.map((r, i) => { const Icon = r.icon; return (<motion.div key={i} variants={fadeUp}><Link href={r.href} className="group flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-6 text-center transition-all hover:-translate-y-1 hover:border-[#262b80]/30 hover:shadow-lg"><div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-600 transition-colors group-hover:bg-[#262b80] group-hover:text-white"><Icon className="h-5 w-5" /></div><h3 className="mb-1 font-semibold text-slate-800 group-hover:text-[#262b80]">{ar ? r.titleAr : r.titleEn}</h3><p className="text-xs text-slate-400">{r.descAr}</p></Link></motion.div>)})}
          </motion.div>
        </div>
      </section>
    </>
  )
}
