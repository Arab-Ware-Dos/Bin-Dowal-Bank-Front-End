"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Search, AlertCircle, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/lib/i18n-context";
import { checkUnclaimedRemittance } from "@/services/unclaimed-remittances-service";
import type { CheckRemittanceResponse } from "@/types/unclaimed-remittances";

export function UnclaimedRemittancesContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [result, setResult] = useState<CheckRemittanceResponse | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const { locale } = useI18n();
  const isAr = locale === "ar";

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = searchQuery.trim();
    if (!trimmed) return;

    setIsSearching(true);
    setResult(null);

    try {
      const res = await checkUnclaimedRemittance(trimmed, locale);
      setResult(res);
    } catch {
      setResult({
        status: "not_found",
        found: false,
        message: isAr
          ? "حدث خطأ غير متوقع أثناء الفحص. يرجى المحاولة مرة أخرى."
          : "An unexpected error occurred. Please try again later.",
      });
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-bank-primary">
            {isAr ? "البحث عن الحوالات غير المستلمة" : "Search Unclaimed Remittances"}
          </h2>
          <p className="text-muted-foreground text-lg">
            {isAr
              ? "ابحث باستخدام الاسم الرباعي للتحقق من وجود أي حوالات غير مستلمة باسمك."
              : "Search using your full name to check for any unclaimed remittances."}
          </p>
        </div>

        <Card className="p-6 md:p-8 shadow-lg border-t-4 border-t-bank-primary rounded-xl bg-white/50 backdrop-blur-sm">
          <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search
                className={`absolute ${isAr ? "right-3" : "left-3"} top-1/2 -translate-y-1/2 text-muted-foreground`}
                size={20}
              />
              <Input
                type="text"
                placeholder={isAr ? "أدخل الاسم الرباعي..." : "Enter full name..."}
                className={`text-lg py-6 ${isAr ? "pr-10" : "pl-10"} rounded-lg border-2 focus-visible:ring-bank-primary`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                required
              />
            </div>
            <Button
              type="submit"
              disabled={isSearching || !searchQuery.trim()}
              className="py-6 px-8 text-lg rounded-2xl bg-[#2d3185] text-[15px] font-bold text-white hover:bg-[#23276f] transition-all duration-300 cursor-pointer"
            >
              {isSearching ? (
                <div className="flex items-center gap-2">
                  <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
                  <span>{isAr ? "جاري البحث..." : "Searching..."}</span>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Search size={20} />
                  <span>{isAr ? "بحث" : "Search"}</span>
                </div>
              )}
            </Button>
          </form>
        </Card>

        <AnimatePresence mode="wait">
          {result !== null && !isSearching && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {result.found ? (
                /* SUCCESS / MATCH FOUND (GREEN CARD) */
                <Card className="p-6 bg-green-50 border-green-200 shadow-sm overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-2 h-full bg-green-500"></div>
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                    <div className="p-3 bg-green-100 rounded-full text-green-600">
                      <CheckCircle2 size={28} />
                    </div>
                    <div className="text-center sm:text-start space-y-1">
                      <h3 className="text-xl font-bold text-green-800">
                        {isAr ? "نتيجة البحث" : "Search Result"}
                      </h3>
                      <p className="text-green-700 text-lg leading-relaxed font-medium">
                        {result.message}
                      </p>
                      {/* {result.matches_count && result.matches_count > 1 ? (
                        <p className="text-xs text-green-800/80 font-bold mt-2">
                          {isAr
                            ? `* تم العثور على ${result.matches_count} حوالات مسجلة بهذا الاسم.`
                            : `* Found ${result.matches_count} remittances registered under this name.`}
                        </p>
                      ) : null} */}
                    </div>
                  </div>
                </Card>
              ) : result.status === "invalid_name" || result.status === "invalid_input" ? (
                /* WARNING / INVALID NAME (AMBER CARD) */
                <Card className="p-6 bg-amber-50 border-amber-200 shadow-sm overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-2 h-full bg-amber-500"></div>
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                    <div className="p-3 bg-amber-100 rounded-full text-amber-600">
                      <AlertCircle size={28} />
                    </div>
                    <div className="text-center sm:text-start space-y-1">
                      <h3 className="text-xl font-bold text-amber-800">
                        {isAr ? "تنبيه إدخال الاسم" : "Name Input Notice"}
                      </h3>
                      <p className="text-amber-700 text-lg leading-relaxed font-medium">
                        {result.message}
                      </p>
                    </div>
                  </div>
                </Card>
              ) : (
                /* NOT FOUND (RED CARD) */
                <Card className="p-6 bg-red-50 border-red-100 shadow-sm overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-2 h-full bg-red-500"></div>
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                    <div className="p-3 bg-red-100 rounded-full text-red-600">
                      <AlertCircle size={28} />
                    </div>
                    <div className="text-center sm:text-start space-y-1">
                      <h3 className="text-xl font-bold text-red-800">
                        {isAr ? "نتيجة البحث" : "Search Result"}
                      </h3>
                      <p className="text-red-700 text-lg leading-relaxed font-medium">
                        {result.message}
                      </p>
                    </div>
                  </div>
                </Card>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
