"use client";

import { useState, use } from "react";
import { notFound, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";
import { collections, getProductById, formatPrice } from "@/app/data/collections";
import { 
  ChevronRight, 
  ShoppingCart, 
  Heart, 
  Share2, 
  Truck, 
  Shield, 
  RefreshCw,
  ChevronDown,
  IndianRupee
} from "lucide-react";

interface ProductPageProps {
  params: Promise<{
    slug: string;
    productId: string;
  }>;
}

export default function ProductPage({ params }: ProductPageProps) {
  const { slug, productId } = use(params);
  const router = useRouter();
  const { addToCart } = useCart();
  const fullProductId = productId.replace("-", ":"); // Convert MJ-001 back to MJ:001
  const result = getProductById(fullProductId);
  
  if (!result) {
    notFound();
  }
  
  const { product, collection } = result;

  // Accordion state
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setOpenSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#E92247] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/collections" className="hover:text-[#E92247] transition-colors">
              Collections
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href={`/collections/${collection.slug}`} className="hover:text-[#E92247] transition-colors">
              {collection.name}
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium truncate max-w-[200px]">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Details */}
      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Product Image */}
            <div className="relative">
              <div className="relative aspect-square bg-gray-50 rounded-2xl overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain p-8"
                  priority
                />
                
                {/* Product ID Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-sm">
                  <span className="text-sm font-medium text-[#8B4513]">{product.id}</span>
                </div>
                
                {/* Wishlist & Share */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm hover:bg-[#E92247] hover:text-white transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm hover:bg-gray-100 transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              {/* Thumbnail Strip */}
              <div className="flex gap-2 mt-4">
                <div className="w-20 h-20 rounded-lg border-2 border-[#E92247] overflow-hidden bg-gray-50">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-contain p-2"
                  />
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              {/* Collection Tag */}
              <Link 
                href={`/collections/${collection.slug}`}
                className="text-sm text-[#E92247] font-medium mb-2 hover:underline"
              >
                {collection.name} Collection
              </Link>
              
              {/* Product Name */}
              <h1 className="text-2xl md:text-3xl font-serif text-gray-900 mb-4">
                {product.name}
              </h1>
              
              {/* Product ID */}
              <p className="text-sm text-gray-500 mb-4">Product ID: {product.id}</p>
              
              {/* Price */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-semibold text-[#E92247]">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-gray-400 line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                    <span className="bg-green-100 text-green-700 text-sm px-2 py-1 rounded">
                      {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                    </span>
                  </>
                )}
              </div>
              
              {/* Metal & Weight */}
              <div className="flex flex-wrap gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                {product.metal && (
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Metal</p>
                    <p className="text-sm font-medium text-gray-900">{product.metal}</p>
                  </div>
                )}
                {product.weight && (
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Weight</p>
                    <p className="text-sm font-medium text-gray-900">{product.weight}</p>
                  </div>
                )}
              </div>
              
              {/* Description */}
              {product.description && (
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>
              )}
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <button 
                  onClick={() => addToCart({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    originalPrice: product.originalPrice,
                    image: product.image,
                    collection: collection.name,
                    collectionSlug: collection.slug,
                    metal: product.metal,
                    weight: product.weight,
                  })}
                  className="flex-1 bg-white text-black border border-gray-300 py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
                <button 
                  onClick={() => {
                    addToCart({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      originalPrice: product.originalPrice,
                      image: product.image,
                      collection: collection.name,
                      collectionSlug: collection.slug,
                      metal: product.metal,
                      weight: product.weight,
                    });
                    router.push("/checkout");
                  }}
                  className="flex-1 bg-[#E92247] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#d11f3f] transition-colors"
                >
                  Buy Now
                </button>
              </div>
              
              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg mb-6">
                <div className="flex items-center gap-2">
                  <Truck className="w-5 h-5 text-gray-600" />
                  <span className="text-xs text-gray-600">Free Shipping</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-gray-600" />
                  <span className="text-xs text-gray-600">Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <RefreshCw className="w-5 h-5 text-gray-600" />
                  <span className="text-xs text-gray-600">Easy Returns</span>
                </div>
              </div>

              {/* Accordion Sections */}
              <div className="border-t border-gray-200">
                {/* Product Details */}
                <div className="border-b border-gray-200">
                  <button
                    onClick={() => toggleSection('product-details')}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-lg font-medium text-gray-900">Product Details</span>
                    <ChevronDown 
                      className={`w-5 h-5 text-gray-500 transition-transform ${openSections.includes('product-details') ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  {openSections.includes('product-details') && (
                    <div className="pb-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-500">Product ID</p>
                          <p className="font-medium text-gray-900">{product.id}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Collection</p>
                          <p className="font-medium text-gray-900">{collection.name}</p>
                        </div>
                        {product.metal && (
                          <div>
                            <p className="text-gray-500">Metal</p>
                            <p className="font-medium text-gray-900">{product.metal}</p>
                          </div>
                        )}
                        {product.weight && (
                          <div>
                            <p className="text-gray-500">Weight</p>
                            <p className="font-medium text-gray-900">{product.weight}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Side Diamond Details */}
                <div className="border-b border-gray-200">
                  <button
                    onClick={() => toggleSection('diamond-details')}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-lg font-medium text-gray-900">Side Diamond Details</span>
                    <ChevronDown 
                      className={`w-5 h-5 text-gray-500 transition-transform ${openSections.includes('diamond-details') ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  {openSections.includes('diamond-details') && (
                    <div className="pb-4">
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-500">Total Diamond Weight</span>
                          <span className="font-medium text-gray-900">0.25 Carat</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Number of Diamonds</span>
                          <span className="font-medium text-gray-900">12</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Diamond Color</span>
                          <span className="font-medium text-gray-900">GH</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Diamond Clarity</span>
                          <span className="font-medium text-gray-900">SI</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Diamond Shape</span>
                          <span className="font-medium text-gray-900">Round</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Setting Type</span>
                          <span className="font-medium text-gray-900">Prong</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Price Breakup */}
                <div className="border-b border-gray-200">
                  <button
                    onClick={() => toggleSection('price-breakup')}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-lg font-medium text-gray-900">Price Breakup</span>
                    <ChevronDown 
                      className={`w-5 h-5 text-gray-500 transition-transform ${openSections.includes('price-breakup') ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  {openSections.includes('price-breakup') && (
                    <div className="pb-4">
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-500">Gold Price ({product.weight || '8g'})</span>
                          <span className="font-medium text-gray-900">{formatPrice(product.price * 0.6)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Diamond Price</span>
                          <span className="font-medium text-gray-900">{formatPrice(product.price * 0.25)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Making Charges</span>
                          <span className="font-medium text-gray-900">{formatPrice(product.price * 0.12)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">GST (3%)</span>
                          <span className="font-medium text-gray-900">{formatPrice(product.price * 0.03)}</span>
                        </div>
                        <div className="border-t border-gray-200 pt-2 flex justify-between">
                          <span className="font-medium text-gray-900">Total</span>
                          <span className="font-semibold text-[#E92247]">{formatPrice(product.price)}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Policy Section */}
              <div className="mt-6 bg-[#FAF7F5] rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full border-2 border-gray-800 flex items-center justify-center mb-3">
                      <IndianRupee className="w-6 h-6 text-gray-800" />
                    </div>
                    <h3 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">
                      7 DAYS NO QUESTIONS ASKED
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">RETURN POLICY</p>
                  </div>
                  <div className="flex flex-col items-center text-center md:border-l md:border-gray-300 md:pl-6">
                    <div className="w-12 h-12 rounded-full border-2 border-gray-800 flex items-center justify-center mb-3">
                      <Shield className="w-6 h-6 text-gray-800" />
                    </div>
                    <h3 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">
                      LIFETIME EXCHANGE & BUYBACK
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">POLICY</p>
                  </div>
                </div>
                <div className="text-center pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    Any Questions? Please feel free to reach us at:{" "}
                    <a href="tel:+917851005200" className="font-semibold text-gray-900 hover:text-[#E92247]">
                      +91 7851005200
                    </a>{" "}
                    ( 9:30 AM to 8:00 PM )
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More from Collection */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-serif text-gray-900 mb-8">
            More from {collection.name}
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {collection.products
              .filter(p => p.id !== product.id)
              .slice(0, 4)
              .map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/collections/${collection.slug}/products/${relatedProduct.id.replace(":", "-")}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="relative aspect-square bg-gray-100">
                    <Image
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-contain p-4 group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-medium text-gray-900 line-clamp-1 mb-1">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-[#E92247] font-semibold">
                      {formatPrice(relatedProduct.price)}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
