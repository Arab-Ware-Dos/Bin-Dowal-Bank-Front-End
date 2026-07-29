import { StaticSearchProvider } from "../lib/search/static-search-provider";

async function run() {
  const provider = new StaticSearchProvider();
  const docsAr = await provider.getAllDocuments("ar");
  const docsEn = await provider.getAllDocuments("en");
  
  console.log("AR Documents:", docsAr.length);
  console.log("EN Documents:", docsEn.length);
  
  console.log("\nIncluded Paths Sample:");
  console.log(docsAr.map(d => d.path).slice(0, 10).join("\n"));
  
  console.log("\nChecking for specific sections:");
  const paths = docsAr.map(d => d.path);
  console.log("bank-forms (/customer-service/forms):", paths.includes("/customer-service/forms"));
  console.log("faq (/knowledge-center/faq):", paths.includes("/knowledge-center/faq"));
  console.log("news (/news):", paths.includes("/news"));
  console.log("careers (/about/careers):", paths.includes("/about/careers"));
  console.log("branches (/branches):", paths.includes("/branches"));
}

run().catch(console.error);
