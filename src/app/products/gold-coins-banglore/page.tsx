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

const BANNER_SRC = "/category/Gemini_Generated_Image_uacnh2uacnh2uacn (10).png";

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

const goldCoins: Product[] = [
  {
    id: "coin-001",
    name: "24K 1 Gram Gold Coin",
    price: 6500,
    originalPrice: 6800,
    image: "/images/gold/Gold%20Coins/1%20gram%20gold%20coin.png",
    category: "Gold Coins",
    description: "Pure 24K gold coin with elegant design",
    weight: "1 gram",
    purity: "24K (995)"
  },
  {
    id: "coin-002",
    name: "22K 2 Gram Gold Coin",
    price: 12000,
    originalPrice: 13000,
    image: "/images/gold/Gold%20Coins/2%20gram%20gold%20coin.png",
    category: "Gold Coins",
    description: "Traditional 22K gold coin with intricate design",
    weight: "2 grams",
    purity: "22K (916)"
  },
  {
    id: "coin-003",
    name: "24K 4 Gram Gold Coin",
    price: 25000,
    originalPrice: 27000,
    image: "/images/gold/Gold%20Coins/4%20gram%20gold%20coin.png",
    category: "Gold Coins",
    description: "Premium 24K gold coin with royal design",
    weight: "4 grams",
    purity: "24K (995)"
  },
  {
    id: "coin-004",
    name: "22K 5 Gram Gold Coin",
    price: 32000,
    originalPrice: 35000,
    image: "/images/gold/Gold%20Coins/5%20gram%20gold%20coin.png",
    category: "Gold Coins",
    description: "Investment grade 22K gold coin",
    weight: "5 grams",
    purity: "22K (916)"
  },
  {
    id: "coin-005",
    name: "24K 8 Gram Gold Coin",
    price: 50000,
    originalPrice: 54000,
    image: "/images/gold/Gold%20Coins/8%20gram%20gold%20coin.png",
    category: "Gold Coins",
    description: "Heavy 24K gold coin for special occasions",
    weight: "8 grams",
    purity: "24K (995)"
  },
  {
    id: "coin-006",
    name: "22K 10 Gram Gold Coin",
    price: 62000,
    originalPrice: 68000,
    image: "/images/gold/Gold%20Coins/10%20gram%20gold%20coin.png",
    category: "Gold Coins",
    description: "Premium 22K gold coin with traditional design",
    weight: "10 grams",
    purity: "22K (916)"
  },
  {
    id: "coin-007",
    name: "24K 20 Gram Gold Coin",
    price: 125000,
    originalPrice: 135000,
    image: "/images/gold/Gold%20Coins/20%20gram%20gold%20coin.png",
    category: "Gold Coins",
    description: "Investment grade heavy gold coin",
    weight: "20 grams",
    purity: "24K (995)"
  },
  {
    id: "coin-008",
    name: "22K 25 Gram Gold Coin",
    price: 155000,
    originalPrice: 168000,
    image: "/images/gold/Gold%20Coins/25%20gram%20gold%20coin.png",
    category: "Gold Coins",
    description: "Premium 25 gram gold coin for investment",
    weight: "25 grams",
    purity: "22K (916)"
  },
  {
    id: "coin-009",
    name: "24K 50 Gram Gold Coin",
    price: 310000,
    originalPrice: 335000,
    image: "/images/gold/Gold%20Coins/50%20gram%20gold%20coin.png",
    category: "Gold Coins",
    description: "Heavy investment grade gold coin",
    weight: "50 grams",
    purity: "24K (995)"
  },
  {
    id: "coin-010",
    name: "22K 100 Gram Gold Coin",
    price: 620000,
    originalPrice: 670000,
    image: "/images/gold/Gold%20Coins/100%20gram%20gold%20coin.png",
    category: "Gold Coins",
    description: "Premium 100 gram gold coin for serious investors",
    weight: "100 grams",
    purity: "22K (916)"
  },
  {
    id: "coin-011",
    name: "Special Edition Lakshmi Gold Coin",
    price: 8500,
    originalPrice: 9200,
    image: "/images/gold/Gold%20Coins/lakshmi%20gold%20coin.png",
    category: "Gold Coins",
    description: "Goddess Lakshmi design special edition coin",
    weight: "1.5 grams",
    purity: "24K (995)"
  },
  {
    id: "coin-012",
    name: "Special Edition Ganesha Gold Coin",
    price: 9200,
    originalPrice: 10000,
    image: "/images/gold/Gold%20Coins/ganesha%20gold%20coin.png",
    category: "Gold Coins",
    description: "Lord Ganesha design special edition coin",
    weight: "1.8 grams",
    purity: "24K (995)"
  }
];

export default function GoldCoinsPage() {
  const { addToCart } = useCart();
  const router = useRouter();
  const [filteredCoins, setFilteredCoins] = useState(goldCoins);
  const [sortOption, setSortOption] = useState("latest");

  const handleAddToCart = (product: Product, e?: React.MouseEvent) => {
    e?.stopPropagation();
    addToCart({ id: product.id, name: product.name, price: product.price, originalPrice: product.originalPrice, image: product.image, collection: product.category, collectionSlug: "gold-coins-banglore" });
    toast.success(`${product.name} added to cart!`);
  };

  const handleBuyNow = (product: Product, e?: React.MouseEvent) => {
    e?.stopPropagation();
    addToCart({ id: product.id, name: product.name, price: product.price, originalPrice: product.originalPrice, image: product.image, collection: product.category, collectionSlug: "gold-coins-banglore" });
    toast.success(`${product.name} added to cart! Redirecting to checkout...`);
    setTimeout(() => {
      router.push("/checkout");
    }, 1000);
  };

  const handleProductClick = (productId: string) => {
    router.push(`/products/gold-coins-banglore/${productId}`);
  };

  const handleSortChange = (sort: string) => {
    setSortOption(sort);
    let sorted = [...goldCoins];
    switch (sort) {
      case "price-asc":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "latest":
        sorted.reverse();
        break;
      case "name-asc":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        sorted.sort((a, b) => b.name.localeCompare(a.name));
        break;
    }
    setFilteredCoins(sorted);
  };

  const handleFilter = (filters: any) => {
    let filtered = [...goldCoins];
    
    if (filters.priceRange) {
      const [min, max] = filters.priceRange;
      filtered = filtered.filter(product => product.price >= min && product.price <= max);
    }
    
    if (filters.purity) {
      filtered = filtered.filter(product => product.purity?.includes(filters.purity));
    }
    
    if (filters.weight) {
      filtered = filtered.filter(product => product.weight?.includes(filters.weight));
    }
    
    setFilteredCoins(filtered);
  };

  const handlePriceRangeChange = (range: string) => {
    const [min, max] = range.split("-").map(v => v === "+" ? Infinity : parseFloat(v));
    const filtered = goldCoins.filter(coin => coin.price >= min && (max === Infinity || coin.price <= max));
    setFilteredCoins(filtered);
  };

  const handleMaterialChange = (material: string) => {
    const filtered = goldCoins.filter(coin => coin.purity?.includes(material));
    setFilteredCoins(filtered);
  };

  const handleWeightChange = (weight: string) => {
    const [min, max] = weight.split("-").map(v => v === "+" ? Infinity : parseFloat(v));
    const filtered = goldCoins.filter(coin => {
      if (!coin.weight) return false;
      const weightNum = parseFloat(coin.weight.replace(/[^0-9.]/g, ""));
      if (max === Infinity) return weightNum >= min;
      return weightNum >= min && weightNum <= max;
    });
    setFilteredCoins(filtered);
  };

  const handleDiscountChange = (discount: string) => {
    const filtered = goldCoins.filter(coin => coin.originalPrice !== undefined);
    setFilteredCoins(filtered);
  };

  const handleClearFilters = () => {
    setFilteredCoins(goldCoins);
    setSortOption("latest");
  };

  useState(() => {
    setSortOption("latest");
  });

  return (
    <main className="min-h-screen bg-white">
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#E92247] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/products/gold-coins-banglore" className="hover:text-[#E92247] transition-colors">Gold</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">Gold Coins</span>
          </nav>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="relative bg-gradient-to-r from-amber-50 to-yellow-50 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallbackNext src={BANNER_SRC} alt="Gold Coins banner" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4 drop-shadow">
              Gold Coins
            </h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto drop-shadow">
              Discover our exquisite collection of pure gold coins. From investment grade 24K coins to traditional 22K designs, find the perfect gold coin for every occasion.
            </p>
          </div>
        </div>
      </div>

      {/* Products Grid with Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
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
                Showing {filteredCoins.length} items
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCoins.map((coin) => (
            <div 
              key={coin.id}
              onClick={() => handleProductClick(coin.id)}
              className="group bg-white overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden bg-gray-100 flex-shrink-0">
                <ImageWithFallbackNext
                  src={coin.image}
                  alt={coin.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Quick Actions */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <button 
                    onClick={(e) => handleAddToCart(coin, e)}
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
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#E92247] text-white px-3 py-1 rounded-full text-xs font-medium">
                    {coin.category}
                  </span>
                </div>
                {coin.originalPrice && coin.originalPrice > coin.price && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-semibold">
                    {Math.round(((coin.originalPrice - coin.price) / coin.originalPrice) * 100)}% OFF
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-serif text-lg text-gray-900 mb-2 group-hover:text-[#E92247] transition-colors">
                  {coin.name}
                </h3>
                
                {/* Weight & Purity */}
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                  <span>{coin.weight}</span>
                  <span>•</span>
                  <span>{coin.purity}</span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl font-bold text-[#E92247]">
                    ₹{formatINR(coin.price)}
                  </span>
                  {coin.originalPrice && coin.originalPrice > coin.price && (
                    <span className="text-sm text-gray-400 line-through">
                      ₹{formatINR(coin.originalPrice)}
                    </span>
                  )}
                </div>

                {/* Action Buttons - mt-auto pushes to bottom */}
                <div className="flex gap-2 mt-auto">
                  <button 
                    onClick={(e) => handleAddToCart(coin, e)}
                    className="flex-1 flex items-center justify-center gap-2 bg-white text-gray-900 border border-gray-200 py-2 rounded-xl hover:bg-[#E92247] hover:text-white hover:border-[#E92247] transition-colors font-medium text-sm"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </button>
                  <button 
                    onClick={(e) => handleBuyNow(coin, e)}
                    className="flex-1 bg-[#E92247] text-white py-2 rounded-xl hover:bg-[#d11f3f] transition-colors font-medium text-sm"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCoins.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No gold coins found matching your criteria.</p>
          </div>
        )}
          </div>
        </div>
      </div>
    </main>
  );
}
