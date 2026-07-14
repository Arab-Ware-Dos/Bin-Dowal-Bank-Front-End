import { I18nProvider } from '@/lib/i18n-context'
import { somarSans } from '@/lib/fonts'
import { SharedSiteShell } from '@/components/layout/shared-site-shell'
import { isLocale, locales, Locale } from '@/i18n/config'
import { notFound } from 'next/navigation'
import '../globals.css'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

function getLocaleDirection(locale: Locale) {
  return locale === "ar" ? "rtl" : "ltr";
}

export default function LocalizedRootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  if (!isLocale(locale)) {
    notFound();
  }

  const validatedLocale = locale as Locale;

  return (
    <html lang={validatedLocale} dir={getLocaleDirection(validatedLocale)} suppressHydrationWarning className={`${somarSans.variable} font-sans`}>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <I18nProvider mode="url" initialLocale={validatedLocale}>
          <SharedSiteShell localeMode="url" locale={validatedLocale}>
            {children}
          </SharedSiteShell>
        </I18nProvider>
      </body>
    </html>
  )
}
