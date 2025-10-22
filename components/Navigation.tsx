"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Menu, X, User, Heart, Calendar, Users, LogOut, Shield } from 'lucide-react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { logoutUser } from '@/lib/auth';
import { isAdmin } from '@/lib/admin';

export default function Navigation() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [isAdminUser, setIsAdminUser] = useState(false);

  useEffect(() => {
    if (!auth) return;
    
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
      setUserEmail(user?.email || null);
      setIsAdminUser(isAdmin(user?.email || null));
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await logoutUser();
      router.push('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

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
                  My Bookings
                </Link>
                {isAdminUser && (
                  <Link href="/admin/dashboard" className="text-purple-700 hover:text-purple-900 font-medium transition flex items-center gap-1">
                    <Shield className="h-4 w-4" />
                    Admin
                  </Link>
                )}
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">{userEmail?.split('@')[0]}</span>
                  <button onClick={handleLogout} className="text-gray-700 hover:text-indigo-600 font-medium transition">
                    <LogOut className="inline-block h-5 w-5" />
                  </button>
                </div>
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
                {isAdminUser && (
                  <Link href="/admin/dashboard" className="block px-3 py-2 text-purple-700 hover:bg-purple-50 hover:text-purple-900 rounded-md font-medium">
                    <Shield className="inline-block h-4 w-4 mr-2" />
                    Admin Panel
                  </Link>
                )}
                <button onClick={handleLogout} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md">
                  Logout
                </button>
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

