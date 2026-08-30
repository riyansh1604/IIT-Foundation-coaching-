import React, { useState } from 'react';
import { 
  Star, 
  ThumbsUp, 
  MessageSquare, 
  CheckCircle2, 
  Search, 
  Filter, 
  PenLine, 
  Award,
  Sparkles,
  Share2
} from 'lucide-react';
import { REVIEWS_DATA, REVIEW_TAGS, INSTITUTE_INFO } from '../data/coachingData';
import { Review } from '../types';
import { WriteReviewModal } from './WriteReviewModal';

export const ReviewsSection: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>(REVIEWS_DATA);
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [likedReviews, setLikedReviews] = useState<Record<string, boolean>>({});
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);

  const handleLike = (id: string) => {
    setLikedReviews(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleAddReview = (newRev: Review) => {
    setReviews([newRev, ...reviews]);
  };

  const filteredReviews = reviews.filter((rev) => {
    const matchesTag = selectedTag === 'all' || rev.tags.includes(selectedTag);
    const matchesSearch = 
      rev.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rev.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rev.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTag && matchesSearch;
  });

  return (
    <section id="reviews" className="py-10 sm:py-14">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
        <h2 className="text-3xl sm:text-4xl font-normal text-[#18181B] tracking-tight font-serif-heading">
          What Students & Parents Say About Us
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          100% genuine reviews from Talegaon students who transformed their mathematics and science marks, board scores, and competitive exam rankings.
        </p>
      </div>

      {/* Review Summary Scoreboard Card matching editorial style */}
      <div className="bg-white rounded-3xl border-2 border-[#18181B] shadow-[4px_4px_0px_0px_#18181B] p-6 sm:p-8 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          
          {/* Big Rating Block */}
          <div className="md:col-span-4 text-center md:text-left border-b md:border-b-0 md:border-r border-slate-200 pb-6 md:pb-0 md:pr-8">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <span className="text-5xl sm:text-6xl font-normal text-[#18181B] font-serif-heading">5.0</span>
              <div>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs font-bold text-slate-700 mt-1">
                  Based on {reviews.length} Verified Reviews
                </p>
              </div>
            </div>
            <p className="text-xs text-[#133E2B] font-bold mt-2.5 bg-[#EBF4EC] py-1.5 px-3 rounded-lg inline-block border border-[#C2E0C6]">
              ✓ 100% 5-Star Recommendation Rate
            </p>
          </div>

          {/* Star Bar breakdown (All 5 Star) */}
          <div className="md:col-span-5 space-y-1.5 text-xs">
            <div className="flex items-center gap-3">
              <span className="w-12 font-bold text-slate-700">5 stars</span>
              <div className="flex-1 bg-slate-100 h-2.5 rounded-full overflow-hidden border border-slate-200">
                <div className="bg-amber-400 h-full w-full rounded-full"></div>
              </div>
              <span className="w-8 font-bold text-slate-900 text-right">100%</span>
            </div>

            {[4, 3, 2, 1].map((s) => (
              <div key={s} className="flex items-center gap-3 text-slate-400">
                <span className="w-12">{s} stars</span>
                <div className="flex-1 bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-slate-200 h-full w-0 rounded-full"></div>
                </div>
                <span className="w-8 text-right font-semibold">0%</span>
              </div>
            ))}
          </div>

          {/* Write a Review Action */}
          <div className="md:col-span-3 text-center md:text-right space-y-2.5">
            <button
              id="open-write-review-btn"
              onClick={() => setIsWriteModalOpen(true)}
              className="w-full sm:w-auto px-5 py-3 bg-[#133E2B] hover:bg-[#0D2A1D] text-white font-bold rounded-xl text-xs sm:text-sm shadow-[2px_2px_0px_0px_#18181B] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <PenLine className="w-4 h-4 text-emerald-300" />
              <span>Write a Review</span>
            </button>
            <p className="text-[11px] text-slate-500">
              Google Maps verified feedback
            </p>
          </div>

        </div>
      </div>

      {/* Review Filter Tags and Search Strip */}
      <div className="space-y-4 mb-6">
        
        {/* Search & Counter */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id="search-reviews-input"
              type="text"
              placeholder="Search by student name or topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-white border-2 border-[#18181B] rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden shadow-2xs"
            />
          </div>

          <div className="text-xs font-semibold text-slate-600 self-end sm:self-center">
            Showing <strong className="text-slate-900">{filteredReviews.length}</strong> of {reviews.length} reviews
          </div>
        </div>

        {/* Tag Pills */}
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-1 flex items-center gap-1">
            <Filter className="w-3 h-3" /> Topics:
          </span>
          {REVIEW_TAGS.map((tag) => (
            <button
              key={tag.id}
              id={`review-tag-${tag.id.replace(/\s+/g, '-')}`}
              onClick={() => setSelectedTag(tag.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                selectedTag === tag.id
                  ? 'bg-[#133E2B] text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-300 hover:bg-[#FAF8F5]'
              }`}
            >
              {tag.label}
            </button>
          ))}
        </div>

      </div>

      {/* Reviews Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredReviews.map((rev) => {
          const isLiked = !!likedReviews[rev.id];
          const totalLikes = rev.likes + (isLiked ? 1 : 0);

          return (
            <div
              key={rev.id}
              id={`review-card-${rev.id}`}
              className="bg-white rounded-2xl p-5 sm:p-6 border-2 border-[#18181B] shadow-[3px_3px_0px_0px_#18181B] flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                
                {/* Author row */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#133E2B] text-white font-bold flex items-center justify-center text-sm border border-[#18181B]">
                      {rev.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm leading-tight font-brand">
                        {rev.author}
                      </h4>
                      <p className="text-[11px] text-slate-500">
                        {rev.reviewCount} review{rev.reviewCount > 1 ? 's' : ''} • {rev.timeAgo}
                      </p>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex text-amber-400 shrink-0">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Course badge if available */}
                {rev.courseTaken && (
                  <span className="inline-block px-2.5 py-0.5 bg-[#EBF4EC] text-[#133E2B] text-[11px] font-bold rounded-md border border-[#C2E0C6]">
                    {rev.courseTaken}
                  </span>
                )}

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  &ldquo;{rev.content}&rdquo;
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 pt-1">
                  {rev.tags.map((t, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-0.5 bg-slate-100 text-slate-700 rounded text-[10px] font-medium"
                    >
                      #{t}
                    </span>
                  ))}
                </div>

                {/* Owner Response */}
                {rev.ownerResponse && (
                  <div className="bg-[#FAF8F5] rounded-xl p-3 border border-slate-300 text-xs space-y-1 text-slate-700">
                    <div className="flex items-center justify-between text-[11px] text-slate-500 font-semibold">
                      <span className="font-bold text-slate-800">Response from IIT Foundation</span>
                      <span>{rev.ownerResponse.timeAgo}</span>
                    </div>
                    <p className="text-xs italic text-slate-600">
                      {rev.ownerResponse.text}
                    </p>
                  </div>
                )}

              </div>

              {/* Card Footer: Like & Share */}
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <button
                  id={`like-review-btn-${rev.id}`}
                  onClick={() => handleLike(rev.id)}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                    isLiked 
                      ? 'bg-[#EBF4EC] text-[#133E2B] font-bold' 
                      : 'hover:bg-slate-100 text-slate-600'
                  }`}
                >
                  <ThumbsUp className={`w-3.5 h-3.5 ${isLiked ? 'fill-[#133E2B] text-[#133E2B]' : ''}`} />
                  <span>{totalLikes} Helpful</span>
                </button>

                <span className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Verified
                </span>
              </div>

            </div>
          );
        })}
      </div>

      {/* Write Review Modal */}
      {isWriteModalOpen && (
        <WriteReviewModal
          onClose={() => setIsWriteModalOpen(false)}
          onSubmitReview={handleAddReview}
        />
      )}

    </section>
  );
};

