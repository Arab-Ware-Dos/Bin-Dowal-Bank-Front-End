import { buildLegacyAlternates } from "@/lib/seo/alternates"
import { notFound } from "next/navigation"
import { getBankingServiceBySlug, getAllBankingServicesSlugs } from "@/services/banking-service-pages"
import { BankingServicePageTemplate } from "@/components/service-page/BankingServicePageTemplate"
import { ServicePageData } from "@/types/banking-service-page"

// Next.js 15+: params is a Promise
interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const slugs = await getAllBankingServicesSlugs("e-services")
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const service = await getBankingServiceBySlug("e-services", slug)

  if (!service) {
    return { alternates: buildLegacyAlternates({ pathname: `/e-services/${slug}` }),
    title: "Service Not Found" }
  }

  return {
    alternates: buildLegacyAlternates({ pathname: `/e-services/${slug}` }),
    title: `${service.title.ar} | Bin Dowal Bank`,
    description: service.subtitle.ar,
  }
}

export default async function EServicesPage({ params }: PageProps) {
  const { slug } = await params
  const service = await getBankingServiceBySlug("e-services", slug)

  if (!service) {
    notFound()
  }

  return <BankingServicePageTemplate data={service as ServicePageData} />
}
