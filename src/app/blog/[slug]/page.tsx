import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag } from "lucide-react";

const BASE = "https://hindustangoldcompany.com";

const blogPosts: Record<string, {
  title: string; date: string; category: string; metaDesc: string;
  img: string; content: string;
}> = {
  "gold-earnings-with-price": {
    title: "Gold Earnings with Price",
    date: "2023-03-03",
    category: "Gold Price",
    img: `${BASE}/static/img/gold.webp`,
    metaDesc: "Gold is the most valuable asset. Learn how gold prices have grown from ₹63.25 per 10g in 1964 to ₹52,670 in 2022 and how to maximize your gold earnings.",
    content: `Gold has always been an emergency helper for Indian families. Even small quantities of gold can help during financial hardship — making it one of the most important assets to understand.

## What Determines Gold Prices in India?

Indian gold prices result from a combination of factors:
- **International market conditions** — Gold is priced in US dollars globally
- **Local demand** — India is one of the world's largest gold consumers
- **Currency exchange rates** — Rupee-dollar fluctuations directly impact prices
- **Government taxes and duties** — Import duties significantly affect Indian gold prices
- **Retailer markups** — Varies by seller and region

## Gold Price History — Remarkable Appreciation

Gold has appreciated dramatically over the decades:
- **1964:** ₹63.25 per 10 grams
- **1980:** ₹1,330 per 10 grams
- **2000:** ₹4,400 per 10 grams
- **2010:** ₹18,500 per 10 grams
- **2022:** ₹52,670 per 10 grams

This represents over **83,000% growth** in 58 years — making gold one of India's best long-term investments.

## Gold Bars vs. Gold Jewellery — Which Is Better to Sell?

**Gold bars (biscuits)** offer superior value because:
- Higher purity (typically 24 karat / 999 fineness)
- No making charges deducted on resale
- Easier to value and liquidate
- Convenient storage with less risk of damage

**Gold jewellery**, while culturally valuable, has making charges embedded in the purchase price that are not recovered on resale.

## When Should You Sell Gold?

Timing matters. Sell during:
- **Price peaks** — Monitor daily MCX gold rates
- **Dollar weakness** — Weak dollar = higher gold prices
- **Economic uncertainty** — Gold is a safe-haven asset
- **High demand seasons** — Post-festive season prices tend to dip

## How Hindustan Gold Company Maximizes Your Earnings

We pay you the **current online gold rate** — not the local jeweller rate which can be 3-5% lower. With our XRF purity testing, you get paid for the exact purity of your gold — no approximations.

Visit any of our **89+ branches** for an instant, transparent evaluation.`,
  },

  "gold-biscuit": {
    title: "Gold Biscuit — The Smart Investment Choice",
    date: "2023-02-28",
    category: "Gold Investment",
    img: `${BASE}/static/img/best-gold.jpg`,
    metaDesc: "A gold biscuit is a bullion bar of solid gold. Learn why gold biscuits are superior investments and how Hindustan Gold Company buys them at the best price.",
    content: `A Gold Biscuit is a bullion or ingot of solid gold of a specific weight, usually in the form of a small, flat rectangular bar. They are available in various weights starting from 1 gram, with popular sizes being 5g, 10g, 20g, 50g, and 100g.

## Why Gold Biscuits Are Popular Investments

Gold biscuits are typically **24-karat pure gold** (999.9 fineness) and are hallmarked by certified refineries. They represent the purest form of gold investment available.

### Key Benefits:
1. **Inflation Protection** — Gold maintains purchasing power over long periods
2. **Cultural Significance** — Deeply embedded in Indian wedding and gifting traditions
3. **Easy Liquidity** — Can be sold quickly at current market rates
4. **Portfolio Diversification** — Low correlation with stocks and bonds
5. **Tangible Asset** — Physical ownership provides security

## Who Buys Gold Biscuits?

- **Individual investors** — Long-term wealth preservation
- **Jewellers** — Raw material for ornament making
- **Banks & NBFCs** — Gold loan collateral
- **Central banks** — Reserve management
- **NRIs** — Sending value back to India

## Kerala and Gold Investment

Kerala leads India in per-capita gold purchases due to:
- Higher per capita income
- Large NRI population remitting gold
- Deep cultural association with gold in weddings

## Gold Biscuits vs. Jewellery — Investment Comparison

| Factor | Gold Biscuit | Gold Jewellery |
|--------|-------------|----------------|
| Purity | 24K (99.9%) | 18-22K |
| Making Charges | None | 8-25% |
| Resale Value | Full gold rate | Gold rate only |
| Storage | Easy | Complex |

## Selling Gold Biscuits at Hindustan Gold Company

We buy gold biscuits at **current online market rates** — no deductions for making charges. Simply bring your gold biscuit with its certificate to any of our 89+ branches. Our XRF machines verify purity instantly, and you receive cash immediately.`,
  },

  "value-of-gold": {
    title: "Value of Gold — Complete Guide",
    date: "2023-02-23",
    category: "Gold Price",
    img: `${BASE}/static/img/trusted_gold.jpg`,
    metaDesc: "Learn what determines the value of gold, how purity affects price, and how to get the maximum value when selling gold in India.",
    content: `The value of gold can fluctuate depending on a variety of factors such as supply and demand, interest rates, and global economic conditions. Understanding these factors helps you time your gold sale perfectly.

## Key Factors That Determine Gold Value

### 1. Global Market Conditions
Gold is traded 24/7 on international commodities exchanges. The London Bullion Market Association (LBMA) sets the global benchmark price twice daily.

### 2. US Dollar Exchange Rate
Since gold is priced in USD globally, a weaker rupee means higher gold prices in India. Watch the USD/INR rate to anticipate price movements.

### 3. Government Import Duties
India imposes import duties on gold (currently around 10-15%). These directly increase domestic gold prices above global rates.

### 4. Seasonal Demand
Indian gold demand peaks during:
- **Diwali season** (October-November)
- **Wedding season** (November-February, April-May)
- **Akshaya Tritiya** (April-May)

## Gold Purity and Its Impact on Value

### 24 Karat Gold (999.9 fineness)
- Purest form of gold
- Highest resale value
- Used for investment gold bars and coins

### 22 Karat Gold (916 fineness)
- 91.6% pure gold + 8.4% other metals
- Most common for Indian jewellery
- Slight discount vs. 24K

### 18 Karat Gold (750 fineness)
- 75% pure gold
- Used for diamond-studded jewellery
- Lower resale value per gram

## Why People Sell Gold

1. **Financial emergencies** — Medical expenses, education fees
2. **Better investment opportunities** — Reinvesting in higher-yield assets
3. **Changing preferences** — Old designs replaced with new
4. **Capitalizing on price peaks** — Selling when rates are high
5. **Debt repayment** — Using gold as a financial tool

## Maximizing Your Gold's Value at HGC

We use **XRF (X-Ray Fluorescence)** technology to determine exact purity — no acid tests, no approximations. You get paid for precisely what you own.

**Tips to maximize value:**
- Sell 24K gold separately from 22K and 18K
- Bring certificates if available (increases trust)
- Check MCX gold rate before visiting
- No need to clean gold — XRF reads through surface conditions`,
  },

  "gold-online-rate": {
    title: "Gold Online Rate — How It's Determined",
    date: "2023-02-22",
    category: "Gold Price",
    img: `${BASE}/static/img/side2.webp`,
    metaDesc: "Understand how gold online rates are determined by supply, demand, and currency exchange. Learn how to get the best gold rate when selling.",
    content: `Gold rates are determined by a number of factors including demand and supply, interest rates, inflation expectations, and currency fluctuations. Understanding the online gold rate helps you get the best price when selling.

## What is the "Online Gold Rate"?

The online gold rate refers to the current market price of gold as traded on:
- **MCX (Multi Commodity Exchange)** — India's primary commodities exchange
- **LBMA (London Bullion Market Association)** — Global benchmark
- **COMEX** — US commodities exchange

These rates update continuously throughout the trading day.

## Key Drivers of Gold Online Rate

### Supply and Demand
- Mining output affects global supply
- Indian and Chinese consumer demand is a major price driver
- Central bank purchases significantly impact prices

### Interest Rates
When interest rates are high:
- Opportunity cost of holding gold increases
- Gold prices tend to fall

When interest rates are low:
- Gold becomes more attractive as an investment
- Prices tend to rise

### Dollar Strength
Gold is priced in US dollars globally. A **stronger dollar** makes gold more expensive for non-US buyers, reducing demand and pushing prices down. A **weaker dollar** has the opposite effect.

### Inflation
Gold is a classic inflation hedge. When inflation rises, investors flock to gold, pushing prices up.

## 24K vs. 22K vs. 18K — Online Rate Comparison

Gold rates are quoted per gram for each purity level:
- **24K gold** commands the highest rate (100% pure)
- **22K gold** is approximately 91.6% of the 24K rate
- **18K gold** is approximately 75% of the 24K rate

## Tips for Selling at the Best Online Rate

1. **Monitor MCX** — Check daily gold rate on MCX website
2. **Compare multiple buyers** — Hindustan Gold Company always matches the online rate
3. **Physical > Digital** — Tangible gold gives you direct control and better liquidity
4. **Don't wait too long** — Gold rates are volatile; act when prices are favorable

## Why Hindustan Gold Company Pays Online Rate

We don't pay the lower "jeweller rate." We pay the **current online MCX gold rate** — transparent, verified, and instant. Visit any of our 89+ branches with your gold.`,
  },

  "i-went-to-sell-gold": {
    title: "I Want to Sell Gold — Complete Guide",
    date: "2023-02-09",
    category: "Sell Gold",
    img: `${BASE}/static/img/sell_gold.jpg`,
    metaDesc: "Get immediate estimation of the gold jewellery you want to sell. Complete guide to selling gold at Hindustan Gold Company for the best price.",
    content: `Selling gold can be an emotional decision, but it's also a smart financial move when done right. Hindustan Gold Company makes it simple, transparent, and instant — with zero middlemen.

## Why Sell to Hindustan Gold Company?

"Selling Gold to a Reputed Company Like Hindustan Gold Company would give you the right estimation" without excessive melting charges or hidden deductions.

We offer:
- **Immediate estimation** of your gold jewellery
- **Technology-driven verification** using advanced XRF machines
- **Instant payment** — cash on hand or NEFT bank transfer same day
- **No middleman losses** — direct comparison with local goldsmiths

## The Selling Process — Step by Step

### Step 1: Visit Your Nearest Branch
Walk into any of our 89+ branches. No appointment needed. Bring your gold items and a valid government ID.

### Step 2: Free Gold Evaluation
Our certified evaluators will:
- Check purity using XRF machine (no acid tests)
- Weigh your gold on certified digital scales
- Show you the calculation on screen

### Step 3: Check the Price
We calculate: **Gold Weight × Purity × Current Online Rate = Your Value**

You can verify this against the current MCX gold rate on your phone. We welcome it.

### Step 4: Accept and Receive Cash
If you're happy with the price (most customers are), you receive:
- **Cash payment** immediately at the branch
- **NEFT bank transfer** same day if preferred

## Check Your Gold Value Online

Use our gold price calculator at /check-gold-price to get an estimate before visiting. Input:
- Your state
- Weight of gold
- Purity (18K, 22K, 24K)

This gives you an approximate value based on today's rates.

## What Documents Do You Need?

1. **Aadhaar Card** (preferred) OR
2. **PAN Card** OR
3. **Passport** OR
4. **Driver's License**

That's it. No complex paperwork. No waiting.

## Frequently Asked Questions About Selling Gold

**Can I sell broken or damaged gold?**
Yes! We accept gold in any condition — broken chains, bent rings, old ornaments, scrap gold. Purity and weight are what matter.

**Will I get melting charges deducted?**
No. Hindustan Gold Company does not deduct melting charges. You receive the full value of your gold's purity and weight.

**How is the price calculated?**
Weight (grams) × Purity (%) × Current MCX Rate = Your Gold Value

Contact us at 8088550033 or visit any branch today.`,
  },

  "gold-buyers-near-me": {
    title: "Gold Buyers Near Me — How to Find the Best",
    date: "2024-03-15",
    category: "Gold Buying",
    img: `${BASE}/static/img/Gold-Buyers.webp`,
    metaDesc: "Looking for reliable gold buyers near you? Complete guide to finding trusted gold buyers who offer the best price for your gold with instant cash.",
    content: `Finding a trustworthy gold buyer near you can be challenging. With so many options, it's important to choose a buyer who offers transparency, the best price, and instant payment.

## Why Hindustan Gold Company is the Best Gold Buyer

With **89+ branches across 50+ cities** in 3 states, Hindustan Gold Company is always near you. We've been India's most trusted gold buyer for over 20 years.

### What to Look for in a Gold Buyer

1. **Transparency** — The buyer must show exactly how they evaluate your gold
2. **Technology** — XRF machines for accurate purity testing (not acid tests)
3. **Price** — Current online gold market rates, not local jeweller rates
4. **Instant Payment** — Cash or bank transfer immediately
5. **Reputation** — Verified reviews and track record

## Our Branch Network

**Bengaluru:** RT Nagar, Yelahanka, Majestic, Yeshwanthpur, Gandhi Bazar, JP Nagar, Kengeri, Peenya, Vijaynagar, Bommanahalli, TC Palya

**Other Karnataka Cities:** Mysore, Tumkuru, Hassan, Mangalore, Shivamogga, Davanagere, Bellary, Gulbarga (Kalaburagi), Sindhanur, Chikkaballapur, Hubli

## How to Find Your Nearest Branch

1. Visit our Branches page on this website
2. Call **8088550033** — we'll direct you to the nearest branch
3. WhatsApp **+919741637635** for quick guidance

## The Hindustan Gold Company Difference

| Feature | HGC | Local Jeweller |
|---------|-----|---------------|
| Pricing | Online MCX rate | 3-5% below market |
| Purity Test | XRF Technology | Acid test |
| Payment | Instant cash | May delay |
| Transparency | Full visibility | Limited |
| Certification | ISO 9001–2015 | Varies |

Get the best price for your gold today. Visit your nearest branch.`,
  },

  "release-pledged-gold-near-me": {
    title: "How to Release Pledged Gold Near Me",
    date: "2024-03-10",
    category: "Pledged Gold",
    img: `${BASE}/static/img/door_step_gold.jpg`,
    metaDesc: "Learn how Hindustan Gold Company helps you release your pledged gold from banks and NBFCs quickly and get instant cash.",
    content: `If you have gold pledged at a bank, NBFC, or moneylender, you may be struggling with high interest rates. Hindustan Gold Company can help you release your pledged gold and get the best market price.

## What is Pledged Gold?

Pledged gold is gold you've given as collateral for a loan. When repayment becomes difficult, the gold continues accumulating interest — often making the situation worse over time.

## How Hindustan Gold Company Helps

We offer a **streamlined process** to retrieve gold pledged to banks or private lenders, avoiding substantial interest charges.

### The Process:

1. **Visit with your pledge slip** — Bring the original pledge document from the bank/NBFC + government ID
2. **We arrange the release** — Our team coordinates with the institution
3. **Instant valuation** — XRF purity check + weight measurement
4. **Best market price** — You receive current online gold rate in cash

## Banks and NBFCs We Work With

We help release gold pledged at:
- State Bank of India (SBI)
- Muthoot Finance
- Manappuram Finance
- HDFC Bank
- ICICI Bank
- Other banks and private moneylenders

## Why Choose Hindustan Gold Company?

- **Same-day process** in most cases
- **We handle all documentation**
- **Best gold rate** — current online market price
- **No hidden charges**
- **Experienced team** — 20+ years in gold buying

## Documents Required

1. Original pledge slip from bank/NBFC
2. Aadhaar Card or valid government ID
3. Any previous correspondence from the institution

Call **8088550033** to know more about releasing your pledged gold today.`,
  },

  "sell-gold-for-cash": {
    title: "How to Sell Gold for Cash — Complete Guide",
    date: "2024-03-05",
    category: "Sell Gold",
    img: `${BASE}/static/img/sell_gold.jpg`,
    metaDesc: "Complete guide on how to sell gold for cash at Hindustan Gold Company. Transparent process, instant payment, best market rate guaranteed.",
    content: `Selling gold for the best price requires choosing the right buyer. This guide will help you maximize your gold's value.

## Understanding Your Gold's Value

Gold value = **Weight (grams) × Purity (%) × Current Market Rate**

Check today's rate at our gold price calculator on this website.

## Step-by-Step: Sell Gold at Hindustan Gold Company

### Step 1: Walk In
Visit any of our **89+ branches**. No appointment needed. Bring your gold and a valid ID.

### Step 2: Free Purity Test
XRF machine analysis — 100% accurate, completely free, done in front of you. No acid tests.

### Step 3: Weight Check
Certified digital scales with full visibility. You see the exact weight displayed.

### Step 4: Price Calculation
We show you: Weight × Purity × Current MCX Rate = Your Value. You can verify with live MCX rate on your phone.

### Step 5: Instant Cash
Accept the price → receive cash immediately. Or NEFT bank transfer same day.

## Tips to Get the Best Price

1. **Know the current rate** — Check MCX before visiting
2. **Separate different purities** — 24K, 22K, 18K separately
3. **Don't clean your gold** — XRF reads through surface conditions
4. **Compare** — We always match the online rate
5. **Bring receipts** if available (not required but helpful)

Call us at **8088550033** today.`,
  },

  "cash-for-gold-near-me": {
    title: "Cash for Gold Near Me — Instant Payment",
    date: "2024-02-28",
    category: "Cash for Gold",
    img: `${BASE}/static/img/Gold-Buyers.webp`,
    metaDesc: "Get instant cash for your gold at Hindustan Gold Company. 89+ branches, best rates, transparent process, same-day payment.",
    content: `Looking for "cash for gold near me"? Hindustan Gold Company is your answer — **89+ branches, instant cash, best rates**.

## Why Hindustan Gold Company for Cash for Gold?

### Instant Cash Payment
We pay immediately — cash in hand or NEFT transfer same day.

### Best Rates Always
We pay the current **online MCX gold rate** — not the local jeweller rate. That's typically 3-5% more.

### Transparent Process
Full visibility at every step. You watch the XRF purity check, weight measurement, and price calculation.

### Trusted for 20+ Years
ISO 9001–2015 certified. 4,84,039+ satisfied customers. 89+ branches across India.

## What Gold Do We Accept?

✓ Gold jewellery (any condition — new, old, broken)
✓ Gold coins and biscuits
✓ Gold bars
✓ Old ornaments
✓ Scrap gold
✓ Damaged or bent gold

## Find a Branch Near You

**Bengaluru:** RT Nagar, Yelahanka, Majestic, Yeshwanthpur, Gandhi Bazar, JP Nagar, Kengeri, Peenya, Vijaynagar

**Karnataka:** Mysore, Mangalore, Hubli, Hassan, Shivamogga, Tumkuru, Davanagere, Bellary, Gulbarga, Sindhanur, Chikkaballapur

Call **8088550033** or WhatsApp **+919741637635** to find the nearest branch today.`,
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | Hindustan Gold Company Blog`,
    description: post.metaDesc,
    alternates: { canonical: `https://hindustangoldcompany.com/blog/${slug}` },
    openGraph: { title: post.title, description: post.metaDesc, images: [post.img] },
  };
}

function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let inTable = false;
  let tableRows: string[][] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("|")) {
      if (!inTable) inTable = true;
      if (!line.includes("---")) {
        const cells = line.split("|").filter(c => c.trim());
        tableRows.push(cells.map(c => c.trim()));
      }
      continue;
    } else if (inTable) {
      inTable = false;
      if (tableRows.length > 0) {
        elements.push(
          <div key={`table-${i}`} className="overflow-x-auto my-4">
            <table className="w-full border border-gray-200 rounded-lg overflow-hidden text-sm">
              <thead className="bg-[#C8102E] text-white">
                <tr>{tableRows[0].map((c, j) => <th key={j} className="px-4 py-2 text-left">{c}</th>)}</tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {tableRows.slice(1).map((row, ri) => (
                  <tr key={ri} className="hover:bg-gray-50">
                    {row.map((c, ci) => <td key={ci} className="px-4 py-2 text-gray-700">{c}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        tableRows = [];
      }
    }

    if (line.startsWith("## ")) {
      elements.push(<h2 key={i} className="text-2xl font-bold text-gray-900 mt-8 mb-3">{line.slice(3)}</h2>);
    } else if (line.startsWith("### ")) {
      elements.push(<h3 key={i} className="text-xl font-bold text-gray-900 mt-6 mb-2">{line.slice(4)}</h3>);
    } else if (line.startsWith("- **")) {
      const match = line.match(/- \*\*(.+?)\*\* — (.+)/);
      if (match) {
        elements.push(<li key={i} className="text-gray-700 ml-4 mb-1"><strong className="text-gray-900">{match[1]}</strong> — {match[2]}</li>);
      } else {
        elements.push(<li key={i} className="text-gray-700 ml-4 mb-1">{line.slice(2)}</li>);
      }
    } else if (line.startsWith("- ")) {
      elements.push(<li key={i} className="text-gray-700 ml-4 mb-1 list-disc">{line.slice(2)}</li>);
    } else if (line.startsWith("✓ ")) {
      elements.push(<li key={i} className="text-gray-700 ml-4 mb-1 flex items-center gap-2"><span className="text-green-600 font-bold">✓</span>{line.slice(2)}</li>);
    } else if (line.match(/^\d+\. /)) {
      elements.push(<li key={i} className="text-gray-700 ml-4 mb-1 list-decimal">{line.replace(/^\d+\. /, "")}</li>);
    } else if (!line.trim()) {
      elements.push(<div key={i} className="h-3" />);
    } else {
      // Handle **bold** inline
      const parts = line.split(/\*\*(.+?)\*\*/);
      if (parts.length > 1) {
        elements.push(
          <p key={i} className="text-gray-700 leading-relaxed">
            {parts.map((p, pi) => pi % 2 === 0 ? p : <strong key={pi} className="text-gray-900 font-semibold">{p}</strong>)}
          </p>
        );
      } else {
        elements.push(<p key={i} className="text-gray-700 leading-relaxed">{line}</p>);
      }
    }
  }
  return elements;
}

// Need React for JSX
import React from "react";

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts[slug];
  if (!post) notFound();

  const relatedPosts = Object.entries(blogPosts)
    .filter(([s]) => s !== slug)
    .slice(0, 3)
    .map(([s, p]) => ({ slug: s, ...p }));

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1a1a1a] to-[#3d0000] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-block bg-[#C8102E] text-white text-xs font-bold px-3 py-1 rounded-full">{post.category}</span>
            <span className="text-gray-400 text-sm flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">{post.title}</h1>
          <p className="text-gray-400 mt-2 text-sm">By Hindustan Gold Company</p>
        </div>
      </section>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={post.img} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </div>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose-custom space-y-2 text-base">
            {renderContent(post.content)}
          </div>

          {/* CTA */}
          <div className="mt-12 p-6 bg-gradient-to-br from-[#C8102E]/5 to-[#D4A843]/5 rounded-2xl border border-[#C8102E]/15">
            <h3 className="text-xl font-bold text-gray-900">Ready to Sell Your Gold?</h3>
            <p className="text-gray-600 mt-2 text-sm">Get the best price today with Hindustan Gold Company — instant cash, transparent process.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/check-gold-price" className="bg-[#C8102E] hover:bg-[#a00d25] text-white font-bold px-5 py-2.5 rounded-lg text-sm transition-colors">
                Calculate Gold Price
              </Link>
              <Link href="/branches" className="border border-[#C8102E] text-[#C8102E] hover:bg-[#C8102E] hover:text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors">
                Find Branch Near Me
              </Link>
              <a href="tel:08088550033" className="border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors">
                📞 8088550033
              </a>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-12">
            <h2 className="text-xl font-bold text-gray-900 mb-5">Related Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedPosts.map(({ slug: s, title, category, img }) => (
                <Link key={s} href={`/blog/${s}`} className="group block rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="relative h-32 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-3">
                    <span className="text-xs text-[#C8102E] font-medium">{category}</span>
                    <p className="text-sm font-semibold text-gray-900 mt-1 line-clamp-2 group-hover:text-[#C8102E] transition-colors">{title}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
