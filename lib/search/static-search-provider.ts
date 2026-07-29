import { SearchDocument, SearchProvider, SearchResult } from "./search-types";
import { calculateSearchScore } from "./calculate-search-score";
import { navigationData } from "@/data/navigation";
import { bankingServicesData } from "@/data/banking-services/banking-services";

export class StaticSearchProvider implements SearchProvider {
  private documentsAr: SearchDocument[] = [];
  private documentsEn: SearchDocument[] = [];
  private initialized = false;

  private buildIndex() {
    if (this.initialized) return;

    const pushDoc = (href: string, titleAr: string, titleEn: string, categoryAr?: string, categoryEn?: string) => {
      // Avoid duplicates
      if (this.documentsAr.some((d) => d.path === href)) {
        return;
      }

      // Try to find rich metadata from banking services
      const serviceMatch = bankingServicesData.find((s) => s.slug && href.includes(s.slug));
      let descAr = "";
      let descEn = "";
      
      if (serviceMatch) {
        descAr = serviceMatch.seoDescription?.ar || serviceMatch.overview?.description?.ar || "";
        descEn = serviceMatch.seoDescription?.en || serviceMatch.overview?.description?.en || "";
      }

      this.documentsAr.push({
        id: href + "-ar",
        locale: "ar",
        title: titleAr,
        description: descAr,
        path: href,
        category: categoryAr,
        keywords: []
      });

      this.documentsEn.push({
        id: href + "-en",
        locale: "en",
        title: titleEn,
        description: descEn,
        path: href,
        category: categoryEn,
        keywords: []
      });
    };

    // Traverse navigation hierarchy
    navigationData.forEach((item) => {
      pushDoc(item.href, item.label.ar, item.label.en);
      
      if (item.groups) {
        item.groups.forEach((group) => {
          group.links.forEach((link) => {
            pushDoc(link.href, link.label.ar, link.label.en, item.label.ar, item.label.en);
            if (link.subLinks) {
              link.subLinks.forEach((sub) => {
                pushDoc(sub.href, sub.label.ar, sub.label.en, group.title.ar, group.title.en);
              });
            }
          });
        });
      }

      if (item.singleLinks) {
        item.singleLinks.forEach((link) => {
          pushDoc(link.href, link.label.ar, link.label.en, item.label.ar, item.label.en);
        });
      }
    });

    // Add extra common pages that might not be fully covered
    pushDoc("/customer-service/forms", "النماذج", "Forms", "خدمة العملاء", "Customer Service");
    pushDoc("/atm-and-branches", "الفروع والصرافات الآلية", "Branches and ATMs");
    pushDoc("/contact", "اتصل بنا", "Contact Us");
    pushDoc("/knowledge-center/faq", "الأسئلة الشائعة", "FAQs", "مركز المعرفة", "Knowledge Center");

    this.initialized = true;
  }

  async getAllDocuments(locale: "ar" | "en"): Promise<SearchDocument[]> {
    this.buildIndex();
    return locale === "ar" ? this.documentsAr : this.documentsEn;
  }

  async search(query: string, locale: "ar" | "en"): Promise<SearchResult[]> {
    this.buildIndex();
    const docs = locale === "ar" ? this.documentsAr : this.documentsEn;
    const results: SearchResult[] = [];
    
    for (const doc of docs) {
      const score = calculateSearchScore(query, doc.title, doc.description, doc.keywords);
      if (score > 0) {
        results.push({ document: doc, score });
      }
    }
    
    // Sort descending by score
    return results.sort((a, b) => b.score - a.score);
  }
}
