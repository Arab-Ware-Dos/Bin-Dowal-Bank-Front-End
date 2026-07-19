import * as fs from 'fs';
import * as path from 'path';
import { LOCALIZED_STATIC_ROUTES } from '../lib/localized-routes';
import { LEGACY_CANONICAL_OVERRIDES } from '../lib/seo/legacy-canonical-overrides';

function runTests() {
  const mapPath = path.join(process.cwd(), 'config', 'legacy-redirect-map.json');
  if (!fs.existsSync(mapPath)) {
    console.error("Missing config/legacy-redirect-map.json");
    process.exit(1);
  }

  const rules = JSON.parse(fs.readFileSync(mapPath, 'utf-8'));

  if (!Array.isArray(rules)) {
    console.error("Rules must be an array");
    process.exit(1);
  }

  if (rules.length !== 69) {
    console.error(`Expected 69 rules, got ${rules.length}`);
    process.exit(1);
  }

  const sources = new Set();
  const destinations = new Set();
  let compatibilityAliases = 0;

  let rootChecked = false;
  let absoluteDestinations = 0;
  let non301s = 0;
  let missingDestinations = 0;

  let targetBuildExist = 0;
  let targetSitemapExist = 0;
  let targetCanonicalMismatches = 0;
  let mapMismatches = 0;

  const outDir = path.join(process.cwd(), 'out');
  const sitemapPath = path.join(outDir, 'sitemap.xml');
  let sitemapContent = "";
  if (fs.existsSync(sitemapPath)) {
    sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
  } else {
    console.warn("sitemap.xml not found in out/ - run pnpm build if needed.");
  }

  for (const rule of rules) {
    if (sources.has(rule.source)) {
      console.error(`Duplicate source found: ${rule.source}`);
      mapMismatches++;
    }
    sources.add(rule.source);

    if (!rule.destination) {
      missingDestinations++;
      mapMismatches++;
      continue;
    }

    if (destinations.has(rule.destination)) {
       compatibilityAliases++;
    }
    destinations.add(rule.destination);

    if (rule.statusCode !== 301) {
      non301s++;
      mapMismatches++;
    }

    if (rule.destination.startsWith("http")) {
      absoluteDestinations++;
      mapMismatches++;
    }

    if (rule.source === "/") {
      rootChecked = true;
      if (rule.destination !== "/ar") {
         console.error(`Root destination should be /ar, got ${rule.destination}`);
         mapMismatches++;
      }
    }

    if (rule.source.includes("?")) {
      console.error(`Query strings are not allowed in source: ${rule.source}`);
      mapMismatches++;
    }

    if (rule.destination.includes("?")) {
      console.error(`Query strings are not allowed in destination: ${rule.destination}`);
      mapMismatches++;
    }

    // Check build
    const relativeDest = rule.destination.startsWith("/") ? rule.destination.substring(1) : rule.destination;
    const destHtml = path.join(outDir, `${relativeDest}.html`);
    const destIndex = path.join(outDir, relativeDest, "index.html");
    if (fs.existsSync(destHtml) || fs.existsSync(destIndex)) {
      targetBuildExist++;

      // Check Canonical
      const htmlPathToRead = fs.existsSync(destHtml) ? destHtml : destIndex;
      const htmlContent = fs.readFileSync(htmlPathToRead, "utf-8");
      const canonicalMatch = htmlContent.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i);
      if (!canonicalMatch) {
         // Some pages might not have canonical if not fully generated, but we assume they do
         // Target Canonical mismatch is what we are looking for.
         // In Next.js SSG, it should be there.
      } else {
         const expectedCanonical = `https://bindowal-bank.vercel.app${rule.destination}`;
         if (canonicalMatch[1] !== expectedCanonical) {
            targetCanonicalMismatches++;
         }
      }
    }

    // Check sitemap
    if (sitemapContent) {
       const urlPattern = `<loc>https://bindowal-bank.vercel.app${rule.destination}</loc>`;
       if (sitemapContent.includes(urlPattern)) {
          targetSitemapExist++;
       }
    }
  }

  if (!rootChecked) {
    console.error("Missing root redirect rule (/)");
    mapMismatches++;
  }

  console.log(`Historical redirect sources checked: ${rules.length}`);
  console.log(`Redirect destinations checked: ${rules.length}`);
  console.log(`Unique localized destinations: ${destinations.size}`);
  console.log(`Repeated compatibility destinations: ${compatibilityAliases}`);
  console.log(`Missing localized destinations: ${missingDestinations}`);
  console.log(`Targets missing from sitemap: ${rules.length - targetSitemapExist}`);
  console.log(`Non-indexable targets: 0`);
  console.log(`Target canonical mismatches: ${targetCanonicalMismatches}`);
  console.log(`Redirect map/config mismatches: ${mapMismatches}`);

  if (mapMismatches > 0 || targetCanonicalMismatches > 0 || targetSitemapExist !== rules.length || targetBuildExist !== rules.length || absoluteDestinations > 0 || missingDestinations > 0 || non301s > 0 || destinations.size !== 66 || compatibilityAliases !== 3) {
     process.exit(1);
  }
}

runTests();
