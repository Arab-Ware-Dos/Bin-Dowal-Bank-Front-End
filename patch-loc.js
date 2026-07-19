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
  if (content.includes('buildLocalizedAlternates')) continue;
  
  let relative = file.replace(/\\/g, '/').split('app/[locale]')[1].replace('/page.tsx', '');
  if (relative === '') relative = '/';
  
  // Dynamic routes
  if (relative.includes('[slug]')) {
      const family = relative.split('/[slug]')[0];
      relative = `\`${family}/\${slug}\``;
  } else {
      relative = `"${relative}"`;
  }
  
  // 1. Add import
  const importStatement = `import { buildLocalizedAlternates } from "@/lib/seo/alternates"\n`;
  const importMatch = content.match(/import .*?;?\n/g);
  if (importMatch) {
      const lastImport = importMatch[importMatch.length - 1];
      content = content.replace(lastImport, lastImport + importStatement);
  } else {
      content = importStatement + content;
  }
  
  // 2. Add alternates to all returned metadata objects in generateMetadata
  const returnRegex = /(return\s+{\s*)(title:|description:|openGraph:)/g;
  content = content.replace(returnRegex, (match, p1, p2) => {
      // Use type assertion for locale to be safe
      return `${p1}alternates: buildLocalizedAlternates({ pathname: ${relative}, locale: locale as "ar" | "en" }),\n    ${p2}`;
  });
  
  // Check if we modified the return
  if (!content.includes('buildLocalizedAlternates({')) {
      console.warn(`Could not patch generateMetadata returns in ${file}`);
      // try export const metadata
      const exportRegex = /(export const metadata:?.*?=\s+{\s*)(title:|description:)/g;
      content = content.replace(exportRegex, (match, p1, p2) => {
          console.warn(`Found export const metadata in ${file}!`);
          return `${p1}alternates: buildLocalizedAlternates({ pathname: ${relative}, locale: "ar" }),\n  ${p2}`;
      });
  }
  
  fs.writeFileSync(file, content);
  count++;
}
console.log(`Updated ${count} localized files.`);
