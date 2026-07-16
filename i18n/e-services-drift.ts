import { bankingServicesData } from "../data/banking-services/banking-services";
import { E_SERVICE_SLUGS } from "../lib/e-service-routes";
import { LOCALIZED_STATIC_ROUTES } from "../lib/localized-routes";
import { ACCOUNT_SLUGS } from "../lib/account-routes";

function runDriftTest() {
  console.log("Running E-Services Registry/Data Drift Test...");

  let hasError = false;

  const eServicesData = bankingServicesData.filter(service => service.section === "e-services");

  // 1. Number of e-service slugs in data equals 4.
  if (eServicesData.length !== 4) {
    console.error(`❌ Expected 4 e-services items, found ${eServicesData.length}`);
    hasError = true;
  }

  // 2. All slugs are unique.
  const slugsInData = eServicesData.map(n => n.slug);
  const uniqueSlugsInData = new Set(slugsInData);
  if (slugsInData.length !== uniqueSlugsInData.size) {
    console.error("❌ Slugs in banking-services.ts (e-services) are not unique");
    hasError = true;
  }

  // 3. No empty slug.
  if (slugsInData.some(slug => !slug || slug.trim() === "")) {
    console.error("❌ Found empty slug in data");
    hasError = true;
  }

  // 4. No slug contains a slash.
  if (slugsInData.some(slug => slug.includes("/"))) {
    console.error("❌ Found slug containing a slash");
    hasError = true;
  }

  // 5. No slug starts or ends with a slash.
  if (slugsInData.some(slug => slug.startsWith("/") || slug.endsWith("/"))) {
    console.error("❌ Found slug starting or ending with a slash");
    hasError = true;
  }

  // 6. All slugs exist in static data. (By definition they do, but we ensure our constants match)
  // 7. For each slug, there is an exact route registered.
  for (const item of eServicesData) {
    const expectedRoute = `/e-services/${item.slug}`;
    if (!LOCALIZED_STATIC_ROUTES.includes(expectedRoute as any)) {
      console.error(`❌ Missing localized route for slug: ${item.slug}`);
      hasError = true;
    }
    if (!E_SERVICE_SLUGS.includes(item.slug as any)) {
      console.error(`❌ Missing slug in E_SERVICE_SLUGS for: ${item.slug}`);
      hasError = true;
    }
  }

  // 8. No E-Services detail route is registered without a corresponding slug.
  const registeredRoutes = LOCALIZED_STATIC_ROUTES.filter(route => route.startsWith("/e-services/") && (route as string) !== "/e-services/unknown");
  for (const route of registeredRoutes) {
    const slug = route.replace("/e-services/", "");
    if (!slugsInData.includes(slug)) {
      console.error(`❌ Registered route ${route} has no corresponding slug in banking-services.ts`);
      hasError = true;
    }
  }

  // 9. No Account slug inside E-Service registry.
  if (E_SERVICE_SLUGS.some(slug => ACCOUNT_SLUGS.includes(slug as any))) {
      console.error("❌ Found account slug in E_SERVICE_SLUGS");
      hasError = true;
  }

  // 10. bindawal-business is not present.
  if (slugsInData.includes("bindawal-business") || E_SERVICE_SLUGS.includes("bindawal-business" as any)) {
    console.error("❌ bindawal-business is incorrectly present in slugs");
    hasError = true;
  }

  // 11. internet-banking is present.
  if (!slugsInData.includes("internet-banking") || !E_SERVICE_SLUGS.includes("internet-banking" as any)) {
    console.error("❌ internet-banking is missing from slugs");
    hasError = true;
  }

  // 12. Data and Registry match is implicitly tested by 6, 7 and 8.

  if (hasError) {
    console.error("❌ E-Services Drift Test Failed");
    process.exit(1);
  }

  console.log("✅ E-Services Drift Test Passed");
}

runDriftTest();
