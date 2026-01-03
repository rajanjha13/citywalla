
import React from 'react';
import PGCard from './PGCard';
import { PG } from '../types';

interface PGListProps {
  pgs: PG[];
  onEnquiry: (pg: PG) => void;
}

const PGList: React.FC<PGListProps> = ({ pgs, onEnquiry }) => {
  if (pgs.length === 0) {
    return (
      <div className="text-center py-24 bg-white/5 rounded-[48px] border-4 border-dashed border-white/10">
        <p className="text-xl text-slate-400 font-medium">No accommodations found in this area.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
      {pgs.map(pg => (
        <PGCard key={pg.id} pg={pg} onEnquiry={onEnquiry} />
      ))}
    </div>
  );
};

export default PGList;
