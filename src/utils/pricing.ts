import { Product, ProductPrice } from "../data/products";

export interface PricingResult {
  price: number | null;
  priceType?: "fixed" | "starting" | "per-unit" | "custom-area" | "quote";
  formattedPrice: string;
  unitRate?: number;
  totalAreaSqFt?: number;
}

/**
 * Calculates dynamic price for a given product and user selection configuration.
 */
export function calculateProductPrice(
  product: Product,
  selections: Record<string, any>
): PricingResult {
  // If product is contact-only, return quote status
  if (product.type === "contact" || !product.pricing || product.pricing.length === 0) {
    return {
      price: null,
      priceType: "quote",
      formattedPrice: "Get Quote",
    };
  }

  // Special Case 1: Custom Dimension (Flex Banners)
  if (product.id === "flex-banners") {
    const flexType = selections.type || "Normal Flex";
    const matchedPricing = product.pricing.find(
      (p) => p.selections.type === flexType
    );
    const sqFtRate = matchedPricing?.price || 40;

    const widthFt = parseFloat(selections.widthFt) || 0;
    const heightFt = parseFloat(selections.heightFt) || 0;
    const areaSqFt = widthFt * heightFt;

    if (areaSqFt > 0) {
      const totalPrice = Math.round(areaSqFt * sqFtRate);
      return {
        price: totalPrice,
        priceType: "custom-area",
        formattedPrice: `₹${totalPrice.toLocaleString("en-IN")}`,
        unitRate: sqFtRate,
        totalAreaSqFt: areaSqFt,
      };
    } else {
      return {
        price: sqFtRate,
        priceType: "per-unit",
        formattedPrice: `₹${sqFtRate}/sq.ft`,
        unitRate: sqFtRate,
        totalAreaSqFt: 0,
      };
    }
  }

  // Special Case 2: Per-Unit Custom Quantity (LED Signage, Photo Frames, Roll-up Standee)
  if (product.id === "led-clip-on-signage" || product.id === "photo-frames" || product.id === "roll-up-standee") {
    const matchedPricing = product.pricing.find((p) => {
      return Object.entries(p.selections).every(([key, val]) => {
        if (key === "quantity") return true; // Quantity matched separately
        return selections[key] === val;
      });
    });

    const unitPrice = matchedPricing?.price || product.pricing[0]?.price || 0;
    const qty = parseInt(selections.quantity) || 1;
    const totalPrice = Math.round(unitPrice * qty);

    return {
      price: totalPrice,
      priceType: "per-unit",
      formattedPrice: `₹${totalPrice.toLocaleString("en-IN")}`,
      unitRate: unitPrice,
    };
  }

  // Standard Configurable Lookup (Business Cards, Bill Books, Certificates, Letterhead, Flyers, Brochures, Sticker)
  const exactMatch = product.pricing.find((p) => {
    return Object.entries(p.selections).every(([key, val]) => {
      // Ignore if key is not selected
      if (!(key in selections)) return true;
      return selections[key] === val;
    });
  });

  if (exactMatch && exactMatch.price !== undefined) {
    let finalPrice = exactMatch.price;

    // Check if custom quantity multiplier is needed
    if (selections.quantity && selections.quantity === "Custom" && selections.customQuantity) {
      const customQty = parseInt(selections.customQuantity) || 1;
      const baseQtyOption = product.attributes.find((a) => a.key === "quantity")?.options?.[0];
      const baseQtyNum = parseInt(baseQtyOption || "100") || 100;
      const perUnitPrice = finalPrice / baseQtyNum;
      finalPrice = Math.round(perUnitPrice * customQty);
    } else if (exactMatch.priceType === "per-unit" && selections.quantity) {
      const qtyNum = parseInt(selections.quantity) || 1;
      finalPrice = Math.round(exactMatch.price * qtyNum);
    }

    return {
      price: finalPrice,
      priceType: exactMatch.priceType || "fixed",
      formattedPrice: `₹${finalPrice.toLocaleString("en-IN")}`,
    };
  }

  // Fallback: Partial match or default first pricing option
  const fallback = product.pricing[0];
  const fallbackPrice = fallback?.price || 0;

  return {
    price: fallbackPrice,
    priceType: fallback?.priceType || "starting",
    formattedPrice: fallbackPrice ? `₹${fallbackPrice.toLocaleString("en-IN")}` : "Contact for Price",
  };
}

/**
 * Returns default selection map for a product based on its attributes
 */
export function getDefaultSelections(product: Product): Record<string, any> {
  const defaults: Record<string, any> = {};

  if (product.id === "flex-banners") {
    defaults.type = "Normal Flex";
    defaults.widthFt = "4";
    defaults.heightFt = "2";
    return defaults;
  }

  if (product.id === "led-clip-on-signage" || product.id === "photo-frames") {
    defaults.quantity = "1";
  }

  if (product.id === "roll-up-standee") {
    defaults.quantity = 1;
  }

  product.attributes?.forEach((attr) => {
    if (attr.options && attr.options.length > 0) {
      defaults[attr.key] = attr.options[0];
    } else if (attr.type === "number") {
      defaults[attr.key] = 1;
    } else if (attr.key === "quantity" && attr.type === "text") {
      defaults[attr.key] = "1";
    }
  });

  return defaults;
}
