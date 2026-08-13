import React, { useState } from "react";
import { Printer, ShieldCheck, Zap, Award, Sparkles, CheckCircle2, ArrowRight, Layers, Cpu, Leaf } from "lucide-react";

export function AboutUs() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const pillars = [
    {
      icon: Cpu,
      title: "Japanese Press Tech",
      sub: "Komori & Heidelberg 2400 DPI offset lines",
      desc: "Engineered with Japanese offset press accuracy to deliver ultra-sharp micro text, fine halftones, and zero color drift across 50,000+ sheet runs.",
    },
    {
      icon: Award,
      title: "Spectrophotometer Proofing",
      sub: "100% Pantone spot color fidelity",
      desc: "Calibrated optical sensors verify ink density and pantone shade matching before full production runs leave our facility.",
    },
    {
      icon: Leaf,
      title: "FSC Certified Eco Stock",
      sub: "Sustainable 130 GSM to 400 GSM paper",
      desc: "Sourced from responsibly managed forests with eco-friendly soy-based inks for luxury textures with zero environmental compromise.",
    },
    {
      icon: Layers,
      title: "Automated Die-Cutting",
      sub: "Precision folding & foil stamping",
      desc: "High-speed Swiss laser die-cutters handle intricate shapes, velvet soft-touch laminations, metallic foil stamping, and spot UV varnishes.",
    },
  ];

  return (
    <section id="about" className="w-full bg-white py-16 lg:py-24 font-sans border-b border-[#E3E3DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header with Logo Badge */}
        {/* <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF5F5] border border-[#FDECEC] text-[#CC0000] text-xs font-extrabold uppercase tracking-widest shadow-xs">
            <img src="/favicon.png" alt="PrintKit Seal" className="w-4 h-4 object-contain" />
            <span>Official PrintKit Facility</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0E0F08] tracking-tight leading-[1.15]">
            Architects of Precision Printing. <br />
            <span className="text-[#CC0000]">Zero Defect Standard.</span>
          </h2>

          <p className="text-base text-[#555750] font-medium leading-relaxed">
            Combining industrial offset press horsepower with automated digital proofing, PrintKit is India's leading commercial print engineering partner.
          </p>
        </div> */}

        {/* Main Grid: Left Story & Right Brand Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">

                  <div className="flex items-center justify-center lg:justify-start gap-3">
                  <img
                    src="/logo.png"
                    alt="PrintKit Logo"
                    className="h-20 w-auto object-contain "
                  />
                </div>
            
            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0E0F08]">
                Eliminating Print Guesswork Since Day One.
              </h3>
              <p className="text-sm sm:text-base text-[#555750] leading-relaxed font-normal">
                Traditional print ordering is filled with color variance, delayed dispatch, and unexpected paper stock issues. PrintKit was built to digitize commercial printing with instant specs, guaranteed turnaround times, and 2400 DPI precision.
              </p>
            </div>

            {/* Feature Checklist Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {[
                "2400 DPI Ultra-Sharp Resolution",
                "100% Pantone Spot Shade Match",
                "FSC Certified Sustainable Papers",
                "Express 24-48 HR Turnaround",
                "Instant Digital Proofing Engine",
                "Nationwide Safe Transit Packaging",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-[14px] font-medium text-[#0E0F08] bg-[#F7F7F5] p-2.5 rounded-xl border border-[#E3E3DE]">
                  <CheckCircle2 className="w-4 h-4 text-[#CC0000] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Action CTA Link */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#CC0000] hover:bg-[#A80000] text-white font-semibold text-sm shadow-lg shadow-[#CC0000]/25 transition-all cursor-pointer active:scale-95"
              >
                <span>Partner With Our Print Desk</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: 4 Featured Products Showcase Grid */}
          <div className="lg:col-span-6 hidden md:block">
            <div className="grid grid-cols-2 gap-4">
              
              {/* Product 1: Business Cards */}
              <div className="bg-[#F7F7F5] border border-[#E3E3DE] rounded-2xl p-4 flex flex-col items-center text-center space-y-2 hover:border-[#CC0000] hover:shadow-xl transition-all duration-300 group">
                <div className="w-full h-32 rounded-xl bg-white  p-2.5 flex items-center justify-center overflow-hidden">
                  <img
                    src="/product-png/business-cards.png"
                    alt="Luxury Business Cards"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                  />
                </div>
                <h4 className="text-xs sm:text-sm font-medium text-[#0E0F08]">Business Cards</h4>
                <span className="text-[11px] font-medium text-[#CC0000] bg-[#FFF5F5] px-2.5 py-0.5 rounded-full border border-[#FDECEC]">
                  2400 DPI Offset
                </span>
              </div>

              {/* Product 2: Corporate Brochures */}
              <div className="bg-[#F7F7F5] border border-[#E3E3DE] rounded-2xl p-4 flex flex-col items-center text-center space-y-2 hover:border-[#CC0000] hover:shadow-xl transition-all duration-300 group">
                <div className="w-full h-32 rounded-xl bg-white  p-2.5 flex items-center justify-center overflow-hidden">
                  <img
                    src="/product-png/brochures.png"
                    alt="Corporate Brochures"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                  />
                </div>
                <h4 className="text-xs sm:text-sm font-medium text-[#0E0F08]">Corporate Brochures</h4>
                <span className="text-[11px] font-medium text-[#CC0000] bg-[#FFF5F5] px-2.5 py-0.5 rounded-full border border-[#FDECEC]">
                  Gloss & Matte Proof
                </span>
              </div>

              {/* Product 3: Roll-Up Standees */}
              <div className="bg-[#F7F7F5] border border-[#E3E3DE] rounded-2xl p-4 flex flex-col items-center text-center space-y-2 hover:border-[#CC0000] hover:shadow-xl transition-all duration-300 group">
                <div className="w-full h-32 rounded-xl bg-white  p-2.5 flex items-center justify-center overflow-hidden">
                  <img
                    src="/product-png/roll-up-standee.png"
                    alt="Roll-Up Display Standees"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                  />
                </div>
                <h4 className="text-xs sm:text-sm font-medium text-[#0E0F08]">Roll-Up Standees</h4>
                <span className="text-[11px] font-medium text-[#CC0000] bg-[#FFF5F5] px-2.5 py-0.5 rounded-full border border-[#FDECEC]">
                  Aluminium Base
                </span>
              </div>

              {/* Product 4: Flex Banners */}
              <div className="bg-[#F7F7F5] border border-[#E3E3DE] rounded-2xl p-4 flex flex-col items-center text-center space-y-2 hover:border-[#CC0000] hover:shadow-xl transition-all duration-300 group">
                <div className="w-full h-32 rounded-xl bg-white p-2.5 flex items-center justify-center overflow-hidden">
                  <img
                    src="/product-png/flex-banners.png"
                    alt="Outdoor Flex Banners"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                  />
                </div>
                <h4 className="text-xs sm:text-sm font-medium text-[#0E0F08]">Flex Banners</h4>
                <span className="text-[11px] font-medium text-[#CC0000] bg-[#FFF5F5] px-2.5 py-0.5 rounded-full border border-[#FDECEC]">
                  Weatherproof Star Flex
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom 4 Precision Printing Services Points Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          
          {/* Card 1: Commercial Printing */}
          <div className="bg-[#F7F7F5] border border-[#E3E3DE] rounded-2xl p-5 text-center space-y-3 hover:border-[#CC0000] hover:shadow-xl transition-all duration-300 group">
            <div className="w-full h-36 rounded-xl bg-white border border-[#E3E3DE] overflow-hidden flex items-center justify-center p-3 group-hover:scale-[1.02] transition-transform">
              <img src="/print.png" alt="Commercial Printing Services" className="w-full h-full object-contain" />
            </div>
            <div className="text-2xl font-bold text-[#0E0F08]">10M+ Prints</div>
            <div className="text-sm font-medium text-[#0E0F08] capitalize tracking-wider">Commercial Printing</div>
            <p className="text-[14px] text-[#777970] leading-relaxed">
              Industrial offset & digital printing across 5,000+ corporate accounts.
            </p>
          </div>

          {/* Card 2: Large Format Signage */}
          <div className="bg-[#F7F7F5] border border-[#E3E3DE] rounded-2xl p-5 text-center space-y-3 hover:border-[#CC0000] hover:shadow-xl transition-all duration-300 group">
            <div className="w-full h-36 rounded-xl bg-white border border-[#E3E3DE] overflow-hidden flex items-center justify-center p-3 group-hover:scale-[1.02] transition-transform">
              <img src="/large-format.png" alt="Large Format Outdoor Displays" className="w-full h-full object-contain" />
            </div>
            <div className="text-2xl font-bold text-[#0E0F08]">2400 DPI</div>
            <div className="text-sm font-medium text-[#0E0F08] capitalize tracking-wider">Large Format Signage</div>
            <p className="text-[14px] text-[#777970] leading-relaxed">
              High-resolution flex banners, standees, foam boards & vinyl graphics.
            </p>
          </div>

          {/* Card 3: Custom Packaging & Boxes */}
          <div className="bg-[#F7F7F5] border border-[#E3E3DE] rounded-2xl p-5 text-center space-y-3 hover:border-[#CC0000] hover:shadow-xl transition-all duration-300 group">
            <div className="w-full h-36 rounded-xl bg-white border border-[#E3E3DE] overflow-hidden flex items-center justify-center p-3 group-hover:scale-[1.02] transition-transform">
              <img src="/packaging.png" alt="Custom Packaging & Boxes" className="w-full h-full object-contain" />
            </div>
            <div className="text-2xl font-bold text-[#0E0F08]">24 HR Express</div>
            <div className="text-sm font-medium text-[#0E0F08] capitalize tracking-wider">Custom Packaging</div>
            <p className="text-[14px] text-[#777970] leading-relaxed">
              Precision die-cut boxes, product labels & transit packaging solutions.
            </p>
          </div>

          {/* Card 4: Premium Finishes & Proofing */}
          <div className="bg-[#F7F7F5] border border-[#E3E3DE] rounded-2xl p-5 text-center space-y-3 hover:border-[#CC0000] hover:shadow-xl transition-all duration-300 group">
            <div className="w-full h-36 rounded-xl bg-white border border-[#E3E3DE] overflow-hidden flex items-center justify-center p-3 group-hover:scale-[1.02] transition-transform">
              <img src="/finshes.png" alt="Premium Finishes & Soft Touch Lamination" className="w-full h-full object-contain" />
            </div>
            <div className="text-2xl font-bold text-[#0E0F08]">99.9% Match</div>
            <div className="text-sm font-medium text-[#0E0F08] capitalize tracking-wider">Premium Finishes</div>
            <p className="text-[14px] text-[#777970] leading-relaxed">
              Spot UV, foil stamping, soft-touch matte lamination & Pantone proofing.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutUs;
