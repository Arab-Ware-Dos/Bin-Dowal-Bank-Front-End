import { SearchResult } from "@/lib/search/search-types";
import { SearchResultCard } from "./SearchResultCard";

export function SearchResultsList({ results }: { results: SearchResult[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
      {results.map((result, idx) => (
        <SearchResultCard key={`${result.document.id}-${idx}`} result={result} />
      ))}
    </div>
  );
}
