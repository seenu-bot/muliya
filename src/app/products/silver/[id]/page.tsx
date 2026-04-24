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
  subcategory: string;
  description: string;
  weight?: string;
  purity?: string;
  details?: string[];
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
    purity: "925 Sterling",
    details: ["Classic Design", "Comfort Fit", "Everyday Wear", "Hypoallergenic"]
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
    purity: "925 Sterling",
    details: ["Signet Style", "Engravable", "Traditional", "Bold"]
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
    purity: "925 Sterling",
    details: ["Stone Accent", "Semi-precious", "Elegant", "Gift Ready"]
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
    purity: "925 Sterling",
    details: ["Chain Design", "Lobster Clasp", "Adjustable", "Layering"]
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
    purity: "925 Sterling",
    details: ["Bangle Style", "Intricate Pattern", "Traditional", "Stackable"]
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
    purity: "925 Sterling",
    details: ["Cuff Design", "Open End", "Modern", "Adjustable"]
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
    purity: "925 Sterling",
    details: ["Analog Display", "Quartz Movement", "Water Resistant", "Classic Style"]
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
    purity: "925 Sterling",
    details: ["Digital Display", "LED Backlight", "Alarm Function", "Modern"]
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
    purity: "925 Sterling",
    details: ["Chronograph", "Stopwatch", "Premium", "Professional"]
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
    purity: "925 Sterling",
    details: ["Cross Design", "Spiritual", "Timeless", "Gift Ready"]
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
    purity: "925 Sterling",
    details: ["Heart Shape", "Romantic", "Gift Ready", "Symbolic"]
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
    purity: "925 Sterling",
    details: ["Om Symbol", "Spiritual", "Cultural", "Blessing"]
  }
];

export default function SilverProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = silverProducts.find((p) => p.id === params.id);

  if (!product) {
    return (
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-serif text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-6">The silver product you're looking for doesn't exist.</p>
          <Link href="/products/silver" className="text-[#E92247] hover:underline">← Back to Silver Collection</Link>
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
      collectionSlug: "silver" 
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
      collectionSlug: "silver" 
    });
    toast.success(`${product.name} added to cart! Redirecting to checkout...`);
    setTimeout(() => {
      router.push("/checkout");
    }, 1000);
  };

  const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;

  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#E92247] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/products/silver" className="hover:text-[#E92247] transition-colors">Silver</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href={`/products/silver#${product.subcategory.toLowerCase()}`} className="hover:text-[#E92247] transition-colors">{product.subcategory}</Link>
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
            <div className="grid grid-cols-4 gap-3">
              {[1,2,3,4].map((i) => (
                <div 
                  key={i} 
                  className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden cursor-pointer hover:ring-2 hover:ring-[#E92247] transition-all"
                >
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
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#E92247] text-sm font-medium">{product.category}</span>
                <span className="text-gray-400">•</span>
                <Link href={`/products/silver#${product.subcategory.toLowerCase()}`} className="text-gray-500 text-sm hover:text-[#E92247] transition-colors">{product.subcategory}</Link>
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif text-gray-900">{product.name}</h1>
              <p className="text-gray-600 mt-2">{product.description}</p>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
              {product.originalPrice && (
                <>
                  <span className="text-lg text-gray-400 line-through">₹{product.originalPrice.toLocaleString()}</span>
                  <span className="text-green-600 text-sm font-medium">Save ₹{(product.originalPrice - product.price).toLocaleString()}</span>
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

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <button 
                onClick={handleAddToCart} 
                className="flex-1 flex items-center justify-center gap-2 bg-white text-gray-900 border border-gray-200 py-4 rounded-xl hover:bg-[#E92247] hover:text-white hover:border-[#E92247] transition-colors font-medium"
              >
                <ShoppingCart className="w-5 h-5" />Add to Cart
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
                <span>925 Certified</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <RefreshCw className="w-5 h-5 text-[#E92247]" />
                <span>Easy Returns</span>
              </div>
            </div>
          </div>
        </div>

        {/* Price Breakup */}
        <div className="mt-12 md:mt-16">
          <h2 className="text-xl font-serif text-gray-900 mb-6">Price Breakup</h2>
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Silver Rate (per gram)</span>
                <span className="text-gray-900 font-medium">Rs. 75</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Silver Weight</span>
                <span className="text-gray-900 font-medium">{product.weight}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Making Charges</span>
                <span className="text-gray-900 font-medium">Rs. 500</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">GST (3%)</span>
                <span className="text-gray-900 font-medium">Rs. 45</span>
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

        {/* Product Details Section */}
        {/* Price Breakup */}
        <div className="mt-12 md:mt-16">
          <h2 className="text-xl font-serif text-gray-900 mb-6">Price Breakup</h2>
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Silver Rate (per gram)</span>
                <span className="text-gray-900 font-medium">Rs. 75</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Silver Weight</span>
                <span className="text-gray-900 font-medium">{product.weight}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Making Charges</span>
                <span className="text-gray-900 font-medium">Rs. {Math.round(product.price * 0.25).toLocaleString()}</span>
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
                  <span className="text-gray-900 font-medium">{product.subcategory}</span>
                </li>
                <li className="flex justify-between text-sm">
                  <span className="text-gray-600">Material</span>
                  <span className="text-gray-900 font-medium">{product.purity}</span>
                </li>
                <li className="flex justify-between text-sm">
                  <span className="text-gray-600">Weight</span>
                  <span className="text-gray-900 font-medium">{product.weight}</span>
                </li>
                <li className="flex justify-between text-sm">
                  <span className="text-gray-600">Purity</span>
                  <span className="text-gray-900 font-medium">925 Sterling Silver</span>
                </li>
                <li className="flex justify-between text-sm">
                  <span className="text-gray-600">Collection</span>
                  <span className="text-gray-900 font-medium">Silveriya</span>
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
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  925 Certified Silver
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Lifetime Exchange Policy
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Anti-tarnish Coating
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Additional Actions */}
        <div className="mt-12 md:mt-16">
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 bg-[#E92247] text-white py-3 px-6 rounded-xl hover:bg-[#c91a3d] transition-colors font-medium">
              Book Virtual Appointment
            </button>
            <button className="flex-1 border-2 border-[#E92247] text-[#E92247] py-3 px-6 rounded-xl hover:bg-[#E92247] hover:text-white transition-colors font-medium">
              Request Callback
            </button>
            <button className="flex-1 border-2 border-gray-300 text-gray-700 py-3 px-6 rounded-xl hover:border-[#E92247] hover:text-[#E92247] transition-colors font-medium">
              Visit Store
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
