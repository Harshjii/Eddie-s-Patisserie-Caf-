"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-cream-50 py-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&q=80&w=1600"
          alt="Artisanal Bakery Background"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-cream-100/10 via-cream-50/50 to-cream-100 z-0 pointer-events-none" />

      {/* Floating Animated Ornaments */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {/* Floating Macaron Left */}
        <motion.div
          className="absolute top-1/4 left-10 md:left-24 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-pastelPink-200 to-pastelPink-300 rounded-full shadow-lg opacity-40 blur-[1px] hidden sm:block"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Floating Gold Sparkle Right */}
        <motion.div
          className="absolute top-1/3 right-12 md:right-32 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-tr from-gold-200 to-gold-400 rounded-full shadow-lg opacity-30 blur-[1px] hidden sm:block"
          animate={{
            y: [0, 25, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Floating Chocolate Drip Bottom Left */}
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-8 h-8 bg-chocolate-400 rounded-full shadow-md opacity-25 hidden md:block"
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Subtitle Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-gold-100/50 border border-gold-400/20 text-gold-600 mb-8"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span className="text-xs font-sans font-medium uppercase tracking-widest">
            Kanpur&apos;s Finest Artisanal Bakery
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-serif text-chocolate-900 leading-tight mb-6 max-w-4xl"
        >
          Every Celebration <br />
          Deserves <span className="font-light italic text-gold-500">Something Sweet</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl font-sans text-chocolate-700/80 max-w-2xl mb-12 leading-relaxed"
        >
          Crafting memories in Kanpur with luxurious cakes, gourmet fudge brownies, and authentic delicacies. 100% fresh, 100% vegetarian, and designed to stun.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 w-full sm:w-auto mb-20"
        >
          <Link
            href="/order"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-500 text-white font-sans font-medium text-sm uppercase tracking-widest transition-all duration-300 shadow-lg shadow-gold-500/20 hover:shadow-xl hover:-translate-y-0.5 text-center flex items-center justify-center space-x-2"
          >
            <span>Order Custom Cake</span>
          </Link>
          <Link
            href="/menu"
            className="px-8 py-4 rounded-full bg-white hover:bg-cream-100 text-chocolate-900 border border-chocolate-200 font-sans font-medium text-sm uppercase tracking-widest transition-all duration-300 hover:-translate-y-0.5 text-center flex items-center justify-center"
          >
            <span>Explore Menu</span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
