"use client";

import { useState } from "react";
import Link from "next/link";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const [logoError, setLogoError] = useState(false);

  return (
    <footer className="bg-white text-gray-700 relative overflow-hidden">
      {/* Decorative light blue circles */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-100/40 rounded-full blur-3xl -top-20 -left-20"></div>
        <div className="absolute w-80 h-80 bg-sky-100/30 rounded-full blur-3xl top-20 right-10"></div>
        <div className="absolute w-72 h-72 bg-blue-50/50 rounded-full blur-3xl bottom-10 left-1/3"></div>
        <div className="absolute w-64 h-64 bg-sky-50/40 rounded-full blur-3xl -bottom-10 right-1/4"></div>
      </div>

      {/* Main Footer */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/images/Logo-1.svg"
                alt="Muliya Gold & Diamonds"
                loading="eager"
                decoding="async"
                className="h-10 w-auto object-contain max-w-[180px]"
                onError={() => setLogoError(true)}
              />
              {logoError ? (
                <span className="font-serif text-xl text-[#E92247] hidden sm:inline">
                  Muliya
                </span>
              ) : null}
            </div>
            <p className="text-sm mb-6 leading-relaxed">
              Premium gold and diamond jewelry crafted with excellence since 1944.
              Your trusted partner for life's precious moments.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#E92247] hover:text-white transition-all duration-300">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#E92247] hover:text-white transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#E92247] hover:text-white transition-all duration-300">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="hover:text-[#E92247] transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E92247] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/collections" className="hover:text-[#E92247] transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E92247] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Collections
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#E92247] transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E92247] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Blog & Journal
                </Link>
              </li>
              <li>
                <Link href="/jewellery-showroom-bangalore" className="hover:text-[#E92247] transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E92247] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Store Locator
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-5">Customer Care</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/policy/terms" className="hover:text-[#E92247] transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E92247] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/policy/privacy" className="hover:text-[#E92247] transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E92247] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/policy/return" className="hover:text-[#E92247] transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E92247] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Return Policy
                </Link>
              </li>
              <li>
                <Link href="/policy/return-refund" className="hover:text-[#E92247] transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E92247] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Scheme Terms
                </Link>
              </li>
              <li>
                <Link href="/policy/pip" className="hover:text-[#E92247] transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E92247] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  PIP Terms
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-5">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <span className="mt-0.5 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-[#E92247] flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </span>
                <span className="text-gray-700 leading-relaxed">
                  MANIPAL CENTRE, DICKENSON ROAD,
                  <br />
                  BENGALURU, Karnataka 574 201
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-[#E92247] flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </span>
                <a href="tel:+919844692916" className="hover:text-[#E92247] transition-colors text-gray-700">
                  +91 9844692916
                </a>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-[#E92247] flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </span>
                <a href="mailto:info@muliya.com" className="hover:text-[#E92247] transition-colors text-gray-700">
                  info@muliya.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600">
            <p>&copy; 2026 Muliya Gold & Diamonds. All rights reserved.</p>
            <p className="font-medium text-[#E92247]">Creating Happiness Since 1944</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
