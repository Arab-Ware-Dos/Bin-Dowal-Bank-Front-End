"use client"

import React from "react"
import { motion, useReducedMotion, MotionProps } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { useI18n } from "@/lib/i18n-context"
import Link from "next/link"

export interface ViewAllButtonProps {
  label: string
  href: string
  direction?: "rtl" | "ltr"
  className?: string
  buttonClassName?: string
  animate?: boolean
  animationProps?: MotionProps
}

export function ViewAllButton({
  label,
  href,
  direction,
  className,
  buttonClassName,
  animate = true,
  animationProps,
}: ViewAllButtonProps) {
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
  const isRtl = currentDirection === "rtl"
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
      className={cn("mt-10 text-center md:mt-14", className)}
      {...motionProps}
    >
      <Link
        href={href}
        className={cn(
          "group inline-flex items-center gap-2 rounded-full border border-[#081a36]/10 bg-white px-6 py-3 font-cairo text-sm font-semibold text-[#081a36] shadow-[0_10px_30px_rgba(8,26,54,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#081a36]/20 hover:bg-[#081a36]/[0.02]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#081a36]/50 focus-visible:ring-offset-2",
          buttonClassName
        )}
      >
        <span>{label}</span>
        <ArrowUpRight
          className={cn(
            "h-4 w-4 transition-transform duration-300",
            isRtl
              ? "-scale-x-100 group-hover:-translate-y-0.5 group-hover:-translate-x-0.5"
              : "group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          )}
        />
      </Link>
    </motion.div>
  )
}
