import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db/mongoose";
import { Branch } from "@/models/Branch";

export const revalidate = 60; // revalidate every 60 seconds

export async function GET() {
  try {
    await connectDB();
    const branches = await Branch.find({ isActive: true }).sort({ order: 1, createdAt: 1 }).lean();
    return NextResponse.json({ branches, source: "db" });
  } catch (error) {
    console.error("Public branches error:", error);
    return NextResponse.json({ branches: [], source: "error" });
  }
}
