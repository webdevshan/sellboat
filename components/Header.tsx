'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Menu,
  X,
  Anchor,
  Plus
} from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <span className="hidden sm:inline">Sell your boat share for cash</span>
            <span className="sm:hidden text-xs">ExitShare</span>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <span className="hidden sm:inline">Have any questions?</span>
            <a href="tel:+61490328276" className="hover:text-primary-200 transition-colors text-xs sm:text-sm">
              <span className="hidden sm:inline">+61 490 328 276</span>
              <span className="sm:hidden">Call</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16 lg:h-18">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center space-x-1 sm:space-x-2">
                <Anchor className="h-6 w-6 sm:h-8 sm:w-8 text-primary-600" />
                <span className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 font-display">
                  <span className="hidden sm:inline">ExitYourBoatShare</span>
                  <span className="sm:hidden">ExitShare</span>
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-4 lg:space-x-6 ml-4 lg:ml-8">
              <Link href="#process" className="text-gray-900 hover:text-primary-600 px-2 lg:px-3 py-2 text-sm lg:text-base font-bold transition-colors">
                How it Works
              </Link>
              <Link href="#why-sell" className="text-gray-900 hover:text-primary-600 px-2 lg:px-3 py-2 text-sm lg:text-base font-bold transition-colors">
                Why Sell
              </Link>
              <Link href="#referral" className="text-gray-900 hover:text-primary-600 px-2 lg:px-3 py-2 text-sm lg:text-base font-bold transition-colors">
                Referral
              </Link>
              <Link href="#contact" className="text-gray-900 hover:text-primary-600 px-2 lg:px-3 py-2 text-sm lg:text-base font-bold transition-colors">
                Contact
              </Link>
            </nav>


            {/* Right Side Actions */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Sell Button */}
              <>
                {/* Mobile: Icon only */}
                <Link href="#contact" className="sm:hidden p-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                  <Plus className="h-5 w-5" />
                </Link>
                {/* Desktop: Text */}
                <Link href="#contact" className="hidden sm:block bg-primary-600 text-white text-xs sm:text-sm px-3 sm:px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                  Sell My Share
                </Link>
              </>

              {/* Referral Button */}
              <>
                {/* Mobile: Icon only */}
                <Link href="#referral" className="sm:hidden p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  <Plus className="h-5 w-5" />
                </Link>
                {/* Desktop: Text */}
                <Link href="#referral" className="hidden sm:block bg-green-600 text-white text-xs sm:text-sm px-3 sm:px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                  Referral
                </Link>
              </>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-3 pt-2 pb-3 space-y-1 bg-white border-t">
              <div className="grid grid-cols-2 gap-2 mb-4">
                <Link href="#process" className="block px-2 py-3 text-center text-gray-900 hover:text-primary-600 hover:bg-gray-50 rounded-lg font-bold transition-colors text-sm">
                  How it Works
                </Link>
                <Link href="#why-sell" className="block px-2 py-3 text-center text-gray-900 hover:text-primary-600 hover:bg-gray-50 rounded-lg font-bold transition-colors text-sm">
                  Why Sell
                </Link>
                <Link href="#referral" className="block px-2 py-3 text-center text-gray-900 hover:text-primary-600 hover:bg-gray-50 rounded-lg font-bold transition-colors text-sm">
                  Referral
                </Link>
                <Link href="#contact" className="block px-2 py-3 text-center text-gray-900 hover:text-primary-600 hover:bg-gray-50 rounded-lg font-bold transition-colors text-sm">
                  Contact
                </Link>
              </div>
              <div className="px-2 py-2 border-t border-gray-200 pt-4">
                <div className="flex flex-col space-y-2">
                  <Link href="#contact" className="block px-3 py-2 text-center bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm">
                    Sell My Share
                  </Link>
                  <Link href="#referral" className="block px-3 py-2 text-center bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm">
                    Referral
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
