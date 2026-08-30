import React, { useState } from 'react';
import { 
  Star, 
  MapPin, 
  Phone, 
  Clock, 
  Compass, 
  Bookmark, 
  Share2, 
  Send, 
  Copy, 
  Check, 
  Heart, 
  Sparkles,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { INSTITUTE_INFO } from '../data/coachingData';

interface GooglePlaceSummaryProps {
  onSendToPhone: () => void;
  onOpenPhotos: () => void;
}

export const GooglePlaceSummary: React.FC<GooglePlaceSummaryProps> = ({ onSendToPhone, onOpenPhotos }) => {
  const [isSaved, setIsSaved] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [sharedToast, setSharedToast] = useState(false);

  const handleCopyPlusCode = () => {
    navigator.clipboard.writeText(INSTITUTE_INFO.address.plusCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 3000);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: INSTITUTE_INFO.name,
          text: `Check out ${INSTITUTE_INFO.name} (5.0 ★ Rated Coaching Center) in Talegaon Dabhade! Phone: ${INSTITUTE_INFO.phone}`,
          url: window.location.href,
        });
      } catch {
        navigator.clipboard.writeText(window.location.href);
        setSharedToast(true);
        setTimeout(() => setSharedToast(false), 2500);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setSharedToast(true);
      setTimeout(() => setSharedToast(false), 2500);
    }
  };

  const openGoogleMaps = () => {
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=IIT+Foundation+Talegaon+Varale+Road+Talegaon+Dabhade+Maharashtra+410507`;
    window.open(mapsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="bg-[#FAF8F5] border-2 border-[#18181B] rounded-2xl shadow-[3px_3px_0px_0px_#18181B] p-4 sm:p-5 relative transition-all">
      <div className="flex flex-wrap items-center justify-between gap-4">
        
        {/* Left: Verification badge, Name, Rating */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          <div className="w-8 h-8 rounded-lg bg-[#133E2B] text-white flex items-center justify-center text-xs font-bold shrink-0 border border-[#18181B]">
            G
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-base sm:text-lg font-bold text-[#18181B] font-brand leading-tight">
                {INSTITUTE_INFO.name}
              </h2>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-[#EBF4EC] text-[#133E2B] border border-[#C2E0C6]">
                <Star className="w-2.5 h-2.5 fill-[#133E2B]" /> 5.0 (30 Reviews)
              </span>
            </div>
            <p className="text-xs text-slate-600">
              {INSTITUTE_INFO.address.line1}, {INSTITUTE_INFO.address.city} • <span className="text-[#133E2B] font-semibold">{INSTITUTE_INFO.timings.status}</span>
            </p>
          </div>
        </div>

        {/* Right Action buttons */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            id="place-btn-directions"
            onClick={openGoogleMaps}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#133E2B] hover:bg-[#0D2A1D] text-white rounded-lg text-xs font-bold shadow-2xs transition-all cursor-pointer"
          >
            <Compass className="w-3.5 h-3.5 text-[#95D5B2]" />
            <span>Directions</span>
          </button>

          <button
            id="copy-plus-code-btn"
            onClick={handleCopyPlusCode}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-slate-100 text-slate-800 border border-[#18181B] rounded-lg text-xs font-semibold transition-all cursor-pointer"
            title="Copy Plus Code"
          >
            {copiedCode ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
            <span className="font-mono text-[11px]">{copiedCode ? 'Copied' : INSTITUTE_INFO.address.plusCode}</span>
          </button>

          <button
            id="place-btn-share"
            onClick={handleShare}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-slate-100 text-slate-800 border border-[#18181B] rounded-lg text-xs font-semibold transition-all cursor-pointer"
          >
            <Share2 className="w-3 h-3 text-slate-600" />
            <span>{sharedToast ? 'Copied!' : 'Share'}</span>
          </button>

          <a
            id="place-card-call-btn"
            href={`tel:${INSTITUTE_INFO.phoneClean}`}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#EBF4EC] hover:bg-[#D8EEDD] text-[#133E2B] border border-[#C2E0C6] rounded-lg text-xs font-bold transition-all"
          >
            <Phone className="w-3 h-3 text-emerald-700" />
            <span>{INSTITUTE_INFO.phone}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
