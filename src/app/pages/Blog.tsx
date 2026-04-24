import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const blogPosts = [
  {
    slug: "gold-buying-guide-2026",
    title: "Complete Guide to Buying Gold Jewelry in 2026",
    excerpt:
      "Everything you need to know about gold purity, pricing, and making the right choice for your investment.",
    category: "Guides",
    date: "March 15, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1602752250055-5ebb552fc3ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBnb2xkJTIwamV3ZWxyeSUyMGRpYW1vbmRzfGVufDF8fHx8MTc3MzgyMjY5OHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    slug: "diamond-certification-explained",
    title: "Understanding Diamond Certifications: What You Need to Know",
    excerpt:
      "Learn about the 4Cs of diamonds and how certification ensures you're getting the best value.",
    category: "Education",
    date: "March 12, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1742240439165-60790db1ee93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwcmluZyUyMGx1eHVyeXxlbnwxfHx8fDE3NzM4MjI2OTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    slug: "traditional-vs-modern-jewelry",
    title: "Traditional vs Modern Jewelry: Finding Your Style",
    excerpt:
      "Explore the beauty of traditional craftsmanship and contemporary designs to find what suits you best.",
    category: "Trends",
    date: "March 8, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1755151606128-7ca2f97e46ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwbmVja2xhY2UlMjBlbGVnYW50fGVufDF8fHx8MTc3MzgyMjY5OHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    slug: "jewelry-care-tips",
    title: "Essential Jewelry Care Tips to Keep Your Pieces Sparkling",
    excerpt:
      "Maintain the brilliance of your precious jewelry with these expert care and cleaning tips.",
    category: "Care",
    date: "March 5, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1760786933035-32da5ebb881c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwYmFuZ2xlcyUyMHRyYWRpdGlvbmFsfGVufDF8fHx8MTc3MzgyMjY5OXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    slug: "gold-savings-scheme-benefits",
    title: "How Our Gold Savings Scheme Can Help You Save Smart",
    excerpt:
      "Discover the benefits of our gold savings scheme and how it can help you achieve your jewelry dreams.",
    category: "Savings",
    date: "March 1, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1629224316810-9d8805b95e76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwZWFycmluZ3MlMjBlbGVnYW50fGVufDF8fHx8MTc3MzgyMjcwMHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    slug: "bridal-jewelry-trends-2026",
    title: "Top Bridal Jewelry Trends for 2026 Weddings",
    excerpt:
      "From traditional mangalsutras to modern statement pieces, explore the hottest bridal jewelry trends.",
    category: "Bridal",
    date: "February 28, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1760786933663-327c858d5434?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwamV3ZWxyeSUyMHN0b3JlfGVufDF8fHx8MTc3MzgyMjY5OXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

const categories = ["All", "Guides", "Education", "Trends", "Care", "Savings", "Bridal"];

export function Blog() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-600 to-amber-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-serif mb-4">Blog & Journal</h1>
          <p className="text-xl opacity-90">
            Insights, guides, and inspiration for your jewelry journey
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((category) => (
            <Button key={category} variant="outline" size="sm">
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        <Card className="mb-12 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="h-64 lg:h-auto">
              <ImageWithFallback
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-8 flex flex-col justify-center">
              <Badge className="w-fit mb-4">{blogPosts[0].category}</Badge>
              <h2 className="text-3xl font-serif text-gray-900 mb-4">
                {blogPosts[0].title}
              </h2>
              <p className="text-gray-700 mb-4">{blogPosts[0].excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {blogPosts[0].date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {blogPosts[0].readTime}
                </div>
              </div>
              <Button asChild>
                <Link href={`/blog/${blogPosts[0].slug}`}>
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </CardContent>
          </div>
        </Card>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge className="mb-3">{post.category}</Badge>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-700 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
