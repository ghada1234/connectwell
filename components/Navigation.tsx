"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, User, Heart, Calendar, Users } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Heart className="h-8 w-8 text-indigo-600 fill-indigo-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">ConnectWell</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/therapists" className="text-gray-700 hover:text-indigo-600 font-medium transition">
              Find Therapists
            </Link>
            <Link href="/ai-match" className="text-gray-700 hover:text-indigo-600 font-medium transition">
              AI Match
            </Link>
            <Link href="/community" className="text-gray-700 hover:text-indigo-600 font-medium transition">
              Community
            </Link>
            <Link href="/how-it-works" className="text-gray-700 hover:text-indigo-600 font-medium transition">
              How It Works
            </Link>
            {isLoggedIn ? (
              <>
                <Link href="/bookings" className="text-gray-700 hover:text-indigo-600 font-medium transition">
                  <Calendar className="inline-block h-5 w-5" />
                </Link>
                <Link href="/profile" className="text-gray-700 hover:text-indigo-600 font-medium transition">
                  <User className="inline-block h-5 w-5" />
                </Link>
              </>
            ) : (
              <>
                <Link href="/login" className="text-gray-700 hover:text-indigo-600 font-medium transition">
                  Login
                </Link>
                <Link href="/register" className="btn-primary">
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-indigo-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/therapists" className="block px-3 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md">
              Find Therapists
            </Link>
            <Link href="/ai-match" className="block px-3 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md">
              AI Match
            </Link>
            <Link href="/community" className="block px-3 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md">
              Community
            </Link>
            <Link href="/how-it-works" className="block px-3 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md">
              How It Works
            </Link>
            {isLoggedIn ? (
              <>
                <Link href="/bookings" className="block px-3 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md">
                  My Bookings
                </Link>
                <Link href="/profile" className="block px-3 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md">
                  Profile
                </Link>
              </>
            ) : (
              <>
                <Link href="/login" className="block px-3 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md">
                  Login
                </Link>
                <Link href="/register" className="block px-3 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md text-center">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

