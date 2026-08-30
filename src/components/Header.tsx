import React, { useState, useEffect, useRef } from 'react';
import { 
  Phone, 
  MapPin, 
  Star, 
  Menu, 
  X, 
  GraduationCap, 
  Sparkles, 
  Calendar,
  MessageCircle,
  Award,
  BarChart3
} from 'lucide-react';
import { INSTITUTE_INFO } from '../data/coachingData';
import { BrandLogo } from './BrandLogo';

interface HeaderProps {
  onOpenDemoModal: () => void;
  activeSection: string;
  setActiveSection: (sec: string) => void;
  onNavigateToPortal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  onOpenDemoModal, 
  activeSection, 
  setActiveSection,
  onNavigateToPortal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY.current;

      // Always show near the top of the page
      if (currentScrollY < 60) {
        setIsVisible(true);
      } else if (mobileMenuOpen) {
        // Keep header visible if mobile menu is actively open
        setIsVisible(true);
      } else if (scrollDelta > 8) {
        // Scrolling down -> hide
        setIsVisible(false);
      } else if (scrollDelta < -8) {
        // Scrolling up -> show
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  const navLinks = [
    { id: 'batches', label: 'Batches & Courses' },
    { id: 'methodology', label: 'Methodology' },
    { id: 'location', label: 'Center & Hours' },
  ];

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`sticky top-3 z-50 px-3 sm:px-6 max-w-7xl mx-auto w-full transition-all duration-300 ease-in-out ${
        isVisible 
          ? 'translate-y-0 opacity-100' 
          : '-translate-y-24 opacity-0 pointer-events-none'
      }`}
    >
      
      {/* Crisp Minimal Floating Navigation Bar matching video */}
      <div className="bg-[#FAF8F5]/95 backdrop-blur-md border-2 border-[#18181B] rounded-2xl px-4 sm:px-6 py-3 shadow-[3px_3px_0px_0px_#18181B] flex items-center justify-between transition-all">
        
        {/* Brand Logo & Name */}
        <div 
          className="cursor-pointer group hover:opacity-95 transition-opacity"
          onClick={() => scrollTo('overview')}
        >
          <BrandLogo variant="compact" />
        </div>

        {/* Center Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-700">
          {navLinks.map((link) => (
            <button
              key={link.id}
              id={`nav-link-${link.id}`}
              onClick={() => scrollTo(link.id)}
              className={`hover:text-[#133E2B] transition-colors cursor-pointer ${
                activeSection === link.id ? 'text-[#133E2B] font-bold underline underline-offset-4 decoration-[#133E2B]' : ''
              }`}
            >
              {link.label}
            </button>
          ))}
          {onNavigateToPortal && (
            <button
              id="nav-link-portal"
              onClick={onNavigateToPortal}
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#EBF4EC] text-[#133E2B] border border-[#C2E0C6] hover:bg-[#d8edd9] font-bold text-xs transition-colors cursor-pointer"
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Student Portal</span>
            </button>
          )}
        </nav>

        {/* Right Action Button matching video's Join Waitlist / Trial pill */}
        <div className="flex items-center gap-2.5">
          <a
            id="header-direct-call-btn"
            href={`tel:${INSTITUTE_INFO.phoneClean}`}
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-slate-800 hover:text-[#133E2B] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-700" />
            <span>090212 16804</span>
          </a>

          <button
            id="header-book-trial-pill-btn"
            onClick={onOpenDemoModal}
            className="px-5 py-2.5 bg-[#FAF8F5] hover:bg-white text-[#18181B] border-2 border-[#18181B] font-bold text-xs sm:text-sm rounded-full shadow-[2px_2px_0px_0px_#18181B] hover:shadow-[3px_3px_0px_0px_#18181B] active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer flex items-center gap-1.5"
          >
            <span>Book Free Trial</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-slate-800 hover:bg-slate-200/60 rounded-lg cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 bg-[#FAF8F5] border-2 border-[#18181B] rounded-2xl p-4 shadow-[4px_4px_0px_0px_#18181B] space-y-3">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`mobile-nav-link-${link.id}`}
                onClick={() => scrollTo(link.id)}
                className="w-full text-left px-3 py-2 rounded-xl text-sm font-bold text-slate-800 hover:bg-[#EBF4EC] hover:text-[#133E2B] transition-colors"
              >
                {link.label}
              </button>
            ))}
            {onNavigateToPortal && (
              <button
                id="mobile-nav-link-portal"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigateToPortal();
                }}
                className="w-full text-left px-3 py-2 rounded-xl text-sm font-bold bg-[#EBF4EC] text-[#133E2B] flex items-center gap-2 transition-colors border border-[#C2E0C6]"
              >
                <BarChart3 className="w-4 h-4" />
                <span>Student Analytics Portal</span>
              </button>
            )}
          </div>

          <div className="pt-3 border-t border-slate-300 flex items-center justify-between">
            <a
              id="mobile-nav-call-link"
              href={`tel:${INSTITUTE_INFO.phoneClean}`}
              className="text-xs font-bold text-[#133E2B] flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>090212 16804</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemoModal();
              }}
              className="px-4 py-2 bg-[#133E2B] text-white rounded-full text-xs font-bold"
            >
              2-Day Trial
            </button>
          </div>
        </div>
      )}

    </header>
  );
};

