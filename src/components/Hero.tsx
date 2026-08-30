import React from 'react';
import { 
  ArrowRight
} from 'lucide-react';
import { StudentDeskIllustration } from './StudentIllustration';

interface HeroProps {
  onOpenDemoModal: () => void;
  onExploreCourses: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemoModal, onExploreCourses }) => {
  return (
    <section id="overview" className="py-6 sm:py-10">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Editorial Heading, Subtitle & Dual Buttons */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Main Editorial Serif Heading matching video style */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] font-serif-heading tracking-tight text-[#18181B]">
            Talegaon's Premier <br />
            Coaching Institute for <br />
            <span className="text-[#133E2B] underline decoration-[#52B788]/60 decoration-2 underline-offset-4">
              12th Boards, IIT-JEE
            </span> <br />
            & Foundation
          </h1>

          {/* Subtext */}
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
            High-quality weekly test series, concept clarity sessions, and solved 10-year question banks mapped strictly to official Maharashtra Board, MHT-CET, and JEE syllabi.
          </p>

          {/* Dual Action Buttons matching video (dark green pill + outline pill) */}
          <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
            <button
              id="hero-join-waitlist-btn"
              onClick={onOpenDemoModal}
              className="px-7 py-3.5 bg-[#133E2B] hover:bg-[#0D2A1D] text-white font-bold rounded-full text-sm sm:text-base shadow-sm transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Book Free Trial</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              id="hero-explore-test-series-btn"
              onClick={onExploreCourses}
              className="px-7 py-3.5 bg-transparent hover:bg-black/5 text-[#18181B] border-2 border-[#18181B] font-bold rounded-full text-sm sm:text-base transition-all cursor-pointer"
            >
              <span>Explore Batches</span>
            </button>
          </div>

        </div>

        {/* Right Column: Clean Vector Line Illustration of Student Studying */}
        <div className="lg:col-span-5 flex items-center justify-center">
          <div className="w-full max-w-md p-4 sm:p-6 bg-[#FAF8F5] rounded-3xl border-2 border-[#18181B] shadow-[6px_6px_0px_0px_#18181B]">
            <StudentDeskIllustration className="w-full h-auto drop-shadow-xs" />
            <div className="mt-2 pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
              <span className="font-semibold text-slate-900">“Inspiring Inborn Talent”</span>
              <span className="text-[#133E2B] font-bold">Class 8th to 12th</span>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};
