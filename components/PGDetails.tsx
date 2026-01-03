
import React from 'react';
import { PG } from '../types';
import ImageGallery from './ImageGallery';

interface PGDetailsProps {
  pg: PG;
  onBack: () => void;
  onEnquire: () => void;
}

const PGDetails: React.FC<PGDetailsProps> = ({ pg, onBack, onEnquire }) => {
  const galleryImages = pg.images && pg.images.length > 0 ? pg.images : [pg.imageUrl];

  const getAmenityIcon = (name: string) => {
    const iconSize = "w-6 h-6";
    switch (name.toLowerCase()) {
      case 'wi-fi': 
        return <svg className={iconSize} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" /></svg>;
      case 'ac': 
        return <svg className={iconSize} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM4 10h16M10 14h4" /></svg>;
      case 'kitchen': 
        return <svg className={iconSize} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
      case 'laundry': 
        return <svg className={iconSize} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8a4 4 0 100 8 4 4 0 000-8zM2 6h20M2 18h20" /></svg>;
      case 'cctv': 
        return <svg className={iconSize} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>;
      case 'meals included': 
        return <svg className={iconSize} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10" /></svg>;
      case 'gym': 
        return <svg className={iconSize} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>;
      case 'security': 
        return <svg className={iconSize} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>;
      case 'power backup': 
        return <svg className={iconSize} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
      case 'housekeeping': 
        return <svg className={iconSize} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>;
      case 'attached washroom': 
        return <svg className={iconSize} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" /></svg>;
      case 'parking': 
        return <svg className={iconSize} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 10l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3" /></svg>;
      default: 
        return <svg className={iconSize} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>;
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="fixed top-8 left-6 right-6 flex justify-between items-center z-[70]">
        <button 
          onClick={onBack}
          className="w-12 h-12 glass-dark text-white rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all active:scale-90 shadow-2xl"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <div className="flex gap-3">
           <button className="w-12 h-12 glass-dark text-white rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all active:scale-90 shadow-2xl">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
           </button>
           <button className="w-12 h-12 glass-dark text-white rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all active:scale-90 shadow-2xl">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
           </button>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="lg:col-span-2 space-y-12">
            <section className="animate-in fade-in slide-in-from-bottom-8 duration-700">
              <ImageGallery images={galleryImages} />
            </section>

            <section className="space-y-6">
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-[10px] font-black uppercase tracking-widest border border-indigo-100">
                  Verified Property
                </span>
                <span className="px-4 py-1.5 rounded-full bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest">
                  {pg.type} Only
                </span>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-2">
                  <h1 className="text-4xl md:text-6xl font-[900] text-slate-900 tracking-tighter leading-tight">
                    {pg.name}
                  </h1>
                  <div className="flex items-center gap-3 text-slate-500 font-bold">
                    <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                    <span className="text-lg md:text-xl">{pg.location}, {pg.city}</span>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm flex flex-col items-center md:items-end min-w-[200px]">
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Monthly Rent</div>
                  <div className="text-4xl font-[900] text-slate-900 tracking-tighter">₹{pg.monthlyRent}<span className="text-lg opacity-40 font-medium">/mo</span></div>
                </div>
              </div>
            </section>

             <section className="bg-white p-8 md:p-12 rounded-[40px] shadow-sm border border-slate-100">
                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-6">About this Space</h3>
                <p className="text-slate-600 text-lg leading-relaxed font-medium">
                  {pg.description}
                  <br /><br />
                  Located in a prime educational and tech hub, this paying guest accommodation offers a perfect balance of privacy and social living. Designed for the modern Indian student and professional, it features ergonomic study areas, high-speed fiber internet, and 24/7 security.
                </p>
             </section>

             <section>
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">What this place offers</h3>
                  <div className="h-px bg-slate-100 flex-grow ml-8 hidden md:block"></div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                   {pg.amenities.map(amenity => (
                     <div key={amenity} className="flex flex-col gap-4 p-8 bg-white rounded-[32px] border border-slate-100 group hover:border-indigo-200 transition-all shadow-sm hover:shadow-xl hover:-translate-y-1 duration-300">
                        <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-inner">
                           {getAmenityIcon(amenity)}
                        </div>
                        <span className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-700 leading-tight">
                          {amenity}
                        </span>
                     </div>
                   ))}
                </div>
             </section>

             <section className="bg-white p-8 md:p-12 rounded-[40px] shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-12">
                <div className="text-center md:text-left min-w-[140px]">
                   <div className="text-7xl font-[900] text-slate-900 mb-2">{pg.rating}</div>
                   <div className="flex justify-center md:justify-start gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map(s => (
                        <svg key={s} className={`w-5 h-5 ${s <= Math.floor(pg.rating) ? 'text-amber-400' : 'text-slate-200'}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      ))}
                   </div>
                   <p className="text-slate-500 font-bold text-[10px] uppercase tracking-widest">Resident Score</p>
                </div>
                <div className="flex-grow space-y-5 w-full">
                   {[
                     { l: 'Cleanliness', v: 95 },
                     { l: 'Security', v: 100 },
                     { l: 'Value for Money', v: 88 }
                   ].map(item => (
                     <div key={item.l}>
                        <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">
                           <span>{item.l}</span>
                           <span className="text-slate-900">{item.v}%</span>
                        </div>
                        <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                           <div className="h-full bg-indigo-600 rounded-full transition-all duration-1000 delay-300" style={{ width: `${item.v}%` }}></div>
                        </div>
                     </div>
                   ))}
                </div>
             </section>
          </div>

          <aside className="space-y-8">
             <div className="bg-white p-8 rounded-[40px] shadow-2xl border-white ring-1 ring-slate-100 sticky top-32 animate-in slide-in-from-right-8 duration-700">
                <h4 className="text-xl font-black text-slate-900 mb-8 tracking-tight">Stay Summary</h4>
                <div className="space-y-6 mb-8">
                   <div className="flex justify-between items-center pb-4 border-b border-slate-50">
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Lock-in</span>
                      <span className="font-bold text-slate-800 text-sm">Min 3 Months</span>
                   </div>
                   <div className="flex justify-between items-center pb-4 border-b border-slate-50">
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Notice Period</span>
                      <span className="font-bold text-slate-800 text-sm">1 Month</span>
                   </div>
                   <div className="flex justify-between items-center pb-4 border-b border-slate-50">
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Security Deposit</span>
                      <span className="font-bold text-indigo-600 text-sm">₹{pg.monthlyRent * 2}</span>
                   </div>
                </div>

                <div className="p-6 bg-slate-50 rounded-3xl mb-8 border border-slate-100">
                   <p className="text-xs text-slate-500 font-medium leading-relaxed italic mb-4">
                     "Exactly as shown. Very safe and the South Indian food is surprisingly good!"
                   </p>
                   <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-indigo-100 border border-white"></div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-700">Sneha K.</span>
                   </div>
                </div>

                <button 
                  onClick={onEnquire}
                  className="w-full py-5 bg-indigo-600 text-white rounded-[24px] font-[900] text-xs uppercase tracking-widest hover:bg-slate-950 transition-all shadow-xl shadow-indigo-100 active:scale-95"
                >
                  Schedule a Visit
                </button>
             </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default PGDetails;
