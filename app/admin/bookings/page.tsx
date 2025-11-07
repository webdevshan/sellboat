import {
  Calendar,
  Search,
  Filter,
  Eye,
  CheckCircle,
  XCircle,
  Clock,
  User,
  DollarSign
} from 'lucide-react'

const bookings = [
  {
    id: 1,
    boatName: 'Sea Ray 270 Sundancer',
    customer: 'John Smith',
    email: '',
    phone: '+61 490 328 276',
    startDate: '2025-01-20',
    endDate: '2025-01-22',
    guests: 6,
    totalAmount: 1050,
    status: 'confirmed',
    createdAt: '2025-01-15',
    paymentStatus: 'paid'
  },
  {
    id: 2,
    boatName: 'Boston Whaler 235',
    customer: 'Sarah Johnson',
    email: '',
    phone: '+61 490 328 276',
    startDate: '2025-01-18',
    endDate: '2025-01-19',
    guests: 4,
    totalAmount: 560,
    status: 'pending',
    createdAt: '2025-01-16',
    paymentStatus: 'pending'
  },
  {
    id: 3,
    boatName: 'Bayliner VR5',
    customer: 'Mike Wilson',
    email: '',
    phone: '+61 490 328 276',
    startDate: '2025-01-15',
    endDate: '2025-01-17',
    guests: 8,
    totalAmount: 600,
    status: 'completed',
    createdAt: '2025-01-10',
    paymentStatus: 'paid'
  },
  {
    id: 4,
    boatName: 'Grady-White 255',
    customer: 'Emma Davis',
    email: '',
    phone: '+61 490 328 276',
    startDate: '2025-01-25',
    endDate: '2025-01-27',
    guests: 6,
    totalAmount: 900,
    status: 'cancelled',
    createdAt: '2025-01-12',
    paymentStatus: 'refunded'
  }
]

export default function AdminBookingsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Bookings Management</h1>
          <p className="text-gray-600 mt-2">Manage all boat rental bookings and reservations</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search bookings..."
              className="input-field pl-10"
            />
          </div>

          <select className="input-field">
            <option>All Status</option>
            <option>Confirmed</option>
            <option>Pending</option>
            <option>Completed</option>
            <option>Cancelled</option>
          </select>

          <select className="input-field">
            <option>All Boats</option>
            <option>Sea Ray 270 Sundancer</option>
            <option>Boston Whaler 235</option>
            <option>Bayliner VR5</option>
            <option>Grady-White 255</option>
          </select>

          <input
            type="date"
            className="input-field"
            placeholder="Filter by date"
          />
        </div>
      </div>

      {/* Bookings Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Booking
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Dates
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Guests
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {bookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">#{booking.id}</div>
                      <div className="text-sm text-gray-500">{booking.boatName}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{booking.customer}</div>
                      <div className="text-sm text-gray-500">{booking.email}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{booking.startDate}</div>
                    <div className="text-sm text-gray-500">to {booking.endDate}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {booking.guests} guests
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">${booking.totalAmount}</div>
                      <div className={`text-xs ${
                        booking.paymentStatus === 'paid'
                          ? 'text-green-600'
                          : booking.paymentStatus === 'pending'
                          ? 'text-yellow-600'
                          : 'text-red-600'
                      }`}>
                        {booking.paymentStatus}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      booking.status === 'confirmed'
                        ? 'bg-green-100 text-green-800'
                        : booking.status === 'pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : booking.status === 'completed'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      <button className="text-primary-600 hover:text-primary-900">
                        <Eye className="h-4 w-4" />
                      </button>
                      {booking.status === 'pending' && (
                        <>
                          <button className="text-green-600 hover:text-green-900">
                            <CheckCircle className="h-4 w-4" />
                          </button>
                          <button className="text-red-600 hover:text-red-900">
                            <XCircle className="h-4 w-4" />
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <Calendar className="h-8 w-8 text-blue-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Bookings</p>
              <p className="text-2xl font-semibold text-gray-900">1,234</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <CheckCircle className="h-8 w-8 text-green-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Confirmed</p>
              <p className="text-2xl font-semibold text-gray-900">856</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <Clock className="h-8 w-8 text-yellow-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Pending</p>
              <p className="text-2xl font-semibold text-gray-900">156</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <DollarSign className="h-8 w-8 text-green-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Revenue</p>
              <p className="text-2xl font-semibold text-gray-900">$2.4M</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
