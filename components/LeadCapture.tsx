'use client'

import { useState } from 'react'
import { MessageCircle, Phone, Shield, CheckCircle, AlertCircle } from 'lucide-react'
import { createClient } from '@/lib/supabase-client'
import { ContactSubmission } from '@/lib/supabase'

export default function LeadCapture() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    syndicate: '',
    sharePercentage: '',
    reason: '',
    timeframe: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<{[key: string]: string}>({})

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {}

    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required'
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required'
    if (!formData.syndicate.trim()) newErrors.syndicate = 'Syndicate name is required'
    if (!formData.sharePercentage.trim()) newErrors.sharePercentage = 'Share percentage is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    try {
      const supabase = createClient()

      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            syndicate: formData.syndicate,
            share_percentage: formData.sharePercentage,
            reason: formData.reason || null,
            timeframe: formData.timeframe || null,
            status: 'new'
          }
        ])

      if (error) {
        console.error('Error saving submission:', error)
      }

      try {
        await fetch('https://mediresponse.qcontact.com/api/v2/webhooks/dynamic/ng9r268eed', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            syndicate: formData.syndicate,
            sharePercentage: formData.sharePercentage,
            reason: formData.reason,
            timeframe: formData.timeframe,
          }),
        })
      } catch (webhookError) {
        console.error('Error sending to QContact webhook:', webhookError)
      }

      setSubmitted(true)
    } catch (error) {
      console.error('Error saving submission:', error)
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <section id="contact" className="py-16 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <CheckCircle className="h-16 w-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Thank You!
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            We've received your information and will contact you within 24 hours with a cash offer.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-white mb-4">What Happens Next?</h3>
            <div className="space-y-2 text-primary-100">
              <p>• We'll review your syndicate details</p>
              <p>• Provide a fair market valuation</p>
              <p>• Make a firm cash offer within 24 hours</p>
              <p>• Arrange confidential settlement if you accept</p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-16 bg-primary-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get Your Cash Offer
          </h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Fill out the form below or contact us directly. All information is completely confidential.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white rounded-lg p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your email address"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="04XX XXX XXX"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Syndicate Name *
                  </label>
                  <input
                    type="text"
                    value={formData.syndicate}
                    onChange={(e) => setFormData({...formData, syndicate: e.target.value})}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                      errors.syndicate ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="e.g. BSA, Rivergate, etc."
                  />
                  {errors.syndicate && <p className="text-red-500 text-sm mt-1">{errors.syndicate}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Share Percentage *
                  </label>
                  <select
                    value={formData.sharePercentage}
                    onChange={(e) => setFormData({...formData, sharePercentage: e.target.value})}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                      errors.sharePercentage ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select percentage</option>
                    <option value="5%">5%</option>
                    <option value="10%">10%</option>
                    <option value="12.5%">12.5%</option>
                    <option value="15%">15%</option>
                    <option value="20%">20%</option>
                    <option value="25%">25%</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.sharePercentage && <p className="text-red-500 text-sm mt-1">{errors.sharePercentage}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Timeframe to Sell
                  </label>
                  <select
                    value={formData.timeframe}
                    onChange={(e) => setFormData({...formData, timeframe: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="">Select timeframe</option>
                    <option value="ASAP">ASAP</option>
                    <option value="Within 1 month">Within 1 month</option>
                    <option value="Within 3 months">Within 3 months</option>
                    <option value="Just exploring">Just exploring</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Reason for Selling
                </label>
                <textarea
                  value={formData.reason}
                  onChange={(e) => setFormData({...formData, reason: e.target.value})}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Tell us why you want to sell your share..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-700 text-white py-4 rounded-lg font-semibold transition-colors"
              >
                Get My Cash Offer
              </button>
            </form>
          </div>

          {/* Contact Info & Privacy */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Prefer to Talk Directly?</h3>
              <div className="space-y-4">
                <a
                  href="https://wa.me/61490328276?text=Hi%2C%20I%27m%20interested%20in%20selling%20my%20boat%20share%20for%20cash"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-white hover:text-primary-200 transition-colors"
                >
                  <MessageCircle className="h-6 w-6" />
                  <div>
                    <div className="font-medium">WhatsApp</div>
                    <div className="text-sm text-primary-200">0490 328 276</div>
                  </div>
                </a>

                <a
                  href="tel:+61490328276"
                  className="flex items-center space-x-3 text-white hover:text-primary-200 transition-colors"
                >
                  <Phone className="h-6 w-6" />
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-sm text-primary-200">0490 328 276</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Privacy Assurance */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="h-6 w-6 text-white" />
                <h3 className="text-xl font-semibold text-white">100% Confidential</h3>
              </div>
              <div className="space-y-3 text-primary-100">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 flex-shrink-0" />
                  <span className="text-sm">Your syndicate will never know you contacted us</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 flex-shrink-0" />
                  <span className="text-sm">All communications are completely private</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 flex-shrink-0" />
                  <span className="text-sm">No obligation - explore your options freely</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 flex-shrink-0" />
                  <span className="text-sm">We handle all syndicate notifications</span>
                </div>
              </div>
            </div>

            {/* Warning */}
            <div className="bg-yellow-500/20 border border-yellow-400/30 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-yellow-200 mb-1">Important Notice</h4>
                  <p className="text-sm text-yellow-100">
                    This service is completely independent of any boat syndicate company.
                    We provide fair market valuations and cash offers for boat shares.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
