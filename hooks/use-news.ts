import { useState, useEffect } from "react";
import { NewsArticle } from "@/types/news-article";
import { newsItems } from "@/data/news";

export function useNews() {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    const timer = setTimeout(() => {
      setNews(newsItems);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return { news, loading };
}
