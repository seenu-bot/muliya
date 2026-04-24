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

const diamondBracelets: Product[] = [
  {
    id: "diamond-bracelet-001",
    name: "Diamond Tennis Bracelet",
    price: 225000,
    originalPrice: 258000,
    image: "/images/daimond%20categories/Diamond%20Bracelets/AMULIYA%20LA%20BR%200%20-%20748201783.jpg",
    category: "Diamond Bracelets",
    description: "Elegant tennis bracelet with continuous diamonds",
    weight: "15.5 grams",
    purity: "18K"
  },
  {
    id: "diamond-bracelet-002",
    name: "Diamond Charm Bracelet",
    price: 165000,
    originalPrice: 188000,
    image: "/images/daimond%20categories/Diamond%20Bracelets/BRACELET%20MJ-%20146823356.jpg",
    category: "Diamond Bracelets",
    description: "Playful charm bracelet with diamond pendants",
    weight: "14.2 grams",
    purity: "18K"
  },
  {
    id: "diamond-bracelet-003",
    name: "Diamond Link Bracelet",
    price: 195000,
    originalPrice: 220000,
    image: "/images/daimond%20categories/Diamond%20Bracelets/BRACELET%20MJ-%20146823556.jpg",
    category: "Diamond Bracelets",
    description: "Classic link design with diamond accents",
    weight: "18.5 grams",
    purity: "18K"
  },
  {
    id: "diamond-bracelet-004",
    name: "Diamond Bolo Bracelet",
    price: 145000,
    originalPrice: 165000,
    image: "/images/daimond%20categories/Diamond%20Bracelets/BRACELET%20MJ-%20146824956.jpg",
    category: "Diamond Bracelets",
    description: "Adjustable bolo style with sliding diamonds",
    weight: "12.8 grams",
    purity: "18K"
  },
  {
    id: "diamond-bracelet-005",
    name: "Diamond Cuff Bracelet",
    price: 175000,
    originalPrice: 198000,
    image: "/images/daimond%20categories/Diamond%20Bracelets/BRACELET%20MJ-%20146825056.jpg",
    category: "Diamond Bracelets",
    description: "Modern cuff design with pave diamonds",
    weight: "16.2 grams",
    purity: "18K"
  },
  {
    id: "diamond-bracelet-006",
    name: "Diamond Chain Bracelet",
    price: 135000,
    originalPrice: 155000,
    image: "/images/daimond%20categories/Diamond%20Bracelets/AMULIYA%20LA%20BR%200%20-%20748201783.jpg",
    category: "Diamond Bracelets",
    description: "Delicate chain with spaced diamond stations",
    weight: "11.5 grams",
    purity: "18K"
  },
  {
    id: "diamond-bracelet-007",
    name: "Diamond Heart Bracelet",
    price: 155000,
    originalPrice: 175000,
    image: "/images/daimond%20categories/Diamond%20Bracelets/BRACELET%20MJ-%20146823356.jpg",
    category: "Diamond Bracelets",
    description: "Romantic heart motif bracelet with diamonds",
    weight: "13.8 grams",
    purity: "18K"
  },
  {
    id: "diamond-bracelet-008",
    name: "Diamond Bar Bracelet",
    price: 125000,
    originalPrice: 142000,
    image: "/images/daimond%20categories/Diamond%20Bracelets/BRACELET%20MJ-%20146823556.jpg",
    category: "Diamond Bracelets",
    description: "Minimalist bar design with diamond line",
    weight: "10.5 grams",
    purity: "18K"
  },
  {
    id: "diamond-bracelet-009",
    name: "Diamond Infinity Bracelet",
    price: 185000,
    originalPrice: 210000,
    image: "/images/daimond%20categories/Diamond%20Bracelets/BRACELET%20MJ-%20146824956.jpg",
    category: "Diamond Bracelets",
    description: "Infinity symbol with brilliant diamonds",
    weight: "15.8 grams",
    purity: "18K"
  },
  {
    id: "diamond-bracelet-010",
    name: "Diamond Cluster Bracelet",
    price: 205000,
    originalPrice: 235000,
    image: "/images/daimond%20categories/Diamond%20Bracelets/BRACELET%20MJ-%20146825056.jpg",
    category: "Diamond Bracelets",
    description: "Floral cluster design with multiple diamonds",
    weight: "17.2 grams",
    purity: "18K"
  }
];

export default function DiamondBraceletsPage() {
  const { addToCart } = useCart();
  const router = useRouter();
  const [filteredBracelets, setFilteredBracelets] = useState(diamondBracelets);
  const [sortOption, setSortOption] = useState("latest");

  const handleAddToCart = (product: Product, e?: React.MouseEvent) => {
    e?.stopPropagation();
    addToCart({ id: product.id, name: product.name, price: product.price, originalPrice: product.originalPrice, image: product.image, collection: product.category, collectionSlug: "diamond-bracelets" });
    toast.success(`${product.name} added to cart!`);
  };

  const handleBuyNow = (product: Product, e?: React.MouseEvent) => {
    e?.stopPropagation();
    addToCart({ id: product.id, name: product.name, price: product.price, originalPrice: product.originalPrice, image: product.image, collection: product.category, collectionSlug: "diamond-bracelets" });
    toast.success(`${product.name} added to cart! Redirecting to checkout...`);
    setTimeout(() => {
      router.push("/checkout");
    }, 1000);
  };

  const handleProductClick = (productId: string) => {
    router.push(`/products/diamond-bracelets/${productId}`);
  };

  const handleSortChange = (sort: string) => {
    setSortOption(sort);
    let sorted = [...diamondBracelets];
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
    setFilteredBracelets(sorted);
  };

  const handlePriceRangeChange = (range: string) => {
    const [min, max] = range.split("-").map(v => v === "+" ? Infinity : parseInt(v.replace("+", "")));
    const filtered = diamondBracelets.filter(bracelet => {
      const price = bracelet.price;
      if (max === Infinity) return price >= min;
      return price >= min && price <= max;
    });
    setFilteredBracelets(filtered);
  };

  const handleMaterialChange = (material: string) => {
    const filtered = diamondBracelets.filter(bracelet => 
      bracelet.category.toLowerCase().includes(material)
    );
    setFilteredBracelets(filtered);
  };

  const handleWeightChange = (weight: string) => {
    const [min, max] = weight.split("-").map(v => v === "+" ? Infinity : parseFloat(v));
    const filtered = diamondBracelets.filter(bracelet => {
      if (!bracelet.weight) return false;
      const weightNum = parseFloat(bracelet.weight.replace(/[^0-9.]/g, ""));
      if (max === Infinity) return weightNum >= min;
      return weightNum >= min && weightNum <= max;
    });
    setFilteredBracelets(filtered);
  };

  const handleDiscountChange = (discount: string) => {
    const filtered = diamondBracelets.filter(bracelet => bracelet.originalPrice !== undefined);
    setFilteredBracelets(filtered);
  };

  const handleClearFilters = () => {
    setFilteredBracelets(diamondBracelets);
    setSortOption("latest");
  };

  return (
    <main className="min-h-screen bg-white">
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#E92247] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/products/diamond-bracelets" className="hover:text-[#E92247] transition-colors">Diamond</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">Diamond Bracelets</span>
          </nav>
        </div>
      </div>

      <div className="relative bg-gradient-to-r from-blue-50 to-indigo-50 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallbackNext src={BANNER_SRC} alt="Diamond Bracelets banner" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4 drop-shadow">Diamond Bracelets</h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto drop-shadow">Dazzling brilliance for your wrist. Discover our stunning collection of diamond bracelets.</p>
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
                Showing {filteredBracelets.length} items
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBracelets.map((bracelet) => (
            <div key={bracelet.id} onClick={() => handleProductClick(bracelet.id)} className="group bg-white overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer">
              <div className="relative aspect-square overflow-hidden bg-gray-100 flex-shrink-0">
                <ImageWithFallbackNext src={bracelet.image} alt={bracelet.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <button onClick={(e) => handleAddToCart(bracelet, e)} className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-[#E92247] hover:bg-[#E92247] hover:text-white transition-colors" title="Add to Cart"><ShoppingCart className="w-5 h-5" /></button>
                  <button onClick={(e) => e.stopPropagation()} className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-[#E92247] transition-colors" title="Add to Wishlist"><Heart className="w-5 h-5" /></button>
                </div>
                <div className="absolute top-4 left-4"><span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">{bracelet.category}</span></div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-serif text-lg text-gray-900 mb-2 group-hover:text-[#E92247] transition-colors">{bracelet.name}</h3>
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                  <span>{bracelet.weight}</span>
                  <span>•</span>
                  <span>{bracelet.purity}</span>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl font-bold text-[#E92247]">₹{formatINR(bracelet.price)}</span>
                  {bracelet.originalPrice && <span className="text-sm text-gray-400 line-through">₹{formatINR(bracelet.originalPrice)}</span>}
                </div>
                <div className="flex gap-2 mt-auto">
                  <button onClick={(e) => handleAddToCart(bracelet, e)} className="flex-1 flex items-center justify-center gap-2 bg-white text-gray-900 border border-gray-200 py-2 rounded-xl hover:bg-[#E92247] hover:text-white hover:border-[#E92247] transition-colors font-medium text-sm"><ShoppingCart className="w-4 h-4" />Add to Cart</button>
                  <button onClick={(e) => handleBuyNow(bracelet, e)} className="flex-1 bg-[#E92247] text-white py-2 rounded-xl hover:bg-[#d11f3f] transition-colors font-medium text-sm">Buy Now</button>
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
