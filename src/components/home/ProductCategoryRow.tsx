import { useState } from "react";
import {
  CreditCard,
  FileText,
  Files,
  Image as ImageIcon,
  Tag,
  Presentation,
  RectangleHorizontal,
  Contact,
} from "lucide-react";

interface CategoryItem {
  id: string;
  name: string;
  price: string;
  icon: React.ReactNode;
}

const categories: CategoryItem[] = [
  {
    id: "visiting-card",
    name: "Visiting Card",
    price: "Starting ₹40",
    icon: <CreditCard className="w-5 h-5 text-[#CC0000]" />,
  },
  {
    id: "brochure",
    name: "Brochure",
    price: "Starting ₹100",
    icon: <FileText className="w-5 h-5 text-[#CC0000]" />,
  },
  {
    id: "flyer-pamphlet",
    name: "Flyer / Pamphlet",
    price: "Starting ₹100",
    icon: <Files className="w-5 h-5 text-[#CC0000]" />,
  },
  {
    id: "photo-frames",
    name: "Photo Frames",
    price: "Starting ₹150",
    icon: <ImageIcon className="w-5 h-5 text-[#CC0000]" />,
  },
  {
    id: "sticker-label",
    name: "Sticker / Label",
    price: "Starting ₹40",
    icon: <Tag className="w-5 h-5 text-[#CC0000]" />,
  },
  {
    id: "rollup-standee",
    name: "Roll-up Standee",
    price: "Starting ₹400",
    icon: <Presentation className="w-5 h-5 text-[#CC0000]" />,
  },
  {
    id: "flex-banner",
    name: "Flex Banner",
    price: "Starting ₹100",
    icon: <RectangleHorizontal className="w-5 h-5 text-[#CC0000]" />,
  },
  {
    id: "business-cards",
    name: "Business Cards",
    price: "Starting ₹100",
    icon: <Contact className="w-5 h-5 text-[#CC0000]" />,
  },
];

export function ProductCategoryRow() {
  const [activeCategory, setActiveCategory] = useState<string>("visiting-card");

  return (
    <section className="w-full bg-white border-b border-[#E3E3DE] py-4 shadow-sm font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 overflow-x-auto py-2 scrollbar-none scroll-smooth">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-full border transition-all cursor-pointer shrink-0 ${
                  isActive
                    ? "bg-[#FFF5F5] border-[#CC0000] shadow-sm text-[#0E0F08]"
                    : "bg-white border-[#E3E3DE] hover:border-[#CC0000]/60 hover:bg-[#F7F7F5] text-[#0E0F08]"
                }`}
              >
                {/* Mini Icon / Graphic Box */}
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${
                    isActive ? "bg-[#CC0000] text-white" : "bg-[#F7F7F5] border border-[#E3E3DE]"
                  }`}
                >
                  {isActive ? (
                    <div className="text-white">{cat.icon}</div>
                  ) : (
                    cat.icon
                  )}
                </div>

                {/* Text Content */}
                <div className="text-left">
                  <div className="text-xs sm:text-sm font-bold text-[#0E0F08] whitespace-nowrap">
                    {cat.name}
                  </div>
                  <div className="text-[11px] font-medium text-[#777970] whitespace-nowrap">
                    {cat.price}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
