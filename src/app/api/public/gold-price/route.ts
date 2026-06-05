import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db/mongoose";
import { GoldPrice } from "@/models/GoldPrice";

export const revalidate = 30; // revalidate every 30 seconds (gold price updates frequently)

export async function GET() {
  try {
    await connectDB();
    const carats = ["24K", "22K", "18K"];
    const prices = await Promise.all(
      carats.map((c) => GoldPrice.findOne({ carat: c }).sort({ date: -1 }).lean())
    );
    const result = prices.filter(Boolean);
    return NextResponse.json({ prices: result, source: result.length ? "db" : "empty" });
  } catch (error) {
    console.error("Public gold-price error:", error);
    return NextResponse.json({ prices: [], source: "error" });
  }
}
