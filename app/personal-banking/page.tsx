"use client"

import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n-context"
import { PageHero } from "@/components/ui/page-hero"
import { SectionTitle } from "@/components/ui/section-title"
import { FAQAccordion } from "@/components/ui/faq-accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { faqs } from "@/data/mock-data"
import {
  Wallet,
  ArrowLeftRight,
  HandCoins,
  Send,
  Check,
  Star,
} from "lucide-react"

const accounts = [
  {
    id: "current",
    icon: Wallet,
    nameAr: "الحساب الجاري",
    nameEn: "Current Account",
    descAr: "حساب مرن لإدارة معاملاتك اليومية",
    descEn: "Flexible account for your daily transactions",
    featuresAr: ["بدون رسوم شهرية", "بطاقة صراف مجانية", "خدمات رقمية متكاملة"],
    featuresEn: ["No monthly fees", "Free debit card", "Integrated digital services"],
    popular: true,
  },
  {
    id: "savings",
    icon: HandCoins,
    nameAr: "حساب التوفير",
    nameEn: "Savings Account",
    descAr: "وفّر أموالك واحصل على عوائد متوافقة مع الشريعة",
    descEn: "Save money and earn Sharia-compliant returns",
    featuresAr: ["عوائد تنافسية", "سحب مرن", "لا حد أدنى للرصيد"],
    featuresEn: ["Competitive returns", "Flexible withdrawal", "No minimum balance"],
    popular: false,
  },
  {
    id: "premium",
    icon: Star,
    nameAr: "الحساب المميز",
    nameEn: "Premium Account",
    descAr: "خدمات حصرية للعملاء المميزين",
    descEn: "Exclusive services for premium customers",
    featuresAr: ["مدير علاقات شخصي", "صالات المطار مجاناً", "بطاقة بلاتينية"],
    featuresEn: ["Personal relationship manager", "Free airport lounges", "Platinum card"],
    popular: false,
  },
]

const services = [
  {
    id: "transfers",
    icon: ArrowLeftRight,
    nameAr: "التحويلات",
    nameEn: "Transfers",
    descAr: "حوّل أموالك محلياً ودولياً بسهولة وأمان",
    descEn: "Transfer money locally and internationally with ease",
  },
  {
    id: "remittances",
    icon: Send,
    nameAr: "الحوالات",
    nameEn: "Remittances",
    descAr: "أرسل حوالات إلى أي مكان في العالم",
    descEn: "Send remittances anywhere in the world",
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

export default function PersonalBankingPage() {
  const { t, locale } = useI18n()

  return (
    <>
      <PageHero
        title={t("page.personalBanking.title")}
        subtitle={t("page.personalBanking.subtitle")}
        breadcrumbs={[{ labelKey: "nav.personalBanking" }]}
      />

      {/* Accounts Section */}
      <section id="accounts" className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle
            title={locale === "ar" ? "حساباتنا" : "Our Accounts"}
            subtitle={
              locale === "ar"
                ? "اختر الحساب المناسب لاحتياجاتك"
                : "Choose the account that suits your needs"
            }
          />

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {accounts.map((account) => {
              const Icon = account.icon
              return (
                <motion.div key={account.id} variants={item}>
                  <Card className="h-full rounded-2xl border-border hover:border-primary/30 hover:shadow-lg transition-all relative">
                    {account.popular && (
                      <Badge className="absolute -top-3 start-4 bg-accent text-accent-foreground">
                        {locale === "ar" ? "الأكثر طلباً" : "Most Popular"}
                      </Badge>
                    )}
                    <CardHeader>
                      <div className="p-3 bg-[#262b80]/8 rounded-xl w-fit mb-3">
                        <Icon className="h-6 w-6 text-[#262b80]" />
                      </div>
                      <CardTitle className="text-xl">
                        {locale === "ar" ? account.nameAr : account.nameEn}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        {locale === "ar" ? account.descAr : account.descEn}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {(locale === "ar" ? account.featuresAr : account.featuresEn).map(
                          (feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                              <Check className="h-4 w-4 text-[#262b80] shrink-0" />
                              {feature}
                            </li>
                          )
                        )}
                      </ul>
                      <Button className="w-full rounded-xl bg-[#262b80] hover:bg-[#0b0d36] text-white transition-colors">{t("common.apply")}</Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="transfers" className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <SectionTitle
            title={locale === "ar" ? "خدماتنا" : "Our Services"}
            subtitle={
              locale === "ar"
                ? "خدمات متكاملة لتلبية جميع احتياجاتك المصرفية"
                : "Comprehensive services to meet all your banking needs"
            }
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
                      <div className="p-3 bg-[#262b80]/8 rounded-xl">
                        <Icon className="h-6 w-6 text-[#262b80]" />
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

      {/* Comparison Table */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle
            title={locale === "ar" ? "قارن بين الحسابات" : "Compare Accounts"}
          />

          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-start p-4 font-medium text-muted-foreground">
                    {locale === "ar" ? "الميزة" : "Feature"}
                  </th>
                  {accounts.map((acc) => (
                    <th key={acc.id} className="text-center p-4 font-semibold">
                      {locale === "ar" ? acc.nameAr : acc.nameEn}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-4 text-muted-foreground">
                    {locale === "ar" ? "رسوم شهرية" : "Monthly Fee"}
                  </td>
                  <td className="text-center p-4 text-green-600">
                    {locale === "ar" ? "مجاني" : "Free"}
                  </td>
                  <td className="text-center p-4 text-green-600">
                    {locale === "ar" ? "مجاني" : "Free"}
                  </td>
                  <td className="text-center p-4">500 SAR</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 text-muted-foreground">
                    {locale === "ar" ? "بطاقة صراف" : "Debit Card"}
                  </td>
                  <td className="text-center p-4">
                    <Check className="h-5 w-5 text-[#262b80] mx-auto" />
                  </td>
                  <td className="text-center p-4">
                    <Check className="h-5 w-5 text-[#262b80] mx-auto" />
                  </td>
                  <td className="text-center p-4">
                    <Check className="h-5 w-5 text-[#262b80] mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 text-muted-foreground">
                    {locale === "ar" ? "عوائد" : "Returns"}
                  </td>
                  <td className="text-center p-4">-</td>
                  <td className="text-center p-4">
                    <Check className="h-5 w-5 text-[#262b80] mx-auto" />
                  </td>
                  <td className="text-center p-4">
                    <Check className="h-5 w-5 text-[#262b80] mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 text-muted-foreground">
                    {locale === "ar" ? "مدير علاقات" : "Relationship Manager"}
                  </td>
                  <td className="text-center p-4">-</td>
                  <td className="text-center p-4">-</td>
                  <td className="text-center p-4">
                    <Check className="h-5 w-5 text-[#262b80] mx-auto" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQAccordion faqs={faqs.filter((f) => f.category === "accounts")} />
    </>
  )
}
