import React from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { INSTITUTE_INFO } from '../data/coachingData';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onOpenDemoModal: () => void;
  onNavigate: (sectionId: string) => void;
  onNavigateToPortal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDemoModal, onNavigate, onNavigateToPortal }) => {
  return (
    <footer className="bg-[#0B1E17] text-white border-t-2 border-[#18181B] pt-12 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* 3 Columns Footer Info */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-xs sm:text-sm">

          {/* Col 1: Programs */}
          <div className="space-y-3">
            <h4 className="font-bold text-emerald-200 text-sm uppercase tracking-wider">
              Academic Courses
            </h4>
            <ul className="space-y-2 text-slate-300 text-xs">
              <li>
                <button 
                  onClick={() => onNavigate('batches')} 
                  className="hover:text-white transition-colors flex items-center gap-1 text-left cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-emerald-400" />
                  <span>12th Board Science & Maths</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('batches')} 
                  className="hover:text-white transition-colors flex items-center gap-1 text-left cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-emerald-400" />
                  <span>IIT-JEE (Mains + Advanced)</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('batches')} 
                  className="hover:text-white transition-colors flex items-center gap-1 text-left cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-emerald-400" />
                  <span>MHT-CET & NEET Exam Prep</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('batches')} 
                  className="hover:text-white transition-colors flex items-center gap-1 text-left cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-emerald-400" />
                  <span>8th-10th Pre-Foundation STEM</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="font-bold text-emerald-200 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-slate-300 text-xs">
              <li>
                <button onClick={() => onNavigate('overview')} className="hover:text-white transition-colors cursor-pointer">
                  Overview
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('batches')} className="hover:text-white transition-colors cursor-pointer">
                  Batches & Courses
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('methodology')} className="hover:text-white transition-colors cursor-pointer">
                  Methodology
                </button>
              </li>
              {onNavigateToPortal && (
                <li>
                  <button 
                    id="footer-quick-link-student-portal"
                    onClick={onNavigateToPortal} 
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Student Portal
                  </button>
                </li>
              )}
              <li>
                <button onClick={() => onNavigate('location')} className="hover:text-white transition-colors cursor-pointer">
                  Directions & Timings
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Address & Contact */}
          <div className="space-y-3">
            <h4 className="font-bold text-emerald-200 text-sm uppercase tracking-wider">
              Contact & Location
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Harshad Enclave, Talegaon Varale Rd, Talegaon Dabhade 410507</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${INSTITUTE_INFO.phoneClean}`} className="hover:text-white font-bold text-white">
                  {INSTITUTE_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Open · Closes 9:00 PM</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 IIT Foundation (Inspiring Inborn Talent). All rights reserved.</p>
          <p className="text-slate-400">
            Talegaon Dabhade, Pune, Maharashtra 410507 • 090212 16804
          </p>
        </div>

      </div>
    </footer>
  );
};

