import * as fs from 'fs';
import * as path from 'path';
import { LOCALIZED_STATIC_ROUTES } from '../lib/localized-routes';
import { LEGACY_CANONICAL_OVERRIDES } from '../lib/seo/legacy-canonical-overrides';

type RedirectRule = {
  source: string;
  destination: string;
  statusCode: number;
};

// 1. Root
const rules: RedirectRule[] = [
  { source: "/", destination: "/ar", statusCode: 301 }
];

// 2. Cross-domain compatibility
const compatibilityKeys = Object.keys(LEGACY_CANONICAL_OVERRIDES).sort();
for (const key of compatibilityKeys) {
  rules.push({
    source: key,
    destination: `/ar${LEGACY_CANONICAL_OVERRIDES[key as keyof typeof LEGACY_CANONICAL_OVERRIDES]}`,
    statusCode: 301
  });
}

// 3. Static and Dynamic Legacy
const otherRoutes = LOCALIZED_STATIC_ROUTES.filter(r => r !== "/").sort();
for (const route of otherRoutes) {
  rules.push({
    source: route,
    destination: `/ar${route}`,
    statusCode: 301
  });
}

const configDir = path.join(process.cwd(), 'config');
if (!fs.existsSync(configDir)) {
  fs.mkdirSync(configDir);
}

fs.writeFileSync(
  path.join(configDir, 'legacy-redirect-map.json'),
  JSON.stringify(rules, null, 2),
  'utf-8'
);

console.log(`Generated legacy-redirect-map.json with ${rules.length} rules.`);
