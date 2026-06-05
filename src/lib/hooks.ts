"use client";

import { useState, useEffect } from "react";
import { api, getImageUrl } from "./api";

// ---------- Types ----------

export interface ApiBanner {
  _id: string;
  name: string;
  description: string;
  imageUrl: string | null;
  banner_img_mob: string | null;
  link_brand: string;
  isActive: boolean;
}

export interface ApiCollection {
  _id: string;
  name: string;
  slug: string;
  description: string;
  imageUrl: string | null;
  banner_img: string[] | null;
  banner_mob_img: string[] | null;
  isActive: boolean;
}

export interface ApiCategory {
  _id: string;
  name: string;
  description: string;
  imageUrl: string | null;
  category_img_desktop: string | null;
  category_img_mobile: string | null;
  isActive: boolean;
}

export interface ApiProduct {
  _id: string;
  name: string;
  description: string;
  amount: number;
  offeramount: number;
  images: string[];
  color: string;
  weight: string;
  dimensions: string;
  sku: string;
  availability: string;
  qty: number;
  isActive: boolean;
  category: string;
  category_id: string;
  brand_id: string;
  lang: string;
  key_word: string;
}

export interface ApiBlog {
  _id: string;
  name: string;
  description: string;
  imageUrl: string | null;
  createdAt: string;
}

export interface ApiGoldRate {
  _id: string;
  rate_22k: number;
  rate_24k: number;
  rate_18k: number;
  createdAt: string;
}

// ---------- Generic fetch hook ----------

function useFetch<T>(
  fetcher: () => Promise<T>,
  deps: unknown[] = []
): { data: T | null; loading: boolean; error: string | null } {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);
    fetcher()
      .then((d) => { if (!cancelled) { setData(d); setLoading(false); } })
      .catch((e: unknown) => {
        if (!cancelled) {
          setError(e instanceof Error ? e.message : "Failed to load");
          setLoading(false);
        }
      });
    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return { data, loading, error };
}

// ---------- Banners ----------

export function useBanners() {
  return useFetch<ApiBanner[]>(async () => {
    const res = await api.get<{ success: boolean; banners: ApiBanner[] }>("/header/getbannerlist");
    return (res.banners || []).filter((b) => b.isActive !== false);
  });
}

// ---------- Collections (Brands) ----------

export function useCollections() {
  return useFetch<ApiCollection[]>(async () => {
    const res = await api.get<{ success: boolean; brands: ApiCollection[] }>("/brand/allbrand");
    const brands = res.brands || [];
    return brands
      .filter((b) => b.isActive !== false)
      .map((b) => ({
        ...b,
        slug: b.name.toLowerCase().replace(/\s+/g, "-"),
      }));
  });
}

export function useCollection(slug: string) {
  return useFetch<ApiCollection | null>(async () => {
    const res = await api.get<{ success: boolean; brands: ApiCollection[] }>("/brand/allbrand");
    const brands = res.brands || [];
    return (
      brands.find(
        (b) => b.name.toLowerCase().replace(/\s+/g, "-") === slug.toLowerCase()
      ) ?? null
    );
  }, [slug]);
}

// ---------- Products ----------

export function useProducts(brandId?: string) {
  return useFetch<ApiProduct[]>(async () => {
    const res = await api.get<{ success: boolean; products: ApiProduct[] }>(
      "/product/allProduct?lang=1"
    );
    const products = res.products || [];
    if (brandId) return products.filter((p) => p.brand_id === brandId);
    return products;
  }, [brandId]);
}

export function useProduct(productId: string) {
  return useFetch<ApiProduct | null>(async () => {
    if (!productId) return null;
    const res = await api.get<{ success: boolean; Products: ApiProduct }>(
      `/product/Product/${productId}`
    );
    return res.Products ?? null;
  }, [productId]);
}

// ---------- Categories ----------

export function useCategories() {
  return useFetch<ApiCategory[]>(async () => {
    const res = await api.get<{ success: boolean; categories: ApiCategory[] }>(
      "/category/categories"
    );
    return (res.categories || []).filter((c) => c.isActive !== false);
  });
}

// ---------- Blogs ----------

export function useBlogs() {
  return useFetch<ApiBlog[]>(async () => {
    const res = await api.get<{ success: boolean; blogs: ApiBlog[] }>("/blog/allblogs");
    return res.blogs || [];
  });
}

// ---------- Gold Rate ----------

export function useGoldRate() {
  return useFetch<ApiGoldRate | null>(async () => {
    const res = await api.get<{ success: boolean; goldRates: ApiGoldRate[] }>(
      "/goldrate/getGoldRates"
    );
    const rates = res.goldRates || [];
    return rates.length > 0 ? rates[rates.length - 1] : null;
  });
}

// ---------- Helpers ----------

export function formatApiPrice(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function getProductImage(product: ApiProduct): string {
  return getImageUrl(product.images);
}

export function getCollectionImage(collection: ApiCollection): string {
  return getImageUrl(collection.banner_img ?? collection.imageUrl);
}

export function getCollectionThumbnail(collection: ApiCollection): string {
  const raw = collection.imageUrl ?? (collection.banner_img && collection.banner_img[0]);
  return getImageUrl(raw);
}
