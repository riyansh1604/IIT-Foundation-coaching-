import React, { useState } from 'react';
import { 
  Calculator, 
  Award, 
  CheckCircle2, 
  Percent
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface AdmissionCalculatorProps {
  onBookTrialWithData: (data: { studentClass: string; target: string; phone: string }) => void;
}

export const AdmissionCalculator: React.FC<AdmissionCalculatorProps> = ({ onBookTrialWithData }) => {
  const [selectedClass, setSelectedClass] = useState('12th');
  const [selectedStream, setSelectedStream] = useState('PCM_BOARDS_CET');
  const [previousScore, setPreviousScore] = useState(85);
  const [phone, setPhone] = useState('');

  // Dynamic scholarship calculation
  const getScholarshipPercent = () => {
    if (previousScore >= 95) return 30;
    if (previousScore >= 90) return 20;
    if (previousScore >= 80) return 15;
    if (previousScore >= 70) return 10;
    return 5;
  };

  const getBaseFee = () => {
    switch (selectedClass) {
      case '12th':
        return selectedStream.includes('JEE') ? 48000 : 38000;
      case '11th':
        return selectedStream.includes('JEE') ? 52000 : 42000;
      case '10th':
        return 28000;
      case '9th':
        return 24000;
      case '8th':
        return 20000;
      default:
        return 35000;
    }
  };

  const scholarship = getScholarshipPercent();
  const baseFee = getBaseFee();
  const discountAmount = Math.round((baseFee * scholarship) / 100);
  const netEstimatedFee = baseFee - discountAmount;

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({
      particleCount: 40,
      spread: 50,
      origin: { y: 0.85 }
    });
  };

  const handleQuickBook = () => {
    onBookTrialWithData({
      studentClass: `Class ${selectedClass}`,
      target: selectedStream,
      phone: phone || ''
    });
  };

  return (
    <section className="py-10 sm:py-14">
      <div className="bg-[#FAF8F5] border-2 border-[#18181B] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-[4px_4px_0px_0px_#18181B] relative">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Form & Inputs */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-2">
              <p className="text-xs font-bold uppercase tracking-widest text-[#133E2B]">
                MERIT SCHOLARSHIP ESTIMATOR
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#18181B] tracking-tight font-serif-heading">
                Calculate Scholarship & Fee Plan
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                We believe exceptional merit and genuine eagerness to learn deserve recognition. Estimate your fee concession based on previous exam performance.
              </p>
            </div>

            <form onSubmit={handleCalculate} className="space-y-4">
              
              {/* Class and Stream Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Select Current Class</label>
                  <select
                    id="calc-class-select"
                    value={selectedClass}
                    onChange={(e) => setSelectedClass(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border-2 border-[#18181B] rounded-xl text-xs sm:text-sm text-[#18181B] font-medium focus:ring-0 focus:outline-hidden"
                  >
                    <option value="12th">Class 12th (Board Prep / Science)</option>
                    <option value="11th">Class 11th (Science PCM / PCB)</option>
                    <option value="10th">Class 10th (Board & Foundation)</option>
                    <option value="9th">Class 9th (Pre-Foundation)</option>
                    <option value="8th">Class 8th (Pre-Foundation)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Target Exam Focus</label>
                  <select
                    id="calc-stream-select"
                    value={selectedStream}
                    onChange={(e) => setSelectedStream(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border-2 border-[#18181B] rounded-xl text-xs sm:text-sm text-[#18181B] font-medium focus:ring-0 focus:outline-hidden"
                  >
                    <option value="PCM_BOARDS_CET">12th Board + MHT-CET (Maths/Science)</option>
                    <option value="IIT_JEE">IIT-JEE (Mains + Advanced)</option>
                    <option value="NEET_MED">NEET (Medical Biology & Chem)</option>
                    <option value="BOARDS_ONLY">Pure Board Marks Boost (95%+ Target)</option>
                    <option value="STEM_FOUNDATION">8th-10th Olympiad & Science Foundation</option>
                  </select>
                </div>
              </div>

              {/* Previous Score Slider */}
              <div className="bg-white p-4 rounded-xl border-2 border-[#18181B] space-y-2">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-slate-700">Previous Exam / Board Percentage:</span>
                  <span className="text-[#133E2B] font-mono text-base font-bold">{previousScore}%</span>
                </div>
                <input
                  id="calc-score-slider"
                  type="range"
                  min="50"
                  max="99"
                  value={previousScore}
                  onChange={(e) => setPreviousScore(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#133E2B]"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-semibold">
                  <span>50% (5% Off)</span>
                  <span>75% (10% Off)</span>
                  <span>85% (15% Off)</span>
                  <span>90%+ (20-30% Merit)</span>
                </div>
              </div>

              {/* Contact phone for trial */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Parent / Student Phone Number</label>
                <div className="flex gap-2">
                  <input
                    id="calc-phone-input"
                    type="tel"
                    placeholder="Enter 10-digit mobile number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="flex-1 px-3.5 py-2.5 bg-white border-2 border-[#18181B] rounded-xl text-xs sm:text-sm text-[#18181B] placeholder:text-slate-400 focus:outline-hidden"
                  />
                  <button
                    id="calc-submit-btn"
                    type="submit"
                    className="px-5 py-2.5 bg-[#133E2B] text-white font-bold rounded-xl text-xs sm:text-sm border-2 border-[#18181B] shadow-[2px_2px_0px_0px_#18181B] hover:-translate-y-0.5 transition-all cursor-pointer shrink-0 font-brand"
                  >
                    Calculate
                  </button>
                </div>
              </div>

            </form>

          </div>

          {/* Right Column: Dynamic Scholarship Outcome Card */}
          <div className="lg:col-span-5">
            <div className="bg-white border-2 border-[#18181B] rounded-2xl p-6 sm:p-7 shadow-[4px_4px_0px_0px_#18181B] space-y-4">
              
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                    Estimated Scholarship
                  </span>
                  <p className="text-xl font-bold text-[#133E2B] font-brand">
                    {scholarship}% Inborn Talent Merit
                  </p>
                </div>
                <div className="w-9 h-9 rounded-xl bg-[#EBF4EC] border border-[#C2E0C6] text-[#133E2B] flex items-center justify-center font-black text-sm">
                  <Percent className="w-4 h-4" />
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between text-slate-600">
                  <span>Standard Program Fee:</span>
                  <span className="font-bold text-[#18181B]">₹{baseFee.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex items-center justify-between text-[#133E2B] font-semibold">
                  <span>Merit Scholarship ({scholarship}%):</span>
                  <span>- ₹{discountAmount.toLocaleString('en-IN')}</span>
                </div>
                <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-sm sm:text-base font-bold text-[#18181B]">
                  <span>Net Estimated Fee:</span>
                  <span className="text-[#133E2B] font-brand font-bold text-xl">
                    ₹{netEstimatedFee.toLocaleString('en-IN')}*
                  </span>
                </div>
                <p className="text-[10px] text-slate-500 italic">
                  *Includes study material, chapter test series, and daily doubt clinics till 9 PM.
                </p>
              </div>

              {/* Inclusions checklist */}
              <div className="bg-[#FAF8F5] rounded-xl p-3.5 border border-slate-200 space-y-1.5 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#133E2B] shrink-0" />
                  <span>2-Day Free Demo Trial Included</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#133E2B] shrink-0" />
                  <span>Full formula booklet & printed notes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#133E2B] shrink-0" />
                  <span>Weekly WhatsApp scorecard to parents</span>
                </div>
              </div>

              {/* Action Button */}
              <button
                id="calc-claim-scholarship-btn"
                onClick={handleQuickBook}
                className="w-full py-3.5 bg-[#133E2B] hover:bg-[#0E2F20] text-white font-bold rounded-xl text-xs sm:text-sm border-2 border-[#18181B] shadow-[2px_2px_0px_0px_#18181B] transition-all flex items-center justify-center gap-2 cursor-pointer font-brand"
              >
                <Award className="w-4 h-4 text-amber-300" />
                <span>Claim Scholarship & Book Free Trial</span>
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
