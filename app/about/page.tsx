import { Heart, Users, Globe, Award, Target, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">About ConnectWell</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connecting people with the right mental health professionals for better well-being
          </p>
        </div>

        {/* Mission */}
        <div className="card mb-12 bg-gradient-to-br from-indigo-50 to-purple-50">
          <div className="text-center">
            <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="h-8 w-8 text-white fill-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              To make quality mental health care accessible to everyone, regardless of language, 
              culture, or location. We believe everyone deserves support on their wellness journey.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Diversity & Inclusion</h3>
              <p className="text-gray-600">
                We celebrate diversity with therapists from 180+ nationalities speaking 100+ languages
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Quality & Trust</h3>
              <p className="text-gray-600">
                All professionals are verified, certified, and committed to the highest standards
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Community Support</h3>
              <p className="text-gray-600">
                Building a supportive community where everyone can share and grow together
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-600">
                Leveraging AI technology to provide smarter, personalized therapist matching
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Accessibility</h3>
              <p className="text-gray-600">
                Making mental health care accessible through flexible online, in-person, and community options
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Compassion</h3>
              <p className="text-gray-600">
                Creating a safe, judgment-free space for healing and personal growth
              </p>
            </div>
          </div>
        </div>

        {/* Story */}
        <div className="card mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              ConnectWell was founded with a simple belief: everyone deserves access to quality mental health 
              care, regardless of their background, language, or location.
            </p>
            <p>
              We recognized that finding the right therapist can be challenging - especially when language 
              barriers, cultural differences, or accessibility issues come into play. That's why we created 
              a platform that brings together certified professionals from all over the world.
            </p>
            <p>
              Today, ConnectWell serves thousands of people, connecting them with therapists who understand 
              their unique needs and cultural backgrounds. Our AI-powered matching system and comprehensive 
              search filters make it easier than ever to find the perfect fit.
            </p>
            <p>
              We're committed to breaking down barriers to mental health care and building a supportive 
              community where everyone can thrive.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="card text-center bg-indigo-50">
            <p className="text-4xl font-bold text-indigo-600 mb-2">180+</p>
            <p className="text-gray-700">Nationalities</p>
          </div>
          <div className="card text-center bg-purple-50">
            <p className="text-4xl font-bold text-purple-600 mb-2">100+</p>
            <p className="text-gray-700">Languages</p>
          </div>
          <div className="card text-center bg-pink-50">
            <p className="text-4xl font-bold text-pink-600 mb-2">1000+</p>
            <p className="text-gray-700">Therapists</p>
          </div>
          <div className="card text-center bg-cyan-50">
            <p className="text-4xl font-bold text-cyan-600 mb-2">50K+</p>
            <p className="text-gray-700">Sessions</p>
          </div>
        </div>

        {/* CTA */}
        <div className="card bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Help us make mental health care accessible to everyone
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/therapists" className="btn-primary bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 text-lg">
              Find a Therapist
            </Link>
            <Link href="/community" className="btn-outline border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-3 text-lg">
              Join Community
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

