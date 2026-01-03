
import { Tutor, UserRole, PG } from './types';

export const MOCK_TUTORS: Tutor[] = [
  {
    id: '1',
    name: 'Dr. Ananya Sharma',
    role: UserRole.TUTOR,
    subjects: ['Mathematics', 'Physics'],
    experience: 12,
    rating: 4.9,
    bio: 'PhD from IIT Delhi with 10+ years of experience in making JEE Physics and Maths accessible to students.',
    location: 'South Delhi, Delhi',
    hourlyRate: 800,
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
    verified: true
  },
  {
    id: '2',
    name: 'Vidya Shiksha Academy',
    role: UserRole.COACHING_CENTER,
    subjects: ['JEE Main', 'NEET Preparation', 'CBSE Boards'],
    experience: 20,
    rating: 4.7,
    bio: 'Leading coaching institute in North India with a track record of producing top 100 AIR ranks.',
    location: 'Kota, Rajasthan',
    hourlyRate: 1200,
    imageUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=400&q=80',
    verified: true
  },
  {
    id: '3',
    name: 'Vikram Singh',
    role: UserRole.TUTOR,
    subjects: ['English Literature', 'History'],
    experience: 6,
    rating: 4.8,
    bio: 'UPSC aspirant and English honors graduate from DU. I focus on conceptual clarity and answer writing.',
    location: 'Indiranagar, Bangalore',
    hourlyRate: 450,
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    verified: true
  }
];

export const MOCK_PGS: PG[] = [
  {
    id: 'pg-1',
    name: 'Royal Heritage Premium PG',
    location: 'Koramangala 4th Block',
    city: 'Bangalore',
    monthlyRent: 15000,
    type: 'Co-ed',
    amenities: ['Wi-Fi', 'AC', 'Kitchen', 'Laundry', 'Security', 'Power Backup'],
    rating: 4.8,
    imageUrl: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1522770179533-24471fcdba45?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=600&q=80'
    ],
    description: 'Ultra-modern living space for tech professionals and students. Located walking distance from major startups.',
    verified: true,
    status: 'approved'
  },
  {
    id: 'pg-2',
    name: 'Saheli Girls Residency',
    location: 'Vasant Kunj',
    city: 'Delhi',
    monthlyRent: 12500,
    type: 'Girls',
    amenities: ['Wi-Fi', 'CCTV', 'Meals Included', 'Housekeeping', 'Security'],
    rating: 4.5,
    imageUrl: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80'
    ],
    description: 'Home-away-from-home for students of JNU and DU. Strict security and high-quality North Indian meals included.',
    verified: true,
    status: 'approved'
  },
  {
    id: 'pg-3',
    name: 'Yuva Boys Executive PG',
    location: 'Aundh',
    city: 'Pune',
    monthlyRent: 9000,
    type: 'Boys',
    amenities: ['Wi-Fi', 'Gym', 'Laundry', 'Attached Washroom', 'Parking'],
    rating: 4.2,
    imageUrl: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1555854817-2b2260757db5?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=600&q=80'
    ],
    description: 'Pocket-friendly and social atmosphere for male students and early-career bachelors.',
    verified: true,
    status: 'approved'
  }
];

export const SUBJECT_OPTIONS = [
  'Mathematics', 'Physics', 'Chemistry', 'Biology', 
  'JEE Prep', 'NEET Prep', 'Computer Science', 
  'UPSC Prep', 'CA/CS Foundation', 'Spoken English'
];

export const PG_AMENITIES = ['Wi-Fi', 'AC', 'Meals Included', 'Kitchen', 'Laundry', 'CCTV', 'Gym', 'Security', 'Power Backup', 'Housekeeping', 'Attached Washroom', 'Parking'];
