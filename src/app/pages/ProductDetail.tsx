"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  Heart,
  ShoppingCart,
  Share2,
  Shield,
  TruckIcon,
  RefreshCw,
  ChevronLeft,
  Star,
  ChevronDown,
  IndianRupee,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ProductCard } from "../components/ProductCard";
import { toast } from "sonner";

// Mock product detail data
const productData = {
  id: "1",
  name: "Classic Diamond Solitaire Ring",
  category: "Rings",
  price: 125000,
  originalPrice: 145000,
  images: [
    "https://images.unsplash.com/photo-1742240439165-60790db1ee93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwcmluZyUyMGx1eHVyeXxlbnwxfHx8fDE3NzM4MjI2OTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1629224316810-9d8805b95e76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwZWFycmluZ3MlMjBlbGVnYW50fGVufDF8fHx8MTc3MzgyMjcwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1755151606128-7ca2f97e46ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwbmVja2xhY2UlMjBlbGVnYW50fGVufDF8fHx8MTc3MzgyMjY5OHww&ixlib=rb-4.1.0&q=80&w=1080",
  ],
  description:
    "Exquisite diamond solitaire ring crafted in 18K gold. This timeless piece features a brilliant-cut diamond set in a classic prong setting, perfect for engagements and special occasions.",
  specifications: {
    weight: "3.5g",
    purity: "18K",
    metal: "Gold",
    diamond: "0.5 Carat",
    color: "D-E (Colorless)",
    clarity: "VS1-VS2",
    certification: "BIS Hallmarked",
  },
  rating: 4.8,
  reviews: 124,
  inStock: true,
};

const relatedProducts = [
  {
    id: "2",
    name: "Elegant Gold Chain Necklace",
    category: "Necklaces",
    price: 85000,
    image: "https://images.unsplash.com/photo-1755151606128-7ca2f97e46ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwbmVja2xhY2UlMjBlbGVnYW50fGVufDF8fHx8MTc3MzgyMjY5OHww&ixlib=rb-4.1.0&q=80&w=1080",
    weight: "12.5g",
    purity: "22K",
  },
  {
    id: "4",
    name: "Designer Gold Earrings",
    category: "Earrings",
    price: 45000,
    originalPrice: 52000,
    image: "https://images.unsplash.com/photo-1629224316810-9d8805b95e76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwZWFycmluZ3MlMjBlbGVnYW50fGVufDF8fHx8MTc3MzgyMjcwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    weight: "6.5g",
    purity: "18K",
  },
  {
    id: "5",
    name: "Gold Pendant with Chain",
    category: "Pendants",
    price: 38000,
    image: "https://images.unsplash.com/photo-1771515411694-57fb626159d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwcGVuZGFudCUyMGNoYWlufGVufDF8fHx8MTc3MzgyMjgwNHww&ixlib=rb-4.1.0&q=80&w=1080",
    weight: "5.2g",
    purity: "22K",
  },
];

export function ProductDetail() {
  const params = useParams<{ id?: string | string[] }>();
  const id = Array.isArray(params?.id) ? params.id[0] : params?.id;
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  
  // Accordion state
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setOpenSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const discount = Math.round(
    ((productData.originalPrice - productData.price) / productData.originalPrice) * 100
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-600 hover:text-amber-600">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/products" className="text-gray-600 hover:text-amber-600">
              Products
            </Link>
            <span className="text-gray-400">/</span>
            <Link
              href={`/products/${productData.category.toLowerCase()}`}
              className="text-gray-600 hover:text-amber-600"
            >
              {productData.category}
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">{productData.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/products">
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Image Gallery */}
          <div>
            <div className="bg-white rounded-lg overflow-hidden mb-4">
              <div className="aspect-square">
                <ImageWithFallback
                  src={productData.images[selectedImage]}
                  alt={productData.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {productData.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`bg-white rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index
                      ? "border-amber-600"
                      : "border-transparent hover:border-gray-300"
                  }`}
                >
                  <div className="aspect-square">
                    <ImageWithFallback
                      src={image}
                      alt={`${productData.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <Badge className="mb-2">{productData.category}</Badge>
                  <h1 className="text-3xl font-serif text-gray-900 mb-2">
                    {productData.name}
                  </h1>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(productData.rating)
                              ? "fill-amber-500 text-amber-500"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-gray-600">
                      {productData.rating} ({productData.reviews} reviews)
                    </span>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>

              <div className="border-t border-b py-4 mb-6">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-4xl font-semibold text-amber-700">
                    ₹{productData.price.toLocaleString()}
                  </span>
                  {productData.originalPrice && (
                    <>
                      <span className="text-xl text-gray-500 line-through">
                        ₹{productData.originalPrice.toLocaleString()}
                      </span>
                      <Badge variant="destructive">{discount}% Off</Badge>
                    </>
                  )}
                </div>
                <p className="text-sm text-gray-600">Inclusive of all taxes</p>
              </div>

              <p className="text-gray-700 mb-6">{productData.description}</p>

              {/* Specifications */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Specifications</h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {Object.entries(productData.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b">
                      <span className="text-gray-600 capitalize">
                        {key.replace(/([A-Z])/g, " $1")}:
                      </span>
                      <span className="font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3">
                {productData.inStock ? (
                  <>
                    <div className="flex gap-3">
                      <Button
                        size="lg"
                        className="flex-1 bg-amber-600 hover:bg-amber-700"
                        onClick={() => toast.success("Added to cart!")}
                      >
                        <ShoppingCart className="w-5 h-5 mr-2" />
                        Add to Cart
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        onClick={() => toast.success("Added to wishlist!")}
                      >
                        <Heart className="w-5 h-5" />
                      </Button>
                    </div>
                    <Button size="lg" variant="secondary" className="w-full">
                      Buy Now
                    </Button>
                  </>
                ) : (
                  <Button size="lg" className="w-full" disabled>
                    Out of Stock
                  </Button>
                )}
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t">
                <div className="text-center">
                  <Shield className="w-6 h-6 mx-auto mb-2 text-amber-600" />
                  <p className="text-xs text-gray-600">BIS Certified</p>
                </div>
                <div className="text-center">
                  <TruckIcon className="w-6 h-6 mx-auto mb-2 text-amber-600" />
                  <p className="text-xs text-gray-600">Free Shipping</p>
                </div>
                <div className="text-center">
                  <RefreshCw className="w-6 h-6 mx-auto mb-2 text-amber-600" />
                  <p className="text-xs text-gray-600">Easy Returns</p>
                </div>
              </div>

              {/* Accordion Sections */}
              <div className="mt-6 border-t pt-6">
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
                          <p className="font-medium text-gray-900">{productData.id}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Category</p>
                          <p className="font-medium text-gray-900">{productData.category}</p>
                        </div>
                        {Object.entries(productData.specifications).map(([key, value]) => (
                          <div key={key}>
                            <p className="text-gray-500 capitalize">{key.replace(/([A-Z])/g, " $1")}</p>
                            <p className="font-medium text-gray-900">{value}</p>
                          </div>
                        ))}
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
                          <span className="text-gray-500">Gold Price ({productData.specifications.weight || '8g'})</span>
                          <span className="font-medium text-gray-900">₹{(productData.price * 0.6).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Diamond Price</span>
                          <span className="font-medium text-gray-900">₹{(productData.price * 0.25).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Making Charges</span>
                          <span className="font-medium text-gray-900">₹{(productData.price * 0.12).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">GST (3%)</span>
                          <span className="font-medium text-gray-900">₹{(productData.price * 0.03).toLocaleString()}</span>
                        </div>
                        <div className="border-t border-gray-200 pt-2 flex justify-between">
                          <span className="font-medium text-gray-900">Total</span>
                          <span className="font-semibold text-amber-600">₹{productData.price.toLocaleString()}</span>
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
                    <a href="tel:+917851005200" className="font-semibold text-gray-900 hover:text-amber-600">
                      +91 7851005200
                    </a>{" "}
                    ( 9:30 AM to 8:00 PM )
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <Card className="mb-12">
          <CardContent className="p-6">
            <Tabs defaultValue="details">
              <TabsList>
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="reviews">Reviews ({productData.reviews})</TabsTrigger>
                <TabsTrigger value="care">Care Instructions</TabsTrigger>
              </TabsList>
              <TabsContent value="details" className="mt-6">
                <h3 className="font-semibold mb-3">Product Details</h3>
                <p className="text-gray-700 mb-4">{productData.description}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Handcrafted with precision by expert artisans</li>
                  <li>BIS Hallmarked for guaranteed purity</li>
                  <li>Comes with authenticity certificate</li>
                  <li>Premium packaging included</li>
                  <li>Lifetime exchange guarantee</li>
                </ul>
              </TabsContent>
              <TabsContent value="reviews" className="mt-6">
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="font-semibold">Priya Sharma</p>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-gray-600">2 weeks ago</span>
                    </div>
                    <p className="text-gray-700">
                      Absolutely beautiful ring! The quality is exceptional and it looks
                      even better in person. Highly recommend!
                    </p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="care" className="mt-6">
                <h3 className="font-semibold mb-3">Care Instructions</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Store in a dry place away from moisture</li>
                  <li>Clean with soft cloth after each use</li>
                  <li>Avoid contact with perfumes and chemicals</li>
                  <li>Remove before bathing or swimming</li>
                  <li>Get professional cleaning every 6 months</li>
                </ul>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Related Products */}
        <div>
          <h2 className="text-3xl font-serif text-gray-900 mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
