
import React from 'react';
import { Tutor, UserRole } from '../types';

interface TutorCardProps {
  tutor: Tutor;
  onEnquiry: (tutor: Tutor) => void;
}

const TutorCard: React.FC<TutorCardProps> = ({ tutor, onEnquiry }) => {
  return (
    <div 
      onClick={() => onEnquiry(tutor)}
      className="bg-[#0a0f1d] rounded-[32px] overflow-hidden shadow-2xl border border-white/5 flex flex-col group h-full cursor-pointer relative transition-all duration-500 hover:-translate-y-2"
    >
      <div className="relative h-60 md:h-64 overflow-hidden">
        <img 
          src={tutor.imageUrl} 
          alt={tutor.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-[#0a0f1d]/30 to-transparent"></div>
        
        <div className="absolute top-4 right-4">
          <div className="px-3 py-1 rounded-full glass text-white border border-white/10 text-[10px] font-black uppercase tracking-widest">
            {tutor.role === UserRole.COACHING_CENTER ? 'Coaching Class' : 'Home Tutor'}
          </div>
        </div>
        
        <div className="absolute bottom-5 left-5 right-5">
           <div className="flex justify-between items-end">
              <div className="flex items-baseline text-white gap-1">
                 <span className="text-2xl font-black tracking-tighter leading-none">₹{tutor.hourlyRate}</span>
                 <span className="text-sm font-semibold opacity-60">/hr</span>
              </div>
              <div className="glass px-2.5 py-1 rounded-xl flex items-center gap-1 text-white font-black text-xs">
                <svg className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                {tutor.rating}
              </div>
           </div>
        </div>
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-black text-white tracking-tight mb-2 group-hover:text-indigo-400 transition-colors leading-tight">{tutor.name}</h3>
        <p className="text-sm text-slate-400 font-semibold flex items-center gap-2 mb-4">
          <svg className="w-4 h-4 text-indigo-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path></svg>
          <span>{tutor.location}</span>
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {tutor.subjects.slice(0, 3).map(subject => (
            <span key={subject} className="px-2.5 py-1 glass text-slate-400 rounded-lg text-[10px] font-black uppercase tracking-widest border border-white/5">
              {subject}
            </span>
          ))}
        </div>

        <button 
          className="mt-auto w-full py-4 bg-white text-slate-950 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-indigo-600 hover:text-white transition-all duration-300 shadow-lg active:scale-95 flex items-center justify-center gap-2"
        >
          View Full Profile
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
        </button>
      </div>
    </div>
  );
};

export default TutorCard;
