
import React from 'react';
import { PG } from '../types';

interface PGCardProps {
  pg: PG;
  onEnquiry: (pg: PG) => void;
}

const PGCard: React.FC<PGCardProps> = ({ pg, onEnquiry }) => {
  return (
    <div 
      onClick={() => onEnquiry(pg)}
      className="bg-white rounded-[32px] overflow-hidden shadow-2xl hover:shadow-xl transition-all duration-500 border border-slate-100 flex flex-col group h-full cursor-pointer"
    >
      <div className="relative h-60 md:h-64 overflow-hidden">
        <img 
          src={pg.imageUrl} 
          alt={pg.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent"></div>
        
        <div className="absolute top-5 left-5">
          <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest glass text-indigo-700`}>
            {pg.type} Only
          </span>
        </div>

        <div className="absolute bottom-5 left-6 right-6">
          <div className="flex justify-between items-end">
            <div>
              <div className="text-3xl font-[900] text-white tracking-tighter leading-none">₹{pg.monthlyRent}<span className="text-xs opacity-60 font-medium tracking-normal">/mo</span></div>
            </div>
            <div className="glass px-2.5 py-1 rounded-xl flex items-center gap-1 text-white font-black text-xs">
              <svg className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              {pg.rating}
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-black text-slate-800 tracking-tight mb-1.5 leading-tight">{pg.name}</h3>
        <p className="text-xs text-slate-500 font-bold flex items-center gap-2 mb-6">
          <svg className="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path></svg>
          {pg.location}
        </p>

        <button 
          className="mt-auto w-full py-4 bg-slate-900 text-white rounded-xl font-[900] text-[10px] uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-xl active:scale-95 flex items-center justify-center gap-2"
        >
          View Details
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
        </button>
      </div>
    </div>
  );
};

export default PGCard;
