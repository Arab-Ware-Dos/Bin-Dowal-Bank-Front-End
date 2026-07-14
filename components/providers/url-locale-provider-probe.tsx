"use client"

import { useI18n } from "@/lib/i18n-context"

export function UrlLocaleProviderProbe() {
  const { locale, mode, t, setLocale } = useI18n()

  return (
    <div style={{ padding: "1rem", border: "2px solid blue", marginTop: "1rem" }}>
      <h3>Provider Contract Probe</h3>
      <ul>
        <li><strong>Provider Mode:</strong> {mode}</li>
        <li><strong>Provider Locale:</strong> {locale}</li>
        <li><strong>Translation (nav.home):</strong> {t("nav.home")}</li>
      </ul>
      <button 
        onClick={() => setLocale(locale === "ar" ? "en" : "ar")}
        style={{ padding: "0.5rem 1rem", background: "#f00", color: "#fff" }}
      >
        Test Internal setLocale (Should fail in URL mode)
      </button>
    </div>
  )
}
