"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const CATEGORIES = [
  {
    name: "Birthday Cakes",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=500",
    href: "/menu?category=Birthday Cakes",
    cols: "col-span-1 md:col-span-2",
  },
  {
    name: "Wedding Cakes",
    image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&q=80&w=500",
    href: "/menu?category=Wedding Cakes",
    cols: "col-span-1",
  },
  {
    name: "Anniversary Cakes",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&q=80&w=500",
    href: "/menu?category=Anniversary Cakes",
    cols: "col-span-1",
  },
  {
    name: "Cupcakes",
    image: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&fit=crop&q=80&w=500",
    href: "/menu?category=Cupcakes",
    cols: "col-span-1",
  },
  {
    name: "Brownies",
    image: "/images/brownies_trio.png",
    href: "/menu?category=Brownies",
    cols: "col-span-1",
  },
  {
    name: "Pastries",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=500",
    href: "/menu?category=Pastries",
    cols: "col-span-1",
  },
  {
    name: "Customized Cakes",
    image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&q=80&w=500",
    href: "/order",
    cols: "col-span-1 md:col-span-2",
  },
];

export default function FeaturedCategories() {
  return (
    <section className="py-24 bg-cream-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-sans font-semibold uppercase tracking-widest text-gold-500 mb-3">
            Handcrafted Delights
          </h2>
          <p className="text-3xl sm:text-4xl font-serif text-chocolate-900">
            Explore Our Categories
          </p>
          <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-4" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.name}
              className={`relative h-[250px] sm:h-[300px] overflow-hidden rounded-2xl group ${cat.cols}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              whileHover={{ y: -5 }}
            >
              {/* Image with zoom scale */}
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                sizes="(max-w-768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              {/* Dark overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-chocolate-900/90 via-chocolate-900/40 to-transparent transition-opacity duration-300 group-hover:opacity-95" />

              {/* Text elements */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                <span className="text-xs font-sans font-medium uppercase tracking-widest text-gold-300 mb-1 opacity-80">
                  Eddie&apos;s Patisserie & Café
                </span>
                <h3 className="text-lg sm:text-xl font-serif text-cream-50 font-normal">
                  {cat.name}
                </h3>
                <div className="h-0.5 w-0 bg-gold-400 mt-2 transition-all duration-300 group-hover:w-16" />
                <Link
                  href={cat.href}
                  className="absolute inset-0"
                  aria-label={`View ${cat.name}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
