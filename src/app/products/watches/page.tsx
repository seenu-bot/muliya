"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, ShoppingCart, Heart } from "lucide-react";
import { useCart } from "@/app/context/CartContext";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { ImageWithFallbackNext } from "@/app/components/ImageWithFallbackNext";

const formatINR = (value: number) => new Intl.NumberFormat("en-IN").format(value);

const BANNER_SRC = "/category/Gemini_Generated_Image_uacnh2uacnh2uacn (11).png";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  description: string;
  strap?: string;
  movement?: string;
}

const watches: Product[] = [
  {
    id: "watch-001",
    name: "Classic Gold-Tone Watch",
    price: 35000,
    originalPrice: 42000,
    image: "/images/Gemini_Generated_Image_hhlctbhhlctbhhlc.png",
    category: "Watches",
    description: "Elegant gold-tone watch with a minimal dial for everyday wear.",
    strap: "Metal",
    movement: "Quartz",
  },
  {
    id: "watch-002",
    name: "Premium Stainless Steel Watch",
    price: 48000,
    originalPrice: 56000,
    image: "/images/Gemini_Generated_Image_hhlctbhhlctbhhlc.png",
    category: "Watches",
    description: "Modern stainless-steel design with a clean, premium finish.",
    strap: "Metal",
    movement: "Quartz",
  },
  {
    id: "watch-003",
    name: "Luxury Chronograph Watch",
    price: 65000,
    originalPrice: 75000,
    image: "/images/Gemini_Generated_Image_hhlctbhhlctbhhlc.png",
    category: "Watches",
    description: "Chronograph-style dial with a bold, luxurious look.",
    strap: "Leather",
    movement: "Quartz",
  },
  {
    id: "watch-004",
    name: "Rose Gold-Tone Watch",
    price: 42000,
    originalPrice: 50000,
    image: "/images/Gemini_Generated_Image_hhlctbhhlctbhhlc.png",
    category: "Watches",
    description: "Rose gold-tone elegance designed for both casual and formal outfits.",
    strap: "Metal",
    movement: "Quartz",
  },
];

export default function WatchesPage() {
  const { addToCart } = useCart();
  const router = useRouter();

  const handleAddToCart = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.image,
      collection: product.category,
      collectionSlug: "watches",
    });
    toast.success(`${product.name} added to cart!`);
  };

  const handleProductClick = (productId: string) => {
    router.push(`/products/watches/${productId}`);
  };

  return (
    <main className="min-h-screen bg-white">
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#E92247] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">Watches</span>
          </nav>
        </div>
      </div>

      <div className="relative bg-gradient-to-r from-amber-50 to-yellow-50 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallbackNext src={BANNER_SRC} alt="Watches banner" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4 drop-shadow">Watches</h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto drop-shadow">Explore our curated selection of premium watches designed to complement your style.</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {watches.map((watch) => (
            <div
              key={watch.id}
              onClick={() => handleProductClick(watch.id)}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
            >
              <div className="relative aspect-square overflow-hidden bg-gray-100 flex-shrink-0">
                <ImageWithFallbackNext
                  src={watch.image}
                  alt={watch.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <button
                    onClick={(e) => handleAddToCart(watch, e)}
                    className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-[#E92247] hover:bg-[#E92247] hover:text-white transition-colors"
                    title="Add to Cart"
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                  <button
                    onClick={(e) => e.stopPropagation()}
                    className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-[#E92247] transition-colors"
                    title="Add to Wishlist"
                  >
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-[#E92247] text-white px-3 py-1 rounded-full text-xs font-medium">{watch.category}</span>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-serif text-lg text-gray-900 mb-2 group-hover:text-[#E92247] transition-colors">{watch.name}</h3>
                <p className="text-gray-500 text-sm mb-3 line-clamp-2">{watch.description}</p>
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                  <span>{watch.strap}</span>
                  <span>•</span>
                  <span>{watch.movement}</span>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl font-bold text-[#E92247]">₹{formatINR(watch.price)}</span>
                  {watch.originalPrice && <span className="text-sm text-gray-400 line-through">₹{formatINR(watch.originalPrice)}</span>}
                </div>

                <button
                  onClick={(e) => handleAddToCart(watch, e)}
                  className="w-full flex items-center justify-center gap-2 bg-white text-gray-900 border border-gray-200 py-3 rounded-xl hover:bg-[#E92247] hover:text-white hover:border-[#E92247] transition-colors font-medium mt-auto"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
