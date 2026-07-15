"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n-context"
import { getLocalizedHref } from "@/lib/localized-routes"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { PageHero } from "@/components/ui/page-hero"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CardMockup } from "@/components/ui/card-mockup"
import { CreditCard, Globe2, Shield, Smartphone, Check, ChevronRight, Phone, ArrowRight, Banknote, Landmark, Lock, Zap, BarChart3, RefreshCw } from "lucide-react"

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } } }
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }

const features = [
  { icon: Lock, titleAr: "تحكم كامل في الإنفاق", titleEn: "Full Spending Control", descAr: "حدِّد مبلغاً مسبقاً وأنفق بما يتناسب مع ميزانيتك دون خطر الإنفاق الزائد.", descEn: "Load a predetermined amount and spend within your budget without the risk of overspending." },
  { icon: Shield, titleAr: "أمان قصوى للتسوق الرقمي", titleEn: "Maximum Online Shopping Security", descAr: "حماية مثالية لمعاملاتك الإلكترونية مع OTP وتشفير متقدم في كل عملية شراء.", descEn: "Perfect protection for your online transactions with OTP and advanced encryption on every purchase." },
  { icon: Globe2, titleAr: "قبول دولي عبر Mastercard", titleEn: "International Mastercard Acceptance", descAr: "تستخدمها في المتاجر الإلكترونية المحلية والدولية ومع آلاف نقاط البيع.", descEn: "Use it at local and international online stores and with thousands of points of sale." },
  { icon: RefreshCw, titleAr: "إعادة الشحن متى تشاء", titleEn: "Recharge Whenever You Want", descAr: "شارج بطاقتك بسهولة عبر التطبيق أو الحساب الجاري في أي وقت.", descEn: "Recharge your card easily via the app or current account at any time." },
  { icon: BarChart3, titleAr: "متابعة المعاملات الفورية", titleEn: "Real-time Transaction Tracking", descAr: "اعرف تفاصيل كل معاملة فوراً عبر تنبيهات SMS وتقارير التطبيق المفصّلة.", descEn: "Know details of every transaction instantly via SMS alerts and detailed app reports." },
  { icon: Smartphone, titleAr: "ملائمة للاشتراكات الرقمية", titleEn: "Ideal for Digital Subscriptions", descAr: "الاشتراك في خدمات البث والمتاجر الإلكترونية والتطبيقات بأمان وسهولة.", descEn: "Subscribe to streaming services, online stores, and apps safely and easily." },
]
const benefits = [
  { ar: "لا خطر على الحساب الرئيسي عند التسوق الإلكتروني", en: "No risk to main account when shopping online" },
  { ar: "مناسبة لمن لا يرغب في البطاقات الائتمانية", en: "Suitable for those preferring no credit cards" },
  { ar: "رقابة فعالة على الميزانية الشهرية", en: "Effective monthly budget monitoring" },
  { ar: "سهلة الشحن عبر التطبيق في أي وقت", en: "Easy to recharge via app at any time" },
  { ar: "آمنة للاستخدام في المنصات الرقمية", en: "Safe for use on digital platforms" },
  { ar: "متوافقة مع أحكام الشريعة الإسلامية", en: "Sharia-compliant" },
]
const useCases = [
  { titleAr: "التسوق الإلكتروني الآمن", titleEn: "Secure Online Shopping", descAr: "تسوّق من أي متجر إلكتروني في العالم بأمان وبحدود آمنة.", descEn: "Shop from any online store worldwide safely within secure limits." },
  { titleAr: "الاشتراكات الشهرية", titleEn: "Monthly Subscriptions", descAr: "إدارة اشتراكاتك في خدمات البث والتطبيقات الرقمية بسهولة.", descEn: "Manage your streaming and digital app subscriptions easily." },
  { titleAr: "هدايا وبطاقات للآخرين", titleEn: "Gifts & Cards for Others", descAr: "أرسلها هدية لأبنائك أو ذويك مع تحديد مبلغ الصرف.", descEn: "Send as a gift to your children or family members with set spending amounts." },
  { titleAr: "استخدام السفر وعدم حمل النقد", titleEn: "Travel Use & Cashless", descAr: "ودِّع القلق من حمل النقد واستخدم البطاقة في رحلاتك بثقة.", descEn: "Forget the worry of carrying cash and use the card confidently on your trips." },
]
const requirements = [
  { ar: "الهوية الوطنية سارية المفعول", en: "Valid national ID" },
  { ar: "رقم هاتف جوال مسجل للتحقق", en: "Registered mobile for verification" },
  { ar: "طلب إصدار البطاقة عبر التطبيق أو الفرع", en: "Card issuance request via app or branch" },
  { ar: "مبلغ الشحن الأولي عند الإصدار", en: "Initial load amount at issuance" },
]
const steps = [
  { num: "01", ar: "تقديم طلب الإصدار", en: "Submit Issuance Request", descAr: "قدّم طلبك عبر تطبيق الجوال أو في أي فرع من فروع البنك.", descEn: "Submit your request via mobile app or at any bank branch." },
  { num: "02", ar: "التحقق الهوية", en: "Identity Verification", descAr: "يُتحقق من هويتك بخطوة سريعة ويُعتمد طلبك.", descEn: "Your identity is verified in a quick step and your request is approved." },
  { num: "03", ar: "شحن البطاقة والاستلام", en: "Load & Receive", descAr: "شارج بطاقتك بالمبلغ المطلوب وتُسلَّم جاهزة للاستخدام.", descEn: "Load the card with the desired amount and receive it ready for use." },
  { num: "04", ar: "التسوق والرقابة", en: "Shop & Monitor", descAr: "تسوّق بأمان وتابع معاملاتك عبر التطبيق في الوقت الفعلي.", descEn: "Shop safely and monitor your transactions via app in real time." },
]
const faqs = [
  { q: "هل يمكن استخدام بطاقة الدفع المسبق في جميع المواقع الإلكترونية؟", a: "تُقبَل في معظم المواقع الداعمة لشبكة Mastercard، غير أن بعض المنصات قد ترفض البطاقات مسبقة الدفع وفق سياساتها." },
  { q: "كيف أشحن البطاقة؟", a: "يمكنك شحن بطاقتك عبر تطبيق الجوال أو من خلال حسابك الجاري أو عبر التحويل المباشر." },
  { q: "ماذا يحدث إذا انتهى الرصيد؟", a: "ستُرفض العملية تلقائياً عند نفاد الرصيد دون أي رسوم إضافية. يمكنك إعادة الشحن في أي وقت." },
  { q: "هل يمكن استرداد المبلغ المتبقي؟", a: "يمكن طلب استرداد الرصيد المتبقي وفق إجراءات البنك وشروط إصدار البطاقة المتفق عليها." },
  { q: "هل البطاقة مناسبة للأطفال والطلاب؟", a: "نعم، تُعدّ بطاقة الدفع المسبق خياراً مثالياً للطلاب ومن يحتاجون إلى بطاقة بحدود إنفاق محددة ومراقبة." },
]
const related = [
  { href: "/cards/debit-card", icon: CreditCard, titleAr: "بطاقة الخصم الفوري", titleEn: "Debit Card", descAr: "للاستخدام اليومي محلياً ودولياً" },
  { href: "/cards/credit-card", icon: Banknote, titleAr: "البطاقة الائتمانية", titleEn: "Credit Card", descAr: "قوة شرائية لكبار العملاء" },
  { href: "/cards/noor-card", icon: Landmark, titleAr: "بطاقة نور", titleEn: "Noor Card", descAr: "استقلالية مالية كاملة" },
]

export function PrepaidCardPageContent() {
  const { locale, mode } = useI18n()
  const resolveHref = (target: string) => mode === "url" ? getLocalizedHref(target, locale) : target
  const ar = locale === "ar"
  return (
    <>
      <PageHero
        title={ar ? "بطاقة الدفع المسبق" : "Prepaid Card"}
        subtitle={ar ? "لمحبي التسوق الرقمي، بطاقة تمنحك تحكماً كاملاً وأماناً مطلقاً عند الشراء عبر الإنترنت." : "For digital shopping enthusiasts — a card giving you full control and absolute security when purchasing online."}
        breadcrumbs={[{ labelKey: "nav.cards", href: resolveHref("/cards") }, { labelKey: "nav.prepaidCards" }]}
        tagline={ar ? "البطاقات المصرفية" : "Banking Cards"}
      >
        <div className="flex flex-wrap gap-4">
          <Link href={resolveHref("/contact")} className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#262b80] shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl">{ar ? "اطلب البطاقة الآن" : "Request Card Now"}<ArrowRight className="h-4 w-4" /></Link>
          <Link href={resolveHref("/contact")} className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/18 hover:-translate-y-0.5"><Phone className="h-4 w-4" />{ar ? "تواصل معنا" : "Contact Us"}</Link>
        </div>
      </PageHero>

      {/* FEATURES */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-14 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#262b80] mb-3 block">{ar ? "مزايا البطاقة" : "Card Features"}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b0d36]">{ar ? "ما يميّز بطاقة الدفع المسبق" : "What Sets the Prepaid Card Apart"}</h2>
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
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#165a6e] mb-3 block">{ar ? "لماذا تختارها؟" : "Why Choose It?"}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a2d3a] mb-6 leading-snug">{ar ? "تسوّق بذكاء وأمان" : "Shop Smart & Secure"}</h2>
              <p className="text-slate-600 leading-relaxed mb-8">{ar ? "بطاقة الدفع المسبق من بنك بن دول هي الأداة المثالية لمن يريد التحكم الكامل في إنفاقه الرقمي. ادفع بالمبلغ الذي تختاره واستمتع بالأمان المطلق في كل معاملة." : "Bin Dowal's Prepaid Card is the perfect tool for those wanting full control over digital spending — pay the amount you choose and enjoy absolute security in every transaction."}</p>
              <ul className="space-y-3 mb-10">{benefits.map((b, i) => (<li key={i} className="flex items-center gap-3 text-slate-700"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#165a6e] text-white"><Check className="h-3.5 w-3.5" /></span>{ar ? b.ar : b.en}</li>))}</ul>
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b0d36]">{ar ? "الأسئلة الشائعة حول بطاقة الدفع المسبق" : "Common Questions About the Prepaid Card"}</h2>
          </motion.div>
          <div className="max-w-2xl mx-auto"><Accordion type="single" collapsible>{faqs.map((faq, i) => (<AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-start font-medium text-slate-800 hover:text-[#262b80]">{faq.q}</AccordionTrigger><AccordionContent className="text-slate-500 leading-relaxed">{faq.a}</AccordionContent></AccordionItem>))}</Accordion></div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mx-auto max-w-3xl text-center rounded-3xl bg-gradient-to-br from-[#0b0d36] via-[#262b80] to-[#0b0d36] px-8 py-16 shadow-[0_40px_80px_rgba(7,10,30,0.3)]">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45 mb-4 block">{ar ? "ابدأ الآن" : "Get Started"}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{ar ? "اطلب بطاقة الدفع المسبق اليوم" : "Request Your Prepaid Card Today"}</h2>
            <p className="text-white/65 mb-10 text-lg leading-relaxed">{ar ? "أداة إنفاق ذكية وآمنة في يدك. قدّم طلبك الآن واحصل على بطاقتك في أسرع وقت." : "A smart and secure spending tool in your hands — submit your request now and receive your card as fast as possible."}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href={resolveHref("/contact")} className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#262b80] transition-all hover:-translate-y-0.5 hover:shadow-xl">{ar ? "اطلب البطاقة الآن" : "Request Card Now"}<ArrowRight className="h-4 w-4" /></Link>
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
