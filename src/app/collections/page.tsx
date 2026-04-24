import Image from "next/image";
import Link from "next/link";
import { collections, formatPrice } from "@/app/data/collections";
import { ChevronRight, Sparkles } from "lucide-react";

export const metadata = {
  title: "Jewellery Collections | Muliya Gold & Diamonds",
  description: "Explore our exclusive jewellery collections - Mahathi, Amuliya, Indian Bridal, Indian Ethnic, Ruby and Emerald, Apsara. Each collection crafted with exquisite designs.",
};

export default function CollectionsPage() {
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
            <span className="text-[#E92247] font-medium">Collections</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 via-white to-purple-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-[#E92247]" />
            <span className="text-sm font-medium text-[#E92247] uppercase tracking-wider">
              Exclusive Collections
            </span>
            <Sparkles className="w-5 h-5 text-[#E92247]" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-6">
            Discover Our Collections
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Each collection tells a unique story. From antique heritage pieces to contemporary designs, 
            find the perfect jewellery that resonates with your style.
          </p>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((collection) => (
              <Link
                key={collection.id}
                href={`/collections/${collection.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Collection Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={collection.thumbnailImage}
                    alt={collection.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Collection Name Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h2 className="text-2xl font-serif text-white mb-1">
                      {collection.name}
                    </h2>
                    <div className="flex items-center gap-2 text-white/80 text-sm">
                      <span>{collection.products.length} Products</span>
                      <span>•</span>
                      <span>Starting {formatPrice(Math.min(...collection.products.map(p => p.price)))}</span>
                    </div>
                  </div>
                  
                  {/* Sparkle Icon */}
                  <div className="absolute top-3 right-3">
                    <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
                    </svg>
                  </div>
                </div>

                {/* Collection Info */}
                <div className="p-5">
                  <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                    {collection.description}
                  </p>
                  
                  {/* Featured Products Preview */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex -space-x-2">
                      {collection.products.slice(0, 3).map((product, idx) => (
                        <div
                          key={product.id}
                          className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-100"
                        >
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                    {collection.products.length > 3 && (
                      <span className="text-xs text-gray-500">
                        +{collection.products.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  {/* View Collection Button */}
                  <div className="flex items-center justify-between">
                    <span className="text-[#E92247] font-medium text-sm group-hover:underline">
                      View Collection
                    </span>
                    <ChevronRight className="w-5 h-5 text-[#E92247] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-16 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
            Can&apos;t Find What You&apos;re Looking For?
          </h2>
          <p className="text-gray-600 mb-8">
            Our experts can help you find the perfect piece or create a custom design just for you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#E92247] text-white px-8 py-3 rounded-full font-medium hover:bg-[#d11f3f] transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-medium hover:border-[#E92247] hover:text-[#E92247] transition-colors"
            >
              Browse All Products
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
