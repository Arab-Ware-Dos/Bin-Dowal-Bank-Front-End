const fs = require('fs');
let content = fs.readFileSync('components/layout/header.tsx', 'utf8');

content = content.replace(/href="\/atm-and-branches"/g, 'href={resolveHref("/atm-and-branches")}');
content = content.replace(/href="\/contact"/g, 'href={resolveHref("/contact")}');
content = content.replace(/href=\{item\.href\}/g, 'href={resolveHref(item.href)}');
content = content.replace(/href=\{activeDesktopItem\.imageLink \|\| activeDesktopItem\.href\}/g, 'href={resolveHref(activeDesktopItem.imageLink || activeDesktopItem.href)}');
content = content.replace(/href=\{link\.href\}/g, 'href={resolveHref(link.href)}');
content = content.replace(/href=\{sub\.href\}/g, 'href={resolveHref(sub.href)}');
content = content.replace(/href=\{subItem\.href\}/g, 'href={resolveHref(subItem.href)}');
content = content.replace(/href="\/"/g, 'href={resolveHref("/")}');

fs.writeFileSync('components/layout/header.tsx', content);
