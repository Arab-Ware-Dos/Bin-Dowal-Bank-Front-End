import { I18nProvider } from "@/lib/i18n-context";
import { SharedSiteShell } from "@/components/layout/shared-site-shell";
import { Header } from "@/components/layout/header";

export function TypeTest() {
  return (
    <>
      {/* Valid Cases */}
      <I18nProvider>
        <div />
      </I18nProvider>

      <I18nProvider mode="legacy">
        <div />
      </I18nProvider>

      <I18nProvider mode="url" initialLocale="ar">
        <div />
      </I18nProvider>

      <SharedSiteShell>
        <div />
      </SharedSiteShell>

      <SharedSiteShell localeMode="url" locale="en">
        <div />
      </SharedSiteShell>

      <Header />
      <Header localeMode="legacy" />
      <Header localeMode="url" locale="ar" />

      {/* Invalid Cases - Expected to fail in TS */}
      {/* @ts-expect-error — URL mode requires initialLocale */}
      <I18nProvider mode="url">
        <div />
      </I18nProvider>

      {/* @ts-expect-error — URL shell requires locale */}
      <SharedSiteShell localeMode="url">
        <div />
      </SharedSiteShell>

      {/* @ts-expect-error — URL header requires locale */}
      <Header localeMode="url" />

      {/* @ts-expect-error — Legacy header must not receive locale */}
      <Header localeMode="legacy" locale="en" />
    </>
  );
}
