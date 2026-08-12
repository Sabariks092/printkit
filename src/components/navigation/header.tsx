"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-[#E3E3DE] shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4 md:gap-8">
        {/* 1. Left: Official Brand Logo */}
        <Link href="/" className="flex items-center shrink-0 focus-ring-red rounded-md">
          <Image
            src="/logo.png"
            alt="PrintKit - Quality in Print. Precision in Design"
            width={200}
            height={52}
            className="h-11 w-auto object-contain"
            priority
          />
        </Link>

        {/* 2. Center: Red Pill Search Bar */}
        <form onSubmit={handleSearch} className="flex-1 max-w-xl mx-2 sm:mx-4">
          <div className="relative flex items-center w-full border-2 border-[#CC0000] rounded-full overflow-hidden bg-white focus-within:ring-2 focus-within:ring-[#CC0000]/20 transition-all">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for items..."
              className="w-full pl-6 pr-4 py-2.5 text-sm text-[#0E0F08] placeholder-[#777970] bg-transparent focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#CC0000] hover:bg-[#A80000] active:bg-[#8F0000] text-white font-semibold text-sm px-7 py-2.5 transition-colors cursor-pointer shrink-0 rounded-r-full"
            >
              Search
            </button>
          </div>
        </form>

        {/* 3. Right: Support Contact Section */}
        <div className="flex items-center shrink-0">
          {/* Vertical Separator */}
          <div className="hidden sm:block h-9 w-[1px] bg-[#E3E3DE] mr-6" />

          {/* Phone & WhatsApp Support */}
          <a
            href="https://wa.me/919361915818"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group text-[#0E0F08] hover:text-[#CC0000] transition-colors"
          >
            {/* Custom Headset + WhatsApp Icon SVG */}
            <div className="relative flex items-center justify-center shrink-0 text-[#0E0F08] group-hover:text-[#CC0000] transition-colors">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-7 h-7"
              >
                {/* Headset Arch */}
                <path d="M3 14v-3a9 9 0 0 1 18 0v3" />
                {/* Earpiece left */}
                <path d="M2 14a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3z" />
                {/* Earpiece right */}
                <path d="M17 14a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3z" />
                {/* Mic boom */}
                <path d="M19 19a3 3 0 0 1-3 3h-2" />
              </svg>
              {/* Mini WhatsApp emblem inside */}
              <div className="absolute inset-0 flex items-center justify-center pt-0.5 pr-1">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-3 h-3 text-[#0E0F08] group-hover:text-[#CC0000]"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z" />
                </svg>
              </div>
            </div>

            {/* Phone Number */}
            <span className="text-lg sm:text-xl font-black tracking-tight text-[#0E0F08] whitespace-nowrap">
              +91 93619 15818
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
