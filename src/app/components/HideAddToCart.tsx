"use client";

import { useEffect } from "react";

const ADD_TO_CART_TEXT = "add to cart";

function hideAddToCartElements() {
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

    if (
      title.includes(ADD_TO_CART_TEXT) ||
      ariaLabel.includes(ADD_TO_CART_TEXT) ||
      text.includes(ADD_TO_CART_TEXT)
    ) {
      element.style.display = "none";
    }
  });
}

export function HideAddToCart() {
  useEffect(() => {
    hideAddToCartElements();

    const observer = new MutationObserver(() => {
      hideAddToCartElements();
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
