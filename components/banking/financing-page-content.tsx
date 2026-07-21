"use client"

import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n-context"
import { PageHero } from "@/components/ui/page-hero"
import { SectionTitle } from "@/components/ui/section-title"
import { FAQAccordion } from "@/components/ui/faq-accordion"
import { CalculatorSection } from "@/components/home/calculator-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { faqs } from "@/data/mock-data"
import { financingServices } from "@/data/financing-services"
import { Check, FileText, AlertCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getLocalizedHref } from "@/lib/localized-routes"

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

export function FinancingPageContent() {
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
            {financingServices
              .filter((service) => service.showOnFinancingPage)
              .sort((a, b) => a.order - b.order)
              .map((service) => (
                <motion.div key={service.id} variants={item} id={service.id}>
                  <article className="overflow-hidden rounded-3xl border bg-card hover:shadow-lg transition-all h-full flex flex-col">
                    <div className="relative aspect-[16/9]">
                      <Image
                        src={service.image}
                        alt={t(service.titleKey as any)}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <h3 className="absolute bottom-5 start-5 text-2xl font-semibold text-white">
                        {t(service.titleKey as any)}
                      </h3>
                    </div>
                    <div className="space-y-5 p-6 flex flex-col flex-grow">
                      <p className="text-muted-foreground flex-grow">
                        {t(service.descriptionKey as any)}
                      </p>

                      {/* Financial Details if available */}
                      {service.details ? (
                        <div className="space-y-3 py-2">
                          {service.details.minAmount != null && (
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">
                                {locale === "ar" ? "الحد الأدنى" : "Minimum"}
                              </span>
                              <span className="font-medium">
                                {formatNumber(service.details.minAmount)} SAR
                              </span>
                            </div>
                          )}
                          {service.details.maxAmount != null && (
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">
                                {locale === "ar" ? "الحد الأقصى" : "Maximum"}
                              </span>
                              <span className="font-medium">
                                {formatNumber(service.details.maxAmount)} SAR
                              </span>
                            </div>
                          )}
                          {service.details.maxPeriodMonths != null && (
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">
                                {locale === "ar" ? "أقصى مدة" : "Max Period"}
                              </span>
                              <span className="font-medium">
                                {service.details.maxPeriodMonths} {locale === "ar" ? "شهر" : "months"}
                              </span>
                            </div>
                          )}
                          {service.details.profitRate != null && (
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">
                                {locale === "ar" ? "معدل الربح" : "Profit Rate"}
                              </span>
                              <span className="font-medium text-[#262b80]">
                                {service.details.profitRate}%
                              </span>
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="py-2">
                          <p className="text-sm font-medium text-slate-500 italic">
                            {locale === "ar"
                              ? "تخضع الشروط والمبالغ لسياسة البنك ودراسة الطلب."
                              : "Terms and amounts are subject to bank policy and application review."}
                          </p>
                        </div>
                      )}

                      <Button asChild className="w-full rounded-xl bg-[#262b80] hover:bg-[#0b0d36] text-white">
                        <Link href={getLocalizedHref(service.href, locale)}>{locale === "ar" ? "عرض التفاصيل" : "View Details"}</Link>
                      </Button>
                    </div>
                  </article>
                </motion.div>
              ))}
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
