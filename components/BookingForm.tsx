'use client'

import { useState } from 'react'
import { Calendar, Users, Clock, CreditCard, Shield } from 'lucide-react'

interface Boat {
  id: number
  name: string
  price: number
  capacity: string
}

interface BookingFormProps {
  boat: Boat
}

export default function BookingForm({ boat }: BookingFormProps) {
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState(1)
  const [duration, setDuration] = useState('full-day')
  const [showBookingForm, setShowBookingForm] = useState(false)

  const calculateTotal = () => {
    const basePrice = boat.price
    const durations = {
      'half-day': 0.6,
      'full-day': 1,
      'weekend': 2.5,
      'weekly': 7
    }
    const multiplier = durations[duration as keyof typeof durations] || 1
    const guestFee = Math.max(0, guests - 4) * 25 // $25 per extra guest over 4
    return Math.round((basePrice * multiplier) + guestFee)
  }

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault()
    setShowBookingForm(true)
  }

  if (showBookingForm) {
    return (
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <Shield className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Booking Confirmed!</h3>
          <p className="text-gray-600">
            Your booking for {boat.name} has been confirmed. You'll receive a confirmation email shortly.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-600">Boat:</span>
            <span className="font-medium">{boat.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Date:</span>
            <span className="font-medium">{checkIn}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Duration:</span>
            <span className="font-medium">{duration.replace('-', ' ')}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Guests:</span>
            <span className="font-medium">{guests}</span>
          </div>
          <div className="flex justify-between text-lg font-bold">
            <span>Total:</span>
            <span className="text-primary-600">${calculateTotal()}</span>
          </div>
        </div>

        <button
          onClick={() => setShowBookingForm(false)}
          className="w-full mt-6 btn-outline"
        >
          Book Another Boat
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <div className="mb-6">
        <div className="flex justify-between items-start mb-2">
          <span className="text-3xl font-bold text-primary-600">${boat.price}</span>
          <span className="text-gray-600">/day</span>
        </div>
        <p className="text-sm text-gray-600">Professional captain included</p>
      </div>

      <form onSubmit={handleBooking} className="space-y-4">
        {/* Check-in Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Check-in Date</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              required
              min={new Date().toISOString().split('T')[0]}
              className="input-field pl-10"
            />
          </div>
        </div>

        {/* Duration */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
          <select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="input-field"
          >
            <option value="half-day">Half Day (4 hours)</option>
            <option value="full-day">Full Day (8 hours)</option>
            <option value="weekend">Weekend (2 days)</option>
            <option value="weekly">Weekly (7 days)</option>
          </select>
        </div>

        {/* Number of Guests */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Number of Guests</label>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <select
              value={guests}
              onChange={(e) => setGuests(parseInt(e.target.value))}
              className="input-field pl-10"
            >
              {Array.from({ length: 8 }, (_, i) => i + 1).map(num => (
                <option key={num} value={num}>{num} {num === 1 ? 'guest' : 'guests'}</option>
              ))}
            </select>
          </div>
          <p className="text-xs text-gray-500 mt-1">Max capacity: {boat.capacity}</p>
        </div>

        {/* Price Breakdown */}
        <div className="bg-gray-50 rounded-lg p-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Base price ({duration.replace('-', ' ')}):</span>
            <span>${boat.price}</span>
          </div>
          {guests > 4 && (
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Extra guests ({(guests - 4)} × $25):</span>
              <span>${(guests - 4) * 25}</span>
            </div>
          )}
          <div className="border-t border-gray-200 pt-2 flex justify-between font-semibold">
            <span>Total:</span>
            <span className="text-primary-600">${calculateTotal()}</span>
          </div>
        </div>

        {/* Book Now Button */}
        <button
          type="submit"
          className="w-full btn-primary"
        >
          Book Now
        </button>

        {/* Security Features */}
        <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
          <Shield className="h-4 w-4" />
          <span>Secure booking with instant confirmation</span>
        </div>
      </form>

      {/* Additional Info */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <h4 className="font-semibold text-gray-900 mb-3">What's included:</h4>
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="flex items-center space-x-2">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
            <span>Professional captain</span>
          </li>
          <li className="flex items-center space-x-2">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
            <span>Fuel included</span>
          </li>
          <li className="flex items-center space-x-2">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
            <span>Safety equipment</span>
          </li>
          <li className="flex items-center space-x-2">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
            <span>Free cancellation up to 24h before</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
