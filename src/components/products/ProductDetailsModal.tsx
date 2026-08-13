import React from "react";
import { Product } from "../../data/products";
import { getProductImage } from "../../utils/productImages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faCheckCircle, faStar, faTruckFast, faShieldHalved, faXmark, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

interface ProductDetailsModalProps {
  product: Product;
  currentPrice: string;
  isOpen: boolean;
  onClose: () => void;
  onOrderNow: () => void;
}

export function ProductDetailsModal({
  product,
  currentPrice,
  isOpen,
  onClose,
  onOrderNow,
}: ProductDetailsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0E0F08]/70 backdrop-blur-sm animate-fade-in font-sans">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header Bar */}
        <div className="relative w-full h-44 sm:h-52 bg-neutral-100 shrink-0">
          <img
            src={getProductImage(product.id)}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-all cursor-pointer"
          >
            <FontAwesomeIcon icon={faXmark} className="w-4 h-4" />
          </button>

          {/* Title & Badge */}
          <div className="absolute bottom-4 left-5 right-5 text-white">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#CC0000] text-[10px] font-extrabold uppercase tracking-wider mb-1">
              <FontAwesomeIcon icon={faStar} className="w-2.5 h-2.5" />
              {product.category}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black leading-tight tracking-tight">
              {product.name}
            </h2>
          </div>
        </div>

        {/* Modal Content Scroll Area */}
        <div className="p-6 overflow-y-auto space-y-5 text-left">
          {/* Estimated Price Range Banner */}
          <div className="p-4 rounded-2xl bg-[#FFF5F5] border border-[#FDECEC] flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold text-[#777970] uppercase tracking-wider block">
                Selected Specification Estimate
              </span>
              <span className="text-2xl font-black text-[#CC0000]">
                {currentPrice}
              </span>
            </div>
            <div className="text-right">
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#0E0F08] bg-white px-3 py-1 rounded-full border border-neutral-200 shadow-xs">
                <FontAwesomeIcon icon={faTruckFast} className="text-[#CC0000] w-3 h-3" />
                Fast 24-48h Dispatch
              </span>
            </div>
          </div>

          {/* Detailed Points (No Inputs) */}
          <div className="space-y-4">
            <div className="space-y-1.5">
              <h4 className="text-xs font-bold text-[#0E0F08] uppercase tracking-wider flex items-center gap-1.5">
                <FontAwesomeIcon icon={faInfoCircle} className="text-[#CC0000] w-3.5 h-3.5" />
                Product Overview
              </h4>
              <p className="text-xs text-[#555750] leading-relaxed font-medium">
                {product.description ||
                  product.contactMessage ||
                  `High-precision professional printing for ${product.name.toLowerCase()} using industrial grade offset and digital print technology. Designed for max durability and crisp color clarity.`}
              </p>
            </div>

            {/* Complete Specifications Points */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-[#0E0F08] uppercase tracking-wider">
                Full Specifications & Features
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#0E0F08]">
                {product.attributes.map((attr) => (
                  <li key={attr.key} className="flex items-start gap-2 p-2.5 rounded-xl bg-[#F7F7F5] border border-[#E3E3DE]">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-[#CC0000] w-3.5 h-3.5 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-bold block text-[11px] text-[#777970] uppercase">
                        {attr.name}
                      </span>
                      <span className="font-semibold text-xs text-[#0E0F08]">
                        {attr.options ? attr.options.join(", ") : "Customizable"}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quality Guarantee Highlights */}
            <div className="p-3.5 rounded-2xl bg-neutral-900 text-white space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 text-[#FFE600]">
                <FontAwesomeIcon icon={faShieldHalved} className="w-3.5 h-3.5" />
                PrintKit Premium Guarantee
              </div>
              <ul className="text-xs text-neutral-300 space-y-1 font-medium">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CC0000]" />
                  100% HD Color Calibration & Crisp Vector Printing
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CC0000]" />
                  Scratch-Resistant & Weatherproof Laminations
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CC0000]" />
                  Dedicated Graphic Designer Proof Review Before Print
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-neutral-50 border-t border-neutral-100 flex items-center justify-end gap-3 shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-3 rounded-full border border-[#E3E3DE] text-[#0E0F08] hover:bg-[#E3E3DE] font-semibold uppercase text-xs transition-all cursor-pointer"
          >
            Close
          </button>
          <button
            type="button"
            onClick={onOrderNow}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[#CC0000] via-[#E60000] to-[#990000] hover:from-[#A80000] hover:to-[#770000] text-white font-bold uppercase text-xs shadow-md transition-all flex items-center gap-2.5 cursor-pointer"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="text-xl sm:text-2xl text-white shrink-0" />
            <span>Order Now</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsModal;
