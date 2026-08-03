export type ArticleBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "heading";
      text: string;
      level?: 2 | 3 | 4;
    }
  | {
      type: "quote";
      text: string;
    }
  | {
      type: "list";
      items: string[];
    };

export type ArticleContent = string | string[] | ArticleBlock[];

export interface NewsArticle {
  id: string;
  slug: string;
  titleAr: string;
  titleEn: string;
  excerptAr: string;
  excerptEn: string;
  contentAr: ArticleContent;
  contentEn: ArticleContent;
  category: import("@/data/media-categories").MediaCategory;
  image?: string;
  imageAltAr?: string;
  imageAltEn?: string;
  date: string;
  publishedAt?: string;
  url?: string;
}
