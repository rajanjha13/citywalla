
import React, { useState, useEffect } from 'react';
import { GeminiService } from '../services/geminiService';
import { Tutor } from '../types';

interface HeroProps {
  onSearch: (query: string) => void;
  onAiMatch: (ids: string[]) => void;
  tutors: Tutor[];
}

const SERVICES = ['Home Tutors', 'Coaching Classes', 'Private Tutors', "PG's"];

const Hero: React.FC<HeroProps> = ({ onSearch, onAiMatch, tutors }) => {
  const [input, setInput] = useState('');
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [serviceIndex, setServiceIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentService = SERVICES[serviceIndex];
    const typingSpeed = isDeleting ? 40 : 80;
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentService.substring(0, displayText.length + 1));
        if (displayText.length === currentService.length) {
          setTimeout(() => setIsDeleting(true), 2500);
        }
      } else {
        setDisplayText(currentService.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setServiceIndex((prev) => (prev + 1) % SERVICES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, serviceIndex]);

  const handleAiMatch = async () => {
    if (!input.trim()) return;
    setIsAiLoading(true);
    const gemini = new GeminiService();
    const matchedIds = await gemini.getTutorMatches(input, tutors);
    onAiMatch(matchedIds);
    setIsAiLoading(false);
  };

  return (
    <div className="relative pt-16 pb-20 md:pt-32 md:pb-36 flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[500px] bg-indigo-600/10 blur-[130px] rounded-full -z-10 pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto space-y-8 md:space-y-10">
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass border border-white/10 animate-in fade-in slide-in-from-top-4 duration-700">
          <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></div>
          <span className="text-xs md:text-sm font-black uppercase tracking-[0.3em] text-indigo-300">CityWala Premium Network</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-heading font-black tracking-tighter leading-[0.85] text-white animate-in fade-in duration-1000">
          CITY<span className="text-gradient">WALA</span>
        </h1>

        <div className="min-h-[50px] md:min-h-[80px] flex items-center justify-center">
          <h2 className="text-2xl md:text-5xl font-black text-slate-400 tracking-tight leading-tight">
            Find <span className="text-white typing-container italic">{displayText}</span>
          </h2>
        </div>

        <p className="text-base md:text-xl text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed opacity-80">
          Connecting elite educators, coaching centers, and premium accommodations in one seamless platform.
        </p>

        <div className="max-w-4xl mx-auto mt-12 md:mt-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="relative group">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-[30px] blur opacity-25 group-hover:opacity-40 transition duration-700"></div>
            <div className="relative glass-dark p-3 rounded-[28px] flex flex-col md:flex-row gap-4 shadow-2xl">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                  <svg className="w-6 h-6 text-indigo-400/60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </div>
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Subject or coaching class..." 
                  className="w-full bg-white/5 text-white pl-16 pr-8 py-5 md:py-6 rounded-[22px] focus:outline-none focus:bg-white/10 font-bold transition-all placeholder:text-slate-600 text-lg md:text-xl border border-transparent focus:border-white/10"
                  onKeyDown={(e) => e.key === 'Enter' && handleAiMatch()}
                />
              </div>
              <button 
                onClick={handleAiMatch}
                disabled={isAiLoading}
                className="bg-indigo-600 text-white px-10 py-5 md:py-6 rounded-[22px] font-black text-sm md:text-base uppercase tracking-widest flex items-center justify-center gap-3 transition-all hover:bg-indigo-500 active:scale-95 disabled:opacity-70 group shadow-xl shadow-indigo-900/40"
              >
                {isAiLoading ? (
                  <svg className="animate-spin h-6 w-6 border-2 border-white/20 border-t-white rounded-full" viewBox="0 0 24 24"></svg>
                ) : (
                  <>
                    <span>Search</span>
                    <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
