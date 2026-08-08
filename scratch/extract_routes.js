const fs = require('fs');
const path = require('path');
const ts = require('typescript');

// Parse navigation.ts to extract routes
function extractNavigationRoutes() {
  const content = fs.readFileSync(path.join(__dirname, '../data/navigation.ts'), 'utf-8');
  // Simple regex parsing to get hrefs and keys
  const hrefRegex = /href:\s*["']([^"']+)["']/g;
  const routes = new Set();
  let match;
  while ((match = hrefRegex.exec(content)) !== null) {
    if (match[1] && match[1] !== "") {
      routes.add(match[1]);
    }
  }
  return Array.from(routes);
}

// Extract app directory routes
function getNextJsRoutes(dir, basePath = '', routes = []) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const file of files) {
    if (file.isDirectory()) {
      // Ignore group routes (starting with '(') for the path, but traverse into them
      const isGroupRoute = file.name.startsWith('(') && file.name.endsWith(')');
      const newBasePath = isGroupRoute ? basePath : `${basePath}/${file.name}`;
      getNextJsRoutes(path.join(dir, file.name), newBasePath, routes);
    } else if (file.name === 'page.tsx' || file.name === 'page.ts' || file.name === 'page.jsx' || file.name === 'page.js') {
      let routePath = basePath === '' ? '/' : basePath;
      routes.push(routePath);
    }
  }
  return routes;
}

const navRoutes = extractNavigationRoutes();
const appRoutes = getNextJsRoutes(path.join(__dirname, '../app'));

console.log('Navigation Routes:', navRoutes.length);
console.log(navRoutes);
console.log('\nApp Routes:', appRoutes.length);
console.log(appRoutes);
