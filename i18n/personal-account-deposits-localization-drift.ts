import {
  PERSONAL_ACCOUNT_DEPOSIT_SLUGS,
  PERSONAL_ACCOUNT_DEPOSIT_ROUTE_PATHS,
} from "../lib/personal-account-deposit-routes"
import { LOCALIZED_STATIC_ROUTES } from "../lib/localized-routes"
import { bankingServicesData } from "../data/banking-services/banking-services"
import {
  PERSONAL_FINANCING_SLUGS,
} from "../lib/personal-financing-routes"
import {
  PERSONAL_REMITTANCE_SLUGS,
} from "../lib/personal-remittance-routes"
import {
  PERSONAL_INDEPENDENT_TRANSFER_SLUGS,
} from "../lib/personal-independent-transfer-routes"
import {
  PERSONAL_CORE_TRANSFER_SLUGS,
} from "../lib/personal-core-transfer-routes"
import { PERSONAL_E_CHANNEL_COMPATIBILITY_SLUGS } from "../lib/personal-e-channel-compatibility"

function validatePersonalAccountDeposits() {
  const errors: string[] = []

  if (PERSONAL_ACCOUNT_DEPOSIT_SLUGS.length !== 4) {
    errors.push(`Expected exactly 4 account/deposit slugs, got ${PERSONAL_ACCOUNT_DEPOSIT_SLUGS.length}`)
  }

  const uniqueSlugs = new Set(PERSONAL_ACCOUNT_DEPOSIT_SLUGS)
  if (uniqueSlugs.size !== PERSONAL_ACCOUNT_DEPOSIT_SLUGS.length) {
    errors.push("Duplicate slugs found in PERSONAL_ACCOUNT_DEPOSIT_SLUGS")
  }

  PERSONAL_ACCOUNT_DEPOSIT_SLUGS.forEach((slug) => {
    if (!slug) {
      errors.push("Empty slug found")
    }
    if (slug.includes("/")) {
      errors.push(`Slug contains invalid characters (/): ${slug}`)
    }

    if ((PERSONAL_FINANCING_SLUGS as readonly string[]).includes(slug)) {
      errors.push(`Slug ${slug} conflicts with Financing`)
    }
    if ((PERSONAL_REMITTANCE_SLUGS as readonly string[]).includes(slug)) {
      errors.push(`Slug ${slug} conflicts with Remittance`)
    }
    if ((PERSONAL_INDEPENDENT_TRANSFER_SLUGS as readonly string[]).includes(slug)) {
      errors.push(`Slug ${slug} conflicts with Independent Transfers`)
    }
    if ((PERSONAL_CORE_TRANSFER_SLUGS as readonly string[]).includes(slug)) {
      errors.push(`Slug ${slug} conflicts with Core Transfers`)
    }
    if ((PERSONAL_E_CHANNEL_COMPATIBILITY_SLUGS as readonly string[]).includes(slug)) {
      errors.push(`Slug ${slug} conflicts with E-Channel Compatibility`)
    }

    const data = bankingServicesData.find((service) => service.slug === slug && service.section === "personal")
    if (!data) {
      errors.push(`Data not found for personal account/deposit: ${slug}`)
      return
    }

    if (!data.title.ar || !data.title.en) {
      errors.push(`Missing title for ${slug}`)
    }
    if (!data.subtitle?.ar || !data.subtitle?.en) {
      errors.push(`Missing subtitle for ${slug}`)
    }
    if (!data.overview?.description?.ar || !data.overview?.description?.en) {
      errors.push(`Missing overview description for ${slug}`)
    }
    if ((!data.details?.features || data.details.features.length === 0) && (!data.featureCards || data.featureCards.items.length === 0)) {
      errors.push(`Missing features for ${slug}`)
    }
    if (!data.primaryCta?.href) {
      errors.push(`Missing CTA for ${slug}`)
    }
    if (!data.seoDescription?.ar || !data.seoDescription?.en) {
      errors.push(`Missing SEO metadata for ${slug}`)
    }
    if (!data.breadcrumbs || data.breadcrumbs.length === 0) {
      errors.push(`Missing breadcrumbs for ${slug}`)
    }
  })

  if (PERSONAL_ACCOUNT_DEPOSIT_ROUTE_PATHS.length !== 4) {
    errors.push(`Expected exactly 4 route paths, got ${PERSONAL_ACCOUNT_DEPOSIT_ROUTE_PATHS.length}`)
  }

  PERSONAL_ACCOUNT_DEPOSIT_ROUTE_PATHS.forEach((path) => {
    const isRegistered = LOCALIZED_STATIC_ROUTES.includes(path as any)
    if (!isRegistered) {
      errors.push(`Path ${path} is not registered in LOCALIZED_STATIC_ROUTES`)
    }
  })

  const registeredAccountPaths = LOCALIZED_STATIC_ROUTES.filter((route) =>
    PERSONAL_ACCOUNT_DEPOSIT_ROUTE_PATHS.includes(route as any)
  )

  if (registeredAccountPaths.length !== PERSONAL_ACCOUNT_DEPOSIT_ROUTE_PATHS.length) {
    errors.push("Mismatch between generated paths and registered localized paths")
  }

  if (errors.length > 0) {
    console.error("Personal Accounts and Deposits Localization Drift detected:")
    errors.forEach((err) => console.error(`- ${err}`))
    process.exit(1)
  }

  console.log("Personal Accounts and Deposits Localization Drift: Exit 0")
}

validatePersonalAccountDeposits()
