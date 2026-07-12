import { bankingServicesData } from "@/data/banking-services/banking-services"

export async function getBankingServiceBySlug(
  section: "personal" | "business" | "accounts" | "e-services",
  slug: string
) {
  // Simulate an async fetch, this is ready to be swapped with a real API call later.
  return new Promise((resolve) => {
    setTimeout(() => {
      const service = bankingServicesData.find(
        (item) => item.section === section && item.slug === slug
      )
      resolve(service || null)
    }, 0)
  }) as Promise<typeof bankingServicesData[0] | null>
}

export async function getAllBankingServicesSlugs(
  section: "personal" | "business" | "accounts" | "e-services"
) {
  // Simulate an async fetch.
  return new Promise((resolve) => {
    setTimeout(() => {
      const slugs = bankingServicesData
        .filter((item) => item.section === section)
        .map((item) => item.slug)
      resolve(slugs)
    }, 0)
  }) as Promise<string[]>
}
