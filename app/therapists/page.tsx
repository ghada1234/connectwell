"use client";

import { useState } from 'react';
import TherapistCard from '@/components/TherapistCard';
import SearchFilters from '@/components/SearchFilters';
import { MOCK_THERAPISTS } from '@/lib/data/mockTherapists';
import { SearchFilters as SearchFiltersType } from '@/lib/types';
import { Sparkles } from 'lucide-react';

export default function TherapistsPage() {
  const [filters, setFilters] = useState<SearchFiltersType>({});
  const [sortBy, setSortBy] = useState<'rating' | 'price-low' | 'price-high' | 'experience'>('rating');

  const filteredTherapists = MOCK_THERAPISTS.filter(therapist => {
    if (filters.languages?.length && !filters.languages.some(lang => therapist.languages.includes(lang))) return false;
    if (filters.nationalities?.length && !filters.nationalities.some(nat => therapist.nationalities.includes(nat))) return false;
    if (filters.gender && therapist.gender !== filters.gender) return false;
    if (filters.certifications?.length && !filters.certifications.some(cert => therapist.certifications.includes(cert))) return false;
    if (filters.sessionTypes?.length && !filters.sessionTypes.some(type => therapist.sessionTypes.includes(type as any))) return false;
    if (filters.specializations?.length && !filters.specializations.some(spec => therapist.specializations.includes(spec))) return false;
    if (filters.maxRate && therapist.hourlyRate > filters.maxRate) return false;
    if (filters.minRating && therapist.rating < filters.minRating) return false;
    return true;
  });

  const sortedTherapists = [...filteredTherapists].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'price-low':
        return a.hourlyRate - b.hourlyRate;
      case 'price-high':
        return b.hourlyRate - a.hourlyRate;
      case 'experience':
        return b.yearsOfExperience - a.yearsOfExperience;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Find Your Therapist</h1>
          <p className="text-xl text-gray-600">
            Browse our diverse community of certified professionals
          </p>
        </div>

        <SearchFilters filters={filters} onFiltersChange={setFilters} />

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <p className="text-gray-600">
            <span className="font-semibold text-indigo-600">{sortedTherapists.length}</span> therapist
            {sortedTherapists.length !== 1 ? 's' : ''} found
          </p>
          <div className="flex items-center gap-4">
            <label className="text-sm text-gray-600">Sort by:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="input-field py-2"
            >
              <option value="rating">Highest Rated</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="experience">Most Experienced</option>
            </select>
          </div>
        </div>

        {sortedTherapists.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No therapists found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your filters to see more results</p>
            <button
              onClick={() => setFilters({})}
              className="btn-primary"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedTherapists.map((therapist) => (
              <TherapistCard key={therapist.id} therapist={therapist} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

