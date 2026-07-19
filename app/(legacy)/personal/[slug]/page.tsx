import { buildLegacyAlternates } from "@/lib/seo/alternates"
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
import {
  isPersonalCoreTransferSlug,
  PERSONAL_CORE_TRANSFER_SLUGS
} from "@/lib/personal-core-transfer-routes"
import { getPersonalCoreTransferService } from "@/data/personal-transfers/core-transfer-services"
import { TransferServicePage } from "@/components/personal/transfers/transfer-service-page"

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
    ...PERSONAL_CORE_TRANSFER_SLUGS,
  ]
  const uniqueSlugs = Array.from(new Set(combined))
  return uniqueSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params

  if (isPersonalCoreTransferSlug(slug)) {
    const service = getPersonalCoreTransferService(slug)
    return {
      alternates: buildLegacyAlternates({ pathname: `/personal/${slug}` }),
    title: `${service.metadata.title.ar} | Bin Dowal Bank`,
      description: service.metadata.description.ar,
    }
  }

  const service = isPersonalEChannelCompatibilitySlug(slug)
    ? await getPersonalEChannelCompatibilityService(slug)
    : await getBankingServiceBySlug("personal", slug)

  if (!service) {
    return { alternates: buildLegacyAlternates({ pathname: `/personal/${slug}` }),
    title: "Service Not Found" }
  }

  const baseMetadata: Metadata = {
    title: `${service.title.ar} | Bin Dowal Bank`,
    description: service.subtitle.ar,
  }

  if (isPersonalEChannelCompatibilitySlug(slug)) {
    return {
      alternates: buildLegacyAlternates({ pathname: `/personal/${slug}` }),
    ...baseMetadata,
      robots: {
        index: false,
        follow: true,
      },
    }
  }

  return {
    alternates: buildLegacyAlternates({ pathname: `/personal/${slug}` }),
    ...baseMetadata,
  }
}

export default async function PersonalServicePage({ params }: PageProps) {
  const { slug } = await params

  if (isPersonalCoreTransferSlug(slug)) {
    return <TransferServicePage slug={slug} locale="ar" />
  }

  const service = isPersonalEChannelCompatibilitySlug(slug)
    ? await getPersonalEChannelCompatibilityService(slug)
    : await getBankingServiceBySlug("personal", slug)

  if (!service) {
    notFound()
  }

  return <BankingServicePageTemplate data={service as ServicePageData} />
}
