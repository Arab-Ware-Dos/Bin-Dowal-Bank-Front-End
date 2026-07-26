import fs from "fs";
import path from "path";
import { SITE_URL } from "../lib/seo/site-config";
import { LEGACY_CANONICAL_OVERRIDES } from "../lib/seo/legacy-canonical-overrides";
import { EXPECTED_PRODUCTION_ROUTE_FAMILIES } from "../lib/seo/production-route-expectations";

const OUT_DIR = path.resolve(process.cwd(), "out");

let missingCanonical = 0;
let incorrectLocalizedCanonical = 0;
let incorrectLegacyCanonical = 0;
let missingArAlternate = 0;
let missingEnAlternate = 0;
let reciprocityErrors = 0;
let compatibilityMappingErrors = 0;
let duplicateCanonicalTags = 0;
let duplicateHreflangTags = 0;
let invalidDomainUrls = 0;
let previewDomainReferences = 0;
let proofRoutesExposingAlternates = 0;

function checkDomain(url: string) {
  if (url.includes("bdbankui.arabwaredos.com") || url.includes("arabwaredos.com")) {
    previewDomainReferences++;
  }
  if (!url.startsWith(SITE_URL + "/") && url !== SITE_URL) {
    invalidDomainUrls++;
    console.error(`Invalid domain URL: ${url}`);
  }
}

function parseLinks(html: string) {
  const links = {
    canonical: [] as string[],
    ar: [] as string[],
    en: [] as string[]
  };
  
  const linkRegex = /<link[^>]+>/gi;
  let match;
  while ((match = linkRegex.exec(html)) !== null) {
    const link = match[0];
    const relMatch = link.match(/rel=["']([^"']+)["']/i);
    const hrefMatch = link.match(/href=["']([^"']+)["']/i);
    const hreflangMatch = link.match(/hreflang=["']([^"']+)["']/i);
    
    if (relMatch && hrefMatch) {
      const rel = relMatch[1].toLowerCase();
      const href = hrefMatch[1];
      
      if (rel === 'canonical') {
        links.canonical.push(href);
      } else if (rel === 'alternate' && hreflangMatch) {
        const lang = hreflangMatch[1].toLowerCase();
        if (lang === 'ar') links.ar.push(href);
        if (lang === 'en') links.en.push(href);
      }
    }
  }
  return links;
}

function validateRoute(absolutePath: string, routeName: string, type: "ar" | "en" | "legacy" | "proof") {
  const html = fs.readFileSync(absolutePath, 'utf8');
  const links = parseLinks(html);

  if (type === "proof") {
    if (links.canonical.length > 0 || links.ar.length > 0 || links.en.length > 0) {
      proofRoutesExposingAlternates++;
      console.error(`Proof route exposing alternates: ${routeName}`);
    }
    return;
  }

  if (links.canonical.length === 0) missingCanonical++;
  if (links.canonical.length > 1) duplicateCanonicalTags++;
  if (links.ar.length === 0) missingArAlternate++;
  if (links.ar.length > 1) duplicateHreflangTags++;
  if (links.en.length === 0) missingEnAlternate++;
  if (links.en.length > 1) duplicateHreflangTags++;

  const canonicalUrl = links.canonical[0] || "";
  const arAlternateUrl = links.ar[0] || "";
  const enAlternateUrl = links.en[0] || "";

  if (canonicalUrl) checkDomain(canonicalUrl);
  if (arAlternateUrl) checkDomain(arAlternateUrl);
  if (enAlternateUrl) checkDomain(enAlternateUrl);

  // Reciprocity
  if (arAlternateUrl && enAlternateUrl) {
     const arUrlParsed = arAlternateUrl.replace(SITE_URL, "");
     const enUrlParsed = enAlternateUrl.replace(SITE_URL, "");
     if (!arUrlParsed.startsWith("/ar") || !enUrlParsed.startsWith("/en")) {
       reciprocityErrors++;
       console.error(`Reciprocity error on ${routeName}: ar=${arAlternateUrl}, en=${enAlternateUrl}`);
     }
  }

  const expectedFamilyPath = routeName.replace(/^\/(ar|en)(\/|$)/, '/').replace(/\/$/, '') || '/';

  if (type === "ar" || type === "en") {
    const expectedCanonical = `${SITE_URL}${routeName === '/' ? '' : routeName}`;
    if (canonicalUrl !== expectedCanonical && canonicalUrl !== `${SITE_URL}${routeName}/`) { 
      incorrectLocalizedCanonical++;
      console.error(`Incorrect localized canonical on ${routeName}. Expected: ${expectedCanonical}, Found: ${canonicalUrl}`);
    }
  } else if (type === "legacy") {
    let expectedCanonicalPath = `/ar${expectedFamilyPath === '/' ? '' : expectedFamilyPath}`;
    
    if (expectedFamilyPath in LEGACY_CANONICAL_OVERRIDES) {
      expectedCanonicalPath = `/ar${LEGACY_CANONICAL_OVERRIDES[expectedFamilyPath as keyof typeof LEGACY_CANONICAL_OVERRIDES]}`;
      
      const expectedArAlternate = `${SITE_URL}${expectedCanonicalPath}`;
      const expectedEnAlternate = `${SITE_URL}/en${LEGACY_CANONICAL_OVERRIDES[expectedFamilyPath as keyof typeof LEGACY_CANONICAL_OVERRIDES]}`;
      
      if (arAlternateUrl !== expectedArAlternate || enAlternateUrl !== expectedEnAlternate) {
        compatibilityMappingErrors++;
        console.error(`Compatibility mapping error on ${routeName}. Expected AR: ${expectedArAlternate}, EN: ${expectedEnAlternate}. Found AR: ${arAlternateUrl}, EN: ${enAlternateUrl}`);
      }
    }
    
    const expectedCanonical = `${SITE_URL}${expectedCanonicalPath}`;
    if (canonicalUrl !== expectedCanonical) {
      incorrectLegacyCanonical++;
      console.error(`Incorrect legacy canonical on ${routeName}. Expected: ${expectedCanonical}, Found: ${canonicalUrl}`);
    }
  }
}

function runDriftTest() {
    console.log('Starting Production SEO Alternates Drift Test...');

    if (!fs.existsSync(OUT_DIR)) {
        console.error('❌ FAILED: out/ directory not found. Please run "pnpm run build" first.');
        process.exit(1);
    }

    function getAllHtmlFiles(dir: string, fileList: string[] = []): string[] {
        if (!fs.existsSync(dir)) return fileList;
        const files = fs.readdirSync(dir);
        for (const file of files) {
            const stat = fs.statSync(path.join(dir, file));
            if (stat.isDirectory()) {
                getAllHtmlFiles(path.join(dir, file), fileList);
            } else if (file.endsWith('.html') && !file.match(/404|500/)) {
                fileList.push(path.join(dir, file));
            }
        }
        return fileList;
    }

    const arFilesDir = getAllHtmlFiles(path.join(OUT_DIR, 'ar')).filter(f => !f.includes('root-proof.html') && !f.includes('i18n-poc'));
    const enFilesDir = getAllHtmlFiles(path.join(OUT_DIR, 'en')).filter(f => !f.includes('root-proof.html') && !f.includes('i18n-poc'));

    const arFiles = [...arFilesDir, path.join(OUT_DIR, 'ar.html')].filter(fs.existsSync);
    const enFiles = [...enFilesDir, path.join(OUT_DIR, 'en.html')].filter(fs.existsSync);

    // Legacy logic
    const allFiles = getAllHtmlFiles(OUT_DIR);
    const legacyFiles = allFiles.filter(f => {
      const rel = f.replace(OUT_DIR, '').replace(/\\/g, '/');
      if (rel.startsWith('/ar/') || rel === '/ar.html') return false;
      if (rel.startsWith('/en/') || rel === '/en.html') return false;
      if (rel.includes('root-proof.html')) return false;
      if (rel.includes('_not-found.html')) return false;
      return true;
    });

    const proofRoutes = [
        path.join(OUT_DIR, 'ar/root-proof.html'),
        path.join(OUT_DIR, 'en/root-proof.html')
    ].filter(fs.existsSync);

    // Convert absolute path to routeName
    const getRouteName = (f: string) => {
      let r = f.replace(OUT_DIR, '').replace(/\\/g, '/').replace('.html', '');
      if (r === '/index') r = '/';
      return r;
    };

    arFiles.forEach(f => validateRoute(f, getRouteName(f), "ar"));
    enFiles.forEach(f => validateRoute(f, getRouteName(f), "en"));
    proofRoutes.forEach(f => validateRoute(f, getRouteName(f), "proof"));

    // Legacy Redirect Contracts Checked
    const mapPath = path.join(process.cwd(), 'config', 'legacy-redirect-map.json');
    const legacyContracts = JSON.parse(fs.readFileSync(mapPath, 'utf-8'));

    // Check News Symmetrical constraint
    const arNews = arFiles.map(getRouteName).filter(r => r.startsWith('/ar/news/') && r !== '/ar/news');
    const enNews = enFiles.map(getRouteName).filter(r => r.startsWith('/en/news/') && r !== '/en/news');
    if (arNews.length !== enNews.length) {
       console.error(`News slugs are not perfectly symmetrical! AR: ${arNews.length}, EN: ${enNews.length}`);
       process.exit(1);
    }
    
    const arSlugs = arNews.map(r => r.replace('/ar/news/', ''));
    const enSlugs = enNews.map(r => r.replace('/en/news/', ''));
    arSlugs.forEach(slug => {
       if (!enSlugs.includes(slug)) {
           console.error(`News slug ${slug} exists in AR but not EN!`);
           process.exit(1);
       }
    });

    console.log(`Arabic pages checked: ${arFiles.length}`);
    console.log(`English pages checked: ${enFiles.length}`);
    console.log(`Localized canonical mismatches: ${incorrectLocalizedCanonical}`);
    console.log(`Localized hreflang mismatches: ${missingArAlternate + missingEnAlternate + reciprocityErrors + duplicateHreflangTags}`);
    console.log(`Legacy HTML pages expected: 0`);
    console.log(`Legacy redirect contracts checked: ${legacyContracts.length}`);
    console.log("");
    console.log(`Proof routes checked: ${proofRoutes.length}`);
    console.log(`Missing canonical: ${missingCanonical}`);
    console.log(`Compatibility mapping errors: ${compatibilityMappingErrors}`);
    console.log(`Duplicate canonical tags: ${duplicateCanonicalTags}`);
    console.log(`Invalid-domain URLs: ${invalidDomainUrls}`);
    console.log(`Preview-domain references: ${previewDomainReferences}`);
    console.log(`Proof routes exposing alternates: ${proofRoutesExposingAlternates}`);

    if (
      missingCanonical > 0 ||
      incorrectLocalizedCanonical > 0 ||
      missingArAlternate > 0 ||
      missingEnAlternate > 0 ||
      reciprocityErrors > 0 ||
      compatibilityMappingErrors > 0 ||
      duplicateCanonicalTags > 0 ||
      duplicateHreflangTags > 0 ||
      invalidDomainUrls > 0 ||
      previewDomainReferences > 0 ||
      proofRoutesExposingAlternates > 0 ||
      arFiles.length !== EXPECTED_PRODUCTION_ROUTE_FAMILIES ||
      enFiles.length !== EXPECTED_PRODUCTION_ROUTE_FAMILIES ||
      legacyFiles.length !== 0 ||
      legacyContracts.length !== 69
    ) {
      process.exit(1);
    }

    console.log('\n✅ Production SEO Alternates Drift Test PASSED.');
    process.exit(0);
}

runDriftTest();
