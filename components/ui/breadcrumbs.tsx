"use client"

import Link from "next/link"
import { useI18n } from "@/lib/i18n-context"
import { ChevronLeft, ChevronRight, Home } from "lucide-react"
import { getLocalizedHref } from "@/lib/localized-routes"

interface BreadcrumbItem {
  labelKey: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const { t, direction, mode, locale } = useI18n()
  const Chevron = direction === "rtl" ? ChevronLeft : ChevronRight

  const getLabel = (key: string) => {
    if (!key) return "";
    const translated = t(key);
    return (translated && translated !== key) ? translated : key;
  };

  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center gap-2 text-sm text-white/60 flex-wrap">
        <li>
          <Link
            href={mode === "url" ? getLocalizedHref("/", locale) : "/"}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Home className="h-3.5 w-3.5" />
            <span className="sr-only">{getLabel("nav.home")}</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <Chevron className="h-3.5 w-3.5 text-white/30" />
            {item.href ? (
              <Link
                href={mode === "url" ? getLocalizedHref(item.href, locale) : item.href}
                className="hover:text-white transition-colors text-white/60"
              >
                {getLabel(item.labelKey)}
              </Link>
            ) : (
              <span className="font-medium text-white">{getLabel(item.labelKey)}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
