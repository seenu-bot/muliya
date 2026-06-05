import mongoose, { Schema, Document } from "mongoose";

export interface ISetting extends Document {
  key: string;
  value: string;
  group: string;
  label: string;
  createdAt: Date;
  updatedAt: Date;
}

const SettingSchema = new Schema<ISetting>(
  {
    key: { type: String, required: true, unique: true, trim: true },
    value: { type: String, required: true },
    group: { type: String, default: "general" },
    label: { type: String, trim: true },
  },
  { timestamps: true }
);

export const Setting = mongoose.models.Setting ?? mongoose.model<ISetting>("Setting", SettingSchema);
