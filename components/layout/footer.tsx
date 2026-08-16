"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"
import { useI18n } from "@/lib/i18n-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  MapPin,
  Phone,
  Mail,
} from "lucide-react"

const quickLinks: { key: string; href: string }[] = [
  { key: "currentAccount", href: "/personal/current-account" },
  { key: "investmentDeposit", href: "/personal/investment-deposit" },
  { key: "corporateCurrentAccount", href: "/business/corporate-current-account" },
  { key: "cards", href: "/cards" },
]

const supportLinks = [
  { key: "contact", href: "/contact" },
  { key: "branches", href: "/atm-and-branches" },
  { key: "about", href: "/about" },
  { key: "careers", href: "/knowledge-center/careers" },
]

const socialLinks = [
  { label: "Facebook", href: "#", icon: Facebook },
  { label: "Twitter", href: "#", icon: Twitter },
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "LinkedIn", href: "#", icon: Linkedin },
  { label: "YouTube", href: "#", icon: Youtube },
]

const createContainer = (reduced: boolean) => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: reduced
      ? { duration: 0.01 }
      : {
        staggerChildren: 0.08,
        delayChildren: 0.04,
      },
  },
})

const createItem = (reduced: boolean) => ({
  hidden: reduced ? { opacity: 0 } : { opacity: 0, y: 22 },
  show: reduced
    ? { opacity: 1, transition: { duration: 0.01 } }
    : {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: "easeOut",
      },
    },
})

export function Footer() {
  const { t, locale, direction, mode } = useI18n()
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const shouldReduceMotion = useReducedMotion()

  const isArabic = locale === "ar"

  const resolveHref = (target: string) => {
    if (!target.startsWith("/") || target.startsWith("//")) return target;
    return mode === "url" ? `/${locale}${target}` : target;
  }


  const containerVariants = createContainer(Boolean(shouldReduceMotion))
  const itemVariants = createItem(Boolean(shouldReduceMotion))

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()

    const normalizedEmail = email.trim()
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)

    if (!isValidEmail) {
      setStatus("error")
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      timeoutRef.current = setTimeout(() => setStatus("idle"), 3000)
      return
    }

    setStatus("success")
    setEmail("")

    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => setStatus("idle"), 3000)
  }

  return (
    <footer
      dir={direction}
      className="relative isolate overflow-hidden border-t border-white/10 bg-transparent text-white"
    >
      <div className="absolute inset-x-0 top-0 z-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      {/* Animated background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#324198]" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "url('/images/new-pattern.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <motion.div
          className="absolute -top-32 -start-32 h-[420px] w-[420px] rounded-full bg-sky-400/10 blur-3xl opacity-50"
          animate={
            shouldReduceMotion
              ? undefined
              : {
                x: [0, 24, 0],
                y: [0, 14, 0],
                scale: [1, 1.05, 1],
              }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : {
                duration: 12,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }
          }
        />

        <motion.div
          className="absolute -bottom-24 -end-24 h-80 w-80 rounded-full bg-white/5 blur-3xl"
          animate={
            shouldReduceMotion
              ? undefined
              : {
                x: [0, -20, 0],
                y: [0, -10, 0],
                scale: [1, 1.06, 1],
              }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : {
                duration: 14,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }
          }
        />
      </div>

      <motion.div
        className="container relative z-10 mx-auto px-4 py-14 md:py-16"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={containerVariants}
      >
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 gap-10 border-b border-white/10 pb-12 lg:grid-cols-12"
        >
          {/* Links */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-gradient-to-r from-white/50 to-transparent" />
              <h3 className="text-base font-semibold text-white">
                {t("footer.quickLinks")}
              </h3>
            </div>

            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.key}
                  variants={itemVariants}
                  transition={{ delay: index * 0.02 }}
                >
                  <Link
                    href={resolveHref(link.href)}
                    className="group inline-flex items-center text-sm text-white/70 transition-all duration-300 hover:text-white"
                  >
                    <span className="h-[1px] w-0 bg-white transition-all duration-300 group-hover:me-2 group-hover:w-4" />
                    {t(`nav.${link.key}`)}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="lg:col-span-3">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-gradient-to-r from-white/50 to-transparent" />
              <h3 className="text-base font-semibold text-white">
                {t("footer.support")}
              </h3>
            </div>

            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <motion.li
                  key={link.key}
                  variants={itemVariants}
                  transition={{ delay: index * 0.02 }}
                >
                  <Link
                    href={resolveHref(link.href)}
                    className="group inline-flex items-center text-sm text-white/70 transition-all duration-300 hover:text-white"
                  >
                    <span className="h-[1px] w-0 bg-white transition-all duration-300 group-hover:me-2 group-hover:w-4" />
                    {t(`nav.${link.key}`)}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Group Logo */}
          <motion.div variants={itemVariants} className="order-last lg:order-none lg:col-span-2 flex items-center justify-center -mt-8 lg:-mt-13">
            <motion.div
              whileHover={shouldReduceMotion ? undefined : { y: -2 }}
              transition={{ duration: 0.25 }}
            >
              <a
            href="https://bindowalgroup.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2.5 transition-opacity hover:opacity-80"
          >
              <Image
                src="/images/bindowal-group.png"
                alt="Bin Dowal Group"
                width={200}
                height={100}
                className="h-24 sm:h-20 md:h-32 w-auto object-contain opacity-90 transition-opacity hover:opacity-100"
              />
              </a>
            </motion.div>
          </motion.div>

          {/* Brand / Info */}
          <motion.div variants={itemVariants} className="lg:col-span-5 lg:col-start-8 w-fit text-end ">
            <motion.div
              whileHover={shouldReduceMotion ? undefined : { y: -2 }}
              transition={{ duration: 0.25 }}
            >
              <Link href={resolveHref("/")} className="inline-flex items-center">
                <Image
                  src="/images/logo-white.png"
                  alt="Bin Dowal Islamic Microfinance Bank"
                  width={100}
                  height={50}
                  className="h-18 w-auto"
                />
              </Link>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="mt-5 max-w-xll text-sm leading-7 text-white/72 md:text-[15px] text-balance"
            >
              {isArabic
                ? "بنك بن دول للتمويل الأصغر الإسلامي، تجربة مصرفية أكثر وضوحًا وموثوقية، مصممة لخدمة الأفراد وقطاع الأعمال ضمن إطار احترافي متوافق مع أحكام الشريعة الإسلامية."
                : "Bin Dowal Islamic Microfinance Bank delivers a clear, trusted, and professional banking experience for individuals and businesses in accordance with Islamic Sharia."}
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Newsletter + Social */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 gap-8 py-10 lg:grid-cols-12 lg:items-center"
        >
          <motion.div variants={itemVariants} className="lg:col-span-7">
            <motion.div
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              transition={{ duration: 0.25 }}
              className="rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl md:p-6"
            >
              <div className="mb-4">
                <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">
                  {isArabic ? "النشرة البريدية" : "Newsletter"}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-white md:text-xl">
                  {t("footer.newsletter")}
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/72">
                  {isArabic
                    ? "اشترك للحصول على آخر المستجدات والخدمات والعروض المصرفية."
                    : "Subscribe to receive the latest updates, services, and banking offers."}
                </p>
              </div>

              <form onSubmit={handleSubscribe} className="flex flex-col gap-3 sm:flex-row">
                <Input
                  type="email"
                  inputMode="email"
                  placeholder={t("footer.newsletterPlaceholder")}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 rounded-2xl border-white/10 bg-white/10 text-white placeholder:text-white/40 focus-visible:ring-1 focus-visible:ring-white/20"
                />

                <motion.div
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    className="h-12 shrink-0 rounded-2xl bg-white px-5 text-[#0b0d36] shadow-[0_10px_25px_rgba(255,255,255,0.12)] transition-all duration-300 hover:bg-slate-100"
                  >
                    {status === "success"
                      ? isArabic
                        ? "تم الاشتراك ✓"
                        : "Subscribed ✓"
                      : t("footer.subscribe")}
                  </Button>
                </motion.div>
              </form>

              <div aria-live="polite" className="mt-3 min-h-[20px] text-sm">
                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-300"
                  >
                    {isArabic
                      ? "يرجى إدخال بريد إلكتروني صحيح."
                      : "Please enter a valid email address."}
                  </motion.p>
                )}
                {status === "success" && (
                  <motion.p
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-emerald-300"
                  >
                    {isArabic
                      ? "تم تسجيل بريدك الإلكتروني بنجاح."
                      : "Your email has been subscribed successfully."}
                  </motion.p>
                )}
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="lg:col-span-5">
            <div className="flex h-full flex-col justify-center lg:items-end">
              <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">
                {isArabic ? "تابعنا" : "Social"}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-white md:text-xl">
                {t("footer.followUs")}
              </h3>

              <div className="mt-5 flex flex-wrap gap-3 lg:justify-end">
                {socialLinks.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      aria-label={item.label}
                      variants={itemVariants}
                      whileHover={shouldReduceMotion ? undefined : { y: -4, scale: 1.05 }}
                      whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
                      transition={{ duration: 0.2, delay: index * 0.02 }}
                      className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/70 shadow-[0_10px_24px_rgba(0,0,0,0.14)] backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:text-white"
                    >
                      <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/55 md:flex-row md:items-center md:justify-between"
        >
          <p className="leading-6">
            © {new Date().getFullYear()}{" "}
            {isArabic
              ? "بنك بن دول للتمويل الأصغر الإسلامي"
              : "Bin Dowal Islamic Microfinance Bank"}
            . {t("footer.rights")}
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="#" className="transition-colors duration-300 hover:text-white">
              {t("footer.privacy")}
            </Link>
            <Link href="#" className="transition-colors duration-300 hover:text-white">
              {t("footer.terms")}
            </Link>
          </div>
        </motion.div>

        {/* Developer Credit */}
        <motion.div
          variants={itemVariants}
          className="mt-8 flex justify-center text-center"
        >
          <a
            href="https://arabwdos.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2.5 transition-opacity hover:opacity-80"
          >
            <Image
              src="/images/arab_ware_dos_logo_white.png"
              alt="Arabware Dos Company"
              width={200}
              height={50}
              className="h-18 w-auto object-contain opacity-70 transition-opacity group-hover:opacity-100"
            />
            <span className="text-[11px] text-white/40 md:text-xs transition-colors group-hover:text-white/70">
              {isArabic ? "تطوير شركة عرب وير دوز" : "Development by Arab Ware Dos"}
            </span>
          </a>
        </motion.div>
      </motion.div>
    </footer>
  )
}