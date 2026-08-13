export function scrollToProductCard(productId: string) {
  // 1. Dispatch custom event so ProductGrid resets category filters and search queries
  window.dispatchEvent(new CustomEvent("show-all-products", { detail: { productId } }));

  // Helper to attempt smooth scrolling and card zoom animation
  const attemptScrollAndAnimate = (): boolean => {
    const cardEl = document.getElementById(`product-card-${productId}`);
    if (cardEl) {
      // Offset calculation taking sticky navbar (80px) into account with comfortable margin (110px)
      const rect = cardEl.getBoundingClientRect();
      const offsetTop = rect.top + window.pageYOffset - 110;

      window.scrollTo({
        top: Math.max(0, offsetTop),
        behavior: "smooth",
      });

      // Restart Zoom-In / Zoom-Out Glitter Animation
      cardEl.classList.remove("animate-card-glitter");
      void cardEl.offsetWidth; // Force DOM reflow
      cardEl.classList.add("animate-card-glitter");

      setTimeout(() => {
        cardEl.classList.remove("animate-card-glitter");
      }, 1500);

      return true;
    }
    return false;
  };

  // Try scrolling immediately
  if (!attemptScrollAndAnimate()) {
    // Retry after 100ms & 250ms for React re-renders if category filter was active
    setTimeout(() => {
      if (!attemptScrollAndAnimate()) {
        setTimeout(() => {
          if (!attemptScrollAndAnimate()) {
            const productsSection = document.getElementById("products");
            if (productsSection) {
              const rect = productsSection.getBoundingClientRect();
              window.scrollTo({
                top: rect.top + window.pageYOffset - 90,
                behavior: "smooth",
              });
            }
          }
        }, 150);
      }
    }, 100);
  }
}
