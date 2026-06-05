"use client";

import { useState, use, useEffect } from "react";
import { notFound, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";
import {
  useProduct,
  useCollection,
  formatApiPrice,
  getProductImage,
  type ApiProduct,
} from "@/lib/hooks";
import {
  ChevronRight,
  Heart,
  Share2,
  Truck,
  Shield,
  RefreshCw,
  ChevronDown,
} from "lucide-react";

interface ProductPageProps {
  params: Promise<{ slug: string; productId: string }>;
}

export default function ProductPage({ params }: ProductPageProps) {
  const { slug, productId } = use(params);
  const router = useRouter();
  const { addToCart } = useCart();

  const { data: product, loading: productLoading } = useProduct(productId);
  const { data: collection, loading: collectionLoading } = useCollection(slug);

  const [openSections, setOpenSections] = useState<string[]>([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const loading = productLoading || collectionLoading;

  const toggleSection = (section: string) => {
    setOpenSections((prev) =>
      prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]
    );
  };

  if (!loading && !product) notFound();

  const imageUrl = product ? getProductImage(product) : "/images/placeholder.png";
  const allImages = product?.images?.length
    ? product.images.map((img) => {
        if (img.startsWith("http")) return img;
        return `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL || "http://localhost:5000"}${img}`;
      })
    : [imageUrl];

  const currentImage = allImages[selectedImageIndex] ?? imageUrl;
  const hasDiscount = product ? product.offeramount > 0 && product.offeramount > product.amount : false;
  const discountPct = hasDiscount && product
    ? Math.round((1 - product.amount / product.offeramount) * 100)
    : 0;

  const collectionName = collection?.name ?? slug.charAt(0).toUpperCase() + slug.slice(1);

  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#E92247] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/collections" className="hover:text-[#E92247] transition-colors">Collections</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href={`/collections/${slug}`} className="hover:text-[#E92247] transition-colors">
              {collectionName}
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium truncate max-w-[200px]">
              {product?.name ?? "Product"}
            </span>
          </nav>
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-32">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#E92247] border-t-transparent" />
        </div>
      ) : product ? (
        <section className="py-8 md:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Product Image Gallery */}
              <div className="relative">
                <div className="relative aspect-square bg-gray-50 rounded-2xl overflow-hidden">
                  <Image
                    src={currentImage}
                    alt={product.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain p-8"
                    priority
                    onError={(e) => { (e.target as HTMLImageElement).src = "/images/placeholder.png"; }}
                  />
                  {product.sku && (
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-sm">
                      <span className="text-sm font-medium text-[#8B4513]">{product.sku}</span>
                    </div>
                  )}
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
                {allImages.length > 1 && (
                  <div className="flex gap-2 mt-4 flex-wrap">
                    {allImages.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedImageIndex(idx)}
                        className={`w-20 h-20 rounded-lg overflow-hidden bg-gray-50 border-2 transition-colors ${
                          idx === selectedImageIndex ? "border-[#E92247]" : "border-gray-200"
                        }`}
                      >
                        <Image
                          src={img}
                          alt={`${product.name} view ${idx + 1}`}
                          width={80}
                          height={80}
                          className="w-full h-full object-contain p-2"
                          onError={(e) => { (e.target as HTMLImageElement).src = "/images/placeholder.png"; }}
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="flex flex-col">
                <Link
                  href={`/collections/${slug}`}
                  className="text-sm text-[#E92247] font-medium mb-2 hover:underline"
                >
                  {collectionName} Collection
                </Link>
                <h1 className="text-2xl md:text-3xl font-serif text-gray-900 mb-4">
                  {product.name}
                </h1>
                {product.sku && (
                  <p className="text-sm text-gray-500 mb-4">SKU: {product.sku}</p>
                )}

                {/* Price */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl font-semibold text-[#E92247]">
                    {formatApiPrice(product.amount)}
                  </span>
                  {hasDiscount && (
                    <>
                      <span className="text-xl text-gray-400 line-through">
                        {formatApiPrice(product.offeramount)}
                      </span>
                      <span className="bg-green-100 text-green-700 text-sm px-2 py-1 rounded">
                        {discountPct}% OFF
                      </span>
                    </>
                  )}
                </div>

                {/* Attributes */}
                {(product.color || product.weight || product.dimensions) && (
                  <div className="flex flex-wrap gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                    {product.color && (
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Metal / Color</p>
                        <p className="text-sm font-medium text-gray-900">{product.color}</p>
                      </div>
                    )}
                    {product.weight && (
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Weight</p>
                        <p className="text-sm font-medium text-gray-900">{product.weight}</p>
                      </div>
                    )}
                    {product.dimensions && (
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Dimensions</p>
                        <p className="text-sm font-medium text-gray-900">{product.dimensions}</p>
                      </div>
                    )}
                    {product.availability && (
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Availability</p>
                        <p className={`text-sm font-medium ${product.availability === "IN STOCK" ? "text-green-600" : "text-red-500"}`}>
                          {product.availability}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {product.description && (
                  <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <button
                    onClick={() => {
                      addToCart({
                        id: product._id,
                        name: product.name,
                        price: product.amount,
                        originalPrice: hasDiscount ? product.offeramount : undefined,
                        image: currentImage,
                        collection: collectionName,
                        collectionSlug: slug,
                        metal: product.color,
                        weight: product.weight,
                      });
                      router.push("/checkout");
                    }}
                    className="flex-1 bg-[#E92247] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#d11f3f] transition-colors"
                  >
                    Buy Now
                  </button>
                  <button
                    onClick={() => {
                      addToCart({
                        id: product._id,
                        name: product.name,
                        price: product.amount,
                        originalPrice: hasDiscount ? product.offeramount : undefined,
                        image: currentImage,
                        collection: collectionName,
                        collectionSlug: slug,
                        metal: product.color,
                        weight: product.weight,
                      });
                    }}
                    className="flex-1 border-2 border-[#E92247] text-[#E92247] py-3 px-6 rounded-lg font-medium hover:bg-[#E92247] hover:text-white transition-colors"
                  >
                    Add to Cart
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
                    <span className="text-xs text-gray-600">BIS Certified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <RefreshCw className="w-5 h-5 text-gray-600" />
                    <span className="text-xs text-gray-600">Easy Returns</span>
                  </div>
                </div>

                {/* Accordion */}
                <div className="border-t border-gray-200">
                  {[
                    {
                      id: "product-details",
                      title: "Product Details",
                      content: (
                        <div className="grid grid-cols-2 gap-4 text-sm pb-4">
                          {product.sku && <div><p className="text-gray-500">SKU</p><p className="font-medium">{product.sku}</p></div>}
                          <div><p className="text-gray-500">Collection</p><p className="font-medium">{collectionName}</p></div>
                          {product.color && <div><p className="text-gray-500">Metal</p><p className="font-medium">{product.color}</p></div>}
                          {product.weight && <div><p className="text-gray-500">Weight</p><p className="font-medium">{product.weight}</p></div>}
                          {product.category && <div><p className="text-gray-500">Category</p><p className="font-medium">{product.category}</p></div>}
                          {product.qty != null && <div><p className="text-gray-500">In Stock</p><p className="font-medium">{product.qty}</p></div>}
                        </div>
                      ),
                    },
                    {
                      id: "delivery",
                      title: "Delivery & Returns",
                      content: (
                        <div className="text-sm text-gray-600 pb-4 space-y-2">
                          <p>• Free delivery on all orders above ₹5,000</p>
                          <p>• Delivered within 5–7 business days</p>
                          <p>• Easy 30-day returns and exchanges</p>
                          <p>• Insured packaging for all jewellery</p>
                        </div>
                      ),
                    },
                    {
                      id: "hallmark",
                      title: "Hallmark & Certification",
                      content: (
                        <div className="text-sm text-gray-600 pb-4 space-y-2">
                          <p>• BIS Hallmarked as per government standards</p>
                          <p>• Certificate of authenticity provided with each piece</p>
                          <p>• Lab-tested purity verification</p>
                        </div>
                      ),
                    },
                  ].map(({ id, title, content }) => (
                    <div key={id} className="border-b border-gray-200">
                      <button
                        onClick={() => toggleSection(id)}
                        className="w-full flex items-center justify-between py-4 text-left"
                      >
                        <span className="text-lg font-medium text-gray-900">{title}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-gray-500 transition-transform ${
                            openSections.includes(id) ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {openSections.includes(id) && content}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}
