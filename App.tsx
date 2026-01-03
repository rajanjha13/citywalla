
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import BottomNav from './components/BottomNav';
import Hero from './components/Hero';
import MapView from './components/MapView';
import TutorList from './components/TutorList';
import PGList from './components/PGList';
import PGDetails from './components/PGDetails';
import TutorDetails from './components/TutorDetails';
import EnquiryModal from './components/EnquiryModal';
import PGEnquiryModal from './components/PGEnquiryModal';
import RegistrationForm from './components/RegistrationForm';
import AdminDashboard from './components/AdminDashboard';
import FilterBar from './components/FilterBar';
import LoginModal from './components/LoginModal';
import Footer from './components/Footer';
import { Tutor, Enquiry, PG } from './types';
import { MOCK_TUTORS, MOCK_PGS } from './constants';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'find' | 'pgs' | 'register' | 'admin' | 'pg-details' | 'tutor-details'>('home');
  const [selectedTutor, setSelectedTutor] = useState<Tutor | null>(null);
  const [selectedPG, setSelectedPG] = useState<PG | null>(null);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [isPGEnquiryOpen, setIsPGEnquiryOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSubject, setActiveSubject] = useState('');
  
  const [isAdminAuth, setIsAdminAuth] = useState(false);
  const [userRole, setUserRole] = useState<'customer' | 'partner' | 'admin' | null>(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const [tutors, setTutors] = useState<Tutor[]>(MOCK_TUTORS.map(t => ({ ...t, status: 'approved' })));
  const [pgs, setPgs] = useState<PG[]>(MOCK_PGS.map(p => ({ ...p, status: 'approved' })));
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const handleEnquiry = (tutor: Tutor) => {
    setSelectedTutor(tutor);
    setIsEnquiryOpen(true);
  };

  const handleViewTutorDetails = (tutor: Tutor) => {
    setSelectedTutor(tutor);
    setActiveTab('tutor-details');
  };

  const handleViewPGDetails = (pg: PG) => {
    setSelectedPG(pg);
    setActiveTab('pg-details');
  };

  const handlePGEnquiry = (pg: PG) => {
    setSelectedPG(pg);
    setIsPGEnquiryOpen(true);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setActiveTab('find');
  };

  const addEnquiry = (enquiry: Enquiry) => {
    setEnquiries(prev => [enquiry, ...prev]);
  };

  const approveTutor = (id: string) => {
    setTutors(prev => prev.map(t => t.id === id ? { ...t, status: 'approved' } : t));
  };

  const deleteTutor = (id: string) => {
    setTutors(prev => prev.filter(t => t.id !== id));
  };

  const handleLoginSuccess = (success: boolean, role: 'customer' | 'partner' | 'admin') => {
    if (success) {
      setUserRole(role);
      setIsLoginModalOpen(false);
      if (role === 'admin') {
        setIsAdminAuth(true);
        setActiveTab('admin');
      } else {
        setActiveTab('home');
      }
    }
  };

  const filteredTutors = tutors.filter(t => {
    const matchesStatus = t.status === 'approved';
    const matchesSearch = t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         t.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSubject = activeSubject === '' || t.subjects.includes(activeSubject);
    return matchesStatus && matchesSearch && matchesSubject;
  });

  const filteredPGs = pgs.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         p.city.toLowerCase().includes(searchQuery.toLowerCase());
    return p.status === 'approved' && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col pb-32 md:pb-0">
      <Navbar 
        activeTab={activeTab === 'pg-details' ? 'pgs' : activeTab === 'tutor-details' ? 'find' : activeTab} 
        setActiveTab={(tab) => tab === 'admin' ? setIsLoginModalOpen(true) : setActiveTab(tab)} 
      />

      <main className="flex-grow">
        {activeTab === 'home' && (
          <div className="animate-in fade-in duration-700">
            <Hero onSearch={handleSearch} />
            
            <div className="container mx-auto px-8 -mt-20 md:-mt-24 relative z-20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {[
                  { title: 'Home Tutors', desc: '1-on-1 personalized academic coaching.', icon: 'M12 14l9-5-9-5-9 5 9 5z', color: 'from-indigo-600 to-blue-500', tab: 'find' },
                  { title: 'Coaching Classes', desc: 'Join premium institutes and group learning.', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4', color: 'from-pink-600 to-rose-500', tab: 'find' },
                  { title: "PG's", desc: 'Find safe, verified student accommodations.', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', color: 'from-emerald-600 to-teal-500', tab: 'pgs' },
                  { title: 'Register', desc: 'Grow your presence as a network partner.', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z', color: 'from-amber-500 to-orange-400', tab: 'register' }
                ].map((cat, idx) => (
                  <div 
                    key={cat.title}
                    onClick={() => setActiveTab(cat.tab as any)}
                    className="category-card p-8 md:p-10 rounded-[32px] cursor-pointer group animate-in fade-in slide-in-from-bottom-6 duration-500 shadow-xl"
                    style={{ animationDelay: `${idx * 150}ms` }}
                  >
                    <div className={`icon-box w-14 h-14 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-white mb-6 shadow-xl group-hover:scale-110 transition-all`}>
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={cat.icon} /></svg>
                    </div>
                    <h3 className="text-xl md:text-2xl font-black text-white mb-2.5 tracking-tight group-hover:text-indigo-400 transition-colors">{cat.title}</h3>
                    <p className="text-slate-400 text-sm md:text-base font-medium leading-relaxed">{cat.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="container mx-auto px-8 pt-24 md:pt-36">
              <div className="mb-12 text-center max-w-3xl mx-auto">
                <div className="text-indigo-500 font-black text-xs uppercase tracking-[0.5em] mb-4">Discovery Network</div>
                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">Explore Local Listings.</h2>
              </div>
              <MapView />
            </div>

            <div className="py-24 md:py-36">
              <div className="container mx-auto px-8">
                <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
                  <div className="max-w-3xl">
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight">Expert Faculty.</h2>
                    <p className="text-slate-400 text-lg md:text-xl font-medium mt-4">Verified home tutors and coaching institutes near you.</p>
                  </div>
                  <button onClick={() => setActiveTab('find')} className="px-10 py-5 glass border-white/10 rounded-2xl text-white font-black text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-xl whitespace-nowrap">View All Experts</button>
                </div>
                <TutorList tutors={filteredTutors.slice(0, 3)} onEnquiry={handleViewTutorDetails} />
              </div>
            </div>

            <div className="py-24 md:py-36 pb-48">
              <div className="container mx-auto px-8">
                <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
                  <div className="max-w-3xl">
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight">Premium Living.</h2>
                    <p className="text-slate-400 text-lg md:text-xl font-medium mt-4">Secure, verified accommodations for students.</p>
                  </div>
                  <button onClick={() => setActiveTab('pgs')} className="px-10 py-5 glass border-white/10 rounded-2xl text-white font-black text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-xl whitespace-nowrap">Explore PG's</button>
                </div>
                <PGList pgs={filteredPGs.slice(0, 3)} onEnquiry={handleViewPGDetails} />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'register' && (
          <div className="container mx-auto px-8 py-24 flex flex-col items-center">
            <div className="w-full max-w-3xl bg-[#0a0f1d] p-12 md:p-16 rounded-[48px] border border-white/5 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/10 blur-[100px] rounded-full"></div>
              <div className="flex justify-center mb-12 p-1.5 glass-dark rounded-2xl w-fit mx-auto relative z-10">
                <button className="px-12 py-4 rounded-xl bg-indigo-600 text-white font-black text-xs uppercase tracking-widest shadow-xl">Register</button>
                <button 
                  onClick={() => setIsLoginModalOpen(true)}
                  className="px-12 py-4 rounded-xl text-slate-400 font-black text-xs uppercase tracking-widest hover:text-white transition-all"
                >
                  Login
                </button>
              </div>
              <RegistrationForm onComplete={() => setActiveTab('home')} />
            </div>
          </div>
        )}

        {activeTab === 'find' && (
          <div className="container mx-auto px-8 py-20 animate-in fade-in duration-700">
             <div className="mb-12">
               <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4">Expert Faculty</h1>
               <p className="text-slate-500 text-lg md:text-xl font-medium">Browse verified educators and coaching centers.</p>
             </div>
            <FilterBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} activeSubject={activeSubject} setActiveSubject={setActiveSubject} />
            <div className="mt-12">
              <TutorList tutors={filteredTutors} onEnquiry={handleViewTutorDetails} />
            </div>
          </div>
        )}

        {activeTab === 'pgs' && (
          <div className="container mx-auto px-8 py-20 animate-in fade-in duration-700">
            <div className="mb-12">
               <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4">PG Accommodations</h1>
               <p className="text-slate-500 text-lg md:text-xl font-medium">Safe and verified urban living for students.</p>
             </div>
            <PGList pgs={filteredPGs} onEnquiry={handleViewPGDetails} />
          </div>
        )}

        {activeTab === 'tutor-details' && selectedTutor && (
          <TutorDetails tutor={selectedTutor} onBack={() => setActiveTab('find')} onEnquire={() => handleEnquiry(selectedTutor)} />
        )}

        {activeTab === 'pg-details' && selectedPG && (
          <PGDetails pg={selectedPG} onBack={() => setActiveTab('pgs')} onEnquire={() => handlePGEnquiry(selectedPG)} />
        )}

        {activeTab === 'admin' && isAdminAuth && (
          <AdminDashboard enquiries={enquiries} tutors={tutors} onApprove={approveTutor} onDelete={deleteTutor} />
        )}
      </main>

      <div className="hidden md:block">
        <Footer />
      </div>

      <BottomNav 
        activeTab={activeTab === 'pg-details' ? 'pgs' : activeTab === 'tutor-details' ? 'find' : activeTab} 
        setActiveTab={(tab) => tab === 'admin' ? setIsLoginModalOpen(true) : setActiveTab(tab)} 
      />
      
      {isLoginModalOpen && (
        <LoginModal 
          onLogin={handleLoginSuccess} 
          onClose={() => setIsLoginModalOpen(false)} 
        />
      )}
      
      {isEnquiryOpen && selectedTutor && (
        <EnquiryModal tutor={selectedTutor} onClose={() => setIsEnquiryOpen(false)} onSubmitEnquiry={addEnquiry} />
      )}
      
      {isPGEnquiryOpen && selectedPG && (
        <PGEnquiryModal pg={selectedPG} onClose={() => setIsPGEnquiryOpen(false)} onSubmitEnquiry={addEnquiry} />
      )}
    </div>
  );
};

export default App;
