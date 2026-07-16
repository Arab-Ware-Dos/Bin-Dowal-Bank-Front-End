import { bankingServicesData } from "../data/banking-services/banking-services";
import { PERSONAL_FINANCING_SLUGS } from "../lib/personal-financing-routes";

function runDriftTest() {
  let errors = 0;

  // 1. Count equals 8
  if (PERSONAL_FINANCING_SLUGS.length !== 8) {
    console.error(`Expected 8 slugs, found ${PERSONAL_FINANCING_SLUGS.length}`);
    errors++;
  }

  // 2. Unique
  const uniqueSlugs = new Set(PERSONAL_FINANCING_SLUGS);
  if (uniqueSlugs.size !== PERSONAL_FINANCING_SLUGS.length) {
    console.error("Duplicate slugs found in registry");
    errors++;
  }

  // 3 & 4. No empty, no '/'
  for (const slug of PERSONAL_FINANCING_SLUGS) {
    if (!slug) {
      console.error("Empty slug found in registry");
      errors++;
    }
    if (slug.includes("/")) {
      console.error(`Slug contains '/': ${slug}`);
      errors++;
    }
  }

  // Extract all personal financing slugs from data
  const dataPersonalFinancingSlugs = bankingServicesData
    .filter((d) => d.section === "personal" && d.slug.startsWith("financing-"))
    .map((d) => d.slug);

  // 5 & 8 & 9. Exists in Personal data, All belong to Personal, No contamination
  for (const slug of PERSONAL_FINANCING_SLUGS) {
    const service = bankingServicesData.find((d) => d.slug === slug);
    if (!service) {
      console.error(`Slug ${slug} not found in data`);
      errors++;
    } else if (service.section !== "personal") {
      console.error(`Slug ${slug} is in section ${service.section}, expected personal`);
      errors++;
    }
  }

  // 7 & 13. No Registry route without data, Data and Registry match
  for (const slug of dataPersonalFinancingSlugs) {
    if (!PERSONAL_FINANCING_SLUGS.includes(slug as any)) {
      console.error(`Data slug ${slug} missing from registry`);
      errors++;
    }
  }

  // 10. No Duplicate E-Channel slugs (in personal financing)
  const allEServicesSlugs = bankingServicesData.filter(d => d.section === "e-services").map(d => d.slug);
  for (const slug of PERSONAL_FINANCING_SLUGS) {
    if (allEServicesSlugs.includes(slug)) {
      console.error(`Contamination: slug ${slug} exists in both personal and e-services`);
      errors++;
    }
  }

  // 11 & 12. No Transfer slugs, No private folders
  const forbidden = ["local-transfers", "international-transfers", "current-account", "mobile-banking", "e-wallet", "mushtarayati-network"];
  for (const slug of PERSONAL_FINANCING_SLUGS) {
    if (forbidden.includes(slug) || slug.startsWith("_")) {
      console.error(`Forbidden slug found in registry: ${slug}`);
      errors++;
    }
  }

  if (errors > 0) {
    console.error(`Personal Financing Drift Test Failed with ${errors} errors.`);
    process.exit(1);
  }

  console.log("Personal Financing Drift Test Passed");
}

runDriftTest();
