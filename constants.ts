
import { Tutor, UserRole, PG } from './types';

export const MOCK_TUTORS: Tutor[] = [
  {
    id: '1',
    name: 'Dr. Sarah Mitchell',
    role: UserRole.TUTOR,
    subjects: ['Mathematics', 'Physics'],
    experience: 8,
    rating: 4.9,
    bio: 'PhD in Theoretical Physics with a passion for making complex concepts simple for high school students.',
    location: 'Downtown, NY',
    hourlyRate: 50,
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
    verified: true
  },
  {
    id: '2',
    name: 'Horizon Academy',
    role: UserRole.COACHING_CENTER,
    subjects: ['SAT Preparation', 'ACT preparation', 'College Counseling'],
    experience: 15,
    rating: 4.7,
    bio: 'Premier coaching center with a 95% success rate in Ivy League admissions.',
    location: 'Queens, NY',
    hourlyRate: 80,
    imageUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=400&q=80',
    verified: true
  },
  {
    id: '3',
    name: 'James Wilson',
    role: UserRole.TUTOR,
    subjects: ['English Literature', 'History'],
    experience: 5,
    rating: 4.8,
    bio: 'Creative writing expert focusing on AP English and essay composition for college applicants.',
    location: 'Brooklyn, NY',
    hourlyRate: 40,
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    verified: true
  }
];

export const MOCK_PGS: PG[] = [
  {
    id: 'pg-1',
    name: 'Skyline Premium Living',
    location: 'Manhattan near NYU',
    city: 'New York',
    monthlyRent: 1200,
    type: 'Co-ed',
    amenities: ['Wi-Fi', 'AC', 'Kitchen', 'Laundry'],
    rating: 4.8,
    imageUrl: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1522770179533-24471fcdba45?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=600&q=80'
    ],
    description: 'A premium student accommodation right in the heart of Manhattan. Spacious rooms with daily cleaning service.',
    verified: true,
    status: 'approved'
  },
  {
    id: 'pg-2',
    name: 'Graceful Girls Hostel',
    location: 'Brooklyn Heights',
    city: 'New York',
    monthlyRent: 850,
    type: 'Girls',
    amenities: ['Wi-Fi', 'CCTV', 'Meals Included'],
    rating: 4.5,
    imageUrl: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80'
    ],
    description: 'Safe and secure environment for female students. 24/7 security and home-cooked meals.',
    verified: true,
    status: 'approved'
  },
  {
    id: 'pg-3',
    name: 'The Scholars Den (Boys)',
    location: 'Queens College Area',
    city: 'New York',
    monthlyRent: 700,
    type: 'Boys',
    amenities: ['Wi-Fi', 'Gym', 'Laundry'],
    rating: 4.2,
    imageUrl: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1555854817-2b2260757db5?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=600&q=80'
    ],
    description: 'Affordable and social PG for boys. Features a community gym and lounge area.',
    verified: true,
    status: 'approved'
  }
];

export const SUBJECT_OPTIONS = [
  'Mathematics', 'Physics', 'Chemistry', 'Biology', 
  'English Literature', 'History', 'Computer Science', 
  'SAT Preparation', 'ACT preparation', 'Languages'
];

export const PG_AMENITIES = ['Wi-Fi', 'AC', 'Meals Included', 'Kitchen', 'Laundry', 'CCTV', 'Gym'];
