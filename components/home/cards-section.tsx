"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useI18n } from "@/lib/i18n-context"
import { getLocalizedHref } from "@/lib/localized-routes"
import { SectionHeader } from "@/components/ui/section-header"
import { BankCardsSliderSkeleton } from "@/components/ui/loading-skeleton"
import { getBankCards } from "@/services/cards-service"

type CardItem = {
  id: number | string
  front: string
  titleKey: string
  subtitleKey: string
  tag: string
  color: string
  featuresKeys: string[]
  customTitle?: string
  customSubtitle?: string
  customFeatures?: string[]
}


function getCardTypeLabel(typeOrTag: string, isAr: boolean): string {
  const normalized = (typeOrTag || '').toLowerCase().trim();
  const mapAr: Record<string, string> = {
    debit: 'خصم مباشر',
    credit: 'ائتمانية',
    prepaid: 'مسبقة الدفع',
    classic: 'كلاسيك',
    nour: 'نور',
    noor: 'نور',
    gold: 'ذهبية',
    platinum: 'بلاتينية',
    shopping: 'تسوق',
  };

  const mapEn: Record<string, string> = {
    debit: 'Debit',
    credit: 'Credit',
    prepaid: 'Prepaid',
    classic: 'Classic',
    nour: 'Nour',
    noor: 'Noor',
    gold: 'Gold',
    platinum: 'Platinum',
    shopping: 'Shopping',
  };

  if (isAr) {
    return mapAr[normalized] || typeOrTag;
  }
  return mapEn[normalized] || typeOrTag.toUpperCase();
}

function resolveCardImage(url?: string | null): string {
  if (!url) return "/images/cards/debit_desert-compressed.webp";
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  if (url.startsWith("/storage/") || url.startsWith("storage/")) {
    const apiBase = process.env.NEXT_PUBLIC_API_URL?.replace('/api/v1', '') || "http://127.0.0.1:8000";
    return `${apiBase}${url.startsWith('/') ? url : '/' + url}`;
  }
  return url.startsWith('/') ? url : '/' + url;
}

const defaultCards: CardItem[] = [
  {
    id: 1,
    front: "/images/cards/debit_desert-compressed.webp",
    titleKey: "cardsSection.card1.title",
    subtitleKey: "cardsSection.card1.subtitle",
    tag: "CLASSIC",
    color: "#f9d9b6",
    featuresKeys: [
      "cardsSection.card1.feature1",
      "cardsSection.card1.feature2",
      "cardsSection.card1.feature3",
    ],
  },
  {
    id: 2,
    front: "/images/cards/debit-noor.webp",
    titleKey: "cardsSection.card2.title",
    subtitleKey: "cardsSection.card2.subtitle",
    tag: "NOUR",
    color: "#e78979",
    featuresKeys: [
      "cardsSection.card2.feature1",
      "cardsSection.card2.feature2",
      "cardsSection.card2.feature3",
    ],
  },
  {
    id: 3,
    front: "/images/cards/gold-credit.webp",
    titleKey: "cardsSection.card3.title",
    subtitleKey: "cardsSection.card3.subtitle",
    tag: "GOLD",
    color: "#f59e0b",
    featuresKeys: [
      "cardsSection.card3.feature1",
      "cardsSection.card3.feature2",
      "cardsSection.card3.feature3",
    ],
  },
  {
    id: 4,
    front: "/images/cards/shopping-prepaid.webp",
    titleKey: "cardsSection.card4.title",
    subtitleKey: "cardsSection.card4.subtitle",
    tag: "SHOPPING",
    color: "#c0c0c0",
    featuresKeys: [
      "cardsSection.card4.feature1",
      "cardsSection.card4.feature2",
      "cardsSection.card4.feature3",
    ],
  },
]

export function CardsSection() {
  const { mode, locale, t, direction } = useI18n()
  const isAr = locale === "ar"
  const [loading, setLoading] = useState(true)
  const [cardsList, setCardsList] = useState<CardItem[]>(defaultCards)
  const [active, setActive] = useState(0)
  const [prev, setPrev] = useState<number | null>(null)

  useEffect(() => {
    async function loadCards() {
      setLoading(true)
      try {
        const apiCards = await getBankCards(locale)
        if (apiCards && apiCards.length > 0) {
          const mapped: CardItem[] = apiCards.map((c, index) => {
            const fallback = defaultCards[index % defaultCards.length]
            const title = isAr ? c.name_ar : c.name_en || c.name_ar
            const subtitle = (isAr ? c.highlight_ar : c.highlight_en) || ''
            const benefits = (isAr ? c.benefits_ar : c.benefits_en) || []
            const features = benefits.length > 0 ? benefits.slice(0, 3) : []

            return {
              ...fallback,
              id: c.id,
              front: resolveCardImage(c.image_url || c.image_path) || fallback.front,
              tag: c.type ? c.type.toUpperCase() : fallback.tag,
              customTitle: title,
              customSubtitle: subtitle,
              customFeatures: features,
            }
          })
          setCardsList(mapped)
        }
      } catch (e) {
        console.warn('Failed to load home cards from API', e)
      } finally {
        setLoading(false)
      }
    }
    loadCards()
  }, [locale, isAr])

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
    const id = setInterval(() => goTo((active + 1) % cardsList.length), 6000)
    return () => clearInterval(id)
  }, [active, goTo, cardsList.length])

  const card = cardsList[active] || defaultCards[0]

  if (loading) {
    return <BankCardsSliderSkeleton />
  }

  return (
    <section className="relative w-full overflow-hidden bg-[#324198] px-4 py-10" dir={direction}>
      <div className="relative z-10 mx-auto max-w-[1320px]">
        {/* Header matching original exactly */}
        <div className="mb-14 text-center">
          <SectionHeader
            badge={t("cardsSection.badge")}
            badgeClassName="border-white/10 bg-white/8 text-white/80 shadow-[0_8px_30px_rgba(255,255,255,0.05)] tracking-wider"
            title={
              <>
                {t("cardsSection.title1")}{" "}
                <span className="bg-gradient-to-l from-white via-indigo-200 to-purple-300 bg-clip-text text-transparent">
                  {t("cardsSection.titleHighlight")}
                </span>{" "}
                {t("cardsSection.title2")}
              </>
            }
            titleClassName="text-white drop-shadow-sm font-cairo tracking-tight"
            description={t("cardsSection.description")}
            descriptionClassName="text-white/60 font-cairo max-w-xl mx-auto text-base sm:text-lg"
          />
        </div>

        {/* Main Card Showcase */}
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-14">
          {/* Left: Info panel */}
          <div className="w-full lg:w-[45%]">
            <AnimatePresence mode="wait">
              <motion.div
                key={"info-" + active}
                initial={{ opacity: 0, x: direction === 'ltr' ? -24 : 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction === 'ltr' ? 24 : -24 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="space-y-6"
              >
                {/* Pill badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ background: card.color, boxShadow: "0 0 8px " + card.color }}
                  />
                  <span className="font-cairo text-xs font-bold tracking-widest text-white/90 uppercase">
                    {getCardTypeLabel(card.tag, isAr)}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="font-cairo text-2xl font-black text-white sm:text-3xl lg:text-4xl leading-tight">
                    {card.customTitle || t(card.titleKey)}
                  </h3>
                  <p className="mt-2 font-cairo text-base font-normal text-white/70 sm:text-lg">
                    {card.customSubtitle || t(card.subtitleKey)}
                  </p>
                </div>

                {/* Feature bullets */}
                <ul className="space-y-3">
                  {(card.customFeatures && card.customFeatures.length > 0
                    ? card.customFeatures
                    : [t(card.featuresKeys[0]), t(card.featuresKeys[1]), t(card.featuresKeys[2])]
                  ).map((feat, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 + 0.15, duration: 0.35 }}
                      className="flex items-center gap-3 font-cairo text-sm font-medium text-white/85 sm:text-base"
                    >
                      <span
                        className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold text-slate-900"
                        style={{ background: card.color }}
                      >
                        ✓
                      </span>
                      {feat}
                    </motion.li>
                  ))}
                </ul>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    href={mode === "url" ? getLocalizedHref("/customer-service/forms", locale) : "/customer-service/forms"}
                    className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl px-6 py-3 font-cairo text-sm font-bold text-slate-900 shadow-lg transition-all duration-300 hover:scale-[1.03]"
                    style={{
                      background: "linear-gradient(135deg, " + card.color + "cc, " + card.color + "66)",
                      boxShadow: "0 0 24px " + card.color + "44",
                    }}
                  >
                    <span className="relative z-10">{t("cardsSection.requestCard")}</span>
                    <span className={"relative z-10 transition-transform duration-300 " + (direction === 'ltr' ? 'group-hover:translate-x-1' : 'group-hover:-translate-x-1')}>
                      {direction === 'ltr' ? "→" : "←"}
                    </span>
                    <div className="absolute inset-0 translate-x-full bg-white/15 transition-transform duration-500 group-hover:translate-x-0" />
                  </Link>
                  <Link
                    href={mode === "url" ? getLocalizedHref("/cards", locale) : "/cards"}
                    className="font-cairo text-sm font-medium text-white/50 underline underline-offset-4 transition-colors duration-200 hover:text-white/90"
                  >
                    {t("cardsSection.learnMore")}
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
              style={{ background: card.color + "28" }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={"card-" + active}
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
                    background: "linear-gradient(135deg, " + card.color + ", transparent 60%, " + card.color + "88)",
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
                      src={resolveCardImage(card.front)}
                      alt={card.customTitle || t(card.titleKey)}
                      fill
                      unoptimized
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
                    style={{ background: card.color, boxShadow: "0 0 8px " + card.color }}
                  />
                  <span className="font-cairo text-xs font-semibold text-white/90">
                    {card.customSubtitle || t(card.subtitleKey)}
                  </span>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {cardsList.map((c, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={"الانتقال إلى البطاقة " + (i + 1)}
              className="relative h-1.5 overflow-hidden rounded-full transition-all duration-400 cursor-pointer"
              style={{
                width: i === active ? 36 : 8,
                background: i === active ? card.color : "rgba(255,255,255,0.2)",
                boxShadow: i === active ? "0 0 10px " + card.color + "88" : "none",
              }}
            >
              {i === active && (
                <motion.div
                  key={"progress-" + active}
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
