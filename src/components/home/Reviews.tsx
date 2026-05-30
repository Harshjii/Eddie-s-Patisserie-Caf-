"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_CONFIG } from "@/config/site";

export default function Reviews() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const reviews = SITE_CONFIG.testimonials;

  const nextReview = () => {
    setCurrentIdx((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIdx((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  // Autoplay reviews every 8 seconds
  useEffect(() => {
    const interval = setInterval(nextReview, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-cream-100 overflow-hidden relative">
      <div className="max-w-4xl mx-auto px-6 relative">
        {/* Quote Accent Ornament */}
        <Quote className="absolute top-0 left-6 w-24 h-24 text-gold-500/10 pointer-events-none -translate-y-8" />

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-sans font-semibold uppercase tracking-widest text-gold-500 mb-3">
            Testimonials
          </h2>
          <p className="text-3xl sm:text-4xl font-serif text-chocolate-900">
            Trusted By Sweet Lovers
          </p>
          <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-4" />
        </div>

        {/* Slider Box */}
        <div className="relative glass-card rounded-3xl p-8 sm:p-12 md:p-16 border border-gold-500/10 text-center shadow-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIdx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center"
            >
              {/* Star Rating */}
              <div className="flex text-gold-500 justify-center mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < reviews[currentIdx].rating
                        ? "fill-gold-500 text-gold-500"
                        : "text-cream-300"
                    }`}
                  />
                ))}
              </div>

              {/* Comment text */}
              <blockquote className="text-base sm:text-lg md:text-xl font-serif italic text-chocolate-905 leading-relaxed mb-8 max-w-2xl">
                &ldquo;{reviews[currentIdx].comment}&rdquo;
              </blockquote>

              {/* Reviewer Meta */}
              <div className="flex items-center space-x-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gold-400">
                  <Image
                    src={reviews[currentIdx].photo}
                    alt={reviews[currentIdx].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <span className="block font-serif font-bold text-chocolate-900 text-sm">
                    {reviews[currentIdx].name}
                  </span>
                  <span className="block font-sans text-chocolate-500 text-[10px] uppercase tracking-wider">
                    {reviews[currentIdx].role}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex justify-center space-x-4 mt-10">
            <button
              onClick={prevReview}
              className="w-10 h-10 rounded-full border border-gold-500/20 bg-cream-50 hover:bg-gold-500 hover:text-white flex items-center justify-center text-chocolate-900 transition-colors duration-300 shadow"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextReview}
              className="w-10 h-10 rounded-full border border-gold-500/20 bg-cream-50 hover:bg-gold-500 hover:text-white flex items-center justify-center text-chocolate-900 transition-colors duration-300 shadow"
              aria-label="Next review"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
