import React from "react";
import { Printer, ArrowRight, ShieldCheck, Zap, Layers, MessageSquare } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export function CustomQuoteCTA() {
  const handleWhatsAppContact = () => {
    const phoneNumber = "918778377449";
    const message =
      "Hello PrintKit! 👋\n\nI need an urgent quote for custom printing / custom dimensions.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="w-full bg-[#F7F7F5] py-16 lg:py-24 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Card with Background Image & Dark Luxury Overlay */}
        <div
          className="relative rounded-[24px] overflow-hidden bg-cover bg-center bg-no-repeat border border-slate-800 shadow-2xl"
          style={{ backgroundImage: `url('/bg/ChatGPT Image Aug 12, 2026, 05_14_25 PM.png')` }}
        >
          {/* Multi-Layer Dark Gradient Masks for Ultra Crisp Typography & Luxury Vibe */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E0F08] via-[#0E0F08]/95 sm:via-[#0E0F08]/90 to-[#0E0F08]/60 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E0F08] via-transparent to-[#0E0F08]/50 pointer-events-none" />

          {/* Content Wrapper */}
          <div className="relative z-10 p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Heading (Tag removed as requested) */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                Need Custom Dimensions or <br className="hidden sm:block" />
                <span className="text-[#CC0000] drop-shadow-[0_2px_12px_rgba(204,0,0,0.5)]">
                  Urgent Same-Day Printing?
                </span>
              </h2>

              {/* Sub-description */}
              <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed font-normal">
                Our print engineering team handles complex die-cuts, custom Pantone spot colors, and bulk corporate orders with guaranteed 24-hour turnaround times.
              </p>

              {/* Feature Chips Row */}
              <div className="flex flex-wrap gap-3 pt-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 border border-white/15 text-slate-200 text-xs font-semibold backdrop-blur-md">
                  <Zap className="w-3.5 h-3.5 text-[#CC0000]" />
                  <span>Same-Day Production</span>
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 border border-white/15 text-slate-200 text-xs font-semibold backdrop-blur-md">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#CC0000]" />
                  <span>100% Pantone Spot Match</span>
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 border border-white/15 text-slate-200 text-xs font-semibold backdrop-blur-md">
                  <Layers className="w-3.5 h-3.5 text-[#CC0000]" />
                  <span>Volume Bulk Discounts</span>
                </div>
              </div>

            </div>

            {/* Right Action Column */}
            <div className="lg:col-span-4 flex flex-col gap-4 justify-center">
              
              {/* Primary Action Button */}
              <a href="#contact" className="w-full">
                <button
                  type="button"
                  className="w-full relative overflow-hidden group px-8 py-4 rounded-xl bg-[#CC0000] hover:bg-[#A80000] text-white font-extrabold text-sm shadow-xl shadow-[#CC0000]/30 transition-all flex items-center justify-center gap-3 cursor-pointer active:scale-95"
                >
                  <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
                  <Printer className="w-4 h-4 shrink-0" />
                  <span>Request Custom Quote</span>
                  <ArrowRight className="w-4 h-4 shrink-0 group-hover:translate-x-1 transition-transform" />
                </button>
              </a>

              {/* Secondary WhatsApp Button */}
              <button
                type="button"
                onClick={handleWhatsAppContact}
                className="w-full px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/25 backdrop-blur-md transition-all flex items-center justify-center gap-2.5 cursor-pointer active:scale-95"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="text-lg text-emerald-400 shrink-0" />
                <span>Instant WhatsApp Inquiry</span>
              </button>

           
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default CustomQuoteCTA;
