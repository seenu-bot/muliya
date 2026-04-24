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
    purity: "22K (916)",
    details: ["Set of 4 bangles", "Traditional design", "Comfortable fit", "Daily wear"]
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
    purity: "18K",
    details: ["Premium diamonds", "Elegant sparkle", "Statement piece", "Party wear"]
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
    purity: "22K (916)",
    details: ["Temple style", "Intricate motifs", "Heavy traditional", "Festive wear"]
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
    purity: "22K (916)",
    details: ["Natural ruby stones", "Traditional colors", "Auspicious red", "Bridal suitable"]
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
    purity: "22K (916)",
    details: ["Antique finish", "Vintage patterns", "Matte look", "Heritage style"]
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
    purity: "18K",
    details: ["Brilliant diamonds", "Modern cut", "Contemporary", "Elegant shine"]
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
    purity: "22K (916)",
    details: ["Plain design", "High polish", "Lightweight", "Versatile"]
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
    purity: "22K (916)",
    details: ["Filigree art", "Delicate work", "Lightweight", "Artistic"]
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
    purity: "22K (916)",
    details: ["Bridal special", "Chura style", "Grand design", "Wedding essential"]
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
    purity: "22K (916)",
    details: ["Natural emeralds", "Green prosperity", "Traditional", "Festive"]
  }
];

export default function BangleDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = bangles.find((b) => b.id === params.id);

  if (!product) {
    return (
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-serif text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-6">The bangle you're looking for doesn't exist.</p>
          <Link href="/products/bangles" className="text-[#E92247] hover:underline">← Back to Bangles</Link>
        </div>
      </main>
    );
  }

  const handleAddToCart = () => {
    addToCart({ id: product.id, name: product.name, price: product.price, originalPrice: product.originalPrice, image: product.image, collection: product.category, collectionSlug: "bangles" });
    toast.success(`${product.name} added to cart!`);
  };

  const handleBuyNow = () => {
    addToCart({ id: product.id, name: product.name, price: product.price, originalPrice: product.originalPrice, image: product.image, collection: product.category, collectionSlug: "bangles" });
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
            <Link href="/products/bangles" className="hover:text-[#E92247] transition-colors">Gold</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/products/bangles" className="hover:text-[#E92247] transition-colors">Bangles</Link>
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
              <div className="flex items-center gap-2 text-sm text-gray-600"><Shield className="w-5 h-5 text-[#E92247]" /><span>BIS Hallmarked</span></div>
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
                <li className="flex justify-between text-sm"><span className="text-gray-600">Product Code</span><span className="text-gray-900 font-medium">{product.id.toUpperCase()}</span></li>
                <li className="flex justify-between text-sm"><span className="text-gray-600">Category</span><span className="text-gray-900 font-medium">{product.category}</span></li>
                <li className="flex justify-between text-sm"><span className="text-gray-600">Material</span><span className="text-gray-900 font-medium">{product.purity}</span></li>
                <li className="flex justify-between text-sm"><span className="text-gray-600">Weight</span><span className="text-gray-900 font-medium">{product.weight}</span></li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-medium text-gray-900 mb-4">Highlights</h3>
              <ul className="space-y-2">
                {product.details?.map((detail, index) => (<li key={index} className="flex items-start gap-2 text-sm text-gray-700"><Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />{detail}</li>))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
