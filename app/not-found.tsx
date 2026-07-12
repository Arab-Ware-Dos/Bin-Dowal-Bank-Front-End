"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n-context"
import { Button } from "@/components/ui/button"
import { Home, CreditCard, Phone } from "lucide-react"

const quickLinks = [
  {
    icon: Home,
    href: "/personal-banking",
    labelAr: "الخدمات الشخصية",
    labelEn: "Personal Banking",
  },
  {
    icon: CreditCard,
    href: "/cards",
    labelAr: "البطاقات",
    labelEn: "Cards",
  },
  {
    icon: Phone,
    href: "/contact",
    labelAr: "تواصل معنا",
    labelEn: "Contact Us",
  },
]

export default function NotFound() {
  const { t, locale } = useI18n()

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-20">
      {/* Background gradient matching hero */}
      <div className="absolute inset-0 -z-10 bg-[#1e3a5f]" />

      {/* Decorative blobs */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-1/4 -end-1/4 w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-1/4 -start-1/4 w-[400px] h-[400px] rounded-full bg-accent/10 blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="container mx-auto px-4 flex flex-col items-center text-center gap-8">
        {/* Animated 404 */}
        <motion.div
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="select-none"
        >
          <span className="text-[120px] sm:text-[160px] md:text-[200px] font-bold leading-none text-accent drop-shadow-lg">
            404
          </span>
        </motion.div>

        {/* Title & subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-3"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            {t("notFound.title")}
          </h1>
          <p className="text-base sm:text-lg text-white/70 max-w-md mx-auto">
            {t("notFound.subtitle")}
          </p>
        </motion.div>

        {/* Back to home button */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <Button
            asChild
            size="lg"
            className="rounded-xl bg-accent text-lg hover:bg-white hover:text-[#1e3a5f] transition-colors duration-300 shadow-lg"
          >
            <Link href="/">
              <Home className="h-5 w-5 me-2" />
              {t("notFound.backHome")}
            </Link>
          </Button>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="w-full max-w-sm border-t border-white/20 pt-8"
        >
          <p className="text-sm text-white/50 mb-5">{t("notFound.quickLinks")}</p>

          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-4">
            {quickLinks.map((link) => {
              const Icon = link.icon
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex flex-col items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/30 transition-all duration-300"
                >
                  <Icon className="h-5 w-5 text-accent group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm text-white/80 group-hover:text-white transition-colors">
                    {locale === "ar" ? link.labelAr : link.labelEn}
                  </span>
                </Link>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
