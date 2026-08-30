import React from 'react';
import { 
  FileText, 
  BookOpen, 
  TrendingUp, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Users
} from 'lucide-react';

export const PedagogyFeatures: React.FC = () => {
  const steps = [
    {
      step: '01',
      icon: <FileText className="w-5 h-5 text-[#133E2B]" />,
      title: 'Diagnose Your Level',
      marathi: 'मूलभूत क्षमता निदान',
      description: 'Take a diagnostic evaluation to pinpoint high-yield chapter strengths and foundational gaps across Physics, Chemistry, and Mathematics.',
      tag: 'Step 1'
    },
    {
      step: '02',
      icon: <BookOpen className="w-5 h-5 text-[#133E2B]" />,
      title: 'Practice Chapter-Wise',
      marathi: 'प्रकरणानुसार सराव',
      description: 'Solve 10-year Maharashtra State Board and JEE Mains question archives with step-by-step conceptual derivations.',
      tag: 'Step 2'
    },
    {
      step: '03',
      icon: <TrendingUp className="w-5 h-5 text-[#133E2B]" />,
      title: 'Track Prep Velocity',
      marathi: 'गती आणि प्रगती ट्रॅकिंग',
      description: 'Weekly simulated examinations with WhatsApp scorecards, error analysis logbooks, and 1-on-1 mentor guidance.',
      tag: 'Step 3'
    }
  ];

  const features = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#133E2B]" />,
      title: 'Board & CET Aligned Exams',
      description: 'Full syllabus chapter mocks strictly matched to Maharashtra HSC Board and MHT-CET test patterns.'
    },
    {
      icon: <Clock className="w-5 h-5 text-[#133E2B]" />,
      title: 'Daily Doubt Solving till 9 PM',
      description: 'Never leave doubts pending. Main subject faculty are available every evening at our Talegaon center.'
    },
    {
      icon: <Users className="w-5 h-5 text-[#133E2B]" />,
      title: 'Capped Batches (Max 25)',
      description: 'Small cohort sizes ensure personalized attention, individual pacing, and regular progress reports for parents.'
    }
  ];

  return (
    <section id="methodology" className="py-10 sm:py-14">
      {/* Header matching video */}
      <div className="text-center max-w-3xl mx-auto space-y-2 mb-10">
        <p className="text-xs font-bold uppercase tracking-widest text-[#133E2B]">
          STUDY METHODOLOGY
        </p>
        <h2 className="text-3xl sm:text-4xl font-normal text-[#18181B] tracking-tight font-serif-heading">
          Your Structured Path to Success
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          From diagnostic testing to board exam mastery, here is how our 5.0★ Google-rated system helps you excel.
        </p>
      </div>

      {/* 3 Numbered Step Cards matching video */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        {steps.map((item, idx) => (
          <div
            key={idx}
            id={`methodology-step-${idx}`}
            className="bg-white border-2 border-[#18181B] rounded-2xl p-6 shadow-[3px_3px_0px_0px_#18181B] flex flex-col justify-between space-y-4 hover:-translate-y-0.5 transition-transform"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-8 h-8 rounded-full bg-[#133E2B] text-white text-xs font-bold font-mono flex items-center justify-center border border-[#18181B]">
                  {item.step}
                </span>
                <div className="w-9 h-9 rounded-xl bg-[#EBF4EC] border border-[#C2E0C6] flex items-center justify-center">
                  {item.icon}
                </div>
              </div>

              <h3 className="text-lg font-bold text-[#18181B] font-brand leading-tight">
                {item.title}
              </h3>
              <p className="text-xs font-medium text-[#133E2B] mt-0.5 mb-2">
                {item.marathi}
              </p>

              <p className="text-xs text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-[#133E2B] font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Proven 5.0★ Practice</span>
            </div>
          </div>
        ))}
      </div>

      {/* 3 Prep Features Box matching video 00:19 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {features.map((feat, idx) => (
          <div
            key={idx}
            id={`prep-feature-${idx}`}
            className="bg-[#FAF8F5] border-2 border-[#18181B] rounded-2xl p-5 shadow-[2px_2px_0px_0px_#18181B] space-y-2.5"
          >
            <div className="w-8 h-8 rounded-lg bg-white border border-[#18181B] flex items-center justify-center shadow-2xs">
              {feat.icon}
            </div>
            <h4 className="font-bold text-[#18181B] text-sm font-brand">
              {feat.title}
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              {feat.description}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
};

