'use client'

import { useState } from 'react'
import Image from 'next/image'
import { MessageCircle, Phone, Mail } from 'lucide-react'

export default function ExitFunnelHero() {
  return (
    <section className="relative h-[70vh] sm:h-[80vh] lg:h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/small-boat.webp"
          alt="Luxury yacht on calm water"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center text-white px-3 sm:px-4 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 font-display leading-tight">
          Not Using Your
          <span className="block text-gradient">Boat Share Days?</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-100 max-w-3xl mx-auto px-2">
          We buy boat syndicate shares for cash. No brokers. No fuss.
          <span className="block mt-2 font-semibold">Get out of your boat share today.</span>
        </p>

        {/* Value Proposition */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 mb-8 max-w-2xl mx-auto">
          <h3 className="text-lg sm:text-xl font-semibold mb-3">Quick & Discreet Exit Process</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
              <span>No Syndicate Fees</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
              <span>Cash Payment</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
              <span>Complete Privacy</span>
            </div>
          </div>
        </div>

        {/* Contact Options */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://wa.me/61490328276?text=Hi%2C%20I%27m%20interested%20in%20selling%20my%20boat%20share%20for%20cash"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            <MessageCircle className="h-5 w-5" />
            <span>WhatsApp Us</span>
          </a>
          <a
            href="tel:+61490328276"
            className="flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            <Phone className="h-5 w-5" />
            <span>Call Now</span>
          </a>
        </div>

        <p className="text-sm text-gray-200 mt-4">
          All communications are completely confidential
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-white rounded-full mt-1 sm:mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
