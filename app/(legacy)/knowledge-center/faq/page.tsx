"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n-context"
import { PageHero } from "@/components/ui/page-hero"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { Search, HelpCircle, Wallet, Send, CreditCard, Smartphone, HandCoins, Headphones, ArrowRight, Phone, MessageSquare, FileText } from "lucide-react"

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.5, ease: "easeOut" },
}

type FAQ = { q: { ar: string; en: string }; a: { ar: string; en: string } }
type Category = { id: string; ar: string; en: string; icon: any; faqs: FAQ[] }

const categories: Category[] = [
  {
    id: "accounts", ar: "الحسابات", en: "Accounts", icon: Wallet,
    faqs: [
      { q: { ar: "كيف يمكنني فتح حساب لدى البنك؟", en: "How can I open a bank account?" }, a: { ar: "يمكنك فتح الحساب بزيارة أي فرع من فروع البنك مع إحضار الهوية الشخصية السارية والوثائق المطلوبة. للمزيد تواصل مع خدمة العملاء.", en: "Visit any bank branch with a valid ID and required documents. Contact customer service for more details." } },
      { q: { ar: "ما المستندات المطلوبة لفتح الحساب؟", en: "What documents are required to open an account?" }, a: { ar: "تشمل المتطلبات الأساسية هوية شخصية سارية ورقم هاتف جوال فعّال. قد تختلف المتطلبات حسب نوع الحساب.", en: "A valid ID and active mobile number are the basic requirements. Requirements may vary by account type." } },
      { q: { ar: "هل يمكن فتح حساب للقاصرين؟", en: "Can minors open an account?" }, a: { ar: "نعم، يتيح البنك فتح حسابات للقاصرين وفق الإجراءات المعتمدة وبإشراف وليّ الأمر.", en: "Yes, the bank allows minors to open accounts under approved procedures with guardian supervision." } },
      { q: { ar: "كيف يمكنني الاستعلام عن رصيد حسابي؟", en: "How can I check my account balance?" }, a: { ar: "يمكنك الاستعلام عن الرصيد عبر التطبيق البنكي أو الخدمات الإلكترونية أو بزيارة الفرع.", en: "Check your balance via the mobile banking app, digital services, or by visiting a branch." } },
    ],
  },
  {
    id: "transfers", ar: "التحويلات", en: "Transfers", icon: Send,
    faqs: [
      { q: { ar: "كيف يمكنني إجراء تحويل محلي؟", en: "How do I make a local transfer?" }, a: { ar: "يمكن إجراء التحويلات المحلية عبر فروع البنك أو القنوات الرقمية المتاحة.", en: "Local transfers can be made via bank branches or available digital channels." } },
      { q: { ar: "هل تتوفر خدمات التحويل الدولي؟", en: "Are international transfers available?" }, a: { ar: "نعم، يقدم البنك خدمات التحويل الدولي وحوالات السويفت. تواصل مع أقرب فرع للاستفسار.", en: "Yes, the bank provides international transfers and SWIFT transfers. Contact the nearest branch for details." } },
      { q: { ar: "ما الرسوم المرتبطة بخدمات التحويل؟", en: "What are the transfer fees?" }, a: { ar: "تتفاوت الرسوم حسب نوع التحويل والوجهة. تواصل مع البنك للاطلاع على التفاصيل المحدّثة.", en: "Fees vary by transfer type and destination. Contact the bank for updated details." } },
      { q: { ar: "هل يمكن إجراء الحوالات السريعة عبر البنك؟", en: "Can I send express remittances through the bank?" }, a: { ar: "نعم، يوفر البنك خدمة الحوالات السريعة عبر شبكة شركائه المعتمدين. تواصل مع الفرع لمعرفة التفاصيل.", en: "Yes, the bank offers express remittances through its approved partner network. Contact the branch for details." } },
    ],
  },
  {
    id: "cards", ar: "البطاقات", en: "Cards", icon: CreditCard,
    faqs: [
      { q: { ar: "ما أنواع البطاقات المتاحة؟", en: "What types of cards are available?" }, a: { ar: "يقدم البنك بطاقات الخصم المباشر والائتمانية ومسبقة الدفع والافتراضية لتلبية احتياجاتك.", en: "The bank offers debit, credit, prepaid, and virtual cards to meet your needs." } },
      { q: { ar: "كيف أطلب بطاقة جديدة؟", en: "How do I request a new card?" }, a: { ar: "يمكن طلب البطاقة عبر أقرب فرع أو القنوات الإلكترونية المتاحة حسب نوع البطاقة.", en: "Request a card via the nearest branch or available digital channels depending on the card type." } },
      { q: { ar: "ماذا أفعل إذا فقدت بطاقتي؟", en: "What if I lose my card?" }, a: { ar: "تواصل فوراً مع خدمة العملاء لإيقاف البطاقة واتخاذ الإجراءات اللازمة.", en: "Contact customer service immediately to block your card and take the necessary steps." } },
    ],
  },
  {
    id: "digital", ar: "الخدمات الرقمية", en: "Digital Services", icon: Smartphone,
    faqs: [
      { q: { ar: "هل يتوفر تطبيق مصرفي للجوال؟", en: "Is there a mobile banking app?" }, a: { ar: "نعم، يتيح التطبيق البنكي إدارة الحسابات وإجراء التحويلات وسداد الفواتير بكل سهولة.", en: "Yes, the mobile banking app allows you to manage accounts, make transfers, and pay bills with ease." } },
      { q: { ar: "كيف أسجّل في الخدمات الإلكترونية؟", en: "How do I enroll in digital services?" }, a: { ar: "يمكن التسجيل في الخدمات الرقمية عبر زيارة الفرع أو التطبيق حسب الخدمة المطلوبة.", en: "Enroll in digital services by visiting a branch or through the app, depending on the requested service." } },
      { q: { ar: "هل الخدمات الرقمية آمنة؟", en: "Are digital services secure?" }, a: { ar: "نعم، تعمل الخدمات الرقمية للبنك وفق أعلى معايير الأمان لحماية بياناتك ومعاملاتك.", en: "Yes, the bank's digital services follow the highest security standards to protect your data and transactions." } },
    ],
  },
  {
    id: "financing", ar: "التمويل", en: "Financing", icon: HandCoins,
    faqs: [
      { q: { ar: "ما خيارات التمويل المتاحة؟", en: "What financing options are available?" }, a: { ar: "يوفر البنك حلول تمويل تشمل التمويل الشخصي والعقاري وتمويل المشاريع وفق الضوابط الشرعية الإسلامية.", en: "The bank provides personal, real estate, and project financing solutions per Islamic Sharia guidelines." } },
      { q: { ar: "ما متطلبات التأهل للتمويل؟", en: "What are the financing eligibility requirements?" }, a: { ar: "تتفاوت متطلبات التأهل حسب نوع التمويل. تواصل مع البنك للاطلاع على الشروط التفصيلية.", en: "Eligibility requirements vary by financing type. Contact the bank for detailed conditions." } },
      { q: { ar: "هل التمويل متوافق مع أحكام الشريعة الإسلامية؟", en: "Is the financing Sharia-compliant?" }, a: { ar: "نعم، جميع منتجات التمويل في بنك بن دول متوافقة مع أحكام الشريعة الإسلامية.", en: "Yes, all financing products at Bin Dowal Bank are fully compliant with Islamic Sharia principles." } },
    ],
  },
  {
    id: "support", ar: "خدمة العملاء", en: "Customer Service", icon: Headphones,
    faqs: [
      { q: { ar: "كيف أتواصل مع خدمة العملاء؟", en: "How do I contact customer service?" }, a: { ar: "يمكنك التواصل عبر الهاتف أو زيارة أقرب فرع أو نموذج التواصل على الموقع الإلكتروني.", en: "Contact us by phone, visit the nearest branch, or use the contact form on our website." } },
      { q: { ar: "كيف يمكنني تقديم شكوى؟", en: "How can I submit a complaint?" }, a: { ar: "يمكن تقديم الشكوى عبر النموذج الإلكتروني أو زيارة الفرع أو الاتصال بخدمة العملاء.", en: "Submit a complaint via the online form, branch visit, or by calling customer service." } },
      { q: { ar: "هل يمكن تقديم طلب خدمة عبر الموقع؟", en: "Can I submit a service request online?" }, a: { ar: "نعم، يمكنك تقديم طلب خدمة مصرفية عبر نموذج طلب الخدمة المتاح على الموقع.", en: "Yes, submit a banking service request via the service request form on the website." } },
      { q: { ar: "ما ساعات عمل خدمة العملاء؟", en: "What are customer service working hours?" }, a: { ar: "تعمل خدمة العملاء خلال أيام العمل الرسمية. للتفاصيل تواصل مع البنك.", en: "Customer service operates during official working days. Contact the bank for specific hours." } },
    ],
  },
]

const popular: FAQ[] = [
  categories[0].faqs[0],
  categories[1].faqs[0],
  categories[2].faqs[2],
  categories[5].faqs[0],
]

export default function FAQPage() {
  const { locale } = useI18n()
  const ar = locale === "ar"
  const [query, setQuery] = useState("")
  const [active, setActive] = useState("all")

  const filtered = categories
    .filter((c) => active === "all" || c.id === active)
    .map((c) => ({
      ...c,
      faqs: c.faqs.filter(
        (f) =>
          !query ||
          (ar ? f.q.ar : f.q.en).toLowerCase().includes(query.toLowerCase()) ||
          (ar ? f.a.ar : f.a.en).toLowerCase().includes(query.toLowerCase())
      ),
    }))
    .filter((c) => c.faqs.length > 0)

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(38,43,128,0.05),transparent_35%),linear-gradient(to_bottom,#ffffff,#f8fafc)]">
      <PageHero
        title={ar ? "الأسئلة الشائعة" : "Frequently Asked Questions"}
        subtitle={ar ? "نجمع في هذه الصفحة أكثر الاستفسارات شيوعًا من عملائنا مع إجابات واضحة ومنظمة تساعدك على إيجاد ما تحتاجه بسرعة." : "We gather the most common customer questions in one organized place to help you find answers quickly."}
        breadcrumbs={[
          { labelKey: ar ? "الرئيسية" : "Home", href: "/" },
          { labelKey: ar ? "مركز المعرفة" : "Knowledge Center", href: "/knowledge-center" },
          { labelKey: ar ? "الأسئلة الشائعة" : "FAQ" },
        ]}
      >
        <div className="flex flex-wrap gap-3">
          <a href="#faq-main" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#172048] shadow-[0_14px_34px_rgba(10,18,45,0.18)] transition-all duration-300 hover:-translate-y-0.5">
            {ar ? "تصفح الأسئلة" : "Browse Questions"}
            <ArrowRight className={`h-4 w-4 ${ar ? "rotate-180" : ""}`} />
          </a>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20">
            {ar ? "تواصل معنا" : "Contact Us"}
          </Link>
        </div>
      </PageHero>

      {/* Search & Category Filters */}
      <section className="relative py-10 md:py-14">
        <div className="container mx-auto px-4">
          <motion.div {...fade} className="mx-auto max-w-2xl">
            <div className="relative mb-6">
              <Search className={`absolute top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 ${ar ? "right-4" : "left-4"}`} />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={ar ? "ابحث في الأسئلة الشائعة..." : "Search FAQ..."}
                className={`h-14 rounded-2xl border-slate-200/80 bg-white text-base shadow-[0_8px_30px_-15px_rgba(15,23,42,0.2)] focus-visible:border-[#324198]/40 focus-visible:ring-[3px] focus-visible:ring-[#324198]/10 ${ar ? "pr-12" : "pl-12"}`}
              />
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {[{ id: "all", ar: "الكل", en: "All" }, ...categories.map((c) => ({ id: c.id, ar: c.ar, en: c.en }))].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActive(cat.id)}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 ${active === cat.id ? "border-[#324198] bg-[#324198] text-white shadow-[0_8px_20px_-8px_rgba(50,65,152,0.5)]" : "border-slate-200 bg-white text-slate-600 hover:border-[#324198]/30 hover:text-[#324198]"}`}
                >
                  {ar ? cat.ar : cat.en}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Popular Questions */}
      {!query && active === "all" && (
        <section className="bg-slate-50/60 py-10 md:py-16">
          <div className="container mx-auto px-4">
            <motion.div {...fade} className="mx-auto mb-8 max-w-3xl text-center">
              <div className="mb-3 inline-flex items-center rounded-full border border-[#324198]/10 bg-white/80 px-4 py-2 text-xs font-semibold tracking-[0.22em] text-[#324198] shadow-sm">
                {ar ? "الأكثر بحثًا" : "MOST SEARCHED"}
              </div>
              <h2 className="text-2xl font-bold text-[#0b0d36] md:text-3xl">{ar ? "الأسئلة الأكثر شيوعًا" : "Most Common Questions"}</h2>
            </motion.div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {popular.map((faq, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.08 }} whileHover={{ y: -5 }}>
                  <Card className="group relative h-full overflow-hidden rounded-[24px] border border-slate-200/80 bg-white shadow-[0_14px_40px_-20px_rgba(15,23,42,0.28)] transition-all duration-300 hover:border-[#324198]/20 hover:shadow-[0_20px_55px_-25px_rgba(50,65,152,0.32)]">
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#324198]/40 to-transparent" />
                    <CardContent className="p-6">
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#324198]/[0.07] text-[#324198]">
                        <HelpCircle className="h-5 w-5" />
                      </div>
                      <h3 className="mb-2 text-sm font-semibold leading-6 text-[#0b0d36]">{ar ? faq.q.ar : faq.q.en}</h3>
                      <p className="line-clamp-3 text-xs leading-6 text-slate-500">{ar ? faq.a.ar : faq.a.en}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main FAQ Accordion */}
      <section id="faq-main" className="scroll-mt-24 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fade} className="mx-auto mb-10 max-w-3xl text-center">
            <div className="mb-3 inline-flex items-center rounded-full border border-[#324198]/10 bg-white/80 px-4 py-2 text-xs font-semibold tracking-[0.22em] text-[#324198] shadow-sm">
              {ar ? "جميع الأسئلة" : "ALL QUESTIONS"}
            </div>
            <h2 className="text-2xl font-bold text-[#0b0d36] md:text-3xl">{ar ? "تصفح حسب الفئة" : "Browse by Category"}</h2>
          </motion.div>

          {filtered.length === 0 ? (
            <div className="mx-auto max-w-lg rounded-[28px] border border-slate-200 bg-white p-12 text-center shadow-sm">
              <Search className="mx-auto mb-4 h-10 w-10 text-slate-300" />
              <h3 className="text-lg font-semibold text-[#0b0d36]">{ar ? "لا توجد نتائج" : "No results found"}</h3>
              <p className="mt-2 text-sm text-slate-500">{ar ? "جرّب كلمات بحث مختلفة" : "Try different search terms"}</p>
              <button onClick={() => setQuery("")} className="mt-4 text-sm font-semibold text-[#324198] hover:underline">
                {ar ? "مسح البحث" : "Clear search"}
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {filtered.map((cat, ci) => (
                <motion.div key={cat.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.45, delay: ci * 0.06 }}>
                  <Card className="overflow-hidden rounded-[28px] border border-slate-200/80 bg-white shadow-[0_14px_40px_-20px_rgba(15,23,42,0.2)]">
                    <div className="flex items-center gap-3 border-b border-slate-100 px-6 py-5 md:px-8">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#0b0d36] via-[#262b80] to-[#3b43a8] text-white shadow-[0_10px_24px_-12px_rgba(38,43,128,0.55)]">
                        <cat.icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-bold text-[#0b0d36]">{ar ? cat.ar : cat.en}</h3>
                      <span className="ms-auto rounded-full bg-[#324198]/[0.08] px-3 py-1 text-xs font-semibold text-[#324198]">{cat.faqs.length}</span>
                    </div>
                    <CardContent className="px-6 pb-2 pt-2 md:px-8">
                      <Accordion type="single" collapsible className="w-full">
                        {cat.faqs.map((faq, fi) => (
                          <AccordionItem key={fi} value={`${cat.id}-${fi}`} className="border-b border-slate-100 last:border-0">
                            <AccordionTrigger className="py-4 text-start text-sm font-semibold text-[#0b0d36] hover:text-[#324198] hover:no-underline md:text-base [&>svg]:text-[#324198]">
                              {ar ? faq.q.ar : faq.q.en}
                            </AccordionTrigger>
                            <AccordionContent>
                              <p className="pb-4 text-sm leading-7 text-slate-600 md:text-base">{ar ? faq.a.ar : faq.a.en}</p>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Help Guidance */}
      <section className="bg-slate-50/60 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <motion.div {...fade}>
            <Card className="relative overflow-hidden rounded-[32px] border border-slate-200/80 bg-white shadow-[0_20px_60px_-30px_rgba(15,23,42,0.22)]">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0b0d36] via-[#262b80] to-[#7a1f3d]/80" />
              <CardContent className="grid gap-8 p-8 md:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <div className="mb-4 inline-flex items-center rounded-full border border-[#324198]/10 bg-[#324198]/[0.05] px-4 py-2 text-xs font-semibold tracking-[0.2em] text-[#324198]">
                    {ar ? "لم تجد إجابتك؟" : "DIDN'T FIND YOUR ANSWER?"}
                  </div>
                  <h2 className="text-2xl font-bold text-[#0b0d36] md:text-3xl">{ar ? "فريقنا جاهز لمساعدتك" : "Our team is ready to help"}</h2>
                  <p className="mt-3 max-w-xl text-base leading-8 text-slate-600">
                    {ar ? "إذا لم تجد إجابة لاستفسارك ضمن هذه الصفحة، يسعدنا التواصل معك مباشرة عبر قنوات خدمة العملاء المتاحة لتقديم الدعم اللازم." : "If you didn't find an answer here, we'd be happy to assist you directly through our available customer service channels."}
                  </p>
                  <div className="mt-6 grid gap-4 sm:grid-cols-3">
                    {[
                      { icon: Phone, ar: "الاتصال بخدمة العملاء", en: "Call Customer Service", href: "/contact" },
                      { icon: MessageSquare, ar: "نموذج التواصل", en: "Contact Form", href: "/contact" },
                      { icon: FileText, ar: "تقديم شكوى", en: "Submit Complaint", href: "/customer-service/complaints" },
                    ].map((ch, i) => (
                      <Link key={i} href={ch.href} className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50/70 p-4 transition-all duration-200 hover:border-[#324198]/20 hover:bg-[#324198]/[0.03]">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#324198]/[0.07] text-[#324198]">
                          <ch.icon className="h-5 w-5" />
                        </div>
                        <p className="text-sm font-semibold text-[#0b0d36]">{ar ? ch.ar : ch.en}</p>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="hidden lg:flex h-32 w-32 items-center justify-center rounded-full bg-[#324198]/[0.06]">
                  <HelpCircle className="h-14 w-14 text-[#324198]/30" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="pb-20 pt-10">
        <div className="container mx-auto px-4">
          <motion.div {...fade} className="relative overflow-hidden rounded-[32px] border border-[#0b0d36]/10 bg-gradient-to-br from-[#0b0d36] via-[#1b2264] to-[#262b80] px-8 py-14 text-center text-white shadow-[0_28px_90px_-40px_rgba(11,13,54,0.5)] md:px-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_35%)]" />
            <div className="absolute -bottom-16 left-0 h-40 w-40 rounded-full bg-[#7a1f3d]/20 blur-3xl" />
            <div className="relative">
              <div className="mb-4 inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold tracking-[0.22em] text-white/80 backdrop-blur-md">
                {ar ? "خدمة العملاء" : "CUSTOMER SUPPORT"}
              </div>
              <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">{ar ? "هل تحتاج إلى مزيد من المساعدة؟" : "Need further assistance?"}</h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-white/78">
                {ar ? "فريق خدمة العملاء في بنك بن دول جاهز دائمًا للإجابة على استفساراتك وتقديم الدعم الذي تحتاجه." : "Bin Dowal Bank's customer service team is always ready to answer your questions and provide the support you need."}
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg" className="h-12 rounded-xl bg-white px-6 text-[#0b0d36] shadow-[0_18px_40px_-20px_rgba(255,255,255,0.5)] transition-all duration-300 hover:scale-[1.02] hover:bg-slate-100">
                    {ar ? "تواصل مع خدمة العملاء" : "Contact Customer Service"}
                  </Button>
                </Link>
                <Link href="/customer-service/service-request">
                  <Button size="lg" variant="outline" className="h-12 rounded-xl border-white/25 bg-white/10 px-6 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20">
                    {ar ? "قدّم طلبك" : "Submit a Request"}
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Related Links */}
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              { href: "/customer-service/complaints", ar: "تقديم شكوى", en: "Submit a Complaint", desc: { ar: "قناة منظمة لاستقبال الشكاوى", en: "Organized complaints channel" } },
              { href: "/customer-service/service-request", ar: "طلب خدمة", en: "Service Request", desc: { ar: "تقديم طلبات الخدمات المصرفية", en: "Submit banking service requests" } },
              { href: "/contact", ar: "تواصل معنا", en: "Contact Us", desc: { ar: "قنوات التواصل المتاحة", en: "Available contact channels" } },
            ].map((link, i) => (
              <Link key={i} href={link.href} className="group flex items-center justify-between rounded-[20px] border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:border-[#324198]/20 hover:shadow-md">
                <div>
                  <p className="font-semibold text-[#0b0d36]">{ar ? link.ar : link.en}</p>
                  <p className="mt-1 text-xs text-slate-500">{ar ? link.desc.ar : link.desc.en}</p>
                </div>
                <ArrowRight className={`h-4 w-4 text-[#324198] transition-transform duration-200 group-hover:translate-x-1 ${ar ? "rotate-180 group-hover:-translate-x-1 group-hover:translate-x-0" : ""}`} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
