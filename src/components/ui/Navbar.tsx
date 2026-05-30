"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_CONFIG } from "@/config/site";

const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "Our Story", href: "/about" },
  { name: "Menu", href: "/menu" },
  { name: "Gallery", href: "/gallery" },
  { name: "Custom Cakes", href: "/order" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile nav on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "glass-nav py-4 shadow-md shadow-chocolate-900/5"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10 overflow-hidden rounded-full border border-gold-500/15 bg-white flex items-center justify-center shadow-sm">
              <Image
                src="/images/logo.png"
                alt="The Cake Crumbles Logo"
                fill
                className="object-cover scale-115"
              />
            </div>
            <span className="text-lg sm:text-xl font-serif tracking-wide text-chocolate-900 group-hover:text-gold-600 transition-colors duration-300">
              The Cake <span className="font-light italic text-gold-500">Crumbles</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative text-sm font-sans font-medium uppercase tracking-widest text-chocolate-700 hover:text-gold-600 transition-colors duration-300 py-1"
                >
                  {item.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavBorder"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold-500"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop Call to Action */}
          <div className="hidden md:block">
            <Link
              href="/order"
              className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-500 text-white font-sans font-medium text-xs uppercase tracking-widest transition-all duration-300 shadow-md shadow-gold-500/10 hover:shadow-lg hover:-translate-y-0.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Order Custom Cake</span>
            </Link>
          </div>

          {/* Mobile Hamburguer Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-chocolate-900 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[72px] z-40 bg-cream-50/98 backdrop-blur-md md:hidden flex flex-col justify-between px-8 py-12"
          >
            <div className="flex flex-col space-y-6">
              {NAV_ITEMS.map((item, idx) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className={`text-xl font-serif tracking-wider ${
                        isActive ? "text-gold-500" : "text-chocolate-900 hover:text-gold-500"
                      } block transition-colors duration-300`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col space-y-6 border-t border-cream-200 pt-8"
            >
              <Link
                href="/order"
                className="w-full flex items-center justify-center space-x-2 py-3 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-white font-sans font-medium text-sm uppercase tracking-widest transition-colors duration-300 shadow-md shadow-gold-500/10"
              >
                <Sparkles className="w-4 h-4" />
                <span>Order Custom Cake</span>
              </Link>
              <div className="text-center text-xs text-chocolate-400 font-sans tracking-wide">
                Kanpur, UP | {SITE_CONFIG.phone}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
