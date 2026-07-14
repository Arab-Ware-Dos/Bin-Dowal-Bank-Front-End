"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Locale } from "@/i18n/config";
import { buildLocaleSwitchTarget } from "./locale-switcher-poc.utils";

interface Props {
  currentLocale: Locale;
}

export default function LocaleSwitcherPoc({ currentLocale }: Props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const targetLocale = currentLocale === "ar" ? "en" : "ar";
  const search = searchParams.toString();
  
  // Base href without hash for progressive enhancement
  const hrefWithoutHash = buildLocaleSwitchTarget({
    pathname,
    search,
    hash: "",
    targetLocale
  });

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Check if there is a hash to preserve
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    if (hash) {
      e.preventDefault();
      const fullHref = buildLocaleSwitchTarget({
        pathname,
        search,
        hash,
        targetLocale
      });
      router.push(fullHref);
    }
  };

  return (
    <Link 
      href={hrefWithoutHash}
      onClick={handleClick}
      style={{
        padding: "0.5rem 1rem",
        background: "#0056b3",
        color: "white",
        textDecoration: "none",
        borderRadius: "4px",
        fontWeight: "bold"
      }}
    >
      {targetLocale === "ar" ? "العربية" : "English"}
    </Link>
  );
}
