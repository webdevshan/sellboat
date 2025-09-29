'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase-client'
import { ReferralSubmission } from '@/lib/supabase'
import { Eye, Edit, Trash2, RefreshCw } from 'lucide-react'

export default function ReferralsPage() {
  const [referrals, setReferrals] = useState<ReferralSubmission[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedReferral, setSelectedReferral] = useState<ReferralSubmission | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [editingReferral, setEditingReferral] = useState<ReferralSubmission | null>(null)

  const supabase = createClient()

  useEffect(() => {
    fetchReferrals()
  }, [])

  const fetchReferrals = async () => {
    try {
      setLoading(true)
      setError(null)

      console.log('Fetching referrals...')

      // Test the connection first
      const { data: testData, error: testError } = await supabase
        .from('referral_submissions')
        .select('count')
        .limit(1)

      console.log('Test query result:', { testData, testError })

      // Fetch referral submissions
      const { data: referralData, error: referralError } = await supabase
        .from('referral_submissions')
        .select('*')
        .order('created_at', { ascending: false })

      console.log('Referral fetch result:', { referralData, referralError })

      if (referralError) {
        console.error('Error fetching referrals:', referralError)
        setError(`Database error: ${referralError.message}`)
      } else {
        console.log('Referral data fetched successfully:', referralData)
        setReferrals(referralData || [])
      }
    } catch (error) {
      console.error('Error fetching referrals:', error)
      setError(`Network error: ${error instanceof Error ? error.message : 'Unknown error'}`)
    } finally {
      setLoading(false)
    }
  }

  const handleDeleteReferral = async (id: string) => {
    if (!confirm('Are you sure you want to delete this referral submission?')) return

    try {
      const { error } = await supabase
        .from('referral_submissions')
        .delete()
        .eq('id', id)

      if (error) {
        console.error('Error deleting referral:', error)
        alert('Failed to delete referral submission')
      } else {
        setReferrals(referrals.filter(r => r.id !== id))
      }
    } catch (error) {
      console.error('Error deleting referral:', error)
      alert('Failed to delete referral submission')
    }
  }

  const handleUpdateReferralStatus = async (id: string, newStatus: string) => {
    try {
      const { error } = await supabase
        .from('referral_submissions')
        .update({ status: newStatus })
        .eq('id', id)

      if (error) {
        console.error('Error updating referral status:', error)
        alert('Failed to update referral status')
      } else {
        setReferrals(referrals.map(r =>
          r.id === id ? { ...r, status: newStatus as any } : r
        ))
      }
    } catch (error) {
      console.error('Error updating referral status:', error)
      alert('Failed to update referral status')
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading referrals...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Referral Submissions</h1>
              <p className="text-gray-600 mt-2">Manage marina staff and skipper referrals</p>
            </div>
            <button
              onClick={fetchReferrals}
              className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              <RefreshCw className="h-4 w-4" />
              <span>Refresh</span>
            </button>
          </div>
        </div>

        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-md p-4">
            <div className="flex">
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">Error</h3>
                <div className="mt-2 text-sm text-red-700">
                  <p>{error}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">
              Referral Submissions ({referrals.length})
            </h2>
          </div>

          {referrals && referrals.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Referrer
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Role
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Owner
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Vessel Details
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Commission
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Submitted
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {referrals.map((referral: ReferralSubmission) => (
                    <tr key={referral.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {referral.referrer_name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {referral.referrer_role}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {referral.owner_name}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">
                        {referral.vessel_details}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <select
                          value={referral.status}
                          onChange={(e) => handleUpdateReferralStatus(referral.id, e.target.value)}
                          className={`text-xs font-semibold rounded-full px-2 py-1 border-0 ${
                            referral.status === 'new' ? 'bg-blue-100 text-blue-800' :
                            referral.status === 'contacted' ? 'bg-yellow-100 text-yellow-800' :
                            referral.status === 'closed' ? 'bg-green-100 text-green-800' :
                            'bg-purple-100 text-purple-800'
                          }`}
                        >
                          <option value="new">New</option>
                          <option value="contacted">Contacted</option>
                          <option value="closed">Closed</option>
                          <option value="commission_paid">Commission Paid</option>
                        </select>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {referral.status === 'commission_paid' ? (
                          <span className="text-green-600 font-semibold">$1,000 Paid</span>
                        ) : referral.status === 'closed' ? (
                          <span className="text-yellow-600">$1,000 Pending</span>
                        ) : (
                          <span className="text-gray-400">$1,000</span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(referral.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => {
                              setSelectedReferral(referral)
                              setShowModal(true)
                            }}
                            className="text-blue-600 hover:text-blue-900"
                            title="View Details"
                          >
                            <Eye className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => {
                              setEditingReferral(referral)
                              setShowModal(true)
                            }}
                            className="text-yellow-600 hover:text-yellow-900"
                            title="Edit"
                          >
                            <Edit className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteReferral(referral.id)}
                            className="text-red-600 hover:text-red-900"
                            title="Delete"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="px-6 py-8 text-center text-gray-500">
              {error ? 'Failed to load referrals' : 'No referral submissions yet.'}
            </div>
          )}
        </div>

        {/* Referral Details Modal */}
        {showModal && selectedReferral && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
            <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
              <div className="mt-3">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  {editingReferral ? 'Edit Referral' : 'Referral Details'}
                </h3>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Referrer Name</label>
                    <input
                      type="text"
                      value={selectedReferral.referrer_name}
                      readOnly={!editingReferral}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Referrer Role</label>
                    <input
                      type="text"
                      value={selectedReferral.referrer_role}
                      readOnly={!editingReferral}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Referrer Contact</label>
                    <input
                      type="text"
                      value={selectedReferral.referrer_contact}
                      readOnly={!editingReferral}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Owner Name</label>
                    <input
                      type="text"
                      value={selectedReferral.owner_name}
                      readOnly={!editingReferral}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Owner Contact</label>
                    <input
                      type="text"
                      value={selectedReferral.owner_contact}
                      readOnly={!editingReferral}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Vessel Details</label>
                    <textarea
                      value={selectedReferral.vessel_details}
                      readOnly={!editingReferral}
                      rows={3}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Owner Consent</label>
                    <input
                      type="checkbox"
                      checked={selectedReferral.owner_consent}
                      readOnly={!editingReferral}
                      className="mt-1 h-4 w-4 text-blue-600"
                    />
                    <span className="ml-2 text-sm text-gray-700">
                      {selectedReferral.owner_consent ? 'Consent Given' : 'No Consent'}
                    </span>
                  </div>
                </div>
                <div className="flex justify-end space-x-2 mt-6">
                  <button
                    onClick={() => {
                      setShowModal(false)
                      setSelectedReferral(null)
                      setEditingReferral(null)
                    }}
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
