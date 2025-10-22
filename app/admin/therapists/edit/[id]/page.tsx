"use client";

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import AdminRoute from '@/components/AdminRoute';
import TherapistForm from '@/components/admin/TherapistForm';
import { Therapist } from '@/lib/types';
import { MOCK_THERAPISTS } from '@/lib/data/mockTherapists';
import { ArrowLeft, Loader2 } from 'lucide-react';
import Link from 'next/link';

export default function EditTherapistPage() {
  const router = useRouter();
  const params = useParams();
  const [therapist, setTherapist] = useState<Therapist | null>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load therapist data
    const found = MOCK_THERAPISTS.find(t => t.id === params.id);
    setTherapist(found || null);
    setLoading(false);
  }, [params.id]);

  const handleSave = async (therapistData: Omit<Therapist, 'id'>) => {
    setSaving(true);
    setError('');

    try {
      // TODO: Update in Firebase
      console.log('Updated therapist:', { id: params.id, ...therapistData });
      
      // Simulate save
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      alert('Therapist updated successfully!');
      router.push('/admin/dashboard');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <AdminRoute>
        <div className="min-h-screen flex items-center justify-center">
          <Loader2 className="h-12 w-12 text-indigo-600 animate-spin" />
        </div>
      </AdminRoute>
    );
  }

  if (!therapist) {
    return (
      <AdminRoute>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Therapist Not Found</h2>
            <Link href="/admin/dashboard" className="btn-primary">
              Back to Dashboard
            </Link>
          </div>
        </div>
      </AdminRoute>
    );
  }

  return (
    <AdminRoute>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link href="/admin/dashboard" className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 mb-4">
              <ArrowLeft className="h-4 w-4" />
              Back to Dashboard
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">Edit Therapist</h1>
          </div>

          {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
              {error}
            </div>
          )}

          <TherapistForm
            initialData={therapist}
            onSave={handleSave}
            saving={saving}
            isEdit={true}
          />
        </div>
      </div>
    </AdminRoute>
  );
}

