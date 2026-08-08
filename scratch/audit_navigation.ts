import { navigationData } from '../data/navigation';
import fs from 'fs';
import path from 'path';

function toKebabCase(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

const leafNodes = [];

function determineType(href, expectedPath) {
  if (href.includes('/news') || href.includes('/knowledge-center/news')) return 'خبر';
  if (href.includes('financing') || expectedPath.includes('financing')) return 'تمويل';
  if (href.includes('account') || expectedPath.includes('account') || href.includes('expat') || href.includes('noor')) return 'حساب';
  if (href.includes('personal') || href.includes('business') || expectedPath.includes('services')) return 'خدمة مصرفية';
  if (href.includes('about') || href.includes('contact') || href.includes('knowledge')) return 'صفحة ثابتة';
  return 'أخرى';
}

navigationData.forEach(navItem => {
  const topLevelPath = '/' + toKebabCase(navItem.key);
  
  function processLink(link, parentName, isGroup = false) {
    if (!link.href || link.href.startsWith('http') || link.href.startsWith('#') || link.href === '/') return;

    let expectedPath = topLevelPath;
    if (navItem.key === 'digitalChannels') expectedPath = '/e-services'; // Or digital-channels depending on convention

    // Add leaf node slug or logic for expected path
    const slug = link.href.split('/').pop();
    expectedPath = expectedPath + '/' + slug;

    leafNodes.push({
      id: link.key,
      nameAr: link.label.ar,
      nameEn: link.label.en,
      parent: parentName,
      expectedPath: expectedPath,
      currentHref: link.href,
      type: determineType(link.href, expectedPath)
    });
  }

  if (navItem.singleLinks) {
    navItem.singleLinks.forEach(link => processLink(link, navItem.label.en));
  }
  
  if (navItem.groups) {
    navItem.groups.forEach(group => {
      group.links.forEach(link => {
        processLink(link, `${navItem.label.en} -> ${group.title.en}`, true);
        if (link.subLinks) {
          link.subLinks.forEach(subLink => {
            processLink(subLink, `${navItem.label.en} -> ${group.title.en} -> ${link.label.en}`, true);
          });
        }
      });
    });
  }
});

fs.writeFileSync(path.join(__dirname, 'audit_navigation.json'), JSON.stringify(leafNodes, null, 2));
console.log(`Generated audit_navigation.json with ${leafNodes.length} leaf nodes.`);
