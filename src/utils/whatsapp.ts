/**
 * Opens WhatsApp with plain-text prefilled order details
 */
export function openWhatsAppOrder(
  productName: string,
  category: string,
  selections: Record<string, any>,
  formattedPrice: string
) {
  const phoneNumber = "918778377449";

  // Clean selections to ignore temporary keys if any
  const specLines = Object.entries(selections)
    .filter(([_, val]) => val !== undefined && val !== null && val !== "")
    .map(([key, val]) => `• ${formatKey(key)}: ${val}`)
    .join("\n");

  const message = `Hello PrintKit! 👋\n\nI would like to place an order for:\n\n*Product:* ${productName}\n*Category:* ${category}\n\n*Selected Specifications:*\n${specLines || "• Custom Specification Consultation"}\n\n*Total Price:* ${formattedPrice}\n\nPlease confirm order processing. Thank you!`;

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

function formatKey(key: string): string {
  switch (key) {
    case "printingSide": return "Printing Side";
    case "cornerCut": return "Corner Cut";
    case "finishingType": return "Finishing Type";
    case "colorType": return "Color Type";
    case "copyType": return "Copy Type";
    case "frameType": return "Frame Type";
    case "frameMaterial": return "Frame Material";
    case "widthFt": return "Width (ft)";
    case "heightFt": return "Height (ft)";
    default: return key.charAt(0).toUpperCase() + key.slice(1);
  }
}
