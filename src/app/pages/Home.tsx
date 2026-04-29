"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Shield, Award, TrendingUp, Star, Check } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { HeroParallaxBanner } from "@/app/components/HeroParallaxBanner";
import { ImageBannerSwiper } from "@/app/components/ImageBannerSwiper";
import AboutSection from "../components/AboutSection";
import VideoGallery from "@/app/components/VideoCarousel";

const collections = [
  {
    id: 1,
    name: "Diamond Rings",
    category: "rings",
    image: "https://images.unsplash.com/photo-1742240439165-60790db1ee93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    description: "Exquisite diamond rings for your special moments",
    pieces: "250+ Designs",
  },
  {
    id: 2,
    name: "Gold Necklaces",
    category: "necklaces",
    image: "https://images.unsplash.com/photo-1755151606128-7ca2f97e46ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    description: "Elegant necklaces crafted with pure gold",
    pieces: "180+ Designs",
  },
  {
    id: 3,
    name: "Traditional Bangles",
    category: "bangles",
    image: "https://images.unsplash.com/photo-1760786933035-32da5ebb881c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    description: "Classic gold bangles for timeless elegance",
    pieces: "320+ Designs",
  },
  {
    id: 4,
    name: "Gold Earrings",
    category: "earrings",
    image: "https://images.unsplash.com/photo-1629224316810-9d8805b95e76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
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

const identitySteps = [
  {
    eyebrow: "The values that shape",
    title: "A new identity, the same legacy",
    desc:
      "A refreshed brand look, the same focus on trust, craftsmanship, and customer-first purity assurance.",
    bullets: ["Heritage-backed trust", "Craftsmanship you can see", "Transparent purity assurance"],
    leftImage: "/images/luxury-jewellery-display.jpg",
    centerVideo: "/images/6248724_Woman_Caucasian_3840x2160.mp4",
    centerPoster: "/images/Muliya-Mascot-1.png",
    centerAlt: "Brand identity",
    badgeTitle: "Elephant Mascot",
    badgeDesc: "Strength and loyalty",
    ctaTitle: "Creating Happiness",
    ctaDesc: "The emotion behind every ornament we craft.",
  },
  {
    eyebrow: "Designed with detail",
    title: "Craftsmanship that feels timeless",
    desc:
      "From design to finishing, every step is done with care—so each piece looks beautiful today and stays cherished for years.",
    bullets: ["Precision finishing", "Comfort-first wearability", "Quality checks at every stage"],
    leftImage: "/images/young-model-demonstrating-expensive-jewelry.jpg",
    centerVideo: "/images/0_Earrings_Woman_3840x2020.mp4",
    centerPoster: "/images/earrings.png",
    centerAlt: "Craftsmanship",
    badgeTitle: "Hand-finished",
    badgeDesc: "Polish, symmetry, shine",
    ctaTitle: "Crafted with care",
    ctaDesc: "From the first sketch to the final polish—every piece carries our promise.",
  },
  {
    eyebrow: "Celebrations made radiant",
    title: "Creating Happiness in every ornament",
    desc:
      "Jewellery is more than gold and diamonds—it is emotion, memory, and celebration, made radiant for everyday and milestones.",
    bullets: ["Certified quality", "Customer-first service", "Moments made memorable"],
    leftImage: "/images/shiny-gemstone-necklace-reflects-elegance-glamour-generated-by-ai.jpg",
    centerVideo: "/images/6248750_Unrecognizable_Woman_3840x2160.mp4",
    centerPoster: "/images/bangles.png",
    centerAlt: "Celebration jewellery",
    badgeTitle: "Customer-first",
    badgeDesc: "Service you can trust",
    ctaTitle: "Explore collections",
    ctaDesc: "Find designs for every generation and every occasion.",
  },
];

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
    icon: Star,
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

export function Home() {
  const identityRef = React.useRef<HTMLElement | null>(null);
  const [identityStep, setIdentityStep] = React.useState(0);
   const reelSources = React.useMemo(
    () => [
      "/images/video1.mp4",
      "/images/video2.mp4",
      "/images/Muliya_Reel_1.mp4",
      "/images/Muliya_Reel_2.mp4",
      "/images/Muliya_Reel_3.mp4",
      // "/images/video6.mp4",
    ],
    [],
  );
  const [activeReel, setActiveReel] = React.useState(0);

  const prevReel = React.useCallback(() => {
    setActiveReel((i) => (i - 1 + reelSources.length) % reelSources.length);
  }, [reelSources.length]);

  const nextReel = React.useCallback(() => {
    setActiveReel((i) => (i + 1) % reelSources.length);
  }, [reelSources.length]);

  React.useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveReel((i) => (i + 1) % reelSources.length);
    }, 15000);

    return () => window.clearInterval(intervalId);
  }, [reelSources.length]);

  React.useEffect(() => {
    const el = identityRef.current;
    if (!el) return;

    let ticking = false;

    const clamp01 = (v: number) => Math.max(0, Math.min(1, v));

    const computeStep = () => {
      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight || document.documentElement.clientHeight;
      const scrollable = el.offsetHeight - viewportH;
      if (scrollable <= 0) return 0;
      const progressed = -rect.top;
      const p = clamp01(progressed / scrollable);
      const idx = Math.min(identitySteps.length - 1, Math.floor(p * identitySteps.length));
      return idx;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        setIdentityStep(computeStep());
        ticking = false;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const activeIdentity = identitySteps[identityStep] ?? identitySteps[0];

  const categoryScrollRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const el = categoryScrollRef.current;
    if (!el) return;

    const id = window.setInterval(() => {
      const node = categoryScrollRef.current;
      if (!node) return;

      const nearEnd = node.scrollLeft + node.clientWidth >= node.scrollWidth - 8;

      if (nearEnd) {
        node.scrollTo({ left: 0, behavior: "smooth" });
        return;
      }

      const step = Math.max(240, Math.floor(node.clientWidth * 0.8));
      node.scrollBy({ left: step, behavior: "smooth" });
    }, 4000);

    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen bg-white">
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
                  <Link href="/about">
                    Discover More About Us
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/products">Explore Collections</Link>
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
      <HeroParallaxBanner />

      <section className="py-0 bg-white">
        <div className="relative">
          <div ref={categoryScrollRef} className="flex overflow-x-auto hide-scrollbar">
            {[
  { name: "RINGS", slug: "rings", image: "/images/products/Ring.png" },
  { name: "EARRINGS", slug: "earrings", image: "/images/products/Ear.png" },
  { name: "PENDANTS", slug: "pendants", image: "/images/products/Pendent.png" },
  { name: "BANGLES", slug: "bangles", image: "/images/products/Bangalre.png" },
  { name: "BRACELETS", slug: "bracelets", image: "/images/products/Brace.png" },
  { name: "MANGALSUTRA", slug: "mangalsutra", image: "/images/products/Mangalsutra.png" },
  { name: "NECKLACE", slug: "necklaces", image: "/images/products/Neck.png" },
  { name: "CHAIN", slug: "chains", image: "/images/products/Chain.png" },
].map((cat, idx) => (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="relative flex-shrink-0 w-[25%] min-w-[300px] aspect-[3/5] group cursor-pointer overflow-hidden"
              >
                <Link href={`/products/${cat.slug}`} className="block w-full h-full">
                  <div className="relative w-full h-full">
                    <ImageWithFallback
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                    
                    <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
                      <span className="text-white text-lg font-medium tracking-wider uppercase">
                        {cat.name}
                      </span>
                      
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                        <svg 
                          width="32" 
                          height="32" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="white" 
                          strokeWidth="1.5"
                          className="transition-transform duration-300 group-hover:scale-110"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white my-10 relative overflow-hidden">
        {/* Decorative gold circles */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-amber-50/50 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 left-1/4 w-56 h-56 bg-yellow-100/30 rounded-full blur-3xl pointer-events-none"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative min-h-[360px] lg:min-h-[520px]">
              <ImageWithFallback
                src="/images/Who we are today.png"
                alt="Who we are today"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="flex items-center py-12 lg:py-16">
              <div className="w-full max-w-xl px-2 sm:px-6 lg:px-14">
                <h2 className="text-3xl md:text-4xl font-serif text-gray-900">Who we are today</h2>
                <div className="mt-6 space-y-4 text-sm md:text-base leading-relaxed text-gray-700">
                  <p>
Today, Muliya – Gold & Diamonds is a symbol of elegance, trust, and forward-thinking craftsmanship. With over 81 years of heritage, we proudly serve customers through 7 showrooms across Karnataka, including Dakshina Kannada’s largest showroom in Puttur, spanning 10,000 sq. ft.

Our brand is built for every generation—from traditional gold lovers to the contemporary bride, from silver seekers to diamond connoisseurs. Every collection at Muliya is designed to make you feel proud, celebrated, and connected.
                  </p>
                  <p>
                    Our commitment to excellence has got us a reputation for creating quality jewellery of refined craftsmanship and pure elegance.
                  </p>
                </div>
                <div className="mt-8">
                  <Link href="/about" className="text-sm font-medium text-[#7b1f2a] underline underline-offset-4 hover:text-[#E92247] transition-colors">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AboutSection/>

      {/* <section className="py-8 bg-white">
        <div className="relative">
          <div className="flex overflow-x-auto scrollbar-hide">
            {[
  { name: "RINGS", slug: "rings", image: "/images/categories/ringimage.jpeg" },
  { name: "EARRINGS", slug: "earrings", image: "/images/categories/earingimage.jpeg" },
  { name: "PENDANTS", slug: "pendants", image: "/images/categories/pendentimage.jpeg" },
  { name: "BANGLES", slug: "bangles", image: "/images/categories/bangleimage.jpeg" },
  { name: "BRACELETS", slug: "bracelets", image: "/images/categories/chain2image.jpeg" },
  { name: "MANGALSUTRA", slug: "mangalsutra", image: "/images/categories/mangalsutraimage.jpeg" },
  { name: "NECKLACE", slug: "necklaces", image: "/images/categories/necklaceimage.jpeg" },
  { name: "CHAIN", slug: "chains", image: "/images/categories/chain1image.jpeg" },
].map((cat, idx) => (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="relative flex-shrink-0 w-[25%] min-w-[300px] aspect-[3/5] group cursor-pointer overflow-hidden"
              >
                <Link href={`/products/${cat.slug}`} className="block w-full h-full">
                  <div className="relative w-full h-full">
                    <ImageWithFallback
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                    
                    <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
                      <span className="text-white text-lg font-medium tracking-wider uppercase">
                        {cat.name}
                      </span>
                      
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                        <svg 
                          width="32" 
                          height="32" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="white" 
                          strokeWidth="1.5"
                          className="transition-transform duration-300 group-hover:scale-110"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Quote */}
      {/* <section className="py-8 bg-white">
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
      </section> */}

      {/* Story block */}
      <section className="py-8 bg-white relative overflow-hidden">
        {/* Decorative gold circles */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-amber-100/25 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-yellow-50/40 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">
                Our Story Begins In 1944
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
               Founded On Integrity And Built With Transparency, Muliya Has Grown Into A Trusted Name—Connecting Craftsmanship With Customer-First Service Across Generations.
              </p>
              <div className="mt-8">
                <Button variant="outline" size="lg" asChild>
                  <Link href="/about">Read More</Link>
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

      <section className="w-full">
        <div className="relative w-full h-[60vh]">
          <ImageBannerSwiper
            images={[
              "/images/Artboard 1 copy 2.png",
              "/images/Artboard 1 copy 3.png",
              "/images/Artboard 1 copy 4.png",
              "/images/Artboard 1 copy 5.png",
            ]}
            alt="Gold collection"
            className="h-full"
          />
        </div>
      </section>

      {/* Collections */}
     <section className="py-8 bg-white relative overflow-hidden">
        {/* Decorative gold circles */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-50/40 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-yellow-100/30 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-amber-100/20 rounded-full blur-3xl pointer-events-none"></div>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    
    <h2 className="text-4xl md:text-5xl  font-serif text-gray-900 mb-10 text-center">
      Collections
    </h2>
    <h3 className="text-2xl md:text-4xl font-serif  mb-10 text-center">
      Jewellery for every generation and every occasion

    </h3>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
      
      {[
  { 
    name: "Amuliya Diamonds", 
    desc: "Exquisite Diamond Craftsmanship", 
    image: "/images/sector/Amulya.jpg.jpeg", 
    slug: "amuliya" 
  },
  { 
    name: "Mahathi Antique Collection", 
    desc: "Timeless Antique Designs", 
    image: "/images/sector/Mahathi.png", 
    slug: "mahathi" 
  },
  { 
    name: "Pouranik Collection", 
    desc: "Heritage-Inspired Pieces", 
    image: "/images/sector/Pouranik.png", 
    slug: "pouranik" 
  },
  { 
    name: "Muliya Silveriya", 
    desc: "Premium Silver Jewellery", 
    image: "/images/sector/Silverio_2.png", 
    slug: "silveriya" 
  },
  { 
    name: "Nithya 18k Jewellery Series", 
    desc: "Everyday Elegance In 18k Gold", 
    image: "/images/sector/Nithiya.png", 
    slug: "nithya" 
  },
  { 
    name: "Mangalsutra Collection", 
    desc: "Sacred Bonds, Beautiful Designs", 
    image: "/images/sector/Mangalsutra.png", 
    slug: "mangalsutra" 
  }
].map((col, idx) => (
        <motion.div
          key={col.slug}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: idx * 0.05 }}
        >
          <Link href={`/collections/${col.slug}`}>
            <div className="group cursor-pointer text-center">

              <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-purple-100 to-purple-50">
                <ImageWithFallback
                  src={col.image}
                  alt={col.name}
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="mt-3">
                <h3 className="text-xl font-serif text-gray-900 flex items-center justify-center gap-1 group-hover:text-gray-700 transition-colors">
                  {col.name}
                  <ArrowRight className="w-4 h-4 -rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </h3>

                {col.desc && (
                  <p className="text-sm text-gray-600 mt-1">
                    {col.desc}
                  </p>
                )}
              </div>

            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Gold Scheme Section */}
      <section className="py-12 bg-white relative overflow-hidden">
        {/* Decorative gold circles */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-yellow-50/40 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/3 right-10 w-56 h-56 bg-amber-50/35 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-sm text-[#E92247] font-medium tracking-wide mb-2">SAVE & SHINE</p>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">
                Easy Jewellery Buying Plan
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Start Saving Monthly And Buy Your Dream Jewellery When You're Ready. Get Bonus Benefits On Completion And Enjoy Flexible Payment Options.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-amber-100">
                  <p className="text-2xl font-serif text-[#E92247]">11+1</p>
                  <p className="text-xs text-gray-600 mt-1">Months Plan</p>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-amber-100">
                  <p className="text-2xl font-serif text-[#E92247]">100%</p>
                  <p className="text-xs text-gray-600 mt-1">Bonus</p>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-amber-100">
                  <p className="text-2xl font-serif text-[#E92247]">0%</p>
                  <p className="text-xs text-gray-600 mt-1">Interest</p>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-amber-100">
                  <p className="text-2xl font-serif text-[#E92247]">BIS</p>
                  <p className="text-xs text-gray-600 mt-1">Certified</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-[#E92247] hover:bg-[#E92247]/90"
                  asChild
                >
                  <Link href="/policy/gold-scheme">
                    Join Now
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/policy/gold-scheme">Learn More</Link>
                </Button>
              </div>
            </motion.div>

            {/* Right - Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-amber-100 to-amber-50 shadow-xl">
                <ImageWithFallback
                  src="/images/piggybank.png"
                  alt="Gold Scheme - Save for your dream jewellery"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                
                {/* Floating badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#E92247]/10 flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-[#E92247]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Start with ₹1,000/month</p>
                      <p className="text-sm text-gray-600">Flexible monthly contributions</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Identity - Static Layout */}
      <section className="py-8 bg-white relative overflow-hidden">
        {/* Decorative gold circles */}
        <div className="absolute top-10 right-20 w-64 h-64 bg-amber-100/30 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-yellow-50/25 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left - Image Only */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative h-[420px] md:h-[520px] rounded-2xl overflow-hidden bg-[#F6F2EE]">
                <ImageWithFallback
                  src="/images/luxury-jewellery-display.jpg"
                  alt="Muliya jewellery"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-sm text-gray-500">The values that shape</p>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mt-2">
                A new identity, the same legacy
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mt-5">
                A refreshed brand look, the same focus on trust, craftsmanship, and customer-first purity assurance.
              </p>

              <div className="mt-6 space-y-3">
                {["Heritage-backed trust", "Craftsmanship you can see", "Transparent purity assurance"].map((b) => (
                  <div key={b} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-100">
                      <Check className="h-4 w-4 text-gray-700" />
                    </span>
                    <p className="text-gray-800">{b}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-5">
                <p className="text-[#E92247] font-semibold">Creating Happiness</p>
                <p className="text-gray-700 text-sm mt-2">The emotion behind every ornament we craft.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white relative overflow-hidden">
        {/* Decorative blue circles */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute w-96 h-96 bg-blue-300/60 rounded-full blur-3xl top-10 left-10"></div>
          <div className="absolute w-80 h-80 bg-sky-300/50 rounded-full blur-3xl bottom-20 right-10"></div>
        </div>
        <div className="px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 text-center mb-8">Experience us in seconds</h2>
          <div className="relative mx-auto max-w-6xl">
            <div className="relative h-[520px] sm:h-[560px] md:h-[600px] flex items-center justify-center select-none"
              onMouseDown={(e) => {
                const container = e.currentTarget;
                container.dataset.isDragging = 'true';
                container.dataset.startX = e.clientX.toString();
                container.dataset.scrollLeft = container.scrollLeft.toString();
              }}
              onMouseMove={(e) => {
                const container = e.currentTarget;
                if (container.dataset.isDragging !== 'true') return;
                e.preventDefault();
              }}
              onMouseUp={(e) => {
                const container = e.currentTarget;
                if (container.dataset.isDragging !== 'true') return;
                container.dataset.isDragging = 'false';
                const startX = parseInt(container.dataset.startX || '0');
                const diff = e.clientX - startX;
                const threshold = 50;
                if (diff > threshold) {
                  prevReel();
                } else if (diff < -threshold) {
                  nextReel();
                }
              }}
              onMouseLeave={(e) => {
                const container = e.currentTarget;
                container.dataset.isDragging = 'false';
              }}
              onTouchStart={(e) => {
                const container = e.currentTarget;
                container.dataset.isDragging = 'true';
                container.dataset.startX = e.touches[0].clientX.toString();
              }}
              onTouchMove={(e) => {
                const container = e.currentTarget;
                if (container.dataset.isDragging !== 'true') return;
              }}
              onTouchEnd={(e) => {
                const container = e.currentTarget;
                if (container.dataset.isDragging !== 'true') return;
                container.dataset.isDragging = 'false';
                const startX = parseInt(container.dataset.startX || '0');
                const diff = e.changedTouches[0].clientX - startX;
                const threshold = 50;
                if (diff > threshold) {
                  prevReel();
                } else if (diff < -threshold) {
                  nextReel();
                }
              }}
              style={{ cursor: 'grab' }}
            >
              <button
                type="button"
                onClick={prevReel}
                aria-label="Previous reel"
                className="absolute left-0 sm:left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 h-11 w-11 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center text-gray-700 hover:text-gray-900"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              <button
                type="button"
                onClick={nextReel}
                aria-label="Next reel"
                className="absolute right-0 sm:right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 h-11 w-11 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center text-gray-700 hover:text-gray-900"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>

              {reelSources.map((src, idx) => {
                const total = reelSources.length;
                const offset = ((idx - activeReel) % total + total) % total;
                const rel = offset === 0 ? 0 : offset <= total / 2 ? offset : offset - total;

                const isActive = rel === 0;
                const isNeighbor = Math.abs(rel) === 1;
                const isSecondNeighbor = Math.abs(rel) === 2;

                let translateX = 0;
                let scale = 1;
                let opacity = 1;
                let z = 10;

                if (isActive) {
                  translateX = 0;
                  scale = 1;
                  opacity = 1;
                  z = 30;
                } else if (isNeighbor) {
                  translateX = rel * 150;
                  scale = 0.86;
                  opacity = 1;
                  z = 20;
                } else if (isSecondNeighbor) {
                  translateX = rel * 145;
                  scale = 0.83;
                  opacity = 0.95;
                  z = 15;
                } else {
                  translateX = rel * 240;
                  scale = 0.7;
                  opacity = 0;
                  z = 10;
                }

                return (
                  <div
                    key={src}
                    className="absolute top-1/2 left-1/2"
                    style={{
                      transform: `translate(-50%, -50%) translateX(${translateX}px) scale(${scale})`,
                      opacity,
                      zIndex: z,
                      filter: isActive ? "none" : "saturate(1.05) contrast(1.02)",
                      transition: "transform 400ms ease, opacity 400ms ease",
                    }}
                  >
                    <div
                      className={
                        "relative aspect-[9/16] w-[240px] sm:w-[270px] md:w-[300px] overflow-hidden bg-transparent shadow-xl " +
                        (isActive ? "rounded-3xl" : "rounded-2xl")
                      }
                    >
                      <video
                        key={isActive ? src : `${src}-inactive`}
                        src={src}
                        autoPlay={isActive || isNeighbor || isSecondNeighbor}
                        muted
                        loop
                        playsInline
                        preload="auto"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Video Gallery - Horizontal Scroll */}
      {/* <section className="py-8 bg-white">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-4 pb-4 hide-scrollbar snap-x snap-mandatory">
            {[
              "/images/video1.mp4",
              "/images/video2.mp4",
              "/images/video3.mp4",
              "/images/video4.mp4",
              "/images/video5.mp4",
              "/images/video6.mp4",
            ].map((src, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className="flex-shrink-0 w-[280px] sm:w-[320px] snap-start"
              >
                <div className="relative aspect-[9/16] overflow-hidden bg-gray-900">
                  <video
                    src={src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
      {/* <VideoGallery /> */}

    

      {/* Testimonials - BlueStone Style */}
      <section className="py-8 bg-white relative overflow-hidden">
        {/* Decorative gold circles */}
        <div className="absolute top-10 left-10 w-80 h-80 bg-amber-100/25 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 right-20 w-72 h-72 bg-yellow-50/35 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/3 w-56 h-56 bg-amber-50/30 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">
              Muliya & Me
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
             Real Experiences From Customers Who Trust Muliya For Craftsmanship And Service.
            </p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="relative">
          <div className="pb-8 pt-4">
            <div className="flex flex-wrap justify-center gap-10 px-4">
              {[
                {
                  name: "Akanksha Khanna",
                  age: "27",
                  image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80",
                  text: "Delighted with my engagement ring from Muliya! It's my dream ring. The craftsmanship is stunning and the purity assurance gives me complete confidence.",
                  rotate: -8,
                  translateY: 15,
                },
                {
                  name: "Diksha Singh",
                  age: "29",
                  image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80",
                  text: "I was worried about finding good quality jewellery online, but Muliya's customer service gave me full assurance. The delivery was super quick and the quality is certified.",
                  rotate: 5,
                  translateY: 5,
                },
                {
                  name: "Nuton Mishra",
                  age: "33",
                  image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=400&q=80",
                  text: "I got a Nazariya for my baby from Muliya. It's so cute seeing it on my little one's wrist, and it gives me a sense of security knowing it's pure gold.",
                  rotate: -4,
                  translateY: 20,
                },
                {
                  name: "Divya Mishra",
                  age: "26",
                  image: "https://images.unsplash.com/photo-1504194921103-f8b80cadd5e4?w=400&q=80",
                  text: "On Valentine's Day, my husband gifted me a necklace from Muliya, and I haven't taken it off ever since. Everyone asks me where it's from. I just LOVE how nice it looks on me!",
                  rotate: 7,
                  translateY: 0,
                },
                {
                  name: "Priya Singh",
                  age: "34",
                  image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&q=80",
                  text: "I had trouble finding jewellery that suited my minimalist style, but Muliya's sleek and elegant designs were exactly what I was looking for.",
                  rotate: -6,
                  translateY: 10,
                },
                {
                  name: "Avni Sharma",
                  age: "27",
                  image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
                  text: "Me and my friends love Muliya's unique designs. I love how their pieces add elegance to my outfits. Their jewellery is stylish, modern and a breath of fresh air.",
                  rotate: 4,
                  translateY: 18,
                },
                {
                  name: "Sonaalee Semwal",
                  age: "28",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
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
                  className="relative"
                  style={{ width: '280px' }}
                >
                  <div 
                    className="relative transition-all duration-300 hover:scale-105"
                    style={{ 
                      transform: `rotate(${t.rotate}deg) translateY(${t.translateY}px)`,
                    }}
                  >
                    {/* Polaroid Card */}
                    <div className="bg-[#e0f2fe] p-3 pb-5 shadow-xl rounded-sm cursor-pointer">
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
   <section className="relative py-20 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-serif text-gray-900 tracking-wide">
        Our Spark Is In The Details
      </h2>
      <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#E92247] to-transparent mx-auto mt-4" />
      <p className="text-gray-600 mt-5 max-w-2xl mx-auto text-lg leading-relaxed">
        Trust-enhancing tools and an experience built around clarity, quality, and care.
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {detailCards.map((c, idx) => (
        <motion.div
          key={c.id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: idx * 0.08 }}
        >
          <div className="relative group h-full rounded-3xl p-[1px] bg-gradient-to-br from-blue-300 via-white to-blue-200 hover:from-blue-400 hover:to-blue-300 transition duration-500">

            {/* Inner Card */}
            <div className="h-full bg-slate-50/90 backdrop-blur-xl rounded-3xl p-8 flex flex-col justify-between shadow-md group-hover:shadow-2xl transition-all duration-500">

              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-300 to-slate-50 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:shadow-lg transition">
                <c.icon className="w-7 h-7 text-[#E92247]" />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#E92247] transition">
                  {c.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {c.description}
                </p>
              </div>

              {/* Bottom Accent */}
              <div className="mt-6 w-10 h-[2px] bg-[#E92247] group-hover:w-16 transition-all duration-300" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>

  {/* Background Glow Effect */}
  <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
    <div className="absolute w-96 h-96 bg-blue-100/50 rounded-full blur-3xl top-10 left-10"></div>
    <div className="absolute w-80 h-80 bg-sky-100/40 rounded-full blur-3xl top-40 right-20"></div>
    <div className="absolute w-72 h-72 bg-blue-50/60 rounded-full blur-3xl bottom-20 left-1/3"></div>
    <div className="absolute w-64 h-64 bg-sky-50/50 rounded-full blur-3xl top-1/2 right-1/4"></div>
    <div className="absolute w-80 h-80 bg-blue-100/30 rounded-full blur-3xl bottom-10 right-10"></div>
  </div>
</section>

      {/* Journal */}
      {/* <section className="py-8 bg-white">
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
              <Link href="/blog">View More</Link>
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
                <Link href="/blog">
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
      </section> */}

    

     
    </div>
  );
}

export default Home;
