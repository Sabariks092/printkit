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
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-4">
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
        </div>

        {/* Main Grid: Left Story & Right Brand Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            
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
                <div key={idx} className="flex items-center gap-2.5 text-xs font-bold text-[#0E0F08] bg-[#F7F7F5] p-2.5 rounded-xl border border-[#E3E3DE]">
                  <CheckCircle2 className="w-4 h-4 text-[#CC0000] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Action CTA Link */}
            <div className="pt-4 flex items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#CC0000] hover:bg-[#A80000] text-white font-extrabold text-sm shadow-lg shadow-[#CC0000]/25 transition-all cursor-pointer active:scale-95"
              >
                <span>Partner With Our Print Desk</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Premium Brand Showcase Card with logo.png & favicon.png */}
          <div className="lg:col-span-6">
            <div className="relative rounded-[24px] bg-[#0E0F08] p-8 sm:p-10 border border-slate-800 shadow-2xl overflow-hidden group">
              
              {/* Background Glow Overlay */}
              <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#CC0000]/20 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#CC0000]/15 blur-3xl pointer-events-none" />

              {/* Brand Header with Logo & Favicon */}
              <div className="relative z-10 flex items-center justify-between border-b border-white/15 pb-6 mb-8">
                <div className="flex items-center gap-3">
                  <img
                    src="/logo.png"
                    alt="PrintKit Logo"
                    className="h-10 w-auto object-contain brightness-0 invert"
                  />
                </div>

                <div className="flex items-center gap-2 bg-white/10 border border-white/15 px-3 py-1.5 rounded-full backdrop-blur-md">
                  <img src="/favicon.png" alt="PrintKit Favicon" className="w-4 h-4 object-contain" />
                  <span className="text-[11px] font-mono font-bold text-white tracking-wider">
                    EST. PRINTKIT
                  </span>
                </div>
              </div>

              {/* Interactive Pillar Selector */}
              <div className="relative z-10 space-y-4">
                <div className="text-xs uppercase tracking-widest text-[#CC0000] font-extrabold">
                  Core Engineering Capabilities
                </div>

                {/* Pillar Cards */}
                <div className="space-y-3">
                  {pillars.map((pillar, pIdx) => {
                    const PillarIcon = pillar.icon;
                    const isSelected = activeTab === pIdx;

                    return (
                      <div
                        key={pIdx}
                        onClick={() => setActiveTab(pIdx)}
                        className={`p-4 rounded-xl border transition-all cursor-pointer ${
                          isSelected
                            ? "bg-white/15 border-[#CC0000] shadow-lg"
                            : "bg-white/5 border-white/10 hover:bg-white/10"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                            isSelected ? "bg-[#CC0000] text-white" : "bg-white/10 text-slate-300"
                          }`}>
                            <PillarIcon className="w-4 h-4" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="text-xs sm:text-sm font-bold text-white truncate">
                              {pillar.title}
                            </h4>
                            <p className="text-[11px] text-slate-400 truncate">
                              {pillar.sub}
                            </p>
                          </div>
                        </div>

                        {isSelected && (
                          <p className="text-xs text-slate-300 mt-3 pt-3 border-t border-white/10 leading-relaxed animate-in fade-in">
                            {pillar.desc}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Card Footer */}
              <div className="relative z-10 mt-8 pt-6 border-t border-white/15 flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono">Precision standard: 2400 DPI</span>
                <span className="text-[#CC0000] font-bold flex items-center gap-1">
                  Verified Facility <Sparkles className="w-3.5 h-3.5" />
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom 4 Key Metrics Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-4">
          
          <div className="bg-[#F7F7F5] border border-[#E3E3DE] rounded-2xl p-6 text-center space-y-2 hover:border-[#CC0000] transition-colors shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#FFF5F5] border border-[#FDECEC] flex items-center justify-center text-[#CC0000] mx-auto">
              <Printer className="w-5 h-5" />
            </div>
            <div className="text-3xl font-extrabold text-[#0E0F08]">10M+</div>
            <div className="text-xs font-bold text-[#0E0F08]">Total Prints Delivered</div>
            <p className="text-[11px] text-[#777970]">Across 5,000+ corporate clients</p>
          </div>

          <div className="bg-[#F7F7F5] border border-[#E3E3DE] rounded-2xl p-6 text-center space-y-2 hover:border-[#CC0000] transition-colors shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#FFF5F5] border border-[#FDECEC] flex items-center justify-center text-[#CC0000] mx-auto">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-3xl font-extrabold text-[#0E0F08]">2400 DPI</div>
            <div className="text-xs font-bold text-[#0E0F08]">Offset & Digital Resolution</div>
            <p className="text-[11px] text-[#777970]">Japanese press accuracy</p>
          </div>

          <div className="bg-[#F7F7F5] border border-[#E3E3DE] rounded-2xl p-6 text-center space-y-2 hover:border-[#CC0000] transition-colors shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#FFF5F5] border border-[#FDECEC] flex items-center justify-center text-[#CC0000] mx-auto">
              <Zap className="w-5 h-5" />
            </div>
            <div className="text-3xl font-extrabold text-[#0E0F08]">24 Hours</div>
            <div className="text-xs font-bold text-[#0E0F08]">Express Dispatch Option</div>
            <p className="text-[11px] text-[#777970]">For urgent promotional events</p>
          </div>

          <div className="bg-[#F7F7F5] border border-[#E3E3DE] rounded-2xl p-6 text-center space-y-2 hover:border-[#CC0000] transition-colors shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#FFF5F5] border border-[#FDECEC] flex items-center justify-center text-[#CC0000] mx-auto">
              <Award className="w-5 h-5" />
            </div>
            <div className="text-3xl font-extrabold text-[#0E0F08]">99.9%</div>
            <div className="text-xs font-bold text-[#0E0F08]">Color Matching Rate</div>
            <p className="text-[11px] text-[#777970]">Pantone spectrophotometer proof</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutUs;
