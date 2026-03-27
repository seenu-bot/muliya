import { useState } from "react";
import { Link } from "react-router";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import logoUrl from "../../../assets/muliya-logo.png";

export function Footer() {
  const [logoError, setLogoError] = useState(false);
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src={logoUrl}
                alt="Muliya Gold & Diamonds"
                loading="eager"
                className="h-10 w-auto object-contain max-w-[180px]"
                onError={() => setLogoError(true)}
              />
              {logoError ? (
                <span className="font-serif text-xl text-[#E92247] hidden sm:inline">
                  Muliya
                </span>
              ) : null}
            </div>
            <p className="text-sm mb-4">
              Premium gold and diamond jewelry crafted with excellence since 1985.
              Your trusted partner for life's precious moments.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#E92247] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#E92247] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#E92247] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-[#E92247] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-[#E92247] transition-colors">
                  Collections
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-[#E92247] transition-colors">
                  Blog & Journal
                </Link>
              </li>
              <li>
                <Link to="/stores" className="hover:text-[#E92247] transition-colors">
                  Store Locator
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="hover:text-[#E92247] transition-colors">
                  My Account
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-white font-semibold mb-4">Customer Care</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/policy/terms" className="hover:text-[#E92247] transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/policy/privacy" className="hover:text-[#E92247] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/policy/return" className="hover:text-[#E92247] transition-colors">
                  Return Policy
                </Link>
              </li>
              <li>
                <Link to="/policy/shipping" className="hover:text-[#E92247] transition-colors">
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link to="/policy/gold-scheme" className="hover:text-[#E92247] transition-colors">
                  Gold Scheme
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-[#E92247] flex-shrink-0 mt-0.5" />
                <span>123 Jewelry Lane, Mumbai, Maharashtra 400001</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#E92247] flex-shrink-0" />
                <span>+91 9876543210</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#E92247] flex-shrink-0" />
                <span>info@muliya.com</span>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="text-white text-sm font-semibold mb-2">Newsletter</h4>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                />
                <Button
                  variant="default"
                  className="bg-[#E92247] hover:bg-[#E92247]/90"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
            <p>&copy; 2026 Muliya Gold & Diamonds. All rights reserved.</p>
            <div className="flex gap-4">
              <span>BIS Hallmarked</span>
              <span>•</span>
              <span>100% Certified</span>
              <span>•</span>
              <span>Secure Payment</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
