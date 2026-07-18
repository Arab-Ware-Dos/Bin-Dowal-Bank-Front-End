import { notFound } from "next/navigation"
import { Metadata } from "next"
import { getBankingServiceBySlug, getAllBankingServicesSlugs } from "@/services/banking-service-pages"
import { BankingServicePageTemplate } from "@/components/service-page/BankingServicePageTemplate"
import { ServicePageData } from "@/types/banking-service-page"
import {
  isPersonalEChannelCompatibilitySlug,
  getPersonalEChannelCompatibilityService,
  PERSONAL_E_CHANNEL_COMPATIBILITY_SLUGS
} from "@/lib/personal-e-channel-compatibility"

// Next.js 15+: params is a Promise
interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const personalSlugs = await getAllBankingServicesSlugs("personal")
  const combined = [
    ...personalSlugs,
    ...PERSONAL_E_CHANNEL_COMPATIBILITY_SLUGS,
  ]
  const uniqueSlugs = Array.from(new Set(combined))
  return uniqueSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const service = isPersonalEChannelCompatibilitySlug(slug)
    ? await getPersonalEChannelCompatibilityService(slug)
    : await getBankingServiceBySlug("personal", slug)

  if (!service) {
    return { title: "Service Not Found" }
  }

  const baseMetadata: Metadata = {
    title: `${service.title.ar} | Bin Dowal Bank`,
    description: service.subtitle.ar,
  }

  if (isPersonalEChannelCompatibilitySlug(slug)) {
    return {
      ...baseMetadata,
      robots: {
        index: false,
        follow: true,
      },
    }
  }

  return baseMetadata
}

export default async function PersonalServicePage({ params }: PageProps) {
  const { slug } = await params
  const service = isPersonalEChannelCompatibilitySlug(slug)
    ? await getPersonalEChannelCompatibilityService(slug)
    : await getBankingServiceBySlug("personal", slug)

  if (!service) {
    notFound()
  }

  return <BankingServicePageTemplate data={service as ServicePageData} />
}
