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
    purity: "22K (916)",
    details: ["Classic thick design", "Traditional craftsmanship", "Comfortable fit", "Wedding special"]
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
    purity: "18K",
    details: ["Premium diamonds", "Elegant sparkle", "Modern design", "Luxury piece"]
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
    purity: "22K (916)",
    details: ["Temple style", "Intricate motifs", "Heavy traditional", "Auspicious design"]
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
    purity: "22K (916)",
    details: ["Colorful gemstones", "Traditional colors", "Festive wear", "Statement piece"]
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
    purity: "22K (916)",
    details: ["Antique finish", "Vintage patterns", "Matte look", "Heritage style"]
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
    purity: "18K",
    details: ["Brilliant diamonds", "Contemporary style", "Modern bridal", "Elegant sparkle"]
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
    purity: "22K (916)",
    details: ["Peacock motif", "Intricate carving", "Indian tradition", "Graceful design"]
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
    purity: "22K (916)",
    details: ["Filigree art", "Lightweight", "Delicate design", "Daily wear"]
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
    purity: "22K (916)",
    details: ["Bridal special", "Matching pair", "Grand design", "Wedding essential"]
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
    purity: "22K (916)",
    details: ["Screw lock", "Easy wear", "Secure fit", "Simple elegant"]
  }
];

export default function KadaaDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = kadaas.find((k) => k.id === params.id);

  if (!product) {
    return (
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-serif text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-6">The kadaa you're looking for doesn't exist.</p>
          <Link href="/products/kadaas" className="text-[#E92247] hover:underline">← Back to Kadaas</Link>
        </div>
      </main>
    );
  }

  const handleAddToCart = () => {
    addToCart({ id: product.id, name: product.name, price: product.price, originalPrice: product.originalPrice, image: product.image, collection: product.category, collectionSlug: "kadaas" });
    toast.success(`${product.name} added to cart!`);
  };

  const handleBuyNow = () => {
    addToCart({ id: product.id, name: product.name, price: product.price, originalPrice: product.originalPrice, image: product.image, collection: product.category, collectionSlug: "kadaas" });
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
            <Link href="/products/kadaas" className="hover:text-[#E92247] transition-colors">Gold</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/products/kadaas" className="hover:text-[#E92247] transition-colors">Kadaas</Link>
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
