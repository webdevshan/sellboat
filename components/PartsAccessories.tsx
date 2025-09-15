import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, Check } from 'lucide-react'

const accessories = [
  {
    name: 'Life jackets/PFDs',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'Safety'
  },
  {
    name: 'Fishing Gear',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'Fishing'
  },
  {
    name: 'Rods and Reels',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'Fishing'
  },
  {
    name: 'Towing Equipment',
    image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'Towing'
  }
]

export default function PartsAccessories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Parts and Accessories
          </h2>
          <p className="section-subtitle">
            Everything you need for your boating adventure in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Shop the best in marine gear
              </h3>
              <p className="text-gray-600 mb-6">
                Get all your parts and accessories in one place. From safety equipment to fishing gear,
                we have everything you need for your next boating adventure.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Marine accessories</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Towing and trailer</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Fishing, water sports and safety</span>
                </div>
              </div>

              <Link href="/parts" className="btn-primary inline-flex items-center">
                Shop Now
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right Content - Featured Items */}
          <div>
            <div className="grid grid-cols-2 gap-4">
              {accessories.map((item, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-xl shadow-md group-hover:shadow-lg transition-shadow duration-300">
                    <div className="aspect-square relative">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h4 className="text-white font-semibold text-sm mb-1">{item.name}</h4>
                      <span className="text-xs text-gray-200 bg-white bg-opacity-20 px-2 py-1 rounded-full">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Browse by Category
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Safety Equipment', icon: '🦺', count: '245 items' },
              { name: 'Fishing Gear', icon: '🎣', count: '189 items' },
              { name: 'Navigation', icon: '🧭', count: '156 items' },
              { name: 'Maintenance', icon: '🔧', count: '298 items' },
              { name: 'Electronics', icon: '📡', count: '134 items' },
              { name: 'Comfort', icon: '🪑', count: '167 items' },
              { name: 'Storage', icon: '📦', count: '89 items' },
              { name: 'Power & Fuel', icon: '⛽', count: '112 items' }
            ].map((category, index) => (
              <Link
                key={index}
                href={`/parts/category/${category.name.toLowerCase().replace(' ', '-')}`}
                className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">{category.name}</h4>
                <p className="text-sm text-gray-500">{category.count}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
