import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Sparkles, Lock, MessageSquare, ArrowRight, ShieldCheck } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faInstagram,
  faFacebookF,
  faLinkedinIn,
  faYoutube,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

export function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: "Business Cards",
    quantity: "500",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          product: "Business Cards",
          quantity: "500",
          message: "",
        });
      }, 5000);
    }, 600);
  };

  const handleWhatsAppDirect = () => {
    const message = `Hello PrintKit! 👋\n\nName: ${formData.name || "Customer"}\nProduct: ${formData.product}\nQuantity: ${formData.quantity}\nQuery: ${formData.message || "I need an urgent print quotation."}`;
    window.open(`https://wa.me/918778377449?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="contact" className="w-full bg-[#F7F7F5] py-16 lg:py-24 font-sans border-b border-[#E3E3DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF5F5] border border-[#FDECEC] text-[#CC0000] text-xs font-extrabold uppercase tracking-widest shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Print Engineer Desk</span>
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0E0F08] tracking-tight">
            Connect With Our Print Desk
          </h2>

          <p className="text-sm sm:text-base text-[#555750] font-medium leading-relaxed">
            Need custom dimensions, specialized Pantone spot colors, or instant bulk volume pricing? Send an inquiry or chat with us on WhatsApp.
          </p>
        </div>

        {/* Dual Column Layout: Contact Cards Hub & Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Desk Cards Hub */}
          <div className="lg:col-span-5 space-y-4">

            {/* Direct Phone Hotline Card */}
            <div className="bg-white rounded-2xl p-6 border border-[#E3E3DE] shadow-xs flex items-start gap-4 hover:border-[#CC0000] transition-colors">
              <div className="w-11 h-11 rounded-xl bg-[#FFF5F5] border border-[#FDECEC] flex items-center justify-center text-[#CC0000] shrink-0 mt-0.5">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-bold text-[#0E0F08]">Direct Call Hotline</h4>
                <a href="tel:+918778377449" className="text-sm font-extrabold text-[#CC0000] hover:underline block mt-0.5">
                  +91 87783 77449
                </a>
                <p className="text-[11px] text-[#777970] mt-1 font-medium">
                  Monday to Saturday: 9:00 AM – 8:00 PM IST
                </p>
              </div>
            </div>

            {/* Official Email Card */}
            <div className="bg-white rounded-2xl p-6 border border-[#E3E3DE] shadow-xs flex items-start gap-4 hover:border-[#CC0000] transition-colors">
              <div className="w-11 h-11 rounded-xl bg-[#FFF5F5] border border-[#FDECEC] flex items-center justify-center text-[#CC0000] shrink-0 mt-0.5">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-bold text-[#0E0F08]">Official Email Support</h4>
                <a href="mailto:support@printkit.in" className="text-sm font-bold text-[#0E0F08] hover:text-[#CC0000] block mt-0.5">
                  support@printkit.in
                </a>
                <p className="text-[11px] text-[#777970] mt-1 font-medium">
                  Guaranteed email response within 2 business hours
                </p>
              </div>
            </div>

            {/* Facility Location Card */}
            <div className="bg-white rounded-2xl p-6 border border-[#E3E3DE] shadow-xs flex items-start gap-4 hover:border-[#CC0000] transition-colors">
              <div className="w-11 h-11 rounded-xl bg-[#FFF5F5] border border-[#FDECEC] flex items-center justify-center text-[#CC0000] shrink-0 mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-bold text-[#0E0F08]">Production Facility</h4>
                <p className="text-xs text-[#555750] mt-0.5 leading-relaxed font-medium">
                  PrintKit Industrial Complex, Plot #42, Print Hub Tech Park, India.
                </p>
              </div>
            </div>

            {/* Social Media Connections Card with Black & Red Shade Gradient Icons */}
            <div className="bg-white rounded-2xl p-6 border border-[#E3E3DE] shadow-xs space-y-3 hover:border-[#CC0000] transition-colors">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#0E0F08]">
                  Social Media Connections
                </h4>
                <span className="text-[11px] font-mono text-[#CC0000] font-bold">@printkit.official</span>
              </div>

              <p className="text-xs text-[#555750] font-medium">
                Follow our official handles for print showcases, behind-the-scenes offset press runs, and design tips.
              </p>

              <div className="flex items-center gap-3 pt-1">
                {[
                  { icon: faInstagram, label: "Instagram", url: "https://instagram.com" },
                  { icon: faFacebookF, label: "Facebook", url: "https://facebook.com" },
                  { icon: faLinkedinIn, label: "LinkedIn", url: "https://linkedin.com" },
                  { icon: faYoutube, label: "YouTube", url: "https://youtube.com" },
                  { icon: faXTwitter, label: "X (Twitter)", url: "https://x.com" },
                ].map((social, sIdx) => (
                  <a
                    key={sIdx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0E0F08] via-[#CC0000] to-[#8F0000] hover:from-[#CC0000] hover:via-[#8F0000] hover:to-[#0E0F08] text-white flex items-center justify-center shadow-md transition-all hover:scale-110 active:scale-95 cursor-pointer border border-white/20 group shrink-0"
                  >
                    <FontAwesomeIcon icon={social.icon} className="text-base group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Premium Custom Quote & Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-[24px] p-6 sm:p-10 border border-[#E3E3DE] shadow-lg relative">
            
            {isSubmitted ? (
              <div className="py-16 flex flex-col items-center text-center space-y-4 animate-in fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-xs">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0E0F08]">
                  Inquiry Received!
                </h3>
                <p className="text-xs sm:text-sm text-[#555750] max-w-md leading-relaxed font-medium">
                  Thank you, <span className="font-bold text-[#0E0F08]">{formData.name}</span>. Our senior print engineer will review your specs and contact you within 2 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="flex items-center justify-between pb-4 border-b border-[#E3E3DE]">
                  <div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-[#0E0F08]">
                      Custom Print Specification Form
                    </h3>
                    <p className="text-xs text-[#777970] mt-0.5">
                      Fill out your job details below to get an accurate quotation.
                    </p>
                  </div>

                 
                </div>

                {/* Form Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0E0F08] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Vikram Sharma"
                      className="w-full px-4 py-3 bg-[#F7F7F5] border border-[#E3E3DE] rounded-xl text-xs font-medium focus:border-[#CC0000] focus:ring-2 focus:ring-[#CC0000]/20 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0E0F08] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. vikram@company.com"
                      className="w-full px-4 py-3 bg-[#F7F7F5] border border-[#E3E3DE] rounded-xl text-xs font-medium focus:border-[#CC0000] focus:ring-2 focus:ring-[#CC0000]/20 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0E0F08] mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 bg-[#F7F7F5] border border-[#E3E3DE] rounded-xl text-xs font-medium focus:border-[#CC0000] focus:ring-2 focus:ring-[#CC0000]/20 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0E0F08] mb-1.5">
                      Select Product
                    </label>
                    <select
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#F7F7F5] border border-[#E3E3DE] rounded-xl text-xs font-bold focus:border-[#CC0000] focus:ring-2 focus:ring-[#CC0000]/20 outline-none transition-all"
                    >
                      <option value="Business Cards">Business Cards</option>
                      <option value="Flyers & Pamphlets">Flyers & Pamphlets</option>
                      <option value="Brochures & Catalogs">Brochures & Catalogs</option>
                      <option value="Flex Banners">Flex Banners</option>
                      <option value="Roll-up Standee">Roll-up Standee</option>
                      <option value="Sticker / Labels">Sticker / Labels</option>
                      <option value="Photo Frames">Photo Frames</option>
                      <option value="Custom Rigid Packaging">Custom Rigid Packaging</option>
                      <option value="Other Custom Spec">Other Custom Spec</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0E0F08] mb-1.5">
                      Quantity
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      placeholder="e.g. 500 / 1000"
                      className="w-full px-4 py-3 bg-[#F7F7F5] border border-[#E3E3DE] rounded-xl text-xs font-medium focus:border-[#CC0000] focus:ring-2 focus:ring-[#CC0000]/20 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0E0F08] mb-1.5">
                    Job Specifications & Additional Notes
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide exact size (e.g. 3.5x2 inch), paper stock (e.g. 350 GSM Velvet), lamination preference, or urgent delivery date..."
                    className="w-full px-4 py-3 bg-[#F7F7F5] border border-[#E3E3DE] rounded-xl text-xs font-medium focus:border-[#CC0000] focus:ring-2 focus:ring-[#CC0000]/20 outline-none transition-all resize-none"
                  />
                </div>

                {/* Submit Row */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3.5 rounded-xl bg-[#CC0000] hover:bg-[#A80000] text-white font-extrabold text-xs shadow-lg shadow-[#CC0000]/25 transition-all flex items-center justify-center gap-2.5 cursor-pointer active:scale-95 disabled:opacity-70"
                  >
                    <span>{isSubmitting ? "Submitting Request..." : "Submit Quote Request"}</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <div className="flex items-center gap-2 text-[11px] text-[#777970]">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>No Spam Guarantee • 100% Confidential</span>
                  </div>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

export default ContactUs;
