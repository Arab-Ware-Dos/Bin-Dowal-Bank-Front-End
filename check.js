const check = async () => {
  const urls = [
    '/personal/dool-express',
    '/personal/unified-network',
    '/ar/personal/dool-express',
    '/en/personal/dool-express',
    '/ar/personal/unified-network',
    '/en/personal/unified-network',
    '/ar/personal/local-transfers',
    '/en/personal/local-transfers',
    '/ar/personal/international-transfers',
    '/en/personal/international-transfers',
    '/ar/personal/fast-money-transfers',
    '/en/personal/fast-money-transfers',
    '/ar/personal/mobile-banking',
    '/en/personal/mobile-banking',
    '/ar/personal/e-wallet',
    '/en/personal/e-wallet',
    '/ar/personal/mushtarayati-network',
    '/en/personal/mushtarayati-network',
    '/ar/personal/financing-personal',
    '/en/personal/financing-personal',
    '/ar/personal/moneygram',
    '/en/personal/moneygram',
    '/personal/mobile-banking',
    '/ar/e-services/mobile-banking',
    '/en/e-services/mobile-banking',
    '/ar/business/swift-transfers',
    '/en/business/swift-transfers',
    '/personal-banking',
    '/ar/personal-banking',
    '/en/personal-banking'
  ];
  for (const url of urls) {
    try {
      const res = await fetch('http://localhost:3000' + url);
      const text = await res.text();
      const lang = text.match(/<html[^>]*lang="([^"]+)"/)?.[1] || 'missing';
      const dir = text.match(/<html[^>]*dir="([^"]+)"/)?.[1] || 'missing';
      const marker = text.match(/data-localized-route="([^"]+)"/)?.[1] || 'None';
      const segment = text.match(/data-personal-segment="([^"]+)"/)?.[1] || 'None';
      console.log(url.padEnd(45) + ' ' + res.status + ' lang=' + lang + ' dir=' + dir + ' marker=' + marker + ' seg=' + segment);
    } catch(e) {
      console.log(url.padEnd(45) + ' Error');
    }
  }
}
check();
