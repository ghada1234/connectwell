export interface Therapist {
  id: string;
  name: string;
  title: string;
  specializations: string[];
  languages: string[];
  nationalities: string[];
  gender: 'Male' | 'Female' | 'Non-binary' | 'Other';
  certifications: string[];
  sessionTypes: ('online' | 'in-person' | 'community')[];
  yearsOfExperience: number;
  hourlyRate: number;
  availability: string[];
  bio: string;
  imageUrl: string;
  rating: number;
  reviewCount: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  preferences?: {
    preferredGender?: string;
    preferredLanguages?: string[];
    preferredSpecializations?: string[];
    preferredNationality?: string;
  };
}

export interface Booking {
  id: string;
  therapistId: string;
  userId: string;
  sessionType: 'online' | 'in-person';
  date: Date;
  duration: number;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  notes?: string;
}

export interface ForumPost {
  id: string;
  userId: string;
  userName: string;
  title: string;
  content: string;
  createdAt: Date;
  replies: ForumReply[];
  likes: number;
  category: string;
}

export interface ForumReply {
  id: string;
  userId: string;
  userName: string;
  content: string;
  createdAt: Date;
  likes: number;
}

export interface SearchFilters {
  languages?: string[];
  nationalities?: string[];
  gender?: string;
  certifications?: string[];
  sessionTypes?: string[];
  specializations?: string[];
  maxRate?: number;
  minRating?: number;
}

