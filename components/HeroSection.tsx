'use client'

import { useState } from 'react'
import Image from 'next/image'
import SearchForm from './SearchForm'
import { X } from 'lucide-react'

export default function HeroSection() {
  const [showCookieBanner, setShowCookieBanner] = useState(true)

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Luxury yacht on calm water"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>


      {/* Main Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 font-display">
          Find Your Next
          <span className="block text-gradient">Boat Adventure</span>
        </h1>
        <p className="text-xl sm:text-2xl mb-8 text-gray-100 max-w-2xl mx-auto">
          Discover, buy, sell, and rent boats across Australia. Your perfect maritime experience awaits.
        </p>

        {/* Search Form Overlay */}
        <div className="mt-12">
          <SearchForm />
        </div>
      </div>


      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
