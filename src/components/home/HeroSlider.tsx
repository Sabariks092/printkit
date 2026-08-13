import { useState, useEffect, useRef, useCallback } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Truck,
  Tag,
  ArrowRight,
  Sparkles,
  Award,
  Zap,
  CheckCircle2,
  Layers,
  Play,
  Pause,
  Printer,
  FileText,
  Frame,
  Palette,
  Package,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export interface SlideData {
  id: number;
  bgImage: string;
  categoryTag: string;
  titleWhite: string;
  titleRed: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  startingPrice: string;
  turnaround: string;
  specCode: string;
  badges: {
    icon: typeof ShieldCheck;
    title: string;
    sub: string;
  }[];
  features: string[];
}

export const slides: SlideData[] = [
  {
    id: 1,
    bgImage: "/carousel/brochure-carousel.png",
    categoryTag: "Commercial Printing",
    titleWhite: "Multi-Page Brochures",
    titleRed: "& Sales Catalogs.",
    description:
      "High-impact bi-fold & tri-fold brochures, product catalogs, and corporate showcase booklets printed on premium gloss, silk, or matte paper stocks with razor-sharp color density.",
    primaryCta: "Explore Brochures",
    secondaryCta: "Request Sample Kit",
    startingPrice: "Starting ₹1,200",
    turnaround: "24-48 HR Delivery",
    specCode: "PK-BROCHURE-300",
    badges: [
      { icon: FileText, title: "130 - 350 GSM", sub: "Premium Paper Stocks" },
      { icon: Layers, title: "Precision Crease", sub: "Bi-Fold & Tri-Fold Options" },
      { icon: Award, title: "High-Density Offset", sub: "Vibrant Pantone Colors" },
    ],
    features: ["Gloss & Matte Finish", "Custom Die-Cut Folds", "Bulk Discounting", "Digital Proofing"],
  },
  {
    id: 2,
    bgImage: "/carousel/buisness-cards-certficates-carousel.png",
    categoryTag: "Corporate Identity & Distinction",
    titleWhite: "Luxury Business Cards",
    titleRed: "& Foil Certificates.",
    description:
      "Build instant prestige with velvet soft-touch business cards, metallic gold & silver foil stamping, debossed logos, and frame-ready textured official certificates.",
    primaryCta: "Shop Business Cards",
    secondaryCta: "Foil & Texture Specs",
    startingPrice: "Starting ₹750",
    turnaround: "Same-Day Dispatch",
    specCode: "PK-BIZ-CARD-2400",
    badges: [
      { icon: Zap, title: "2400 DPI Accuracy", sub: "Ultra-Sharp Text & Details" },
      { icon: Sparkles, title: "Specialty Foiling", sub: "Gold, Silver & Spot UV" },
      { icon: ShieldCheck, title: "350+ GSM Cardstock", sub: "FSC Certified Eco Stock" },
    ],
    features: ["Velvet Touch Finish", "Metallic Foil Accents", "Instant Proof Preview", "Corner Rounding"],
  },
  {
    id: 3,
    bgImage: "/carousel/flex-banner-carousel.png",
    categoryTag: "Large Format Signage",
    titleWhite: "Heavy-Duty Flex Banners",
    titleRed: "Maximum Outdoor Impact.",
    description:
      "Promote events, storefronts, and outdoor campaigns with heavy-duty flex banners, star flex displays, and weather-resistant vinyl prints engineered for extreme durability.",
    primaryCta: "Browse Flex Banners",
    secondaryCta: "Custom Dimensions",
    startingPrice: "Starting ₹15 / sq.ft",
    turnaround: "Express 24-HR Print",
    specCode: "PK-FLEX-900",
    badges: [
      { icon: Truck, title: "UV Weatherproof", sub: "Sun & Rain Resistant Inks" },
      { icon: Layers, title: "Reinforced Hems", sub: "Heavy Brass Eyelets" },
      { icon: Tag, title: "Star Flex Media", sub: "Ultra High-Contrast Finish" },
    ],
    features: ["Wind-Resistant Mesh", "Seamless Large Formats", "Same-Day Dispatch", "Custom Sizing"],
  },
  {
    id: 4,
    bgImage: "/carousel/photo-frames-carousel.png",
    categoryTag: "Wall Decor & Fine Art",
    titleWhite: "Custom Photo Frames",
    titleRed: "& Gallery Canvas Prints.",
    description:
      "Transform precious memories and digital art into gallery-worthy wall decor with museum-grade canvas wraps, acrylic mounts, and solid synthetic wooden frames.",
    primaryCta: "Customize Photo Frames",
    secondaryCta: "Upload Art & Photo",
    startingPrice: "Starting ₹499",
    turnaround: "2-3 Days Crafting",
    specCode: "PK-FRAME-700",
    badges: [
      { icon: Frame, title: "Archival Quality", sub: "100+ Year Color Retain" },
      { icon: Award, title: "Solid Wood Moulding", sub: "Sleek Modern Frames" },
      { icon: CheckCircle2, title: "Ready To Hang", sub: "Pre-Installed Hardware" },
    ],
    features: ["Gallery Wrapped Edges", "Non-Glare Protective Glass", "Custom Matting", "Safe Shipping"],
  },
  {
    id: 5,
    bgImage: "/carousel/sm-design-carousel.png",
    categoryTag: "Creative & Digital Services",
    titleWhite: "Social Media Graphics",
    titleRed: "& Brand Identity Kits.",
    description:
      "Engage followers and boost ad conversions with expert social media post graphics, promo ad sets, brand style guides, and print-ready digital marketing assets.",
    primaryCta: "Order Graphic Design",
    secondaryCta: "View Design Portfolio",
    startingPrice: "Starting ₹1,999",
    turnaround: "24-Hour First Draft",
    specCode: "PK-DESIGN-800",
    badges: [
      { icon: Palette, title: "High Conversion", sub: "Optimized for Social Ads" },
      { icon: FileText, title: "Vector Source Files", sub: "AI, PSD & PDF Included" },
      { icon: Zap, title: "Rapid Revisions", sub: "Dedicated Designer Support" },
    ],
    features: ["Multi-Platform Sizes", "Print & Web Compatibility", "Brand Style Guide", "100% Ownership"],
  },
  {
    id: 6,
    bgImage: "/carousel/standy-caroousel.png",
    categoryTag: "Exhibitions & Events",
    titleWhite: "Roll-Up Standees",
    titleRed: "& Retractable Displays.",
    description:
      "Command attention at exhibitions, trade shows, and retail entryways with lightweight retractable standees, non-curl flat media, and durable aluminum base structures.",
    primaryCta: "Shop Display Standees",
    secondaryCta: "Bulk Event Rates",
    startingPrice: "Starting ₹1,450",
    turnaround: "24-Hour Production",
    specCode: "PK-STANDY-500",
    badges: [
      { icon: Printer, title: "Non-Curl Media", sub: "Flat & Tear-Resistant PVC" },
      { icon: ShieldCheck, title: "Aluminum Base", sub: "Heavy-Duty Retractable" },
      { icon: Package, title: "Travel Carrying Bag", sub: "Padded Case Included" },
    ],
    features: ["30-Second Assembly", "Replaceable Mechanism", "Vibrant HD Color", "Portable Design"],
  },
  {
    id: 7,
    bgImage: "/carousel/sticker-labels-carousel.png",
    categoryTag: "Packaging & Product Labels",
    titleWhite: "Custom Vinyl Stickers",
    titleRed: "& Product Label Rolls.",
    description:
      "Elevate product packaging with precision die-cut stickers, waterproof jar & bottle labels, metallic foil seals, and barcode rolls with extra-tack adhesive.",
    primaryCta: "Shop Sticker Labels",
    secondaryCta: "Request Roll Quote",
    startingPrice: "Starting ₹250",
    turnaround: "1-2 Days Dispatch",
    specCode: "PK-STICKER-400",
    badges: [
      { icon: CheckCircle2, title: "100% Waterproof", sub: "Oil & Scratch Resistant" },
      { icon: Sparkles, title: "Precision Die-Cut", sub: "Any Custom Shape & Size" },
      { icon: Tag, title: "High-Tack Adhesive", sub: "Binds Glass, Box & Plastic" },
    ],
    features: ["Clear & Metallic Vinyl", "Matte & Gloss Laminates", "Sheet & Roll Formats", "Food-Safe Materials"],
  },
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = slides.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Auto-play timer mechanism
  useEffect(() => {
    if (isPlaying && !isHovered) {
      autoPlayTimerRef.current = setInterval(() => {
        nextSlide();
      }, 6000);
    }

    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
    };
  }, [isPlaying, isHovered, nextSlide, currentSlide]);

  // Keyboard Arrow controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch Swipe handlers for smooth right-to-left swipe experience
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
    setTouchEndX(null);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      // Swiped left -> next slide
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      // Swiped right -> prev slide
      prevSlide();
    }
  };

  const activeSlide = slides[currentSlide];

  return (
    <section
      className="relative w-full bg-[#0E0F08] text-white overflow-hidden font-sans select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Product Showcase Carousel"
    >
      {/* 1. SLIDING CAROUSEL TRACK (Smooth Right-to-Left Sliding) */}
      <div
        className="flex w-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;

          return (
            <div
              key={slide.id}
              className="relative w-full shrink-0 min-w-full min-h-[500px] sm:min-h-[600px] lg:min-h-[680px] flex items-center py-10 sm:py-16 lg:py-20 bg-cover bg-center bg-no-repeat transition-all"
              style={{ backgroundImage: `url(${slide.bgImage})` }}
            >
              {/* Mobile background dark overlay to guarantee 100% text readability */}
              <div className="absolute inset-0 bg-[#0E0F08]/80 sm:hidden z-0 pointer-events-none" />

              {/* Smooth Left-Side Dark Gradient Mask for Desktop */}
              <div
                className="absolute inset-0 z-0 pointer-events-none hidden sm:block"
                style={{
                  background:
                    "linear-gradient(to right, #0E0F08 0%, #0E0F08 20%, rgba(14, 15, 8, 0.9) 32%, rgba(14, 15, 8, 0.4) 42%, rgba(14, 15, 8, 0) 50%)",
                }}
              />
              {/* Subtle bottom edge gradient for smooth control bar merge */}
              <div
                className="absolute inset-x-0 bottom-0 h-20 z-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, rgba(14, 15, 8, 0.6) 0%, transparent 100%)",
                }}
              />

              {/* Slide Content Container */}
              <div className="relative max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* LEFT SIDE CONTENT - Product Specific Details */}
                  <div className="lg:col-span-6 max-w-xl flex flex-col items-center text-center sm:items-start sm:text-left gap-4 sm:gap-5">
                    
                    {/* Dynamic Animated Headline */}
                    <div className="space-y-1">
                      <h1 className="text-2xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] sm:leading-[1.1] text-white">
                        {slide.titleWhite}{" "}
                        <span className="text-[#CC0000] drop-shadow-[0_2px_12px_rgba(204,0,0,0.4)] block sm:inline mt-0.5 sm:mt-0">
                          {slide.titleRed}
                        </span>
                      </h1>
                    </div>

                    {/* Detailed Product Description */}
                    <p className="text-xs sm:text-base lg:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
                      {slide.description}
                    </p>

                    {/* CTA Buttons */}
                   <div className="hidden md:block">
                     <div className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-4 pt-2 sm:pt-3 w-full sm:w-auto">
                      <Button
                        variant="primary"
                        size="lg"
                        className="bg-[#CC0000] hover:bg-[#A80000] text-white font-bold rounded-[10px] px-6 sm:px-8 py-3 sm:py-3.5 text-xs sm:text-sm shadow-xl shadow-[#CC0000]/30 transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center gap-2 w-full max-w-xs sm:w-auto"
                      >
                        <span>{slide.primaryCta}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Button>

                      <button
                        type="button"
                        className="h-10 sm:h-12 px-5 sm:px-7 text-xs sm:text-sm font-semibold rounded-[10px] border border-white/30 bg-black/40 hover:bg-white/15 text-white backdrop-blur-md transition-all hover:border-white/60 active:scale-95 cursor-pointer flex items-center justify-center gap-2 w-full max-w-xs sm:w-auto"
                      >
                        <span>{slide.secondaryCta}</span>
                      </button>
                    </div>
                   </div>

                    {/* Trust Badges / Specifications Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 pt-4 sm:pt-6 border-t border-white/15 w-full max-w-2xl text-xs text-slate-300 mt-1 sm:mt-2">
                      {slide.badges.map((badge, bIdx) => {
                        const BadgeIcon = badge.icon;
                        return (
                          <div key={bIdx} className="flex items-center justify-center sm:justify-start sm:items-start gap-2.5">
                            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#CC0000]/20 border border-[#CC0000]/40 flex items-center justify-center text-[#CC0000] shrink-0">
                              <BadgeIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            </div>
                            <div className="text-left">
                              <div className="font-bold text-white text-xs sm:text-sm leading-tight">
                                {badge.title}
                              </div>
                              <div className="text-slate-400 text-[10px] sm:text-[11px] mt-0.5 leading-tight line-clamp-1">
                                {badge.sub}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                       {/*Mobile - CTA Buttons */}
                   <div className="md:hidden block">
                     <div className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-4 pt-2 sm:pt-3 w-full sm:w-auto">
                      <Button
                        variant="primary"
                        size="lg"
                        className="bg-[#CC0000] hover:bg-[#A80000] text-white font-bold rounded-[10px] px-6 sm:px-8 py-3 sm:py-3.5 text-xs sm:text-sm shadow-xl shadow-[#CC0000]/30 transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center gap-2 w-full max-w-xs sm:w-auto"
                      >
                        <span>{slide.primaryCta}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Button>

                      <button
                        type="button"
                        className="h-10 sm:h-12 px-5 sm:px-7 text-xs sm:text-sm font-semibold rounded-[10px] border border-white/30 bg-black/40 hover:bg-white/15 text-white backdrop-blur-md transition-all hover:border-white/60 active:scale-95 cursor-pointer flex items-center justify-center gap-2 w-full max-w-xs sm:w-auto"
                      >
                        <span>{slide.secondaryCta}</span>
                      </button>
                    </div>
                   </div>
                  </div>

                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 2. OVERLAY CONTROLS & NAVIGATION */}

      {/* Left Red Arrow Button */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-2 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full bg-[#CC0000]/80 hover:bg-[#CC0000] text-white hidden sm:flex items-center justify-center shadow-2xl transition-all hover:scale-110 active:scale-95 cursor-pointer z-30 border border-white/20"
      >
        <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
      </button>

      {/* Right Red Arrow Button */}
      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-2 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full bg-[#CC0000]/80 hover:bg-[#CC0000] text-white hidden sm:flex items-center justify-center shadow-2xl transition-all hover:scale-110 active:scale-95 cursor-pointer z-30 border border-white/20"
      >
        <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
      </button>

      {/* Bottom Control Bar: Quick Product Tabs + Play/Pause + Dots */}
      {/* <div className="absolute bottom-4 left-0 right-0 z-30 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 bg-black/60 border border-white/15 backdrop-blur-xl rounded-2xl p-2.5 sm:px-6">
          
          
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar w-full sm:w-auto py-1">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentSlide(idx)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  currentSlide === idx
                    ? "bg-[#CC0000] text-white shadow-md shadow-[#CC0000]/40 font-bold"
                    : "bg-white/5 text-slate-300 hover:bg-white/15 hover:text-white"
                }`}
              >
                {s.titleWhite.split(" ")[0]}
              </button>
            ))}
          </div>

       
          <div className="flex items-center gap-4 shrink-0">
           
            <span className="text-xs font-mono text-slate-300 font-bold tracking-widest">
              0{currentSlide + 1} / 0{totalSlides}
            </span>

           
            <button
              onClick={() => setIsPlaying((prev) => !prev)}
              aria-label={isPlaying ? "Pause auto-slide" : "Play auto-slide"}
              className="p-1.5 rounded-md bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>

           
            <div className="flex items-center gap-1.5">
              {slides.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    currentSlide === idx
                      ? "w-7 bg-[#CC0000]"
                      : "w-2 bg-white/30 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
      </div> */}

      {/* Top Animated Auto-play Progress Bar */}
      {isPlaying && !isHovered && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-white/10 z-30 overflow-hidden">
          <div
            key={currentSlide}
            className="h-full bg-[#CC0000] transition-all duration-[6000ms] ease-linear w-full origin-left animate-[progress_6s_linear]"
            style={{
              animation: "progress 6s linear infinite",
            }}
          />
        </div>
      )}
    </section>
  );
}

export default HeroSlider;

