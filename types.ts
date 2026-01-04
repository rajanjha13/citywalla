
export enum UserRole {
  STUDENT = 'STUDENT',
  TUTOR = 'TUTOR',
  COACHING_CENTER = 'COACHING_CENTER',
  PG_OWNER = 'PG_OWNER'
}

export interface Tutor {
  id: string;
  name: string;
  role: UserRole;
  subjects: string[];
  experience: number;
  rating: number;
  bio: string;
  location: string;
  hourlyRate: number;
  imageUrl: string;
  verified: boolean;
  qualifications: string[];
  status?: 'pending' | 'approved';
}

export interface PG {
  id: string;
  name: string;
  location: string;
  city: string;
  monthlyRent: number;
  type: 'Boys' | 'Girls' | 'Co-ed';
  amenities: string[];
  rating: number;
  imageUrl: string;
  images?: string[];
  description: string;
  verified: boolean;
  status?: 'pending' | 'approved';
}

export interface Enquiry {
  id: string;
  studentName: string;
  studentEmail: string;
  studentPhone: string;
  subject?: string;
  tutorId?: string;
  tutorName?: string;
  pgId?: string;
  pgName?: string;
  message: string;
  timestamp: string;
  type: 'tutor' | 'pg';
}