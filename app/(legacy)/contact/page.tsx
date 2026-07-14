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
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  CheckCircle,
  Headphones,
  Building2,
  Globe,
  ArrowUpRight,
} from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, ease: "easeOut" },
}

export default function ContactPage() {
  const { locale } = useI18n()
  const [formSubmitted, setFormSubmitted] = useState(false)

  const inputClassName =
    "h-12 rounded-xl border-slate-200/80 bg-white/90 shadow-none transition-all duration-300 placeholder:text-slate-400 focus-visible:border-[#262b80]/40 focus-visible:ring-[3px] focus-visible:ring-[#262b80]/10"

  const textareaClassName =
    "min-h-[140px] rounded-xl border-slate-200/80 bg-white/90 shadow-none transition-all duration-300 placeholder:text-slate-400 focus-visible:border-[#262b80]/40 focus-visible:ring-[3px] focus-visible:ring-[#262b80]/10"

  const contactInfo = [
    {
      icon: Phone,
      titleAr: "الهاتف",
      titleEn: "Phone",
      valueAr: "920000123",
      valueEn: "920000123",
      descAr: "متاح من الأحد إلى الخميس",
      descEn: "Available Sunday to Thursday",
    },
    {
      icon: Mail,
      titleAr: "البريد الإلكتروني",
      titleEn: "Email",
      valueAr: "info@bindowalbank.com",
      valueEn: "info@bindowalbank.com",
      descAr: "نرد خلال 24 ساعة",
      descEn: "We respond within 24 hours",
    },
    {
      icon: MapPin,
      titleAr: "العنوان",
      titleEn: "Address",
      valueAr: "اليمن، حضرموت، المكلا",
      valueEn: "Yemen, Hadhramaut, Mukalla",
      descAr: "المقر الرئيسي",
      descEn: "Head Office",
    },
    {
      icon: Clock,
      titleAr: "ساعات العمل",
      titleEn: "Working Hours",
      valueAr: "8:00 ص - 4:00 م",
      valueEn: "8:00 AM - 4:00 PM",
      descAr: "الأحد - الخميس",
      descEn: "Sunday - Thursday",
    },
  ]

  const supportChannels = [
    {
      icon: Headphones,
      titleAr: "مركز الاتصال",
      titleEn: "Call Center",
      descAr: "تحدث مع أحد ممثلي خدمة العملاء للحصول على المساعدة المباشرة.",
      descEn: "Speak with a customer service representative for direct assistance.",
      actionAr: "اتصل الآن",
      actionEn: "Call Now",
    },
    {
      icon: MessageSquare,
      titleAr: "الدردشة المباشرة",
      titleEn: "Live Chat",
      descAr: "ابدأ محادثة مباشرة للحصول على رد سريع عبر الموقع.",
      descEn: "Start a live conversation for a quick response عبر the website.",
      actionAr: "ابدأ المحادثة",
      actionEn: "Start Chat",
    },
    {
      icon: Building2,
      titleAr: "زيارة الفرع",
      titleEn: "Visit Branch",
      descAr: "قم بزيارة أقرب فرع للحصول على خدمة مصرفية مباشرة.",
      descEn: "Visit your nearest branch for direct banking assistance.",
      actionAr: "ابحث عن فرع",
      actionEn: "Find Branch",
    },
    {
      icon: Globe,
      titleAr: "الخدمات الإلكترونية",
      titleEn: "Online Services",
      descAr: "أنجز عملياتك اليومية بسهولة عبر القنوات الرقمية للبنك.",
      descEn: "Complete your daily banking tasks through the bank’s digital services.",
      actionAr: "تسجيل الدخول",
      actionEn: "Login",
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 5000)
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(38,43,128,0.08),transparent_28%),linear-gradient(to_bottom,#ffffff,#f8fafc)]">
      <PageHero
        title={locale === "ar" ? "اتصل بنا" : "Contact Us"}
        subtitle={
          locale === "ar"
            ? "نحن هنا لخدمتك عبر قنوات تواصل واضحة، سريعة، ومصممة لتجربة مصرفية أكثر احترافية."
            : "We are here to support you through clear, responsive, and professionally designed communication channels."
        }
        breadcrumbs={[
          { labelKey: locale === "ar" ? "الرئيسية" : "Home", href: "/" },
          { labelKey: locale === "ar" ? "اتصل بنا" : "Contact Us" },
        ]}
      />

      {/* Contact Info Cards */}
      <section className="relative overflow-hidden py-16 md:py-20">
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#262b80]/[0.05] to-transparent" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center rounded-full border border-[#262b80]/10 bg-white/80 px-4 py-2 text-xs font-semibold tracking-[0.22em] text-[#262b80] shadow-sm backdrop-blur-sm">
              {locale === "ar" ? "بيانات التواصل" : "CONTACT DETAILS"}
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-[#0b0d36] md:text-4xl">
              {locale === "ar"
                ? "تواصل معنا"
                : "Contact Us"}
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600 md:text-lg">
              {locale === "ar"
                ? "تواصل معنا بسهولة ويسر عبر قنواتنا المتعددة"
                : "Contact us easily and smoothly through our multiple channels"}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info, index) => (
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
                      <info.icon className="h-6 w-6" />
                    </div>

                    <div className="space-y-2">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                        {locale === "ar" ? info.titleAr : info.titleEn}
                      </p>
                      <h3 className="text-lg font-semibold leading-7 text-[#0b0d36]">
                        {locale === "ar" ? info.valueAr : info.valueEn}
                      </h3>
                      <p className="text-sm leading-7 text-slate-600">
                        {locale === "ar" ? info.descAr : info.descEn}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Support Channels */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(248,250,252,0.45),rgba(241,245,249,0.9))]" />
        <div className="absolute left-0 top-20 h-56 w-56 rounded-full bg-[#262b80]/[0.05] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[#7a1f3d]/[0.04] blur-3xl" />

        <div className="container relative mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            {/* Contact Form */}
            <motion.div {...fadeInUp} className="lg:col-span-7">
              <Card className="relative overflow-hidden rounded-[32px] border border-white/70 bg-white shadow-[0_28px_90px_-35px_rgba(11,13,54,0.28)]">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0b0d36] via-[#262b80] to-[#7a1f3d]/80" />
                <div className="absolute -left-12 top-10 h-32 w-32 rounded-full bg-[#262b80]/10 blur-3xl" />
                <div className="absolute -bottom-12 right-6 h-28 w-28 rounded-full bg-[#7a1f3d]/10 blur-3xl" />

                <CardHeader className="relative pb-4">
                  <div className="mb-4 inline-flex w-fit items-center rounded-full border border-[#262b80]/10 bg-[#262b80]/[0.04] px-4 py-2 text-xs font-semibold tracking-[0.22em] text-[#262b80]">
                    {locale === "ar" ? "نموذج التواصل" : "CONTACT FORM"}
                  </div>

                  <CardTitle className="flex items-center gap-3 text-2xl text-[#0b0d36] md:text-[28px]">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0b0d36] via-[#262b80] to-[#3b43a8] text-white shadow-[0_16px_30px_-16px_rgba(38,43,128,0.55)]">
                      <Send className="h-5 w-5" />
                    </span>
                    {locale === "ar" ? "أرسل رسالتك" : "Send Your Message"}
                  </CardTitle>

                  <p className="text-sm leading-7 text-slate-600 md:text-base">
                    {locale === "ar"
                      ? "املأ النموذج أدناه وسنقوم بالرد عليك في أقرب وقت ممكن"
                      : "Fill out the form below and we will get back to you as soon as possible."}
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
                        {locale === "ar" ? "تم إرسال رسالتك بنجاح!" : "Message Sent Successfully!"}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {locale === "ar" ? "سنتواصل معك قريبًا." : "We will contact you soon."}
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
                          <Label htmlFor="phone" className="text-sm font-medium text-[#0b0d36]">
                            {locale === "ar" ? "رقم الجوال" : "Phone Number"}
                          </Label>
                          <Input id="phone" type="tel" required className={inputClassName} />
                        </div>
                      </div>

                      <div className="space-y-2.5">
                        <Label htmlFor="email" className="text-sm font-medium text-[#0b0d36]">
                          {locale === "ar" ? "البريد الإلكتروني" : "Email Address"}
                        </Label>
                        <Input id="email" type="email" required className={inputClassName} />
                      </div>

                      <div className="space-y-2.5">
                        <Label htmlFor="subject" className="text-sm font-medium text-[#0b0d36]">
                          {locale === "ar" ? "الموضوع" : "Subject"}
                        </Label>
                        <Input id="subject" required className={inputClassName} />
                      </div>

                      <div className="space-y-2.5">
                        <Label htmlFor="message" className="text-sm font-medium text-[#0b0d36]">
                          {locale === "ar" ? "الرسالة" : "Message"}
                        </Label>
                        <Textarea id="message" rows={6} required className={textareaClassName} />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="h-13 w-full rounded-xl bg-gradient-to-r from-[#0b0d36] via-[#262b80] to-[#2e3697] text-white shadow-[0_20px_40px_-20px_rgba(38,43,128,0.7)] transition-all duration-300 hover:scale-[1.01] hover:from-[#090b2d] hover:via-[#1d2370] hover:to-[#262b80]"
                      >
                        <Send className="me-2 h-4 w-4" />
                        {locale === "ar" ? "إرسال الرسالة" : "Send Message"}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Support Channels */}
            <motion.div {...fadeInUp} className="lg:col-span-5">
              <div className="mb-6">
                <div className="mb-4 inline-flex items-center rounded-full border border-[#262b80]/10 bg-white/80 px-4 py-2 text-xs font-semibold tracking-[0.22em] text-[#262b80] shadow-sm backdrop-blur-sm">
                  {locale === "ar" ? "قنوات الدعم" : "SUPPORT CHANNELS"}
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-[#0b0d36]">
                  {locale === "ar" ? "اختر القناة الأنسب لتواصلك" : "Choose the most suitable support channel"}
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-600">
                  {locale === "ar"
                    ? "بإمكانك التواصل معنا عبر القنوات التالية"
                    : "You can contact us through the following channels"}
                </p>
              </div>

              <div className="space-y-4">
                {supportChannels.map((channel, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ y: -4 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                  >
                    <Card className="group overflow-hidden rounded-[26px] border border-slate-200/80 bg-white/85 shadow-[0_18px_45px_-32px_rgba(15,23,42,0.32)] backdrop-blur-sm transition-all duration-500 hover:border-[#262b80]/15 hover:shadow-[0_24px_65px_-34px_rgba(11,13,54,0.3)]">
                      <CardContent className="p-5 md:p-6">
                        <div className="flex items-center gap-4">
                          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0b0d36] via-[#262b80] to-[#3941a8] text-white shadow-[0_18px_34px_-18px_rgba(38,43,128,0.58)]">
                            <channel.icon className="h-5 w-5" />
                          </div>

                          <div className="min-w-0 flex-1">
                            <div className="mb-1 flex items-center gap-2">
                              <h3 className="font-semibold text-[#0b0d36]">
                                {locale === "ar" ? channel.titleAr : channel.titleEn}
                              </h3>
                              <span className="rounded-full border border-[#262b80]/10 bg-[#262b80]/5 px-2.5 py-1 text-[11px] font-medium text-[#262b80]">
                                {locale === "ar" ? "متاح" : "Available"}
                              </span>
                            </div>
                            <p className="text-sm leading-7 text-slate-600">
                              {locale === "ar" ? channel.descAr : channel.descEn}
                            </p>
                          </div>

                          <Button
                            variant="ghost"
                            size="sm"
                            className="hidden shrink-0 rounded-full border border-slate-200 bg-white/90 px-4 text-[#0b0d36] transition-all duration-300 hover:bg-[#0b0d36] hover:text-white md:inline-flex"
                          >
                            {locale === "ar" ? channel.actionAr : channel.actionEn}
                            <ArrowUpRight className="ms-2 h-4 w-4" />
                          </Button>
                        </div>

                        <Button
                          variant="ghost"
                          size="sm"
                          className="mt-4 inline-flex rounded-full border border-slate-200 bg-white/90 px-4 text-[#0b0d36] transition-all duration-300 hover:bg-[#0b0d36] hover:text-white md:hidden"
                        >
                          {locale === "ar" ? channel.actionAr : channel.actionEn}
                          <ArrowUpRight className="ms-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    {/* Map Section */}
<section className="py-16 md:py-20">
  <div className="container mx-auto px-4">
    <SectionTitle
      title={locale === "ar" ? "موقعنا" : "Our Location"}
      subtitle={
        locale === "ar"
          ? "المقر الرئيسي"
          : "Head office"
      }
    />

    <motion.div
      className="mt-10 overflow-hidden rounded-[32px] border border-slate-200/80 bg-white shadow-[0_26px_80px_-38px_rgba(15,23,42,0.32)]"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
    >
      <div className="grid lg:grid-cols-[1.05fr_1.2fr]">
        <div className="relative p-8 md:p-10">
          <div className="absolute inset-y-0 right-0 hidden w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent lg:block" />

          <div className="mb-4 inline-flex items-center rounded-full border border-[#262b80]/10 bg-[#262b80]/[0.04] px-4 py-2 text-xs font-semibold tracking-[0.22em] text-[#262b80]">
            {locale === "ar" ? "المقر الرئيسي" : "HEAD OFFICE"}
          </div>

          <h3 className="text-2xl font-bold text-[#0b0d36] md:text-3xl">
            {locale === "ar"
              ? "المقر الرئيسي"
              : "Head office"}
          </h3>

          <p className="mt-4 max-w-xl text-base leading-8 text-slate-600">
            {locale === "ar"
              ? "اهلا وسهلا بكم في المقر الرئيسي لبنك بن دول للتمويل الاصغر الاسلامي"
              : "Welcome to the head office of Bin Dowal Islamic Microfinance Bank"}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-5">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#262b80] shadow-sm">
                <MapPin className="h-5 w-5" />
              </div>
              <p className="text-sm font-semibold text-[#0b0d36]">
                {locale === "ar" ? "العنوان" : "Address"}
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                {locale === "ar"
                  ? "فرع بنك بن دول - المكلا - حضرموت - اليمن"
                  : "Bin Dowal Bank Branch - Mukalla - Hadhramaut - Yemen"}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-5">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#262b80] shadow-sm">
                <Clock className="h-5 w-5" />
              </div>
              <p className="text-sm font-semibold text-[#0b0d36]">
                {locale === "ar" ? "ساعات العمل" : "Working Hours"}
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                {locale === "ar"
                  ? "الأحد - الخميس | 8:00 ص - 4:00 م"
                  : "Sunday - Thursday | 8:00 AM - 4:00 PM"}
              </p>
            </div>
          </div>
        </div>

        <div className="relative min-h-[380px] bg-slate-100">
          <iframe
            title={locale === "ar" ? "موقع البنك على الخريطة" : "Bank location map"}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15445.198705067372!2d49.18829225581686!3d14.581992228989757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3de8e544e7159107%3A0x6ca670d6ab83c429!2sBin%20Dowal%20Islamic%20Microfinance%20Bank!5e0!3m2!1sar!2s!4v1775476729416!5m2!1sar!2s"
            className="absolute inset-0 h-full w-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0d36]/30 via-transparent to-transparent" />

          <div className="absolute bottom-5 left-5 right-5 rounded-[22px] border border-white/20 bg-white/88 p-4 shadow-[0_16px_40px_-20px_rgba(15,23,42,0.35)] backdrop-blur-md md:left-6 md:right-6">
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0b0d36] via-[#262b80] to-[#3941a8] text-white shadow-[0_14px_28px_-16px_rgba(38,43,128,0.6)]">
                <MapPin className="h-5 w-5" />
              </div>

              <div className="min-w-0">
                <p className="text-sm font-semibold text-[#0b0d36]">
                  {locale === "ar"
                    ? "بنك بن دول للتمويل الأصغر الإسلامي"
                    : "Bin Dowal Islamic Microfinance Bank"}
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  {locale === "ar"
                    ? "المكلا - حضرموت - اليمن"
                    : "Mukalla - Hadhramaut - Yemen"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
</section>

      {/* FAQ CTA */}
      <section className="pb-16 pt-8 md:pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="relative overflow-hidden rounded-[32px] border border-[#0b0d36]/10 bg-gradient-to-br from-[#0b0d36] via-[#1b2264] to-[#262b80] px-6 py-10 text-white shadow-[0_28px_90px_-40px_rgba(11,13,54,0.5)] md:px-10 md:py-12"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_30%)]" />
            <div className="absolute -bottom-16 left-0 h-40 w-40 rounded-full bg-[#7a1f3d]/20 blur-3xl" />

            <div className="relative flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-start">
              <div className="max-w-2xl">
                <div className="mb-4 inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold tracking-[0.22em] text-white/85 backdrop-blur-md">
                  {locale === "ar" ? "الأسئلة الشائعة" : "FAQ"}
                </div>

                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  {locale === "ar" ? "هل لديك استفسارات إضافية؟" : "Do you have additional questions?"}
                </h2>

                <p className="mt-4 text-base leading-8 text-white/80 md:text-lg">
                  {locale === "ar"
                    ? "يمكنك أيضًا تصفح قسم الأسئلة الشائعة للحصول على إجابات سريعة ومباشرة حول الخدمات والإجراءات المصرفية."
                    : "You can also browse the FAQ section for quick and direct answers about banking services and procedures."}
                </p>
              </div>

              <Button
                variant="secondary"
                size="lg"
                className="h-12 rounded-xl bg-white px-6 text-[#0b0d36] shadow-[0_18px_40px_-20px_rgba(255,255,255,0.55)] transition-all duration-300 hover:scale-[1.02] hover:bg-slate-100"
              >
                {locale === "ar" ? "عرض الأسئلة الشائعة" : "View FAQ"}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}