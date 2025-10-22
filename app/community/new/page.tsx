"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Send, Loader2 } from 'lucide-react';
import Link from 'next/link';

const CATEGORIES = [
  'Success Stories',
  'Support',
  'Tips & Advice',
  'Questions',
  'General Discussion'
];

export default function NewPostPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: 'General Discussion',
    anonymous: true
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // TODO: Save to Firebase
      console.log('New post:', formData);
      
      // Simulate save
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      alert('Post created successfully!');
      router.push('/community');
    } catch (error) {
      alert('Error creating post. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link href="/community" className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 mb-4">
            <ArrowLeft className="h-4 w-4" />
            Back to Community
          </Link>
          <h1 className="text-4xl font-bold text-gray-900">Create New Post</h1>
          <p className="text-lg text-gray-600 mt-2">Share your thoughts, questions, or experiences</p>
        </div>

        <div className="card">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Category */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Category <span className="text-red-500">*</span>
              </label>
              <select
                required
                className="input-field"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              >
                {CATEGORIES.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Title */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="input-field"
                placeholder="What's your post about?"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                maxLength={200}
              />
              <p className="text-xs text-gray-500 mt-1">{formData.title.length}/200 characters</p>
            </div>

            {/* Content */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Content <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                rows={8}
                className="input-field"
                placeholder="Share your story, ask a question, or offer support..."
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                maxLength={5000}
              />
              <p className="text-xs text-gray-500 mt-1">{formData.content.length}/5000 characters</p>
            </div>

            {/* Anonymous Option */}
            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.anonymous}
                  onChange={(e) => setFormData({ ...formData, anonymous: e.target.checked })}
                  className="rounded text-indigo-600 focus:ring-indigo-500 mt-1"
                />
                <div>
                  <span className="font-semibold text-gray-900">Post anonymously</span>
                  <p className="text-sm text-gray-600 mt-1">
                    Your identity will be hidden. Posts will show as "Anonymous User"
                  </p>
                </div>
              </label>
            </div>

            {/* Community Guidelines */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm">
              <p className="font-semibold text-yellow-900 mb-2">Community Guidelines:</p>
              <ul className="text-yellow-800 space-y-1">
                <li>• Be respectful and supportive</li>
                <li>• No spam or promotional content</li>
                <li>• Share responsibly and authentically</li>
                <li>• Seek professional help for emergencies</li>
              </ul>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-4 border-t">
              <button
                type="submit"
                disabled={loading}
                className="btn-primary flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed px-6 py-3"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Posting...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Publish Post
                  </>
                )}
              </button>
              <Link href="/community" className="btn-secondary px-6 py-3">
                Cancel
              </Link>
            </div>
          </form>
        </div>

        {/* Tips */}
        <div className="mt-8 card bg-indigo-50">
          <h3 className="font-bold text-gray-900 mb-3">Tips for a Great Post</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>✓ Use a clear, descriptive title</li>
            <li>✓ Provide context and details</li>
            <li>✓ Be authentic and honest</li>
            <li>✓ Ask specific questions if seeking advice</li>
            <li>✓ Share what worked for you in success stories</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

