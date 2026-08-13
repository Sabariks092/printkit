import React from "react";
import { Star, CheckCircle2, ExternalLink, Quote } from "lucide-react";

export interface ReviewItem {
  id: number;
  name: string;
  initials: string;
  bgColor: string; // Google brand avatar background
  badge: string; // e.g. "Local Guide • 18 reviews" or "Verified Customer"
  timeAgo: string;
  rating: number;
  comment: string;
  productPurchased?: string;
}

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    initials: "RK",
    bgColor: "#1A73E8", // Google Blue
    badge: "Local Guide • 24 reviews",
    timeAgo: "2 days ago",
    rating: 5,
    comment:
      "Ordered 500 Velvet Touch Business Cards with Gold Foil. The 2400 DPI text accuracy is mind-blowing! Delivered right on time for our corporate summit.",
    productPurchased: "Luxury Business Cards",
  },
  {
    id: 2,
    name: "Ananya Mishra",
    initials: "AM",
    bgColor: "#EA4335", // Google Red
    badge: "Verified Customer",
    timeAgo: "5 days ago",
    rating: 5,
    comment:
      "Our retail launch needed 10 heavy-duty flex banners and 4 roll-up standees urgently. PrintKit printed and shipped everything within 24 hours. Top notch quality!",
    productPurchased: "Flex Banners & Standees",
  },
  {
    id: 3,
    name: "Siddharth Devan",
    initials: "SD",
    bgColor: "#34A853", // Google Green
    badge: "Local Guide • 12 reviews",
    timeAgo: "1 week ago",
    rating: 5,
    comment:
      "Tri-fold furniture catalog brochures came out crisp with zero paper crease cracking. The gloss lamination gives a luxury feel. 100% recommended!",
    productPurchased: "Tri-Fold Brochures",
  },
  {
    id: 4,
    name: "Vikram Sengupta",
    initials: "VS",
    bgColor: "#FBBC04", // Google Yellow / Amber
    badge: "Verified Customer",
    timeAgo: "1 week ago",
    rating: 5,
    comment:
      "Custom waterproof vinyl sticker labels for our beverage brand. High tack adhesive that sticks effortlessly to glass bottles even in cold storage.",
    productPurchased: "Custom Vinyl Stickers",
  },
  {
    id: 5,
    name: "Aarti Rao",
    initials: "AR",
    bgColor: "#8E24AA", // Google Purple
    badge: "Local Guide • 45 reviews",
    timeAgo: "2 weeks ago",
    rating: 5,
    comment:
      "Museum-grade wall canvas and solid wood photo frames. The colors are incredibly vibrant and archival quality. Packaged extremely safely!",
    productPurchased: "Photo Frames & Canvas",
  },
  {
    id: 6,
    name: "Manish Kapoor",
    initials: "MK",
    bgColor: "#009688", // Teal
    badge: "Verified Customer",
    timeAgo: "2 weeks ago",
    rating: 5,
    comment:
      "Ordered 1,000 corporate letterheads and carbonless bill books. Crisp ruling lines and heavy paper stock. Their instant digital proofing saved us time.",
    productPurchased: "Letterhead & Bill Books",
  },
  {
    id: 7,
    name: "Pooja Trivedi",
    initials: "PT",
    bgColor: "#E91E63", // Pink
    badge: "Local Guide • 9 reviews",
    timeAgo: "3 weeks ago",
    rating: 5,
    comment:
      "Social media post designs and branding bundle were delivered in less than 24 hours. The designer team understood our brand aesthetic perfectly!",
    productPurchased: "Social Media Branding Kit",
  },
  {
    id: 8,
    name: "Suresh Balaji",
    initials: "SB",
    bgColor: "#FF6D00", // Orange
    badge: "Verified Customer",
    timeAgo: "1 month ago",
    rating: 5,
    comment:
      "Star flex outdoor signboards for our highway showroom. Outstanding color saturation and wind-resistant eyelet finishing. Fantastic service!",
    productPurchased: "Star Flex Signage",
  },
];

// Official Google Multi-color G Icon SVG
export function GoogleGIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
        fill="#4285F4"
      />
      <path
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.29v3.15C3.26 21.3 7.31 24 12 24z"
        fill="#34A853"
      />
      <path
        d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.29C.47 8.2.01 10.05.01 12s.46 3.8 1.28 5.42l3.99-3.15z"
        fill="#FBBC05"
      />
      <path
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.58l3.99 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
        fill="#EA4335"
      />
    </svg>
  );
}

export function GoogleReviews() {
  // Duplicate array for seamless infinite looping scroll
  const marqueeReviews = [...REVIEWS_DATA, ...REVIEWS_DATA];

  return (
    <section id="reviews" className="w-full bg-[#F7F7F5] py-16 lg:py-24 font-sans overflow-hidden border-b border-[#E3E3DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Summary Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#E3E3DE]">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#F8F9FA] border border-slate-200 flex items-center justify-center shadow-xs shrink-0">
              <GoogleGIcon className="w-8 h-8" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#0E0F08]">4.9</span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#FBBC04] text-[#FBBC04]" />
                  ))}
                </div>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-[#555750] mt-1">
                Based on <span className="text-[#0E0F08] font-bold">520+ Verified Reviews</span> on Google Business
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>100% Verified Customer Feedback</span>
            </div>

            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0E0F08] hover:bg-[#CC0000] text-white text-xs font-bold transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <span>Write a Review</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Section Headline */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#CC0000] mb-2 block">
            Customer Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0E0F08] tracking-tight">
            Trusted by 5,000+ Businesses Nationwide
          </h2>
          <p className="text-sm text-[#555750] font-medium mt-2">
            See what verified customers say about our 2400 DPI precision printing and same-day delivery.
          </p>
        </div>

        {/* INFINITE MARQUEE CAROUSEL TRACK (5 Reviews visible at a time on desktop) */}
        <div className="relative w-full overflow-hidden group">
          
          {/* Subtle Side Fade Gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-[#F7F7F5] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-[#F7F7F5] to-transparent z-10 pointer-events-none" />

          {/* Sliding Track */}
          <div className="flex gap-5 w-max animate-marquee hover:[animation-play-state:paused] py-2">
            {marqueeReviews.map((rev, index) => (
              <div
                key={`${rev.id}-${index}`}
                className="w-[280px] sm:w-[320px] lg:w-[340px] shrink-0 bg-white rounded-2xl p-5 border border-[#E3E3DE] shadow-sm hover:shadow-xl hover:border-[#CC0000]/40 transition-all flex flex-col justify-between group/card select-none"
              >
                {/* Card Top Header: User Profile Avatar & Name */}
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      {/* Avatar with Initials & Google Color Background */}
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-xs shrink-0"
                        style={{ backgroundColor: rev.bgColor }}
                      >
                        {rev.initials}
                      </div>

                      <div className="min-w-0">
                        <h4 className="text-sm font-bold text-[#0E0F08] truncate group-hover/card:text-[#CC0000] transition-colors">
                          {rev.name}
                        </h4>
                        <p className="text-[11px] text-[#777970] truncate font-medium">
                          {rev.badge}
                        </p>
                      </div>
                    </div>

                    <span className="text-[10px] text-[#777970] whitespace-nowrap shrink-0 font-medium">
                      {rev.timeAgo}
                    </span>
                  </div>

                  {/* Star Rating Row */}
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FBBC04] text-[#FBBC04]" />
                    ))}
                  </div>

                  {/* Comment Body */}
                  <p className="text-xs text-[#555750] leading-relaxed line-clamp-4 font-normal">
                    "{rev.comment}"
                  </p>
                </div>

                {/* Card Bottom Footer: Google Logo at Bottom Left + Product Tag */}
                <div className="pt-4 mt-4 border-t border-[#F2F2EF] flex items-center justify-between text-[11px]">
                  {/* Google Logo at Bottom Left */}
                  <div className="flex items-center gap-1.5">
                    <GoogleGIcon className="w-4 h-4" />
                    <span className="font-semibold text-slate-500 text-[10px]">Google Review</span>
                  </div>

                  {/* Product Tag */}
                  {rev.productPurchased && (
                    <span className="bg-[#FFF5F5] text-[#CC0000] font-bold text-[10px] px-2 py-0.5 rounded-md border border-[#FDECEC] truncate max-w-[130px]">
                      {rev.productPurchased}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default GoogleReviews;
