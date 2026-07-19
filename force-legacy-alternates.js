const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else {
            if(file.endsWith('page.tsx')) results.push(file);
        }
    });
    return results;
}

const legacyPages = walk('app/(legacy)');

let count = 0;

for (let file of legacyPages) {
    // Skip i18n-poc
    if (file.includes('i18n-poc')) continue;
    // Skip private folders
    if (file.includes('_bank-guarantees') || file.includes('_corporate-current-account') || file.includes('_corporate-investment-deposits') || file.includes('_swift-transfers')) continue;
    
    let content = fs.readFileSync(file, 'utf8');
    
    // We only care if it's missing alternates
    if (content.includes('alternates: buildLegacyAlternates')) continue;

    let relative = file.replace(/\\/g, '/').split('app/(legacy)')[1].replace('/page.tsx', '');
    if (relative === '') relative = '/';
    
    if (relative.includes('[slug]')) {
       // We already fixed dynamic ones!
       continue;
    }

    console.log(`Fixing missing alternates in: ${file}`);
    
    // 1. Ensure import of buildLegacyAlternates
    if (!content.includes('buildLegacyAlternates')) {
        const importStatement = `import { buildLegacyAlternates } from "@/lib/seo/alternates"\n`;
        const importMatch = content.match(/import .*?;?\n/g);
        if (importMatch) {
            const lastImport = importMatch[importMatch.length - 1];
            content = content.replace(lastImport, lastImport + importStatement);
        } else {
            content = importStatement + content;
        }
    }
    
    // 2. Ensure import of Metadata
    if (!content.includes('import type { Metadata }') && !content.includes('import { Metadata }')) {
        content = `import type { Metadata } from "next"\n` + content;
    }

    // 3. Add export const metadata
    const metadataExport = `\nexport const metadata: Metadata = {\n  alternates: buildLegacyAlternates({ pathname: "${relative}" })\n}\n\n`;
    
    // Insert before default export
    content = content.replace(/export default function/, metadataExport + 'export default function');
    content = content.replace(/export default async function/, metadataExport + 'export default async function');

    fs.writeFileSync(file, content);
    count++;
}

console.log(`Fixed ${count} legacy files missing alternates.`);
