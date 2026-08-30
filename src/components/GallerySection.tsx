import React, { useState } from 'react';
import { X } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/coachingData';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'classroom' | 'testing' | 'events'>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const tabs = [
    { id: 'all', label: 'All Photos & Campus' },
    { id: 'classroom', label: 'Classrooms & Doubt Desks' },
    { id: 'testing', label: 'Invigilated Test Series' },
    { id: 'events', label: 'Topper Felicitation & PTM' }
  ];

  const filteredItems = activeTab === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeTab);

  return (
    <section id="gallery" className="py-10 sm:py-14">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2 mb-8">
        <p className="text-xs font-bold uppercase tracking-widest text-[#133E2B]">
          CAMPUS & ENVIRONMENT
        </p>
        <h2 className="text-3xl sm:text-4xl font-normal text-[#18181B] tracking-tight font-serif-heading">
          Life at IIT Foundation
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Focused learning spaces, modern classrooms, 1-on-1 doubt desks, and weekly testing routines at Talegaon.
        </p>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              id={`gallery-tab-${tab.id}`}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border-2 border-[#18181B] font-brand ${
                activeTab === tab.id
                  ? 'bg-[#133E2B] text-white shadow-[2px_2px_0px_0px_#18181B]'
                  : 'bg-white text-[#18181B] hover:bg-[#FAF8F5]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            id={`gallery-item-${item.id}`}
            onClick={() => setSelectedPhoto(item)}
            className="bg-white rounded-2xl border-2 border-[#18181B] overflow-hidden shadow-[3px_3px_0px_0px_#18181B] hover:-translate-y-0.5 transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div className="h-52 w-full overflow-hidden bg-slate-100 relative border-b-2 border-[#18181B]">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-[#18181B] text-xs font-bold px-3 py-1 rounded-lg border border-[#18181B] shadow-[2px_2px_0px_0px_#18181B]">
                  View Photo
                </span>
              </div>
            </div>

            <div className="p-4 space-y-1">
              <h3 className="font-bold text-[#18181B] text-sm font-brand">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 line-clamp-2">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border-2 border-[#18181B] relative text-[#18181B]">
            
            <button
              id="close-gallery-modal-btn"
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-3 right-3 z-10 p-1.5 bg-white border border-[#18181B] text-[#18181B] rounded-full shadow-[2px_2px_0px_0px_#18181B] hover:bg-slate-100 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="h-72 sm:h-96 w-full bg-slate-100 border-b-2 border-[#18181B]">
              <img
                src={selectedPhoto.imageUrl}
                alt={selectedPhoto.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-5 space-y-2">
              <span className="px-2.5 py-0.5 bg-[#FAF8F5] text-[#133E2B] border border-slate-300 rounded-md text-[10px] font-bold uppercase tracking-wide">
                {selectedPhoto.category}
              </span>
              <h3 className="text-lg font-bold font-brand text-[#18181B]">
                {selectedPhoto.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {selectedPhoto.description}
              </p>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
