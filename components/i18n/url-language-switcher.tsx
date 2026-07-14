"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Globe } from "lucide-react";
import { Locale } from "@/i18n/config";
import { buildLocaleSwitchTarget } from "./url-language-switcher.utils";

interface UrlLanguageSwitcherProps {
  locale: Locale;
}

export function UrlLanguageSwitcher({ locale }: UrlLanguageSwitcherProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [hash, setHash] = useState("");

  const targetLocale = locale === "ar" ? "en" : "ar";
  const label = targetLocale === "ar" ? "العربية" : "English";

  useEffect(() => {
    setHash(window.location.hash);

    const handleHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const search = searchParams?.toString() || "";
  const href = buildLocaleSwitchTarget({
    pathname: pathname || "/",
    search,
    hash,
    targetLocale,
  });

  return (
    <Link
      href={href}
      className="flex items-center gap-2 text-sm transition-colors hover:text-slate-900"
      aria-label={label}
    >
      <Globe className="h-4 w-4" />
      <span className="hidden sm:inline">{label}</span>
    </Link>
  );
}
