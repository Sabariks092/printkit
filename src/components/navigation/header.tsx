import React, { useState } from "react";
import { Search } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    const el = document.getElementById("products");
    if (el) el.scrollIntoView({ behavior: "smooth" });
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
      <div className="hidden lg:grid grid-cols-12 items-center gap-4 max-w-7xl mx-auto px-6 lg:px-8 h-20">
        {/* Column 1: Navbar Brand Logo (2 Cols) */}
        <div className="col-span-2 flex items-center">
          <a href="/" className="flex items-center shrink-0">
            <img
              src="/logo.png"
              alt="PrintKit Logo"
              width={190}
              height={48}
              className="h-11 w-auto object-contain"
            />
          </a>
        </div>

        {/* Column 2: Search Input Field (4 Cols) */}
        <div className="col-span-4">
          <form onSubmit={handleSearch} className="relative flex-1 max-w-xs">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full pl-9 pr-4 py-2 text-xs font-bold bg-[#F7F7F5] border border-[#E3E3DE] rounded-full focus:border-[#CC0000] focus:ring-1 focus:ring-[#CC0000] outline-none text-[#0E0F08] transition-all placeholder-[#777970]"
            />
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#777970]" />
          </form>
        </div>

        {/* Column 3: Navigation Links + WhatsApp Contact Button (6 Cols) */}
        <div className="col-span-6 flex items-center justify-end gap-6">
          <nav className="flex items-center justify-center gap-6 sm:gap-8 text-[15px] font-medium text-[#0E0F08]">
            <a href="#products" className="hover:text-[#CC0000] transition-colors">
              Products
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

          {/* WhatsApp Contact Number Button with faWhatsapp Icon, Shimmer Effect & Red Shades Gradient */}
          <button
            type="button"
            onClick={handleWhatsAppContact}
            className="relative overflow-hidden group px-4 py-2.5 rounded-full bg-gradient-to-r from-[#CC0000] via-[#E60000] to-[#990000] hover:from-[#A80000] hover:to-[#770000] text-white font-semibold text-[14px] shadow-md transition-all flex items-center gap-2.5 cursor-pointer shrink-0"
          >
            {/* Shimmer Light Reflection Sweep */}
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />
            <FontAwesomeIcon icon={faWhatsapp} className="text-xl sm:text-2xl text-white shrink-0" />
            <span className="tracking-wider">+91 87783 77449</span>
          </button>
        </div>
      </div>

      {/* Small Screen / Mobile Navbar */}
      <div className="flex lg:hidden items-center justify-between px-4 sm:px-6 h-16">
        <a href="/" className="flex items-center shrink-0">
          <img
            src="/logo.png"
            alt="PrintKit Logo"
            width={150}
            height={38}
            className="h-9 w-auto object-contain"
          />
        </a>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleWhatsAppContact}
            className="relative overflow-hidden group px-3.5 py-2 rounded-full bg-gradient-to-r from-[#CC0000] via-[#E60000] to-[#990000] text-white font-bold text-xs shadow-xs flex items-center gap-2 cursor-pointer"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="text-lg text-white shrink-0" />
            <span>Call Us</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
