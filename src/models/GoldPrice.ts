import mongoose, { Schema, Document } from "mongoose";

export interface IGoldPrice extends Document {
  carat: "24K" | "22K" | "18K";
  pricePerGram: number;
  state: string;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
}

const GoldPriceSchema = new Schema<IGoldPrice>(
  {
    carat: { type: String, enum: ["24K", "22K", "18K"], required: true },
    pricePerGram: { type: Number, required: true },
    state: { type: String, default: "Karnataka" },
    date: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export const GoldPrice = mongoose.models.GoldPrice ?? mongoose.model<IGoldPrice>("GoldPrice", GoldPriceSchema);
