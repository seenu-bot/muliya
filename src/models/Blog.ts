import mongoose, { Schema, Document } from "mongoose";

export interface IBlog extends Document {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  featuredImage?: string;
  metaTitle?: string;
  metaDesc?: string;
  isPublished: boolean;
  publishedAt?: Date;
  author: string;
  readTime?: string;
  createdAt: Date;
  updatedAt: Date;
}

const BlogSchema = new Schema<IBlog>(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true, lowercase: true },
    excerpt: { type: String, required: true, trim: true },
    content: { type: String, required: true },
    category: { type: String, required: true, trim: true },
    tags: [{ type: String, trim: true }],
    featuredImage: { type: String },
    metaTitle: { type: String, trim: true },
    metaDesc: { type: String, trim: true },
    isPublished: { type: Boolean, default: false },
    publishedAt: { type: Date },
    author: { type: String, default: "Hindustan Gold Company" },
    readTime: { type: String },
  },
  { timestamps: true }
);

export const Blog = mongoose.models.Blog ?? mongoose.model<IBlog>("Blog", BlogSchema);
