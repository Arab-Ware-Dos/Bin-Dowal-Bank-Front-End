"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n-context"
import { getLocalizedHref } from "@/lib/localized-routes"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { PageHero } from "@/components/ui/page-hero"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CardMockup } from "@/components/ui/card-mockup"
import { CreditCard, Globe2, Shield, Smartphone, Check, ChevronRight, Phone, ArrowRight, Banknote, Wallet, Star, Heart, Lock, BarChart3 } from "lucide-react"

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } } }
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }

const features = [
  { icon: Star, titleAr: "تصميم حصري لبطاقة نور", titleEn: "Exclusive Noor Card Design", descAr: "تصميم راقٍ ومميز يعكس هوية بطاقة نور بأسلوب عصري أنيق ومتوافق مع هوية البنك.", descEn: "Refined and distinctive design reflecting the Noor card identity in a modern elegant style aligned with the bank's identity." },
  { icon: Heart, titleAr: "استقلالية مالية حقيقية", titleEn: "Real Financial Independence", descAr: "إدارة كاملة للمعاملات المالية اليومية بكل ثقة وأمان واستقلالية بدون أي قيود.", descEn: "Full management of daily financial transactions with complete confidence, security, and independence without restrictions." },
  { icon: Globe2, titleAr: "قبول عالمي عبر Mastercard", titleEn: "Global Mastercard Acceptance", descAr: "تُقبَل في ملايين المتاجر المحلية والدولية ومواقع التسوق الإلكتروني في أكثر من 150 دولة.", descEn: "Accepted at millions of local and international merchants and online shopping sites in over 150 countries." },
  { icon: Shield, titleAr: "أمان متكامل في كل عملية", titleEn: "Integrated Security on Every Transaction", descAr: "تقنيات أمان متقدمة تشمل OTP والتشفير وتنبيهات فورية تحمي كل معاملة.", descEn: "Advanced security technologies including OTP, encryption, and instant alerts protecting every transaction." },
  { icon: Smartphone, titleAr: "إدارة كاملة عبر التطبيق", titleEn: "Full App Management", descAr: "تحكمي في بطاقتك بالكامل: تفعيل، تجميد، تغيير الحدود، ومتابعة المعاملات لحظة بلحظة.", descEn: "Full card control: activate, freeze, change limits, and track transactions moment by moment." },
  { icon: BarChart3, titleAr: "تقارير إنفاق دورية", titleEn: "Periodic Spending Reports", descAr: "تقارير مالية مفصّلة تُساعدك على متابعة إنفاقك وتنظيم ميزانيتك بكفاءة.", descEn: "Detailed financial reports helping you track your spending and organize your budget efficiently." },
]
const benefits = [
  { ar: "مقبولة محلياً ودولياً في أكثر من 150 دولة", en: "Accepted locally and internationally in 150+ countries" },
  { ar: "تحكم كامل في الإنفاق والحدود عبر التطبيق", en: "Full spending and limits control via app" },
  { ar: "تنبيهات SMS فورية لكل معاملة", en: "Instant SMS for every transaction" },
  { ar: "سحب نقدي من الصرافات الآلية في أي مكان", en: "ATM withdrawal anywhere" },
  { ar: "تصميم راقٍ يعكس شخصيتك المستقلة", en: "Refined design reflecting your independent personality" },
  { ar: "متوافقة مع أحكام الشريعة الإسلامية", en: "Sharia-compliant" },
]
const useCases = [
  { titleAr: "التسوق اليومي", titleEn: "Daily Shopping", descAr: "تسوقي في أي متجر محلي أو دولي بثقة وأمان يومياً.", descEn: "Shop at any local or international store confidently and securely daily." },
  { titleAr: "التسوق الإلكتروني", titleEn: "Online Shopping", descAr: "استمتعي بتجربة تسوق إلكتروني آمنة ومريحة من أي مكان.", descEn: "Enjoy a safe and comfortable online shopping experience from anywhere." },
  { titleAr: "إدارة النفقات الشهرية", titleEn: "Monthly Expense Management", descAr: "تتبّعي مصروفاتك الشهرية بدقة من خلال تقارير الإنفاق الذكية.", descEn: "Track your monthly expenses accurately through smart spending reports." },
  { titleAr: "السفر والتنقل", titleEn: "Travel & Mobility", descAr: "رفيقتك المثالية في السفر من خلال القبول العالمي الشامل.", descEn: "Your ideal travel companion through comprehensive global acceptance." },
]
const requirements = [
  { ar: "الهوية الوطنية سارية المفعول", en: "Valid national ID" },
  { ar: "حساب جارٍ نشط في بنك بن دول", en: "Active current account at Bin Dowal" },
  { ar: "طلب إصدار البطاقة عبر التطبيق أو الفرع", en: "Card issuance request via app or branch" },
  { ar: "رقم هاتف جوال مسجل للتحقق", en: "Registered mobile for verification" },
]
const steps = [
  { num: "01", ar: "تقديم طلب البطاقة", en: "Apply for the Card", descAr: "اطلبي البطاقة عبر تطبيق الجوال أو في أي فرع من فروع البنك.", descEn: "Request the card via the mobile app or at any bank branch." },
  { num: "02", ar: "التحقق والاعتماد", en: "Verify & Approve", descAr: "يُتحقق من بياناتك ويُعتمد الطلب بسرعة وبساطة.", descEn: "Your details are verified and the request approved quickly and simply." },
  { num: "03", ar: "استلام بطاقة نور", en: "Receive Noor Card", descAr: "تُسلَّم بطاقة نور إلى الفرع أو عنوانك وفق تفضيلاتك.", descEn: "The Noor Card is delivered to the branch or your address per your preferences." },
  { num: "04", ar: "التفعيل والانطلاق", en: "Activate & Start", descAr: "فعّلي بطاقتك عبر التطبيق وابدأي رحلة استقلالية مالية كاملة.", descEn: "Activate your card via the app and begin a journey of complete financial independence." },
]
const faqs = [
  { q: "هل بطاقة نور مخصصة حصرياً للنساء؟", a: "بطاقة نور مصمَّمة خصيصاً لتمكين المرأة العصرية وتلبية احتياجاتها المصرفية اليومية، وهي تحمل هوية بصرية مميزة تعكس هذا التوجه." },
  { q: "هل يمكن استخدام بطاقة نور في التسوق الإلكتروني الدولي؟", a: "نعم، تُقبَل بطاقة نور عبر شبكة Mastercard في معظم مواقع التسوق الإلكتروني حول العالم." },
  { q: "كيف أحمي بطاقة نور عند السفر؟", a: "يمكنك تفعيل تنبيهات السفر عبر التطبيق، إضافة إلى تجميد البطاقة فوراً عند الحاجة عبر خاصية التحكم في التطبيق." },
  { q: "هل يمكن تغيير حدود الإنفاق على البطاقة؟", a: "نعم، يمكنك تعديل حدود الإنفاق اليومية والشهرية بسهولة عبر تطبيق الجوال وفق احتياجاتك." },
  { q: "هل بطاقة نور متوافقة مع Apple Pay وGoogle Pay؟", a: "نعم، يمكن إضافة بطاقة نور إلى محافظ Apple Pay وGoogle Pay للدفع الإلكتروني السريع." },
]
const related = [
  { href: "/cards/debit-card", icon: CreditCard, titleAr: "بطاقة الخصم الفوري", titleEn: "Debit Card", descAr: "للاستخدام اليومي محلياً ودولياً" },
  { href: "/cards/credit-card", icon: Banknote, titleAr: "البطاقة الائتمانية", titleEn: "Credit Card", descAr: "قوة شرائية لكبار العملاء" },
  { href: "/cards/prepaid-card", icon: Wallet, titleAr: "بطاقة الدفع المسبق", titleEn: "Prepaid Card", descAr: "تحكم كامل في التسوق الرقمي" },
]

export function NoorCardPageContent() {
  const { locale, mode } = useI18n()
  const resolveHref = (target: string) => mode === "url" ? getLocalizedHref(target, locale) : target
  const ar = locale === "ar"
  return (
    <>
      <PageHero
        title={ar ? "بطاقة نور" : "Noor Card"}
        subtitle={ar ? "بطاقة صُمِّمت خصيصاً لتمكين المرأة العصرية. تمنحك الاستقلالية الكاملة لإدارة معاملاتك المالية اليومية والتسوق بثقة وأمان." : "A card designed especially to empower the modern woman — granting you complete independence to manage your daily financial transactions and shop with confidence and security."}
        breadcrumbs={[{ labelKey: "nav.cards", href: resolveHref("/cards") }, { labelKey: "nav.noorCard" }]}
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b0d36]">{ar ? "ما يميّز بطاقة نور" : "What Sets the Noor Card Apart"}</h2>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => { const Icon = f.icon; return (
              <motion.div key={i} variants={fadeUp} className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#763169]/20 hover:shadow-[0_16px_40px_rgba(118,49,105,0.08)]">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#763169]/8 text-[#763169] transition-colors group-hover:bg-[#763169] group-hover:text-white"><Icon className="h-5 w-5" /></div>
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
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#262b80] mb-3 block">{ar ? "لماذا تختاريها؟" : "Why Choose It?"}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0b0d36] mb-6 leading-snug">{ar ? "استقلالية مالية كاملة بأسلوب راقٍ" : "Complete Financial Independence in a Refined Style"}</h2>
              <p className="text-slate-600 leading-relaxed mb-8">{ar ? "بطاقة نور من بنك بن دول هي أكثر من مجرد بطاقة مصرفية — إنها أداة تمكين حقيقية تمنحك السيطرة الكاملة على معاملاتك المالية بأسلوب عصري يليق بشخصيتك المستقلة." : "The Noor Card from Bin Dowal Bank is more than just a banking card — it's a real empowerment tool giving you complete control over your financial transactions in a modern style befitting your independent personality."}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white">{ar ? "كيف تحصلين على بطاقة نور؟" : "How to Get the Noor Card?"}</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b0d36]">{ar ? "الأسئلة الشائعة حول بطاقة نور" : "Common Questions About the Noor Card"}</h2>
          </motion.div>
          <div className="max-w-2xl mx-auto"><Accordion type="single" collapsible>{faqs.map((faq, i) => (<AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-start font-medium text-slate-800 hover:text-[#262b80]">{faq.q}</AccordionTrigger><AccordionContent className="text-slate-500 leading-relaxed">{faq.a}</AccordionContent></AccordionItem>))}</Accordion></div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mx-auto max-w-3xl text-center rounded-3xl bg-gradient-to-br from-[#0b0d36] via-[#262b80] to-[#0b0d36] px-8 py-16 shadow-[0_40px_80px_rgba(7,10,30,0.35)]">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#e8c4d4]/60 mb-4 block">{ar ? "ابدأ الآن" : "Get Started"}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{ar ? "اطلبي بطاقة نور اليوم" : "Request the Noor Card Today"}</h2>
            <p className="text-white/65 mb-10 text-lg leading-relaxed">{ar ? "استقلاليتك المالية تبدأ هنا — اطلبي بطاقة نور وأديري حياتك المالية بثقة وأناقة." : "Your financial independence starts here — request the Noor Card and manage your financial life with confidence and elegance."}</p>
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
