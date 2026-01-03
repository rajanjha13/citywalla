
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
      desc: 'Access your dashboard to track inquiries and bookings.',
      idLabel: 'Email or Phone Number',
      idPlaceholder: 'your@email.com',
      buttonText: 'Sign In'
    },
    partner: {
      title: 'Partner Portal',
      desc: 'Manage your listings, leads, and business profile.',
      idLabel: 'Partner ID or Email',
      idPlaceholder: 'Your Partner ID',
      buttonText: 'Enter Portal'
    },
    admin: {
      title: 'Admin Access',
      desc: 'Platform governance, analytics, and user management.',
      idLabel: 'System User ID',
      idPlaceholder: 'Administrator ID',
      buttonText: 'Access Dashboard'
    }
  };

  const current = roleConfig[role];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-lg animate-in fade-in duration-300">
      <div className="w-full max-w-4xl h-auto md:h-[700px] bg-white rounded-[40px] shadow-2xl flex flex-col md:flex-row overflow-hidden animate-in zoom-in-95 duration-500">
        
        {/* Left Branding Panel */}
        <div className="hidden md:flex flex-col justify-between w-2/5 bg-slate-900 p-12 text-white relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-60 h-60 bg-indigo-600/20 rounded-full blur-3xl"></div>
          <div className="absolute -left-20 -bottom-20 w-60 h-60 bg-pink-600/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 cursor-pointer group">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-indigo-500/40">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L1 12h3v9h6v-6h4v6h6v-9h3L12 2z" /></svg>
              </div>
              <span className="text-2xl font-black tracking-tighter text-white uppercase">CITYWALA</span>
            </div>
          </div>

          <div className="relative z-10 space-y-4">
            <h2 className="text-4xl font-black tracking-tighter leading-tight">Unlock Your City's Potential.</h2>
            <p className="text-slate-400 font-medium leading-relaxed">Join a curated network of the best educational and living spaces your city has to offer.</p>
          </div>

          <div className="relative z-10 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            © 2024 CityWala Platform
          </div>
        </div>

        {/* Right Form Panel */}
        <div className="flex-1 p-8 md:p-16 flex flex-col justify-center relative">
          <button 
            onClick={onClose}
            className="absolute top-8 right-8 text-slate-300 hover:text-slate-900 transition-colors active:scale-90"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>

          <div className="w-full max-w-md mx-auto">
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">{current.title}</h2>
              <p className="text-slate-500 text-lg font-medium mt-2">{current.desc}</p>
            </div>
            
            <div className="flex p-1.5 bg-slate-100 rounded-2xl mb-8">
              {(['customer', 'partner', 'admin'] as LoginRole[]).map((r) => (
                <button
                  key={r}
                  onClick={() => { setRole(r); setError(''); }}
                  className={`flex-1 py-3 px-1 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all duration-300 ${
                    role === r ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-indigo-600'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-3 ml-2">{current.idLabel}</label>
                <input 
                  type="text" 
                  className="w-full px-6 py-5 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-600 outline-none transition-all text-xl font-bold text-slate-800 placeholder:text-slate-300"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  placeholder={current.idPlaceholder}
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-3 ml-2">Password</label>
                <input 
                  type="password" 
                  className="w-full px-6 py-5 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-600 outline-none transition-all text-xl font-bold text-slate-800 placeholder:text-slate-300"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                />
              </div>

              {error && (
                <div className="p-3 bg-red-50 text-red-600 rounded-lg text-center font-bold text-sm">
                  {error}
                </div>
              )}

              <div className="pt-4">
                <button 
                  type="submit" 
                  className="w-full py-6 text-white bg-indigo-600 rounded-2xl font-black text-base uppercase tracking-widest shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all active:scale-95"
                >
                  {current.buttonText}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
