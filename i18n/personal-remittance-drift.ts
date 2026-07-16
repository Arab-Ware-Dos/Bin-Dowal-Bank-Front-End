import { bankingServicesData } from "../data/banking-services/banking-services";
import { PERSONAL_REMITTANCE_SLUGS } from "../lib/personal-remittance-routes";

function runDriftTest() {
  let errors = 0;

  // 1. Count equals 7
  if (PERSONAL_REMITTANCE_SLUGS.length !== 7) {
    console.error(`Expected 7 slugs, found ${PERSONAL_REMITTANCE_SLUGS.length}`);
    errors++;
  }

  // 2. Unique
  const uniqueSlugs = new Set(PERSONAL_REMITTANCE_SLUGS);
  if (uniqueSlugs.size !== PERSONAL_REMITTANCE_SLUGS.length) {
    console.error("Duplicate slugs found in registry");
    errors++;
  }

  // 3 & 4. No empty, no '/'
  for (const slug of PERSONAL_REMITTANCE_SLUGS) {
    if (!slug) {
      console.error("Empty slug found in registry");
      errors++;
    }
    if (slug.includes("/")) {
      console.error(`Slug contains '/': ${slug}`);
      errors++;
    }
  }

  // Extract all personal remittance slugs from data based on instructions
  const allowedRemittanceSlugs = [
    "moneygram",
    "shift",
    "upt",
    "bin-yaala",
    "alawneh",
    "zamzam",
    "swift"
  ];

  const dataPersonalRemittanceSlugs = bankingServicesData
    .filter((d) => d.section === "personal" && allowedRemittanceSlugs.includes(d.slug))
    .map((d) => d.slug);

  // 5 & 6. Exists in Personal data, All belong to Personal
  for (const slug of PERSONAL_REMITTANCE_SLUGS) {
    const service = bankingServicesData.find((d) => d.slug === slug);
    if (!service) {
      console.error(`Slug ${slug} not found in data`);
      errors++;
    } else if (service.section !== "personal") {
      console.error(`Slug ${slug} is in section ${service.section}, expected personal`);
      errors++;
    }
  }

  // 7 & 8. No Registry route without data, Data and Registry match
  for (const slug of dataPersonalRemittanceSlugs) {
    if (!PERSONAL_REMITTANCE_SLUGS.includes(slug as any)) {
      console.error(`Data slug ${slug} missing from registry`);
      errors++;
    }
  }

  // 14 & 15. swift exists, swift-transfers does not exist
  if (!PERSONAL_REMITTANCE_SLUGS.includes("swift" as any)) {
    console.error("swift is missing from registry");
    errors++;
  }
  if (PERSONAL_REMITTANCE_SLUGS.includes("swift-transfers" as any)) {
    console.error("swift-transfers exists in registry (should be in business)");
    errors++;
  }

  // 9, 10, 11, 12, 13, 16. Forbidden lists
  const forbidden = [
    "local-transfers", 
    "international-transfers", 
    "fast-money-transfers",
    "current-account",
    "savings-account",
    "investment-deposit",
    "minors-account",
    "mobile-banking", 
    "e-wallet", 
    "mushtarayati-network"
  ];
  for (const slug of PERSONAL_REMITTANCE_SLUGS) {
    if (forbidden.includes(slug) || slug.startsWith("_") || slug.startsWith("financing-")) {
      console.error(`Forbidden slug found in registry: ${slug}`);
      errors++;
    }
  }

  if (errors > 0) {
    console.error(`Personal Remittance Drift Test Failed with ${errors} errors.`);
    process.exit(1);
  }

  console.log("Personal Remittance Drift Test Passed");
}

runDriftTest();
