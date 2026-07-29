import { Metadata } from "next";
import { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { SearchInput } from "@/components/search/SearchInput";
import { SearchResultsClient } from "@/components/search/SearchResultsClient";
import { Suspense } from "react";

export async function generateMetadata(props: { 
  params: Promise<{ locale: Locale }>; 
}): Promise<Metadata> {
  const params = await props.params;
  const dict = await getDictionary(params.locale);
  
  return {
    title: `${dict["search.title"]} | Bindowal Bank`,
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default async function SearchPage(props: {
  params: Promise<{ locale: Locale }>;
}) {
  const params = await props.params;
  const dict = await getDictionary(params.locale);

  return (
    <div className="min-h-[60vh] bg-slate-50 py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-12 flex flex-col items-center justify-center space-y-6">
          <h1 className="text-3xl font-bold text-[#2d3185]">
            {dict["search.title"]}
          </h1>
          <div className="w-full max-w-xl">
            <Suspense fallback={<div className="h-12 w-full bg-slate-200/50 animate-pulse rounded-full" />}>
              <SearchInput className="max-w-none lg:max-w-none" />
            </Suspense>
          </div>
        </div>

        <Suspense fallback={
          <div className="flex justify-center py-12">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-[#2d3185]"></div>
          </div>
        }>
          <SearchResultsClient />
        </Suspense>
      </div>
    </div>
  );
}
