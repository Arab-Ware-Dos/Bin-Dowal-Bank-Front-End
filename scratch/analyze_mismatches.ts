import { navigationData, NavItem, NavSubGroup, NavLink } from '../data/navigation';
import fs from 'fs';
import path from 'path';

const report = [];

function toKebabCase(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

navigationData.forEach((navItem) => {
  const topLevelPath = '/' + toKebabCase(navItem.key);
  
  function checkLink(link, context) {
    if (!link.href || link.href.startsWith('http') || link.href.startsWith('#') || link.href === '/') return;
    
    // Normalize href
    const hrefBase = link.href.split('#')[0];
    const firstSegment = '/' + hrefBase.split('/')[1]; // e.g. /personal
    
    // Special mapping for some top level keys if needed, but strictly the user said:
    // specializedServices -> /specialized-services
    let expectedBasePath = topLevelPath;
    if (navItem.key === 'digitalChannels') expectedBasePath = '/e-services'; // Based on observation
    
    if (firstSegment !== expectedBasePath) {
      report.push({
        labelEn: link.label.en,
        labelAr: link.label.ar,
        key: link.key,
        currentHref: link.href,
        expectedBasePath: expectedBasePath,
        context: context
      });
    }
  }

  if (navItem.singleLinks) {
    navItem.singleLinks.forEach(link => checkLink(link, `${navItem.label.en} -> ${link.label.en}`));
  }
  
  if (navItem.groups) {
    navItem.groups.forEach(group => {
      group.links.forEach(link => {
        checkLink(link, `${navItem.label.en} -> ${group.title.en} -> ${link.label.en}`);
        if (link.subLinks) {
          link.subLinks.forEach(subLink => {
            checkLink(subLink, `${navItem.label.en} -> ${group.title.en} -> ${link.label.en} -> ${subLink.label.en}`);
          });
        }
      });
    });
  }
});

console.log(`Found ${report.length} mismatches.`);
console.table(report);

fs.writeFileSync(path.join(__dirname, 'mismatches_report.json'), JSON.stringify(report, null, 2));
