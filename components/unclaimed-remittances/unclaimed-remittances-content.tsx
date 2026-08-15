"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Search, AlertCircle, FileText } from "lucide-react";
import { unclaimedRemittancesData, Remittance } from "@/data/unclaimed-remittances";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/lib/i18n-context";

export function UnclaimedRemittancesContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<Remittance[] | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const { locale } = useI18n();
  const isAr = locale === "ar";

  const normalizeArabic = (text: string) => {
    return text
      .replace(/[أإآا]/g, "ا")
      .replace(/ة/g, "ه")
      .replace(/[يى]/g, "ي")
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase();
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsSearching(true);

    // Simulate API delay
    setTimeout(() => {
      const normalizedQuery = normalizeArabic(searchQuery);
      const wordsCount = normalizedQuery.split(" ").length;

      // Require at least 4 words for a "four-part name" (الاسم الرباعي)
      if (wordsCount < 4) {
        setResults([]);
        setIsSearching(false);
        return;
      }

      const filtered = unclaimedRemittancesData.filter((remittance) =>
        normalizeArabic(remittance.fullName) === normalizedQuery
      );
      
      setResults(filtered);
      setIsSearching(false);
    }, 800);
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
              <Search className={`absolute ${isAr ? 'right-3' : 'left-3'} top-1/2 -translate-y-1/2 text-muted-foreground`} size={20} />
              <Input
                type="text"
                placeholder={isAr ? "أدخل الاسم الرباعي..." : "Enter full name..."}
                className={`text-lg py-6 ${isAr ? 'pr-10' : 'pl-10'} rounded-lg border-2 focus-visible:ring-bank-primary`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
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
          {results !== null && !isSearching && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {results.length > 0 ? (
                <Card className="p-6 bg-green-50 border-green-200 shadow-sm overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-2 h-full bg-green-500"></div>
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                    <div className="p-3 bg-green-100 rounded-full text-green-600">
                      <FileText size={28} />
                    </div>
                    <div className="text-center sm:text-start">
                      <h3 className="text-xl font-bold text-green-800 mb-2">
                        {isAr ? "نتيجة البحث" : "Search Result"}
                      </h3>
                      <p className="text-green-700 text-lg leading-relaxed">
                        {isAr ? (
                          <>
                            تم العثور على <strong className="font-black text-green-900"></strong> {'حوالة'} مطابقة. يرجى مراجعة أقرب فرع لبنك بن دول للإستعلام عنها.
                          </>
                        ) : (
                          <>
                            Found <strong className="font-black text-green-900">{results.length}</strong> matching {results.length === 1 ? 'remittance' : 'remittances'}. Please visit the nearest branch to receive it.
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                </Card>
              ) : (
                <Card className="p-6 bg-red-50 border-red-100 shadow-sm overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-2 h-full bg-red-500"></div>
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                    <div className="p-3 bg-red-100 rounded-full text-red-600">
                      <AlertCircle size={28} />
                    </div>
                    <div className="text-center sm:text-start">
                      <h3 className="text-xl font-bold text-red-800 mb-2">
                        {isAr ? "عذرًا" : "Sorry"}
                      </h3>
                      <p className="text-red-700 text-lg">
                        {isAr
                          ? "لم يتم العثور على حوالة مطابقة أو أن الاسم المدخل غير مكتمل. يرجى إدخال الاسم الرباعي بشكل كامل ومطابق تماماً للحوالة."
                          : "No matching remittance found or incomplete name. Please enter your exact full name (4 parts) and try again."}
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
