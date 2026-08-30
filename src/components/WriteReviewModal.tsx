import React, { useState } from 'react';
import { X, Star, Sparkles, Check, Send } from 'lucide-react';
import { Review } from '../types';

interface WriteReviewModalProps {
  onClose: () => void;
  onSubmitReview: (review: Review) => void;
}

export const WriteReviewModal: React.FC<WriteReviewModalProps> = ({ onClose, onSubmitReview }) => {
  const [author, setAuthor] = useState('');
  const [role, setRole] = useState<'Student' | 'Parent' | 'Alumni'>('Student');
  const [courseTaken, setCourseTaken] = useState('12th Board Science Batch');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [content, setContent] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>(['caring faculties', 'concept clarity']);
  const [submitted, setSubmitted] = useState(false);

  const availableTags = [
    'caring faculties',
    'performance tracking',
    'regular testing',
    'experienced teachers',
    'concept clarity',
    '12th board preparation',
    'individual attention',
    'best coaching in Talegaon'
  ];

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !content.trim()) return;

    const newRev: Review = {
      id: `rev-user-${Date.now()}`,
      author: `${author.trim()} (${role})`,
      rating,
      timeAgo: 'Just now',
      reviewCount: 1,
      courseTaken,
      verifiedStudent: true,
      content: content.trim(),
      tags: selectedTags,
      ownerResponse: {
        timeAgo: 'Just now',
        text: 'Thank You for your wonderful review! We are committed to academic excellence.'
      },
      likes: 1
    };

    setSubmitted(true);
    setTimeout(() => {
      onSubmitReview(newRev);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-200 relative text-slate-900 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          id="close-write-review-btn"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 font-display">Thank You for Your Review!</h3>
            <p className="text-xs text-slate-600">Your review has been verified and added to the IIT Foundation wall.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-600 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                Google Review Portal
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-display">
                Write a Review for IIT Foundation
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Share your learning experience, faculty mentorship, and test score improvement.
              </p>
            </div>

            {/* Star Rating Selector */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center space-y-1.5">
              <span className="text-xs font-bold text-slate-700 block">Your Overall Rating</span>
              <div className="flex items-center justify-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="p-1 cursor-pointer transition-transform hover:scale-110"
                  >
                    <Star
                      className={`w-7 h-7 ${
                        (hoverRating || rating) >= star
                          ? 'fill-amber-400 text-amber-400'
                          : 'text-slate-300'
                      }`}
                    />
                  </button>
                ))}
              </div>
              <span className="text-xs font-bold text-amber-600">
                {rating === 5 ? '5.0 ★ Excellent - Highly Recommended!' : `${rating}.0 ★`}
              </span>
            </div>

            {/* Name and Role */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sharvari Kamble"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-indigo-600 focus:bg-white"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">You are a *</label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value as any)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-indigo-600 focus:bg-white"
                >
                  <option value="Student">Student</option>
                  <option value="Parent">Parent</option>
                  <option value="Alumni">Alumni / Ex-Student</option>
                </select>
              </div>
            </div>

            {/* Course Taken */}
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">Course / Batch Attended</label>
              <select
                value={courseTaken}
                onChange={(e) => setCourseTaken(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-indigo-600 focus:bg-white"
              >
                <option value="12th Board Science Batch">12th Board Science (Maths & Physics)</option>
                <option value="IIT-JEE Comprehensive">IIT-JEE (Mains + Advanced)</option>
                <option value="MHT-CET & NEET Crash Batch">MHT-CET & NEET Exam Prep</option>
                <option value="Class 8th-10th Pre-Foundation">Class 8th-10th Pre-Foundation</option>
              </select>
            </div>

            {/* Review Content */}
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">Your Detailed Review *</label>
              <textarea
                required
                rows={3}
                placeholder="Explain how the faculties, concept clarity, doubt sessions, and tests helped you..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-indigo-600 focus:bg-white"
              />
            </div>

            {/* Tags Selection */}
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1.5">Key Highlights to Tag</label>
              <div className="flex flex-wrap gap-1.5">
                {availableTags.map((tag) => {
                  const isSelected = selectedTags.includes(tag);
                  return (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => toggleTag(tag)}
                      className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                        isSelected
                          ? 'bg-indigo-900 text-white'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {isSelected ? `✓ ${tag}` : `+ ${tag}`}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Submit Button */}
            <button
              id="submit-review-form-btn"
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-900 to-indigo-800 hover:from-blue-950 hover:to-indigo-900 text-white font-bold rounded-xl text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
            >
              <Send className="w-4 h-4" />
              <span>Post Verified Review</span>
            </button>

          </form>
        )}

      </div>
    </div>
  );
};
