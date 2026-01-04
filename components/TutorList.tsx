
import React, { useEffect, useRef, useState } from 'react';
import TutorCard from './TutorCard';
import { Tutor } from '../types';

interface TutorListProps {
  tutors: Tutor[];
  onEnquiry: (tutor: Tutor) => void;
  isCarousel?: boolean;
}

const TutorList: React.FC<TutorListProps> = ({ tutors, onEnquiry, isCarousel = false }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isCarousel || !carouselRef.current) return;

    const interval = setInterval(() => {
      if (!isPaused && carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        
        if (Math.ceil(scrollLeft + clientWidth) >= scrollWidth) {
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          carouselRef.current.scrollBy({ left: clientWidth, behavior: 'smooth' });
        }
      }
    }, 2500); // Swipe every 2.5 seconds for a faster feel

    return () => clearInterval(interval);
  }, [isCarousel, isPaused]);

  if (tutors.length === 0) {
    return (
      <div className="text-center py-24 bg-white/5 rounded-[48px] border-4 border-dashed border-white/10">
        <p className="text-xl text-slate-400 font-medium">No partners match your criteria yet.</p>
      </div>
    );
  }

  if (isCarousel) {
    return (
      <div
        ref={carouselRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="flex overflow-x-auto gap-8 py-8 scrollbar-hide snap-x snap-mandatory -mx-4 px-4 md:-mx-8 md:px-8"
      >
        {tutors.map((tutor) => (
          <div key={tutor.id} className="snap-start flex-shrink-0 w-[80vw] sm:w-[50vw] md:w-[40vw] lg:w-[30vw] xl:w-[24vw] max-w-sm">
            <TutorCard tutor={tutor} onEnquiry={onEnquiry} />
          </div>
        ))}
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
