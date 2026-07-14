import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import dynamic from 'next/dynamic'

const Chatbot = dynamic(() => import('@/components/layout/chatbot').then(mod => mod.Chatbot))

export function SharedSiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <Chatbot />
    </>
  )
}
