import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db/mongoose";
import { requireAdmin } from "@/lib/auth";
import { Lead } from "@/models/Lead";
import { Branch } from "@/models/Branch";
import { Blog } from "@/models/Blog";
import { FAQ } from "@/models/FAQ";

export async function GET(req: NextRequest) {
  const admin = requireAdmin(req);
  if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    await connectDB();

    const [totalLeads, newLeads, branches, publishedBlogs, activeFAQs] = await Promise.all([
      Lead.countDocuments(),
      Lead.countDocuments({ status: "new" }),
      Branch.countDocuments({ isActive: true }),
      Blog.countDocuments({ isPublished: true }),
      FAQ.countDocuments({ isActive: true }),
    ]);

    const recentLeads = await Lead.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .select("name phone type subject status createdAt");

    return NextResponse.json({
      stats: { totalLeads, newLeads, branches, publishedBlogs, activeFAQs },
      recentLeads,
    });
  } catch (error) {
    console.error("Dashboard error:", error);
    return NextResponse.json({ error: "Failed to fetch dashboard data" }, { status: 500 });
  }
}
