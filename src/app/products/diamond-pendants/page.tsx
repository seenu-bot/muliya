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

const diamondPendants: Product[] = [
  {
    id: "diamond-pendant-001",
    name: "Solitaire Diamond Pendant",
    price: 85000,
    originalPrice: 98000,
    image: "/images/daimond%20categories/Diamond%20Pendants/AMULIYA%20PENDANT%20MJ-%20748209692.jpg",
    category: "Diamond Pendants",
    description: "Classic solitaire diamond pendant with chain",
    weight: "5.2 grams",
    purity: "18K"
  },
  {
    id: "diamond-pendant-002",
    name: "Heart Shape Diamond Pendant",
    price: 115000,
    originalPrice: 132000,
    image: "/images/daimond%20categories/Diamond%20Pendants/DIAMOND%20PENDENT%20MJ-%207682222286.png",
    category: "Diamond Pendants",
    description: "Romantic heart shaped diamond pendant",
    weight: "6.8 grams",
    purity: "18K"
  },
  {
    id: "diamond-pendant-003",
    name: "Halo Diamond Pendant",
    price: 105000,
    originalPrice: 120000,
    image: "/images/daimond%20categories/Diamond%20Pendants/DIAMOND%20PENDENT%20MJ-%207682242286.png",
    category: "Diamond Pendants",
    description: "Halo setting with brilliant center diamond",
    weight: "7.2 grams",
    purity: "18K"
  },
  {
    id: "diamond-pendant-004",
    name: "Journey Diamond Pendant",
    price: 95000,
    originalPrice: 110000,
    image: "/images/daimond%20categories/Diamond%20Pendants/DIAMOND%20PENDENT%20MJ-%207682262286.png",
    category: "Diamond Pendants",
    description: "Graduated diamonds representing life's journey",
    weight: "6.5 grams",
    purity: "18K"
  },
  {
    id: "diamond-pendant-005",
    name: "Cross Diamond Pendant",
    price: 75000,
    originalPrice: 88000,
    image: "/images/daimond%20categories/Diamond%20Pendants/DIAMOND%20PENDENT%20MJ-%207682282286.png",
    category: "Diamond Pendants",
    description: "Elegant cross design with pave diamonds",
    weight: "5.8 grams",
    purity: "18K"
  },
  {
    id: "diamond-pendant-006",
    name: "Infinity Diamond Pendant",
    price: 125000,
    originalPrice: 145000,
    image: "/images/daimond%20categories/Diamond%20Pendants/AMULIYA%20PENDANT%20MJ-%20748209692.jpg",
    category: "Diamond Pendants",
    description: "Infinity symbol with brilliant diamonds",
    weight: "8.2 grams",
    purity: "18K"
  },
  {
    id: "diamond-pendant-007",
    name: "Drop Diamond Pendant",
    price: 135000,
    originalPrice: 155000,
    image: "/images/daimond%20categories/Diamond%20Pendants/DIAMOND%20PENDENT%20MJ-%207682222286.png",
    category: "Diamond Pendants",
    description: "Elegant teardrop diamond pendant",
    weight: "7.5 grams",
    purity: "18K"
  },
  {
    id: "diamond-pendant-008",
    name: "Circle of Life Pendant",
    price: 145000,
    originalPrice: 165000,
    image: "/images/daimond%20categories/Diamond%20Pendants/DIAMOND%20PENDENT%20MJ-%207682242286.png",
    category: "Diamond Pendants",
    description: "Circular design with continuous diamonds",
    weight: "8.8 grams",
    purity: "18K"
  },
  {
    id: "diamond-pendant-009",
    name: "Cluster Diamond Pendant",
    price: 98000,
    originalPrice: 112000,
    image: "/images/daimond%20categories/Diamond%20Pendants/DIAMOND%20PENDENT%20MJ-%207682262286.png",
    category: "Diamond Pendants",
    description: "Floral cluster design with multiple diamonds",
    weight: "6.2 grams",
    purity: "18K"
  },
  {
    id: "diamond-pendant-010",
    name: "Princess Cut Pendant",
    price: 155000,
    originalPrice: 178000,
    image: "/images/daimond%20categories/Diamond%20Pendants/DIAMOND%20PENDENT%20MJ-%207682282286.png",
    category: "Diamond Pendants",
    description: "Modern princess cut diamond pendant",
    weight: "7.8 grams",
    purity: "18K"
  }
];

export default function DiamondPendantsPage() {
  const { addToCart } = useCart();
  const router = useRouter();
  const [filteredPendants, setFilteredPendants] = useState(diamondPendants);
  const [sortOption, setSortOption] = useState("latest");

  const handleAddToCart = (product: Product, e?: React.MouseEvent) => {
    e?.stopPropagation();
    addToCart({ id: product.id, name: product.name, price: product.price, originalPrice: product.originalPrice, image: product.image, collection: product.category, collectionSlug: "diamond-pendants" });
    toast.success(`${product.name} added to cart!`);
  };

  const handleBuyNow = (product: Product, e?: React.MouseEvent) => {
    e?.stopPropagation();
    addToCart({ id: product.id, name: product.name, price: product.price, originalPrice: product.originalPrice, image: product.image, collection: product.category, collectionSlug: "diamond-pendants" });
    toast.success(`${product.name} added to cart! Redirecting to checkout...`);
    setTimeout(() => {
      router.push("/checkout");
    }, 1000);
  };

  const handleProductClick = (productId: string) => {
    router.push(`/products/diamond-pendants/${productId}`);
  };

  const handleSortChange = (sort: string) => {
    setSortOption(sort);
    let sorted = [...diamondPendants];
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
    setFilteredPendants(sorted);
  };

  const handlePriceRangeChange = (range: string) => {
    const [min, max] = range.split("-").map(v => v === "+" ? Infinity : parseInt(v.replace("+", "")));
    const filtered = diamondPendants.filter(pendant => {
      const price = pendant.price;
      if (max === Infinity) return price >= min;
      return price >= min && price <= max;
    });
    setFilteredPendants(filtered);
  };

  const handleMaterialChange = (material: string) => {
    const filtered = diamondPendants.filter(pendant => 
      pendant.category.toLowerCase().includes(material)
    );
    setFilteredPendants(filtered);
  };

  const handleWeightChange = (weight: string) => {
    const [min, max] = weight.split("-").map(v => v === "+" ? Infinity : parseFloat(v));
    const filtered = diamondPendants.filter(pendant => {
      if (!pendant.weight) return false;
      const weightNum = parseFloat(pendant.weight.replace(/[^0-9.]/g, ""));
      if (max === Infinity) return weightNum >= min;
      return weightNum >= min && weightNum <= max;
    });
    setFilteredPendants(filtered);
  };

  const handleDiscountChange = (discount: string) => {
    const filtered = diamondPendants.filter(pendant => pendant.originalPrice !== undefined);
    setFilteredPendants(filtered);
  };

  const handleClearFilters = () => {
    setFilteredPendants(diamondPendants);
    setSortOption("latest");
  };

  return (
    <main className="min-h-screen bg-white">
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#E92247] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/products/diamond-pendants" className="hover:text-[#E92247] transition-colors">Diamond</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">Diamond Pendants</span>
          </nav>
        </div>
      </div>

      <div className="relative bg-gradient-to-r from-blue-50 to-indigo-50 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallbackNext src={BANNER_SRC} alt="Diamond Pendants banner" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4 drop-shadow">Diamond Pendants</h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto drop-shadow">Timeless elegance close to your heart. Discover our stunning collection of diamond pendants.</p>
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
                Showing {filteredPendants.length} items
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPendants.map((pendant) => (
            <div key={pendant.id} onClick={() => handleProductClick(pendant.id)} className="group bg-white overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer">
              <div className="relative aspect-square overflow-hidden bg-gray-100 flex-shrink-0">
                <ImageWithFallbackNext src={pendant.image} alt={pendant.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <button onClick={(e) => handleAddToCart(pendant, e)} className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-[#E92247] hover:bg-[#E92247] hover:text-white transition-colors" title="Add to Cart"><ShoppingCart className="w-5 h-5" /></button>
                  <button onClick={(e) => e.stopPropagation()} className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-[#E92247] transition-colors" title="Add to Wishlist"><Heart className="w-5 h-5" /></button>
                </div>
                <div className="absolute top-4 left-4"><span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">{pendant.category}</span></div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-serif text-lg text-gray-900 mb-2 group-hover:text-[#E92247] transition-colors">{pendant.name}</h3>
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                  <span>{pendant.weight}</span>
                  <span>•</span>
                  <span>{pendant.purity}</span>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl font-bold text-[#E92247]">₹{formatINR(pendant.price)}</span>
                  {pendant.originalPrice && <span className="text-sm text-gray-400 line-through">₹{formatINR(pendant.originalPrice)}</span>}
                </div>
                <div className="flex gap-2 mt-auto">
                  <button onClick={(e) => handleAddToCart(pendant, e)} className="flex-1 flex items-center justify-center gap-2 bg-white text-gray-900 border border-gray-200 py-2 rounded-xl hover:bg-[#E92247] hover:text-white hover:border-[#E92247] transition-colors font-medium text-sm"><ShoppingCart className="w-4 h-4" />Add to Cart</button>
                  <button onClick={(e) => handleBuyNow(pendant, e)} className="flex-1 bg-[#E92247] text-white py-2 rounded-xl hover:bg-[#d11f3f] transition-colors font-medium text-sm">Buy Now</button>
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
