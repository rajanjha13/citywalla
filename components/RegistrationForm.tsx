
import React, { useState } from 'react';
import { UserRole, Tutor } from '../types';
import { SUBJECT_OPTIONS } from '../constants';

interface RegistrationFormProps {
  onComplete: (data: Partial<Tutor>) => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onComplete }) => {
  const [role, setRole] = useState<UserRole>(UserRole.TUTOR);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    bio: '',
    subjects: [] as string[],
    experience: 0,
    hourlyRate: 500,
    location: ''
  });

  const toggleSubject = (subject: string) => {
    setFormData(prev => ({
      ...prev,
      subjects: prev.subjects.includes(subject) 
        ? prev.subjects.filter(s => s !== subject)
        : [...prev.subjects, subject]
    }));
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleFinish = () => {
    onComplete({
      name: formData.name,
      role: role,
      subjects: formData.subjects,
      experience: formData.experience,
      bio: formData.bio,
      location: formData.location,
      hourlyRate: formData.hourlyRate
    });
  };

  const partnerTypes = [
    { id: UserRole.TUTOR, label: 'Home Tutor', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
    { id: UserRole.COACHING_CENTER, label: 'Coaching Class', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
    { id: UserRole.STUDENT, label: 'Private Tutors', icon: 'M12 14l9-5-9-5-9 5 9 5z' }, 
    { id: UserRole.PG_OWNER, label: "PG's", icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' }
  ];

  return (
    <div className="space-y-12">
      <div className="flex justify-between mb-12 relative">
        <div className="absolute top-1/2 left-0 w-full h-1.5 bg-white/5 -translate-y-1/2 -z-10 rounded-full"></div>
        <div className={`absolute top-1/2 left-0 h-1.5 bg-indigo-600 -translate-y-1/2 -z-10 transition-all duration-300 rounded-full`} style={{ width: `${(step - 1) * 50}%` }}></div>
        {[1, 2, 3].map(s => (
          <div 
            key={s} 
            className={`w-14 h-14 rounded-full flex items-center justify-center font-black text-lg transition ${
              step >= s ? 'bg-indigo-600 text-white shadow-xl' : 'bg-slate-800 text-slate-500'
            }`}
          >
            {s}
          </div>
        ))}
      </div>

      {step === 1 && (
        <div className="space-y-10 animate-in slide-in-from-right-12 duration-300">
          <div className="flex flex-col gap-6">
            <label className="text-sm font-black text-indigo-400 uppercase tracking-[0.4em]">Partner Category</label>
            <div className="grid grid-cols-2 gap-6">
              {partnerTypes.map(type => (
                <button 
                  key={type.label}
                  onClick={() => setRole(type.id)}
                  className={`p-8 rounded-[32px] border-2 transition flex flex-col items-center text-center gap-4 ${
                    role === type.id ? 'border-indigo-600 bg-indigo-600/10 text-white shadow-xl' : 'border-white/5 bg-white/5 text-slate-400 hover:border-white/20'
                  }`}
                >
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={type.icon}></path></svg>
                  <span className="font-bold text-lg md:text-xl">{type.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-3 ml-1">Legal Registration Name</label>
              <input 
                type="text" 
                className="w-full px-8 py-6 bg-white/5 border-2 border-white/10 rounded-[24px] focus:ring-4 focus:ring-indigo-500/10 outline-none text-white font-bold text-lg md:text-xl"
                placeholder="Full Name or Business"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-3 ml-1">Official Email</label>
              <input 
                type="email" 
                className="w-full px-8 py-6 bg-white/5 border-2 border-white/10 rounded-[24px] focus:ring-4 focus:ring-indigo-500/10 outline-none text-white font-bold text-lg md:text-xl"
                placeholder="email@example.com"
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>

          <button 
            onClick={nextStep}
            disabled={!formData.name || !formData.email}
            className="w-full py-7 bg-white text-slate-950 rounded-[24px] font-black text-sm md:text-base uppercase tracking-widest hover:bg-indigo-600 hover:text-white transition-all disabled:opacity-30 shadow-xl active:scale-95"
          >
            Continue
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-10 animate-in slide-in-from-right-12 duration-300">
          <div className="flex flex-col gap-6">
            <label className="text-sm font-black text-indigo-400 uppercase tracking-[0.4em]">Expertise</label>
            <div className="flex flex-wrap gap-3">
              {SUBJECT_OPTIONS.map(subject => (
                <button
                  key={subject}
                  onClick={() => toggleSubject(subject)}
                  className={`px-6 py-4 rounded-2xl text-sm font-black uppercase tracking-widest border-2 transition ${
                    formData.subjects.includes(subject) 
                      ? 'bg-indigo-600 text-white border-indigo-600' 
                      : 'bg-white/5 text-slate-400 border-white/5 hover:border-white/10'
                  }`}
                >
                  {subject}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-3 ml-1">Professional Pitch</label>
            <textarea 
              className="w-full px-8 py-6 bg-white/5 border-2 border-white/10 rounded-[24px] focus:ring-4 focus:ring-indigo-500/10 outline-none text-white font-bold text-base md:text-lg min-h-[160px]"
              placeholder="Tell us about your coaching/teaching style..."
              value={formData.bio}
              onChange={e => setFormData({...formData, bio: e.target.value})}
            ></textarea>
          </div>

          <div className="flex gap-6">
            <button onClick={prevStep} className="flex-1 py-6 glass border-white/10 text-white rounded-[24px] font-black text-xs uppercase hover:bg-white/10 transition">Back</button>
            <button onClick={nextStep} disabled={formData.subjects.length === 0 || !formData.bio} className="flex-1 py-6 bg-white text-slate-950 rounded-[24px] font-black text-xs uppercase shadow-xl disabled:opacity-30">Next</button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-10 animate-in slide-in-from-right-12 duration-300">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-3 ml-1">Rate (₹ / hr or mo)</label>
              <input type="number" className="w-full px-8 py-6 bg-white/5 border-2 border-white/10 rounded-[24px] focus:ring-4 focus:ring-indigo-500/10 text-white font-bold text-lg" value={formData.hourlyRate} onChange={e => setFormData({...formData, hourlyRate: parseInt(e.target.value)})} />
            </div>
            <div>
              <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-3 ml-1">Exp (Yrs)</label>
              <input type="number" className="w-full px-8 py-6 bg-white/5 border-2 border-white/10 rounded-[24px] focus:ring-4 focus:ring-indigo-500/10 text-white font-bold text-lg" value={formData.experience} onChange={e => setFormData({...formData, experience: parseInt(e.target.value)})} />
            </div>
          </div>

          <div>
            <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-3 ml-1">Operating City</label>
            <input type="text" className="w-full px-8 py-6 bg-white/5 border-2 border-white/10 rounded-[24px] focus:ring-4 focus:ring-indigo-500/10 text-white font-bold text-lg" placeholder="e.g. Pune, Bangalore" value={formData.location} onChange={e => setFormData({...formData, location: e.target.value})} />
          </div>

          <div className="flex gap-6">
            <button onClick={prevStep} className="flex-1 py-6 glass border-white/10 text-white rounded-[24px] font-black text-xs uppercase hover:bg-white/10 transition">Back</button>
            <button onClick={handleFinish} disabled={!formData.location} className="flex-1 py-6 bg-indigo-600 text-white rounded-[24px] font-black text-xs uppercase shadow-xl disabled:opacity-30">Finish</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;
