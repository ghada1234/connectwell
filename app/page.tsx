"use client";

import { useState } from 'react';
import { Search, Heart, Users, Calendar, Sparkles, Globe, Shield, Clock, Video, MapPin } from 'lucide-react';
import Link from 'next/link';
import TherapistCard from '@/components/TherapistCard';
import SearchFilters from '@/components/SearchFilters';
import { MOCK_THERAPISTS } from '@/lib/data/mockTherapists';
import { SearchFilters as SearchFiltersType } from '@/lib/types';

export default function Home() {
  const [filters, setFilters] = useState<SearchFiltersType>({});

  const filteredTherapists = MOCK_THERAPISTS.filter(therapist => {
    if (filters.languages?.length && !filters.languages.some(lang => therapist.languages.includes(lang))) return false;
    if (filters.nationalities?.length && !filters.nationalities.some(nat => therapist.nationalities.includes(nat))) return false;
    if (filters.gender && therapist.gender !== filters.gender) return false;
    if (filters.certifications?.length && !filters.certifications.some(cert => therapist.certifications.includes(cert))) return false;
    if (filters.sessionTypes?.length && !filters.sessionTypes.some(type => therapist.sessionTypes.includes(type as any))) return false;
    if (filters.specializations?.length && !filters.specializations.some(spec => therapist.specializations.includes(spec))) return false;
    if (filters.maxRate && therapist.hourlyRate > filters.maxRate) return false;
    if (filters.minRating && therapist.rating < filters.minRating) return false;
    return true;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white py-20 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-up">
              Find Your Perfect Match in Wellness
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-indigo-100 max-w-3xl mx-auto">
              Connect with certified therapists and life coaches from all backgrounds, languages, and cultures
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/therapists" className="btn-primary text-lg px-8 py-3 bg-white text-indigo-600 hover:bg-gray-100">
                <Search className="inline-block mr-2 h-5 w-5" />
                Find a Therapist
              </Link>
              <Link href="/ai-match" className="btn-outline text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-indigo-600">
                <Sparkles className="inline-block mr-2 h-5 w-5" />
                AI-Powered Match
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Comprehensive Platform Features</h2>
            <p className="section-subtitle">Everything you need for your wellness journey in one place</p>
          </div>
          
          {/* Main Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="card text-center hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Diversity</h3>
              <p className="text-gray-600 mb-3">Therapists from 180+ nationalities speaking 100+ languages</p>
              <ul className="text-sm text-gray-500 space-y-1 text-left">
                <li>• All cultures welcome</li>
                <li>• Multilingual support</li>
                <li>• Cultural sensitivity</li>
              </ul>
            </div>
            <div className="card text-center hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Verified Professionals</h3>
              <p className="text-gray-600 mb-3">All therapists verified and certified to practice</p>
              <ul className="text-sm text-gray-500 space-y-1 text-left">
                <li>• Background checks</li>
                <li>• License verification</li>
                <li>• Ongoing reviews</li>
              </ul>
            </div>
            <div className="card text-center hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Sessions</h3>
              <p className="text-gray-600 mb-3">Choose how you want to connect</p>
              <ul className="text-sm text-gray-500 space-y-1 text-left">
                <li>• Online video sessions</li>
                <li>• In-person meetings</li>
                <li>• Community groups</li>
              </ul>
            </div>
            <div className="card text-center hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Matching</h3>
              <p className="text-gray-600 mb-3">Smart recommendations powered by Gemini AI</p>
              <ul className="text-sm text-gray-500 space-y-1 text-left">
                <li>• Personalized matches</li>
                <li>• Need-based suggestions</li>
                <li>• Intelligent pairing</li>
              </ul>
            </div>
          </div>

          {/* Detailed Features */}
          <div className="space-y-16">
            {/* Advanced Search */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-4">
                  Advanced Search
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Find Your Perfect Match</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Our powerful search and filtering system helps you find the right therapist based on your unique needs and preferences.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <div>
                      <strong className="text-gray-900">Filter by Language:</strong> Search across 100+ languages
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <div>
                      <strong className="text-gray-900">Filter by Nationality:</strong> 180+ nationalities available
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <div>
                      <strong className="text-gray-900">Specializations:</strong> 33 therapy areas including CBT, EMDR, trauma, anxiety, and more
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <div>
                      <strong className="text-gray-900">Certifications:</strong> Filter by 15+ professional credentials
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <div>
                      <strong className="text-gray-900">Price & Rating:</strong> Adjust by budget and review scores
                    </div>
                  </li>
                </ul>
              </div>
              <div className="card bg-gradient-to-br from-indigo-50 to-purple-50 p-8">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Search className="h-6 w-6 text-indigo-600" />
                    <h4 className="font-bold text-lg">Search Filters</h4>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <span className="text-gray-600">Languages</span>
                      <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs">100+</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <span className="text-gray-600">Nationalities</span>
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">180+</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <span className="text-gray-600">Specializations</span>
                      <span className="px-2 py-1 bg-pink-100 text-pink-700 rounded-full text-xs">33</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <span className="text-gray-600">Gender Preference</span>
                      <span className="px-2 py-1 bg-cyan-100 text-cyan-700 rounded-full text-xs">All</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Matching */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 card bg-gradient-to-br from-purple-50 to-pink-50 p-8">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Sparkles className="h-6 w-6 text-purple-600" />
                    <h4 className="font-bold text-lg">AI Recommendations</h4>
                  </div>
                  <div className="space-y-4">
                    <div className="p-3 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg border border-indigo-200">
                      <div className="flex items-start gap-2">
                        <div className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</div>
                        <div className="text-sm">
                          <p className="font-semibold text-gray-900 mb-1">Perfect Match Found</p>
                          <p className="text-gray-600 text-xs">Based on your needs for anxiety support and preference for CBT therapy</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded">Powered by Google Gemini AI</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
                  AI-Powered Matching
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Smart Recommendations with AI</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Our AI-powered matching system uses Google Gemini to analyze your needs and recommend the most suitable therapists for you.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <div>
                      <strong className="text-gray-900">Intelligent Analysis:</strong> AI understands your concerns and preferences
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <div>
                      <strong className="text-gray-900">Personalized Matches:</strong> Get top 3 therapist recommendations
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <div>
                      <strong className="text-gray-900">Detailed Reasoning:</strong> Understand why each therapist is recommended
                    </div>
                  </li>
                </ul>
                <Link href="/ai-match" className="btn-primary mt-6 inline-block">
                  Try AI Matching
                </Link>
              </div>
            </div>

            {/* Booking System */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold mb-4">
                  Easy Booking
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Seamless Session Scheduling</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Book your sessions with just a few clicks. Choose your preferred time, session type, and duration.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <div>
                      <strong className="text-gray-900">Multiple Session Types:</strong> Online video, in-person, or community groups
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <div>
                      <strong className="text-gray-900">Flexible Duration:</strong> 30, 60, or 90-minute sessions
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <div>
                      <strong className="text-gray-900">Booking Management:</strong> View, reschedule, or cancel appointments
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <div>
                      <strong className="text-gray-900">Secure Payment:</strong> Pay safely after session confirmation
                    </div>
                  </li>
                </ul>
              </div>
              <div className="card bg-gradient-to-br from-pink-50 to-rose-50 p-8">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <Calendar className="h-12 w-12 text-pink-600 mb-4" />
                  <h4 className="font-bold text-lg mb-4">Session Options</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                      <Video className="h-5 w-5 text-green-600" />
                      <span className="font-medium text-gray-900">Online Sessions</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <MapPin className="h-5 w-5 text-blue-600" />
                      <span className="font-medium text-gray-900">In-Person Meetings</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-purple-50 border border-purple-200 rounded-lg">
                      <Users className="h-5 w-5 text-purple-600" />
                      <span className="font-medium text-gray-900">Community Groups</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Community Forum */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 card bg-gradient-to-br from-cyan-50 to-blue-50 p-8">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="h-6 w-6 text-cyan-600" />
                    <h4 className="font-bold text-lg">Community Support</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-bold">A</div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-700 mb-2">"This community has been amazing for my recovery journey..."</p>
                          <div className="flex items-center gap-3 text-xs text-gray-500">
                            <span className="flex items-center gap-1">
                              <Heart className="h-3 w-3" /> 47
                            </span>
                            <span>12 replies</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 text-xs">
                      <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full">#Anxiety</span>
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full">#Support</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-block px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-semibold mb-4">
                  Community Forum
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Connect & Share Experiences</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Join our supportive community where you can share experiences, seek advice, and connect with others on similar wellness journeys.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <div>
                      <strong className="text-gray-900">Anonymous Posting:</strong> Share safely and privately
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <div>
                      <strong className="text-gray-900">Topic Categories:</strong> Success stories, support, tips, and questions
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <div>
                      <strong className="text-gray-900">Active Community:</strong> 12,000+ members providing support
                    </div>
                  </li>
                </ul>
                <Link href="/community" className="btn-primary mt-6 inline-block">
                  Join Community
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Featured Therapists */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Featured Therapists</h2>
            <p className="section-subtitle">Discover experienced professionals ready to help</p>
          </div>

          {/* Search Filters */}
          <SearchFilters filters={filters} onFiltersChange={setFilters} />

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-indigo-600">{filteredTherapists.length}</span> therapists
            </p>
          </div>

          {/* Therapist Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTherapists.slice(0, 6).map((therapist) => (
              <TherapistCard key={therapist.id} therapist={therapist} />
            ))}
          </div>

          {filteredTherapists.length > 6 && (
            <div className="text-center mt-12">
              <Link href="/therapists" className="btn-primary text-lg px-8 py-3">
                View All Therapists
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-4">Join Our Community</h2>
              <p className="text-xl text-gray-700 mb-6">
                Connect with others on similar wellness journeys. Share experiences, find support, and grow together.
              </p>
              <Link href="/community" className="btn-primary inline-flex items-center">
                <Users className="mr-2 h-5 w-5" />
                Explore Community
              </Link>
            </div>
            <div className="flex-1">
              <div className="card bg-white">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                    A
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Anonymous User</h4>
                    <p className="text-sm text-gray-600">Posted 2 hours ago</p>
                    <p className="mt-2 text-gray-700">
                      "This community has been a lifeline for me. So grateful for the support!"
                    </p>
                    <div className="mt-2 flex items-center gap-4 text-sm text-gray-500">
                      <button className="flex items-center gap-1 hover:text-indigo-600">
                        <Heart className="h-4 w-4" />
                        24
                      </button>
                      <span>12 replies</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Wellness Journey?</h2>
          <p className="text-xl mb-8 text-indigo-100">
            Join thousands who have found the support they need
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="btn-primary bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 text-lg">
              Get Started Free
            </Link>
            <Link href="/therapists" className="btn-outline border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-3 text-lg">
              Browse Therapists
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

