export interface SearchDocument {
  id: string;
  locale: "ar" | "en";
  title: string;
  description: string;
  path: string;
  category?: string;
  keywords?: string[];
}

export interface SearchResult {
  document: SearchDocument;
  score: number;
}

export interface SearchProvider {
  search(query: string, locale: "ar" | "en"): Promise<SearchResult[]>;
  getAllDocuments(locale: "ar" | "en"): Promise<SearchDocument[]>;
}

export interface SearchService {
  search(query: string, locale: "ar" | "en"): Promise<SearchResult[]>;
}
