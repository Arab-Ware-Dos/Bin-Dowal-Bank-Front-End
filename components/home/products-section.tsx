"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n-context"
import { getLocalizedHref } from "@/lib/localized-routes"
import { SectionTitle } from "@/components/ui/section-title"
import { Button } from "@/components/ui/button"
import { products } from "@/data/mock-data"
import { Wallet, CreditCard, Landmark, Smartphone, ArrowLeft, ArrowRight } from "lucide-react"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Wallet,
  CreditCard,
  Landmark,
  Smartphone,
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
}

export function ProductsSection() {
  const { t, locale, direction, mode } = useI18n()
  const Arrow = direction === "rtl" ? ArrowLeft : ArrowRight

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle
          title={t("products.title")}
          subtitle={
            locale === "ar"
              ? "اكتشف مجموعة واسعة من المنتجات والخدمات المصرفية المصممة لتلبية احتياجاتك"
              : "Discover a wide range of banking products and services designed to meet your needs"
          }
        />
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {products.map((product) => {
            const Icon = iconMap[product.icon] || Wallet
            return (
              <motion.div
                key={product.id}
                variants={item}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="h-full flex flex-col p-6 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300">
                  <div className="p-4 bg-primary/10 rounded-xl w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {locale === "ar" ? product.titleAr : product.titleEn}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">
                    {locale === "ar" ? product.descAr : product.descEn}
                  </p>
                  <Button
                    asChild
                    variant="ghost"
                    className="w-fit p-0 h-auto text-primary hover:text-primary/80 group/btn"
                  >
                    <Link href={mode === "url" ? getLocalizedHref(product.href, locale) : product.href} className="flex items-center gap-2">
                      {t("products.learnMore")}
                      <Arrow className="h-4 w-4 group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
