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
    purity: "18K",
    details: ["VS Clarity Diamond", "Solitaire Setting", "Includes Chain", "Classic Design"]
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
    purity: "18K",
    details: ["Heart Shape Diamond", "Romantic Design", "Gift Ready", "Symbolic"]
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
    purity: "18K",
    details: ["Halo Setting", "Enhanced Sparkle", "Modern Design", "Eye Catching"]
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
    purity: "18K",
    details: ["Graduated Stones", "Symbolic Design", "Life Journey", "Meaningful"]
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
    purity: "18K",
    details: ["Cross Design", "Pave Setting", "Faith Symbol", "Understated"]
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
    purity: "18K",
    details: ["Infinity Symbol", "Forever Love", "Continuous Stones", "Romantic"]
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
    purity: "18K",
    details: ["Teardrop Shape", "Elegant Drop", "Movement", "Graceful"]
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
    purity: "18K",
    details: ["Circle Design", "Continuous Stones", "Eternity", "Premium"]
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
    purity: "18K",
    details: ["Cluster Setting", "Floral Design", "Multiple Stones", "Sparkling"]
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
    purity: "18K",
    details: ["Princess Cut", "Square Shape", "Modern", "Contemporary"]
  }
];

export default function DiamondPendantDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = diamondPendants.find((p) => p.id === params.id);

  if (!product) {
    return (
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-serif text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-6">The diamond pendant you're looking for doesn't exist.</p>
          <Link href="/products/diamond-pendants" className="text-[#E92247] hover:underline">← Back to Diamond Pendants</Link>
        </div>
      </main>
    );
  }

  const handleAddToCart = () => {
    addToCart({ id: product.id, name: product.name, price: product.price, originalPrice: product.originalPrice, image: product.image, collection: product.category, collectionSlug: "diamond-pendants" });
    toast.success(`${product.name} added to cart!`);
  };

  const handleBuyNow = () => {
    addToCart({ id: product.id, name: product.name, price: product.price, originalPrice: product.originalPrice, image: product.image, collection: product.category, collectionSlug: "diamond-pendants" });
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
            <Link href="/products/diamond-pendants" className="hover:text-[#E92247] transition-colors">Diamond</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/products/diamond-pendants" className="hover:text-[#E92247] transition-colors">Diamond Pendants</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium truncate">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-4">
            <div className="relative aspect-square bg-gray-100 rounded-2xl overflow-hidden">
              <Image src={product.image} alt={product.name} fill className="object-cover" priority />
              {discount > 0 && <div className="absolute top-4 left-4 bg-[#E92247] text-white px-3 py-1 rounded-full text-sm font-medium">{discount}% OFF</div>}
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[1,2,3,4].map((i) => (
                <div key={i} className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden cursor-pointer hover:ring-2 hover:ring-[#E92247] transition-all">
                  <Image src={product.image} alt={`${product.name} view ${i}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <span className="text-[#E92247] text-sm font-medium">{product.category}</span>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif text-gray-900 mt-2">{product.name}</h1>
              <p className="text-gray-600 mt-2">{product.description}</p>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
              {product.originalPrice && <><span className="text-lg text-gray-400 line-through">₹{product.originalPrice.toLocaleString()}</span><span className="text-green-600 text-sm font-medium">Save ₹{(product.originalPrice - product.price).toLocaleString()}</span></>}
            </div>

            <div className="grid grid-cols-2 gap-4 py-4 border-y border-gray-200">
              <div><span className="text-sm text-gray-500">Weight</span><p className="font-medium text-gray-900">{product.weight}</p></div>
              <div><span className="text-sm text-gray-500">Purity</span><p className="font-medium text-gray-900">{product.purity}</p></div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-900">Quantity</label>
              <div className="flex items-center gap-3 mt-2">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center hover:border-[#E92247] transition-colors">-</button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center hover:border-[#E92247] transition-colors">+</button>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <button onClick={handleAddToCart} className="flex-1 flex items-center justify-center gap-2 bg-white text-gray-900 border border-gray-200 py-4 rounded-xl hover:bg-[#E92247] hover:text-white hover:border-[#E92247] transition-colors font-medium"><ShoppingCart className="w-5 h-5" />Add to Cart</button>
              <button onClick={handleBuyNow} className="flex-1 flex items-center justify-center gap-2 bg-[#E92247] text-white py-4 rounded-xl hover:bg-[#c91a3d] transition-colors font-medium">Buy Now</button>
              <button className="w-14 h-14 border-2 border-gray-200 rounded-xl flex items-center justify-center text-gray-600 hover:border-[#E92247] hover:text-[#E92247] transition-colors"><Heart className="w-6 h-6" /></button>
              <button className="w-14 h-14 border-2 border-gray-200 rounded-xl flex items-center justify-center text-gray-600 hover:border-[#E92247] hover:text-[#E92247] transition-colors"><Share2 className="w-6 h-6" /></button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="flex items-center gap-2 text-sm text-gray-600"><Truck className="w-5 h-5 text-[#E92247]" /><span>Free Shipping</span></div>
              <div className="flex items-center gap-2 text-sm text-gray-600"><Shield className="w-5 h-5 text-[#E92247]" /><span>IGI Certified</span></div>
              <div className="flex items-center gap-2 text-sm text-gray-600"><RefreshCw className="w-5 h-5 text-[#E92247]" /><span>Easy Returns</span></div>
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
                <span className="text-gray-900 font-medium">4.2g</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Diamond Value</span>
                <span className="text-gray-900 font-medium">Rs. 28,000</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Making Charges</span>
                <span className="text-gray-900 font-medium">Rs. 4,500</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">GST (3%)</span>
                <span className="text-gray-900 font-medium">Rs. 1,095</span>
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
                  <span className="text-gray-600">Gold Weight</span>
                  <span className="text-gray-900 font-medium">{product.weight}</span>
                </li>
                <li className="flex justify-between text-sm">
                  <span className="text-gray-600">Diamond Weight</span>
                  <span className="text-gray-900 font-medium">0.32 ct</span>
                </li>
                <li className="flex justify-between text-sm">
                  <span className="text-gray-600">Collection</span>
                  <span className="text-gray-900 font-medium">Amuliya Diamonds</span>
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
                  IGI Certified Diamonds
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Lifetime Exchange Policy
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  BIS Hallmarked Gold
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Diamond Details */}
        <div className="mt-12 md:mt-16">
          <h2 className="text-xl font-serif text-gray-900 mb-6">Diamond Details</h2>
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-medium text-gray-900 mb-4">Main Diamond</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between text-sm">
                    <span className="text-gray-600">Shape</span>
                    <span className="text-gray-900 font-medium">Round</span>
                  </li>
                  <li className="flex justify-between text-sm">
                    <span className="text-gray-600">Carat Weight</span>
                    <span className="text-gray-900 font-medium">0.32 ct</span>
                  </li>
                  <li className="flex justify-between text-sm">
                    <span className="text-gray-600">Color</span>
                    <span className="text-gray-900 font-medium">G</span>
                  </li>
                  <li className="flex justify-between text-sm">
                    <span className="text-gray-600">Clarity</span>
                    <span className="text-gray-900 font-medium">VS1</span>
                  </li>
                  <li className="flex justify-between text-sm">
                    <span className="text-gray-600">Cut</span>
                    <span className="text-gray-900 font-medium">Excellent</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-4">Side Diamonds</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between text-sm">
                    <span className="text-gray-600">Number of Diamonds</span>
                    <span className="text-gray-900 font-medium">8</span>
                  </li>
                  <li className="flex justify-between text-sm">
                    <span className="text-gray-600">Total Carat Weight</span>
                    <span className="text-gray-900 font-medium">0.12 ct</span>
                  </li>
                  <li className="flex justify-between text-sm">
                    <span className="text-gray-600">Color</span>
                    <span className="text-gray-900 font-medium">G-H</span>
                  </li>
                  <li className="flex justify-between text-sm">
                    <span className="text-gray-600">Clarity</span>
                    <span className="text-gray-900 font-medium">VS2-SI1</span>
                  </li>
                  <li className="flex justify-between text-sm">
                    <span className="text-gray-600">Setting</span>
                    <span className="text-gray-900 font-medium">Pave</span>
                  </li>
                </ul>
              </div>
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
