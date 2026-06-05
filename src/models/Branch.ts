import mongoose, { Schema, Document } from "mongoose";

export interface IBranch extends Document {
  name: string;
  fullName: string;
  city: string;
  state: string;
  address: string;
  phone: string;
  email: string;
  mapsLink?: string;
  img?: string;
  mapImg?: string;
  isActive: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const BranchSchema = new Schema<IBranch>(
  {
    name: { type: String, required: true, trim: true },
    fullName: { type: String, required: true, trim: true },
    city: { type: String, required: true, trim: true },
    state: { type: String, default: "Karnataka", trim: true },
    address: { type: String, required: true, trim: true },
    phone: { type: String, default: "8088550033" },
    email: { type: String, default: "info@hindustangoldcompany.com" },
    mapsLink: { type: String },
    img: { type: String },
    mapImg: { type: String },
    isActive: { type: Boolean, default: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const Branch = mongoose.models.Branch ?? mongoose.model<IBranch>("Branch", BranchSchema);
