
import React, { useState } from 'react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: any) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'find', label: 'Tutors' },
    { id: 'pgs', label: 'PGs' },
  ];

  const handleTabClick = (id: string) => {
    setActiveTab(id);
    setIsMenuOpen(false);
  };

  return (
    <nav className="glass bg-slate-950/60 sticky top-0 z-50 border-b border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center h-14 md:h-16">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => handleTabClick('home')}
          >
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-indigo-500/40 group-hover:rotate-6 transition-transform">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L1 12h3v9h6v-6h4v6h6v-9h3L12 2z" />
              </svg>
            </div>
            <span className="text-lg md:text-xl font-black tracking-tighter text-white uppercase flex items-center">
              CITY<span className="text-indigo-400 group-hover:text-indigo-300 transition-colors">WALA</span>
            </span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all relative py-1.5 ${
                  (activeTab === item.id || (activeTab === 'tutor-details' && item.id === 'find') || (activeTab === 'pg-details' && item.id === 'pgs')) 
                  ? 'text-indigo-400' : 'text-slate-400 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            <div className="h-4 w-px bg-white/10"></div>
            
            <button 
              onClick={() => handleTabClick('register')}
              className="flex items-center gap-2 px-5 py-2 rounded-lg bg-indigo-600 text-white font-black text-[10px] uppercase tracking-widest hover:bg-indigo-500 transition-all active:scale-95 shadow-lg shadow-indigo-900/20"
            >
              Account
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 glass rounded-lg text-white active:scale-90 transition-all"
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass bg-slate-950 border-b border-white/10 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col p-4 gap-2">
            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`text-xs font-black uppercase tracking-[0.2em] text-left p-3 rounded-lg ${
                  activeTab === item.id ? 'bg-indigo-600/10 text-indigo-400' : 'text-slate-400 hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => handleTabClick('register')}
              className="text-xs font-black uppercase tracking-[0.2em] text-left p-3 rounded-lg bg-indigo-600 text-white mt-2 flex justify-between items-center"
            >
              My Account
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
