import { Anchor, Users, DollarSign, Clock, Shield } from 'lucide-react'

export default function ReferralSection() {
  return (
    <div id="referral" className="bg-gradient-to-br from-blue-50 to-green-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-white p-4 rounded-full shadow-lg">
              <Anchor className="h-12 w-12 text-blue-600" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Dockside Referral Program
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Turn unused boats into opportunity - earn $1,000 per deal
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Problem description */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              We all know the story
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Many boats sit at Rushcutters Bay, Rose Bay, and Double Bay marinas for 360 days a year, barely used. Some owners are happy with that, but most fall in love with the idea of boating and never get around to maximising their time on the water.
            </p>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                We're creating a new way to recycle under-utilised assets:
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Helping owners exit existing syndicates</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Buying or leasing unused shares</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Assisting willing owners to rent out or syndicate their vessels</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right side - How it works */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              This is where you come in
            </h3>
            <p className="text-lg text-gray-700 mb-8">
              We need your help identifying these opportunities. If you know of an owner who wants to sell down a share, exit a syndicate, lease, or sell their vessel/berth, introduce us.
            </p>

            <div className="space-y-6">
              {/* How it works */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <Users className="h-6 w-6 text-blue-600 mr-3" />
                  <h4 className="text-lg font-semibold text-gray-900">How it works:</h4>
                </div>
                <ol className="space-y-3">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3">1</span>
                    <span className="text-gray-700">Have a quick conversation with the owner and confirm they're open to being contacted.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3">2</span>
                    <span className="text-gray-700">Submit their details via our secure form or WhatsApp line.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3">3</span>
                    <span className="text-gray-700">One of our team will follow up directly with them to explain our value proposition.</span>
                  </li>
                </ol>
              </div>

              {/* Your reward */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <DollarSign className="h-6 w-6 text-green-600 mr-3" />
                  <h4 className="text-lg font-semibold text-green-800">Your reward:</h4>
                </div>
                <p className="text-green-700 mb-3">
                  If we successfully close a purchase or lease, you'll receive an immediate $1,000 cash payment for each successful referral.
                </p>
                <div className="flex items-center text-sm text-green-600">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>Payment is made within 14 days of deal completion.</span>
                </div>
              </div>

              {/* Confidential */}
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <Shield className="h-6 w-6 text-gray-600 mr-3" />
                  <h4 className="text-lg font-semibold text-gray-900">Confidential & Straightforward</h4>
                </div>
                <p className="text-gray-700">
                  All communications are completely confidential. Help us put unused boats back on the water while earning rewarding referral income.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
