"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function BlogPost() {
  const params = useParams<{ slug?: string | string[] }>();
  const slug = Array.isArray(params?.slug) ? params.slug[0] : params?.slug;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/blog">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </Button>

        <article className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Header Image */}
          <div className="h-96">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1602752250055-5ebb552fc3ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBnb2xkJTIwamV3ZWxyeSUyMGRpYW1vbmRzfGVufDF8fHx8MTc3MzgyMjY5OHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Blog post"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            <Badge className="mb-4">Guides</Badge>

            <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
              Complete Guide to Buying Gold Jewelry in 2026
            </h1>

            <div className="flex items-center gap-6 text-gray-600 mb-8 pb-8 border-b">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>March 15, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>8 min read</span>
              </div>
              <Button variant="ghost" size="sm" className="ml-auto">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-6">
                Buying gold jewelry is both an emotional and financial investment. Whether
                you're shopping for a wedding, festival, or just treating yourself, making
                an informed decision is crucial.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                Understanding Gold Purity
              </h2>
              <p className="text-gray-700 mb-4">
                Gold purity is measured in karats (K). Pure gold is 24K, but it's too soft
                for jewelry. Here's what you need to know:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>
                  <strong>24K Gold:</strong> 99.9% pure gold, ideal for investment but too
                  soft for daily wear
                </li>
                <li>
                  <strong>22K Gold:</strong> 91.6% pure gold, perfect for traditional
                  Indian jewelry
                </li>
                <li>
                  <strong>18K Gold:</strong> 75% pure gold, great balance of purity and
                  durability
                </li>
                <li>
                  <strong>14K Gold:</strong> 58.3% pure gold, very durable for everyday
                  wear
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                BIS Hallmarking: Your Assurance of Quality
              </h2>
              <p className="text-gray-700 mb-4">
                Always look for BIS (Bureau of Indian Standards) hallmarking on gold
                jewelry. This ensures:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Certified purity of the gold</li>
                <li>Authenticity of the jewelry piece</li>
                <li>Protection against fraud</li>
                <li>Fair pricing based on actual gold content</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                Making Charges: What to Expect
              </h2>
              <p className="text-gray-700 mb-6">
                Making charges vary based on design complexity, craftsmanship, and the
                jeweler. Typically, they range from 8% to 25% of the gold value. At
                Muliya, we maintain transparent pricing with competitive making charges.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                Tips for First-Time Buyers
              </h2>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-6">
                <li>Research current gold rates before shopping</li>
                <li>Always ask for BIS certification</li>
                <li>Compare making charges at different stores</li>
                <li>Get a detailed invoice with all charges mentioned</li>
                <li>Check the exchange and return policy</li>
                <li>Consider gold savings schemes for better value</li>
              </ol>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                Investment vs. Fashion
              </h2>
              <p className="text-gray-700 mb-6">
                If you're buying gold as an investment, opt for higher purity (22K or 24K)
                with minimal making charges. For fashion and daily wear, 18K offers a
                great balance of beauty and durability.
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-8">
                <p className="text-gray-800">
                  <strong>Pro Tip:</strong> Consider joining our Gold Savings Scheme to
                  make your purchase more affordable while earning bonus benefits. It's a
                  smart way to save and invest in your dream jewelry.
                </p>
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                Final Thoughts
              </h2>
              <p className="text-gray-700 mb-6">
                Buying gold jewelry should be an enjoyable experience. At Muliya, we're
                committed to guiding you through every step, ensuring you make a choice
                you'll treasure forever. Visit our stores or shop online with complete
                confidence.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t">
              <h3 className="text-xl font-semibold mb-4">Share this article</h3>
              <div className="flex gap-4">
                <Button variant="outline">Facebook</Button>
                <Button variant="outline">Twitter</Button>
                <Button variant="outline">WhatsApp</Button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
