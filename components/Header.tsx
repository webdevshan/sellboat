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
            <a href="tel:+61400123456" className="hover:text-primary-200 transition-colors text-xs sm:text-sm">
              <span className="hidden sm:inline">+61 400 123 456</span>
              <span className="sm:hidden">Call</span>
            </a>
            <div className="flex space-x-1 sm:space-x-2">
              <a href="#" className="hover:text-primary-200 transition-colors hidden sm:block">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-primary-200 transition-colors hidden sm:block">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-primary-200 transition-colors">
                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-primary-200 transition-colors">
                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
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
