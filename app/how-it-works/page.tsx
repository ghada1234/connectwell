import { Search, UserCheck, Calendar, MessageCircle, Shield, Heart } from 'lucide-react';
import Link from 'next/link';

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">How ConnectWell Works</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your journey to better mental health and wellness starts here. 
            We make it simple to find and connect with the right therapist for you.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="card text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="h-8 w-8 text-white" />
            </div>
            <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
              1
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Find Your Therapist</h3>
            <p className="text-gray-600">
              Browse our diverse community of certified therapists or use our AI-powered matching tool 
              to find professionals that align with your needs, language, and preferences.
            </p>
          </div>

          <div className="card text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="h-8 w-8 text-white" />
            </div>
            <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
              2
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Book a Session</h3>
            <p className="text-gray-600">
              Choose between online, in-person, or community sessions. 
              Select a convenient time and share your goals to help your therapist prepare.
            </p>
          </div>

          <div className="card text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-600 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <UserCheck className="h-8 w-8 text-white" />
            </div>
            <div className="w-8 h-8 bg-pink-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
              3
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Start Your Journey</h3>
            <p className="text-gray-600">
              Attend your session and begin your path to wellness. 
              Connect with our supportive community and track your progress along the way.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose ConnectWell?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Verified Professionals</h3>
                <p className="text-gray-600">All therapists are certified and verified to practice</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Heart className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Diverse & Inclusive</h3>
                <p className="text-gray-600">180+ nationalities, 100+ languages, all backgrounds welcome</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <MessageCircle className="h-6 w-6 text-pink-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Community Support</h3>
                <p className="text-gray-600">Join forums and connect with others on similar journeys</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Calendar className="h-6 w-6 text-cyan-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Flexible Scheduling</h3>
                <p className="text-gray-600">Book sessions that fit your schedule and lifestyle</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Privacy Protected</h3>
                <p className="text-gray-600">Your information and sessions are completely confidential</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Search className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">AI-Powered Matching</h3>
                <p className="text-gray-600">Smart recommendations based on your unique needs</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="card bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join thousands who have found the support they need to thrive
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="btn-primary bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 text-lg">
              Sign Up Free
            </Link>
            <Link href="/ai-match" className="btn-outline border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-3 text-lg">
              Try AI Matching
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

