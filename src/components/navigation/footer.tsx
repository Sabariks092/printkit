import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { ShieldCheck, MapPin, Mail, Phone } from "lucide-react";

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
            <p className="text-xs font-semibold tracking-wider text-[#CC0000] uppercase">
              Quality in Print. Precision in Design.
            </p>
            <p className="text-xs text-[#555750] leading-relaxed">
              Industrial-grade print production studio engineered for high-precision collateral, commercial offset, and modern brand packaging.
            </p>
          </div>

          {/* Col 2: Services */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0E0F08]">
              Print Production
            </h4>
            <ul className="flex flex-col gap-2 text-xs text-[#555750]">
              <li><a href="#services" className="hover:text-[#CC0000] transition-colors">Commercial Offset Printing</a></li>
              <li><a href="#services" className="hover:text-[#CC0000] transition-colors">Large Format &amp; Banners</a></li>
              <li><a href="#services" className="hover:text-[#CC0000] transition-colors">Custom Packaging &amp; Boxes</a></li>
              <li><a href="#services" className="hover:text-[#CC0000] transition-colors">Specialty Die-Cutting &amp; Foil</a></li>
              <li><a href="#services" className="hover:text-[#CC0000] transition-colors">Digital Short-Run Press</a></li>
            </ul>
          </div>

          {/* Col 3: Specifications */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0E0F08]">
              Technical Standards
            </h4>
            <ul className="flex flex-col gap-2 text-xs text-[#555750]">
              <li><span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-[#CC0000]" /> 2400 DPI High Resolution</span></li>
              <li><span className="flex items-center gap-1.5"><FontAwesomeIcon icon={faCheckCircle} className="w-3.5 h-3.5 text-[#247A45]" /> ISO 12647 Color Profile</span></li>
              <li><span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-[#CC0000]" /> Sustainable FSC Certified Stock</span></li>
              <li><span className="flex items-center gap-1.5"><FontAwesomeIcon icon={faCheckCircle} className="w-3.5 h-3.5 text-[#247A45]" /> Same-Day Proof Inspection</span></li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0E0F08]">
              Studio Location
            </h4>
            <div className="flex flex-col gap-2 text-xs text-[#555750]">
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
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#777970]">
          <p>© {new Date().getFullYear()} PrintKit Inc. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Built with precision for</span>
            <span className="font-bold text-[#0E0F08] ml-1">PrintKit Studio</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
