import React from "react";
import { Product } from "../../data/products";
import { X, CheckCircle, MessageSquare, PhoneCall, Send, ShieldCheck, Printer } from "lucide-react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
  selections?: Record<string, any>;
  calculatedPrice?: number | null;
}

export function QuoteModal({ isOpen, onClose, product, selections = {}, calculatedPrice }: QuoteModalProps) {
  if (!isOpen || !product) return null;

  const isContactOnly = product.type === "contact" || calculatedPrice === null;
  const phoneNumber = "+919876543210";
  const whatsappNumber = "919876543210";

  // Format summary message for WhatsApp inquiry
  const specText = Object.entries(selections)
    .map(([k, v]) => `• ${k}: ${v}`)
    .join("\n");

  const messageText = isContactOnly
    ? `Hi PrintKit, I am interested in getting a quote for *${product.name}* (${product.category}). Please provide quotation details.`
    : `Hi PrintKit, I would like to place an order for *${product.name}*:\n${specText}\n*Estimated Total:* ₹${calculatedPrice?.toLocaleString("en-IN")}`;

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageText)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs font-sans animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden">
        {/* Top Header */}
        <div className="bg-[#0E0F08] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#CC0000] text-white flex items-center justify-center font-bold">
              <Printer className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-[#FFE600] uppercase tracking-wider">PrintKit Quote System</span>
              <h3 className="text-base font-bold">{product.name}</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="p-4 bg-[#F7F7F5] border border-[#E3E3DE] rounded-2xl space-y-2">
            <div className="text-xs font-bold text-[#0E0F08] uppercase tracking-wider flex items-center justify-between">
              <span>Configuration Summary</span>
              <span className="text-[10px] font-bold text-[#CC0000] bg-[#FFF5F5] px-2 py-0.5 rounded border border-[#FDECEC]">
                {product.category}
              </span>
            </div>

            {Object.keys(selections).length > 0 ? (
              <div className="space-y-1 text-xs text-[#555750]">
                {Object.entries(selections).map(([key, val]) => (
                  <div key={key} className="flex justify-between py-0.5 border-b border-neutral-200/50">
                    <span className="font-semibold text-[#0E0F08] capitalize">{key}:</span>
                    <span className="font-medium text-[#555750]">{val}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-[#555750]">
                Direct consultation for custom dimensions, materials & bulk orders.
              </p>
            )}

            {calculatedPrice && (
              <div className="pt-2 flex justify-between items-center text-sm font-extrabold text-[#0E0F08]">
                <span>Estimated Total:</span>
                <span className="text-lg text-[#CC0000]">₹{calculatedPrice.toLocaleString("en-IN")}</span>
              </div>
            )}
          </div>

          <div className="space-y-2 pt-1">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 bg-[#25D366] hover:bg-[#1EBE5B] text-white font-extrabold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Confirm & Order via WhatsApp</span>
            </a>

            <a
              href={`tel:${phoneNumber}`}
              className="w-full py-3 px-4 bg-[#0E0F08] hover:bg-[#CC0000] text-white font-extrabold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call Print Engineer Direct</span>
            </a>
          </div>

          <p className="text-[11px] text-[#777970] text-center font-medium flex items-center justify-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-[#247A45]" />
            <span>2400 DPI Guarantee • Spot Color Tolerance Certified</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default QuoteModal;
