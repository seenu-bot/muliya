"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState, use, useEffect } from "react";
import { ChevronRight, Heart } from "lucide-react";
import { ProductFilter } from "@/app/components/ProductFilter";
import {
  useCollection,
  useCollections,
  useProducts,
  formatApiPrice,
  getCollectionThumbnail,
  getProductImage,
  type ApiProduct,
  type ApiCollection,
} from "@/lib/hooks";

// Static collections fallback data for collections that may not yet be in the DB
import { collections as staticCollections } from "@/app/data/collections";

interface CollectionPageProps {
  params: Promise<{ slug: string }>;
}

export default function CollectionPage({ params }: CollectionPageProps) {
  const { slug } = use(params);

  const { data: apiCollection, loading: collectionLoading } = useCollection(slug);
  const { data: apiProducts, loading: productsLoading } = useProducts(
    apiCollection?._id
  );

  const [filteredProducts, setFilteredProducts] = useState<ApiProduct[]>([]);
  const [sortOption, setSortOption] = useState("latest");

  useEffect(() => {
    if (apiProducts) setFilteredProducts(apiProducts);
  }, [apiProducts]);

  const loading = collectionLoading || productsLoading;

  // Fallback to static data while loading or if API collection not found
  const staticCollection = staticCollections.find((c) => c.slug === slug);

  if (!loading && !apiCollection && !staticCollection) {
    notFound();
  }

  const collectionName = apiCollection?.name ?? staticCollection?.name ?? slug;
  const collectionDescription = apiCollection?.description ?? staticCollection?.description ?? "";
  const collectionBannerImage = apiCollection
    ? getCollectionThumbnail(apiCollection)
    : (staticCollection?.bannerImage ?? "");

  const handleSortChange = (sort: string) => {
    setSortOption(sort);
    const base = apiProducts ?? [];
    let sorted = [...base];
    if (sort === "price-asc") sorted.sort((a, b) => a.amount - b.amount);
    else if (sort === "price-desc") sorted.sort((a, b) => b.amount - a.amount);
    else if (sort === "discount") {
      sorted.sort((a, b) => {
        const dA = a.offeramount > 0 ? (a.offeramount - a.amount) / a.offeramount : 0;
        const dB = b.offeramount > 0 ? (b.offeramount - b.amount) / b.offeramount : 0;
        return dB - dA;
      });
    }
    setFilteredProducts(sorted);
  };

  const handlePriceRangeChange = (range: string) => {
    const parts = range.split("-");
    const min = parseInt(parts[0]);
    const max = parts[1] === "+" || parts[1] === undefined ? Infinity : parseInt(parts[1]);
    setFilteredProducts((apiProducts ?? []).filter((p) => {
      if (max === Infinity) return p.amount >= min;
      return p.amount >= min && p.amount <= max;
    }));
  };

  const handleMaterialChange = (material: string) => {
    setFilteredProducts((apiProducts ?? []).filter((p) =>
      p.color?.toLowerCase().includes(material) || p.category?.toLowerCase().includes(material)
    ));
  };

  const handleWeightChange = (weight: string) => {
    const parts = weight.split("-");
    const min = parseFloat(parts[0]);
    const max = parts[1] === "+" ? Infinity : parseFloat(parts[1] ?? "Infinity");
    setFilteredProducts((apiProducts ?? []).filter((p) => {
      if (!p.weight) return false;
      const w = parseFloat(p.weight.replace(/[^0-9.]/g, ""));
      return max === Infinity ? w >= min : w >= min && w <= max;
    }));
  };

  const handleDiscountChange = () => {
    setFilteredProducts((apiProducts ?? []).filter((p) => p.offeramount > p.amount));
  };

  const handleClearFilters = () => {
    setFilteredProducts(apiProducts ?? []);
    setSortOption("latest");
  };

  const minPrice = filteredProducts.length > 0 ? Math.min(...filteredProducts.map((p) => p.amount)) : 0;

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#E92247] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/collections" className="hover:text-[#E92247] transition-colors">Collections</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#E92247] font-medium">{collectionName}</span>
          </nav>
        </div>
      </div>

      {/* Collection Banner */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          {collectionBannerImage ? (
            <Image
              src={collectionBannerImage}
              alt={collectionName}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-r from-amber-900 to-amber-700" />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4">
              {collectionName}
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-6">{collectionDescription}</p>
            <div className="flex items-center gap-4 text-white/80 text-sm">
              <span>{filteredProducts.length} Products</span>
              {minPrice > 0 && (
                <>
                  <span>•</span>
                  <span>Starting from {formatApiPrice(minPrice)}</span>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="flex items-center justify-center py-24">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#E92247] border-t-transparent" />
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
              <ProductFilter
                onSortChange={handleSortChange}
                onPriceRangeChange={handlePriceRangeChange}
                onMaterialChange={handleMaterialChange}
                onWeightChange={handleWeightChange}
                onDiscountChange={handleDiscountChange}
                onClearFilters={handleClearFilters}
              />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl md:text-3xl font-serif text-gray-900">
                    {collectionName} Products
                  </h2>
                  <span className="text-gray-600 text-sm">
                    Showing {filteredProducts.length} items
                  </span>
                </div>
                {filteredProducts.length === 0 ? (
                  <div className="text-center py-16 text-gray-500">
                    <p className="text-lg">No products found in this collection.</p>
                    <p className="text-sm mt-2">Products can be added from the admin panel.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map((product) => (
                      <ProductCard key={product._id} product={product} collectionSlug={slug} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Related Collections */}
      <RelatedCollections currentSlug={slug} />
    </main>
  );
}

function ProductCard({ product, collectionSlug }: { product: ApiProduct; collectionSlug: string }) {
  const imageUrl = getProductImage(product);
  const hasDiscount = product.offeramount > 0 && product.offeramount > product.amount;
  const discountPct = hasDiscount
    ? Math.round((1 - product.amount / product.offeramount) * 100)
    : 0;

  return (
    <Link
      href={`/collections/${collectionSlug}/products/${product._id}`}
      className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
    >
      <div className="relative aspect-square overflow-hidden bg-gray-50 p-4">
        <Image
          src={imageUrl}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-contain group-hover:scale-105 transition-transform duration-500"
          onError={(e) => { (e.target as HTMLImageElement).src = "/images/placeholder.png"; }}
        />
        {product.sku && (
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md">
            <span className="text-xs font-medium text-[#8B4513]">{product.sku}</span>
          </div>
        )}
        <button className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#E92247] hover:text-white shadow-sm">
          <Heart className="w-4 h-4" />
        </button>
      </div>
      <div className="p-4">
        <h3 className="font-medium text-gray-900 mb-1 line-clamp-1">{product.name}</h3>
        {product.description && (
          <p className="text-sm text-gray-500 mb-2 line-clamp-2">{product.description}</p>
        )}
        {(product.color || product.weight) && (
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
            {product.color && <span>{product.color}</span>}
            {product.color && product.weight && <span>•</span>}
            {product.weight && <span>{product.weight}</span>}
          </div>
        )}
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold text-[#E92247]">
            {formatApiPrice(product.amount)}
          </span>
          {hasDiscount && (
            <span className="text-sm text-gray-400 line-through">
              {formatApiPrice(product.offeramount)}
            </span>
          )}
        </div>
        <div className="mt-2 h-6">
          {discountPct > 0 && (
            <div className="inline-block bg-green-100 text-green-700 text-xs px-2 py-1 rounded">
              {discountPct}% OFF
            </div>
          )}
        </div>
        <button className="mt-4 w-full bg-[#E92247] text-white py-2 rounded-lg text-sm font-medium hover:bg-[#d11f3f] transition-colors">
          Buy Now
        </button>
      </div>
    </Link>
  );
}

function RelatedCollections({ currentSlug }: { currentSlug: string }) {
  const { data: allCollections } = useCollections();

  const related = (allCollections ?? [])
    .filter((c) => c.slug !== currentSlug)
    .slice(0, 5);

  if (related.length === 0) {
    const staticRelated = staticCollections.filter((c) => c.slug !== currentSlug).slice(0, 5);
    if (staticRelated.length === 0) return null;
    return (
      <section className="py-12 md:py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-8">Explore Other Collections</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {staticRelated.map((c) => (
              <Link key={c.id} href={`/collections/${c.slug}`} className="group relative rounded-xl overflow-hidden aspect-[4/3]">
                <Image src={c.thumbnailImage} alt={c.name} fill sizes="(max-width: 768px) 50vw, 20vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white font-medium text-sm">{c.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-16 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-8">Explore Other Collections</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {related.map((c) => (
            <Link key={c._id} href={`/collections/${c.slug}`} className="group relative rounded-xl overflow-hidden aspect-[4/3]">
              <Image
                src={getCollectionThumbnail(c)}
                alt={c.name}
                fill
                sizes="(max-width: 768px) 50vw, 20vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => { (e.target as HTMLImageElement).src = "/images/placeholder.png"; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <p className="text-white font-medium text-sm">{c.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

