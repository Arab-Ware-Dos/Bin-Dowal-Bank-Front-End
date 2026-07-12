"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { useI18n } from "@/lib/i18n-context"
import { stats } from "@/data/mock-data"
import { Building2, Landmark, Users, Clock } from "lucide-react"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  branches: Building2,
  atms: Landmark,
  customers: Users,
  experience: Clock,
}

function AnimatedCounter({ value, suffix }: { value: string; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const numericValue = parseInt(value.replace(/\D/g, ""))

  useEffect(() => {
    if (!isInView) return

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    if (prefersReducedMotion) {
      setCount(numericValue)
      return
    }

    let start = 0
    const duration = 2000
    const increment = numericValue / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= numericValue) {
        setCount(numericValue)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [isInView, numericValue])

  const prefix = value.startsWith("+") ? "+" : ""

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-primary">
      {prefix}
      {count}
      {suffix}
    </div>
  )
}

export function StatsSection() {
  const { t, locale } = useI18n()

  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => {
            const Icon = iconMap[stat.id] || Building2
            const value = locale === "ar" ? stat.valueAr : stat.valueEn
            const numMatch = value.match(/[\d.]+/)
            const suffix = numMatch ? value.replace(numMatch[0], "").replace("+", "") : ""

            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex p-4 bg-primary/10 rounded-2xl mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <AnimatedCounter value={value} suffix={suffix} />
                <p className="text-muted-foreground mt-2">{t(stat.labelKey)}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
