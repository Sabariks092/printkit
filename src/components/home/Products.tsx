import React from "react";
import { getProductImage } from "../../utils/productImages";
import { scrollToProductCard } from "../../utils/scrollHelper";

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
  const marqueeItems = [...ALL_PRODUCTS_LIST, ...ALL_PRODUCTS_LIST];

  return (
    <div className="relative w-full bg-white rounded-2xl p-2 sm:p-3 shadow-xl border border-neutral-200/80 font-sans overflow-hidden">
      {/* Subtle Side Fade Gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      {/* Infinite Marquee Track (Seamless Loop) */}
      <div className="flex gap-3 sm:gap-4 w-max animate-marquee hover:[animation-play-state:paused] active:[animation-play-state:paused] py-1">
        {marqueeItems.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            onClick={() => scrollToProductCard(item.id)}
            className="w-[180px] sm:w-[210px] shrink-0 bg-white rounded-xl p-2 sm:p-2.5 border border-[#E3E3DE] hover:border-[#CC0000]/40 hover:bg-[#F7F7F5] shadow-2xs hover:shadow-md transition-all flex items-center gap-2.5 sm:gap-3 cursor-pointer select-none group"
          >
            {/* Small Product PNG Image */}
            <img
              src={getProductImage(item.id)}
              alt={item.name}
              className="w-9 h-9 sm:w-10 sm:h-10 object-contain shrink-0 group-hover:scale-105 transition-transform"
              loading="lazy"
            />

            {/* Product Title & Starting Price */}
            <div className="flex flex-col justify-center min-w-0 flex-1">
              <h3 className="text-xs sm:text-sm font-bold text-[#0E0F08] group-hover:text-[#CC0000] transition-colors whitespace-nowrap truncate">
                {item.name}
              </h3>
              <p className="text-[10px] sm:text-[11px] font-medium text-[#777970] whitespace-nowrap truncate">
                {item.startingPrice}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
