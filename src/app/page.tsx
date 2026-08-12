"use client";

import { Header } from "@/components/navigation/header";
import { Footer } from "@/components/navigation/footer";
import { HeroSlider } from "@/components/home/HeroSlider";
import { ProductCategoryRow } from "@/components/home/ProductCategoryRow";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

/* Lucide React Icons */
import {
  Printer,
  Sparkles,
  ShieldCheck,
  PackageCheck,
  Palette,
  Ruler,
  ArrowRight,
  Clock,
  CheckCircle2,
} from "lucide-react";

/* Font Awesome Icons */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPrint,
  faStamp,
  faCertificate,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#0E0F08] flex flex-col font-sans selection:bg-[#CC0000] selection:text-white">
      {/* 1. Navigation Header */}
      <Header />

      {/* 2. Full-Width Premium Hero Carousel Slider */}
      <HeroSlider />

      {/* 3. Horizontal Product Category Row */}
      <ProductCategoryRow />

      {/* 4. Production Capabilities Grid */}
      <section id="services" className="w-full bg-[#F7F7F5] border-b border-[#E3E3DE] py-16 lg:py-24 font-sans">
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
      </section>

      {/* 5. Production Quality Banner */}
      <section className="w-full bg-white py-16 lg:py-20 border-b border-[#E3E3DE] font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[16px] bg-[#F7F7F5] border border-[#E3E3DE] p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <Badge variant="brand" className="text-xs uppercase tracking-widest py-1 px-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>2400 DPI Precision Proofing</span>
              </Badge>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0E0F08]">
                Need Custom Dimensions or Urgent Same-Day Printing?
              </h3>
              <p className="text-sm text-[#555750] leading-relaxed">
                Our print engineering team handles complex die-cuts, custom Pantone spot colors, and bulk corporate orders with guaranteed turnaround times.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <Button variant="primary" size="lg" className="w-full font-bold">
                <Printer className="w-4 h-4" />
                <span>Request Custom Quote</span>
              </Button>
              <Button variant="outline" size="lg" className="w-full font-bold">
                <span>Download Price Catalog</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Footer */}
      <Footer />
    </div>
  );
}
