"use client"

import DynamicIcon from "@/components/ui/dynamic-icon"
import { getSocialLinks, FALLBACK_SOCIAL_LINKS } from "@/services/social-links-service"
import type { SocialLinkItem } from "@/types/social-link"

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
  { key: "unclaimedRemittances", href: "/unclaimed-remittances" },
]

const supportLinks = [
  { key: "contact", href: "/contact" },
  { key: "branches", href: "/atm-and-branches" },
  { key: "about", href: "/about" },
  { key: "careers", href: "/knowledge-center/careers" },
]

function ThreadsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.186 24C5.454 24 0 18.636 0 12.001 0 5.365 5.454 0 12.186 0c6.643 0 11.967 5.176 12.029 11.666v.568c0 4.14-2.846 6.845-6.685 6.845-2.585 0-4.654-1.282-5.46-3.327-.03.018-.06.035-.09.052-1.782.997-3.418.807-4.422-.518-.94-1.242-.879-3.08.163-4.922 1.077-1.902 2.92-3.195 4.93-3.456 1.488-.194 2.89.23 3.948 1.196.113-.083.23-.162.353-.238.995-.615 2.155-.944 3.353-.951-4.838-8.243-16.143-5.267-16.143 5.086 0 9.176 10.372 13.918 16.347 7.743l1.832 1.344C20.672 22.842 16.634 24 12.186 24zm-.008-11.458c-.99 0-1.916.48-2.479 1.284-.666.953-.615 2.086.128 2.68.618.494 1.543.513 2.538.053.844-.39 1.488-1.127 1.767-2.019-.516-1.233-1.134-1.998-1.954-1.998z"/>
    </svg>
  );
}

function TiktokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.48 6.27 6.27 0 0 0 1.87-4.47V8.71a8.21 8.21 0 0 0 4.89 1.6V6.86a4.87 4.87 0 0 1-.99-.17z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function SocialIcon({
  platform,
  icon,
  className,
}: {
  platform?: string;
  icon?: string | null;
  className?: string;
}) {
  const p = (platform || "").toLowerCase();
  const ic = (icon || "").toLowerCase();

  if (
    icon &&
    (icon.startsWith("http://") ||
      icon.startsWith("https://") ||
      icon.startsWith("/") ||
      icon.includes("storage"))
  ) {
    return <DynamicIcon name={icon} className={className} />;
  }

  if (p.includes("thread") || ic.includes("thread")) {
    return <ThreadsIcon className={className} />;
  }
  if (p.includes("tiktok") || ic.includes("tiktok") || p.includes("tik_tok") || ic.includes("tik_tok")) {
    return <TiktokIcon className={className} />;
  }
  if (p === "x" || ic === "x" || ic.includes("twitter") || p.includes("twitter")) {
    return <XIcon className={className} />;
  }
  if (p.includes("facebook") || ic.includes("facebook")) {
    return <Facebook className={className} />;
  }
  if (p.includes("instagram") || ic.includes("instagram")) {
    return <Instagram className={className} />;
  }
  if (p.includes("linkedin") || ic.includes("linkedin")) {
    return <Linkedin className={className} />;
  }
  if (p.includes("youtube") || ic.includes("youtube")) {
    return <Youtube className={className} />;
  }

  return <DynamicIcon name={icon || platform || "Globe"} fallbackIcon="Globe" className={className} />;
}

const legalLinks = [
  { key: "footer.privacy", href: "/policy" },
  { key: "footer.bankAppPrivacy", href: "/terms_and_conditions_bank_account" },
  { key: "footer.terms", href: "/terms" },
  { key: "footer.mobileTerms", href: "/policy_mobil_app" },
  { key: "footer.mobileSecurityPolicy", href: "/Information_security_mobil_app" },
  { key: "footer.dataPrivacy", href: "/data_privacy_mobil_app" },
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
  const [socialItems, setSocialItems] = useState<SocialLinkItem[]>(FALLBACK_SOCIAL_LINKS)

  useEffect(() => {
    let isMounted = true
    async function loadSocialLinks() {
      try {
        const data = await getSocialLinks(locale || "ar")
        if (isMounted && Array.isArray(data) && data.length > 0) {
          setSocialItems(data)
        }
      } catch (err) {
        console.warn("Failed to load social links", err)
      }
    }
    loadSocialLinks()
    return () => {
      isMounted = false
    }
  }, [locale])

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

          <motion.div variants={itemVariants} className="lg:col-span-2">
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
          <motion.div variants={itemVariants} className="order-last lg:order-none lg:col-span-3 flex items-center justify-center">
            <motion.div
              whileHover={shouldReduceMotion ? undefined : { y: -2 }}
              transition={{ duration: 0.25 }}
            >
              <a
                // href="https://bindowalgroup.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2.5 transition-opacity hover:opacity-80"
              >
                <Image
                  src="/images/dollw.png"
                  alt="Dowal"
                  width={533}
                  height={102}
                  className="w-64 sm:w-60 md:w-60 lg:w-64 xl:w-72 2xl:w-80 max-w-full h-auto object-contain opacity-90 transition-opacity hover:opacity-100"
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
                  src="/images/bankw.png"
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
                {socialItems.map((item, index) => {
                  const label = isArabic ? (item.name_ar || item.name) : (item.name_en || item.name);
                  return (
                    <motion.a
                      key={item.id || item.platform || index}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      whileHover={shouldReduceMotion ? undefined : { y: -4, scale: 1.05 }}
                      whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
                      transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.02 }}
                      className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/70 shadow-[0_10px_24px_rgba(0,0,0,0.14)] backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:text-white"
                    >
                      <SocialIcon
                        platform={item.platform}
                        icon={item.icon}
                        className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                      />
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar: Legal Links */}
        <motion.div
          variants={itemVariants}
          className="border-t border-white/10 pt-6"
        >
          <div className="flex flex-wrap items-center justify-center gap-x-3.5 sm:gap-x-4 md:gap-x-5 lg:gap-x-6 gap-y-2.5 text-center text-xs text-white/60 sm:text-[13px]">
            {legalLinks.map((item) => (
              <Link
                key={item.key}
                href={resolveHref(item.href)}
                className="whitespace-nowrap transition-colors duration-300 hover:text-white"
              >
                {t(item.key)}
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Developer Credit & Copyright */}
        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-col items-center justify-center gap-3 text-center"
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

          <p className="text-[11px] text-white/45 sm:text-xs leading-6">
            © {new Date().getFullYear()}{" "}
            {isArabic
              ? "بنك بن دول للتمويل الأصغر الإسلامي"
              : "Bin Dowal Islamic Microfinance Bank"}
            . {t("footer.rights")}
          </p>
        </motion.div>
      </motion.div>
    </footer>
  )
}