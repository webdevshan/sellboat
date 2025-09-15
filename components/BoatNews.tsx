import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Calendar, User } from 'lucide-react'

const news = [
  {
    id: 1,
    title: '2026 Yamaha Crosswave revealed: radical four-seat fishing jet ski headed for Australia',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: '2025-01-18',
    author: 'Marine News Team',
    category: 'NEWS',
    excerpt: 'The revolutionary new Yamaha Crosswave brings fishing capabilities to the personal watercraft market.'
  },
  {
    id: 2,
    title: 'New-look Quintrex Territory Legend models now available across Australia',
    image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: '2025-01-16',
    author: 'Industry Reporter',
    category: 'NEWS',
    excerpt: 'Updated design and enhanced features make the Territory Legend series more appealing than ever.'
  },
  {
    id: 3,
    title: 'Yellowfin launches new YF-76F Extended Cabin Twin Pod for 2025',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: '2025-01-14',
    author: 'Yacht News',
    category: 'NEWS',
    excerpt: 'The new extended cabin model offers increased comfort and storage for serious offshore fishing.'
  }
]

export default function BoatNews() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Boat News
          </h2>
          <p className="section-subtitle">
            Stay updated with the latest developments in the marine industry.
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

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((article) => (
              <div key={article.id} className="group cursor-pointer">
                <div className="card overflow-hidden">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Category Tag */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(article.date).toLocaleDateString('en-AU')}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{article.author}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link href="/news" className="btn-outline">
            Show All Boat News
          </Link>
        </div>
      </div>
    </section>
  )
}
