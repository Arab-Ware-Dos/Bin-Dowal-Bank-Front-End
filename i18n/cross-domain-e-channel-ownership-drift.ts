import { bankingServicesData } from "../data/banking-services/banking-services";
import { getBankingServiceBySlug } from "../services/banking-service-pages";
import { E_SERVICE_ROUTE_PATHS } from "../lib/e-service-routes";
import { LOCALIZED_STATIC_ROUTES } from "../lib/localized-routes";
import {
  PERSONAL_E_CHANNEL_COMPATIBILITY_SLUGS,
  getPersonalEChannelCompatibilityService
} from "../lib/personal-e-channel-compatibility";

async function runDriftTest() {
  const errors: string[] = [];

  // 1. Compatibility slugs equals 3
  if (PERSONAL_E_CHANNEL_COMPATIBILITY_SLUGS.length !== 3) {
    errors.push(`Expected 3 compatibility slugs, got ${PERSONAL_E_CHANNEL_COMPATIBILITY_SLUGS.length}`);
  }

  // 2. Slugs are unique
  const uniqueSlugs = new Set(PERSONAL_E_CHANNEL_COMPATIBILITY_SLUGS);
  if (uniqueSlugs.size !== 3) {
    errors.push("Compatibility slugs are not unique");
  }

  // 3. No duplicate personal data objects
  for (const slug of PERSONAL_E_CHANNEL_COMPATIBILITY_SLUGS) {
    const personalData = bankingServicesData.find(s => s.section === "personal" && s.slug === slug);
    if (personalData) {
      errors.push(`Found duplicate personal data object for ${slug}`);
    }
  }

  // 4. Each slug exists in E-Services data
  for (const slug of PERSONAL_E_CHANNEL_COMPATIBILITY_SLUGS) {
    const eServicesData = bankingServicesData.find(s => s.section === "e-services" && s.slug === slug);
    if (!eServicesData) {
      errors.push(`Missing E-Services data object for ${slug}`);
    }
  }

  // 5. Each slug is in E-Services localized registry
  for (const slug of PERSONAL_E_CHANNEL_COMPATIBILITY_SLUGS) {
    if (!E_SERVICE_ROUTE_PATHS.includes(`/e-services/${slug}` as any)) {
      errors.push(`${slug} missing from E_SERVICE_ROUTE_PATHS`);
    }
  }

  // 6. No slug is in Personal localized registry
  for (const slug of PERSONAL_E_CHANNEL_COMPATIBILITY_SLUGS) {
    if (LOCALIZED_STATIC_ROUTES.includes(`/personal/${slug}` as any)) {
      errors.push(`${slug} found in LOCALIZED_STATIC_ROUTES`);
    }
  }

  // Legacy personal route checks have been removed.

  // 10. Generic accessor is section aware
  for (const slug of PERSONAL_E_CHANNEL_COMPATIBILITY_SLUGS) {
    const service = await getBankingServiceBySlug("personal", slug);
    if (service) {
      errors.push(`getBankingServiceBySlug('personal', '${slug}') should return null`);
    }
  }

  // 11. Compatibility projection returns personal section
  for (const slug of PERSONAL_E_CHANNEL_COMPATIBILITY_SLUGS) {
    const service = await getPersonalEChannelCompatibilityService(slug);
    if (!service || service.section !== "personal") {
      errors.push(`getPersonalEChannelCompatibilityService('${slug}') did not return section 'personal'`);
    }
  }

  // Print results
  if (errors.length > 0) {
    console.error("Cross-Domain E-Channel Ownership Drift: Failed");
    errors.forEach(e => console.error(" - " + e));
    process.exit(1);
  } else {
    console.log("Cross-Domain E-Channel Ownership Drift: Exit 0");
    process.exit(0);
  }
}

runDriftTest().catch(e => {
  console.error(e);
  process.exit(1);
});
