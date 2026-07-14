"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n-context"
import { PageHero } from "@/components/ui/page-hero"
import { SectionTitle } from "@/components/ui/section-title"
import { FAQAccordion } from "@/components/ui/faq-accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { faqs } from "@/data/mock-data"
import {
  Building2,
  Briefcase,
  Users,
  CreditCard,
  Check,
  ArrowRight,
  ArrowLeft,
  TrendingUp,
  Shield,
  Clock,
} from "lucide-react"

const businessTypes = [
  {
    id: "sme",
    icon: Building2,
    nameAr: "المشاريع الصغيرة والمتوسطة",
    nameEn: "Small & Medium Enterprises",
    descAr: "حلول مصرفية مخصصة لدعم نمو مشروعك الصغير أو المتوسط",
    descEn: "Tailored banking solutions to support your SME growth",
    featuresAr: [
      "تمويل يصل إلى 5 مليون ريال",
      "خدمات نقاط البيع",
      "حساب جاري بدون رسوم",
      "دعم متخصص",
    ],
    featuresEn: [
      "Financing up to 5M SAR",
      "POS services",
      "Free current account",
      "Dedicated support",
    ],
  },
  {
    id: "corporate",
    icon: Briefcase,
    nameAr: "الشركات الكبرى",
    nameEn: "Corporate Banking",
    descAr: "خدمات مصرفية متكاملة للشركات الكبرى والمؤسسات",
    descEn: "Comprehensive banking services for large corporations",
    featuresAr: [
      "تمويل المشاريع الكبرى",
      "إدارة السيولة",
      "خدمات الخزينة",
      "فريق متخصص",
    ],
    featuresEn: [
      "Large project financing",
      "Liquidity management",
      "Treasury services",
      "Specialized team",
    ],
  },
]

const services = [
  {
    id: "payroll",
    icon: Users,
    nameAr: "حلول الرواتب",
    nameEn: "Payroll Solutions",
    descAr: "نظام متكامل لإدارة رواتب موظفيك بكفاءة وأمان",
    descEn: "Integrated system to manage employee salaries efficiently",
  },
  {
    id: "pos",
    icon: CreditCard,
    nameAr: "نقاط البيع",
    nameEn: "POS Solutions",
    descAr: "أجهزة نقاط بيع متطورة لتسهيل عمليات الدفع",
    descEn: "Advanced POS devices to facilitate payment operations",
  },
]

const benefits = [
  {
    icon: TrendingUp,
    titleAr: "نمو أعمالك",
    titleEn: "Business Growth",
    descAr: "حلول تمويل مرنة لدعم توسع أعمالك",
    descEn: "Flexible financing solutions to support your expansion",
  },
  {
    icon: Shield,
    titleAr: "أمان مالي",
    titleEn: "Financial Security",
    descAr: "حماية متقدمة لجميع معاملاتك المصرفية",
    descEn: "Advanced protection for all your banking transactions",
  },
  {
    icon: Clock,
    titleAr: "خدمة سريعة",
    titleEn: "Fast Service",
    descAr: "إنجاز معاملاتك بسرعة وكفاءة",
    descEn: "Complete your transactions quickly and efficiently",
  },
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

export function BusinessBankingPageContent() {
  const { t, locale, direction } = useI18n()
  const Arrow = direction === "rtl" ? ArrowLeft : ArrowRight

  return (
    <>
      <PageHero
        title={t("page.businessBanking.title")}
        subtitle={t("page.businessBanking.subtitle")}
        breadcrumbs={[{ labelKey: "nav.businessBanking" }]}
      />

      {/* Business Types */}
      <section id="sme" className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {businessTypes.map((type) => {
              const Icon = type.icon
              return (
                <motion.div key={type.id} variants={item}>
                  <Card className="h-full rounded-2xl hover:shadow-lg transition-all overflow-hidden border-slate-200">
                    <div className="h-2 bg-gradient-to-r from-[#0b0d36] to-[#262b80]" />
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="p-4 bg-[#262b80]/8 rounded-xl text-[#262b80]">
                          <Icon className="h-8 w-8" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl mb-2">
                            {locale === "ar" ? type.nameAr : type.nameEn}
                          </CardTitle>
                          <p className="text-muted-foreground">
                            {locale === "ar" ? type.descAr : type.descEn}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="grid grid-cols-2 gap-3 mb-6">
                        {(locale === "ar" ? type.featuresAr : type.featuresEn).map(
                          (feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                              <Check className="h-4 w-4 text-[#262b80] shrink-0" />
                              {feature}
                            </li>
                          )
                        )}
                      </ul>
                      <Button className="rounded-xl bg-[#262b80] hover:bg-[#0b0d36] text-white">
                        {t("common.apply")}
                        <Arrow className="h-4 w-4 ms-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <SectionTitle
            title={locale === "ar" ? "لماذا تختارنا" : "Why Choose Us"}
          />

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div key={index} variants={item} className="text-center">
                  <div className="inline-flex p-4 bg-[#262b80]/8 rounded-2xl mb-4 text-[#262b80]">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {locale === "ar" ? benefit.titleAr : benefit.titleEn}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {locale === "ar" ? benefit.descAr : benefit.descEn}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="payroll" className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle
            title={locale === "ar" ? "خدمات الأعمال" : "Business Services"}
          />

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto"
          >
            {services.map((service) => {
              const Icon = service.icon
              return (
                <motion.div key={service.id} variants={item}>
                  <Card className="h-full rounded-2xl hover:shadow-lg transition-all">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="p-3 bg-[#262b80]/8 rounded-xl text-[#262b80]">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">
                          {locale === "ar" ? service.nameAr : service.nameEn}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {locale === "ar" ? service.descAr : service.descEn}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#0b0d36] via-[#262b80] to-[#0b0d36] rounded-3xl p-8 md:p-12 text-center text-primary-foreground shadow-[0_40px_80px_rgba(7,10,30,0.3)]"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {locale === "ar"
                ? "ابدأ رحلة نجاح أعمالك معنا"
                : "Start Your Business Success Journey With Us"}
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              {locale === "ar"
                ? "فريقنا المتخصص جاهز لمساعدتك في اختيار الحلول المصرفية المناسبة لأعمالك"
                : "Our specialized team is ready to help you choose the right banking solutions for your business"}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="rounded-xl">
                <Link href="/contact">{t("nav.contact")}</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-xl border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link href="/atm-and-branches">{t("nav.branches")}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <FAQAccordion faqs={faqs.filter((f) => f.category === "general")} />
    </>
  )
}
