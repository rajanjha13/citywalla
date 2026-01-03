
import React, { useState } from 'react';
import { PG, Enquiry } from '../types';

interface PGEnquiryModalProps {
  pg: PG;
  onClose: () => void;
  onSubmitEnquiry: (enquiry: Enquiry) => void;
}

const PGEnquiryModal: React.FC<PGEnquiryModalProps> = ({ pg, onClose, onSubmitEnquiry }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const enquiry: Enquiry = {
      id: Math.random().toString(36).substr(2, 9),
      studentName: formData.name,
      studentEmail: formData.email,
      studentPhone: formData.phone,
      pgId: pg.id,
      pgName: pg.name,
      message: formData.message,
      timestamp: new Date().toISOString(),
      type: 'pg'
    };

    setTimeout(() => {
      onSubmitEnquiry(enquiry);
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => onClose(), 2000);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-200">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 transition"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        <div className="p-8">
          {isSuccess ? (
            <div className="text-center py-10">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-800 mb-2">Request Sent!</h2>
              <p className="text-slate-500">The owner of <strong>{pg.name}</strong> will contact you about availability.</p>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl overflow-hidden bg-slate-100">
                   <img src={pg.imageUrl} alt="" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-800">Interested in this PG?</h2>
                  <p className="text-slate-500 text-sm">Enquiry for <span className="text-indigo-600 font-semibold">{pg.name}</span></p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 ml-1">Your Name</label>
                    <input required type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none transition" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="Full Name" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 ml-1">Phone</label>
                    <input required type="tel" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none transition" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} placeholder="+1 (555) 000-0000" />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 ml-1">Email</label>
                  <input required type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none transition" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} placeholder="hello@student.com" />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 ml-1">Notes (Optional)</label>
                  <textarea className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none transition min-h-[100px]" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} placeholder="When do you plan to move in? Any questions?"></textarea>
                </div>

                <button type="submit" disabled={isSubmitting} className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg shadow-lg hover:bg-indigo-700 transition active:scale-95 disabled:opacity-50">
                  {isSubmitting ? 'Processing...' : 'Send Enquiry'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PGEnquiryModal;
