import Link from "next/link";
import { Home, Search } from "lucide-react";
import { Button } from "../components/ui/button";

export function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <h1 className="text-9xl font-serif text-amber-600 mb-4">404</h1>
          <h2 className="text-3xl font-serif text-gray-900 mb-2">Page Not Found</h2>
          <p className="text-gray-600">
            Oops! The page you're looking for doesn't exist. It might have been moved or
            deleted.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/">
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/products">
              <Search className="w-5 h-5 mr-2" />
              Browse Jewelry
            </Link>
          </Button>
        </div>

        <div className="mt-12 pt-8 border-t">
          <p className="text-sm text-gray-600 mb-4">Popular Categories</p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Link
              href="/products/rings"
              className="text-amber-600 hover:underline text-sm"
            >
              Rings
            </Link>
            <span className="text-gray-400">•</span>
            <Link
              href="/products/necklaces"
              className="text-amber-600 hover:underline text-sm"
            >
              Necklaces
            </Link>
            <span className="text-gray-400">•</span>
            <Link
              href="/products/bangles"
              className="text-amber-600 hover:underline text-sm"
            >
              Bangles
            </Link>
            <span className="text-gray-400">•</span>
            <Link
              href="/products/earrings"
              className="text-amber-600 hover:underline text-sm"
            >
              Earrings
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
