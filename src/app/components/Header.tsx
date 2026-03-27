import { useState } from "react";
import { Link, useNavigate } from "react-router";
import {
  ShoppingCart,
  Heart,
  User,
  Menu,
  Search,
  ChevronDown,
  Coins,
  Store,
  Image as ImageIcon,
  Globe,
  Video,
  MoreHorizontal,
} from "lucide-react";
import logoUrl from "../../../assets/muliya-logo.png";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const categories = [
  { name: "Rings", slug: "rings" },
  { name: "Earrings", slug: "earrings" },
  { name: "Pendants", slug: "pendants" },
  { name: "Necklaces", slug: "necklaces" },
  { name: "Haarams", slug: "haarams" },
  { name: "Kadaas", slug: "kadaas" },
  { name: "Mangalsutra", slug: "mangalsutra" },
  { name: "Bangles", slug: "bangles" },
  { name: "Chain", slug: "chain" },
  { name: "Bracelets", slug: "bracelets" },
  { name: "Silver", slug: "silver" },
  { name: "Watches", slug: "watches" },
];

const desktopNav = [
  { label: "Gold", href: "/products/rings", icon: Coins },
  { label: "Silver", href: "/products/silver", icon: Coins },
  { label: "Diamond", href: "/products/earrings", icon: Coins },
  { label: "Collections", href: "/products", icon: Coins },
  { label: "Showrooms", href: "/stores", icon: Store },
  { label: "Gallery", href: "/blog", icon: ImageIcon },
  { label: "Virtual Tour", href: "/blog", icon: Globe },
  { label: "More", href: "/about", icon: MoreHorizontal },
] as const;

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const [logoError, setLogoError] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      {/* Top Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between gap-6">
          <Link to="/" className="flex items-center">
            <img
              src={logoUrl}
              alt="Muliya Gold & Diamonds"
              loading="eager"
              className="h-10 w-auto object-contain max-w-[160px]"
              onError={() => setLogoError(true)}
            />
            {logoError ? (
              <span className="ml-2 font-serif text-xl text-[#E92247] leading-none hidden sm:inline">
                Muliya
              </span>
            ) : null}
          </Link>

          <div className="hidden lg:flex items-center gap-10 text-sm text-gray-700">
            <Link
              to="/policy/gold-scheme"
              className="flex items-center gap-2 hover:text-[#E92247] transition-colors"
            >
              <Coins className="w-4 h-4 text-[#E92247]" />
              <span>Easy Jewellery Buying Plan</span>
            </Link>
            <Link
              to="/policy/gold-scheme"
              className="flex items-center gap-2 hover:text-[#E92247] transition-colors"
            >
              <Video className="w-4 h-4 text-[#E92247]" />
              <span>Scheme Payments</span>
            </Link>
          </div>

          {/* Search */}
          <form
            onSubmit={handleSearch}
            className="flex items-center gap-0 w-full max-w-[520px]"
          >
            <div className="relative w-full">
              <input
                type="search"
                placeholder="Search for gold jewellery, diamond jewellery and more"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-10 rounded-l-md border border-gray-200 pl-4 pr-11 text-sm outline-none focus:ring-2 focus:ring-[#E92247]/30"
              />
              <div className="absolute right-10 top-0 h-full flex items-center pr-2 text-gray-400">
                <Search className="w-4 h-4" />
              </div>
            </div>
            <button
              type="submit"
              className="h-10 w-11 bg-[#E92247] text-white flex items-center justify-center rounded-r-md"
            >
              <Search className="w-4 h-4" />
            </button>
          </form>

          {/* Mobile Menu */}
          <div className="lg:hidden flex items-center gap-2">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <SheetHeader>
                  <SheetTitle className="flex items-center gap-2 text-[#E92247]">
                    <img
                      src={logoUrl}
                      alt="Muliya"
                      loading="eager"
                      className="h-7 w-auto object-contain"
                      onError={() => setLogoError(true)}
                    />
                    {logoError ? (
                      <span className="sm:inline hidden font-serif text-base">
                        Muliya
                      </span>
                    ) : null}
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-8">
                  {categories.map((category) => (
                    <Link
                      key={category.slug}
                      to={`/products/${category.slug}`}
                      className="text-gray-700 hover:text-[#E92247] py-2 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {category.name}
                    </Link>
                  ))}
                  <Link
                    to="/stores"
                    className="text-gray-700 hover:text-[#E92247] py-2 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Store Locator
                  </Link>
                  <Link
                    to="/about"
                    className="text-gray-700 hover:text-[#E92247] py-2 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    to="/blog"
                    className="text-gray-700 hover:text-[#E92247] py-2 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Blog
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Nav Row */}
      <div className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <nav className="hidden md:flex items-center justify-between">
            <div className="flex items-center gap-8 text-sm text-gray-700">
              {desktopNav.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="flex items-center gap-2 hover:text-[#E92247] transition-colors"
                  >
                    <Icon className="w-4 h-4 text-[#E92247]" />
                    <span className="whitespace-nowrap">{item.label}</span>
                    {(item.label === "Gold" ||
                      item.label === "Silver" ||
                      item.label === "Diamond" ||
                      item.label === "Collections") && (
                      <ChevronDown className="w-4 h-4 text-gray-400" />
                    )}
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
