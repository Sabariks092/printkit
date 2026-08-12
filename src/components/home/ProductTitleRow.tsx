import React from "react";

export interface ProductTitleItem {
  id: string;
  name: string;
  isCategoryHeader?: boolean;
}

export const DEFAULT_PRODUCT_TITLES: ProductTitleItem[] = [
  { id: "business-cards", name: "Business Cards" },
  { id: "certificates", name: "Certificates" },
  { id: "letterhead", name: "Letterhead" },
  { id: "bill-books", name: "Bill Books" },
  { id: "marketing-promotion", name: "Marketing & Promotion"},
  { id: "flyers-pamphlets", name: "Flyers / Pamphlets" },
  { id: "brochures", name: "Brochures" },
  { id: "sticker-label", name: "Sticker / Label" },
  { id: "rollup-standee", name: "Roll Up Standee" },
  { id: "large-print", name: "Large Print"},
  { id: "flex-banners", name: "Flex Banners" },
  { id: "sunpack-pole-flex", name: "Sunpack / Pole Flex" },
  { id: "foam-board", name: "Foam Board" },
  { id: "digital-wall-poster", name: "Digital Wall Poster" },
  { id: "invitation-photo-frame", name: "Invitations & Photo Frame" },
  { id: "invitation-cards", name: "Invitation Cards" },
  { id: "led-clip-on-signage", name: "LED Clip-on Signage" },
  { id: "photo-frames", name: "Photo Frames" },
  { id: "designing-services", name: "Designing Services" },
  { id: "logo-design", name: "Logo Design" },
  { id: "social-media-design", name: "Social Media Design" },
  { id: "social-media-posters", name: "Social Media Posters" },
];

interface ProductTitleRowProps {
  items?: ProductTitleItem[];
  direction?: "left" | "right";
  speedDuration?: number; // in seconds
  variant?: "light" | "dark" | "brand";
  className?: string;
  pauseOnHover?: boolean;
}

export function ProductTitleRow({
  items = DEFAULT_PRODUCT_TITLES,
  direction = "left",
  speedDuration = 40,
  variant = "light",
  className = "",
  pauseOnHover = true,
}: ProductTitleRowProps) {
  const animationClass = direction === "left" ? "animate-marquee" : "animate-marquee-reverse";
  const customSpeedStyle = { animationDuration: `${speedDuration}s` };

  // Variant styling setups - Configured Black (#0E0F08) on White BG
  const variantStyles = {
    light: {
      wrapper: "bg-white text-[#0E0F08] border-y border-[#E3E3DE]",
      itemNormal: "text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-[#0E0F08] hover:text-[#CC0000] transition-colors cursor-pointer whitespace-nowrap",
      itemHeader: "px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-[#FFE600] text-[#0E0F08] font-black text-xl sm:text-2xl lg:text-3xl uppercase tracking-wide shadow-xs hover:bg-[#FFD700] transition-colors cursor-pointer whitespace-nowrap shrink-0 border border-[#0E0F08]/15",
      fadeGradLeft: "from-white to-transparent",
      fadeGradRight: "from-white to-transparent",
      faviconBg: "bg-[#F7F7F5] border border-[#E3E3DE]",
    },
    dark: {
      wrapper: "bg-[#0E0F08] text-white border-y border-[#22231F]",
      itemNormal: "text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white/95 hover:text-[#CC0000] transition-colors cursor-pointer whitespace-nowrap",
      itemHeader: "px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-[#FFE600] text-[#0E0F08] font-black text-xl sm:text-2xl lg:text-3xl uppercase tracking-wide shadow-xs hover:bg-[#FFD700] transition-colors cursor-pointer whitespace-nowrap shrink-0",
      fadeGradLeft: "from-[#0E0F08] to-transparent",
      fadeGradRight: "from-[#0E0F08] to-transparent",
      faviconBg: "bg-white/10",
    },
    brand: {
      wrapper: "bg-gradient-to-r from-[#CC0000] via-[#D81E1E] to-[#990000] text-white border-y border-[#A80000]",
      itemNormal: "text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white hover:text-yellow-200 transition-colors cursor-pointer whitespace-nowrap",
      itemHeader: "px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-white text-[#CC0000] font-black text-xl sm:text-2xl lg:text-3xl uppercase tracking-wide shadow-sm hover:bg-yellow-100 transition-colors cursor-pointer whitespace-nowrap shrink-0",
      fadeGradLeft: "from-[#CC0000] to-transparent",
      fadeGradRight: "from-[#990000] to-transparent",
      faviconBg: "bg-white/20",
    },
  };

  const style = variantStyles[variant];

  // Helper to render items block
  const renderItemBlock = (keyPrefix: string) => (
    <div className={`flex shrink-0 items-center gap-4 sm:gap-8 lg:gap-10 pr-8 sm:pr-12 lg:pr-16 ${animationClass}`} style={customSpeedStyle}>
      {items.map((item, index) => (
        <React.Fragment key={`${keyPrefix}-${item.id}-${index}`}>
          {item.isCategoryHeader ? (
            <span className={style.itemHeader}>
              {item.name}
            </span>
          ) : (
            <span className={style.itemNormal}>
              {item.name}
            </span>
          )}

          {/* Extra Large Favicon Separator Icon */}
          <div className={`flex items-center justify-center shrink-0 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-2xl ${style.faviconBg} p-2 shadow-xs transition-transform duration-300 hover:scale-110`}>
            <img
              src="/favicon.png"
              alt="PrintKit Icon"
              className="w-7 h-7 sm:w-9 sm:h-9 lg:w-10 lg:h-10 object-contain border-none shrink-0 "
              loading="eager"
            />
          </div>
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <section className={`w-full overflow-hidden ${className}`}>
      <div className={`relative w-full overflow-hidden py-6 sm:py-8 lg:py-10 select-none flex items-center ${pauseOnHover ? "group" : ""} ${style.wrapper}`}>
        {/* Left Edge Gradient Fade */}
        <div
          className={`pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-r ${style.fadeGradLeft} z-10`}
          aria-hidden="true"
        />

        {/* Right Edge Gradient Fade */}
        <div
          className={`pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-l ${style.fadeGradRight} z-10`}
          aria-hidden="true"
        />

        {/* Marquee Track 1 (Primary) */}
        {renderItemBlock("block-1")}

        {/* Marquee Track 2 (Duplicate for Seamless Infinite Loop) */}
        {renderItemBlock("block-2")}
      </div>
    </section>
  );
}

export default ProductTitleRow;
