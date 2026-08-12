"use client"

import { useState, useEffect, useCallback } from "react"
import { fetchNews } from "@/services/news-service"
import type { NewsArticle } from "@/types/news-article"

export interface UseNewsReturn {
  news: NewsArticle[]
  loading: boolean
  error: string | null
  refetch: () => Promise<void>
}

export function useNews(initialData?: NewsArticle[]): UseNewsReturn {
  const [news, setNews] = useState<NewsArticle[]>(initialData || [])
  const [loading, setLoading] = useState<boolean>(!initialData || initialData.length === 0)
  const [error, setError] = useState<string | null>(null)

  const loadNews = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await fetchNews()
      setNews(data)
    } catch (err) {
      console.error("[useNews] Error fetching news:", err)
      setError("فشل تحميل الأخبار. يرجى المحاولة مرة أخرى.")
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    let isCancelled = false

    fetchNews()
      .then((data) => {
        if (!isCancelled) {
          setNews(data)
          setLoading(false)
        }
      })
      .catch((err) => {
        if (!isCancelled) {
          console.error("[useNews] Error fetching news:", err)
          setError("فشل تحميل الأخبار.")
          setLoading(false)
        }
      })

    return () => {
      isCancelled = true
    }
  }, [])

  return {
    news,
    loading,
    error,
    refetch: loadNews,
  }
}
