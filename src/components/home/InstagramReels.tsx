"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Play, Instagram, Eye, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/config/site";

interface ReelData {
  id: string;
  url: string;
  videoPreview: string;
  thumbnail: string;
  caption: string;
  views: string;
  likes: string;
}

const REELS: ReelData[] = [
  {
    id: "reel-1",
    url: "https://www.instagram.com/reel/DXBetUZkyuL/",
    videoPreview: "https://assets.mixkit.co/videos/preview/mixkit-chocolate-syrup-pouring-on-cupcake-34426-large.mp4",
    thumbnail: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=600",
    caption: "Artisanal cake decorating in action! Glazing our signature chocolate creation. ✨🎂 #bakinglove #kanpurcakes",
    views: "15.4K",
    likes: "1,204",
  },
  {
    id: "reel-2",
    url: "https://www.instagram.com/reel/DV2P6PcE2ix/",
    videoPreview: "https://assets.mixkit.co/videos/preview/mixkit-pouring-chocolate-sauce-on-a-brownie-40018-large.mp4",
    thumbnail: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&q=80&w=600",
    caption: "Satisfying chocolate drizzle over fresh, fudgy chocolate brownies. Box yours today! 🍫🤎 #brownies #kanpur",
    views: "24.1K",
    likes: "2,350",
  },
  {
    id: "reel-3",
    url: "https://www.instagram.com/reel/CeqlRklOSqd/",
    videoPreview: "https://assets.mixkit.co/videos/preview/mixkit-pastry-chef-decorating-a-chocolate-cake-34431-large.mp4",
    thumbnail: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&q=80&w=600",
    caption: "A sneak peek into the creation of our master tiered wedding fondant designs. 👩‍🍳🍰 #weddingcakes #pastrychef",
    views: "42.8K",
    likes: "5,820",
  },
  {
    id: "reel-4",
    url: "https://www.instagram.com/reel/DXBetUZkyuL/", // Fallbacks for slider visual balance
    videoPreview: "https://assets.mixkit.co/videos/preview/mixkit-pastry-chef-dusting-powdered-sugar-on-muffins-34432-large.mp4",
    thumbnail: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&fit=crop&q=80&w=600",
    caption: "Freshly baked sugar-dusted cupcakes! Light, fluffy and absolutely delicious. 🧁✨ #cupcakes #bakerylife",
    views: "18.2K",
    likes: "1,540",
  },
  {
    id: "reel-5",
    url: "https://www.instagram.com/reel/DV2P6PcE2ix/",
    videoPreview: "https://assets.mixkit.co/videos/preview/mixkit-pastry-chef-preparing-a-cake-in-a-kitchen-34430-large.mp4",
    thumbnail: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&q=80&w=600",
    caption: "Behind the scenes of our kitchen preparing premium fresh-fruit cakes! 🍎🍓 #freshfruit #kanpurbakes",
    views: "31.5K",
    likes: "3,110",
  }
];

export default function InstagramReels() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      sliderRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-24 bg-chocolate-900 text-cream-100 overflow-hidden relative">
      {/* Background Subtle Sparkles */}
      <div className="absolute inset-0 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <h2 className="text-xs font-sans font-semibold uppercase tracking-widest text-gold-400 mb-3 flex items-center space-x-2">
              <Instagram className="w-4 h-4 text-gold-400" />
              <span>Sweet Moments From Instagram</span>
            </h2>
            <p className="text-3xl sm:text-4xl font-serif text-cream-50">
              Go Behind The Scenes
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex items-center space-x-6">
            <a
              href={SITE_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-sm text-gold-400 hover:text-gold-300 font-sans tracking-wider font-semibold uppercase transition-colors"
            >
              <span>Follow Us @thecakecrumbles</span>
            </a>
            {/* Nav Arrows */}
            <div className="flex space-x-2">
              <button
                onClick={() => scroll("left")}
                className="w-10 h-10 rounded-full border border-chocolate-700 bg-chocolate-850 hover:bg-gold-500 hover:text-white flex items-center justify-center transition-colors duration-300"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-10 h-10 rounded-full border border-chocolate-700 bg-chocolate-850 hover:bg-gold-500 hover:text-white flex items-center justify-center transition-colors duration-300"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Netflix-Style Horizontal Slider */}
        <div
          ref={sliderRef}
          className="flex space-x-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none" }}
        >
          {REELS.map((reel) => {
            const isHovered = hoveredId === reel.id;

            return (
              <div
                key={reel.id}
                className="flex-shrink-0 w-[280px] sm:w-[320px] snap-start relative"
                onMouseEnter={() => setHoveredId(reel.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <motion.div
                  className="w-full h-[480px] rounded-2xl overflow-hidden relative bg-chocolate-850 border border-chocolate-800 shadow-xl"
                  animate={{
                    scale: isHovered ? 1.03 : 1,
                    y: isHovered ? -5 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Thumbnail / Image Cover */}
                  <img
                    src={reel.thumbnail}
                    alt="Instagram Reel Thumbnail"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                      isHovered ? "opacity-0" : "opacity-100"
                    }`}
                  />

                  {/* Autoplay Preview Video */}
                  {isHovered && (
                    <video
                      src={reel.videoPreview}
                      className="absolute inset-0 w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  )}

                  {/* Glass Card Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-chocolate-950 via-chocolate-950/20 to-chocolate-950/40 opacity-80" />

                  {/* Play Overlay */}
                  {!isHovered && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <motion.div
                        className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Play className="w-6 h-6 text-white fill-white ml-1" />
                      </motion.div>
                    </div>
                  )}

                  {/* Instagram Reels Badge */}
                  <div className="absolute top-4 left-4 p-2 rounded-full bg-chocolate-900/60 backdrop-blur-sm border border-chocolate-800 flex items-center justify-center">
                    <Instagram className="w-4 h-4 text-gold-400" />
                  </div>

                  {/* Hover Previews - Views & Likes */}
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <span className="flex items-center space-x-1 px-2.5 py-1 rounded-md bg-chocolate-900/60 backdrop-blur-sm border border-chocolate-800 text-[10px] font-sans font-semibold tracking-wider text-cream-200">
                      <Eye className="w-3 h-3 text-gold-400" />
                      <span>{reel.views}</span>
                    </span>
                    <span className="flex items-center space-x-1 px-2.5 py-1 rounded-md bg-chocolate-900/60 backdrop-blur-sm border border-chocolate-800 text-[10px] font-sans font-semibold tracking-wider text-cream-200">
                      <Heart className="w-3 h-3 text-rose-400 fill-rose-450" />
                      <span>{reel.likes}</span>
                    </span>
                  </div>

                  {/* Bottom Content / Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end text-cream-100 z-10">
                    <p className="text-xs font-sans tracking-wide leading-relaxed line-clamp-3 mb-4 text-cream-200/90">
                      {reel.caption}
                    </p>

                    <a
                      href={reel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center space-x-2 py-2.5 rounded-full bg-white hover:bg-gold-500 text-chocolate-900 hover:text-white font-sans font-semibold text-xs uppercase tracking-wider transition-colors duration-300"
                    >
                      <Play className="w-3 h-3 fill-current" />
                      <span>Watch Full Reel</span>
                    </a>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Social Proof Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16 border-t border-chocolate-850 pt-12 text-center">
          <div>
            <span className="block text-3xl font-serif text-gold-400">100K+</span>
            <span className="text-[10px] font-sans uppercase tracking-widest text-cream-200/60 mt-1 block">Monthly Impressions</span>
          </div>
          <div>
            <span className="block text-3xl font-serif text-gold-400">15K+</span>
            <span className="text-[10px] font-sans uppercase tracking-widest text-cream-200/60 mt-1 block">Happy Followers</span>
          </div>
          <div className="col-span-2 md:col-span-1">
            <span className="block text-3xl font-serif text-gold-400">1.2M+</span>
            <span className="text-[10px] font-sans uppercase tracking-widest text-cream-200/60 mt-1 block">Lifetime Views</span>
          </div>
        </div>
      </div>
    </section>
  );
}
