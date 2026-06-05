import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { getPublishedBlogs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog | Hindustan Gold Company | Gold Buying Tips & News",
  description: "Read articles about gold buying, gold prices, how to sell gold, pledged gold release and more from Hindustan Gold Company.",
  alternates: { canonical: "https://hindustangoldcompany.com/blog" },
};

export const revalidate = 60;

const BASE = "https://hindustangoldcompany.com";

const staticPosts = [
  { _id: "s1", slug: "gold-earnings-with-price", title: "Gold Earnings with Price", excerpt: "Gold is the most valuable asset, and the fluctuation of the gold price changes with time. Learn how gold has appreciated from Rs.63 per 10g in 1964 to over Rs.52,670 in 2022.", publishedAt: "2023-03-03", category: "Gold Price", featuredImage: `${BASE}/static/img/gold.webp` },
  { _id: "s2", slug: "gold-biscuit", title: "Gold Biscuit - Investment Guide", excerpt: "A Gold Biscuit is a bullion or ingot of solid gold of a specific weight. Learn why gold biscuits are a superior investment choice.", publishedAt: "2023-02-28", category: "Gold Investment", featuredImage: `${BASE}/static/img/best-gold.jpg` },
  { _id: "s3", slug: "value-of-gold", title: "Value of Gold - What Determines It?", excerpt: "The value of gold fluctuates based on supply, demand, interest rates, and global economic conditions. Understand what drives gold prices in India.", publishedAt: "2023-02-23", category: "Gold Price", featuredImage: `${BASE}/static/img/trusted_gold.jpg` },
  { _id: "s4", slug: "gold-online-rate", title: "Gold Online Rate - How It Works", excerpt: "Gold rates are determined by factors like demand and supply, interest rates, inflation, and currency fluctuations. Know how to get the best rate.", publishedAt: "2023-02-22", category: "Gold Price", featuredImage: `${BASE}/static/img/side2.webp` },
  { _id: "s5", slug: "i-went-to-sell-gold", title: "I Want to Sell Gold - Complete Guide", excerpt: "Get immediate estimation of the gold jewellery you are selling. Hindustan Gold Company gives you the right value without middleman losses.", publishedAt: "2023-02-09", category: "Sell Gold", featuredImage: `${BASE}/static/img/sell_gold.jpg` },
  { _id: "s6", slug: "gold-buyers-near-me", title: "Gold Buyers Near Me - Find the Best", excerpt: "Looking for reliable gold buyers near you? Complete guide to finding trusted gold buyers with the best price and instant cash.", publishedAt: "2024-03-15", category: "Gold Buying", featuredImage: `${BASE}/static/img/Gold-Buyers.webp` },
  { _id: "s7", slug: "release-pledged-gold-near-me", title: "How to Release Pledged Gold Near Me", excerpt: "Struggling with pledged gold? Learn how Hindustan Gold Company helps you release gold from banks and NBFCs quickly.", publishedAt: "2024-03-10", category: "Pledged Gold", featuredImage: `${BASE}/static/img/door_step_gold.jpg` },
  { _id: "s8", slug: "sell-gold-for-cash", title: "How to Sell Gold for Cash", excerpt: "Complete guide on how to sell gold for cash safely and get instant payment at the best market rate.", publishedAt: "2024-03-05", category: "Sell Gold", featuredImage: `${BASE}/static/img/sell_gold.jpg` },
  { _id: "s9", slug: "cash-for-gold-near-me", title: "Cash for Gold Near Me - Instant Payment", excerpt: "Find the best cash for gold services near you. Hindustan Gold Company offers instant cash at current gold market rates across 89+ branches.", publishedAt: "2024-02-28", category: "Cash for Gold", featuredImage: `${BASE}/static/img/Gold-Buyers.webp` },
];

const categoryColors: Record<string, string> = {
  "Gold Price": "bg-amber-100 text-amber-800",
  "Gold Investment": "bg-yellow-100 text-yellow-800",
  "Pledged Gold": "bg-blue-100 text-blue-800",
  "Sell Gold": "bg-green-100 text-green-800",
  "Cash for Gold": "bg-orange-100 text-orange-800",
  "Gold Buying": "bg-red-100 text-red-800",
};

export default async function BlogPage() {
  const dbPosts = await getPublishedBlogs();
  const posts = dbPosts.length > 0 ? dbPosts : staticPosts;

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#1a1a1a] to-[#3d0000] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Blog &amp; Updates</h1>
          <p className="text-gray-300 mt-3 text-lg">Gold buying tips, price updates, and industry knowledge.</p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post: any) => (
              <Link key={post._id} href={`/blog/${post.slug}`} className="block group">
                <article className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                  <div className="relative h-44 overflow-hidden bg-gray-100">
                    {post.featuredImage ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={post.featuredImage} alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#1a1a1a] to-[#C8102E]/60 flex items-center justify-center">
                        <span className="text-4xl">📰</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${categoryColors[post.category] ?? "bg-gray-100 text-gray-600"}`}>
                        {post.category}
                      </span>
                      {(post.publishedAt || post.createdAt) && (
                        <span className="text-xs text-gray-400 flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.publishedAt ?? post.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                        </span>
                      )}
                    </div>
                    <h2 className="font-bold text-gray-900 text-base leading-snug group-hover:text-[#C8102E] transition-colors mb-2">{post.title}</h2>
                    <p className="text-gray-600 text-sm leading-relaxed flex-1 line-clamp-3">{post.excerpt}</p>
                    <div className="mt-4 flex items-center gap-1 text-[#C8102E] text-sm font-semibold">
                      Read More <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
