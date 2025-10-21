"use client";

import { SearchFilters as SearchFiltersType } from '@/lib/types';
import { LANGUAGES } from '@/lib/data/languages';
import { NATIONALITIES } from '@/lib/data/nationalities';
import { SPECIALIZATIONS, CERTIFICATIONS, GENDERS } from '@/lib/data/specializations';
import { Filter, X } from 'lucide-react';
import { useState } from 'react';

interface SearchFiltersProps {
  filters: SearchFiltersType;
  onFiltersChange: (filters: SearchFiltersType) => void;
}

export default function SearchFilters({ filters, onFiltersChange }: SearchFiltersProps) {
  const [showFilters, setShowFilters] = useState(false);

  const handleMultiSelect = (key: keyof SearchFiltersType, value: string) => {
    const currentValues = (filters[key] as string[]) || [];
    const newValues = currentValues.includes(value)
      ? currentValues.filter(v => v !== value)
      : [...currentValues, value];
    onFiltersChange({ ...filters, [key]: newValues.length > 0 ? newValues : undefined });
  };

  const clearFilters = () => {
    onFiltersChange({});
  };

  const activeFilterCount = Object.values(filters).filter(v => 
    v !== undefined && (Array.isArray(v) ? v.length > 0 : true)
  ).length;

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="btn-secondary flex items-center gap-2"
        >
          <Filter className="h-5 w-5" />
          Filters
          {activeFilterCount > 0 && (
            <span className="bg-indigo-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {activeFilterCount}
            </span>
          )}
        </button>
        {activeFilterCount > 0 && (
          <button onClick={clearFilters} className="text-gray-600 hover:text-indigo-600 flex items-center gap-1">
            <X className="h-4 w-4" />
            Clear all
          </button>
        )}
      </div>

      {showFilters && (
        <div className="card bg-gray-50 space-y-6 animate-fade-in">
          {/* Languages */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Languages</label>
            <select
              className="input-field"
              onChange={(e) => e.target.value && handleMultiSelect('languages', e.target.value)}
              value=""
            >
              <option value="">Select language...</option>
              {LANGUAGES.map(lang => (
                <option key={lang} value={lang}>{lang}</option>
              ))}
            </select>
            <div className="flex flex-wrap gap-2 mt-2">
              {filters.languages?.map(lang => (
                <span
                  key={lang}
                  className="px-3 py-1 bg-indigo-600 text-white rounded-full text-sm flex items-center gap-1"
                >
                  {lang}
                  <button onClick={() => handleMultiSelect('languages', lang)}>
                    <X className="h-3 w-3" />
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Nationalities */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Nationality</label>
            <select
              className="input-field"
              onChange={(e) => e.target.value && handleMultiSelect('nationalities', e.target.value)}
              value=""
            >
              <option value="">Select nationality...</option>
              {NATIONALITIES.map(nat => (
                <option key={nat} value={nat}>{nat}</option>
              ))}
            </select>
            <div className="flex flex-wrap gap-2 mt-2">
              {filters.nationalities?.map(nat => (
                <span
                  key={nat}
                  className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm flex items-center gap-1"
                >
                  {nat}
                  <button onClick={() => handleMultiSelect('nationalities', nat)}>
                    <X className="h-3 w-3" />
                  </button>
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Gender */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Gender</label>
              <select
                className="input-field"
                value={filters.gender || ''}
                onChange={(e) => onFiltersChange({ ...filters, gender: e.target.value || undefined })}
              >
                <option value="">Any</option>
                {GENDERS.map(gender => (
                  <option key={gender} value={gender}>{gender}</option>
                ))}
              </select>
            </div>

            {/* Session Type */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Session Type</label>
              <div className="space-y-2">
                {['online', 'in-person', 'community'].map(type => (
                  <label key={type} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={filters.sessionTypes?.includes(type) || false}
                      onChange={() => handleMultiSelect('sessionTypes', type)}
                      className="rounded text-indigo-600 focus:ring-indigo-500"
                    />
                    <span className="text-gray-700 capitalize">{type}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Specializations */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Specializations</label>
            <select
              className="input-field"
              onChange={(e) => e.target.value && handleMultiSelect('specializations', e.target.value)}
              value=""
            >
              <option value="">Select specialization...</option>
              {SPECIALIZATIONS.map(spec => (
                <option key={spec} value={spec}>{spec}</option>
              ))}
            </select>
            <div className="flex flex-wrap gap-2 mt-2">
              {filters.specializations?.map(spec => (
                <span
                  key={spec}
                  className="px-3 py-1 bg-cyan-600 text-white rounded-full text-sm flex items-center gap-1"
                >
                  {spec}
                  <button onClick={() => handleMultiSelect('specializations', spec)}>
                    <X className="h-3 w-3" />
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Certifications</label>
            <select
              className="input-field"
              onChange={(e) => e.target.value && handleMultiSelect('certifications', e.target.value)}
              value=""
            >
              <option value="">Select certification...</option>
              {CERTIFICATIONS.map(cert => (
                <option key={cert} value={cert}>{cert}</option>
              ))}
            </select>
            <div className="flex flex-wrap gap-2 mt-2">
              {filters.certifications?.map(cert => (
                <span
                  key={cert}
                  className="px-3 py-1 bg-green-600 text-white rounded-full text-sm flex items-center gap-1"
                >
                  {cert}
                  <button onClick={() => handleMultiSelect('certifications', cert)}>
                    <X className="h-3 w-3" />
                  </button>
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Max Rate */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Max Rate: ${filters.maxRate || 500}/hour
              </label>
              <input
                type="range"
                min="50"
                max="500"
                step="10"
                value={filters.maxRate || 500}
                onChange={(e) => onFiltersChange({ ...filters, maxRate: parseInt(e.target.value) })}
                className="w-full"
              />
            </div>

            {/* Min Rating */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Min Rating: {filters.minRating || 0} stars
              </label>
              <input
                type="range"
                min="0"
                max="5"
                step="0.5"
                value={filters.minRating || 0}
                onChange={(e) => onFiltersChange({ ...filters, minRating: parseFloat(e.target.value) })}
                className="w-full"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

