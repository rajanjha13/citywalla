
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="glass border-t border-white/5 mt-20">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Main Footer Content */}
        <div className="py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Branding & Newsletter */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-500/30">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L1 12h3v9h6v-6h4v6h6v-9h3L12 2z" /></svg>
                </div>
                <span className="text-2xl font-black text-white uppercase tracking-tighter">CityWala</span>
              </div>
              <p className="text-slate-400 text-base leading-relaxed mb-8">
                Your premium urban companion for education and living. Discover the best tutors and spaces in your city today.
              </p>
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="Your email for updates" 
                  className="w-full bg-white/5 text-white pl-5 pr-32 py-4 rounded-xl focus:outline-none focus:bg-white/10 font-bold transition-all placeholder:text-slate-500 border border-white/10 focus:border-indigo-500/50"
                />
                <button className="absolute top-1/2 right-2 -translate-y-1/2 bg-indigo-600 text-white px-5 py-2.5 rounded-lg font-black text-[10px] uppercase tracking-widest hover:bg-indigo-500 transition-all">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Links Grid */}
            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Explore</h4>
                <ul className="space-y-3 text-slate-400 text-sm font-medium">
                  <li><a href="#" className="hover:text-indigo-400 transition">Find Tutors</a></li>
                  <li><a href="#" className="hover:text-indigo-400 transition">PG Accommodations</a></li>
                  <li><a href="#" className="hover:text-indigo-400 transition">How Match Works</a></li>
                  <li><a href="#" className="hover:text-indigo-400 transition">City Guides</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Partners</h4>
                <ul className="space-y-3 text-slate-400 text-sm font-medium">
                  <li><a href="#" className="hover:text-indigo-400 transition">Join as Tutor</a></li>
                  <li><a href="#" className="hover:text-indigo-400 transition">List Your PG</a></li>
                  <li><a href="#" className="hover:text-indigo-400 transition">Business Admin</a></li>
                  <li><a href="#" className="hover:text-indigo-400 transition">Help Center</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Company</h4>
                <ul className="space-y-3 text-slate-400 text-sm font-medium">
                  <li><a href="#" className="hover:text-indigo-400 transition">About Us</a></li>
                  <li><a href="#" className="hover:text-indigo-400 transition">Careers</a></li>
                  <li><a href="#" className="hover:text-indigo-400 transition">Press Kit</a></li>
                  <li><a href="#" className="hover:text-indigo-400 transition">Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Connect</h4>
                <ul className="space-y-3 text-slate-400 text-sm font-medium">
                  <li><a href="#" className="hover:text-indigo-400 transition">Twitter / X</a></li>
                  <li><a href="#" className="hover:text-indigo-400 transition">Instagram</a></li>
                  <li><a href="#" className="hover:text-indigo-400 transition">LinkedIn</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Sub-Footer */}
        <div className="py-8 border-t border-white/5 flex flex-col-reverse md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-slate-500 font-medium">© 2024 CityWala. All Rights Reserved.</p>
          <div className="flex gap-6 font-bold uppercase tracking-widest text-[10px] text-slate-400">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Support</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
