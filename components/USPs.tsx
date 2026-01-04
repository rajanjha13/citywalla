
import React from 'react';

const USPs: React.FC = () => {
  const features = [
    {
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />,
      title: "Privacy First",
      description: "Your data is sacred. We only share your contact details with the specific partner you choose to enquire with, and never with anyone else."
    },
    {
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />,
      title: "No Spam. Ever.",
      description: "Tired of endless calls and messages? So are we. Our strict policy ensures you will never receive unsolicited communication."
    },
    {
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11" />,
      title: "100% Ad-Free",
      description: "Your search for the perfect tutor or PG should be clean and focused. We provide a premium, ad-free experience for all users."
    }
  ];

  return (
    <div className="py-24 md:py-36">
      <div className="container mx-auto px-8">
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <div className="text-indigo-500 font-black text-xs uppercase tracking-[0.5em] mb-4">Our Promise</div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">A Platform Built On Trust.</h2>
          <p className="text-slate-400 text-lg md:text-xl font-medium mt-6">
            We're revolutionizing the search experience by putting you first. No ads, no spam, and absolute respect for your privacy.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title} 
              className="p-10 glass rounded-[32px] border border-white/5 animate-in fade-in slide-in-from-bottom-8 duration-700"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 bg-indigo-600/10 text-indigo-400 rounded-2xl flex items-center justify-center mb-8 border border-indigo-500/20">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">{feature.icon}</svg>
              </div>
              <h3 className="text-2xl font-black text-white mb-4">{feature.title}</h3>
              <p className="text-slate-400 font-medium leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default USPs;
