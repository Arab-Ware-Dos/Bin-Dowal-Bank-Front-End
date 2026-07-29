import { SearchProvider, SearchResult, SearchService } from "./search-types";
import { StaticSearchProvider } from "./static-search-provider";

export class GlobalSearchService implements SearchService {
  private provider: SearchProvider;

  constructor(provider?: SearchProvider) {
    // Default to StaticSearchProvider for v1. Can be replaced with ApiSearchProvider later.
    this.provider = provider || new StaticSearchProvider();
  }

  async search(query: string, locale: "ar" | "en"): Promise<SearchResult[]> {
    const trimmed = query.trim();
    if (!trimmed) return [];
    
    // Limit query length for safety
    const safeQuery = trimmed.slice(0, 100);
    
    // Handle multiple spaces and normalize query slightly before passing
    const normalizedQuery = safeQuery.replace(/\s+/g, " ");
    
    return this.provider.search(normalizedQuery, locale);
  }
}

export const searchService = new GlobalSearchService();
