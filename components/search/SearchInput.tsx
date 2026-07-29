"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useI18n } from "@/lib/i18n-context";

export function SearchInput({ className = "" }: { className?: string }) {
  const { t, locale } = useI18n();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams?.get("q") || "");

  useEffect(() => {
    setQuery(searchParams?.get("q") || "");
  }, [searchParams]);

  const handleSearch = () => {
    const trimmed = query.trim();
    if (!trimmed) return;
    const searchPath = `/${locale}/search?q=${encodeURIComponent(trimmed)}`;
    router.push(searchPath);
  };

  return (
    <div className={`relative flex items-center w-full group ${className}`}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        placeholder={t("search.placeholder")}
        aria-label={t("search.placeholder")}
        className="w-full h-8 ps-11 pe-4 py-2 bg-slate-100/70 border border-slate-200/80 rounded-full text-[13px] font-medium outline-none focus:ring-2 focus:ring-[#2d3185]/20 focus:border-[#2d3185] focus:bg-white transition-all text-slate-700 placeholder:text-slate-400"
      />
      <button
        onClick={handleSearch}
        className="absolute top-0 start-0 h-8 w-11 flex items-center justify-center text-slate-400 group-focus-within:text-[#2d3185] hover:text-[#ed1c24] transition-colors"
        aria-label={t("search.searchButton")}
      >
        <Search className="h-4.5 w-4.5" />
      </button>
    </div>
  );
}
