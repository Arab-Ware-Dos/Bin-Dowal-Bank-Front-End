import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SearchResult } from "@/lib/search/search-types";
import { useI18n } from "@/lib/i18n-context";
import { getLocalizedHref } from "@/lib/localized-routes";

export function SearchResultCard({ result }: { result: SearchResult }) {
  const { locale } = useI18n();
  const { title, description, path, category } = result.document;
  
  // Clean potential HTML tags just in case
  const cleanDescription = description.replace(/<[^>]*>?/gm, '');

  return (
    <Link 
      href={getLocalizedHref(path, locale as any)}
      className="group block p-5 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 hover:shadow-[0_8px_30px_rgba(15,23,42,0.04)] transition-all duration-300"
    >
      <div className="flex flex-col h-full gap-2.5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-[17px] font-bold text-[#2d3185] group-hover:text-[#ed1c24] transition-colors leading-tight">
            {title}
          </h3>
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-50 text-slate-400 group-hover:bg-[#2d3185] group-hover:text-white transition-all shrink-0">
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:scale-110 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>
        
        {cleanDescription && (
          <p className="text-[14px] text-slate-600 leading-relaxed line-clamp-2">
            {cleanDescription}
          </p>
        )}

        <div className="flex items-center gap-2 mt-auto pt-2 text-[12px] font-medium text-slate-400">
          {category && (
            <>
              <span className="text-[#2d3185]/70 bg-[#2d3185]/5 px-2 py-0.5 rounded-md">{category}</span>
            </>
          )}
          <span className="truncate opacity-70" dir="ltr">{path}</span>
        </div>
      </div>
    </Link>
  );
}
