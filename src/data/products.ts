export type ProductAttributeType = "select" | "text" | "number";

export interface ProductAttribute {
  name: string;
  key: string;
  type: ProductAttributeType;
  options?: string[];
  required?: boolean;
  placeholder?: string;
}

export interface ProductPrice {
  selections: Record<string, string>;
  price?: number;
  priceType?: "fixed" | "starting" | "per-unit";
}

export interface Product {
  id: string;
  name: string;
  category: string;
  type: "configurable" | "contact";
  description?: string;
  attributes: ProductAttribute[];
  pricing?: ProductPrice[];
  contactMessage?: string;
  pricingNote?: string;
}

export const products: Product[] = [
  // ============================================================
  // BRAND IDENTITY
  // ============================================================

  {
    id: "business-cards",
    name: "Business Cards",
    category: "Brand Identity",
    type: "configurable",
    description: "Fully customizable corporate grade business cards with premium finishes.",
    pricing: [
      {
        selections: {"quantity": "500", "printingSide": "Single Side", "lamination": "Glossy", "cornerCut": "Sharp"},
        price: 750,
      },
      {
        selections: {"quantity": "500", "printingSide": "Single Side", "lamination": "Glossy", "cornerCut": "Round"},
        price: 850,
      },
      {
        selections: {"quantity": "500", "printingSide": "Single Side", "lamination": "Matt", "cornerCut": "Sharp"},
        price: 1500,
      },
      {
        selections: {"quantity": "500", "printingSide": "Single Side", "lamination": "Matt", "cornerCut": "Round"},
        price: 1650,
      },
      {
        selections: {"quantity": "500", "printingSide": "Single Side", "lamination": "Synthetic", "cornerCut": "Sharp"},
        price: 1200,
      },
      {
        selections: {"quantity": "500", "printingSide": "Single Side", "lamination": "Synthetic", "cornerCut": "Round"},
        price: 1300,
      },
      {
        selections: {"quantity": "500", "printingSide": "Single Side", "lamination": "Spot UV", "cornerCut": "Sharp"},
        price: 1800,
      },
      {
        selections: {"quantity": "500", "printingSide": "Single Side", "lamination": "Spot UV", "cornerCut": "Round"},
        price: 2000,
      },
      {
        selections: {"quantity": "500", "printingSide": "Double Side", "lamination": "Glossy", "cornerCut": "Sharp"},
        price: 1250,
      },
      {
        selections: {"quantity": "500", "printingSide": "Double Side", "lamination": "Glossy", "cornerCut": "Round"},
        price: 1400,
      },
      {
        selections: {"quantity": "500", "printingSide": "Double Side", "lamination": "Matt", "cornerCut": "Sharp"},
        price: 2500,
      },
      {
        selections: {"quantity": "500", "printingSide": "Double Side", "lamination": "Matt", "cornerCut": "Round"},
        price: 2750,
      },
      {
        selections: {"quantity": "500", "printingSide": "Double Side", "lamination": "Synthetic", "cornerCut": "Sharp"},
        price: 2000,
      },
      {
        selections: {"quantity": "500", "printingSide": "Double Side", "lamination": "Synthetic", "cornerCut": "Round"},
        price: 2200,
      },
      {
        selections: {"quantity": "500", "printingSide": "Double Side", "lamination": "Spot UV", "cornerCut": "Sharp"},
        price: 3000,
      },
      {
        selections: {"quantity": "500", "printingSide": "Double Side", "lamination": "Spot UV", "cornerCut": "Round"},
        price: 3300,
      },
      {
        selections: {"quantity": "1000", "printingSide": "Single Side", "lamination": "Glossy", "cornerCut": "Sharp"},
        price: 1500,
      },
      {
        selections: {"quantity": "1000", "printingSide": "Single Side", "lamination": "Glossy", "cornerCut": "Round"},
        price: 1650,
      },
      {
        selections: {"quantity": "1000", "printingSide": "Single Side", "lamination": "Matt", "cornerCut": "Sharp"},
        price: 3000,
      },
      {
        selections: {"quantity": "1000", "printingSide": "Single Side", "lamination": "Matt", "cornerCut": "Round"},
        price: 3300,
      },
      {
        selections: {"quantity": "1000", "printingSide": "Single Side", "lamination": "Synthetic", "cornerCut": "Sharp"},
        price: 2400,
      },
      {
        selections: {"quantity": "1000", "printingSide": "Single Side", "lamination": "Synthetic", "cornerCut": "Round"},
        price: 2650,
      },
      {
        selections: {"quantity": "1000", "printingSide": "Single Side", "lamination": "Spot UV", "cornerCut": "Sharp"},
        price: 3600,
      },
      {
        selections: {"quantity": "1000", "printingSide": "Single Side", "lamination": "Spot UV", "cornerCut": "Round"},
        price: 3950,
      },
      {
        selections: {"quantity": "1000", "printingSide": "Double Side", "lamination": "Glossy", "cornerCut": "Sharp"},
        price: 2500,
      },
      {
        selections: {"quantity": "1000", "printingSide": "Double Side", "lamination": "Glossy", "cornerCut": "Round"},
        price: 2750,
      },
      {
        selections: {"quantity": "1000", "printingSide": "Double Side", "lamination": "Matt", "cornerCut": "Sharp"},
        price: 5000,
      },
      {
        selections: {"quantity": "1000", "printingSide": "Double Side", "lamination": "Matt", "cornerCut": "Round"},
        price: 5500,
      },
      {
        selections: {"quantity": "1000", "printingSide": "Double Side", "lamination": "Synthetic", "cornerCut": "Sharp"},
        price: 4000,
      },
      {
        selections: {"quantity": "1000", "printingSide": "Double Side", "lamination": "Synthetic", "cornerCut": "Round"},
        price: 4400,
      },
      {
        selections: {"quantity": "1000", "printingSide": "Double Side", "lamination": "Spot UV", "cornerCut": "Sharp"},
        price: 6000,
      },
      {
        selections: {"quantity": "1000", "printingSide": "Double Side", "lamination": "Spot UV", "cornerCut": "Round"},
        price: 6600,
      },
      {
        selections: {"quantity": "1500", "printingSide": "Single Side", "lamination": "Glossy", "cornerCut": "Sharp"},
        price: 2250,
      },
      {
        selections: {"quantity": "1500", "printingSide": "Single Side", "lamination": "Glossy", "cornerCut": "Round"},
        price: 2500,
      },
      {
        selections: {"quantity": "1500", "printingSide": "Single Side", "lamination": "Matt", "cornerCut": "Sharp"},
        price: 4500,
      },
      {
        selections: {"quantity": "1500", "printingSide": "Single Side", "lamination": "Matt", "cornerCut": "Round"},
        price: 4950,
      },
      {
        selections: {"quantity": "1500", "printingSide": "Single Side", "lamination": "Synthetic", "cornerCut": "Sharp"},
        price: 3600,
      },
      {
        selections: {"quantity": "1500", "printingSide": "Single Side", "lamination": "Synthetic", "cornerCut": "Round"},
        price: 3950,
      },
      {
        selections: {"quantity": "1500", "printingSide": "Single Side", "lamination": "Spot UV", "cornerCut": "Sharp"},
        price: 5400,
      },
      {
        selections: {"quantity": "1500", "printingSide": "Single Side", "lamination": "Spot UV", "cornerCut": "Round"},
        price: 5950,
      },
      {
        selections: {"quantity": "1500", "printingSide": "Double Side", "lamination": "Glossy", "cornerCut": "Sharp"},
        price: 3750,
      },
      {
        selections: {"quantity": "1500", "printingSide": "Double Side", "lamination": "Glossy", "cornerCut": "Round"},
        price: 4100,
      },
      {
        selections: {"quantity": "1500", "printingSide": "Double Side", "lamination": "Matt", "cornerCut": "Sharp"},
        price: 7500,
      },
      {
        selections: {"quantity": "1500", "printingSide": "Double Side", "lamination": "Matt", "cornerCut": "Round"},
        price: 8250,
      },
      {
        selections: {"quantity": "1500", "printingSide": "Double Side", "lamination": "Synthetic", "cornerCut": "Sharp"},
        price: 6000,
      },
      {
        selections: {"quantity": "1500", "printingSide": "Double Side", "lamination": "Synthetic", "cornerCut": "Round"},
        price: 6600,
      },
      {
        selections: {"quantity": "1500", "printingSide": "Double Side", "lamination": "Spot UV", "cornerCut": "Sharp"},
        price: 9000,
      },
      {
        selections: {"quantity": "1500", "printingSide": "Double Side", "lamination": "Spot UV", "cornerCut": "Round"},
        price: 9900,
      },
      {
        selections: {"quantity": "2000", "printingSide": "Single Side", "lamination": "Glossy", "cornerCut": "Sharp"},
        price: 3000,
      },
      {
        selections: {"quantity": "2000", "printingSide": "Single Side", "lamination": "Glossy", "cornerCut": "Round"},
        price: 3300,
      },
      {
        selections: {"quantity": "2000", "printingSide": "Single Side", "lamination": "Matt", "cornerCut": "Sharp"},
        price: 6000,
      },
      {
        selections: {"quantity": "2000", "printingSide": "Single Side", "lamination": "Matt", "cornerCut": "Round"},
        price: 6600,
      },
      {
        selections: {"quantity": "2000", "printingSide": "Single Side", "lamination": "Synthetic", "cornerCut": "Sharp"},
        price: 4800,
      },
      {
        selections: {"quantity": "2000", "printingSide": "Single Side", "lamination": "Synthetic", "cornerCut": "Round"},
        price: 5300,
      },
      {
        selections: {"quantity": "2000", "printingSide": "Single Side", "lamination": "Spot UV", "cornerCut": "Sharp"},
        price: 7200,
      },
      {
        selections: {"quantity": "2000", "printingSide": "Single Side", "lamination": "Spot UV", "cornerCut": "Round"},
        price: 7900,
      },
      {
        selections: {"quantity": "2000", "printingSide": "Double Side", "lamination": "Glossy", "cornerCut": "Sharp"},
        price: 5000,
      },
      {
        selections: {"quantity": "2000", "printingSide": "Double Side", "lamination": "Glossy", "cornerCut": "Round"},
        price: 5500,
      },
      {
        selections: {"quantity": "2000", "printingSide": "Double Side", "lamination": "Matt", "cornerCut": "Sharp"},
        price: 10000,
      },
      {
        selections: {"quantity": "2000", "printingSide": "Double Side", "lamination": "Matt", "cornerCut": "Round"},
        price: 11000,
      },
      {
        selections: {"quantity": "2000", "printingSide": "Double Side", "lamination": "Synthetic", "cornerCut": "Sharp"},
        price: 8000,
      },
      {
        selections: {"quantity": "2000", "printingSide": "Double Side", "lamination": "Synthetic", "cornerCut": "Round"},
        price: 8800,
      },
      {
        selections: {"quantity": "2000", "printingSide": "Double Side", "lamination": "Spot UV", "cornerCut": "Sharp"},
        price: 12000,
      },
      {
        selections: {"quantity": "2000", "printingSide": "Double Side", "lamination": "Spot UV", "cornerCut": "Round"},
        price: 13200,
      },
      {
        selections: {"quantity": "2500", "printingSide": "Single Side", "lamination": "Glossy", "cornerCut": "Sharp"},
        price: 3750,
      },
      {
        selections: {"quantity": "2500", "printingSide": "Single Side", "lamination": "Glossy", "cornerCut": "Round"},
        price: 4100,
      },
      {
        selections: {"quantity": "2500", "printingSide": "Single Side", "lamination": "Matt", "cornerCut": "Sharp"},
        price: 7500,
      },
      {
        selections: {"quantity": "2500", "printingSide": "Single Side", "lamination": "Matt", "cornerCut": "Round"},
        price: 8250,
      },
      {
        selections: {"quantity": "2500", "printingSide": "Single Side", "lamination": "Synthetic", "cornerCut": "Sharp"},
        price: 6000,
      },
      {
        selections: {"quantity": "2500", "printingSide": "Single Side", "lamination": "Synthetic", "cornerCut": "Round"},
        price: 6600,
      },
      {
        selections: {"quantity": "2500", "printingSide": "Single Side", "lamination": "Spot UV", "cornerCut": "Sharp"},
        price: 9000,
      },
      {
        selections: {"quantity": "2500", "printingSide": "Single Side", "lamination": "Spot UV", "cornerCut": "Round"},
        price: 9900,
      },
      {
        selections: {"quantity": "2500", "printingSide": "Double Side", "lamination": "Glossy", "cornerCut": "Sharp"},
        price: 6250,
      },
      {
        selections: {"quantity": "2500", "printingSide": "Double Side", "lamination": "Glossy", "cornerCut": "Round"},
        price: 6900,
      },
      {
        selections: {"quantity": "2500", "printingSide": "Double Side", "lamination": "Matt", "cornerCut": "Sharp"},
        price: 12500,
      },
      {
        selections: {"quantity": "2500", "printingSide": "Double Side", "lamination": "Matt", "cornerCut": "Round"},
        price: 13750,
      },
      {
        selections: {"quantity": "2500", "printingSide": "Double Side", "lamination": "Synthetic", "cornerCut": "Sharp"},
        price: 10000,
      },
      {
        selections: {"quantity": "2500", "printingSide": "Double Side", "lamination": "Synthetic", "cornerCut": "Round"},
        price: 11000,
      },
      {
        selections: {"quantity": "2500", "printingSide": "Double Side", "lamination": "Spot UV", "cornerCut": "Sharp"},
        price: 15000,
      },
      {
        selections: {"quantity": "2500", "printingSide": "Double Side", "lamination": "Spot UV", "cornerCut": "Round"},
        price: 16500,
      },
    ],

    attributes: [
      {
        name: "Quantity",
        key: "quantity",
        type: "select",
        options: ["500", "1000", "1500", "2000", "2500"],
        required: true,
      },
      {
        name: "Printing Side",
        key: "printingSide",
        type: "select",
        options: ["Single Side", "Double Side"],
        required: true,
      },
      {
        name: "Lamination",
        key: "lamination",
        type: "select",
        options: ["Glossy", "Matt", "Synthetic", "Spot UV"],
        required: true,
      },
      {
        name: "Corner Cut",
        key: "cornerCut",
        type: "select",
        options: ["Sharp", "Round"],
        required: true,
      },
    ],
  },

  {
    id: "certificates",
    name: "Certificates",
    category: "Brand Identity",
    type: "configurable",
    description: "Professional high-resolution certificate printing with glossy or matt finish.",
    pricing: [
      {
        selections: {"size": "A4", "quantity": "50", "lamination": "Glossy"},
        price: 500,
      },
      {
        selections: {"size": "A4", "quantity": "50", "lamination": "Matt"},
        price: 600,
      },
      {
        selections: {"size": "A4", "quantity": "100", "lamination": "Glossy"},
        price: 1000,
      },
      {
        selections: {"size": "A4", "quantity": "100", "lamination": "Matt"},
        price: 1150,
      },
      {
        selections: {"size": "A4", "quantity": "150", "lamination": "Glossy"},
        price: 1500,
      },
      {
        selections: {"size": "A4", "quantity": "150", "lamination": "Matt"},
        price: 1700,
      },
      {
        selections: {"size": "A4", "quantity": "200", "lamination": "Glossy"},
        price: 2000,
      },
      {
        selections: {"size": "A4", "quantity": "200", "lamination": "Matt"},
        price: 2300,
      },
      {
        selections: {"size": "A4", "quantity": "300", "lamination": "Glossy"},
        price: 3000,
      },
      {
        selections: {"size": "A4", "quantity": "300", "lamination": "Matt"},
        price: 3450,
      },
      {
        selections: {"size": "A4", "quantity": "500", "lamination": "Glossy"},
        price: 5000,
      },
      {
        selections: {"size": "A4", "quantity": "500", "lamination": "Matt"},
        price: 5750,
      },
    ],

    attributes: [
      {
        name: "Size",
        key: "size",
        type: "select",
        options: ["A4"],
        required: true,
      },
      {
        name: "Quantity",
        key: "quantity",
        type: "select",
        options: ["50", "100", "150", "200", "300", "500"],
        required: true,
      },
      {
        name: "Lamination",
        key: "lamination",
        type: "select",
        options: ["Glossy", "Matt"],
        required: true,
      },
    ],
  },

  {
    id: "letterhead",
    name: "Letterhead",
    category: "Brand Identity",
    type: "configurable",
    description: "Premium corporate letterheads printed on high quality paper with custom padding.",
    pricing: [
      {
        selections: {"size": "A4", "quantity": "100", "pad": "With Pad", "printingSide": "Single Side"},
        price: 750,
      },
      {
        selections: {"size": "A4", "quantity": "100", "pad": "With Pad", "printingSide": "Double Side"},
        price: 1100,
      },
      {
        selections: {"size": "A4", "quantity": "100", "pad": "Without Pad", "printingSide": "Single Side"},
        price: 600,
      },
      {
        selections: {"size": "A4", "quantity": "100", "pad": "Without Pad", "printingSide": "Double Side"},
        price: 850,
      },
      {
        selections: {"size": "A4", "quantity": "250", "pad": "With Pad", "printingSide": "Single Side"},
        price: 1900,
      },
      {
        selections: {"size": "A4", "quantity": "250", "pad": "With Pad", "printingSide": "Double Side"},
        price: 2700,
      },
      {
        selections: {"size": "A4", "quantity": "250", "pad": "Without Pad", "printingSide": "Single Side"},
        price: 1500,
      },
      {
        selections: {"size": "A4", "quantity": "250", "pad": "Without Pad", "printingSide": "Double Side"},
        price: 2200,
      },
      {
        selections: {"size": "A4", "quantity": "500", "pad": "With Pad", "printingSide": "Single Side"},
        price: 3750,
      },
      {
        selections: {"size": "A4", "quantity": "500", "pad": "With Pad", "printingSide": "Double Side"},
        price: 5450,
      },
      {
        selections: {"size": "A4", "quantity": "500", "pad": "Without Pad", "printingSide": "Single Side"},
        price: 3000,
      },
      {
        selections: {"size": "A4", "quantity": "500", "pad": "Without Pad", "printingSide": "Double Side"},
        price: 4350,
      },
      {
        selections: {"size": "A4", "quantity": "800", "pad": "With Pad", "printingSide": "Single Side"},
        price: 6000,
      },
      {
        selections: {"size": "A4", "quantity": "800", "pad": "With Pad", "printingSide": "Double Side"},
        price: 8700,
      },
      {
        selections: {"size": "A4", "quantity": "800", "pad": "Without Pad", "printingSide": "Single Side"},
        price: 4800,
      },
      {
        selections: {"size": "A4", "quantity": "800", "pad": "Without Pad", "printingSide": "Double Side"},
        price: 6950,
      },
      {
        selections: {"size": "A4", "quantity": "1000", "pad": "With Pad", "printingSide": "Single Side"},
        price: 7500,
      },
      {
        selections: {"size": "A4", "quantity": "1000", "pad": "With Pad", "printingSide": "Double Side"},
        price: 10900,
      },
      {
        selections: {"size": "A4", "quantity": "1000", "pad": "Without Pad", "printingSide": "Single Side"},
        price: 6000,
      },
      {
        selections: {"size": "A4", "quantity": "1000", "pad": "Without Pad", "printingSide": "Double Side"},
        price: 8700,
      },
    ],

    attributes: [
      {
        name: "Size",
        key: "size",
        type: "select",
        options: ["A4"],
        required: true,
      },
      {
        name: "Quantity",
        key: "quantity",
        type: "select",
        options: ["100", "250", "500", "800", "1000"],
        required: true,
      },
      {
        name: "Pad",
        key: "pad",
        type: "select",
        options: ["With Pad", "Without Pad"],
        required: true,
      },
      {
        name: "Printing Side",
        key: "printingSide",
        type: "select",
        options: ["Single Side", "Double Side"],
        required: true,
      },
    ],
  },

  {
    id: "bill-books",
    name: "Bill Books",
    category: "Brand Identity",
    type: "configurable",
    description: "Customized NCR bill books and cash vouchers with single or multi-color printing.",
    pricing: [
      {
        selections: {"size": "A4", "quantity": "5 Book", "finishingType": "Pad", "colorType": "Single Colour", "copyType": "Original Only"},
        price: 850,
      },
      {
        selections: {"size": "A4", "quantity": "5 Book", "finishingType": "Pad", "colorType": "Single Colour", "copyType": "1 Original + 1 Duplicate"},
        price: 1050,
      },
      {
        selections: {"size": "A4", "quantity": "5 Book", "finishingType": "Pad", "colorType": "Single Colour", "copyType": "1 Original + 2 Duplicate"},
        price: 1200,
      },
      {
        selections: {"size": "A4", "quantity": "5 Book", "finishingType": "Pad", "colorType": "Multi Colour", "copyType": "Original Only"},
        price: 1150,
      },
      {
        selections: {"size": "A4", "quantity": "5 Book", "finishingType": "Pad", "colorType": "Multi Colour", "copyType": "1 Original + 1 Duplicate"},
        price: 1400,
      },
      {
        selections: {"size": "A4", "quantity": "5 Book", "finishingType": "Pad", "colorType": "Multi Colour", "copyType": "1 Original + 2 Duplicate"},
        price: 1650,
      },
      {
        selections: {"size": "A4", "quantity": "5 Book", "finishingType": "Book Binding", "colorType": "Single Colour", "copyType": "Original Only"},
        price: 1000,
      },
      {
        selections: {"size": "A4", "quantity": "5 Book", "finishingType": "Book Binding", "colorType": "Single Colour", "copyType": "1 Original + 1 Duplicate"},
        price: 1250,
      },
      {
        selections: {"size": "A4", "quantity": "5 Book", "finishingType": "Book Binding", "colorType": "Single Colour", "copyType": "1 Original + 2 Duplicate"},
        price: 1450,
      },
      {
        selections: {"size": "A4", "quantity": "5 Book", "finishingType": "Book Binding", "colorType": "Multi Colour", "copyType": "Original Only"},
        price: 1350,
      },
      {
        selections: {"size": "A4", "quantity": "5 Book", "finishingType": "Book Binding", "colorType": "Multi Colour", "copyType": "1 Original + 1 Duplicate"},
        price: 1700,
      },
      {
        selections: {"size": "A4", "quantity": "5 Book", "finishingType": "Book Binding", "colorType": "Multi Colour", "copyType": "1 Original + 2 Duplicate"},
        price: 1950,
      },
      {
        selections: {"size": "A4", "quantity": "10 Book", "finishingType": "Pad", "colorType": "Single Colour", "copyType": "Original Only"},
        price: 1700,
      },
      {
        selections: {"size": "A4", "quantity": "10 Book", "finishingType": "Pad", "colorType": "Single Colour", "copyType": "1 Original + 1 Duplicate"},
        price: 2100,
      },
      {
        selections: {"size": "A4", "quantity": "10 Book", "finishingType": "Pad", "colorType": "Single Colour", "copyType": "1 Original + 2 Duplicate"},
        price: 2450,
      },
      {
        selections: {"size": "A4", "quantity": "10 Book", "finishingType": "Pad", "colorType": "Multi Colour", "copyType": "Original Only"},
        price: 2250,
      },
      {
        selections: {"size": "A4", "quantity": "10 Book", "finishingType": "Pad", "colorType": "Multi Colour", "copyType": "1 Original + 1 Duplicate"},
        price: 2850,
      },
      {
        selections: {"size": "A4", "quantity": "10 Book", "finishingType": "Pad", "colorType": "Multi Colour", "copyType": "1 Original + 2 Duplicate"},
        price: 3300,
      },
      {
        selections: {"size": "A4", "quantity": "10 Book", "finishingType": "Book Binding", "colorType": "Single Colour", "copyType": "Original Only"},
        price: 2000,
      },
      {
        selections: {"size": "A4", "quantity": "10 Book", "finishingType": "Book Binding", "colorType": "Single Colour", "copyType": "1 Original + 1 Duplicate"},
        price: 2500,
      },
      {
        selections: {"size": "A4", "quantity": "10 Book", "finishingType": "Book Binding", "colorType": "Single Colour", "copyType": "1 Original + 2 Duplicate"},
        price: 2900,
      },
      {
        selections: {"size": "A4", "quantity": "10 Book", "finishingType": "Book Binding", "colorType": "Multi Colour", "copyType": "Original Only"},
        price: 2700,
      },
      {
        selections: {"size": "A4", "quantity": "10 Book", "finishingType": "Book Binding", "colorType": "Multi Colour", "copyType": "1 Original + 1 Duplicate"},
        price: 3400,
      },
      {
        selections: {"size": "A4", "quantity": "10 Book", "finishingType": "Book Binding", "colorType": "Multi Colour", "copyType": "1 Original + 2 Duplicate"},
        price: 3950,
      },
      {
        selections: {"size": "A4", "quantity": "15 Book", "finishingType": "Pad", "colorType": "Single Colour", "copyType": "Original Only"},
        price: 2500,
      },
      {
        selections: {"size": "A4", "quantity": "15 Book", "finishingType": "Pad", "colorType": "Single Colour", "copyType": "1 Original + 1 Duplicate"},
        price: 3150,
      },
      {
        selections: {"size": "A4", "quantity": "15 Book", "finishingType": "Pad", "colorType": "Single Colour", "copyType": "1 Original + 2 Duplicate"},
        price: 3650,
      },
      {
        selections: {"size": "A4", "quantity": "15 Book", "finishingType": "Pad", "colorType": "Multi Colour", "copyType": "Original Only"},
        price: 3400,
      },
      {
        selections: {"size": "A4", "quantity": "15 Book", "finishingType": "Pad", "colorType": "Multi Colour", "copyType": "1 Original + 1 Duplicate"},
        price: 4250,
      },
      {
        selections: {"size": "A4", "quantity": "15 Book", "finishingType": "Pad", "colorType": "Multi Colour", "copyType": "1 Original + 2 Duplicate"},
        price: 4950,
      },
      {
        selections: {"size": "A4", "quantity": "15 Book", "finishingType": "Book Binding", "colorType": "Single Colour", "copyType": "Original Only"},
        price: 3000,
      },
      {
        selections: {"size": "A4", "quantity": "15 Book", "finishingType": "Book Binding", "colorType": "Single Colour", "copyType": "1 Original + 1 Duplicate"},
        price: 3800,
      },
      {
        selections: {"size": "A4", "quantity": "15 Book", "finishingType": "Book Binding", "colorType": "Single Colour", "copyType": "1 Original + 2 Duplicate"},
        price: 4400,
      },
      {
        selections: {"size": "A4", "quantity": "15 Book", "finishingType": "Book Binding", "colorType": "Multi Colour", "copyType": "Original Only"},
        price: 4100,
      },
      {
        selections: {"size": "A4", "quantity": "15 Book", "finishingType": "Book Binding", "colorType": "Multi Colour", "copyType": "1 Original + 1 Duplicate"},
        price: 5100,
      },
      {
        selections: {"size": "A4", "quantity": "15 Book", "finishingType": "Book Binding", "colorType": "Multi Colour", "copyType": "1 Original + 2 Duplicate"},
        price: 5900,
      },
      {
        selections: {"size": "A4", "quantity": "20 Book", "finishingType": "Pad", "colorType": "Single Colour", "copyType": "Original Only"},
        price: 3350,
      },
      {
        selections: {"size": "A4", "quantity": "20 Book", "finishingType": "Pad", "colorType": "Single Colour", "copyType": "1 Original + 1 Duplicate"},
        price: 4200,
      },
      {
        selections: {"size": "A4", "quantity": "20 Book", "finishingType": "Pad", "colorType": "Single Colour", "copyType": "1 Original + 2 Duplicate"},
        price: 4850,
      },
      {
        selections: {"size": "A4", "quantity": "20 Book", "finishingType": "Pad", "colorType": "Multi Colour", "copyType": "Original Only"},
        price: 4550,
      },
      {
        selections: {"size": "A4", "quantity": "20 Book", "finishingType": "Pad", "colorType": "Multi Colour", "copyType": "1 Original + 1 Duplicate"},
        price: 5650,
      },
      {
        selections: {"size": "A4", "quantity": "20 Book", "finishingType": "Pad", "colorType": "Multi Colour", "copyType": "1 Original + 2 Duplicate"},
        price: 6600,
      },
      {
        selections: {"size": "A4", "quantity": "20 Book", "finishingType": "Book Binding", "colorType": "Single Colour", "copyType": "Original Only"},
        price: 4050,
      },
      {
        selections: {"size": "A4", "quantity": "20 Book", "finishingType": "Book Binding", "colorType": "Single Colour", "copyType": "1 Original + 1 Duplicate"},
        price: 5050,
      },
      {
        selections: {"size": "A4", "quantity": "20 Book", "finishingType": "Book Binding", "colorType": "Single Colour", "copyType": "1 Original + 2 Duplicate"},
        price: 5850,
      },
      {
        selections: {"size": "A4", "quantity": "20 Book", "finishingType": "Book Binding", "colorType": "Multi Colour", "copyType": "Original Only"},
        price: 5450,
      },
      {
        selections: {"size": "A4", "quantity": "20 Book", "finishingType": "Book Binding", "colorType": "Multi Colour", "copyType": "1 Original + 1 Duplicate"},
        price: 6800,
      },
      {
        selections: {"size": "A4", "quantity": "20 Book", "finishingType": "Book Binding", "colorType": "Multi Colour", "copyType": "1 Original + 2 Duplicate"},
        price: 7900,
      },
      {
        selections: {"size": "A5", "quantity": "5 Book", "finishingType": "Pad", "colorType": "Single Colour", "copyType": "Original Only"},
        price: 700,
      },
      {
        selections: {"size": "A5", "quantity": "5 Book", "finishingType": "Pad", "colorType": "Single Colour", "copyType": "1 Original + 1 Duplicate"},
        price: 900,
      },
      {
        selections: {"size": "A5", "quantity": "5 Book", "finishingType": "Pad", "colorType": "Single Colour", "copyType": "1 Original + 2 Duplicate"},
        price: 1000,
      },
      {
        selections: {"size": "A5", "quantity": "5 Book", "finishingType": "Pad", "colorType": "Multi Colour", "copyType": "Original Only"},
        price: 950,
      },
      {
        selections: {"size": "A5", "quantity": "5 Book", "finishingType": "Pad", "colorType": "Multi Colour", "copyType": "1 Original + 1 Duplicate"},
        price: 1200,
      },
      {
        selections: {"size": "A5", "quantity": "5 Book", "finishingType": "Pad", "colorType": "Multi Colour", "copyType": "1 Original + 2 Duplicate"},
        price: 1350,
      },
      {
        selections: {"size": "A5", "quantity": "5 Book", "finishingType": "Book Binding", "colorType": "Single Colour", "copyType": "Original Only"},
        price: 850,
      },
      {
        selections: {"size": "A5", "quantity": "5 Book", "finishingType": "Book Binding", "colorType": "Single Colour", "copyType": "1 Original + 1 Duplicate"},
        price: 1050,
      },
      {
        selections: {"size": "A5", "quantity": "5 Book", "finishingType": "Book Binding", "colorType": "Single Colour", "copyType": "1 Original + 2 Duplicate"},
        price: 1200,
      },
      {
        selections: {"size": "A5", "quantity": "5 Book", "finishingType": "Book Binding", "colorType": "Multi Colour", "copyType": "Original Only"},
        price: 1150,
      },
      {
        selections: {"size": "A5", "quantity": "5 Book", "finishingType": "Book Binding", "colorType": "Multi Colour", "copyType": "1 Original + 1 Duplicate"},
        price: 1400,
      },
      {
        selections: {"size": "A5", "quantity": "5 Book", "finishingType": "Book Binding", "colorType": "Multi Colour", "copyType": "1 Original + 2 Duplicate"},
        price: 1650,
      },
      {
        selections: {"size": "A5", "quantity": "10 Book", "finishingType": "Pad", "colorType": "Single Colour", "copyType": "Original Only"},
        price: 1400,
      },
      {
        selections: {"size": "A5", "quantity": "10 Book", "finishingType": "Pad", "colorType": "Single Colour", "copyType": "1 Original + 1 Duplicate"},
        price: 1750,
      },
      {
        selections: {"size": "A5", "quantity": "10 Book", "finishingType": "Pad", "colorType": "Single Colour", "copyType": "1 Original + 2 Duplicate"},
        price: 2050,
      },
      {
        selections: {"size": "A5", "quantity": "10 Book", "finishingType": "Pad", "colorType": "Multi Colour", "copyType": "Original Only"},
        price: 1900,
      },
      {
        selections: {"size": "A5", "quantity": "10 Book", "finishingType": "Pad", "colorType": "Multi Colour", "copyType": "1 Original + 1 Duplicate"},
        price: 2350,
      },
      {
        selections: {"size": "A5", "quantity": "10 Book", "finishingType": "Pad", "colorType": "Multi Colour", "copyType": "1 Original + 2 Duplicate"},
        price: 2750,
      },
      {
        selections: {"size": "A5", "quantity": "10 Book", "finishingType": "Book Binding", "colorType": "Single Colour", "copyType": "Original Only"},
        price: 1700,
      },
      {
        selections: {"size": "A5", "quantity": "10 Book", "finishingType": "Book Binding", "colorType": "Single Colour", "copyType": "1 Original + 1 Duplicate"},
        price: 2100,
      },
      {
        selections: {"size": "A5", "quantity": "10 Book", "finishingType": "Book Binding", "colorType": "Single Colour", "copyType": "1 Original + 2 Duplicate"},
        price: 2450,
      },
      {
        selections: {"size": "A5", "quantity": "10 Book", "finishingType": "Book Binding", "colorType": "Multi Colour", "copyType": "Original Only"},
        price: 2250,
      },
      {
        selections: {"size": "A5", "quantity": "10 Book", "finishingType": "Book Binding", "colorType": "Multi Colour", "copyType": "1 Original + 1 Duplicate"},
        price: 2850,
      },
      {
        selections: {"size": "A5", "quantity": "10 Book", "finishingType": "Book Binding", "colorType": "Multi Colour", "copyType": "1 Original + 2 Duplicate"},
        price: 3300,
      },
      {
        selections: {"size": "A5", "quantity": "15 Book", "finishingType": "Pad", "colorType": "Single Colour", "copyType": "Original Only"},
        price: 2100,
      },
      {
        selections: {"size": "A5", "quantity": "15 Book", "finishingType": "Pad", "colorType": "Single Colour", "copyType": "1 Original + 1 Duplicate"},
        price: 2600,
      },
      {
        selections: {"size": "A5", "quantity": "15 Book", "finishingType": "Pad", "colorType": "Single Colour", "copyType": "1 Original + 2 Duplicate"},
        price: 3050,
      },
      {
        selections: {"size": "A5", "quantity": "15 Book", "finishingType": "Pad", "colorType": "Multi Colour", "copyType": "Original Only"},
        price: 2850,
      },
      {
        selections: {"size": "A5", "quantity": "15 Book", "finishingType": "Pad", "colorType": "Multi Colour", "copyType": "1 Original + 1 Duplicate"},
        price: 3550,
      },
      {
        selections: {"size": "A5", "quantity": "15 Book", "finishingType": "Pad", "colorType": "Multi Colour", "copyType": "1 Original + 2 Duplicate"},
        price: 4100,
      },
      {
        selections: {"size": "A5", "quantity": "15 Book", "finishingType": "Book Binding", "colorType": "Single Colour", "copyType": "Original Only"},
        price: 2500,
      },
      {
        selections: {"size": "A5", "quantity": "15 Book", "finishingType": "Book Binding", "colorType": "Single Colour", "copyType": "1 Original + 1 Duplicate"},
        price: 3150,
      },
      {
        selections: {"size": "A5", "quantity": "15 Book", "finishingType": "Book Binding", "colorType": "Single Colour", "copyType": "1 Original + 2 Duplicate"},
        price: 3650,
      },
      {
        selections: {"size": "A5", "quantity": "15 Book", "finishingType": "Book Binding", "colorType": "Multi Colour", "copyType": "Original Only"},
        price: 3400,
      },
      {
        selections: {"size": "A5", "quantity": "15 Book", "finishingType": "Book Binding", "colorType": "Multi Colour", "copyType": "1 Original + 1 Duplicate"},
        price: 4250,
      },
      {
        selections: {"size": "A5", "quantity": "15 Book", "finishingType": "Book Binding", "colorType": "Multi Colour", "copyType": "1 Original + 2 Duplicate"},
        price: 4950,
      },
      {
        selections: {"size": "A5", "quantity": "20 Book", "finishingType": "Pad", "colorType": "Single Colour", "copyType": "Original Only"},
        price: 2800,
      },
      {
        selections: {"size": "A5", "quantity": "20 Book", "finishingType": "Pad", "colorType": "Single Colour", "copyType": "1 Original + 1 Duplicate"},
        price: 3500,
      },
      {
        selections: {"size": "A5", "quantity": "20 Book", "finishingType": "Pad", "colorType": "Single Colour", "copyType": "1 Original + 2 Duplicate"},
        price: 4050,
      },
      {
        selections: {"size": "A5", "quantity": "20 Book", "finishingType": "Pad", "colorType": "Multi Colour", "copyType": "Original Only"},
        price: 3800,
      },
      {
        selections: {"size": "A5", "quantity": "20 Book", "finishingType": "Pad", "colorType": "Multi Colour", "copyType": "1 Original + 1 Duplicate"},
        price: 4750,
      },
      {
        selections: {"size": "A5", "quantity": "20 Book", "finishingType": "Pad", "colorType": "Multi Colour", "copyType": "1 Original + 2 Duplicate"},
        price: 5500,
      },
      {
        selections: {"size": "A5", "quantity": "20 Book", "finishingType": "Book Binding", "colorType": "Single Colour", "copyType": "Original Only"},
        price: 3350,
      },
      {
        selections: {"size": "A5", "quantity": "20 Book", "finishingType": "Book Binding", "colorType": "Single Colour", "copyType": "1 Original + 1 Duplicate"},
        price: 4200,
      },
      {
        selections: {"size": "A5", "quantity": "20 Book", "finishingType": "Book Binding", "colorType": "Single Colour", "copyType": "1 Original + 2 Duplicate"},
        price: 4850,
      },
      {
        selections: {"size": "A5", "quantity": "20 Book", "finishingType": "Book Binding", "colorType": "Multi Colour", "copyType": "Original Only"},
        price: 4550,
      },
      {
        selections: {"size": "A5", "quantity": "20 Book", "finishingType": "Book Binding", "colorType": "Multi Colour", "copyType": "1 Original + 1 Duplicate"},
        price: 5650,
      },
      {
        selections: {"size": "A5", "quantity": "20 Book", "finishingType": "Book Binding", "colorType": "Multi Colour", "copyType": "1 Original + 2 Duplicate"},
        price: 6600,
      },
    ],

    attributes: [
      {
        name: "Size",
        key: "size",
        type: "select",
        options: ["A4", "A5"],
        required: true,
      },
      {
        name: "Quantity",
        key: "quantity",
        type: "select",
        options: ["5 Book", "10 Book", "15 Book", "20 Book"],
        required: true,
      },
      {
        name: "Finishing Type",
        key: "finishingType",
        type: "select",
        options: ["Pad", "Book Binding"],
        required: true,
      },
      {
        name: "Color Type",
        key: "colorType",
        type: "select",
        options: ["Single Colour", "Multi Colour"],
        required: true,
      },
      {
        name: "Copy Type",
        key: "copyType",
        type: "select",
        options: [
          "Original Only",
          "1 Original + 1 Duplicate",
          "1 Original + 2 Duplicate",
        ],
        required: true,
      },
    ],
  },

  // ============================================================
  // MARKETING & PROMOTION
  // ============================================================

  {
    id: "flyers-pamphlets",
    name: "Flyers/Pamphlets",
    category: "Marketing & Promotion",
    type: "configurable",
    description: "Vibrant promotional flyers and pamphlets printed on crisp art paper.",
    pricing: [
      {
        selections: {"size": "A4", "quantity": "200", "printingSide": "Single Side"},
        price: 900,
      },
      {
        selections: {"size": "A4", "quantity": "200", "printingSide": "Double Side"},
        price: 1200,
      },
      {
        selections: {"size": "A4", "quantity": "400", "printingSide": "Single Side"},
        price: 1750,
      },
      {
        selections: {"size": "A4", "quantity": "400", "printingSide": "Double Side"},
        price: 2400,
      },
      {
        selections: {"size": "A4", "quantity": "600", "printingSide": "Single Side"},
        price: 2650,
      },
      {
        selections: {"size": "A4", "quantity": "600", "printingSide": "Double Side"},
        price: 3550,
      },
      {
        selections: {"size": "A4", "quantity": "800", "printingSide": "Single Side"},
        price: 3500,
      },
      {
        selections: {"size": "A4", "quantity": "800", "printingSide": "Double Side"},
        price: 4750,
      },
      {
        selections: {"size": "A4", "quantity": "1000", "printingSide": "Single Side"},
        price: 4400,
      },
      {
        selections: {"size": "A4", "quantity": "1000", "printingSide": "Double Side"},
        price: 5950,
      },
      {
        selections: {"size": "A5", "quantity": "200", "printingSide": "Single Side"},
        price: 800,
      },
      {
        selections: {"size": "A5", "quantity": "200", "printingSide": "Double Side"},
        price: 1100,
      },
      {
        selections: {"size": "A5", "quantity": "400", "printingSide": "Single Side"},
        price: 1600,
      },
      {
        selections: {"size": "A5", "quantity": "400", "printingSide": "Double Side"},
        price: 2150,
      },
      {
        selections: {"size": "A5", "quantity": "600", "printingSide": "Single Side"},
        price: 2400,
      },
      {
        selections: {"size": "A5", "quantity": "600", "printingSide": "Double Side"},
        price: 3250,
      },
      {
        selections: {"size": "A5", "quantity": "800", "printingSide": "Single Side"},
        price: 3200,
      },
      {
        selections: {"size": "A5", "quantity": "800", "printingSide": "Double Side"},
        price: 4300,
      },
      {
        selections: {"size": "A5", "quantity": "1000", "printingSide": "Single Side"},
        price: 4000,
      },
      {
        selections: {"size": "A5", "quantity": "1000", "printingSide": "Double Side"},
        price: 5400,
      },
    ],

    attributes: [
      {
        name: "Size",
        key: "size",
        type: "select",
        options: ["A4", "A5"],
        required: true,
      },
      {
        name: "Quantity",
        key: "quantity",
        type: "select",
        options: ["200", "400", "600", "800", "1000", "Custom"],
        required: true,
      },
      {
        name: "Printing Side",
        key: "printingSide",
        type: "select",
        options: ["Single Side", "Double Side"],
        required: true,
      },
    ],
  },

  {
    id: "brochures",
    name: "Brochures",
    category: "Marketing & Promotion",
    type: "configurable",
    description: "High-grade bi-fold and tri-fold corporate brochures with protective lamination.",
    pricing: [
      {
        selections: {"size": "A4", "quantity": "100", "folds": "Bi-Fold", "material": "Art-Paper 170 GSM", "lamination": "Glossy"},
        price: 1300,
      },
      {
        selections: {"size": "A4", "quantity": "100", "folds": "Bi-Fold", "material": "Art-Paper 170 GSM", "lamination": "Matt"},
        price: 1500,
      },
      {
        selections: {"size": "A4", "quantity": "100", "folds": "Bi-Fold", "material": "Art-Paper 300 GSM", "lamination": "Glossy"},
        price: 1650,
      },
      {
        selections: {"size": "A4", "quantity": "100", "folds": "Bi-Fold", "material": "Art-Paper 300 GSM", "lamination": "Matt"},
        price: 1850,
      },
      {
        selections: {"size": "A4", "quantity": "100", "folds": "Tri-Fold", "material": "Art-Paper 170 GSM", "lamination": "Glossy"},
        price: 1500,
      },
      {
        selections: {"size": "A4", "quantity": "100", "folds": "Tri-Fold", "material": "Art-Paper 170 GSM", "lamination": "Matt"},
        price: 1650,
      },
      {
        selections: {"size": "A4", "quantity": "100", "folds": "Tri-Fold", "material": "Art-Paper 300 GSM", "lamination": "Glossy"},
        price: 1850,
      },
      {
        selections: {"size": "A4", "quantity": "100", "folds": "Tri-Fold", "material": "Art-Paper 300 GSM", "lamination": "Matt"},
        price: 2050,
      },
      {
        selections: {"size": "A4", "quantity": "250", "folds": "Bi-Fold", "material": "Art-Paper 170 GSM", "lamination": "Glossy"},
        price: 3300,
      },
      {
        selections: {"size": "A4", "quantity": "250", "folds": "Bi-Fold", "material": "Art-Paper 170 GSM", "lamination": "Matt"},
        price: 3700,
      },
      {
        selections: {"size": "A4", "quantity": "250", "folds": "Bi-Fold", "material": "Art-Paper 300 GSM", "lamination": "Glossy"},
        price: 4150,
      },
      {
        selections: {"size": "A4", "quantity": "250", "folds": "Bi-Fold", "material": "Art-Paper 300 GSM", "lamination": "Matt"},
        price: 4600,
      },
      {
        selections: {"size": "A4", "quantity": "250", "folds": "Tri-Fold", "material": "Art-Paper 170 GSM", "lamination": "Glossy"},
        price: 3700,
      },
      {
        selections: {"size": "A4", "quantity": "250", "folds": "Tri-Fold", "material": "Art-Paper 170 GSM", "lamination": "Matt"},
        price: 4150,
      },
      {
        selections: {"size": "A4", "quantity": "250", "folds": "Tri-Fold", "material": "Art-Paper 300 GSM", "lamination": "Glossy"},
        price: 4600,
      },
      {
        selections: {"size": "A4", "quantity": "250", "folds": "Tri-Fold", "material": "Art-Paper 300 GSM", "lamination": "Matt"},
        price: 5150,
      },
      {
        selections: {"size": "A4", "quantity": "500", "folds": "Bi-Fold", "material": "Art-Paper 170 GSM", "lamination": "Glossy"},
        price: 6600,
      },
      {
        selections: {"size": "A4", "quantity": "500", "folds": "Bi-Fold", "material": "Art-Paper 170 GSM", "lamination": "Matt"},
        price: 7400,
      },
      {
        selections: {"size": "A4", "quantity": "500", "folds": "Bi-Fold", "material": "Art-Paper 300 GSM", "lamination": "Glossy"},
        price: 8250,
      },
      {
        selections: {"size": "A4", "quantity": "500", "folds": "Bi-Fold", "material": "Art-Paper 300 GSM", "lamination": "Matt"},
        price: 9250,
      },
      {
        selections: {"size": "A4", "quantity": "500", "folds": "Tri-Fold", "material": "Art-Paper 170 GSM", "lamination": "Glossy"},
        price: 7400,
      },
      {
        selections: {"size": "A4", "quantity": "500", "folds": "Tri-Fold", "material": "Art-Paper 170 GSM", "lamination": "Matt"},
        price: 8300,
      },
      {
        selections: {"size": "A4", "quantity": "500", "folds": "Tri-Fold", "material": "Art-Paper 300 GSM", "lamination": "Glossy"},
        price: 9250,
      },
      {
        selections: {"size": "A4", "quantity": "500", "folds": "Tri-Fold", "material": "Art-Paper 300 GSM", "lamination": "Matt"},
        price: 10350,
      },
      {
        selections: {"size": "A4", "quantity": "800", "folds": "Bi-Fold", "material": "Art-Paper 170 GSM", "lamination": "Glossy"},
        price: 10550,
      },
      {
        selections: {"size": "A4", "quantity": "800", "folds": "Bi-Fold", "material": "Art-Paper 170 GSM", "lamination": "Matt"},
        price: 11850,
      },
      {
        selections: {"size": "A4", "quantity": "800", "folds": "Bi-Fold", "material": "Art-Paper 300 GSM", "lamination": "Glossy"},
        price: 13200,
      },
      {
        selections: {"size": "A4", "quantity": "800", "folds": "Bi-Fold", "material": "Art-Paper 300 GSM", "lamination": "Matt"},
        price: 14800,
      },
      {
        selections: {"size": "A4", "quantity": "800", "folds": "Tri-Fold", "material": "Art-Paper 170 GSM", "lamination": "Glossy"},
        price: 11850,
      },
      {
        selections: {"size": "A4", "quantity": "800", "folds": "Tri-Fold", "material": "Art-Paper 170 GSM", "lamination": "Matt"},
        price: 13250,
      },
      {
        selections: {"size": "A4", "quantity": "800", "folds": "Tri-Fold", "material": "Art-Paper 300 GSM", "lamination": "Glossy"},
        price: 14800,
      },
      {
        selections: {"size": "A4", "quantity": "800", "folds": "Tri-Fold", "material": "Art-Paper 300 GSM", "lamination": "Matt"},
        price: 16550,
      },
      {
        selections: {"size": "A4", "quantity": "1000", "folds": "Bi-Fold", "material": "Art-Paper 170 GSM", "lamination": "Glossy"},
        price: 13200,
      },
      {
        selections: {"size": "A4", "quantity": "1000", "folds": "Bi-Fold", "material": "Art-Paper 170 GSM", "lamination": "Matt"},
        price: 14800,
      },
      {
        selections: {"size": "A4", "quantity": "1000", "folds": "Bi-Fold", "material": "Art-Paper 300 GSM", "lamination": "Glossy"},
        price: 16500,
      },
      {
        selections: {"size": "A4", "quantity": "1000", "folds": "Bi-Fold", "material": "Art-Paper 300 GSM", "lamination": "Matt"},
        price: 18500,
      },
      {
        selections: {"size": "A4", "quantity": "1000", "folds": "Tri-Fold", "material": "Art-Paper 170 GSM", "lamination": "Glossy"},
        price: 14800,
      },
      {
        selections: {"size": "A4", "quantity": "1000", "folds": "Tri-Fold", "material": "Art-Paper 170 GSM", "lamination": "Matt"},
        price: 16550,
      },
      {
        selections: {"size": "A4", "quantity": "1000", "folds": "Tri-Fold", "material": "Art-Paper 300 GSM", "lamination": "Glossy"},
        price: 18500,
      },
      {
        selections: {"size": "A4", "quantity": "1000", "folds": "Tri-Fold", "material": "Art-Paper 300 GSM", "lamination": "Matt"},
        price: 20700,
      },
      {
        selections: {"size": "A5", "quantity": "100", "folds": "Bi-Fold", "material": "Art-Paper 170 GSM", "lamination": "Glossy"},
        price: 1200,
      },
      {
        selections: {"size": "A5", "quantity": "100", "folds": "Bi-Fold", "material": "Art-Paper 170 GSM", "lamination": "Matt"},
        price: 1350,
      },
      {
        selections: {"size": "A5", "quantity": "100", "folds": "Bi-Fold", "material": "Art-Paper 300 GSM", "lamination": "Glossy"},
        price: 1500,
      },
      {
        selections: {"size": "A5", "quantity": "100", "folds": "Bi-Fold", "material": "Art-Paper 300 GSM", "lamination": "Matt"},
        price: 1700,
      },
      {
        selections: {"size": "A5", "quantity": "100", "folds": "Tri-Fold", "material": "Art-Paper 170 GSM", "lamination": "Glossy"},
        price: 1350,
      },
      {
        selections: {"size": "A5", "quantity": "100", "folds": "Tri-Fold", "material": "Art-Paper 170 GSM", "lamination": "Matt"},
        price: 1500,
      },
      {
        selections: {"size": "A5", "quantity": "100", "folds": "Tri-Fold", "material": "Art-Paper 300 GSM", "lamination": "Glossy"},
        price: 1700,
      },
      {
        selections: {"size": "A5", "quantity": "100", "folds": "Tri-Fold", "material": "Art-Paper 300 GSM", "lamination": "Matt"},
        price: 1900,
      },
      {
        selections: {"size": "A5", "quantity": "250", "folds": "Bi-Fold", "material": "Art-Paper 170 GSM", "lamination": "Glossy"},
        price: 3000,
      },
      {
        selections: {"size": "A5", "quantity": "250", "folds": "Bi-Fold", "material": "Art-Paper 170 GSM", "lamination": "Matt"},
        price: 3350,
      },
      {
        selections: {"size": "A5", "quantity": "250", "folds": "Bi-Fold", "material": "Art-Paper 300 GSM", "lamination": "Glossy"},
        price: 3750,
      },
      {
        selections: {"size": "A5", "quantity": "250", "folds": "Bi-Fold", "material": "Art-Paper 300 GSM", "lamination": "Matt"},
        price: 4200,
      },
      {
        selections: {"size": "A5", "quantity": "250", "folds": "Tri-Fold", "material": "Art-Paper 170 GSM", "lamination": "Glossy"},
        price: 3350,
      },
      {
        selections: {"size": "A5", "quantity": "250", "folds": "Tri-Fold", "material": "Art-Paper 170 GSM", "lamination": "Matt"},
        price: 3750,
      },
      {
        selections: {"size": "A5", "quantity": "250", "folds": "Tri-Fold", "material": "Art-Paper 300 GSM", "lamination": "Glossy"},
        price: 4200,
      },
      {
        selections: {"size": "A5", "quantity": "250", "folds": "Tri-Fold", "material": "Art-Paper 300 GSM", "lamination": "Matt"},
        price: 4700,
      },
      {
        selections: {"size": "A5", "quantity": "500", "folds": "Bi-Fold", "material": "Art-Paper 170 GSM", "lamination": "Glossy"},
        price: 6000,
      },
      {
        selections: {"size": "A5", "quantity": "500", "folds": "Bi-Fold", "material": "Art-Paper 170 GSM", "lamination": "Matt"},
        price: 6700,
      },
      {
        selections: {"size": "A5", "quantity": "500", "folds": "Bi-Fold", "material": "Art-Paper 300 GSM", "lamination": "Glossy"},
        price: 7500,
      },
      {
        selections: {"size": "A5", "quantity": "500", "folds": "Bi-Fold", "material": "Art-Paper 300 GSM", "lamination": "Matt"},
        price: 8400,
      },
      {
        selections: {"size": "A5", "quantity": "500", "folds": "Tri-Fold", "material": "Art-Paper 170 GSM", "lamination": "Glossy"},
        price: 6700,
      },
      {
        selections: {"size": "A5", "quantity": "500", "folds": "Tri-Fold", "material": "Art-Paper 170 GSM", "lamination": "Matt"},
        price: 7550,
      },
      {
        selections: {"size": "A5", "quantity": "500", "folds": "Tri-Fold", "material": "Art-Paper 300 GSM", "lamination": "Glossy"},
        price: 8400,
      },
      {
        selections: {"size": "A5", "quantity": "500", "folds": "Tri-Fold", "material": "Art-Paper 300 GSM", "lamination": "Matt"},
        price: 9400,
      },
      {
        selections: {"size": "A5", "quantity": "800", "folds": "Bi-Fold", "material": "Art-Paper 170 GSM", "lamination": "Glossy"},
        price: 9600,
      },
      {
        selections: {"size": "A5", "quantity": "800", "folds": "Bi-Fold", "material": "Art-Paper 170 GSM", "lamination": "Matt"},
        price: 10750,
      },
      {
        selections: {"size": "A5", "quantity": "800", "folds": "Bi-Fold", "material": "Art-Paper 300 GSM", "lamination": "Glossy"},
        price: 12000,
      },
      {
        selections: {"size": "A5", "quantity": "800", "folds": "Bi-Fold", "material": "Art-Paper 300 GSM", "lamination": "Matt"},
        price: 13450,
      },
      {
        selections: {"size": "A5", "quantity": "800", "folds": "Tri-Fold", "material": "Art-Paper 170 GSM", "lamination": "Glossy"},
        price: 10750,
      },
      {
        selections: {"size": "A5", "quantity": "800", "folds": "Tri-Fold", "material": "Art-Paper 170 GSM", "lamination": "Matt"},
        price: 12050,
      },
      {
        selections: {"size": "A5", "quantity": "800", "folds": "Tri-Fold", "material": "Art-Paper 300 GSM", "lamination": "Glossy"},
        price: 13450,
      },
      {
        selections: {"size": "A5", "quantity": "800", "folds": "Tri-Fold", "material": "Art-Paper 300 GSM", "lamination": "Matt"},
        price: 15050,
      },
      {
        selections: {"size": "A5", "quantity": "1000", "folds": "Bi-Fold", "material": "Art-Paper 170 GSM", "lamination": "Glossy"},
        price: 12000,
      },
      {
        selections: {"size": "A5", "quantity": "1000", "folds": "Bi-Fold", "material": "Art-Paper 170 GSM", "lamination": "Matt"},
        price: 13450,
      },
      {
        selections: {"size": "A5", "quantity": "1000", "folds": "Bi-Fold", "material": "Art-Paper 300 GSM", "lamination": "Glossy"},
        price: 15000,
      },
      {
        selections: {"size": "A5", "quantity": "1000", "folds": "Bi-Fold", "material": "Art-Paper 300 GSM", "lamination": "Matt"},
        price: 16800,
      },
      {
        selections: {"size": "A5", "quantity": "1000", "folds": "Tri-Fold", "material": "Art-Paper 170 GSM", "lamination": "Glossy"},
        price: 13450,
      },
      {
        selections: {"size": "A5", "quantity": "1000", "folds": "Tri-Fold", "material": "Art-Paper 170 GSM", "lamination": "Matt"},
        price: 15050,
      },
      {
        selections: {"size": "A5", "quantity": "1000", "folds": "Tri-Fold", "material": "Art-Paper 300 GSM", "lamination": "Glossy"},
        price: 16800,
      },
      {
        selections: {"size": "A5", "quantity": "1000", "folds": "Tri-Fold", "material": "Art-Paper 300 GSM", "lamination": "Matt"},
        price: 18800,
      },
    ],

    attributes: [
      {
        name: "Size",
        key: "size",
        type: "select",
        options: ["A4", "A5"],
        required: true,
      },
      {
        name: "Quantity",
        key: "quantity",
        type: "select",
        options: ["100", "250", "500", "800", "1000"],
        required: true,
      },
      {
        name: "Folds",
        key: "folds",
        type: "select",
        options: ["Bi-Fold", "Tri-Fold"],
        required: true,
      },
      {
        name: "Material",
        key: "material",
        type: "select",
        options: ["Art-Paper 170 GSM", "Art-Paper 300 GSM"],
        required: true,
      },
      {
        name: "Lamination",
        key: "lamination",
        type: "select",
        options: ["Glossy", "Matt"],
        required: true,
      },
    ],
  },

  {
    id: "sticker-label",
    name: "Sticker/Label",
    category: "Marketing & Promotion",
    type: "configurable",
    description: "Custom die-cut stickers and product labels available in clear, metallic, or paper stocks.",
    pricing: [
      {
        selections: {"size": "Custom", "quantity": "50", "lamination": "Normal Sticker"},
        price: 500,
      },
      {
        selections: {"size": "Custom", "quantity": "50", "lamination": "Transparent"},
        price: 550,
      },
      {
        selections: {"size": "Custom", "quantity": "50", "lamination": "PVC Clear"},
        price: 600,
      },
      {
        selections: {"size": "Custom", "quantity": "50", "lamination": "Silver"},
        price: 700,
      },
      {
        selections: {"size": "Custom", "quantity": "50", "lamination": "Gold"},
        price: 750,
      },
      {
        selections: {"size": "Custom", "quantity": "100", "lamination": "Normal Sticker"},
        price: 1000,
      },
      {
        selections: {"size": "Custom", "quantity": "100", "lamination": "Transparent"},
        price: 1100,
      },
      {
        selections: {"size": "Custom", "quantity": "100", "lamination": "PVC Clear"},
        price: 1250,
      },
      {
        selections: {"size": "Custom", "quantity": "100", "lamination": "Silver"},
        price: 1400,
      },
      {
        selections: {"size": "Custom", "quantity": "100", "lamination": "Gold"},
        price: 1500,
      },
      {
        selections: {"size": "Custom", "quantity": "200", "lamination": "Normal Sticker"},
        price: 2000,
      },
      {
        selections: {"size": "Custom", "quantity": "200", "lamination": "Transparent"},
        price: 2200,
      },
      {
        selections: {"size": "Custom", "quantity": "200", "lamination": "PVC Clear"},
        price: 2500,
      },
      {
        selections: {"size": "Custom", "quantity": "200", "lamination": "Silver"},
        price: 2800,
      },
      {
        selections: {"size": "Custom", "quantity": "200", "lamination": "Gold"},
        price: 3000,
      },
      {
        selections: {"size": "Custom", "quantity": "350", "lamination": "Normal Sticker"},
        price: 3500,
      },
      {
        selections: {"size": "Custom", "quantity": "350", "lamination": "Transparent"},
        price: 3850,
      },
      {
        selections: {"size": "Custom", "quantity": "350", "lamination": "PVC Clear"},
        price: 4400,
      },
      {
        selections: {"size": "Custom", "quantity": "350", "lamination": "Silver"},
        price: 4900,
      },
      {
        selections: {"size": "Custom", "quantity": "350", "lamination": "Gold"},
        price: 5250,
      },
      {
        selections: {"size": "Custom", "quantity": "500", "lamination": "Normal Sticker"},
        price: 5000,
      },
      {
        selections: {"size": "Custom", "quantity": "500", "lamination": "Transparent"},
        price: 5500,
      },
      {
        selections: {"size": "Custom", "quantity": "500", "lamination": "PVC Clear"},
        price: 6250,
      },
      {
        selections: {"size": "Custom", "quantity": "500", "lamination": "Silver"},
        price: 7000,
      },
      {
        selections: {"size": "Custom", "quantity": "500", "lamination": "Gold"},
        price: 7500,
      },
      {
        selections: {"size": "Custom", "quantity": "Custom", "lamination": "Normal Sticker"},
        price: 500,
        priceType: "starting",
      },
      {
        selections: {"size": "Custom", "quantity": "Custom", "lamination": "Transparent"},
        price: 550,
        priceType: "starting",
      },
      {
        selections: {"size": "Custom", "quantity": "Custom", "lamination": "PVC Clear"},
        price: 600,
        priceType: "starting",
      },
      {
        selections: {"size": "Custom", "quantity": "Custom", "lamination": "Silver"},
        price: 700,
        priceType: "starting",
      },
      {
        selections: {"size": "Custom", "quantity": "Custom", "lamination": "Gold"},
        price: 750,
        priceType: "starting",
      },
    ],
    pricingNote: "The Custom quantity option uses the displayed amount as a starting price until the exact quantity is confirmed.",

    attributes: [
      {
        name: "Size",
        key: "size",
        type: "select",
        options: ["Custom"],
        required: true,
      },
      {
        name: "Quantity",
        key: "quantity",
        type: "select",
        options: ["50", "100", "200", "350", "500", "Custom"],
        required: true,
      },
      {
        name: "Lamination",
        key: "lamination",
        type: "select",
        options: [
          "Normal Sticker",
          "Transparent",
          "PVC Clear",
          "Silver",
          "Gold",
        ],
        required: true,
      },
    ],
  },

  {
    id: "roll-up-standee",
    name: "Roll Up Standee",
    category: "Marketing & Promotion",
    type: "configurable",
    description: "Portable aluminum roll up standees with high resolution display canvas prints.",
    pricing: [
      {
        selections: {"size": "2.5 x 6"},
        price: 400,
        priceType: "per-unit",
      },
      {
        selections: {"size": "3 x 6"},
        price: 550,
        priceType: "per-unit",
      },
    ],
    pricingNote: "Dummy price is per unit; multiply by the entered quantity for the displayed total.",

    attributes: [
      {
        name: "Size",
        key: "size",
        type: "select",
        options: ["2.5 x 6", "3 x 6"],
        required: true,
      },
      {
        name: "Quantity",
        key: "quantity",
        type: "number",
        required: true,
        placeholder: "Enter quantity",
      },
    ],
  },

  // ============================================================
  // LARGE PRINT
  // ============================================================

  {
    id: "flex-banners",
    name: "Flex Banners",
    category: "Large Print",
    type: "configurable",
    description: "Custom size flex banner printing with weather resistant heavy duty canvas fabric.",
    pricing: [
      {
        selections: {"type": "Normal Flex"},
        price: 40,
        priceType: "per-unit",
      },
      {
        selections: {"type": "Star Flex"},
        price: 55,
        priceType: "per-unit",
      },
      {
        selections: {"type": "Vinyl Sticker"},
        price: 75,
        priceType: "per-unit",
      },
    ],
    pricingNote: "Dummy price is per sq. ft.; final price depends on the entered custom dimensions.",

    attributes: [
      {
        name: "Type",
        key: "type",
        type: "select",
        options: ["Normal Flex", "Star Flex", "Vinyl Sticker"],
        required: true,
      },
      {
        name: "Size",
        key: "size",
        type: "text",
        required: true,
        placeholder: "Enter custom size",
      },
    ],
  },

  {
    id: "sunpack-pole-flex",
    name: "Sunpack/Pole Flex",
    category: "Large Print",
    type: "configurable",
    description: "Durable sunpack sheets and pole flex banners ideal for outdoor brand advertising.",
    pricing: [
      {
        selections: {"size": "1 x 1.5", "quantity": "500"},
        price: 900,
      },
      {
        selections: {"size": "1 x 1.5", "quantity": "750"},
        price: 1350,
      },
      {
        selections: {"size": "1 x 1.5", "quantity": "1000"},
        price: 1800,
      },
      {
        selections: {"size": "1 x 1.5", "quantity": "1500"},
        price: 2700,
      },
      {
        selections: {"size": "1 x 1.5", "quantity": "2000"},
        price: 3600,
      },
      {
        selections: {"size": "2 x 1", "quantity": "500"},
        price: 1050,
      },
      {
        selections: {"size": "2 x 1", "quantity": "750"},
        price: 1550,
      },
      {
        selections: {"size": "2 x 1", "quantity": "1000"},
        price: 2050,
      },
      {
        selections: {"size": "2 x 1", "quantity": "1500"},
        price: 3100,
      },
      {
        selections: {"size": "2 x 1", "quantity": "2000"},
        price: 4150,
      },
      {
        selections: {"size": "2 x 1.5", "quantity": "500"},
        price: 1300,
      },
      {
        selections: {"size": "2 x 1.5", "quantity": "750"},
        price: 1950,
      },
      {
        selections: {"size": "2 x 1.5", "quantity": "1000"},
        price: 2600,
      },
      {
        selections: {"size": "2 x 1.5", "quantity": "1500"},
        price: 3900,
      },
      {
        selections: {"size": "2 x 1.5", "quantity": "2000"},
        price: 5200,
      },
      {
        selections: {"size": "2 x 2", "quantity": "500"},
        price: 1600,
      },
      {
        selections: {"size": "2 x 2", "quantity": "750"},
        price: 2350,
      },
      {
        selections: {"size": "2 x 2", "quantity": "1000"},
        price: 3150,
      },
      {
        selections: {"size": "2 x 2", "quantity": "1500"},
        price: 4700,
      },
      {
        selections: {"size": "2 x 2", "quantity": "2000"},
        price: 6300,
      },
      {
        selections: {"size": "3 x 2", "quantity": "500"},
        price: 2150,
      },
      {
        selections: {"size": "3 x 2", "quantity": "750"},
        price: 3250,
      },
      {
        selections: {"size": "3 x 2", "quantity": "1000"},
        price: 4300,
      },
      {
        selections: {"size": "3 x 2", "quantity": "1500"},
        price: 6500,
      },
      {
        selections: {"size": "3 x 2", "quantity": "2000"},
        price: 8650,
      },
      {
        selections: {"size": "Custom", "quantity": "500"},
        price: 900,
        priceType: "starting",
      },
      {
        selections: {"size": "Custom", "quantity": "750"},
        price: 1350,
        priceType: "starting",
      },
      {
        selections: {"size": "Custom", "quantity": "1000"},
        price: 1800,
        priceType: "starting",
      },
      {
        selections: {"size": "Custom", "quantity": "1500"},
        price: 2700,
        priceType: "starting",
      },
      {
        selections: {"size": "Custom", "quantity": "2000"},
        price: 3600,
        priceType: "starting",
      },
      {
        selections: {"size": "Custom", "quantity": "Custom"},
        price: 900,
        priceType: "starting",
      },
    ],
    pricingNote: "Custom size uses a starting price based on the smallest listed size; final price depends on exact dimensions.",

    attributes: [
      {
        name: "Size",
        key: "size",
        type: "select",
        options: [
          "1 x 1.5",
          "2 x 1",
          "2 x 1.5",
          "2 x 2",
          "3 x 2",
          "Custom",
        ],
        required: true,
      },
      {
        name: "Quantity",
        key: "quantity",
        type: "select",
        options: ["500", "750", "1000", "1500", "2000", "Custom"],
        required: true,
      },
    ],
  },

  // ============================================================
  // No Quantities
  // ============================================================
    {
    id: "foam-board",
    name: "Foam Board",
    category: "Large Print",
    type: "contact",
    description: "Rigid lightweight foam board prints for indoor displays, exhibitions, and signage.",
    attributes: [],
    contactMessage:
      "For complete details & quotation, chat with us directly.",
  },

   {
    id: "digital-wall-poster",
    name: "Digital Wall Poster",
    category: "Large Print",
    type: "contact",
    description: "High-definition digital wall posters printed on premium anti-glare media.",
    attributes: [],
    contactMessage:
      "For complete details & quotation, chat with us directly.",
  },
   {
    id: "invitation-cards",
    name: "Invitation Cards",
    category: "Invitation & Photo Frame",
    type: "contact",
    description: "Elegant custom invitation cards for weddings, corporate events, and celebrations.",
    attributes: [],
    contactMessage:
      "For complete details & quotation, chat with us directly.",
  },
  // ============================================================
  // INVITATION & PHOTO FRAME
  // ============================================================

 

  {
    id: "led-clip-on-signage",
    name: "LED Clip-on Signage",
    category: "Invitation & Photo Frame",
    type: "configurable",
    description: "Ultra-slim backlit LED clip-on signage frames with vibrant poster displays.",
    pricing: [
      {
        selections: {"size": "A5 (5.8 x 8.3)", "quantity": "Custom", "frameMaterial": "Black"},
        price: 350,
        priceType: "per-unit",
      },
      {
        selections: {"size": "A5 (5.8 x 8.3)", "quantity": "Custom", "frameMaterial": "Silver"},
        price: 400,
        priceType: "per-unit",
      },
      {
        selections: {"size": "A4 (9 x 12)", "quantity": "Custom", "frameMaterial": "Black"},
        price: 500,
        priceType: "per-unit",
      },
      {
        selections: {"size": "A4 (9 x 12)", "quantity": "Custom", "frameMaterial": "Silver"},
        price: 550,
        priceType: "per-unit",
      },
      {
        selections: {"size": "A3 (12 x 17)", "quantity": "Custom", "frameMaterial": "Black"},
        price: 750,
        priceType: "per-unit",
      },
      {
        selections: {"size": "A3 (12 x 17)", "quantity": "Custom", "frameMaterial": "Silver"},
        price: 850,
        priceType: "per-unit",
      },
      {
        selections: {"size": "A2 (17 x 24)", "quantity": "Custom", "frameMaterial": "Black"},
        price: 1100,
        priceType: "per-unit",
      },
      {
        selections: {"size": "A2 (17 x 24)", "quantity": "Custom", "frameMaterial": "Silver"},
        price: 1200,
        priceType: "per-unit",
      },
      {
        selections: {"size": "A1 (24 x 34)", "quantity": "Custom", "frameMaterial": "Black"},
        price: 1600,
        priceType: "per-unit",
      },
      {
        selections: {"size": "A1 (24 x 34)", "quantity": "Custom", "frameMaterial": "Silver"},
        price: 1750,
        priceType: "per-unit",
      },
      {
        selections: {"size": "A0 (24 x 47)", "quantity": "Custom", "frameMaterial": "Black"},
        price: 2200,
        priceType: "per-unit",
      },
      {
        selections: {"size": "A0 (24 x 47)", "quantity": "Custom", "frameMaterial": "Silver"},
        price: 2400,
        priceType: "per-unit",
      },
    ],
    pricingNote: "Dummy price is per unit because quantity is custom.",

    attributes: [
      {
        name: "Size",
        key: "size",
        type: "select",
        options: [
          "A5 (5.8 x 8.3)",
          "A4 (9 x 12)",
          "A3 (12 x 17)",
          "A2 (17 x 24)",
          "A1 (24 x 34)",
          "A0 (24 x 47)",
        ],
        required: true,
      },
      {
        name: "Quantity",
        key: "quantity",
        type: "text",
        required: true,
        placeholder: "Enter custom quantity",
      },
      {
        name: "Frame Material",
        key: "frameMaterial",
        type: "select",
        options: ["Black", "Silver"],
        required: true,
      },
    ],
  },

  {
    id: "photo-frames",
    name: "Photo Frames",
    category: "Invitation & Photo Frame",
    type: "configurable",
    description: "Premium quality wooden and synthetic photo frames tailored in various sizes.",
    pricing: [
      {
        selections: {"size": "30 x 60", "quantity": "Custom", "frameType": "1 Inch"},
        price: 1200,
        priceType: "per-unit",
      },
      {
        selections: {"size": "30 x 60", "quantity": "Custom", "frameType": "1.5 Inch"},
        price: 1500,
        priceType: "per-unit",
      },
      {
        selections: {"size": "30 x 60", "quantity": "Custom", "frameType": "2 Inch"},
        price: 1800,
        priceType: "per-unit",
      },
      {
        selections: {"size": "30 x 40", "quantity": "Custom", "frameType": "1 Inch"},
        price: 900,
        priceType: "per-unit",
      },
      {
        selections: {"size": "30 x 40", "quantity": "Custom", "frameType": "1.5 Inch"},
        price: 1100,
        priceType: "per-unit",
      },
      {
        selections: {"size": "30 x 40", "quantity": "Custom", "frameType": "2 Inch"},
        price: 1350,
        priceType: "per-unit",
      },
      {
        selections: {"size": "24 x 48", "quantity": "Custom", "frameType": "1 Inch"},
        price: 1100,
        priceType: "per-unit",
      },
      {
        selections: {"size": "24 x 48", "quantity": "Custom", "frameType": "1.5 Inch"},
        price: 1400,
        priceType: "per-unit",
      },
      {
        selections: {"size": "24 x 48", "quantity": "Custom", "frameType": "2 Inch"},
        price: 1650,
        priceType: "per-unit",
      },
      {
        selections: {"size": "24 x 36", "quantity": "Custom", "frameType": "1 Inch"},
        price: 850,
        priceType: "per-unit",
      },
      {
        selections: {"size": "24 x 36", "quantity": "Custom", "frameType": "1.5 Inch"},
        price: 1050,
        priceType: "per-unit",
      },
      {
        selections: {"size": "24 x 36", "quantity": "Custom", "frameType": "2 Inch"},
        price: 1300,
        priceType: "per-unit",
      },
      {
        selections: {"size": "20 x 30", "quantity": "Custom", "frameType": "1 Inch"},
        price: 700,
        priceType: "per-unit",
      },
      {
        selections: {"size": "20 x 30", "quantity": "Custom", "frameType": "1.5 Inch"},
        price: 900,
        priceType: "per-unit",
      },
      {
        selections: {"size": "20 x 30", "quantity": "Custom", "frameType": "2 Inch"},
        price: 1050,
        priceType: "per-unit",
      },
      {
        selections: {"size": "24 x 20", "quantity": "Custom", "frameType": "1 Inch"},
        price: 650,
        priceType: "per-unit",
      },
      {
        selections: {"size": "24 x 20", "quantity": "Custom", "frameType": "1.5 Inch"},
        price: 800,
        priceType: "per-unit",
      },
      {
        selections: {"size": "24 x 20", "quantity": "Custom", "frameType": "2 Inch"},
        price: 1000,
        priceType: "per-unit",
      },
      {
        selections: {"size": "18 x 24", "quantity": "Custom", "frameType": "1 Inch"},
        price: 550,
        priceType: "per-unit",
      },
      {
        selections: {"size": "18 x 24", "quantity": "Custom", "frameType": "1.5 Inch"},
        price: 700,
        priceType: "per-unit",
      },
      {
        selections: {"size": "18 x 24", "quantity": "Custom", "frameType": "2 Inch"},
        price: 800,
        priceType: "per-unit",
      },
      {
        selections: {"size": "16 x 24", "quantity": "Custom", "frameType": "1 Inch"},
        price: 500,
        priceType: "per-unit",
      },
      {
        selections: {"size": "16 x 24", "quantity": "Custom", "frameType": "1.5 Inch"},
        price: 600,
        priceType: "per-unit",
      },
      {
        selections: {"size": "16 x 24", "quantity": "Custom", "frameType": "2 Inch"},
        price: 750,
        priceType: "per-unit",
      },
      {
        selections: {"size": "12 x 24", "quantity": "Custom", "frameType": "1 Inch"},
        price: 450,
        priceType: "per-unit",
      },
      {
        selections: {"size": "12 x 24", "quantity": "Custom", "frameType": "1.5 Inch"},
        price: 550,
        priceType: "per-unit",
      },
      {
        selections: {"size": "12 x 24", "quantity": "Custom", "frameType": "2 Inch"},
        price: 700,
        priceType: "per-unit",
      },
      {
        selections: {"size": "12 x 18", "quantity": "Custom", "frameType": "1 Inch"},
        price: 400,
        priceType: "per-unit",
      },
      {
        selections: {"size": "12 x 18", "quantity": "Custom", "frameType": "1.5 Inch"},
        price: 500,
        priceType: "per-unit",
      },
      {
        selections: {"size": "12 x 18", "quantity": "Custom", "frameType": "2 Inch"},
        price: 600,
        priceType: "per-unit",
      },
      {
        selections: {"size": "12 x 15", "quantity": "Custom", "frameType": "1 Inch"},
        price: 350,
        priceType: "per-unit",
      },
      {
        selections: {"size": "12 x 15", "quantity": "Custom", "frameType": "1.5 Inch"},
        price: 450,
        priceType: "per-unit",
      },
      {
        selections: {"size": "12 x 15", "quantity": "Custom", "frameType": "2 Inch"},
        price: 500,
        priceType: "per-unit",
      },
      {
        selections: {"size": "10 x 15", "quantity": "Custom", "frameType": "1 Inch"},
        price: 300,
        priceType: "per-unit",
      },
      {
        selections: {"size": "10 x 15", "quantity": "Custom", "frameType": "1.5 Inch"},
        price: 400,
        priceType: "per-unit",
      },
      {
        selections: {"size": "10 x 15", "quantity": "Custom", "frameType": "2 Inch"},
        price: 450,
        priceType: "per-unit",
      },
      {
        selections: {"size": "12 x 10", "quantity": "Custom", "frameType": "1 Inch"},
        price: 300,
        priceType: "per-unit",
      },
      {
        selections: {"size": "12 x 10", "quantity": "Custom", "frameType": "1.5 Inch"},
        price: 400,
        priceType: "per-unit",
      },
      {
        selections: {"size": "12 x 10", "quantity": "Custom", "frameType": "2 Inch"},
        price: 450,
        priceType: "per-unit",
      },
      {
        selections: {"size": "12 x 8", "quantity": "Custom", "frameType": "1 Inch"},
        price: 250,
        priceType: "per-unit",
      },
      {
        selections: {"size": "12 x 8", "quantity": "Custom", "frameType": "1.5 Inch"},
        price: 300,
        priceType: "per-unit",
      },
      {
        selections: {"size": "12 x 8", "quantity": "Custom", "frameType": "2 Inch"},
        price: 400,
        priceType: "per-unit",
      },
      {
        selections: {"size": "6 x 8", "quantity": "Custom", "frameType": "1 Inch"},
        price: 200,
        priceType: "per-unit",
      },
      {
        selections: {"size": "6 x 8", "quantity": "Custom", "frameType": "1.5 Inch"},
        price: 200,
        priceType: "per-unit",
      },
      {
        selections: {"size": "6 x 8", "quantity": "Custom", "frameType": "2 Inch"},
        price: 250,
        priceType: "per-unit",
      },
      {
        selections: {"size": "6 x 4", "quantity": "Custom", "frameType": "1 Inch"},
        price: 150,
        priceType: "per-unit",
      },
      {
        selections: {"size": "6 x 4", "quantity": "Custom", "frameType": "1.5 Inch"},
        price: 200,
        priceType: "per-unit",
      },
      {
        selections: {"size": "6 x 4", "quantity": "Custom", "frameType": "2 Inch"},
        price: 200,
        priceType: "per-unit",
      },
    ],
    pricingNote: "Dummy price is per unit because quantity is custom.",

    attributes: [
      {
        name: "Size",
        key: "size",
        type: "select",
        options: [
          "30 x 60",
          "30 x 40",
          "24 x 48",
          "24 x 36",
          "20 x 30",
          "24 x 20",
          "18 x 24",
          "16 x 24",
          "12 x 24",
          "12 x 18",
          "12 x 15",
          "10 x 15",
          "12 x 10",
          "12 x 8",
          "6 x 8",
          "6 x 4",
        ],
        required: true,
      },
      {
        name: "Quantity",
        key: "quantity",
        type: "text",
        required: true,
        placeholder: "Enter custom quantity",
      },
      {
        name: "Frame Type",
        key: "frameType",
        type: "select",
        options: ["1 Inch", "1.5 Inch", "2 Inch"],
        required: true,
      },
    ],
  },

  // ============================================================
  // DESIGNING SERVICES
  // ============================================================

  {
    id: "logo-design",
    name: "Logo Design",
    category: "Designing Services",
    type: "configurable",
    description: "Professional vector logo creation with full brand rights and source files.",
    pricing: [
      {
        selections: {"plan": "Standard (3 Concepts), (3 Revisions)"},
        price: 1999,
      },
      {
        selections: {"plan": "Premium (5 Concepts), (5 Revisions)"},
        price: 3999,
      },
    ],

    attributes: [
      {
        name: "Plan",
        key: "plan",
        type: "select",
        options: [
          "Standard (3 Concepts), (3 Revisions)",
          "Premium (5 Concepts), (5 Revisions)",
        ],
        required: true,
      },
    ],
  },

  // ============================================================
  // SOCIAL MEDIA DESIGN
  // ============================================================

  {
    id: "social-media-posters",
    name: "Social Media Posters",
    category: "Social Media Design",
    type: "contact",
    description: "Eye-catching custom social media post designs tailored for brand marketing.",
    attributes: [],
    contactMessage:
      "For complete details & quotation, chat with us directly.",
  },
];

export const categories = [
  {
    id: "brand-identity",
    name: "Brand Identity",
  },
  {
    id: "marketing-promotion",
    name: "Marketing & Promotion",
  },
  {
    id: "large-print",
    name: "Large Print",
  },
  {
    id: "invitation-photo-frame",
    name: "Invitation & Photo Frame",
  },
  {
    id: "designing-services",
    name: "Designing Services",
  },
  {
    id: "social-media-design",
    name: "Social Media Design",
  },
];

export default products;