"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Search, Star, MessageCircle, Info, Sparkles, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_CONFIG, Product } from "@/config/site";

function MenuContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Get category from query parameter
  const categoryParam = searchParams.get("category");

  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Sync category param
  useEffect(() => {
    if (categoryParam && SITE_CONFIG.categories.includes(categoryParam)) {
      setActiveCategory(categoryParam);
    } else {
      setActiveCategory("All");
    }
  }, [categoryParam]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    // Update URL param
    if (category === "All") {
      router.push("/menu", { scroll: false });
    } else {
      router.push(`/menu?category=${encodeURIComponent(category)}`, { scroll: false });
    }
  };

  // Filter products
  const filteredProducts = SITE_CONFIG.products.filter((product) => {
    const matchesCategory =
      activeCategory === "All" || product.category === activeCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleWhatsAppOrder = (product: Product) => {
    const textMessage = encodeURIComponent(
      `Hello! I want to order the item: "${product.name}" (Price: ₹${product.price}) from your Menu. Please confirm availability and delivery slots.`
    );
    window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${textMessage}`, "_blank");
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Search & Breadcrumbs Row */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        {/* Breadcrumbs */}
        <div className="flex items-center space-x-2 text-xs font-sans text-chocolate-400">
          <Link href="/" className="hover:text-gold-500 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-chocolate-900 font-medium">Menu</span>
          {activeCategory !== "All" && (
            <>
              <ChevronRight className="w-3 h-3" />
              <span className="text-gold-500 font-semibold">{activeCategory}</span>
            </>
          )}
        </div>

        {/* Search Input */}
        <div className="relative max-w-md w-full">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search our delicious creations..."
            className="w-full bg-white text-chocolate-900 text-sm pl-12 pr-4 py-3 rounded-full border border-gold-500/10 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all shadow-sm"
          />
          <Search className="w-4 h-4 text-chocolate-400 absolute left-4 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Side: Category Filter List (Sticky) */}
        <div className="lg:col-span-3 lg:sticky lg:top-24 h-fit">
          <div className="glass-card rounded-2xl p-6 border border-gold-500/10 shadow-sm bg-white/80">
            <h3 className="text-xs font-sans font-bold uppercase tracking-widest text-gold-600 mb-6">
              Menu Categories
            </h3>
            <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 pb-4 lg:pb-0 scrollbar-hide">
              {["All", ...SITE_CONFIG.categories].map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`whitespace-nowrap text-left px-4 py-2.5 rounded-lg text-xs font-sans font-medium uppercase tracking-wider transition-colors w-full ${
                      isActive
                        ? "bg-gold-500 text-white shadow-sm"
                        : "hover:bg-cream-100 text-chocolate-700 hover:text-gold-600"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Side: Product Catalog Grid */}
        <div className="lg:col-span-9">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl border border-gold-500/5 shadow-sm">
              <p className="text-lg font-serif text-chocolate-900 mb-2">No Items Found</p>
              <p className="text-xs text-chocolate-405 font-sans">
                Try searching for other keywords or select a different category.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  className="glass-card rounded-2xl overflow-hidden flex flex-col h-full hover:shadow-lg hover:shadow-chocolate-900/5 transition-all duration-300 relative group border border-gold-500/10 bg-white/40"
                >
                  {/* Image */}
                  <div className="relative h-56 w-full overflow-hidden bg-cream-200">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-w-768px) 100vw, 30vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Best Seller / Custom Badge */}
                    <div className="absolute top-4 left-4 flex flex-col space-y-1">
                      {product.isBestSeller && (
                        <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-gold-500 text-white font-sans font-bold text-[9px] uppercase tracking-wider shadow">
                          <Sparkles className="w-2 h-2" />
                          <span>Best Seller</span>
                        </span>
                      )}
                      {product.isCustom && (
                        <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-chocolate-900 text-gold-300 font-sans font-bold text-[9px] uppercase tracking-wider shadow">
                          <span>Customizable</span>
                        </span>
                      )}
                    </div>

                    {/* Rating Badge */}
                    <div className="absolute bottom-4 right-4 flex items-center space-x-1 px-2 py-0.5 rounded-md bg-white/90 backdrop-blur-sm text-chocolate-900 text-[10px] font-semibold shadow">
                      <Star className="w-3 h-3 fill-gold-500 text-gold-500" />
                      <span>{product.rating.toFixed(1)}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-grow">
                    <span className="text-[9px] font-sans font-bold uppercase tracking-widest text-gold-600 mb-1">
                      {product.category}
                    </span>
                    <h3 className="text-sm font-serif font-bold text-chocolate-900 line-clamp-1 mb-2 group-hover:text-gold-600 transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-[11px] text-chocolate-700/70 font-sans line-clamp-2 mb-4 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Bottom Action Row */}
                    <div className="mt-auto pt-4 border-t border-cream-200 flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-[9px] text-chocolate-400 font-sans uppercase tracking-wider">Price</span>
                        <span className="text-base font-serif font-bold text-chocolate-900">₹{product.price}</span>
                      </div>
                      <div className="flex items-center space-x-1.5">
                        <button
                          onClick={() => setSelectedProduct(product)}
                          className="p-1.5 rounded-full bg-cream-100 hover:bg-gold-100 text-chocolate-750 transition-colors duration-300"
                          aria-label="View product details"
                        >
                          <Info className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleWhatsAppOrder(product)}
                          className="inline-flex items-center space-x-1 px-2.5 py-1.5 rounded-full bg-green-500 hover:bg-green-600 text-white font-sans font-medium text-[10px] uppercase tracking-wider transition-colors duration-300"
                        >
                          <MessageCircle className="w-3 h-3" />
                          <span>Order</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Detail Popup Modal */}
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
    </div>
  );
}

export default function MenuPage() {
  return (
    <div className="bg-cream-50 min-h-screen">
      {/* Page Hero */}
      <section className="relative h-[30vh] min-h-[220px] flex items-center justify-center bg-chocolate-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=1200')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-chocolate-950/80" />
        <div className="relative z-10 text-center max-w-2xl px-6">
          <h1 className="text-4xl font-serif text-cream-50 mb-2">Our Menu</h1>
          <p className="text-xs font-sans text-cream-200/80 uppercase tracking-widest">
            Handcrafted bakes, fresh local flavors, and custom designs
          </p>
        </div>
      </section>

      {/* Suspense wrapper around the searchParams reading component */}
      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-gold-500"></div>
          </div>
        }
      >
        <MenuContent />
      </Suspense>
    </div>
  );
}
