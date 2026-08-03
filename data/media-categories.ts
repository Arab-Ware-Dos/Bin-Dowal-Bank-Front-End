export type MediaCategory = "bank-news" | "bank-events" | "bank-achievements";
export type MediaCategoryFilter = MediaCategory | "all";

export const MEDIA_CATEGORIES: Record<MediaCategoryFilter, { ar: string; en: string }> = {
  "all": { ar: "الكل", en: "All" },
  "bank-news": { ar: "أخبار البنك", en: "Bank News" },
  "bank-events": { ar: "فعاليات البنك", en: "Bank Events" },
  "bank-achievements": { ar: "إنجازات البنك", en: "Bank Achievements" },
};
