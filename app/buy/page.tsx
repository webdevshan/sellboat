import SearchForm from '@/components/SearchForm'
import BoatCard from '@/components/BoatCard'
import { Filter, SortAsc } from 'lucide-react'

// Mock data for boats for sale
const boatsForSale = [
  {
    id: 1,
    name: '2023 Sea Ray 270 Sundancer',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 125000,
    location: 'Sydney, NSW',
    year: 2023,
    length: '27ft',
    condition: 'Used',
    type: 'Cruiser',
    engine: 'Twin 4.3L',
    hours: 150,
    features: ['Air Conditioning', 'Generator', 'GPS', 'Radar'],
    description: 'Beautiful family cruiser in excellent condition. Perfect for weekend getaways.'
  },
  {
    id: 2,
    name: '2024 Boston Whaler 235 Conquest',
    image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 95000,
    location: 'Melbourne, VIC',
    year: 2024,
    length: '23ft',
    condition: 'New',
    type: 'Fishing',
    engine: 'Single 200HP',
    hours: 25,
    features: ['Live Well', 'Fish Finder', 'GPS', 'Bait Prep Station'],
    description: 'Brand new fishing machine ready for the water. Includes trailer.'
  },
  {
    id: 3,
    name: '2022 Bayliner VR5',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 65000,
    location: 'Brisbane, QLD',
    year: 2022,
    length: '21ft',
    condition: 'Used',
    type: 'Leisure',
    engine: 'Single 150HP',
    hours: 200,
    features: ['Ski Tow Bar', 'Sound System', 'Bimini Top', 'Cooler'],
    description: 'Great family boat for water sports and day cruising.'
  }
]

export default function BuyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Buy a Boat
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Find your perfect boat from our extensive selection of new and used vessels across Australia.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SearchForm />
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                    <div className="space-y-2">
                      <select className="input-field text-sm">
                        <option>Any price</option>
                        <option>Under $50,000</option>
                        <option>$50,000 - $100,000</option>
                        <option>$100,000 - $200,000</option>
                        <option>$200,000 - $500,000</option>
                        <option>Over $500,000</option>
                      </select>
                    </div>
                  </div>

                  {/* Boat Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Boat Type</label>
                    <div className="space-y-2">
                      {['Leisure', 'Cruiser', 'Fishing', 'Sail', 'PWC', 'Ski Boat'].map((type) => (
                        <label key={type} className="flex items-center">
                          <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                          <span className="ml-2 text-sm text-gray-700">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Year */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
                    <select className="input-field text-sm">
                      <option>Any year</option>
                      <option>2024</option>
                      <option>2023</option>
                      <option>2022</option>
                      <option>2021</option>
                      <option>2020</option>
                      <option>2019</option>
                      <option>Older</option>
                    </select>
                  </div>

                  {/* Length */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Length</label>
                    <select className="input-field text-sm">
                      <option>Any length</option>
                      <option>Under 20ft</option>
                      <option>20-30ft</option>
                      <option>30-40ft</option>
                      <option>40-50ft</option>
                      <option>Over 50ft</option>
                    </select>
                  </div>

                  {/* Condition */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Condition</label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                        <span className="ml-2 text-sm text-gray-700">New</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                        <span className="ml-2 text-sm text-gray-700">Used</span>
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
                  <h2 className="text-2xl font-bold text-gray-900">Boats for Sale</h2>
                  <p className="text-gray-600">Showing {boatsForSale.length} results</p>
                </div>
                <div className="flex items-center space-x-4">
                  <select className="input-field">
                    <option>Sort by: Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Year: Newest First</option>
                    <option>Year: Oldest First</option>
                  </select>
                </div>
              </div>

              {/* Boats Grid */}
              <div className="grid grid-cols-1 gap-6">
                {boatsForSale.map((boat) => (
                  <BoatCard key={boat.id} boat={boat} type="buy" />
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
