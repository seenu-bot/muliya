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

const BANNER_SRC = "/images/daimond/Gemini_Generated_Image_9hrdca9hrdca9hrd.png";

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

const diamondBangles: Product[] = [
  {
    id: "diamond-bangle-001",
    name: "Diamond Tennis Bangle",
    price: 185000,
    originalPrice: 210000,
    image: "/images/daimond%20categories/Diamond%20Bangles/KISNA%20BANGLE%201%20-%20143820123.jpg",
    category: "Diamond Bangles",
    description: "Elegant tennis bangle with continuous diamonds",
    weight: "18.5 grams",
    purity: "18K"
  },
  {
    id: "diamond-bangle-002",
    name: "Diamond Solitaire Bangle",
    price: 145000,
    originalPrice: 165000,
    image: "/images/daimond%20categories/Diamond%20Bangles/KISNA%20BANGLE%20MJ-%20144825236.png",
    category: "Diamond Bangles",
    description: "Single stunning solitaire diamond bangle",
    weight: "14.2 grams",
    purity: "18K"
  },
  {
    id: "diamond-bangle-003",
    name: "Diamond Cluster Bangle",
    price: 165000,
    originalPrice: 188000,
    image: "/images/daimond%20categories/Diamond%20Bangles/KISNA%20BNG%200100%20-%20748208192.jpg",
    category: "Diamond Bangles",
    description: "Beautiful cluster of brilliant diamonds",
    weight: "16.8 grams",
    purity: "18K"
  },
  {
    id: "diamond-bangle-004",
    name: "Diamond Pave Bangle",
    price: 225000,
    originalPrice: 255000,
    image: "/images/daimond%20categories/Diamond%20Bangles/KISNA%20BNG%200100%20-%20748220195.jpg",
    category: "Diamond Bangles",
    description: "Full pave set diamond bangle",
    weight: "22.5 grams",
    purity: "18K"
  },
  {
    id: "diamond-bangle-005",
    name: "Diamond Hinged Bangle",
    price: 195000,
    originalPrice: 220000,
    image: "/images/daimond%20categories/Diamond%20Bangles/KISNA%20BNG%200100%20-%20748223195.jpg",
    category: "Diamond Bangles",
    description: "Elegant hinged design with diamond accents",
    weight: "19.5 grams",
    purity: "18K"
  },
  {
    id: "diamond-bangle-006",
    name: "Diamond Cuff Bangle",
    price: 135000,
    originalPrice: 155000,
    image: "/images/daimond%20categories/Diamond%20Bangles/KISNA%20BANGLE%201%20-%20143820123.jpg",
    category: "Diamond Bangles",
    description: "Modern cuff style with diamond detailing",
    weight: "15.2 grams",
    purity: "18K"
  },
  {
    id: "diamond-bangle-007",
    name: "Diamond Eternity Bangle",
    price: 255000,
    originalPrice: 290000,
    image: "/images/daimond%20categories/Diamond%20Bangles/KISNA%20BANGLE%20MJ-%20144825236.png",
    category: "Diamond Bangles",
    description: "Full eternity circle with continuous diamonds",
    weight: "24.8 grams",
    purity: "18K"
  },
  {
    id: "diamond-bangle-008",
    name: "Diamond Station Bangle",
    price: 115000,
    originalPrice: 132000,
    image: "/images/daimond%20categories/Diamond%20Bangles/KISNA%20BNG%200100%20-%20748208192.jpg",
    category: "Diamond Bangles",
    description: "Spaced diamond stations on sleek bangle",
    weight: "13.5 grams",
    purity: "18K"
  },
  {
    id: "diamond-bangle-009",
    name: "Diamond Floral Bangle",
    price: 175000,
    originalPrice: 198000,
    image: "/images/daimond%20categories/Diamond%20Bangles/KISNA%20BNG%200100%20-%20748220195.jpg",
    category: "Diamond Bangles",
    description: "Floral design with diamond embellishments",
    weight: "17.8 grams",
    purity: "18K"
  },
  {
    id: "diamond-bangle-010",
    name: "Diamond Vintage Bangle",
    price: 205000,
    originalPrice: 235000,
    image: "/images/daimond%20categories/Diamond%20Bangles/KISNA%20BNG%200100%20-%20748223195.jpg",
    category: "Diamond Bangles",
    description: "Antique inspired vintage diamond bangle",
    weight: "20.5 grams",
    purity: "18K"
  }
];

export default function DiamondBanglesPage() {
  const { addToCart } = useCart();
  const router = useRouter();
  const [filteredBangles, setFilteredBangles] = useState(diamondBangles);
  const [sortOption, setSortOption] = useState("latest");

  const handleAddToCart = (product: Product, e?: React.MouseEvent) => {
    e?.stopPropagation();
    addToCart({ id: product.id, name: product.name, price: product.price, originalPrice: product.originalPrice, image: product.image, collection: product.category, collectionSlug: "diamond-bangles" });
    toast.success(`${product.name} added to cart!`);
  };

  const handleBuyNow = (product: Product, e?: React.MouseEvent) => {
    e?.stopPropagation();
    addToCart({ id: product.id, name: product.name, price: product.price, originalPrice: product.originalPrice, image: product.image, collection: product.category, collectionSlug: "diamond-bangles" });
    toast.success(`${product.name} added to cart! Redirecting to checkout...`);
    setTimeout(() => {
      router.push("/checkout");
    }, 1000);
  };

  const handleProductClick = (productId: string) => {
    router.push(`/products/diamond-bangles/${productId}`);
  };

  const handleSortChange = (sort: string) => {
    setSortOption(sort);
    let sorted = [...diamondBangles];
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
    setFilteredBangles(sorted);
  };

  const handlePriceRangeChange = (range: string) => {
    const [min, max] = range.split("-").map(v => v === "+" ? Infinity : parseInt(v.replace("+", "")));
    const filtered = diamondBangles.filter(bangle => {
      const price = bangle.price;
      if (max === Infinity) return price >= min;
      return price >= min && price <= max;
    });
    setFilteredBangles(filtered);
  };

  const handleMaterialChange = (material: string) => {
    const filtered = diamondBangles.filter(bangle => 
      bangle.category.toLowerCase().includes(material)
    );
    setFilteredBangles(filtered);
  };

  const handleWeightChange = (weight: string) => {
    const [min, max] = weight.split("-").map(v => v === "+" ? Infinity : parseFloat(v));
    const filtered = diamondBangles.filter(bangle => {
      if (!bangle.weight) return false;
      const weightNum = parseFloat(bangle.weight.replace(/[^0-9.]/g, ""));
      if (max === Infinity) return weightNum >= min;
      return weightNum >= min && weightNum <= max;
    });
    setFilteredBangles(filtered);
  };

  const handleDiscountChange = (discount: string) => {
    const filtered = diamondBangles.filter(bangle => bangle.originalPrice !== undefined);
    setFilteredBangles(filtered);
  };

  const handleClearFilters = () => {
    setFilteredBangles(diamondBangles);
    setSortOption("latest");
  };

  return (
    <main className="min-h-screen bg-white">
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#E92247] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/products/diamond-bangles" className="hover:text-[#E92247] transition-colors">Diamond</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">Diamond Bangles</span>
          </nav>
        </div>
      </div>

      <div className="relative bg-gradient-to-r from-blue-50 to-indigo-50 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallbackNext src={BANNER_SRC} alt="Diamond Bangles banner" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4 drop-shadow">Diamond Bangles</h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto drop-shadow">Sparkling brilliance around your wrist. Discover our exquisite diamond bangle collection.</p>
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
                Showing {filteredBangles.length} items
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBangles.map((bangle) => (
            <div key={bangle.id} onClick={() => handleProductClick(bangle.id)} className="group bg-white overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer">
              <div className="relative aspect-square overflow-hidden bg-gray-100 flex-shrink-0">
                <ImageWithFallbackNext src={bangle.image} alt={bangle.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <button onClick={(e) => handleAddToCart(bangle, e)} className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-[#E92247] hover:bg-[#E92247] hover:text-white transition-colors" title="Add to Cart"><ShoppingCart className="w-5 h-5" /></button>
                  <button onClick={(e) => e.stopPropagation()} className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-[#E92247] transition-colors" title="Add to Wishlist"><Heart className="w-5 h-5" /></button>
                </div>
                <div className="absolute top-4 left-4"><span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">{bangle.category}</span></div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-serif text-lg text-gray-900 mb-2 group-hover:text-[#E92247] transition-colors">{bangle.name}</h3>
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                  <span>{bangle.weight}</span>
                  <span>•</span>
                  <span>{bangle.purity}</span>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl font-bold text-[#E92247]">₹{formatINR(bangle.price)}</span>
                  {bangle.originalPrice && <span className="text-sm text-gray-400 line-through">₹{formatINR(bangle.originalPrice)}</span>}
                </div>
                <div className="flex gap-2 mt-auto">
                  <button onClick={(e) => handleAddToCart(bangle, e)} className="flex-1 flex items-center justify-center gap-2 bg-white text-gray-900 border border-gray-200 py-2 rounded-xl hover:bg-[#E92247] hover:text-white hover:border-[#E92247] transition-colors font-medium text-sm"><ShoppingCart className="w-4 h-4" />Add to Cart</button>
                  <button onClick={(e) => handleBuyNow(bangle, e)} className="flex-1 bg-[#E92247] text-white py-2 rounded-xl hover:bg-[#d11f3f] transition-colors font-medium text-sm">Buy Now</button>
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
