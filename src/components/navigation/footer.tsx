import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { ShieldCheck, MapPin, Mail, Phone } from "lucide-react";
import {
  faWhatsapp,
  faInstagram,
  faFacebookF,
  faLinkedinIn,
  faYoutube,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

export function Footer() {
  return (
    <footer className="w-full bg-[#F7F7F5] border-t border-[#E3E3DE] text-[#0E0F08] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#E3E3DE]">
          {/* Col 1: Brand Info */}
          <div className="flex flex-col gap-4 md:col-span-1">
            <img
              src="/logo.png"
              alt="PrintKit Logo"
              width={160}
              height={40}
              className="h-9 w-auto object-contain self-start"
            />
            <p className="text-sm font-semibold tracking-wider text-[#CC0000] uppercase">
              Quality in Print. Precision in Design.
            </p>
            <p className="text-sm text-[#555750] leading-relaxed">
              Industrial-grade print production studio engineered for
              high-precision collateral, commercial offset, and modern brand
              packaging.
            </p>
          </div>

          {/* Col 2: Services */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#0E0F08]">
              Print Production
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-[#555750]">
              <li>
                <a
                  href="#services"
                  className="hover:text-[#CC0000] transition-colors"
                >
                  Commercial Offset Printing
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-[#CC0000] transition-colors"
                >
                  Large Format &amp; Banners
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-[#CC0000] transition-colors"
                >
                  Custom Packaging &amp; Boxes
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-[#CC0000] transition-colors"
                >
                  Specialty Die-Cutting &amp; Foil
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-[#CC0000] transition-colors"
                >
                  Digital Short-Run Press
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Specifications */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#0E0F08]">
              Technical Standards
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-[#555750]">
              <li>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#CC0000]" /> 2400
                  DPI High Resolution
                </span>
              </li>
              <li>
                <span className="flex items-center gap-1.5">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="w-3.5 h-3.5 text-[#247A45]"
                  />{" "}
                  ISO 12647 Color Profile
                </span>
              </li>
              <li>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#CC0000]" />{" "}
                  Sustainable FSC Certified Stock
                </span>
              </li>
              <li>
                <span className="flex items-center gap-1.5">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="w-3.5 h-3.5 text-[#247A45]"
                  />{" "}
                  Same-Day Proof Inspection
                </span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#0E0F08]">
              Studio Location
            </h4>
            <div className="flex flex-col gap-2 text-sm text-[#555750]">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#CC0000] shrink-0" />
                <span>100 Precision Press Plaza, Suite 400</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#CC0000] shrink-0" />
                <span>+1 (800) 555-7746</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#CC0000] shrink-0" />
                <span>orders@printkit.com</span>
              </p>
            </div>
             <div className="flex items-center gap-3 pt-1">
            {[
              {
                icon: faInstagram,
                label: "Instagram",
                url: "https://instagram.com",
              },
              {
                icon: faFacebookF,
                label: "Facebook",
                url: "https://facebook.com",
              },
              {
                icon: faLinkedinIn,
                label: "LinkedIn",
                url: "https://linkedin.com",
              },
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
                <FontAwesomeIcon
                  icon={social.icon}
                  className="text-base group-hover:scale-110 transition-transform"
                />
              </a>
            ))}
          </div>
          </div>
         
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#777970]">
          <p>© {new Date().getFullYear()} PrintKit Inc. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Online Presence Powered By</span>
            <a href="https://ayntech.co/" target="_blank" rel="noopenner" className="font-bold text-[#0E0F08] ml-1">
              Ayntech
            </a>
            &
            <a href="https://www.samhub.in/" target="_blank" rel="noopenner" className="font-bold text-[#0E0F08] ml-1">
            Samhub Innovations
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
