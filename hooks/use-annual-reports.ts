"use client"

import { useState, useEffect, useCallback } from "react"
import { fetchAnnualReports } from "@/services/annual-reports-service"
import { annualReports as fallbackReports, type AnnualReport } from "@/data/annual-reports"

export interface UseAnnualReportsReturn {
  reports: AnnualReport[]
  loading: boolean
  error: string | null
  refetch: () => Promise<void>
}

export function useAnnualReports(initialData?: AnnualReport[]): UseAnnualReportsReturn {
  const [reports, setReports] = useState<AnnualReport[]>(initialData || [])
  const [loading, setLoading] = useState<boolean>(!initialData || initialData.length === 0)
  const [error, setError] = useState<string | null>(null)

  const loadReports = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await fetchAnnualReports()
      setReports(data)
    } catch (err) {
      console.error("[useAnnualReports] Error fetching reports:", err)
      setError("فشل تحميل التقارير السنوية.")
      setReports(fallbackReports)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    let isCancelled = false

    fetchAnnualReports()
      .then((data) => {
        if (!isCancelled) {
          setReports(data)
          setLoading(false)
        }
      })
      .catch((err) => {
        if (!isCancelled) {
          console.error("[useAnnualReports] Error fetching reports:", err)
          setError("فشل تحميل التقارير السنوية.")
          setReports(fallbackReports)
          setLoading(false)
        }
      })

    return () => {
      isCancelled = true
    }
  }, [])

  return {
    reports,
    loading,
    error,
    refetch: loadReports,
  }
}
