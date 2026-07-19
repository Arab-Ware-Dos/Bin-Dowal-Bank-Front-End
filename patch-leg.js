const fs = require('fs');
const path = require('path');

const files = process.argv.slice(2);
let count = 0;

for (let file of files) {
  file = path.resolve(file);
  if (!fs.existsSync(file)) {
      console.error(`File not found: ${file}`);
      continue;
  }
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('buildLegacyAlternates')) continue;
  
  let relative = file.replace(/\\/g, '/').split('app/(legacy)')[1].replace('/page.tsx', '');
  if (relative === '') relative = '/';
  
  // Dynamic routes - changed from params.slug to slug!
  if (relative.includes('[slug]')) {
      const family = relative.split('/[slug]')[0];
      relative = `\`${family}/\${slug}\``;
  } else {
      relative = `"${relative}"`;
  }
  
  // 1. Add import
  const importStatement = `import { buildLegacyAlternates } from "@/lib/seo/alternates"\n`;
  const importMatch = content.match(/import .*?;?\n/g);
  if (importMatch) {
      const lastImport = importMatch[importMatch.length - 1];
      content = content.replace(lastImport, lastImport + importStatement);
  } else {
      content = importStatement + content;
  }
  
  // 2. Add alternates
  // For legacy, mostly it's `export const metadata: Metadata = {`
  const exportRegex = /(export const metadata:?.*?=\s+{\s*)(title:|description:|openGraph:)/g;
  content = content.replace(exportRegex, (match, p1, p2) => {
      return `${p1}alternates: buildLegacyAlternates({ pathname: ${relative} }),\n  ${p2}`;
  });
  
  // For legacy dynamic routes, they use generateMetadata
  if (file.includes('[slug]')) {
      const returnRegex = /(return\s+{\s*)(title:|description:|openGraph:|\.\.\.baseMetadata)/g;
      content = content.replace(returnRegex, (match, p1, p2) => {
          return `${p1}alternates: buildLegacyAlternates({ pathname: ${relative} }),\n    ${p2}`;
      });
  }
  
  fs.writeFileSync(file, content);
  count++;
}
console.log(`Updated ${count} legacy files.`);
