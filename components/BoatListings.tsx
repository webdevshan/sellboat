import Link from 'next/link'
import Image from 'next/image'
import { Star, MapPin, Calendar, Users, Anchor, ArrowRight } from 'lucide-react'

const boatListings = [
  {
    id: 1,
    name: '2024 Sea Ray 270 Sundancer',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 145000,
    location: 'Sydney, NSW',
    year: 2024,
    length: '27ft',
    type: 'Cruiser',
    condition: 'New',
    rating: 4.9,
    reviews: 12,
    features: ['Air Conditioning', 'Generator', 'GPS', 'Radar']
  },
  {
    id: 2,
    name: '2023 Boston Whaler 235 Conquest',
    image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 85000,
    location: 'Melbourne, VIC',
    year: 2023,
    length: '23ft',
    type: 'Fishing',
    condition: 'Excellent',
    rating: 4.8,
    reviews: 8,
    features: ['Live Well', 'Fish Finder', 'GPS', 'Bait Prep Station']
  },
  {
    id: 3,
    name: '2022 Bayliner VR5',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 55000,
    location: 'Brisbane, QLD',
    year: 2022,
    length: '21ft',
    type: 'Leisure',
    condition: 'Very Good',
    rating: 4.7,
    reviews: 15,
    features: ['Ski Tow Bar', 'Sound System', 'Bimini Top', 'Cooler']
  },
  {
    id: 4,
    name: '2024 Grady-White 255 Freedom',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 195000,
    location: 'Perth, WA',
    year: 2024,
    length: '25ft',
    type: 'Fishing',
    condition: 'New',
    rating: 4.9,
    reviews: 6,
    features: ['T-Top', 'Live Well', 'Fish Finder', 'Rod Holders']
  }
]

export default function BoatListings() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Latest Boat Listings
          </h2>
          <p className="section-subtitle">
            Discover the newest boats added to our marketplace from sellers across Australia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {boatListings.map((boat) => (
            <div key={boat.id} className="group cursor-pointer">
              <div className="card overflow-hidden">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={boat.image}
                    alt={boat.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Tags */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      boat.condition === 'New' ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'
                    }`}>
                      {boat.condition === 'New' ? 'NEW' : 'FOR SALE'}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full px-2 py-1 flex items-center space-x-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-medium">{boat.rating}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {boat.name}
                  </h3>

                  {/* Details */}
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-3 w-3" />
                      <span>{boat.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{boat.year}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                    <div className="flex items-center space-x-1">
                      <Anchor className="h-3 w-3" />
                      <span>{boat.length}</span>
                    </div>
                    <span className="bg-gray-100 px-2 py-1 rounded-full text-xs">{boat.type}</span>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {boat.features.slice(0, 2).map((feature, index) => (
                        <span
                          key={index}
                          className="bg-primary-100 text-primary-700 px-2 py-1 rounded-full text-xs"
                        >
                          {feature}
                        </span>
                      ))}
                      {boat.features.length > 2 && (
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                          +{boat.features.length - 2}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-xl font-bold text-primary-600">
                        ${boat.price.toLocaleString()}
                      </span>
                    </div>

                    <Link
                      href={`/buy/${boat.id}`}
                      className="text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link href="/buy" className="btn-primary inline-flex items-center">
            View All Boats
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
