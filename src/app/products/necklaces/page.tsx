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

const BANNER_SRC = "/category/Gemini_Generated_Image_uacnh2uacnh2uacn (3).png";

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

const necklaces: Product[] = [
  {
    id: "necklace-001",
    name: "Traditional Gold Necklace",
    price: 125000,
    originalPrice: 145000,
    image: "/images/gold/Gold%20Necklaces/Gold%20Necklaces/04%20ANTQ%20VAX%20NECKLACE%20MJ%20-%20748205672.jpg",
    category: "Gold Necklaces",
    description: "Classic South Indian necklace with intricate design",
    weight: "25.5 grams",
    purity: "22K (916)"
  },
  {
    id: "necklace-002",
    name: "Diamond Choker Necklace",
    price: 245000,
    originalPrice: 285000,
    image: "/images/daimond/diamond-chain.jpeg",
    category: "Diamond Necklaces",
    description: "Elegant diamond choker with modern setting",
    weight: "18.2 grams",
    purity: "18K"
  },
  {
    id: "necklace-003",
    name: "Temple Design Necklace",
    price: 185000,
    originalPrice: 210000,
    image: "/images/gold/Gold%20Necklaces/Gold%20Necklaces/10%20KADAGA%20NECKLACE-%20743403926.jpg",
    category: "Gold Necklaces",
    description: "Traditional temple jewelry with Lakshmi motif",
    weight: "32.8 grams",
    purity: "22K (916)"
  },
  {
    id: "necklace-004",
    name: "Floral Pattern Necklace",
    price: 98000,
    originalPrice: 115000,
    image: "/images/gold/Gold%20Necklaces/Gold%20Necklaces/16GM%20RUBY%20NECKLACE%20-%207434061301.jpg",
    category: "Gold Necklaces",
    description: "Delicate floral pattern with high polish finish",
    weight: "16.5 grams",
    purity: "22K (916)"
  },
  {
    id: "necklace-005",
    name: "Ruby Emerald Necklace",
    price: 285000,
    originalPrice: 325000,
    image: "/images/gold/Gold%20Necklaces/Gold%20Necklaces/ANTIQUE%20HARAM%20MJ-%200758201138.jpg",
    category: "Gold Necklaces",
    description: "Stunning necklace with ruby and emerald stones",
    weight: "28.5 grams",
    purity: "22K (916)"
  },
  {
    id: "necklace-006",
    name: "Modern Diamond Necklace",
    price: 195000,
    originalPrice: 225000,
    image: "/images/daimond/diamond-chain.jpeg",
    category: "Diamond Necklaces",
    description: "Contemporary geometric design with diamonds",
    weight: "15.8 grams",
    purity: "18K"
  },
  {
    id: "necklace-007",
    name: "Antique Finish Necklace",
    price: 155000,
    originalPrice: 175000,
    image: "/images/gold/Gold%20Necklaces/Gold%20Necklaces/ANTIQUE%20JEWELS-%2007134094647.jpg",
    category: "Gold Necklaces",
    description: "Vintage antique finish with traditional patterns",
    weight: "26.2 grams",
    purity: "22K (916)"
  },
  {
    id: "necklace-008",
    name: "Pearl String Necklace",
    price: 75000,
    originalPrice: 88000,
    image: "/images/gold/Gold%20Necklaces/Gold%20Necklaces/04%20ANTQ%20VAX%20NECKLACE%20MJ%20-%20748205672.jpg",
    category: "Gold Necklaces",
    description: "Elegant pearl strings with gold accents",
    weight: "12.5 grams",
    purity: "22K (916)"
  },
  {
    id: "necklace-009",
    name: "Layered Gold Necklace",
    price: 115000,
    originalPrice: 135000,
    image: "/images/gold/Gold%20Necklaces/Gold%20Necklaces/10%20KADAGA%20NECKLACE-%20743403926.jpg",
    category: "Gold Necklaces",
    description: "Multi-layered design with intricate detailing",
    weight: "22.8 grams",
    purity: "22K (916)"
  },
  {
    id: "necklace-010",
    name: "Bridal Diamond Necklace",
    price: 345000,
    originalPrice: 395000,
    image: "/images/daimond/diamond-chain.jpeg",
    category: "Diamond Necklaces",
    description: "Bridal collection with premium diamonds",
    weight: "24.5 grams",
    purity: "18K"
  }
];

export default function NecklacesPage() {
  const { addToCart } = useCart();
  const router = useRouter();
  const [filteredNecklaces, setFilteredNecklaces] = useState(necklaces);
  const [sortOption, setSortOption] = useState("latest");

  const handleAddToCart = (product: Product, e?: React.MouseEvent) => {
    e?.stopPropagation();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.image,
      collection: product.category,
      collectionSlug: "necklaces",
    });
    toast.success(`${product.name} added to cart!`);
  };

  const handleBuyNow = (product: Product, e?: React.MouseEvent) => {
    e?.stopPropagation();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.image,
      collection: product.category,
      collectionSlug: "necklaces",
    });
    toast.success(`${product.name} added to cart! Redirecting to checkout...`);
    setTimeout(() => {
      router.push("/checkout");
    }, 1000);
  };

  const handleProductClick = (productId: string) => {
    router.push(`/products/necklaces/${productId}`);
  };

  const handleSortChange = (sort: string) => {
    setSortOption(sort);
    let sorted = [...necklaces];
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
    const filtered = necklaces.filter(necklace => {
      const price = necklace.price;
      if (max === Infinity) return price >= min;
      return price >= min && price <= max;
    });
    setFilteredNecklaces(filtered);
  };

  const handleMaterialChange = (material: string) => {
    const filtered = necklaces.filter(necklace => 
      necklace.category.toLowerCase().includes(material)
    );
    setFilteredNecklaces(filtered);
  };

  const handleWeightChange = (weight: string) => {
    const [min, max] = weight.split("-").map(v => v === "+" ? Infinity : parseFloat(v));
    const filtered = necklaces.filter(necklace => {
      if (!necklace.weight) return false;
      const weightNum = parseFloat(necklace.weight.replace(/[^0-9.]/g, ""));
      if (max === Infinity) return weightNum >= min;
      return weightNum >= min && weightNum <= max;
    });
    setFilteredNecklaces(filtered);
  };

  const handleDiscountChange = (discount: string) => {
    const filtered = necklaces.filter(necklace => necklace.originalPrice !== undefined);
    setFilteredNecklaces(filtered);
  };

  const handleClearFilters = () => {
    setFilteredNecklaces(necklaces);
    setSortOption("latest");
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#E92247] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/products/necklaces" className="hover:text-[#E92247] transition-colors">Gold</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">Necklaces</span>
          </nav>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="relative bg-gradient-to-r from-amber-50 to-yellow-50 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallbackNext src={BANNER_SRC} alt="Necklaces banner" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4 drop-shadow">Necklaces</h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto drop-shadow">Discover our exquisite collection of gold and diamond necklaces. From traditional designs to contemporary styles, find the perfect piece for every occasion.</p>
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
            <div 
              key={necklace.id}
              onClick={() => handleProductClick(necklace.id)}
              className="group bg-white overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden bg-gray-100 flex-shrink-0">
                <ImageWithFallbackNext src={necklace.image} alt={necklace.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                {/* Quick Actions */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <button onClick={(e) => handleAddToCart(necklace, e)} className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-[#E92247] hover:bg-[#E92247] hover:text-white transition-colors" title="Add to Cart">
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                  <button onClick={(e) => e.stopPropagation()} className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-[#E92247] transition-colors" title="Add to Wishlist">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#E92247] text-white px-3 py-1 rounded-full text-xs font-medium">{necklace.category}</span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-serif text-lg text-gray-900 mb-2 group-hover:text-[#E92247] transition-colors">{necklace.name}</h3>
                {/* Weight & Purity */}
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                  <span>{necklace.weight}</span>
                  <span>•</span>
                  <span>{necklace.purity}</span>
                </div>
                {/* Price */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl font-bold text-[#E92247]">₹{formatINR(necklace.price)}</span>
                  {necklace.originalPrice && <span className="text-sm text-gray-400 line-through">₹{formatINR(necklace.originalPrice)}</span>}
                </div>
                {/* Add to Cart Button */}
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
