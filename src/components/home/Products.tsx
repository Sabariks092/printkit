import React, { useState } from "react";
import { getProductImage } from "../../utils/productImages";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface CarouselProductItem {
  id: string;
  name: string;
  startingPrice: string;
  category: string;
}

export const ALL_PRODUCTS_LIST: CarouselProductItem[] = [
  { id: "business-cards", name: "Business Cards", startingPrice: "Starting ₹750", category: "Brand Identity" },
  { id: "letterhead", name: "Letterhead", startingPrice: "Starting ₹450", category: "Stationery" },
  { id: "certificates", name: "Certificates", startingPrice: "Starting ₹350", category: "Stationery" },
  { id: "bill-books", name: "Bill Books", startingPrice: "Starting ₹650", category: "Business Forms" },
  { id: "flyers-pamphlets", name: "Flyer / Pamphlet", startingPrice: "Starting ₹850", category: "Marketing" },
  { id: "brochures", name: "Brochure", startingPrice: "Starting ₹1200", category: "Marketing" },
  { id: "sticker-label", name: "Sticker / Label", startingPrice: "Starting ₹250", category: "Packaging" },
  { id: "roll-up-standee", name: "Roll-up Standee", startingPrice: "Starting ₹1450", category: "Signage" },
  { id: "flex-banners", name: "Flex Banner", startingPrice: "Starting ₹15", category: "Large Format" },
  { id: "sunpack-pole-flex", name: "Sunpack Signs", startingPrice: "Starting ₹35", category: "Outdoor Ads" },
  { id: "foam-board", name: "Foam Board", startingPrice: "Custom Quote", category: "Displays" },
  { id: "digital-wall-poster", name: "Wall Posters", startingPrice: "Custom Quote", category: "Decor" },
  { id: "invitation-cards", name: "Invitation Cards", startingPrice: "Custom Quote", category: "Events" },
  { id: "photo-frames", name: "Photo Frames", startingPrice: "Starting ₹499", category: "Gifts & Decor" },
  { id: "logo-design", name: "Logo Design", startingPrice: "Starting ₹1999", category: "Creative Services" },
  { id: "social-media-posters", name: "Social Media Posts", startingPrice: "Custom Quote", category: "Digital Design" },
];

export function Products() {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 6;

  const handleNext = () => {
    setStartIndex((prev) => (prev + itemsPerPage) % ALL_PRODUCTS_LIST.length);
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - itemsPerPage + ALL_PRODUCTS_LIST.length) % ALL_PRODUCTS_LIST.length);
  };

  const visibleItems = Array.from({ length: itemsPerPage }, (_, i) => {
    return ALL_PRODUCTS_LIST[(startIndex + i) % ALL_PRODUCTS_LIST.length];
  });

  const handleItemClick = (id: string) => {
    const el = document.getElementById("products");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full bg-white rounded-[28px] p-3.5 sm:p-4 shadow-xl border border-neutral-200/80 font-sans flex items-center justify-between gap-3">
      {/* Left Navigation Chevron Button */}
      <button
        type="button"
        onClick={handlePrev}
        aria-label="Previous products"
        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white hover:bg-[#CC0000] text-[#0E0F08] hover:text-white border border-neutral-200 shadow-xs flex items-center justify-center transition-all cursor-pointer active:scale-95 shrink-0"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      {/* 6 Products Row (Matching Screenshot UI) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-4 flex-1 items-center">
        {visibleItems.map((item) => (
          <div
            key={`${item.id}-${startIndex}`}
            onClick={() => handleItemClick(item.id)}
            className="group flex items-center gap-3 p-2 sm:p-2.5 rounded-xl hover:bg-[#F7F7F5] transition-all cursor-pointer truncate"
          >
            {/* Small Product PNG Image on Left */}
            <img
              src={getProductImage(item.id)}
              alt={item.name}
              className="w-10 h-10 sm:w-11 sm:h-11 object-contain shrink-0 group-hover:scale-105 transition-transform"
              loading="lazy"
            />

            {/* Product Title & Starting Price Stacked on Right */}
            <div className="flex flex-col justify-center min-w-0">
              <h3 className="text-xs sm:text-sm font-bold text-[#0E0F08] group-hover:text-[#CC0000] transition-colors whitespace-nowrap truncate">
                {item.name}
              </h3>
              <p className="text-[11px] font-medium text-[#777970] whitespace-nowrap truncate">
                {item.startingPrice}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Right Navigation Chevron Button */}
      <button
        type="button"
        onClick={handleNext}
        aria-label="Next products"
        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white hover:bg-[#CC0000] text-[#0E0F08] hover:text-white border border-neutral-200 shadow-xs flex items-center justify-center transition-all cursor-pointer active:scale-95 shrink-0"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
    </div>
  );
}

export default Products;
