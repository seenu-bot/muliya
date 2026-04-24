"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState, use } from "react";
import { collections, getCollectionBySlug, formatPrice } from "@/app/data/collections";
import { ChevronRight, Heart, ChevronDown } from "lucide-react";
import { ProductFilter } from "@/app/components/ProductFilter";

interface CollectionPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function CollectionPage({ params }: CollectionPageProps) {
  const { slug } = use(params);
  const collection = getCollectionBySlug(slug);
  
  if (!collection) {
    notFound();
  }

  const [filteredProducts, setFilteredProducts] = useState(collection.products);
  const [sortOption, setSortOption] = useState("latest");

  const handleSortChange = (sort: string) => {
    setSortOption(sort);
    let sorted = [...collection.products];
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
    const filtered = collection.products.filter(product => {
      const price = product.price;
      if (max === Infinity) return price >= min;
      return price >= min && price <= max;
    });
    setFilteredProducts(filtered);
  };

  const handleMaterialChange = (material: string) => {
    const filtered = collection.products.filter(product => 
      product.metal?.toLowerCase().includes(material)
    );
    setFilteredProducts(filtered);
  };

  const handleWeightChange = (weight: string) => {
    const [min, max] = weight.split("-").map(v => v === "+" ? Infinity : parseFloat(v));
    const filtered = collection.products.filter(product => {
      if (!product.weight) return false;
      const weightNum = parseFloat(product.weight.replace(/[^0-9.]/g, ""));
      if (max === Infinity) return weightNum >= min;
      return weightNum >= min && weightNum <= max;
    });
    setFilteredProducts(filtered);
  };

  const handleDiscountChange = (discount: string) => {
    const filtered = collection.products.filter(product => product.originalPrice !== undefined);
    setFilteredProducts(filtered);
  };

  const handleClearFilters = () => {
    setFilteredProducts(collection.products);
    setSortOption("latest");
  };

  return (
    <main className="min-h-screen bg-gray-50">
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
            <span className="text-[#E92247] font-medium">{collection.name}</span>
          </nav>
        </div>
      </div>

      {/* Collection Banner */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={collection.bannerImage}
            alt={collection.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
        </div>
        
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4">
              {collection.name}
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-6">
              {collection.description}
            </p>
            <div className="flex items-center gap-4 text-white/80 text-sm">
              <span>{collection.products.length} Products</span>
              <span>•</span>
              <span>Starting from {formatPrice(Math.min(...collection.products.map(p => p.price)))}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              {/* Section Header */}
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl md:text-3xl font-serif text-gray-900">
                  {collection.name} Products
                </h2>
                <span className="text-gray-600 text-sm">
                  Showing {filteredProducts.length} items
                </span>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/collections/${collection.slug}/products/${product.id.replace(":", "-")}`}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden bg-gray-50 p-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Product ID Badge */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md">
                    <span className="text-xs font-medium text-[#8B4513]">
                      {product.id}
                    </span>
                  </div>
                  
                  {/* Wishlist Button */}
                  <button className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#E92247] hover:text-white shadow-sm">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 mb-1 line-clamp-1">
                    {product.name}
                  </h3>
                  
                  {product.description && (
                    <p className="text-sm text-gray-500 mb-2 line-clamp-2">
                      {product.description}
                    </p>
                  )}
                  
                  {/* Metal & Weight */}
                  {(product.metal || product.weight) && (
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                      {product.metal && <span>{product.metal}</span>}
                      {product.metal && product.weight && <span>•</span>}
                      {product.weight && <span>{product.weight}</span>}
                    </div>
                  )}
                  
                  {/* Price */}
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-semibold text-[#E92247]">
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>
                  
                  {/* Discount Badge */}
                  <div className="mt-2 h-6">
                    {product.originalPrice && (
                      <div className="inline-block bg-green-100 text-green-700 text-xs px-2 py-1 rounded">
                        {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                      </div>
                    )}
                  </div>
                  
                  {/* Buy Now Button */}
                  <button className="mt-4 w-full bg-[#E92247] text-white py-2 rounded-lg text-sm font-medium hover:bg-[#d11f3f] transition-colors">
                    Buy Now
                  </button>
                </div>
              </Link>
            ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Collections */}
      <section className="py-12 md:py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-8">
            Explore Other Collections
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {collections
              .filter(c => c.slug !== collection.slug)
              .slice(0, 5)
              .map((otherCollection) => (
                <Link
                  key={otherCollection.id}
                  href={`/collections/${otherCollection.slug}`}
                  className="group relative rounded-xl overflow-hidden aspect-[4/3]"
                >
                  <Image
                    src={otherCollection.thumbnailImage}
                    alt={otherCollection.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 20vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-white font-medium text-sm">
                      {otherCollection.name}
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
