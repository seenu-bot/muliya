import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db/mongoose";
import { Lead } from "@/models/Lead";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, position, message } = body;

    if (!name || !phone || !position) {
      return NextResponse.json({ error: "Name, phone, and position are required" }, { status: 400 });
    }

    await connectDB();

    const lead = await Lead.create({
      type: "career",
      name: name.trim(),
      email: email?.trim(),
      phone: phone.trim(),
      position: position.trim(),
      subject: `Career Application: ${position}`,
      message: message?.trim(),
      status: "new",
    });

    console.log("✅ Career application saved:", lead._id);
    return NextResponse.json({ success: true, message: "Application submitted successfully", id: lead._id });
  } catch (error) {
    console.error("Career form error:", error);
    return NextResponse.json({ error: "Failed to submit. Please try again." }, { status: 500 });
  }
}
