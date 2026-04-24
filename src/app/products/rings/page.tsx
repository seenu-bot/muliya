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

const BANNER_SRC = "/category/Gemini_Generated_Image_uacnh2uacnh2uacn.png";

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

const rings: Product[] = [
  {
    id: "ring-001",
    name: "04 V VANKI CLOSESET",
    price: 76821,
    originalPrice: 85000,
    image: "/images/gold/Gold%20Rings/Gold%20Rings/04%20V%20VANKI%20CLOSESET%20MJ-%20768210177.png",
    category: "Gold Rings",
    description: "Traditional Vanki style ring with elegant closeset design",
    weight: "8.5 grams",
    purity: "22K (916)"
  },
  {
    id: "ring-002",
    name: "Classic Solitaire Diamond Ring",
    price: 125000,
    originalPrice: 145000,
    image: "/images/ring2.png",
    category: "Diamond Rings",
    description: "Elegant solitaire diamond ring with platinum finish",
    weight: "6.2 grams",
    purity: "18K"
  },
  {
    id: "ring-003",
    name: "Royal Gold Band",
    price: 45000,
    originalPrice: 52000,
    image: "/images/gold/Gold%20Rings/Gold%20Rings/4GM%20RUBY%20RING%20-%20743402100.jpg",
    category: "Gold Rings",
    description: "Simple yet elegant royal gold band for daily wear",
    weight: "5.8 grams",
    purity: "22K (916)"
  },
  {
    id: "ring-004",
    name: "Floral Design Gold Ring",
    price: 32000,
    originalPrice: 38000,
    image: "/images/gold/Gold%20Rings/Gold%20Rings/04_21%20GE%20BOMBAY%20RING%20-%2074340753.jpg",
    category: "Gold Rings",
    description: "Beautiful floral pattern ring with intricate detailing",
    weight: "4.2 grams",
    purity: "22K (916)"
  },
  {
    id: "ring-005",
    name: "Diamond Cluster Ring",
    price: 95000,
    originalPrice: 110000,
    image: "/images/ring-5.jpg",
    category: "Diamond Rings",
    description: "Stunning cluster of diamonds in circular pattern",
    weight: "5.5 grams",
    purity: "18K"
  },
  {
    id: "ring-006",
    name: "Temple Design Gold Ring",
    price: 55000,
    originalPrice: 62000,
    image: "/images/gold/Gold%20Rings/Gold%20Rings/04_16%20LA%20HR%20STONE%20-%20748238487.jpg",
    category: "Gold Rings",
    description: "Traditional temple design with goddess Lakshmi motif",
    weight: "7.2 grams",
    purity: "22K (916)"
  },
  {
    id: "ring-007",
    name: "Ruby Emerald Cocktail Ring",
    price: 88000,
    originalPrice: 102000,
    image: "/images/gold/Gold%20Rings/Gold%20Rings/%2010_26%2004ST%20CLOSE%20SET%20RING%20MJ-%20743406104.jpg",
    category: "Gold Rings",
    description: "Elegant cocktail ring with ruby and emerald stones",
    weight: "6.8 grams",
    purity: "22K (916)"
  },
  {
    id: "ring-008",
    name: "Modern Geometric Diamond Ring",
    price: 135000,
    originalPrice: 155000,
    image: "/images/ring-9.jpg",
    category: "Diamond Rings",
    description: "Contemporary geometric design with princess cut diamonds",
    weight: "7.5 grams",
    purity: "18K"
  },
  {
    id: "ring-009",
    name: "Antique Finish Gold Ring",
    price: 42000,
    originalPrice: 48000,
    image: "/images/gold/Gold%20Rings/Gold%20Rings/06_17%20GE%20HR%20PLAIN-%2074821035.jpg",
    category: "Gold Rings",
    description: "Vintage antique finish ring with traditional patterns",
    weight: "5.5 grams",
    purity: "22K (916)"
  },
  {
    id: "ring-010",
    name: "Pearl Gold Ring",
    price: 28000,
    originalPrice: 32000,
    image: "/images/gold/Gold%20Rings/Gold%20Rings/05%20U%20VANKI%20CLOSESET%20MJ-%2076820325.png",
    category: "Gold Rings",
    description: "Elegant pearl centered ring with gold accents",
    weight: "4.0 grams",
    purity: "22K (916)"
  }
];

export default function RingsPage() {
  const { addToCart } = useCart();
  const router = useRouter();
  const [filteredRings, setFilteredRings] = useState(rings);
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
      collectionSlug: "rings",
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
      collectionSlug: "rings",
    });
    toast.success(`${product.name} added to cart! Redirecting to checkout...`);
    setTimeout(() => {
      router.push("/checkout");
    }, 1000);
  };

  const handleProductClick = (productId: string) => {
    router.push(`/products/rings/${productId}`);
  };

  const handleSortChange = (sort: string) => {
    setSortOption(sort);
    let sorted = [...rings];
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
    setFilteredRings(sorted);
  };

  const handlePriceRangeChange = (range: string) => {
    const [min, max] = range.split("-").map(v => v === "+" ? Infinity : parseInt(v.replace("+", "")));
    const filtered = rings.filter(ring => {
      const price = ring.price;
      if (max === Infinity) return price >= min;
      return price >= min && price <= max;
    });
    setFilteredRings(filtered);
  };

  const handleMaterialChange = (material: string) => {
    const filtered = rings.filter(ring => 
      ring.category.toLowerCase().includes(material)
    );
    setFilteredRings(filtered);
  };

  const handleWeightChange = (weight: string) => {
    const [min, max] = weight.split("-").map(v => v === "+" ? Infinity : parseFloat(v));
    const filtered = rings.filter(ring => {
      if (!ring.weight) return false;
      const weightNum = parseFloat(ring.weight.replace(/[^0-9.]/g, ""));
      if (max === Infinity) return weightNum >= min;
      return weightNum >= min && weightNum <= max;
    });
    setFilteredRings(filtered);
  };

  const handleDiscountChange = (discount: string) => {
    const filtered = rings.filter(ring => ring.originalPrice !== undefined);
    setFilteredRings(filtered);
  };

  const handleClearFilters = () => {
    setFilteredRings(rings);
    setSortOption("latest");
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#E92247] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/products/rings" className="hover:text-[#E92247] transition-colors">
              Gold
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">Rings</span>
          </nav>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="relative bg-gradient-to-r from-amber-50 to-yellow-50 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallbackNext src={BANNER_SRC} alt="Rings banner" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4 drop-shadow">
              Rings
            </h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto drop-shadow">
              Discover our exquisite collection of gold and diamond rings. From traditional designs to contemporary styles, find the perfect ring for every occasion.
            </p>
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
                Showing {filteredRings.length} items
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRings.map((ring) => (
            <div 
              key={ring.id}
              onClick={() => handleProductClick(ring.id)}
              className="group bg-white overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden bg-gray-100 flex-shrink-0">
                <ImageWithFallbackNext
                  src={ring.image}
                  alt={ring.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Quick Actions */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <button 
                    onClick={(e) => handleAddToCart(ring, e)}
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
                    {ring.category}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-serif text-lg text-gray-900 mb-2 group-hover:text-[#E92247] transition-colors">
                  {ring.name}
                </h3>
                
                {/* Weight & Purity */}
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                  <span>{ring.weight}</span>
                  <span>•</span>
                  <span>{ring.purity}</span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl font-bold text-[#E92247]">
                    ₹{formatINR(ring.price)}
                  </span>
                  {ring.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      ₹{formatINR(ring.originalPrice)}
                    </span>
                  )}
                </div>

                {/* Action Buttons - mt-auto pushes to bottom */}
                <div className="flex gap-2 mt-auto">
                  <button 
                    onClick={(e) => handleAddToCart(ring, e)}
                    className="flex-1 flex items-center justify-center gap-2 bg-white text-gray-900 border border-gray-200 py-2 rounded-xl hover:bg-[#E92247] hover:text-white hover:border-[#E92247] transition-colors font-medium text-sm"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </button>
                  <button 
                    onClick={(e) => handleBuyNow(ring, e)}
                    className="flex-1 bg-[#E92247] text-white py-2 rounded-xl hover:bg-[#d11f3f] transition-colors font-medium text-sm"
                  >
                    Buy Now
                  </button>
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
