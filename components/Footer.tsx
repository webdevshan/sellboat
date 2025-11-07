import Link from 'next/link'
import { Anchor, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Top Footer */}
      <div className="bg-primary-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
                <Anchor className="h-8 w-8" />
                <span className="text-2xl font-bold font-display">ExitYourBoatShare</span>
              </div>
              <p className="text-primary-100">
                Australia&apos;s leading boat syndicate exit service. Sell your share for cash, no brokers, no fuss.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <div className="bg-white bg-opacity-20 rounded-full p-2">
                  <span className="text-2xl">😊</span>
                </div>
                <div>
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-primary-100 text-sm">Shares Purchased</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <div className="bg-white bg-opacity-20 rounded-full p-2">
                  <span className="text-2xl">⛵</span>
                </div>
                <div>
                  <div className="text-2xl font-bold">$15M+</div>
                  <div className="text-primary-100 text-sm">Cash Paid Out</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <div className="bg-white bg-opacity-20 rounded-full p-2">
                  <span className="text-2xl">🏆</span>
                </div>
                <div>
                  <div className="text-2xl font-bold">7 Days</div>
                  <div className="text-primary-100 text-sm">Avg Settlement</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary-400" />
                  <a href="tel:+61490328276" className="hover:text-primary-400 transition-colors">
                    +61 490 328 276
                  </a>
                </div>
                <p className="text-sm text-gray-400">Available 7 days a week</p>
              </div>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-4">About</h3>
              <ul className="space-y-2">
                <li><Link href="#process" className="text-gray-300 hover:text-white transition-colors">How It Works</Link></li>
                <li><Link href="#why-sell" className="text-gray-300 hover:text-white transition-colors">Why Sell</Link></li>
                <li><Link href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Our Service</h3>
              <ul className="space-y-2">
                <li><span className="text-gray-300">Cash for Boat Shares</span></li>
                <li><span className="text-gray-300">Fair Market Valuation</span></li>
                <li><span className="text-gray-300">No Syndicate Exit Fees</span></li>
                <li><span className="text-gray-300">Confidential Process</span></li>
                <li><span className="text-gray-300">Fast Settlement</span></li>
                <li><span className="text-gray-300">All Syndicates Welcome</span></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
              <ul className="space-y-2">
                <li><a href="https://wa.me/61490328276" className="text-gray-300 hover:text-white transition-colors">WhatsApp</a></li>
                <li><a href="tel:+61490328276" className="text-gray-300 hover:text-white transition-colors">Call Us</a></li>
                <li><span className="text-gray-300">24/7 Response</span></li>
                <li><span className="text-gray-300">Free Consultation</span></li>
                <li><span className="text-gray-300">No Obligation</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">Ready to Exit Your Boat Share?</h3>
            <p className="text-gray-300 mb-6">Get a free, confidential cash offer within 24 hours. No obligation, no fees.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/61490328276?text=Hi%2C%20I%27d%20like%20a%20free%20cash%20offer%20for%20my%20boat%20share"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <span>WhatsApp Now</span>
              </a>
              <a
                href="tel:+61490328276"
                className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 ExitYourBoatShare Australia. All rights reserved.
            </div>

            <div></div>
          </div>
        </div>
      </div>
    </footer>
  )
}
