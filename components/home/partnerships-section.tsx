"use client"

import React, { useMemo, useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"
import { partnerships, Partner } from "@/data/partnerships"

type Category = "local" | "international" | "correspondent"

type PartnerExt = Partner & {
  nameAr?: string
  href?: string
}

export function PartnershipsSection() {
  const { t, direction } = useI18n()
  const shouldReduceMotion = useReducedMotion()
  const [activeCategory, setActiveCategory] = useState<Category>("local")

  const categories = useMemo(
    () => [
      {
        id: "local" as const,
        label: t("partnerships.local"),
        count: partnerships.filter((p) => p.category === "local").length,
      },
      {
        id: "international" as const,
        label: t("partnerships.international"),
        count: partnerships.filter((p) => p.category === "international").length,
      },
      {
        id: "correspondent" as const,
        label: t("partnerships.correspondent"),
        count: partnerships.filter((p) => p.category === "correspondent").length,
      },
    ],
    [t]
  )

  const filteredPartners = useMemo(
    () => partnerships.filter((p) => p.category === activeCategory),
    [activeCategory]
  )

  const sectionReveal = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const },
      }

  const gridVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.35,
        staggerChildren: shouldReduceMotion ? 0 : 0.06,
        delayChildren: shouldReduceMotion ? 0 : 0.04,
      },
    },
    exit: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : -6,
      transition: {
        duration: shouldReduceMotion ? 0.15 : 0.22,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 18, scale: 0.985 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0.18 : 0.45,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  }

  return (
    <section
      id="partnerships"
      dir={direction}
      className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_48%,#ffffff_100%)]"
    >
      {/* Ambient premium background */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -top-24 right-[-8%] h-[340px] w-[340px] rounded-full bg-[#0c2246]/[0.055] blur-[110px]"
          animate={
            shouldReduceMotion
              ? undefined
              : { x: [0, -16, 0], y: [0, 12, 0], scale: [1, 1.04, 1] }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : { duration: 12, repeat: Infinity, ease: "easeInOut" }
          }
        />
        <motion.div
          className="absolute bottom-[-120px] left-[-6%] h-[280px] w-[280px] rounded-full bg-[#8c1d2f]/[0.045] blur-[100px]"
          animate={
            shouldReduceMotion
              ? undefined
              : { x: [0, 14, 0], y: [0, -10, 0], scale: [1, 1.03, 1] }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : { duration: 14, repeat: Infinity, ease: "easeInOut" }
          }
        />
        <div className="absolute inset-0 opacity-[0.025] [background-image:radial-gradient(#0c2246_0.7px,transparent_0.7px)] [background-size:18px_18px]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4">
        {/* <motion.div
          className="mx-auto mb-14 max-w-3xl text-center md:mb-16"
          {...sectionReveal}
        >
          <span className="mb-4 inline-flex items-center rounded-full border border-[#0c2246]/10 bg-white/80 px-4 py-1.5 text-xs font-semibold tracking-[0.22em] text-[#0c2246]/70 shadow-[0_8px_30px_rgba(12,34,70,0.05)] backdrop-blur font-cairo uppercase">
            {direction === "rtl" ? "شراكات استراتيجية" : "Strategic Partnerships"}
          </span>

          <h2 className="font-cairo text-3xl font-bold leading-tight text-[#081a36] md:text-5xl">
            {t("partnerships.title")}
          </h2>

          <div className="mx-auto my-6 h-px w-28 bg-gradient-to-r from-transparent via-[#8c1d2f]/70 to-transparent" />

          <p className="font-cairo text-base leading-8 text-[#5b6472] md:text-lg">
            {t("partnerships.subtitle")}
          </p>
        </motion.div> */}

        {/* Tabs */}
        <motion.div
          className="mb-10 flex justify-center md:mb-12"
          {...sectionReveal}
        >
          <div className="relative inline-flex flex-wrap items-center justify-center gap-2 rounded-[1.4rem] border border-[#0c2246]/10 bg-white/80 p-2 shadow-[0_18px_50px_rgba(8,26,54,0.06)] backdrop-blur">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className="relative isolate min-w-[150px] rounded-[1rem] px-4 py-3 text-sm font-semibold transition-colors duration-300 md:min-w-[180px] md:px-5 md:text-[15px]"
                >
                  {isActive && (
                    <motion.div
                      layoutId="partnerships-active-tab"
                      className="absolute inset-0 -z-10 rounded-[1rem] bg-[#081a36] shadow-[0_12px_35px_rgba(8,26,54,0.22)]"
                      transition={{ type: "spring", bounce: 0.18, duration: 0.55 }}
                    />
                  )}

                  <div className="flex items-center justify-center gap-2.5">
                    <span
                      className={`font-cairo ${
                        isActive ? "text-white" : "text-[#4b5563]"
                      }`}
                    >
                      {cat.label}
                    </span>
                    <span
                      className={`rounded-full px-2 py-0.5 text-[11px] font-bold ${
                        isActive
                          ? "bg-white/12 text-white"
                          : "bg-[#0c2246]/6 text-[#0c2246]/70"
                      }`}
                    >
                      {cat.count}
                    </span>
                  </div>
                </button>
              )
            })}
          </div>
        </motion.div>

        {/* Grid shell */}
        <motion.div
          className="relative overflow-hidden rounded-[2rem] border border-[#0c2246]/8 bg-white/85 p-5 shadow-[0_18px_60px_rgba(8,26,54,0.06)] backdrop-blur md:p-7"
          {...sectionReveal}
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0c2246]/12 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0c2246]/[0.02] to-transparent" />

          <div className="min-h-[340px] md:min-h-[380px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                variants={gridVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
              >
                {filteredPartners.map((partner) => (
                  <LogoCard
                    key={partner.id}
                    partner={partner}
                    direction={direction}
                    variants={cardVariants}
                  />
                ))}
              </motion.div>
            </AnimatePresence>

            {filteredPartners.length === 0 && (
              <div className="flex min-h-[280px] items-center justify-center">
                <p className="font-cairo text-sm text-[#6b7280] md:text-base">
                  {direction === "rtl"
                    ? "لا توجد شعارات متاحة ضمن هذا التصنيف حاليًا."
                    : "No partner logos are available in this category yet."}
                </p>
              </div>
            )}
          </div>
        </motion.div>

        {/* View all */}
        {/* <motion.div
          className="mt-10 text-center md:mt-14"
          {...sectionReveal}
        >
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-full border border-[#081a36]/10 bg-white px-6 py-3 font-cairo text-sm font-semibold text-[#081a36] shadow-[0_10px_30px_rgba(8,26,54,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#081a36]/20 hover:bg-[#081a36]/[0.02]"
          >
            <span>{t("partnerships.viewAll")}</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </motion.div> */}
      </div>
    </section>
  )
}

function LogoCard({
  partner,
  direction,
  variants,
}: {
  partner: Partner
  direction: string
  variants: {
    hidden: { opacity: number; y: number; scale?: number }
    visible: {
      opacity: number
      y: number
      scale?: number
      transition?: {
        duration?: number
        ease?: "easeOut" | number[] | undefined
      }
    }
  }
}) {
  const [imgError, setImgError] = useState(false)

  const partnerData = partner as PartnerExt
  const displayName =
    direction === "rtl"
      ? partnerData.nameAr || partnerData.nameEn
      : partnerData.nameEn || partnerData.nameAr || ""

  const shortLabel = getShortLabel(displayName)

  const content = (
    <motion.div
      variants={variants}
      whileHover={{
        y: -4,
        scale: 1.01,
        transition: { duration: 0.25, ease: "easeOut" },
      }}
      className="group relative h-32 overflow-hidden rounded-[1.35rem] border border-[#0c2246]/7 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(248,250,252,0.96)_100%)] p-5 shadow-[0_8px_28px_rgba(8,26,54,0.04)] transition-all duration-300 hover:border-[#0c2246]/14 hover:shadow-[0_16px_40px_rgba(8,26,54,0.09)] md:h-36"
    >
      {/* subtle metallic highlight */}
      <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-[#cfd6df] to-transparent opacity-80" />

      {/* hover shimmer */}
      <motion.div
        className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/55 to-transparent opacity-0 blur-md group-hover:opacity-100"
        initial={false}
        whileHover={{ x: "260%" }}
        transition={{ duration: 0.85, ease: "easeOut" }}
      />

      {/* corner accent */}
      <div className="pointer-events-none absolute right-0 top-0 h-14 w-14 overflow-hidden rounded-tr-[1.35rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute right-[-18px] top-[-18px] h-10 w-10 rotate-45 bg-gradient-to-br from-[#0c2246]/10 to-transparent" />
      </div>

      <div className="relative flex h-full flex-col items-center justify-center">
        {!imgError && partnerData.logo ? (
          <div className="relative h-14 w-full max-w-[132px]">
            <Image
              src={partnerData.logo}
              alt={displayName}
              fill
              sizes="160px"
              className="object-contain opacity-[0.9] grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
              onError={() => setImgError(true)}
            />
          </div>
        ) : (
          <div className="flex h-14 w-full max-w-[132px] items-center justify-center rounded-xl border border-dashed border-[#0c2246]/12 bg-[#0c2246]/[0.025] px-3 text-center">
            <span className="line-clamp-2 text-sm font-semibold tracking-wide text-[#081a36]/70">
              {shortLabel}
            </span>
          </div>
        )}

        <div className="mt-3 h-px w-10 bg-gradient-to-r from-transparent via-[#0c2246]/12 to-transparent" />

        {/* <span className="mt-2 line-clamp-1 text-center text-[11px] font-medium tracking-[0.14em] text-[#7b8794] uppercase">
          {direction === "rtl" ? "شريك" : "Partner"}
        </span> */}
      </div>

      <div className="absolute inset-x-6 bottom-0 h-[2px] origin-center scale-x-0 rounded-full bg-gradient-to-r from-transparent via-[#081a36] to-transparent transition-transform duration-400 group-hover:scale-x-100" />
    </motion.div>
  )

  if (partnerData.href) {
    return (
      <a
        href={partnerData.href}
        target="_blank"
        rel="noreferrer"
        aria-label={displayName}
        className="block"
      >
        {content}
      </a>
    )
  }

  return content
}

function getShortLabel(name: string) {
  if (!name) return "Partner"

  const words = name.trim().split(/\s+/).filter(Boolean)
  if (words.length === 1) return words[0]

  return words.slice(0, 2).join(" ")
}