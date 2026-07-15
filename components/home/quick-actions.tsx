"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n-context"
import { getLocalizedHref } from "@/lib/localized-routes"
import { SectionHeader } from "@/components/ui/section-header"
import {
  UserPlus,
  Calculator,
  MapPin,
  Smartphone,
  MessageCircle,
  ArrowLeft,
  ArrowRight,
  LucideIcon,
} from "lucide-react"

type ActionTone = "primary" | "royal" | "teal" | "cyan" | "gold"

type QuickActionItem = {
  key: string
  icon: LucideIcon
  href: string
  tone: ActionTone
}

const actions: QuickActionItem[] = [
  {
    key: "openAccount",
    icon: UserPlus,
    href: "/personal-banking#accounts",
    tone: "primary",
  },
  {
    key: "calculateFinancing",
    icon: Calculator,
    href: "/calculator",
    tone: "royal",
  },
  {
    key: "findBranch",
    icon: MapPin,
    href: "/atm-and-branches",
    tone: "teal",
  },
  {
    key: "downloadApp",
    icon: Smartphone,
    href: "/digital-channels#mobile",
    tone: "cyan",
  },
  {
    key: "contactUs",
    icon: MessageCircle,
    href: "/contact",
    tone: "gold",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

function getToneClasses(tone: ActionTone) {
  const tones: Record<ActionTone, string> = {
    primary:
      "bg-[linear-gradient(135deg,rgba(29,78,216,0.14),rgba(255,255,255,0.58))] text-[#1d4ed8] ring-[#1d4ed8]/12",
    royal:
      "bg-[linear-gradient(135deg,rgba(37,99,235,0.14),rgba(255,255,255,0.58))] text-[#2563eb] ring-[#2563eb]/12",
    teal:
      "bg-[linear-gradient(135deg,rgba(14,116,144,0.14),rgba(255,255,255,0.58))] text-[#0f766e] ring-[#0f766e]/12",
    cyan:
      "bg-[linear-gradient(135deg,rgba(8,145,178,0.14),rgba(255,255,255,0.58))] text-[#0891b2] ring-[#0891b2]/12",
    gold:
      "bg-[linear-gradient(135deg,rgba(180,83,9,0.12),rgba(255,255,255,0.58))] text-[#b45309] ring-[#b45309]/12",
  }

  return tones[tone]
}

export function QuickActions() {
  const { t, direction, mode, locale } = useI18n()
  const ArrowIcon = direction === "rtl" ? ArrowLeft : ArrowRight

  return (
    <section className="relative overflow-hidden bg-[#324198] py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="absolute left-1/2 top-12 h-64 w-64 -translate-x-1/2 rounded-full bg-[#60a5fa]/10 blur-3xl" />
        <div className="absolute -left-16 top-1/3 h-56 w-56 rounded-full bg-[#1e3a8a]/20 blur-3xl" />
        <div className="absolute -right-12 bottom-0 h-64 w-64 rounded-full bg-[#7c2d12]/10 blur-3xl" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_34%)]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <SectionHeader
          badge={direction === "rtl" ? "الخدمات الإلكترونية" : "E-Services"}
          badgeClassName="border-white/10 bg-white/8 text-white/80 shadow-[0_8px_30px_rgba(255,255,255,0.05)] tracking-wider"
          title={t("quickActions.title")}
          titleClassName="text-white"
          showDivider={true}
          dividerClassName="via-white/30"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5"
        >
          {actions.map((action) => {
            const Icon = action.icon

            return (
              <motion.article key={action.key} variants={item} className="h-full">
                <Link
                  href={mode === "url" ? getLocalizedHref(action.href, locale) : action.href}
                  aria-label={t(`quickActions.${action.key}`)}
                  className="group relative flex h-full min-h-[200px] flex-col justify-between overflow-hidden rounded-[28px] border border-white/18 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(248,250,252,0.92))] p-5 shadow-[0_18px_50px_-28px_rgba(15,23,42,0.45)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-white/35 hover:shadow-[0_28px_80px_-34px_rgba(15,23,42,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 md:p-6"
                >
                  <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#60a5fa]/40 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.06),transparent_34%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute inset-x-5 bottom-0 h-px bg-gradient-to-r from-transparent via-[#1e3a8a]/10 to-transparent transition-all duration-300 group-hover:via-[#1d4ed8]/20" />

                  <div className="flex items-start justify-between gap-3">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl ring-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] transition-all duration-300 group-hover:scale-[1.04] ${getToneClasses(
                        action.tone
                      )}`}
                    >
                      <Icon className="h-6 w-6" strokeWidth={2.1} />
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d8e0ee] bg-white/90 text-[#324198]/60 shadow-sm transition-all duration-300 group-hover:border-[#bfdbfe] group-hover:text-[#1d4ed8]">
                      <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
                    </div>
                  </div>

                  <div className="mt-8 flex-1">
                    <span className="block text-center font-cairo text-base font-semibold leading-7 text-[#324198] md:text-lg">
                      {t(`quickActions.${action.key}`)}
                    </span>
                  </div>

                  <div className="mt-5 flex items-center justify-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#1d4ed8]/18 transition-all duration-300 group-hover:w-8 group-hover:rounded-full group-hover:bg-[#1d4ed8]/28" />
                  </div>
                </Link>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
