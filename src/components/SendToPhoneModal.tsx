import React, { useState } from 'react';
import { X, Send, Smartphone, MessageCircle, Check, MapPin, Phone } from 'lucide-react';
import { INSTITUTE_INFO } from '../data/coachingData';

interface SendToPhoneModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SendToPhoneModal: React.FC<SendToPhoneModalProps> = ({ isOpen, onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber) return;

    const message = `*${INSTITUTE_INFO.name}*\n📍 ${INSTITUTE_INFO.address.full}\n📌 Plus Code: ${INSTITUTE_INFO.address.plusCode}\n📞 Phone: ${INSTITUTE_INFO.phone}\n⭐ Rating: 5.0 (30 Reviews)\n🗺️ Google Maps: ${INSTITUTE_INFO.googleMapsUrl}`;
    
    // Clean user phone number
    const cleanNum = phoneNumber.replace(/\D/g, '');
    const finalNum = cleanNum.length === 10 ? `91${cleanNum}` : cleanNum;

    window.open(`https://wa.me/${finalNum}?text=${encodeURIComponent(message)}`, '_blank');
    setSent(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200 relative text-slate-900 animate-in fade-in zoom-in-95 duration-200">
        
        <button
          id="close-send-phone-modal-btn"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {sent ? (
          <div className="py-6 text-center space-y-3">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 font-display">Details Sent to WhatsApp!</h3>
            <p className="text-xs text-slate-600">You will receive the center's exact location, directions, and phone number.</p>
            <button
              id="send-phone-done-btn"
              onClick={onClose}
              className="mt-3 px-5 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-bold"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSendWhatsApp} className="space-y-4">
            
            <div>
              <div className="w-10 h-10 bg-indigo-50 text-indigo-700 rounded-xl flex items-center justify-center mb-2">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-black text-slate-900 font-display">
                Send Details to Phone
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Receive {INSTITUTE_INFO.name}'s location, timings, and contact directly on WhatsApp or SMS.
              </p>
            </div>

            {/* Info Preview Card */}
            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <span className="font-semibold">{INSTITUTE_INFO.address.line1}, {INSTITUTE_INFO.address.landmark}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-bold">{INSTITUTE_INFO.phone}</span>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">Your Mobile Number *</label>
              <input
                id="send-phone-mobile-input"
                type="tel"
                required
                placeholder="Enter 10-digit mobile number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-indigo-600"
              />
            </div>

            <button
              id="send-phone-submit-btn"
              type="submit"
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send Info to WhatsApp</span>
            </button>

          </form>
        )}

      </div>
    </div>
  );
};
