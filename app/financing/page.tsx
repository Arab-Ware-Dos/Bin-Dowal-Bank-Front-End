"use client"

import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n-context"
import { PageHero } from "@/components/ui/page-hero"
import { SectionTitle } from "@/components/ui/section-title"
import { FAQAccordion } from "@/components/ui/faq-accordion"
import { CalculatorSection } from "@/components/home/calculator-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { financingProducts, faqs } from "@/data/mock-data"
import { Car, Home, User, Check, FileText, AlertCircle } from "lucide-react"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  auto: Car,
  home: Home,
  personal: User,
}

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

export default function FinancingPage() {
  const { t, locale } = useI18n()

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat(locale === "ar" ? "ar-SA" : "en-SA").format(num)
  }

  return (
    <>
      <PageHero
        title={t("page.financing.title")}
        subtitle={t("page.financing.subtitle")}
        breadcrumbs={[{ labelKey: "nav.financing" }]}
      />

      {/* Financing Products */}
      <section id="auto" className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle
            title={locale === "ar" ? "منتجات التمويل" : "Financing Products"}
            subtitle={
              locale === "ar"
                ? "اختر التمويل المناسب لاحتياجاتك"
                : "Choose the right financing for your needs"
            }
          />

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {financingProducts.map((product) => {
              const Icon = iconMap[product.type] || User
              return (
                <motion.div key={product.id} variants={item} id={product.type}>
                  <Card className="h-full rounded-2xl hover:shadow-lg transition-all overflow-hidden border-slate-200">
                    <div className="h-2 bg-gradient-to-r from-[#0b0d36] to-[#262b80]" />
                    <CardHeader>
                      <div className="p-4 bg-[#262b80]/8 rounded-xl w-fit mb-3 text-[#262b80]">
                        <Icon className="h-8 w-8" />
                      </div>
                      <CardTitle className="text-xl">
                        {locale === "ar" ? product.nameAr : product.nameEn}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-6">
                        {locale === "ar" ? product.descAr : product.descEn}
                      </p>

                      {/* Product Details */}
                      <div className="space-y-3 mb-6">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">
                            {locale === "ar" ? "الحد الأدنى" : "Minimum"}
                          </span>
                          <span className="font-medium">
                            {formatNumber(product.minAmount)} SAR
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">
                            {locale === "ar" ? "الحد الأقصى" : "Maximum"}
                          </span>
                          <span className="font-medium">
                            {formatNumber(product.maxAmount)} SAR
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">
                            {locale === "ar" ? "أقصى مدة" : "Max Period"}
                          </span>
                          <span className="font-medium">
                            {product.maxPeriod} {locale === "ar" ? "شهر" : "months"}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">
                            {locale === "ar" ? "معدل الربح" : "Profit Rate"}
                          </span>
                          <span className="font-medium text-[#262b80]">
                            {product.profitRate}%
                          </span>
                        </div>
                      </div>

                      <Button className="w-full rounded-xl bg-[#262b80] hover:bg-[#0b0d36] text-white">{t("common.apply")}</Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Calculator */}
      <CalculatorSection />

      {/* Requirements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle
            title={locale === "ar" ? "المتطلبات" : "Requirements"}
            subtitle={
              locale === "ar"
                ? "المستندات المطلوبة للحصول على التمويل"
                : "Documents required to obtain financing"
            }
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* General Requirements */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-[#262b80]" />
                    {locale === "ar" ? "المستندات الأساسية" : "Basic Documents"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      locale === "ar" ? "الهوية الوطنية أو الإقامة" : "National ID or Residency",
                      locale === "ar" ? "شهادة تعريف بالراتب" : "Salary Certificate",
                      locale === "ar" ? "كشف حساب بنكي" : "Bank Statement",
                      locale === "ar" ? "عقد العمل" : "Employment Contract",
                    ].map((req, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                        <Check className="h-4 w-4 text-[#262b80] shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Important Notes */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="rounded-2xl border-accent/30 bg-accent/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-accent" />
                    {locale === "ar" ? "ملاحظات مهمة" : "Important Notes"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li>
                      {locale === "ar"
                        ? "• يجب أن يكون العمر بين 21 و 60 سنة"
                        : "• Age must be between 21 and 60 years"}
                    </li>
                    <li>
                      {locale === "ar"
                        ? "• الحد الأدنى للراتب 4,000 ريال"
                        : "• Minimum salary 4,000 SAR"}
                    </li>
                    <li>
                      {locale === "ar"
                        ? "• جميع المنتجات متوافقة مع الشريعة الإسلامية"
                        : "• All products are Sharia-compliant"}
                    </li>
                    <li>
                      {locale === "ar"
                        ? "• الموافقة تخضع لسياسة البنك الائتمانية"
                        : "• Approval subject to bank credit policy"}
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <FAQAccordion faqs={faqs.filter((f) => f.category === "financing")} />
    </>
  )
}
