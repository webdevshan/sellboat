'use client'

import { DollarSign, Calendar, Users, Shield, X, CheckCircle } from 'lucide-react'

export default function WhySell() {
  const painPoints = [
    {
      icon: <DollarSign className="h-8 w-8 text-red-500" />,
      title: "High Operating Costs",
      description: "Monthly fees, maintenance, insurance, and unexpected repairs eating into your budget"
    },
    {
      icon: <Calendar className="h-8 w-8 text-red-500" />,
      title: "Unused Days",
      description: "Only using 2-3 days per year but paying for 12 months of ownership"
    },
    {
      icon: <Users className="h-8 w-8 text-red-500" />,
      title: "Syndicate Drama",
      description: "Dealing with other owners, booking conflicts, and administrative hassles"
    },
    {
      icon: <Shield className="h-8 w-8 text-red-500" />,
      title: "Exit Restrictions",
      description: "Syndicate companies make it difficult and expensive to sell your share"
    }
  ]

  const benefits = [
    "Immediate cash payment",
    "No syndicate exit fees",
    "No broker commissions",
    "Complete privacy and discretion",
    "Simple paperwork",
    "Fast settlement"
  ]

  return (
    <section id="why-sell" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Sell Your Boat Share?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Many boat share owners are paying thousands in fees for days they never use.
            Get cash for your share and eliminate the ongoing costs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Pain Points */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Common Boat Share Problems
            </h3>
            <div className="space-y-6">
              {painPoints.map((point, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {point.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {point.title}
                    </h4>
                    <p className="text-gray-600">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Why Choose Us?
            </h3>
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-primary-50 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <DollarSign className="h-5 w-5 text-primary-600" />
                  <span className="font-semibold text-primary-900">Cash Offer Guaranteed</span>
                </div>
                <p className="text-sm text-primary-700">
                  We provide fair market value for your share with no hidden fees or conditions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">$15,000+</div>
            <div className="text-gray-600">Average Annual Savings</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">7 Days</div>
            <div className="text-gray-600">Average Settlement Time</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
            <div className="text-gray-600">Confidential Process</div>
          </div>
        </div>
      </div>
    </section>
  )
}
