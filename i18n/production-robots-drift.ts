import fs from "fs";
import path from "path";

const robotsPath = path.join(process.cwd(), "out", "robots.txt");

if (!fs.existsSync(robotsPath)) {
  console.error("❌ robots.txt not found in out directory.");
  process.exit(1);
}

const content = fs.readFileSync(robotsPath, "utf-8");
const lines = content.split("\n").map(l => l.trim()).filter(Boolean);

let userAgentStarExists = false;
let allowRootExists = false;
let sitemapCount = 0;
let disallowRootExists = false;
let disallowArExists = false;
let disallowEnExists = false;
let legacyDisallows = 0;
let proofDisallows = 0;
let previewDomain = false;
let localhostRef = false;
let sitemapOriginCorrect = false;

const SITE_URL = "https://bindowal-bank.vercel.app";

for (const line of lines) {
  if (line.toLowerCase() === "user-agent: *") {
    userAgentStarExists = true;
  }
  if (line.toLowerCase() === "allow: /") {
    allowRootExists = true;
  }
  if (line.toLowerCase() === "disallow: /") {
    disallowRootExists = true;
  }
  if (line.toLowerCase() === "disallow: /ar" || line.toLowerCase() === "disallow: /ar/") {
    disallowArExists = true;
  }
  if (line.toLowerCase() === "disallow: /en" || line.toLowerCase() === "disallow: /en/") {
    disallowEnExists = true;
  }
  if (line.toLowerCase().startsWith("sitemap:")) {
    sitemapCount++;
    if (line.includes(SITE_URL)) {
      sitemapOriginCorrect = true;
    }
  }
  if (line.toLowerCase().startsWith("disallow:") && (line.includes("/personal") || line.includes("/business") || line.includes("/accounts"))) {
    legacyDisallows++;
  }
  if (line.toLowerCase().startsWith("disallow:") && (line.includes("root-proof") || line.includes("i18n-poc"))) {
    proofDisallows++;
  }
  if (line.includes("arabwaredos.com")) {
    previewDomain = true;
  }
  if (line.includes("localhost")) {
    localhostRef = true;
  }
}

let errors = 0;

if (!userAgentStarExists) {
  console.error("❌ User-Agent: * is missing");
  errors++;
}
if (!allowRootExists) {
  console.error("❌ Allow: / is missing");
  errors++;
}
if (disallowRootExists) {
  console.error("❌ Disallow: / exists");
  errors++;
}
if (disallowArExists) {
  console.error("❌ Disallow: /ar exists");
  errors++;
}
if (disallowEnExists) {
  console.error("❌ Disallow: /en exists");
  errors++;
}
if (legacyDisallows > 0) {
  console.error("❌ Legacy-wide Disallow rules exist");
  errors++;
}
if (proofDisallows > 0) {
  console.error("❌ Proof Disallow rules exist (proof routes must be handled by noindex, not robots.txt)");
  errors++;
}
if (sitemapCount !== 1) {
  console.error(`❌ Sitemap declaration count is ${sitemapCount}, expected 1`);
  errors++;
}
if (!sitemapOriginCorrect) {
  console.error("❌ Sitemap origin does not equal SITE_URL");
  errors++;
}
if (previewDomain) {
  console.error("❌ Preview domain references exist");
  errors++;
}
if (localhostRef) {
  console.error("❌ Localhost references exist");
  errors++;
}

if (errors > 0) {
  console.error("❌ Production Robots Drift Test FAILED.");
  process.exit(1);
}

console.log("✅ Production Robots Drift Test PASSED.");
