import React, { useState, useRef, useEffect } from "react";
import { Search, X, ArrowRight } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { getProductImage } from "@/utils/productImages";
import { ALL_PRODUCTS_LIST } from "@/components/home/Products";

import { scrollToProductCard } from "@/utils/scrollHelper";

export function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Filter products for the live search dropdown box
  const filteredSearchItems = searchQuery.trim()
    ? ALL_PRODUCTS_LIST.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  // Close dropdown on click outside or Escape key
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsSearchOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsSearchOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleSelectProductItem = (id: string) => {
    setIsSearchOpen(false);
    setSearchQuery("");
    scrollToProductCard(id);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    setIsSearchOpen(false);
    if (filteredSearchItems.length > 0) {
      scrollToProductCard(filteredSearchItems[0].id);
    } else {
      const el = document.getElementById("products");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWhatsAppContact = () => {
    const phoneNumber = "918778377449";
    const message =
      "Hello PrintKit! 👋\n\nI have an inquiry regarding your printing services.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-[#E3E3DE] shadow-xs font-sans">
      {/* Large Screen Desktop Navbar: 3 Columns Layout */}
      <div className="hidden lg:grid grid-cols-12 items-center gap-4 max-w-[1400px] mx-auto px-6 lg:px-8 h-20">
        {/* Column 1: Navbar Brand Logo (2 Cols) */}
        <div className="col-span-2 flex items-center">
          <a href="/" className="flex items-center shrink-0">
            <img
              src="/logo.png"
              alt="PrintKit Logo"
              width={180}
              height={45}
              className="h-10 sm:h-11 w-auto object-contain"
            />
          </a>
        </div>

        {/* Column 2: Pure White Search Input Field with Red Shade Border & Live Dropdown (4 Cols) */}
        <div className="col-span-4 relative" ref={searchRef}>
          <form onSubmit={handleSearchSubmit} className="relative w-full">
            <input
              type="text"
              value={searchQuery}
              onFocus={() => setIsSearchOpen(true)}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setIsSearchOpen(true);
              }}
              placeholder="Search products, visiting cards, banners..."
              className="w-full pl-9 pr-9 py-2 text-xs font-semibold bg-white border border-[#CC0000] rounded-full focus:border-[#CC0000] focus:ring-2 focus:ring-[#CC0000]/20 outline-none text-[#0E0F08] transition-all placeholder-[#777970] shadow-2xs"
            />
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#CC0000]" />
            
            {searchQuery && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setIsSearchOpen(false);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </form>

          {/* LIVE SEARCH DROPDOWN MENU BOX */}
          {isSearchOpen && searchQuery.trim().length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border border-neutral-200 shadow-2xl overflow-hidden z-50 max-h-96 overflow-y-auto no-scrollbar font-sans animate-in fade-in slide-in-from-top-2">
              <div className="p-2.5 bg-[#F7F7F5] border-b border-neutral-200 flex items-center justify-between text-[11px] font-bold text-[#555750]">
                <span>Search Results ({filteredSearchItems.length})</span>
                {/* <span className="text-[#CC0000] text-[10px] font-semibold uppercase tracking-wider">PrintKit Catalogue</span> */}
              </div>

              {filteredSearchItems.length > 0 ? (
                <div className="divide-y divide-neutral-100">
                  {filteredSearchItems.map((item) => (
                    <a
                      key={item.id}
                      href="#products"
                      onClick={(e) => {
                        e.preventDefault();
                        handleSelectProductItem(item.id);
                      }}
                      className="p-3 hover:bg-[#FFF5F5] transition-colors cursor-pointer flex items-center gap-3 group"
                    >
                      {/* Left: Small Product Image */}
                      <img
                        src={getProductImage(item.id)}
                        alt={item.name}
                        className="w-11 h-11 object-contain shrink-0 rounded-lg p-1 bg-white border border-neutral-100 group-hover:scale-105 transition-transform"
                      />

                      {/* Right: Title, Category & Price */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="text-xs font-bold text-[#0E0F08] group-hover:text-[#CC0000] transition-colors truncate">
                            {item.name}
                          </h4>
                          {/* <span className="text-[11px] font-bold text-[#CC0000] shrink-0 font-mono bg-[#CC0000]/10 px-2 py-0.5 rounded">
                            {item.startingPrice}
                          </span> */}
                        </div>
                        <p className="text-[11px] text-[#777970] truncate mt-0.5 font-medium">
                          {item.category} • Custom sizes, offset & digital print stock
                        </p>
                      </div>

                      <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#CC0000] group-hover:translate-x-0.5 transition-all shrink-0" />
                    </a>
                  ))}
                </div>
              ) : (
                <div className="p-6 text-center text-xs text-[#777970]">
                  No products matching "<span className="font-bold text-[#0E0F08]">{searchQuery}</span>"
                </div>
              )}
            </div>
          )}
        </div>

        {/* Column 3: Navigation Links + WhatsApp Contact Button (6 Cols) */}
        <div className="col-span-6 flex items-center justify-end gap-6">
          <nav className="flex items-center justify-center gap-6 sm:gap-7 text-[14px] font-medium text-[#0E0F08]">
            <a href="#products" className="hover:text-[#CC0000] transition-colors">
              Products
            </a>
            <a href="#services" className="hover:text-[#CC0000] transition-colors">
              Services
            </a>
            <a href="#reviews" className="hover:text-[#CC0000] transition-colors">
              Reviews
            </a>
            <a href="#about" className="hover:text-[#CC0000] transition-colors">
              About us
            </a>
            <a href="#contact" className="hover:text-[#CC0000] transition-colors">
              Contact us
            </a>
          </nav>

          {/* WhatsApp Contact Button */}
          <button
            type="button"
            onClick={handleWhatsAppContact}
            className="relative overflow-hidden group px-4 py-2.5 rounded-full bg-gradient-to-r from-[#CC0000] via-[#E60000] to-[#990000] hover:from-[#A80000] hover:to-[#770000] text-white font-semibold text-[14px] shadow-md transition-all flex items-center gap-2.5 cursor-pointer shrink-0"
          >
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />
            <FontAwesomeIcon icon={faWhatsapp} className="text-xl sm:text-2xl text-white shrink-0" />
            <span className="tracking-wider">+91 87783 77449</span>
          </button>
        </div>
      </div>

      {/* Small Screen / Mobile Navbar */}
      <div className="flex lg:hidden flex-col px-4 py-3 gap-3">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center shrink-0">
            <img
              src="/logo.png"
              alt="PrintKit Logo"
              width={140}
              height={36}
              className="h-8 w-auto object-contain"
            />
          </a>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleWhatsAppContact}
              className="relative overflow-hidden group px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#CC0000] via-[#E60000] to-[#990000] text-white font-bold text-xs shadow-xs flex items-center gap-1.5 cursor-pointer"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="text-base text-white shrink-0" />
              <span>Call Us</span>
            </button>
          </div>
        </div>

        {/* Mobile Search Input */}
        <div className="relative w-full" ref={searchRef}>
          <form onSubmit={handleSearchSubmit} className="relative w-full">
            <input
              type="text"
              value={searchQuery}
              onFocus={() => setIsSearchOpen(true)}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setIsSearchOpen(true);
              }}
              placeholder="Search products..."
              className="w-full pl-8 pr-4 py-2 text-xs font-semibold bg-white border border-[#CC0000] rounded-full focus:outline-none focus:ring-1 focus:ring-[#CC0000]/20 text-[#0E0F08]"
            />
            <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-[#CC0000]" />
          </form>

          {/* Mobile Live Dropdown */}
          {isSearchOpen && searchQuery.trim().length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-xl border border-neutral-200 shadow-xl overflow-hidden z-50 max-h-72 overflow-y-auto font-sans">
              {filteredSearchItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleSelectProductItem(item.id)}
                  className="p-2.5 hover:bg-[#FFF5F5] border-b border-neutral-100 flex items-center gap-2"
                >
                  <img src={getProductImage(item.id)} alt={item.name} className="w-8 h-8 object-contain" />
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-bold text-[#0E0F08] truncate">{item.name}</div>
                    <div className="text-[10px] text-[#CC0000] font-bold">{item.startingPrice}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
