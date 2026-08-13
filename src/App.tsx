import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { setGlobalLenis } from "@/utils/scrollHelper";

import { Header } from "@/components/navigation/header";
import { Footer } from "@/components/navigation/footer";
import { LegalSection } from "@/components/navigation/LegalSection";
import { HeroSlider } from "@/components/home/HeroSlider";
import { Products } from "@/components/home/Products";
import { ProductTitleRow } from "@/components/home/ProductTitleRow";
import { ProductGrid } from "@/components/products/ProductGrid";
import { GoogleReviews } from "@/components/home/GoogleReviews";
import { AboutUs } from "@/components/home/AboutUs";
import { ContactUs } from "@/components/home/ContactUs";
import { CustomQuoteCTA } from "@/components/home/CustomQuoteCTA";
import { Card } from "@/components/ui/card";

/* Lucide React Icons */
import {
  Printer,
  PackageCheck,
  Palette,
  Ruler,
  ArrowRight,
} from "lucide-react";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    setGlobalLenis(lenis);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      setGlobalLenis(null);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#0E0F08] flex flex-col font-sans selection:bg-[#CC0000] selection:text-white">
      {/* 1. Navigation Header */}
      <Header />

      {/* 2. Hero Slider (Dark Carousel Section) */}
      <HeroSlider />

      {/* 3. Floating Products Bar (Half in Carousel section above, Half in Pricing section below) */}
      <div className="relative w-full bg-[#F7F7F5]">
        <div className="relative max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 -mt-9 sm:-mt-10 lg:-mt-11 z-30">
          <Products />
        </div>

        {/* 4. Core Dynamic Product Cards Grid (6 Card Types System) - id="products" */}
        <ProductGrid />
      </div>

      {/* 5. Infinite Product Title Marquee Banner */}
      <ProductTitleRow variant="light" speedDuration={40} />

      {/* 6. Production Capabilities Grid - id="services" */}
      {/* <section id="services" className="w-full bg-[#F7F7F5] py-16 lg:py-24 font-sans border-b border-[#E3E3DE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#CC0000] mb-2">
              Capabilities
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0E0F08] tracking-tight">
              Precision Printing Services
            </h3>
            <p className="text-base text-[#555750] mt-3 font-medium">
              From short-run digital prototypes to massive commercial offset runs, our production facility delivers exact tolerances.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card variant="surface" className="flex flex-col justify-between hover:border-[#CC0000] transition-colors shadow-xs">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-[8px] bg-[#FFF5F5] border border-[#FDECEC] flex items-center justify-center text-[#CC0000]">
                  <Printer className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-[#0E0F08]">Commercial Offset</h4>
                <p className="text-xs text-[#555750] leading-relaxed font-normal">
                  High-volume print runs with pantone spot matching, fine-line screen halftones, and rich density control.
                </p>
              </div>
              <div className="pt-6 border-t border-[#E3E3DE] mt-6 flex items-center justify-between text-xs font-semibold text-[#CC0000]">
                <span>Learn Spec</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Card>

            <Card variant="surface" className="flex flex-col justify-between hover:border-[#CC0000] transition-colors shadow-xs">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-[8px] bg-[#FFF5F5] border border-[#FDECEC] flex items-center justify-center text-[#CC0000]">
                  <Ruler className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-[#0E0F08]">Large Format</h4>
                <p className="text-xs text-[#555750] leading-relaxed font-normal">
                  Architectural banners, trade show backdrops, vehicle graphics, and UV-resistant outdoor signage.
                </p>
              </div>
              <div className="pt-6 border-t border-[#E3E3DE] mt-6 flex items-center justify-between text-xs font-semibold text-[#CC0000]">
                <span>Learn Spec</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Card>

            <Card variant="surface" className="flex flex-col justify-between hover:border-[#CC0000] transition-colors shadow-xs">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-[8px] bg-[#FFF5F5] border border-[#FDECEC] flex items-center justify-center text-[#CC0000]">
                  <PackageCheck className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-[#0E0F08]">Rigid Packaging</h4>
                <p className="text-xs text-[#555750] leading-relaxed font-normal">
                  Custom folding cartons, embossed luxury boxes, micro-flute corrugated mailers, and specialty foils.
                </p>
              </div>
              <div className="pt-6 border-t border-[#E3E3DE] mt-6 flex items-center justify-between text-xs font-semibold text-[#CC0000]">
                <span>Learn Spec</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Card>

            <Card variant="surface" className="flex flex-col justify-between hover:border-[#CC0000] transition-colors shadow-xs">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-[8px] bg-[#FFF5F5] border border-[#FDECEC] flex items-center justify-center text-[#CC0000]">
                  <Palette className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-[#0E0F08]">Specialty Finishes</h4>
                <p className="text-xs text-[#555750] leading-relaxed font-normal">
                  Soft-touch lamination, blind debossing, spot UV varnish, gilded edges, and custom die-cutting.
                </p>
              </div>
              <div className="pt-6 border-t border-[#E3E3DE] mt-6 flex items-center justify-between text-xs font-semibold text-[#CC0000]">
                <span>Learn Spec</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Card>
          </div>
        </div>
      </section> */}

      {/* 7. Google Reviews Section - id="reviews" */}
      <GoogleReviews />

      {/* 8. About Us Section - id="about" */}
      <AboutUs />

    

      {/* 10. Contact Us Section - id="contact" */}
      <ContactUs />
        {/* 9. Premium Custom Quote CTA Banner Section */}
      <CustomQuoteCTA />

      {/* 11. Footer */}
      <Footer />

      {/* 12. Terms & Conditions and Privacy Policy Sections */}
      <LegalSection />
    </div>
  );
}
