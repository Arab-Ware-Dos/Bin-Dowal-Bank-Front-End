"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n-context"
import { PageHero } from "@/components/ui/page-hero"
import { SectionTitle } from "@/components/ui/section-title"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import {
  MonitorSmartphone,
  Building2,
  Headphones,
  Mail,
  Send,
  CheckCircle,
  FileText,
  ShieldCheck,
  UserCheck,
  ArrowRight,
  ClipboardList,
  Search,
  MessageSquare,
  RefreshCcw,
  Paperclip
} from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, ease: "easeOut" },
}

export default function ComplaintsPage() {
  const { locale } = useI18n()
  const [formSubmitted, setFormSubmitted] = useState(false)

  const inputClassName =
    "h-12 rounded-xl border-slate-200/80 bg-white/90 shadow-none transition-all duration-300 placeholder:text-slate-400 focus-visible:border-[#262b80]/40 focus-visible:ring-[3px] focus-visible:ring-[#262b80]/10"

  const textareaClassName =
    "min-h-[140px] rounded-xl border-slate-200/80 bg-white/90 shadow-none transition-all duration-300 placeholder:text-slate-400 focus-visible:border-[#262b80]/40 focus-visible:ring-[3px] focus-visible:ring-[#262b80]/10"

  const channels = [
    {
      icon: MonitorSmartphone,
      titleAr: "عبر النموذج الإلكتروني",
      titleEn: "Via Online Form",
      descAr: "طريقة سريعة ومباشرة لتقديم الشكوى عبر موقعنا الإلكتروني.",
      descEn: "A quick and direct way to submit a complaint via our website.",
    },
    {
      icon: Building2,
      titleAr: "عبر الفروع",
      titleEn: "Via Branches",
      descAr: "يمكنك زيارة أقرب فرع وتقديم الشكوى لممثلي خدمة العملاء.",
      descEn: "You can visit the nearest branch and submit your complaint to our representatives.",
    },
    {
      icon: Headphones,
      titleAr: "عبر خدمة العملاء",
      titleEn: "Via Customer Service",
      descAr: "التواصل مع مركز الاتصال المتاح لخدمتكم.",
      descEn: "Contact our dedicated call center available to serve you.",
    },
    {
      icon: Mail,
      titleAr: "عبر البريد الإلكتروني",
      titleEn: "Via Email",
      descAr: "إرسال تفاصيل الشكوى إلى بريدنا المخصص.",
      descEn: "Send the details of your complaint to our dedicated email.",
    },
  ]

  const processSteps = [
    {
      icon: ClipboardList,
      titleAr: "استلام الشكوى",
      titleEn: "Complaint Receipt",
      descAr: "تسجيل الشكوى وإعطائها رقماً مرجعياً للمتابعة.",
      descEn: "Registering the complaint and assigning a reference number for tracking.",
    },
    {
      icon: Search,
      titleAr: "مراجعتها",
      titleEn: "Review & Investigation",
      descAr: "دراسة الشكوى من قبل الفريق المختص بدقة وحيادية.",
      descEn: "Studying the complaint accurately and impartially by the specialized team.",
    },
    {
      icon: MessageSquare,
      titleAr: "التواصل مع العميل",
      titleEn: "Customer Contact",
      descAr: "التواصل لطلب معلومات إضافية أو لتوضيح مسار المعالجة.",
      descEn: "Reaching out to request additional information or clarify the resolution path.",
    },
    {
      icon: RefreshCcw,
      titleAr: "المعالجة والمتابعة",
      titleEn: "Resolution & Follow-up",
      descAr: "حل الشكوى وإبلاغ العميل بالنتيجة النهائية.",
      descEn: "Resolving the complaint and informing the customer of the final outcome.",
    },
  ]

  const faqs = [
    {
      id: "faq-1",
      questionAr: "كيف يمكنني تقديم شكوى؟",
      questionEn: "How can I submit a complaint?",
      answerAr: "يمكنك تقديم الشكوى عبر تعبئة النموذج الإلكتروني في هذه الصفحة، أو زيارة أقرب فرع، أو الاتصال بخدمة العملاء.",
      answerEn: "You can submit a complaint by filling out the online form on this page, visiting the nearest branch, or calling customer service.",
    },
    {
      id: "faq-2",
      questionAr: "هل يمكن متابعة حالة الشكوى؟",
      questionEn: "Can I track the status of my complaint?",
      answerAr: "نعم، سيتم تزويدك برقم مرجعي يمكنك من خلاله متابعة حالة الشكوى عبر قنوات التواصل المتاحة.",
      answerEn: "Yes, you will be provided with a reference number that you can use to track your complaint through available communication channels.",
    },
    {
      id: "faq-3",
      questionAr: "هل يمكن إرفاق مستندات داعمة؟",
      questionEn: "Can I attach supporting documents?",
      answerAr: "بالتأكيد، يتيح لك النموذج الإلكتروني إرفاق المستندات التي تدعم شكواك لتسريع عملية المراجعة.",
      answerEn: "Certainly, the online form allows you to attach documents that support your complaint to speed up the review process.",
    },
    {
      id: "faq-4",
      questionAr: "ما القنوات المتاحة لتقديم الشكوى؟",
      questionEn: "What channels are available to submit a complaint?",
      answerAr: "تشمل القنوات: الموقع الإلكتروني، الفروع، خدمة العملاء الهاتفية، والبريد الإلكتروني المخصص للشكاوى.",
      answerEn: "Channels include: the website, branches, telephone customer service, and the dedicated complaints email.",
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 5000)
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(38,43,128,0.05),transparent_35%),linear-gradient(to_bottom,#ffffff,#f8fafc)]">
      <PageHero
        title={locale === "ar" ? "تقديم شكوى" : "Submit a Complaint"}
        subtitle={
          locale === "ar"
            ? "نحن في بنك بن دول نولي اهتماماً بالغاً بملاحظاتكم، ونسعى دائماً لتوفير قنوات منظمة لاستقبال الشكاوى ومتابعتها بعناية ومهنية تامة لضمان رضاكم."
            : "At Bin Dowal Bank, we highly value your feedback and strive to provide organized channels for receiving and reviewing complaints with utmost care and professionalism."
        }
        breadcrumbs={[
          { labelKey: locale === "ar" ? "الرئيسية" : "Home", href: "/" },
          { labelKey: locale === "ar" ? "خدمة العملاء" : "Customer Service", href: "/contact" },
          { labelKey: locale === "ar" ? "تقديم شكوى" : "Submit a Complaint" },
        ]}
      />

      {/* Complaint Channels */}
      <section className="relative overflow-hidden py-16 md:py-20">
        <div className="container relative mx-auto px-4">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center rounded-full border border-[#262b80]/10 bg-white/80 px-4 py-2 text-xs font-semibold tracking-[0.22em] text-[#262b80] shadow-sm backdrop-blur-sm">
              {locale === "ar" ? "قنوات الشكاوى" : "COMPLAINT CHANNELS"}
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-[#0b0d36] md:text-4xl">
              {locale === "ar"
                ? "قنوات متعددة لخدمتك"
                : "Multiple channels to serve you"}
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {channels.map((channel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <Card className="group relative h-full overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/90 shadow-[0_18px_45px_-30px_rgba(15,23,42,0.35)] backdrop-blur-sm transition-all duration-500 hover:border-[#262b80]/15 hover:shadow-[0_24px_60px_-28px_rgba(11,13,54,0.28)]">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#262b80]/45 to-transparent" />
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#262b80]/[0.05] blur-2xl transition-transform duration-500 group-hover:scale-110" />
                  <CardContent className="p-6 md:p-7">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0b0d36] via-[#262b80] to-[#3b43a8] text-white shadow-[0_16px_30px_-16px_rgba(38,43,128,0.6)]">
                      <channel.icon className="h-6 w-6" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold leading-7 text-[#0b0d36]">
                        {locale === "ar" ? channel.titleAr : channel.titleEn}
                      </h3>
                      <p className="text-sm leading-7 text-slate-600">
                        {locale === "ar" ? channel.descAr : channel.descEn}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Complaint Form & Process */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(248,250,252,0.45),rgba(241,245,249,0.9))]" />
        
        <div className="container relative mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            
            {/* Form Section */}
            <motion.div {...fadeInUp} className="lg:col-span-7">
              <Card className="relative overflow-hidden rounded-[32px] border border-white/70 bg-white shadow-[0_28px_90px_-35px_rgba(11,13,54,0.28)]">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0b0d36] via-[#262b80] to-[#7a1f3d]/80" />
                
                <CardHeader className="relative pb-4">
                  <div className="mb-4 inline-flex w-fit items-center rounded-full border border-[#262b80]/10 bg-[#262b80]/[0.04] px-4 py-2 text-xs font-semibold tracking-[0.22em] text-[#262b80]">
                    {locale === "ar" ? "نموذج الشكوى" : "COMPLAINT FORM"}
                  </div>

                  <CardTitle className="flex items-center gap-3 text-2xl text-[#0b0d36] md:text-[28px]">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0b0d36] via-[#262b80] to-[#3b43a8] text-white shadow-[0_16px_30px_-16px_rgba(38,43,128,0.55)]">
                      <FileText className="h-5 w-5" />
                    </span>
                    {locale === "ar" ? "تفاصيل الشكوى" : "Complaint Details"}
                  </CardTitle>

                  <p className="text-sm leading-7 text-slate-600 md:text-base">
                    {locale === "ar"
                      ? "يرجى تعبئة الحقول أدناه بوضوح لضمان سرعة الاستجابة لمعالجة الشكوى."
                      : "Please fill out the fields below clearly to ensure a prompt response to your complaint."}
                  </p>
                </CardHeader>

                <CardContent className="relative">
                  {formSubmitted ? (
                    <motion.div
                      className="rounded-[24px] border border-emerald-100 bg-emerald-50/70 px-6 py-12 text-center"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                    >
                      <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-sm">
                        <CheckCircle className="h-10 w-10 text-emerald-500" />
                      </div>
                      <h3 className="text-xl font-bold text-[#0b0d36]">
                        {locale === "ar" ? "تم استلام شكواك بنجاح" : "Complaint Received Successfully"}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {locale === "ar" ? "سنقوم بمراجعتها والتواصل معك في أقرب وقت." : "We will review it and contact you as soon as possible."}
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2.5">
                          <Label htmlFor="name" className="text-sm font-medium text-[#0b0d36]">
                            {locale === "ar" ? "الاسم الكامل" : "Full Name"}
                          </Label>
                          <Input id="name" required className={inputClassName} />
                        </div>

                        <div className="space-y-2.5">
                          <Label htmlFor="account" className="text-sm font-medium text-[#0b0d36]">
                            {locale === "ar" ? "رقم العميل أو الحساب" : "Customer or Account Number"}
                          </Label>
                          <Input id="account" className={inputClassName} />
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2.5">
                          <Label htmlFor="phone" className="text-sm font-medium text-[#0b0d36]">
                            {locale === "ar" ? "رقم الهاتف" : "Phone Number"}
                          </Label>
                          <Input id="phone" type="tel" required className={inputClassName} />
                        </div>

                        <div className="space-y-2.5">
                          <Label htmlFor="email" className="text-sm font-medium text-[#0b0d36]">
                            {locale === "ar" ? "البريد الإلكتروني" : "Email Address"}
                          </Label>
                          <Input id="email" type="email" required className={inputClassName} />
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2.5">
                          <Label htmlFor="type" className="text-sm font-medium text-[#0b0d36]">
                            {locale === "ar" ? "نوع الشكوى" : "Complaint Type"}
                          </Label>
                          <Select required>
                            <SelectTrigger className={inputClassName}>
                              <SelectValue placeholder={locale === "ar" ? "اختر نوع الشكوى" : "Select type"} />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="service">{locale === "ar" ? "خدمات بنكية" : "Banking Services"}</SelectItem>
                              <SelectItem value="card">{locale === "ar" ? "بطاقات" : "Cards"}</SelectItem>
                              <SelectItem value="digital">{locale === "ar" ? "خدمات إلكترونية" : "Digital Services"}</SelectItem>
                              <SelectItem value="other">{locale === "ar" ? "أخرى" : "Other"}</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2.5">
                          <Label htmlFor="contact_pref" className="text-sm font-medium text-[#0b0d36]">
                            {locale === "ar" ? "وسيلة التواصل المفضلة" : "Preferred Contact Method"}
                          </Label>
                          <Select required>
                            <SelectTrigger className={inputClassName}>
                              <SelectValue placeholder={locale === "ar" ? "اختر وسيلة" : "Select method"} />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="phone">{locale === "ar" ? "اتصال هاتفي" : "Phone Call"}</SelectItem>
                              <SelectItem value="email">{locale === "ar" ? "بريد إلكتروني" : "Email"}</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2.5">
                        <Label htmlFor="subject" className="text-sm font-medium text-[#0b0d36]">
                          {locale === "ar" ? "موضوع الشكوى" : "Complaint Subject"}
                        </Label>
                        <Input id="subject" required className={inputClassName} />
                      </div>

                      <div className="space-y-2.5">
                        <Label htmlFor="details" className="text-sm font-medium text-[#0b0d36]">
                          {locale === "ar" ? "تفاصيل الشكوى" : "Complaint Details"}
                        </Label>
                        <Textarea id="details" rows={5} required className={textareaClassName} />
                      </div>

                      <div className="space-y-2.5">
                        <Label htmlFor="attachment" className="text-sm font-medium text-[#0b0d36]">
                          {locale === "ar" ? "مرفقات (اختياري)" : "Attachments (Optional)"}
                        </Label>
                        <div className="relative">
                          <Input id="attachment" type="file" className={`pt-2.5 file:mr-4 file:rounded-full file:border-0 file:bg-[#262b80]/10 file:px-4 file:py-1 file:text-sm file:font-semibold file:text-[#262b80] hover:file:bg-[#262b80]/20 ${inputClassName}`} />
                        </div>
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="h-13 w-full rounded-xl bg-gradient-to-r from-[#0b0d36] via-[#262b80] to-[#2e3697] text-white shadow-[0_20px_40px_-20px_rgba(38,43,128,0.7)] transition-all duration-300 hover:scale-[1.01] hover:from-[#090b2d] hover:via-[#1d2370] hover:to-[#262b80]"
                      >
                        <Send className="me-2 h-4 w-4" />
                        {locale === "ar" ? "تقديم الشكوى" : "Submit Complaint"}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Process & Assurance */}
            <motion.div {...fadeInUp} className="lg:col-span-5 space-y-8">
              
              {/* Process Steps */}
              <div>
                <div className="mb-4 inline-flex items-center rounded-full border border-[#262b80]/10 bg-white/80 px-4 py-2 text-xs font-semibold tracking-[0.22em] text-[#262b80] shadow-sm backdrop-blur-sm">
                  {locale === "ar" ? "آلية العمل" : "HOW IT WORKS"}
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-[#0b0d36] mb-6">
                  {locale === "ar" ? "خطوات معالجة الشكوى" : "Complaint Resolution Steps"}
                </h2>
                
                <div className="space-y-6 relative before:absolute before:inset-y-0 before:left-6 before:w-px before:bg-slate-200 rtl:before:right-6 rtl:before:left-auto">
                  {processSteps.map((step, index) => (
                    <div key={index} className="relative flex gap-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white border border-[#262b80]/15 text-[#262b80] shadow-sm z-10">
                        <step.icon className="h-5 w-5" />
                      </div>
                      <div className="pt-2 pb-4">
                        <h4 className="text-base font-semibold text-[#0b0d36] mb-1">
                          {locale === "ar" ? step.titleAr : step.titleEn}
                        </h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {locale === "ar" ? step.descAr : step.descEn}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Assurance Block */}
              <Card className="rounded-[26px] border-none bg-gradient-to-br from-[#0b0d36] via-[#1a2068] to-[#262b80] text-white shadow-xl overflow-hidden relative">
                <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
                  <ShieldCheck className="w-32 h-32" />
                </div>
                <CardContent className="p-8 relative z-10">
                  <h3 className="text-xl font-bold mb-4">
                    {locale === "ar" ? "التزامنا تجاهكم" : "Our Commitment to You"}
                  </h3>
                  <ul className="space-y-4">
                    {[
                      { ar: "التعامل المهني والحيادي", en: "Professional and impartial handling" },
                      { ar: "المتابعة المنظمة والمستمرة", en: "Organized and continuous follow-up" },
                      { ar: "خصوصية وسرية المعلومات", en: "Privacy and confidentiality of information" },
                      { ar: "وضوح الإجراءات والشفافية", en: "Clarity of procedures and transparency" }
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-sm leading-relaxed text-white/90">
                          {locale === "ar" ? item.ar : item.en}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title={locale === "ar" ? "الأسئلة الشائعة" : "Frequently Asked Questions"} 
            subtitle={locale === "ar" ? "إجابات لاستفساراتكم حول تقديم الشكاوى" : "Answers to your questions about submitting complaints"}
          />
          
          <div className="max-w-3xl mx-auto mt-10">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} className="border-b border-slate-200">
                  <AccordionTrigger className="text-start text-lg font-semibold text-[#0b0d36] hover:text-[#262b80] py-4">
                    {locale === "ar" ? faq.questionAr : faq.questionEn}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 text-base leading-relaxed pb-4">
                    {locale === "ar" ? faq.answerAr : faq.answerEn}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA / Related Links */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4">
          <motion.div
            className="mx-auto max-w-4xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-[#0b0d36] mb-4">
              {locale === "ar" ? "هل تبحث عن خدمات أخرى؟" : "Looking for other services?"}
            </h2>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              {locale === "ar" 
                ? "إذا كنت ترغب بتقديم طلب للحصول على خدمة مصرفية بدلاً من تقديم شكوى، يمكنك زيارة الصفحة المخصصة لذلك." 
                : "If you wish to submit a request for a banking service instead of a complaint, you can visit the dedicated page."}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link href="/customer-service/service-request">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 rounded-xl border-[#262b80]/20 text-[#262b80] hover:bg-[#262b80]/5"
                >
                  {locale === "ar" ? "الانتقال إلى طلب خدمة" : "Go to Service Request"}
                  <ArrowRight className="ms-2 h-4 w-4 rtl:rotate-180" />
                </Button>
              </Link>
              <Link href="/customer-service/bank-cards-request">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 rounded-xl border-[#262b80]/20 text-[#262b80] hover:bg-[#262b80]/5"
                >
                  {locale === "ar" ? "طلب بطاقة بنكية" : "Bank Cards Request"}
                  <ArrowRight className="ms-2 h-4 w-4 rtl:rotate-180" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
