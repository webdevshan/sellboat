import {
  Ship,
  Calendar,
  Users,
  DollarSign,
  TrendingUp,
  TrendingDown,
  Eye,
  Star,
  BarChart3
} from 'lucide-react'

const stats = [
  {
    name: 'Total Boats',
    value: '2,847',
    change: '+12%',
    changeType: 'increase',
    icon: Ship,
  },
  {
    name: 'Active Bookings',
    value: '156',
    change: '+8%',
    changeType: 'increase',
    icon: Calendar,
  },
  {
    name: 'Total Users',
    value: '1,234',
    change: '+23%',
    changeType: 'increase',
    icon: Users,
  },
  {
    name: 'Revenue',
    value: '$2.4M',
    change: '+15%',
    changeType: 'increase',
    icon: DollarSign,
  },
]

const recentBookings = [
  {
    id: 1,
    boatName: 'Sea Ray 270 Sundancer',
    customer: 'John Smith',
    startDate: '2025-01-20',
    endDate: '2025-01-22',
    amount: 1050,
    status: 'confirmed'
  },
  {
    id: 2,
    boatName: 'Boston Whaler 235',
    customer: 'Sarah Johnson',
    startDate: '2025-01-18',
    endDate: '2025-01-19',
    amount: 560,
    status: 'pending'
  },
  {
    id: 3,
    boatName: 'Bayliner VR5',
    customer: 'Mike Wilson',
    startDate: '2025-01-15',
    endDate: '2025-01-17',
    amount: 600,
    status: 'completed'
  }
]

const recentBoats = [
  {
    id: 1,
    name: '2024 Grady-White 255 Freedom',
    type: 'Fishing',
    price: 195000,
    status: 'active',
    views: 234,
    rating: 4.8
  },
  {
    id: 2,
    name: '2023 Sea Ray 270 Sundancer',
    type: 'Cruiser',
    price: 145000,
    status: 'pending',
    views: 189,
    rating: 4.9
  },
  {
    id: 3,
    name: '2024 Boston Whaler 235 Conquest',
    type: 'Fishing',
    price: 85000,
    status: 'active',
    views: 156,
    rating: 4.7
  }
]

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-600 mt-2">Welcome to your boat marketplace management dashboard</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <stat.icon className="h-8 w-8 text-primary-600" />
              </div>
              <div className="ml-4 flex-1">
                <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                <div className="flex items-baseline">
                  <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                  <p className={`ml-2 text-sm font-medium ${
                    stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.changeType === 'increase' ? (
                      <TrendingUp className="h-4 w-4 inline" />
                    ) : (
                      <TrendingDown className="h-4 w-4 inline" />
                    )}
                    {stat.change}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Bookings */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Recent Bookings</h3>
          </div>
          <div className="divide-y divide-gray-200">
            {recentBookings.map((booking) => (
              <div key={booking.id} className="px-6 py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{booking.boatName}</p>
                    <p className="text-sm text-gray-500">{booking.customer}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">${booking.amount}</p>
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      booking.status === 'confirmed'
                        ? 'bg-green-100 text-green-800'
                        : booking.status === 'pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {booking.status}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {booking.startDate} - {booking.endDate}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Boats */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Recent Boat Listings</h3>
          </div>
          <div className="divide-y divide-gray-200">
            {recentBoats.map((boat) => (
              <div key={boat.id} className="px-6 py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{boat.name}</p>
                    <p className="text-sm text-gray-500">{boat.type}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">${boat.price.toLocaleString()}</p>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        <Eye className="h-3 w-3 text-gray-400 mr-1" />
                        <span className="text-xs text-gray-500">{boat.views}</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="h-3 w-3 text-yellow-400 mr-1" />
                        <span className="text-xs text-gray-500">{boat.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full mt-2 ${
                  boat.status === 'active'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {boat.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            <Ship className="h-5 w-5 mr-2" />
            Add New Boat
          </button>
          <button className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            <Calendar className="h-5 w-5 mr-2" />
            View All Bookings
          </button>
          <button className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            <BarChart3 className="h-5 w-5 mr-2" />
            Generate Report
          </button>
        </div>
      </div>
    </div>
  )
}
