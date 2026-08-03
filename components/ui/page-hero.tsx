"use client"

import { motion } from "framer-motion"
import { Breadcrumbs } from "./breadcrumbs"
// import { Building2 } from "lucide-react"
import Image from "next/image"

interface PageHeroProps {
  title: string
  subtitle: string
  breadcrumbs: { labelKey: string; href?: string }[]
  tagline?: string
  children?: React.ReactNode
}

export function PageHero({
  title,
  subtitle,
  breadcrumbs,
  tagline,
  children,
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-transparent py-16 md:py-24 min-h-[560px] flex items-center">
      {/* Background layers */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0b0d36] via-[#262b80] to-[#0b0d36]" />

      <div
        className="absolute inset-0 z-0 opacity-[0.06]"
        style={{
          backgroundImage: "url('/images/new-pattern.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="absolute -top-32 -start-32 z-0 h-[500px] w-[500px] rounded-full bg-sky-400/10 blur-3xl opacity-50" />
      <div className="absolute -bottom-24 -end-24 z-0 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute inset-x-0 top-0 z-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      {/* Content */}
      <div className="container relative z-10 mx-auto w-full px-4">
        {/* Breadcrumbs */}
        <div className="mb-6 md:mb-8">
          <div className="inline-flex rounded-full border border-white/15 bg-white/8 px-4 py-2 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            {tagline && (
              <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
                {tagline}
              </span>
            )}

            <h1 className="mb-6 text-4xl font-bold leading-tight text-white drop-shadow-lg md:text-5xl lg:text-6xl">
              {title}
            </h1>

            <p className="mb-8 text-lg leading-relaxed text-white/82 drop-shadow-md md:text-xl">
              {subtitle}
            </p>

            {children}
          </motion.div>

          <div className="flex justify-center rtl:lg:justify-end ltr:lg:justify-start">
            <img
              src="/logo-2.png"
              alt={title}
              className="h-48 w-48 md:h-64 md:w-64 lg:h-72 lg:w-72 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}