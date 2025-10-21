"use client";

import { useState } from 'react';
import { Heart, MessageCircle, Search, Plus, TrendingUp } from 'lucide-react';
import Link from 'next/link';

interface Post {
  id: string;
  author: string;
  title: string;
  content: string;
  category: string;
  likes: number;
  replies: number;
  timeAgo: string;
}

const MOCK_POSTS: Post[] = [
  {
    id: '1',
    author: 'Anonymous',
    title: 'How I Overcame My Anxiety',
    content: "I wanted to share my journey with everyone here. A year ago, I couldn't leave my house without having a panic attack. Today, I went grocery shopping alone...",
    category: 'Success Stories',
    likes: 127,
    replies: 34,
    timeAgo: '2 hours ago'
  },
  {
    id: '2',
    author: 'Anonymous',
    title: 'Looking for Support - Depression',
    content: "Having a really tough week. Would appreciate some words of encouragement from those who understand...",
    category: 'Support',
    likes: 89,
    replies: 52,
    timeAgo: '5 hours ago'
  },
  {
    id: '3',
    author: 'Anonymous',
    title: 'Meditation Techniques That Actually Work',
    content: "After trying countless meditation apps and techniques, I finally found what works for me. Here's what I learned...",
    category: 'Tips & Advice',
    likes: 203,
    replies: 67,
    timeAgo: '1 day ago'
  },
  {
    id: '4',
    author: 'Anonymous',
    title: 'First Therapy Session - What to Expect?',
    content: "I have my first therapy session next week and I'm nervous. What should I expect? Any advice?",
    category: 'Questions',
    likes: 45,
    replies: 28,
    timeAgo: '1 day ago'
  }
];

const CATEGORIES = [
  'All',
  'Success Stories',
  'Support',
  'Tips & Advice',
  'Questions',
  'General Discussion'
];

export default function CommunityPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = MOCK_POSTS.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Community Forum</h1>
          <p className="text-xl text-gray-600">
            Connect, share, and support each other on your wellness journey
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="card bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-indigo-100 mb-1">Total Members</p>
                <p className="text-3xl font-bold">12,459</p>
              </div>
              <Users className="h-12 w-12 text-indigo-200" />
            </div>
          </div>
          <div className="card bg-gradient-to-br from-pink-500 to-rose-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-pink-100 mb-1">Active Discussions</p>
                <p className="text-3xl font-bold">1,234</p>
              </div>
              <MessageCircle className="h-12 w-12 text-pink-200" />
            </div>
          </div>
          <div className="card bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-cyan-100 mb-1">Support Given</p>
                <p className="text-3xl font-bold">45,678</p>
              </div>
              <Heart className="h-12 w-12 text-cyan-200" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <button className="w-full btn-primary py-3">
              <Plus className="inline-block h-5 w-5 mr-2" />
              New Post
            </button>

            <div className="card">
              <h3 className="font-bold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {CATEGORIES.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition ${
                      selectedCategory === category
                        ? 'bg-indigo-50 text-indigo-700 font-medium'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="card bg-indigo-50">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-indigo-600" />
                Trending Topics
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="text-indigo-700 hover:underline cursor-pointer">#AnxietySupport</li>
                <li className="text-indigo-700 hover:underline cursor-pointer">#MentalHealthAwareness</li>
                <li className="text-indigo-700 hover:underline cursor-pointer">#SelfCare</li>
                <li className="text-indigo-700 hover:underline cursor-pointer">#TherapyJourney</li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search discussions..."
                  className="input-field pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Posts */}
            <div className="space-y-4">
              {filteredPosts.map(post => (
                <div key={post.id} className="card hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold flex-shrink-0">
                      {post.author[0]}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 hover:text-indigo-600 cursor-pointer">
                            {post.title}
                          </h3>
                          <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                            <span className="font-medium">{post.author}</span>
                            <span>•</span>
                            <span>{post.timeAgo}</span>
                            <span>•</span>
                            <span className="px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded-full text-xs">
                              {post.category}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4 line-clamp-2">{post.content}</p>
                      <div className="flex items-center gap-6 text-sm text-gray-500">
                        <button className="flex items-center gap-2 hover:text-red-600 transition">
                          <Heart className="h-4 w-4" />
                          <span>{post.likes}</span>
                        </button>
                        <button className="flex items-center gap-2 hover:text-indigo-600 transition">
                          <MessageCircle className="h-4 w-4" />
                          <span>{post.replies} replies</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <MessageCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">No posts found</h3>
                <p className="text-gray-600">Try adjusting your search or category</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

