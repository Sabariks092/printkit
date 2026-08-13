import type Lenis from "lenis";

const HEADER_OFFSET = 90;

let globalLenis: Lenis | null = null;

export function setGlobalLenis(instance: Lenis | null) {
  globalLenis = instance;
}

/**
 * Butter-smooth custom scroll animation.
 * Uses Lenis instance when available, with cubic ease-in-out rAF fallback.
 */
export function smoothScrollTo(targetY: number, duration: number = 600) {
  if (globalLenis) {
    globalLenis.scrollTo(targetY, { duration: duration / 1000 });
    return;
  }

  const startY = window.scrollY;
  const distance = targetY - startY;

  if (Math.abs(distance) < 5) {
    window.scrollTo(0, Math.max(0, targetY));
    return;
  }

  const startTime = performance.now();

  function step(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    const ease =
      progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    window.scrollTo(0, Math.max(0, startY + distance * ease));

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

/**
 * Scrolls smoothly to an element by ID with header offset clearance.
 */
export function scrollToElementId(elementId: string, duration: number = 600) {
  const el = document.getElementById(elementId);
  if (!el) return;

  if (globalLenis) {
    globalLenis.scrollTo(el, { offset: -HEADER_OFFSET, duration: duration / 1000 });
    return;
  }

  const targetTop = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  smoothScrollTo(targetTop, duration);
}

/**
 * Scrolls smoothly to a specific product card by id.
 */
export function scrollToProductCard(productId: string) {
  const cardEl =
    document.getElementById(`product-card-${productId}`) ||
    document.getElementById(`product-${productId}`);
  const targetEl = cardEl || document.getElementById("products");

  if (!targetEl) return;

  if (globalLenis) {
    globalLenis.scrollTo(targetEl, { offset: -HEADER_OFFSET, duration: 0.6 });
    return;
  }

  const targetTop =
    targetEl.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;

  smoothScrollTo(targetTop, 600);
}