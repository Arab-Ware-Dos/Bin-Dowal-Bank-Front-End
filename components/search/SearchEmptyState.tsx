import { Search } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";

export function SearchEmptyState({ type }: { type: "emptyQuery" | "noResults" }) {
  const { t } = useI18n();
  
  const title = type === "emptyQuery" ? t("search.emptyQuery") : t("search.noResults");
  const subtitle = type === "noResults" ? t("search.suggestion") : "";

  return (
    <div className="flex flex-col items-center justify-center text-center py-20 px-4 w-full">
      <div className="flex items-center justify-center w-20 h-20 rounded-[28px] bg-slate-50 text-slate-300 mb-6 border border-slate-100 shadow-sm">
        <Search className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
      {subtitle && <p className="text-[15px] text-slate-500 max-w-md mx-auto">{subtitle}</p>}
    </div>
  );
}
