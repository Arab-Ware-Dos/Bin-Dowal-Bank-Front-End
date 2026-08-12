"use client"

import { useState, useEffect, useCallback } from "react"
import { fetchPartners } from "@/services/partners-service"
import { partnersData as fallbackPartners, type Partner } from "@/data/partners"

export interface UsePartnersReturn {
  partners: Partner[]
  loading: boolean
  error: string | null
  refetch: () => Promise<void>
}

export function usePartners(initialData?: Partner[]): UsePartnersReturn {
  const [partners, setPartners] = useState<Partner[]>(initialData || [])
  const [loading, setLoading] = useState<boolean>(!initialData || initialData.length === 0)
  const [error, setError] = useState<string | null>(null)

  const loadPartners = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await fetchPartners()
      setPartners(data)
    } catch (err) {
      console.error("[usePartners] Error fetching partners:", err)
      setError("فشل تحميل شركاء البنك.")
      setPartners(fallbackPartners)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    let isCancelled = false

    fetchPartners()
      .then((data) => {
        if (!isCancelled) {
          setPartners(data)
          setLoading(false)
        }
      })
      .catch((err) => {
        if (!isCancelled) {
          console.error("[usePartners] Error fetching partners:", err)
          setError("فشل تحميل شركاء البنك.")
          setPartners(fallbackPartners)
          setLoading(false)
        }
      })

    return () => {
      isCancelled = true
    }
  }, [])

  return {
    partners,
    loading,
    error,
    refetch: loadPartners,
  }
}
