"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, X, Sparkles, Sliders, Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryItem {
  id: string;
  image: string;
  category: string;
  title: string;
  description: string;
}

const GALLERY_CATEGORIES = ["All", "Celebration Cakes", "Brownies & Pastries", "Artisanal Desserts", "Wedding Tiers"];

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g-1",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800",
    category: "Celebration Cakes",
    title: "Gold-Foil Birthday Truffle",
    description: "Rich dark chocolate ganache cake, accented with hand-laid 24k gold leaf details.",
  },
  {
    id: "g-2",
    image: "/images/brownies_trio.png",
    category: "Brownies & Pastries",
    title: "Gourmet Fudgy Brownie Box",
    description: "An assortment of Hazelnut, Lotus Biscoff, and Pistachio fudge brownie squares.",
  },
  {
    id: "g-3",
    image: "/images/dessert_claypot.png",
    category: "Artisanal Desserts",
    title: "Mango Shrikhand Matka Dessert",
    description: "Hand-churned mango shrikhand decorated with nuts and served in chilled clay pots.",
  },
  {
    id: "g-4",
    image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&q=80&w=800",
    category: "Wedding Tiers",
    title: "3-Tier Rose Cascade Wedding Cake",
    description: "Fresh vanilla bean and raspberry sponge, decorated with hand-shaped cascading sugar roses.",
  },
  {
    id: "g-5",
    image: "/images/brownies_cup.png",
    category: "Brownies & Pastries",
    title: "Brownie Bites Chocolate Tub",
    description: "Fudge brownie cubes drenched in rich chocolate drizzle for on-the-go cravings.",
  },
  {
    id: "g-6",
    image: "/images/strawberry_milkshake.png",
    category: "Artisanal Desserts",
    title: "Strawberry Cream Freakshake",
    description: "Fresh strawberry milkshake topped with a crown of hand-whipped vanilla cream.",
  },
  {
    id: "g-7",
    image: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&fit=crop&q=80&w=800",
    category: "Celebration Cakes",
    title: "Pastel Swirl Cupcake Display",
    description: "Buttercream cupcakes with elegant, modern double-color piping details.",
  },
  {
    id: "g-8",
    image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&q=80&w=800",
    category: "Wedding Tiers",
    title: "Modern Gold-Flecked Wedding Cake",
    description: "Stately cake frosted in marbled fondant, accented with gold flakes and dried botanicals.",
  },
  {
    id: "g-9",
    image: "/images/cup_dessert_icecream.png",
    category: "Artisanal Desserts",
    title: "Waffle Ice Cream Fudge Cup",
    description: "Vanilla bean ice cream served over fudge brownies and topped with warm dark chocolate sauce.",
  }
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Before & After comparison slider state
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isSliding, setIsSliding] = useState(false);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX, rect);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.buttons === 1 || isSliding) {
      const rect = e.currentTarget.getBoundingClientRect();
      handleMove(e.clientX, rect);
    }
  };

  // Filter gallery items
  const filteredItems = GALLERY_ITEMS.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

  const nextLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <div className="bg-cream-50 min-h-screen pb-24">
      {/* Page Hero */}
      <section className="relative h-[30vh] min-h-[220px] flex items-center justify-center bg-chocolate-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&q=80&w=1200')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-chocolate-950/80" />
        <div className="relative z-10 text-center max-w-2xl px-6">
          <h1 className="text-4xl font-serif text-cream-50 mb-2">Our Gallery</h1>
          <p className="text-xs font-sans text-cream-200/80 uppercase tracking-widest">
            A visual showcase of baking craftsmanship & design
          </p>
        </div>
      </section>

      {/* Before & After Interactive Showcase */}
      <section className="py-20 max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-xs font-sans font-semibold uppercase tracking-widest text-gold-500 mb-2 flex items-center justify-center space-x-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Artistry & Reality</span>
          </h2>
          <h3 className="text-2xl sm:text-3xl font-serif text-chocolate-900">
            Before & After Custom Designs
          </h3>
          <p className="text-xs text-chocolate-600/70 font-sans mt-2">
            Slide to compare the reference sketch/design vs the final baked cake
          </p>
        </div>

        {/* Interactive Comparison Slider */}
        <div
          className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-xl border border-gold-500/10 cursor-ew-resize select-none"
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onMouseDown={() => setIsSliding(true)}
          onMouseUp={() => setIsSliding(false)}
          onMouseLeave={() => setIsSliding(false)}
        >
          {/* Under Image: final baked cake (After) */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&q=80&w=1200" // final fondant cake
              alt="Final Baked Cake"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute bottom-4 right-4 bg-chocolate-900/80 backdrop-blur-sm text-cream-50 text-[10px] font-sans font-semibold uppercase tracking-widest px-3 py-1 rounded border border-gold-500/20">
              Final Baked Cake
            </div>
          </div>

          {/* Over Image: reference sketch/draft design (Before) */}
          <div
            className="absolute inset-0 w-full h-full border-r-2 border-gold-400"
            style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
          >
            <Image
              src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=1200" // drawing/painting reference sketch representation
              alt="Reference Design Sketch"
              fill
              className="object-cover grayscale brightness-95 opacity-90 bg-cream-200"
            />
            <div className="absolute bottom-4 left-4 bg-gold-600/80 backdrop-blur-sm text-cream-50 text-[10px] font-sans font-semibold uppercase tracking-widest px-3 py-1 rounded border border-gold-500/20">
              Design Sketch
            </div>
          </div>

          {/* Sliding Bar Divider Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-gold-400 pointer-events-none flex items-center justify-center"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="w-10 h-10 rounded-full bg-gold-500 border-2 border-white text-white flex items-center justify-center shadow-lg pointer-events-none transform -translate-x-1/2">
              <Sliders className="w-4 h-4 rotate-90" />
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs & Masonry Gallery */}
      <section className="max-w-7xl mx-auto px-6 py-12 border-t border-chocolate-200/20">
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {GALLERY_CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-xs font-sans font-medium uppercase tracking-wider transition-colors ${
                activeCategory === category
                  ? "bg-gold-500 text-white shadow-sm"
                  : "bg-white border border-gold-500/10 hover:bg-cream-100 text-chocolate-800"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry-Style Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              className="break-inside-avoid relative rounded-2xl overflow-hidden group shadow-sm border border-gold-500/5 bg-white cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              onClick={() => setLightboxIndex(idx)}
            >
              {/* Image */}
              <div className="relative w-full h-auto min-h-[220px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-103"
                  loading="lazy"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-chocolate-950/80 via-chocolate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10">
                <span className="text-[10px] font-sans font-semibold uppercase tracking-widest text-gold-400 mb-1">
                  {item.category}
                </span>
                <h4 className="text-base font-serif font-semibold text-cream-50 mb-1">
                  {item.title}
                </h4>
                <p className="text-[11px] text-cream-200/80 font-sans line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
                <div className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white flex items-center justify-center">
                  <Eye className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-chocolate-950/95 flex flex-col justify-between p-6"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Top Toolbar */}
            <div className="flex items-center justify-between z-10">
              <span className="text-xs font-sans uppercase tracking-widest text-gold-400 font-semibold">
                {filteredItems[lightboxIndex].category}
              </span>
              <button
                onClick={() => setLightboxIndex(null)}
                className="p-2 bg-white/10 hover:bg-white/20 border border-white/10 text-white rounded-full transition-colors"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Middle Container: Image & Arrows */}
            <div className="relative flex-grow flex items-center justify-center py-8">
              {/* Prev Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevLightbox();
                }}
                className="absolute left-0 sm:left-4 p-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full transition-colors z-10"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Lightbox Image */}
              <div 
                className="relative max-w-4xl max-h-[70vh] w-full h-[70vh] flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={filteredItems[lightboxIndex].image}
                  alt={filteredItems[lightboxIndex].title}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl border border-chocolate-850"
                />
              </div>

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextLightbox();
                }}
                className="absolute right-0 sm:right-4 p-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full transition-colors z-10"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Details panel */}
            <div className="text-center max-w-2xl mx-auto z-10 pb-4" onClick={(e) => e.stopPropagation()}>
              <h3 className="text-lg sm:text-xl font-serif text-cream-50 font-semibold mb-2">
                {filteredItems[lightboxIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-cream-200/70 font-sans leading-relaxed">
                {filteredItems[lightboxIndex].description}
              </p>
              <div className="mt-6">
                <Link
                  href="/order"
                  onClick={() => setLightboxIndex(null)}
                  className="inline-flex items-center space-x-2 px-6 py-2 rounded-full bg-gold-500 hover:bg-gold-600 text-white font-sans font-medium text-xs uppercase tracking-wider transition-colors shadow"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Inquire Custom Cake Like This</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
