"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Search, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [servicesOpen, setServicesOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-[#E3E3DE] shadow-xs font-sans">
      {/* Top Header Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* 1. Left: PrintKit Brand Logo */}
        <Link href="/" className="flex items-center shrink-0 focus-ring-red rounded-md">
          <Image
            src="/logo.png"
            alt="PrintKit - Quality in Print. Precision in Design"
            width={190}
            height={48}
            className="h-11 w-auto object-contain"
            priority
          />
        </Link>

        {/* 2. Center: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-semibold text-[#0E0F08]">
          <Link href="/" className="text-[#CC0000] font-bold border-b-2 border-[#CC0000] pb-0.5">
            Home
          </Link>
          <div className="relative group">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-1 hover:text-[#CC0000] transition-colors cursor-pointer py-1"
            >
              <span>Services</span>
              <ChevronDown className="w-4 h-4 text-[#777970] group-hover:text-[#CC0000]" />
            </button>
          </div>
          <Link href="#products" className="hover:text-[#CC0000] transition-colors">
            Products
          </Link>
          <Link href="#bulk-order" className="hover:text-[#CC0000] transition-colors">
            Bulk Order
          </Link>
          <Link href="#templates" className="hover:text-[#CC0000] transition-colors">
            Design Templates
          </Link>
          <Link href="#about" className="hover:text-[#CC0000] transition-colors">
            About Us
          </Link>
          <Link href="#contact" className="hover:text-[#CC0000] transition-colors">
            Contact
          </Link>
        </nav>

        {/* 3. Right: Contact Phone + Get a Quote Button */}
        <div className="flex items-center gap-4 shrink-0">
          <a
            href="tel:+919361915818"
            className="hidden sm:flex items-center gap-2 text-sm xl:text-base font-extrabold text-[#0E0F08] hover:text-[#CC0000] transition-colors"
          >
            <PhoneCall className="w-4 h-4 text-[#CC0000]" />
            <span>+91 93619 15818</span>
          </a>

          <Button variant="primary" size="md" className="rounded-full px-6 font-bold">
            Get a Quote
          </Button>
        </div>
      </div>

      {/* Sub Header: Search Bar Row */}
      <div className="bg-[#F7F7F5] border-t border-[#E3E3DE] py-2.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <form onSubmit={handleSearch} className="w-full max-w-2xl mx-auto">
            <div className="relative flex items-center w-full border-2 border-[#CC0000] rounded-full overflow-hidden bg-white shadow-xs focus-within:ring-2 focus-within:ring-[#CC0000]/20 transition-all">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for items (e.g. Visiting Cards, Brochures, Flex Banners)..."
                className="w-full pl-6 pr-4 py-2 text-xs sm:text-sm text-[#0E0F08] placeholder-[#777970] bg-transparent focus:outline-none"
              />
              <button
                type="submit"
                className="bg-[#CC0000] hover:bg-[#A80000] active:bg-[#8F0000] text-white font-bold text-xs sm:text-sm px-6 sm:px-8 py-2 transition-colors cursor-pointer shrink-0 rounded-r-full flex items-center gap-1.5"
              >
                <Search className="w-4 h-4" />
                <span>Search</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </header>
  );
}
