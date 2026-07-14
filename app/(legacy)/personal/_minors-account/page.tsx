"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n-context"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { RelatedServicesSlider } from "@/components/shared/related-services-slider"
import { accountsRelatedServices } from "@/data/related-services"
import { Users, Shield, Wallet, Check, ChevronRight, Phone, TrendingUp, ArrowRight, HandCoins, Heart, GraduationCap, Star, Lock, BarChart3 } from "lucide-react"

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } } }
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }

const features = [
  { icon: Heart, titleAr: "تأسيس مستقبل مالي للأبناء", titleEn: "Build a Financial Future", descAr: "ابدأ رحلة ادخار أبنائك مبكراً مع حساب مُصمَّم خصيصاً لبناء أساس مالي متين يخدمهم مستقبلاً.", descEn: "Start your children's savings journey early with an account designed specifically to build a solid financial foundation." },
  { icon: BarChart3, titleAr: "عوائد متوافقة مع الشريعة", titleEn: "Sharia-Compliant Returns", descAr: "يُولِّد الحساب عوائد دورية متوافقة مع أحكام الشريعة الإسلامية لتنمية مدخرات الطفل باستمرار.", descEn: "The account generates periodic Sharia-compliant returns to continuously grow the child's savings." },
  { icon: Shield, titleAr: "أمان وحماية استثنائية", titleEn: "Exceptional Safety & Protection", descAr: "مدخرات أبنائك محمية بأعلى معايير الأمان مع ضمانات تحفظ حقوقهم المالية.", descEn: "Your children's savings are protected by the highest security standards with guarantees preserving their financial rights." },
  { icon: GraduationCap, titleAr: "دعم مسيرة التعليم", titleEn: "Support Educational Journey", descAr: "الحساب المثالي لادخار تكاليف التعليم الجامعي والمراحل الدراسية المختلفة.", descEn: "The ideal account for saving university and educational costs at various study stages." },
  { icon: Star, titleAr: "خدمات مخصصة للعائلة", titleEn: "Family-Tailored Services", descAr: "يتمتع ولي الأمر بإدارة كاملة للحساب مع تقارير دورية بأداء مدخرات الطفل.", descEn: "The guardian has full account management with periodic reports on the child's savings performance." },
  { icon: Lock, titleAr: "قيود استحقاق مرنة", titleEn: "Flexible Maturity Controls", descAr: "حدد شروط السحب بما يتناسب مع مصلحة الطفل، ويمكن ربط الاستحقاق بسن معينة.", descEn: "Set withdrawal conditions aligned with the child's best interests, with maturity linked to a specific age." },
]

const benefits = [
  { ar: "فتح الحساب باسم القاصر تحت إشراف ولي الأمر", en: "Account opened in the minor's name under guardian supervision" },
  { ar: "عوائد دورية متوافقة مع الشريعة الإسلامية", en: "Periodic Sharia-compliant returns" },
  { ar: "لا رسوم فتح أو إدارة سنوية", en: "No opening or annual management fees" },
  { ar: "إدارة الحساب بالكامل عبر التطبيق", en: "Full account management via the mobile app" },
  { ar: "تقارير ادخار دورية لولي الأمر", en: "Periodic savings reports for the guardian" },
  { ar: "مرونة في إيداع مبالغ منتظمة أو عرضية", en: "Flexible regular or occasional deposit options" },
]

const requirements = [
  { ar: "هوية القاصر (شهادة الميلاد أو وثيقة رسمية)", en: "Minor's ID (birth certificate or official document)" },
  { ar: "هوية ولي الأمر الوطنية سارية المفعول", en: "Guardian's valid national ID" },
  { ar: "إثبات صلة القرابة (ولاية شرعية)", en: "Proof of guardianship relationship" },
  { ar: "نموذج طلب فتح حساب القاصر مكتملاً", en: "Completed minor's account opening form" },
]

const steps = [
  { num: "01", ar: "التقديم بالنيابة", en: "Apply on Behalf", descAr: "يتقدم ولي الأمر بطلب فتح الحساب نيابةً عن الطفل في أي فرع.", descEn: "The guardian submits the account opening request on behalf of the child at any branch." },
  { num: "02", ar: "تقديم الوثائق", en: "Submit Documents", descAr: "تُقدَّم وثائق القاصر وولي الأمر للتحقق من الهوية وصلة القرابة.", descEn: "Submit the minor's and guardian's documents to verify identity and guardianship." },
  { num: "03", ar: "تفعيل الحساب", en: "Account Activation", descAr: "تُفعَّل الحساب بعد اعتماد الطلب ويُسلَّم ولي الأمر بيانات الدخول.", descEn: "The account is activated after approval and the guardian receives login credentials." },
  { num: "04", ar: "ابدأ الادخار للمستقبل", en: "Start Saving for the Future", descAr: "أودع أول مبلغ وشاهد مدخرات طفلك تنمو مع الوقت.", descEn: "Deposit the first amount and watch your child's savings grow over time." },
]

const faqs = [
  { q: "من يمكنه فتح حساب القصر؟", a: "يحق لولي الأمر الشرعي (الأب أو الوصي المعتمد) فتح حساب القاصر نيابةً عن أبنائه تحت سن الرشد القانونية." },
  { q: "متى يتمكن الطفل من الوصول إلى الحساب بنفسه؟", a: "عند بلوغ القاصر السن القانونية المعتمدة يُحوَّل الحساب باسمه وبإمكانه إدارته بشكل مستقل بعد استيفاء الإجراءات اللازمة." },
  { q: "هل يمكن لولي الأمر السحب من حساب الطفل؟", a: "يمكن لولي الأمر إجراء عمليات سحب وفق الشروط المتفق عليها عند فتح الحساب ووفقاً للأنظمة المصرفية المعمول بها." },
  { q: "هل تُطبَّق عوائد على حساب القاصر؟", a: "نعم، يُولِّد الحساب عوائد دورية متوافقة مع الشريعة الإسلامية تُضاف تلقائياً إلى رصيد الطفل." },
  { q: "هل يمكن إيداع مبالغ من أفراد الأسرة الآخرين؟", a: "نعم، يمكن لأفراد الأسرة المساهمة في تنمية مدخرات الطفل عبر الإيداع المباشر في حسابه." },
]



export default function MinorsAccountPage() {
  const { locale } = useI18n()
  const ar = locale === "ar"

  const relatedServices = accountsRelatedServices.filter((s) => s.id !== "minors")

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden py-16 md:py-24 min-h-[580px] flex items-center">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0b0d36] via-[#262b80] to-[#0b0d36]" />
        <div className="absolute inset-0 -z-10 opacity-[0.07]" style={{ backgroundImage: "url('/images/new-pattern.png')", backgroundSize: "cover" }} />
        <div className="absolute -top-32 -start-32 h-[500px] w-[500px] rounded-full bg-sky-400/10 blur-3xl opacity-50" />
        <div className="absolute -bottom-24 -end-24 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
        <div className="container mx-auto px-4 relative w-full">
          <Breadcrumbs items={[{ labelKey: "nav.personalBanking", href: "/personal-banking" }, { labelKey: "nav.minorsAccount" }]} />
          <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-2xl mt-6">
            <motion.span variants={fadeUp} className="inline-block text-xs font-semibold uppercase tracking-[0.22em] text-white/60 mb-4">{ar ? "خدمات الأفراد" : "Personal Banking"}</motion.span>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">{ar ? "حساب القصر" : "Minors Account"}</motion.h1>
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-white/80 leading-relaxed mb-10">{ar ? "خطط لمستقبل أبنائك وابدأ رحلة ادخارهم مبكراً، مع حساب ينمو معهم ويؤسس لمستقبلهم المالي" : "Plan for your children's future and start their savings journey early — with an account that grows with them and builds their financial future"}</motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#0b0d36] shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl">{ar ? "افتح حسابك الآن" : "Open Account Now"}<ArrowRight className="h-4 w-4" /></Link>
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:-translate-y-0.5"><Phone className="h-4 w-4" />{ar ? "تواصل معنا" : "Contact Us"}</Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-14 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#262b80] mb-3 block">{ar ? "مزايا الحساب" : "Account Features"}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b0d36]">{ar ? "ما يميّز حساب القصر" : "What Sets the Minors Account Apart"}</h2>
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
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#262b80] mb-3 block">{ar ? "لماذا تختاره؟" : "Why Choose It?"}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0b0d36] mb-6 leading-snug">{ar ? "استثمر في مستقبل أبنائك منذ اليوم" : "Invest in Your Children's Future Starting Today"}</h2>
              <p className="text-slate-600 leading-relaxed mb-8">{ar ? "حساب القصر في بنك بن دول هو أفضل هدية يمكنك تقديمها لأبنائك — هدية تنمو مع الوقت وتبني لهم أساساً مالياً متيناً. ابدأ اليوم ودع الزمن يعمل لصالح مستقبلهم." : "The Minors Account at Bin Dowal Bank is the best gift you can give your children — a gift that grows with time and builds a solid financial foundation. Start today and let time work for their future."}</p>
              <ul className="space-y-3">{benefits.map((b, i) => (<li key={i} className="flex items-center gap-3 text-slate-700"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#262b80] text-white"><Check className="h-3.5 w-3.5" /></span>{ar ? b.ar : b.en}</li>))}</ul>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0b0d36] to-[#262b80] text-white"><Users className="h-7 w-7" /></div>
              <h3 className="mb-2 text-xl font-bold text-slate-900">{ar ? "حساب القصر" : "Minors Account"}</h3>
              <p className="mb-6 text-sm text-slate-500">{ar ? "بنك بن دول للتمويل الأصغر الإسلامي" : "Bin Dowal Islamic Microfinance Bank"}</p>
              <div className="space-y-4">
                {[{ labelAr: "رسوم الفتح", labelEn: "Opening Fee", valAr: "مجاناً", valEn: "Free" }, { labelAr: "الحد الأدنى", labelEn: "Min Balance", valAr: "لا يوجد", valEn: "None" }, { labelAr: "العوائد", labelEn: "Returns", valAr: "متوافقة مع الشريعة", valEn: "Sharia-compliant" }, { labelAr: "إدارة الحساب", labelEn: "Management", valAr: "ولي الأمر", valEn: "By Guardian" }].map((row, i) => (
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
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#262b80] mb-3 block">{ar ? "الشروط والوثائق" : "Requirements"}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b0d36]">{ar ? "متطلبات فتح الحساب" : "Account Opening Requirements"}</h2>
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

      {/* HOW TO APPLY */}
      <section className="py-20 bg-gradient-to-br from-[#0b0d36] via-[#262b80] to-[#0b0d36]">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-14 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/50 mb-3 block">{ar ? "خطوات بسيطة" : "Simple Steps"}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">{ar ? "كيف تفتح حساب القصر؟" : "How to Open a Minors Account?"}</h2>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div key={i} variants={fadeUp} className="relative rounded-2xl bg-white/8 border border-white/10 p-6 backdrop-blur-sm">
                {i < steps.length - 1 && <ChevronRight className="absolute -end-3 top-1/2 hidden -translate-y-1/2 text-white/30 lg:block h-5 w-5" />}
                <span className="mb-4 block text-4xl font-extrabold text-white/20">{step.num}</span>
                <h3 className="mb-2 font-semibold text-white">{ar ? step.ar : step.en}</h3>
                <p className="text-sm leading-relaxed text-white/60">{ar ? step.descAr : step.descEn}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b0d36]">{ar ? "الأسئلة الشائعة حول حساب القصر" : "Common Questions About the Minors Account"}</h2>
          </motion.div>
          <div className="max-w-2xl mx-auto">
            <Accordion type="single" collapsible>
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-start font-medium text-slate-800 hover:text-[#262b80]">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-slate-500 leading-relaxed">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mx-auto max-w-3xl text-center rounded-3xl bg-gradient-to-br from-[#0b0d36] via-[#262b80] to-[#0b0d36] px-8 py-16 shadow-[0_40px_80px_rgba(7,10,30,0.3)]">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/50 mb-4 block">{ar ? "ابدأ اليوم" : "Start Today"}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{ar ? "أعطِ أبناءك هدية المستقبل" : "Give Your Children the Gift of the Future"}</h2>
            <p className="text-white/70 mb-10 text-lg leading-relaxed">{ar ? "حساب القصر ليس مجرد حساب بنكي — إنه استثمار في مستقبل أبنائك. افتح الحساب اليوم وابدأ رحلة البناء." : "A Minors Account is not just a bank account — it's an investment in your children's future. Open the account today and start building."}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#0b0d36] transition-all hover:-translate-y-0.5 hover:shadow-xl">{ar ? "افتح الحساب الآن" : "Open Account Now"}<ArrowRight className="h-4 w-4" /></Link>
              <Link href="/branches" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/20 hover:-translate-y-0.5">{ar ? "ابحث عن فرع" : "Find a Branch"}</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <RelatedServicesSlider services={relatedServices} titleAr="منتجات ذات صلة" titleEn="Related Products" />
    </>
  )
}
