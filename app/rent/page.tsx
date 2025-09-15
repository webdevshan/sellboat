import SearchForm from '@/components/SearchForm'
import BoatCard from '@/components/BoatCard'
import { Filter, MapPin, Calendar } from 'lucide-react'

// Mock data for boats for rent
const boatsForRent = [
  {
    id: 1,
    name: '2023 Sea Ray 270 Sundancer',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 350,
    location: 'Sydney Harbour',
    year: 2023,
    length: '27ft',
    condition: 'Excellent',
    type: 'Cruiser',
    capacity: '8 people',
    features: ['Captain Included', 'Fuel Included', 'Fishing Gear', 'Cooler'],
    description: 'Perfect for special occasions and family outings. Professional captain included.',
    rating: 4.8,
    reviews: 24
  },
  {
    id: 2,
    name: '2024 Boston Whaler 235 Conquest',
    image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 280,
    location: 'Port Melbourne',
    year: 2024,
    length: '23ft',
    condition: 'Brand New',
    type: 'Fishing',
    capacity: '6 people',
    features: ['Fishing Guide', 'All Tackle', 'Live Bait', 'GPS'],
    description: 'Brand new fishing charter with professional guide. Perfect for serious anglers.',
    rating: 4.9,
    reviews: 18
  },
  {
    id: 3,
    name: '2022 Bayliner VR5',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 200,
    location: 'Gold Coast',
    year: 2022,
    length: '21ft',
    condition: 'Very Good',
    type: 'Leisure',
    capacity: '8 people',
    features: ['Water Sports', 'Ski Equipment', 'Sound System', 'Shade'],
    description: 'Great for water sports and family fun. All equipment included.',
    rating: 4.7,
    reviews: 31
  }
]

export default function RentPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-secondary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Rent a Boat
          </h1>
          <p className="text-xl text-secondary-100 max-w-2xl mx-auto">
            Experience the freedom of the water with our premium boat rental service across Australia.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SearchForm />
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Destinations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Sydney Harbour', boats: 45, image: '🏙️' },
              { name: 'Gold Coast', boats: 32, image: '🏖️' },
              { name: 'Melbourne Bay', boats: 28, image: '🌊' },
              { name: 'Perth Waters', boats: 24, image: '🌅' }
            ].map((destination, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors cursor-pointer">
                <div className="text-3xl mb-2">{destination.image}</div>
                <h3 className="font-semibold text-gray-900">{destination.name}</h3>
                <p className="text-sm text-gray-600">{destination.boats} boats available</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Filter className="h-5 w-5 mr-2" />
                  Filters
                </h3>

                <div className="space-y-6">
                  {/* Price Range */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Price Range (per day)</label>
                    <select className="input-field text-sm">
                      <option>Any price</option>
                      <option>Under $200</option>
                      <option>$200 - $400</option>
                      <option>$400 - $600</option>
                      <option>$600 - $1000</option>
                      <option>Over $1000</option>
                    </select>
                  </div>

                  {/* Duration */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                        <span className="ml-2 text-sm text-gray-700">Half Day (4 hours)</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                        <span className="ml-2 text-sm text-gray-700">Full Day (8 hours)</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                        <span className="ml-2 text-sm text-gray-700">Weekend</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                        <span className="ml-2 text-sm text-gray-700">Weekly</span>
                      </label>
                    </div>
                  </div>

                  {/* Boat Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Boat Type</label>
                    <div className="space-y-2">
                      {['Leisure', 'Cruiser', 'Fishing', 'Sail', 'PWC', 'Yacht'].map((type) => (
                        <label key={type} className="flex items-center">
                          <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                          <span className="ml-2 text-sm text-gray-700">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Features</label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                        <span className="ml-2 text-sm text-gray-700">Captain Included</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                        <span className="ml-2 text-sm text-gray-700">Fishing Equipment</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                        <span className="ml-2 text-sm text-gray-700">Water Sports</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                        <span className="ml-2 text-sm text-gray-700">Air Conditioning</span>
                      </label>
                    </div>
                  </div>

                  <button className="w-full btn-primary">Apply Filters</button>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="lg:w-3/4">
              {/* Results Header */}
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Available Boats</h2>
                  <p className="text-gray-600">Showing {boatsForRent.length} results</p>
                </div>
                <div className="flex items-center space-x-4">
                  <select className="input-field">
                    <option>Sort by: Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Rating: Highest First</option>
                    <option>Reviews: Most First</option>
                  </select>
                </div>
              </div>

              {/* Boats Grid */}
              <div className="grid grid-cols-1 gap-6">
                {boatsForRent.map((boat) => (
                  <BoatCard key={boat.id} boat={boat} type="rent" />
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <button className="btn-outline">
                  Load More Boats
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
