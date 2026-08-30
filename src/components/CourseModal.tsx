import React, { useState } from 'react';
import { 
  X, 
  BookOpen, 
  CheckCircle2, 
  Calendar, 
  Clock, 
  Award, 
  Sparkles, 
  Phone,
  MessageCircle,
  FileText
} from 'lucide-react';
import { Course } from '../types';
import { INSTITUTE_INFO } from '../data/coachingData';

interface CourseModalProps {
  course: Course | null;
  onClose: () => void;
  onEnrollTrial: (courseTitle: string) => void;
}

export const CourseModal: React.FC<CourseModalProps> = ({ course, onClose, onEnrollTrial }) => {
  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative text-slate-900 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-100 flex items-start justify-between z-10">
          <div>
            {course.badge && (
              <span className="inline-block px-2.5 py-0.5 bg-amber-100 text-amber-900 border border-amber-300 text-[11px] font-bold rounded-full mb-1">
                {course.badge}
              </span>
            )}
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-display">
              {course.title}
            </h3>
            {course.marathiTitle && (
              <p className="text-xs font-semibold text-indigo-700 mt-0.5">
                {course.marathiTitle}
              </p>
            )}
          </div>

          <button
            id="close-course-modal-btn"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 text-sm">
          
          {/* Quick specs strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100 text-xs">
            <div>
              <span className="text-slate-500 font-semibold block">Target Students</span>
              <span className="font-bold text-slate-900 mt-0.5 block">{course.targetGroup}</span>
            </div>
            <div>
              <span className="text-slate-500 font-semibold block">Duration</span>
              <span className="font-bold text-slate-900 mt-0.5 block">{course.duration}</span>
            </div>
            <div>
              <span className="text-slate-500 font-semibold block">Batch Timing</span>
              <span className="font-bold text-indigo-900 mt-0.5 block">{course.batchTimings}</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="font-bold text-slate-900 text-base mb-1.5 font-display">Program Overview</h4>
            <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
              {course.description}
            </p>
          </div>

          {/* Subjects Covered */}
          <div>
            <h4 className="font-bold text-slate-900 text-base mb-2 font-display">Key Subjects Covered</h4>
            <div className="flex flex-wrap gap-2">
              {course.subjects.map((sub, i) => (
                <span 
                  key={i}
                  className="px-3 py-1 bg-indigo-50 border border-indigo-200 text-indigo-900 rounded-lg font-bold text-xs"
                >
                  {sub}
                </span>
              ))}
            </div>
          </div>

          {/* Course Features */}
          <div>
            <h4 className="font-bold text-slate-900 text-base mb-2.5 font-display">What You Will Get in This Batch</h4>
            <div className="space-y-2">
              {course.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Curriculum breakdown */}
          <div>
            <h4 className="font-bold text-slate-900 text-base mb-3 font-display">Syllabus Breakdown & Milestones</h4>
            <div className="space-y-3">
              {course.curriculum.map((curr, idx) => (
                <div key={idx} className="bg-slate-50 rounded-xl p-4 border border-slate-200/80">
                  <h5 className="font-bold text-slate-900 text-xs sm:text-sm mb-2 text-indigo-950">
                    {curr.term}
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-600">
                    {curr.topics.map((top, tIdx) => (
                      <div key={tIdx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                        <span>{top}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Action Buttons */}
        <div className="sticky bottom-0 bg-slate-50 px-6 py-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <Clock className="w-4 h-4 text-emerald-600" />
            <span>Admissions in progress • Daily doubt support</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              id="course-modal-whatsapp"
              href={`https://wa.me/91${INSTITUTE_INFO.phoneClean}?text=Hello%20IIT%20Foundation,%20I%20am%20interested%20in%20the%20${encodeURIComponent(course.title)}%20batch.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2.5 bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 text-xs font-bold rounded-xl transition-colors flex items-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Inquire on WhatsApp</span>
            </a>

            <button
              id="course-modal-book-trial"
              onClick={() => {
                onClose();
                onEnrollTrial(course.title);
              }}
              className="px-4 py-2.5 bg-gradient-to-r from-blue-900 to-indigo-800 hover:from-blue-950 hover:to-indigo-900 text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Award className="w-4 h-4 text-amber-300" />
              <span>Book 2-Day Free Trial</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
