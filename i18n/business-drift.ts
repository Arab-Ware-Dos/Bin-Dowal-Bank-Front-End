import { BUSINESS_SLUGS, BUSINESS_ROUTE_PATHS } from "../lib/business-routes";
import { bankingServicesData } from "../data/banking-services/banking-services";

async function runDriftTest() {
  console.log("Running Business Drift Test...");
  let exitCode = 0;

  // 1. Count equals 4
  if (BUSINESS_SLUGS.length !== 4) {
    console.error(`Error: Expected exactly 4 Business slugs, got ${BUSINESS_SLUGS.length}`);
    exitCode = 1;
  }

  // 2. Slugs are unique
  const uniqueSlugs = new Set(BUSINESS_SLUGS);
  if (uniqueSlugs.size !== BUSINESS_SLUGS.length) {
    console.error("Error: Duplicate slugs found in BUSINESS_SLUGS.");
    exitCode = 1;
  }

  // Extract actual data
  const actualBusinessServices = bankingServicesData.filter(d => d.section === "business");
  const actualSlugs = actualBusinessServices.map(d => d.slug);

  // 11. Data and Registry Match
  for (const slug of BUSINESS_SLUGS) {
    // 3. No empty slug
    if (!slug || slug.trim() === "") {
      console.error("Error: Empty slug found in BUSINESS_SLUGS.");
      exitCode = 1;
    }
    // 4. No '/' in slug, 5. No leading/trailing slash
    if (slug.includes("/") || slug.startsWith("/") || slug.endsWith("/")) {
      console.error(`Error: Slug '${slug}' contains invalid characters like slashes.`);
      exitCode = 1;
    }
    // 6. Present in data
    if (!actualSlugs.includes(slug)) {
      console.error(`Error: Slug '${slug}' in registry but not found in business data.`);
      exitCode = 1;
    }
  }

  for (const slug of actualSlugs) {
    // 8. No registry route without data (or conversely, no data without registry route)
    if (!BUSINESS_SLUGS.includes(slug as any)) {
      console.error(`Error: Slug '${slug}' in data but not found in BUSINESS_SLUGS registry.`);
      exitCode = 1;
    }
  }

  // 9. No Personal or Account or E-Service slug
  const otherServices = bankingServicesData.filter(d => d.section !== "business");
  const otherSlugs = otherServices.map(d => d.slug);
  for (const slug of BUSINESS_SLUGS) {
    if (otherSlugs.includes(slug)) {
      console.error(`Error: Slug '${slug}' is found in non-business sections as well.`);
      exitCode = 1;
    }
  }

  // 10. `_swift-transfers` is not in registry
  if (BUSINESS_SLUGS.includes("_swift-transfers" as any)) {
    console.error("Error: '_swift-transfers' should not be in the BUSINESS_SLUGS registry.");
    exitCode = 1;
  }

  // 7. Each slug has Exact route
  for (const slug of BUSINESS_SLUGS) {
    const expectedRoute = `/business/${slug}`;
    if (!BUSINESS_ROUTE_PATHS.includes(expectedRoute as any)) {
      console.error(`Error: Route '${expectedRoute}' is missing from BUSINESS_ROUTE_PATHS.`);
      exitCode = 1;
    }
  }

  if (exitCode === 0) {
    console.log("Business Drift Test: Exit 0");
  } else {
    console.error("Business Drift Test: Failed.");
  }

  process.exit(exitCode);
}

runDriftTest().catch((e) => {
  console.error("Unhandled error:", e);
  process.exit(1);
});
