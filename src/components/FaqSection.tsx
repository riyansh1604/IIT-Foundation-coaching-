import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS_DATA } from '../data/coachingData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-10 sm:py-14">
      
      {/* Header matching video */}
      <div className="text-center max-w-3xl mx-auto space-y-2 mb-10">
        <p className="text-xs font-bold uppercase tracking-widest text-[#133E2B]">
          COMMON QUESTIONS
        </p>
        <h2 className="text-3xl sm:text-4xl font-normal text-[#18181B] tracking-tight font-serif-heading">
          Frequently Asked Questions
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Clear, transparent answers about our batch timings, syllabus completion, testing routines, and free demo classes.
        </p>
      </div>

      {/* Accordion List with clean borders */}
      <div className="max-w-3xl mx-auto space-y-3">
        {FAQS_DATA.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`rounded-2xl border-2 border-[#18181B] transition-all overflow-hidden ${
                isOpen 
                  ? 'bg-white shadow-[3px_3px_0px_0px_#18181B]' 
                  : 'bg-[#FAF8F5] shadow-[1px_1px_0px_0px_#18181B] hover:bg-white'
              }`}
            >
              <button
                id={`faq-toggle-btn-${idx}`}
                onClick={() => toggle(idx)}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-[#18181B] text-sm sm:text-base font-brand hover:text-[#133E2B] transition-colors cursor-pointer"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-[#133E2B]' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200 pt-3 whitespace-pre-line">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

    </section>
  );
};
