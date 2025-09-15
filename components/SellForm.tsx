'use client'

import { useState } from 'react'
import { Upload, Camera, MapPin, DollarSign, Calendar, Anchor } from 'lucide-react'

export default function SellForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    // Basic Information
    boatType: '',
    make: '',
    model: '',
    year: '',
    length: '',
    condition: '',
    price: '',

    // Location
    location: '',
    state: '',

    // Technical Details
    engine: '',
    fuelType: '',
    hours: '',
    hullMaterial: '',
    maxSpeed: '',

    // Features
    features: [] as string[],

    // Description
    description: '',

    // Contact
    name: '',
    email: '',
    phone: '',

    // Images
    images: [] as File[]
  })

  const availableFeatures = [
    'GPS Navigation', 'Radar', 'Fish Finder', 'VHF Radio', 'Air Conditioning',
    'Generator', 'Water Heater', 'Refrigerator', 'Stove', 'Microwave',
    'TV/DVD', 'Sound System', 'WiFi', 'Bimini Top', 'Ski Tow Bar',
    'Fishing Rod Holders', 'Live Well', 'Anchor Windlass', 'Electric Winch',
    'Trailer Included', 'Captain Available', 'Safety Equipment', 'Fire Extinguisher'
  ]

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleFeatureToggle = (feature: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }))
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    setFormData(prev => ({ ...prev, images: [...prev.images, ...files] }))
  }

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Basic Information</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Boat Type *</label>
                <select
                  value={formData.boatType}
                  onChange={(e) => handleInputChange('boatType', e.target.value)}
                  className="input-field"
                  required
                >
                  <option value="">Select boat type</option>
                  <option value="leisure">Leisure</option>
                  <option value="cruiser">Cruiser</option>
                  <option value="fishing">Fishing</option>
                  <option value="sail">Sail</option>
                  <option value="pwc">PWC</option>
                  <option value="ski">Ski Boat</option>
                  <option value="yacht">Yacht</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Make *</label>
                <input
                  type="text"
                  value={formData.make}
                  onChange={(e) => handleInputChange('make', e.target.value)}
                  className="input-field"
                  placeholder="e.g., Sea Ray"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Model *</label>
                <input
                  type="text"
                  value={formData.model}
                  onChange={(e) => handleInputChange('model', e.target.value)}
                  className="input-field"
                  placeholder="e.g., 270 Sundancer"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Year *</label>
                <input
                  type="number"
                  value={formData.year}
                  onChange={(e) => handleInputChange('year', e.target.value)}
                  className="input-field"
                  min="1900"
                  max={new Date().getFullYear() + 1}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Length (ft) *</label>
                <input
                  type="number"
                  value={formData.length}
                  onChange={(e) => handleInputChange('length', e.target.value)}
                  className="input-field"
                  placeholder="e.g., 27"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Condition *</label>
                <select
                  value={formData.condition}
                  onChange={(e) => handleInputChange('condition', e.target.value)}
                  className="input-field"
                  required
                >
                  <option value="">Select condition</option>
                  <option value="new">New</option>
                  <option value="excellent">Excellent</option>
                  <option value="very-good">Very Good</option>
                  <option value="good">Good</option>
                  <option value="fair">Fair</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Asking Price (AUD) *</label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="number"
                  value={formData.price}
                  onChange={(e) => handleInputChange('price', e.target.value)}
                  className="input-field pl-10"
                  placeholder="e.g., 125000"
                  required
                />
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Location & Technical Details</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location *</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    className="input-field pl-10"
                    placeholder="e.g., Sydney Harbour"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">State *</label>
                <select
                  value={formData.state}
                  onChange={(e) => handleInputChange('state', e.target.value)}
                  className="input-field"
                  required
                >
                  <option value="">Select state</option>
                  <option value="NSW">New South Wales</option>
                  <option value="VIC">Victoria</option>
                  <option value="QLD">Queensland</option>
                  <option value="WA">Western Australia</option>
                  <option value="SA">South Australia</option>
                  <option value="TAS">Tasmania</option>
                  <option value="ACT">Australian Capital Territory</option>
                  <option value="NT">Northern Territory</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Engine</label>
                <input
                  type="text"
                  value={formData.engine}
                  onChange={(e) => handleInputChange('engine', e.target.value)}
                  className="input-field"
                  placeholder="e.g., Twin 4.3L V6"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Fuel Type</label>
                <select
                  value={formData.fuelType}
                  onChange={(e) => handleInputChange('fuelType', e.target.value)}
                  className="input-field"
                >
                  <option value="">Select fuel type</option>
                  <option value="gasoline">Gasoline</option>
                  <option value="diesel">Diesel</option>
                  <option value="electric">Electric</option>
                  <option value="hybrid">Hybrid</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Engine Hours</label>
                <input
                  type="number"
                  value={formData.hours}
                  onChange={(e) => handleInputChange('hours', e.target.value)}
                  className="input-field"
                  placeholder="e.g., 150"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Hull Material</label>
                <select
                  value={formData.hullMaterial}
                  onChange={(e) => handleInputChange('hullMaterial', e.target.value)}
                  className="input-field"
                >
                  <option value="">Select hull material</option>
                  <option value="fiberglass">Fiberglass</option>
                  <option value="aluminum">Aluminum</option>
                  <option value="steel">Steel</option>
                  <option value="wood">Wood</option>
                  <option value="composite">Composite</option>
                </select>
              </div>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Features & Description</h3>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">Boat Features</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {availableFeatures.map((feature) => (
                  <label key={feature} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.features.includes(feature)}
                      onChange={() => handleFeatureToggle(feature)}
                      className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">{feature}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
              <textarea
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                className="input-field"
                rows={6}
                placeholder="Describe your boat's condition, history, and what makes it special..."
                required
              />
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Photos & Contact Information</h3>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">Boat Photos</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Camera className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <p className="text-gray-600 mb-4">Upload photos of your boat</p>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                />
                <label htmlFor="image-upload" className="btn-outline cursor-pointer">
                  Choose Photos
                </label>
                {formData.images.length > 0 && (
                  <p className="text-sm text-gray-500 mt-2">
                    {formData.images.length} photo(s) selected
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="input-field"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="input-field"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="input-field"
                  placeholder="+61 400 123 456"
                  required
                />
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {[1, 2, 3, 4].map((stepNumber) => (
            <div
              key={stepNumber}
              className={`flex items-center justify-center w-8 h-8 rounded-full ${
                step >= stepNumber
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 text-gray-600'
              }`}
            >
              {stepNumber}
            </div>
          ))}
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-primary-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(step / 4) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Form Content */}
      {renderStep()}

      {/* Navigation */}
      <div className="flex justify-between mt-8">
        <button
          type="button"
          onClick={prevStep}
          disabled={step === 1}
          className="btn-outline disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>

        {step < 4 ? (
          <button
            type="button"
            onClick={nextStep}
            className="btn-primary"
          >
            Next Step
          </button>
        ) : (
          <button
            type="submit"
            className="btn-primary"
          >
            Submit Listing
          </button>
        )}
      </div>
    </div>
  )
}
