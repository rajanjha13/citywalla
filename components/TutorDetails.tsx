
import React from 'react';
import { Tutor, UserRole } from '../types';

interface TutorDetailsProps {
  tutor: Tutor;
  onBack: () => void;
  onEnquire: () => void;
}

const TutorDetails: React.FC<TutorDetailsProps> = ({ tutor, onBack, onEnquire }) => {
  return (
    <div className="bg-slate-900 min-h-screen">
      {/* Background Image */}
      <div className="fixed top-0 left-0 w-full h-[40vh] md:h-[50vh]">
        <img src={tutor.imageUrl} alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
      </div>

      {/* Back Button */}
      <button 
        onClick={onBack}
        className="fixed top-6 left-6 z-50 w-12 h-12 glass-dark text-white rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all active:scale-90"
        aria-label="Go back"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" /></svg>
      </button>

      {/* Main Scrollable Content */}
      <div className="relative z-10 pt-[25vh] md:pt-[30vh] pb-40 md:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          
          <div className="bg-slate-800/50 backdrop-blur-xl p-6 md:p-8 rounded-[40px] border border-white/10 shadow-2xl">
            {/* --- Profile Header --- */}
            <div className="flex flex-col md:flex-row items-center md:items-end gap-6 md:gap-8 -mt-24 md:-mt-32 mb-10">
              <img src={tutor.imageUrl} alt={tutor.name} className="w-32 h-32 md:w-48 md:h-48 rounded-3xl object-cover border-4 border-slate-700 shadow-2xl flex-shrink-0"/>
              <div className="flex-grow text-center md:text-left">
                <h1 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-tight">{tutor.name}</h1>
                <div className="flex items-center justify-center md:justify-start gap-3 mt-2">
                  {tutor.verified && (
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-[10px] font-bold border border-indigo-500/30">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                      Verified Pro
                    </span>
                  )}
                </div>
                <p className="flex items-center justify-center md:justify-start gap-2 mt-3 text-slate-400 font-semibold text-sm">
                  <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                  {tutor.location}
                </p>
              </div>
              <button onClick={onEnquire} className="hidden md:block w-full md:w-auto flex-shrink-0 px-8 py-5 bg-white text-slate-950 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-indigo-400 hover:text-white transition-all active:scale-95 shadow-2xl">Book a Demo</button>
            </div>

            {/* --- Stats Bar --- */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center border-y border-white/10 py-6 mb-12">
              {[
                { label: 'Experience', value: `${tutor.experience}+ yrs`, icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /> },
                { label: 'Rating', value: tutor.rating, icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /> },
                { label: 'Rate', value: `₹${tutor.hourlyRate}/hr`, icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 8h6m-5 4h5m2 5H8a2 2 0 01-2-2V5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 01-2 2H8z" /> },
                { label: 'Role', value: tutor.role === UserRole.COACHING_CENTER ? 'Institute' : 'Tutor', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /> }
              ].map(stat => (
                <div key={stat.label} className="flex flex-col items-center gap-2">
                  <svg className="w-6 h-6 text-indigo-400 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">{stat.icon}</svg>
                  <span className="text-xl md:text-2xl font-black text-white">{stat.value}</span>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* --- Main Grid --- */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-12">
                <section>
                  <h2 className="text-xl font-black text-white uppercase tracking-wider mb-4">About {tutor.name.split(' ')[0]}</h2>
                  <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium">{tutor.bio}</p>
                </section>

                <section>
                  <h2 className="text-xl font-black text-white uppercase tracking-wider mb-6">Professional Expertise</h2>
                  <div className="grid md:grid-cols-2 gap-8 bg-slate-900/40 p-6 rounded-3xl border border-white/5">
                    <div>
                      <h3 className="font-bold text-slate-300 mb-4 text-sm uppercase tracking-widest">Specializations</h3>
                      <div className="flex flex-wrap gap-2">
                        {tutor.subjects.map(subject => (
                          <div key={subject} className="px-3 py-1.5 bg-indigo-500/10 text-indigo-300 rounded-lg text-xs font-bold border border-indigo-500/20">{subject}</div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-300 mb-4 text-sm uppercase tracking-widest">Credentials</h3>
                      <ul className="space-y-2">
                        {tutor.qualifications.map((qual, index) => (
                          <li key={index} className="flex items-center gap-2 text-slate-300 font-medium text-sm">
                            <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                            {qual}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-black text-white uppercase tracking-wider mb-4">Student Feedback</h2>
                  <div className="glass p-6 rounded-2xl border border-white/5">
                    <div className="flex items-center gap-2 mb-2">
                      {[1,2,3,4,5].map(s => <svg key={s} className={`w-4 h-4 ${s <= Math.floor(tutor.rating) ? 'text-amber-400' : 'text-slate-600'}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
                    </div>
                    <p className="text-slate-300 italic font-medium">"Extremely patient with JEE Physics concepts. Highly recommended for board prep as well!"</p>
                    <p className="text-right text-xs text-slate-500 font-bold mt-3">- Rohan, Class XII Student</p>
                  </div>
                </section>

              </div>

              {/* Sticky Enquiry Card (Desktop) */}
              <aside className="hidden lg:block">
                <div className="sticky top-24 space-y-6 glass p-6 rounded-3xl border border-white/5">
                  <div className="text-center">
                    <p className="text-sm font-bold text-slate-400">Standard Rate</p>
                    <p className="text-4xl font-black text-white">₹{tutor.hourlyRate}<span className="text-lg font-medium text-slate-400">/hr</span></p>
                  </div>
                  <ul className="text-sm space-y-3 text-slate-300 font-medium">
                      <li className="flex items-center gap-3"><svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Verified Professional</li>
                      <li className="flex items-center gap-3"><svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Online & Home Classes</li>
                      <li className="flex items-center gap-3"><svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Quick Responder</li>
                  </ul>
                  <button onClick={onEnquire} className="w-full py-4 bg-white text-slate-950 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-indigo-400 hover:text-white transition-all active:scale-95 shadow-lg">Send Enquiry</button>
                  <p className="text-center text-xs text-slate-500 font-semibold">Your details are only shared with {tutor.name.split(' ')[0]}.</p>
                </div>
              </aside>

            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button (Mobile) */}
      <div className="md:hidden fixed bottom-24 left-0 right-0 z-50 px-6">
         <button onClick={onEnquire} className="w-full py-5 bg-white text-slate-950 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-indigo-400 hover:text-white transition-all active:scale-95 shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-500">
           Book a Demo (₹{tutor.hourlyRate}/hr)
         </button>
      </div>

    </div>
  );
};

export default TutorDetails;
