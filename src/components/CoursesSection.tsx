import React, { useState } from 'react';
import { 
  BookOpen, 
  GraduationCap, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Layers,
  Clock,
  Award
} from 'lucide-react';
import { COURSES_DATA } from '../data/coachingData';
import { Course } from '../types';
import { CourseModal } from './CourseModal';

interface CoursesSectionProps {
  onOpenDemoModal: (coursePref?: string) => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({ onOpenDemoModal }) => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  // Define custom top badge colors matching video style
  const getBadgeStyle = (category: string) => {
    switch (category) {
      case 'boards':
        return 'bg-[#EDE9FE] text-[#5B21B6] border-[#DDD6FE]';
      case 'iit_jee':
        return 'bg-[#D8F3DC] text-[#1B4332] border-[#B7E4C7]';
      case 'neet_cet':
        return 'bg-[#FEF3C7] text-[#92400E] border-[#FDE68A]';
      default:
        return 'bg-[#E0F2FE] text-[#0369A1] border-[#BAE6FD]';
    }
  };

  const getBadgeLabel = (category: string) => {
    switch (category) {
      case 'boards':
        return '12TH BOARDS (HSC / CBSE)';
      case 'iit_jee':
        return 'IIT-JEE (MAINS + ADV)';
      case 'neet_cet':
        return 'MHT-CET & NEET EXAM';
      default:
        return '8TH - 10TH PRE-FOUNDATION';
    }
  };

  return (
    <section id="batches" className="py-10 sm:py-14">
      
      {/* Section Header matching video */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
        <h2 className="text-3xl sm:text-4xl font-normal text-[#18181B] tracking-tight font-serif-heading">
          Comprehensive Batch Catalog
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Master your syllabus with our structured, multi-tier coaching programs.
        </p>
      </div>

      {/* 2x2 Grid of Clean Bordered Cards matching video */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
        {COURSES_DATA.map((course) => (
          <div
            key={course.id}
            id={`course-card-${course.id}`}
            className="bg-white rounded-2xl border-2 border-[#18181B] p-6 sm:p-7 shadow-[4px_4px_0px_0px_#18181B] flex flex-col justify-between hover:translate-y-[-2px] transition-all"
          >
            <div className="space-y-4">
              
              {/* Category Badge Pill matching video */}
              <div className="flex items-center justify-between">
                <span className={`inline-block px-3 py-1 border rounded-md text-[11px] font-extrabold uppercase tracking-wider ${getBadgeStyle(course.category)}`}>
                  {getBadgeLabel(course.category)}
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  {course.duration}
                </span>
              </div>

              {/* Title & Marathi subtitle */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#18181B] font-brand">
                  {course.title}
                </h3>
                {course.marathiTitle && (
                  <p className="text-xs font-medium text-[#133E2B] mt-0.5">
                    {course.marathiTitle}
                  </p>
                )}
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {course.description}
              </p>

              {/* Sub-exam / Subject Chips matching video */}
              <div className="flex flex-wrap gap-2 pt-1">
                {course.subjects.map((sub, sIdx) => (
                  <span 
                    key={sIdx}
                    className="px-3 py-1 bg-[#FBF9F5] border border-slate-300 text-slate-800 rounded-lg text-xs font-medium"
                  >
                    {sub}
                  </span>
                ))}
              </div>

            </div>

            {/* Bottom Row matching video tags */}
            <div className="pt-6 mt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="font-extrabold tracking-wider text-[#133E2B] text-[11px] uppercase">
                MOCK TESTS • PYQ ARCHIVES • 1-ON-1 DOUBTS
              </div>

              <div className="flex items-center gap-2">
                <button
                  id={`course-view-syllabus-btn-${course.id}`}
                  onClick={() => setSelectedCourse(course)}
                  className="px-3 py-1.5 bg-[#FAF8F5] hover:bg-slate-100 text-slate-800 border border-[#18181B] rounded-lg font-bold text-xs cursor-pointer transition-colors"
                >
                  Syllabus
                </button>

                <button
                  id={`course-trial-btn-${course.id}`}
                  onClick={() => onOpenDemoModal(course.title)}
                  className="px-3.5 py-1.5 bg-[#133E2B] hover:bg-[#0D2A1D] text-white rounded-lg font-bold text-xs flex items-center gap-1 shadow-xs cursor-pointer transition-colors"
                >
                  <span>Book Trial</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Selected Course Details Modal */}
      {selectedCourse && (
        <CourseModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
          onEnrollTrial={(courseTitle) => {
            setSelectedCourse(null);
            onOpenDemoModal(courseTitle);
          }}
        />
      )}

    </section>
  );
};

