"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { usePathname } from "next/navigation"

const AUTO_PROGRESS_LIMIT = 86
const PROGRESS_INTERVAL_MS = 90
const COMPLETE_AFTER_MS = 1050
const HIDE_AFTER_COMPLETE_MS = 320

export function PageLoader() {
  const pathname = usePathname()
  const prefersReducedMotion = useReducedMotion()

  const [isVisible, setIsVisible] = useState(true)
  const [progress, setProgress] = useState(0)

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const completeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const clearAllTimers = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }

    if (completeTimerRef.current) {
      clearTimeout(completeTimerRef.current)
      completeTimerRef.current = null
    }

    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current)
      hideTimerRef.current = null
    }
  }

  useEffect(() => {
    clearAllTimers()
    setIsVisible(true)
    setProgress(0)

    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= AUTO_PROGRESS_LIMIT) return prev

        const remaining = AUTO_PROGRESS_LIMIT - prev
        const increment = Math.max(1.8, remaining * 0.18)

        return Math.min(prev + increment, AUTO_PROGRESS_LIMIT)
      })
    }, prefersReducedMotion ? 120 : PROGRESS_INTERVAL_MS)

    completeTimerRef.current = setTimeout(() => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }

      setProgress(100)

      hideTimerRef.current = setTimeout(() => {
        setIsVisible(false)
      }, prefersReducedMotion ? 160 : HIDE_AFTER_COMPLETE_MS)
    }, prefersReducedMotion ? 760 : COMPLETE_AFTER_MS)

    return () => {
      clearAllTimers()
    }
  }, [pathname, prefersReducedMotion])

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          key={`page-loader-${pathname}`}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: prefersReducedMotion ? 0.18 : 0.38,
              ease: "easeInOut",
            },
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-white"
          role="status"
          aria-live="polite"
          aria-busy="true"
          aria-label="جاري تحميل الصفحة"
        >
          <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">
            {/* Logo */}
            <motion.div
              className="relative"
              style={{ willChange: "opacity, transform, filter" }}
              initial={
                prefersReducedMotion
                  ? { opacity: 1 }
                  : {
                      opacity: 0,
                      scale: 0.92,
                      y: 14,
                      filter: "blur(14px)",
                    }
              }
              animate={
                prefersReducedMotion
                  ? { opacity: 1 }
                  : {
                      opacity: 1,
                      scale: 1,
                      y: 0,
                      filter: "blur(0px)",
                    }
              }
              exit={{
                opacity: 0,
                scale: 0.98,
                filter: "blur(6px)",
                transition: {
                  duration: prefersReducedMotion ? 0.16 : 0.28,
                  ease: "easeOut",
                },
              }}
              transition={
                prefersReducedMotion
                  ? { duration: 0.2 }
                  : {
                      duration: 1.15,
                      ease: [0.22, 1, 0.36, 1],
                    }
              }
            >
              <motion.div
                className="absolute inset-0 -m-6 rounded-full bg-[#324198]/10 blur-3xl"
                aria-hidden="true"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: prefersReducedMotion ? 0 : 0.25,
                  duration: prefersReducedMotion ? 0.2 : 0.9,
                  ease: "easeOut",
                }}
              />

              <Image
                src="/images/logo.png"
                alt="شعار بنك بن دول"
                width={148}
                height={74}
                priority
                className="relative h-[68px] w-auto drop-shadow-[0_18px_40px_rgba(50,65,152,0.18)] sm:h-[74px]"
              />
            </motion.div>

            {/* Progress bar */}
            <motion.div
              className="w-52"
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: prefersReducedMotion ? 0 : 0.28,
                duration: prefersReducedMotion ? 0.2 : 0.42,
                ease: "easeOut",
              }}
            >
              <div className="h-[3px] w-full overflow-hidden rounded-full bg-[#324198]/10">
                <div
                  className="h-full rounded-full bg-[#324198]"
                  style={{
                    width: `${progress}%`,
                    transition: "width 180ms ease-out",
                  }}
                />
              </div>
            </motion.div>

            <span className="sr-only">جاري تحميل محتوى الصفحة</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
