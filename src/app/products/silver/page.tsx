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
  subcategory: string;
  description: string;
  weight?: string;
  purity?: string;
}

const silverProducts: Product[] = [
  // Silver Rings
  {
    id: "silver-ring-001",
    name: "Classic Silver Band Ring",
    price: 2500,
    originalPrice: 3200,
    image: "/images/ring1.png",
    category: "Silver",
    subcategory: "Rings",
    description: "Elegant classic silver band for everyday wear",
    weight: "4.5 grams",
    purity: "925 Sterling"
  },
  {
    id: "silver-ring-002",
    name: "Silver Signet Ring",
    price: 3500,
    originalPrice: 4200,
    image: "/images/ring2.png",
    category: "Silver",
    subcategory: "Rings",
    description: "Traditional signet style silver ring",
    weight: "6.2 grams",
    purity: "925 Sterling"
  },
  {
    id: "silver-ring-003",
    name: "Silver Stone Ring",
    price: 4500,
    originalPrice: 5200,
    image: "/images/ring-3.jpg",
    category: "Silver",
    subcategory: "Rings",
    description: "Beautiful silver ring with semi-precious stone",
    weight: "5.8 grams",
    purity: "925 Sterling"
  },
  // Silver Bracelets
  {
    id: "silver-bracelet-001",
    name: "Silver Chain Bracelet",
    price: 5500,
    originalPrice: 6500,
    image: "/images/bangles.png",
    category: "Silver",
    subcategory: "Bracelets",
    description: "Classic silver chain bracelet",
    weight: "12.5 grams",
    purity: "925 Sterling"
  },
  {
    id: "silver-bracelet-002",
    name: "Silver Bangle Bracelet",
    price: 6500,
    originalPrice: 7800,
    image: "/images/bangles.png",
    category: "Silver",
    subcategory: "Bracelets",
    description: "Elegant silver bangle with intricate design",
    weight: "18.5 grams",
    purity: "925 Sterling"
  },
  {
    id: "silver-bracelet-003",
    name: "Silver Cuff Bracelet",
    price: 7500,
    originalPrice: 8800,
    image: "/images/bangles.png",
    category: "Silver",
    subcategory: "Bracelets",
    description: "Modern silver cuff bracelet",
    weight: "15.8 grams",
    purity: "925 Sterling"
  },
  // Silver Watches
  {
    id: "silver-watch-001",
    name: "Silver Analog Watch",
    price: 8500,
    originalPrice: 10500,
    image: "/images/ring-5.png",
    category: "Silver",
    subcategory: "Watches",
    description: "Classic analog watch with silver strap",
    weight: "45.2 grams",
    purity: "925 Sterling"
  },
  {
    id: "silver-watch-002",
    name: "Silver Digital Watch",
    price: 6500,
    originalPrice: 7800,
    image: "/images/ring-7.jpg",
    category: "Silver",
    subcategory: "Watches",
    description: "Modern digital watch with silver band",
    weight: "38.5 grams",
    purity: "925 Sterling"
  },
  {
    id: "silver-watch-003",
    name: "Silver Chronograph Watch",
    price: 12500,
    originalPrice: 14800,
    image: "/images/ring-8.jpg",
    category: "Silver",
    subcategory: "Watches",
    description: "Premium chronograph with silver bracelet",
    weight: "52.8 grams",
    purity: "925 Sterling"
  },
  // Silver Pendants
  {
    id: "silver-pendant-001",
    name: "Silver Cross Pendant",
    price: 2800,
    originalPrice: 3500,
    image: "/images/mangalsutra.png",
    category: "Silver",
    subcategory: "Pendants",
    description: "Classic cross pendant in sterling silver",
    weight: "5.5 grams",
    purity: "925 Sterling"
  },
  {
    id: "silver-pendant-002",
    name: "Silver Heart Pendant",
    price: 3200,
    originalPrice: 3900,
    image: "/images/earrings.png",
    category: "Silver",
    subcategory: "Pendants",
    description: "Romantic heart shaped silver pendant",
    weight: "6.2 grams",
    purity: "925 Sterling"
  },
  {
    id: "silver-pendant-003",
    name: "Silver Om Pendant",
    price: 2800,
    originalPrice: 3400,
    image: "/images/nithya.png",
    category: "Silver",
    subcategory: "Pendants",
    description: "Spiritual Om symbol pendant in silver",
    weight: "5.8 grams",
    purity: "925 Sterling"
  }
];

export default function SilverPage() {
  const { addToCart } = useCart();
  const router = useRouter();
  const [filteredProducts, setFilteredProducts] = useState(silverProducts);
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
      collectionSlug: "silver" 
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
      collectionSlug: "silver" 
    });
    toast.success(`${product.name} added to cart! Redirecting to checkout...`);
    setTimeout(() => {
      router.push("/checkout");
    }, 1000);
  };

  const handleProductClick = (productId: string) => {
    router.push(`/products/silver/${productId}`);
  };

  const handleSortChange = (sort: string) => {
    setSortOption(sort);
    let sorted = [...silverProducts];
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
    setFilteredProducts(sorted);
  };

  const handlePriceRangeChange = (range: string) => {
    const [min, max] = range.split("-").map(v => v === "+" ? Infinity : parseInt(v.replace("+", "")));
    const filtered = silverProducts.filter(product => {
      const price = product.price;
      if (max === Infinity) return price >= min;
      return price >= min && price <= max;
    });
    setFilteredProducts(filtered);
  };

  const handleMaterialChange = (material: string) => {
    const filtered = silverProducts.filter(product => 
      product.category.toLowerCase().includes(material)
    );
    setFilteredProducts(filtered);
  };

  const handleWeightChange = (weight: string) => {
    const [min, max] = weight.split("-").map(v => v === "+" ? Infinity : parseFloat(v));
    const filtered = silverProducts.filter(product => {
      if (!product.weight) return false;
      const weightNum = parseFloat(product.weight.replace(/[^0-9.]/g, ""));
      if (max === Infinity) return weightNum >= min;
      return weightNum >= min && weightNum <= max;
    });
    setFilteredProducts(filtered);
  };

  const handleDiscountChange = (discount: string) => {
    const filtered = silverProducts.filter(product => product.originalPrice !== undefined);
    setFilteredProducts(filtered);
  };

  const handleClearFilters = () => {
    setFilteredProducts(silverProducts);
    setSortOption("latest");
  };

  const subcategories = ["Rings", "Bracelets", "Watches", "Pendants"];

  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#E92247] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">Silver Collection</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallbackNext src={BANNER_SRC} alt="Silver banner" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4 drop-shadow">Silver Collection</h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto drop-shadow">Discover our exquisite range of sterling silver jewelry - rings, bracelets, watches, and pendants crafted with precision and elegance.</p>
          </div>
        </div>
      </div>

      {/* Subcategory Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-center gap-4 md:gap-8 flex-wrap">
            {subcategories.map((sub) => (
              <a 
                key={sub}
                href={`#${sub.toLowerCase()}`}
                className="px-6 py-2 bg-gray-100 hover:bg-[#E92247] hover:text-white rounded-full text-sm font-medium transition-colors"
              >
                Silver {sub}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Products by Subcategory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
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
                Showing {filteredProducts.length} items
              </h2>
            </div>
            {subcategories.map((subcategory) => {
              const products = filteredProducts.filter(p => p.subcategory === subcategory);
              if (products.length === 0) return null;
              return (
                <section key={subcategory} id={subcategory.toLowerCase()} className="scroll-mt-24 mb-16">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl md:text-3xl font-serif text-gray-900">Silver {subcategory}</h2>
                    <span className="text-sm text-gray-500">{products.length} Products</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product) => (
                  <div 
                    key={product.id} 
                    onClick={() => handleProductClick(product.id)} 
                    className="group bg-white overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
                  >
                    <div className="relative aspect-square overflow-hidden bg-gray-100 flex-shrink-0">
                      <ImageWithFallbackNext src={product.image} alt={product.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                        <button 
                          onClick={(e) => handleAddToCart(product, e)} 
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
                      <div className="absolute top-4 left-4">
                        <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs font-medium">{product.subcategory}</span>
                      </div>
                    </div>
                    <div className="p-5 flex flex-col flex-grow">
                      <h3 className="font-serif text-lg text-gray-900 mb-2 group-hover:text-[#E92247] transition-colors">{product.name}</h3>
                      <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                        <span>{product.weight}</span>
                        <span>•</span>
                        <span>{product.purity}</span>
                      </div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-xl font-bold text-[#E92247]">₹{formatINR(product.price)}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-400 line-through">₹{formatINR(product.originalPrice)}</span>
                        )}
                      </div>
                      <div className="flex gap-2 mt-auto">
                        <button 
                          onClick={(e) => handleAddToCart(product, e)} 
                          className="flex-1 flex items-center justify-center gap-2 bg-white text-gray-900 border border-gray-200 py-2 rounded-xl hover:bg-[#E92247] hover:text-white hover:border-[#E92247] transition-colors font-medium text-sm"
                        >
                          <ShoppingCart className="w-4 h-4" />Add to Cart
                        </button>
                        <button 
                          onClick={(e) => handleBuyNow(product, e)} 
                          className="flex-1 bg-[#E92247] text-white py-2 rounded-xl hover:bg-[#d11f3f] transition-colors font-medium text-sm"
                        >
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
          </div>
        </div>
      </div>
    </main>
  );
}
