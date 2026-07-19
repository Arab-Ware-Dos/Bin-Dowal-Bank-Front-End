import type { Metadata } from "next"
import { redirect } from "next/navigation";
import { defaultLocale } from "@/i18n/config";
import { buildLegacyAlternates } from "@/lib/seo/alternates"


export const metadata: Metadata = {
  alternates: buildLegacyAlternates({ pathname: "/custom-services" })
}

export default function LegacyCustomServicesRedirect() {
  redirect(`/${defaultLocale}/custom-services`);
}
