import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db/mongoose";
import { Blog } from "@/models/Blog";

export const revalidate = 60;

export async function GET() {
  try {
    await connectDB();
    const blogs = await Blog.find({ isPublished: true })
      .sort({ publishedAt: -1, createdAt: -1 })
      .select("-content")
      .lean();
    return NextResponse.json({ blogs, source: "db" });
  } catch (error) {
    console.error("Public blogs error:", error);
    return NextResponse.json({ blogs: [], source: "error" });
  }
}
