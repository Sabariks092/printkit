import React from "react";
import { Scale, ShieldAlert } from "lucide-react";

export function LegalSection() {
  return (
    <section className="w-full bg-[#F0F0EC] border-t border-[#E3E3DE] py-12 text-[#555750] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Terms & Conditions */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-[#0E0F08] uppercase tracking-wider flex items-center gap-2">
              <Scale className="w-3.5 h-3.5 text-[#CC0000]" />
              Terms &amp; Conditions
            </h3>
            <div className="text-sm leading-relaxed space-y-2.5">
              <p>
                <strong>1. Print Proofs &amp; Approval:</strong> By submitting artwork or approving digital proofs, the client assumes full responsibility for spelling, layout, and image quality. PrintKit is not liable for errors in customer-provided designs once approved.
              </p>
              <p>
                <strong>2. Turnaround &amp; Dispatch:</strong> Same-Day and Express dispatch guarantees apply strictly to orders confirmed, fully paid, and print-ready by 12:00 PM IST. Delivery timelines are subject to shipping partner logistics.
              </p>
              <p>
                <strong>3. Return &amp; Refund Policy:</strong> Because our products are custom-manufactured to order, we cannot accept returns or issue refunds for approved print specifications. In the case of manufacturing defects, claims must be filed within 48 hours of delivery.
              </p>
              <p>
                <strong>4. Intellectual Property:</strong> The client represents and warrants that they own or license the rights to all uploaded logo marks, designs, and content. We reserve the right to decline material violating copyrights or local laws.
              </p>
            </div>
          </div>

          {/* Privacy Policy */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-[#0E0F08] uppercase tracking-wider flex items-center gap-2">
              <ShieldAlert className="w-3.5 h-3.5 text-[#CC0000]" />
              Privacy Policy
            </h3>
            <div className="text-sm leading-relaxed space-y-2.5">
              <p>
                <strong>1. Information Collection:</strong> PrintKit collects personal contact information (name, phone number, email, billing details) and digital files uploaded for print production purposes.
              </p>
              <p>
                <strong>2. Data Usage:</strong> Your personal information is utilized strictly to fulfill custom quotes, confirm order parameters, update print status, and arrange shipping. We do not sell or share customer contact records.
              </p>
              <p>
                <strong>3. Image Asset Security:</strong> All design assets, source vector files, and images uploaded to our servers are encrypted and deleted automatically from our active print servers 30 days after job completion.
              </p>
              <p>
                <strong>4. Cookie Analytics:</strong> We employ basic tracking cookies and browser storage features to remember your custom filter preferences, configuration settings, and to speed up search auto-completions.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default LegalSection;
