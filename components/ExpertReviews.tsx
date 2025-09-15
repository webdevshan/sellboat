import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react'

const reviews = [
  {
    id: 1,
    title: 'Stabicraft 2050 Frontier Profish 2025 review',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: '2025-01-15',
    author: 'Marine Expert',
    category: 'REVIEW',
    excerpt: 'An in-depth look at this versatile fishing boat that combines performance with practicality.'
  },
  {
    id: 2,
    title: 'First Drive: Honda BF150 and BF250 2025 Outboards',
    image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: '2025-01-12',
    author: 'Engine Specialist',
    category: 'REVIEW',
    excerpt: 'Testing the latest Honda outboard engines for power, efficiency, and reliability.'
  },
  {
    id: 3,
    title: 'Surtees 670 Game Fisher 2025 review',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: '2025-01-10',
    author: 'Fishing Expert',
    category: 'REVIEW',
    excerpt: 'A comprehensive review of this popular fishing boat designed for serious anglers.'
  }
]

export default function ExpertReviews() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Expert Boat Reviews
          </h2>
          <p className="section-subtitle">
            Get professional insights and detailed reviews from our marine experts.
          </p>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <button className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow">
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>

          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow">
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div key={review.id} className="group cursor-pointer">
                <div className="card overflow-hidden">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={review.image}
                      alt={review.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Category Tag */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {review.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {review.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {review.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(review.date).toLocaleDateString('en-AU')}</span>
                      </div>
                      <span className="font-medium">{review.author}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link href="/reviews" className="btn-outline">
            Show All Boat Reviews
          </Link>
        </div>
      </div>
    </section>
  )
}
