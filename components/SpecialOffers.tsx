import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function SpecialOffers() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Special Offers */}
          <div className="relative group overflow-hidden rounded-2xl shadow-lg">
            <div className="bg-gradient-to-br from-primary-600 to-primary-800 p-8 h-64 flex flex-col justify-center text-white">
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2">Special Offers</h3>
                <p className="text-primary-100 mb-4">PLAN YOUR NEXT TRIP</p>
                <p className="text-sm text-primary-100 mb-6">
                  Discover exclusive deals on premium boat rentals and purchases across Australia.
                </p>
                <Link href="/offers" className="inline-flex items-center text-white hover:text-primary-200 transition-colors">
                  View Offers <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Weekly Flash Deals */}
          <div className="relative group overflow-hidden rounded-2xl shadow-lg">
            <div className="bg-gradient-to-br from-secondary-600 to-secondary-800 p-8 h-64 flex flex-col justify-center text-white">
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2">Weekly Flash Deals</h3>
                <p className="text-secondary-100 mb-4">UP TO 30% OFF</p>
                <p className="text-sm text-secondary-100 mb-6">
                  Limited time offers on selected boats and marine accessories.
                </p>
                <Link href="/deals" className="inline-flex items-center text-white hover:text-secondary-200 transition-colors">
                  Shop Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="relative group overflow-hidden rounded-2xl shadow-lg">
            <div className="bg-gradient-to-br from-accent-500 to-accent-700 p-8 h-64 flex flex-col justify-center text-white">
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2">Newsletter</h3>
                <p className="text-accent-100 mb-4">WANT TO SAVE UP TO 50%</p>
                <p className="text-sm text-accent-100 mb-6">
                  Subscribe to our newsletter for exclusive discounts and updates.
                </p>
                <Link href="/newsletter" className="inline-flex items-center text-white hover:text-accent-200 transition-colors">
                  Subscribe <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
