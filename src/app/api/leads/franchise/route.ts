import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db/mongoose";
import { Lead } from "@/models/Lead";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, city, investment, message } = body;

    if (!name || !phone || !city) {
      return NextResponse.json({ error: "Name, phone, and city are required" }, { status: 400 });
    }

    await connectDB();

    const lead = await Lead.create({
      type: "franchise",
      name: name.trim(),
      email: email?.trim(),
      phone: phone.trim(),
      city: city.trim(),
      investment: investment?.trim(),
      subject: `Franchise Enquiry: ${city}`,
      message: message?.trim(),
      status: "new",
    });

    console.log("✅ Franchise enquiry saved:", lead._id);
    return NextResponse.json({ success: true, message: "Enquiry submitted successfully", id: lead._id });
  } catch (error) {
    console.error("Franchise form error:", error);
    return NextResponse.json({ error: "Failed to submit. Please try again." }, { status: 500 });
  }
}
