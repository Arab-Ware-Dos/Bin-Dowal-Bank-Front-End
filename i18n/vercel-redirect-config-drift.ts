import * as fs from 'fs';
import * as path from 'path';

function runTests() {
  const mapPath = path.join(process.cwd(), 'config', 'legacy-redirect-map.json');
  const vercelPath = path.join(process.cwd(), 'vercel.json');

  const mapRules = JSON.parse(fs.readFileSync(mapPath, 'utf-8'));
  const vercelConfig = JSON.parse(fs.readFileSync(vercelPath, 'utf-8'));
  const vercelRules = vercelConfig.redirects;

  let missingRules = 0;
  let sourceMismatches = 0;
  let destinationMismatches = 0;
  let statusMismatches = 0;
  let absoluteVercelDestinations = 0;
  let wildcardVercelSources = 0;
  let rulesUsingPermanent = 0;
  let rulesUsing301 = 0;
  let rulesContainingPreserveQueryParams = 0;
  let rulesWithUnsupportedProperties = 0;

  for (let i = 0; i < mapRules.length; i++) {
    const mapRule = mapRules[i];
    const vercelRule = vercelRules[i];

    if (!vercelRule) {
      missingRules++;
      continue;
    }

    if (mapRule.source !== vercelRule.source) {
      sourceMismatches++;
    }

    if (mapRule.destination !== vercelRule.destination) {
      destinationMismatches++;
    }

    if (mapRule.statusCode !== vercelRule.statusCode) {
      statusMismatches++;
    }

    if (vercelRule.destination && vercelRule.destination.startsWith("http")) {
      absoluteVercelDestinations++;
    }

    if (vercelRule.source && (vercelRule.source.includes("*") || vercelRule.source.includes(":path"))) {
      wildcardVercelSources++;
    }

    if (vercelRule.permanent !== undefined) {
      rulesUsingPermanent++;
    }

    if (vercelRule.statusCode === 301) {
      rulesUsing301++;
    }

    if ('preserveQueryParams' in vercelRule) {
      rulesContainingPreserveQueryParams++;
    }

    const allowedKeys = ['source', 'destination', 'statusCode'];
    const unsupportedKeys = Object.keys(vercelRule).filter(k => !allowedKeys.includes(k));
    if (unsupportedKeys.length > 0) {
      rulesWithUnsupportedProperties++;
    }
  }

  const extraRules = Math.max(0, vercelRules.length - mapRules.length);

  console.log(`Redirect map rules: ${mapRules.length}`);
  console.log(`vercel.json redirects: ${vercelRules.length}`);
  console.log(`Missing Vercel rules: ${missingRules}`);
  console.log(`Extra Vercel rules: ${extraRules}`);
  console.log(`Source mismatches: ${sourceMismatches}`);
  console.log(`Destination mismatches: ${destinationMismatches}`);
  console.log(`Status mismatches: ${statusMismatches}`);
  console.log(`Absolute Vercel destinations: ${absoluteVercelDestinations}`);
  console.log(`Wildcard Vercel sources: ${wildcardVercelSources}`);
  console.log(`Rules using permanent: ${rulesUsingPermanent}`);
  console.log(`Rules using statusCode 301: ${rulesUsing301}`);
  console.log(`Rules containing preserveQueryParams: ${rulesContainingPreserveQueryParams}`);
  console.log(`Unsupported redirect properties: ${rulesWithUnsupportedProperties}`);
  console.log(`Config schema validation: ${rulesWithUnsupportedProperties === 0 ? 'Pass' : 'Fail'}`);

  if (
    missingRules > 0 || extraRules > 0 || sourceMismatches > 0 ||
    destinationMismatches > 0 || statusMismatches > 0 || absoluteVercelDestinations > 0 ||
    wildcardVercelSources > 0 || rulesUsingPermanent > 0 || rulesUsing301 !== 69 ||
    rulesContainingPreserveQueryParams > 0 || rulesWithUnsupportedProperties > 0
  ) {
    process.exit(1);
  }
}

runTests();
