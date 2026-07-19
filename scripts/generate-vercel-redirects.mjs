import fs from 'fs';
import path from 'path';

const mapPath = path.join(process.cwd(), 'config', 'legacy-redirect-map.json');
const vercelPath = path.join(process.cwd(), 'vercel.json');

const raw = fs.readFileSync(mapPath, 'utf-8');
const rules = JSON.parse(raw);

if (!Array.isArray(rules) || rules.length !== 69) {
  console.error("Error: legacy-redirect-map.json must contain exactly 69 rules.");
  process.exit(1);
}

const vercelRules = rules.map((r) => ({
  source: r.source,
  destination: r.destination,
  statusCode: r.statusCode
}));

const vercelConfig = {
  $schema: "https://openapi.vercel.sh/vercel.json",
  redirects: vercelRules
};

fs.writeFileSync(vercelPath, JSON.stringify(vercelConfig, null, 2), 'utf-8');
console.log(`Generated vercel.json with ${rules.length} redirects.`);
