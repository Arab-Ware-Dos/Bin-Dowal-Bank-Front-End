import { navigationData } from "../data/navigation";
import { LOCALIZED_STATIC_ROUTES } from "../lib/localized-routes";

let passedCount = 0;
let failedCount = 0;

function assert(condition: boolean, message: string) {
  if (condition) {
    passedCount++;
    console.log(`[PASS] ${message}`);
  } else {
    failedCount++;
    console.error(`[FAIL] ${message}`);
  }
}

console.log("Starting Navigation Integrity Drift Tests (Batch 18B)...\n");

const allLinks: string[] = [];

navigationData.forEach((nav) => {
  if (nav.href) allLinks.push(nav.href);
  if (nav.imageLink) allLinks.push(nav.imageLink);

  nav.singleLinks?.forEach((link) => {
    if (link.href) allLinks.push(link.href);
  });

  nav.groups?.forEach((group) => {
    group.links?.forEach((link) => {
      if (link.href) allLinks.push(link.href);
    });
  });
});

// 1. No top-level href is empty
const hasEmptyHref = navigationData.some((nav) => nav.href === "");
assert(!hasEmptyHref, "No top-level href should be empty");

// 2. No active links to /personal, /business, /e-services, /digital
const legacyInvalidRoutes = ["/personal", "/business", "/e-services", "/digital"];
const hasLegacyInvalidRoutes = allLinks.some((link) => 
  legacyInvalidRoutes.includes(link.split("#")[0])
);
assert(!hasLegacyInvalidRoutes, "No active links to /personal, /business, /e-services, or /digital");

// 3. Ensure required hubs exist
const requiredHubs = ["/personal-banking", "/business-banking", "/digital-channels", "/specialized-services", "/knowledge"];
requiredHubs.forEach((hub) => {
  const exists = navigationData.some((nav) => nav.href === hub);
  assert(exists, `Hub ${hub} must exist as a top-level href in navigationData`);
});

// 4. /specialized-services and /knowledge in LOCALIZED_STATIC_ROUTES
assert(LOCALIZED_STATIC_ROUTES.includes("/specialized-services"), "/specialized-services is registered in LOCALIZED_STATIC_ROUTES");
assert(LOCALIZED_STATIC_ROUTES.includes("/knowledge"), "/knowledge is registered in LOCALIZED_STATIC_ROUTES");

// 5. No active links to deferred knowledge items
const deferredKnowledge = ["/knowledge#guides", "/knowledge#videos", "/knowledge#awareness"];
const hasDeferredKnowledge = allLinks.some((link) => deferredKnowledge.includes(link));
assert(!hasDeferredKnowledge, "No active links to deferred knowledge sections");

// 6. No href="#"
const hasHashOnly = allLinks.some((link) => link === "#");
assert(!hasHashOnly, 'No href="#" allowed');

// 7. No old /business hashes (since they should use /business-banking if they exist)
const hasOldBusinessHashes = allLinks.some((link) => link.startsWith("/business#"));
assert(!hasOldBusinessHashes, "No /business# hashes allowed");

console.log(`\nTests completed: ${passedCount} passed, ${failedCount} failed.`);
if (failedCount > 0) {
  process.exit(1);
}
