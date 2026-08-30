import React from 'react';
import { FACULTY_MEMBERS } from '../data/coachingData';

export const FacultySection: React.FC = () => {
  return (
    <section id="faculty" className="py-10 sm:py-14">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2 mb-10">
        <p className="text-xs font-bold uppercase tracking-widest text-[#133E2B]">
          FACULTY & MENTORS
        </p>
        <h2 className="text-3xl sm:text-4xl font-normal text-[#18181B] tracking-tight font-serif-heading">
          Learn From Dedicated Subject Experts
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Our teachers are passionate educators with decades of combined experience preparing students for Board distinctions, IIT-JEE ranks, and CET percentiles.
        </p>
      </div>

      {/* Faculty Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {FACULTY_MEMBERS.map((fac) => (
          <div
            key={fac.id}
            id={`faculty-card-${fac.id}`}
            className="bg-white rounded-2xl border-2 border-[#18181B] shadow-[3px_3px_0px_0px_#18181B] hover:-translate-y-0.5 transition-all overflow-hidden flex flex-col justify-between"
          >
            <div>
              {/* Photo Container */}
              <div className="h-48 w-full overflow-hidden bg-slate-100 relative border-b-2 border-[#18181B]">
                <img
                  src={fac.image}
                  alt={fac.name}
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-2.5 left-2.5">
                  <span className="px-2 py-0.5 bg-[#133E2B] text-white rounded-md text-[10px] font-bold uppercase tracking-wide border border-[#18181B]">
                    {fac.experience} Exp
                  </span>
                </div>
              </div>

              {/* Details */}
              <div className="p-4 space-y-2.5">
                <div>
                  <h3 className="font-bold text-[#18181B] text-base font-brand">
                    {fac.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#133E2B]">
                    {fac.designation}
                  </p>
                  <p className="text-[11px] text-slate-500 font-medium">
                    {fac.qualification}
                  </p>
                </div>

                {/* Subjects */}
                <div className="flex flex-wrap gap-1">
                  {fac.subjects.map((sub, sIdx) => (
                    <span 
                      key={sIdx}
                      className="px-2 py-0.5 bg-[#FAF8F5] text-[#18181B] border border-slate-300 rounded text-[10px] font-medium"
                    >
                      {sub}
                    </span>
                  ))}
                </div>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {fac.bio}
                </p>
              </div>
            </div>

            {/* Tagline Footer */}
            <div className="bg-[#FAF8F5] p-3 border-t border-slate-200 text-center">
              <p className="text-[11px] font-medium text-slate-700 italic">
                &ldquo;{fac.tagline}&rdquo;
              </p>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};
