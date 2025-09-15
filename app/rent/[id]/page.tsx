import Image from 'next/image'
import { notFound } from 'next/navigation'
import BookingForm from '@/components/BookingForm'
import { Star, MapPin, Users, Calendar, Clock, Shield, Wifi, Car, Utensils } from 'lucide-react'

// Mock boat data
const boatData = {
  1: {
    id: 1,
    name: '2023 Sea Ray 270 Sundancer',
    images: [
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    price: 350,
    location: 'Sydney Harbour',
    year: 2023,
    length: '27ft',
    type: 'Cruiser',
    capacity: '8 people',
    features: ['Captain Included', 'Fuel Included', 'Fishing Gear', 'Cooler', 'Bluetooth Sound System', 'Bimini Top'],
    description: 'Perfect for special occasions and family outings. This beautiful cruiser offers comfort and style with professional captain included. Experience Sydney Harbour in luxury.',
    rating: 4.8,
    reviews: 24,
    captain: {
      name: 'Captain James',
      experience: '15 years',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    amenities: [
      { icon: Users, name: 'Max 8 guests', description: 'Comfortable seating for 8 people' },
      { icon: Clock, name: '8 hour rental', description: 'Full day experience' },
      { icon: Shield, name: 'Safety equipment', description: 'Life jackets and safety gear included' },
      { icon: Wifi, name: 'WiFi available', description: 'Stay connected on the water' },
      { icon: Car, name: 'Parking included', description: 'Free parking at marina' },
      { icon: Utensils, name: 'Catering available', description: 'Food and drinks can be arranged' }
    ]
  }
}

interface PageProps {
  params: {
    id: string
  }
}

export default function BoatRentalPage({ params }: PageProps) {
  const boatId = parseInt(params.id)
  const boat = boatData[boatId as keyof typeof boatData] || boatData[1]

  if (!boat) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96">
        <div className="absolute inset-0">
          <Image
            src={boat.images[0]}
            alt={boat.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 w-full">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">
                {boat.name}
              </h1>
              <div className="flex items-center space-x-6 text-lg">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span>{boat.rating}</span>
                  <span className="text-gray-300">({boat.reviews} reviews)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  <span>{boat.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Image Gallery */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {boat.images.map((image, index) => (
                  <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src={image}
                      alt={`${boat.name} - Image ${index + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                  </div>
                ))}
              </div>

              {/* Description */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About this boat</h2>
                <p className="text-gray-600 leading-relaxed">{boat.description}</p>
              </div>

              {/* Features */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">What's included</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {boat.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Amenities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {boat.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="p-2 bg-primary-100 rounded-lg">
                        <amenity.icon className="h-5 w-5 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{amenity.name}</h3>
                        <p className="text-sm text-gray-600">{amenity.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Captain Info */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Meet your captain</h2>
                <div className="flex items-center space-x-6">
                  <div className="relative">
                    <Image
                      src={boat.captain.image}
                      alt={boat.captain.name}
                      width={80}
                      height={80}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{boat.captain.name}</h3>
                    <p className="text-gray-600 mb-2">{boat.captain.experience} of experience</p>
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{boat.captain.rating}</span>
                      <span className="text-gray-500">Captain rating</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reviews */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Reviews</h2>
                <div className="space-y-6">
                  {[
                    {
                      name: 'Sarah M.',
                      rating: 5,
                      date: '2025-01-10',
                      comment: 'Amazing experience! Captain James was professional and knowledgeable. The boat was in perfect condition and the views were spectacular.'
                    },
                    {
                      name: 'Mike R.',
                      rating: 5,
                      date: '2025-01-08',
                      comment: 'Great day out on the water. Everything was included as promised and the captain made sure we had a wonderful time.'
                    },
                    {
                      name: 'Emma L.',
                      rating: 4,
                      date: '2025-01-05',
                      comment: 'Beautiful boat and excellent service. Would definitely book again for special occasions.'
                    }
                  ].map((review, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold text-gray-900">{review.name}</h4>
                          <div className="flex items-center space-x-2">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">{new Date(review.date).toLocaleDateString('en-AU')}</span>
                      </div>
                      <p className="text-gray-600">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Booking */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <BookingForm boat={boat} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
