"use client"

import Link from "next/link"
import type { ComponentType } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { useI18n } from "@/lib/i18n-context"
import { getLocalizedHref } from "@/lib/localized-routes"
import { products } from "@/data/mock-data"
import {
  Wallet,
  CreditCard,
  Landmark,
  Smartphone,
  ArrowLeft,
  ArrowRight,
} from "lucide-react"

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  Wallet,
  CreditCard,
  Landmark,
  Smartphone,
}

export function EServicesSection() {
  const { locale, direction, mode } = useI18n()
  const reduceMotion = useReducedMotion()
  const isArabic = locale === "ar"
  const Arrow = direction === "rtl" ? ArrowLeft : ArrowRight

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.08,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <section className="relative overflow-hidden pt-4 md:pt-6 pb-20 md:pb-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mx-auto mb-10 max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D9DFFE] bg-white/85 px-4 py-2 text-xs font-semibold text-[#2F37F0] shadow-[0_10px_24px_rgba(24,39,112,0.06)] backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-[#2F37F0]" />
            {isArabic ? "الخدمات الإلكترونية" : "Digital Services"}
          </div>

          <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#111B4D] md:text-4xl xl:text-5xl">
            {isArabic
              ? "اكتشف المزيد من خدماتنا الإلكترونية"
              : "Discover More of Our Digital Services"}
          </h2>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-[#5F678B]">
            {isArabic
              ? "حلول رقمية مصممة لتمنحك تجربة مصرفية أسرع وأكثر وضوحًا وسهولة ضمن واجهة احترافية متناسقة مع التطبيق."
              : "Digital solutions designed to deliver a faster, clearer, and more seamless banking experience in a premium unified interface."}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
          className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4"
        >
          {products.map((product, index) => {
            const Icon = iconMap[product.icon] || Wallet

            return (
              <motion.div
                key={product.id}
                variants={item}
                whileHover={
                  reduceMotion
                    ? undefined
                    : { y: -5, transition: { duration: 0.2 } }
                }
                className="h-full"
              >
                <Link
                  href={mode === "url" ? getLocalizedHref(product.href, locale) : product.href}
                  className="group relative flex h-full min-h-[260px] flex-col overflow-hidden rounded-[30px] border border-white/85 bg-white/88 p-6 shadow-[0_14px_34px_rgba(24,39,112,0.06)] backdrop-blur transition-all duration-300 hover:border-[#DDE2FF] hover:shadow-[0_18px_44px_rgba(24,39,112,0.10)]"
                >
                  <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#7380FF]/70 to-transparent" />
                  <div className="absolute -top-10 end-0 h-28 w-28 rounded-full bg-[#EEF1FF] blur-3xl opacity-70" />

                  <div className="mb-5 flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF1FF] text-[#2F37F0] ring-1 ring-[#DCE2FF]">
                      <Icon className="h-6 w-6" />
                    </div>

                    <div className="rounded-full border border-[#E6EAFE] bg-white/80 px-3 py-1 text-[11px] font-semibold text-[#7A82A6]">
                      {isArabic ? "خدمة رقمية" : "Digital"}
                    </div>
                  </div>

                  <h3 className="mb-3 text-xl font-bold leading-7 text-[#111B4D]">
                    {locale === "ar" ? product.titleAr : product.titleEn}
                  </h3>

                  <p className="flex-1 text-sm leading-7 text-[#5F678B]">
                    {locale === "ar" ? product.descAr : product.descEn}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#2F37F0]">
                    <span>{isArabic ? "اعرف المزيد" : "Learn more"}</span>
                    <Arrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                  </div>

                  {!reduceMotion && (
                    <motion.div
                      aria-hidden="true"
                      className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(47,55,240,0.06),transparent_55%)]"
                      animate={{ opacity: [0.45, 0.7, 0.45] }}
                      transition={{
                        duration: 3.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.12,
                      }}
                    />
                  )}
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}