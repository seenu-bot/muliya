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

const BANNER_SRC = "/category/Gemini_Generated_Image_uacnh2uacnh2uacn (5).png";

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

const kadaas: Product[] = [
  {
    id: "kadaa-001",
    name: "Traditional Gold Kadaa",
    price: 85000,
    originalPrice: 98000,
    image: "/images/gold/Gold%20Kadas/Gold%20Kadas/ANTQ%20KADA%20MJ-%200758203424.jpg",
    category: "Gold Kadaas",
    description: "Classic thick gold kadaa with traditional design",
    weight: "18.5 grams",
    purity: "22K (916)"
  },
  {
    id: "kadaa-002",
    name: "Diamond Studded Kadaa",
    price: 145000,
    originalPrice: 165000,
    image: "/images/diamond/Kadaas.png",
    category: "Diamond Kadaas",
    description: "Elegant kadaa with diamond embellishments",
    weight: "16.2 grams",
    purity: "18K"
  },
  {
    id: "kadaa-003",
    name: "Temple Design Kadaa",
    price: 115000,
    originalPrice: 135000,
    image: "/images/gold/Gold%20Kadas/Gold%20Kadas/ANTQ%20KADA%20MJ-%20758212443.jpg",
    category: "Gold Kadaas",
    description: "Traditional temple jewelry style kadaa",
    weight: "22.8 grams",
    purity: "22K (916)"
  },
  {
    id: "kadaa-004",
    name: "Ruby Emerald Kadaa",
    price: 125000,
    originalPrice: 145000,
    image: "/images/gold/Gold%20Kadas/Gold%20Kadas/BANGLE%20MJ-%200758223293.jpg",
    category: "Gold Kadaas",
    description: "Colorful kadaa with ruby and emerald stones",
    weight: "20.5 grams",
    purity: "22K (916)"
  },
  {
    id: "kadaa-005",
    name: "Antique Finish Kadaa",
    price: 95000,
    originalPrice: 110000,
    image: "/images/gold/Gold%20Kadas/Gold%20Kadas/KADA%20BANGLE%20MJ-%2007434049767.jpg",
    category: "Gold Kadaas",
    description: "Vintage antique finish kadaa with patterns",
    weight: "19.2 grams",
    purity: "22K (916)"
  },
  {
    id: "kadaa-006",
    name: "Modern Diamond Kadaa",
    price: 185000,
    originalPrice: 210000,
    image: "/images/diamond/Kadaas.png",
    category: "Diamond Kadaas",
    description: "Contemporary design with brilliant diamonds",
    weight: "17.5 grams",
    purity: "18K"
  },
  {
    id: "kadaa-007",
    name: "Peacock Design Kadaa",
    price: 105000,
    originalPrice: 125000,
    image: "/images/gold/Gold%20Kadas/Gold%20Kadas/KADA%20MJ-%200708209962.jpg",
    category: "Gold Kadaas",
    description: "Beautiful peacock motif kadaa with detailing",
    weight: "21.5 grams",
    purity: "22K (916)"
  },
  {
    id: "kadaa-008",
    name: "Filigree Work Kadaa",
    price: 75000,
    originalPrice: 88000,
    image: "/images/gold/Gold%20Kadas/Gold%20Kadas/ANTQ%20KADA%20MJ-%200758203424.jpg",
    category: "Gold Kadaas",
    description: "Delicate filigree work with lightweight design",
    weight: "15.8 grams",
    purity: "22K (916)"
  },
  {
    id: "kadaa-009",
    name: "Bridal Kadaa Set",
    price: 225000,
    originalPrice: 265000,
    image: "/images/gold/Gold%20Kadas/Gold%20Kadas/ANTQ%20KADA%20MJ-%20758212443.jpg",
    category: "Gold Kadaas",
    description: "Bridal collection kadaa with matching design",
    weight: "28.8 grams",
    purity: "22K (916)"
  },
  {
    id: "kadaa-010",
    name: "Screw Lock Kadaa",
    price: 65000,
    originalPrice: 78000,
    image: "/images/gold/Gold%20Kadas/Gold%20Kadas/BANGLE%20MJ-%200758223293.jpg",
    category: "Gold Kadaas",
    description: "Simple kadaa with secure screw lock mechanism",
    weight: "14.5 grams",
    purity: "22K (916)"
  }
];

export default function KadaasPage() {
  const { addToCart } = useCart();
  const router = useRouter();
  const [filteredKadaas, setFilteredKadaas] = useState(kadaas);
  const [sortOption, setSortOption] = useState("latest");

  const handleAddToCart = (product: Product, e?: React.MouseEvent) => {
    e?.stopPropagation();
    addToCart({ id: product.id, name: product.name, price: product.price, originalPrice: product.originalPrice, image: product.image, collection: product.category, collectionSlug: "kadaas" });
    toast.success(`${product.name} added to cart!`);
  };

  const handleBuyNow = (product: Product, e?: React.MouseEvent) => {
    e?.stopPropagation();
    addToCart({ id: product.id, name: product.name, price: product.price, originalPrice: product.originalPrice, image: product.image, collection: product.category, collectionSlug: "kadaas" });
    toast.success(`${product.name} added to cart! Redirecting to checkout...`);
    setTimeout(() => {
      router.push("/checkout");
    }, 1000);
  };

  const handleProductClick = (productId: string) => {
    router.push(`/products/kadaas/${productId}`);
  };

  const handleSortChange = (sort: string) => {
    setSortOption(sort);
    let sorted = [...kadaas];
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
    setFilteredKadaas(sorted);
  };

  const handlePriceRangeChange = (range: string) => {
    const [min, max] = range.split("-").map(v => v === "+" ? Infinity : parseInt(v.replace("+", "")));
    const filtered = kadaas.filter(kadaa => {
      const price = kadaa.price;
      if (max === Infinity) return price >= min;
      return price >= min && price <= max;
    });
    setFilteredKadaas(filtered);
  };

  const handleMaterialChange = (material: string) => {
    const filtered = kadaas.filter(kadaa => 
      kadaa.category.toLowerCase().includes(material)
    );
    setFilteredKadaas(filtered);
  };

  const handleWeightChange = (weight: string) => {
    const [min, max] = weight.split("-").map(v => v === "+" ? Infinity : parseFloat(v));
    const filtered = kadaas.filter(kadaa => {
      if (!kadaa.weight) return false;
      const weightNum = parseFloat(kadaa.weight.replace(/[^0-9.]/g, ""));
      if (max === Infinity) return weightNum >= min;
      return weightNum >= min && weightNum <= max;
    });
    setFilteredKadaas(filtered);
  };

  const handleDiscountChange = (discount: string) => {
    const filtered = kadaas.filter(kadaa => kadaa.originalPrice !== undefined);
    setFilteredKadaas(filtered);
  };

  const handleClearFilters = () => {
    setFilteredKadaas(kadaas);
    setSortOption("latest");
  };

  return (
    <main className="min-h-screen bg-white">
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#E92247] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/products/kadaas" className="hover:text-[#E92247] transition-colors">Gold</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">Kadaas</span>
          </nav>
        </div>
      </div>

      <div className="relative bg-gradient-to-r from-amber-50 to-yellow-50 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallbackNext src={BANNER_SRC} alt="Kadaas banner" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4 drop-shadow">Kadaas</h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto drop-shadow">Discover our stunning collection of gold and diamond kadaas. Traditional thick bangles perfect for weddings and special occasions.</p>
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
                Showing {filteredKadaas.length} items
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredKadaas.map((kadaa) => (
            <div key={kadaa.id} onClick={() => handleProductClick(kadaa.id)} className="group bg-white overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer">
              <div className="relative aspect-square overflow-hidden bg-gray-100 flex-shrink-0">
                <ImageWithFallbackNext src={kadaa.image} alt={kadaa.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <button onClick={(e) => handleAddToCart(kadaa, e)} className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-[#E92247] hover:bg-[#E92247] hover:text-white transition-colors" title="Add to Cart"><ShoppingCart className="w-5 h-5" /></button>
                  <button onClick={(e) => e.stopPropagation()} className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-[#E92247] transition-colors" title="Add to Wishlist"><Heart className="w-5 h-5" /></button>
                </div>
                <div className="absolute top-4 left-4"><span className="bg-[#E92247] text-white px-3 py-1 rounded-full text-xs font-medium">{kadaa.category}</span></div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-serif text-lg text-gray-900 mb-2 group-hover:text-[#E92247] transition-colors">{kadaa.name}</h3>
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-3"><span>{kadaa.weight}</span><span>•</span><span>{kadaa.purity}</span></div>
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-3"><span>{kadaa.weight}</span><span>•</span><span>{kadaa.purity}</span></div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl font-bold text-[#E92247]">₹{formatINR(kadaa.price)}</span>
                  {kadaa.originalPrice && <span className="text-sm text-gray-400 line-through">₹{formatINR(kadaa.originalPrice)}</span>}
                </div>
                <div className="flex gap-2 mt-auto">
                  <button onClick={(e) => handleAddToCart(kadaa, e)} className="flex-1 flex items-center justify-center gap-2 bg-white text-gray-900 border border-gray-200 py-2 rounded-xl hover:bg-[#E92247] hover:text-white hover:border-[#E92247] transition-colors font-medium text-sm"><ShoppingCart className="w-4 h-4" />Add to Cart</button>
                  <button onClick={(e) => handleBuyNow(kadaa, e)} className="flex-1 bg-[#E92247] text-white py-2 rounded-xl hover:bg-[#d11f3f] transition-colors font-medium text-sm">Buy Now</button>
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
