"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useI18n } from "@/lib/i18n-context"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Menu,
  Globe,
  MapPin,
  Phone,
  ChevronDown,
  Monitor,
  User,
  Briefcase,
  ArrowUpRight,
  Download,
  Building2,
  ChevronRight,
  ChevronLeft
} from "lucide-react"

// استيراد بيانات القائمة الهيكلية الجديدة
import { navigationData, NavItem } from "@/data/navigation"
import { getLocalizedHref } from "@/lib/localized-routes"

const DESKTOP_MEGA_MENU_MAX_WIDTH = 1000
const DESKTOP_MEGA_MENU_MIN_WIDTH = 800
const VIEWPORT_SAFE_PADDING = 16

type DesktopMenuPosition = {
  left: number
  width: number
}

import { Locale } from "@/i18n/config"
import { UrlLanguageSwitcher } from "@/components/i18n/url-language-switcher"
import { Suspense } from "react"

export type HeaderProps =
  | {
      localeMode?: "legacy";
      locale?: never;
    }
  | {
      localeMode: "url";
      locale: Locale;
    };

export function Header(props: HeaderProps) {
  const { localeMode = "legacy", locale: urlLocale } = props;
  const { locale: contextLocale, setLocale, t } = useI18n()
  
  const locale = localeMode === "url" ? urlLocale : contextLocale;
  const targetLocale = locale === "ar" ? "en" : "ar";

  const resolveHref = (href: string) => {
    return localeMode === "url" ? getLocalizedHref(href, locale as Locale) : href;
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDesktopMenu, setActiveDesktopMenu] = useState<string | null>(null)
  
  // Mobile states
  const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(null)
  const [activeMobileGroup, setActiveMobileGroup] = useState<string | null>(null)
  
  const [isScrolled, setIsScrolled] = useState(false)
  const [loginMenuOpen, setLoginMenuOpen] = useState(false)
  const [mobileLoginMenuOpen, setMobileLoginMenuOpen] = useState(false)
  
  const [desktopMenuPosition, setDesktopMenuPosition] = useState<DesktopMenuPosition>({
    left: 0,
    width: DESKTOP_MEGA_MENU_MIN_WIDTH,
  })

  const closeTimerRef = useRef<NodeJS.Timeout | null>(null)
  const desktopNavRef = useRef<HTMLDivElement | null>(null)
  const loginMenuRef = useRef<HTMLDivElement | null>(null)
  const desktopTriggerRefs = useRef<Record<string, HTMLDivElement | null>>({})

  const copy = useMemo(
    () => ({
      sectionOverview: locale === "ar" ? "عرض القسم" : "Section overview",
      availableServices: locale === "ar" ? "الخدمات المتاحة" : "Available services",
      exploreAll: locale === "ar" ? "استعرض القسم" : "Explore section",
      loginTooltip: locale === "ar" ? "تسجيل الدخول إلى القنوات الرقمية" : "Sign in to digital channels",
      navigationMenu: locale === "ar" ? "قائمة التنقل" : "Navigation menu",
      quickAccess: locale === "ar" ? "وصول سريع" : "Quick access",
      menuToggle: locale === "ar" ? "فتح القائمة" : "Toggle menu",
      loginOptions: locale === "ar" ? "خيارات الوصول" : "Access options",
      digitalAccess: locale === "ar" ? "الوصول الرقمي" : "Digital access",
    }),
    [locale]
  )

  const loginMenuItems = useMemo(
    () => [
       {
        key: "internetBankingAccess",
        label: locale === "ar" ? "منصة بن دول اعمال" : "Bindowal Business Platform",
        href: "/digital-channels#internet",
        icon: Monitor,
      },
      {
        key: "openPersonalAccount",
        label: locale === "ar" ? "فتح حساب شخصي" : "Open personal account",
        href: "/open-account/personal",
        icon: User,
      },
      {
        key: "openBusinessAccount",
        label: locale === "ar" ? "فتح حساب أعمال" : "Open business account",
        href: "/open-account/business",
        icon: Briefcase,
      },
    ],
    [locale]
  )

  const activeDesktopItem: NavItem | null = useMemo(() => {
    return navigationData.find((item) => item.key === activeDesktopMenu) ?? null
  }, [activeDesktopMenu])

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 18)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", onScroll)
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current)
    }
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!loginMenuRef.current?.contains(event.target as Node)) {
        setLoginMenuOpen(false)
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLoginMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", handleEscape)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscape)
    }
  }, [])

  const toggleLanguage = () => {
    setLocale(locale === "ar" ? "en" : "ar")
  }

  const calculateDesktopMenuPosition = (key: string) => {
    const navElement = desktopNavRef.current
    const triggerElement = desktopTriggerRefs.current[key]
    const currentItem = navigationData.find(item => item.key === key)

    if (!navElement || !triggerElement || !currentItem || typeof window === "undefined") return

    // تحديد العرض المنطقي للـ Mega Menu بناء على محتواها (groups تأخذ مساحة أكبر)
    const targetBaseWidth = (currentItem.groups || currentItem.image) ? DESKTOP_MEGA_MENU_MAX_WIDTH : DESKTOP_MEGA_MENU_MIN_WIDTH

    const navRect = navElement.getBoundingClientRect()
    const triggerRect = triggerElement.getBoundingClientRect()

    const viewportAvailableWidth = window.innerWidth - VIEWPORT_SAFE_PADDING * 2
    const containerAvailableWidth = navRect.width

    const nextWidth = Math.min(
      targetBaseWidth,
      viewportAvailableWidth,
      containerAvailableWidth
    )

    const finalWidth = Math.max(
      Math.min(nextWidth, targetBaseWidth),
      Math.min(DESKTOP_MEGA_MENU_MIN_WIDTH, nextWidth) // الحد الأدنى المسموح
    )

    const triggerCenter = triggerRect.left + triggerRect.width / 2
    let nextLeft = triggerCenter - navRect.left - finalWidth / 2
    const maxLeft = Math.max(0, navRect.width - finalWidth)

    nextLeft = Math.max(0, Math.min(nextLeft, maxLeft))

    setDesktopMenuPosition({
      left: nextLeft,
      width: finalWidth,
    })
  }

  const openDesktopMenu = (key: string) => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current)
    setLoginMenuOpen(false)
    setActiveDesktopMenu(key)
    requestAnimationFrame(() => calculateDesktopMenuPosition(key))
  }

  const closeDesktopMenu = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current)
    closeTimerRef.current = setTimeout(() => {
      setActiveDesktopMenu(null)
    }, 150) // تأخير مريح للخروج من القائمة
  }

  const toggleMobileSubmenu = (key: string) => {
    setActiveMobileMenu((prev) => (prev === key ? null : key))
    setActiveMobileGroup(null) // Reset group when closing
  }
  
  const toggleMobileNestedGroup = (key: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveMobileGroup((prev) => (prev === key ? null : key))
  }

  useEffect(() => {
    if (!activeDesktopMenu) return

    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setActiveDesktopMenu(null)
        return
      }
      calculateDesktopMenuPosition(activeDesktopMenu)
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [activeDesktopMenu])

  return (
    <header className="sticky top-0 z-50 w-full">
      <div
        className={[
          "border-b border-slate-200/70 bg-white/90 backdrop-blur-xl transition-all duration-300",
          isScrolled
            ? "shadow-[0_14px_44px_rgba(15,23,42,0.08)]"
            : "shadow-[0_4px_20px_rgba(15,23,42,0.03)]",
        ].join(" ")}
      >
        <div className="h-[2px] w-full bg-gradient-to-r from-[#2d3185] via-[#763169] to-[#ed1c24]" />

        <motion.div
          initial={false}
          animate={{
            height: isScrolled ? 0 : "auto",
            opacity: isScrolled ? 0 : 1,
            marginBottom: isScrolled ? 0 : 0
          }}
          transition={{ duration: 0.28, ease: "easeInOut" }}
          className="overflow-hidden border-b border-slate-200/70 bg-slate-50/70"
        >
          <div className="container mx-auto px-4">
            <div className="flex h-11 items-center justify-between text-slate-600">
              <div className="flex items-center">
                <Link
                  href={resolveHref("/atm-and-branches")}
                  className="flex items-center gap-2 text-sm transition-colors hover:text-slate-900"
                >
                  <MapPin className="h-4 w-4" />
                  <span className="hidden sm:inline">{t("nav.branches")}</span>
                </Link>

                <span className="mx-4 hidden h-4 w-px bg-slate-300 sm:block" />

                <Link
                  href={resolveHref("/contact")}
                  className="flex items-center gap-2 text-sm transition-colors hover:text-slate-900"
                >
                  <Phone className="h-4 w-4" />
                  <span className="hidden sm:inline">{t("nav.contact")}</span>
                </Link>
              </div>

              <div className="flex items-center">
                <a
                  href="/documents/Bin-Dowal-Bank-Profile.pdf"
                  download="Bin-Dowal-Bank-Profile.pdf"
                  aria-label={t("topbar.download")}
                  className="flex items-center gap-2 text-sm transition-colors hover:text-slate-900"
                >
                  <Download className="h-4 w-4" />
                  <span className="hidden sm:inline">{t("topbar.download")}</span>
                </a>
                <span className="mx-4 hidden h-4 w-px bg-slate-300 sm:block" />

                {localeMode === "url" ? (
                  <Suspense fallback={
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <Globe className="h-4 w-4" />
                      <span className="hidden sm:inline">{targetLocale === "ar" ? "العربية" : "English"}</span>
                    </div>
                  }>
                    <UrlLanguageSwitcher locale={urlLocale as Locale} />
                  </Suspense>
                ) : (
                  <button
                    type="button"
                    onClick={toggleLanguage}
                    aria-label={t("topbar.language")}
                    className="flex items-center gap-2 text-sm transition-colors hover:text-slate-900"
                  >
                    <Globe className="h-4 w-4" />
                    <span className="hidden sm:inline">{t("topbar.language")}</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        <nav className="relative">
          <div className="container mx-auto px-4">
            <div className={`flex h-[80px] items-center justify-between gap-4 ${locale === "ar" ? "flex-row-reverse" : ""}`}>
              <Link href={resolveHref("/")} className="relative items-center flex shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Bin Dowal Islamic Microfinance Bank"
                  width={200}
                  height={60}
                  priority
                  className="h-8 w-auto sm:h-8 md:h-8 lg:h-8 xl:h-9 2xl:h-10"
                />
              </Link>

              <div
                ref={desktopNavRef}
                className="relative hidden lg:flex lg:items-center lg:gap-1"
                onMouseLeave={() => activeDesktopMenu && closeDesktopMenu()}
              >
                {navigationData.map((item) => {
                  const hasSubmenu = !!(item.groups || item.singleLinks)
                  const isOpen = activeDesktopMenu === item.key

                  return (
                    <div
                      key={item.key}
                      ref={(node) => {
                        desktopTriggerRefs.current[item.key] = node
                      }}
                      className="relative"
                      onMouseEnter={() => hasSubmenu && openDesktopMenu(item.key)}
                    >
                      <div
                        className={[
                          "group flex items-center rounded-full px-1 transition-all duration-200",
                          isOpen ? "bg-slate-100" : "hover:bg-slate-50",
                        ].join(" ")}
                      >
                        <Link
                          href={resolveHref(item.href)}
                          className="relative inline-flex items-center px-2 lg:px-3 py-2 font-semibold sm:font-medium md:font-bold lg:font-bold xl:font-medium 2xl:font-medium text-[#324198] transition-colors duration-200 hover:text-slate-950 text-[18px] sm:text-[18px] md:text-[18px] lg:text-[22px] xl:text-[13px] 2xl:text-[18px]"
                        >
                          {locale === "ar" ? item.label.ar : item.label.en}
                        </Link>

                        {hasSubmenu && (
                          <button
                            type="button"
                            aria-expanded={isOpen}
                            aria-label={locale === "ar" ? item.label.ar : item.label.en}
                            onClick={() =>
                              setActiveDesktopMenu((prev) => {
                                const nextValue = prev === item.key ? null : item.key
                                setLoginMenuOpen(false)

                                if (nextValue) {
                                  requestAnimationFrame(() =>
                                    calculateDesktopMenuPosition(nextValue)
                                  )
                                }
                                return nextValue
                              })
                            }
                            className="pe-2 text-slate-500 transition-colors hover:text-[#2d3185]"
                          >
                            <ChevronDown
                              className={`h-4 w-4 transition-transform duration-200 ${
                                isOpen ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                        )}

                        <span
                          className={[
                            "absolute inset-x-3 bottom-0.5 h-[2px] origin-center z-10 bg-[#2d3185] transition-all duration-200",
                            isOpen ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0",
                          ].join(" ")}
                        />
                      </div>
                    </div>
                  )
                })}

                <AnimatePresence>
                  {activeDesktopItem && (activeDesktopItem.groups || activeDesktopItem.singleLinks) && (
                    <motion.div
                      key={activeDesktopItem.key}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                      className="absolute top-full z-50 pt-4"
                      style={{
                        left: desktopMenuPosition.left,
                        width: desktopMenuPosition.width,
                      }}
                      onMouseEnter={() => {
                        if (closeTimerRef.current) clearTimeout(closeTimerRef.current)
                      }}
                    >
                      <div className="absolute inset-x-0 -top-4 h-4" />

                      <div className="overflow-hidden rounded-3xl border border-slate-200/60 bg-white/95 shadow-[0_40px_100px_rgba(15,23,42,0.12)] backdrop-blur-2xl">
                        <div className="flex flex-col sm:flex-row">
                          {/* Image Highlight Panel (Optional) */}
                          {activeDesktopItem.image && (
                            <div 
                              className="relative hidden sm:flex sm:w-[300px] shrink-0 flex-col justify-end p-8"
                              style={{
                                backgroundImage: `url(${activeDesktopItem.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                              }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
                              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#2d3185] via-[#763169] to-[#ed1c24]" />
                              
                              <div className="relative z-10 text-white">
                                <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.22em] text-white/80">
                                  {copy.sectionOverview}
                                </p>
                                <h3 className="mb-3 text-xl lg:text-2xl xl:text-3xl font-bold tracking-tight">
                                  {locale === "ar" ? activeDesktopItem.imageTitle?.ar : activeDesktopItem.imageTitle?.en}
                                </h3>
                                <p className="mb-6 text-sm leading-relaxed text-slate-200">
                                  {locale === "ar" ? activeDesktopItem.imageDesc?.ar : activeDesktopItem.imageDesc?.en}
                                </p>
                                <Button asChild variant="secondary" className="rounded-full px-6 font-semibold w-full bg-white/20 backdrop-blur-md hover:bg-white text-white hover:text-slate-900 border-0">
                                  <Link href={resolveHref(activeDesktopItem.imageLink || activeDesktopItem.href)}>
                                    <span>{copy.exploreAll}</span>
                                    <ArrowUpRight className="ms-2 h-4 w-4" />
                                  </Link>
                                </Button>
                              </div>
                            </div>
                          )}

                          {/* Navigation Links Area */}
                          <div className={`p-8 w-full ${activeDesktopItem.image ? 'w-[calc(100%-300px)]' : 'w-full'} bg-white`}>
                            {/* Groups Layout */}
                            {activeDesktopItem.groups && (
                              <div className={`grid gap-8 ${activeDesktopItem.groups.length > 3 ? 'grid-cols-2 lg:grid-cols-4' : 'grid-cols-2 lg:grid-cols-3'}`}>
                                {activeDesktopItem.groups.map((group, idx) => (
                                  <div key={idx} className="flex flex-col space-y-4">
                                    <div className="flex items-center gap-2">
                                      <h4 className="text-[14px] lg:text-[15px] xl:text-base font-bold text-[#ed1c24]">
                                        {locale === "ar" ? group.title.ar : group.title.en}
                                      </h4>
                                      <div className="h-px flex-1 bg-slate-100" />
                                    </div>
                                    <div className="flex flex-col space-y-1">
                                      {group.links.map((link) => {
                                        const Icon = link.icon;
                                        return (
                                          <div key={link.key} className="flex flex-col">
                                            <Link 
                                              href={resolveHref(link.href)} 
                                              className="group/link flex items-start gap-3 rounded-lg py-2 px-2 -mx-2 transition-colors hover:bg-slate-50 text-slate-600 hover:text-slate-900"
                                            >
                                              {Icon && (
                                                <span className="flex h-7 w-7 mt-0.5 shrink-0 items-center justify-center rounded-md bg-[#2d3185]/5 text-[#2d3185] transition-colors group-hover/link:bg-[#2d3185] group-hover/link:text-white group-hover/link:shadow-sm">
                                                  <Icon className="h-4 w-4" />
                                                </span>
                                              )}
                                              <div className="flex flex-col gap-0.5">
                                                <span className="text-[14px] font-semibold transition-colors">
                                                  {locale === "ar" ? link.label.ar : link.label.en}
                                                </span>
                                                {link.desc && (
                                                  <span className="text-[12px] leading-[1.3] text-slate-500 transition-colors group-hover/link:text-slate-600 font-medium">
                                                    {locale === "ar" ? link.desc.ar : link.desc.en}
                                                  </span>
                                                )}
                                              </div>
                                            </Link>
                                            
                                            {/* Sub-links nested under the parent link */}
                                            {link.subLinks && (
                                              <div className={`mt-1 mb-2 flex flex-col space-y-1 ${locale === "ar" ? "pr-8 border-r" : "pl-8 border-l"} border-slate-100`}>
                                                {link.subLinks.map((sub) => (
                                                  <Link
                                                    key={sub.key}
                                                    href={resolveHref(sub.href)}
                                                    className="text-[13px] font-medium text-slate-500 hover:text-[#2d3185] transition-colors py-1"
                                                  >
                                                    {locale === "ar" ? sub.label.ar : sub.label.en}
                                                  </Link>
                                                ))}
                                              </div>
                                            )}
                                          </div>
                                        );
                                      })}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}

                            {/* Single Links Layout (Cards view) */}
                            {!activeDesktopItem.groups && activeDesktopItem.singleLinks && (
                              <div>
                                <div className="mb-6 flex items-center justify-between">
                                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2d3185]">
                                    {copy.availableServices}
                                  </p>
                                  <div className="ms-4 h-px flex-1 bg-slate-100" />
                                </div>
                                <div className={`grid grid-cols-1 sm:grid-cols-2 ${activeDesktopItem.image ? 'lg:grid-cols-2 gap-6' : 'lg:grid-cols-3 gap-4'}`}>
                                  {activeDesktopItem.singleLinks.map((subItem) => {
                                    const Icon = subItem.icon
                                    return (
                                      <Link
                                        key={subItem.key}
                                        href={resolveHref(subItem.href)}
                                        className="group rounded-2xl border border-slate-100 bg-slate-50/50 p-4 transition-all duration-200 hover:-translate-y-1 hover:border-slate-200 hover:bg-white hover:shadow-[0_12px_30px_rgba(15,23,42,0.06)]"
                                      >
                                        <div className="flex items-start gap-4">
                                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-[#2d3185] shadow-sm transition-colors duration-200 group-hover:bg-[#2d3185] group-hover:text-white">
                                            {Icon && <Icon className="h-5 w-5" />}
                                          </div>
                                          <div className="min-w-0 pt-1">
                                            <div className="flex items-center gap-2">
                                              <p className="text-sm font-bold text-slate-900 leading-tight">
                                                {locale === "ar" ? subItem.label.ar : subItem.label.en}
                                              </p>
                                              <ArrowUpRight className="h-4 w-4 text-slate-300 opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100 group-hover:text-[#ed1c24]" />
                                            </div>
                                            <div className="mt-3 h-px w-8 bg-slate-200 transition-all duration-300 group-hover:w-12 group-hover:bg-[#ed1c24]/50" />
                                          </div>
                                        </div>
                                      </Link>
                                    )
                                  })}
                                </div>
                              </div>
                            )}

                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Login Tooltip - Desktop */}
              <div className="flex items-center gap-3">
                {/* <div ref={loginMenuRef} className="relative hidden sm:block">
                  <TooltipProvider delayDuration={300}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          type="button"
                          onClick={() => {
                            setActiveDesktopMenu(null)
                            setLoginMenuOpen((prev) => !prev)
                          }}
                          aria-expanded={loginMenuOpen}
                          aria-haspopup="menu"
                          className="rounded-full px-6 py-5 bg-[#2d3185] hover:bg-[#324198] shadow-lg shadow-[#2d3185]/20 font-bold transition-all hover:scale-105"
                        >
                          <User className="h-4 w-4 me-2 opacity-80" />
                          <span>{t("nav.login")}</span>
                          <ChevronDown
                            className={`ms-2 h-4 w-4 opacity-70 transition-transform duration-200 ${
                              loginMenuOpen ? "rotate-180" : ""
                            }`}
                          />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent side="bottom" className="mt-2 bg-slate-900 border-slate-800 text-slate-50 px-4 py-2 text-sm">
                        <p>{copy.loginTooltip}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <AnimatePresence>
                    {loginMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className="absolute top-full end-0 z-50 w-[360px] pt-4"
                      >
                        <div className="absolute inset-x-0 -top-4 h-4" />

                        <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white/95 shadow-[0_40px_80px_rgba(15,23,42,0.15)] backdrop-blur-2xl">
                          <div className="relative p-5">
                            <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#2d3185] via-[#763169] to-[#ed1c24]" />

                            <div className="mb-5 px-2 pt-2">
                              <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#ed1c24]">
                                {copy.loginOptions}
                              </p>
                              <h3 className="text-xl font-bold tracking-tight text-slate-900">
                                {copy.digitalAccess}
                              </h3>
                            </div>

                            <div className="space-y-2.5">
                              {loginMenuItems.map((item) => {
                                const Icon = item.icon

                                return (
                                  <Link
                                    key={item.key}
                                    href={resolveHref(item.href)}
                                    onClick={() => setLoginMenuOpen(false)}
                                    className="group flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50/50 p-4 transition-all duration-200 hover:-translate-y-1 hover:border-slate-200 hover:bg-white hover:shadow-[0_12px_30px_rgba(15,23,42,0.06)]"
                                  >
                                    <div className="flex items-center gap-4">
                                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#2d3185] shadow-sm transition-colors duration-200 group-hover:bg-[#2d3185] group-hover:text-white">
                                        <Icon className="h-5 w-5" />
                                      </div>

                                      <div className="min-w-0">
                                        <p className="text-[14px] font-bold text-slate-900">
                                          {item.label}
                                        </p>
                                        <div className="mt-2 h-px w-8 bg-slate-200 transition-all duration-300 group-hover:w-12 group-hover:bg-[#ed1c24]/50" />
                                      </div>
                                    </div>

                                    <ArrowUpRight className="h-5 w-5 text-slate-300 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#ed1c24]" />
                                  </Link>
                                )
                              })}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div> */}

                {/* Mobile Menu Trigger */}
                <Sheet
                  open={mobileMenuOpen}
                  onOpenChange={(open) => {
                    setMobileMenuOpen(open)
                    if (!open) {
                      setMobileLoginMenuOpen(false)
                      setActiveMobileMenu(null)
                      setActiveMobileGroup(null) // Reset on close
                    }
                    if (open) setLoginMenuOpen(false)
                  }}
                >
                  <SheetTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full w-12 h-12 border-slate-200 bg-white shadow-sm lg:hidden hover:bg-slate-50 transition-colors"
                      aria-label={copy.menuToggle}
                    >
                      <Menu className="h-5 w-5 text-slate-700" />
                      <span className="sr-only">{copy.menuToggle}</span>
                    </Button>
                  </SheetTrigger>

                  <SheetContent
                    side={locale === "ar" ? "right" : "left"}
                    className="w-[340px] border-slate-200 p-0 sm:w-[400px] flex flex-col bg-slate-50"
                  >
                    <SheetTitle className="sr-only">{copy.navigationMenu}</SheetTitle>

                    {/* Mobile Menu Header */}
                    <div dir="ltr" className="border-b border-slate-200 bg-white px-6 py-5 shrink-0 z-10 relative flex justify-start">
                      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                      <Link href={resolveHref("/")} onClick={() => setMobileMenuOpen(false)} className="inline-flex transition-transform hover:scale-105 active:scale-95">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bank%20Logo-sQ4ejPvlaY9DvzUZ11CkmGwd9hycOG.png"
                          alt="Bin Dowal Islamic Microfinance Bank"
                          width={180}
                          height={52}
                          className="h-10 w-auto"
                        />
                      </Link>
                    </div>

                    {/* Mobile Menu Scrollable Content */}
                    <div className="flex-1 overflow-y-auto w-full">
                      <div className="px-5 py-6">
                        
                        <div className="mb-5 flex items-center gap-3">
                          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ed1c24]">
                            {copy.quickAccess}
                          </p>
                          <div className="h-px flex-1 bg-slate-200" />
                        </div>

                        <div className="space-y-3">
                          {navigationData.map((item) => {
                            const hasSubmenu = !!(item.groups || item.singleLinks)
                            const isOpen = activeMobileMenu === item.key

                            return (
                              <div
                                key={item.key}
                                className={`overflow-hidden rounded-2xl transition-all duration-300 ${isOpen ? 'bg-white shadow-md border-transparent' : 'bg-white/60 border border-slate-200/80 hover:bg-white'}`}
                              >
                                <div className="flex items-center justify-between px-5 py-4">
                                  <Link
                                    href={resolveHref(item.href)}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`text-[15.5px] font-bold ${isOpen ? 'text-[#2d3185]' : 'text-slate-800'}`}
                                  >
                                    {locale === "ar" ? item.label.ar : item.label.en}
                                  </Link>

                                  {hasSubmenu && (
                                    <button
                                      type="button"
                                      onClick={(e) => {
                                        e.preventDefault();
                                        toggleMobileSubmenu(item.key);
                                      }}
                                      aria-expanded={isOpen}
                                      className={`rounded-full p-1.5 transition-colors ${isOpen ? 'bg-[#2d3185]/10 text-[#2d3185]' : 'text-slate-400 hover:bg-slate-100 hover:text-slate-900'}`}
                                    >
                                      <ChevronDown
                                        className={`h-4.5 w-4.5 transition-transform duration-300 ${
                                          isOpen ? "rotate-180" : ""
                                        }`}
                                      />
                                    </button>
                                  )}
                                </div>

                                <AnimatePresence initial={false}>
                                  {hasSubmenu && isOpen && (
                                    <motion.div
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: "auto", opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.25, ease: "easeInOut" }}
                                      className="overflow-hidden bg-slate-50/80"
                                    >
                                      <div className="p-3 border-t border-slate-100">
                                        
                                        {/* Nested Groups inside Mobile Menu */}
                                        {item.groups && (
                                          <div className="space-y-2">
                                            {item.groups.map((group, gIdx) => {
                                              const isGroupOpen = activeMobileGroup === group.title.en;
                                              
                                              return (
                                                <div key={gIdx} className="overflow-hidden rounded-xl bg-white border border-slate-100">
                                                  <button
                                                    onClick={(e) => toggleMobileNestedGroup(group.title.en, e)}
                                                    className="flex w-full items-center justify-between p-3.5 text-start"
                                                  >
                                                    <span className="text-[14px] font-bold text-slate-800">
                                                      {locale === "ar" ? group.title.ar : group.title.en}
                                                    </span>
                                                    <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${isGroupOpen ? "rotate-180 text-[#2d3185]" : ""}`} />
                                                  </button>
                                                  
                                                  <AnimatePresence initial={false}>
                                                    {isGroupOpen && (
                                                      <motion.div
                                                        initial={{ height: 0 }}
                                                        animate={{ height: "auto" }}
                                                        exit={{ height: 0 }}
                                                        transition={{ duration: 0.2 }}
                                                        className="overflow-hidden bg-slate-50/50"
                                                      >
                                                        <div className="flex flex-col gap-1 p-2 pt-0">
                                                          {group.links.map(link => {
                                                            const Icon = link.icon;
                                                            return (
                                                              <div key={link.key} className="flex flex-col">
                                                                <Link
                                                                  href={resolveHref(link.href)}
                                                                  onClick={() => setMobileMenuOpen(false)}
                                                                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-600 active:bg-[#2d3185]/5 active:text-[#2d3185] transition-colors"
                                                                >
                                                                  {Icon && <Icon className="h-4 w-4 shrink-0 opacity-60" />}
                                                                  <span className="text-[13.5px] font-semibold">{locale === "ar" ? link.label.ar : link.label.en}</span>
                                                                </Link>
                                                                
                                                                {/* Mobile sub-links */}
                                                                {link.subLinks && (
                                                                  <div className={`flex flex-col gap-1.5 py-1.5 mb-2 ${locale === "ar" ? "pr-8 border-r" : "pl-8 border-l"} border-slate-200/60`}>
                                                                    {link.subLinks.map((sub) => (
                                                                      <Link
                                                                        key={sub.key}
                                                                        href={resolveHref(sub.href)}
                                                                        onClick={() => setMobileMenuOpen(false)}
                                                                        className="text-[12.5px] font-semibold text-slate-500 active:text-[#2d3185]"
                                                                      >
                                                                        {locale === "ar" ? sub.label.ar : sub.label.en}
                                                                      </Link>
                                                                    ))}
                                                                  </div>
                                                                )}
                                                              </div>
                                                            )
                                                          })}
                                                        </div>
                                                      </motion.div>
                                                    )}
                                                  </AnimatePresence>
                                                </div>
                                              )
                                            })}
                                          </div>
                                        )}

                                        {/* Single Links inside Mobile Menu */}
                                        {!item.groups && item.singleLinks && (
                                          <div className="grid grid-cols-1 gap-2">
                                            {item.singleLinks.map((subItem) => {
                                              const Icon = subItem.icon
                                              return (
                                                <Link
                                                  key={subItem.key}
                                                  href={resolveHref(subItem.href)}
                                                  onClick={() => setMobileMenuOpen(false)}
                                                  className="flex items-center gap-3.5 rounded-xl bg-white px-4 py-3.5 text-sm text-slate-700 shadow-sm border border-slate-100 transition-all active:scale-[0.98]"
                                                >
                                                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#2d3185]/5 text-[#2d3185]">
                                                    {Icon && <Icon className="h-4.5 w-4.5" />}
                                                  </span>
                                                  <span className="font-bold">
                                                    {locale === "ar" ? subItem.label.ar : subItem.label.en}
                                                  </span>
                                                </Link>
                                              )
                                            })}
                                          </div>
                                        )}
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Mobile Login Button Area */}
                    <div className="border-t border-slate-200 bg-white p-5 shrink-0">
                      <div className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${mobileLoginMenuOpen ? 'border-[#2d3185] ring-2 ring-[#2d3185]/10' : 'border-slate-200'}`}>
                        <button
                          type="button"
                          onClick={() => setMobileLoginMenuOpen((prev) => !prev)}
                          aria-expanded={mobileLoginMenuOpen}
                          className={`flex w-full items-center justify-between px-5 py-4 transition-colors ${mobileLoginMenuOpen ? 'bg-[#2d3185] text-white' : 'bg-white text-slate-900'}`}
                        >
                          <div className="flex items-center gap-2">
                            <User className={`h-5 w-5 ${mobileLoginMenuOpen ? 'text-white/80' : 'text-[#2d3185]'}`} />
                            <span className="text-[16px] font-bold">{t("nav.login")}</span>
                          </div>
                          <ChevronDown
                            className={`h-5 w-5 transition-transform duration-300 ${
                              mobileLoginMenuOpen ? "rotate-180 text-white/80" : "text-slate-400"
                            }`}
                          />
                        </button>

                        <AnimatePresence initial={false}>
                          {mobileLoginMenuOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: "easeInOut" }}
                              className="overflow-hidden bg-slate-50"
                            >
                              <div className="p-3 space-y-2">
                                {loginMenuItems.map((item) => {
                                  const Icon = item.icon
                                  return (
                                    <Link
                                      key={item.key}
                                      href={resolveHref(item.href)}
                                      onClick={() => setMobileMenuOpen(false)}
                                      className="flex items-center gap-4 rounded-xl px-4 py-3.5 bg-white border border-slate-100 shadow-sm active:bg-slate-50 transition-colors"
                                    >
                                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#2d3185]/5 text-[#2d3185]">
                                        <Icon className="h-5 w-5" />
                                      </span>
                                      <span className="text-[14px] font-bold text-slate-800">
                                        {item.label}
                                      </span>
                                    </Link>
                                  )
                                })}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
