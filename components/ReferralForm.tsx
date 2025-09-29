'use client'

import { useState } from 'react'
import { Users, DollarSign, CheckCircle, AlertCircle, MessageCircle, Phone, Mail } from 'lucide-react'
import { createClient } from '@/lib/supabase-client'

export default function ReferralForm() {
  const [formData, setFormData] = useState({
    referrerName: '',
    referrerRole: '',
    referrerContact: '',
    ownerName: '',
    ownerContact: '',
    vesselDetails: '',
    ownerConsent: false
  })

  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<{[key: string]: string}>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {}

    if (!formData.referrerName.trim()) newErrors.referrerName = 'Your name is required'
    if (!formData.referrerRole.trim()) newErrors.referrerRole = 'Your role is required'
    if (!formData.referrerContact.trim()) newErrors.referrerContact = 'Your contact is required'
    if (!formData.ownerName.trim()) newErrors.ownerName = 'Owner name is required'
    if (!formData.ownerContact.trim()) newErrors.ownerContact = 'Owner contact is required'
    if (!formData.vesselDetails.trim()) newErrors.vesselDetails = 'Vessel details are required'
    if (!formData.ownerConsent) newErrors.ownerConsent = 'Owner consent is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      const supabase = createClient()

      const { data, error } = await supabase
        .from('referral_submissions')
        .insert([
          {
            referrer_name: formData.referrerName,
            referrer_role: formData.referrerRole,
            referrer_contact: formData.referrerContact,
            owner_name: formData.ownerName,
            owner_contact: formData.ownerContact,
            vessel_details: formData.vesselDetails,
            owner_consent: formData.ownerConsent,
            status: 'new'
          }
        ])

      if (error) {
        console.error('Error submitting referral:', error)
        setErrors({ submit: 'Failed to submit referral. Please try again.' })
      } else {
        setSubmitted(true)
        setFormData({
          referrerName: '',
          referrerRole: '',
          referrerContact: '',
          ownerName: '',
          ownerContact: '',
          vesselDetails: '',
          ownerConsent: false
        })
      }
    } catch (error) {
      console.error('Error submitting referral:', error)
      setErrors({ submit: 'Failed to submit referral. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  if (submitted) {
    return (
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Referral Submitted Successfully!</h2>
          <p className="text-lg text-gray-600 mb-6">
            Thank you for your referral. Our team will contact the owner directly within 24 hours.
          </p>
          <p className="text-sm text-gray-500">
            You'll receive $1,000 cash payment within 14 days of deal completion.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-green-100 p-3 rounded-full">
              <Users className="h-8 w-8 text-green-600" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Marina Staff & Skipper Referral Program
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Earn $1,000 for each successful referral. Help boat owners exit syndicates and get cash for unused shares.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">How It Works:</h3>
          <div className="space-y-3">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-xs font-semibold text-blue-600">1</span>
                </div>
              </div>
              <p className="ml-3 text-gray-700">Have a quick conversation with the owner and confirm they're open to being contacted.</p>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-xs font-semibold text-blue-600">2</span>
                </div>
              </div>
              <p className="ml-3 text-gray-700">Submit their details via our secure form below.</p>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-xs font-semibold text-blue-600">3</span>
                </div>
              </div>
              <p className="ml-3 text-gray-700">Our team will follow up directly with them to explain our value proposition.</p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <div className="flex items-center mb-3">
            <DollarSign className="h-6 w-6 text-green-600 mr-2" />
            <h3 className="text-lg font-semibold text-green-800">Your Reward</h3>
          </div>
          <p className="text-green-700 mb-2">
            If we successfully close a purchase or lease, you'll receive an immediate $1,000 cash payment for each successful referral.
          </p>
          <p className="text-sm text-green-600">
            Payment is made within 14 days of deal completion.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Referrer Information */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Information</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="referrerName" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="referrerName"
                  name="referrerName"
                  value={formData.referrerName}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.referrerName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.referrerName && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.referrerName}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="referrerRole" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Role *
                </label>
                <select
                  id="referrerRole"
                  name="referrerRole"
                  value={formData.referrerRole}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.referrerRole ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select your role</option>
                  <option value="marina-staff">Marina Staff</option>
                  <option value="skipper">Skipper</option>
                  <option value="dock-master">Dock Master</option>
                  <option value="other">Other</option>
                </select>
                {errors.referrerRole && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.referrerRole}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="referrerContact" className="block text-sm font-medium text-gray-700 mb-2">
                Your Contact (Phone/Email) *
              </label>
              <input
                type="text"
                id="referrerContact"
                name="referrerContact"
                value={formData.referrerContact}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.referrerContact ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Phone number or email address"
              />
              {errors.referrerContact && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.referrerContact}
                </p>
              )}
            </div>
          </div>

          {/* Owner Information */}
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Owner Information</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="ownerName" className="block text-sm font-medium text-gray-700 mb-2">
                  Owner Name *
                </label>
                <input
                  type="text"
                  id="ownerName"
                  name="ownerName"
                  value={formData.ownerName}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.ownerName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter owner's full name"
                />
                {errors.ownerName && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.ownerName}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="ownerContact" className="block text-sm font-medium text-gray-700 mb-2">
                  Owner Contact (Phone/Email) *
                </label>
                <input
                  type="text"
                  id="ownerContact"
                  name="ownerContact"
                  value={formData.ownerContact}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.ownerContact ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Owner's phone number or email"
                />
                {errors.ownerContact && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.ownerContact}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="vesselDetails" className="block text-sm font-medium text-gray-700 mb-2">
                Vessel / Share Details *
              </label>
              <textarea
                id="vesselDetails"
                name="vesselDetails"
                rows={3}
                value={formData.vesselDetails}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.vesselDetails ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Brief description of the vessel, syndicate, share percentage, etc."
              />
              {errors.vesselDetails && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.vesselDetails}
                </p>
              )}
            </div>

            <div className="mt-6">
              <label className="flex items-start">
                <input
                  type="checkbox"
                  name="ownerConsent"
                  checked={formData.ownerConsent}
                  onChange={handleInputChange}
                  className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-700">
                  I confirm that the owner has given consent to be contacted by Exit Your Boat Share regarding their syndicate exit options. *
                </span>
              </label>
              {errors.ownerConsent && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.ownerConsent}
                </p>
              )}
            </div>
          </div>

          {errors.submit && (
            <div className="bg-red-50 border border-red-200 rounded-md p-4">
              <p className="text-sm text-red-600 flex items-center">
                <AlertCircle className="h-4 w-4 mr-2" />
                {errors.submit}
              </p>
            </div>
          )}

          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Referral'}
            </button>
          </div>
        </form>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Confidential, straightforward, and rewarding - help us put unused boats back on the water.</p>
        </div>
      </div>
    </div>
  )
}
