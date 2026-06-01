"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, MessageCircle, ChevronDown, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API request
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="bg-cream-50 min-h-screen pb-24">
      {/* Page Hero */}
      <section className="relative h-[30vh] min-h-[220px] flex items-center justify-center bg-chocolate-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1200')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-chocolate-950/80" />
        <div className="relative z-10 text-center max-w-2xl px-6">
          <h1 className="text-4xl font-serif text-cream-50 mb-2">Contact Us</h1>
          <p className="text-xs font-sans text-cream-200/80 uppercase tracking-widest">
            We would love to hear from you. Visit our boutique in Kanpur
          </p>
        </div>
      </section>

      {/* Main Grid Contact & Info */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Coordinates */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              <h2 className="text-xs font-sans font-bold uppercase tracking-widest text-gold-500">
                Get In Touch
              </h2>
              <h3 className="text-3xl font-serif text-chocolate-900 leading-tight">
                Visit Our Sweet Haven
              </h3>
              <p className="text-xs text-chocolate-700/80 leading-relaxed font-sans">
                Whether you have a general query, want to schedule a tasting consultation for your wedding cake, or just want to talk sweet toppings, reach out to us!
              </p>
            </div>

            {/* Quick Cards */}
            <div className="space-y-6">
              {[
                { icon: MapPin, label: "Our Address", value: SITE_CONFIG.location, href: SITE_CONFIG.googleMapsUrl },
                { icon: Phone, label: "Order Hotline", value: SITE_CONFIG.phone, href: `tel:${SITE_CONFIG.phone}` },
                { icon: Mail, label: "General Email", value: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}` },
              ].map((card, idx) => (
                <div key={idx} className="flex items-start space-x-4 p-5 rounded-2xl bg-white border border-gold-500/5 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/10 text-gold-600 flex items-center justify-center shrink-0">
                    <card.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-sans font-bold uppercase tracking-widest text-gold-600 mb-1">
                      {card.label}
                    </span>
                    <a
                      href={card.href}
                      target={card.icon === MapPin ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className="text-xs font-serif font-bold text-chocolate-900 hover:text-gold-500 transition-colors"
                    >
                      {card.value}
                    </a>
                  </div>
                </div>
              ))}

              {/* Hours Card */}
              <div className="flex items-start space-x-4 p-5 rounded-2xl bg-white border border-gold-500/5 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 text-gold-600 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-sans font-bold uppercase tracking-widest text-gold-600 mb-2">
                    Opening Hours
                  </span>
                  {SITE_CONFIG.businessHours.map((bh, i) => (
                    <span key={i} className="block text-xs font-sans text-chocolate-700 leading-relaxed">
                      <strong>{bh.days}:</strong> {bh.hours}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct WhatsApp CTA */}
            <div className="pt-4">
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 py-4 rounded-full bg-green-500 hover:bg-green-600 text-white font-sans font-semibold text-xs uppercase tracking-widest transition-all shadow-md shadow-green-500/10"
              >
                <MessageCircle className="w-4 h-4 fill-white/10" />
                <span>Chat Instantly on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card bg-white rounded-3xl p-8 sm:p-10 border border-gold-500/10 shadow-lg">
              <h4 className="text-lg font-serif font-bold text-chocolate-900 mb-6 pb-2 border-b border-cream-200">
                Send Us A Message
              </h4>

              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label className="text-[10px] font-sans font-bold uppercase tracking-widest text-chocolate-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      className="bg-cream-50 text-chocolate-900 border border-gold-500/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold-500"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[10px] font-sans font-bold uppercase tracking-widest text-chocolate-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your email address"
                      className="bg-cream-50 text-chocolate-900 border border-gold-500/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold-500"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="text-[10px] font-sans font-bold uppercase tracking-widest text-chocolate-700 mb-2">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Inquiry subject"
                    className="bg-cream-50 text-chocolate-900 border border-gold-500/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold-500"
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-[10px] font-sans font-bold uppercase tracking-widest text-chocolate-700 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    placeholder="Type your message here..."
                    className="bg-cream-50 text-chocolate-900 border border-gold-500/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold-500 resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-chocolate-900 hover:bg-chocolate-850 text-white font-sans font-semibold text-xs uppercase tracking-widest transition-all shadow-md shadow-chocolate-900/10 hover:shadow-lg hover:-translate-y-0.5"
                >
                  Send Inquiry
                </button>
              </form>

              {submitted && (
                <div className="mt-4 p-4 bg-green-50 rounded-xl border border-green-150 text-center">
                  <p className="text-xs text-green-700 font-sans font-semibold animate-pulse">
                    Thank you! Your message has been sent successfully. We will get back to you shortly.
                  </p>
                </div>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* Google Map Embed section */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="text-center mb-10">
          <h3 className="text-2xl font-serif text-chocolate-900">Locate Us</h3>
          <div className="w-12 h-0.5 bg-gold-400 mx-auto mt-3" />
        </div>
        <div className="relative h-[450px] w-full rounded-3xl overflow-hidden shadow-xl border border-gold-500/10 bg-cream-200">
          <iframe
            title="Eddie's Patisserie & Café Kanpur Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114312.30211333333!2d80.228026!3d26.4499232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c470bb9a69145%3A0xe9895f32ebf25df1!2sThe%20Cake%20Crumbles!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-24 bg-cream-100 relative">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-xs font-sans font-semibold uppercase tracking-widest text-gold-500 mb-3">
              Have Questions?
            </h2>
            <p className="text-3xl font-serif text-chocolate-900">
              Frequently Asked Questions
            </p>
            <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-4" />
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {SITE_CONFIG.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-gold-500/5 shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  >
                    <span className="text-sm font-serif font-bold text-chocolate-900 flex items-center space-x-2">
                      <Sparkles className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                      <span>{faq.question}</span>
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-chocolate-500 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-[300px] border-t border-cream-200" : "max-h-0"
                    } overflow-hidden`}
                  >
                    <p className="p-6 text-xs text-chocolate-700/80 font-sans leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </div>
  );
}
