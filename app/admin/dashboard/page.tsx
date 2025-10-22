"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import AdminRoute from '@/components/AdminRoute';
import { Plus, Edit, Trash2, Search, Users, Calendar, MessageCircle, LogOut } from 'lucide-react';
import { MOCK_THERAPISTS } from '@/lib/data/mockTherapists';
import { Therapist } from '@/lib/types';
import { logoutUser } from '@/lib/auth';

export default function AdminDashboard() {
  const router = useRouter();
  const [therapists, setTherapists] = useState<Therapist[]>(MOCK_THERAPISTS);
  const [searchQuery, setSearchQuery] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [therapistToDelete, setTherapistToDelete] = useState<string | null>(null);

  const filteredTherapists = therapists.filter(t =>
    t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.specializations.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleDelete = (id: string) => {
    setTherapistToDelete(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (therapistToDelete) {
      setTherapists(therapists.filter(t => t.id !== therapistToDelete));
      setShowDeleteModal(false);
      setTherapistToDelete(null);
    }
  };

  const handleLogout = async () => {
    await logoutUser();
    router.push('/');
  };

  return (
    <AdminRoute>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="text-gray-600">Manage therapists and platform content</p>
              </div>
              <button onClick={handleLogout} className="btn-secondary flex items-center gap-2">
                <LogOut className="h-5 w-5" />
                Logout
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="card bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-indigo-100 mb-1">Total Therapists</p>
                  <p className="text-4xl font-bold">{therapists.length}</p>
                </div>
                <Users className="h-12 w-12 text-indigo-200" />
              </div>
            </div>
            <div className="card bg-gradient-to-br from-green-500 to-emerald-600 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 mb-1">Active Bookings</p>
                  <p className="text-4xl font-bold">124</p>
                </div>
                <Calendar className="h-12 w-12 text-green-200" />
              </div>
            </div>
            <div className="card bg-gradient-to-br from-pink-500 to-rose-600 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-pink-100 mb-1">Community Posts</p>
                  <p className="text-4xl font-bold">1,234</p>
                </div>
                <MessageCircle className="h-12 w-12 text-pink-200" />
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center mb-6">
            <div className="flex-1 w-full sm:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search therapists..."
                  className="input-field pl-10 w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <Link href="/admin/therapists/new" className="btn-primary flex items-center gap-2 whitespace-nowrap">
              <Plus className="h-5 w-5" />
              Add Therapist
            </Link>
          </div>

          {/* Therapists Table */}
          <div className="card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Therapist
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Specializations
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Languages
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Rating
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredTherapists.map((therapist) => (
                    <tr key={therapist.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <img
                            src={therapist.imageUrl}
                            alt={therapist.name}
                            className="h-10 w-10 rounded-full object-cover"
                          />
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{therapist.name}</div>
                            <div className="text-sm text-gray-500">{therapist.title}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-1">
                          {therapist.specializations.slice(0, 2).map((spec) => (
                            <span key={spec} className="px-2 py-1 bg-indigo-50 text-indigo-700 text-xs rounded-full">
                              {spec}
                            </span>
                          ))}
                          {therapist.specializations.length > 2 && (
                            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                              +{therapist.specializations.length - 2}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {therapist.languages.slice(0, 2).join(', ')}
                        {therapist.languages.length > 2 && ` +${therapist.languages.length - 2}`}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="text-sm font-semibold text-gray-900">{therapist.rating}</span>
                          <span className="text-sm text-gray-500 ml-1">({therapist.reviewCount})</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex items-center gap-2">
                          <Link
                            href={`/admin/therapists/edit/${therapist.id}`}
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            <Edit className="h-5 w-5" />
                          </Link>
                          <button
                            onClick={() => handleDelete(therapist.id)}
                            className="text-red-600 hover:text-red-900"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Delete Modal */}
        {showDeleteModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-md w-full p-6 animate-slide-up">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Confirm Delete</h3>
              <p className="text-gray-600 mb-6">
                Are you sure you want to delete this therapist? This action cannot be undone.
              </p>
              <div className="flex gap-3 justify-end">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="btn-secondary"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmDelete}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminRoute>
  );
}

