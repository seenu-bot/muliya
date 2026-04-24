"use client";

import Link from "next/link";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { ChevronRight, ShoppingCart, Heart, Share2, Truck, Shield, RefreshCw, Check } from "lucide-react";
import { useCart } from "@/app/context/CartContext";
import { toast } from "sonner";
import { useState } from "react";

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
  details?: string[];
}

const earrings: Product[] = [
  {
    id: "earring-001",
    name: "Traditional Jhumka Earrings",
    price: 45200,
    originalPrice: 52000,
    image: "/images/gold/Gold%20Earrings/Gold%20Earrings/ANTIQUE%20JEWELS-%2007182061415.jpg",
    category: "Gold Earrings",
    description: "Classic South Indian jhumka with intricate temple design",
    weight: "6.8 grams",
    purity: "22K (916)",
    details: ["Classic South Indian design", "Intricate temple craftsmanship", "Bell-shaped jhumka style", "Perfect for weddings and festivals"]
  },
  {
    id: "earring-002",
    name: "Diamond Stud Earrings",
    price: 98000,
    originalPrice: 115000,
    image: "/images/earrings-1.jpeg",
    category: "Diamond Earrings",
    description: "Elegant round brilliant diamond studs in platinum setting",
    weight: "4.2 grams",
    purity: "18K",
    details: ["VS clarity certified diamonds", "Classic 4-prong setting", "Screw-back closure", "Daily wear elegant design"]
  },
  {
    id: "earring-003",
    name: "Chand Bali Earrings",
    price: 38500,
    originalPrice: 45000,
    image: "/images/gold/Gold%20Earrings/Gold%20Earrings/Antique%20Earrings%20MJ-%2072820871.jpg",
    category: "Gold Earrings",
    description: "Crescent moon shaped chand bali with pearl drops",
    weight: "5.5 grams",
    purity: "22K (916)",
    details: ["Crescent moon design", "Pearl drops included", "Traditional Indian style", "Lightweight comfortable wear"]
  },
  {
    id: "earring-004",
    name: "Floral Drop Earrings",
    price: 29800,
    originalPrice: 35000,
    image: "/images/gold/Gold%20Earrings/Gold%20Earrings/Antique%20Jumka%20MJ-%20723423370.jpg",
    category: "Gold Earrings",
    description: "Delicate floral pattern drop earrings with high polish",
    weight: "4.2 grams",
    purity: "22K (916)",
    details: ["Delicate floral motif", "High polish finish", "Everyday elegance", "Secure hook closure"]
  },
  {
    id: "earring-005",
    name: "Diamond Hoop Earrings",
    price: 125000,
    originalPrice: 145000,
    image: "/images/earrings-1.jpeg",
    category: "Diamond Earrings",
    description: "Sparkling diamond encrusted hoop earrings",
    weight: "6.8 grams",
    purity: "18K",
    details: ["Full diamond encrusted", "Inside-out diamond setting", "Hinged snap closure", "Statement piece"]
  },
  {
    id: "earring-006",
    name: "Temple Design Earrings",
    price: 52000,
    originalPrice: 60000,
    image: "/images/gold/Gold%20Earrings/Gold%20Earrings/Antique%20Jumka%20MJ-%20726501607.jpg",
    category: "Gold Earrings",
    description: "Traditional temple jewelry style with goddess motif",
    weight: "7.5 grams",
    purity: "22K (916)",
    details: ["Goddess Lakshmi design", "Temple jewelry tradition", "Antique finish available", "Auspicious design"]
  },
  {
    id: "earring-007",
    name: "Ruby Emerald Danglers",
    price: 75000,
    originalPrice: 88000,
    image: "/images/gold/Gold%20Earrings/Gold%20Earrings/Antique%20Stud%20MJ-%20728210888.jpg",
    category: "Gold Earrings",
    description: "Elegant dangler earrings with ruby and emerald stones",
    weight: "8.2 grams",
    purity: "22K (916)",
    details: ["Natural ruby and emerald stones", "Long dangler style", "Party wear collection", "Traditional color combination"]
  },
  {
    id: "earring-008",
    name: "Modern Geometric Earrings",
    price: 145000,
    originalPrice: 165000,
    image: "/images/earrings-1.jpeg",
    category: "Diamond Earrings",
    description: "Contemporary geometric design with princess cut diamonds",
    weight: "5.5 grams",
    purity: "18K",
    details: ["Princess cut diamonds", "Geometric pattern", "Contemporary design", "Push-back closure"]
  },
  {
    id: "earring-009",
    name: "Antique Finish Earrings",
    price: 42000,
    originalPrice: 48000,
    image: "/images/gold/Gold%20Earrings/Gold%20Earrings/ANTIQUE%20JEWELS-%2007182061415.jpg",
    category: "Gold Earrings",
    description: "Vintage antique finish with traditional patterns",
    weight: "6.2 grams",
    purity: "22K (916)",
    details: ["Antique matte finish", "Traditional patterns", "Vintage appeal", "Unique oxidized look"]
  },
  {
    id: "earring-010",
    name: "Pearl Cluster Earrings",
    price: 32000,
    originalPrice: 38000,
    image: "/images/gold/Gold%20Earrings/Gold%20Earrings/Antique%20Earrings%20MJ-%2072820871.jpg",
    category: "Gold Earrings",
    description: "Elegant cluster of freshwater pearls in gold setting",
    weight: "4.8 grams",
    purity: "22K (916)",
    details: ["Genuine freshwater pearls", "Cluster design", "Elegant and minimal", "Gift collection"]
  }
];

export default function EarringDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = earrings.find((e) => e.id === params.id);

  if (!product) {
    return (
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-serif text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-6">The earring you're looking for doesn't exist.</p>
          <Link href="/products/earrings" className="text-[#E92247] hover:underline">
            ← Back to Earrings
          </Link>
        </div>
      </main>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.image,
      collection: product.category,
      collectionSlug: "earrings",
    });
    toast.success(`${product.name} added to cart!`);
  };

  const handleBuyNow = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.image,
      collection: product.category,
      collectionSlug: "earrings",
    });
    toast.success(`${product.name} added to cart! Redirecting to checkout...`);
    setTimeout(() => {
      router.push("/checkout");
    }, 1000);
  };

  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#E92247] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/products/earrings" className="hover:text-[#E92247] transition-colors">Gold</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/products/earrings" className="hover:text-[#E92247] transition-colors">Earrings</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium truncate">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-gray-100 rounded-2xl overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              {discount > 0 && (
                <div className="absolute top-4 left-4 bg-[#E92247] text-white px-3 py-1 rounded-full text-sm font-medium">
                  {discount}% OFF
                </div>
              )}
            </div>
            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden cursor-pointer hover:ring-2 hover:ring-[#E92247] transition-all">
                  <Image
                    src={product.image}
                    alt={`${product.name} view ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Category & Title */}
            <div>
              <span className="text-[#E92247] text-sm font-medium">{product.category}</span>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif text-gray-900 mt-2">{product.name}</h1>
              <p className="text-gray-600 mt-2">{product.description}</p>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-gray-900">
                ₹{product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-lg text-gray-400 line-through">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                  <span className="text-green-600 text-sm font-medium">
                    Save ₹{(product.originalPrice - product.price).toLocaleString()}
                  </span>
                </>
              )}
            </div>

            {/* Specifications */}
            <div className="grid grid-cols-2 gap-4 py-4 border-y border-gray-200">
              <div>
                <span className="text-sm text-gray-500">Weight</span>
                <p className="font-medium text-gray-900">{product.weight}</p>
              </div>
              <div>
                <span className="text-sm text-gray-500">Purity</span>
                <p className="font-medium text-gray-900">{product.purity}</p>
              </div>
            </div>

            {/* Quantity */}
            <div>
              <label className="text-sm font-medium text-gray-900">Quantity</label>
              <div className="flex items-center gap-3 mt-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center hover:border-[#E92247] transition-colors"
                >
                  -
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center hover:border-[#E92247] transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center gap-2 bg-white text-gray-900 border border-gray-200 py-4 rounded-xl hover:bg-[#E92247] hover:text-white hover:border-[#E92247] transition-colors font-medium"
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
              <button
                onClick={handleBuyNow}
                className="flex-1 flex items-center justify-center gap-2 bg-[#E92247] text-white py-4 rounded-xl hover:bg-[#c91a3d] transition-colors font-medium"
              >
                Buy Now
              </button>
              <button className="w-14 h-14 border-2 border-gray-200 rounded-xl flex items-center justify-center text-gray-600 hover:border-[#E92247] hover:text-[#E92247] transition-colors">
                <Heart className="w-6 h-6" />
              </button>
              <button className="w-14 h-14 border-2 border-gray-200 rounded-xl flex items-center justify-center text-gray-600 hover:border-[#E92247] hover:text-[#E92247] transition-colors">
                <Share2 className="w-6 h-6" />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Truck className="w-5 h-5 text-[#E92247]" />
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Shield className="w-5 h-5 text-[#E92247]" />
                <span>BIS Hallmarked</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <RefreshCw className="w-5 h-5 text-[#E92247]" />
                <span>Easy Returns</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details */}
        {/* Price Breakup */}
        <div className="mt-12 md:mt-16">
          <h2 className="text-xl font-serif text-gray-900 mb-6">Price Breakup</h2>
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Gold Rate (per gram)</span>
                <span className="text-gray-900 font-medium">Rs. 6,500</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Gold Weight</span>
                <span className="text-gray-900 font-medium">{product.weight}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Making Charges</span>
                <span className="text-gray-900 font-medium">Rs. {Math.round(product.price * 0.15).toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">GST (3%)</span>
                <span className="text-gray-900 font-medium">Rs. {Math.round(product.price * 0.03).toLocaleString()}</span>
              </div>
              <div className="border-t pt-3 mt-3">
                <div className="flex justify-between">
                  <span className="text-gray-900 font-medium">Total Price</span>
                  <span className="text-xl font-bold text-[#E92247]">Rs. {product.price.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-16">
          <h2 className="text-xl font-serif text-gray-900 mb-6">Product Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-medium text-gray-900 mb-4">Specifications</h3>
              <ul className="space-y-3">
                <li className="flex justify-between text-sm">
                  <span className="text-gray-600">Product Code</span>
                  <span className="text-gray-900 font-medium">{product.id.toUpperCase()}</span>
                </li>
                <li className="flex justify-between text-sm">
                  <span className="text-gray-600">Category</span>
                  <span className="text-gray-900 font-medium">{product.category}</span>
                </li>
                <li className="flex justify-between text-sm">
                  <span className="text-gray-600">Material</span>
                  <span className="text-gray-900 font-medium">{product.purity}</span>
                </li>
                <li className="flex justify-between text-sm">
                  <span className="text-gray-600">Weight</span>
                  <span className="text-gray-900 font-medium">{product.weight}</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-medium text-gray-900 mb-4">Highlights</h3>
              <ul className="space-y-2">
                {product.details?.map((detail, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
