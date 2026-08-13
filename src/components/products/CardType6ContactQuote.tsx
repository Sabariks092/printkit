import React, { useState, useRef } from "react";
import { Product } from "../../data/products";
import { getProductImage } from "../../utils/productImages";
import { openWhatsAppOrder } from "../../utils/whatsapp";
import { ProductDetailsModal } from "./ProductDetailsModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faCircleInfo, faStar } from "@fortawesome/free-solid-svg-icons";

interface CardType6Props {
  product: Product;
  onContactProduct?: (product: Product) => void;
}

export function CardType6ContactQuote({ product, onContactProduct }: CardType6Props) {
  const [isKnowMoreOpen, setIsKnowMoreOpen] = useState(false);
  const [isGlittering, setIsGlittering] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Outside Card's Order Now button: triggers animation & opens WhatsApp
  const triggerGlitterAndOrder = () => {
    setIsGlittering(true);
    setTimeout(() => setIsGlittering(false), 1400);
    onContactProduct?.(product);
    openWhatsAppOrder(product.name, product.category, {}, "Custom Quote");
  };

  // Order Now button INSIDE Modal: strictly closes modal & intimates card with animation ONLY (no WhatsApp)
  const handleModalOrder = () => {
    setIsKnowMoreOpen(false);
    setIsGlittering(true);
    cardRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });

    setTimeout(() => {
      setIsGlittering(false);
    }, 1400);
  };

  return (
    <>
      <div
        id={`product-card-${product.id}`}
        ref={cardRef}
        className={`group relative flex flex-col justify-between bg-white rounded-2xl border border-neutral-200/80 shadow-sm hover:shadow-xl hover:border-[#CC0000]/40 transition-all duration-300 overflow-hidden font-sans ${
          isGlittering ? "animate-card-glitter" : ""
        }`}
      >
        {/* Top Image Section */}
        <div className="relative w-full h-44 sm:h-48 overflow-hidden bg-neutral-100 shrink-0">
          <img
            src={getProductImage(product.id)}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          {isGlittering && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-[shimmer_1.2s_infinite] pointer-events-none z-20" />
          )}
        </div>

        <div className="p-5 flex flex-col flex-1 justify-between gap-4">
          {/* Header Block with Custom Quote Badge ABOVE Title */}
          <div>
            <div className="mb-1 flex items-baseline justify-between border-b border-neutral-100 pb-2">
              <span className="text-[10px] font-bold text-[#777970] uppercase tracking-wider">
                Pricing Option
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#CC0000] bg-[#FFF5F5] px-3 py-1 rounded-full border border-[#FDECEC]">
                <FontAwesomeIcon icon={faStar} className="w-3.5 h-3.5" />
                Custom Quote
              </span>
            </div>

            {/* Product Title */}
            <h3 className="text-xl font-extrabold text-[#0E0F08] leading-tight mt-1">
              {product.name}
            </h3>
            <p className="text-xs text-[#555750] font-medium leading-relaxed mt-1">
              {product.contactMessage || "For complete details & quotation, chat with us directly."}
            </p>
          </div>

          {/* Feature Highlights Grid */}
          <div className="p-3.5 bg-[#F7F7F5] border border-[#E3E3DE] rounded-2xl space-y-1.5">
            <div className="text-[11px] font-bold text-[#0E0F08] uppercase tracking-wider">
              Why Custom Quote?
            </div>
            <ul className="text-xs text-[#555750] space-y-1 font-medium">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#CC0000]" />
                Tailored dimensions & premium paper stocks
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#CC0000]" />
                Bulk volume corporate discounts
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#CC0000]" />
                Fast 24-hour design proof turnaround
              </li>
            </ul>
          </div>

          {/* Dual Action Buttons Row */}
          <div className="pt-2 border-t border-neutral-100 flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsKnowMoreOpen(true)}
              className="px-3.5 py-3 rounded-full border border-[#0E0F08] text-[#0E0F08] hover:bg-[#0E0F08] hover:text-white font-semibold uppercase text-xs transition-all flex items-center justify-center gap-2 flex-1 cursor-pointer truncate"
            >
              <FontAwesomeIcon icon={faCircleInfo} className="w-4.5 h-4.5 shrink-0" />
              <span>Know More</span>
            </button>

            <button
              type="button"
              onClick={triggerGlitterAndOrder}
              className="px-4 py-3 rounded-full bg-gradient-to-r from-[#CC0000] via-[#E60000] to-[#990000] hover:from-[#A80000] hover:to-[#770000] text-white font-extrabold uppercase text-xs shadow-md transition-all flex items-center justify-center gap-2 flex-1 cursor-pointer truncate"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="text-xl sm:text-2xl text-white shrink-0" />
              <span>Order Now</span>
            </button>
          </div>
        </div>
      </div>

      {/* Know More Product Details Modal */}
      <ProductDetailsModal
        product={product}
        currentPrice="Custom Quote"
        isOpen={isKnowMoreOpen}
        onClose={() => setIsKnowMoreOpen(false)}
        onOrderNow={handleModalOrder}
      />
    </>
  );
}

export default CardType6ContactQuote;
