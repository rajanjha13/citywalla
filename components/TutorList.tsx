
import React from 'react';
import TutorCard from './TutorCard';
import { Tutor } from '../types';

interface TutorListProps {
  tutors: Tutor[];
  onEnquiry: (tutor: Tutor) => void;
}

const TutorList: React.FC<TutorListProps> = ({ tutors, onEnquiry }) => {
  if (tutors.length === 0) {
    return (
      <div className="text-center py-24 bg-white/5 rounded-[48px] border-4 border-dashed border-white/10">
        <p className="text-xl text-slate-400 font-medium">No partners match your criteria yet.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
      {tutors.map(tutor => (
        <TutorCard key={tutor.id} tutor={tutor} onEnquiry={onEnquiry} />
      ))}
    </div>
  );
};

export default TutorList;
