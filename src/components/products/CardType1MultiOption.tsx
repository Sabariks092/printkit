import React, { useState, useEffect, useRef } from "react";
import { Product } from "../../data/products";
import { calculateProductPrice, getDefaultSelections } from "../../utils/pricing";
import { getProductImage } from "../../utils/productImages";
import { openWhatsAppOrder } from "../../utils/whatsapp";
import { ProductDetailsModal } from "./ProductDetailsModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faHashtag,
  faRulerCombined,
  faCopy,
  faStar,
  faScissors,
  faGem,
  faPalette,
  faBookOpen,
  faClone,
  faSliders,
  faRulerHorizontal,
  faRulerVertical,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import { ChevronDown } from "lucide-react";

interface CardType1Props {
  product: Product;
  onSelectProduct?: (product: Product, selections: Record<string, any>, price: number | null) => void;
}

export function getAttributeFaIcon(attrKey: string, attrName: string) {
  const nameLower = (attrName || "").toLowerCase();
  const keyLower = (attrKey || "").toLowerCase();

  if (keyLower.includes("quantity") || nameLower.includes("quantity")) return faHashtag;
  if (keyLower.includes("size") || nameLower.includes("size")) return faRulerCombined;
  if (keyLower.includes("side") || nameLower.includes("side")) return faCopy;
  if (keyLower.includes("lamination") || nameLower.includes("lamination")) return faStar;
  if (keyLower.includes("corner") || nameLower.includes("corner")) return faScissors;
  if (keyLower.includes("material") || nameLower.includes("grade") || keyLower === "type") return faGem;
  if (keyLower.includes("color") || nameLower.includes("color")) return faPalette;
  if (keyLower.includes("finishing") || nameLower.includes("pad") || nameLower.includes("fold")) return faBookOpen;
  if (keyLower.includes("copy") || nameLower.includes("copy")) return faClone;
  if (keyLower.includes("width")) return faRulerHorizontal;
  if (keyLower.includes("height")) return faRulerVertical;
  return faSliders;
}

export function CardType1MultiOption({ product, onSelectProduct }: CardType1Props) {
  const [selections, setSelections] = useState<Record<string, any>>(() => getDefaultSelections(product));
  const [isPriceAnimating, setIsPriceAnimating] = useState(false);
  const [isKnowMoreOpen, setIsKnowMoreOpen] = useState(false);
  const [isGlittering, setIsGlittering] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const priceResult = calculateProductPrice(product, selections);

  useEffect(() => {
    setIsPriceAnimating(true);
    const timer = setTimeout(() => setIsPriceAnimating(false), 400);
    return () => clearTimeout(timer);
  }, [priceResult.formattedPrice]);

  // Listen to custom highlight event (e.g. dispatched by header search selection)
  useEffect(() => {
    const triggerHighlight = () => {
      setIsGlittering(true);
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const offsetTop = rect.top + window.pageYOffset - 110;
        window.scrollTo({
          top: Math.max(0, offsetTop),
          behavior: "smooth",
        });
      }
      setTimeout(() => setIsGlittering(false), 1400);
    };

    if ((window as any).__targetHighlightProductId === product.id) {
      (window as any).__targetHighlightProductId = null;
      setTimeout(triggerHighlight, 50);
    }

    const handleHighlight = (e: Event) => {
      const customEvt = e as CustomEvent<{ productId: string }>;
      if (customEvt.detail?.productId === product.id) {
        triggerHighlight();
      }
    };
    window.addEventListener("highlight-product-card", handleHighlight);
    return () => window.removeEventListener("highlight-product-card", handleHighlight);
  }, [product.id]);

  const handleOptionChange = (key: string, value: string) => {
    setSelections((prev) => ({ ...prev, [key]: value }));
  };

  // Outside Card's Order Now button: triggers animation & opens WhatsApp
  const triggerGlitterAndOrder = () => {
    setIsGlittering(true);
    setTimeout(() => setIsGlittering(false), 1400);
    onSelectProduct?.(product, selections, priceResult.price);
    openWhatsAppOrder(product.name, product.category, selections, priceResult.formattedPrice);
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
        {/* Top Image Banner Section */}
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
          {/* Header Block with Glossy Black + Red Gradient Price ABOVE Title */}
          <div>
            <div className="mb-1 flex items-baseline justify-between border-b border-neutral-100 pb-2">
              <span className="text-[10px] font-bold text-[#777970] uppercase tracking-wider">
                Total Price
              </span>
              <div
                className={`text-2xl sm:text-3xl font-black bg-gradient-to-r from-[#0E0F08] via-[#CC0000] to-[#E60000] bg-clip-text text-transparent drop-shadow-xs transition-transform duration-300 ${
                  isPriceAnimating ? "animate-price-pop scale-110" : ""
                }`}
              >
                {priceResult.formattedPrice}
              </div>
            </div>

            {/* Product Title */}
            <h3 className="text-xl font-extrabold text-[#0E0F08] leading-tight mt-1">
              {product.name}
            </h3>
            <p className="text-xs text-[#555750] font-medium leading-relaxed mt-1">
              {product.description || `Fully customizable corporate grade ${product.name.toLowerCase()} with premium finishes.`}
            </p>
          </div>

          {/* 2 Column Select Inputs */}
          <div className="grid grid-cols-2 gap-3 pt-2 border-t border-neutral-100">
            {product.attributes.map((attr) => (
              <div key={attr.key} className="space-y-1">
                <label className="text-[13px] font-semibold text-[#0E0F08] capitalize] tracking-wider flex items-center gap-1.5 truncate">
                  <FontAwesomeIcon icon={getAttributeFaIcon(attr.key, attr.name)} className="text-[#CC0000] w-3 h-3 shrink-0" />
                  <span className="truncate">{attr.name}</span>
                </label>

                <div className="relative">
                  <select
                    value={selections[attr.key] || ""}
                    onChange={(e) => handleOptionChange(attr.key, e.target.value)}
                    className="w-full pl-3.5 pr-8 py-2 text-[13px] font-normal text-[#0E0F08] bg-white border border-[#E3E3DE] rounded-full focus:border-[#CC0000] focus:ring-1 focus:ring-[#CC0000] active:border-[#CC0000] outline-none transition-colors cursor-pointer appearance-none truncate"
                  >
                    {attr.options?.map((option) => (
                      <option key={option} value={option} className="font-normal text-[13px]">
                        {option}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 absolute right-3 top-1/2 -translate-y-1/2 text-[#777970] pointer-events-none" />
                </div>
              </div>
            ))}
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
        currentPrice={priceResult.formattedPrice}
        isOpen={isKnowMoreOpen}
        onClose={() => setIsKnowMoreOpen(false)}
        onOrderNow={handleModalOrder}
      />
    </>
  );
}

export default CardType1MultiOption;
