import fs from "fs";
import path from "path";

const sitemapPath = path.join(process.cwd(), "out", "sitemap.xml");

if (!fs.existsSync(sitemapPath)) {
  console.error("❌ sitemap.xml not found in out directory.");
  process.exit(1);
}

const content = fs.readFileSync(sitemapPath, "utf-8");

// XML Validation basics
if (!content.trim().startsWith("<?xml")) {
  console.error("❌ Missing XML declaration");
  process.exit(1);
}

if (!content.includes("<urlset") || !content.includes("</urlset>")) {
  console.error("❌ Root element <urlset> not found");
  process.exit(1);
}

// Ensure XHTML namespace is present
if (!content.includes('xmlns:xhtml="http://www.w3.org/1999/xhtml"')) {
  console.error("❌ xmlns:xhtml namespace missing or incorrect");
  process.exit(1);
}

let arEntries = 0;
let enEntries = 0;
let legacyEntries = 0;
let proofEntries = 0;
let frameworkEntries = 0;
let metadataEndpointEntries = 0;
let duplicateLoc = 0;
let missingArAlternates = 0;
let missingEnAlternates = 0;
let xDefaultEntries = 0;
let invalidDomain = 0;
let queryStrings = 0;
let hashes = 0;
let doubleSlashes = 0;
let fabricatedLastMod = 0;
let noindexFoundInHtml = 0;
let canonicalMismatches = 0;
let hreflangMismatches = 0;
let totalUrls = 0;

const seenLocs = new Set<string>();
const SITE_URL = "https://bindowal-bank.vercel.app";

const urlBlocks = content.split("</url>").filter(block => block.includes("<url>"));
totalUrls = urlBlocks.length;

for (const block of urlBlocks) {
  const locMatch = block.match(/<loc>(.*?)<\/loc>/);
  if (!locMatch) continue;
  
  const loc = locMatch[1].trim();
  const lastModMatch = block.match(/<lastmod>(.*?)<\/lastmod>/);
  const lastMod = lastModMatch ? lastModMatch[1].trim() : null;

  if (seenLocs.has(loc)) {
    duplicateLoc++;
  }
  seenLocs.add(loc);

  let urlObj;
  try {
    urlObj = new URL(loc);
  } catch {
    invalidDomain++;
    continue;
  }

  if (urlObj.origin !== SITE_URL) {
    invalidDomain++;
  }
  if (urlObj.search) {
    queryStrings++;
  }
  if (urlObj.hash) {
    hashes++;
  }
  if (urlObj.pathname.includes("//")) {
    doubleSlashes++;
  }

  const pathname = urlObj.pathname;

  if (pathname.startsWith("/ar/") || pathname === "/ar") {
    arEntries++;
  } else if (pathname.startsWith("/en/") || pathname === "/en") {
    enEntries++;
  } else if (pathname === "/sitemap.xml" || pathname === "/robots.txt") {
    metadataEndpointEntries++;
  } else {
    legacyEntries++;
  }

  if (pathname.includes("root-proof") || pathname.includes("i18n-poc")) {
    proofEntries++;
  }

  if (pathname.includes("_not-found") || pathname.includes("_global-error") || pathname.includes("404")) {
    frameworkEntries++;
  }

  let hasAr = false;
  let hasEn = false;

  const alternateMatches = [...block.matchAll(/<xhtml:link[^>]+>/g)];
  for (const altMatch of alternateMatches) {
    const altTag = altMatch[0];
    const hreflangMatch = altTag.match(/hreflang="([^"]+)"/);
    const hrefMatch = altTag.match(/href="([^"]+)"/);
    
    if (!hreflangMatch || !hrefMatch) continue;

    const hreflang = hreflangMatch[1];
    const href = hrefMatch[1];

    if (hreflang === "ar") hasAr = true;
    if (hreflang === "en") hasEn = true;
    if (hreflang === "x-default") xDefaultEntries++;
    
    // Test HTML correlation
    if (hreflang === "ar" || hreflang === "en") {
       let htmlPath = "";
       try {
         const altUrlObj = new URL(href);
         htmlPath = path.join(process.cwd(), "out", altUrlObj.pathname + ".html");
         if (altUrlObj.pathname === "/") {
            htmlPath = path.join(process.cwd(), "out", "index.html");
         }
       } catch {}

       if (fs.existsSync(htmlPath)) {
         const htmlContent = fs.readFileSync(htmlPath, "utf-8");
         
         let htmlCanonical = null;
         let htmlHreflang = null;
         let robotsMeta = null;

         const linkRegex = /<link[^>]+>/gi;
         let match;
         while ((match = linkRegex.exec(htmlContent)) !== null) {
           const linkTag = match[0];
           const relMatch = linkTag.match(/rel=["']([^"']+)["']/i);
           const hrefMatch = linkTag.match(/href=["']([^"']+)["']/i);
           const hreflangMatch = linkTag.match(/hreflang=["']([^"']+)["']/i);

           if (relMatch && hrefMatch) {
             const rel = relMatch[1].toLowerCase();
             if (rel === "canonical") {
               htmlCanonical = hrefMatch[1];
             }
             if (rel === "alternate" && hreflangMatch && hreflangMatch[1].toLowerCase() === hreflang) {
               htmlHreflang = hrefMatch[1];
             }
           }
         }
         
         const robotsRegex = /<meta[^>]+>/gi;
         let metaMatch;
         while ((metaMatch = robotsRegex.exec(htmlContent)) !== null) {
           const metaTag = metaMatch[0];
           const nameMatch = metaTag.match(/name=["']robots["']/i);
           const contentMatch = metaTag.match(/content=["']([^"']+)["']/i);
           if (nameMatch && contentMatch) {
             robotsMeta = contentMatch[1];
           }
         }

         if (robotsMeta && robotsMeta.includes("noindex")) {
           noindexFoundInHtml++;
         }

         if (htmlCanonical !== href) {
           canonicalMismatches++;
         }
         
         if (htmlHreflang !== href) {
           hreflangMismatches++;
         }
       }
    }
  }

  if (!hasAr) missingArAlternates++;
  if (!hasEn) missingEnAlternates++;

  if (lastMod && pathname.includes("/about")) {
     fabricatedLastMod++;
  }
}

let errors = 0;

console.log(`Total URLs: ${totalUrls}`);
console.log(`AR Entries: ${arEntries}`);
console.log(`EN Entries: ${enEntries}`);

if (totalUrls !== 132) {
  console.error(`❌ Total URLs is ${totalUrls}, expected 132`);
  errors++;
}
if (arEntries !== 66) {
  console.error(`❌ AR Entries is ${arEntries}, expected 66`);
  errors++;
}
if (enEntries !== 66) {
  console.error(`❌ EN Entries is ${enEntries}, expected 66`);
  errors++;
}
if (legacyEntries > 0) {
  console.error(`❌ Legacy Entries found: ${legacyEntries}, expected 0`);
  errors++;
}
if (proofEntries > 0) {
  console.error(`❌ Proof Entries found: ${proofEntries}, expected 0`);
  errors++;
}
if (frameworkEntries > 0) {
  console.error(`❌ Framework Entries found: ${frameworkEntries}, expected 0`);
  errors++;
}
if (metadataEndpointEntries > 0) {
  console.error(`❌ Metadata Endpoint Entries found in sitemap: ${metadataEndpointEntries}, expected 0`);
  errors++;
}
if (duplicateLoc > 0) {
  console.error(`❌ Duplicate <loc> values found: ${duplicateLoc}, expected 0`);
  errors++;
}
if (missingArAlternates > 0) {
  console.error(`❌ Missing AR alternates: ${missingArAlternates}, expected 0`);
  errors++;
}
if (missingEnAlternates > 0) {
  console.error(`❌ Missing EN alternates: ${missingEnAlternates}, expected 0`);
  errors++;
}
if (xDefaultEntries > 0) {
  console.error(`❌ x-default entries found: ${xDefaultEntries}, expected 0`);
  errors++;
}
if (invalidDomain > 0) {
  console.error(`❌ Invalid Domain URLs: ${invalidDomain}, expected 0`);
  errors++;
}
if (queryStrings > 0) {
  console.error(`❌ Query strings found: ${queryStrings}, expected 0`);
  errors++;
}
if (hashes > 0) {
  console.error(`❌ Hashes found: ${hashes}, expected 0`);
  errors++;
}
if (doubleSlashes > 0) {
  console.error(`❌ Double slashes found: ${doubleSlashes}, expected 0`);
  errors++;
}
if (fabricatedLastMod > 0) {
  console.error(`❌ Fabricated lastModified patterns detected: ${fabricatedLastMod}, expected 0`);
  errors++;
}
if (noindexFoundInHtml > 0) {
  console.error(`❌ Sitemap entries matched with noindex HTML pages: ${noindexFoundInHtml}, expected 0`);
  errors++;
}
if (canonicalMismatches > 0) {
  console.error(`❌ Sitemap canonical mismatches (Sitemap alternate != HTML canonical): ${canonicalMismatches}, expected 0`);
  errors++;
}
if (hreflangMismatches > 0) {
  console.error(`❌ Sitemap hreflang mismatches (Sitemap alternate != HTML hreflang): ${hreflangMismatches}, expected 0`);
  errors++;
}

if (errors > 0) {
  console.error("❌ Production Sitemap Drift Test FAILED.");
  process.exit(1);
}

console.log("✅ Production Sitemap Drift Test PASSED.");
