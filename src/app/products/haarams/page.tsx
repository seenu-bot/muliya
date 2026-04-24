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

const BANNER_SRC = "/category/Gemini_Generated_Image_uacnh2uacnh2uacn (4).png";

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

const harams: Product[] = [
  {
    id: "haram-001",
    name: "Traditional Gold Haram",
    price: 285000,
    originalPrice: 325000,
    image: "/images/gold/Gold%20Harams/Gold%20Harams/ANTIQUE%20HARAM%20MJ%20-%200738202426.jpg",
    category: "Gold Harams",
    description: "Classic South Indian haram with intricate temple design",
    weight: "45.5 grams",
    purity: "22K (916)"
  },
  {
    id: "haram-002",
    name: "Diamond Studded Haram",
    price: 485000,
    originalPrice: 550000,
    image: "/images/diamond/Haarams.png",
    category: "Diamond Harams",
    description: "Elegant long haram with diamond embellishments",
    weight: "38.2 grams",
    purity: "18K"
  },
  {
    id: "haram-003",
    name: "Lakshmi Coin Haram",
    price: 325000,
    originalPrice: 375000,
    image: "/images/gold/Gold%20Harams/Gold%20Harams/ANTIQUE%20HARAM%20MJ-%200758224119.jpg",
    category: "Gold Harams",
    description: "Traditional kasu malai with Goddess Lakshmi coins",
    weight: "52.8 grams",
    purity: "22K (916)"
  },
  {
    id: "haram-004",
    name: "Ruby Emerald Haram",
    price: 425000,
    originalPrice: 485000,
    image: "/images/gold/Gold%20Harams/Gold%20Harams/Antique%20Haaram%20MJ-%201226501390.jpg",
    category: "Gold Harams",
    description: "Stunning long haram with ruby and emerald stones",
    weight: "48.5 grams",
    purity: "22K (916)"
  },
  {
    id: "haram-005",
    name: "Antique Finish Haram",
    price: 295000,
    originalPrice: 335000,
    image: "/images/gold/Gold%20Harams/Gold%20Harams/Antique%20Haaram%20MJ-%20728202743.jpg",
    category: "Gold Harams",
    description: "Vintage antique finish haram with traditional patterns",
    weight: "46.2 grams",
    purity: "22K (916)"
  },
  {
    id: "haram-006",
    name: "Modern Diamond Haram",
    price: 525000,
    originalPrice: 595000,
    image: "/images/diamond/Haarams.png",
    category: "Diamond Harams",
    description: "Contemporary design with brilliant cut diamonds",
    weight: "42.5 grams",
    purity: "18K"
  },
  {
    id: "haram-007",
    name: "Pearl Drop Haram",
    price: 185000,
    originalPrice: 215000,
    image: "/images/gold/Gold%20Harams/Gold%20Harams/Antique%20Haaram%20MJ-%207282051589.jpg",
    category: "Gold Harams",
    description: "Elegant haram with pearl drops and gold beads",
    weight: "35.8 grams",
    purity: "22K (916)"
  },
  {
    id: "haram-008",
    name: "Layered Gold Haram",
    price: 385000,
    originalPrice: 435000,
    image: "/images/gold/Gold%20Harams/Gold%20Harams/ANTIQUE%20HARAM%20MJ%20-%200738202426.jpg",
    category: "Gold Harams",
    description: "Multi-layered design with intricate craftsmanship",
    weight: "58.5 grams",
    purity: "22K (916)"
  },
  {
    id: "haram-009",
    name: "Bridal Temple Haram",
    price: 625000,
    originalPrice: 725000,
    image: "/images/gold/Gold%20Harams/Gold%20Harams/ANTIQUE%20HARAM%20MJ-%200758224119.jpg",
    category: "Gold Harams",
    description: "Bridal collection with temple design and deity motifs",
    weight: "72.8 grams",
    purity: "22K (916)"
  },
  {
    id: "haram-010",
    name: "Filigree Work Haram",
    price: 245000,
    originalPrice: 275000,
    image: "/images/gold/Gold%20Harams/Gold%20Harams/Antique%20Haaram%20MJ-%201226501390.jpg",
    category: "Gold Harams",
    description: "Delicate filigree work with lightweight design",
    weight: "32.5 grams",
    purity: "22K (916)"
  }
];

export default function HaramsPage() {
  const { addToCart } = useCart();
  const router = useRouter();
  const [filteredHaarams, setFilteredHaarams] = useState(harams);
  const [sortOption, setSortOption] = useState("latest");

  const handleAddToCart = (product: Product, e?: React.MouseEvent) => {
    e?.stopPropagation();
    addToCart({ id: product.id, name: product.name, price: product.price, originalPrice: product.originalPrice, image: product.image, collection: product.category, collectionSlug: "haarams" });
    toast.success(`${product.name} added to cart!`);
  };

  const handleBuyNow = (product: Product, e?: React.MouseEvent) => {
    e?.stopPropagation();
    addToCart({ id: product.id, name: product.name, price: product.price, originalPrice: product.originalPrice, image: product.image, collection: product.category, collectionSlug: "haarams" });
    toast.success(`${product.name} added to cart! Redirecting to checkout...`);
    setTimeout(() => {
      router.push("/checkout");
    }, 1000);
  };

  const handleProductClick = (productId: string) => {
    router.push(`/products/haarams/${productId}`);
  };

  const handleSortChange = (sort: string) => {
    setSortOption(sort);
    let sorted = [...harams];
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
    setFilteredHaarams(sorted);
  };

  const handlePriceRangeChange = (range: string) => {
    const [min, max] = range.split("-").map(v => v === "+" ? Infinity : parseInt(v.replace("+", "")));
    const filtered = harams.filter(haram => {
      const price = haram.price;
      if (max === Infinity) return price >= min;
      return price >= min && price <= max;
    });
    setFilteredHaarams(filtered);
  };

  const handleMaterialChange = (material: string) => {
    const filtered = harams.filter(haram => 
      haram.category.toLowerCase().includes(material)
    );
    setFilteredHaarams(filtered);
  };

  const handleWeightChange = (weight: string) => {
    const [min, max] = weight.split("-").map(v => v === "+" ? Infinity : parseFloat(v));
    const filtered = harams.filter(haram => {
      if (!haram.weight) return false;
      const weightNum = parseFloat(haram.weight.replace(/[^0-9.]/g, ""));
      if (max === Infinity) return weightNum >= min;
      return weightNum >= min && weightNum <= max;
    });
    setFilteredHaarams(filtered);
  };

  const handleDiscountChange = (discount: string) => {
    const filtered = harams.filter(haram => haram.originalPrice !== undefined);
    setFilteredHaarams(filtered);
  };

  const handleClearFilters = () => {
    setFilteredHaarams(harams);
    setSortOption("latest");
  };

  return (
    <main className="min-h-screen bg-white">
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#E92247] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/products/haarams" className="hover:text-[#E92247] transition-colors">Gold</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">Harams</span>
          </nav>
        </div>
      </div>

      <div className="relative bg-gradient-to-r from-amber-50 to-yellow-50 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallbackNext src={BANNER_SRC} alt="Harams banner" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4 drop-shadow">Harams</h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto drop-shadow">Discover our exquisite collection of traditional South Indian harams. From temple designs to diamond studded pieces, find the perfect long necklace for special occasions.</p>
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
                Showing {filteredHaarams.length} items
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredHaarams.map((haram) => (
            <div key={haram.id} onClick={() => handleProductClick(haram.id)} className="group bg-white overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer">
              <div className="relative aspect-square overflow-hidden bg-gray-100 flex-shrink-0">
                <ImageWithFallbackNext src={haram.image} alt={haram.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <button onClick={(e) => handleAddToCart(haram, e)} className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-[#E92247] hover:bg-[#E92247] hover:text-white transition-colors" title="Add to Cart"><ShoppingCart className="w-5 h-5" /></button>
                  <button onClick={(e) => e.stopPropagation()} className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-[#E92247] transition-colors" title="Add to Wishlist"><Heart className="w-5 h-5" /></button>
                </div>
                <div className="absolute top-4 left-4"><span className="bg-[#E92247] text-white px-3 py-1 rounded-full text-xs font-medium">{haram.category}</span></div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-serif text-lg text-gray-900 mb-2 group-hover:text-[#E92247] transition-colors">{haram.name}</h3>
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-3"><span>{haram.weight}</span><span>•</span><span>{haram.purity}</span></div>
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-3"><span>{haram.weight}</span><span>•</span><span>{haram.purity}</span></div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl font-bold text-[#E92247]">₹{formatINR(haram.price)}</span>
                  {haram.originalPrice && <span className="text-sm text-gray-400 line-through">₹{formatINR(haram.originalPrice)}</span>}
                </div>
                <div className="flex gap-2 mt-auto">
                  <button onClick={(e) => handleAddToCart(haram, e)} className="flex-1 flex items-center justify-center gap-2 bg-white text-gray-900 border border-gray-200 py-2 rounded-xl hover:bg-[#E92247] hover:text-white hover:border-[#E92247] transition-colors font-medium text-sm"><ShoppingCart className="w-4 h-4" />Add to Cart</button>
                  <button onClick={(e) => handleBuyNow(haram, e)} className="flex-1 bg-[#E92247] text-white py-2 rounded-xl hover:bg-[#d11f3f] transition-colors font-medium text-sm">Buy Now</button>
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
