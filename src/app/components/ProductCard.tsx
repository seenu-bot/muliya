import Link from "next/link";
import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { toast } from "sonner";

const formatINR = (value: number) => new Intl.NumberFormat("en-IN").format(value);

interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  weight?: string;
  purity?: string;
  isNew?: boolean;
  isTrending?: boolean;
}

export function ProductCard({
  id,
  name,
  category,
  price,
  originalPrice,
  image,
  weight,
  purity,
  isNew,
  isTrending,
}: ProductCardProps) {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    toast.success("Added to cart!");
  };

  const handleAddToWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    toast.success("Added to wishlist!");
  };

  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  return (
    <Link href={`/product/${id}`}>
      <Card className="group overflow-hidden hover:shadow-lg transition-shadow">
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <ImageWithFallback
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {isNew && <Badge className="bg-green-600">New</Badge>}
            {isTrending && <Badge className="bg-amber-600">Trending</Badge>}
            {discount > 0 && (
              <Badge variant="destructive">{discount}% Off</Badge>
            )}
          </div>

          {/* Wishlist Button */}
          <Button
            variant="secondary"
            size="icon"
            className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={handleAddToWishlist}
          >
            <Heart className="w-4 h-4" />
          </Button>

          {/* Quick Add to Cart */}
          <Button
            className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-amber-600 hover:bg-amber-700"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        </div>

        <CardContent className="p-4">
          <p className="text-sm text-gray-600 mb-1">{category}</p>
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{name}</h3>
          
          {(weight || purity) && (
            <div className="flex gap-3 text-xs text-gray-600 mb-2">
              {weight && <span>Weight: {weight}</span>}
              {purity && <span>Purity: {purity}</span>}
            </div>
          )}

          <div className="flex items-baseline gap-2">
            <span className="text-xl font-semibold text-amber-700">
              ₹{formatINR(price)}
            </span>
            {originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ₹{formatINR(originalPrice)}
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
