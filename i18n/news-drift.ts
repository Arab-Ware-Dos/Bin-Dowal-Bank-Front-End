import { newsItems } from "../data/news";
import { NEWS_SLUGS } from "../lib/news-routes";
import { LOCALIZED_STATIC_ROUTES } from "../lib/localized-routes";

function runDriftTest() {
  console.log("Running News Registry/Data Drift Test...");

  let hasError = false;

  // 1. Number of slugs in data/news.ts equals 4.
  if (newsItems.length !== 4) {
    console.error(`❌ Expected 4 news items, found ${newsItems.length}`);
    hasError = true;
  }

  // 2. All slugs are unique.
  const slugsInData = newsItems.map(n => n.slug);
  const uniqueSlugsInData = new Set(slugsInData);
  if (slugsInData.length !== uniqueSlugsInData.size) {
    console.error("❌ Slugs in data/news.ts are not unique");
    hasError = true;
  }

  // 3. For each slug, there is an exact route registered.
  for (const item of newsItems) {
    const expectedRoute = `/news/${item.slug}`;
    if (!LOCALIZED_STATIC_ROUTES.includes(expectedRoute as any)) {
      console.error(`❌ Missing localized route for slug: ${item.slug}`);
      hasError = true;
    }
    if (!NEWS_SLUGS.includes(item.slug as any)) {
      console.error(`❌ Missing slug in NEWS_SLUGS for: ${item.slug}`);
      hasError = true;
    }
  }

  // 4. No News detail route is registered without a corresponding slug.
  const registeredNewsRoutes = LOCALIZED_STATIC_ROUTES.filter(route => route.startsWith("/news/") && (route as string) !== "/news/unknown");
  for (const route of registeredNewsRoutes) {
    const slug = route.replace("/news/", "");
    if (!slugsInData.includes(slug)) {
      console.error(`❌ Registered route ${route} has no corresponding slug in data/news.ts`);
      hasError = true;
    }
  }

  // 5. No empty slug.
  if (slugsInData.some(slug => !slug || slug.trim() === "")) {
    console.error("❌ Found empty slug in data/news.ts");
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

  if (hasError) {
    console.error("❌ News Drift Test Failed");
    process.exit(1);
  }

  console.log("✅ News Drift Test Passed");
}

runDriftTest();
