import SellForm from '@/components/SellForm'
import { Anchor, CheckCircle, Users, Shield, TrendingUp } from 'lucide-react'

const benefits = [
  {
    icon: Users,
    title: 'Reach More Buyers',
    description: 'Connect with thousands of potential buyers across Australia'
  },
  {
    icon: Shield,
    title: 'Secure Transactions',
    description: 'Safe and secure payment processing with buyer verification'
  },
  {
    icon: TrendingUp,
    title: 'Fair Market Pricing',
    description: 'Get expert valuations and pricing recommendations'
  }
]

export default function SellPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display">
                Sell Your Boat with Confidence
              </h1>
              <p className="text-xl text-primary-100 mb-8">
                Australia&apos;s most trusted boat marketplace. List your boat and connect with serious buyers nationwide.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                  Start Listing
                </button>
                <button className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
                  Get Valuation
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <Anchor className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Quick & Easy</h3>
                    <p className="text-primary-100">List in minutes</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span>Free listing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span>Professional photos</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span>Market analysis</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span>Buyer verification</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Why Choose BoatMarket?</h2>
            <p className="section-subtitle">
              We make selling your boat simple, secure, and successful.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
                  <benefit.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">15,000+</div>
              <div className="text-gray-600">Boats Sold</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">$2.5B+</div>
              <div className="text-gray-600">Total Sales Value</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">28 Days</div>
              <div className="text-gray-600">Average Time to Sell</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">98%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sell Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">List Your Boat</h2>
            <p className="section-subtitle">
              Tell us about your boat and we&apos;ll help you create the perfect listing.
            </p>
          </div>

          <SellForm />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'How much does it cost to list my boat?',
                answer: 'Listing your boat on BoatMarket is completely free. We only charge a small commission when your boat sells.'
              },
              {
                question: 'How long does it take to sell my boat?',
                answer: 'On average, boats sell within 28 days on our platform. Well-priced boats with good photos typically sell faster.'
              },
              {
                question: 'Do you provide boat valuations?',
                answer: 'Yes, we provide free market valuations based on current market data and comparable sales in your area.'
              },
              {
                question: 'How do you verify buyers?',
                answer: 'All potential buyers go through our verification process, including identity checks and financial verification for serious inquiries.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
