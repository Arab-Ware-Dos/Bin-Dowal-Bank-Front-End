import { readFileSync } from "fs";
import { join } from "path";
import { PERSONAL_CORE_TRANSFER_SLUGS } from "../lib/personal-core-transfer-routes";
import { LOCALIZED_STATIC_ROUTES } from "../lib/localized-routes";
import { PERSONAL_FINANCING_SLUGS } from "../lib/personal-financing-routes";
import { PERSONAL_REMITTANCE_SLUGS } from "../lib/personal-remittance-routes";
import { PERSONAL_E_CHANNEL_COMPATIBILITY_SLUGS } from "../lib/personal-e-channel-compatibility";
import { PERSONAL_INDEPENDENT_TRANSFER_SLUGS } from "../lib/personal-independent-transfer-routes";
import { coreTransferServicesData } from "../data/personal-transfers/core-transfer-services";

const bankingServicesPath = join(
  process.cwd(),
  "data",
  "banking-services",
  "banking-services.ts",
);
const bankingServicesContent = readFileSync(bankingServicesPath, "utf-8");

const serverPagePath = join(
  process.cwd(),
  "components",
  "personal",
  "transfers",
  "transfer-service-page.tsx",
);
const serverPageContent = readFileSync(serverPagePath, "utf-8");

const localTransfersPath = join(
  process.cwd(),
  "data",
  "personal-transfers",
  "local-transfers.ts",
);
const localTransfersContent = readFileSync(localTransfersPath, "utf-8");

const accessorPath = join(
  process.cwd(),
  "data",
  "personal-transfers",
  "core-transfer-services.ts",
);
const accessorContent = readFileSync(accessorPath, "utf-8");

function runDriftTest() {
  const errors: string[] = [];

  if (PERSONAL_CORE_TRANSFER_SLUGS.length !== 3) {
    errors.push(
      `Expected 3 slugs, found ${PERSONAL_CORE_TRANSFER_SLUGS.length}`,
    );
  }

  const recordKeys = Object.keys(coreTransferServicesData);
  if (recordKeys.length !== 3 || !PERSONAL_CORE_TRANSFER_SLUGS.every(s => recordKeys.includes(s))) {
    errors.push("Registry and Data Record do not match perfectly.");
  }

  if (accessorContent.includes("undefined")) {
    errors.push("Accessor or Data Record contains undefined fallback.");
  }

  if (localTransfersContent.includes("lucide-react") || localTransfersContent.match(/icon:\s*[A-Z]/)) {
    errors.push("Components found in Data. Use string icon keys.");
  }

  if (serverPageContent.match(/[\u0600-\u06FF]/)) {
    errors.push("Hardcoded Arabic found in UI components.");
  }

  if (serverPageContent.includes("_local-transfers")) {
    errors.push("Private folder imports found.");
  }

  if (serverPageContent.includes(" as any") || accessorContent.includes(" as any")) {
    errors.push("Found 'any' cast.");
  }
  if (serverPageContent.includes("service!")) {
    errors.push("Found 'service!' cast.");
  }

  let localizedCount = 0;

  for (const slug of PERSONAL_CORE_TRANSFER_SLUGS) {
    if (!slug || slug.trim() === "") {
      errors.push("Empty slug found");
    }

    if (slug.includes("/")) {
      errors.push(`Slug cannot contain '/': ${slug}`);
    }

    const slugPattern = new RegExp(
      `slug:\\s*["']${slug}["'].*?section:\\s*["']personal["']`,
      "s",
    );
    if (!slugPattern.test(bankingServicesContent)) {
      const slugPatternReverse = new RegExp(
        `section:\\s*["']personal["'].*?slug:\\s*["']${slug}["']`,
        "s",
      );
      if (!slugPatternReverse.test(bankingServicesContent)) {
         errors.push(`Slug ${slug} not found in banking-services.ts under personal section`);
      }
    }

    // Must BE IN LOCALIZED_STATIC_ROUTES
    if (!LOCALIZED_STATIC_ROUTES.includes(`/personal/${slug}` as any)) {
      errors.push(`Slug ${slug} is NOT mapped in LOCALIZED_STATIC_ROUTES`);
    } else {
      localizedCount++;
    }

    if (PERSONAL_INDEPENDENT_TRANSFER_SLUGS.includes(slug as any)) {
      errors.push(`Independent Transfer slug collision found: ${slug}`);
    }

    if (PERSONAL_E_CHANNEL_COMPATIBILITY_SLUGS.includes(slug as any)) {
      errors.push(`E-Channel compatibility collision found: ${slug}`);
    }

    if (PERSONAL_FINANCING_SLUGS.includes(slug as any)) {
      errors.push(`Financing slug collision found: ${slug}`);
    }
    if (PERSONAL_REMITTANCE_SLUGS.includes(slug as any)) {
      errors.push(`Remittance slug collision found: ${slug}`);
    }
  }

  if (localizedCount !== 3) {
    errors.push(`Expected 3 localized routes mapped, found ${localizedCount}`);
  }

  // Ensure LOCALIZED_STATIC_ROUTES does not contain e-channel dupes
  for (const slug of PERSONAL_E_CHANNEL_COMPATIBILITY_SLUGS) {
    if (LOCALIZED_STATIC_ROUTES.includes(`/personal/${slug}` as any)) {
      errors.push(`E-Channel localized duplicate found: /personal/${slug}`);
    }
  }

  if (errors.length > 0) {
    console.error("Personal Core Transfers Localization Drift Detected:");
    errors.forEach((e) => console.error(`- ${e}`));
    process.exit(1);
  }

  console.log("✅ Personal Core Transfers Localization Drift Test Passed");
  process.exit(0);
}

runDriftTest();
