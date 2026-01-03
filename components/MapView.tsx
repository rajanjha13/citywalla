
import React from 'react';

interface Listing {
  id: string;
  name: string;
  type: 'tutor' | 'pg';
  x: number;
  y: number;
}

const MapView: React.FC = () => {
  const listings: Listing[] = [
    { id: '1', name: 'Elite Math Academy', type: 'tutor', x: 25, y: 35 },
    { id: '2', name: 'Skyline PG', type: 'pg', x: 65, y: 45 },
    { id: '3', name: 'Physics Guru', type: 'tutor', x: 45, y: 75 },
    { id: '4', name: 'Safe Stay Brooklyn', type: 'pg', x: 80, y: 20 },
    { id: '5', name: 'Language Masters', type: 'tutor', x: 15, y: 85 },
  ];

  return (
    <div className="relative w-full aspect-video md:aspect-[21/9] glass-dark rounded-[40px] border border-white/5 overflow-hidden animate-in fade-in zoom-in-95 duration-1000">
      {/* Stylized Grid Map Background */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]"></div>
      
      {/* Decorative Map Lines */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <path d="M0 50 Q 250 100 500 50 T 1000 50" stroke="white" strokeWidth="2" fill="none" />
          <path d="M100 0 Q 150 250 100 500 T 100 1000" stroke="white" strokeWidth="2" fill="none" />
        </svg>
      </div>

      {/* Pulsing Markers */}
      {listings.map((item) => (
        <div 
          key={item.id} 
          className="absolute group cursor-pointer"
          style={{ left: `${item.x}%`, top: `${item.y}%` }}
        >
          {/* Pulse Ripple */}
          <div className={`absolute -inset-4 rounded-full animate-ping opacity-20 pointer-events-none ${
            item.type === 'pg' ? 'bg-rose-500' : 'bg-indigo-500'
          }`}></div>
          
          {/* Pin */}
          <div className={`relative w-4 h-4 rounded-full border-2 border-white shadow-xl flex items-center justify-center transition-all duration-300 group-hover:scale-150 ${
            item.type === 'pg' ? 'bg-rose-600' : 'bg-indigo-600'
          }`}>
             <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
          </div>

          {/* Tooltip on Hover */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all pointer-events-none min-w-[120px]">
            <div className="glass-dark px-3 py-1.5 rounded-xl border border-white/10 text-center">
              <div className="text-[8px] font-black uppercase text-indigo-400 tracking-widest">{item.type}</div>
              <div className="text-[10px] font-bold text-white whitespace-nowrap">{item.name}</div>
            </div>
          </div>
        </div>
      ))}

      {/* Legend */}
      <div className="absolute bottom-6 left-6 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Tutors Nearby</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-rose-500"></div>
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">PGs Nearby</span>
        </div>
      </div>

      <div className="absolute top-6 right-6 flex items-center gap-3">
        <div className="px-4 py-2 glass rounded-full text-[10px] font-black text-indigo-300 uppercase tracking-widest border border-white/5 animate-pulse">
          Live Listing Map
        </div>
      </div>
    </div>
  );
};

export default MapView;
