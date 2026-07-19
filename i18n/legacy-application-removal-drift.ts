import fs from "fs";
import path from "path";

const OUT_DIR = path.resolve(process.cwd(), "out");

function runDriftTest() {
  console.log("Starting Legacy Application Removal Drift Test...");

  const mapPath = path.join(process.cwd(), "config", "legacy-redirect-map.json");
  if (!fs.existsSync(mapPath)) {
    console.error("❌ FAILED: config/legacy-redirect-map.json not found.");
    process.exit(1);
  }

  const rules = JSON.parse(fs.readFileSync(mapPath, "utf-8"));
  if (rules.length !== 69) {
    console.error(`❌ FAILED: Expected 69 legacy redirect contracts, found ${rules.length}`);
    process.exit(1);
  }

  if (!fs.existsSync(OUT_DIR)) {
    console.error('❌ FAILED: out/ directory not found. Please run "pnpm run build" first.');
    process.exit(1);
  }

  let legacyHtmlFilesFound = 0;
  let legacyRootHtmlFound = 0;
  let unexpectedUnprefixedPages = 0;
  let i18nPocFound = 0;

  // 1. Check Root
  if (fs.existsSync(path.join(OUT_DIR, "index.html"))) {
    legacyRootHtmlFound++;
    console.error("❌ FAILED: out/index.html found! The root should not generate HTML directly.");
  }

  // 2. Check i18n-poc
  if (fs.existsSync(path.join(OUT_DIR, "i18n-poc", "ar.html")) || fs.existsSync(path.join(OUT_DIR, "i18n-poc", "ar", "index.html"))) {
    i18nPocFound++;
  }
  if (fs.existsSync(path.join(OUT_DIR, "i18n-poc", "en.html")) || fs.existsSync(path.join(OUT_DIR, "i18n-poc", "en", "index.html"))) {
    i18nPocFound++;
  }

  // 3. Check legacy sources
  for (const rule of rules) {
    const sourcePath = rule.source;
    if (sourcePath === "/") continue; // Handled by root check

    const relativePath = sourcePath.startsWith("/") ? sourcePath.substring(1) : sourcePath;
    const htmlPath = path.join(OUT_DIR, `${relativePath}.html`);
    const indexPath = path.join(OUT_DIR, relativePath, "index.html");

    if (fs.existsSync(htmlPath) || fs.existsSync(indexPath)) {
      legacyHtmlFilesFound++;
      console.error(`❌ FAILED: Legacy HTML file found for source ${sourcePath}`);
    }
  }

  // 4. Check for unexpected unprefixed pages
  const filesInOut = fs.readdirSync(OUT_DIR);
  for (const file of filesInOut) {
    const stat = fs.statSync(path.join(OUT_DIR, file));
    if (stat.isFile() && file.endsWith(".html")) {
      // Exclude allowed files
      if (!["404.html", "500.html", "sitemap.xml", "ar.html", "en.html", "_not-found.html"].includes(file)) {
        unexpectedUnprefixedPages++;
        console.error(`❌ FAILED: Unexpected unprefixed HTML file found: ${file}`);
      }
    }
    if (stat.isDirectory()) {
      // Allowed directories
      if (!["ar", "en", "_next", "images", "fonts", "assets", "icons"].includes(file)) {
        // Any other directory could contain unprefixed pages, let's scan it
        const hasHtml = checkDirForHtml(path.join(OUT_DIR, file));
        if (hasHtml) {
          unexpectedUnprefixedPages++;
          console.error(`❌ FAILED: Unexpected unprefixed HTML directory found: ${file}`);
        }
      }
    }
  }

  console.log(`Historical Legacy sources checked: ${rules.length}`);
  console.log(`Legacy HTML files found: ${legacyHtmlFilesFound}`);
  console.log(`Legacy root HTML found: ${legacyRootHtmlFound}`);
  console.log(`Removed i18n-poc HTML files found: ${i18nPocFound}`);
  console.log(`Unexpected unprefixed application pages: ${unexpectedUnprefixedPages}`);

  if (legacyHtmlFilesFound > 0 || legacyRootHtmlFound > 0 || i18nPocFound > 0 || unexpectedUnprefixedPages > 0) {
    process.exit(1);
  }

  console.log("\n✅ Legacy Application Removal Drift Test PASSED.");
}

function checkDirForHtml(dir: string): boolean {
  if (!fs.existsSync(dir)) return false;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      if (checkDirForHtml(filePath)) return true;
    } else if (file.endsWith(".html")) {
      return true;
    }
  }
  return false;
}

runDriftTest();
