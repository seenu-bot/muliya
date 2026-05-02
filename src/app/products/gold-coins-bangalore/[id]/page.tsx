"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronRight, ShoppingCart, Heart, Minus, Plus, Star, Shield, Truck, RefreshCw } from "lucide-react";
import { useCart } from "@/app/context/CartContext";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { ImageWithFallbackNext } from "@/app/components/ImageWithFallbackNext";

const formatINR = (value: number) => new Intl.NumberFormat("en-IN").format(value);

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

export default function GoldCoinDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { addToCart } = useCart();
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const resolvedParams = React.use(params);

  const product = goldCoins.find((c) => c.id === resolvedParams.id);

  if (!product) {
    return (
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-serif text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-6">The gold coin you're looking for doesn't exist.</p>
          <Link href="/products/gold-coins-bangalore" className="text-[#E92247] hover:underline">← Back to Gold Coins</Link>
        </div>
      </main>
    );
  }

  const handleAddToCart = () => {
    addToCart({ id: product.id, name: product.name, price: product.price, originalPrice: product.originalPrice, image: product.image, collection: product.category, collectionSlug: "gold-coins-bangalore" });
    toast.success(`${product.name} added to cart!`);
  };

  const handleBuyNow = () => {
    addToCart({ id: product.id, name: product.name, price: product.price, originalPrice: product.originalPrice, image: product.image, collection: product.category, collectionSlug: "gold-coins-bangalore" });
    toast.success(`${product.name} added to cart! Redirecting to checkout...`);
    setTimeout(() => {
      router.push("/checkout");
    }, 1000);
  };

  const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;

  return (
    <main className="min-h-screen bg-white">
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#E92247] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/products/gold-rings-bangalore" className="hover:text-[#E92247] transition-colors">Gold</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/products/gold-coins-bangalore" className="hover:text-[#E92247] transition-colors">Gold Coins</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium truncate">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-4">
            <div className="relative aspect-square bg-gray-100 rounded-2xl overflow-hidden">
              <ImageWithFallbackNext
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
              {discount > 0 && (
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-md text-sm font-semibold">
                  {discount}% OFF
                </div>
              )}
            </div>
            
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <ImageWithFallbackNext
                    src={product.image}
                    alt={`${product.name} view ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-serif text-gray-900 mb-2">{product.name}</h1>
              <p className="text-lg text-gray-600 mb-4">{product.category}</p>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">(4.8) • 324 Reviews</span>
              </div>

              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-3xl font-bold text-[#E92247]">₹{formatINR(product.price)}</span>
                {product.originalPrice && product.originalPrice > product.price && (
                  <span className="text-xl text-gray-500 line-through">₹{formatINR(product.originalPrice)}</span>
                )}
                {discount > 0 && (
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-md text-sm font-medium">
                    Save ₹{formatINR(product.originalPrice! - product.price)}
                  </span>
                )}
              </div>

              <p className="text-gray-700 mb-6">{product.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {product.weight && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Weight</p>
                    <p className="font-semibold text-gray-900">{product.weight}</p>
                  </div>
                )}
                {product.purity && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Purity</p>
                    <p className="font-semibold text-gray-900">{product.purity}</p>
                  </div>
                )}
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-gray-700">Quantity:</span>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      className="p-2 hover:bg-gray-100 transition-colors"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 py-2 font-medium">{quantity}</span>
                    <button
                      className="p-2 hover:bg-gray-100 transition-colors"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    className="flex-1 bg-[#E92247] text-white px-6 py-3 rounded-lg hover:bg-[#d41f3a] transition-colors font-medium"
                    onClick={handleBuyNow}
                  >
                    Buy Now
                  </button>
                  <button
                    className="flex-1 border border-[#E92247] text-[#E92247] px-6 py-3 rounded-lg hover:bg-[#E92247] hover:text-white transition-colors font-medium"
                    onClick={handleAddToCart}
                  >
                    <ShoppingCart className="w-5 h-5 inline mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>

              <div className="border-t pt-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#E92247]/10 rounded-full flex items-center justify-center">
                      <Truck className="w-5 h-5 text-[#E92247]" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Free Delivery</p>
                      <p className="text-sm text-gray-600">On orders above ₹5000</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#E92247]/10 rounded-full flex items-center justify-center">
                      <Shield className="w-5 h-5 text-[#E92247]" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Authentic</p>
                      <p className="text-sm text-gray-600">BIS Hallmarked</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#E92247]/10 rounded-full flex items-center justify-center">
                      <RefreshCw className="w-5 h-5 text-[#E92247]" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Easy Returns</p>
                      <p className="text-sm text-gray-600">30 days policy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="border-b pb-4 mb-6">
              <h2 className="text-2xl font-serif text-gray-900 mb-2">Product Details</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                <p className="text-gray-700 leading-relaxed">
                  {product.description} This exquisite gold coin is crafted with precision and attention to detail, 
                  making it perfect for both investment purposes and special occasions. The coin features intricate 
                  designs that showcase traditional craftsmanship while maintaining modern standards of quality.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Specifications</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Product Type</p>
                    <p className="font-medium text-gray-900">Gold Coin</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Material</p>
                    <p className="font-medium text-gray-900">Pure Gold</p>
                  </div>
                  {product.weight && (
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600 mb-1">Weight</p>
                      <p className="font-medium text-gray-900">{product.weight}</p>
                    </div>
                  )}
                  {product.purity && (
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600 mb-1">Purity</p>
                      <p className="font-medium text-gray-900">{product.purity}</p>
                    </div>
                  )}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Certification</p>
                    <p className="font-medium text-gray-900">BIS Hallmarked</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Packaging</p>
                    <p className="font-medium text-gray-900">Tamper-proof</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Why Choose Our Gold Coins?</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#E92247] mt-1">•</span>
                    <span>100% genuine gold with BIS hallmark certification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E92247] mt-1">•</span>
                    <span>Competitive pricing with transparent making charges</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E92247] mt-1">•</span>
                    <span>Perfect for investment and gifting purposes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E92247] mt-1">•</span>
                    <span>Suitable for all religious and cultural occasions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <div className="border-b pb-4 mb-6">
              <h2 className="text-2xl font-serif text-gray-900 mb-2">Customer Reviews</h2>
            </div>
            
            <div className="space-y-4">
              <div className="border-b pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="font-medium">Rahul M.</span>
                </div>
                <p className="text-gray-700 text-sm">Excellent quality gold coin. Perfect for investment. Very satisfied with the purchase.</p>
              </div>
              
              <div className="border-b pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="font-medium">Priya S.</span>
                </div>
                <p className="text-gray-700 text-sm">Beautiful design and great purity. Bought for gifting purpose and everyone loved it.</p>
              </div>
              
              <div className="border-b pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center">
                    {[1, 2, 3, 4].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <Star className="w-4 h-4 text-gray-300" />
                  </div>
                  <span className="font-medium">Amit K.</span>
                </div>
                <p className="text-gray-700 text-sm">Good investment option. Packaging was secure and delivery was on time.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
