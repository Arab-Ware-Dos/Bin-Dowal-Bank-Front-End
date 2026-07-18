import { readFileSync } from "fs";
import { join } from "path";
import { PERSONAL_INDEPENDENT_TRANSFER_SLUGS } from "../lib/personal-independent-transfer-routes";
import { LOCALIZED_STATIC_ROUTES } from "../lib/localized-routes";
import { PERSONAL_FINANCING_SLUGS } from "../lib/personal-financing-routes";
import { PERSONAL_REMITTANCE_SLUGS } from "../lib/personal-remittance-routes";
import { PERSONAL_E_CHANNEL_COMPATIBILITY_SLUGS } from "../lib/personal-e-channel-compatibility";

const bankingServicesPath = join(
  process.cwd(),
  "data",
  "banking-services",
  "banking-services.ts",
);
const bankingServicesContent = readFileSync(bankingServicesPath, "utf-8");

function runDriftTest() {
  const errors: string[] = [];

  // 1. Count = 2
  if (PERSONAL_INDEPENDENT_TRANSFER_SLUGS.length !== 2) {
    errors.push(
      `Expected 2 slugs, found ${PERSONAL_INDEPENDENT_TRANSFER_SLUGS.length}`,
    );
  }

  // 2. Unique slugs
  const uniqueSlugs = new Set(PERSONAL_INDEPENDENT_TRANSFER_SLUGS);
  if (uniqueSlugs.size !== PERSONAL_INDEPENDENT_TRANSFER_SLUGS.length) {
    errors.push("Duplicate slugs found in registry");
  }

  // 15. Slugs are dool-express and unified-network only
  const expectedSlugs = ["dool-express", "unified-network"];
  for (const slug of PERSONAL_INDEPENDENT_TRANSFER_SLUGS) {
    if (!expectedSlugs.includes(slug)) {
      errors.push(`Unexpected slug found: ${slug}`);
    }
  }

  // Verify generic requirements
  for (const slug of PERSONAL_INDEPENDENT_TRANSFER_SLUGS) {
    // 3. No empty slug
    if (!slug || slug.trim() === "") {
      errors.push("Empty slug found");
    }

    // 4. No slug contains /
    if (slug.includes("/")) {
      errors.push(`Slug cannot contain '/': ${slug}`);
    }

    // 5 & 6. Exists in data and section is personal
    const slugPattern = new RegExp(
      `slug:\\s*["']${slug}["'].*?section:\\s*["']personal["']`,
      "s",
    );
    if (!slugPattern.test(bankingServicesContent)) {
      // Also check if section is personal but it comes before slug in the file
      const slugPatternReverse = new RegExp(
        `section:\\s*["']personal["'].*?slug:\\s*["']${slug}["']`,
        "s",
      );
      if (!slugPatternReverse.test(bankingServicesContent)) {
         errors.push(`Slug ${slug} not found in banking-services.ts under personal section`);
      }
    }

    // 7. Exact registry parity
    if (!LOCALIZED_STATIC_ROUTES.includes(`/personal/${slug}` as any)) {
      errors.push(`Slug ${slug} not mapped in LOCALIZED_STATIC_ROUTES`);
    }

    // 9. No Core Transfer slugs
    if (["local-transfers", "international-transfers", "fast-money-transfers"].includes(slug)) {
      errors.push(`Core Transfer slug found: ${slug}`);
    }

    // 10. No E-Channel compatibility slugs
    if (PERSONAL_E_CHANNEL_COMPATIBILITY_SLUGS.includes(slug as any)) {
      errors.push(`E-Channel compatibility slug found: ${slug}`);
    }

    // 11. No Financing or Remittance slugs
    if (PERSONAL_FINANCING_SLUGS.includes(slug as any)) {
      errors.push(`Financing slug found: ${slug}`);
    }
    if (PERSONAL_REMITTANCE_SLUGS.includes(slug as any)) {
      errors.push(`Remittance slug found: ${slug}`);
    }

    // 14. No Prefix matching in localized routes
    const matchingPrefixes = LOCALIZED_STATIC_ROUTES.filter(route => route.startsWith(`/personal/${slug}/`));
    if (matchingPrefixes.length > 0) {
      errors.push(`Prefix matching found for slug ${slug}`);
    }
  }

  if (errors.length > 0) {
    console.error("Personal Independent Transfers Registry Drift Detected:");
    errors.forEach((e) => console.error(`- ${e}`));
    process.exit(1);
  }

  console.log("✅ Personal Independent Transfers Drift Test Passed");
  process.exit(0);
}

runDriftTest();
