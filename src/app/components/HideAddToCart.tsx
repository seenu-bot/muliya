"use client";

import { useEffect } from "react";

/** Phrases matched case-insensitively on title, aria-label, or textContent. */
const HIDDEN_CTA_PHRASES = ["add to cart", "buy now"] as const;

function hideCommerceCtaElements() {
  const clickableSelectors = [
    "button",
    "[role='button']",
    "a",
    "input[type='button']",
    "input[type='submit']",
  ];

  const elements = document.querySelectorAll<HTMLElement>(
    clickableSelectors.join(","),
  );

  elements.forEach((element) => {
    const title = (element.getAttribute("title") || "").trim().toLowerCase();
    const ariaLabel = (element.getAttribute("aria-label") || "")
      .trim()
      .toLowerCase();
    const text = (element.textContent || "").trim().toLowerCase();

    const matches = HIDDEN_CTA_PHRASES.some(
      (phrase) =>
        title.includes(phrase) ||
        ariaLabel.includes(phrase) ||
        text.includes(phrase),
    );

    if (matches) {
      element.style.display = "none";
    }
  });
}

/** Globally hides Add to Cart and Buy Now controls without editing each page. */
export function HideAddToCart() {
  useEffect(() => {
    hideCommerceCtaElements();

    const observer = new MutationObserver(() => {
      hideCommerceCtaElements();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["title", "aria-label"],
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
