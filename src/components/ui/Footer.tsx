"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Instagram, MessageCircle, Send } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-chocolate-900 text-cream-100/90 pt-16 pb-8 border-t border-chocolate-700/50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand & Tagline */}
        <div className="flex flex-col space-y-4">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 overflow-hidden rounded-full border border-gold-500/15 bg-white flex items-center justify-center p-1 shadow-sm shrink-0">
              <Image
                src="/images/logo.png"
                alt="The Cake Crumbles Logo"
                fill
                className="object-cover scale-115"
              />
            </div>
            <span className="text-xl font-serif tracking-wider text-cream-50 font-normal">
              The Cake <span className="italic text-gold-400">Crumbles</span>
            </span>
          </Link>
          <p className="text-sm font-sans italic text-cream-200/70 max-w-xs">
            &ldquo;{SITE_CONFIG.tagline}&rdquo;
          </p>
          <div className="flex space-x-4 pt-2">
            <a
              href={SITE_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-chocolate-700 hover:bg-gold-500 text-cream-50 flex items-center justify-center transition-colors duration-300"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-chocolate-700 hover:bg-green-600 text-cream-50 flex items-center justify-center transition-colors duration-300"
              aria-label="Order on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-gold-400 font-sans font-semibold text-xs uppercase tracking-widest mb-6">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm">
            {[
              { name: "Home", href: "/" },
              { name: "Our Story", href: "/about" },
              { name: "Menu", href: "/menu" },
              { name: "Gallery", href: "/gallery" },
              { name: "Custom Orders", href: "/order" },
              { name: "Contact Us", href: "/contact" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-gold-400 transition-colors duration-300 block py-0.5"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-gold-400 font-sans font-semibold text-xs uppercase tracking-widest mb-2">
            Visit Us
          </h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-start space-x-3">
              <MapPin className="w-4 h-4 text-gold-400 mt-0.5 shrink-0" />
              <a
                href={SITE_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold-400 transition-colors duration-300"
              >
                {SITE_CONFIG.location}
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-4 h-4 text-gold-400 shrink-0" />
              <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-gold-400 transition-colors duration-300">
                {SITE_CONFIG.phone}
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-4 h-4 text-gold-400 shrink-0" />
              <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-gold-400 transition-colors duration-300">
                {SITE_CONFIG.email}
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h3 className="text-gold-400 font-sans font-semibold text-xs uppercase tracking-widest mb-6">
            Newsletter
          </h3>
          <p className="text-xs text-cream-200/70 mb-4 leading-relaxed">
            Subscribe to receive sweet recipe stories, cake trends, and exclusive discounts in Kanpur.
          </p>
          <form onSubmit={handleSubscribe} className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full bg-chocolate-800 text-cream-100 text-sm px-4 py-3 rounded-md border border-chocolate-600 focus:outline-none focus:border-gold-500 pr-12 transition-colors duration-300"
              required
            />
            <button
              type="submit"
              className="absolute right-1 top-1 bottom-1 px-3 bg-gold-500 hover:bg-gold-600 text-white rounded transition-colors duration-300 flex items-center justify-center"
              aria-label="Subscribe to newsletter"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
          {subscribed && (
            <p className="text-xs text-green-400 mt-2">
              Successfully subscribed! Thank you.
            </p>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-chocolate-850 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-cream-200/50 space-y-4 md:space-y-0">
        <div>
          &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All Rights Reserved.
        </div>
        <div className="flex space-x-6">
          <Link href="/contact" className="hover:text-gold-400 transition-colors duration-300">
            Terms of Service
          </Link>
          <Link href="/contact" className="hover:text-gold-400 transition-colors duration-300">
            Privacy Policy
          </Link>
          <a
            href={SITE_CONFIG.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold-400 transition-colors duration-300"
          >
            Locate Us
          </a>
        </div>
      </div>
    </footer>
  );
}
