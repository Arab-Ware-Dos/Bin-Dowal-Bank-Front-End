"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { useI18n } from "@/lib/i18n-context"
import { PageHero } from "@/components/ui/page-hero"
import { Button } from "@/components/ui/button"
import {
  Calendar,
  ArrowLeft,
  ArrowRight,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Link as LinkIcon,
  Check,
} from "lucide-react"

type SupportedLocale = "ar" | "en"

type ArticleBlock =
  | {
      type: "paragraph"
      text: string
    }
  | {
      type: "heading"
      text: string
      level?: 2 | 3 | 4
    }
  | {
      type: "quote"
      text: string
    }
  | {
      type: "list"
      items: string[]
    }

type ArticleContent = string | (string | ArticleBlock)[]

export interface NewsArticle {
  slug?: string
  titleAr: string
  titleEn: string
  excerptAr?: string | null
  excerptEn?: string | null
  contentAr?: ArticleContent | null
  contentEn?: ArticleContent | null
  categoryAr?: string | null
  categoryEn?: string | null
  image?: string | null
  imageAltAr?: string | null
  imageAltEn?: string | null
  date?: string | null
  publishedAt?: string | null
  url?: string | null
}

interface NewsArticleClientProps {
  article: NewsArticle | null
}

const DATE_ONLY_PATTERN = /^\d{4}-\d{2}-\d{2}$/

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
}

const softScale = {
  hidden: { opacity: 0, scale: 0.985, y: 12 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
}

const staggerWrap = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
}

function formatArticleDate(value: string | null | undefined, locale: SupportedLocale) {
  if (!value?.trim()) return ""

  const rawValue = value.trim()
  const isDateOnly = DATE_ONLY_PATTERN.test(rawValue)
  const date = new Date(isDateOnly ? `${rawValue}T00:00:00Z` : rawValue)

  if (Number.isNaN(date.getTime())) return rawValue

  return new Intl.DateTimeFormat(locale === "ar" ? "ar-YE" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    ...(isDateOnly ? { timeZone: "UTC" } : {}),
  }).format(date)
}

function pickLocalizedText(
  locale: SupportedLocale,
  ar?: string | null,
  en?: string | null,
  fallback = ""
) {
  const preferred = locale === "ar" ? ar : en
  const secondary = locale === "ar" ? en : ar
  return preferred?.trim() || secondary?.trim() || fallback
}

function normalizeContent(content: ArticleContent | null | undefined): ArticleBlock[] {
  if (!content) return []

  if (typeof content === "string") {
    return content
      .split(/\n\s*\n/g)
      .map((part) => part.trim())
      .filter(Boolean)
      .map((text) => ({ type: "paragraph" as const, text }))
  }

  if (!Array.isArray(content)) return []

  return content.flatMap((item): ArticleBlock[] => {
    if (typeof item === "string") {
      const parts = item
        .split(/\n\s*\n/g)
        .map((part) => part.trim())
        .filter(Boolean)

      return parts.map((text) => ({ type: "paragraph" as const, text }))
    }

    if (!item || typeof item !== "object" || !("type" in item)) return []

    if (item.type === "list") {
      const items = Array.isArray(item.items)
        ? item.items.map((entry) => entry.trim()).filter(Boolean)
        : []

      return items.length ? [{ type: "list" as const, items }] : []
    }

    if ("text" in item && typeof item.text === "string" && item.text.trim()) {
      const text = item.text.trim()

      if (item.type === "heading") {
        return [
          {
            type: "heading" as const,
            text,
            level: item.level && [2, 3, 4].includes(item.level) ? item.level : 2,
          },
        ]
      }

      if (item.type === "quote") {
        return [{ type: "quote" as const, text }]
      }

      if (item.type === "paragraph") {
        return [{ type: "paragraph" as const, text }]
      }
    }

    return []
  })
}

function resolveAbsoluteUrl(url: string, origin: string) {
  try {
    return new URL(url, origin).toString()
  } catch {
    return ""
  }
}

async function copyTextToClipboard(text: string) {
  if (!text) return false

  if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text)
      return true
    } catch {
      // fallback below
    }
  }

  if (typeof document === "undefined") return false

  const textarea = document.createElement("textarea")
  textarea.value = text
  textarea.setAttribute("readonly", "")
  textarea.style.position = "absolute"
  textarea.style.left = "-9999px"
  document.body.appendChild(textarea)
  textarea.select()

  let success = false

  try {
    success = document.execCommand("copy")
  } catch {
    success = false
  } finally {
    document.body.removeChild(textarea)
  }

  return success
}

function buildShareLinks(title: string, url: string) {
  const encodedTitle = encodeURIComponent(title)
  const encodedUrl = encodeURIComponent(url)

  return {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
  }
}

export default function NewsArticleClient({ article }: NewsArticleClientProps) {
  const { locale } = useI18n()
  const prefersReducedMotion = useReducedMotion()

  const revealProps = prefersReducedMotion
    ? {}
    : {
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: { once: true, amount: 0.2 },
      }

  const currentLocale: SupportedLocale = locale === "en" ? "en" : "ar"
  const isArabic = currentLocale === "ar"
  const ArrowIcon = isArabic ? ArrowRight : ArrowLeft

  const [shareUrl, setShareUrl] = useState("")
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return

    const fallbackUrl = article?.slug
      ? resolveAbsoluteUrl(`/news/${article.slug}`, window.location.origin)
      : window.location.href

    const resolvedUrl = article?.url?.trim()
      ? resolveAbsoluteUrl(article.url.trim(), window.location.origin)
      : fallbackUrl

    setShareUrl(resolvedUrl || fallbackUrl)
  }, [article?.slug, article?.url])

  useEffect(() => {
    if (!copied) return

    const timeout = window.setTimeout(() => setCopied(false), 2000)
    return () => window.clearTimeout(timeout)
  }, [copied])

  const title = pickLocalizedText(
    currentLocale,
    article?.titleAr,
    article?.titleEn,
    isArabic ? "عنوان الخبر غير متوفر" : "Article title is unavailable"
  )

  const excerpt = pickLocalizedText(currentLocale, article?.excerptAr, article?.excerptEn)
  const category = pickLocalizedText(currentLocale, article?.categoryAr, article?.categoryEn)

  const imageAlt = pickLocalizedText(
    currentLocale,
    article?.imageAltAr,
    article?.imageAltEn,
    title
  )

  const publishedDate = formatArticleDate(article?.publishedAt || article?.date, currentLocale)
  const articleDateTime = article?.publishedAt || article?.date || undefined

  const content = useMemo(() => {
    const preferred = currentLocale === "ar" ? article?.contentAr : article?.contentEn
    const secondary = currentLocale === "ar" ? article?.contentEn : article?.contentAr
    return normalizeContent(preferred ?? secondary ?? null)
  }, [article?.contentAr, article?.contentEn, currentLocale])

  const shareLinks = useMemo(() => {
    if (!shareUrl) {
      return {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      }
    }

    return buildShareLinks(title, shareUrl)
  }, [shareUrl, title])

  const openPopupShare = useCallback((url: string) => {
    if (!url || url === "#" || typeof window === "undefined") return
    window.open(url, "_blank", "noopener,noreferrer,width=640,height=720")
  }, [])

  const handleCopyLink = useCallback(async () => {
    if (!shareUrl) return
    const success = await copyTextToClipboard(shareUrl)
    setCopied(success)
  }, [shareUrl])

  const handleNativeShare = useCallback(async () => {
    if (!shareUrl || typeof navigator === "undefined") return

    try {
      if (navigator.share) {
        await navigator.share({
          title,
          text: excerpt || title,
          url: shareUrl,
        })
        return
      }

      await handleCopyLink()
    } catch {
      // تجاهل الإلغاء أو الفشل
    }
  }, [excerpt, handleCopyLink, shareUrl, title])

  const shareButtons = [
    {
      key: "facebook",
      icon: Facebook,
      label: isArabic ? "فيسبوك" : "Facebook",
      ariaLabel: isArabic ? "مشاركة على فيسبوك" : "Share on Facebook",
      onClick: () => openPopupShare(shareLinks.facebook),
    },
    {
      key: "twitter",
      icon: Twitter,
      label: isArabic ? "إكس" : "X",
      ariaLabel: isArabic ? "مشاركة على إكس" : "Share on X",
      onClick: () => openPopupShare(shareLinks.twitter),
    },
    {
      key: "linkedin",
      icon: Linkedin,
      label: isArabic ? "لينكدإن" : "LinkedIn",
      ariaLabel: isArabic ? "مشاركة على لينكدإن" : "Share on LinkedIn",
      onClick: () => openPopupShare(shareLinks.linkedin),
    },
    {
      key: "copy",
      icon: copied ? Check : LinkIcon,
      label: copied
        ? isArabic
          ? "تم النسخ"
          : "Copied"
        : isArabic
          ? "نسخ الرابط"
          : "Copy link",
      ariaLabel: isArabic ? "نسخ رابط الخبر" : "Copy article link",
      onClick: handleCopyLink,
    },
    {
      key: "native",
      icon: Share2,
      label: isArabic ? "مشاركة" : "Share",
      ariaLabel: isArabic ? "مشاركة باستخدام الجهاز" : "Share with device",
      onClick: handleNativeShare,
    },
  ]

  const renderContent = () => {
    if (!content.length) {
      return (
        <p className="text-base leading-8 text-muted-foreground md:text-lg">
          {isArabic
            ? "لا يوجد محتوى متاح لهذا الخبر حاليًا."
            : "No content is currently available for this article."}
        </p>
      )
    }

    return content.map((block, index) => {
      if (block.type === "paragraph") {
        return (
          <p
            key={`paragraph-${index}`}
            className="text-base leading-8 text-muted-foreground md:text-[1.08rem]"
          >
            {block.text}
          </p>
        )
      }

      if (block.type === "quote") {
        return (
          <blockquote
            key={`quote-${index}`}
            className="relative overflow-hidden rounded-[28px] border border-primary/15 bg-primary/[0.05] px-6 py-6 text-base leading-8 text-foreground md:px-8 md:text-lg"
          >
            <div className="absolute inset-y-0 start-0 w-1.5 bg-gradient-to-b from-primary/80 via-primary/40 to-transparent" />
            <div className="pointer-events-none absolute -top-10 end-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
            <p className="relative">{block.text}</p>
          </blockquote>
        )
      }

      if (block.type === "list") {
        return (
          <ul
            key={`list-${index}`}
            className="list-disc space-y-3 ps-6 text-base leading-8 text-muted-foreground marker:text-primary md:text-[1.06rem]"
          >
            {block.items.map((item, itemIndex) => (
              <li key={`list-item-${index}-${itemIndex}`}>{item}</li>
            ))}
          </ul>
        )
      }

      if (block.type === "heading") {
        const level = block.level ?? 2

        if (level === 3) {
          return (
            <h3
              key={`heading-${index}`}
              className="pt-2 text-2xl font-bold leading-tight tracking-tight text-foreground md:text-[1.75rem]"
            >
              {block.text}
            </h3>
          )
        }

        if (level === 4) {
          return (
            <h4
              key={`heading-${index}`}
              className="pt-2 text-xl font-semibold leading-tight text-foreground md:text-2xl"
            >
              {block.text}
            </h4>
          )
        }

        return (
          <h2
            key={`heading-${index}`}
            className="pt-4 text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl"
          >
            {block.text}
          </h2>
        )
      }

      return null
    })
  }

  if (!article) {
    return (
      <div className="relative min-h-screen overflow-hidden bg-background">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[380px] bg-gradient-to-b from-primary/10 via-primary/[0.05] to-transparent" />
        <div className="pointer-events-none absolute -top-24 end-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute top-56 start-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />

        <PageHero
          title={isArabic ? "الخبر غير موجود" : "Article Not Found"}
          subtitle=""
          breadcrumbs={[
            { labelKey: isArabic ? "الرئيسية" : "Home", href: "/" },
            { labelKey: isArabic ? "الأخبار" : "News", href: "/news" },
            { labelKey: isArabic ? "الخبر غير موجود" : "Article Not Found" },
          ]}
        />

        <section className="relative py-16 md:py-20">
          <div className="container mx-auto px-4">
            <motion.div
              variants={softScale}
              {...revealProps}
              className="mx-auto max-w-3xl overflow-hidden rounded-[32px] border border-border/60 bg-background/95 p-8 text-center shadow-[0_24px_90px_rgba(15,23,42,0.10)] backdrop-blur-sm md:p-12"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-primary/15 bg-primary/10 text-primary">
                <Calendar className="h-6 w-6" />
              </div>

              <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                {isArabic
                  ? "تعذر العثور على الخبر المطلوب"
                  : "The requested article could not be found"}
              </h2>

              <p className="mx-auto mb-8 max-w-xl text-base leading-8 text-muted-foreground md:text-lg">
                {isArabic
                  ? "قد يكون الرابط غير صحيح، أو تم حذف الخبر، أو لم يعد متاحًا ضمن صفحة الأخبار."
                  : "The link may be invalid, the article may have been removed, or it is no longer available in the news section."}
              </p>

              <Button asChild size="lg" className="rounded-full px-6">
                <Link href="/news" className="inline-flex items-center gap-2">
                  <ArrowIcon className="h-4 w-4" />
                  {isArabic ? "العودة إلى الأخبار" : "Back to News"}
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[480px] bg-gradient-to-b from-primary/10 via-primary/[0.05] to-transparent" />
      <div className="pointer-events-none absolute -top-24 end-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute top-56 start-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

      <PageHero
        title={title}
        subtitle=""
        breadcrumbs={[
          { labelKey: isArabic ? "الرئيسية" : "Home", href: "/" },
          { labelKey: isArabic ? "الأخبار" : "News", href: "/news" },
          { labelKey: title },
        ]}
      />

      <section className="relative pb-16 pt-8 md:pb-20 lg:pb-24">
        <div className="container mx-auto px-4">
          <article className="mx-auto max-w-7xl">
            <div className="mb-6 flex items-center justify-between">
              <Button
                asChild
                variant="ghost"
                className="rounded-full px-3 text-muted-foreground hover:text-foreground"
              >
                <Link href="/news" className="inline-flex items-center gap-2">
                  <ArrowIcon className="h-4 w-4" />
                  {isArabic ? "العودة للأخبار" : "Back to News"}
                </Link>
              </Button>
            </div>

            <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-8">
                <motion.div
                  variants={softScale}
                  {...revealProps}
                  className="overflow-hidden rounded-[34px] border border-border/60 bg-background/95 shadow-[0_26px_100px_rgba(15,23,42,0.10)] backdrop-blur-sm"
                >
                  {article.image ? (
                    <motion.div
                      className="relative aspect-[16/9] w-full overflow-hidden bg-muted"
                      initial={prefersReducedMotion ? undefined : { scale: 1.04 }}
                      whileInView={prefersReducedMotion ? undefined : { scale: 1 }}
                      viewport={{ once: true, amount: 0.35 }}
                      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Image
                        src={article.image}
                        alt={imageAlt}
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 70vw, 900px"
                        className="object-cover transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/15 to-transparent" />

                      {(publishedDate || category) && (
                        <div className="absolute inset-x-4 bottom-4 md:inset-x-6 md:bottom-6">
                          <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-white/15 bg-slate-950/35 px-4 py-3 text-white backdrop-blur-md">
                            {publishedDate ? (
                              <div className="inline-flex items-center gap-2 text-sm text-white/90">
                                <Calendar className="h-4 w-4" />
                                <time dateTime={articleDateTime}>{publishedDate}</time>
                              </div>
                            ) : null}

                            {category ? (
                              <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white">
                                {category}
                              </span>
                            ) : null}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ) : null}

                  <div className="relative p-6 md:p-8 lg:p-12">
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />

                    <motion.header
                      variants={staggerWrap}
                      {...revealProps}
                      className="pb-8"
                    >
                      {category ? (
                        <motion.div variants={fadeUp} className="mb-5">
                          <span className="inline-flex rounded-full border border-primary/15 bg-primary/[0.06] px-4 py-2 text-sm font-medium text-primary">
                            {category}
                          </span>
                        </motion.div>
                      ) : null}

                      <motion.h1
                        variants={fadeUp}
                        className="max-w-4xl text-3xl font-bold leading-[1.15] tracking-tight text-foreground md:text-4xl lg:text-5xl"
                      >
                        {title}
                      </motion.h1>

                      {excerpt ? (
                        <motion.div
                          variants={fadeUp}
                          className="mt-6 max-w-4xl rounded-[28px] border border-border/60 bg-muted/30 p-5 md:p-6"
                        >
                          <p className="text-lg font-medium leading-8 text-foreground/85 md:text-xl">
                            {excerpt}
                          </p>
                        </motion.div>
                      ) : null}
                    </motion.header>

                    <div className="h-px w-full bg-gradient-to-r from-transparent via-border/80 to-transparent" />

                    <div className="mt-8 space-y-6 md:mt-10 md:space-y-7">{renderContent()}</div>
                  </div>
                </motion.div>
              </div>

              <aside className="lg:col-span-4">
                <div className="lg:sticky lg:top-28">
                  <motion.div
                    variants={fadeUp}
                    {...revealProps}
                    transition={
                      prefersReducedMotion
                        ? undefined
                        : { duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }
                    }
                    className="overflow-hidden rounded-[30px] border border-border/60 bg-background/95 shadow-[0_22px_80px_rgba(15,23,42,0.08)] backdrop-blur-sm"
                  >
                    <div className="border-b border-border/60 px-5 py-5 md:px-6">
                      <h2 className="text-lg font-semibold text-foreground">
                        {isArabic ? "مشاركة الخبر" : "Share article"}
                      </h2>
                      <p className="mt-2 text-sm leading-7 text-muted-foreground">
                        {isArabic
                          ? "شارك الخبر عبر الشبكات الاجتماعية أو انسخ الرابط مباشرة."
                          : "Share the article on social media or copy the link directly."}
                      </p>
                    </div>

                    <div className="space-y-3 p-5 md:p-6">
                      {shareButtons.map((button) => {
                        const Icon = button.icon

                        return (
                          <motion.button
                            key={button.key}
                            type="button"
                            aria-label={button.ariaLabel}
                            title={button.ariaLabel}
                            onClick={button.onClick}
                            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 10 }}
                            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                            className="group flex w-full items-center justify-between rounded-2xl border border-border/60 bg-muted/25 px-4 py-3 text-start transition-all duration-300 hover:border-primary/25 hover:bg-primary/[0.04]"
                          >
                            <span className="flex items-center gap-3">
                              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-background text-foreground transition-colors group-hover:border-primary/25 group-hover:text-primary">
                                <Icon className="h-4 w-4" />
                              </span>
                              <span className="text-sm font-medium text-foreground">{button.label}</span>
                            </span>

                            <Share2 className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                          </motion.button>
                        )
                      })}
                    </div>

                    <div className="border-t border-border/60 px-5 py-4 md:px-6">
                      <div
                        aria-live="polite"
                        className="rounded-2xl border border-border/60 bg-muted/25 px-4 py-3 text-sm leading-7 text-muted-foreground"
                      >
                        {copied
                          ? isArabic
                            ? "تم نسخ رابط الخبر بنجاح."
                            : "Article link copied successfully."
                          : shareUrl
                            ? isArabic
                              ? "الرابط جاهز للمشاركة."
                              : "The link is ready to share."
                            : isArabic
                              ? "جاري تجهيز الرابط."
                              : "Preparing the link."}
                      </div>
                    </div>
                  </motion.div>

                  {(publishedDate || category) && (
                    <motion.div
                      initial={prefersReducedMotion ? undefined : { opacity: 0, y: 18 }}
                      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                      className="mt-5 overflow-hidden rounded-[26px] border border-border/60 bg-background/95 shadow-[0_18px_60px_rgba(15,23,42,0.06)] backdrop-blur-sm"
                    >
                      <div className="px-5 py-5 md:px-6">
                        <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                          {isArabic ? "معلومات الخبر" : "Article info"}
                        </h3>

                        <div className="mt-4 space-y-4">
                          {publishedDate ? (
                            <div>
                              <div className="mb-1 text-xs font-medium text-muted-foreground">
                                {isArabic ? "تاريخ النشر" : "Published on"}
                              </div>
                              <div className="text-sm font-medium leading-7 text-foreground">
                                {publishedDate}
                              </div>
                            </div>
                          ) : null}

                          {category ? (
                            <div>
                              <div className="mb-1 text-xs font-medium text-muted-foreground">
                                {isArabic ? "التصنيف" : "Category"}
                              </div>
                              <div className="text-sm font-medium leading-7 text-foreground">
                                {category}
                              </div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </aside>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}