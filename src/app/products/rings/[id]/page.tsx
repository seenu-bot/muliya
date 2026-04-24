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
    purity: "22K (916)",
    details: ["Traditional South Indian Vanki design", "Premium 22K gold with 916 purity", "Intricate handcrafted detailing", "Perfect for weddings and special occasions"]
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
    purity: "18K",
    details: ["VS clarity diamond", "Premium 18K white gold", "Classic 4-prong setting", "Certified by IGI"]
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
    purity: "22K (916)",
    details: ["Comfort fit design", "Suitable for daily wear", "Scratch-resistant finish", "Hallmarked 916 gold"]
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
    purity: "22K (916)",
    details: ["Delicate floral motif", "Lightweight everyday design", "High polish finish", "Traditional craftsmanship"]
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
    purity: "18K",
    details: ["SI clarity diamonds", "Cluster design for maximum sparkle", "Premium 18K gold", "Perfect engagement ring"]
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
    purity: "22K (916)",
    details: ["Goddess Lakshmi design", "Temple jewelry style", "Auspicious design", "Antique finish available"]
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
    purity: "22K (916)",
    details: ["Natural ruby and emerald stones", "Statement cocktail design", "Party wear collection", "Eye-catching colors"]
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
    purity: "18K",
    details: ["Princess cut diamonds", "Modern geometric pattern", "Contemporary design", "Bridal collection"]
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
    purity: "22K (916)",
    details: ["Antique matte finish", "Traditional patterns", "Vintage appeal", "Unique oxidized look"]
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
    purity: "22K (916)",
    details: ["Genuine freshwater pearl", "Delicate gold setting", "Elegant and minimal", "Gift collection"]
  }
];

export default function RingDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState("16");
  const [quantity, setQuantity] = useState(1);

  const product = rings.find((r) => r.id === params.id);

  if (!product) {
    return (
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-serif text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-6">The ring you're looking for doesn't exist.</p>
          <Link href="/products/rings" className="text-[#E92247] hover:underline">
            ← Back to Rings
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
      collectionSlug: "rings",
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
      collectionSlug: "rings",
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
            <Link href="/products/rings" className="hover:text-[#E92247] transition-colors">Gold</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/products/rings" className="hover:text-[#E92247] transition-colors">Rings</Link>
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

            {/* Size Selection */}
            <div>
              <label className="text-sm font-medium text-gray-900">Select Size</label>
              <div className="flex flex-wrap gap-2 mt-2">
                {["14", "15", "16", "17", "18", "19", "20"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 rounded-lg border-2 font-medium transition-all ${
                      selectedSize === size
                        ? "border-[#E92247] bg-[#E92247] text-white"
                        : "border-gray-200 hover:border-[#E92247] text-gray-700"
                    }`}
                  >
                    {size}
                  </button>
                ))}
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
                <span className="text-gray-900 font-medium">Rs. 2,500</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">GST (3%)</span>
                <span className="text-gray-900 font-medium">Rs. 195</span>
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
                <li className="flex justify-between text-sm">
                  <span className="text-gray-600">Purity</span>
                  <span className="text-gray-900 font-medium">22KT (916)</span>
                </li>
                <li className="flex justify-between text-sm">
                  <span className="text-gray-600">Collection</span>
                  <span className="text-gray-900 font-medium">Traditional</span>
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
                  BIS Hallmarked Gold
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Lifetime Exchange Policy
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Certified by IGI
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
