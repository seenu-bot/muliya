"use client";

import Link from "next/link";
import { ChevronRight, MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, Youtube, MessageCircle } from "lucide-react";

export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#E92247] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">Contact us</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-[#E92247] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">
              Contact us
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
              Get in touch with us for any queries, feedback, or assistance
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="text-3xl font-serif text-gray-900 mb-2">Have some Questions?</h2>
            <p className="text-gray-600 mb-8">Fill out the form below and we&apos;ll get back to you shortly</p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E92247] focus:ring-2 focus:ring-[#E92247]/20 outline-none transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E92247] focus:ring-2 focus:ring-[#E92247]/20 outline-none transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input 
                  type="email" 
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E92247] focus:ring-2 focus:ring-[#E92247]/20 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E92247] focus:ring-2 focus:ring-[#E92247]/20 outline-none transition-all"
                  placeholder="+91 98765 43210"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                <select 
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E92247] focus:ring-2 focus:ring-[#E92247]/20 outline-none transition-all"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="product">Product Information</option>
                  <option value="order">Order Status</option>
                  <option value="feedback">Feedback</option>
                  <option value="careers">Careers</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                <textarea 
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E92247] focus:ring-2 focus:ring-[#E92247]/20 outline-none transition-all resize-none"
                  placeholder="Your message here..."
                />
              </div>
              
              <button 
                type="submit"
                className="flex items-center justify-center gap-2 bg-[#E92247] text-white px-8 py-4 rounded-xl hover:bg-[#d11f3f] transition-all shadow-lg hover:shadow-xl font-medium w-full md:w-auto"
              >
                <Send className="w-5 h-5" />
                Enquire Now
              </button>
            </form>
          </div>

          {/* Map & Additional Info */}
          <div className="space-y-8">
            {/* Map Placeholder */}
            <div className="bg-gray-100 rounded-2xl overflow-hidden h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.4876868885863!2d75.1991723148218!3d12.760619990468797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4b9d6d5f5f5f5%3A0x5e5e5e5e5e5e5e5e!2sMuliya%20Gold%20%26%20Diamonds!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Working Hours */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-[#E92247]" />
                <h3 className="text-lg font-semibold text-gray-900">Working Hours</h3>
              </div>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Saturday</span>
                  <span className="font-medium">10:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Find Us On</h3>
              <div className="flex gap-4">
                <a href="https://facebook.com/muliyajewels" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#1877F2] text-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://instagram.com/muliyajewels" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 text-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://twitter.com/muliyajewels" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a href="https://youtube.com/muliyajewels" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#FF0000] text-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="https://wa.me/919844575916" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#25D366] text-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Head Office */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Head Office Address</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                SHYAMA JEWELS LLP<br />
                NO 476 G and H<br />
                INDIAN ARCADE<br />
                Court Road, Puttur<br />
                KARNATAKA - 574201
              </p>
            </div>

            {/* Policy */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Policy</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/policy/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
                <li><Link href="/policy/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/policy/shipping" className="hover:text-white transition-colors">Shipping Policy</Link></li>
                <li><Link href="/policy/returns" className="hover:text-white transition-colors">Return Policy</Link></li>
              </ul>
            </div>

            {/* Shopping */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Shopping</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/products/rings" className="hover:text-white transition-colors">Gold Jewellery</Link></li>
                <li><Link href="/products/earrings" className="hover:text-white transition-colors">Diamond Jewellery</Link></li>
                <li><Link href="/collections" className="hover:text-white transition-colors">Collections</Link></li>
                <li><Link href="/store-locator" className="hover:text-white transition-colors">Store Locator</Link></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
