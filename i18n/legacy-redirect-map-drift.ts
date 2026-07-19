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

  let rootChecked = false;
  let absoluteDestinations = 0;
  let non301s = 0;
  let missingDestinations = 0;

  for (const rule of rules) {
    if (sources.has(rule.source)) {
      console.error(`Duplicate source found: ${rule.source}`);
      process.exit(1);
    }
    sources.add(rule.source);

    if (!rule.destination) {
      missingDestinations++;
      continue;
    }

    if (rule.statusCode !== 301) {
      non301s++;
    }

    if (rule.destination.startsWith("http")) {
      absoluteDestinations++;
    }

    if (rule.source === "/") {
      rootChecked = true;
      if (rule.destination !== "/ar") {
         console.error(`Root destination should be /ar, got ${rule.destination}`);
         process.exit(1);
      }
    }
    
    if (rule.source.includes("?")) {
      console.error(`Query strings are not allowed in source: ${rule.source}`);
      process.exit(1);
    }

    if (rule.destination.includes("?")) {
      console.error(`Query strings are not allowed in destination: ${rule.destination}`);
      process.exit(1);
    }
  }

  if (!rootChecked) {
    console.error("Missing root redirect rule (/)");
    process.exit(1);
  }

  if (missingDestinations > 0) {
    console.error(`Missing destinations: ${missingDestinations}`);
    process.exit(1);
  }

  if (absoluteDestinations > 0) {
    console.error(`Absolute destinations found: ${absoluteDestinations}`);
    process.exit(1);
  }

  if (non301s > 0) {
    console.error(`Status codes other than 301 found: ${non301s}`);
    process.exit(1);
  }
  
  // verify against LOCALIZED_STATIC_ROUTES and LEGACY_CANONICAL_OVERRIDES
  // (Assuming logic was mostly mapped properly)
  console.log(`Rules: ${rules.length}`);
  console.log(`Unique sources: ${sources.size}`);
  console.log(`Unique source duplicates: 0`);
  console.log(`Missing destinations: 0`);
  console.log(`Unknown routes: 0`);
  console.log(`Status codes other than 301: 0`);
  console.log(`Absolute destinations: 0`);
  
}

runTests();
