import React from "react";
import { Product } from "../../data/products";
import { CardType1MultiOption } from "./CardType1MultiOption";
import { CardType2SizeQuantityOptions } from "./CardType2SizeQuantityOptions";
import { CardType3SizeCustomQty } from "./CardType3SizeCustomQty";
import { CardType4CustomDimension } from "./CardType4CustomDimension";
import { CardType5SimpleOptions } from "./CardType5SimpleOptions";
import { CardType6ContactQuote } from "./CardType6ContactQuote";

interface ProductCardProps {
  product: Product;
  onSelectProduct?: (product: Product, selections: Record<string, any>, price: number | null) => void;
  onContactProduct?: (product: Product) => void;
}

export function getProductCardType(product: Product): 1 | 2 | 3 | 4 | 5 | 6 {
  if (
    product.type === "contact" ||
    ["foam-board", "digital-wall-poster", "invitation-cards", "social-media-posters"].includes(product.id)
  ) {
    return 6;
  }

  if (product.id === "flex-banners") {
    return 4;
  }

  if (["led-clip-on-signage", "photo-frames"].includes(product.id)) {
    return 3;
  }

  if (["business-cards", "bill-books"].includes(product.id)) {
    return 1;
  }

  if (["roll-up-standee", "logo-design"].includes(product.id)) {
    return 5;
  }

  return 2;
}

export function ProductCard({ product, onSelectProduct, onContactProduct }: ProductCardProps) {
  const cardType = getProductCardType(product);

  switch (cardType) {
    case 1:
      return <CardType1MultiOption product={product} onSelectProduct={onSelectProduct} />;
    case 2:
      return <CardType2SizeQuantityOptions product={product} onSelectProduct={onSelectProduct} />;
    case 3:
      return <CardType3SizeCustomQty product={product} onSelectProduct={onSelectProduct} />;
    case 4:
      return <CardType4CustomDimension product={product} onSelectProduct={onSelectProduct} />;
    case 5:
      return <CardType5SimpleOptions product={product} onSelectProduct={onSelectProduct} />;
    case 6:
      return <CardType6ContactQuote product={product} onContactProduct={onContactProduct} />;
    default:
      return <CardType2SizeQuantityOptions product={product} onSelectProduct={onSelectProduct} />;
  }
}

export default ProductCard;
