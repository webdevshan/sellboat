'use client'

import { useState } from 'react'
import { Search, MapPin, Calendar, Users, Filter } from 'lucide-react'

export default function SearchForm() {
  const [searchType, setSearchType] = useState<'buy' | 'rent'>('buy')

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
        Find your next boat
      </h2>

      {/* Search Type Toggle */}
      <div className="flex justify-center mb-6">
        <div className="bg-gray-100 rounded-lg p-1 flex">
          <button
            onClick={() => setSearchType('buy')}
            className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
              searchType === 'buy'
                ? 'bg-primary-600 text-white shadow-md'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Buy a Boat
          </button>
          <button
            onClick={() => setSearchType('rent')}
            className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
              searchType === 'rent'
                ? 'bg-primary-600 text-white shadow-md'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Rent a Boat
          </button>
        </div>
      </div>

      {searchType === 'buy' ? (
        <BuySearchForm />
      ) : (
        <RentSearchForm />
      )}
    </div>
  )
}

function BuySearchForm() {
  return (
    <div className="space-y-6">
      {/* Main Search Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">Boat Type</label>
          <select className="input-field">
            <option>Any type</option>
            <option>Leisure</option>
            <option>Cruiser</option>
            <option>PWC</option>
            <option>Ski Boat</option>
            <option>Fishing</option>
            <option>Sail</option>
          </select>
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">Make</label>
          <select className="input-field">
            <option>All makes</option>
            <option>Bayliner</option>
            <option>Sea Ray</option>
            <option>Yamaha</option>
            <option>Boston Whaler</option>
            <option>Chaparral</option>
            <option>Grady-White</option>
          </select>
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">Usage</label>
          <select className="input-field">
            <option>Any usage</option>
            <option>Freshwater</option>
            <option>Saltwater</option>
            <option>Both</option>
          </select>
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">Keyword</label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by keyword"
              className="input-field pl-10"
            />
          </div>
        </div>
      </div>

      {/* Additional Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Enter location"
              className="input-field pl-10"
            />
          </div>
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">Condition</label>
          <select className="input-field">
            <option>New and used</option>
            <option>New only</option>
            <option>Used only</option>
          </select>
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">Price Min</label>
          <select className="input-field">
            <option>Any</option>
            <option>$10,000</option>
            <option>$25,000</option>
            <option>$50,000</option>
            <option>$100,000</option>
            <option>$250,000</option>
          </select>
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">Price Max</label>
          <select className="input-field">
            <option>Any</option>
            <option>$50,000</option>
            <option>$100,000</option>
            <option>$250,000</option>
            <option>$500,000</option>
            <option>$1,000,000</option>
            <option>$2,000,000+</option>
          </select>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <button className="text-primary-600 hover:text-primary-700 font-medium">
          Clear all filters
        </button>
        <button className="btn-primary w-full sm:w-auto px-8 py-3 text-lg">
          Show 16,175 boats
        </button>
      </div>

      {/* Boat Type Categories */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Browse by Category</h3>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {[
            { name: 'Leisure', icon: '🛥️' },
            { name: 'Cruiser', icon: '⛵' },
            { name: 'PWC', icon: '🏄' },
            { name: 'Ski Boat', icon: '🎿' },
            { name: 'Fishing', icon: '🎣' },
            { name: 'Sail', icon: '⛵' }
          ].map((category) => (
            <button
              key={category.name}
              className="flex flex-col items-center p-4 rounded-lg border-2 border-gray-200 hover:border-primary-500 hover:bg-primary-50 transition-all duration-200"
            >
              <span className="text-2xl mb-2">{category.icon}</span>
              <span className="text-sm font-medium text-gray-700">{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

function RentSearchForm() {
  return (
    <div className="space-y-6">
      {/* Main Search Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">Check In</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="date"
              className="input-field pl-10"
            />
          </div>
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">Check Out</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="date"
              className="input-field pl-10"
            />
          </div>
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">Guests</label>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <select className="input-field pl-10">
              <option>1 guest</option>
              <option>2 guests</option>
              <option>3 guests</option>
              <option>4 guests</option>
              <option>5 guests</option>
              <option>6+ guests</option>
            </select>
          </div>
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Enter location"
              className="input-field pl-10"
            />
          </div>
        </div>
      </div>

      {/* Boat Type Filter */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">Boat Type</label>
          <select className="input-field">
            <option>Any type</option>
            <option>Leisure</option>
            <option>Cruiser</option>
            <option>PWC</option>
            <option>Ski Boat</option>
            <option>Fishing</option>
            <option>Sail</option>
            <option>Yacht</option>
          </select>
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
          <select className="input-field">
            <option>Any price</option>
            <option>$100 - $500/day</option>
            <option>$500 - $1,000/day</option>
            <option>$1,000 - $2,000/day</option>
            <option>$2,000+/day</option>
          </select>
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
          <select className="input-field">
            <option>Any duration</option>
            <option>Half day (4 hours)</option>
            <option>Full day (8 hours)</option>
            <option>Weekend</option>
            <option>Weekly</option>
          </select>
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">Features</label>
          <select className="input-field">
            <option>Any features</option>
            <option>Captain included</option>
            <option>Fishing gear</option>
            <option>Snorkeling gear</option>
            <option>Water sports</option>
          </select>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <button className="text-primary-600 hover:text-primary-700 font-medium">
          Clear all filters
        </button>
        <button className="btn-primary w-full sm:w-auto px-8 py-3 text-lg">
          Search Available Boats
        </button>
      </div>
    </div>
  )
}
