"use client";

import { Calendar, Video, MapPin, Clock, CheckCircle, XCircle, Clock4 } from 'lucide-react';
import Link from 'next/link';

interface Booking {
  id: string;
  therapistName: string;
  therapistImage: string;
  sessionType: 'online' | 'in-person';
  date: string;
  time: string;
  duration: number;
  status: 'upcoming' | 'completed' | 'cancelled';
  cost: number;
}

const MOCK_BOOKINGS: Booking[] = [
  {
    id: '1',
    therapistName: 'Dr. Sarah Johnson',
    therapistImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    sessionType: 'online',
    date: '2025-10-25',
    time: '14:00',
    duration: 60,
    status: 'upcoming',
    cost: 150
  },
  {
    id: '2',
    therapistName: 'Mohammed Al-Rahman',
    therapistImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    sessionType: 'in-person',
    date: '2025-10-18',
    time: '10:00',
    duration: 90,
    status: 'completed',
    cost: 262.50
  }
];

export default function BookingsPage() {
  const upcomingBookings = MOCK_BOOKINGS.filter(b => b.status === 'upcoming');
  const pastBookings = MOCK_BOOKINGS.filter(b => b.status !== 'upcoming');

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">My Bookings</h1>
          <p className="text-xl text-gray-600">Manage your therapy sessions</p>
        </div>

        {/* Upcoming Bookings */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Clock4 className="h-6 w-6 text-indigo-600" />
            Upcoming Sessions
          </h2>
          {upcomingBookings.length === 0 ? (
            <div className="card text-center py-12">
              <Calendar className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">No upcoming sessions</h3>
              <p className="text-gray-600 mb-6">Book a session with a therapist to get started</p>
              <Link href="/therapists" className="btn-primary inline-block">
                Find a Therapist
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {upcomingBookings.map(booking => (
                <div key={booking.id} className="card hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row gap-6">
                    <img
                      src={booking.therapistImage}
                      alt={booking.therapistName}
                      className="w-24 h-24 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{booking.therapistName}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            {booking.sessionType === 'online' ? (
                              <span className="flex items-center gap-1 px-2 py-1 bg-green-50 text-green-700 rounded text-sm">
                                <Video className="h-3 w-3" />
                                Online Session
                              </span>
                            ) : (
                              <span className="flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-700 rounded text-sm">
                                <MapPin className="h-3 w-3" />
                                In-Person Session
                              </span>
                            )}
                          </div>
                        </div>
                        <span className="text-2xl font-bold text-indigo-600">${booking.cost}</span>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(booking.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Clock className="h-4 w-4" />
                          <span>{booking.time} ({booking.duration} min)</span>
                        </div>
                      </div>
                      <div className="flex gap-3 mt-4">
                        <button className="btn-primary text-sm">Join Session</button>
                        <button className="btn-secondary text-sm">Reschedule</button>
                        <button className="btn-secondary text-sm text-red-600 hover:bg-red-50">Cancel</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Past Bookings */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <CheckCircle className="h-6 w-6 text-green-600" />
            Past Sessions
          </h2>
          {pastBookings.length === 0 ? (
            <div className="card text-center py-8">
              <p className="text-gray-600">No past sessions yet</p>
            </div>
          ) : (
            <div className="space-y-4">
              {pastBookings.map(booking => (
                <div key={booking.id} className="card bg-gray-50">
                  <div className="flex flex-col md:flex-row gap-6">
                    <img
                      src={booking.therapistImage}
                      alt={booking.therapistName}
                      className="w-20 h-20 rounded-lg object-cover opacity-75"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">{booking.therapistName}</h3>
                          <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(booking.date).toLocaleDateString()}</span>
                            <span>•</span>
                            <Clock className="h-4 w-4" />
                            <span>{booking.duration} min</span>
                          </div>
                        </div>
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                          Completed
                        </span>
                      </div>
                      <button className="btn-secondary text-sm mt-3">Leave a Review</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

