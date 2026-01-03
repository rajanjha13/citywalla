
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t py-12 pb-32 md:pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">C</div>
              <span className="text-xl font-bold text-slate-800 uppercase tracking-tighter">CityWala</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Your premium urban companion for education and living. Discover the best tutors and spaces in your city today.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-800 mb-4 uppercase tracking-wider text-xs">Explore</h4>
            <ul className="space-y-2 text-slate-500 text-sm">
              <li><a href="#" className="hover:text-indigo-600 transition">Find Tutors</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition">PG Accommodations</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition">How Match Works</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition">City Guides</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-800 mb-4 uppercase tracking-wider text-xs">Partners</h4>
            <ul className="space-y-2 text-slate-500 text-sm">
              <li><a href="#" className="hover:text-indigo-600 transition">Join as Tutor</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition">List Your PG</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition">Business Admin</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition">Help Center</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-800 mb-4 uppercase tracking-wider text-xs">Get Updates</h4>
            <p className="text-slate-500 text-sm mb-4">The city's best opportunities, delivered weekly.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Your email" className="bg-white border px-4 py-2 rounded-lg text-sm w-full outline-none focus:ring-2 focus:ring-indigo-500" />
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">Join</button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <p>© 2024 CityWala Platform. Built for the urban lifestyle.</p>
          <div className="flex gap-6 font-bold uppercase tracking-widest text-[10px]">
            <a href="#" className="hover:text-indigo-600">Privacy</a>
            <a href="#" className="hover:text-indigo-600">Terms</a>
            <a href="#" className="hover:text-indigo-600">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
