import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db/mongoose";
import { FAQ } from "@/models/FAQ";

export const revalidate = 60;

export async function GET() {
  try {
    await connectDB();
    const faqs = await FAQ.find({ isActive: true }).sort({ order: 1, createdAt: 1 }).lean();
    return NextResponse.json({ faqs, source: "db" });
  } catch (error) {
    console.error("Public faqs error:", error);
    return NextResponse.json({ faqs: [], source: "error" });
  }
}
