
import React from 'react';

interface BottomNavProps {
  activeTab: string;
  setActiveTab: (tab: any) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /> },
    { id: 'find', label: 'Tutors', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /> },
    { id: 'pgs', label: 'PGs', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /> },
    { id: 'register', label: 'User', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /> },
  ];

  return (
    <div className="md:hidden fixed bottom-3 left-1/2 -translate-x-1/2 w-[90%] max-w-[360px] z-50">
      <nav className="glass bg-slate-900/95 rounded-[20px] shadow-2xl border border-white/10 overflow-hidden">
        <div className="flex justify-around items-center h-12 px-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`relative flex flex-col items-center justify-center flex-1 h-full transition-all duration-300 ${
                activeTab === item.id ? 'text-indigo-400' : 'text-slate-500'
              }`}
            >
              <svg
                className={`w-4 h-4 mb-0.5 transition-all duration-300 ${activeTab === item.id ? 'scale-110 drop-shadow-[0_0_5px_rgba(99,102,241,0.5)]' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {item.icon}
              </svg>
              <span className="text-[7px] font-black uppercase tracking-[0.1em]">{item.label}</span>
              {activeTab === item.id && (
                <div className="absolute top-1 w-0.5 h-0.5 bg-indigo-400 rounded-full"></div>
              )}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default BottomNav;
