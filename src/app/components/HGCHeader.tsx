"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Branches", href: "/branches" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Gold Buyers", href: "/services/best-gold" },
      { label: "Sell Gold", href: "/services/sell-gold" },
      { label: "Release Pledged Gold", href: "/services/release-pledged-gold" },
      { label: "Value for Gold", href: "/services/value-for-gold" },
    ],
  },
  {
    label: "Blog",
    href: "/blog",
    children: [
      { label: "New Updates", href: "/blog" },
      { label: "Pledged Gold", href: "/blog/release-pledged-gold-near-me" },
      { label: "Gold Buyers", href: "/blog/gold-buyers-near-me" },
      { label: "Sell Gold", href: "/blog/sell-gold-for-cash" },
      { label: "Cash for Gold", href: "/blog/cash-for-gold-near-me" },
    ],
  },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
];

export function HGCHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);

  return (
    <header className="bg-[#1a1a1a] text-white shadow-lg sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-[#C8102E] py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
          <span className="text-white/90">India&apos;s #1 Trusted Gold Buyers | ISO 9001–2015 Certified</span>
          <a href="tel:08088550033" className="flex items-center gap-1 text-white font-semibold hover:text-yellow-300 transition-colors">
            <Phone className="w-3.5 h-3.5" />
            8088550033
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image
              src="https://hindustangoldcompany.com/static/img/logo.svg"
              alt="Hindustan Gold Company"
              width={180}
              height={78}
              className="h-13 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative group">
                  <button
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded transition-colors hover:text-[#D4A843] ${
                      pathname.startsWith(link.href) ? "text-[#D4A843]" : "text-gray-200"
                    }`}
                  >
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                  <div className="absolute top-full left-0 mt-1 w-52 bg-[#1a1a1a] border border-gray-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-gray-300 hover:text-[#D4A843] hover:bg-white/5 first:rounded-t-lg last:rounded-b-lg transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded transition-colors hover:text-[#D4A843] ${
                    pathname === link.href ? "text-[#D4A843]" : "text-gray-200"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/check-gold-price"
              className="bg-[#C8102E] hover:bg-[#a00d25] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              Calculate Gold Price
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#111] border-t border-gray-700 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <div key={link.label}>
              {link.children ? (
                <>
                  <button
                    className="w-full flex items-center justify-between py-2 text-sm font-medium text-gray-200"
                    onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                  >
                    {link.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === link.label ? "rotate-180" : ""}`} />
                  </button>
                  {openDropdown === link.label && (
                    <div className="pl-4 space-y-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block py-1.5 text-sm text-gray-400 hover:text-[#D4A843]"
                          onClick={() => setMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={link.href}
                  className={`block py-2 text-sm font-medium ${
                    pathname === link.href ? "text-[#D4A843]" : "text-gray-200"
                  } hover:text-[#D4A843]`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
          <Link
            href="/check-gold-price"
            className="block mt-3 bg-[#C8102E] text-white text-sm font-semibold px-4 py-2.5 rounded-lg text-center"
            onClick={() => setMenuOpen(false)}
          >
            Calculate Gold Price
          </Link>
        </div>
      )}
    </header>
  );
}
