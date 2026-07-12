"use client"

import { useEffect, useMemo, useState, type FormEvent } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { useI18n } from "@/lib/i18n-context"
import { PageHero } from "@/components/ui/page-hero"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { newsItems } from "@/data/news"
import {
  Calendar,
  ArrowLeft,
  ArrowRight,
  Search,
  Newspaper,
} from "lucide-react"

type NewsArticle = {
  id: string | number
  slug?: string
  titleAr: string
  titleEn: string
  excerptAr: string
  excerptEn: string
  date: string
  image?: string
  categoryAr?: string
  categoryEn?: string
  categorySlug?: string
  isFeatured?: boolean
}

const INITIAL_VISIBLE_COUNT = 6

const fadeInUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.45 },
}

function normalizeText(value: string) {
  return value
    .toLowerCase()
    .normalize("NFKC")
    .replace(/[\u064B-\u065F\u0670]/g, "")
    .replace(/[أإآ]/g, "ا")
    .replace(/ؤ/g, "و")
    .replace(/ئ/g, "ي")
    .replace(/ة/g, "ه")
    .replace(/ى/g, "ي")
    .trim()
}

function parseDate(value: string) {
  const parsed = Date.parse(value)
  return Number.isNaN(parsed) ? 0 : parsed
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function formatArticleDate(value: string, locale: "ar" | "en") {
  const parsed = Date.parse(value)

  if (Number.isNaN(parsed)) return value

  return new Intl.DateTimeFormat(locale === "ar" ? "ar-YE" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(parsed))
}

function getArticleHref(article: NewsArticle) {
  return `/news/${article.slug ?? article.id}`
}

export default function NewsPage() {
  const { locale } = useI18n()
  const isArabic = locale === "ar"
  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight

  const allNews = useMemo(() => newsItems as NewsArticle[], [])

  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT)
  const [newsletterEmail, setNewsletterEmail] = useState("")
  const [newsletterMessage, setNewsletterMessage] = useState("")

  const categories = useMemo(() => {
    const map = new Map<string, { value: string; label: string }>()

    allNews.forEach((article) => {
      const label = isArabic ? article.categoryAr : article.categoryEn
      const fallbackValue = normalizeText(
        article.categorySlug || article.categoryEn || article.categoryAr || ""
      )

      if (!label || !fallbackValue) return
      if (!map.has(fallbackValue)) {
        map.set(fallbackValue, { value: fallbackValue, label })
      }
    })

    return Array.from(map.values())
  }, [allNews, isArabic])

  const sortedNews = useMemo(() => {
    return [...allNews].sort((a, b) => parseDate(b.date) - parseDate(a.date))
  }, [allNews])

  const filteredNews = useMemo(() => {
    const normalizedQuery = normalizeText(searchQuery)

    return sortedNews.filter((article) => {
      const matchesCategory =
        activeCategory === "all" ||
        normalizeText(
          article.categorySlug || article.categoryEn || article.categoryAr || ""
        ) === activeCategory

      if (!matchesCategory) return false

      if (!normalizedQuery) return true

      const searchableText = normalizeText(
        [
          article.titleAr,
          article.titleEn,
          article.excerptAr,
          article.excerptEn,
          article.categoryAr,
          article.categoryEn,
        ]
          .filter(Boolean)
          .join(" ")
      )

      return searchableText.includes(normalizedQuery)
    })
  }, [sortedNews, searchQuery, activeCategory])

  const hasActiveFilters =
    searchQuery.trim().length > 0 || activeCategory !== "all"

  const featuredArticle = useMemo(() => {
    if (hasActiveFilters) return null
    return (
      filteredNews.find((article) => article.isFeatured) ??
      filteredNews[0] ??
      null
    )
  }, [filteredNews, hasActiveFilters])

  const gridSource = useMemo(() => {
    if (!featuredArticle) return filteredNews
    return filteredNews.filter((article) => article.id !== featuredArticle.id)
  }, [filteredNews, featuredArticle])

  const visibleArticles = gridSource.slice(0, visibleCount)
  const hasMoreToLoad = visibleCount < gridSource.length

  useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE_COUNT)
  }, [searchQuery, activeCategory])

  function handleNewsletterSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const email = newsletterEmail.trim()

    if (!isValidEmail(email)) {
      setNewsletterMessage(
        isArabic
          ? "يرجى إدخال بريد إلكتروني صحيح."
          : "Please enter a valid email address."
      )
      return
    }

    setNewsletterMessage(
      isArabic
        ? "تم التحقق من البريد. اربط هذا النموذج مع API الاشتراك لتنفيذ الحفظ والإرسال الفعلي."
        : "Email validated. Connect this form to your newsletter API to complete the real submission flow."
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <PageHero
        title={isArabic ? "الأخبار والمستجدات" : "News & Updates"}
        subtitle={
          isArabic
            ? "آخر أخبار البنك وإعلاناته ومبادراته المؤسسية في صفحة موحدة واضحة وسهلة التصفح."
            : "A structured newsroom for the bank’s latest announcements, updates, and institutional news."
        }
        breadcrumbs={[
          { labelKey: isArabic ? "الرئيسية" : "Home", href: "/" },
          { labelKey: isArabic ? "الأخبار" : "News" },
        ]}
      />

      <section className="border-b bg-muted/20 py-8">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
              <div className="space-y-4">
                <div className="relative">
                  <Search className="absolute start-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    aria-label={
                      isArabic ? "البحث في الأخبار" : "Search in news"
                    }
                    placeholder={
                      isArabic
                        ? "ابحث بعنوان الخبر أو مضمونه..."
                        : "Search by headline or content..."
                    }
                    className="bg-background ps-10"
                  />
                </div>

                {categories.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    <Button
                      type="button"
                      variant={activeCategory === "all" ? "default" : "outline"}
                      onClick={() => setActiveCategory("all")}
                      className={
                        activeCategory === "all"
                          ? "bg-[#262b80] text-white hover:bg-[#0b0d36]"
                          : ""
                      }
                    >
                      {isArabic ? "الكل" : "All"}
                    </Button>

                    {categories.map((category) => (
                      <Button
                        key={category.value}
                        type="button"
                        variant={
                          activeCategory === category.value
                            ? "default"
                            : "outline"
                        }
                        onClick={() => setActiveCategory(category.value)}
                        className={
                          activeCategory === category.value
                            ? "bg-[#262b80] text-white hover:bg-[#0b0d36]"
                            : ""
                        }
                      >
                        {category.label}
                      </Button>
                    ))}
                  </div>
                )}
              </div>

              <div className="rounded-2xl border bg-background px-4 py-3 text-sm text-muted-foreground shadow-sm">
                {isArabic
                  ? `عدد النتائج: ${filteredNews.length}`
                  : `Results: ${filteredNews.length}`}
              </div>
            </div>

            {hasActiveFilters && (
              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <span>
                  {isArabic
                    ? "يتم الآن عرض النتائج المفلترة."
                    : "Filtered results are currently displayed."}
                </span>
                <Button
                  type="button"
                  variant="link"
                  className="h-auto p-0 text-[#262b80]"
                  onClick={() => {
                    setSearchQuery("")
                    setActiveCategory("all")
                  }}
                >
                  {isArabic ? "إعادة تعيين" : "Reset"}
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {featuredArticle && (
        <section className="bg-background py-12">
          <div className="container mx-auto px-4">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="mb-2 text-sm font-medium tracking-[0.18em] text-[#262b80] uppercase">
                  {isArabic ? "خبر رئيسي" : "Featured Story"}
                </p>
                <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                  {isArabic ? "أبرز المستجدات" : "Top Institutional Update"}
                </h2>
              </div>
            </div>

            <motion.div {...fadeInUp}>
              <Card className="overflow-hidden border-0 shadow-xl">
                <div className="grid md:grid-cols-2">
                  <Link
                    href={getArticleHref(featuredArticle)}
                    className="group relative block min-h-[280px] overflow-hidden bg-gradient-to-br from-[#0b0d36] via-[#262b80] to-[#0b0d36]"
                  >
                    {featuredArticle.image ? (
                      <img
                        src={featuredArticle.image}
                        alt={
                          isArabic
                            ? featuredArticle.titleAr
                            : featuredArticle.titleEn
                        }
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <>
                        <div
                          className="absolute inset-0 opacity-[0.06]"
                          style={{
                            backgroundImage: "url('/images/new-pattern.png')",
                            backgroundSize: "cover",
                          }}
                        />
                        <div className="flex h-full items-center justify-center">
                          <Newspaper className="h-24 w-24 text-white/35" />
                        </div>
                      </>
                    )}
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/35 to-transparent" />
                  </Link>

                  <CardContent className="flex flex-col justify-center p-8 md:p-10">
                    <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                      <span className="inline-flex rounded-full bg-[#262b80]/10 px-3 py-1 font-semibold text-[#262b80]">
                        {featuredArticle.isFeatured
                          ? isArabic
                            ? "مختار تحريريًا"
                            : "Editorial Pick"
                          : isArabic
                            ? "الأحدث"
                            : "Latest"}
                      </span>

                      {(featuredArticle.categoryAr ||
                        featuredArticle.categoryEn) && (
                        <span className="inline-flex rounded-full bg-muted px-3 py-1">
                          {isArabic
                            ? featuredArticle.categoryAr
                            : featuredArticle.categoryEn}
                        </span>
                      )}
                    </div>

                    <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {formatArticleDate(featuredArticle.date, locale)}
                      </span>
                    </div>

                    <h3 className="mb-4 text-2xl font-bold leading-snug text-foreground md:text-3xl">
                      {isArabic
                        ? featuredArticle.titleAr
                        : featuredArticle.titleEn}
                    </h3>

                    <p className="mb-6 text-base leading-7 text-muted-foreground">
                      {isArabic
                        ? featuredArticle.excerptAr
                        : featuredArticle.excerptEn}
                    </p>

                    <Button
                      asChild
                      className="w-fit gap-2 bg-[#262b80] text-white hover:bg-[#0b0d36]"
                    >
                      <Link href={getArticleHref(featuredArticle)}>
                        {isArabic ? "قراءة الخبر الكامل" : "Read Full Story"}
                        <ArrowIcon className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

      <section className="bg-muted/25 py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-2 text-sm font-medium tracking-[0.18em] text-[#262b80] uppercase">
                {isArabic ? "مركز الأخبار" : "Newsroom"}
              </p>
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                {isArabic ? "آخر الأخبار" : "Latest Articles"}
              </h2>
            </div>

            <p className="text-sm text-muted-foreground">
              {isArabic
                ? "محتوى مرتب زمنيًا لتسهيل الوصول إلى الإعلانات والتحديثات."
                : "Chronologically organized updates for easier access to announcements and news."}
            </p>
          </div>

          {visibleArticles.length > 0 ? (
            <>
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {visibleArticles.map((article) => (
                  <motion.div key={article.id} {...fadeInUp}>
                    <Card className="group h-full overflow-hidden border bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                      <Link
                        href={getArticleHref(article)}
                        className="flex h-full flex-col"
                      >
                        <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#0b0d36]/10 via-[#262b80]/10 to-[#0b0d36]/10">
                          {article.image ? (
                            <img
                              src={article.image}
                              alt={isArabic ? article.titleAr : article.titleEn}
                              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                            />
                          ) : (
                            <>
                              <div
                                className="absolute inset-0 opacity-[0.03]"
                                style={{
                                  backgroundImage:
                                    "url('/images/new-pattern.png')",
                                  backgroundSize: "cover",
                                }}
                              />
                              <div className="flex h-full items-center justify-center">
                                <Newspaper className="h-14 w-14 text-[#262b80]/30" />
                              </div>
                            </>
                          )}
                        </div>

                        <CardContent className="flex h-full flex-col p-6">
                          <div className="mb-3 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              <span>{formatArticleDate(article.date, locale)}</span>
                            </div>

                            {(article.categoryAr || article.categoryEn) && (
                              <span className="rounded-full bg-muted px-2.5 py-1 text-xs">
                                {isArabic
                                  ? article.categoryAr
                                  : article.categoryEn}
                              </span>
                            )}
                          </div>

                          <h3 className="mb-3 line-clamp-2 text-lg font-bold leading-7 text-foreground transition-colors group-hover:text-[#262b80]">
                            {isArabic ? article.titleAr : article.titleEn}
                          </h3>

                          <p className="mb-5 line-clamp-3 text-sm leading-6 text-muted-foreground">
                            {isArabic ? article.excerptAr : article.excerptEn}
                          </p>

                          <span className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-[#262b80] group-hover:text-[#0b0d36]">
                            {isArabic ? "عرض التفاصيل" : "View Details"}
                            <ArrowIcon className="h-4 w-4" />
                          </span>
                        </CardContent>
                      </Link>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {hasMoreToLoad && (
                <div className="mt-10 text-center">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() =>
                      setVisibleCount((prev) => prev + INITIAL_VISIBLE_COUNT)
                    }
                  >
                    {isArabic ? "عرض المزيد" : "Load More"}
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="rounded-3xl border bg-background py-16 text-center shadow-sm">
              <Newspaper className="mx-auto mb-4 h-16 w-16 text-muted-foreground/30" />
              <h3 className="text-xl font-semibold text-foreground">
                {isArabic ? "لا توجد نتائج مطابقة" : "No matching results"}
              </h3>
              <p className="mt-2 text-muted-foreground">
                {isArabic
                  ? "جرّب تعديل كلمات البحث أو اختيار تصنيف آخر."
                  : "Try changing your keywords or choosing another category."}
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#0b0d36] via-[#262b80] to-[#0b0d36] py-16 text-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-medium tracking-[0.18em] uppercase text-white/80">
              {isArabic ? "تحديثات دورية" : "Stay Informed"}
            </p>

            <h2 className="mb-4 text-3xl font-bold">
              {isArabic
                ? "اشترك لتصلك الأخبار والإعلانات المهمة"
                : "Subscribe for important news and announcements"}
            </h2>

            <p className="mb-8 text-lg text-white/85">
              {isArabic
                ? "نموذج جاهز للربط مع خدمة النشرة البريدية أو واجهة API داخلية."
                : "A form prepared for integration with your newsletter service or internal API."}
            </p>

            <form
              onSubmit={handleNewsletterSubmit}
              className="mx-auto flex max-w-xl flex-col gap-4 sm:flex-row"
            >
              <Input
                type="email"
                value={newsletterEmail}
                onChange={(e) => {
                  setNewsletterEmail(e.target.value)
                  if (newsletterMessage) setNewsletterMessage("")
                }}
                placeholder={
                  isArabic ? "أدخل بريدك الإلكتروني" : "Enter your email"
                }
                className="border-white/15 bg-white/10 text-white placeholder:text-white/60"
              />
              <Button
                type="submit"
                className="shrink-0 bg-white text-[#0b0d36] hover:bg-slate-100"
              >
                {isArabic ? "اشتراك" : "Subscribe"}
              </Button>
            </form>

            {newsletterMessage && (
              <p className="mt-4 text-sm text-white/85">{newsletterMessage}</p>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  )
}