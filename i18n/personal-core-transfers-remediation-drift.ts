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

  // 1. Count = 3
  if (PERSONAL_CORE_TRANSFER_SLUGS.length !== 3) {
    errors.push(
      `Expected 3 slugs, found ${PERSONAL_CORE_TRANSFER_SLUGS.length}`,
    );
  }

  // 2. Data Record يحتوي 3 مفاتيح مطابقة
  const recordKeys = Object.keys(coreTransferServicesData);
  if (recordKeys.length !== 3 || !PERSONAL_CORE_TRANSFER_SLUGS.every(s => recordKeys.includes(s))) {
    errors.push("Registry and Data Record do not match perfectly.");
  }

  // 3. Accessor لا يعيد undefined
  if (accessorContent.includes("undefined")) {
    errors.push("Accessor or Data Record contains undefined fallback.");
  }

  // 4. AR/EN مكتملة (Checked implicitly by type system and data record validation)

  // 5. لا Components داخل Data & 6. Icon fields نصية
  if (localTransfersContent.includes("lucide-react") || localTransfersContent.match(/icon:\s*[A-Z]/)) {
    errors.push("Components found in Data. Use string icon keys.");
  }

  // 7. لا Hardcoded UI labels
  if (serverPageContent.match(/[\u0600-\u06FF]/)) {
    errors.push("Hardcoded Arabic found in UI components.");
  }

  // 11. لا Private folder imports
  if (serverPageContent.includes("_local-transfers")) {
    errors.push("Private folder imports found.");
  }

  // 13, 14, 15
  if (serverPageContent.includes(" as any") || accessorContent.includes(" as any")) {
    errors.push("Found 'any' cast.");
  }
  if (serverPageContent.includes("service!")) {
    errors.push("Found 'service!' cast.");
  }
  if (serverPageContent.includes("@ts-ignore")) {
    errors.push("Found '@ts-ignore'.");
  }

  // Verify generic requirements
  for (const slug of PERSONAL_CORE_TRANSFER_SLUGS) {
    // 4. No empty slug
    if (!slug || slug.trim() === "") {
      errors.push("Empty slug found");
    }

    // 5. No slug contains /
    if (slug.includes("/")) {
      errors.push(`Slug cannot contain '/': ${slug}`);
    }

    // 6. Exists in generic banking services (Strategy A Preservation)
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

    // 7. Should NOT be in LOCALIZED_STATIC_ROUTES (Remediation phase before localization)
    if (LOCALIZED_STATIC_ROUTES.includes(`/personal/${slug}` as any)) {
      errors.push(`Slug ${slug} is prematurely mapped in LOCALIZED_STATIC_ROUTES`);
    }

    // 8. No collision with Independent Personal Transfers
    if (PERSONAL_INDEPENDENT_TRANSFER_SLUGS.includes(slug as any)) {
      errors.push(`Independent Transfer slug collision found: ${slug}`);
    }

    // 9. No E-Channel compatibility slugs
    if (PERSONAL_E_CHANNEL_COMPATIBILITY_SLUGS.includes(slug as any)) {
      errors.push(`E-Channel compatibility collision found: ${slug}`);
    }

    // 10. No Financing or Remittance slugs
    if (PERSONAL_FINANCING_SLUGS.includes(slug as any)) {
      errors.push(`Financing slug collision found: ${slug}`);
    }
    if (PERSONAL_REMITTANCE_SLUGS.includes(slug as any)) {
      errors.push(`Remittance slug collision found: ${slug}`);
    }
  }

  if (errors.length > 0) {
    console.error("Personal Core Transfers Remediation Drift Detected:");
    errors.forEach((e) => console.error(`- ${e}`));
    process.exit(1);
  }

  console.log("✅ Personal Core Transfers Remediation Drift Test Passed");
  process.exit(0);
}

runDriftTest();
