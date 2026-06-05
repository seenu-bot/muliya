"use client";

import React, { createContext, useContext, useState, useCallback, useEffect } from "react";
import { toast } from "sonner";
import { api } from "@/lib/api";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  collection: string;
  collectionSlug: string;
  metal?: string;
  weight?: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_KEY = "muliya_cart";

function loadLocalCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  try { return JSON.parse(localStorage.getItem(CART_KEY) ?? "[]"); } catch { return []; }
}

function saveLocalCart(items: CartItem[]) {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
}

function getUserId(): string | null {
  if (typeof window === "undefined") return null;
  try {
    const u = localStorage.getItem("muliya_user");
    return u ? JSON.parse(u).id : null;
  } catch { return null; }
}

async function syncCartItemToApi(productId: string, quantity: number) {
  const userId = getUserId();
  if (!userId) return;
  try {
    await api.post("/addcart/createCartItem", { userId, productId, quantity }, true);
  } catch {
    // silently fail — local cart is still accurate
  }
}

async function removeCartItemFromApi(productId: string) {
  const userId = getUserId();
  if (!userId) return;
  try {
    // Remove by finding the cart item for this user+product
    await api.delete(`/addcart/deleteCartItem/${productId}`, true);
  } catch {
    // silently fail
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    setItems(loadLocalCart());
  }, []);

  // Persist to localStorage whenever cart changes
  useEffect(() => {
    saveLocalCart(items);
  }, [items]);

  const addToCart = useCallback((item: Omit<CartItem, "quantity">) => {
    setItems((current) => {
      const existing = current.find((i) => i.id === item.id);
      let next: CartItem[];
      if (existing) {
        next = current.map((i) => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
        toast.success(`Updated quantity for ${item.name} in cart`);
      } else {
        next = [...current, { ...item, quantity: 1 }];
        toast.success(`${item.name} added to cart!`);
      }
      syncCartItemToApi(item.id, existing ? existing.quantity + 1 : 1);
      return next;
    });
  }, []);

  const removeFromCart = useCallback((id: string) => {
    setItems((current) => {
      const item = current.find((i) => i.id === id);
      if (item) toast.info(`${item.name} removed from cart`);
      removeCartItemFromApi(id);
      return current.filter((i) => i.id !== id);
    });
  }, []);

  const updateQuantity = useCallback((id: string, quantity: number) => {
    if (quantity < 1) { removeFromCart(id); return; }
    setItems((current) => {
      syncCartItemToApi(id, quantity);
      return current.map((i) => i.id === id ? { ...i, quantity } : i);
    });
  }, [removeFromCart]);

  const clearCart = useCallback(() => {
    setItems([]);
    toast.info("Cart cleared");
  }, []);

  const totalItems = items.reduce((s, i) => s + i.quantity, 0);
  const totalPrice = items.reduce((s, i) => s + i.price * i.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) throw new Error("useCart must be used within a CartProvider");
  return context;
}
