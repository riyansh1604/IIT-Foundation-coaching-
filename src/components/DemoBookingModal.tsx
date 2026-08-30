import React, { useState, useEffect } from 'react';
import { 
  X, 
  Award, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Sparkles, 
  Phone, 
  User, 
  BookOpen, 
  Send 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { INSTITUTE_INFO } from '../data/coachingData';

interface DemoBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCourse?: string;
  initialData?: {
    studentClass?: string;
    target?: string;
    phone?: string;
  };
}

export const DemoBookingModal: React.FC<DemoBookingModalProps> = ({
  isOpen,
  onClose,
  initialCourse,
  initialData
}) => {
  const [studentName, setStudentName] = useState('');
  const [parentName, setParentName] = useState('');
  const [phone, setPhone] = useState(initialData?.phone || '');
  const [studentClass, setStudentClass] = useState(initialData?.studentClass || 'Class 12th');
  const [targetExam, setTargetExam] = useState(initialCourse || '12th Boards + MHT-CET');
  const [preferredBatch, setPreferredBatch] = useState('Evening (4:30 PM - 7:30 PM)');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialCourse) setTargetExam(initialCourse);
    if (initialData?.studentClass) setStudentClass(initialData.studentClass);
    if (initialData?.phone) setPhone(initialData.phone);
  }, [initialCourse, initialData]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName || !phone) return;

    setSubmitted(true);
    confetti({
      particleCount: 75,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-200 relative text-slate-900 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          id="close-demo-modal-btn"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-xs">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="space-y-1.5">
              <h3 className="text-2xl font-black text-slate-900 font-display">
                Free 2-Day Trial Pass Booked!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Welcome <strong className="text-slate-900">{studentName}</strong>. Our faculty will call you shortly on <strong className="text-slate-900">{phone}</strong> with classroom batch timing and study kit details.
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs text-slate-700 space-y-1 text-left">
              <p className="font-bold text-indigo-950">Campus Location:</p>
              <p className="text-slate-600">{INSTITUTE_INFO.address.full}</p>
              <p className="text-slate-500 pt-1">Direct Helpdesk: <strong className="text-slate-900">{INSTITUTE_INFO.phone}</strong></p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-2">
              <a
                id="modal-confirm-whatsapp-btn"
                href={`https://wa.me/91${INSTITUTE_INFO.phoneClean}?text=Hello%20IIT%20Foundation,%20I%20just%20booked%20a%20free%20demo%20trial%20for%20${encodeURIComponent(studentName)}%20(${studentClass}).`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2"
              >
                <span>Confirm on WhatsApp</span>
              </a>

              <button
                id="modal-done-btn"
                onClick={onClose}
                className="px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs sm:text-sm"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-600 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                100% Free & No Obligation
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-display">
                Book 2-Day Free Trial Class
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Experience our concept clarity teaching, meet the faculty, and get free printed formula notes.
              </p>
            </div>

            {/* Student & Parent Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Student Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sharvari Kamble"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-indigo-600 focus:bg-white"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Parent Name</label>
                <input
                  type="text"
                  placeholder="e.g. Mr. Kamble"
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-indigo-600 focus:bg-white"
                />
              </div>
            </div>

            {/* Phone & Class */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Mobile / WhatsApp Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 90212 16804"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-indigo-600 focus:bg-white"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Current Class *</label>
                <select
                  value={studentClass}
                  onChange={(e) => setStudentClass(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-indigo-600 focus:bg-white"
                >
                  <option value="Class 12th">Class 12th Science</option>
                  <option value="Class 11th">Class 11th Science</option>
                  <option value="Class 10th">Class 10th (Board Prep)</option>
                  <option value="Class 9th">Class 9th (Pre-Foundation)</option>
                  <option value="Class 8th">Class 8th (Pre-Foundation)</option>
                  <option value="Repeater Batch">JEE / CET Repeater</option>
                </select>
              </div>
            </div>

            {/* Target Program and Shift */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Target Program</label>
                <input
                  type="text"
                  value={targetExam}
                  onChange={(e) => setTargetExam(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-indigo-600 focus:bg-white"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Preferred Time Shift</label>
                <select
                  value={preferredBatch}
                  onChange={(e) => setPreferredBatch(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-indigo-600 focus:bg-white"
                >
                  <option value="Morning (7:00 AM - 9:30 AM)">Morning (7:00 AM - 9:30 AM)</option>
                  <option value="Evening (4:30 PM - 7:30 PM)">Evening (4:30 PM - 7:30 PM)</option>
                  <option value="Sunday Test & Doubt Clinic">Sunday Test & Doubt Special</option>
                </select>
              </div>
            </div>

            {/* Benefits Strip */}
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Attend 2 live classroom sessions for free</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>1-on-1 counseling with senior subject head</span>
              </div>
            </div>

            {/* Submit Button */}
            <button
              id="confirm-booking-trial-submit-btn"
              type="submit"
              className="w-full py-3.5 bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 hover:from-blue-950 hover:to-indigo-950 text-white font-extrabold rounded-xl text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
            >
              <Award className="w-4 h-4 text-amber-300" />
              <span>Confirm 2-Day Free Trial Pass</span>
            </button>

          </form>
        )}

      </div>
    </div>
  );
};
