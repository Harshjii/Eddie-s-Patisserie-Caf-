"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

const IMAGES = [
  "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=500",
  "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&q=80&w=500",
  "/images/brownies_trio.png",
  "/images/dessert_claypot.png",
];

export default function GalleryPreview() {
  return (
    <section className="py-24 bg-cream-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {IMAGES.map((img, idx) => (
            <motion.div
              key={idx}
              className="relative h-64 sm:h-80 rounded-2xl overflow-hidden group border border-gold-500/5 shadow-sm"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url('${img}')` }}
              />
              <div className="absolute inset-0 bg-chocolate-900/10 group-hover:bg-chocolate-900/40 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Call to Action Banner */}
        <motion.div
          className="relative bg-chocolate-900 text-cream-100 rounded-3xl p-8 sm:p-12 md:p-16 overflow-hidden border border-gold-500/20 shadow-2xl text-center flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Subtle BG Graphic */}
          <div className="absolute inset-0 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:20px_20px] opacity-10" />

          {/* Icon */}
          <div className="w-12 h-12 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center mb-6">
            <Sparkles className="w-6 h-6 animate-pulse" />
          </div>

          {/* Heading */}
          <h3 className="text-2xl sm:text-4xl font-serif text-cream-50 mb-4 max-w-xl leading-tight">
            Let&apos;s Make Your Celebration Special
          </h3>

          {/* Body */}
          <p className="text-sm font-sans text-cream-200/80 max-w-md mb-8 leading-relaxed">
            Planning a wedding, birthday, or milestone event in Kanpur? Order a custom designed cake tailored to your dream flavor and design.
          </p>

          {/* CTA Link Button */}
          <Link
            href="/order"
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-500 text-white font-sans font-semibold text-xs uppercase tracking-widest transition-all duration-300 shadow-md shadow-gold-500/10 hover:-translate-y-0.5"
          >
            <span>Design Your Custom Cake</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
