import React from 'react';
import { Star, Sparkles } from 'lucide-react';

export const TickerBar: React.FC = () => {
  const tickerItems = [
    "12th Maharashtra State Board (HSC)",
    "CBSE Class 12th Science & Maths",
    "IIT-JEE (Mains + Advanced)",
    "MHT-CET Engineering & Pharmacy",
    "NEET Medical Entrance",
    "8th–10th Pre-Foundation STEM"
  ];

  return (
    <div className="bg-[#133E2B] text-[#D8F3DC] py-3.5 px-4 rounded-2xl border-2 border-[#18181B] shadow-[4px_4px_0px_0px_#18181B] overflow-hidden my-6 sm:my-8">
      <div className="flex items-center justify-center text-center text-xs sm:text-sm font-semibold tracking-wide flex-wrap gap-y-2">
        <span className="text-[#95D5B2] font-extrabold uppercase text-[11px] tracking-wider mr-2 hidden sm:inline">
          Preparing Aspirants For:
        </span>
        
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-slate-100">
          {tickerItems.map((item, idx) => (
            <React.Fragment key={idx}>
              <span className="hover:text-white transition-colors cursor-default whitespace-nowrap">
                {item}
              </span>
              {idx < tickerItems.length - 1 && (
                <span className="text-[#52B788] select-none opacity-60">•</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
