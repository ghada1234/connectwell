"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Therapist } from '@/lib/types';
import { LANGUAGES } from '@/lib/data/languages';
import { NATIONALITIES } from '@/lib/data/nationalities';
import { SPECIALIZATIONS, CERTIFICATIONS, GENDERS } from '@/lib/data/specializations';
import { Save, Loader2, X } from 'lucide-react';

interface TherapistFormProps {
  initialData?: Therapist;
  onSave: (data: Omit<Therapist, 'id'>) => Promise<void>;
  saving: boolean;
  isEdit?: boolean;
}

export default function TherapistForm({ initialData, onSave, saving, isEdit = false }: TherapistFormProps) {
  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    title: initialData?.title || '',
    bio: initialData?.bio || '',
    gender: initialData?.gender || 'Female' as 'Male' | 'Female' | 'Non-binary' | 'Other',
    yearsOfExperience: initialData?.yearsOfExperience || 0,
    hourlyRate: initialData?.hourlyRate || 100,
    imageUrl: initialData?.imageUrl || 'https://ui-avatars.com/api/?name=New+Therapist&background=4f46e5&color=fff',
    rating: initialData?.rating || 5.0,
    reviewCount: initialData?.reviewCount || 0,
  });

  const [selectedLanguages, setSelectedLanguages] = useState<string[]>(initialData?.languages || []);
  const [selectedNationalities, setSelectedNationalities] = useState<string[]>(initialData?.nationalities || []);
  const [selectedSpecializations, setSelectedSpecializations] = useState<string[]>(initialData?.specializations || []);
  const [selectedCertifications, setSelectedCertifications] = useState<string[]>(initialData?.certifications || []);
  const [selectedSessionTypes, setSelectedSessionTypes] = useState<('online' | 'in-person' | 'community')[]>(initialData?.sessionTypes || []);
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>(initialData?.availability || []);

  const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const toggleItem = (item: string, list: string[], setter: (list: string[]) => void) => {
    if (list.includes(item)) {
      setter(list.filter(i => i !== item));
    } else {
      setter([...list, item]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const therapistData: Omit<Therapist, 'id'> = {
      ...formData,
      languages: selectedLanguages,
      nationalities: selectedNationalities,
      specializations: selectedSpecializations,
      certifications: selectedCertifications,
      sessionTypes: selectedSessionTypes,
      availability: selectedAvailability,
    };

    await onSave(therapistData);
  };

  return (
    <form onSubmit={handleSubmit} className="card space-y-6">
      {/* Basic Info */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Basic Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              className="input-field"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Dr. Jane Smith"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Professional Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              className="input-field"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Clinical Psychologist & Life Coach"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Gender <span className="text-red-500">*</span>
            </label>
            <select
              required
              className="input-field"
              value={formData.gender}
              onChange={(e) => setFormData({ ...formData, gender: e.target.value as any })}
            >
              {GENDERS.map(gender => (
                <option key={gender} value={gender}>{gender}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Years of Experience <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              required
              min="0"
              max="50"
              className="input-field"
              value={formData.yearsOfExperience}
              onChange={(e) => setFormData({ ...formData, yearsOfExperience: parseInt(e.target.value) })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Hourly Rate ($) <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              required
              min="0"
              step="5"
              className="input-field"
              value={formData.hourlyRate}
              onChange={(e) => setFormData({ ...formData, hourlyRate: parseInt(e.target.value) })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Profile Image URL <span className="text-red-500">*</span>
            </label>
            <input
              type="url"
              required
              className="input-field"
              value={formData.imageUrl}
              onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
              placeholder="https://..."
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Bio <span className="text-red-500">*</span>
          </label>
          <textarea
            required
            rows={4}
            className="input-field"
            value={formData.bio}
            onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
            placeholder="Describe your experience, approach, and what makes you unique..."
          />
        </div>
      </div>

      {/* Languages */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Languages <span className="text-red-500">*</span></h2>
        <select
          className="input-field mb-2"
          onChange={(e) => {
            if (e.target.value && !selectedLanguages.includes(e.target.value)) {
              setSelectedLanguages([...selectedLanguages, e.target.value]);
            }
            e.target.value = '';
          }}
        >
          <option value="">Select languages...</option>
          {LANGUAGES.map(lang => (
            <option key={lang} value={lang} disabled={selectedLanguages.includes(lang)}>
              {lang}
            </option>
          ))}
        </select>
        <div className="flex flex-wrap gap-2">
          {selectedLanguages.map(lang => (
            <span key={lang} className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm flex items-center gap-1">
              {lang}
              <button type="button" onClick={() => toggleItem(lang, selectedLanguages, setSelectedLanguages)}>
                <X className="h-3 w-3" />
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* Nationalities */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Nationalities <span className="text-red-500">*</span></h2>
        <select
          className="input-field mb-2"
          onChange={(e) => {
            if (e.target.value && !selectedNationalities.includes(e.target.value)) {
              setSelectedNationalities([...selectedNationalities, e.target.value]);
            }
            e.target.value = '';
          }}
        >
          <option value="">Select nationalities...</option>
          {NATIONALITIES.map(nat => (
            <option key={nat} value={nat} disabled={selectedNationalities.includes(nat)}>
              {nat}
            </option>
          ))}
        </select>
        <div className="flex flex-wrap gap-2">
          {selectedNationalities.map(nat => (
            <span key={nat} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm flex items-center gap-1">
              {nat}
              <button type="button" onClick={() => toggleItem(nat, selectedNationalities, setSelectedNationalities)}>
                <X className="h-3 w-3" />
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* Specializations */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Specializations <span className="text-red-500">*</span></h2>
        <select
          className="input-field mb-2"
          onChange={(e) => {
            if (e.target.value && !selectedSpecializations.includes(e.target.value)) {
              setSelectedSpecializations([...selectedSpecializations, e.target.value]);
            }
            e.target.value = '';
          }}
        >
          <option value="">Select specializations...</option>
          {SPECIALIZATIONS.map(spec => (
            <option key={spec} value={spec} disabled={selectedSpecializations.includes(spec)}>
              {spec}
            </option>
          ))}
        </select>
        <div className="flex flex-wrap gap-2">
          {selectedSpecializations.map(spec => (
            <span key={spec} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm flex items-center gap-1">
              {spec}
              <button type="button" onClick={() => toggleItem(spec, selectedSpecializations, setSelectedSpecializations)}>
                <X className="h-3 w-3" />
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Certifications <span className="text-red-500">*</span></h2>
        <select
          className="input-field mb-2"
          onChange={(e) => {
            if (e.target.value && !selectedCertifications.includes(e.target.value)) {
              setSelectedCertifications([...selectedCertifications, e.target.value]);
            }
            e.target.value = '';
          }}
        >
          <option value="">Select certifications...</option>
          {CERTIFICATIONS.map(cert => (
            <option key={cert} value={cert} disabled={selectedCertifications.includes(cert)}>
              {cert}
            </option>
          ))}
        </select>
        <div className="flex flex-wrap gap-2">
          {selectedCertifications.map(cert => (
            <span key={cert} className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm flex items-center gap-1">
              {cert}
              <button type="button" onClick={() => toggleItem(cert, selectedCertifications, setSelectedCertifications)}>
                <X className="h-3 w-3" />
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* Session Types */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Session Types <span className="text-red-500">*</span></h2>
        <div className="flex flex-wrap gap-3">
          {(['online', 'in-person', 'community'] as const).map(type => (
            <label key={type} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedSessionTypes.includes(type)}
                onChange={() => toggleItem(type, selectedSessionTypes as string[], setSelectedSessionTypes as any)}
                className="rounded text-indigo-600 focus:ring-indigo-500"
              />
              <span className="capitalize">{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Availability */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Availability <span className="text-red-500">*</span></h2>
        <div className="flex flex-wrap gap-3">
          {DAYS.map(day => (
            <label key={day} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedAvailability.includes(day)}
                onChange={() => toggleItem(day, selectedAvailability, setSelectedAvailability)}
                className="rounded text-indigo-600 focus:ring-indigo-500"
              />
              <span>{day}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Submit */}
      <div className="flex gap-4 pt-4 border-t">
        <button
          type="submit"
          disabled={saving || selectedLanguages.length === 0 || selectedNationalities.length === 0}
          className="btn-primary flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {saving ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Saving...
            </>
          ) : (
            <>
              <Save className="h-5 w-5" />
              {isEdit ? 'Update' : 'Save'} Therapist
            </>
          )}
        </button>
        <Link href="/admin/dashboard" className="btn-secondary">
          Cancel
        </Link>
      </div>

      {/* Validation Info */}
      <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 text-sm">
        <p className="font-semibold text-indigo-900 mb-2">Required fields:</p>
        <ul className="text-indigo-700 space-y-1">
          <li>• At least 1 language</li>
          <li>• At least 1 nationality</li>
          <li>• At least 1 specialization</li>
          <li>• At least 1 certification</li>
          <li>• At least 1 session type</li>
          <li>• At least 1 day of availability</li>
        </ul>
      </div>
    </form>
  );
}

