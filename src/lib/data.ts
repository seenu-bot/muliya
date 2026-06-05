/**
 * Server-side data helpers — query MongoDB directly from server components.
 * Never import this in client components ("use client").
 */
import { connectDB } from "@/lib/db/mongoose";

// ── Branches ──────────────────────────────────────────────────────────────
export async function getBranches() {
  try {
    await connectDB();
    const { Branch } = await import("@/models/Branch");
    const rows = await Branch.find({ isActive: true }).sort({ order: 1, createdAt: 1 }).lean();
    return rows as any[];
  } catch { return []; }
}

// ── Blog posts ─────────────────────────────────────────────────────────────
export async function getPublishedBlogs() {
  try {
    await connectDB();
    const { Blog } = await import("@/models/Blog");
    const rows = await Blog.find({ isPublished: true })
      .sort({ publishedAt: -1, createdAt: -1 })
      .select("-content")
      .lean();
    return rows as any[];
  } catch { return []; }
}

export async function getBlogBySlug(slug: string) {
  try {
    await connectDB();
    const { Blog } = await import("@/models/Blog");
    const blog = await Blog.findOne({ slug, isPublished: true }).lean();
    return blog as any;
  } catch { return null; }
}

// ── FAQs ───────────────────────────────────────────────────────────────────
export async function getActiveFAQs() {
  try {
    await connectDB();
    const { FAQ } = await import("@/models/FAQ");
    const rows = await FAQ.find({ isActive: true }).sort({ order: 1, createdAt: 1 }).lean();
    return rows as any[];
  } catch { return []; }
}

// ── Gold Prices ────────────────────────────────────────────────────────────
export async function getLatestGoldPrices() {
  try {
    await connectDB();
    const { GoldPrice } = await import("@/models/GoldPrice");
    const carats = ["24K", "22K", "18K"];
    const prices = await Promise.all(
      carats.map((c) => GoldPrice.findOne({ carat: c }).sort({ date: -1 }).lean())
    );
    return prices.filter(Boolean) as any[];
  } catch { return []; }
}

// ── Dashboard stats ────────────────────────────────────────────────────────
export async function getDashboardStats() {
  try {
    await connectDB();
    const [{ Lead }, { Branch }, { Blog }, { FAQ }] = await Promise.all([
      import("@/models/Lead"),
      import("@/models/Branch"),
      import("@/models/Blog"),
      import("@/models/FAQ"),
    ]);
    const [totalLeads, newLeads, branches, publishedBlogs, activeFAQs, recentLeads] = await Promise.all([
      Lead.countDocuments(),
      Lead.countDocuments({ status: "new" }),
      Branch.countDocuments({ isActive: true }),
      Blog.countDocuments({ isPublished: true }),
      FAQ.countDocuments({ isActive: true }),
      Lead.find().sort({ createdAt: -1 }).limit(5)
        .select("name phone type subject status createdAt").lean(),
    ]);
    return { stats: { totalLeads, newLeads, branches, publishedBlogs, activeFAQs }, recentLeads };
  } catch {
    return { stats: { totalLeads: 0, newLeads: 0, branches: 0, publishedBlogs: 0, activeFAQs: 0 }, recentLeads: [] };
  }
}
