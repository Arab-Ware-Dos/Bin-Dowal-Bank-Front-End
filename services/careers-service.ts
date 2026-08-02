// ============================================================
// Careers / Jobs Service — API Adapter
// Bin Dowal Islamic Microfinance Bank
//
// Fetches job vacancies from the Laravel backend API:
//   GET /api/v1/jobs         — List all active job vacancies
//   GET /api/v1/jobs/{slug}  — Get single job details by slug
//
// Gracefully falls back to local mock data if the API is offline.
// ============================================================

import { fetchAPI } from "@/lib/api-client"
import { careersData as fallbackCareers, type JobData } from "@/data/careers"

// ─── API Raw Data Types ─────────────────────────────────────

export interface ApiJobRaw {
  id: number | string
  slug: string
  title?: string
  title_ar?: string
  titleAr?: string
  title_en?: string
  titleEn?: string
  location?: string
  location_ar?: string
  locationAr?: string
  location_en?: string
  locationEn?: string
  department?: string
  department_ar?: string
  departmentAr?: string
  department_en?: string
  departmentEn?: string
  employment_type?: string
  application_start_date?: string
  applicationStartDate?: string
  application_deadline?: string
  applicationDeadline?: string
  endDate?: string
  application_email?: string
  applicationEmail?: string
  responsibilities?: string[]
  responsibilities_ar?: string[]
  responsibilitiesAr?: string[]
  responsibilities_en?: string[]
  responsibilitiesEn?: string[]
  qualifications?: string[]
  qualifications_ar?: string[]
  qualificationsAr?: string[]
  qualifications_en?: string[]
  qualificationsEn?: string[]
  conditions?: string[]
  conditions_ar?: string[]
  conditionsAr?: string[]
  conditions_en?: string[]
  conditionsEn?: string[]
  description?: string
  description_ar?: string
  descriptionAr?: string
  description_en?: string
  descriptionEn?: string
  is_active?: boolean
  views_count?: number
  created_at?: string
}

export interface JobsListApiResponse {
  data: ApiJobRaw[]
  links?: Record<string, unknown>
  meta?: {
    current_page?: number
    from?: number
    last_page?: number
    per_page?: number
    total?: number
  }
}

export interface JobSingleApiResponse {
  data: ApiJobRaw
}

// ─── Normalize API raw job to frontend JobData ──────────────

function parseArrayField(val: unknown): string[] {
  if (!val) return []
  if (Array.isArray(val)) {
    return val.map((item) => String(item).trim()).filter(Boolean)
  }
  if (typeof val === "string") {
    const trimmed = val.trim()
    if (!trimmed) return []
    if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
      try {
        const parsed = JSON.parse(trimmed)
        if (Array.isArray(parsed)) {
          return parsed.map((item) => String(item).trim()).filter(Boolean)
        }
      } catch {
        // Not valid JSON string, proceed with newline splitting
      }
    }
    return trimmed.split(/\r?\n/).map((s) => s.trim()).filter(Boolean)
  }
  return []
}

export function normalizeJobVacancy(raw: ApiJobRaw): JobData {
  const titleAr = (raw.title_ar ?? raw.titleAr ?? raw.title ?? "").trim()
  const rawTitleEn = (raw.title_en ?? raw.titleEn ?? "").trim()
  const titleEn = rawTitleEn || (raw.title && raw.title !== titleAr ? raw.title.trim() : titleAr)

  const locationAr = (raw.location_ar ?? raw.locationAr ?? raw.location ?? "عدن، اليمن").trim()
  const rawLocationEn = (raw.location_en ?? raw.locationEn ?? "").trim()
  const locationEn = rawLocationEn || (raw.location && raw.location !== locationAr ? raw.location.trim() : "Aden, Yemen")

  const deptAr = (raw.department_ar ?? raw.departmentAr ?? raw.department ?? "").trim()
  const rawDeptEn = (raw.department_en ?? raw.departmentEn ?? "").trim()
  const deptEn = rawDeptEn || (raw.department && raw.department !== deptAr ? raw.department.trim() : deptAr)

  const descAr = (raw.description_ar ?? raw.descriptionAr ?? raw.description ?? "").trim()
  const rawDescEn = (raw.description_en ?? raw.descriptionEn ?? "").trim()
  const descEn = rawDescEn || (raw.description && raw.description !== descAr ? raw.description.trim() : descAr)

  const respAr = parseArrayField(raw.responsibilities_ar ?? raw.responsibilitiesAr ?? raw.responsibilities)
  const respEnParsed = parseArrayField(raw.responsibilities_en ?? raw.responsibilitiesEn)
  const respEn = respEnParsed.length > 0 ? respEnParsed : respAr

  const qualAr = parseArrayField(raw.qualifications_ar ?? raw.qualificationsAr ?? raw.qualifications)
  const qualEnParsed = parseArrayField(raw.qualifications_en ?? raw.qualificationsEn)
  const qualEn = qualEnParsed.length > 0 ? qualEnParsed : qualAr

  const condAr = parseArrayField(raw.conditions_ar ?? raw.conditionsAr ?? raw.conditions)
  const condEnParsed = parseArrayField(raw.conditions_en ?? raw.conditionsEn)
  const condEn = condEnParsed.length > 0 ? condEnParsed : condAr

  return {
    id: String(raw.id),
    slug: raw.slug || String(raw.id),
    title: { ar: titleAr, en: titleEn },
    location: { ar: locationAr, en: locationEn },
    department: { ar: deptAr, en: deptEn },
    startDate: raw.application_start_date ?? raw.applicationStartDate ?? "",
    endDate: raw.application_deadline ?? raw.applicationDeadline ?? raw.endDate ?? "",
    applicationEmail: raw.application_email ?? raw.applicationEmail ?? "careers@bindowalbank.com",
    responsibilities: { ar: respAr, en: respEn },
    qualifications: { ar: qualAr, en: qualEn },
    conditions: { ar: condAr, en: condEn },
    description: { ar: descAr, en: descEn },
    employmentType: raw.employment_type,
    isActive: raw.is_active ?? true,
  }
}

// ─── Query options for fetchJobs ────────────────────────────

export interface FetchJobsOptions {
  department?: string
  search?: string
}

// ─── Fetch All Job Vacancies ────────────────────────────────

export async function fetchJobs(options: FetchJobsOptions = {}): Promise<JobData[]> {
  try {
    const params = new URLSearchParams()
    if (options.department) params.set("department", options.department)
    if (options.search) params.set("search", options.search)

    const queryStr = params.toString()
    const endpoint = `/jobs${queryStr ? `?${queryStr}` : ""}`

    const response = await fetchAPI<JobsListApiResponse>(endpoint)
    const rawList = response.data ?? []

    return rawList.map(normalizeJobVacancy)
  } catch (error) {
    console.error("[careers-service] API fetch failed, using local fallback jobs:", error)
    return fallbackCareers
  }
}

// ─── Fetch Single Job by Slug or ID ─────────────────────────

export async function fetchJobBySlug(slug: string): Promise<JobData | null> {
  try {
    const response = await fetchAPI<JobSingleApiResponse>(`/jobs/${slug}`)
    if (!response.data) return null
    return normalizeJobVacancy(response.data)
  } catch (error) {
    console.error(`[careers-service] API fetch for job slug "${slug}" failed, using fallback:`, error)
    const fallback = fallbackCareers.find((job) => job.slug === slug || job.id === slug)
    return fallback ?? null
  }
}

// ─── Fetch All Job Slugs (for static generation) ────────────

export async function fetchAllJobSlugs(): Promise<string[]> {
  try {
    const jobs = await fetchJobs()
    return jobs.map((job) => job.slug || job.id)
  } catch {
    return fallbackCareers.map((job) => job.slug || job.id)
  }
}
