import { bankingServicesData } from "../data/banking-services/banking-services";
import { ACCOUNT_SLUGS } from "../lib/account-routes";
import { LOCALIZED_STATIC_ROUTES } from "../lib/localized-routes";

function runDriftTest() {
  console.log("Running Accounts Registry/Data Drift Test...");

  let hasError = false;

  const accountData = bankingServicesData.filter(service => service.section === "accounts");

  // 1. Number of account slugs in data equals 4.
  if (accountData.length !== 4) {
    console.error(`❌ Expected 4 account items, found ${accountData.length}`);
    hasError = true;
  }

  // 2. All slugs are unique.
  const slugsInData = accountData.map(n => n.slug);
  const uniqueSlugsInData = new Set(slugsInData);
  if (slugsInData.length !== uniqueSlugsInData.size) {
    console.error("❌ Slugs in banking-services.ts (accounts) are not unique");
    hasError = true;
  }

  // 3. For each slug, there is an exact route registered.
  for (const item of accountData) {
    const expectedRoute = `/accounts/${item.slug}`;
    if (!LOCALIZED_STATIC_ROUTES.includes(expectedRoute as any)) {
      console.error(`❌ Missing localized route for slug: ${item.slug}`);
      hasError = true;
    }
    if (!ACCOUNT_SLUGS.includes(item.slug as any)) {
      console.error(`❌ Missing slug in ACCOUNT_SLUGS for: ${item.slug}`);
      hasError = true;
    }
  }

  // 4. No Accounts detail route is registered without a corresponding slug.
  const registeredAccountsRoutes = LOCALIZED_STATIC_ROUTES.filter(route => route.startsWith("/accounts/") && (route as string) !== "/accounts/unknown");
  for (const route of registeredAccountsRoutes) {
    const slug = route.replace("/accounts/", "");
    if (!slugsInData.includes(slug)) {
      console.error(`❌ Registered route ${route} has no corresponding slug in banking-services.ts`);
      hasError = true;
    }
  }

  // 5. No empty slug.
  if (slugsInData.some(slug => !slug || slug.trim() === "")) {
    console.error("❌ Found empty slug in data");
    hasError = true;
  }

  // 6. No slug starts or ends with a slash.
  if (slugsInData.some(slug => slug.startsWith("/") || slug.endsWith("/"))) {
    console.error("❌ Found slug starting or ending with a slash");
    hasError = true;
  }

  // 7. No slug contains a slash.
  if (slugsInData.some(slug => slug.includes("/"))) {
    console.error("❌ Found slug containing a slash");
    hasError = true;
  }
  
  // 8. No e-services slugs in account registry
  const eServicesData = bankingServicesData.filter(service => service.section === "e-services");
  const eServicesSlugs = eServicesData.map(n => n.slug);
  if (eServicesSlugs.some(slug => ACCOUNT_SLUGS.includes(slug as any))) {
      console.error("❌ Found e-services slug in ACCOUNT_SLUGS");
      hasError = true;
  }

  if (hasError) {
    console.error("❌ Accounts Drift Test Failed");
    process.exit(1);
  }

  console.log("✅ Accounts Drift Test Passed");
}

runDriftTest();
