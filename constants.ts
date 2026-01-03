
import { Tutor, UserRole, PG } from './types';

export const MOCK_TUTORS: Tutor[] = [
  {
    id: '1',
    name: 'Dr. Ananya Sharma',
    role: UserRole.TUTOR,
    subjects: ['Mathematics', 'Physics', 'JEE Prep'],
    experience: 12,
    rating: 4.9,
    bio: 'PhD from IIT Delhi with 10+ years of experience in making JEE Physics and Maths accessible to students.',
    location: 'South Delhi, Delhi',
    hourlyRate: 800,
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
    verified: true,
    status: 'approved'
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
    verified: true,
    status: 'approved'
  },
  {
    id: '3',
    name: 'Vikram Singh',
    role: UserRole.TUTOR,
    subjects: ['English Literature', 'History', 'UPSC Prep'],
    experience: 6,
    rating: 4.8,
    bio: 'UPSC aspirant and English honors graduate from DU. I focus on conceptual clarity and answer writing.',
    location: 'Indiranagar, Bangalore',
    hourlyRate: 450,
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    verified: true,
    status: 'approved'
  },
  {
    id: '4',
    name: 'Pune Coding Bootcamp',
    role: UserRole.COACHING_CENTER,
    subjects: ['Computer Science', 'Spoken English'],
    experience: 5,
    rating: 4.9,
    bio: 'Intensive 12-week coding bootcamp specializing in full-stack web development. Placement assistance provided.',
    location: 'Hinjewadi, Pune',
    hourlyRate: 1500,
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80',
    verified: true,
    status: 'approved'
  },
  {
    id: '5',
    name: 'Priya Mehta',
    role: UserRole.TUTOR,
    subjects: ['CA/CS Foundation', 'Biology'],
    experience: 8,
    rating: 4.6,
    bio: 'Chartered Accountant with a passion for teaching. I simplify complex financial concepts for aspiring CAs.',
    location: 'Bandra, Mumbai',
    hourlyRate: 700,
    imageUrl: 'https://images.unsplash.com/photo-1580894908361-967195033215?auto=format&fit=crop&w=400&q=80',
    verified: true,
    status: 'approved'
  },
  {
    id: '6',
    name: 'The Success Magnet',
    role: UserRole.COACHING_CENTER,
    subjects: ['UPSC Prep', 'Spoken English'],
    experience: 15,
    rating: 4.8,
    bio: 'Premier institute for Civil Services Examination preparation. Comprehensive curriculum and experienced faculty.',
    location: 'Old Rajinder Nagar, Delhi',
    hourlyRate: 1800,
    imageUrl: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=400&q=80',
    verified: true,
    status: 'pending'
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
  },
  {
    id: 'pg-4',
    name: 'Sea View Stays',
    location: 'Juhu',
    city: 'Mumbai',
    monthlyRent: 22000,
    type: 'Co-ed',
    amenities: ['AC', 'Wi-Fi', 'Housekeeping', 'Attached Washroom', 'Security'],
    rating: 4.9,
    imageUrl: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1560185893-a55de8534e6d?auto=format&fit=crop&w=600&q=80'
    ],
    description: 'Luxurious PG with stunning sea views, ideal for professionals and students seeking a premium lifestyle.',
    verified: true,
    status: 'approved'
  },
  {
    id: 'pg-5',
    name: 'The Scholar Hub',
    location: 'FC Road',
    city: 'Pune',
    monthlyRent: 11000,
    type: 'Boys',
    amenities: ['Wi-Fi', 'Meals Included', 'Laundry', 'Power Backup'],
    rating: 4.4,
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1464890452159-8534b83b35ee?auto=format&fit=crop&w=600&q=80'
    ],
    description: 'A student-focused PG in the heart of Pune\'s educational district. Quiet environment for focused studies.',
    verified: true,
    status: 'pending'
  }
];

export const SUBJECT_OPTIONS = [
  'Mathematics', 'Physics', 'Chemistry', 'Biology', 
  'JEE Prep', 'NEET Prep', 'Computer Science', 
  'UPSC Prep', 'CA/CS Foundation', 'Spoken English'
];

export const PG_AMENITIES = ['Wi-Fi', 'AC', 'Meals Included', 'Kitchen', 'Laundry', 'CCTV', 'Gym', 'Security', 'Power Backup', 'Housekeeping', 'Attached Washroom', 'Parking'];
