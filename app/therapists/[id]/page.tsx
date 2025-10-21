"use client";

import { MOCK_THERAPISTS } from '@/lib/data/mockTherapists';
import { Star, MapPin, Globe, Award, Video, Users, Calendar, Heart, Share2 } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function TherapistProfilePage() {
  const params = useParams();
  const therapist = MOCK_THERAPISTS.find(t => t.id === params.id);

  if (!therapist) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Therapist Not Found</h1>
          <Link href="/therapists" className="btn-primary">
            Back to Therapists
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-12 text-white">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <img
                src={therapist.imageUrl}
                alt={therapist.name}
                className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
              />
              <div className="flex-1">
                <h1 className="text-4xl font-bold mb-2">{therapist.name}</h1>
                <p className="text-xl text-indigo-100 mb-4">{therapist.title}</p>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 text-yellow-300 fill-yellow-300" />
                    <span className="font-semibold text-lg">{therapist.rating}</span>
                    <span className="text-indigo-200">({therapist.reviewCount} reviews)</span>
                  </div>
                  <span className="text-indigo-200">•</span>
                  <span className="text-indigo-100">{therapist.yearsOfExperience} years experience</span>
                </div>
                <div className="flex gap-3">
                  <button className="btn-primary bg-white text-indigo-600 hover:bg-gray-100">
                    <Calendar className="inline-block h-5 w-5 mr-2" />
                    Book Session
                  </button>
                  <button className="btn-outline border-white text-white hover:bg-white hover:text-indigo-600">
                    <Heart className="inline-block h-5 w-5 mr-2" />
                    Save
                  </button>
                  <button className="btn-outline border-white text-white hover:bg-white hover:text-indigo-600">
                    <Share2 className="inline-block h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="text-center bg-white bg-opacity-20 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-4xl font-bold mb-1">${therapist.hourlyRate}</div>
                <div className="text-indigo-100">per hour</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">About</h2>
                  <p className="text-gray-700 leading-relaxed">{therapist.bio}</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Specializations</h2>
                  <div className="flex flex-wrap gap-2">
                    {therapist.specializations.map((spec) => (
                      <span
                        key={spec}
                        className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full font-medium"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Certifications</h2>
                  <ul className="space-y-2">
                    {therapist.certifications.map((cert) => (
                      <li key={cert} className="flex items-start gap-3">
                        <Award className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{cert}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Reviews</h2>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold">
                            U{i}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="font-semibold text-gray-900">Anonymous User</span>
                              <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, j) => (
                                  <Star key={j} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                                ))}
                              </div>
                            </div>
                            <p className="text-gray-700">
                              Excellent therapist! Very professional and compassionate. Highly recommend!
                            </p>
                            <p className="text-sm text-gray-500 mt-2">2 weeks ago</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <div className="card bg-gray-50">
                  <h3 className="font-bold text-gray-900 mb-4">Quick Info</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Globe className="h-5 w-5 text-gray-500 mt-1" />
                      <div>
                        <div className="font-medium text-gray-900">Languages</div>
                        <div className="text-sm text-gray-600">{therapist.languages.join(', ')}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-gray-500 mt-1" />
                      <div>
                        <div className="font-medium text-gray-900">Nationality</div>
                        <div className="text-sm text-gray-600">{therapist.nationalities.join(', ')}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-gray-500 mt-1" />
                      <div>
                        <div className="font-medium text-gray-900">Gender</div>
                        <div className="text-sm text-gray-600">{therapist.gender}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card bg-gray-50">
                  <h3 className="font-bold text-gray-900 mb-4">Session Types</h3>
                  <div className="space-y-2">
                    {therapist.sessionTypes.includes('online') && (
                      <div className="flex items-center gap-2 text-gray-700">
                        <Video className="h-5 w-5 text-green-600" />
                        <span>Online Sessions</span>
                      </div>
                    )}
                    {therapist.sessionTypes.includes('in-person') && (
                      <div className="flex items-center gap-2 text-gray-700">
                        <MapPin className="h-5 w-5 text-blue-600" />
                        <span>In-Person Sessions</span>
                      </div>
                    )}
                    {therapist.sessionTypes.includes('community') && (
                      <div className="flex items-center gap-2 text-gray-700">
                        <Users className="h-5 w-5 text-purple-600" />
                        <span>Community Sessions</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="card bg-gray-50">
                  <h3 className="font-bold text-gray-900 mb-4">Availability</h3>
                  <div className="flex flex-wrap gap-2">
                    {therapist.availability.map((day) => (
                      <span
                        key={day}
                        className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium"
                      >
                        {day}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/booking/${therapist.id}`}
                  className="block w-full btn-primary text-center py-3 text-lg"
                >
                  Book a Session
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

