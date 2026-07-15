export const NEWS_SLUGS = [
  "bank-bin-dowl-for-islamic-microfinance-participates-in-the-arab-banks-union-forum-in-beirut",
  "saba-african-bank-on-an-official-visit-to-bank-bin-dowal-for-islamic-microfinance",
  "conclusion-of-the-financial-and-credit-analysis-course",
  "conclusion-of-the-two-courses-on-financial-and-credit-analysis"
] as const;

export type NewsSlug = typeof NEWS_SLUGS[number];
