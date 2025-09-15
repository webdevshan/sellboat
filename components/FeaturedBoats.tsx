'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, Star, ChevronLeft, ChevronRight, Users, Anchor, Calendar } from 'lucide-react'

const featuredBoats = [
  {
    id: 1,
    name: 'Aperahama Yacht',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: '$100 - $200',
    rating: 4.8,
    capacity: '6-10 People',
    cabins: 3,
    length: '45ft',
    year: 2023,
    isNew: true,
    type: 'rent'
  },
  {
    id: 2,
    name: 'Parahita Yacht',
    image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: '$10 - $400',
    rating: 4.9,
    capacity: '4-8 People',
    cabins: 2,
    length: '38ft',
    year: 2022,
    isNew: false,
    type: 'rent'
  },
  {
    id: 3,
    name: 'Pershing 2016 Yacht',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: '$297,000',
    rating: 4.7,
    capacity: '8-12 People',
    cabins: 4,
    length: '52ft',
    year: 2016,
    isNew: false,
    type: 'buy'
  },
  {
    id: 4,
    name: 'Stabicraft 1850 Supercab',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: '$85,000',
    rating: 4.6,
    capacity: '6 People',
    cabins: 1,
    length: '18ft',
    year: 2024,
    isNew: true,
    type: 'buy'
  },
  {
    id: 5,
    name: 'Beneteau Gran Turismo 36',
    image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: '$250 - $500',
    rating: 4.9,
    capacity: '10-15 People',
    cabins: 3,
    length: '36ft',
    year: 2023,
    isNew: false,
    type: 'rent'
  }
]

export default function FeaturedBoats() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [favorites, setFavorites] = useState<number[]>([])

  const toggleFavorite = (id: number) => {
    setFavorites(prev =>
      prev.includes(id)
        ? prev.filter(favId => favId !== id)
        : [...prev, id]
    )
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, featuredBoats.length - 2))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(1, featuredBoats.length - 2)) % Math.max(1, featuredBoats.length - 2))
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Our Exclusive Top Luxury Boats
          </h2>
          <p className="section-subtitle">
            Discover premium boats for sale and rent, carefully selected for quality and performance.
          </p>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>

          {/* Boats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBoats.slice(currentIndex, currentIndex + 3).map((boat) => (
              <div key={boat.id} className="card overflow-hidden group">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={boat.image}
                    alt={boat.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Tags */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {boat.isNew && (
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        NEW
                      </span>
                    )}
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      boat.type === 'rent' ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'
                    }`}>
                      {boat.type === 'rent' ? 'FOR RENT' : 'FOR SALE'}
                    </span>
                  </div>

                  {/* Favorite Button */}
                  <button
                    onClick={() => toggleFavorite(boat.id)}
                    className="absolute top-4 right-4 p-2 bg-white bg-opacity-80 rounded-full hover:bg-opacity-100 transition-all"
                  >
                    <Heart
                      className={`h-5 w-5 ${
                        favorites.includes(boat.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'
                      }`}
                    />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Boat Details */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{boat.capacity}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Anchor className="h-4 w-4" />
                        <span>{boat.length}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{boat.year}</span>
                      </div>
                    </div>
                  </div>

                  {/* Name and Rating */}
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{boat.name}</h3>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(boat.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">({boat.rating})</span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <span className="text-2xl font-bold text-primary-600">
                      {boat.price}
                      {boat.type === 'rent' && <span className="text-sm font-normal text-gray-600">/day</span>}
                    </span>
                  </div>

                  {/* Action Button */}
                  <Link
                    href={boat.type === 'rent' ? `/rent/${boat.id}` : `/buy/${boat.id}`}
                    className="btn-primary w-full text-center block"
                  >
                    {boat.type === 'rent' ? 'Book Now' : 'View Details'}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link href="/boats" className="btn-outline">
            View All Boats
          </Link>
        </div>
      </div>
    </section>
  )
}
