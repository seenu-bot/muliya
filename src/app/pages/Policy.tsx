"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

const policies = {
  terms: {
    title: "Terms & Conditions",
    content: [
      {
        heading: "Introduction",
        text: "Welcome to Muliya Gold & Diamonds. By accessing and using our website and services, you agree to comply with and be bound by the following terms and conditions.",
      },
      {
        heading: "Product Information",
        text: "We strive to provide accurate product descriptions, images, and pricing. However, we do not warrant that product descriptions or other content is accurate, complete, reliable, current, or error-free.",
      },
      {
        heading: "Pricing and Payment",
        text: "All prices are listed in Indian Rupees (INR) and are inclusive of applicable taxes. We reserve the right to change prices without prior notice. Payment must be made in full before delivery of products.",
      },
      {
        heading: "Orders and Availability",
        text: "We reserve the right to refuse or cancel any order for any reason. In case of product unavailability, we will notify you and offer suitable alternatives or a full refund.",
      },
      {
        heading: "Intellectual Property",
        text: "All content on this website, including text, graphics, logos, and images, is the property of Muliya Gold & Diamonds and is protected by copyright laws.",
      },
    ],
  },
  privacy: {
    title: "Privacy Policy",
    content: [
      {
        heading: "Information Collection",
        text: "We collect personal information such as name, email, phone number, and address when you register, place an order, or subscribe to our newsletter.",
      },
      {
        heading: "Use of Information",
        text: "Your information is used to process orders, improve customer service, send periodic emails, and personalize your shopping experience.",
      },
      {
        heading: "Data Protection",
        text: "We implement appropriate security measures to protect your personal information. Your data is stored securely and is never shared with third parties without your consent.",
      },
      {
        heading: "Cookies",
        text: "Our website uses cookies to enhance user experience, analyze site traffic, and personalize content. You can choose to disable cookies through your browser settings.",
      },
      {
        heading: "Your Rights",
        text: "You have the right to access, update, or delete your personal information at any time by contacting our customer service team.",
      },
    ],
  },
  return: {
    title: "Return & Exchange Policy",
    content: [
      {
        heading: "Return Period",
        text: "Products can be returned within 7 days of delivery for a full refund or exchange. The product must be in original condition with all tags, certificates, and packaging intact.",
      },
      {
        heading: "Exchange Policy",
        text: "We offer lifetime exchange on all gold jewelry. You can exchange your purchase for any other product of equal or higher value, subject to current gold rates and making charges.",
      },
      {
        heading: "Conditions for Return",
        text: "Products must be unworn, unused, and in their original condition. Customized or personalized jewelry cannot be returned or exchanged unless defective.",
      },
      {
        heading: "Refund Process",
        text: "Refunds will be processed within 7-10 business days after we receive the returned product. The amount will be credited to the original payment method.",
      },
      {
        heading: "Defective Products",
        text: "If you receive a defective or damaged product, please contact us immediately. We will arrange for a replacement or full refund at no additional cost.",
      },
    ],
  },
  shipping: {
    title: "Shipping Information",
    content: [
      {
        heading: "Shipping Coverage",
        text: "We ship across India to all serviceable pin codes. International shipping is currently not available.",
      },
      {
        heading: "Delivery Time",
        text: "Orders are typically delivered within 5-7 business days for metro cities and 7-10 business days for other locations.",
      },
      {
        heading: "Shipping Charges",
        text: "Free shipping on all orders above ₹50,000. For orders below this amount, a flat shipping fee of ₹500 applies.",
      },
      {
        heading: "Order Tracking",
        text: "Once your order is shipped, you will receive a tracking number via email and SMS to track your shipment in real-time.",
      },
      {
        heading: "Insurance",
        text: "All shipments are fully insured for the invoice value. In case of loss or damage during transit, we will provide a replacement at no additional cost.",
      },
    ],
  },
  "gold-scheme": {
    title: "Gold Savings Scheme",
    content: [
      {
        heading: "How It Works",
        text: "Pay a fixed monthly amount for 11 months, and Muliya will add one month's contribution as a bonus in the 12th month. Use this accumulated value to purchase jewelry from our collection.",
      },
      {
        heading: "Eligibility",
        text: "The scheme is open to all individuals above 18 years of age. You can enroll at any of our stores or online.",
      },
      {
        heading: "Monthly Contribution",
        text: "You can choose from monthly contribution plans ranging from ₹5,000 to ₹50,000. The amount remains fixed throughout the scheme period.",
      },
      {
        heading: "Benefits",
        text: "In addition to the bonus month, scheme members enjoy special discounts on making charges and exclusive access to new collections.",
      },
      {
        heading: "Redemption",
        text: "The accumulated amount can be redeemed for jewelry purchase after completing 11 months. Making charges will apply as per current rates.",
      },
      {
        heading: "Terms and Conditions",
        text: "Missed payments can be made in the following month. Premature withdrawal is allowed with no bonus benefit. The scheme is non-transferable.",
      },
    ],
  },
};

export function Policy() {
  const params = useParams<{ type?: string | string[] }>();
  const type = Array.isArray(params?.type) ? params.type[0] : params?.type;
  const policy = policies[type as keyof typeof policies];

  if (!policy) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif text-gray-900 mb-4">Policy Not Found</h1>
          <Button asChild>
            <Link href="/">Go Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </Button>

        <Card>
          <CardContent className="p-8 md:p-12">
            <h1 className="text-4xl font-serif text-gray-900 mb-2">{policy.title}</h1>
            <p className="text-gray-600 mb-8">Last updated: March 18, 2026</p>

            <div className="space-y-8">
              {policy.content.map((section, index) => (
                <div key={index}>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                    {section.heading}
                  </h2>
                  <p className="text-gray-700 leading-relaxed">{section.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t">
              <h3 className="text-xl font-semibold mb-4">Questions?</h3>
              <p className="text-gray-700 mb-4">
                If you have any questions about our policies, please don't hesitate to
                contact us.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="outline">Contact Us</Button>
                <Button variant="outline">Call +91 9876543210</Button>
                <Button variant="outline">Email Support</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Related Policies */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Related Policies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(policies)
              .filter(([key]) => key !== type)
              .slice(0, 4)
              .map(([key, value]) => (
                <Link key={key} href={`/policy/${key}`}>
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <p className="font-medium text-gray-900">{value.title}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
