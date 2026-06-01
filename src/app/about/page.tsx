"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, ShieldCheck, Sparkles, Award } from "lucide-react";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: "2018",
    title: "A Sweet Beginning",
    description: "Eddie's Patisserie & Café was born in a cozy home kitchen in Kanpur, founded by Pallavi Jalan out of a deep passion for baking rustic, flavorful, and beautiful bakes.",
  },
  {
    year: "2020",
    title: "Boutique Store Launch",
    description: "Driven by love from the local community, we transitioned into our first physical boutique kitchen, allowing us to expand our recipe experimentation.",
  },
  {
    year: "2022",
    title: "Wedding Cake Specialization",
    description: "We introduced our multi-tier custom wedding cake services, combining delicate sugar-crafting, floral cascades, and premium structural design.",
  },
  {
    year: "2024",
    title: "5,000+ Celebrations",
    description: "Marked a milestone of sweetening over 5,000 birthdays, anniversaries, and corporate events across Kanpur, earning reputation for excellence.",
  },
  {
    year: "2026",
    title: "Artisanal Digital Boutique",
    description: "Launched our premium custom cake builder and digitized inquiry form to provide a flawless, luxurious booking experience for Kanpur foodies.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-cream-50 min-h-screen pb-24">
      {/* Page Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-chocolate-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1200')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-chocolate-950/80" />
        <div className="relative z-10 text-center max-w-2xl px-6">
          <h1 className="text-4xl sm:text-5xl font-serif text-cream-50 mb-4">
            Our Story
          </h1>
          <p className="text-sm sm:text-base font-sans text-cream-200/80 uppercase tracking-widest">
            The Journey of Pallavi Jalan & Eddie&apos;s Patisserie & Café
          </p>
        </div>
      </section>

      {/* Founder & Story Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Chef Image Block */}
          <div className="lg:col-span-5 relative h-[500px] rounded-3xl overflow-hidden shadow-xl border border-gold-500/10">
            <Image
              src="/images/dessert_claypot.png" // Featuring a photo showing the logo with the founder's name
              alt="Eddie's Patisserie & Café by Pallavi Jalan"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-chocolate-900/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-sm border border-gold-500/20 text-center shadow">
              <span className="block text-base font-serif font-bold text-chocolate-900">
                Pallavi Jalan
              </span>
              <span className="block text-[10px] font-sans text-gold-600 uppercase tracking-wider mt-0.5">
                Founder & Head Pastry Chef
              </span>
            </div>
          </div>

          {/* Story Text Block */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-xs font-sans font-semibold uppercase tracking-widest text-gold-500">
              The Heart of Baking
            </h2>
            <h3 className="text-3xl sm:text-4xl font-serif text-chocolate-900 leading-tight">
              Where Passion Meets <br />
              Artisanal Dedication
            </h3>
            <p className="text-sm font-sans text-chocolate-700/80 leading-relaxed">
              Founded in Kanpur in 2018, **Eddie&apos;s Patisserie & Café** started with a simple belief: *every celebration deserves something sweet*. Founder **Pallavi Jalan** began baking in her home kitchen, driven by an obsession to perfect the texture of eggless sponges, the creaminess of ganache, and the aesthetic elegance of dessert styling.
            </p>
            <p className="text-sm font-sans text-chocolate-700/80 leading-relaxed">
              Every brownie box, matka dessert, and tiered wedding cake that leaves our kitchen is hand-crafted with meticulous detail. We have stayed true to our roots by prioritizing pure ingredients, innovative flavor palettes, and tailored customization for each customer.
            </p>

            {/* Core Values Mini Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
              {[
                { icon: Heart, title: "Baked with Love", desc: "Handcrafted details" },
                { icon: ShieldCheck, title: "100% Vegetarian", desc: "Strict eggless recipes" },
                { icon: Sparkles, title: "Bespoke Art", desc: "No placeholders, fully unique" },
              ].map((val, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-gold-500/5 shadow-sm text-center">
                  <div className="w-8 h-8 rounded-full bg-gold-100/50 text-gold-600 flex items-center justify-center mx-auto mb-3">
                    <val.icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-serif font-semibold text-chocolate-900">
                    {val.title}
                  </h4>
                  <p className="text-[10px] text-chocolate-500 font-sans mt-1">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-cream-100 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          {/* Section Title */}
          <div className="text-center mb-20">
            <h2 className="text-xs font-sans font-semibold uppercase tracking-widest text-gold-500 mb-3">
              Our Journey
            </h2>
            <p className="text-3xl sm:text-4xl font-serif text-chocolate-900">
              Timeline Milestones
            </p>
            <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-4" />
          </div>

          {/* Timeline Track */}
          <div className="relative border-l border-gold-300 md:border-l-0 md:before:absolute md:before:left-1/2 md:before:top-0 md:before:bottom-0 md:before:w-0.5 md:before:bg-gold-300 space-y-16 md:space-y-12">
            {TIMELINE_EVENTS.map((event, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={event.year}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[-5px] md:left-1/2 md:translate-x-[-50%] top-1 w-2.5 h-2.5 rounded-full bg-gold-500 ring-4 ring-cream-100 z-10" />

                  {/* Empty Spacer for Desktop Layout */}
                  <div className="hidden md:block w-1/2" />

                  {/* Timeline Card Content */}
                  <div className="w-full md:w-1/2 pl-6 md:pl-0 md:px-12">
                    <div className="glass-card p-8 rounded-2xl border border-gold-500/10 shadow-sm text-left hover:shadow-md transition-shadow duration-300 bg-white/80">
                      <span className="inline-block text-sm font-sans font-bold text-gold-600 bg-gold-100/50 px-3 py-1 rounded-full mb-3">
                        {event.year}
                      </span>
                      <h4 className="text-base font-serif font-bold text-chocolate-900 mb-2">
                        {event.title}
                      </h4>
                      <p className="text-xs text-chocolate-700/80 font-sans leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality Commitment Banner */}
      <section className="py-24 max-w-5xl mx-auto px-6 text-center">
        <div className="glass-card rounded-3xl p-8 sm:p-16 border border-gold-500/10 shadow-xl bg-white/40 flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-gold-500/10 text-gold-600 flex items-center justify-center mb-6">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif text-chocolate-900 mb-4">
            Our Quality Commitment
          </h3>
          <p className="text-sm font-sans text-chocolate-700/80 max-w-2xl leading-relaxed">
            At Eddie&apos;s Patisserie & Café, we refuse to compromise. We do not use industrial cake pre-mixes, margarine, or cheap compounds. Every icing is whipped from fresh dairy cream or imported chocolates. We pledge to deliver a cake that tastes just as magical as it looks, every single time.
          </p>
        </div>
      </section>
    </div>
  );
}
