
import React, { useState } from 'react';

type LoginRole = 'customer' | 'partner' | 'admin';

interface LoginModalProps {
  onLogin: (success: boolean, role: LoginRole) => void;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ onLogin, onClose }) => {
  const [role, setRole] = useState<LoginRole>('customer');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // WARNING: This is a client-side authentication check for demonstration purposes only.
    // In a real-world application, never store or check passwords on the client-side.
    // Use a secure backend authentication service (e.g., via a Netlify Function)
    // that validates credentials against environment variables or a database.
    if (role === 'admin') {
      if (userId === 'admin' && password === 'adminpass') {
        onLogin(true, 'admin');
      } else {
        setError('Invalid Admin Credentials.');
      }
    } else {
      if (userId && password) {
        onLogin(true, role);
      } else {
        setError('Please fill in all fields.');
      }
    }
  };

  const roleConfig = {
    customer: {
      title: 'Customer Login',
      desc: 'Track your tutor inquiries and PG bookings.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      idLabel: 'Email / Phone',
      idPlaceholder: 'your@email.com'
    },
    partner: {
      title: 'Partner Portal',
      desc: 'Manage your classes, tutors, and leads.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      idLabel: 'Partner ID / Email',
      idPlaceholder: 'Partner ID'
    },
    admin: {
      title: 'Admin Access',
      desc: 'Platform governance and analytics.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      idLabel: 'System User ID',
      idPlaceholder: 'Admin ID'
    }
  };

  const current = roleConfig[role];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-950/90 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="bg-white rounded-[40px] w-full max-w-xl p-10 md:p-14 shadow-2xl border border-slate-100 relative overflow-hidden animate-in zoom-in-95 duration-300">
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 text-slate-300 hover:text-slate-900 transition-colors active:scale-90"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex justify-center mb-10">
          <div className="flex p-1.5 bg-slate-100 rounded-[24px] w-full max-w-md">
            {(['customer', 'partner', 'admin'] as LoginRole[]).map((r) => (
              <button
                key={r}
                onClick={() => { setRole(r); setError(''); }}
                className={`flex-1 py-3 px-1 rounded-[18px] font-black text-[10px] uppercase tracking-widest transition-all ${
                  role === r 
                  ? 'bg-indigo-600 text-white shadow-lg' 
                  : 'text-slate-500 hover:text-indigo-600'
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        <div className="text-center mb-10">
          <div className={`w-20 h-20 mx-auto mb-6 rounded-[28px] flex items-center justify-center text-white shadow-xl transition-all duration-500 ${
            role === 'admin' ? 'bg-slate-900' : 
            role === 'partner' ? 'bg-indigo-600' : 
            'bg-rose-500'
          }`}>
            {current.icon}
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter mb-2">{current.title}</h2>
          <p className="text-slate-500 text-base md:text-lg font-medium max-w-sm mx-auto leading-relaxed">{current.desc}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3 ml-2">{current.idLabel}</label>
            <input 
              type="text" 
              className="w-full px-8 py-5 bg-slate-50 border-2 border-slate-100 rounded-[24px] focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-600 outline-none transition-all text-lg md:text-xl font-bold text-slate-800 placeholder:text-slate-300"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder={current.idPlaceholder}
              required
            />
          </div>
          <div>
            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3 ml-2">Access Password</label>
            <input 
              type="password" 
              className="w-full px-8 py-5 bg-slate-50 border-2 border-slate-100 rounded-[24px] focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-600 outline-none transition-all text-lg md:text-xl font-bold text-slate-800 placeholder:text-slate-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>

          {error && (
            <div className="p-3 bg-red-50 text-red-600 rounded-[16px] text-center font-bold text-xs animate-bounce">
              {error}
            </div>
          )}

          <div className="pt-4">
            <button 
              type="submit" 
              className={`w-full py-6 text-white rounded-[24px] font-black text-sm md:text-base uppercase tracking-widest shadow-xl transition-all active:scale-95 ${
                role === 'admin' ? 'bg-slate-900 hover:bg-black' : 
                role === 'partner' ? 'bg-indigo-600 hover:bg-indigo-700' : 
                'bg-rose-500 hover:bg-rose-600'
              }`}
            >
              Secure Sign In
            </button>
            <div className="mt-6 text-center">
               <button 
                type="button" 
                onClick={onClose}
                className="text-slate-400 hover:text-slate-900 text-xs font-black uppercase tracking-widest transition-colors"
               >
                 Cancel
               </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;