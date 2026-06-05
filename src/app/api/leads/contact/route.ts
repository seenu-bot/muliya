import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db/mongoose";
import { Lead } from "@/models/Lead";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !phone || !subject) {
      return NextResponse.json({ error: "Name, phone, and subject are required" }, { status: 400 });
    }

    await connectDB();

    const lead = await Lead.create({
      type: "contact",
      name: name.trim(),
      email: email?.trim(),
      phone: phone.trim(),
      subject: subject.trim(),
      message: message?.trim(),
      status: "new",
    });

    console.log("✅ Contact lead saved:", lead._id);
    return NextResponse.json({ success: true, message: "Message sent successfully", id: lead._id });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to submit. Please try again." }, { status: 500 });
  }
}
