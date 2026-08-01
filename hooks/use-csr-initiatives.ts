"use client"

import { useState, useEffect, useCallback } from "react"
import { fetchCsrInitiatives } from "@/services/csr-initiatives-service"
import type { CsrInitiative } from "@/types/csr-initiative"

export interface UseCsrInitiativesReturn {
  initiatives: CsrInitiative[]
  loading: boolean
  error: string | null
  refetch: () => Promise<void>
}

export function useCsrInitiatives(initialData?: CsrInitiative[]): UseCsrInitiativesReturn {
  const [initiatives, setInitiatives] = useState<CsrInitiative[]>(initialData || [])
  const [loading, setLoading] = useState<boolean>(!initialData || initialData.length === 0)
  const [error, setError] = useState<string | null>(null)

  const loadInitiatives = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await fetchCsrInitiatives()
      setInitiatives(data)
    } catch (err) {
      console.error("[useCsrInitiatives] Error fetching initiatives:", err)
      setError("فشل تحميل المبادرات. يرجى المحاولة مرة أخرى.")
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    let isCancelled = false

    fetchCsrInitiatives()
      .then((data) => {
        if (!isCancelled) {
          setInitiatives(data)
          setLoading(false)
        }
      })
      .catch((err) => {
        if (!isCancelled) {
          console.error("[useCsrInitiatives] Error fetching initiatives:", err)
          setError("فشل تحميل المبادرات.")
          setLoading(false)
        }
      })

    return () => {
      isCancelled = true
    }
  }, [])

  return {
    initiatives,
    loading,
    error,
    refetch: loadInitiatives,
  }
}