import type { Metadata } from "next"
import { buildLegacyAlternates } from "@/lib/seo/alternates"

import { CalculatorPageContent } from "@/components/self-service/calculator-page-content"


export const metadata: Metadata = {
  alternates: buildLegacyAlternates({ pathname: "/calculator" })
}

export default function CalculatorPage() {
  return <CalculatorPageContent />
}
