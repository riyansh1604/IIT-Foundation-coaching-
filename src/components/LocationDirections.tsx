import React from 'react';
import { 
  MapPin, 
  Compass, 
  Phone, 
  Clock, 
  Train, 
  Bus, 
  Car, 
  Navigation, 
  ExternalLink
} from 'lucide-react';
import { INSTITUTE_INFO } from '../data/coachingData';

export const LocationDirections: React.FC = () => {
  const GOOGLE_MAPS_URL = "https://www.google.com/maps/place/IIT+Foundation+(Inspiring+Inborn+Talent)/@18.7389129,73.6739858,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2b109fbeda577:0x9f510a404b25f4f6!8m2!3d18.7389129!4d73.6765607!16s%2Fg%2F11x65w97qs?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D";

  const openGoogleMaps = () => {
    window.open(GOOGLE_MAPS_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="location" className="py-10 sm:py-14">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2 mb-10">
        <p className="text-xs font-bold uppercase tracking-widest text-[#133E2B]">
          LOCATION & ACCESS
        </p>
        <h2 className="text-3xl sm:text-4xl font-normal text-[#18181B] tracking-tight font-serif-heading">
          Visit Our Coaching Center
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Conveniently situated near Talegaon Railway Station and Shivaji Maharaj Chowk for easy commute across Talegaon and Varale.
        </p>
      </div>

      <div className="space-y-6">
        
        {/* Top: Interactive Map Widget */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border-2 border-[#18181B] shadow-[4px_4px_0px_0px_#18181B] space-y-4">
          
          {/* Map Frame Visual - Static preview with full-frame Google Maps click */}
          <div 
            id="map-preview-container"
            onClick={openGoogleMaps}
            title="Click anywhere to open in Google Maps"
            className="h-80 sm:h-96 w-full rounded-xl overflow-hidden relative border border-[#18181B] bg-slate-100 cursor-pointer group"
          >
            <iframe
              title="IIT Foundation Coaching Talegaon Location Map Preview"
              className="w-full h-full border-0 pointer-events-none select-none"
              src="https://www.openstreetmap.org/export/embed.html?bbox=73.6600%2C18.7200%2C73.7000%2C18.7500&amp;layer=mapnik&amp;marker=18.7350%2C73.6800"
              loading="lazy"
            ></iframe>

            {/* Hover overlay hint */}
            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/15 transition-colors flex items-center justify-center pointer-events-none">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 text-[#18181B] text-xs font-bold px-3.5 py-1.5 rounded-lg border border-[#18181B] shadow-[2px_2px_0px_0px_#18181B] flex items-center gap-1.5">
                <ExternalLink className="w-3.5 h-3.5 text-[#133E2B]" />
                <span>Click anywhere to open Google Maps</span>
              </span>
            </div>

            {/* Overlay Marker Card */}
            <div className="absolute top-3 left-3 right-3 sm:right-auto sm:max-w-xs bg-white p-3 rounded-xl shadow-[3px_3px_0px_0px_#18181B] border-2 border-[#18181B] text-xs space-y-1 pointer-events-none">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-600"></div>
                <span className="font-bold text-[#18181B] font-brand">IIT Foundation Talegaon</span>
              </div>
              <p className="text-[11px] text-slate-600">
                Harshad Enclave, Talegaon Varale Rd
              </p>
              <div className="pt-1 flex items-center justify-between text-[10px] text-[#133E2B] font-bold">
                <span>5.0 ★ (30 Reviews)</span>
                <span className="text-emerald-700">Open · Closes 9 PM</span>
              </div>
            </div>

            {/* Map Action Button */}
            <div className="absolute bottom-3 right-3 pointer-events-none">
              <div
                className="px-3.5 py-2 bg-[#18181B] group-hover:bg-black text-white text-xs font-bold rounded-xl shadow-lg flex items-center gap-1.5 font-brand border border-[#18181B]"
              >
                <Navigation className="w-3.5 h-3.5 text-amber-400" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </div>
            </div>

          </div>

        </div>

        {/* Below Map Grid: Address Details & Transit Guide */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Main Address Card (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-7 border-2 border-[#18181B] shadow-[4px_4px_0px_0px_#18181B] space-y-4">
            
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border-2 border-[#18181B] flex items-center justify-center text-[#133E2B] shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                  Official Campus Location
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#18181B] font-brand leading-snug">
                  {INSTITUTE_INFO.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {INSTITUTE_INFO.address.full}
                </p>
              </div>
            </div>

            {/* Working Hours Table */}
            <div className="space-y-2 pt-2 border-t border-slate-200">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#18181B] flex items-center gap-1.5 font-brand">
                  <Clock className="w-4 h-4 text-[#133E2B]" />
                  <span>Center Operating Hours</span>
                </span>
                <span className="px-2.5 py-0.5 bg-[#EBF4EC] text-[#133E2B] border border-[#C2E0C6] rounded-full text-xs font-bold">
                  {INSTITUTE_INFO.timings.status}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                <div className="p-2.5 bg-[#FAF8F5] rounded-lg border border-slate-200">
                  <span className="font-bold text-[#18181B] block font-brand">Monday – Saturday</span>
                  <span>7:00 AM – 9:00 PM</span>
                  <p className="text-[10px] text-[#133E2B] font-semibold mt-0.5">Regular Batches & Doubts</p>
                </div>
                <div className="p-2.5 bg-[#FAF8F5] rounded-lg border border-slate-200">
                  <span className="font-bold text-[#18181B] block font-brand">Sunday</span>
                  <span>8:00 AM – 6:00 PM</span>
                  <p className="text-[10px] text-slate-500 font-semibold mt-0.5">Mocks & Parent Meetings</p>
                </div>
              </div>
            </div>

            {/* Quick action buttons */}
            <div className="grid grid-cols-2 gap-2.5 pt-2">
              <button
                id="location-get-directions-btn"
                onClick={openGoogleMaps}
                className="py-2.5 bg-[#133E2B] hover:bg-[#0E2F20] text-white rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 border-2 border-[#18181B] shadow-[2px_2px_0px_0px_#18181B] transition-all cursor-pointer font-brand"
              >
                <Compass className="w-4 h-4 text-amber-300" />
                <span>Open in Maps</span>
              </button>

              <a
                id="location-call-direct-btn"
                href={`tel:${INSTITUTE_INFO.phoneClean}`}
                className="py-2.5 bg-white hover:bg-slate-50 text-[#18181B] rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 border-2 border-[#18181B] shadow-[2px_2px_0px_0px_#18181B] transition-all font-brand"
              >
                <Phone className="w-4 h-4 text-[#133E2B]" />
                <span>Call Center</span>
              </a>
            </div>

          </div>

          {/* Transit & Commute Guide (5 cols) */}
          <div className="lg:col-span-5 bg-[#FAF8F5] rounded-2xl p-6 border-2 border-[#18181B] shadow-[3px_3px_0px_0px_#18181B] space-y-4">
            <h4 className="font-bold text-[#18181B] text-xs sm:text-sm uppercase tracking-wider font-brand">
              How to Reach Us
            </h4>
            <div className="space-y-3 text-xs text-slate-700">
              <div className="flex items-start gap-2.5">
                <Train className="w-4 h-4 text-[#133E2B] shrink-0 mt-0.5" />
                <span><strong>By Local Train:</strong> 2-3 minutes walking distance from Talegaon Railway Station. Exit towards Varale Road.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Bus className="w-4 h-4 text-[#133E2B] shrink-0 mt-0.5" />
                <span><strong>By Bus / Auto:</strong> Stop at Chatrapati Shivaji Maharaj Chowk, Harshad Enclave is along the main road.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Car className="w-4 h-4 text-[#133E2B] shrink-0 mt-0.5" />
                <span><strong>Parking:</strong> Dedicated two-wheeler and four-wheeler visitor parking available in front of the center.</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
