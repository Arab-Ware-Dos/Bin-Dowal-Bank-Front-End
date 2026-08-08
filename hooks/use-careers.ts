"use client"

import { useState, useEffect, useCallback } from "react"
import { fetchJobs } from "@/services/careers-service"
import type { JobData } from "@/data/careers"

export interface UseCareersReturn {
  jobs: JobData[]
  loading: boolean
  error: string | null
  refetch: () => Promise<void>
}

export function useCareers(initialData?: JobData[]): UseCareersReturn {
  const [jobs, setJobs] = useState<JobData[]>(initialData || [])
  const [loading, setLoading] = useState<boolean>(!initialData || initialData.length === 0)
  const [error, setError] = useState<string | null>(null)

  const loadJobs = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await fetchJobs()
      setJobs(data)
    } catch (err) {
      console.error("[useCareers] Error fetching jobs:", err)
      setError("فشل تحميل الوظائف. يرجى المحاولة مرة أخرى.")
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    let isCancelled = false

    fetchJobs()
      .then((data) => {
        if (!isCancelled) {
          setJobs(data)
          setLoading(false)
        }
      })
      .catch((err) => {
        if (!isCancelled) {
          console.error("[useCareers] Error fetching jobs:", err)
          setError("فشل تحميل الوظائف.")
          setLoading(false)
        }
      })

    return () => {
      isCancelled = true
    }
  }, [])

  return {
    jobs,
    loading,
    error,
    refetch: loadJobs,
  }
}
