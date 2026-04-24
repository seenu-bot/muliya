"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Users, Award, Heart, Sparkles, Briefcase, TrendingUp, Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Growth & Development",
    description: "Continuous learning opportunities and career advancement programs"
  },
  {
    icon: Award,
    title: "Rewards & Recognition",
    description: "Competitive salaries and performance-based incentives"
  },
  {
    icon: Heart,
    title: "Employee Welfare",
    description: "Comprehensive health benefits and work-life balance"
  },
  {
    icon: Sparkles,
    title: "Culture & Engagement",
    description: "Inclusive workplace culture with team building activities"
  },
  {
    icon: Briefcase,
    title: "Diverse Career Avenues",
    description: "Opportunities across sales, design, manufacturing, and management"
  }
];

const openings = [
  {
    title: "Sales Executive",
    location: "Puttur, Karnataka",
    type: "Full-time",
    description: "Join our retail team and help customers find their perfect jewellery"
  },
  {
    title: "Jewellery Designer",
    location: "Bengaluru, Karnataka",
    type: "Full-time",
    description: "Create stunning designs that blend tradition with modern aesthetics"
  },
  {
    title: "Store Manager",
    location: "Multiple Locations",
    type: "Full-time",
    description: "Lead showroom operations and deliver exceptional customer experiences"
  }
];

export default function CareersPage() {
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
            <span className="text-gray-900 font-medium">Careers</span>
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
              Careers
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto">
              Join the Team Behind Karnataka&apos;s Most Trusted Jewellery Brand
            </p>
          </div>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">
              Who We Are
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              At Muliya – Gold & Diamonds, we don&apos;t just make jewellery—we make joy, trust, and lasting memories. 
              Since 1944, we have been crafting exquisite gold and diamond pieces that celebrate life&apos;s precious moments.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our team is the heart of our success. We believe in nurturing talent, fostering creativity, 
              and creating an environment where every individual can thrive and grow alongside our brand.
            </p>
          </div>
          <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/Shyama-Jewels-Sourcing.jpg"
              alt="Muliya Team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Why Work With Us */}
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
              Why Work With Us?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover the benefits of being part of the Muliya family
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-[#E92247]/10 rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7 text-[#E92247]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Current Openings */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
            Current Openings
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Join our growing team and build a rewarding career in the jewellery industry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {openings.map((job, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#E92247]/20 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {job.title}
                </h3>
                <span className="bg-[#E92247]/10 text-[#E92247] px-3 py-1 rounded-full text-sm font-medium">
                  {job.type}
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-500 mb-4">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{job.location}</span>
              </div>
              <p className="text-gray-600 mb-6">
                {job.description}
              </p>
              <button className="w-full flex items-center justify-center gap-2 bg-[#E92247] text-white px-4 py-3 rounded-xl hover:bg-[#d11f3f] transition-colors font-medium">
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* How to Apply */}
      <div className="bg-gray-900 text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="w-16 h-16 mx-auto mb-6 text-[#E92247]" />
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            Ready to Join Us?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Take the first step towards an exciting career with Muliya Gold & Diamonds. 
            Send us your resume and let&apos;s create happiness together.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="mailto:careers@muliyajewels.com"
              className="flex items-center gap-3 bg-[#E92247] text-white px-8 py-4 rounded-xl hover:bg-[#d11f3f] transition-all shadow-lg hover:shadow-xl font-medium"
            >
              <Mail className="w-5 h-5" />
              Send Your Resume
            </a>
            <a
              href="tel:+919844575916"
              className="flex items-center gap-3 bg-white/10 text-white px-8 py-4 rounded-xl hover:bg-white/20 transition-all backdrop-blur-sm font-medium"
            >
              <Phone className="w-5 h-5" />
              Call HR Department
            </a>
          </div>

          <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-4">Head Office</h3>
            <div className="flex items-center justify-center gap-2 text-gray-400">
              <MapPin className="w-5 h-5" />
              <span>476/G and H, Indian Arcade, Court Road, Puttur, Karnataka - 574201</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
