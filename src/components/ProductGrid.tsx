import React, { useState } from "react";
import { Product, CATEGORIES, Category } from "../data/products";
import { ProductCard } from "./ProductCard";
import { Search, Sparkles } from "lucide-react";

interface ProductGridProps {
  products: Product[];
  showFilters?: boolean;
  limit?: number;
  initialCategory?: Category;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  showFilters = true,
  limit,
  initialCategory = "All",
}) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (product.bikeCompatibility &&
        product.bikeCompatibility.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const displayedProducts = limit
    ? filteredProducts.slice(0, limit)
    : filteredProducts;

  return (
    <div className="w-full">
      {/* Search & Category Filter Bar */}
      {showFilters && (
        <div className="mb-8 space-y-4">
          {/* Quick Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by part name or bike model (e.g., Activa, Brake, Splendor)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-hidden focus:ring-2 focus:ring-[#172554] shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-medium"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center justify-center flex-wrap gap-2 pt-2">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  id={`filter-btn-${cat.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 active:scale-95 ${
                    isActive
                      ? "bg-[#172554] text-white shadow-md ring-2 ring-[#F59E0B]/50"
                      : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100 hover:text-[#172554]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Grid: 1 col on small screens (<640px), 2 cols on mobile/sm (640px), 3 cols on tablet/md (768px), 4 cols on desktop/lg (1024px) */}
      {displayedProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 px-4 bg-white rounded-2xl border border-slate-200 max-w-lg mx-auto">
          <Sparkles className="w-10 h-10 text-[#F59E0B] mx-auto mb-3" />
          <h3 className="text-lg font-bold text-[#172554]">No matching spare parts found</h3>
          <p className="mt-1 text-sm text-slate-500">
            We stock many unlisted components in-shop. Message us on WhatsApp to check immediate stock!
          </p>
          <button
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="mt-4 px-4 py-2 text-xs font-semibold text-[#172554] bg-slate-100 rounded-lg hover:bg-slate-200"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};
