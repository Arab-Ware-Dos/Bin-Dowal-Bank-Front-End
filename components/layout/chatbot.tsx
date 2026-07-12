'use client'

import { useEffect } from 'react'

export function Chatbot() {
  useEffect(() => {
    // Check if the script is already present to prevent duplicate loading
    const scriptId = 'jotform-agent-script'
    if (document.getElementById(scriptId)) return

    const script = document.createElement('script')
    script.id = scriptId
    script.src = 'https://cdn.jotfor.ms/agent/embedjs/019eca6757bf7e629be9ab9c55b2d215aad8/embed.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // In a SPA context or hot-reload, we might want to clean up, but Jotform script runs globally
      // and injects other elements. It's usually safer not to remove the script tag itself,
      // but if the component is mounted once in RootLayout, it won't trigger again.
    }
  }, [])

  return null
}
