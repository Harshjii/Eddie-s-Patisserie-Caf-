"use client";

import { motion } from "framer-motion";
import { Leaf, Palette, Truck, Award, ShieldCheck } from "lucide-react";

const FEATURES = [
  {
    icon: Leaf,
    title: "100% Fresh Ingredients",
    description: "We use only pure organic vanilla, rich Belgian chocolates, fresh orchard fruits, and premium butter. No artificial preservatives or compounds.",
  },
  {
    icon: Palette,
    title: "Bespoke Custom Designs",
    description: "Your imagination is our canvas. Our master decorators translate your themes into breathtaking edible art for weddings, birthdays, and events.",
  },
  {
    icon: Truck,
    title: "Same Day Delivery",
    description: "Celebrate spontaneously! Order from our best sellers catalog by 4:00 PM and enjoy fresh, temperature-controlled delivery to your doorstep in Kanpur.",
  },
  {
    icon: Award,
    title: "Chef-Crafted Excellence",
    description: "Led by passionate chefs with years of international pastry experience, we guarantee that every slice is moist, balanced, and perfectly frosted.",
  },
  {
    icon: ShieldCheck,
    title: "Eggless & Vegetarian by Default",
    description: "All our creations are 100% vegetarian (egg-free), respecting local culture while achieving unmatched softness, flavor, and texture.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-cream-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Text Content Block */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-xs font-sans font-semibold uppercase tracking-widest text-gold-500">
              Our Philosophy
            </h2>
            <h3 className="text-3xl sm:text-4xl font-serif text-chocolate-900 leading-tight">
              Crafting Perfection <br />
              Into Every Crumb
            </h3>
            <p className="text-sm font-sans text-chocolate-700/80 leading-relaxed">
              At Eddie&apos;s Patisserie & Café, we believe a cake is not just dessert; it is the center of your celebration. That is why we dedicate hours of details to crafting the flavors and designs that Kanpur families have trusted for years.
            </p>
            <div className="w-24 h-0.5 bg-gold-400 mt-6" />

            {/* Asymmetric Graphic Panel */}
            <div className="hidden lg:block relative h-64 rounded-2xl overflow-hidden mt-12 bg-cream-200 border border-gold-500/10">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 hover:scale-110"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&q=80&w=600')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-chocolate-950/80 to-transparent flex items-end p-6">
                <span className="text-xs font-sans text-cream-50/90 tracking-widest uppercase">
                  Baked Fresh Daily in Kanpur
                </span>
              </div>
            </div>
          </div>

          {/* Features Column Block */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {FEATURES.map((feat, idx) => (
              <motion.div
                key={feat.title}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gold-500/5 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-start"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 text-gold-600 flex items-center justify-center mb-6">
                  <feat.icon className="w-6 h-6" />
                </div>
                <h4 className="text-base font-serif font-semibold text-chocolate-900 mb-3">
                  {feat.title}
                </h4>
                <p className="text-xs text-chocolate-700/70 font-sans leading-relaxed">
                  {feat.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
