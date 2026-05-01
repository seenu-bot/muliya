"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/app/context/CartContext";
import { useAuth } from "@/app/context/AuthContext";
import { Badge } from "./ui/badge";
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
  LogOut,
} from "lucide-react";
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
  {
    name: "Rings",
    slug: "gold-rings-banglore",
    image: "/category/Gemini_Generated_Image_uacnh2uacnh2uacn.png",
  },
  {
    name: "Earrings",
    slug: "gold-earrings-banglore",
    image: "/category/Gemini_Generated_Image_uacnh2uacnh2uacn (1).png",
  },
  {
    name: "Pendants",
    slug: "gold-pendants-banglore",
    image: "/category/Gemini_Generated_Image_uacnh2uacnh2uacn (2).png",
  },
  {
    name: "Necklaces",
    slug: "gold-necklaces-banglore",
    image: "/category/Gemini_Generated_Image_uacnh2uacnh2uacn (3).png",
  },
  {
    name: "Haarams",
    slug: "gold-haarams-banglore",
    image: "/category/Gemini_Generated_Image_uacnh2uacnh2uacn (4).png",
  },
  {
    name: "Kadaas",
    slug: "gold-kadaas-banglore",
    image: "/category/Gemini_Generated_Image_uacnh2uacnh2uacn (5).png",
  },
  {
    name: "Mangalsutra",
    slug: "gold-mangalsutra-banglore",
    image: "/category/Gemini_Generated_Image_uacnh2uacnh2uacn (6).png",
  },
  {
    name: "Bangles",
    slug: "gold-bangles-banglore",
    image: "/category/Gemini_Generated_Image_uacnh2uacnh2uacn (7).png",
  },
  {
    name: "Chain",
    slug: "gold-chain-banglore",
    image: "/category/Gemini_Generated_Image_uacnh2uacnh2uacn (8).png",
  },
  {
    name: "Bracelets",
    slug: "bracelets",
    image: "/category/Gemini_Generated_Image_uacnh2uacnh2uacn (9).png",
  },
  {
    name: "Gold Coins",
    slug: "gold-coins-banglore",
    image: "/category/Gemini_Generated_Image_uacnh2uacnh2uacn (10).png",
  },
    {
    name: "Watches",
    slug: "watches",
    image: "/category/Gemini_Generated_Image_uacnh2uacnh2uacn (11).png",
  },
];

const diamondCategories = [
  {
    name: "Rings",
    slug: "rings-banglore",
    image: "/images/daimond/diamond-ring.jpeg",
  },
  {
    name: "Earrings",
    slug: "earrings-banglore",
    image: "/images/daimond/diamond-ring.jpeg",
  },
  {
    name: "Pendants",
    slug: "pendants-banglore",
    image: "/images/daimond/diamond-pendant.jpeg",
  },
  {
    name: "Necklaces",
    slug: "necklace-banglore",
    image: "/images/daimond/diamond-chain.jpeg",
  },
  {
    name: "Bangles",
    slug: "bangles-banglore",
    image: "/images/daimond/diamond- bangles.jpeg",
  },
  {
    name: "Bracelets",
    slug: "bracelets-banglore",
    image: "/images/daimond/diamond-brcelet .jpeg",
  },
];

const collectionsData = [
  { name: "Mahathi", slug: "mahathi", image: "/images/Mahathi - s.png" },
  { name: "Amuliya", slug: "amuliya", image: "/images/Amuliya-s.png" },
  { name: "Indian Bridal", slug: "indian-bridal", image: "/images/Indian-bridal-s.png" },
  { name: "Indian Ethnic", slug: "indian-ethnic", image: "/images/Indian-Ethnic-s.png" },
  { name: "Ruby and Emerald", slug: "ruby-and-emerald", image: "/images/Ruby-and-Emerald-s.png" },
  { name: "Apsara", slug: "apsara", image: "/images/Apsara-s.png" },
];

const desktopNav = [
  { label: "Gold", href: "/products/gold-rings-banglore", icon: Coins },
  { label: "Silver", href: "/products/silver-jewellery-banglore", icon: Coins },
  { label: "Diamond", href: "/products/diamond-rings-banglore", icon: Coins },
  { label: "Collections", href: "/collections", icon: Coins },
  { label: "Showrooms", href: "/jewellery-showroom-bangalore", icon: Store },
  { label: "Gallery", href: "/gallery", icon: ImageIcon },
  { label: "Virtual Tour", href: "/blog", icon: Globe },
  { label: "More", href: "/about", icon: undefined },
] as const;

const mobileMenuSections = [
  {
    label: "Gold",
    href: "/products/gold-rings-banglore",
    icon: Coins,
    children: [
      { label: "Rings", href: "/products/gold-rings-banglore" },
      { label: "Earrings", href: "/products/gold-earrings-banglore" },
      { label: "Pendants", href: "/products/gold-pendants-banglore" },
      { label: "Necklaces", href: "/products/gold-necklaces-banglore" },
      { label: "Haarams", href: "/products/gold-haarams-banglore" },
      { label: "Kadaas", href: "/products/gold-kadaas-banglore" },
      { label: "Mangalsutra", href: "/products/gold-mangalsutra-banglore" },
      { label: "Bangles", href: "/products/gold-bangles-banglore" },
      { label: "Chain", href: "/products/gold-chain-banglore" },
      { label: "Bracelets", href: "/products/gold-bracelets-banglore" },
    ],
  },
  {
    label: "Silver",
    href: "/products/silver-jewellery-banglore",
    icon: Coins,
  },
  {
    label: "Diamond",
    href: "/products/diamond-rings-banglore",
    icon: Coins,
    children: [
      { label: "Rings", href: "/products/diamond-rings-banglore" },
      { label: "Earrings", href: "/products/diamond-earrings-banglore" },
      { label: "Pendants", href: "/products/diamond-pendants-banglore" },
      { label: "Necklaces", href: "/products/diamond-necklace-banglore" },
      { label: "Bangles", href: "/products/diamond-bangles-banglore" },
      { label: "Bracelets", href: "/products/diamond-bracelets-banglore" },
    ],
  },
  {
    label: "Collections",
    href: "/collections",
    icon: Coins,
  },
  {
    label: "Showrooms",
    href: "/jewellery-showroom-bangalore",
    icon: Store,
  },
  {
    label: "Gallery",
    href: "/gallery",
    icon: ImageIcon,
  },
  {
    label: "Virtual Tour",
    href: "/blog",
    icon: Globe,
  },
  {
    label: "More",
    href: "/about",
    icon: ChevronDown,
    children: [
      { label: "Gold Buying Plans", href: "/policy/gold-scheme" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
] as const;

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [goldDropdownOpen, setGoldDropdownOpen] = useState(false);
  const [diamondDropdownOpen, setDiamondDropdownOpen] = useState(false);
  const [collectionsDropdownOpen, setCollectionsDropdownOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const [goldTab, setGoldTab] = useState<
    "Category" | "Price" | "Occasion" | "Gold Coin" | "Men" | "Metal"
  >("Category");
  const [diamondTab, setDiamondTab] = useState<
    "Category" | "Price" | "Occasion" | "Gold Coin" | "Men" | "Metal"
  >("Category");
  const router = useRouter();
  const [logoError, setLogoError] = useState(false);
  const { totalItems } = useCart();
  const { user, isAuthenticated, logout } = useAuth();
  const goldRatePerGram = process.env.NEXT_PUBLIC_GOLD_RATE_PER_GRAM || "Rs. 6,500";

  const megaTabs = [
    "Category",
    "Price",
    "Occasion",
    "Gold Coin",
    "Men",
    "Metal",
  ] as const;

  const goldTabContent = {
    Category: categories.slice(0, 12).map((c) => ({
      label: c.name,
      href: `/products/${c.slug}`,
      image: c.image,
    })),
    Price: [
      { label: "<25K", href: "/products", image: "/images/ring-3.jpg" },
      { label: "25K - 50K", href: "/products", image: "/images/earring-1.jpg" },
      { label: "50K - 1L", href: "/products", image: "/images/ring-7.jpg" },
      { label: "1L & Above", href: "/products", image: "/images/ring-10.jpg" },
    ],
    Occasion: [
      { label: "Office Wear", href: "/products", image: "/images/closeup-shot-female-wearing-beautiful-silver-necklace-with-diamond-pendant.jpg" },
      { label: "Modern Wear", href: "/products", image: "/images/young-model-demonstrating-expensive-jewelry.jpg" },
      { label: "Casual Wear", href: "/products", image: "/images/luxury-jewellery-display.jpg" },
      { label: "Traditional Wear", href: "/products", image: "/images/shiny-gemstone-necklace-reflects-elegance-glamour-generated-by-ai.jpg" },
    ],
    "Gold Coin": [
      { label: "Special Coins", href: "/products/gold-coins-banglore", },
      { label: "1 Gram", href: "/products/gold-coins-banglore", },
      { label: "2 Gram", href: "/products/gold-coins-banglore", },
      { label: "4 Gram", href: "/products/gold-coins-banglore", },
      { label: "5 Gram", href: "/products/gold-coins-banglore", },
      { label: "8 Gram", href: "/products/gold-coins-banglore", },
      { label: "10 Gram", href: "/products/gold-coins-banglore", },
      { label: "25 Gram", href: "/products/gold-coins-banglore",  },
      { label: "50 Gram", href: "/products/gold-coins-banglore",  },
      { label: "100 Gram", href: "/products/gold-coins-banglore",  },
    ],
    Men: [
      { label: "Men's Bracelets", href: "/products/gold-bracelets-banglore",  },
      { label: "Men's Chains", href: "/products/gold-chain-banglore", },
      { label: "Men's Engagement Rings", href: "/products/gold-rings-banglore", },
      { label: "Men's Kadaas", href: "/products/gold-kadaas-banglore",  },
      { label: "Men's Pendants", href: "/products/gold-pendants-banglore"},
      { label: "Men's Rings", href: "/products/gold-rings-banglore", },
    ],
    Metal: [
      { label: "Rose", href: "/products", swatch: "#D8A39D" },
      { label: "White", href: "/products", swatch: "#E5E7EB" },
      { label: "Yellow", href: "/products", swatch: "#F3D58A" },
    ],
  } as const;

  const diamondTabContent = {
    Category: diamondCategories.map((c) => ({
      label: c.name,
      href: `/products/diamond-${c.slug}`,
      image: c.image,
    })),
    Price: goldTabContent.Price,
    Occasion: goldTabContent.Occasion,
    "Gold Coin": goldTabContent["Gold Coin"],
    Men: goldTabContent.Men,
    Metal: goldTabContent.Metal,
  } as const;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      {/* Top Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/images/Logo-1.svg"
              alt="Muliya Gold & Diamonds"
              loading="eager"
              decoding="async"
              className="h-10 w-auto object-contain max-w-[160px]"
              onError={() => setLogoError(true)}
            />
            {logoError ? (
              <span className="ml-2 font-serif text-xl text-[#E92247] leading-none hidden sm:inline">
                Muliya
              </span>
            ) : null}
          </Link>

          {/* Center Navigation - Hidden on mobile */}
          <div className="hidden lg:flex items-center gap-10 text-sm text-gray-700">
            <div className="flex items-center gap-2 text-gray-700">
              <span className="whitespace-nowrap flex items-center gap-2">
                <img
                  src="https://media.giphy.com/media/l0ExhcMymdL6TrZ84/giphy.gif"
                  alt="Animated gold icon"
                  className="h-4 w-5 rounded-[3px] object-cover ring-1 ring-amber-400/70"
                  loading="lazy"
                  decoding="async"
                />
                <span>Gold</span>
              </span>
              <span className="font-medium text-gray-900 whitespace-nowrap">{goldRatePerGram}/g</span>
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3 ml-auto">
            {/* Search */}
            <form
              onSubmit={handleSearch}
              className="flex items-center gap-0"
            >
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-24 sm:w-40 md:w-64 h-10 rounded-l-md border border-gray-200 pl-3 sm:pl-4 pr-3 sm:pr-4 text-sm outline-none focus:ring-2 focus:ring-[#E92247]/30"
                />
              </div>
              <button
                type="submit"
                className="h-10 w-11 bg-[#E92247] text-white flex items-center justify-center rounded-r-md"
              >
                <Search className="w-4 h-4" />
              </button>
            </form>

            {/* Cart */}
            <Link href="/cart" className="relative hidden lg:flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors">
              <ShoppingCart className="w-5 h-5 text-gray-700" />
              {totalItems > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-[#E92247] text-white border-0">
                  {totalItems}
                </Badge>
              )}
            </Link>

            {/* User Auth */}
            {isAuthenticated ? (
              <div className="hidden lg:flex items-center gap-2">
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-50">
                  <div className="w-8 h-8 bg-[#E92247] rounded-full flex items-center justify-center text-white font-medium">
                    {user?.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-sm font-medium text-gray-700">{user?.name}</span>
                </div>
                <button
                  onClick={logout}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-600"
                  title="Logout"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <div className="hidden lg:flex items-center gap-3">
                <Link
                  href="/login"
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#E92247] transition-colors whitespace-nowrap"
                >
                  Sign In
                </Link>
                <Link
                  href="/register"
                  className="px-5 py-2 text-sm font-medium bg-[#E92247] text-white rounded-full hover:bg-[#d11f3f] transition-colors whitespace-nowrap"
                >
                  Register
                </Link>
              </div>
            )}

            {/* Mobile Menu */}
            <div className="lg:hidden flex items-center gap-2">
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="w-6 h-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full max-w-[320px] sm:max-w-sm overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle className="flex items-center gap-2 text-[#E92247]">
                      <img
                        src="/images/Logo-1.svg"
                        alt="Muliya"
                        loading="eager"
                        decoding="async"
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
                  <nav className="flex flex-col gap-4 mt-6 pb-6 pl-1 pr-1">
                    {mobileMenuSections.map((section) => {
                      const Icon = section.icon;
                      const children = (section as { children?: readonly { href: string; label: string }[] }).children;
                      const hasChildren = Array.isArray(children) && children.length > 0;
                      return (
                        <div
                          key={section.label}
                          className="border-b border-gray-100 pb-3 last:border-b-0"
                        >
                          <div className="flex items-center">
                            <Link
                              href={section.href}
                              className="flex flex-1 items-center gap-3 py-2 px-2 rounded-md text-base font-medium text-gray-800 hover:text-[#E92247] transition-colors"
                              onClick={(e) => {
                                if (hasChildren) {
                                  e.preventDefault();
                                  setOpenMobileSection((current) =>
                                    current === section.label ? null : section.label,
                                  );
                                  return;
                                }
                                setMobileMenuOpen(false);
                              }}
                            >
                              <Icon className="w-4 h-4 text-[#E92247] flex-shrink-0" />
                              <span>{section.label}</span>
                            </Link>
                            {hasChildren ? (
                              <button
                                type="button"
                                aria-label={`Toggle ${section.label} submenu`}
                                className="p-2 text-[#E92247]"
                                onClick={() =>
                                  setOpenMobileSection((current) =>
                                    current === section.label ? null : section.label,
                                  )
                                }
                              >
                                <ChevronDown
                                  className={
                                    "w-4 h-4 transition-transform " +
                                    (openMobileSection === section.label ? "rotate-180" : "")
                                  }
                                />
                              </button>
                            ) : null}
                          </div>
                          {hasChildren ? (
                            <div
                              className={
                                "mt-1 ml-7 flex flex-col gap-1 overflow-hidden transition-all " +
                                (openMobileSection === section.label
                                  ? "max-h-96 opacity-100"
                                  : "max-h-0 opacity-0")
                              }
                            >
                              {children!.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  className="py-1.5 px-2 rounded-md text-sm text-gray-600 hover:text-[#E92247] transition-colors"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          ) : null}
                        </div>
                      );
                    })}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>

      {/* Nav Row */}
      <div className="border-t border-gray-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <nav className="hidden md:flex items-center justify-center">
            <div className="flex items-center gap-8 text-sm text-gray-700">
              {desktopNav.map((item) => {
                const Icon = item.icon;
                const isGold = item.label === "Gold";
                const isDiamond = item.label === "Diamond";
                const isCollections = item.label === "Collections";
                const isMore = item.label === "More";
                return (
                  <div 
                    key={item.label} 
                    className="relative"
                    onMouseEnter={() => {
                      isGold && setGoldDropdownOpen(true);
                      isDiamond && setDiamondDropdownOpen(true);
                      isCollections && setCollectionsDropdownOpen(true);
                      isMore && setMoreDropdownOpen(true);
                    }}
                    onMouseLeave={() => {
                      isGold && setGoldDropdownOpen(false);
                      isDiamond && setDiamondDropdownOpen(false);
                      isCollections && setCollectionsDropdownOpen(false);
                      isMore && setMoreDropdownOpen(false);
                    }}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center gap-2 hover:text-[#E92247] transition-colors"
                    >
                      {Icon && <Icon className="w-4 h-4 text-[#E92247]" />}
                      <span className="whitespace-nowrap">{item.label}</span>
                      {(item.label === "Gold" ||
                        item.label === "Silver" ||
                        item.label === "Diamond" ||
                        item.label === "Collections" ||
                        item.label === "More") && (
                        <ChevronDown className="w-4 h-4 text-gray-400" />
                      )}
                    </Link>
                    
                    {/* Gold Dropdown */}
                    {isGold && goldDropdownOpen && (
                      <div className="absolute top-full left-0 pt-2 z-50">
                        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden w-[1040px]">
                          <div className="flex">
                            {/* Promo Image - Left */}
                            <div className="w-[320px] p-6 flex-shrink-0">
                              <div className="relative h-full min-h-[420px] rounded-xl overflow-hidden group cursor-pointer">
                                <img
                                  src="/images/Gemini_Generated_Image_hhlctbhhlctbhhlc.png"
                                  alt="Featured Gold Collection"
                                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                  loading="lazy"
                                  decoding="async"
                                  onError={(e) => {
                                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80";
                                  }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6">
                                  <p className="text-white font-serif text-2xl mb-1">Intricately handcrafted</p>
                                  <p className="text-white/85 text-sm">Explore our latest designs</p>
                                </div>
                              </div>
                            </div>

                            {/* Divider */}
                            <div className="w-px bg-gray-200 my-6" />

                            {/* Content */}
                            <div className="flex-1 p-6">
                              {/* Tabs */}
                              <div className="flex items-center gap-6 border-b border-gray-100 pb-3">
                                {megaTabs.map((t) => (
                                  <button
                                    key={t}
                                    type="button"
                                    onMouseEnter={() => setGoldTab(t)}
                                    className={
                                      "text-sm font-medium transition-colors px-1 pb-2 -mb-[9px] border-b-2 " +
                                      (goldTab === t
                                        ? "text-[#8B4513] border-[#8B4513]"
                                        : "text-gray-600 border-transparent hover:text-[#8B4513]")
                                    }
                                  >
                                    {t}
                                  </button>
                                ))}
                              </div>

                              {/* Panel */}
                              <div className="pt-5">
                                {goldTab === "Category" && (
                                  <div className="grid grid-cols-3 gap-y-4">
                                    {goldTabContent.Category.map((it) => (
                                      <Link
                                        key={it.href}
                                        href={it.href}
                                        className="flex items-center py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors group"
                                      >
                                        {it.image ? (
                                          <img
                                            src={it.image}
                                            alt={it.label}
                                            className="w-10 h-10 rounded-md object-cover mr-3 border border-gray-100"
                                            loading="lazy"
                                            decoding="async"
                                          />
                                        ) : null}
                                        <span className="text-[#8B4513] text-sm font-medium group-hover:text-[#E92247] transition-colors">
                                          {it.label}
                                        </span>
                                      </Link>
                                    ))}
                                  </div>
                                )}

                                {goldTab === "Price" && (
                                  <div className="grid grid-cols-4 gap-4">
                                    {goldTabContent.Price.map((it) => (
                                      <Link
                                        key={it.label}
                                        href={it.href}
                                        className="group rounded-xl border border-gray-100 hover:border-[#8B4513]/30 hover:shadow-sm transition-all px-3 py-3 text-center"
                                      >
                                        <p className="text-[#8B4513] font-medium text-sm">{it.label}</p>
                                      </Link>
                                    ))}
                                  </div>
                                )}

                                {goldTab === "Occasion" && (
                                  <div className="grid grid-cols-4 gap-4">
                                    {goldTabContent.Occasion.map((it) => (
                                      <Link
                                        key={it.label}
                                        href={it.href}
                                        className="group rounded-xl border border-gray-100 hover:border-[#8B4513]/30 hover:shadow-sm transition-all px-3 py-3 text-center"
                                      >
                                        <p className="text-[#8B4513] font-medium text-sm">{it.label}</p>
                                      </Link>
                                    ))}
                                  </div>
                                )}

                                {goldTab === "Gold Coin" && (
                                  <div className="grid grid-cols-3 gap-y-4">
                                    {goldTabContent["Gold Coin"].map((it) => (
                                      <Link
                                        key={it.label}
                                        href={it.href}
                                        className="flex items-center gap-3 py-2 px-2 rounded-lg hover:bg-gray-50 transition-colors"
                                      >
                                        <div className="w-2 h-2 rounded-full bg-amber-300/80" />
                                        <span className="text-[#8B4513] text-sm font-medium">{it.label}</span>
                                      </Link>
                                    ))}
                                  </div>
                                )}

                                {goldTab === "Men" && (
                                  <div className="grid grid-cols-3 gap-y-4">
                                    {goldTabContent.Men.map((it) => (
                                      <Link
                                        key={it.label}
                                        href={it.href}
                                        className="flex items-center gap-3 py-2 px-2 rounded-lg hover:bg-gray-50 transition-colors"
                                      >
                                        <div className="w-2 h-2 rounded-full bg-gray-400/70" />
                                        <span className="text-[#8B4513] text-sm font-medium">{it.label}</span>
                                      </Link>
                                    ))}
                                  </div>
                                )}

                                {goldTab === "Metal" && (
                                  <div className="grid grid-cols-3 gap-4 max-w-[420px]">
                                    {goldTabContent.Metal.map((it) => (
                                      <Link
                                        key={it.label}
                                        href={it.href}
                                        className="flex items-center gap-3 py-3 px-3 rounded-xl border border-gray-100 hover:border-[#8B4513]/30 hover:shadow-sm transition-all"
                                      >
                                        <div
                                          className="w-5 h-5 rounded-full border border-gray-200"
                                          style={{ backgroundColor: it.swatch }}
                                        />
                                        <span className="text-[#8B4513] text-sm font-medium">{it.label}</span>
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Diamond Dropdown */}
                    {isDiamond && diamondDropdownOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden w-[1040px]">
                          <div className="flex">
                            {/* Promo Image - Left */}
                            <div className="w-[320px] p-6 flex-shrink-0">
                              <div className="relative h-full min-h-[420px] rounded-xl overflow-hidden group cursor-pointer">
                                <img
                                  src="/images/daimond/Gemini_Generated_Image_9hrdca9hrdca9hrd.png"
                                  alt="Featured Diamond Collection"
                                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                  loading="lazy"
                                  decoding="async"
                                  onError={(e) => {
                                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80";
                                  }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6">
                                  <p className="text-white font-serif text-2xl mb-1">Diamond Collection</p>
                                  <p className="text-white/85 text-sm">Timeless elegance</p>
                                </div>
                              </div>
                            </div>

                            {/* Divider */}
                            <div className="w-px bg-gray-200 my-6" />

                            {/* Content */}
                            <div className="flex-1 p-6">
                              {/* Tabs */}
                              <div className="flex items-center gap-6 border-b border-gray-100 pb-3">
                                {megaTabs.map((t) => (
                                  <button
                                    key={t}
                                    type="button"
                                    onMouseEnter={() => setDiamondTab(t)}
                                    className={
                                      "text-sm font-medium transition-colors px-1 pb-2 -mb-[9px] border-b-2 " +
                                      (diamondTab === t
                                        ? "text-[#1e3a5f] border-[#1e3a5f]"
                                        : "text-gray-600 border-transparent hover:text-[#1e3a5f]")
                                    }
                                  >
                                    {t}
                                  </button>
                                ))}
                              </div>

                              {/* Panel */}
                              <div className="pt-5">
                                {diamondTab === "Category" && (
                                  <div className="grid grid-cols-3 gap-y-4">
                                    {diamondTabContent.Category.map((it) => (
                                      <Link
                                        key={it.href}
                                        href={it.href}
                                        className="flex items-center py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors group"
                                      >
                                        {it.image ? (
                                          <img
                                            src={it.image}
                                            alt={it.label}
                                            className="w-10 h-10 rounded-md object-cover mr-3 border border-gray-100"
                                            loading="lazy"
                                            decoding="async"
                                          />
                                        ) : null}
                                        <span className="text-[#1e3a5f] text-sm font-medium group-hover:text-[#E92247] transition-colors">
                                          {it.label}
                                        </span>
                                      </Link>
                                    ))}
                                  </div>
                                )}

                                {diamondTab !== "Category" && (
                                  <div className="text-sm text-gray-600">
                                    {diamondTab === "Price" && (
                                      <div className="grid grid-cols-4 gap-4">
                                        {diamondTabContent.Price.map((it) => (
                                          <Link
                                            key={it.label}
                                            href={it.href}
                                            className="group rounded-xl border border-gray-100 hover:border-[#1e3a5f]/30 hover:shadow-sm transition-all px-3 py-3 text-center"
                                          >
                                            <p className="text-[#1e3a5f] font-medium text-sm">{it.label}</p>
                                          </Link>
                                        ))}
                                      </div>
                                    )}

                                    {diamondTab === "Occasion" && (
                                      <div className="grid grid-cols-4 gap-4">
                                        {diamondTabContent.Occasion.map((it) => (
                                          <Link
                                            key={it.label}
                                            href={it.href}
                                            className="group rounded-xl border border-gray-100 hover:border-[#1e3a5f]/30 hover:shadow-sm transition-all px-3 py-3 text-center"
                                          >
                                            <p className="text-[#1e3a5f] font-medium text-sm">{it.label}</p>
                                          </Link>
                                        ))}
                                      </div>
                                    )}

                                    {diamondTab === "Gold Coin" && (
                                      <div className="grid grid-cols-3 gap-y-4">
                                        {diamondTabContent["Gold Coin"].map((it) => (
                                          <Link
                                            key={it.label}
                                            href={it.href}
                                            className="flex items-center gap-3 py-2 px-2 rounded-lg hover:bg-gray-50 transition-colors"
                                          >
                                            <div className="w-2 h-2 rounded-full bg-blue-400/70" />
                                            <span className="text-[#1e3a5f] text-sm font-medium">{it.label}</span>
                                          </Link>
                                        ))}
                                      </div>
                                    )}

                                    {diamondTab === "Men" && (
                                      <div className="grid grid-cols-3 gap-y-4">
                                        {diamondTabContent.Men.map((it) => (
                                          <Link
                                            key={it.label}
                                            href={it.href}
                                            className="flex items-center gap-3 py-2 px-2 rounded-lg hover:bg-gray-50 transition-colors"
                                          >
                                            <div className="w-2 h-2 rounded-full bg-gray-500/70" />
                                            <span className="text-[#1e3a5f] text-sm font-medium">{it.label}</span>
                                          </Link>
                                        ))}
                                      </div>
                                    )}

                                    {diamondTab === "Metal" && (
                                      <div className="grid grid-cols-3 gap-4 max-w-[420px]">
                                        {diamondTabContent.Metal.map((it) => (
                                          <Link
                                            key={it.label}
                                            href={it.href}
                                            className="flex items-center gap-3 py-3 px-3 rounded-xl border border-gray-100 hover:border-[#1e3a5f]/30 hover:shadow-sm transition-all"
                                          >
                                            <div
                                              className="w-5 h-5 rounded-full border border-gray-200"
                                              style={{ backgroundColor: it.swatch }}
                                            />
                                            <span className="text-[#1e3a5f] text-sm font-medium">{it.label}</span>
                                          </Link>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Collections Dropdown */}
                    {isCollections && collectionsDropdownOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden w-[900px]">
                          {/* Header */}
                          <div className="bg-gradient-to-r from-purple-50 to-white px-8 py-4 border-b border-gray-100">
                            <p className="text-[#6b2c91] font-medium text-base">Our Collections</p>
                          </div>
                          
                          <div className="flex">
                            {/* Collections Grid - Left Side */}
                            <div className="flex-1 p-6">
                              <div className="grid grid-cols-3 gap-4">
                                {collectionsData.map((col) => (
                                  <Link
                                    key={col.slug}
                                    href={`/collections/${col.slug}`}
                                    className="relative rounded-xl overflow-hidden group cursor-pointer h-[120px]"
                                  >
                                    <img
                                      src={col.image}
                                      alt={col.name}
                                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                      loading="lazy"
                                      decoding="async"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                    <div className="absolute bottom-3 left-3 right-3">
                                      <p className="text-white font-serif text-sm">{col.name}</p>
                                    </div>
                                    {/* Sparkle icon */}
                                    <div className="absolute top-2 right-2">
                                      <svg className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
                                      </svg>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                            
                            {/* Vertical Divider */}
                            <div className="w-px bg-gray-200 my-6" />
                            
                            {/* Featured Image - Right Side */}
                            <div className="w-[300px] p-6 flex-shrink-0">
                              <div className="relative h-full min-h-[260px] rounded-xl overflow-hidden group cursor-pointer">
                                <img
                                  src="/images/collections/featured-collection.png"
                                  alt="Featured Collection"
                                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                  loading="lazy"
                                  decoding="async"
                                  onError={(e) => {
                                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80";
                                  }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                <div className="absolute bottom-5 left-5 right-5">
                                  <p className="text-white font-serif text-xl mb-1">Exclusive Collection</p>
                                  <p className="text-white/80 text-sm">Discover our finest pieces</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* More Dropdown */}
                    {isMore && moreDropdownOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                        <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden w-[220px] py-2">
                          <Link
                            href="/policy/gold-scheme"
                            className="block px-5 py-3 text-gray-900 hover:bg-gray-50 hover:text-[#E92247] transition-colors text-base"
                          >
                            Gold Buying Plans
                          </Link>
                          <Link
                            href="/blog"
                            className="block px-5 py-3 text-gray-900 hover:bg-gray-50 hover:text-[#E92247] transition-colors text-base"
                          >
                            Blog
                          </Link>
                          <Link
                            href="/careers"
                            className="block px-5 py-3 text-gray-900 hover:bg-gray-50 hover:text-[#E92247] transition-colors text-base"
                          >
                            Careers
                          </Link>
                          <Link
                            href="/contact"
                            className="block px-5 py-3 text-gray-900 hover:bg-gray-50 hover:text-[#E92247] transition-colors text-base"
                          >
                            Contact Us
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
