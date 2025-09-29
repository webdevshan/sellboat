'use client'

import { MessageCircle, FileText, DollarSign, CheckCircle } from 'lucide-react'

export default function ExitProcess() {
  const steps = [
    {
      number: "01",
      icon: <MessageCircle className="h-8 w-8 text-primary-600" />,
      title: "Initial Contact",
      description: "Reach out via WhatsApp or phone. We'll ask a few quick questions about your share.",
      details: [
        "Which syndicate you're with",
        "What percentage you own",
        "How long you've had it",
        "Why you want to sell"
      ]
    },
    {
      number: "02",
      icon: <FileText className="h-8 w-8 text-primary-600" />,
      title: "Share Documentation",
      description: "We'll need to see your syndicate agreement and share certificate to make an offer.",
      details: [
        "Share purchase agreement",
        "Current syndicate certificate",
        "Recent fee statements",
        "Any outstanding obligations"
      ]
    },
    {
      number: "03",
      icon: <DollarSign className="h-8 w-8 text-primary-600" />,
      title: "Cash Offer",
      description: "We'll provide a firm cash offer within 24 hours based on market value.",
      details: [
        "Fair market valuation",
        "No hidden fees or charges",
        "Firm offer valid for 7 days",
        "Cash payment guaranteed"
      ]
    },
    {
      number: "04",
      icon: <CheckCircle className="h-8 w-8 text-primary-600" />,
      title: "Quick Settlement",
      description: "Complete the sale with minimal paperwork and fast settlement.",
      details: [
        "Simple transfer documents",
        "Bank transfer payment",
        "Syndicate notification handled",
        "Complete within 7 days"
      ]
    }
  ]

  return (
    <section id="process" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our simple 4-step process gets you cash for your boat share quickly and discreetly.
            No brokers, no syndicate exit fees, no hassles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-primary-200 z-0"
                     style={{ transform: 'translateX(-50%)' }}></div>
              )}

              <div className="relative z-10 bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="flex-shrink-0">
                    {step.icon}
                  </div>
                  <div className="text-2xl font-bold text-primary-600">
                    {step.number}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>

                <p className="text-gray-600 mb-4">
                  {step.description}
                </p>

                <div className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-500">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">
            Typical Timeline
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-lg font-semibold text-primary-600 mb-1">Day 1</div>
              <div className="text-sm text-gray-600">Initial contact & info gathering</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-primary-600 mb-1">Day 2</div>
              <div className="text-sm text-gray-600">Document review & valuation</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-primary-600 mb-1">Day 3</div>
              <div className="text-sm text-gray-600">Cash offer presented</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-primary-600 mb-1">Day 7</div>
              <div className="text-sm text-gray-600">Settlement complete</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://wa.me/61400123456?text=Hi%2C%20I%27d%20like%20to%20start%20the%20process%20of%20selling%20my%20boat%20share"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            <MessageCircle className="h-5 w-5" />
            <span>Start the Process Now</span>
          </a>
          <p className="text-sm text-gray-500 mt-3">
            Free consultation • No obligation • Completely confidential
          </p>
        </div>
      </div>
    </section>
  )
}
