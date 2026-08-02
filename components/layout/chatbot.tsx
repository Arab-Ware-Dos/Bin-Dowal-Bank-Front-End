'use client'

import { useState, useRef } from 'react'
import { MessageCircle, Loader2 } from 'lucide-react'
import { useI18n } from '@/lib/i18n-context'

export function Chatbot() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const loadedRef = useRef(false)
  const { locale, direction } = useI18n()
  const isAr = locale === 'ar'

  const handleOpenChat = () => {
    if (loadedRef.current) return
    loadedRef.current = true
    setIsLoading(true)

    const scriptId = 'jotform-agent-script'
    if (document.getElementById(scriptId)) {
      setIsLoaded(true)
      setIsLoading(false)
      return
    }

    const script = document.createElement('script')
    script.id = scriptId
    script.src = 'https://cdn.jotfor.ms/agent/embedjs/019eca6757bf7e629be9ab9c55b2d215aad8/embed.js'
    script.async = true
    
    script.onload = () => {
      setIsLoaded(true)
      setIsLoading(false)
    }

    script.onerror = () => {
      setIsLoading(false)
      loadedRef.current = false // Allow retry on failure
    }

    document.body.appendChild(script)
  }

  // Once Jotform is loaded, it manages its own floating button and UI.
  // We hide our local button to avoid overlapping.
  if (isLoaded) return null

  return (
    <div className="fixed bottom-6 end-6 z-50">
      <button
        onClick={handleOpenChat}
        disabled={isLoading}
        aria-label={isAr ? "المساعدة" : "Help"}
        dir={direction}
        className="flex h-16 w-16 items-center justify-center rounded-full bg-[#2d3185] text-white shadow-[0_4px_20px_rgba(45,49,133,0.3)] transition-all duration-300 hover:scale-105 hover:bg-[#23276f] hover:shadow-[0_8px_25px_rgba(45,49,133,0.4)] focus:outline-none focus:ring-4 focus:ring-[#2d3185]/30 disabled:opacity-90 disabled:hover:scale-100"
      >
        {isLoading ? (
          <Loader2 className="h-7 w-7 animate-spin" />
        ) : (
          <MessageCircle className="h-8 w-8" />
        )}
      </button>
    </div>
  )
}
