"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useI18n } from "@/lib/i18n-context";
import { searchService } from "@/lib/search/search-service";
import { SearchResult } from "@/lib/search/search-types";
import { SearchResultsList } from "./SearchResultsList";
import { SearchEmptyState } from "./SearchEmptyState";

export function SearchResultsClient() {
  const { t, locale } = useI18n();
  const searchParams = useSearchParams();
  const query = searchParams?.get("q") || "";
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchResults() {
      if (!query) {
        setResults([]);
        setIsLoading(false);
        return;
      }
      setIsLoading(true);
      const res = await searchService.search(query, locale);
      setResults(res);
      setIsLoading(false);
    }
    fetchResults();
  }, [query, locale]);

  if (!query) {
    return <SearchEmptyState type="emptyQuery" />;
  }

  if (isLoading) {
    return (
      <div className="flex justify-center py-12">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-[#2d3185]"></div>
      </div>
    );
  }

  if (results.length === 0) {
    return <SearchEmptyState type="noResults" />;
  }

  return (
    <div className="space-y-6">
      <p className="text-slate-600 font-medium text-center mb-8">
        {t("search.resultCount").replace("{count}", results.length.toString())}
        {" "}
        <span className="font-bold text-[#2d3185]">"{query}"</span>
      </p>
      <SearchResultsList results={results} />
    </div>
  );
}
