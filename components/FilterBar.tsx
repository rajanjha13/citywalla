
import React, { useState } from 'react';
import { SUBJECT_OPTIONS } from '../constants';

interface FilterBarProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  activeSubject: string;
  setActiveSubject: (s: string) => void;
  suggestions: string[];
}

const FilterBar: React.FC<FilterBarProps> = ({ searchQuery, setSearchQuery, activeSubject, setActiveSubject, suggestions }) => {
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
  };

  return (
    <div className="space-y-4 mb-8">
      {/* Modern Search Input */}
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
          <svg className="h-5 w-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search by name, location or skill..."
          className="w-full pl-11 pr-11 py-4 bg-white border border-slate-200 rounded-2xl shadow-sm focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all text-slate-700 font-medium"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
          autoComplete="off"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute inset-y-0 right-0 pr-4 flex items-center z-10 text-slate-400 hover:text-slate-600 transition-colors"
            aria-label="Clear search"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
        {showSuggestions && suggestions.length > 0 && searchQuery && (
          <div className="absolute top-full mt-2 w-full bg-white rounded-2xl overflow-hidden z-20 shadow-lg border border-slate-100 animate-in fade-in duration-200">
            <ul className="py-2">
              {suggestions.map((s) => (
                <li
                  key={s}
                  onMouseDown={() => handleSuggestionClick(s)}
                  className="px-6 py-3 text-slate-700 text-left font-medium hover:bg-indigo-50 hover:text-indigo-600 cursor-pointer"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Horizontal Subject Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
        <button
          onClick={() => setActiveSubject('')}
          className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-bold transition-all ${
            activeSubject === '' 
            ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200' 
            : 'bg-white text-slate-500 border border-slate-200 hover:border-indigo-300'
          }`}
        >
          All Subjects
        </button>
        {SUBJECT_OPTIONS.map((subject) => (
          <button
            key={subject}
            onClick={() => setActiveSubject(subject)}
            className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-bold transition-all ${
              activeSubject === subject 
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200' 
              : 'bg-white text-slate-500 border border-slate-200 hover:border-indigo-300'
            }`}
          >
            {subject}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
