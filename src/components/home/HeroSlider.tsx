"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ShieldCheck, Truck, Tag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SlideData {
  id: number;
  titleWhite: string;
  titleRed: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  categoryTag: string;
  previewImage: string;
  badge1Title: string;
  badge1Sub: string;
  badge2Title: string;
  badge2Sub: string;
  badge3Title: string;
  badge3Sub: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    titleWhite: "Premium Prints.",
    titleRed: "Powerful Impressions.",
    description: "High-quality printing solutions for every need. Fast delivery. Best price. Guaranteed.",
    primaryCta: "Explore Services",
    secondaryCta: "Bulk Order",
    categoryTag: "Commercial Printing",
    previewImage: "/hero-flyers-stack.png",
    badge1Title: "High Quality",
    badge1Sub: "Premium Materials",
    badge2Title: "Fast Delivery",
    badge2Sub: "On-time Guarantee",
    badge3Title: "Best Price",
    badge3Sub: "Affordable Pricing",
  },
  {
    id: 2,
    titleWhite: "Business Cards.",
    titleRed: "Elevated Branding.",
    description: "Custom visiting cards, luxury foils, matte laminations, and embossed cardstock built to impress.",
    primaryCta: "Shop Visiting Cards",
    secondaryCta: "Request Sample",
    categoryTag: "Corporate Collateral",
    previewImage: "/hero-business-cards.png",
    badge1Title: "2400 DPI",
    badge1Sub: "Ultra-Sharp Text",
    badge2Title: "FSC Certified",
    badge2Sub: "Eco-Friendly Stock",
    badge3Title: "Instant Proof",
    badge3Sub: "Digital Preview",
  },
  {
    id: 3,
    titleWhite: "Large Format.",
    titleRed: "Maximum Visibility.",
    description: "Flex banners, roll-up standees, exhibition displays, and durable outdoor advertising signage.",
    primaryCta: "Browse Banners",
    secondaryCta: "Custom Dimensions",
    categoryTag: "Signage & Display",
    previewImage: "/hero-flex-banner.png",
    badge1Title: "UV Resistant",
    badge1Sub: "Weatherproof Ink",
    badge2Title: "Heavy-Duty",
    badge2Sub: "Reinforced Grommets",
    badge3Title: "Same-Day",
    badge3Sub: "Express Production",
  },
  {
    id: 4,
    titleWhite: "Custom Printing.",
    titleRed: "Personalized Craft.",
    description: "Photo frames, custom packaging boxes, event invitations, stickers, and promotional gifts.",
    primaryCta: "Custom Merchandise",
    secondaryCta: "Bulk Discounts",
    categoryTag: "Personalized Gifts",
    previewImage: "/hero-photo-frame.png",
    badge1Title: "Zero Defect",
    badge1Sub: "100% Quality Checked",
    badge2Title: "Custom Sizing",
    badge2Sub: "Tailored Cutouts",
    badge3Title: "Worldwide",
    badge3Sub: "Safe Packaging",
  },
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const slide = slides[currentSlide];

  return (
    <section className="relative w-full bg-[#0E0F08] text-white overflow-hidden font-sans py-12 lg:py-20">
      {/* Luxury Subtle Background Texture Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-[#0E0F08] to-black opacity-90 pointer-events-none" />

      {/* Main Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6 z-10">
            {/* Category Tag */}
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CC0000]/15 border border-[#CC0000]/30 text-[#CC0000] text-xs font-bold uppercase tracking-wider">
              {slide.categoryTag}
            </span>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
              {slide.titleWhite} <br />
              <span className="text-[#CC0000]">{slide.titleRed}</span>
            </h1>

            {/* Sub-description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
              {slide.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                variant="primary"
                size="lg"
                className="bg-[#CC0000] hover:bg-[#A80000] text-white font-bold rounded-[8px] px-8 py-3.5 shadow-lg shadow-[#CC0000]/25 transition-all"
              >
                <span>{slide.primaryCta}</span>
              </Button>
              <button
                type="button"
                className="h-13 px-8 text-base font-semibold rounded-[8px] border border-white/30 text-white hover:bg-white/10 transition-all cursor-pointer"
              >
                {slide.secondaryCta}
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 w-full max-w-xl text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#CC0000] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white text-sm">{slide.badge1Title}</div>
                  <div className="text-slate-400 text-[11px]">{slide.badge1Sub}</div>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Truck className="w-5 h-5 text-[#CC0000] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white text-sm">{slide.badge2Title}</div>
                  <div className="text-slate-400 text-[11px]">{slide.badge2Sub}</div>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Tag className="w-5 h-5 text-[#CC0000] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white text-sm">{slide.badge3Title}</div>
                  <div className="text-slate-400 text-[11px]">{slide.badge3Sub}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Product Graphic Card Stack */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Visual Graphic Stack Representation */}
            <div className="relative w-full max-w-md aspect-[4/3] rounded-[16px] overflow-hidden p-6 bg-gradient-to-br from-slate-900 to-black border border-white/10 shadow-2xl flex flex-col justify-between group">
              {/* Top status bar */}
              <div className="flex items-center justify-between text-xs text-slate-400 border-b border-white/10 pb-3">
                <span className="font-mono text-[#CC0000] font-bold uppercase tracking-wider">
                  PRINTKIT SPEC #{slide.id}00
                </span>
                <span className="bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded text-[10px] font-bold">
                  2400 DPI ACCURACY
                </span>
              </div>

              {/* Stacked Paper Graphic Illustration */}
              <div className="my-4 relative flex items-center justify-center h-48">
                {/* Back sheet */}
                <div className="absolute w-64 h-36 bg-gradient-to-r from-amber-500 to-red-600 rounded-lg transform -rotate-6 translate-y-3 opacity-60 shadow-lg" />
                {/* Middle sheet */}
                <div className="absolute w-68 h-40 bg-gradient-to-r from-slate-800 to-slate-950 border border-white/20 rounded-lg transform rotate-3 -translate-y-1 shadow-xl p-4 flex flex-col justify-between">
                  <div className="text-[10px] font-bold text-white uppercase tracking-wider">
                    FURNITURE SALE FLYERS
                  </div>
                  <div className="text-xs text-[#CC0000] font-black">HIGH DENSITY OFFSET</div>
                </div>
                {/* Front hero sheet */}
                <div className="relative w-72 h-44 bg-gradient-to-r from-[#CC0000] via-red-700 to-slate-900 rounded-xl border border-red-500/40 p-5 shadow-2xl flex flex-col justify-between transform hover:scale-105 transition-transform duration-300">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-xs font-black text-white uppercase tracking-widest">
                        EXCLUSIVE SALE
                      </div>
                      <div className="text-[10px] text-white/80 font-medium">PRINTKIT COMMERCIAL</div>
                    </div>
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white text-xs font-bold">
                      ✓
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm font-extrabold text-white">POWERFUL IMPRESSIONS</div>
                    <div className="text-[10px] text-white/90">Premium Heavyweight Cardstock</div>
                  </div>
                </div>
              </div>

              {/* Footer info */}
              <div className="flex items-center justify-between text-xs text-slate-300 pt-2 border-t border-white/10">
                <span className="font-semibold">Turnaround: 24-48 Hours</span>
                <span className="text-[#CC0000] font-bold flex items-center gap-1">
                  View Specifications <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Controls: Left / Right Red Arrows */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute left-2 lg:left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#CC0000] hover:bg-[#A80000] text-white flex items-center justify-center shadow-lg transition-all cursor-pointer z-20"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute right-2 lg:right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#CC0000] hover:bg-[#A80000] text-white flex items-center justify-center shadow-lg transition-all cursor-pointer z-20"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8 z-20">
          {slides.map((s, index) => (
            <button
              key={s.id}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all cursor-pointer ${
                currentSlide === index ? "w-8 bg-[#CC0000]" : "w-2.5 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
