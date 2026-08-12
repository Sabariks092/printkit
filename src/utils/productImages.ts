export const PRODUCT_IMAGES: Record<string, string> = {
  "business-cards": "/product-png/business-cards.png",
  "certificates": "/product-png/certificates.png",
  "letterhead": "/product-png/letterhead.png",
  "bill-books": "/product-png/bill-books.png",
  "flyers-pamphlets": "/product-png/flyers-pamphlets.png",
  "flyers": "/product-png/flyers-pamphlets.png",
  "brochures": "/product-png/brochures.png",
  "sticker-label": "/product-png/sticker-label.png",
  "roll-up-standee": "/product-png/roll-up-standee.png",
  "flex-banners": "/product-png/flex-banners.png",
  "sunpack-pole-flex": "/product-png/sunpack-pole-flex.png",
  "sunpack": "/product-png/sunpack-pole-flex.png",
  "foam-board": "/product-png/foam-board.png",
  "digital-wall-poster": "/product-png/digital-wall-poster.png",
  "invitation-cards": "/product-png/invitation-cards.png",
  "led-clip-on-signage": "/product-png/foam-board.png",
  "photo-frames": "/product-png/photo-frames.png",
  "logo-design": "/product-png/logo-design.png",
  "social-media-posters": "/product-png/social-media-posters.png",
};

export function getProductImage(productId: string): string {
  return (
    PRODUCT_IMAGES[productId] ||
    `/product-png/${productId}.png`
  );
}
