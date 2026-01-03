
import React from 'react';
import { Tutor, UserRole } from '../types';

interface TutorDetailsProps {
  tutor: Tutor;
  onBack: () => void;
  onEnquire: () => void;
}

const TutorDetails: React.FC<TutorDetailsProps> = ({ tutor, onBack, onEnquire }) => {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        <img src={tutor.imageUrl} alt={tutor.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
        
        <div className="absolute top-8 left-6 right-6 flex justify-between items-center">
          <button 
            onClick={onBack}
            className="w-12 h-12 glass-dark text-white rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all active:scale-90"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" /></svg>
          </button>
        </div>

        <div className="absolute bottom-12 left-6 right-6 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <div className="flex gap-3">
                <span className="px-4 py-1 rounded-full glass-dark text-white text-[10px] font-black uppercase tracking-widest border border-white/10">
                  {tutor.role === UserRole.COACHING_CENTER ? 'Institute' : 'Private Tutor'}
                </span>
                {tutor.verified && (
                  <span className="px-4 py-1 rounded-full bg-indigo-600 text-white text-[10px] font-black uppercase tracking-widest">
                    Verified Pro
                  </span>
                )}
              </div>
              <h1 className="text-5xl md:text-7xl font-[900] text-white tracking-tighter leading-tight">
                {tutor.name}
              </h1>
              <div className="flex items-center gap-3 text-white/80 font-bold">
                 <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                 <span className="text-xl">{tutor.location}</span>
              </div>
            </div>
            
            <div className="glass-dark p-6 rounded-[32px] border border-white/10 flex flex-col items-center md:items-end min-w-[240px]">
               <div className="text-[10px] font-black text-indigo-300 uppercase tracking-widest mb-1">Standard Rate</div>
               <div className="text-5xl font-[900] text-white tracking-tighter mb-4">₹{tutor.hourlyRate}<span className="text-xl opacity-60 font-medium">/hr</span></div>
               <button 
                onClick={onEnquire}
                className="w-full py-5 bg-white text-slate-950 rounded-[20px] font-black text-xs uppercase tracking-widest hover:bg-indigo-600 hover:text-white transition-all active:scale-95 shadow-2xl"
               >
                 Book a Demo Session
               </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-16">
             <section>
                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-6">Professional Bio</h3>
                <p className="text-slate-600 text-lg leading-relaxed font-medium">
                  {tutor.bio}
                </p>
             </section>

             <section>
                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-8">Expertise & Subjects</h3>
                <div className="flex flex-wrap gap-4">
                   {tutor.subjects.map(subject => (
                     <div key={subject} className="px-6 py-4 glass rounded-3xl border border-white flex items-center gap-3">
                        <div className="w-8 h-8 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center">
                           <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l7.818-3.35a1 1 0 01.1.048 11.539 11.539 0 01-.25 3.762 1 1 0 01-.89.89 8.978 8.978 0 00-3.23.633 1 1 0 00-.608.92v2.13a1 1 0 01-1 1h-1.3l.01-.01z" /></svg>
                        </div>
                        <span className="font-black text-[11px] uppercase tracking-widest text-slate-700">{subject}</span>
                     </div>
                   ))}
                </div>
             </section>

             <section className="bg-white p-8 md:p-12 rounded-[40px] shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-12">
                <div className="text-center md:text-left">
                   <div className="text-7xl font-[900] text-slate-900 mb-2">{tutor.rating}</div>
                   <div className="flex justify-center md:justify-start gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map(s => (
                        <svg key={s} className={`w-5 h-5 ${s <= Math.floor(tutor.rating) ? 'text-amber-400' : 'text-slate-200'}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      ))}
                   </div>
                   <p className="text-slate-500 font-bold text-sm uppercase tracking-widest">Student Satisfaction</p>
                </div>
                <div className="flex-grow space-y-4 w-full">
                   {[
                     { l: 'Clarity of Concept', v: 92 },
                     { l: 'Punctuality', v: 98 },
                     { l: 'Communication', v: 95 }
                   ].map(item => (
                     <div key={item.l}>
                        <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1.5">
                           <span>{item.l}</span>
                           <span>{item.v}%</span>
                        </div>
                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                           <div className="h-full bg-indigo-600 rounded-full" style={{ width: `${item.v}%` }}></div>
                        </div>
                     </div>
                   ))}
                </div>
             </section>
          </div>

          <aside className="space-y-8">
             <div className="glass bg-white p-8 rounded-[40px] shadow-2xl border-white ring-1 ring-slate-100 sticky top-32">
                <h4 className="text-xl font-black text-slate-900 mb-8 tracking-tight">Tutor Overview</h4>
                <div className="space-y-6 mb-8">
                   <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Experience</span>
                      <span className="font-bold text-slate-800">{tutor.experience} Years</span>
                   </div>
                   <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Mode</span>
                      <span className="font-bold text-slate-800">Home & Online</span>
                   </div>
                   <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Response Rate</span>
                      <span className="font-bold text-indigo-600">High (&lt; 2hrs)</span>
                   </div>
                </div>

                <div className="p-6 bg-slate-50 rounded-3xl mb-8 border border-indigo-50">
                   <p className="text-xs text-slate-500 font-medium leading-relaxed italic">
                     "Extremely patient with JEE Physics concepts. Highly recommended for board prep as well!"
                   </p>
                   <div className="mt-3 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-200"></div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-700">Student #422</span>
                   </div>
                </div>

                <button 
                  onClick={onEnquire}
                  className="w-full py-5 bg-slate-900 text-white rounded-[24px] font-[900] text-xs uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-xl shadow-slate-100 active:scale-95"
                >
                  Send Enquiry
                </button>
             </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default TutorDetails;
