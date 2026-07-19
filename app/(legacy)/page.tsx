import type { Metadata } from "next"
import { buildLegacyAlternates } from "@/lib/seo/alternates"
import { HomePageContent } from "@/components/home/home-page-content"


export const metadata: Metadata = {
  alternates: buildLegacyAlternates({ pathname: "/" })
}

export default function HomePage() {
  return <HomePageContent />
}
