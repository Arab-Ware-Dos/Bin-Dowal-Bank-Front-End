"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SectionHeader } from "@/components/ui/section-header"

const cards = [
  {
    id: 1,
    front: "/images/cards/debit_desert.png",
    title: "بطاقة كلاسيك",
    subtitle: "حلول يومية بمرونة أعلى",
    tag: "CLASSIC",
    color: "#f9d9b6",
    features: [
      "مقبولة محلياً وعالمياً في جميع نقاط البيع",
      "أمان عالي باستخدام تقنية الشريحة الذكية",
      "سحوبات نقدية ومشتريات مرنة وميسرة",
    ],
  },
  {
    id: 2,
    front: "/images/cards/debit-noor.png",
    title: "بطاقة نور",
    subtitle: "مزايا أكثر وتجربة مصرفية أذكى",
    tag: "NOUR",
    color: "#e78979",
    features: [
      "تسهيلات دفع مرنة ومتوافقة مع الشريعة",
      "عروض وخصومات حصرية لدى شركائنا",
      "إدارة ذكية ومباشرة عبر تطبيق البنك",
    ],
  },
  {
    id: 3,
    front: "/images/cards/gold-credit.png",
    title: "بطاقة جولد",
    subtitle: "تصميم راقٍ ومزايا مميزة",
    tag: "GOLD",
    color: "#f59e0b",
    features: [
      "أولوية في الخدمة عبر جميع الفروع",
      "خدمة عملاء مخصصة على مدار الساعة",
      "حد ائتماني مرن ومناسب لتطلعاتك",
    ],
  },
  {
    id: 4,
    front: "/images/cards/shopping-prepaid.png",
    title: "بطاقة تسوق",
    subtitle: "تصميم راقٍ ومزايا مميزة",
    tag: "SHOPPING",
    color: "#c0c0c0",
    features: [
      "أولوية في الخدمة عبر جميع الفروع",
      "خدمة عملاء مخصصة على مدار الساعة",
      "حد ائتماني مرن ومناسب لتطلعاتك",
    ],
  },
]

export function CardsSection() {
  const [active, setActive] = useState(0)
  const [prev, setPrev] = useState<number | null>(null)

  const goTo = useCallback(
    (idx: number) => {
      if (idx === active) return
      setPrev(active)
      setActive(idx)
    },
    [active]
  )

  // Auto-advance
  useEffect(() => {
    const id = setInterval(() => goTo((active + 1) % cards.length), 6000)
    return () => clearInterval(id)
  }, [active, goTo])

  const card = cards[active]

  return (
    <section className="relative w-full overflow-hidden bg-[#324198] px-4 py-24" dir="rtl">
      <div className="relative z-10 mx-auto max-w-[1320px]">
        <SectionHeader
          badge="بطاقاتنا المصرفية"
          badgeClassName="border-white/10 bg-white/8 text-white/80 shadow-[0_8px_30px_rgba(255,255,255,0.05)] tracking-wider"
          title={
            <>
              اختر{" "}
              <span className="bg-gradient-to-l from-white via-indigo-200 to-purple-300 bg-clip-text text-transparent">
                البطاقة
              </span>{" "}
              التي تناسبك
            </>
          }
          titleClassName="text-white"
          description="مجموعة متكاملة من البطاقات المصرفية المصممة لتلبية كل احتياجاتك اليومية والمميزة بأعلى معايير الأمان والراحة."
          descriptionClassName="text-white/60"
          showDivider={true}
          dividerClassName="via-white/30"
        />

        {/* ── Main spotlight area ── */}
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
          {/* Left: Animated card details */}
          <div className="flex w-full flex-col lg:w-[45%]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`info-${active}`}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="flex flex-col gap-8"
              >
                {/* Tag */}
                <div className="flex items-center gap-3">
                  <span
                    className="h-px w-10"
                    style={{ background: card.color, boxShadow: `0 0 10px ${card.color}` }}
                  />
                  <span
                    className="font-mono text-xs font-bold tracking-[0.3em] uppercase"
                    style={{ color: card.color }}
                  >
                    {card.tag}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="font-cairo text-4xl font-bold text-white md:text-5xl">
                    {card.title}
                  </h3>
                  <p className="mt-3 font-cairo text-lg text-white/55">{card.subtitle}</p>
                </div>

                {/* Features */}
                <ul className="flex flex-col gap-4">
                  {card.features.map((f, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.09, duration: 0.4 }}
                      className="flex items-start gap-3"
                    >
                      <span
                        className="mt-[3px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px]"
                        style={{
                          background: `${card.color}22`,
                          color: card.color,
                          boxShadow: `0 0 10px ${card.color}44`,
                          border: `1px solid ${card.color}55`,
                        }}
                      >
                        ✦
                      </span>
                      <span className="font-cairo text-[15px] leading-relaxed text-white/80">
                        {f}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="flex items-center gap-4 pt-2">
                  <Link
                    href="/customer-service/bank-cards-request"
                    className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-7 py-3 font-cairo text-sm font-bold text-white transition-all duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${card.color}cc, ${card.color}66)`,
                      boxShadow: `0 0 24px ${card.color}44`,
                    }}
                  >
                    <span className="relative z-10">طلب البطاقة</span>
                    <span className="relative z-10 transition-transform duration-300 group-hover:-translate-x-1">
                      ←
                    </span>
                    <div className="absolute inset-0 translate-x-full bg-white/15 transition-transform duration-500 group-hover:translate-x-0" />
                  </Link>
                  <Link
                    href="/cards"
                    className="font-cairo text-sm font-medium text-white/50 underline underline-offset-4 transition-colors duration-200 hover:text-white/90"
                  >
                    تعرف على المزيد
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Hero card visual */}
          <div className="relative flex w-full items-center justify-center lg:w-[55%]">
            {/* Ambient glow behind card */}
            <div
              className="pointer-events-none absolute inset-0 rounded-full blur-[120px] transition-all duration-700"
              style={{ background: `${card.color}28` }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={`card-${active}`}
                initial={{ opacity: 0, scale: 0.88, rotateY: -12 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.92, rotateY: 12 }}
                transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative w-full max-w-[500px]"
                style={{ perspective: 1200 }}
              >
                {/* Card glow rim */}
                <div
                  className="absolute -inset-[3px] rounded-[32px] opacity-60 blur-xl transition-all duration-700"
                  style={{
                    background: `linear-gradient(135deg, ${card.color}, transparent 60%, ${card.color}88)`,
                  }}
                />

                {/* Card frame */}
                <div className="relative overflow-hidden rounded-[28px] border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.5)]">
                  {/* Shimmer */}
                  <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(115deg,transparent_25%,rgba(255,255,255,0.15)_42%,transparent_58%)]" />
                  {/* Top line */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />

                  <div className="relative aspect-[85.6/53.98] w-full">
                    <Image
                      src={card.front}
                      alt={card.title}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 500px"
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, y: 12, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="absolute -bottom-5 -left-4 flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-2.5 backdrop-blur-xl shadow-xl"
                >
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ background: card.color, boxShadow: `0 0 8px ${card.color}` }}
                  />
                  <span className="font-cairo text-xs font-semibold text-white/90">
                    {card.subtitle}
                  </span>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ── Thumbnail selector strip ── */}
        {/* <div className="mt-16 flex items-stretch justify-center gap-4">
          {cards.map((c, i) => (
            <button
              key={c.id}
              onClick={() => goTo(i)}
              aria-label={`عرض ${c.title}`}
              className={`group relative flex max-w-[280px] flex-1 cursor-pointer flex-col overflow-hidden rounded-2xl border transition-all duration-400 ${
                i === active
                  ? "border-white/30 shadow-[0_0_30px_rgba(99,102,241,0.25)]"
                  : "border-white/8 opacity-50 hover:border-white/18 hover:opacity-75"
              }`}
            >
              
              <div className="relative aspect-[85.6/53.98] w-full overflow-hidden">
                <Image
                  src={c.front}
                  alt={c.title}
                  fill
                  sizes="280px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {i !== active && <div className="absolute inset-0 bg-[#10123a]/60" />}
              </div>

              
              <div
                className="flex items-center justify-between gap-2 px-4 py-3"
                style={{
                  background:
                    i === active
                      ? `linear-gradient(135deg, ${c.color}22, transparent)`
                      : "rgba(255,255,255,0.04)",
                }}
              >
                <span className="font-cairo text-sm font-bold text-white">{c.title}</span>
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={
                    i === active
                      ? { background: c.color, boxShadow: `0 0 8px ${c.color}` }
                      : { background: "rgba(255,255,255,0.2)" }
                  }
                />
              </div>

              
              {i === active && (
                <motion.div
                  layoutId="thumb-underline"
                  className="absolute inset-x-0 bottom-0 h-[2px]"
                  style={{ background: `linear-gradient(90deg, transparent, ${c.color}, transparent)` }}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div> */}

        
        <div className="mt-8 flex items-center justify-center gap-2">
          {cards.map((c, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`الانتقال إلى البطاقة ${i + 1}`}
              className="relative h-1.5 overflow-hidden rounded-full transition-all duration-400"
              style={{
                width: i === active ? 36 : 8,
                background: i === active ? card.color : "rgba(255,255,255,0.2)",
                boxShadow: i === active ? `0 0 10px ${card.color}88` : "none",
              }}
            >
              {i === active && (
                <motion.div
                  key={`progress-${active}`}
                  className="absolute inset-y-0 left-0 rounded-full bg-white/30"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 6, ease: "linear" }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}