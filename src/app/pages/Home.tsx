import * as React from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, Shield, Award, TrendingUp, Star } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import HeroSlider from "../components/HeroSlider";
import AboutSection from "../components/AboutSection";
import CardStackSection from "../components/CardStackSection";

const collections = [
  {
    id: 1,
    name: "Diamond Rings",
    category: "rings",
    image: "https://images.unsplash.com/photo-1742240439165-60790db1ee93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwcmluZyUyMGx1eHVyeXxlbnwxfHx8fDE3NzM4MjI2OTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Exquisite diamond rings for your special moments",
    pieces: "250+ Designs",
  },
  {
    id: 2,
    name: "Gold Necklaces",
    category: "necklaces",
    image: "https://images.unsplash.com/photo-1755151606128-7ca2f97e46ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwbmVja2xhY2UlMjBlbGVnYW50fGVufDF8fHx8MTc3MzgyMjY5OHww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Elegant necklaces crafted with pure gold",
    pieces: "180+ Designs",
  },
  {
    id: 3,
    name: "Traditional Bangles",
    category: "bangles",
    image: "https://images.unsplash.com/photo-1760786933035-32da5ebb881c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwYmFuZ2xlcyUyMHRyYWRpdGlvbmFsfGVufDF8fHx8MTc3MzgyMjY5OXww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Classic gold bangles for timeless elegance",
    pieces: "320+ Designs",
  },
  {
    id: 4,
    name: "Gold Earrings",
    category: "earrings",
    image: "https://images.unsplash.com/photo-1629224316810-9d8805b95e76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwZWFycmluZ3MlMjBlbGVnYW50fGVufDF8fHx8MTc3MzgyMjcwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Stunning earrings to complement your style",
    pieces: "200+ Designs",
  },
];

const features = [
  {
    icon: Shield,
    title: "100% Certified",
    description: "All jewelry is BIS hallmarked and certified",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Finest craftsmanship with pure materials",
  },
  {
    icon: TrendingUp,
    title: "Best Gold Rate",
    description: "Competitive prices with live gold rates",
  },
  {
    icon: Star,
    title: "Trusted Since 1985",
    description: "40+ years of excellence and trust",
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    comment: "Absolutely stunning collection! The quality is exceptional and the designs are timeless. Highly recommend Muliya!",
  },
  {
    name: "Rajesh Kumar",
    location: "Delhi",
    rating: 5,
    comment: "Bought my wife's wedding jewelry here. The service was impeccable and the craftsmanship is outstanding.",
  },
  {
    name: "Anita Patel",
    location: "Ahmedabad",
    rating: 5,
    comment: "Best place for traditional gold jewelry. The gold scheme helped me save and invest smartly.",
  },
];

export function Home() {
  const collectionTiles = [
    {
      id: "rings",
      name: "Rings",
      categorySlug: "rings",
      image:
        "https://images.unsplash.com/photo-1742240439165-60790db1ee93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    },
    {
      id: "earrings",
      name: "Earrings",
      categorySlug: "earrings",
      image:
        "https://images.unsplash.com/photo-1629224316810-9d8805b95e76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    },
    {
      id: "pendants",
      name: "Pendants",
      categorySlug: "pendants",
      image:
        "https://images.unsplash.com/photo-1771515411694-57fb626159d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    },
    {
      id: "necklaces",
      name: "Necklaces",
      categorySlug: "necklaces",
      image:
        "https://images.unsplash.com/photo-1755151606128-7ca2f97e46ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    },
    {
      id: "haarams",
      name: "Haarams",
      categorySlug: "haarams",
      image:
        "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    },
    {
      id: "kadaas",
      name: "Kadaas",
      categorySlug: "kadaas",
       image:
        "https://images.unsplash.com/photo-1755151606128-7ca2f97e46ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    },
    {
      id: "mangalsutra",
      name: "Mangalsutra",
      categorySlug: "mangalsutra",
       image:
        "https://images.unsplash.com/photo-1755151606128-7ca2f97e46ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    },
    {
      id: "bangles",
      name: "Bangles",
      categorySlug: "bangles",
      image:
        "https://images.unsplash.com/photo-1760786933035-32da5ebb881c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    },
  ];

  const detailCards = [
    {
      id: "trusted",
      icon: Star,
      title: "Trusted Since 1944",
      description: "Heritage-backed quality and consistency across generations.",
    },
    {
      id: "purity",
      icon: Shield,
      title: "Gold Purity Analyzer + HUID",
      description: "More transparency for every purchase, with customer visibility.",
    },
    {
      id: "diamond",
      icon: Award,
      title: "Customer-Facing CVD Diamond Analyzer",
      description: "Verified purity checks designed for confidence at the counter.",
    },
    {
      id: "showroom",
      icon: TrendingUp,
      title: "Enhanced Showroom Experience",
      description: "A spacious, curated experience for your jewellery discovery journey.",
    },
    {
      id: "watches",
      icon: Star,
      title: "Curated Premium Watch Collection",
      description: "Luxury handpicked to match your lifestyle and taste.",
    },
    {
      id: "silveriya",
      icon: GemFallback,
      title: "Silveriya Showrooms",
      description: "A new-age silver experience for today’s youth.",
    },
    {
      id: "plans",
      icon: TrendingUp,
      title: "Flexible Gold Buying Plans",
      description: "Save monthly and buy when you’re ready, with clear benefits.",
    },
  ];

  // Replaces the hero icons used in the original site with the closest available ones in your project.
  function GemFallback(props: { className?: string }) {
    return <span className={props.className ?? ""} />;
  }

  return (
    <div className="bg-white">
      {/* Hero */}
      {/* <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1602752250055-5ebb552fc3ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1800"
            alt="Luxury jewelry hero background"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#E92247]/10 via-white/70 to-[#E92247]/20" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-2xl"
            >
              <p className="text-sm tracking-wide text-[#E92247] font-medium mb-3">
                Muliya - Gold & Diamonds
              </p>
              <h1 className="text-5xl md:text-6xl font-serif text-gray-900 leading-tight mb-5">
                Creating Happiness
                <span className="text-[#E92247]"> Since 1944</span>
              </h1>
              <p className="text-lg text-gray-700">
                Premium jewellery shaped by heritage, crafted with care, and built
                for the moments that matter most.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button
                  size="lg"
                  className="bg-[#E92247] hover:bg-[#E92247]/90"
                  asChild
                >
                  <Link to="/about">
                    Discover More About Us
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/products">Explore Collections</Link>
                </Button>
              </div>
            </motion.div>

            <div className="hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden border border-amber-100 shadow-sm bg-white">
                <div className="absolute inset-0 bg-gradient-to-br from-[#E92247]/15 to-transparent" />
                <div className="aspect-[4/3]">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1772785952082-75941e8f99d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200"
                    alt="Gold jewellery showcase"
                    className="w-full h-full object-cover opacity-90"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <HeroSlider/>
      <AboutSection/>

      {/* Shop By Category */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-10">
            Shop By Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: "Bangles", slug: "bangles", image: "/images/Bangles.png" },
              { name: "Chains", slug: "chains", image: "/images/Chain 1.png" },
              { name: "Earrings", slug: "earrings", image: "/images/Earrings.png" },
              { name: "Necklaces", slug: "necklaces", image: "/images/Necklaces.png" },
              { name: "Pendants", slug: "pendants", image: "/images/Pendants.png" },
              { name: "Rings", slug: "rings", image: "/images/Rings.png" },
            ].map((cat, idx) => (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
              >
                <Link to={`/products/${cat.slug}`}>
                  <div className="group cursor-pointer">
                    <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
                      <ImageWithFallback
                        src={cat.image}
                        alt={cat.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <p className="mt-3 text-center text-gray-900 font-medium group-hover:text-[#E92247] transition-colors">
                      {cat.name}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-6">
            <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center text-[#E92247]">
              <Star className="w-7 h-7" />
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-serif text-gray-900 leading-relaxed">
                “Jewellery is about emotion - the feeling it carries with every wear.”
              </p>
              <p className="mt-3 text-gray-600 font-medium">Brand Ambassador</p>
              <p className="text-sm text-gray-500 mt-1">Ramesh Aravind</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story block */}
      <section className="py-16 bg-gradient-to-r from-[#E92247]/10 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">
                Our story begins in 1944
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Founded with integrity and built on transparency, Muliya has grown into a trusted name - connecting
                craftsmanship with customer-first service across generations.
              </p>
              <div className="mt-8">
                <Button variant="outline" size="lg" asChild>
                  <Link to="/about">Read More</Link>
                </Button>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-amber-100 shadow-sm">
              <ImageWithFallback
                src="/images/Home-Muliya-Keshava-Bhat.png"
                alt="Craftsmanship"
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent" />
             
            </div>
          </div>
        </div>
      </section>

      <CardStackSection />

      {/* Collections */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-10">
            Collections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Amuliya Diamonds", desc: "Exquisite diamond craftsmanship", image: "/images/Amuliya Diamonds.png", slug: "amuliya-diamonds" },
              { name: "Mahathi Antique Collection", desc: "Timeless antique designs", image: "/images/Mahathi Antique.png", slug: "mahathi-antique" },
              { name: "Pouranik Collection", desc: "Heritage-inspired pieces", image: "/images/Pouranik.png", slug: "pouranik" },
              { name: "Muliya Silveriya", desc: "Premium silver jewellery", image: "/images/Muliya Silveriya.png", slug: "silveriya" },
              { name: "Nithya 18k Jewellery Series", desc: "Everyday elegance in 18k gold", image: "/images/Nithya 18k.png", slug: "nithya-18k" },
              { name: "Mangalsutra Collection", desc: "Sacred bonds, beautiful designs", image: "/images/Mangalsutra.png", slug: "mangalsutra" },
            ].map((col, idx) => (
              <motion.div
                key={col.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
              >
                <Link to={`/products?collection=${col.slug}`}>
                  <div className="group cursor-pointer">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
                      <ImageWithFallback
                        src={col.image}
                        alt={col.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="mt-3 flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-serif text-gray-900 flex items-center gap-1 group-hover:text-gray-700 transition-colors">
                          {col.name}
                          <ArrowRight className="w-4 h-4 -rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </h3>
                        {col.desc && <p className="text-sm text-gray-600 mt-1">{col.desc}</p>}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Identity */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">
                A new identity, the same legacy
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                A refreshed brand look, the same focus on trust, craftsmanship, and customer-first purity assurance.
              </p>
              <div className="mt-8 rounded-2xl border border-amber-100 bg-amber-50 p-5">
                <p className="text-[#E92247] font-semibold">Creating Happiness</p>
                <p className="text-gray-700 text-sm mt-2">
                  The emotion behind every ornament we craft.
                </p>
              </div>
            </div>
            <div className="order-2 lg:order-1 relative">
              <div className="relative rounded-2xl overflow-hidden border border-amber-100 shadow-sm bg-white">
                <ImageWithFallback
                  src="/images/Muliya-Mascot-1.png"
                  alt="Brand identity"
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#E92247]/20 via-transparent to-white/30" />
                <div className="absolute top-5 left-5 bg-white/90 backdrop-blur border border-amber-100 rounded-xl px-4 py-3">
                  <p className="text-[#E92247] font-semibold">Elephant Mascot</p>
                  <p className="text-sm text-gray-700 mt-1">Strength and loyalty</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faces */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-900">Faces of Muliya</h2>
              <p className="text-gray-600 mt-3 max-w-2xl">
                A flagship campaign spotlighting local talent and stories beyond jewellery.
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/blog">View More</Link>
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "https://images.unsplash.com/photo-1520975916090-3105956dac38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900",
              "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900",
              "https://images.unsplash.com/photo-1520975916090-3105956dac38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900",
            ].map((src, idx) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
              >
                <Card className="rounded-2xl overflow-hidden border-amber-100">
                  <div className="relative h-64">
                    <ImageWithFallback src={src} alt="Face of Muliya" className="w-full h-full object-cover" />
                  </div>
                  <CardContent className="p-5">
                    <p className="font-semibold text-gray-900">Featured Talent</p>
                    <p className="text-sm text-gray-600 mt-1">Community Story</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - BlueStone Style */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">
              Muliya & Me
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real experiences from customers who trust Muliya for craftsmanship and service.
            </p>
          </div>
        </div>

        {/* Testimonials with curved string */}
        <div className="relative">
          {/* Curved string - positioned relative to scroll */}
          <div className="w-full h-16 mb-[-20px]">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 60">
              <path
                d="M0,30 Q360,5 720,30 T1440,30"
                fill="none"
                stroke="#d1d5db"
                strokeWidth="2"
              />
            </svg>
          </div>

          {/* Horizontal scrolling container */}
          <div className="overflow-x-auto pb-8 pt-8 hide-scrollbar">
            <div className="flex gap-16 px-8 min-w-max">
              {[
                {
                  name: "Akanksha Khanna",
                  age: "27",
                  image: "/images/Testimonial-1.png",
                  text: "Delighted with my engagement ring from Muliya! It's my dream ring. The craftsmanship is stunning and the purity assurance gives me complete confidence.",
                  rotate: -8,
                  translateY: 15,
                },
                {
                  name: "Diksha Singh",
                  age: "29",
                  image: "/images/Testimonial-2.png",
                  text: "I was worried about finding good quality jewellery online, but Muliya's customer service gave me full assurance. The delivery was super quick and the quality is certified.",
                  rotate: 5,
                  translateY: 5,
                },
                {
                  name: "Nuton Mishra",
                  age: "33",
                  image: "/images/Testimonial-3.png",
                  text: "I got a Nazariya for my baby from Muliya. It's so cute seeing it on my little one's wrist, and it gives me a sense of security knowing it's pure gold.",
                  rotate: -4,
                  translateY: 20,
                },
                {
                  name: "Divya Mishra",
                  age: "26",
                  image: "/images/Testimonial-4.png",
                  text: "On Valentine's Day, my husband gifted me a necklace from Muliya, and I haven't taken it off ever since. Everyone asks me where it's from. I just LOVE how nice it looks on me!",
                  rotate: 7,
                  translateY: 0,
                },
                {
                  name: "Priya Singh",
                  age: "34",
                  image: "/images/Testimonial-5.png",
                  text: "I had trouble finding jewellery that suited my minimalist style, but Muliya's sleek and elegant designs were exactly what I was looking for.",
                  rotate: -6,
                  translateY: 10,
                },
                {
                  name: "Avni Sharma",
                  age: "27",
                  image: "/images/Testimonial-6.png",
                  text: "Me and my friends love Muliya's unique designs. I love how their pieces add elegance to my outfits. Their jewellery is stylish, modern and a breath of fresh air.",
                  rotate: 4,
                  translateY: 18,
                },
                {
                  name: "Sonaalee Semwal",
                  age: "28",
                  image: "/images/Testimonial-7.png",
                  text: "I bought a bracelet from Muliya as a birthday gift from me to me. I love how versatile it is. If you want to buy yourself a gift, Muliya is the place to go!",
                  rotate: -5,
                  translateY: 8,
                },
              ].map((t, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="relative flex-shrink-0"
                  style={{ width: '280px' }}
                >
                  <div 
                    className="relative transition-all duration-300 hover:scale-105"
                    style={{ 
                      transform: `rotate(${t.rotate}deg) translateY(${t.translateY}px)`,
                    }}
                  >
                    {/* Wire Paper Clip - positioned to pin the card to thread */}
                    <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-20">
                      <svg width="28" height="48" viewBox="0 0 28 48" fill="none" className="drop-shadow-md">
                        {/* Outer loop */}
                        <path
                          d="M7 10V34C7 37.866 10.134 41 14 41C17.866 41 21 37.866 21 34V10"
                          stroke="#a1a1aa"
                          strokeWidth="2.5"
                          fill="none"
                          strokeLinecap="round"
                        />
                        {/* Inner wire left */}
                        <path
                          d="M14 5V29C14 30.657 12.657 32 11 32C9.343 32 8 30.657 8 29V10"
                          stroke="#a1a1aa"
                          strokeWidth="2.5"
                          fill="none"
                          strokeLinecap="round"
                        />
                        {/* Inner wire right */}
                        <path
                          d="M14 5V29C14 30.657 15.343 32 17 32C18.657 32 20 30.657 20 29V10"
                          stroke="#a1a1aa"
                          strokeWidth="2.5"
                          fill="none"
                          strokeLinecap="round"
                        />
                        {/* Shine */}
                        <path
                          d="M8 11V34C8 37.314 10.686 40 14 40"
                          stroke="#d4d4d8"
                          strokeWidth="1"
                          fill="none"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    
                    {/* Polaroid Card - with top padding for clip */}
                    <div className="bg-[#ffe4e6] pt-6 p-3 pb-5 shadow-xl rounded-sm cursor-pointer">
                      <div className="bg-white aspect-square overflow-hidden mb-4 rounded-sm">
                        <ImageWithFallback
                          src={t.image}
                          alt={t.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="px-1">
                        <p className="text-[#E92247] font-semibold text-sm mb-2">
                          {t.name}, {t.age}
                        </p>
                        <p className="text-gray-600 text-xs leading-relaxed line-clamp-4">
                          {t.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </section>

      {/* Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900">
              Our spark is in the details
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Trust-enhancing tools and an experience built around clarity, quality, and care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {detailCards.map((c, idx) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.04 }}
              >
                <Card className="rounded-2xl border-amber-100 h-full">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-amber-100 text-[#E92247] flex items-center justify-center mb-4">
                      <c.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{c.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{c.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journal */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-900">
                Stories that shine the muliya journal
              </h2>
              <p className="text-gray-600 mt-3 max-w-2xl">
                From traditions to modern trends - discover stories behind the sparkle.
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/blog">View More</Link>
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                id: "b1",
                title: "Free hair donation camp",
                image:
                  "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900",
              },
              {
                id: "b2",
                title: "Founder’s day social responsibility",
                image:
                  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900",
              },
              {
                id: "b3",
                title: "Why gold on auspicious days matters",
                image:
                  "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900",
              },
              {
                id: "b4",
                title: "How to choose the perfect piece",
                image:
                  "https://images.unsplash.com/photo-1520975916090-3105956dac38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900",
              },
            ].map((post, idx) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.04 }}
              >
                <Link to="/blog">
                  <Card className="rounded-2xl overflow-hidden border-amber-100 hover:shadow-md transition-shadow">
                    <div className="relative h-44">
                      <ImageWithFallback src={post.image} alt={post.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
                    </div>
                    <CardContent className="p-5">
                      <p className="font-semibold text-gray-900 line-clamp-2">{post.title}</p>
                      <p className="text-sm text-gray-600 mt-2">Read More</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquire Now */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">
                Enquire Now
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Share your details and our executives will contact you with store guidance.
              </p>
              <div className="mt-6 space-y-3 text-gray-600">
                <p className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-[#E92247]" />
                  Secure follow-up and support.
                </p>
                <p className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-[#E92247]" />
                  Curated suggestions based on your needs.
                </p>
              </div>
            </div>

            <form
              className="bg-white border border-amber-100 rounded-2xl p-6 shadow-sm"
              onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget);
                const name = String(fd.get("name") ?? "").trim();
                const mobile = String(fd.get("mobile") ?? "").trim();
                const city = String(fd.get("city") ?? "").trim();
                if (!name || !mobile || !city) {
                  window.alert("Please fill in name, mobile number, and city.");
                  return;
                }
                window.alert("Request sent! Our executives will contact you shortly.");
                e.currentTarget.reset();
              }}
            >
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="text-sm font-semibold text-gray-900">Name</label>
                  <input
                    name="name"
                    className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 bg-white outline-none focus:ring-2 focus:ring-[#E92247]/30"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-900">Mobile Number</label>
                  <input
                    name="mobile"
                    inputMode="tel"
                    className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 bg-white outline-none focus:ring-2 focus:ring-[#E92247]/30"
                    placeholder="Mobile Number"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-900">City</label>
                  <input
                    name="city"
                    className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 bg-white outline-none focus:ring-2 focus:ring-[#E92247]/30"
                    placeholder="City"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="bg-[#E92247] hover:bg-[#E92247]/90"
                >
                  Send
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>

                <p className="text-xs text-gray-500 leading-relaxed">
                  After submission of this form, you will get a call from our executives for assistance.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Gold rate strip (bottom) */}
      <section className="py-10 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <p className="text-sm text-white/70 mb-2">Gold 22k</p>
              <p className="text-4xl font-serif">--</p>
              <p className="text-sm text-white/60 mt-1">/gram</p>
            </div>
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <p className="text-sm text-white/70 mb-2">Silver</p>
              <p className="text-4xl font-serif">--</p>
              <p className="text-sm text-white/60 mt-1">/gram</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
