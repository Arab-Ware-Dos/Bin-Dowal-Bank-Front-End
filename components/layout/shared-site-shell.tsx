import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import dynamic from 'next/dynamic'

import { Locale } from '@/i18n/config'

const Chatbot = dynamic(() => import('@/components/layout/chatbot').then(mod => mod.Chatbot))

export type SharedSiteShellProps =
  | {
      localeMode?: "legacy";
      locale?: never;
      children: React.ReactNode;
    }
  | {
      localeMode: "url";
      locale: Locale;
      children: React.ReactNode;
    };

export function SharedSiteShell(props: SharedSiteShellProps) {
  const { children, localeMode = "legacy", locale } = props;

  return (
    <>
      {localeMode === "url" ? (
        <Header localeMode={localeMode} locale={locale as Locale} />
      ) : (
        <Header localeMode="legacy" />
      )}
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <Chatbot />
    </>
  )
}
