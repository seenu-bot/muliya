import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db/mongoose";
import { requireAdmin } from "@/lib/auth";
import { Branch } from "@/models/Branch";
import { Blog } from "@/models/Blog";
import { FAQ } from "@/models/FAQ";
import { GoldPrice } from "@/models/GoldPrice";

const BASE = "https://hindustangoldcompany.com";

const seedBranches = [
  { name: "Majestic", fullName: "Hindustan Gold Buyers Majestic", city: "Bengaluru", state: "Karnataka", address: "No 5 Shree Compex Avenue Road, Bangalore, Bengaluru – 560002", phone: "8088550033", email: "info@hindustangoldcompany.com", mapsLink: "https://maps.app.goo.gl/ueUcWKe2fe67xhf36", img: `${BASE}/static/upload/hindustangold-branch-Hindustan%20gold%20company%20Mejestic-.jpeg`, mapImg: `${BASE}/static/upload/hindustangold-branch-map-location-Hindustan%20gold%20company%20Mejestic-.PNG`, isActive: true, order: 1 },
  { name: "Gulbarga", fullName: "Hindustan Gold Buyers Gulbarga", city: "Gulbarga", state: "Karnataka", address: "Canara Vadiraj Bhavan Complex, Opp Jagat Post Office, Beside City Centre Mall, Main Rd, Kalaburagi – 585101", phone: "8088550033", email: "info@hindustangoldcompany.com", mapsLink: "https://g.page/gold-buyers-Gulbaraga?share", img: `${BASE}/static/upload/hindustangold-branch-Gulbarga-.jpg`, mapImg: `${BASE}/static/upload/hindustangold-branch-map-location-Hindustan%20Gold%20Company%20Gulbarga-.png`, isActive: true, order: 2 },
  { name: "Mysore", fullName: "Hindustan Gold Buyers Mysore", city: "Mysore", state: "Karnataka", address: "#815, 1st Floor, BTC Complex Old Santepet, Mysore – 570024", phone: "8088550033", email: "info@hindustangoldcompany.com", mapsLink: "https://g.page/gold-buyers-mysore?share", img: `${BASE}/static/upload/hindustangold-branch-Mysore-.jpg`, mapImg: `${BASE}/static/upload/hindustangold-branch-map-location-Mysore-.png`, isActive: true, order: 3 },
  { name: "Tumkur", fullName: "Hindustan Gold Buyers Tumkur", city: "Tumkur", state: "Karnataka", address: "Abharaba Arcade, 1st Floor 2nd Shop, Ward No 18, Opp N S Medical, MG Road, Tumkur – 572101", phone: "8088550033", email: "info@hindustangoldcompany.com", mapsLink: "https://g.page/gold-buyers-tumkur?share", img: `${BASE}/static/upload/hindustangold-branch-Tumkur-.jpg`, mapImg: `${BASE}/static/upload/hindustangold-branch-map-location-Tumkur-.png`, isActive: true, order: 4 },
  { name: "Shivamogga", fullName: "Hindustan Gold Buyers Shivamogga", city: "Shivamogga", state: "Karnataka", address: "Shivappa Nayaka Circle, 3rd Floor, Gandhibazzar (BH Road Near Bhadhravathi), Shivamogga – 577201", phone: "8088550033", email: "info@hindustangoldcompany.com", mapsLink: "https://g.page/gold-buyers-shimoga?share", img: `${BASE}/static/upload/hindustangold-branch-Shivamogga-.jpg`, mapImg: `${BASE}/static/upload/hindustangold-branch-map-location-Shivamogga-.png`, isActive: true, order: 5 },
  { name: "Hassan", fullName: "Hindustan Gold Buyers Hassan", city: "Hassan", state: "Karnataka", address: "BM Road, Opp to Malabar Gold & Diamond, Above Muthoot Finance & Kotak Mahindra Bank, Hassan – 573201", phone: "8088550033", email: "info@hindustangoldcompany.com", mapsLink: "https://g.page/gold-buyers-in-hassan?share", img: `${BASE}/static/upload/hindustangold-branch-Hassan-.jpg`, mapImg: `${BASE}/static/upload/hindustangold-branch-map-location-Hassan-.png`, isActive: true, order: 6 },
  { name: "Hubli", fullName: "Hindustan Gold Buyers Hubli", city: "Hubli", state: "Karnataka", address: "No 5, First Floor, Madhura Plaza, Opposite to Laxmi Temple, Dajiban Peta, Hubli – 580028", phone: "8088550033", email: "info@hindustangoldcompany.com", mapsLink: "https://g.page/gold-buyers-hubli?share", img: `${BASE}/static/upload/hindustangold-branch-Hubli-.jpg`, mapImg: `${BASE}/static/upload/hindustangold-branch-map-location-Hubli-.png`, isActive: true, order: 7 },
  { name: "Bellary", fullName: "Hindustan Gold Buyers Bellary", city: "Bellary", state: "Karnataka", address: "Municipality Complex Office, Door No F2, Royal Circle, Ballari – 583101", phone: "8088550033", email: "info@hindustangoldcompany.com", mapsLink: "https://g.page/gold-buyers-bellary?share", img: `${BASE}/static/upload/hindustangold-branch-Bellary-.jpg`, mapImg: `${BASE}/static/upload/hindustangold-branch-map-location-Bellary-.png`, isActive: true, order: 8 },
  { name: "Chikkaballapur", fullName: "Hindustan Gold Buyers Chikkaballapur", city: "Chikkaballapur", state: "Karnataka", address: "#1306/1197, 2nd Floor, Bazaar Main Road, Chikkaballapur – 562101", phone: "8088550033", email: "info@hindustangoldcompany.com", mapsLink: "https://g.page/gold-buyers-chikkaballapura?share", img: `${BASE}/static/upload/hindustangold-branch-Chikkabalapur-.jpg`, mapImg: `${BASE}/static/upload/hindustangold-branch-map-location-Chikkabalapur-.png`, isActive: true, order: 9 },
  { name: "Sindhanur", fullName: "Hindustan Gold Buyers Sindhanur", city: "Sindhanur", state: "Karnataka", address: "No.6-1-1928 & 6-1-19927, Ward No.16, Ramakrishna Colony, Gangavathi Road, Sindhanur – 584128", phone: "8088550033", email: "info@hindustangoldcompany.com", mapsLink: "https://g.page/gold-buyers-sindanur?share", img: `${BASE}/static/upload/hindustangold-branch-Hindustan%20Gold%20Company%20Sindhanur-.jpg`, mapImg: `${BASE}/static/upload/hindustangold-branch-map-location-Sindhanur-.png`, isActive: true, order: 10 },
];

const seedFAQs = [
  { question: "Which are the best gold buyers in Bangalore?", answer: "Hindustan Gold Company is one of the best among the gold buying companies in Bangalore. They provide hassle-free gold selling process and ensure customers get the exact current gold rates value with instant cash.", category: "General", isActive: true, order: 1 },
  { question: "How does Hindustan Gold Company determine the value of my gold?", answer: "We use state-of-the-art XRF testing equipment and follow the current market rates. The evaluation is conducted in front of you with a detailed pricing breakdown — fully transparent.", category: "Selling Gold", isActive: true, order: 2 },
  { question: "How quickly will I receive cash for my gold?", answer: "Hindustan Gold Company provides instant cash payments once the gold has been evaluated and agreed upon. NEFT bank transfer is also available same day.", category: "Selling Gold", isActive: true, order: 3 },
  { question: "Can I sell damaged or broken gold jewellery?", answer: "Absolutely. We accept gold in any condition — damaged, broken, old ornaments, scrap gold. We evaluate based on purity and weight regardless of physical state.", category: "Selling Gold", isActive: true, order: 4 },
  { question: "Do I need an appointment to sell my gold?", answer: "Appointments aren't required but recommended. Walk-ins are always welcome at any of our 89+ branches.", category: "Process", isActive: true, order: 5 },
  { question: "What documents do I need to bring when selling gold?", answer: "A valid government-issued ID: Aadhaar card, passport, or driver's license. Purchase receipts are helpful but not mandatory.", category: "Process", isActive: true, order: 6 },
  { question: "Is it safe to sell my gold to Hindustan Gold Company?", answer: "Absolutely. We are ISO 9001–2015 certified, licensed, and trusted by over 4,84,039 customers. All transactions happen at our security-rated premises.", category: "Safety", isActive: true, order: 7 },
  { question: "Does Hindustan Gold Company offer home pick-up services?", answer: "Yes! Our doorstep gold buying service brings our professionals to your home. They evaluate gold on-site and provide instant cash — completely convenient.", category: "Special Services", isActive: true, order: 8 },
  { question: "Can I release pledged gold through Hindustan Gold Company?", answer: "Yes! We help you release gold pledged at banks and NBFCs. Bring your pledge slip and valid ID. Our team handles the process and pays you the best market price.", category: "Special Services", isActive: true, order: 9 },
  { question: "Can I get a price estimate for my gold online?", answer: "Yes. Use our Check Gold Price calculator to get an approximate estimate based on today's rates. Enter your state, gold weight, and purity.", category: "General", isActive: true, order: 10 },
  { question: "What types of gold do you buy?", answer: "We buy all types: gold jewellery, gold coins, gold biscuits/bars, broken gold, scrap gold, old ornaments — any form of gold in any condition.", category: "Selling Gold", isActive: true, order: 11 },
  { question: "Is there a minimum gold weight you accept?", answer: "No minimum weight requirement. We accept gold of any weight — from small pieces to large quantities.", category: "Selling Gold", isActive: true, order: 12 },
];

const seedBlogs = [
  { title: "Gold Earnings with Price", slug: "gold-earnings-with-price", excerpt: "Gold is the most valuable asset, and the fluctuation of the gold price changes with time. Learn how gold has appreciated from ₹63.25 per 10g in 1964 to over ₹52,670 in 2022.", content: "Gold has always been an emergency helper for Indian families. Even small quantities of gold can help during financial hardship.\n\n## What Determines Gold Prices in India?\n\nIndian gold prices result from international market conditions, local demand, currency exchange rates, government taxes and duties, and retailer markups.\n\n## Gold Price History\n\n- 1964: ₹63.25 per 10 grams\n- 1980: ₹1,330 per 10 grams\n- 2000: ₹4,400 per 10 grams\n- 2010: ₹18,500 per 10 grams\n- 2022: ₹52,670 per 10 grams\n\nThis represents over 83,000% growth in 58 years.\n\n## Gold Bars vs. Gold Jewellery\n\nGold bars offer superior value: higher purity (24 karat), no making charges deducted on resale, easy liquidity.\n\n## When Should You Sell Gold?\n\nSell during price peaks. Monitor daily MCX gold rates. Hindustan Gold Company pays the current online gold rate — visit any of our 89+ branches.", category: "Gold Price", tags: ["gold price", "gold investment", "sell gold"], featuredImage: `${BASE}/static/img/gold.webp`, isPublished: true, publishedAt: new Date("2023-03-03"), author: "Hindustan Gold Company", readTime: "5 min read" },
  { title: "Gold Biscuit — Investment Guide", slug: "gold-biscuit", excerpt: "A Gold Biscuit is a bullion or ingot of solid gold of a specific weight. Learn why gold biscuits are a superior investment choice.", content: "A Gold Biscuit is a bullion or ingot of solid gold of a specific weight, usually in the form of a small, flat rectangular bar.\n\n## Why Gold Biscuits Are Popular\n\nGold biscuits are typically 24-karat pure gold (999.9 fineness) — the purest form of gold investment.\n\n### Key Benefits:\n- Protection during inflation and economic uncertainty\n- Cultural significance in Indian society\n- Easy liquidity and portfolio diversification\n- Tangible asset ownership\n\n## Selling Gold Biscuits at Hindustan Gold Company\n\nWe buy gold biscuits at current online market rates — no deductions for making charges. Simply bring your gold biscuit with its certificate to any of our 89+ branches.", category: "Gold Investment", tags: ["gold biscuit", "gold bars", "investment"], featuredImage: `${BASE}/static/img/best-gold.jpg`, isPublished: true, publishedAt: new Date("2023-02-28"), author: "Hindustan Gold Company", readTime: "4 min read" },
  { title: "Value of Gold — What Determines It?", slug: "value-of-gold", excerpt: "The value of gold fluctuates based on supply, demand, interest rates, and global economic conditions. Understand what drives gold prices in India.", content: "The value of gold fluctuates depending on supply and demand, interest rates, and global economic conditions.\n\n## Key Factors That Determine Gold Value\n\n1. Global Market Conditions\n2. US Dollar Exchange Rate\n3. Government Import Duties\n4. Seasonal Demand — Diwali, weddings, Akshaya Tritiya\n\n## Gold Purity and Its Impact\n\n- 24 Karat (999.9 fineness) — highest resale value\n- 22 Karat (916 fineness) — most common Indian jewellery\n- 18 Karat (750 fineness) — diamond-studded jewellery\n\nVisit Hindustan Gold Company for transparent, fair gold valuation at any of our 89+ branches.", category: "Gold Price", tags: ["gold value", "gold purity", "24K gold"], featuredImage: `${BASE}/static/img/trusted_gold.jpg`, isPublished: true, publishedAt: new Date("2023-02-23"), author: "Hindustan Gold Company", readTime: "4 min read" },
  { title: "Gold Online Rate — How It Works", slug: "gold-online-rate", excerpt: "Gold rates are determined by demand, supply, interest rates, and currency fluctuations. Know how to get the best rate.", content: "Gold rates are determined by demand and supply, interest rates, inflation expectations, and currency fluctuations.\n\n## What is the Online Gold Rate?\n\nThe online gold rate refers to the current market price on MCX (Multi Commodity Exchange) and LBMA.\n\n## Key Drivers\n\n- Supply and demand dynamics\n- US Dollar strength\n- Inflation expectations\n- Interest rates\n\n## Tips for Getting Best Rate\n\n1. Monitor MCX daily gold rate\n2. Compare multiple buyers — Hindustan Gold Company always matches the online rate\n3. Sell 24K separately from 22K\n\nCall 8088550033 to know today's rates.", category: "Gold Price", tags: ["gold rate", "MCX", "online gold price"], featuredImage: `${BASE}/static/img/side2.webp`, isPublished: true, publishedAt: new Date("2023-02-22"), author: "Hindustan Gold Company", readTime: "3 min read" },
  { title: "I Want to Sell Gold — Complete Guide", slug: "i-went-to-sell-gold", excerpt: "Get immediate estimation of the gold jewellery you want to sell. Hindustan Gold Company gives you the right value without middleman losses.", content: "Selling gold can be an emotional decision, but it is also a smart financial move. Hindustan Gold Company makes it simple, transparent, and instant.\n\n## The Selling Process\n\n1. Visit Your Nearest Branch — no appointment needed\n2. Free Gold Evaluation — XRF purity check + weight\n3. Check the Price — Weight × Purity × Current Rate\n4. Accept and Receive Cash — instant payment\n\n## Documents Required\n\nAadhaar Card, PAN Card, Passport, or Driver's License.\n\n## Why Choose Hindustan Gold Company?\n\nNo melting charges. No hidden deductions. Instant cash or NEFT transfer. Call 8088550033 today.", category: "Sell Gold", tags: ["sell gold", "cash for gold", "gold buyers"], featuredImage: `${BASE}/static/img/sell_gold.jpg`, isPublished: true, publishedAt: new Date("2023-02-09"), author: "Hindustan Gold Company", readTime: "5 min read" },
];

const seedGoldPrices = [
  { carat: "24K", pricePerGram: 9250, state: "Karnataka", date: new Date() },
  { carat: "22K", pricePerGram: 8479, state: "Karnataka", date: new Date() },
  { carat: "18K", pricePerGram: 6938, state: "Karnataka", date: new Date() },
];

export async function POST(req: NextRequest) {
  const admin = requireAdmin(req);
  if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    await connectDB();

    const body = await req.json().catch(() => ({}));
    const collections = body.collections ?? ["branches", "faqs", "blogs", "goldprice"];
    const results: Record<string, string> = {};

    if (collections.includes("branches")) {
      const existing = await Branch.countDocuments();
      if (existing === 0) {
        await Branch.insertMany(seedBranches);
        results.branches = `Seeded ${seedBranches.length} branches`;
      } else {
        results.branches = `Skipped — ${existing} branches already exist`;
      }
    }

    if (collections.includes("faqs")) {
      const existing = await FAQ.countDocuments();
      if (existing === 0) {
        await FAQ.insertMany(seedFAQs);
        results.faqs = `Seeded ${seedFAQs.length} FAQs`;
      } else {
        results.faqs = `Skipped — ${existing} FAQs already exist`;
      }
    }

    if (collections.includes("blogs")) {
      const existing = await Blog.countDocuments();
      if (existing === 0) {
        await Blog.insertMany(seedBlogs);
        results.blogs = `Seeded ${seedBlogs.length} blog posts`;
      } else {
        results.blogs = `Skipped — ${existing} blog posts already exist`;
      }
    }

    if (collections.includes("goldprice")) {
      const today = new Date().toISOString().split("T")[0];
      const existing = await GoldPrice.findOne({ date: { $gte: new Date(today) } });
      if (!existing) {
        await GoldPrice.insertMany(seedGoldPrices);
        results.goldprice = `Seeded ${seedGoldPrices.length} gold prices`;
      } else {
        results.goldprice = `Skipped — gold prices already set for today`;
      }
    }

    return NextResponse.json({ success: true, results });
  } catch (error: any) {
    console.error("Seed error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
