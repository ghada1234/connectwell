"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminRoute from '@/components/AdminRoute';
import TherapistForm from '@/components/admin/TherapistForm';
import { Therapist } from '@/lib/types';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function NewTherapistPage() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const handleSave = async (therapistData: Omit<Therapist, 'id'>) => {
    setSaving(true);
    setError('');

    try {
      // TODO: Save to Firebase
      console.log('New therapist:', therapistData);
      
      // Simulate save
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      alert('Therapist added successfully!');
      router.push('/admin/dashboard');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <AdminRoute>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link href="/admin/dashboard" className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 mb-4">
              <ArrowLeft className="h-4 w-4" />
              Back to Dashboard
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">Add New Therapist</h1>
          </div>

          {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
              {error}
            </div>
          )}

          <TherapistForm onSave={handleSave} saving={saving} />
        </div>
      </div>
    </AdminRoute>
  );
}

