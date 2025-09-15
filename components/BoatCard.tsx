import Image from 'next/image'
import Link from 'next/link'
import { Heart, Star, MapPin, Calendar, Users, Anchor, Clock } from 'lucide-react'

interface Boat {
  id: number
  name: string
  image: string
  price: number
  location: string
  year: number
  length: string
  condition: string
  type: string
  features?: string[]
  description: string
  rating?: number
  reviews?: number
  capacity?: string
  engine?: string
  hours?: number
}

interface BoatCardProps {
  boat: Boat
  type: 'buy' | 'rent'
}

export default function BoatCard({ boat, type }: BoatCardProps) {
  const formatPrice = (price: number) => {
    if (type === 'rent') {
      return `$${price}/day`
    }
    return `$${price.toLocaleString()}`
  }

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="md:flex">
        {/* Image */}
        <div className="md:w-1/3 relative h-64 md:h-auto">
          <Image
            src={boat.image}
            alt={boat.name}
            fill
            className="object-cover"
          />

          {/* Tags */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
              type === 'rent' ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'
            }`}>
              {type === 'rent' ? 'FOR RENT' : 'FOR SALE'}
            </span>
            {boat.condition === 'New' || boat.condition === 'Brand New' ? (
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                NEW
              </span>
            ) : null}
          </div>

          {/* Favorite Button */}
          <button className="absolute top-4 right-4 p-2 bg-white bg-opacity-80 rounded-full hover:bg-opacity-100 transition-all">
            <Heart className="h-5 w-5 text-gray-600 hover:text-red-500 transition-colors" />
          </button>
        </div>

        {/* Content */}
        <div className="md:w-2/3 p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{boat.name}</h3>
              <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                <div className="flex items-center space-x-1">
                  <MapPin className="h-4 w-4" />
                  <span>{boat.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{boat.year}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Anchor className="h-4 w-4" />
                  <span>{boat.length}</span>
                </div>
              </div>
            </div>

            {/* Rating for rentals */}
            {type === 'rent' && boat.rating && (
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">{boat.rating}</span>
                <span className="text-sm text-gray-500">({boat.reviews})</span>
              </div>
            )}
          </div>

          {/* Boat Details */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
            <div>
              <span className="text-gray-500">Type:</span>
              <p className="font-medium text-gray-900">{boat.type}</p>
            </div>
            <div>
              <span className="text-gray-500">Condition:</span>
              <p className="font-medium text-gray-900">{boat.condition}</p>
            </div>
            {type === 'buy' && boat.engine && (
              <div>
                <span className="text-gray-500">Engine:</span>
                <p className="font-medium text-gray-900">{boat.engine}</p>
              </div>
            )}
            {type === 'buy' && boat.hours && (
              <div>
                <span className="text-gray-500">Hours:</span>
                <p className="font-medium text-gray-900">{boat.hours}</p>
              </div>
            )}
            {type === 'rent' && boat.capacity && (
              <div>
                <span className="text-gray-500">Capacity:</span>
                <p className="font-medium text-gray-900">{boat.capacity}</p>
              </div>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {boat.description}
          </p>

          {/* Features */}
          {boat.features && boat.features.length > 0 && (
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {boat.features.slice(0, 4).map((feature, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                  >
                    {feature}
                  </span>
                ))}
                {boat.features.length > 4 && (
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                    +{boat.features.length - 4} more
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Price and Action */}
          <div className="flex justify-between items-center">
            <div>
              <span className="text-2xl font-bold text-primary-600">
                {formatPrice(boat.price)}
              </span>
              {type === 'buy' && (
                <p className="text-sm text-gray-500">Negotiable</p>
              )}
            </div>

            <Link
              href={type === 'rent' ? `/rent/${boat.id}` : `/buy/${boat.id}`}
              className="btn-primary"
            >
              {type === 'rent' ? 'Book Now' : 'View Details'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
