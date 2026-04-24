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

const BANNER_SRC = "/category/Gemini_Generated_Image_uacnh2uacnh2uacn (7).png";

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

const bangles: Product[] = [
  {
    id: "bangle-001",
    name: "Traditional Gold Bangles Set",
    price: 65000,
    originalPrice: 75000,
    image: "/images/gold/Gold%20Bangles/14_2.5%20FM%20BANGLE%20MJ%20-%20748201627.jpg",
    category: "Gold Bangles",
    description: "Classic set of 4 gold bangles with traditional design",
    weight: "16.5 grams",
    purity: "22K (916)"
  },
  {
    id: "bangle-002",
    name: "Diamond Studded Bangles",
    price: 125000,
    originalPrice: 145000,
    image: "/images/diamond/Bangles.png",
    category: "Diamond Bangles",
    description: "Elegant single bangle with diamond embellishments",
    weight: "14.2 grams",
    purity: "18K"
  },
  {
    id: "bangle-003",
    name: "Temple Design Bangles",
    price: 95000,
    originalPrice: 110000,
    image: "/images/gold/Gold%20Bangles/20%20ANTQ%20BANGLE%20-%20748205574.jpg",
    category: "Gold Bangles",
    description: "Traditional temple jewelry style bangles pair",
    weight: "22.8 grams",
    purity: "22K (916)"
  },
  {
    id: "bangle-004",
    name: "Ruby Stone Bangles",
    price: 85000,
    originalPrice: 98000,
    image: "/images/gold/Gold%20Bangles/ANTIQUE%20JEWELS-%2007134164647.jpg",
    category: "Gold Bangles",
    description: "Beautiful bangles with ruby stone settings",
    weight: "18.5 grams",
    purity: "22K (916)"
  },
  {
    id: "bangle-005",
    name: "Antique Finish Bangles",
    price: 75000,
    originalPrice: 88000,
    image: "/images/gold/Gold%20Bangles/Antique%20Bangle%20MJ-%20728209815.jpg",
    category: "Gold Bangles",
    description: "Vintage antique finish bangles with patterns",
    weight: "19.2 grams",
    purity: "22K (916)"
  },
  {
    id: "bangle-006",
    name: "Modern Diamond Bangles",
    price: 165000,
    originalPrice: 190000,
    image: "/images/diamond/Bangles.png",
    category: "Diamond Bangles",
    description: "Contemporary design with brilliant diamonds",
    weight: "15.5 grams",
    purity: "18K"
  },
  {
    id: "bangle-007",
    name: "Plain Gold Bangles",
    price: 45000,
    originalPrice: 52000,
    image: "/images/gold/Gold%20Bangles/Antique%20Kada%20MJ-%207265011752.jpg",
    category: "Gold Bangles",
    description: "Simple elegant plain gold bangles set of 4",
    weight: "12.5 grams",
    purity: "22K (916)"
  },
  {
    id: "bangle-008",
    name: "Filigree Work Bangles",
    price: 55000,
    originalPrice: 65000,
    image: "/images/gold/Gold%20Bangles/14_2.5%20FM%20BANGLE%20MJ%20-%20748201627.jpg",
    category: "Gold Bangles",
    description: "Delicate filigree work bangles with lightweight design",
    weight: "14.8 grams",
    purity: "22K (916)"
  },
  {
    id: "bangle-009",
    name: "Bridal Bangles Set",
    price: 145000,
    originalPrice: 170000,
    image: "/images/gold/Gold%20Bangles/20%20ANTQ%20BANGLE%20-%20748205574.jpg",
    category: "Gold Bangles",
    description: "Bridal collection bangles with chura design",
    weight: "28.8 grams",
    purity: "22K (916)"
  },
  {
    id: "bangle-010",
    name: "Emerald Stone Bangles",
    price: 98000,
    originalPrice: 115000,
    image: "/images/gold/Gold%20Bangles/Antique%20Bangle%20MJ-%20728209815.jpg",
    category: "Gold Bangles",
    description: "Elegant bangles with emerald stone settings",
    weight: "17.5 grams",
    purity: "22K (916)"
  }
];

export default function BanglesPage() {
  const { addToCart } = useCart();
  const router = useRouter();
  const [filteredBangles, setFilteredBangles] = useState(bangles);
  const [sortOption, setSortOption] = useState("latest");

  const handleAddToCart = (product: Product, e?: React.MouseEvent) => {
    e?.stopPropagation();
    addToCart({ id: product.id, name: product.name, price: product.price, originalPrice: product.originalPrice, image: product.image, collection: product.category, collectionSlug: "bangles" });
    toast.success(`${product.name} added to cart!`);
  };

  const handleBuyNow = (product: Product, e?: React.MouseEvent) => {
    e?.stopPropagation();
    addToCart({ id: product.id, name: product.name, price: product.price, originalPrice: product.originalPrice, image: product.image, collection: product.category, collectionSlug: "bangles" });
    toast.success(`${product.name} added to cart! Redirecting to checkout...`);
    setTimeout(() => {
      router.push("/checkout");
    }, 1000);
  };

  const handleProductClick = (productId: string) => {
    router.push(`/products/bangles/${productId}`);
  };

  const handleSortChange = (sort: string) => {
    setSortOption(sort);
    let sorted = [...bangles];
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
    const filtered = bangles.filter(bangle => {
      const price = bangle.price;
      if (max === Infinity) return price >= min;
      return price >= min && price <= max;
    });
    setFilteredBangles(filtered);
  };

  const handleMaterialChange = (material: string) => {
    const filtered = bangles.filter(bangle => 
      bangle.category.toLowerCase().includes(material)
    );
    setFilteredBangles(filtered);
  };

  const handleWeightChange = (weight: string) => {
    const [min, max] = weight.split("-").map(v => v === "+" ? Infinity : parseFloat(v));
    const filtered = bangles.filter(bangle => {
      if (!bangle.weight) return false;
      const weightNum = parseFloat(bangle.weight.replace(/[^0-9.]/g, ""));
      if (max === Infinity) return weightNum >= min;
      return weightNum >= min && weightNum <= max;
    });
    setFilteredBangles(filtered);
  };

  const handleDiscountChange = (discount: string) => {
    const filtered = bangles.filter(bangle => bangle.originalPrice !== undefined);
    setFilteredBangles(filtered);
  };

  const handleClearFilters = () => {
    setFilteredBangles(bangles);
    setSortOption("latest");
  };

  return (
    <main className="min-h-screen bg-white">
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#E92247] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/products/bangles" className="hover:text-[#E92247] transition-colors">Gold</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">Bangles</span>
          </nav>
        </div>
      </div>

      <div className="relative bg-gradient-to-r from-amber-50 to-yellow-50 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallbackNext src={BANNER_SRC} alt="Bangles banner" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4 drop-shadow">Bangles</h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto drop-shadow">The melodious sound of tradition. Discover our collection of exquisite gold and diamond bangles for every occasion.</p>
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
                <div className="absolute top-4 left-4"><span className="bg-[#E92247] text-white px-3 py-1 rounded-full text-xs font-medium">{bangle.category}</span></div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-serif text-lg text-gray-900 mb-2 group-hover:text-[#E92247] transition-colors">{bangle.name}</h3>
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-3"><span>{bangle.weight}</span><span>•</span><span>{bangle.purity}</span></div>
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
