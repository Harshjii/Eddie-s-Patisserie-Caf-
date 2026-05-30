"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, MessageCircle, Info, Sparkles, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_CONFIG, Product } from "@/config/site";

export default function BestSellers() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const bestSellers = SITE_CONFIG.products.filter((p) => p.isBestSeller);

  const handleWhatsAppOrder = (product: Product) => {
    const textMessage = encodeURIComponent(
      `Hello! I want to order your Best Seller: "${product.name}" (Price: ₹${product.price}). Please confirm availability and delivery details.`
    );
    window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${textMessage}`, "_blank");
  };

  return (
    <section className="py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-sans font-semibold uppercase tracking-widest text-gold-500 mb-3">
            Customer Favorites
          </h2>
          <p className="text-3xl sm:text-4xl font-serif text-chocolate-900">
            Our Signature Best Sellers
          </p>
          <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-4" />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestSellers.map((product, idx) => (
            <motion.div
              key={product.id}
              className="glass-card rounded-2xl overflow-hidden flex flex-col h-full hover:shadow-xl hover:shadow-chocolate-900/5 transition-all duration-300 relative group border border-gold-500/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden bg-cream-200">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-w-768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority={idx < 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-chocolate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col space-y-2">
                  <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-gold-500 text-white font-sans font-semibold text-[10px] uppercase tracking-wider shadow">
                    <Sparkles className="w-2.5 h-2.5" />
                    <span>Best Seller</span>
                  </span>
                </div>

                {/* Rating Badge */}
                <div className="absolute bottom-4 right-4 flex items-center space-x-1 px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-sm text-chocolate-900 text-xs font-semibold shadow">
                  <Star className="w-3.5 h-3.5 fill-gold-500 text-gold-500" />
                  <span>{product.rating.toFixed(1)}</span>
                </div>
              </div>

              {/* Product Content */}
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-[10px] font-sans font-semibold uppercase tracking-widest text-gold-600 mb-1">
                  {product.category}
                </span>
                <h3 className="text-base font-serif font-semibold text-chocolate-900 line-clamp-1 mb-2 group-hover:text-gold-600 transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-xs text-chocolate-700/70 font-sans line-clamp-2 mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Price & Action Row */}
                <div className="mt-auto pt-4 border-t border-cream-200 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-chocolate-400 font-sans uppercase tracking-wider">Starting at</span>
                    <span className="text-lg font-serif font-bold text-chocolate-900">₹{product.price}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="p-2 rounded-full bg-cream-100 hover:bg-gold-100 text-chocolate-750 transition-colors duration-300"
                      aria-label="View product details"
                    >
                      <Info className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleWhatsAppOrder(product)}
                      className="inline-flex items-center space-x-1.5 px-3 py-2 rounded-full bg-green-500 hover:bg-green-600 text-white font-sans font-medium text-xs uppercase tracking-wider transition-colors duration-300"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Order</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Full Menu CTA */}
        <div className="text-center mt-16">
          <Link
            href="/menu"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-gold-500 text-gold-600 hover:bg-gold-500 hover:text-white font-sans font-medium text-xs uppercase tracking-widest transition-colors duration-300"
          >
            Explore Full Menu
          </Link>
        </div>
      </div>

      {/* Product Detail Lightbox */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-chocolate-900/60 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              className="bg-white max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl relative border border-gold-500/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-chocolate-900 shadow-md transition-colors duration-300"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Image */}
                <div className="relative h-64 md:h-full min-h-[300px]">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-sans font-semibold uppercase tracking-widest text-gold-600 mb-2 block">
                      {selectedProduct.category}
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-chocolate-900 mb-3">
                      {selectedProduct.name}
                    </h3>
                    <div className="flex items-center space-x-1.5 mb-4">
                      <div className="flex text-gold-500">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3.5 h-3.5 ${
                              i < Math.floor(selectedProduct.rating)
                                ? "fill-gold-500 text-gold-500"
                                : "text-cream-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-chocolate-700 font-sans font-medium">
                        {selectedProduct.rating.toFixed(1)} / 5.0
                      </span>
                    </div>
                    <p className="text-sm text-chocolate-700/80 font-sans leading-relaxed mb-6">
                      {selectedProduct.description}
                    </p>
                  </div>

                  <div>
                    <div className="border-t border-cream-200 pt-6 flex items-center justify-between mb-6">
                      <span className="text-sm text-chocolate-400 font-sans">Price</span>
                      <span className="text-2xl font-serif font-bold text-chocolate-900">
                        ₹{selectedProduct.price}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <button
                        onClick={() => {
                          handleWhatsAppOrder(selectedProduct);
                          setSelectedProduct(null);
                        }}
                        className="flex items-center justify-center space-x-2 py-3 rounded-full bg-green-500 hover:bg-green-600 text-white font-sans font-semibold text-xs uppercase tracking-widest transition-colors duration-300 shadow-md shadow-green-500/10"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Order Now</span>
                      </button>
                      <Link
                        href="/order"
                        onClick={() => setSelectedProduct(null)}
                        className="flex items-center justify-center py-3 rounded-full bg-chocolate-900 hover:bg-chocolate-850 text-white font-sans font-semibold text-xs uppercase tracking-widest transition-colors duration-300"
                      >
                        <span>Customize</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
