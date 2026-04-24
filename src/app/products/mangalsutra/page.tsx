"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, ShoppingCart, Heart } from "lucide-react";
import { useCart } from "@/app/context/CartContext";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { ImageWithFallbackNext } from "@/app/components/ImageWithFallbackNext";
import { ProductFilter } from "@/app/components/ProductFilter";

const formatINR = (value: number) => new Intl.NumberFormat("en-IN").format(value);

const BANNER_SRC = "/category/Gemini_Generated_Image_uacnh2uacnh2uacn (6).png";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  description: string;
  weight?: string;
  purity?: string;
}

const mangalsutras: Product[] = [
  {
    id: "mangalsutra-001",
    name: "Traditional Black Bead Mangalsutra",
    price: 45000,
    originalPrice: 52000,
    image: "/images/gold/Gold%20Mangalsutra/Gold%20Mangalsutra/08%20BO%20SHORT%20KANTI%20MJ-%207634115623%20.png",
    category: "Gold Mangalsutras",
    description: "Classic mangalsutra with traditional black beads and gold pendant",
    weight: "8.5 grams",
    purity: "22K (916)"
  },
  {
    id: "mangalsutra-002",
    name: "Diamond Vati Mangalsutra",
    price: 95000,
    originalPrice: 110000,
    image: "/images/diamond/Mangalsutra.png",
    category: "Diamond Mangalsutras",
    description: "Elegant vati design mangalsutra with diamond accents",
    weight: "12.2 grams",
    purity: "18K"
  },
  {
    id: "mangalsutra-003",
    name: "South Indian Style Mangalsutra",
    price: 65000,
    originalPrice: 75000,
    image: "/images/gold/Gold%20Mangalsutra/Gold%20Mangalsutra/AMULIYA%20KANTI%20MJ-%20125820737.jpg",
    category: "Gold Mangalsutras",
    description: "Traditional South Indian thali design mangalsutra",
    weight: "15.8 grams",
    purity: "22K (916)"
  },
  {
    id: "mangalsutra-004",
    name: "Ruby Stone Mangalsutra",
    price: 55000,
    originalPrice: 64000,
    image: "/images/gold/Gold%20Mangalsutra/Gold%20Mangalsutra/Kanti%20MJ-%207234012692.jpg",
    category: "Gold Mangalsutras",
    description: "Beautiful mangalsutra with ruby stone pendant",
    weight: "10.5 grams",
    purity: "22K (916)"
  },
  {
    id: "mangalsutra-005",
    name: "Modern Chain Mangalsutra",
    price: 35000,
    originalPrice: 42000,
    image: "/images/gold/Gold%20Mangalsutra/Gold%20Mangalsutra/Kanti%20MJ-%207282071089.jpg",
    category: "Gold Mangalsutras",
    description: "Contemporary chain style mangalsutra with minimal pendant",
    weight: "6.8 grams",
    purity: "22K (916)"
  },
  {
    id: "mangalsutra-006",
    name: "Long Black Bead Mangalsutra",
    price: 52000,
    originalPrice: 60000,
    image: "/images/gold/Gold%20Mangalsutra/Gold%20Mangalsutra/Kanti%20MJ-%207282351320.jpg",
    category: "Gold Mangalsutras",
    description: "Traditional long mangalsutra with gold balls",
    weight: "11.5 grams",
    purity: "22K (916)"
  },
  {
    id: "mangalsutra-007",
    name: "Temple Design Mangalsutra",
    price: 75000,
    originalPrice: 88000,
    image: "/images/gold/Gold%20Mangalsutra/Gold%20Mangalsutra/08%20BO%20SHORT%20KANTI%20MJ-%207634115623%20.png",
    category: "Gold Mangalsutras",
    description: "Divine temple design mangalsutra with deity motif",
    weight: "14.2 grams",
    purity: "22K (916)"
  },
  {
    id: "mangalsutra-008",
    name: "Pearl Drop Mangalsutra",
    price: 48000,
    originalPrice: 56000,
    image: "/images/gold/Gold%20Mangalsutra/Gold%20Mangalsutra/AMULIYA%20KANTI%20MJ-%20125820737.jpg",
    category: "Gold Mangalsutras",
    description: "Elegant mangalsutra with pearl drop pendants",
    weight: "9.8 grams",
    purity: "22K (916)"
  },
  {
    id: "mangalsutra-009",
    name: "Emerald Pendant Mangalsutra",
    price: 58000,
    originalPrice: 68000,
    image: "/images/gold/Gold%20Mangalsutra/Gold%20Mangalsutra/Kanti%20MJ-%207234012692.jpg",
    category: "Gold Mangalsutras",
    description: "Beautiful mangalsutra with emerald stone pendant",
    weight: "10.8 grams",
    purity: "22K (916)"
  },
  {
    id: "mangalsutra-010",
    name: "Antique Finish Mangalsutra",
    price: 62000,
    originalPrice: 72000,
    image: "/images/gold/Gold%20Mangalsutra/Gold%20Mangalsutra/Kanti%20MJ-%207282071089.jpg",
    category: "Gold Mangalsutras",
    description: "Vintage antique finish mangalsutra with traditional design",
    weight: "13.5 grams",
    purity: "22K (916)"
  }
];

export default function MangalsutraPage() {
  const { addToCart } = useCart();
  const router = useRouter();
  const [filteredMangalsutras, setFilteredMangalsutras] = useState(mangalsutras);
  const [sortOption, setSortOption] = useState("latest");

  const handleAddToCart = (product: Product, e?: React.MouseEvent) => {
    e?.stopPropagation();
    addToCart({ id: product.id, name: product.name, price: product.price, originalPrice: product.originalPrice, image: product.image, collection: product.category, collectionSlug: "mangalsutra" });
    toast.success(`${product.name} added to cart!`);
  };

  const handleBuyNow = (product: Product, e?: React.MouseEvent) => {
    e?.stopPropagation();
    addToCart({ id: product.id, name: product.name, price: product.price, originalPrice: product.originalPrice, image: product.image, collection: product.category, collectionSlug: "mangalsutra" });
    toast.success(`${product.name} added to cart! Redirecting to checkout...`);
    setTimeout(() => {
      router.push("/checkout");
    }, 1000);
  };

  const handleProductClick = (productId: string) => {
    router.push(`/products/mangalsutra/${productId}`);
  };

  const handleSortChange = (sort: string) => {
    setSortOption(sort);
    let sorted = [...mangalsutras];
    switch (sort) {
      case "price-asc":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "discount":
        sorted.sort((a, b) => {
          const discountA = a.originalPrice ? (a.originalPrice - a.price) / a.originalPrice : 0;
          const discountB = b.originalPrice ? (b.originalPrice - b.price) / b.originalPrice : 0;
          return discountB - discountA;
        });
        break;
      default:
        break;
    }
    setFilteredMangalsutras(sorted);
  };

  const handlePriceRangeChange = (range: string) => {
    const [min, max] = range.split("-").map(v => v === "+" ? Infinity : parseInt(v.replace("+", "")));
    const filtered = mangalsutras.filter(mangalsutra => {
      const price = mangalsutra.price;
      if (max === Infinity) return price >= min;
      return price >= min && price <= max;
    });
    setFilteredMangalsutras(filtered);
  };

  const handleMaterialChange = (material: string) => {
    const filtered = mangalsutras.filter(mangalsutra => 
      mangalsutra.category.toLowerCase().includes(material)
    );
    setFilteredMangalsutras(filtered);
  };

  const handleWeightChange = (weight: string) => {
    const [min, max] = weight.split("-").map(v => v === "+" ? Infinity : parseFloat(v));
    const filtered = mangalsutras.filter(mangalsutra => {
      if (!mangalsutra.weight) return false;
      const weightNum = parseFloat(mangalsutra.weight.replace(/[^0-9.]/g, ""));
      if (max === Infinity) return weightNum >= min;
      return weightNum >= min && weightNum <= max;
    });
    setFilteredMangalsutras(filtered);
  };

  const handleDiscountChange = (discount: string) => {
    const filtered = mangalsutras.filter(mangalsutra => mangalsutra.originalPrice !== undefined);
    setFilteredMangalsutras(filtered);
  };

  const handleClearFilters = () => {
    setFilteredMangalsutras(mangalsutras);
    setSortOption("latest");
  };

  return (
    <main className="min-h-screen bg-white">
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#E92247] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/products/mangalsutra" className="hover:text-[#E92247] transition-colors">Gold</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">Mangalsutras</span>
          </nav>
        </div>
      </div>

      <div className="relative bg-gradient-to-r from-amber-50 to-yellow-50 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallbackNext src={BANNER_SRC} alt="Mangalsutras banner" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4 drop-shadow">Mangalsutras</h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto drop-shadow">Sacred symbols of marriage. Discover our collection of traditional and contemporary mangalsutras crafted with devotion.</p>
          </div>
        </div>
      </div>

      {/* Products Grid with Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex gap-8">
          {/* Sidebar - Desktop */}
          <ProductFilter
            onSortChange={handleSortChange}
            onPriceRangeChange={handlePriceRangeChange}
            onMaterialChange={handleMaterialChange}
            onWeightChange={handleWeightChange}
            onDiscountChange={handleDiscountChange}
            onClearFilters={handleClearFilters}
          />
          
          {/* Products */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-serif text-gray-900">
                Showing {filteredMangalsutras.length} items
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMangalsutras.map((mangalsutra) => (
            <div key={mangalsutra.id} onClick={() => handleProductClick(mangalsutra.id)} className="group bg-white overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer">
              <div className="relative aspect-square overflow-hidden bg-gray-100 flex-shrink-0">
                <ImageWithFallbackNext src={mangalsutra.image} alt={mangalsutra.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <button onClick={(e) => handleAddToCart(mangalsutra, e)} className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-[#E92247] hover:bg-[#E92247] hover:text-white transition-colors" title="Add to Cart"><ShoppingCart className="w-5 h-5" /></button>
                  <button onClick={(e) => e.stopPropagation()} className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-[#E92247] transition-colors" title="Add to Wishlist"><Heart className="w-5 h-5" /></button>
                </div>
                <div className="absolute top-4 left-4"><span className="bg-[#E92247] text-white px-3 py-1 rounded-full text-xs font-medium">{mangalsutra.category}</span></div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-serif text-lg text-gray-900 mb-2 group-hover:text-[#E92247] transition-colors">{mangalsutra.name}</h3>
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-3"><span>{mangalsutra.weight}</span><span>•</span><span>{mangalsutra.purity}</span></div>
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-3"><span>{mangalsutra.weight}</span><span>•</span><span>{mangalsutra.purity}</span></div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl font-bold text-[#E92247]">₹{formatINR(mangalsutra.price)}</span>
                  {mangalsutra.originalPrice && <span className="text-sm text-gray-400 line-through">₹{formatINR(mangalsutra.originalPrice)}</span>}
                </div>
                <div className="flex gap-2 mt-auto">
                  <button onClick={(e) => handleAddToCart(mangalsutra, e)} className="flex-1 flex items-center justify-center gap-2 bg-white text-gray-900 border border-gray-200 py-2 rounded-xl hover:bg-[#E92247] hover:text-white hover:border-[#E92247] transition-colors font-medium text-sm"><ShoppingCart className="w-4 h-4" />Add to Cart</button>
                  <button onClick={(e) => handleBuyNow(mangalsutra, e)} className="flex-1 bg-[#E92247] text-white py-2 rounded-xl hover:bg-[#d11f3f] transition-colors font-medium text-sm">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
