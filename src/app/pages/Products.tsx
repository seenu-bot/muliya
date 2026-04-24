"use client";

import { useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { SlidersHorizontal, Grid3x3, LayoutList } from "lucide-react";
import { Button } from "../components/ui/button";
import { ProductCard } from "../components/ProductCard";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";
import { Checkbox } from "../components/ui/checkbox";
import { Label } from "../components/ui/label";
import { Slider } from "../components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

// Mock product data
const allProducts = [
  {
    id: "1",
    name: "Classic Diamond Solitaire Ring",
    category: "Rings",
    price: 125000,
    originalPrice: 145000,
    image: "https://images.unsplash.com/photo-1742240439165-60790db1ee93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwcmluZyUyMGx1eHVyeXxlbnwxfHx8fDE3NzM4MjI2OTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    weight: "3.5g",
    purity: "18K",
    isNew: true,
    metal: "gold",
  },
  {
    id: "2",
    name: "Elegant Gold Chain Necklace",
    category: "Necklaces",
    price: 85000,
    image: "https://images.unsplash.com/photo-1755151606128-7ca2f97e46ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwbmVja2xhY2UlMjBlbGVnYW50fGVufDF8fHx8MTc3MzgyMjY5OHww&ixlib=rb-4.1.0&q=80&w=1080",
    weight: "12.5g",
    purity: "22K",
    isTrending: true,
    metal: "gold",
  },
  {
    id: "3",
    name: "Traditional Gold Bangles Set",
    category: "Bangles",
    price: 165000,
    image: "https://images.unsplash.com/photo-1760786933035-32da5ebb881c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwYmFuZ2xlcyUyMHRyYWRpdGlvbmFsfGVufDF8fHx8MTc3MzgyMjY5OXww&ixlib=rb-4.1.0&q=80&w=1080",
    weight: "24g",
    purity: "22K",
    metal: "gold",
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
    isNew: true,
    metal: "gold",
  },
  {
    id: "5",
    name: "Gold Pendant with Chain",
    category: "Pendants",
    price: 38000,
    image: "https://images.unsplash.com/photo-1771515411694-57fb626159d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwcGVuZGFudCUyMGNoYWlufGVufDF8fHx8MTc3MzgyMjgwNHww&ixlib=rb-4.1.0&q=80&w=1080",
    weight: "5.2g",
    purity: "22K",
    metal: "gold",
  },
  {
    id: "6",
    name: "Silver Bracelet",
    category: "Silver",
    price: 12500,
    image: "https://images.unsplash.com/photo-1725368844213-c167fe556f98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWx2ZXIlMjBicmFjZWxldCUyMGpld2Vscnl8ZW58MXx8fHwxNzczNzQyODE4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    weight: "18g",
    purity: "925",
    metal: "silver",
  },
  {
    id: "7",
    name: "Luxury Gold Watch",
    category: "Watches",
    price: 285000,
    image: "https://images.unsplash.com/photo-1760532467609-45ed8016f795?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3YXRjaCUyMGdvbGR8ZW58MXx8fHwxNzczNzY5Mzc2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    weight: "65g",
    purity: "18K",
    isTrending: true,
    metal: "gold",
  },
  {
    id: "8",
    name: "Bridal Jewelry Collection",
    category: "Necklaces",
    price: 425000,
    image: "https://images.unsplash.com/photo-1760786933663-327c858d5434?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwamV3ZWxyeSUyMHN0b3JlfGVufDF8fHx8MTc3MzgyMjY5OXww&ixlib=rb-4.1.0&q=80&w=1080",
    weight: "58g",
    purity: "22K",
    isNew: true,
    metal: "gold",
  },
  {
    id: "9",
    name: "Traditional Gold Haaram",
    category: "Haarams",
    price: 98000,
    image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    weight: "28g",
    purity: "22K",
    isNew: true,
    metal: "gold",
  },
  {
    id: "10",
    name: "Classic Kadaas Set",
    category: "Kadaas",
    price: 78000,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce74b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    weight: "22g",
    purity: "22K",
    metal: "gold",
  },
  {
    id: "11",
    name: "Elegant Mangalsutra Pendant",
    category: "Mangalsutra",
    price: 65000,
    image: "https://images.unsplash.com/photo-1617036367833-1c0b6b7b4c8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    weight: "7g",
    purity: "18K",
    isTrending: true,
    metal: "gold",
  },
  {
    id: "12",
    name: "Fine Gold Chain",
    category: "Chain",
    price: 52000,
    image: "https://images.unsplash.com/photo-1615232565355-8f6e8b3c2b7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    weight: "9g",
    purity: "18K",
    metal: "gold",
  },
  {
    id: "13",
    name: "Gold Bracelet",
    category: "Bracelets",
    price: 43000,
    image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    weight: "6g",
    purity: "18K",
    metal: "gold",
  },
];

export function Products() {
  const params = useParams<{ category?: string | string[] }>();
  const category = Array.isArray(params?.category) ? params.category[0] : params?.category;
  const searchParams = useSearchParams();
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [priceRange, setPriceRange] = useState([0, 500000]);
  const [selectedMetal, setSelectedMetal] = useState<string[]>([]);
  const [selectedPurity, setSelectedPurity] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("trending");

  // Filter products
  let filteredProducts = allProducts;

  if (category) {
    filteredProducts = filteredProducts.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase()
    );
  }

  const searchQuery = searchParams.get("search");
  if (searchQuery) {
    filteredProducts = filteredProducts.filter((p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Apply filters
  filteredProducts = filteredProducts.filter(
    (p) =>
      p.price >= priceRange[0] &&
      p.price <= priceRange[1] &&
      (selectedMetal.length === 0 || selectedMetal.includes(p.metal)) &&
      (selectedPurity.length === 0 || selectedPurity.includes(p.purity))
  );

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "newest":
        return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      default:
        return (b.isTrending ? 1 : 0) - (a.isTrending ? 1 : 0);
    }
  });

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Price Range */}
      <div>
        <h3 className="font-semibold mb-4">Price Range</h3>
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          max={500000}
          step={5000}
          className="mb-2"
        />
        <div className="flex justify-between text-sm text-gray-600">
          <span>₹{priceRange[0].toLocaleString()}</span>
          <span>₹{priceRange[1].toLocaleString()}</span>
        </div>
      </div>

      {/* Metal Type */}
      <div>
        <h3 className="font-semibold mb-4">Metal Type</h3>
        <div className="space-y-2">
          {["gold", "silver", "platinum"].map((metal) => (
            <div key={metal} className="flex items-center space-x-2">
              <Checkbox
                id={metal}
                checked={selectedMetal.includes(metal)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSelectedMetal([...selectedMetal, metal]);
                  } else {
                    setSelectedMetal(selectedMetal.filter((m) => m !== metal));
                  }
                }}
              />
              <Label htmlFor={metal} className="capitalize cursor-pointer">
                {metal}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Purity */}
      <div>
        <h3 className="font-semibold mb-4">Purity</h3>
        <div className="space-y-2">
          {["18K", "22K", "24K", "925"].map((purity) => (
            <div key={purity} className="flex items-center space-x-2">
              <Checkbox
                id={purity}
                checked={selectedPurity.includes(purity)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSelectedPurity([...selectedPurity, purity]);
                  } else {
                    setSelectedPurity(selectedPurity.filter((p) => p !== purity));
                  }
                }}
              />
              <Label htmlFor={purity} className="cursor-pointer">
                {purity}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-serif text-gray-900 mb-2">
            {category
              ? `${category.charAt(0).toUpperCase() + category.slice(1)}`
              : "All Jewelry"}
          </h1>
          <p className="text-gray-600">
            Showing {sortedProducts.length} products
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Desktop Filters */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white rounded-lg p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-6">Filters</h2>
              <FilterContent />
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="bg-white rounded-lg p-4 mb-6 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                {/* Mobile Filter */}
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="lg:hidden">
                      <SlidersHorizontal className="w-4 h-4 mr-2" />
                      Filters
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-80">
                    <SheetHeader>
                      <SheetTitle>Filters</SheetTitle>
                    </SheetHeader>
                    <div className="mt-6">
                      <FilterContent />
                    </div>
                  </SheetContent>
                </Sheet>

                {/* Sort */}
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="trending">Trending</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* View Toggle */}
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid3x3 className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setViewMode("list")}
                >
                  <LayoutList className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Products Grid */}
            {sortedProducts.length === 0 ? (
              <div className="bg-white rounded-lg p-12 text-center">
                <p className="text-gray-600">No products found matching your filters.</p>
              </div>
            ) : (
              <div
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    : "flex flex-col gap-6"
                }
              >
                {sortedProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
