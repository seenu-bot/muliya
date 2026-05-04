"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Users, Award, Heart, Sparkles, Briefcase, TrendingUp, Phone, Mail, MapPin, ArrowRight, Clock3, Gem } from "lucide-react";

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
    description: "Join our retail team and help customers find their perfect jewellery",
    department: "Retail Experience",
  },
  {
    title: "Jewellery Designer",
    location: "Bengaluru, Karnataka",
    type: "Full-time",
    description: "Create stunning designs that blend tradition with modern aesthetics",
    department: "Design Studio",
  },
  {
    title: "Store Manager",
    location: "Multiple Locations",
    type: "Full-time",
    description: "Lead showroom operations and deliver exceptional customer experiences",
    department: "Operations",
  }
];

const cultureHighlights = [
  {
    title: "Purpose-led work",
    description: "Be part of a brand that blends trust, craftsmanship, and customer delight every single day.",
  },
  {
    title: "Learning at every stage",
    description: "Grow your career through real showroom experience, mentoring, and role-based development.",
  },
  {
    title: "People-first culture",
    description: "Work in an environment where collaboration, care, and long-term relationships matter.",
  },
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#E92247] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">Careers</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-white">
        <picture>
          <source media="(max-width: 768px)" srcSet="/images/carrerimage.jpeg" />
          <img
            src="/images/carrerimage.jpeg"
            alt="Careers banner"
            className="w-full object-cover"
            style={{ height: "50vh" }}
            loading="lazy"
            decoding="async"
          />
        </picture>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-gray-900 mb-4 sm:mb-6 leading-tight">
            Careers
          </h1>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl">
            Join the team behind Karnataka&apos;s trusted jewellery legacy and build meaningful work in a culture shaped by craftsmanship, care, and growth.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#openings"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#E92247] px-6 py-3 text-sm font-medium text-white shadow-lg transition hover:bg-[#E92247]/90"
            >
              Explore Open Roles
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="mailto:careers@muliyajewels.com"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-medium text-gray-900 transition hover:bg-gray-50"
            >
              Send Your Resume
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <p className="text-sm text-[#E92247] font-medium tracking-wide mb-3">Who we are</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-900 mb-6">
              Who We Are
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
              At Muliya – Gold & Diamonds, we don&apos;t just make jewellery—we make joy, trust, and lasting memories. 
              Since 1944, we have been crafting exquisite gold and diamond pieces that celebrate life&apos;s precious moments.
            </p>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Our team is the heart of our success. We believe in nurturing talent, fostering creativity, 
              and creating an environment where every individual can thrive and grow alongside our brand.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {cultureHighlights.map((item) => (
                <div key={item.title} className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-5 shadow-sm">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                    <Gem className="h-5 w-5 text-[#E92247]" />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-80 lg:h-[500px] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/images/Shyama-Jewels-Sourcing.jpg"
              alt="Muliya Team"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d2a47]/25 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/40 bg-white/85 p-4 backdrop-blur-sm shadow-lg">
              <p className="text-sm font-semibold text-[#0d2a47]">A team that builds confidence</p>
              <p className="mt-1 text-sm text-gray-600">From showroom excellence to design innovation, every role contributes to the Muliya experience.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Work With Us */}
      <div className="bg-white py-12 sm:py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 h-60 w-60 rounded-full bg-sky-100/40 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-900 mb-4">
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
                className="relative group h-full rounded-3xl p-[1px] bg-gradient-to-br from-blue-300 via-white to-blue-200 transition duration-500 hover:from-blue-400 hover:to-blue-300"
              >
                <div className="h-full rounded-3xl bg-slate-50/90 p-6 sm:p-8 shadow-md transition-all duration-500 group-hover:shadow-2xl">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-300 to-slate-50 flex items-center justify-center mb-6 shadow-sm">
                    <benefit.icon className="w-7 h-7 text-[#E92247]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-7">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Current Openings */}
      <div id="openings" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-900 mb-4">
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
              className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-blue-50/60 to-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-start justify-between gap-3 mb-5">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#E92247] mb-2">
                    {job.department}
                  </p>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {job.title}
                  </h3>
                </div>
                <span className="bg-blue-100 text-[#0d2a47] px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                  {job.type}
                </span>
              </div>
              <div className="space-y-3 mb-5">
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-4 h-4 text-[#E92247]" />
                  <span className="text-sm">{job.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock3 className="w-4 h-4 text-[#E92247]" />
                  <span className="text-sm">Immediate hiring</span>
                </div>
              </div>
              <p className="text-gray-600 leading-7 mb-6">
                {job.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:careers@muliyajewels.com"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#E92247] px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-[#d11f3f]"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="tel:+919844575916"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-blue-200 bg-white px-4 py-3 text-sm font-medium text-[#0d2a47] transition-colors hover:bg-blue-50"
                >
                  Talk to HR
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How to Apply */}
      <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-sky-50 py-12 sm:py-16 md:py-24">
        <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-blue-200/45 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-sky-200/35 blur-3xl pointer-events-none" />
        <div className="absolute -top-24 right-1/3 h-72 w-72 rounded-full bg-indigo-200/25 blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm border border-blue-100">
            <Users className="w-8 h-8 text-[#E92247]" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-900 mb-4">
            Ready to Join Us?
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
            Take the first step towards an exciting career with Muliya Gold & Diamonds. 
            Send us your resume and let&apos;s create happiness together.
          </p>
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 mb-12">
            <a
              href="mailto:careers@muliyajewels.com"
              className="flex items-center justify-center gap-3 bg-[#E92247] text-white px-8 py-4 rounded-xl hover:bg-[#d11f3f] transition-all shadow-md hover:shadow-lg font-medium w-full sm:w-auto"
            >
              <Mail className="w-5 h-5" />
              Send Your Resume
            </a>
            <a
              href="tel:+919844575916"
              className="flex items-center justify-center gap-3 bg-white text-[#0d2a47] px-8 py-4 rounded-xl hover:bg-blue-50 transition-all border border-blue-200 font-medium w-full sm:w-auto shadow-sm"
            >
              <Phone className="w-5 h-5" />
              Call HR Department
            </a>
          </div>

          <div className="rounded-3xl p-[1px] bg-gradient-to-br from-blue-300 via-white to-blue-200 shadow-sm">
            <div className="rounded-3xl bg-white/90 backdrop-blur-sm p-6 sm:p-8 border border-blue-100">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Head Office</h3>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-gray-600">
                <MapPin className="w-5 h-5 text-[#E92247]" />
                <span>476/G and H, Indian Arcade, Court Road, Puttur, Karnataka - 574201</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
