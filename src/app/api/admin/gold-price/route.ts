import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db/mongoose";
import { requireAdmin } from "@/lib/auth";
import { GoldPrice } from "@/models/GoldPrice";

export async function GET() {
  try {
    await connectDB();
    // Get latest price for each carat
    const carats = ["24K", "22K", "18K"];
    const prices = await Promise.all(
      carats.map((c) => GoldPrice.findOne({ carat: c }).sort({ date: -1 }))
    );
    return NextResponse.json({ prices: prices.filter(Boolean) });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch gold prices" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const admin = requireAdmin(req);
  if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    await connectDB();
    const data = await req.json(); // [{ carat, pricePerGram, state }]
    const entries = Array.isArray(data) ? data : [data];
    const saved = await GoldPrice.insertMany(entries.map((e) => ({ ...e, date: new Date() })));
    return NextResponse.json({ success: true, saved }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to save gold prices" }, { status: 500 });
  }
}
