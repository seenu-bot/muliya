"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { Shield, Award, TrendingUp, Star, ArrowRight, CheckCircle, ChevronDown, ChevronUp, Play, BookOpen, Calendar, MapPin, IdCard, SearchCheck, BadgeCheck, HandCoins } from "lucide-react";

const BASE = "https://hindustangoldcompany.com";

const heroSlides = [
  {
    title: "India's #1 Gold Buyers",
    subtitle: "Hindustan Gold Company — Trusted for over two decades. Get instant cash at the best online price.",
    cta: "Calculate Gold Price",
    ctaHref: "/check-gold-price",
    img: `${BASE}/static/img/Gold-Buyers.webp`,
    imgAlt: "Best gold buyers in bangalore",
  },
  {
    title: "Jewellery Buyers",
    subtitle: "Fair evaluation of old & unwanted gold jewellery with informed decision-making.",
    cta: "Know More",
    ctaHref: "/blog/gold-buyers-near-me",
    img: `${BASE}/static/img/jewellery_buyers.webp`,
    imgAlt: "Gold buyers in bangalore",
  },
  {
    title: "Door Step Service",
    subtitle: "Our specialists come to you. Sell gold from the comfort of your home — instant cash.",
    cta: "Contact Us",
    ctaHref: "/contact",
    img: `${BASE}/static/img/slider4.webp`,
    imgAlt: "Best jewellery buyers in bangalore",
  },
  {
    title: "Trusted Gold Buying Company",
    subtitle: "ISO 9001–2015 Certified. Transparency in every transaction. Best price guaranteed.",
    cta: "Calculate Gold Price",
    ctaHref: "/check-gold-price",
    img: `${BASE}/static/img/slider62.webp`,
    imgAlt: "Trusted gold buying company bangalore",
  },
];

const steps = [
  {
    step: "Step 1",
    title: "Walk-in with your Gold",
    desc: "Visit our nearest branch with your gold. If you want to release pledged gold, walk in with the pledge slip — our team is here to help.",
    img: `${BASE}/static/img/step1.webp`,
    imgAlt: "Walk in with your gold",
  },
  {
    step: "Step 2",
    title: "Free Purity Check",
    desc: "We use the latest XRF technology machine that gives 100% accurate purity for your gold ornaments. Completely transparent — you watch every step.",
    img: `${BASE}/static/img/step2.webp`,
    imgAlt: "Gold purity check",
  },
  {
    step: "Step 3",
    title: "Sell Gold at Online Price",
    desc: "Get instant cash at the best online gold price — a price the market can never match. Trusted by over 4,84,039 satisfied customers.",
    img: `${BASE}/static/img/step3.webp`,
    imgAlt: "Sell gold and get instant cash",
  },
];

const services = [
  {
    title: "Best Gold Buyers",
    desc: "Get the best value aligned with dynamic gold market rates in real-time. Advanced evaluation, instant cash, no hidden charges.",
    href: "/services/best-gold",
    img: `${BASE}/static/img/best-gold.jpg`,
  },
  {
    title: "Sell Gold",
    desc: "Transparent gold selling at our branches. Consistent procedures across all outlets ensuring fair valuation every time.",
    href: "/services/sell-gold",
    img: `${BASE}/static/img/sell_gold.jpg`,
  },
  {
    title: "Release Pledged Gold",
    desc: "Streamlined process for hassle-free retrieval of gold pledged to banks or private lenders — at current market value.",
    href: "/services/release-pledged-gold",
    img: `${BASE}/static/img/door_step_gold.jpg`,
  },
  {
    title: "Value for Gold",
    desc: "Transparent gold valuation — know your holdings' market worth before you decide to sell. Free of charge.",
    href: "/services/value-for-gold",
    img: `${BASE}/static/img/trusted_gold.jpg`,
  },
];

const whyChooseUs = [
  { icon: Shield, title: "Trusted Brand", desc: "20+ years of excellence. ISO 9001–2015 Certified. Trusted by 4,84,039+ customers." },
  { icon: Award, title: "Transparent Valuation", desc: "Evaluation conducted in front of you. Detailed pricing breakdown provided always." },
  { icon: TrendingUp, title: "Best Online Price", desc: "We pay the current online gold rate — a price the market can never match." },
  { icon: Star, title: "Instant Cash", desc: "Once evaluation agreed, instant cash or NEFT bank transfer — same day." },
];

const workingProcessSteps = [
  { icon: MapPin, title: "Find the Nearest Branch" },
  { icon: IdCard, title: "Carry ID Proof" },
  { icon: SearchCheck, title: "Gold Assessment" },
  { icon: BadgeCheck, title: "Get a Fair Offer" },
  { icon: HandCoins, title: "Receive Instant Cash" },
];

const stats = [
  { value: "89+", label: "Branches" },
  { value: "3", label: "States" },
  { value: "50+", label: "Cities" },
  { value: "4,84,039+", label: "Satisfied Customers" },
];

const testimonials = [
  { name: "Rajesh", org: "Wipro", text: "Best place to sell our gold. We got good price. 100% Trusted." },
  { name: "Kiran", org: "Reliance", text: "One of the best outlets to sell our gold. Professional staff, great service." },
  { name: "Kamran Maqbool", org: "CEO Technologies", text: "Certified best gold buyers. Offers spot cash at current market price." },
  { name: "Sonam Kapoor", org: "Accenture", text: "Offered good price for gold and gave spot cash. Very transparent process." },
  { name: "Aliya Noorain", org: "Mphasis", text: "Happy to sell my gold here. Gave good price and excellent service." },
  { name: "Chandan Kumar", org: "Omega", text: "Well satisfied with price. Amazing company and the best place to sell gold." },
  { name: "Divya Rani", org: "Concentric", text: "Transparent process. Gave time to make decision and best price in market." },
  { name: "Shanaya Khan", org: "ANZ", text: "Trustworthy company. Provided best price and spot cash. Highly recommended." },
  { name: "Syed Arman", org: "24/7", text: "Good service, friendly staff, provided best price in difficult time. Thanks HGC." },
  { name: "Divya Agarwal", org: "Transact Global", text: "Gave me best and highest price. Very happy with the experience." },
];

const faqs = [
  { q: "Which are the best gold buyers in Bangalore?", a: "Hindustan Gold Company is one of the best among the gold buying companies in Bangalore. They provide hassle-free gold selling process and ensure customers get the exact current gold rates value with instant cash." },
  { q: "How does Hindustan Gold Company determine the value of my gold?", a: "We use state-of-the-art testing equipment and follow the current market rates. Our evaluation is conducted in front of you with a detailed pricing breakdown — transparent and fair." },
  { q: "Do I need an appointment to sell my gold?", a: "Appointments aren't required but recommended for efficiency. Walk-ins are always welcome at any of our 89+ branches." },
  { q: "How quickly will I receive cash for my gold?", a: "Instant cash payments once the gold has been evaluated and agreed upon — or same-day NEFT bank transfer as per your preference." },
  { q: "Is it safe to sell my gold to Hindustan Gold Company?", a: "Absolutely. We are ISO 9001–2015 certified. We prioritize customer security and confidentiality. All transactions happen at our security-rated premises." },
  { q: "What documents are needed to sell gold?", a: "A valid government-issued ID: Aadhaar card, passport, or driver's license. Plus any purchase receipts or certificates if available." },
  { q: "Do you offer doorstep gold buying service?", a: "Yes! Our professionals will visit your location, evaluate your gold on-site, and provide instant cash — convenient and hassle-free." },
  { q: "Can I sell damaged or broken gold jewellery?", a: "Absolutely. We accept gold in any condition — damaged, broken, old ornaments. We evaluate based on purity and weight regardless of physical state." },
];

const branchLocations = [
  { label: "Gold Buyers in Bengaluru" }, { label: "Gold Buyers in RT Nagar" },
  { label: "Gold Buyers in Yelahanka" }, { label: "Gold Buyers in Majestic" },
  { label: "Gold Buyers in Yeshwanthpur" }, { label: "Gold Buyers in Gandhi Bazar" },
  { label: "Gold Buyers in JP Nagar" }, { label: "Gold Buyers in Kengeri" },
  { label: "Gold Buyers in Peenya" }, { label: "Gold Buyers in Vijaynagar" },
  { label: "Gold Buyers in Mysore" }, { label: "Gold Buyers in Tumkuru" },
  { label: "Gold Buyers in Hassan" }, { label: "Gold Buyers in Mangalore" },
  { label: "Gold Buyers in Davanagere" }, { label: "Gold Buyers in Shivamogga" },
  { label: "Gold Buyers in Bellary" }, { label: "Gold Buyers in Gulbarga" },
];

const certifications = [
  { label: "ISO 9001–2015", img: `${BASE}/static/img/iso-certified.svg` },
  { label: "BIS Hallmark", img: `${BASE}/static/img/bis.png` },
  { label: "IBJA Member", img: `${BASE}/static/img/ibja.png` },
  { label: "GOI Licensed", img: `${BASE}/static/img/goi.png` },
  { label: "RBI Approved", img: `${BASE}/static/img/rbi.png` },
];

const blogPosts = [
  {
    title: "How to Get the Best Price When Selling Gold in Bangalore",
    excerpt: "Discover the key factors that determine gold value and how to maximize your returns when selling at a gold buying company.",
    date: "May 28, 2025",
    category: "Gold Selling Tips",
    href: "/blog/best-price-selling-gold-bangalore",
    img: `${BASE}/static/img/best-gold.jpg`,
  },
  {
    title: "Understanding Gold Purity: 22K vs 24K vs 18K Gold Explained",
    excerpt: "Learn the difference between various gold purities and how purity affects the final value you receive for your gold.",
    date: "May 15, 2025",
    category: "Gold Knowledge",
    href: "/blog/gold-purity-22k-24k-18k",
    img: `${BASE}/static/img/sell_gold.jpg`,
  },
  {
    title: "Top 5 Reasons to Choose Hindustan Gold Company Over Others",
    excerpt: "From ISO certification to XRF purity testing — here's why thousands of customers trust us every month.",
    date: "Apr 30, 2025",
    category: "About Us",
    href: "/blog/why-choose-hindustan-gold-company",
    img: `${BASE}/static/img/trusted_gold.jpg`,
  },
];

export function HGCHome() {
  const [activeSlide, setActiveSlide] = React.useState(0);
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);
  const [activeTestimonial, setActiveTestimonial] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => setActiveSlide((i) => (i + 1) % heroSlides.length), 4500);
    return () => clearInterval(id);
  }, []);

  React.useEffect(() => {
    const id = setInterval(() => setActiveTestimonial((i) => (i + 1) % testimonials.length), 3500);
    return () => clearInterval(id);
  }, []);

  const slide = heroSlides[activeSlide];

  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO CAROUSEL ── */}
      <section className="relative h-[75vh] min-h-[500px] overflow-hidden">
        {heroSlides.map((s, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-700 ${i === activeSlide ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
            <Image src={s.img} alt={s.imgAlt} fill sizes="100vw" className="object-cover object-top" priority={i === 0} />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
          </div>
        ))}
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div key={activeSlide} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
              <div className="flex items-center gap-2 mb-3">
                <Image src={`${BASE}/static/img/iso-certified.svg`} alt="ISO Certified" width={86} height={86} className="opacity-90" />
                <span className="text-[#D4A843] text-sm font-semibold">ISO 9001–2015 Certified</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">{slide.title}</h1>
              <p className="mt-4 text-lg text-gray-200 max-w-xl">{slide.subtitle}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href={slide.ctaHref} className="bg-[#C8102E] hover:bg-[#a00d25] text-white font-bold px-7 py-3 rounded-lg text-base transition-colors inline-flex items-center gap-2 shadow-lg">
                  {slide.cta} <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/branches" className="bg-white/15 hover:bg-white/25 border border-white/40 text-white font-semibold px-7 py-3 rounded-lg text-base transition-colors backdrop-blur-sm">
                  Find a Branch
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
        {/* Slide dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {heroSlides.map((_, i) => (
            <button key={i} onClick={() => setActiveSlide(i)}
              className={`h-2 rounded-full transition-all duration-300 ${i === activeSlide ? "bg-[#D4A843] w-8" : "bg-white/50 w-2"}`} />
          ))}
        </div>
      </section>

      {/* ── GOLD PRICE STRIP ── */}
      <section className="bg-[#D4A843]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#1a1a1a] font-bold text-base">📊 Today&apos;s Gold Price — Check current buying rates</p>
          <Link href="/check-gold-price" className="bg-[#C8102E] hover:bg-[#a00d25] text-white font-semibold px-5 py-2 rounded-lg text-sm transition-colors whitespace-nowrap">
            Check Gold Price →
          </Link>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-[#1a1a1a] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <p className="text-3xl md:text-4xl font-bold text-[#D4A843]">{s.value}</p>
                <p className="text-gray-400 text-sm mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-[#C8102E] text-sm font-semibold uppercase tracking-wide">About Us</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">India&apos;s Most Trusted Gold Buying Company</h2>
              <p className="text-gray-600 mt-4 leading-relaxed">
                Hindustan Gold Company has stood as an unwavering beacon of trust and reliability for more than two decades. We are a licensed gold buying business — not pawnbrokers or jewellers — with extensive experience in the field.
              </p>
              <p className="text-gray-600 mt-3 leading-relaxed">
                Be assured: when you sell gold to us, you are safe, secure, and dealing directly with the business owners in store at our security-rated premises. Transparent. Fair. Instant.
              </p>
              <div className="mt-5 space-y-2">
                {["Free gold purity check using XRF technology", "Best online gold rate — market price always", "Instant cash or same-day bank transfer", "Doorstep gold buying service available", "ISO 9001–2015 Certified Company"].map((f) => (
                  <div key={f} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#C8102E] flex-shrink-0" />
                    <span className="text-sm">{f}</span>
                  </div>
                ))}
              </div>
              <Link href="/about" className="mt-6 inline-flex items-center gap-2 bg-[#C8102E] hover:bg-[#a00d25] text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors">
                Know More <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="relative h-[360px] rounded-2xl overflow-hidden shadow-xl">
                <Image src={`${BASE}/static/img/side2.webp`} alt="Gold valuation at Hindustan Gold Company" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-5">
                  <p className="text-white font-bold">Hindustan Gold Company</p>
                  <p className="text-white/80 text-sm">ISO 9001–2015 Certified • 20+ Years</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PROCESS STEPS ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Sell Your Gold With Ease</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">Simple 3-step process. Transparent. Fast. Best price guaranteed.</p>
          </div>
          <div className="space-y-12">
            {steps.map((s, i) => (
              <motion.div key={s.step} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <span className="inline-block bg-[#C8102E] text-white text-xs font-bold px-3 py-1 rounded-full mb-3">{s.step}</span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{s.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
                <div className={`relative h-64 rounded-2xl overflow-hidden shadow-md ${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <Image src={s.img} alt={s.imgAlt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/check-gold-price" className="bg-[#C8102E] hover:bg-[#a00d25] text-white font-bold px-8 py-3 rounded-lg text-base transition-colors inline-flex items-center gap-2">
              Calculate Gold Price <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Services</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">Complete gold buying solutions — transparent, fair, and instant.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Link href={s.href} className="block group rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all bg-white">
                  <div className="relative h-48 overflow-hidden">
                    <Image src={s.img} alt={s.title} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="font-bold text-white text-base">{s.title}</h3>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                    <div className="mt-3 text-[#C8102E] text-sm font-semibold flex items-center gap-1">Know More <ArrowRight className="w-4 h-4" /></div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-16 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Why Hindustan Gold Company?</h2>
              <p className="text-gray-400 mt-3 leading-relaxed">
                Hindustan Gold Company is one of the market leaders and pioneers with the concept of buying Jewellery against instant Cash in a secure, professional environment.
              </p>
              <ul className="mt-6 space-y-3">
                {["Trusted Brand — 20+ years in gold buying", "Honesty & transparent valuation every time", "Best price — matched to current online gold rate", "ISO 9001–2015 Certified Company", "Customer-centric approach in every step", "89+ branches across 3 states, 50+ cities"].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-gray-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-[#D4A843] flex-shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <Link href="/check-gold-price" className="mt-8 inline-flex items-center gap-2 bg-[#C8102E] hover:bg-[#a00d25] text-white font-bold px-6 py-3 rounded-lg text-sm transition-colors">
                Calculate Gold Price <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {whyChooseUs.map((w, i) => (
                <motion.div key={w.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="bg-white/5 border border-white/10 hover:border-[#D4A843]/40 rounded-2xl p-5 transition-colors">
                  <div className="w-10 h-10 bg-[#C8102E]/20 rounded-xl flex items-center justify-center mb-3">
                    <w.icon className="w-5 h-5 text-[#C8102E]" />
                  </div>
                  <h3 className="font-bold text-white text-sm mb-1">{w.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{w.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Our Customers Say</h2>
            <p className="text-gray-500 mt-2">Trusted by 4,84,039+ satisfied customers across India</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 6).map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex gap-1 mb-3">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-[#D4A843] text-[#D4A843]" />)}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed italic">&ldquo;{t.text}&rdquo;</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-9 h-9 bg-[#C8102E] rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                    {t.name.split(" ").map(n => n[0]).join("").slice(0,2).toUpperCase()}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.org}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BRANCH LOCATIONS STRIP ── */}
      <section className="py-10 bg-white border-y border-[#D4A843]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-5 text-center">Meet Us @</h2>
          <div className="flex flex-wrap gap-2 justify-center">
            {branchLocations.map((loc) => (
              <Link key={loc.label} href="/branches"
                className="text-xs bg-gray-50 border border-gray-200 hover:border-[#C8102E] hover:text-[#C8102E] text-gray-600 px-3 py-1.5 rounded-full transition-colors shadow-sm">
                {loc.label}
              </Link>
            ))}
            <Link href="/branches" className="text-xs bg-[#C8102E] text-white px-3 py-1.5 rounded-full hover:bg-[#a00d25] transition-colors shadow-sm font-semibold">
              View All Branches →
            </Link>
          </div>
        </div>
      </section>

      {/* WORKING PROCESS */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr] gap-10 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-2 mb-8">
                <span className="h-px w-7 bg-[#C8102E]" />
                <p className="text-sm sm:text-base font-medium tracking-[0.34em] text-[#C8102E] uppercase">Working Process</p>
              </div>
              <h2 className="max-w-xl text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.08] text-[#111827]">
                Simple steps to get Instant cash for gold
              </h2>
              <p className="mt-7 text-lg sm:text-xl text-slate-600">
                Follow these easy steps to sell your gold securely.
              </p>
              <div className="mt-8 flex items-center gap-3">
                <Link
                  href="/services/sell-gold"
                  aria-label="Sell Gold"
                  className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#075d5b] text-white transition-colors hover:bg-[#064b49]"
                >
                  <ArrowRight className="h-7 w-7" />
                </Link>
                <Link
                  href="/services/sell-gold"
                  className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#FFD700] px-10 text-lg font-medium text-[#053f3d] transition-colors hover:bg-[#f0c900]"
                >
                  Sell Gold
                </Link>
              </div>
            </motion.div>

            <div className="space-y-4">
              {workingProcessSteps.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="flex min-h-[88px] items-center justify-between gap-4 rounded-lg bg-[#FFF2A8] px-5 py-5 shadow-sm"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg bg-[#FFDE1A] text-[#061726]">
                      <item.icon className="h-8 w-8 stroke-[2.2]" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-black">{item.title}</h3>
                  </div>
                  <ChevronDown className="h-6 w-6 flex-shrink-0 text-[#061726]" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm">
                <button className="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-gray-900 hover:text-[#C8102E] transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="text-sm">{faq.q}</span>
                  {openFaq === i ? <ChevronUp className="w-5 h-5 flex-shrink-0 text-[#C8102E]" /> : <ChevronDown className="w-5 h-5 flex-shrink-0 text-gray-400" />}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-3">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/faq" className="text-[#C8102E] font-semibold text-sm hover:underline">View All FAQs →</Link>
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS & TRUST BADGES ── */}
      <section className="py-10 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">Certified & Recognised By</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
            {certifications.map((cert) => (
              <motion.div key={cert.label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="flex flex-col items-center gap-2 group">
                <div className="w-16 h-16 relative grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100">
                  <Image src={cert.img} alt={cert.label} fill sizes="64px" className="object-contain" />
                </div>
                <span className="text-xs text-gray-400 font-medium text-center">{cert.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VIDEO SECTION ── */}
      <section className="py-16 bg-[#1a1a1a] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-[#D4A843] text-sm font-semibold uppercase tracking-wide">Watch & Learn</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">See How We Value Your Gold</h2>
              <p className="text-gray-400 mt-4 leading-relaxed">
                Watch our transparent gold evaluation process live. Our experts use state-of-the-art XRF technology to test your gold purity accurately — right in front of you. No hidden steps, no surprises.
              </p>
              <ul className="mt-5 space-y-2">
                {["100% transparent XRF purity testing", "Evaluation done in front of you", "Instant quote at current market rate", "Cash in hand within minutes"].map((point) => (
                  <li key={point} className="flex items-center gap-3 text-gray-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-[#D4A843] flex-shrink-0" />{point}
                  </li>
                ))}
              </ul>
              <Link href="/check-gold-price" className="mt-8 inline-flex items-center gap-2 bg-[#C8102E] hover:bg-[#a00d25] text-white font-bold px-6 py-3 rounded-lg text-sm transition-colors">
                Calculate Gold Price <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-black">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1"
                title="Hindustan Gold Company — See Our Gold Evaluation Process"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-white/10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── LATEST BLOG POSTS ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-[#C8102E] text-sm font-semibold uppercase tracking-wide">Knowledge Hub</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-1">Latest from Our Blog</h2>
            </div>
            <Link href="/blog" className="hidden sm:inline-flex items-center gap-1 text-[#C8102E] font-semibold text-sm hover:underline">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <motion.div key={post.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Link href={post.href} className="block group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all h-full">
                  <div className="relative h-48 overflow-hidden">
                    <Image src={post.img} alt={post.title} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-3 left-3">
                      <span className="bg-[#C8102E] text-white text-xs font-semibold px-2.5 py-1 rounded-full">{post.category}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-1.5 text-gray-400 text-xs mb-2">
                      <Calendar className="w-3.5 h-3.5" />{post.date}
                    </div>
                    <h3 className="font-bold text-gray-900 text-base leading-snug group-hover:text-[#C8102E] transition-colors line-clamp-2">{post.title}</h3>
                    <p className="text-gray-500 text-sm mt-2 leading-relaxed line-clamp-2">{post.excerpt}</p>
                    <div className="mt-4 flex items-center gap-1 text-[#C8102E] text-sm font-semibold">
                      <BookOpen className="w-4 h-4" /> Read More
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link href="/blog" className="text-[#C8102E] font-semibold text-sm hover:underline inline-flex items-center gap-1">
              View All Posts <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-14 bg-gradient-to-br from-[#C8102E] to-[#8B0000]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to Sell Your Gold?</h2>
          <p className="text-white/80 mt-3 text-lg">Get the best price today. Walk in or call us now.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/check-gold-price" className="bg-[#D4A843] hover:bg-[#b88d35] text-[#1a1a1a] font-bold px-8 py-3 rounded-lg text-base transition-colors">
              Calculate Gold Price
            </Link>
            <a href="tel:08088550033" className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-3 rounded-lg text-base transition-colors">
              📞 Call: 8088550033
            </a>
            <a href="https://wa.me/919741637635" target="_blank" rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg text-base transition-colors">
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

export default HGCHome;
