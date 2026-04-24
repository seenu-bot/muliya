"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Calendar, ArrowLeft } from "lucide-react";
import { useParams } from "next/navigation";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  image: string;
  content: React.ReactNode;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Free hair donation camp on September 11 for cancer sufferers by \"Seeds of Hope\".",
    excerpt: "Join us in our initiative to support cancer patients through hair donation. Every contribution counts towards bringing hope and confidence to those in need.",
    date: "September 5, 2024",
    slug: "free-hair-donation-camp",
    image: "/images/Seeds-of-Hope-2022-Kannada-b11.jpg",
    content: (
      <div className="space-y-6">
        <p className="text-lg text-gray-700 leading-relaxed">
          Muliya Gold & Diamonds is proud to support the \"Seeds of Hope\" initiative, 
          organizing a free hair donation camp on September 11th for cancer sufferers. 
          This noble cause aims to bring hope and confidence to those battling cancer 
          by providing them with natural hair wigs.
        </p>
        
        <div className="bg-gray-50 p-6 rounded-xl">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Event Details</h3>
          <ul className="space-y-2 text-gray-700">
            <li><strong>Date:</strong> September 11, 2024</li>
            <li><strong>Time:</strong> 10:00 AM - 4:00 PM</li>
            <li><strong>Location:</strong> Muliya Showroom, Puttur</li>
            <li><strong>Organized by:</strong> Seeds of Hope</li>
          </ul>
        </div>

        <p className="text-gray-700 leading-relaxed">
          Hair donation is a beautiful way to support cancer patients who lose their hair 
          during chemotherapy treatment. Your donation can help restore their confidence 
          and bring a smile to their faces during difficult times.
        </p>

        <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden">
          <iframe 
            src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D2032809133572971&show_text=0&width=560" 
            width="100%" 
            height="100%" 
            style={{ border: 'none', overflow: 'hidden' }} 
            scrolling="no" 
            frameBorder="0" 
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          />
        </div>

        <p className="text-gray-700 leading-relaxed">
          We invite everyone to participate in this meaningful event. Whether you choose to 
          donate your hair or simply spread awareness about the cause, every contribution 
          makes a difference in someone's life.
        </p>

        <div className="bg-[#E92247]/5 p-6 rounded-xl border-l-4 border-[#E92247]">
          <p className="text-gray-800 italic">
            \"Every strand of hair donated is a thread of hope woven into someone's life. 
            Join us in making a difference.\"
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed">
          For more information about the hair donation camp and requirements for hair donation, 
          please contact your nearest Muliya showroom or visit our Seeds of Hope partner page.
        </p>
      </div>
    )
  },
  {
    id: "2",
    title: "Muliya Jewels Founder's day – Social Responsibility on the path of Excellence",
    excerpt: "Celebrating our commitment to excellence and giving back to the community. Learn about our initiatives and how we make a difference.",
    date: "August 15, 2024",
    slug: "muliya-jewels-founders-day-social-responsibility-on-the-path-of-excellence",
    image: "/images/muliya-founders-day-featured-b2.jpg",
    content: (
      <div className="space-y-6">
        <p className="text-lg text-gray-700 leading-relaxed">
          Muliya Gold & Diamonds celebrates its Founder's Day with a renewed commitment to 
          social responsibility and excellence. Since 1944, we have believed that true success 
          comes not just from business growth, but from giving back to the community that has 
          supported us for generations.
        </p>

        <div className="bg-gray-50 p-6 rounded-xl">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Social Initiatives</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-[#E92247] rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>Education Support:</strong> Providing scholarships to underprivileged students</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-[#E92247] rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>Healthcare:</strong> Free medical camps and health awareness programs</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-[#E92247] rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>Environmental:</strong> Tree plantation drives and sustainability initiatives</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-[#E92247] rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>Community Welfare:</strong> Supporting local artisans and craftsmen</span>
            </li>
          </ul>
        </div>

        <p className="text-gray-700 leading-relaxed">
          Our Founder's Day celebration is not just about remembering our past, but about 
          committing to a future where Muliya continues to be a force for positive change. 
          We believe that a business should be measured not just by its profits, but by the 
          positive impact it creates in society.
        </p>

        <blockquote className="border-l-4 border-[#E92247] pl-6 py-2 italic text-gray-600 text-lg">
          \"Excellence is not just about creating beautiful jewellery, but about creating 
          beautiful lives in our community.\"
          <footer className="text-sm text-gray-500 mt-2 not-italic">— Muliya Founders</footer>
        </blockquote>

        <p className="text-gray-700 leading-relaxed">
          As we move forward, we remain committed to our core values of integrity, excellence, 
          and social responsibility. We invite our customers and partners to join us in this 
          journey of creating happiness and making a meaningful difference in the lives of 
          those around us.
        </p>
      </div>
    )
  },
  {
    id: "3",
    title: "Why purchasing gold on Akshaya Tritiya is considered as a good fortune?",
    excerpt: "Discover the significance of buying gold on this auspicious day and why it has been a cherished tradition for generations.",
    date: "May 10, 2024",
    slug: "why-purchasing-gold-on-akshaya-tritiya-is-considered-as-a-good-fortune",
    image: "/images/akshaya-tritiya-blog-b3.jpg",
    content: (
      <div className="space-y-6">
        <p className="text-lg text-gray-700 leading-relaxed">
          Akshaya Tritiya, also known as Akti or Akha Teej, is one of the most auspicious days 
          in the Hindu calendar for buying gold. This sacred day, which falls on the third tithi 
          (lunar day) of the bright half (Shukla Paksha) of the Indian month of Vaishakha, 
          holds immense spiritual and cultural significance.
        </p>

        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">The Meaning of Akshaya</h3>
          <p className="text-gray-700 leading-relaxed">
            The word \"Akshaya\" means \"never diminishing\" or \"eternal.\" It is believed that 
            any venture started or investment made on this day will grow and bring prosperity 
            forever. Gold purchased on Akshaya Tritiya is considered to multiply and bring 
            unending wealth and good fortune to the buyer and their family.
          </p>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mt-6">Why Buy Gold on Akshaya Tritiya?</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">1. Spiritual Significance</h4>
            <p className="text-gray-600 text-sm">
              Lord Vishnu and Goddess Lakshmi are worshipped on this day, 
              inviting divine blessings of wealth and prosperity.
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">2. Eternal Wealth</h4>
            <p className="text-gray-600 text-sm">
              Gold bought on this auspicious day is believed to bring never-ending 
              prosperity and financial stability.
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">3. Auspicious Beginnings</h4>
            <p className="text-gray-600 text-sm">
              It is considered an ideal day to start new ventures, make investments, 
              or begin important life events.
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">4. Cultural Tradition</h4>
            <p className="text-gray-600 text-sm">
              This tradition has been passed down through generations, 
              connecting us to our rich heritage and values.
            </p>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed">
          At Muliya Gold & Diamonds, we celebrate Akshaya Tritiya with special collections 
          and offers that honor this beautiful tradition. Our expert craftsmen create 
          exquisite designs that blend traditional significance with contemporary elegance, 
          making your Akshaya Tritiya purchase truly special and meaningful.
        </p>

        <div className="bg-[#E92247]/5 p-6 rounded-xl text-center">
          <p className="text-gray-800 font-medium">
            Visit your nearest Muliya showroom this Akshaya Tritiya and begin your journey 
            of eternal prosperity with our stunning gold collection.
          </p>
        </div>
      </div>
    )
  },
  {
    id: "4",
    title: "Enhance Your Beauty with Traditional Jewellery",
    excerpt: "Explore the timeless elegance of traditional Indian jewellery and how it complements modern fashion while preserving cultural heritage.",
    date: "April 22, 2024",
    slug: "enhance-your-beauty-with-traditional-jewellery",
    image: "/images/Traditional-jewellery-blog-b4.jpg",
    content: (
      <div className="space-y-6">
        <p className="text-lg text-gray-700 leading-relaxed">
          Traditional Indian jewellery is more than just adornment—it's a celebration of 
          heritage, artistry, and timeless beauty. From intricate temple designs to elegant 
          filigree work, each piece tells a story of our rich cultural legacy and skilled 
          craftsmanship passed down through generations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="bg-gradient-to-b from-amber-50 to-yellow-50 p-6 rounded-xl text-center">
            <div className="text-4xl mb-3">🏛️</div>
            <h4 className="font-semibold text-gray-900 mb-2">Temple Jewellery</h4>
            <p className="text-gray-600 text-sm">
              Inspired by temple architecture and deity motifs, perfect for 
              traditional occasions and weddings.
            </p>
          </div>
          <div className="bg-gradient-to-b from-rose-50 to-pink-50 p-6 rounded-xl text-center">
            <div className="text-4xl mb-3">🌸</div>
            <h4 className="font-semibold text-gray-900 mb-2">Filigree Work</h4>
            <p className="text-gray-600 text-sm">
              Delicate metalwork featuring intricate floral and geometric 
              patterns for a graceful look.
            </p>
          </div>
          <div className="bg-gradient-to-b from-purple-50 to-indigo-50 p-6 rounded-xl text-center">
            <div className="text-4xl mb-3">💎</div>
            <h4 className="font-semibold text-gray-900 mb-2">Kundan & Polki</h4>
            <p className="text-gray-600 text-sm">
              Royal Rajasthani craftsmanship with uncut diamonds and 
              precious stones in gold settings.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-900">Styling Traditional Jewellery with Modern Fashion</h3>

        <p className="text-gray-700 leading-relaxed">
          The beauty of traditional Indian jewellery lies in its versatility. Today, 
          fashion-forward women are creatively pairing antique pieces with contemporary 
          outfits, creating unique fusion looks that honor tradition while embracing modern style.
        </p>

        <div className="bg-gray-50 p-6 rounded-xl">
          <h4 className="font-semibold text-gray-900 mb-4">Style Tips:</h4>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-[#E92247] text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">1</span>
              <span><strong>Office Wear:</strong> Pair a delicate temple necklace with a crisp white shirt and saree or suit for elegant professional attire.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-[#E92247] text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">2</span>
              <span><strong>Casual Chic:</strong> Wear statement jhumkas with jeans and a kurta for a trendy Indo-western look.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-[#E92247] text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">3</span>
              <span><strong>Evening Glam:</strong> Layer multiple delicate chains with a cocktail dress for sophisticated evening wear.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-[#E92247] text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">4</span>
              <span><strong>Bridal Elegance:</strong> Complete your bridal look with traditional haarams, maang tikka, and heavy bangles.</span>
            </li>
          </ul>
        </div>

        <p className="text-gray-700 leading-relaxed">
          At Muliya Gold & Diamonds, we understand the evolving fashion landscape while 
          respecting the timeless appeal of traditional designs. Our collections feature 
          authentic craftsmanship combined with contemporary aesthetics, ensuring that 
          every piece you wear tells your unique story.
        </p>

        <div className="bg-gradient-to-r from-[#E92247]/10 to-amber-100/50 p-6 rounded-xl">
          <p className="text-gray-800 text-center font-medium">
            \"Jewellery is the most transformative thing you can wear. Traditional pieces 
            connect you to your roots while making you stand out in any crowd.\"
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed">
          Visit our showrooms to explore our exquisite collection of traditional jewellery 
          that celebrates India's rich heritage. Let our experts help you find pieces that 
          resonate with your personal style and cultural pride.
        </p>
      </div>
    )
  }
];

export default function BlogPostPage() {
  const params = useParams();
  const slug = params?.slug as string;
  
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    return (
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-2xl font-serif text-gray-900 mb-4">Blog post not found</h1>
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-[#E92247] hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#E92247] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blog" className="hover:text-[#E92247] transition-colors">
              Blog
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium truncate max-w-xs">{post.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-[300px] md:h-[400px] lg:h-[500px]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-white/80 mb-4">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">{post.date}</span>
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-serif text-white leading-tight">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <article className="prose prose-lg max-w-none">
          {post.content}
        </article>

        {/* Back to Blog */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-[#E92247] font-medium hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Related Posts */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-8 text-center">
            More Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts
              .filter(p => p.id !== post.id)
              .slice(0, 3)
              .map(relatedPost => (
                <Link 
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-500 mb-2">{relatedPost.date}</p>
                    <h3 className="font-serif text-gray-900 group-hover:text-[#E92247] transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}
