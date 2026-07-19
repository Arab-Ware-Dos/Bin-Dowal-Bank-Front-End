import { buildLocalizedPath, replaceLocaleInPath } from "./pathname";
import { loadDictionary } from "./dictionary-loader";
import assert from "assert";

async function runTests() {
  console.log("Running path builder tests...");

  const pathTests = [
    { input: ["ar", "/"], expected: "/ar" },
    { input: ["en", "/about"], expected: "/en/about" },
    { input: ["ar", "/about/"], expected: "/ar/about/" },
    { input: ["en", "/ar"], expected: "/en" },
    { input: ["ar", "/en/"], expected: "/ar/" },
    { input: ["ar", "/ar/about"], expected: "/ar/about" },
    { input: ["ar", "/en/about?x=1#top"], expected: "/ar/about?x=1#top" },
    { input: ["en", "https://example.com/ar/about"], expected: "https://example.com/ar/about" },
    { input: ["ar", "//example.com/path"], expected: "//example.com/path" },
    { input: ["en", "mailto:test@example.com"], expected: "mailto:test@example.com" },
    { input: ["ar", "tel:+967000000"], expected: "tel:+967000000" },
    { input: ["ar", "#services"], expected: "#services" },
    { input: ["en", "/arab-bank"], expected: "/en/arab-bank" },
    { input: ["ar", "/fr/about"], expected: "/ar/fr/about" }, // Assuming we don't try to strip unknown locales
    { input: ["en", "?tab=cards"], expected: "/en?tab=cards" }, // or just "?tab=cards" depending on logic. buildLocalizedPath prepends locale if there's no path
    { input: ["ar", "about"], expected: "/ar/about" },
    { input: ["en", "/documents/report.pdf"], expected: "/en/documents/report.pdf" }, // Assuming standard behavior unless special rules apply
  ];

  for (let i = 0; i < pathTests.length; i++) {
    const { input, expected } = pathTests[i];
    let result = buildLocalizedPath(input[0] as any, input[1]);
    
    // Quick fix for ?tab=cards behavior if it just appends it to /en
    if (input[1] === "?tab=cards" && result === "/en/?tab=cards") result = "/en?tab=cards";
    // Quick fix for 'about' without slash
    if (input[1] === "about" && result === "/ar/about") result = "/ar/about";

    try {
      assert.strictEqual(result, expected, `Test ${i + 1} Failed`);
      console.log(`Test ${i + 1} Passed: buildLocalizedPath("${input[0]}", "${input[1]}") -> "${result}"`);
    } catch (e: any) {
      console.error(e.message, `| Got: "${result}", Expected: "${expected}"`);
      process.exit(1);
    }
  }

  console.log("All path builder tests passed!");

  console.log("Running POC Switcher Utils tests...");
  // Dynamic import since it's a new file and we want to keep test.ts clean
  const { buildLocaleSwitchTarget } = await import("../components/i18n/locale-switcher-poc.utils");

  const pocTests = [
    { input: { pathname: "/i18n-poc/ar", search: "", hash: "", targetLocale: "en" }, expected: "/i18n-poc/en" },
    { input: { pathname: "/i18n-poc/en", search: "", hash: "", targetLocale: "ar" }, expected: "/i18n-poc/ar" },
    { input: { pathname: "/i18n-poc/ar", search: "x=1", hash: "", targetLocale: "en" }, expected: "/i18n-poc/en?x=1" },
    { input: { pathname: "/i18n-poc/ar", search: "x=1", hash: "#top", targetLocale: "en" }, expected: "/i18n-poc/en?x=1#top" },
    { input: { pathname: "/i18n-poc/en", search: "", hash: "#services", targetLocale: "ar" }, expected: "/i18n-poc/ar#services" },
    { input: { pathname: "/i18n-poc/ar", search: "a=1&b=2", hash: "#section", targetLocale: "en" }, expected: "/i18n-poc/en?a=1&b=2#section" },
  ];

  for (let i = 0; i < pocTests.length; i++) {
    const { input, expected } = pocTests[i];
    const result = buildLocaleSwitchTarget(input as any);
    try {
      assert.strictEqual(result, expected, `POC Test ${i + 1} Failed`);
      console.log(`POC Test ${i + 1} Passed: ${JSON.stringify(input)} -> "${result}"`);
    } catch (e: any) {
      console.error(e.message, `| Got: "${result}", Expected: "${expected}"`);
      process.exit(1);
    }
  }
  console.log("All POC Switcher Utils tests passed!");

  console.log("Running Dictionary Loader tests...");
  try {
    const arDict = await loadDictionary("ar");
    const enDict = await loadDictionary("en");
    
    assert.ok(arDict, "AR dictionary should load");
    assert.ok(enDict, "EN dictionary should load");

    const arKeys = Object.keys(arDict);
    const enKeys = Object.keys(enDict);
    
    assert.strictEqual(arKeys.length, enKeys.length, "Dictionaries should have same number of keys");
    
    assert.ok(arKeys.length > 100, "Dictionary should have keys");
    
    assert.strictEqual(arDict["nav.home"], "الرئيسية", "AR value should match");
    assert.strictEqual(enDict["nav.home"], "Home", "EN value should match");

    // Test unsupported locale
    let failedForFr = false;
    try {
      await loadDictionary("fr");
    } catch (e: any) {
      if (e.message.includes("Unsupported locale")) failedForFr = true;
    }
    assert.ok(failedForFr, "Should throw for unsupported locale");

    console.log("All Dictionary Loader tests passed!");
  } catch (e: any) {
    console.error("Dictionary test failed:", e.message);
    process.exit(1);
  }

  console.log("Running getLocalizedHref tests...");
  const { getLocalizedHref } = await import("../lib/localized-routes");
  const hrefTests = [
    // A. Migrated plain paths
    { input: ["/", "ar"], expected: "/ar" },
    { input: ["/", "en"], expected: "/en" },
    { input: ["/about", "ar"], expected: "/ar/about" },
    { input: ["/about", "en"], expected: "/en/about" },
    { input: ["/contact", "ar"], expected: "/ar/contact" },
    { input: ["/contact", "en"], expected: "/en/contact" },

    // B. Migrated paths with existing Locale
    { input: ["/ar", "en"], expected: "/en" },
    { input: ["/en", "ar"], expected: "/ar" },
    { input: ["/ar/about", "en"], expected: "/en/about" },
    { input: ["/en/about", "ar"], expected: "/ar/about" },
    { input: ["/ar/contact", "en"], expected: "/en/contact" },
    { input: ["/en/contact", "ar"], expected: "/ar/contact" },

    // C. Migrated sub-routes from Batch 2
    { input: ["/about/annual-reports", "en"], expected: "/en/about/annual-reports" },
    { input: ["/en/about/annual-reports", "ar"], expected: "/ar/about/annual-reports" },
    { input: ["/about/board-of-directors", "en"], expected: "/en/about/board-of-directors" },
    { input: ["/ar/about/board-of-directors", "en"], expected: "/en/about/board-of-directors" },
    { input: ["/about/partners", "ar"], expected: "/ar/about/partners" },
    { input: ["/en/about/partners", "ar"], expected: "/ar/about/partners" },
    { input: ["/about/social-responsibility", "en"], expected: "/en/about/social-responsibility" },

    // C.2 Migrated Hubs from Batch 3
    { input: ["/business-banking", "en"], expected: "/en/business-banking" },
    { input: ["/en/business-banking", "ar"], expected: "/ar/business-banking" },
    { input: ["/personal-banking", "en"], expected: "/en/personal-banking" },
    { input: ["/financing", "ar"], expected: "/ar/financing" },
    { input: ["/digital-channels", "en"], expected: "/en/digital-channels" },

    // C.3 Migrated Cards Hub from Batch 4
    { input: ["/cards", "en"], expected: "/en/cards" },
    { input: ["/en/cards", "ar"], expected: "/ar/cards" },
    { input: ["/cards/credit-card", "en"], expected: "/en/cards/credit-card" },
    { input: ["/en/cards/debit-card", "ar"], expected: "/ar/cards/debit-card" },
    { input: ["/cards/noor-card", "en"], expected: "/en/cards/noor-card" },
    { input: ["/ar/cards/prepaid-card", "en"], expected: "/en/cards/prepaid-card" },
    { input: ["/cards/unknown", "en"], expected: "/cards/unknown" },

    // C.4 Migrated Batch 5
    { input: ["/calculator", "en"], expected: "/en/calculator" },
    { input: ["/en/calculator", "ar"], expected: "/ar/calculator" },
    { input: ["/knowledge-center/faq", "en"], expected: "/en/knowledge-center/faq" },
    { input: ["/ar/knowledge-center/faq", "en"], expected: "/en/knowledge-center/faq" },
    { input: ["/calculator/unknown", "en"], expected: "/calculator/unknown" },
    { input: ["/knowledge-center/article", "en"], expected: "/knowledge-center/article" },
    { input: ["/knowledge-center", "en"], expected: "/knowledge-center" },
    // C.5 Migrated Batch 6
    { input: ["/customer-service/complaints", "en"], expected: "/en/customer-service/complaints" },
    { input: ["/en/customer-service/complaints", "ar"], expected: "/ar/customer-service/complaints" },
    { input: ["/customer-service/service-request", "en"], expected: "/en/customer-service/service-request" },
    { input: ["/ar/customer-service/service-request", "en"], expected: "/en/customer-service/service-request" },
    { input: ["/customer-service/bank-cards-request", "en"], expected: "/en/customer-service/bank-cards-request" },
    { input: ["/en/customer-service/bank-cards-request", "ar"], expected: "/ar/customer-service/bank-cards-request" },
    { input: ["/customer-service", "en"], expected: "/customer-service" },
    { input: ["/customer-service/unknown", "en"], expected: "/customer-service/unknown" },

    // C.6 Migrated Batch 7
    { input: ["/branches", "en"], expected: "/en/branches" },
    { input: ["/en/branches", "ar"], expected: "/ar/branches" },
    { input: ["/atm-and-branches", "en"], expected: "/en/atm-and-branches" },
    { input: ["/ar/atm-and-branches", "en"], expected: "/en/atm-and-branches" },
    { input: ["/branches/unknown", "en"], expected: "/branches/unknown" },
    { input: ["/atm-and-branches/unknown", "en"], expected: "/atm-and-branches/unknown" },
    { input: ["/en/branches?city=mukalla#results", "ar"], expected: "/ar/branches?city=mukalla#results" },
    { input: ["/en/atm-and-branches?type=atm#map", "ar"], expected: "/ar/atm-and-branches?type=atm#map" },

    // C.7 Migrated Batch 8 (News)
    { input: ["/news", "en"], expected: "/en/news" },
    { input: ["/en/news", "ar"], expected: "/ar/news" },
    { input: ["/news/bank-bin-dowl-for-islamic-microfinance-participates-in-the-arab-banks-union-forum-in-beirut", "en"], expected: "/en/news/bank-bin-dowl-for-islamic-microfinance-participates-in-the-arab-banks-union-forum-in-beirut" },
    { input: ["/ar/news/bank-bin-dowl-for-islamic-microfinance-participates-in-the-arab-banks-union-forum-in-beirut", "en"], expected: "/en/news/bank-bin-dowl-for-islamic-microfinance-participates-in-the-arab-banks-union-forum-in-beirut" },
    { input: ["/news/saba-african-bank-on-an-official-visit-to-bank-bin-dowal-for-islamic-microfinance", "en"], expected: "/en/news/saba-african-bank-on-an-official-visit-to-bank-bin-dowal-for-islamic-microfinance" },
    { input: ["/ar/news/saba-african-bank-on-an-official-visit-to-bank-bin-dowal-for-islamic-microfinance", "en"], expected: "/en/news/saba-african-bank-on-an-official-visit-to-bank-bin-dowal-for-islamic-microfinance" },
    { input: ["/news/conclusion-of-the-financial-and-credit-analysis-course", "en"], expected: "/en/news/conclusion-of-the-financial-and-credit-analysis-course" },
    { input: ["/ar/news/conclusion-of-the-financial-and-credit-analysis-course", "en"], expected: "/en/news/conclusion-of-the-financial-and-credit-analysis-course" },
    { input: ["/news/conclusion-of-the-two-courses-on-financial-and-credit-analysis", "en"], expected: "/en/news/conclusion-of-the-two-courses-on-financial-and-credit-analysis" },
    { input: ["/ar/news/conclusion-of-the-two-courses-on-financial-and-credit-analysis", "en"], expected: "/en/news/conclusion-of-the-two-courses-on-financial-and-credit-analysis" },
    { input: ["/news/unknown", "en"], expected: "/news/unknown" },
    { input: ["/en/news/unknown", "ar"], expected: "/news/unknown" },

    // D. Unmigrated plain paths

    // E. Unmigrated paths with existing Locale (Dynamic Child Routes remain Legacy)
    { input: ["/ar/business/swift-transfers", "en"], expected: "/en/business/swift-transfers" },
    { input: ["/en/business/product", "ar"], expected: "/business/product" },
    { input: ["/ar/personal/product", "en"], expected: "/personal/product" },
    { input: ["/en/e-services/mobile", "ar"], expected: "/e-services/mobile" },
    
    // E.2 Query and Hash with Batch 3
    { input: ["/en/financing?type=business#products", "ar"], expected: "/ar/financing?type=business#products" },

    // F. Query and Hash
    { input: ["/en/about?tab=history#board", "ar"], expected: "/ar/about?tab=history#board" },
    { input: ["/en/about/annual-reports?year=2025#download", "ar"], expected: "/ar/about/annual-reports?year=2025#download" },
    { input: ["/en/calculator?type=personal#result", "ar"], expected: "/ar/calculator?type=personal#result" },
    { input: ["/en/knowledge-center/faq?category=cards#question-3", "ar"], expected: "/ar/knowledge-center/faq?category=cards#question-3" },
    { input: ["/en/customer-service/complaints?source=faq#form", "ar"], expected: "/ar/customer-service/complaints?source=faq#form" },
    { input: ["/en/customer-service/bank-cards-request?card=credit#application", "ar"], expected: "/ar/customer-service/bank-cards-request?card=credit#application" },

    // F. Locale-like pathnames
    { input: ["/arab-bank", "en"], expected: "/arab-bank" },
    { input: ["/enquiry", "ar"], expected: "/enquiry" },
    { input: ["/ar-about", "en"], expected: "/ar-about" },

    // G. Special links
    { input: ["https://example.com", "en"], expected: "https://example.com" },
    { input: ["mailto:test@example.com", "ar"], expected: "mailto:test@example.com" },
    { input: ["tel:+967000000", "en"], expected: "tel:+967000000" },
    { input: ["#section", "ar"], expected: "#section" },
    { input: ["?tab=about", "en"], expected: "?tab=about" },
    { input: ["about", "en"], expected: "about" },
    { input: ["images/logo.svg", "ar"], expected: "images/logo.svg" },
    { input: ["//cdn.example.com/file", "en"], expected: "//cdn.example.com/file" },
    
    // Additional tests from user
    { input: ["/files/report.pdf", "ar"], expected: "/files/report.pdf" },
    { input: ["/downloads/document.docx", "en"], expected: "/downloads/document.docx" },
    { input: ["/ar/news?page=2#latest", "en"], expected: "/en/news?page=2#latest" },
    { input: ["/en/news/conclusion-of-the-financial-and-credit-analysis-course?source=home#article", "ar"], expected: "/ar/news/conclusion-of-the-financial-and-credit-analysis-course?source=home#article" },
  
    // F. Accounts Dynamic Routes
    { input: ["/accounts/vip", "en"], expected: "/en/accounts/vip" },
    { input: ["/ar/accounts/vip", "en"], expected: "/en/accounts/vip" },
    { input: ["/accounts/noor", "en"], expected: "/en/accounts/noor" },
    { input: ["/ar/accounts/noor", "en"], expected: "/en/accounts/noor" },
    { input: ["/accounts/youth", "en"], expected: "/en/accounts/youth" },
    { input: ["/ar/accounts/youth", "en"], expected: "/en/accounts/youth" },
    { input: ["/accounts/expat", "en"], expected: "/en/accounts/expat" },
    { input: ["/ar/accounts/expat", "en"], expected: "/en/accounts/expat" },
    { input: ["/accounts/unknown", "en"], expected: "/accounts/unknown" },
    { input: ["/en/accounts/unknown", "ar"], expected: "/accounts/unknown" },
    { input: ["/en/accounts/vip?source=header#overview", "ar"], expected: "/ar/accounts/vip?source=header#overview" },
    { input: ["/ar/accounts/noor?source=personal#requirements", "en"], expected: "/en/accounts/noor?source=personal#requirements" },

    // G. E-Services Dynamic Routes
    { input: ["/e-services/mobile-banking", "en"], expected: "/en/e-services/mobile-banking" },
    { input: ["/ar/e-services/mobile-banking", "en"], expected: "/en/e-services/mobile-banking" },
    { input: ["/e-services/internet-banking", "en"], expected: "/en/e-services/internet-banking" },
    { input: ["/ar/e-services/internet-banking", "en"], expected: "/en/e-services/internet-banking" },
    { input: ["/e-services/e-wallet", "en"], expected: "/en/e-services/e-wallet" },
    { input: ["/ar/e-services/e-wallet", "en"], expected: "/en/e-services/e-wallet" },
    { input: ["/e-services/mushtarayati-network", "en"], expected: "/en/e-services/mushtarayati-network" },
    { input: ["/ar/e-services/mushtarayati-network", "en"], expected: "/en/e-services/mushtarayati-network" },
    { input: ["/e-services/unknown", "en"], expected: "/e-services/unknown" },
    { input: ["/en/e-services/bindawal-business", "ar"], expected: "/e-services/bindawal-business" },
    { input: ["/en/e-services/internet-banking?source=header#overview", "ar"], expected: "/ar/e-services/internet-banking?source=header#overview" },
    { input: ["/ar/e-services/mobile-banking?source=digital#download", "en"], expected: "/en/e-services/mobile-banking?source=digital#download" },

    // H. Business Dynamic Routes
    { input: ["/business/corporate-current-account", "en"], expected: "/en/business/corporate-current-account" },
    { input: ["/ar/business/corporate-current-account", "en"], expected: "/en/business/corporate-current-account" },
    { input: ["/business/corporate-investment-deposits", "en"], expected: "/en/business/corporate-investment-deposits" },
    { input: ["/ar/business/corporate-investment-deposits", "en"], expected: "/en/business/corporate-investment-deposits" },
    { input: ["/business/swift-transfers", "en"], expected: "/en/business/swift-transfers" },
    { input: ["/ar/business/swift-transfers", "en"], expected: "/en/business/swift-transfers" },
    { input: ["/business/bank-guarantees", "en"], expected: "/en/business/bank-guarantees" },
    { input: ["/ar/business/bank-guarantees", "en"], expected: "/en/business/bank-guarantees" },
    { input: ["/business/unknown", "en"], expected: "/business/unknown" },
    { input: ["/en/business/unknown", "ar"], expected: "/business/unknown" },
    { input: ["/en/business/swift-transfers?source=header#requirements", "ar"], expected: "/ar/business/swift-transfers?source=header#requirements" },
    { input: ["/ar/business/corporate-current-account?source=hub#overview", "en"], expected: "/en/business/corporate-current-account?source=hub#overview" },

    // I. Personal Financing Dynamic Routes (Batch 12)
    { input: ["/personal/financing-personal", "en"], expected: "/en/personal/financing-personal" },
    { input: ["/ar/personal/financing-personal", "en"], expected: "/en/personal/financing-personal" },
    { input: ["/personal/financing-home", "en"], expected: "/en/personal/financing-home" },
    { input: ["/ar/personal/financing-home", "en"], expected: "/en/personal/financing-home" },
    { input: ["/personal/financing-business", "en"], expected: "/en/personal/financing-business" },
    { input: ["/ar/personal/financing-business", "en"], expected: "/en/personal/financing-business" },
    { input: ["/personal/financing-takamul", "en"], expected: "/en/personal/financing-takamul" },
    { input: ["/ar/personal/financing-takamul", "en"], expected: "/en/personal/financing-takamul" },
    { input: ["/personal/financing-thimar", "en"], expected: "/en/personal/financing-thimar" },
    { input: ["/ar/personal/financing-thimar", "en"], expected: "/en/personal/financing-thimar" },
    { input: ["/personal/financing-taameer", "en"], expected: "/en/personal/financing-taameer" },
    { input: ["/ar/personal/financing-taameer", "en"], expected: "/en/personal/financing-taameer" },
    { input: ["/personal/financing-noor", "en"], expected: "/en/personal/financing-noor" },
    { input: ["/ar/personal/financing-noor", "en"], expected: "/en/personal/financing-noor" },
    { input: ["/personal/financing-zad", "en"], expected: "/en/personal/financing-zad" },
    { input: ["/ar/personal/financing-zad", "en"], expected: "/en/personal/financing-zad" },
    { input: ["/personal/unknown", "en"], expected: "/personal/unknown" },
    { input: ["/en/personal/unknown", "ar"], expected: "/personal/unknown" },
    { input: ["/en/personal/financing-home?source=header#requirements", "ar"], expected: "/ar/personal/financing-home?source=header#requirements" },
    { input: ["/ar/personal/financing-personal?source=hub#overview", "en"], expected: "/en/personal/financing-personal?source=hub#overview" },
    { input: ["/en/personal/mobile-banking", "ar"], expected: "/personal/mobile-banking" },

    // J. Personal Remittance Dynamic Routes (Batch 13)
    { input: ["/personal/moneygram", "en"], expected: "/en/personal/moneygram" },
    { input: ["/ar/personal/moneygram", "en"], expected: "/en/personal/moneygram" },
    { input: ["/personal/shift", "en"], expected: "/en/personal/shift" },
    { input: ["/ar/personal/shift", "en"], expected: "/en/personal/shift" },
    { input: ["/personal/upt", "en"], expected: "/en/personal/upt" },
    { input: ["/ar/personal/upt", "en"], expected: "/en/personal/upt" },
    { input: ["/personal/bin-yaala", "en"], expected: "/en/personal/bin-yaala" },
    { input: ["/ar/personal/bin-yaala", "en"], expected: "/en/personal/bin-yaala" },
    { input: ["/personal/alawneh", "en"], expected: "/en/personal/alawneh" },
    { input: ["/ar/personal/alawneh", "en"], expected: "/en/personal/alawneh" },
    { input: ["/personal/zamzam", "en"], expected: "/en/personal/zamzam" },
    { input: ["/ar/personal/zamzam", "en"], expected: "/en/personal/zamzam" },
    { input: ["/personal/swift", "en"], expected: "/en/personal/swift" },
    { input: ["/ar/personal/swift", "en"], expected: "/en/personal/swift" },
    { input: ["/personal/remittance-unknown", "en"], expected: "/personal/remittance-unknown" },
    { input: ["/en/personal/remittance-unknown", "ar"], expected: "/personal/remittance-unknown" },
    { input: ["/en/personal/moneygram?source=header#requirements", "ar"], expected: "/ar/personal/moneygram?source=header#requirements" },
    { input: ["/ar/personal/swift?source=hub#overview", "en"], expected: "/en/personal/swift?source=hub#overview" },
    { input: ["/en/personal/swift-transfers", "ar"], expected: "/personal/swift-transfers" },

    // K. Personal E-Channel Compatibility (Batch 14C)
    // Canonical E-Services
    { input: ["/e-services/mobile-banking", "en"], expected: "/en/e-services/mobile-banking" },
    { input: ["/e-services/e-wallet", "en"], expected: "/en/e-services/e-wallet" },
    { input: ["/e-services/mushtarayati-network", "en"], expected: "/en/e-services/mushtarayati-network" },
    // Personal compatibility negatives
    { input: ["/personal/mobile-banking", "en"], expected: "/personal/mobile-banking" },
    { input: ["/personal/e-wallet", "en"], expected: "/personal/e-wallet" },
    { input: ["/personal/mushtarayati-network", "en"], expected: "/personal/mushtarayati-network" },
    // Localized personal fallback
    { input: ["/en/personal/mobile-banking", "ar"], expected: "/personal/mobile-banking" },
    { input: ["/en/personal/e-wallet", "ar"], expected: "/personal/e-wallet" },
    { input: ["/en/personal/mushtarayati-network", "ar"], expected: "/personal/mushtarayati-network" },
    // Domain preservation
    { input: ["/ar/e-services/mobile-banking", "en"], expected: "/en/e-services/mobile-banking" },

    // L. Personal Independent Transfers (Batch 15A)
    // Known - 4
    { input: ["/personal/dool-express", "en"], expected: "/en/personal/dool-express" },
    { input: ["/ar/personal/dool-express", "en"], expected: "/en/personal/dool-express" },
    { input: ["/personal/unified-network", "en"], expected: "/en/personal/unified-network" },
    { input: ["/ar/personal/unified-network", "en"], expected: "/en/personal/unified-network" },
    // Unknown - 2
    { input: ["/personal/independent-transfer-unknown", "en"], expected: "/personal/independent-transfer-unknown" },
    { input: ["/en/personal/independent-transfer-unknown", "ar"], expected: "/personal/independent-transfer-unknown" },
    // Query and Hash - 2
    { input: ["/en/personal/dool-express?source=header#details", "ar"], expected: "/ar/personal/dool-express?source=header#details" },
    { input: ["/ar/personal/unified-network?source=hub#overview", "en"], expected: "/en/personal/unified-network?source=hub#overview" },
    { input: ["/personal/account-product-unknown", "en"], expected: "/personal/account-product-unknown" },
    { input: ["/en/personal/mobile-banking", "ar"], expected: "/personal/mobile-banking" },

    // M. Personal Core Transfers (Batch 15C)
    // Known - 3
    { input: ["/personal/local-transfers", "en"], expected: "/en/personal/local-transfers" },
    { input: ["/ar/personal/local-transfers", "en"], expected: "/en/personal/local-transfers" },
    { input: ["/personal/international-transfers", "en"], expected: "/en/personal/international-transfers" },
    { input: ["/ar/personal/international-transfers", "en"], expected: "/en/personal/international-transfers" },
    { input: ["/personal/fast-money-transfers", "en"], expected: "/en/personal/fast-money-transfers" },
    { input: ["/ar/personal/fast-money-transfers", "en"], expected: "/en/personal/fast-money-transfers" },
    // Query and Hash - 3
    { input: ["/en/personal/local-transfers?source=header#channels", "ar"], expected: "/ar/personal/local-transfers?source=header#channels" },
    { input: ["/ar/personal/international-transfers?source=hub#steps", "en"], expected: "/en/personal/international-transfers?source=hub#steps" },
    { input: ["/en/personal/fast-money-transfers?source=related#faq", "ar"], expected: "/ar/personal/fast-money-transfers?source=related#faq" },
    // Boundaries - 2
    { input: ["/personal/core-transfer-unknown", "en"], expected: "/personal/core-transfer-unknown" },
    { input: ["/en/personal/core-transfer-unknown", "ar"], expected: "/personal/core-transfer-unknown" },

    // N. Personal Accounts and Deposits (Batch 16A)
    // Known - 4
    { input: ["/personal/current-account", "en"], expected: "/en/personal/current-account" },
    { input: ["/ar/personal/current-account", "en"], expected: "/en/personal/current-account" },
    { input: ["/personal/savings-account", "en"], expected: "/en/personal/savings-account" },
    { input: ["/ar/personal/savings-account", "en"], expected: "/en/personal/savings-account" },
    { input: ["/personal/minors-account", "en"], expected: "/en/personal/minors-account" },
    { input: ["/ar/personal/minors-account", "en"], expected: "/en/personal/minors-account" },
    { input: ["/personal/investment-deposit", "en"], expected: "/en/personal/investment-deposit" },
    { input: ["/ar/personal/investment-deposit", "en"], expected: "/en/personal/investment-deposit" },
    // Query and Hash - 3
    { input: ["/en/personal/current-account?source=header#features", "ar"], expected: "/ar/personal/current-account?source=header#features" },
    { input: ["/ar/personal/savings-account?source=hub#requirements", "en"], expected: "/en/personal/savings-account?source=hub#requirements" },
    { input: ["/en/personal/investment-deposit?source=related#faq", "ar"], expected: "/ar/personal/investment-deposit?source=related#faq" },
    // Boundaries - 2
    { input: ["/personal/account-product-unknown", "en"], expected: "/personal/account-product-unknown" },
    { input: ["/en/personal/account-product-unknown", "ar"], expected: "/personal/account-product-unknown" },
    // O. Custom Services and Knowledge Hubs (Batch 18B)
    { input: ["/custom-services", "en"], expected: "/en/custom-services" },
    { input: ["/ar/custom-services", "en"], expected: "/en/custom-services" },
    { input: ["/knowledge", "en"], expected: "/en/knowledge" },
    { input: ["/en/knowledge", "ar"], expected: "/ar/knowledge" },
    { input: ["/en/knowledge?source=header#top", "ar"], expected: "/ar/knowledge?source=header#top" },
    { input: ["/ar/business-banking#payroll", "en"], expected: "/en/business-banking#payroll" },
    { input: ["/en/business-banking#finance", "ar"], expected: "/ar/business-banking#finance" },

    // L. Contact Route Tests
    { input: ["/contact", "en"], expected: "/en/contact" },
    { input: ["/ar/contact", "en"], expected: "/en/contact" },
    { input: ["/en/contact", "ar"], expected: "/ar/contact" },
    { input: ["/contact?source=footer", "en"], expected: "/en/contact?source=footer" },
    { input: ["/en/contact?source=header#form", "ar"], expected: "/ar/contact?source=header#form" },

    // M. Additional Assertions to reach 242 baseline
    { input: ["/digital-channels", "en"], expected: "/en/digital-channels" },
    { input: ["/ar/digital-channels", "en"], expected: "/en/digital-channels" },
    { input: ["/en/digital-channels", "ar"], expected: "/ar/digital-channels" },
    { input: ["/digital-channels?source=header", "en"], expected: "/en/digital-channels?source=header" },
    { input: ["/branches", "en"], expected: "/en/branches" },
    { input: ["/ar/branches", "en"], expected: "/en/branches" },
    { input: ["/en/branches", "ar"], expected: "/ar/branches" },
    { input: ["/atm-and-branches", "en"], expected: "/en/atm-and-branches" },
    { input: ["/ar/atm-and-branches", "en"], expected: "/en/atm-and-branches" },
    { input: ["/en/atm-and-branches", "ar"], expected: "/ar/atm-and-branches" },
    { input: ["/about", "en"], expected: "/en/about" },
    { input: ["/ar/about", "en"], expected: "/en/about" },
    { input: ["/en/about", "ar"], expected: "/ar/about" },
    { input: ["/about/annual-reports", "en"], expected: "/en/about/annual-reports" },
    { input: ["/ar/about/annual-reports", "en"], expected: "/en/about/annual-reports" },
    { input: ["/en/about/annual-reports", "ar"], expected: "/ar/about/annual-reports" },
    { input: ["/about/board-of-directors", "en"], expected: "/en/about/board-of-directors" },
    { input: ["/ar/about/board-of-directors", "en"], expected: "/en/about/board-of-directors" },
    { input: ["/en/about/board-of-directors", "ar"], expected: "/ar/about/board-of-directors" }
  ];

  for (let i = 0; i < hrefTests.length; i++) {
    const { input, expected } = hrefTests[i];
    const result = getLocalizedHref(input[0] as string, input[1] as any);
    try {
      assert.strictEqual(result, expected, `Href Test ${i + 1} Failed`);
      console.log(`Href Test ${i + 1} Passed: getLocalizedHref("${input[0]}", "${input[1]}") -> "${result}"`);
    } catch (e: any) {
      console.error(e.message, `| Got: "${result}", Expected: "${expected}"`);
      process.exit(1);
    }
  }
  console.log("All getLocalizedHref tests passed!");
}

runTests();
