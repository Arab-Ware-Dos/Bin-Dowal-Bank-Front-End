"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useMemo, useCallback } from "react"
import { useI18n } from "@/lib/i18n-context"
import { getLocalizedHref } from "@/lib/localized-routes"
import { SectionHeader } from "@/components/ui/section-header"
import { ViewAllButton } from "@/components/ui/view-all-button"
import { Card, CardContent } from "@/components/ui/card"
import { useNews } from "@/hooks/use-news"
import { NewsCardSkeleton } from "@/components/ui/loading-skeleton"
import {
  Calendar,
  Newspaper,
  MoveRight,
} from "lucide-react"

import { NewsArticle } from "@/types/news-article"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45 },
  },
}

function parseDate(value: string) {
  const parsed = Date.parse(value)
  return Number.isNaN(parsed) ? 0 : parsed
}

function getArticleHref(article: NewsArticle) {
  return `/news/${article.slug ?? article.id}`
}

export function NewsSection() {
  const { t, locale, direction, mode } = useI18n()
  const { news: allNews, loading } = useNews()
  
  const resolveHref = useCallback(
    (target: string) => {
      if (!target.startsWith("/") || target.startsWith("//")) {
        return target
      }
      return mode === "url" ? getLocalizedHref(target, locale) : target
    },
    [mode, locale]
  )

  const displayedNews = useMemo(() => {
    return [...allNews]
      .sort((a, b) => parseDate(b.date) - parseDate(a.date))
      .slice(0, 3)
  }, [allNews])

  const dateFormatter = useMemo(() => {
    return new Intl.DateTimeFormat(locale === "ar" ? "ar-YE" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }, [locale])

  const formatDate = (dateString: string) => {
    const parsed = Date.parse(dateString)

    if (Number.isNaN(parsed)) return dateString

    return dateFormatter.format(new Date(parsed))
  }

  return (
    <section className="relative overflow-hidden py-10 md:py-10">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.08),_transparent_35%),linear-gradient(to_bottom,_rgba(255,255,255,0.98),_rgba(248,250,252,1))]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />

      <div className="container mx-auto px-4">
        <SectionHeader
          badge={locale === "ar" ? "المركز الإعلامي" : "Media Center"}
          title={t("news.title")}
          description={
            locale === "ar"
              ? "آخر أخبارنا، فعالياتنا، وإعلاناتنا الرسمية للبقاء على اطلاع دائم بكل جديد."
              : "Our latest news, events, and official announcements to stay up to date with everything new."
          }
        />

        {loading ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            <NewsCardSkeleton />
            <NewsCardSkeleton />
            <NewsCardSkeleton />
          </div>
        ) : (
          <motion.div
            key={`news-grid-${displayedNews.length}`}
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {displayedNews.map((news) => {
              const title = locale === "ar" ? news.titleAr : news.titleEn
              const excerpt = locale === "ar" ? news.excerptAr : news.excerptEn

              return (
                <motion.article key={news.id} variants={item} className="h-full">
                  <Link
                    href={resolveHref(getArticleHref(news))}
                    className="group block h-full rounded-[28px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-4"
                    aria-label={title}
                  >
                    <Card className="relative h-full overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/90 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-primary/25 group-hover:shadow-[0_18px_50px_rgba(15,23,42,0.10)]">
                      <div className="relative h-52 overflow-hidden">
                        {news.image ? (
                          <>
                            <img
                              src={news.image}
                              alt={title}
                              loading="lazy"
                              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                          </>
                        ) : (
                          <>
                            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,23,42,1),rgba(29,78,216,0.92),rgba(15,23,42,0.96))]" />
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_35%)]" />
                            <div className="absolute inset-x-0 top-0 h-px bg-white/20" />
                            <div className="absolute inset-0 opacity-40">
                              <div className="absolute left-6 top-6 h-24 w-24 rounded-full border border-white/10" />
                              <div className="absolute right-8 top-10 h-16 w-16 rounded-full border border-white/10" />
                              <div className="absolute bottom-6 left-1/2 h-px w-32 -translate-x-1/2 bg-white/10" />
                            </div>

                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-white shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur-md transition-transform duration-300 group-hover:scale-105">
                                <Newspaper className="h-7 w-7" />
                              </div>
                            </div>
                          </>
                        )}

                        <div className="absolute inset-x-6 bottom-5 flex items-center justify-between">
                          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] font-medium text-white/90 backdrop-blur-md">
                            <Calendar className="h-3.5 w-3.5" />
                            {formatDate(news.date)}
                          </div>

                          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white/85 backdrop-blur-md transition-all duration-300 group-hover:bg-white/15 group-hover:text-white">
                            <MoveRight
                              className={`h-4 w-4 transition-transform duration-300 ${
                                direction === "rtl"
                                  ? "group-hover:-translate-x-0.5"
                                  : "group-hover:translate-x-0.5"
                              }`}
                            />
                          </div>
                        </div>
                      </div>

                      <CardContent className="p-6">
                        <h3 className="mb-3 line-clamp-2 text-lg font-semibold leading-8 text-slate-900 transition-colors duration-300 group-hover:text-primary md:text-[1.15rem]">
                          {title}
                        </h3>

                        <p className="line-clamp-3 text-sm leading-7 text-slate-600">
                          {excerpt}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.article>
              )
            })}
          </motion.div>
        )}

        <ViewAllButton
          label={t("news.viewAll")}
          href={resolveHref("/news")}
        />
      </div>
    </section>
  )
}