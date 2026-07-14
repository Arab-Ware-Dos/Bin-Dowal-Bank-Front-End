"use client"

import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n-context"
import { PageHero } from "@/components/ui/page-hero"
import { SectionTitle } from "@/components/ui/section-title"
import { FAQAccordion } from "@/components/ui/faq-accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { faqs } from "@/data/mock-data"
import {
  Smartphone,
  Monitor,
  Landmark,
  Download,
  Shield,
  Lock,
  Eye,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Clock,
  Wifi,
  CreditCard,
  QrCode,
  Fingerprint,
} from "lucide-react"

const channels = [
  {
    id: "mobile",
    icon: Smartphone,
    nameAr: "تطبيق الجوال",
    nameEn: "Mobile App",
    descAr: "جميع خدماتك المصرفية في جيبك - متاح على iOS و Android",
    descEn: "All your banking services in your pocket - available on iOS & Android",
    featuresAr: [
      "تحويل الأموال الفوري",
      "دفع الفواتير",
      "إدارة البطاقات",
      "تتبع المعاملات",
      "فتح حساب جديد",
    ],
    featuresEn: [
      "Instant money transfer",
      "Bill payments",
      "Card management",
      "Transaction tracking",
      "Open new account",
    ],
  },
  {
    id: "internet",
    icon: Monitor,
    nameAr: "الخدمات المصرفية عبر الإنترنت",
    nameEn: "Internet Banking",
    descAr: "أدر حساباتك من جهاز الكمبيوتر بأمان وسهولة",
    descEn: "Manage your accounts securely from your computer",
    featuresAr: [
      "عرض الحسابات والأرصدة",
      "التحويلات المحلية والدولية",
      "طباعة كشف الحساب",
      "إدارة المستفيدين",
      "طلب دفتر شيكات",
    ],
    featuresEn: [
      "View accounts & balances",
      "Local & international transfers",
      "Print account statements",
      "Manage beneficiaries",
      "Request checkbook",
    ],
  },
  {
    id: "atms",
    icon: Landmark,
    nameAr: "أجهزة الصراف الآلي",
    nameEn: "ATMs",
    descAr: "شبكة واسعة من أجهزة الصراف الآلي في جميع أنحاء المملكة",
    descEn: "Wide network of ATMs across the Kingdom",
    featuresAr: [
      "سحب نقدي 24/7",
      "إيداع نقدي",
      "تحويل بين الحسابات",
      "دفع الفواتير",
      "طباعة كشف مختصر",
    ],
    featuresEn: [
      "24/7 cash withdrawal",
      "Cash deposit",
      "Inter-account transfer",
      "Bill payments",
      "Print mini statement",
    ],
  },
]

const securityTips = [
  {
    icon: Lock,
    titleAr: "لا تشارك كلمة المرور",
    titleEn: "Never share your password",
    descAr: "احتفظ ببيانات الدخول سرية ولا تشاركها مع أي شخص",
    descEn: "Keep your login credentials confidential and never share them",
  },
  {
    icon: Eye,
    titleAr: "تحقق من الروابط",
    titleEn: "Verify links",
    descAr: "تأكد من صحة عنوان الموقع قبل إدخال بياناتك",
    descEn: "Ensure the website URL is correct before entering your data",
  },
  {
    icon: AlertTriangle,
    titleAr: "احذر من الاحتيال",
    titleEn: "Beware of fraud",
    descAr: "لن نطلب منك بياناتك السرية عبر الهاتف أو البريد الإلكتروني",
    descEn: "We will never ask for your confidential data via phone or email",
  },
  {
    icon: Fingerprint,
    titleAr: "فعّل المصادقة الثنائية",
    titleEn: "Enable 2FA",
    descAr: "أضف طبقة حماية إضافية لحسابك",
    descEn: "Add an extra layer of protection to your account",
  },
]

const serviceStatus = [
  { nameAr: "تطبيق الجوال", nameEn: "Mobile App", status: "operational" },
  { nameAr: "الخدمات المصرفية عبر الإنترنت", nameEn: "Internet Banking", status: "operational" },
  { nameAr: "خدمة التحويلات", nameEn: "Transfer Service", status: "operational" },
  { nameAr: "دفع الفواتير", nameEn: "Bill Payments", status: "maintenance" },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function DigitalChannelsPage() {
  const { t, locale } = useI18n()

  return (
    <>
      <PageHero
        title={t("page.digitalChannels.title")}
        subtitle={t("page.digitalChannels.subtitle")}
        breadcrumbs={[{ labelKey: "nav.digitalChannels" }]}
      />

      {/* Digital Channels */}
      <section id="mobile" className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {channels.map((channel, index) => {
              const Icon = channel.icon
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={channel.id}
                  id={channel.id}
                  variants={item}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                    !isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={!isEven ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-[#262b80]/8 rounded-xl text-[#262b80]">
                        <Icon className="h-8 w-8" />
                      </div>
                      <h2 className="text-2xl font-bold">
                        {locale === "ar" ? channel.nameAr : channel.nameEn}
                      </h2>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      {locale === "ar" ? channel.descAr : channel.descEn}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                      {(locale === "ar" ? channel.featuresAr : channel.featuresEn).map(
                        (feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-2 text-sm"
                          >
                            <CheckCircle className="h-4 w-4 text-[#262b80] shrink-0" />
                            {feature}
                          </li>
                        )
                      )}
                    </ul>
                    {channel.id === "mobile" && (
                      <div className="flex flex-wrap gap-3">
                        <Button className="rounded-xl bg-[#262b80] hover:bg-[#0b0d36] text-white">
                          <Download className="h-4 w-4 me-2" />
                          App Store
                        </Button>
                        <Button variant="outline" className="rounded-xl">
                          <Download className="h-4 w-4 me-2" />
                          Google Play
                        </Button>
                      </div>
                    )}
                    {channel.id === "internet" && (
                      <Button className="rounded-xl bg-[#262b80] hover:bg-[#0b0d36] text-white">
                        <Monitor className="h-4 w-4 me-2" />
                        {locale === "ar" ? "ادخل الآن" : "Login Now"}
                      </Button>
                    )}
                  </div>

                  {/* Visual */}
                  <div className={!isEven ? "lg:order-1" : ""}>
                    <Card className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#0b0d36]/5 via-[#262b80]/5 to-[#0b0d36]/5 border-slate-200/60">
                      <CardContent className="p-8 flex items-center justify-center min-h-[300px]">
                        {channel.id === "mobile" && (
                          <div className="relative w-48 h-96 bg-foreground rounded-[2.5rem] p-2 shadow-xl">
                            <div className="w-full h-full bg-background rounded-[2rem] flex items-center justify-center">
                              <Smartphone className="h-16 w-16 text-[#262b80]/30" />
                            </div>
                          </div>
                        )}
                        {channel.id === "internet" && (
                          <div className="w-full max-w-md bg-card rounded-xl shadow-lg overflow-hidden">
                            <div className="h-8 bg-secondary flex items-center gap-2 px-3">
                              <div className="flex gap-1">
                                <div className="w-3 h-3 rounded-full bg-red-400" />
                                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                <div className="w-3 h-3 rounded-full bg-green-400" />
                              </div>
                            </div>
                            <div className="p-6 flex items-center justify-center h-48">
                              <Monitor className="h-16 w-16 text-[#262b80]/30" />
                            </div>
                          </div>
                        )}
                        {channel.id === "atms" && (
                          <div className="grid grid-cols-3 gap-4">
                            {[1, 2, 3].map((i) => (
                              <div
                                key={i}
                                className="bg-card rounded-xl p-4 shadow-md flex flex-col items-center"
                              >
                                <Landmark className="h-8 w-8 text-[#262b80] mb-2" />
                                <div className="text-xs text-muted-foreground">ATM {i}</div>
                              </div>
                            ))}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Security Tips */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <SectionTitle
            title={locale === "ar" ? "نصائح أمنية" : "Security Tips"}
            subtitle={
              locale === "ar"
                ? "احمِ حسابك باتباع هذه الإرشادات"
                : "Protect your account by following these guidelines"
            }
          />

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {securityTips.map((tip, index) => {
              const Icon = tip.icon
              return (
                <motion.div key={index} variants={item}>
                  <Card className="h-full rounded-2xl text-center hover:shadow-lg transition-all">
                    <CardContent className="p-6">
                      <div className="inline-flex p-4 bg-[#262b80]/8 rounded-2xl mb-4 text-[#262b80]">
                        <Icon className="h-8 w-8" />
                      </div>
                      <h3 className="font-semibold mb-2">
                        {locale === "ar" ? tip.titleAr : tip.titleEn}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {locale === "ar" ? tip.descAr : tip.descEn}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Service Status */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle
            title={locale === "ar" ? "حالة الخدمات" : "Service Status"}
          />

          <Card className="max-w-2xl mx-auto rounded-2xl">
            <CardContent className="p-6">
              <div className="space-y-4">
                {serviceStatus.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-3 border-b border-border last:border-0"
                  >
                    <span className="font-medium">
                      {locale === "ar" ? service.nameAr : service.nameEn}
                    </span>
                    <Badge
                      variant={
                        service.status === "operational" ? "default" : "secondary"
                      }
                      className={
                        service.status === "operational"
                          ? "bg-green-500/10 text-green-600 hover:bg-green-500/20"
                          : "bg-yellow-500/10 text-yellow-600 hover:bg-yellow-500/20"
                      }
                    >
                      {service.status === "operational" ? (
                        <>
                          <CheckCircle className="h-3 w-3 me-1" />
                          {locale === "ar" ? "يعمل" : "Operational"}
                        </>
                      ) : (
                        <>
                          <Clock className="h-3 w-3 me-1" />
                          {locale === "ar" ? "صيانة" : "Maintenance"}
                        </>
                      )}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <FAQAccordion faqs={faqs.filter((f) => f.category === "digital")} />
    </>
  )
}
