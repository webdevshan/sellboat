'use client'

import { useState } from 'react'
import { Heart, Mail, Bell } from 'lucide-react'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    setIsSubscribed(true)
    setEmail('')
    setTimeout(() => setIsSubscribed(false), 3000)
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
              <Heart className="h-8 w-8 text-primary-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Sign up to save searches
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Get alerts for new listings that match your criteria and never miss your perfect boat.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Bell className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">Instant notifications for new listings</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">Weekly digest of market updates</span>
              </div>
              <div className="flex items-center space-x-3">
                <Heart className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">Save your favorite boats and searches</span>
              </div>
            </div>
          </div>

          {/* Right Content - Signup Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Get Started Today
              </h3>
              <p className="text-gray-600">
                Join thousands of boat enthusiasts who trust us for their marine needs.
              </p>
            </div>

            {isSubscribed ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <Heart className="h-8 w-8 text-green-600 fill-current" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Welcome aboard!
                </h4>
                <p className="text-gray-600">
                  You&apos;ve successfully subscribed to our newsletter.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="input-field"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="interests" className="block text-sm font-medium text-gray-700 mb-2">
                    Interests (Optional)
                  </label>
                  <select id="interests" className="input-field">
                    <option>Select your interests</option>
                    <option>Buying boats</option>
                    <option>Selling boats</option>
                    <option>Renting boats</option>
                    <option>Parts & accessories</option>
                    <option>Marine news</option>
                    <option>All of the above</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  Sign up or login
                </button>

                <p className="text-xs text-gray-500 text-center">
                  By signing up, you agree to our{' '}
                  <a href="/privacy" className="text-primary-600 hover:underline">
                    Privacy Policy
                  </a>{' '}
                  and{' '}
                  <a href="/terms" className="text-primary-600 hover:underline">
                    Terms of Service
                  </a>
                  .
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
