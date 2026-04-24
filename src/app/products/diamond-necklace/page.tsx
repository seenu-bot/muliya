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

const diamondNecklaces: Product[] = [
  {
    id: "diamond-necklace-001",
    name: "Diamond Tennis Necklace",
    price: 285000,
    originalPrice: 325000,
    image: "/images/daimond%20categories/Diamond%20Necklace/AMULIYA%20NECKLACE%20MJ-%20146820337.jpg",
    category: "Diamond Necklaces",
    description: "Elegant tennis necklace with continuous diamonds",
    weight: "22.5 grams",
    purity: "18K"
  },
  {
    id: "diamond-necklace-002",
    name: "Diamond Solitaire Necklace",
    price: 195000,
    originalPrice: 225000,
    image: "/images/daimond%20categories/Diamond%20Necklace/DIAMOND%20NECKLACE%20MJ-%2007682062524%2C%2007682052524.png",
    category: "Diamond Necklaces",
    description: "Stunning solitaire diamond on delicate chain",
    weight: "8.5 grams",
    purity: "18K"
  },
  {
    id: "diamond-necklace-003",
    name: "Diamond Collar Necklace",
    price: 365000,
    originalPrice: 415000,
    image: "/images/daimond%20categories/Diamond%20Necklace/DIAMOND%20NECKLACE%20MJ-%2007682192524%2C07682202524.jpg",
    category: "Diamond Necklaces",
    description: "Bold collar design with brilliant diamonds",
    weight: "35.8 grams",
    purity: "18K"
  },
  {
    id: "diamond-necklace-004",
    name: "Diamond Pendant Necklace",
    price: 145000,
    originalPrice: 168000,
    image: "/images/daimond%20categories/Diamond%20Necklace/DIAMOND%20NECKLACE%20MJ-%2007682442524%2C07682432524.png",
    category: "Diamond Necklaces",
    description: "Beautiful pendant with diamond cluster",
    weight: "12.5 grams",
    purity: "18K"
  },
  {
    id: "diamond-necklace-005",
    name: "Diamond Choker Necklace",
    price: 255000,
    originalPrice: 290000,
    image: "/images/daimond%20categories/Diamond%20Necklace/DIAMOND%20NECKLACE%20MJ-%2007782053%2C07782063.png",
    category: "Diamond Necklaces",
    description: "Modern choker with pave set diamonds",
    weight: "28.2 grams",
    purity: "18K"
  },
  {
    id: "diamond-necklace-006",
    name: "Diamond Station Necklace",
    price: 165000,
    originalPrice: 188000,
    image: "/images/daimond%20categories/Diamond%20Necklace/AMULIYA%20NECKLACE%20MJ-%20146820337.jpg",
    category: "Diamond Necklaces",
    description: "Delicate chain with spaced diamond stations",
    weight: "15.8 grams",
    purity: "18K"
  },
  {
    id: "diamond-necklace-007",
    name: "Diamond Princess Necklace",
    price: 325000,
    originalPrice: 368000,
    image: "/images/daimond%20categories/Diamond%20Necklace/DIAMOND%20NECKLACE%20MJ-%2007682062524%2C%2007682052524.png",
    category: "Diamond Necklaces",
    description: "Regal princess length with brilliant stones",
    weight: "32.5 grams",
    purity: "18K"
  },
  {
    id: "diamond-necklace-008",
    name: "Diamond Bib Necklace",
    price: 445000,
    originalPrice: 498000,
    image: "/images/daimond%20categories/Diamond%20Necklace/DIAMOND%20NECKLACE%20MJ-%2007682192524%2C07682202524.jpg",
    category: "Diamond Necklaces",
    description: "Statement bib design with cascading diamonds",
    weight: "42.8 grams",
    purity: "18K"
  },
  {
    id: "diamond-necklace-009",
    name: "Diamond Line Necklace",
    price: 215000,
    originalPrice: 245000,
    image: "/images/daimond%20categories/Diamond%20Necklace/DIAMOND%20NECKLACE%20MJ-%2007682442524%2C07682432524.png",
    category: "Diamond Necklaces",
    description: "Sleek line of graduated diamonds",
    weight: "18.5 grams",
    purity: "18K"
  },
  {
    id: "diamond-necklace-010",
    name: "Diamond Opera Necklace",
    price: 385000,
    originalPrice: 435000,
    image: "/images/daimond%20categories/Diamond%20Necklace/DIAMOND%20NECKLACE%20MJ-%2007782053%2C07782063.png",
    category: "Diamond Necklaces",
    description: "Long opera length with brilliant diamonds",
    weight: "38.5 grams",
    purity: "18K"
  }
];

export default function DiamondNecklacesPage() {
  const { addToCart } = useCart();
  const router = useRouter();
  const [filteredNecklaces, setFilteredNecklaces] = useState(diamondNecklaces);
  const [sortOption, setSortOption] = useState("latest");

  const handleAddToCart = (product: Product, e?: React.MouseEvent) => {
    e?.stopPropagation();
    addToCart({ id: product.id, name: product.name, price: product.price, originalPrice: product.originalPrice, image: product.image, collection: product.category, collectionSlug: "diamond-necklace" });
    toast.success(`${product.name} added to cart!`);
  };

  const handleBuyNow = (product: Product, e?: React.MouseEvent) => {
    e?.stopPropagation();
    addToCart({ id: product.id, name: product.name, price: product.price, originalPrice: product.originalPrice, image: product.image, collection: product.category, collectionSlug: "diamond-necklace" });
    toast.success(`${product.name} added to cart! Redirecting to checkout...`);
    setTimeout(() => {
      router.push("/checkout");
    }, 1000);
  };

  const handleProductClick = (productId: string) => {
    router.push(`/products/diamond-necklace/${productId}`);
  };

  const handleSortChange = (sort: string) => {
    setSortOption(sort);
    let sorted = [...diamondNecklaces];
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
    setFilteredNecklaces(sorted);
  };

  const handlePriceRangeChange = (range: string) => {
    const [min, max] = range.split("-").map(v => v === "+" ? Infinity : parseInt(v.replace("+", "")));
    const filtered = diamondNecklaces.filter(necklace => {
      const price = necklace.price;
      if (max === Infinity) return price >= min;
      return price >= min && price <= max;
    });
    setFilteredNecklaces(filtered);
  };

  const handleMaterialChange = (material: string) => {
    const filtered = diamondNecklaces.filter(necklace => 
      necklace.category.toLowerCase().includes(material)
    );
    setFilteredNecklaces(filtered);
  };

  const handleWeightChange = (weight: string) => {
    const [min, max] = weight.split("-").map(v => v === "+" ? Infinity : parseFloat(v));
    const filtered = diamondNecklaces.filter(necklace => {
      if (!necklace.weight) return false;
      const weightNum = parseFloat(necklace.weight.replace(/[^0-9.]/g, ""));
      if (max === Infinity) return weightNum >= min;
      return weightNum >= min && weightNum <= max;
    });
    setFilteredNecklaces(filtered);
  };

  const handleDiscountChange = (discount: string) => {
    const filtered = diamondNecklaces.filter(necklace => necklace.originalPrice !== undefined);
    setFilteredNecklaces(filtered);
  };

  const handleClearFilters = () => {
    setFilteredNecklaces(diamondNecklaces);
    setSortOption("latest");
  };

  return (
    <main className="min-h-screen bg-white">
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#E92247] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/products/diamond-necklace" className="hover:text-[#E92247] transition-colors">Diamond</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">Diamond Necklaces</span>
          </nav>
        </div>
      </div>

      <div className="relative bg-gradient-to-r from-blue-50 to-indigo-50 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallbackNext src={BANNER_SRC} alt="Diamond Necklaces banner" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4 drop-shadow">Diamond Necklaces</h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto drop-shadow">Adorn yourself with brilliance. Discover our exquisite collection of diamond necklaces.</p>
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
                Showing {filteredNecklaces.length} items
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNecklaces.map((necklace) => (
            <div key={necklace.id} onClick={() => handleProductClick(necklace.id)} className="group bg-white overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer">
              <div className="relative aspect-square overflow-hidden bg-gray-100 flex-shrink-0">
                <ImageWithFallbackNext src={necklace.image} alt={necklace.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <button onClick={(e) => handleAddToCart(necklace, e)} className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-[#E92247] hover:bg-[#E92247] hover:text-white transition-colors" title="Add to Cart"><ShoppingCart className="w-5 h-5" /></button>
                  <button onClick={(e) => e.stopPropagation()} className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-[#E92247] transition-colors" title="Add to Wishlist"><Heart className="w-5 h-5" /></button>
                </div>
                <div className="absolute top-4 left-4"><span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">{necklace.category}</span></div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-serif text-lg text-gray-900 mb-2 group-hover:text-[#E92247] transition-colors">{necklace.name}</h3>
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                  <span>{necklace.weight}</span>
                  <span>•</span>
                  <span>{necklace.purity}</span>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl font-bold text-[#E92247]">₹{formatINR(necklace.price)}</span>
                  {necklace.originalPrice && <span className="text-sm text-gray-400 line-through">₹{formatINR(necklace.originalPrice)}</span>}
                </div>
                <div className="flex gap-2 mt-auto">
                  <button onClick={(e) => handleAddToCart(necklace, e)} className="flex-1 flex items-center justify-center gap-2 bg-white text-gray-900 border border-gray-200 py-2 rounded-xl hover:bg-[#E92247] hover:text-white hover:border-[#E92247] transition-colors font-medium text-sm"><ShoppingCart className="w-4 h-4" />Add to Cart</button>
                  <button onClick={(e) => handleBuyNow(necklace, e)} className="flex-1 bg-[#E92247] text-white py-2 rounded-xl hover:bg-[#d11f3f] transition-colors font-medium text-sm">Buy Now</button>
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
