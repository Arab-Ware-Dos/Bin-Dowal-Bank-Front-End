"use client"

import React from "react"
import { motion, useReducedMotion, MotionProps } from "framer-motion"
import { cn } from "@/lib/utils"
import { useI18n } from "@/lib/i18n-context"

export interface SectionHeaderProps {
  badge?: React.ReactNode
  title: React.ReactNode
  description?: React.ReactNode
  direction?: "rtl" | "ltr"
  className?: string
  badgeClassName?: string
  titleClassName?: string
  descriptionClassName?: string
  dividerClassName?: string
  showDivider?: boolean
  animate?: boolean
  animationProps?: import("framer-motion").MotionProps
  id?: string
}

export function SectionHeader({
  badge,
  title,
  description,
  direction,
  className,
  badgeClassName,
  titleClassName,
  descriptionClassName,
  dividerClassName,
  showDivider = true,
  animate = true,
  animationProps,
  id,
}: SectionHeaderProps) {
  let contextDirection: "rtl" | "ltr" = "rtl"
  try {
    const i18n = useI18n()
    if (i18n) {
      contextDirection = i18n.direction
    }
  } catch (e) {
    // Graceful fallback to "rtl" if used outside I18nProvider context
  }

  const currentDirection = direction || contextDirection || "rtl"
  const shouldReduceMotion = useReducedMotion()

  const defaultReveal = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const },
      }

  const motionProps = animate ? (animationProps || defaultReveal) : {}

  return (
    <motion.div
      dir={currentDirection}
      className={cn("mx-auto mb-14 max-w-3xl text-center md:mb-16", className)}
      {...motionProps}
    >
      {badge && (
        <span
          className={cn(
            "mb-4 inline-flex items-center rounded-full border border-[#0c2246]/10 bg-white/80 px-4 py-1.5 text-xs font-semibold tracking-[0.22em] text-[#0c2246]/70 shadow-[0_8px_30px_rgba(12,34,70,0.05)] backdrop-blur font-cairo uppercase",
            badgeClassName
          )}
        >
          {badge}
        </span>
      )}

      <h2
        id={id}
        className={cn(
          "font-cairo text-3xl font-bold leading-tight text-[#081a36] md:text-5xl",
          titleClassName
        )}
      >
        {title}
      </h2>

      {showDivider && (
        <div
          className={cn(
            "mx-auto my-6 h-px w-28 bg-gradient-to-r from-transparent via-[#8c1d2f]/70 to-transparent",
            dividerClassName
          )}
        />
      )}

      {description && (
        <p
          className={cn(
            "font-cairo text-base leading-8 text-[#5b6472] md:text-lg",
            descriptionClassName
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  )
}
