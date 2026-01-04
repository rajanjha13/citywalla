
import React, { useState } from 'react';
import { Tutor, Enquiry } from '../types';

interface EnquiryModalProps {
  tutor: Tutor;
  onClose: () => void;
  onSubmitEnquiry: (enquiry: Enquiry) => void;
}

const EnquiryModal: React.FC<EnquiryModalProps> = ({ tutor, onClose, onSubmitEnquiry }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: tutor.subjects[0] || '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create enquiry object
    const enquiry: Enquiry = {
      id: Math.random().toString(36).substr(2, 9),
      studentName: formData.name,
      studentEmail: formData.email,
      studentPhone: formData.phone,
      subject: formData.subject,
      tutorId: tutor.id,
      tutorName: tutor.name,
      message: formData.message,
      timestamp: new Date().toISOString(),
      // Fix: Added missing 'type' property required by the Enquiry interface
      type: 'tutor'
    };

    // Simulate API call and update global state
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
              <h2 className="text-2xl font-bold text-slate-800 mb-2">Enquiry Sent!</h2>
              <p className="text-slate-500">We've shared your interest with <strong>{tutor.name}</strong>. They will contact you shortly.</p>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-4 mb-8">
                <img src={tutor.imageUrl} alt="" className="w-16 h-16 rounded-xl object-cover" />
                <div>
                  <h2 className="text-2xl font-bold text-slate-800">Enquire for Classes</h2>
                  <p className="text-slate-500 text-sm">Learning from <span className="text-indigo-600 font-semibold">{tutor.name}</span></p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Your Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition"
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Email Address</label>
                  <input 
                    required
                    type="email" 
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Subject of Interest</label>
                  <select 
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition appearance-none"
                    value={formData.subject}
                    onChange={e => setFormData({...formData, subject: e.target.value})}
                  >
                    {tutor.subjects.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Additional Message (Optional)</label>
                  <textarea 
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition min-h-[100px]"
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us more about your learning needs..."
                  ></textarea>
                </div>

                <div className="flex items-start gap-3 pt-2 p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <svg className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                    <strong>Your Privacy Matters:</strong> We'll only share your details with <span className="text-indigo-600">{tutor.name}</span> for this enquiry. No spam, guaranteed.
                  </p>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold text-lg shadow-lg hover:bg-indigo-700 transition transform active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" viewBox="0 0 24 24"></svg>
                      Sending Enquiry...
                    </>
                  ) : 'Submit Enquiry'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnquiryModal;
