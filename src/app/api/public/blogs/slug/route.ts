import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db/mongoose";
import { Blog } from "@/models/Blog";

export const revalidate = 60;

export async function GET(req: NextRequest) {
  const slug = req.nextUrl.searchParams.get("slug");
  if (!slug) return NextResponse.json({ blog: null });

  try {
    await connectDB();
    const blog = await Blog.findOne({ slug, isPublished: true }).lean();
    return NextResponse.json({ blog });
  } catch (error) {
    console.error("Public blog slug error:", error);
    return NextResponse.json({ blog: null });
  }
}
