"use client"

import { useMemo, useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { useI18n } from "@/lib/i18n-context"
import { getLocalizedHref } from "@/lib/localized-routes"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowLeft, ArrowRight, Newspaper } from "lucide-react"
import { NewsArticle } from "@/types/news-article"
import { MEDIA_CATEGORIES, MediaCategoryFilter } from "@/data/media-categories"

const INITIAL_VISIBLE_COUNT = 9

const fadeInUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.45 },
}

function parseDate(value: string) {
  const parsed = Date.parse(value)
  return Number.isNaN(parsed) ? 0 : parsed
}

function formatDate(value: string, locale: string) {
  if (!value) return "";
  const parts = value.split("T")[0].split("-");
  if (parts.length === 3) {
    const [year, month, day] = parts.map(Number);
    const date = new Date(year, month - 1, day, 12, 0, 0);
    return new Intl.DateTimeFormat(locale === "ar" ? "ar-YE" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  }
  return value;
}

export function MediaCenterGrid({ items }: { items: NewsArticle[] }) {
  const { locale, mode } = useI18n()
  const isArabic = locale === "ar"
  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight

  const [activeCategory, setActiveCategory] = useState<MediaCategoryFilter>("all")
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT)

  const resolveHref = (target: string) => {
    if (!target.startsWith("/") || target.startsWith("//")) return target
    return mode === "url" ? getLocalizedHref(target, locale) : target
  }

  const sortedNews = useMemo(() => {
    return [...items].sort((a, b) => parseDate(b.date) - parseDate(a.date))
  }, [items])

  const filteredNews = useMemo(() => {
    return sortedNews.filter((article) => {
      if (activeCategory === "all") return true
      return article.category === activeCategory
    })
  }, [sortedNews, activeCategory])

  const visibleArticles = filteredNews.slice(0, visibleCount)
  const hasMoreToLoad = visibleCount < filteredNews.length

  useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE_COUNT)
  }, [activeCategory])

  const categoriesList = Object.entries(MEDIA_CATEGORIES).map(([key, label]) => ({
    value: key as MediaCategoryFilter,
    label: isArabic ? label.ar : label.en
  }))

  return (
    <>
      <div className="mb-8 flex flex-col gap-4">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label={isArabic ? "تصنيفات المركز الإعلامي" : "Media Center Categories"}>
          {categoriesList.map((cat) => {
            const isActive = activeCategory === cat.value;
            return (
              <Button
                key={cat.value}
                type="button"
                role="tab"
                aria-selected={isActive}
                variant={isActive ? "default" : "outline"}
                onClick={() => setActiveCategory(cat.value)}
                className={`rounded-full cursor-pointer px-6 py-2 transition-all ${
                  isActive
                    ? "bg-[#262b80] text-white hover:bg-[#cc272e]"
                    : "hover:bg-[#cc272e]"
                }`}
              >
                {cat.label}
              </Button>
            );
          })}
        </div>

        <div className="text-sm text-muted-foreground">
          {isArabic ? `إجمالي المواد: ${filteredNews.length}` : `Total items: ${filteredNews.length}`}
        </div>
      </div>

      {visibleArticles.length > 0 ? (
        <>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleArticles.map((article) => {
              const categoryLabel = MEDIA_CATEGORIES[article.category];
              return (
                <motion.div key={article.id} {...fadeInUp}>
                  <Card className="group h-full flex flex-col overflow-hidden border bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg rounded-2xl">
                    <Link
                      href={resolveHref(`/news/${article.slug ?? article.id}`)}
                      className="flex h-full flex-col outline-none focus-visible:ring-2 focus-visible:ring-[#262b80]"
                      aria-label={isArabic ? article.titleAr : article.titleEn}
                    >
                      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#0b0d36]/10 via-[#262b80]/10 to-[#0b0d36]/10">
                        {article.image ? (
                          <img
                            src={article.image}
                            alt={isArabic ? (article.imageAltAr || article.titleAr) : (article.imageAltEn || article.titleEn)}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center">
                            <Newspaper className="h-14 w-14 text-[#262b80]/30" />
                          </div>
                        )}
                      </div>

                      <CardContent className="flex h-full flex-col p-6">
                        <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                          <span className="inline-flex rounded-md bg-[#262b80]/10 px-2.5 py-1 font-medium text-[#262b80]">
                            {isArabic ? categoryLabel.ar : categoryLabel.en}
                          </span>
                          <div className="flex items-center gap-1.5">
                            <Calendar className="h-3.5 w-3.5" />
                            <span>{formatDate(article.date, locale)}</span>
                          </div>
                        </div>

                        <h3 className="mb-3 line-clamp-2 text-lg font-bold leading-tight text-foreground transition-colors group-hover:text-[#262b80]">
                          {isArabic ? article.titleAr : article.titleEn}
                        </h3>

                        <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-muted-foreground flex-grow">
                          {isArabic ? article.excerptAr : article.excerptEn}
                        </p>

                        <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-[#262b80] group-hover:gap-2 transition-all">
                          {isArabic ? "قراءة التفاصيل" : "Read Details"}
                          <ArrowIcon className="h-4 w-4" />
                        </span>
                      </CardContent>
                    </Link>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {hasMoreToLoad && (
            <div className="mt-10 flex justify-center">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 hover:bg-muted"
                onClick={() => setVisibleCount((prev) => prev + INITIAL_VISIBLE_COUNT)}
              >
                {isArabic ? "عرض المزيد" : "Load More"}
              </Button>
            </div>
          )}
        </>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed bg-muted/30 py-20 text-center">
          <div className="mb-4 rounded-full bg-muted p-4">
            <Newspaper className="h-10 w-10 text-muted-foreground/50" />
          </div>
          <h3 className="text-xl font-semibold text-foreground">
            {isArabic ? "لا توجد مواد متوفرة" : "No items available"}
          </h3>
          <p className="mt-2 max-w-sm text-muted-foreground">
            {isArabic
              ? "لم يتم العثور على أية مواد ضمن هذا التصنيف في الوقت الحالي."
              : "No items were found in this category at the moment."}
          </p>
        </div>
      )}
    </>
  )
}
