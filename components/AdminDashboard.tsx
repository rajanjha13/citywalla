
import React, { useState } from 'react';
import { Enquiry, Tutor, UserRole } from '../types';

interface AdminDashboardProps {
  enquiries: Enquiry[];
  tutors: Tutor[];
  onApprove: (id: string) => void;
  onDelete: (id: string) => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ enquiries, tutors, onApprove, onDelete }) => {
  const [activeSubTab, setActiveSubTab] = useState<'enquiries' | 'partners'>('enquiries');

  const pendingPartners = tutors.filter(t => t.status === 'pending');
  const approvedPartners = tutors.filter(t => t.status === 'approved');

  return (
    <div className="bg-slate-50 min-h-screen pb-12">
      <div className="bg-white border-b py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Admin Control</h1>
              <p className="text-slate-500 font-medium">Monitor leads and manage your educational partners.</p>
            </div>
            <div className="grid grid-cols-2 md:flex gap-3 w-full md:w-auto">
              <div className="bg-indigo-50 border border-indigo-100 p-4 rounded-3xl flex items-center gap-4">
                <div className="w-10 h-10 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                </div>
                <div>
                  <div className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Partners</div>
                  <div className="text-xl font-extrabold text-slate-900">{approvedPartners.length}</div>
                </div>
              </div>
              <div className="bg-green-50 border border-green-100 p-4 rounded-3xl flex items-center gap-4">
                <div className="w-10 h-10 bg-green-600 rounded-2xl flex items-center justify-center text-white shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" /></svg>
                </div>
                <div>
                  <div className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Leads</div>
                  <div className="text-xl font-extrabold text-slate-900">{enquiries.length}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex p-1 bg-slate-200 rounded-2xl mb-8 w-fit mx-auto md:mx-0">
          <button onClick={() => setActiveSubTab('enquiries')} className={`px-6 py-2.5 rounded-xl font-bold transition-all text-sm ${activeSubTab === 'enquiries' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500'}`}>Leads ({enquiries.length})</button>
          <button onClick={() => setActiveSubTab('partners')} className={`px-6 py-2.5 rounded-xl font-bold transition-all text-sm ${activeSubTab === 'partners' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500'}`}>Partners ({pendingPartners.length})</button>
        </div>

        {activeSubTab === 'enquiries' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enquiries.length === 0 ? (
              <div className="col-span-full py-20 bg-white rounded-[40px] border-2 border-dashed text-center"><p className="text-slate-400 font-bold">No leads yet.</p></div>
            ) : (
              enquiries.map(enq => (
                <div key={enq.id} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 group">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white ${enq.type === 'pg' ? 'bg-amber-500' : 'bg-indigo-600'}`}>
                        {enq.type === 'pg' ? 'P' : 'T'}
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900">{enq.studentName}</h3>
                        <p className="text-[10px] text-slate-400 font-bold uppercase">{enq.type === 'pg' ? 'PG Enquiry' : 'Tutor Enquiry'}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-2xl mb-4 border border-slate-100">
                    <p className="text-[10px] font-bold text-slate-400 mb-1 uppercase">Interested In</p>
                    <p className="text-sm font-bold text-slate-800">{enq.pgName || enq.tutorName}</p>
                    <p className="text-xs text-indigo-600 font-bold mt-2">{enq.studentPhone}</p>
                  </div>
                  <p className="text-slate-600 text-sm italic mb-4 line-clamp-3">"{enq.message || 'No additional message.'}"</p>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{new Date(enq.timestamp).toLocaleString()}</div>
                </div>
              ))
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pendingPartners.length === 0 ? (
              <div className="col-span-full py-20 bg-white rounded-[40px] border-2 border-dashed text-center"><p className="text-slate-400 font-bold">All clear!</p></div>
            ) : (
              pendingPartners.map(p => (
                <div key={p.id} className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <img src={p.imageUrl} className="w-16 h-16 rounded-2xl object-cover" />
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-[10px] font-extrabold uppercase">{p.role}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{p.name}</h3>
                  <p className="text-slate-500 text-xs font-bold mb-4 uppercase">{p.location}</p>
                  <div className="flex gap-2 mt-auto">
                    <button onClick={() => onApprove(p.id)} className="flex-1 py-3 bg-indigo-600 text-white rounded-2xl font-bold text-xs shadow-lg shadow-indigo-100 active:scale-95 transition">Approve</button>
                    <button onClick={() => onDelete(p.id)} className="px-4 py-3 bg-slate-100 text-slate-500 rounded-2xl hover:bg-red-50 hover:text-red-600 transition"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg></button>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
