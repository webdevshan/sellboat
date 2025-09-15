'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(true)

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 text-white p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <p className="text-sm flex-1 mr-4">
          We use cookies to give you the best possible experience on our website, to analyse traffic and to deliver advertising that&apos;s more relevant to you.
          <a href="/privacy" className="underline hover:text-gray-300 ml-1">
            To find out more, please see our cookie policy.
          </a>
        </p>
        <button
          onClick={() => setShowBanner(false)}
          className="text-white hover:text-gray-300 transition-colors flex-shrink-0"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
