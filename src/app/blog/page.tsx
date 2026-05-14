"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Calendar, ArrowRight } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Free hair donation camp on September 11 for cancer sufferers by \"Seeds of Hope\".",
    excerpt: "Join us in our initiative to support cancer patients through hair donation. Every contribution counts towards bringing hope and confidence to those in need.",
    date: "September 5, 2024",
    slug: "free-hair-donation-camp",
    image: "/images/Seeds-of-Hope-2022-Kannada-b11.jpg"
  },
  {
    id: "2",
    title: "Muliya Jewels Founder's day – Social Responsibility on the path of Excellence",
    excerpt: "Celebrating our commitment to excellence and giving back to the community. Learn about our initiatives and how we make a difference.",
    date: "August 15, 2024",
    slug: "muliya-jewels-founders-day-social-responsibility-on-the-path-of-excellence",
    image: "/images/muliya-founders-day-featured-b2.jpg"
  },
  {
    id: "3",
    title: "Why purchasing gold on Akshaya Tritiya is considered as a good fortune?",
    excerpt: "Discover the significance of buying gold on this auspicious day and why it has been a cherished tradition for generations.",
    date: "May 10, 2024",
    slug: "why-purchasing-gold-on-akshaya-tritiya-is-considered-as-a-good-fortune",
    image: "/images/akshaya-tritiya-blog-b3.jpg"
  },
  {
    id: "4",
    title: "Enhance Your Beauty with Traditional Jewellery",
    excerpt: "Explore the timeless elegance of traditional Indian jewellery and how it complements modern fashion while preserving cultural heritage.",
    date: "April 22, 2024",
    slug: "enhance-your-beauty-with-traditional-jewellery",
    image: "/images/Traditional-jewellery-blog-b4.jpg"
  },
  {
    id: "17",
    title: "Jewellery Offers Bangalore",
    excerpt: "Explore jewellery offers Bangalore and wedding jewellery offers Bangalore with exclusive deals on bridal sets, gold coins, diamond jewellery, and more.",
    date: "May 5, 2026",
    slug: "jewellery-offers-bangalore",
    image: "/images/blogimage.jpeg"
  },
  {
    id: "18",
    title: "Akshaya Tritiya Gold Offers Bangalore",
    excerpt: "Discover Akshaya Tritiya gold offers Bangalore including gold coin offers Bangalore and festive deals across jewellery collections.",
    date: "May 5, 2026",
    slug: "akshaya-tritiya-gold-offers-bangalore",
    image: "/images/akshaya-tritiya-blog-b3.jpg"
  },
  {
    id: "19",
    title: "Gold Savings Scheme Bangalore",
    excerpt: "Learn about our gold savings scheme jewellery plan and jewellery monthly scheme Bangalore customers trust — pay for 11 months and we pay the 12th.",
    date: "May 5, 2026",
    slug: "gold-savings-scheme-bangalore",
    image: "/images/goldscheme.jpeg"
  },
  {
    id: "20",
    title: "Lightweight Gold & Diamond Jewellery",
    excerpt: "Explore lightweight gold jewellery and lightweight diamond jewellery designs that are comfortable, elegant, and perfect for everyday wear.",
    date: "May 5, 2026",
    slug: "lightweight-gold-diamond-jewellery",
    image: "/images/Traditional-jewellery-blog-b4.jpg"
  }
];

function blogPostTimestamp(dateLabel: string): number {
  const t = new Date(dateLabel).getTime();
  return Number.isNaN(t) ? 0 : t;
}

const sortedBlogPosts = [...blogPosts].sort(
  (a, b) => blogPostTimestamp(b.date) - blogPostTimestamp(a.date),
);

export default function BlogPage() {
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
            <span className="text-gray-900 font-medium">Blog</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-white">
        <img
          src="/images/blogimage.jpeg"
          alt="Blog banner"
          className="w-full object-cover"
          style={{ height: "70vh" }}
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-4">Blog</h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Stories, insights, and updates from Muliya Gold & Diamonds
          </p>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sortedBlogPosts.map((post) => (
            <article 
              key={post.id}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 md:p-8">
                {/* Date */}
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>

                {/* Title */}
                <h2 className="text-xl md:text-2xl font-serif text-gray-900 mb-4 leading-tight group-hover:text-[#E92247] transition-colors">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Read More Link */}
                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-[#E92247] font-medium hover:gap-3 transition-all"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
            Creating Happiness Since 1944
          </h2>
          <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
            Muliya in your mobile. Download our app to explore our latest collections and stay updated with our blog.
          </p>
          <Link 
            href="/"
            className="inline-flex items-center gap-3 bg-[#E92247] text-white px-8 py-4 rounded-xl hover:bg-[#d11f3f] transition-all shadow-lg hover:shadow-xl font-medium"
          >
            Explore Our Collections
          </Link>
        </div>
      </div>
    </main>
  );
}
