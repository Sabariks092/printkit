"use client";

import Image from "next/image";
import { useState } from "react";
import { Header } from "@/components/navigation/header";
import { Footer } from "@/components/navigation/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

/* Lucide React Icons */
import {
  Printer,
  Sparkles,
  Zap,
  ShieldCheck,
  Layers,
  FileCheck,
  Sliders,
  CheckCircle2,
  ArrowRight,
  PackageCheck,
  Palette,
  Ruler,
  Clock,
  Code2,
} from "lucide-react";

/* Font Awesome Icons */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faStar,
  faFire,
  faGem,
  faPrint,
  faStamp,
  faCertificate,
  faPalette,
  faSlidersH,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faFontAwesome, faReact } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"buttons" | "forms" | "icons" | "tokens">("buttons");
  const [emailInput, setEmailInput] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput) setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#0E0F08] flex flex-col font-sans selection:bg-[#CC0000] selection:text-white">
      {/* Navigation Header */}
      <Header />

      {/* Hero Section */}
      <section className="w-full bg-[#FFFFFF] border-b border-[#E3E3DE] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Copy & CTAs */}
            <div className="lg:col-span-7 flex flex-col items-start gap-6">
              <Badge variant="brand" className="text-xs uppercase tracking-widest py-1 px-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Industrial Precision Print Studio</span>
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0E0F08] tracking-tight leading-[1.1]">
                Quality in Print. <br />
                <span className="text-[#CC0000]">Precision in Design.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#555750] max-w-2xl leading-relaxed">
                PrintKit combines high-speed commercial offset, large-format production, and ultra-precise digital presses with modern design system standards. Engineered for brands that demand perfection.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button variant="primary" size="lg">
                  <Printer className="w-5 h-5" />
                  <span>Start Print Order</span>
                </Button>
                <Button variant="outline" size="lg">
                  <span>Explore Design Tokens</span>
                  <ArrowRight className="w-4 h-4 text-[#CC0000]" />
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#E3E3DE] w-full max-w-xl text-xs text-[#555750]">
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-sm text-[#0E0F08] flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#CC0000]" /> 2400 DPI
                  </span>
                  <span>Ultra-crisp output</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-sm text-[#0E0F08] flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#CC0000]" /> 24 Hours
                  </span>
                  <span>Turnaround available</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-sm text-[#0E0F08] flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#247A45]" /> ISO 12647
                  </span>
                  <span>Certified color profile</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Graphic Preview Card */}
            <div className="lg:col-span-5 w-full">
              <div className="rounded-[16px] bg-[#F7F7F5] border border-[#E3E3DE] p-8 shadow-card flex flex-col gap-6 relative">
                <div className="flex items-center justify-between border-b border-[#E3E3DE] pb-4">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/logo.png"
                      alt="PrintKit"
                      width={120}
                      height={32}
                      className="h-7 w-auto object-contain"
                    />
                  </div>
                  <Badge variant="brand">Spec V4.0</Badge>
                </div>

                <div className="space-y-3">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#0E0F08]">
                    Production Status
                  </h3>
                  <div className="space-y-2">
                    <div className="p-3 bg-white rounded-[8px] border border-[#E3E3DE] flex items-center justify-between text-xs">
                      <span className="font-medium text-[#0E0F08] flex items-center gap-2">
                        <FontAwesomeIcon icon={faPrint} className="text-[#CC0000]" /> 100# Uncoated Cover Stock
                      </span>
                      <span className="text-[#247A45] font-semibold">In Press</span>
                    </div>
                    <div className="p-3 bg-white rounded-[8px] border border-[#E3E3DE] flex items-center justify-between text-xs">
                      <span className="font-medium text-[#0E0F08] flex items-center gap-2">
                        <FontAwesomeIcon icon={faStamp} className="text-[#CC0000]" /> Matte Foil Stamping
                      </span>
                      <span className="text-[#555750]">Calibrated</span>
                    </div>
                    <div className="p-3 bg-white rounded-[8px] border border-[#E3E3DE] flex items-center justify-between text-xs">
                      <span className="font-medium text-[#0E0F08] flex items-center gap-2">
                        <FontAwesomeIcon icon={faCertificate} className="text-[#CC0000]" /> Color Accuracy Test
                      </span>
                      <span className="text-[#247A45] font-semibold">100% Match</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-[8px] border border-[#E3E3DE] text-xs text-[#555750]">
                  <p className="font-semibold text-[#0E0F08] mb-1">Brand Palette Ratio Enforced:</p>
                  <div className="w-full h-3 rounded-full overflow-hidden flex border border-[#E3E3DE]">
                    <div className="bg-[#FFFFFF] w-[75%]" title="Neutral 75%" />
                    <div className="bg-[#0E0F08] w-[18%]" title="Near Black 18%" />
                    <div className="bg-[#CC0000] w-[7%]" title="Primary Red 7%" />
                  </div>
                  <div className="flex justify-between mt-2 font-mono text-[10px] text-[#777970]">
                    <span>75% Neutral</span>
                    <span>18% Near-Black</span>
                    <span className="text-[#CC0000] font-bold">7% Red</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services & Capabilities Section */}
      <section id="services" className="w-full bg-[#F7F7F5] border-b border-[#E3E3DE] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#CC0000] mb-2">
              Capabilities
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0E0F08] tracking-tight">
              Precision Printing Services
            </h3>
            <p className="text-base text-[#555750] mt-3">
              From short-run digital prototypes to massive commercial offset runs, our production facility delivers exact tolerances.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card variant="surface" className="flex flex-col justify-between hover:border-[#CC0000] transition-colors">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-[8px] bg-[#FFF5F5] border border-[#FDECEC] flex items-center justify-center text-[#CC0000]">
                  <Printer className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-[#0E0F08]">Commercial Offset</h4>
                <p className="text-xs text-[#555750] leading-relaxed">
                  High-volume print runs with pantone spot matching, fine-line screen halftones, and rich density control.
                </p>
              </div>
              <div className="pt-6 border-t border-[#E3E3DE] mt-6 flex items-center justify-between text-xs font-semibold text-[#CC0000]">
                <span>Learn Spec</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Card>

            <Card variant="surface" className="flex flex-col justify-between hover:border-[#CC0000] transition-colors">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-[8px] bg-[#FFF5F5] border border-[#FDECEC] flex items-center justify-center text-[#CC0000]">
                  <Ruler className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-[#0E0F08]">Large Format</h4>
                <p className="text-xs text-[#555750] leading-relaxed">
                  Architectural banners, trade show backdrops, vehicle graphics, and UV-resistant outdoor signage.
                </p>
              </div>
              <div className="pt-6 border-t border-[#E3E3DE] mt-6 flex items-center justify-between text-xs font-semibold text-[#CC0000]">
                <span>Learn Spec</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Card>

            <Card variant="surface" className="flex flex-col justify-between hover:border-[#CC0000] transition-colors">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-[8px] bg-[#FFF5F5] border border-[#FDECEC] flex items-center justify-center text-[#CC0000]">
                  <PackageCheck className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-[#0E0F08]">Rigid Packaging</h4>
                <p className="text-xs text-[#555750] leading-relaxed">
                  Custom folding cartons, embossed luxury boxes, micro-flute corrugated mailers, and specialty foils.
                </p>
              </div>
              <div className="pt-6 border-t border-[#E3E3DE] mt-6 flex items-center justify-between text-xs font-semibold text-[#CC0000]">
                <span>Learn Spec</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Card>

            <Card variant="surface" className="flex flex-col justify-between hover:border-[#CC0000] transition-colors">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-[8px] bg-[#FFF5F5] border border-[#FDECEC] flex items-center justify-center text-[#CC0000]">
                  <Palette className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-[#0E0F08]">Specialty Finishes</h4>
                <p className="text-xs text-[#555750] leading-relaxed">
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

      {/* Design System Interactive Gallery */}
      <section id="components" className="w-full bg-white border-b border-[#E3E3DE] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#CC0000] mb-2">
              Design System
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0E0F08] tracking-tight">
              PrintKit Design Language &amp; Components
            </h3>
            <p className="text-base text-[#555750] mt-3">
              Explore the light-theme UI primitives, typography hierarchy, input elements, buttons, and icon integration.
            </p>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex p-1 bg-[#F7F7F5] rounded-[8px] border border-[#E3E3DE] text-xs font-semibold text-[#0E0F08]">
              <button
                onClick={() => setActiveTab("buttons")}
                className={`px-4 py-2 rounded-[6px] transition-all cursor-pointer ${
                  activeTab === "buttons"
                    ? "bg-white text-[#CC0000] shadow-sm font-bold border border-[#E3E3DE]"
                    : "hover:text-[#CC0000]"
                }`}
              >
                Buttons &amp; Badges
              </button>
              <button
                onClick={() => setActiveTab("forms")}
                className={`px-4 py-2 rounded-[6px] transition-all cursor-pointer ${
                  activeTab === "forms"
                    ? "bg-white text-[#CC0000] shadow-sm font-bold border border-[#E3E3DE]"
                    : "hover:text-[#CC0000]"
                }`}
              >
                Form Controls
              </button>
              <button
                onClick={() => setActiveTab("icons")}
                className={`px-4 py-2 rounded-[6px] transition-all cursor-pointer ${
                  activeTab === "icons"
                    ? "bg-white text-[#CC0000] shadow-sm font-bold border border-[#E3E3DE]"
                    : "hover:text-[#CC0000]"
                }`}
              >
                Icon Suite (Lucide &amp; FA)
              </button>
              <button
                onClick={() => setActiveTab("tokens")}
                className={`px-4 py-2 rounded-[6px] transition-all cursor-pointer ${
                  activeTab === "tokens"
                    ? "bg-white text-[#CC0000] shadow-sm font-bold border border-[#E3E3DE]"
                    : "hover:text-[#CC0000]"
                }`}
              >
                Color Tokens
              </button>
            </div>
          </div>

          {/* Tab Content 1: Buttons & Badges */}
          {activeTab === "buttons" && (
            <Card variant="offwhite" className="p-8 space-y-8">
              <div className="space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#0E0F08]">
                  Button Variants
                </h4>
                <div className="flex flex-wrap items-center gap-4">
                  <Button variant="primary">Primary Red (#CC0000)</Button>
                  <Button variant="secondary">Secondary Neutral</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="darkOutline">Dark Outline</Button>
                  <Button variant="ghost">Ghost Red</Button>
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t border-[#E3E3DE]">
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#0E0F08]">
                  Button Sizes
                </h4>
                <div className="flex flex-wrap items-center gap-4">
                  <Button variant="primary" size="sm">Small (h-9)</Button>
                  <Button variant="primary" size="md">Medium (h-11)</Button>
                  <Button variant="primary" size="lg">Large (h-13)</Button>
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t border-[#E3E3DE]">
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#0E0F08]">
                  Badges &amp; Status Indicators
                </h4>
                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant="brand">Brand Red (#CC0000)</Badge>
                  <Badge variant="neutral">Neutral Subdued</Badge>
                  <Badge variant="success">Success (#247A45)</Badge>
                  <Badge variant="warning">Warning (#B77900)</Badge>
                  <Badge variant="info">Information (#315E8C)</Badge>
                </div>
              </div>
            </Card>
          )}

          {/* Tab Content 2: Form Controls */}
          {activeTab === "forms" && (
            <Card variant="surface" className="p-8 max-w-2xl mx-auto space-y-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <h4 className="text-base font-bold text-[#0E0F08]">Sample Order Form</h4>
                <Input
                  label="Full Name"
                  placeholder="e.g. Alexander Vance"
                  required
                />
                <Input
                  label="Work Email Address"
                  type="email"
                  placeholder="alexander@company.com"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  helperText="Focus ring uses primary brand red (#CC0000)"
                  required
                />
                <div className="flex flex-col gap-1.5 w-full">
                  <label className="text-xs font-bold text-[#0E0F08] uppercase tracking-wider">
                    Paper Stock Selection
                  </label>
                  <select className="w-full h-11 px-3.5 bg-white text-[#0E0F08] text-sm rounded-[8px] border border-[#E3E3DE] hover:border-[#CFCFC8] focus-ring-red">
                    <option>100# Uncoated Cover (Standard)</option>
                    <option>120# Silk Matte Cardstock</option>
                    <option>16pt Premium Gloss Coated</option>
                    <option>FSC Certified Recycled Kraft</option>
                  </select>
                </div>
                <Button variant="primary" type="submit" className="w-full mt-4">
                  <span>Submit Sample Order</span>
                </Button>
                {submitted && (
                  <p className="text-xs font-semibold text-[#247A45] flex items-center justify-center gap-1 mt-2">
                    <CheckCircle2 className="w-4 h-4" /> Form submitted with custom focus ring state!
                  </p>
                )}
              </form>
            </Card>
          )}

          {/* Tab Content 3: Icons */}
          {activeTab === "icons" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Lucide Icons */}
              <Card variant="surface" className="space-y-6">
                <div className="flex items-center justify-between border-b border-[#E3E3DE] pb-4">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-5 h-5 text-[#CC0000]" />
                    <h4 className="text-base font-bold text-[#0E0F08]">Lucide React Suite</h4>
                  </div>
                  <Badge variant="neutral">Geometric 1.5–2px</Badge>
                </div>

                <div className="grid grid-cols-4 gap-4 text-center">
                  <div className="p-4 bg-[#F7F7F5] rounded-[8px] border border-[#E3E3DE] flex flex-col items-center gap-2">
                    <Printer className="w-6 h-6 text-[#CC0000]" />
                    <span className="text-[11px] font-mono text-[#555750]">Printer</span>
                  </div>
                  <div className="p-4 bg-[#F7F7F5] rounded-[8px] border border-[#E3E3DE] flex flex-col items-center gap-2">
                    <Sparkles className="w-6 h-6 text-[#CC0000]" />
                    <span className="text-[11px] font-mono text-[#555750]">Sparkles</span>
                  </div>
                  <div className="p-4 bg-[#F7F7F5] rounded-[8px] border border-[#E3E3DE] flex flex-col items-center gap-2">
                    <ShieldCheck className="w-6 h-6 text-[#247A45]" />
                    <span className="text-[11px] font-mono text-[#555750]">ShieldCheck</span>
                  </div>
                  <div className="p-4 bg-[#F7F7F5] rounded-[8px] border border-[#E3E3DE] flex flex-col items-center gap-2">
                    <Ruler className="w-6 h-6 text-[#315E8C]" />
                    <span className="text-[11px] font-mono text-[#555750]">Ruler</span>
                  </div>
                </div>
              </Card>

              {/* Font Awesome Icons */}
              <Card variant="surface" className="space-y-6">
                <div className="flex items-center justify-between border-b border-[#E3E3DE] pb-4">
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faFontAwesome} className="w-5 h-5 text-[#CC0000]" />
                    <h4 className="text-base font-bold text-[#0E0F08]">Font Awesome Suite</h4>
                  </div>
                  <Badge variant="neutral">Solid &amp; Brands</Badge>
                </div>

                <div className="grid grid-cols-4 gap-4 text-center">
                  <div className="p-4 bg-[#F7F7F5] rounded-[8px] border border-[#E3E3DE] flex flex-col items-center gap-2">
                    <FontAwesomeIcon icon={faPrint} className="w-6 h-6 text-[#CC0000]" />
                    <span className="text-[11px] font-mono text-[#555750]">faPrint</span>
                  </div>
                  <div className="p-4 bg-[#F7F7F5] rounded-[8px] border border-[#E3E3DE] flex flex-col items-center gap-2">
                    <FontAwesomeIcon icon={faStamp} className="w-6 h-6 text-[#CC0000]" />
                    <span className="text-[11px] font-mono text-[#555750]">faStamp</span>
                  </div>
                  <div className="p-4 bg-[#F7F7F5] rounded-[8px] border border-[#E3E3DE] flex flex-col items-center gap-2">
                    <FontAwesomeIcon icon={faCertificate} className="w-6 h-6 text-[#247A45]" />
                    <span className="text-[11px] font-mono text-[#555750]">faCertificate</span>
                  </div>
                  <div className="p-4 bg-[#F7F7F5] rounded-[8px] border border-[#E3E3DE] flex flex-col items-center gap-2">
                    <FontAwesomeIcon icon={faBolt} className="w-6 h-6 text-[#B77900]" />
                    <span className="text-[11px] font-mono text-[#555750]">faBolt</span>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {/* Tab Content 4: Tokens */}
          {activeTab === "tokens" && (
            <Card variant="surface" className="p-8 space-y-6">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#0E0F08]">
                Brand Color Palette Tokens
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
                <div className="p-4 rounded-[8px] bg-[#CC0000] text-white space-y-1">
                  <div className="font-bold">Primary Red</div>
                  <div>#CC0000</div>
                </div>
                <div className="p-4 rounded-[8px] bg-[#A80000] text-white space-y-1">
                  <div className="font-bold">Hover Red</div>
                  <div>#A80000</div>
                </div>
                <div className="p-4 rounded-[8px] bg-[#8F0000] text-white space-y-1">
                  <div className="font-bold">Dark Red</div>
                  <div>#8F0000</div>
                </div>
                <div className="p-4 rounded-[8px] bg-[#FDECEC] text-[#CC0000] border border-[#CC0000]/20 space-y-1">
                  <div className="font-bold">Light Red</div>
                  <div>#FDECEC</div>
                </div>

                <div className="p-4 rounded-[8px] bg-[#0E0F08] text-white space-y-1">
                  <div className="font-bold">Near Black</div>
                  <div>#0E0F08</div>
                </div>
                <div className="p-4 rounded-[8px] bg-[#555750] text-white space-y-1">
                  <div className="font-bold">Secondary Text</div>
                  <div>#555750</div>
                </div>
                <div className="p-4 rounded-[8px] bg-[#F7F7F5] text-[#0E0F08] border border-[#E3E3DE] space-y-1">
                  <div className="font-bold">Off White</div>
                  <div>#F7F7F5</div>
                </div>
                <div className="p-4 rounded-[8px] bg-[#FFFFFF] text-[#0E0F08] border border-[#E3E3DE] space-y-1">
                  <div className="font-bold">Surface White</div>
                  <div>#FFFFFF</div>
                </div>
              </div>
            </Card>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
