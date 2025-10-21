"use client";

import { useState } from 'react';
import { MOCK_THERAPISTS } from '@/lib/data/mockTherapists';
import { Calendar, Clock, Video, MapPin, Users, CreditCard } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';

export default function BookingPage() {
  const params = useParams();
  const router = useRouter();
  const therapist = MOCK_THERAPISTS.find(t => t.id === params.id);

  const [formData, setFormData] = useState({
    sessionType: 'online' as 'online' | 'in-person' | 'community',
    date: '',
    time: '',
    duration: 60,
    notes: ''
  });

  if (!therapist) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Therapist Not Found</h1>
        </div>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement booking
    console.log('Booking:', formData);
    alert('Booking request sent! You will receive a confirmation email soon.');
    router.push('/bookings');
  };

  const totalCost = (therapist.hourlyRate * formData.duration) / 60;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Book a Session</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="card space-y-6">
              {/* Therapist Info */}
              <div className="flex items-center gap-4 pb-6 border-b">
                <img
                  src={therapist.imageUrl}
                  alt={therapist.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{therapist.name}</h2>
                  <p className="text-gray-600">{therapist.title}</p>
                </div>
              </div>

              {/* Session Type */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Session Type
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {therapist.sessionTypes.includes('online') && (
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, sessionType: 'online' })}
                      className={`p-4 border-2 rounded-lg flex items-center gap-3 transition ${
                        formData.sessionType === 'online'
                          ? 'border-indigo-600 bg-indigo-50'
                          : 'border-gray-200 hover:border-indigo-300'
                      }`}
                    >
                      <Video className="h-5 w-5 text-indigo-600" />
                      <span className="font-medium">Online</span>
                    </button>
                  )}
                  {therapist.sessionTypes.includes('in-person') && (
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, sessionType: 'in-person' })}
                      className={`p-4 border-2 rounded-lg flex items-center gap-3 transition ${
                        formData.sessionType === 'in-person'
                          ? 'border-indigo-600 bg-indigo-50'
                          : 'border-gray-200 hover:border-indigo-300'
                      }`}
                    >
                      <MapPin className="h-5 w-5 text-indigo-600" />
                      <span className="font-medium">In-Person</span>
                    </button>
                  )}
                  {therapist.sessionTypes.includes('community') && (
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, sessionType: 'community' })}
                      className={`p-4 border-2 rounded-lg flex items-center gap-3 transition ${
                        formData.sessionType === 'community'
                          ? 'border-indigo-600 bg-indigo-50'
                          : 'border-gray-200 hover:border-indigo-300'
                      }`}
                    >
                      <Users className="h-5 w-5 text-indigo-600" />
                      <span className="font-medium">Community</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-semibold text-gray-700 mb-2">
                    <Calendar className="inline-block h-4 w-4 mr-1" />
                    Preferred Date
                  </label>
                  <input
                    id="date"
                    type="date"
                    required
                    className="input-field"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-semibold text-gray-700 mb-2">
                    <Clock className="inline-block h-4 w-4 mr-1" />
                    Preferred Time
                  </label>
                  <input
                    id="time"
                    type="time"
                    required
                    className="input-field"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  />
                </div>
              </div>

              {/* Duration */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Session Duration: {formData.duration} minutes
                </label>
                <div className="flex gap-3">
                  {[30, 60, 90].map(duration => (
                    <button
                      key={duration}
                      type="button"
                      onClick={() => setFormData({ ...formData, duration })}
                      className={`px-4 py-2 rounded-lg border-2 transition ${
                        formData.duration === duration
                          ? 'border-indigo-600 bg-indigo-50 text-indigo-700'
                          : 'border-gray-200 hover:border-indigo-300'
                      }`}
                    >
                      {duration} min
                    </button>
                  ))}
                </div>
              </div>

              {/* Notes */}
              <div>
                <label htmlFor="notes" className="block text-sm font-semibold text-gray-700 mb-2">
                  Additional Notes (Optional)
                </label>
                <textarea
                  id="notes"
                  rows={4}
                  className="input-field"
                  placeholder="Tell the therapist about your goals or any specific concerns..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                />
              </div>

              <button type="submit" className="w-full btn-primary py-3 text-lg">
                Continue to Payment
              </button>
            </form>
          </div>

          {/* Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="card bg-gray-50 sticky top-24">
              <h3 className="font-bold text-gray-900 mb-4">Booking Summary</h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Session Type</span>
                  <span className="font-medium capitalize">{formData.sessionType}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-medium">{formData.duration} minutes</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Rate</span>
                  <span className="font-medium">${therapist.hourlyRate}/hour</span>
                </div>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-lg font-bold text-gray-900">Total</span>
                  <span className="text-2xl font-bold text-indigo-600">${totalCost.toFixed(2)}</span>
                </div>
                <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                  <div className="flex items-start gap-2">
                    <CreditCard className="h-5 w-5 text-indigo-600 mt-0.5" />
                    <div className="text-sm text-indigo-900">
                      <p className="font-semibold mb-1">Flexible Payment</p>
                      <p className="text-indigo-700">Pay securely after confirmation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

