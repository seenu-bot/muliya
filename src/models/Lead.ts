import mongoose, { Schema, Document } from "mongoose";

export interface ILead extends Document {
  type: "contact" | "career" | "franchise" | "gold_valuation";
  name: string;
  email?: string;
  phone: string;
  subject?: string;
  message?: string;
  position?: string;   // career
  city?: string;       // franchise
  investment?: string; // franchise
  status: "new" | "contacted" | "resolved" | "spam";
  createdAt: Date;
  updatedAt: Date;
}

const LeadSchema = new Schema<ILead>(
  {
    type: { type: String, enum: ["contact", "career", "franchise", "gold_valuation"], required: true },
    name: { type: String, required: true, trim: true },
    email: { type: String, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    subject: { type: String, trim: true },
    message: { type: String, trim: true },
    position: { type: String, trim: true },
    city: { type: String, trim: true },
    investment: { type: String, trim: true },
    status: { type: String, enum: ["new", "contacted", "resolved", "spam"], default: "new" },
  },
  { timestamps: true }
);

export const Lead = mongoose.models.Lead ?? mongoose.model<ILead>("Lead", LeadSchema);
