import React, { useState, useMemo } from "react";
import { products, categories, Product } from "../../data/products";
import { ProductCard, getProductCardType } from "./ProductCard";
import { QuoteModal } from "./QuoteModal";
import { Search, Sparkles, Filter, Grid, SlidersHorizontal } from "lucide-react";

export function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Modal state for quotes and orders
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);
  const [modalSelections, setModalSelections] = useState<Record<string, any>>({});
  const [modalPrice, setModalPrice] = useState<number | null>(null);

  // Filter & sort products dynamically - Contact/Quote cards are placed at the end
  const filteredProducts = useMemo(() => {
    const list = products.filter((product) => {
      const matchesCategory =
        selectedCategory === "all" ||
        product.category.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-") === selectedCategory ||
        product.category === selectedCategory;

      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });

    // Place all Contact / Quote cards (Card Type 6 with "chat with us directly") at the very end
    return list.sort((a, b) => {
      const aIsContact = a.type === "contact" || getProductCardType(a) === 6;
      const bIsContact = b.type === "contact" || getProductCardType(b) === 6;
      if (aIsContact && !bIsContact) return 1;
      if (!aIsContact && bIsContact) return -1;
      return 0;
    });
  }, [selectedCategory, searchQuery]);


  const handleSelectProduct = (product: Product, selections: Record<string, any>, price: number | null) => {
    setActiveModalProduct(product);
    setModalSelections(selections);
    setModalPrice(price);
  };

  const handleContactProduct = (product: Product) => {
    setActiveModalProduct(product);
    setModalSelections({});
    setModalPrice(null);
  };

  return (
    <section id="products" className="w-full bg-[#F7F7F5] py-12 lg:py-20 font-sans border-b border-[#E3E3DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E3E3DE] pb-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 py-1 rounded-full text-[#CC0000] text-xs font-semibold uppercase tracking-widest">
              {/* <Sparkles className="w-3.5 h-3.5" /> */}
              <span>Full Print Catalogue</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0E0F08] tracking-tight">
              Product Specifications & Pricing
            </h2>
            <p className="text-sm text-[#555750] font-medium max-w-2xl">
              Configure exact print specifications, sizes, quantities, and finishes. All prices recalculate instantly.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#777970]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products, sizes..."
              className="w-full pl-10 pr-4 py-2.5 bg-white text-xs font-semibold text-[#0E0F08] border border-[#E3E3DE] rounded-xl focus:border-[#CC0000] focus:ring-1 focus:ring-[#CC0000] outline-none transition-all shadow-2xs"
            />
          </div>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none scroll-smooth">
          <button
            type="button"
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 text-xs font-bold rounded-xl border transition-all cursor-pointer whitespace-nowrap shrink-0 ${
              selectedCategory === "all"
                ? "bg-[#CC0000] text-white shadow-sm"
                : "bg-white text-[#0E0F08] border-[#CC0000] hover:border-[#CC0000]/50"
            }`}
          >
            All Products
          </button>

          {categories.map((cat) => {
            const count = products.filter(
              (p) =>
                p.category === cat.name ||
                p.category.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-") === cat.id
            ).length;

            const isSelected = selectedCategory === cat.id || selectedCategory === cat.name;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs font-medium rounded-xl border transition-all cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-2 ${
                  isSelected
                    ? "bg-[#CC0000] text-white shadow-sm"
                : "bg-white text-[#0E0F08] border-[#CC0000] hover:border-[#CC0000]/50"
                }`}
              >
                <span>{cat.name}</span>
                {/* <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${
                    isSelected ? "bg-white/20 text-white" : "bg-[#F7F7F5] text-[#777970]"
                  }`}
                >
                  {count}
                </span> */}
              </button>
            );
          })}
        </div>

        {/* Product Cards Responsive Grid */}
        {/* Mobile: 1 card per row */}
        {/* Tablet, Laptop, LG & XL Screens: 3 cards per row strictly */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelectProduct={handleSelectProduct}
                onContactProduct={handleContactProduct}
              />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center bg-white rounded-3xl border border-[#E3E3DE] space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#FFF5F5] text-[#CC0000] flex items-center justify-center mx-auto">
              <SlidersHorizontal className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#0E0F08]">No Products Match Your Filter</h3>
            <p className="text-xs text-[#555750]">
              Try searching with a different product name or select "All Products".
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="px-4 py-2 bg-[#0E0F08] text-white text-xs font-bold rounded-xl hover:bg-[#CC0000] transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>

      {/* Quote / Specification Confirmation Modal */}
      <QuoteModal
        isOpen={!!activeModalProduct}
        onClose={() => setActiveModalProduct(null)}
        product={activeModalProduct}
        selections={modalSelections}
        calculatedPrice={modalPrice}
      />
    </section>
  );
}

export default ProductGrid;
