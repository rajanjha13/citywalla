
import React, { useState } from 'react';

interface ImageGalleryProps {
  images: string[];
  aspectRatio?: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, aspectRatio = "h-[400px] md:h-[600px]" }) => {
  const [currentIdx, setCurrentIdx] = useState(0);

  if (!images || images.length === 0) return null;

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="space-y-6">
      {/* Main Stage */}
      <div className={`relative ${aspectRatio} overflow-hidden group rounded-[32px] md:rounded-[48px] shadow-2xl`}>
        <div 
          className="absolute inset-0 flex transition-transform duration-700 cubic-bezier(0.4, 0, 0.2, 1)" 
          style={{ transform: `translateX(-${currentIdx * 100}%)` }}
        >
          {images.map((img, i) => (
            <img 
              key={i} 
              src={img} 
              alt={`Gallery view ${i + 1}`} 
              className="w-full h-full object-cover flex-shrink-0" 
            />
          ))}
        </div>
        
        {/* Gradient Overlay for labels/controls readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
        
        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button 
              onClick={prevImage}
              className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 glass-dark text-white rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100 z-10 active:scale-90"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 glass-dark text-white rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100 z-10 active:scale-90"
              aria-label="Next image"
            >
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
            </button>
          </>
        )}

        {/* Floating HUD (Counter & Indicators) */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10">
          {/* Numeric Counter */}
          <div className="px-4 py-1.5 glass-dark rounded-full text-[10px] font-black text-white uppercase tracking-widest border border-white/10">
            {currentIdx + 1} / {images.length}
          </div>
          
          {/* Dot Indicators */}
          {images.length > 1 && (
            <div className="flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIdx(i)}
                  className={`h-1.5 transition-all duration-300 rounded-full ${
                    currentIdx === i ? 'w-8 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Thumbnail strip */}
      {images.length > 1 && (
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide px-2">
          {images.map((img, i) => (
            <button 
              key={i} 
              onClick={() => setCurrentIdx(i)}
              className={`relative w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden flex-shrink-0 transition-all duration-300 ${
                currentIdx === i 
                  ? 'ring-4 ring-indigo-500 ring-offset-4 ring-offset-slate-50 scale-105' 
                  : 'opacity-50 hover:opacity-100 grayscale hover:grayscale-0'
              }`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
              {currentIdx === i && (
                <div className="absolute inset-0 bg-indigo-500/10 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                </div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
