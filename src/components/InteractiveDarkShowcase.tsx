import React, { useState } from 'react';
import { 
  Sparkles, 
  Check, 
  Clock, 
  Award, 
  ArrowRight, 
  BookOpen, 
  Atom, 
  Calculator, 
  FlaskConical, 
  Dna, 
  HelpCircle,
  TrendingUp
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface InteractiveDarkShowcaseProps {
  onOpenTrialModal: () => void;
  onExploreSyllabus: () => void;
}

interface Question {
  id: number;
  subject: string;
  code: string;
  question: string;
  options: string[];
  correctIdx: number;
  explanation: string;
}

const SAMPLE_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: '12th HSC / CBSE Physics',
    code: 'PHYSICS • Q12',
    question: 'Which law establishes that the magnitude of induced EMF is equal to the rate of change of magnetic flux?',
    options: [
      "Faraday's Law of Induction",
      "Ampere's Circuital Law",
      "Coulomb's Law of Electrostatics",
      "Biot-Savart Law"
    ],
    correctIdx: 0,
    explanation: 'Faraday’s 2nd Law states e = -dΦ/dt. Concept clarity ensures students solve this in 5 seconds in boards and CET!'
  },
  {
    id: 2,
    subject: '12th Higher Mathematics',
    code: 'MATHS • Q08',
    question: 'What is the derivative of e^(sin x) with respect to x using the Chain Rule?',
    options: [
      'cos(x) · e^(sin x)',
      'sin(x) · e^(cos x)',
      '-cos(x) · e^(sin x)',
      'e^(cos x)'
    ],
    correctIdx: 0,
    explanation: 'By chain rule, d/dx [e^(u)] = e^u · du/dx = cos(x)·e^(sin x). Mastered step-by-step in our board booster series!'
  },
  {
    id: 3,
    subject: 'Inorganic Chemistry',
    code: 'CHEMISTRY • Q15',
    question: 'What is the oxidation state of Chromium (Cr) in Potassium Dichromate (K2Cr2O7)?',
    options: [
      '+6',
      '+7',
      '+4',
      '+3'
    ],
    correctIdx: 0,
    explanation: '2(+1) + 2(Cr) + 7(-2) = 0 => 2Cr = 12 => Cr = +6. High-frequency question for 12th HSC & MHT-CET!'
  }
];

export const InteractiveDarkShowcase: React.FC<InteractiveDarkShowcaseProps> = ({
  onOpenTrialModal,
  onExploreSyllabus
}) => {
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(0); // preselect 0 to look just like video initially
  const [score, setScore] = useState(850);
  const [showExplanation, setShowExplanation] = useState(true);

  const activeQ = SAMPLE_QUESTIONS[currentQIndex];

  const handleSelectOption = (idx: number) => {
    setSelectedOption(idx);
    setShowExplanation(true);
    if (idx === activeQ.correctIdx) {
      setScore(prev => prev + 50);
      confetti({
        particleCount: 40,
        spread: 50,
        origin: { y: 0.7 }
      });
    }
  };

  const nextQuestion = () => {
    const nextIdx = (currentQIndex + 1) % SAMPLE_QUESTIONS.length;
    setCurrentQIndex(nextIdx);
    setSelectedOption(null);
    setShowExplanation(false);
  };

  return (
    <section className="relative my-8 sm:my-12">
      
      {/* Dark Forest Green/Charcoal Container matching video */}
      <div className="bg-[#0B1E17] text-white rounded-3xl p-6 sm:p-10 lg:p-14 border-2 border-[#18181B] shadow-2xl relative overflow-hidden">
        
        {/* Subtle grid pattern / radial glow */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#52B788_1px,transparent_1px)] [background-size:24px_24px]"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
          
          {/* Left Column: Pill Tags, Heading, Subtext & CTA */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Top pill tags in video */}
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/10 text-emerald-200 border border-white/15 rounded-full text-xs font-semibold backdrop-blur-sm">
                12th Board Special
              </span>
              <span className="px-3 py-1 bg-white/10 text-emerald-200 border border-white/15 rounded-full text-xs font-semibold backdrop-blur-sm">
                Chapter-wise Practice
              </span>
              <span className="px-3 py-1 bg-white/10 text-emerald-200 border border-white/15 rounded-full text-xs font-semibold backdrop-blur-sm">
                PYQ Archives
              </span>
              <span className="px-3 py-1 bg-white/10 text-emerald-200 border border-white/15 rounded-full text-xs font-semibold backdrop-blur-sm">
                Performance Analytics
              </span>
            </div>

            {/* Main Section Heading matching video typography */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.15] font-serif-heading tracking-tight text-[#FAF8F5]">
              Master your syllabus, <br />
              <span className="italic text-[#95D5B2]">learn smarter,</span> <br />
              with concept-aligned coaching
            </h2>

            {/* Subtitle */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-lg font-light">
              State & NTA-aligned weekly simulated exams, instant scorecard analysis, and detailed chapter-wise explanations guided by Talegaon’s top subject mentors.
            </p>

            {/* Two Action Buttons matching video */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                id="showcase-join-trial-btn"
                onClick={onOpenTrialModal}
                className="px-6 py-3.5 bg-white hover:bg-slate-100 text-[#0B1E17] font-bold rounded-full text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Book Free Trial</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="showcase-explore-syllabus-btn"
                onClick={onExploreSyllabus}
                className="px-6 py-3.5 bg-transparent hover:bg-white/10 text-white border-2 border-white/40 hover:border-white font-semibold rounded-full text-sm transition-all cursor-pointer"
              >
                <span>Explore Syllabus</span>
              </button>
            </div>

            {/* Quick trust strip */}
            <div className="pt-4 border-t border-white/10 flex items-center gap-4 text-xs text-emerald-200">
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#52B788]" /> Daily Doubts till 9 PM
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#52B788]" /> Weekly WhatsApp Scorecards
              </span>
            </div>

          </div>

          {/* Right Column: Interactive Phone Simulator with Floating Subject Pills */}
          <div className="lg:col-span-6 relative flex items-center justify-center py-4">
            
            {/* Floating Topic Pills - Left Side (matching video) */}
            <div className="hidden sm:flex flex-col gap-3 absolute left-0 z-20">
              <div className="px-3.5 py-2 bg-[#133E2B]/90 border border-emerald-500/40 rounded-xl text-xs font-semibold text-white flex items-center gap-2 shadow-lg backdrop-blur-md">
                <FlaskConical className="w-3.5 h-3.5 text-emerald-300" />
                <span>Physics</span>
              </div>
              <div className="px-3.5 py-2 bg-[#133E2B]/90 border border-emerald-500/40 rounded-xl text-xs font-semibold text-white flex items-center gap-2 shadow-lg backdrop-blur-md">
                <Calculator className="w-3.5 h-3.5 text-emerald-300" />
                <span>Mathematics</span>
              </div>
              <div className="px-3.5 py-2 bg-[#133E2B]/90 border border-emerald-500/40 rounded-xl text-xs font-semibold text-white flex items-center gap-2 shadow-lg backdrop-blur-md">
                <Atom className="w-3.5 h-3.5 text-emerald-300" />
                <span>Chemistry</span>
              </div>
              <div className="px-3.5 py-2 bg-[#133E2B]/90 border border-emerald-500/40 rounded-xl text-xs font-semibold text-white flex items-center gap-2 shadow-lg backdrop-blur-md">
                <TrendingUp className="w-3.5 h-3.5 text-amber-300" />
                <span>Board Prelims</span>
              </div>
            </div>

            {/* Floating Topic Pills - Right Side (matching video) */}
            <div className="hidden sm:flex flex-col gap-3 absolute right-0 z-20">
              <div className="px-3.5 py-2 bg-[#133E2B]/90 border border-emerald-500/40 rounded-xl text-xs font-semibold text-white flex items-center gap-2 shadow-lg backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>IIT-JEE Mains</span>
              </div>
              <div className="px-3.5 py-2 bg-[#133E2B]/90 border border-emerald-500/40 rounded-xl text-xs font-semibold text-white flex items-center gap-2 shadow-lg backdrop-blur-md">
                <Award className="w-3.5 h-3.5 text-emerald-300" />
                <span>MHT-CET Rank</span>
              </div>
              <div className="px-3.5 py-2 bg-[#133E2B]/90 border border-emerald-500/40 rounded-xl text-xs font-semibold text-white flex items-center gap-2 shadow-lg backdrop-blur-md">
                <Dna className="w-3.5 h-3.5 text-emerald-300" />
                <span>Biology</span>
              </div>
              <div className="px-3.5 py-2 bg-[#133E2B]/90 border border-emerald-500/40 rounded-xl text-xs font-semibold text-white flex items-center gap-2 shadow-lg backdrop-blur-md">
                <HelpCircle className="w-3.5 h-3.5 text-indigo-300" />
                <span>1-on-1 Doubts</span>
              </div>
            </div>

            {/* Mobile Phone Mockup (Center) */}
            <div className="w-full max-w-[310px] bg-white rounded-[32px] p-4 text-slate-900 shadow-2xl border-4 border-slate-800 relative z-10">
              
              {/* Phone Speaker Notch */}
              <div className="w-20 h-4 bg-slate-900 rounded-b-xl mx-auto -mt-4 mb-3 flex items-center justify-center">
                <div className="w-8 h-1 bg-slate-700 rounded-full"></div>
              </div>

              {/* Quiz Engine Header in Phone */}
              <div className="flex items-center justify-between pb-2.5 border-b border-slate-100 mb-3 text-xs">
                <div className="flex items-center gap-1.5 font-bold text-slate-900">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span>IIT Foundation Engine</span>
                </div>
                <div className="flex items-center gap-1 px-2 py-0.5 bg-slate-100 rounded-full text-[11px] font-semibold text-slate-600">
                  <Clock className="w-3 h-3 text-slate-500" />
                  <span>45s</span>
                </div>
              </div>

              {/* Question Tag */}
              <div className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-700 mb-1">
                {activeQ.code}
              </div>

              {/* Question Text */}
              <h4 className="text-xs font-bold text-slate-900 leading-snug mb-3">
                {activeQ.question}
              </h4>

              {/* Options */}
              <div className="space-y-2 mb-3">
                {activeQ.options.map((opt, idx) => {
                  const isSelected = selectedOption === idx;
                  const isCorrect = idx === activeQ.correctIdx;

                  let btnStyle = "border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300";
                  if (isSelected) {
                    if (isCorrect) {
                      btnStyle = "border-emerald-600 bg-emerald-50 text-emerald-950 font-bold";
                    } else {
                      btnStyle = "border-red-500 bg-red-50 text-red-950 font-bold";
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      className={`w-full text-left p-2.5 rounded-xl border text-[11px] flex items-center justify-between transition-all cursor-pointer ${btnStyle}`}
                    >
                      <span className="leading-snug">{opt}</span>
                      {isSelected && isCorrect && (
                        <span className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 ml-1.5">
                          <Check className="w-3 h-3" />
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation / Next Question */}
              {showExplanation && (
                <div className="p-2.5 bg-emerald-50/80 rounded-xl border border-emerald-200 text-[10px] text-emerald-900 mb-3 space-y-1">
                  <p className="font-bold flex items-center justify-between">
                    <span>✓ Concept Mastered!</span>
                    <button
                      onClick={nextQuestion}
                      className="text-indigo-700 font-extrabold underline cursor-pointer hover:text-indigo-900"
                    >
                      Next Question →
                    </button>
                  </p>
                  <p className="text-slate-600 leading-tight">
                    {activeQ.explanation}
                  </p>
                </div>
              )}

              {/* Bottom Score Footer in Phone */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                <span>Score: <strong className="text-slate-900">{score} pts</strong></span>
                <span className="text-emerald-700 font-bold">9/10 Correct</span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
