"use client";

import { Therapist } from '@/lib/types';
import { Star, MapPin, Globe, Award, Video, Users } from 'lucide-react';
import Link from 'next/link';

interface TherapistCardProps {
  therapist: Therapist;
}

export default function TherapistCard({ therapist }: TherapistCardProps) {
  return (
    <div className="card hover:shadow-lg transition-all duration-300 animate-fade-in">
      <div className="flex items-start gap-4 mb-4">
        <img
          src={therapist.imageUrl}
          alt={therapist.name}
          className="w-20 h-20 rounded-full object-cover"
        />
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900">{therapist.name}</h3>
          <p className="text-sm text-gray-600">{therapist.title}</p>
          <div className="flex items-center gap-1 mt-1">
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            <span className="font-semibold text-gray-900">{therapist.rating}</span>
            <span className="text-sm text-gray-500">({therapist.reviewCount})</span>
          </div>
        </div>
      </div>

      <p className="text-gray-700 text-sm mb-4 line-clamp-3">{therapist.bio}</p>

      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-sm">
          <Globe className="h-4 w-4 text-gray-500" />
          <span className="text-gray-600">
            {therapist.languages.slice(0, 3).join(', ')}
            {therapist.languages.length > 3 && ` +${therapist.languages.length - 3}`}
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <MapPin className="h-4 w-4 text-gray-500" />
          <span className="text-gray-600">{therapist.nationalities.join(', ')}</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Award className="h-4 w-4 text-gray-500" />
          <span className="text-gray-600">{therapist.yearsOfExperience} years experience</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {therapist.specializations.slice(0, 3).map((spec) => (
          <span
            key={spec}
            className="px-2 py-1 bg-indigo-50 text-indigo-700 text-xs rounded-full"
          >
            {spec}
          </span>
        ))}
        {therapist.specializations.length > 3 && (
          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
            +{therapist.specializations.length - 3}
          </span>
        )}
      </div>

      <div className="flex items-center gap-2 mb-4 text-sm">
        {therapist.sessionTypes.includes('online') && (
          <span className="flex items-center gap-1 px-2 py-1 bg-green-50 text-green-700 rounded">
            <Video className="h-3 w-3" />
            Online
          </span>
        )}
        {therapist.sessionTypes.includes('in-person') && (
          <span className="flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-700 rounded">
            <MapPin className="h-3 w-3" />
            In-person
          </span>
        )}
        {therapist.sessionTypes.includes('community') && (
          <span className="flex items-center gap-1 px-2 py-1 bg-purple-50 text-purple-700 rounded">
            <Users className="h-3 w-3" />
            Community
          </span>
        )}
      </div>

      <div className="flex items-center justify-between pt-4 border-t">
        <div>
          <span className="text-2xl font-bold text-gray-900">${therapist.hourlyRate}</span>
          <span className="text-sm text-gray-500">/hour</span>
        </div>
        <Link
          href={`/therapists/${therapist.id}`}
          className="btn-primary"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
}

