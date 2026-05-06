"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Clock, Navigation, Mail, Star, Shield, Award, ChevronRight, Gem } from "lucide-react";

const store = {
  name: "Muliya Gold & Diamonds Bengaluru",
  address: "2 42/28, S-112/B, Sivanchetti Gardens, Gangadhara Chetty Road, Manipal Centre South Block",
  city: "Bengaluru",
  area: "MG Road",
  state: "Karnataka",
  pincode: "560042",
  phone: ["+91 9844692916", "+91 9844701916"],
  email: "info@muliyajewels.com",
  hours: "10:00 AM – 8:00 PM, All Days",
  mapUrl:
    "https://www.google.com/maps?ll=12.974814,77.614599&z=10&t=m&hl=en-GB&gl=US&mapclient=embed&cid=3046056327507354644",
  image: "/images/Bengaluru-showroom.jpg",
};

const collections = [
  { name: "Diamond Jewellery", desc: "Certified solitaires, tennis bracelets, and statement rings", icon: "💎" },
  { name: "Gold Necklaces", desc: "Traditional temple sets to contemporary layered chains", icon: "📿" },
  { name: "Engagement Rings", desc: "Custom-designed rings for your most precious moment", icon: "💍" },
  { name: "Bridal Sets", desc: "Complete bridal jewellery collections in gold & diamonds", icon: "👑" },
];

const faqs = [
  {
    q: "Where is Muliya Gold & Diamonds located near MG Road, Bangalore?",
    a: "Our showroom is at Manipal Centre South Block, Sivanchetti Gardens, Gangadhara Chetty Road — minutes from MG Road and Cubbon Park Metro station.",
  },
  {
    q: "What diamond jewellery is available at the MG Road showroom?",
    a: "We stock certified solitaire rings, diamond pendants, tennis bracelets, earrings, and full bridal diamond sets. All diamonds are BIS-hallmarked and internationally certified.",
  },
  {
    q: "Do you offer gold jewellery making or customisation in Bangalore?",
    a: "Yes. Our Bangalore showroom offers custom jewellery design services. Share your vision and our craftsmen will bring it to life.",
  },
  {
    q: "What are the showroom timings on MG Road Bangalore?",
    a: "We are open 10:00 AM to 8:00 PM, seven days a week.",
  },
];

export default function MGRoadPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      {/* ── Hero ── */}
      <section className="relative bg-[#E92247] overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/70 mb-8 justify-center">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/showrooms" className="hover:text-white transition-colors">Showrooms</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white">MG Road, Bangalore</span>
          </nav>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-white/80 text-sm uppercase tracking-widest mb-3 font-medium">Bengaluru Flagship</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-5 leading-tight">
              An Iconic Jewellery Destination at<br />MG Road, Bangalore
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
              Step into a world of refined craftsmanship, timeless elegance, and exceptional artistry at Muliya’s flagship jewellery showroom MG Road Bangalore - thoughtfully curated for those who seek extraordinary gold and diamond creations in the heart of the city.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <a
                href={store.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#E92247] px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition-all shadow-lg"
              >
                <Navigation className="w-5 h-5" /> Get Directions
              </a>
              <a
                href={`tel:${store.phone[0].replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 bg-white/15 text-white border border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white/25 transition-all backdrop-blur-sm"
              >
                <Phone className="w-5 h-5" /> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Store Details Card ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Image */}
            <div className="relative h-72 md:h-auto min-h-[300px]">
              <Image src={store.image} alt="Muliya Gold & Diamonds MG Road Bangalore showroom" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
            </div>
            {/* Info */}
            <div className="p-8 md:p-10">
              <h2 className="text-2xl font-serif text-gray-900 mb-6">{store.name}</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#E92247]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-[#E92247]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-1">Address</p>
                    <p className="text-gray-800 text-sm leading-relaxed">
                      {store.address},<br />{store.city} – {store.pincode}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#E92247]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-[#E92247]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-1">Phone</p>
                    <div className="flex flex-col gap-1">
                      {store.phone.map((p, i) => (
                        <a key={i} href={`tel:${p.replace(/\s/g, "")}`} className="text-gray-800 text-sm hover:text-[#E92247] transition-colors">
                          {p}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#E92247]/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-[#E92247]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-1">Open Hours</p>
                    <p className="text-gray-800 text-sm">{store.hours}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#E92247]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-[#E92247]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-1">Email</p>
                    <a href={`mailto:${store.email}`} className="text-gray-800 text-sm hover:text-[#E92247] transition-colors">{store.email}</a>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 mt-8 pt-6 border-t border-gray-100">
                <a
                  href={store.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#E92247] text-white px-4 py-3 rounded-xl hover:bg-[#d11f3f] transition-all font-semibold text-sm"
                >
                  <Navigation className="w-4 h-4" /> Get Directions
                </a>
                <a
                  href={`mailto:${store.email}`}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-gray-200 text-gray-700 hover:border-[#E92247] hover:text-[#E92247] transition-all font-semibold text-sm"
                >
                  <Mail className="w-4 h-4" /> Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── About Section ── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
            A Luxury Jewellery Experience in the Heart of Bengaluru
          </h2>
          <div className="w-16 h-0.5 bg-[#E92247] mx-auto mb-6" />
          <p className="text-gray-600 text-lg leading-relaxed">
            Located moments away from the city’s most celebrated landmarks, Muliya brings together heritage craftsmanship and contemporary sophistication through an exquisite collection of fine jewellery. From statement bridal masterpieces to modern everyday elegance, every creation reflects precision, purity, and timeless design.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mt-4">
            Recognised for offering exceptional diamond jewellery MG Road Bangalore collections, our showroom is designed to deliver a seamless and personalised luxury experience for every customer who walks through our doors.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mt-4">
            Whether you are selecting a signature solitaire, a timeless heirloom, or exploring a premium gold jewellery showroom MG Road Bangalore, our experts ensure every visit feels truly memorable.
          </p>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { icon: <Shield className="w-6 h-6 text-[#E92247]" />, title: "BIS Hallmarked Excellence", desc: "Crafted with certified purity and uncompromising quality." },
            { icon: <Award className="w-6 h-6 text-[#E92247]" />, title: "Internationally Certified Diamonds", desc: "Expertly selected stones with exceptional brilliance." },
            { icon: <Star className="w-6 h-6 text-[#E92247]" />, title: "81 Years of Trusted Legacy", desc: "A heritage admired across generations of jewellery connoisseurs." },
          ].map((b) => (
            <div key={b.title} className="bg-gray-50 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-[#E92247]/10 rounded-full flex items-center justify-center mx-auto mb-4">{b.icon}</div>
              <p className="font-semibold text-gray-900 mb-1">{b.title}</p>
              <p className="text-sm text-gray-500">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Collections ── */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
              What You'll Find at Our MG Road Showroom
            </h2>
            <div className="w-16 h-0.5 bg-[#E92247] mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {collections.map((c) => (
              <div key={c.name} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
                <span className="text-4xl mb-4 block">{c.icon}</span>
                <h3 className="font-serif text-lg text-gray-900 mb-2">{c.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">Frequently Asked Questions</h2>
          <div className="w-16 h-0.5 bg-[#E92247] mx-auto" />
        </div>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-gray-50 rounded-2xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-gray-900 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Gem className="w-12 h-12 mx-auto mb-6 text-[#E92247]" />
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Visit Our MG Road Showroom Today</h2>
          <p className="text-gray-400 mb-8 text-lg max-w-xl mx-auto">
            Experience the finest gold and diamond jewellery in Bangalore's most prestigious jewellery showroom near MG Road.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`tel:${store.phone[0].replace(/\s/g, "")}`} className="flex items-center gap-3 bg-[#E92247] text-white px-8 py-4 rounded-xl hover:bg-[#d11f3f] transition-all shadow-lg font-semibold">
              <Phone className="w-5 h-5" /> {store.phone[0]}
            </a>
            <a href={store.mapUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white/10 text-white px-8 py-4 rounded-xl hover:bg-white/20 transition-all backdrop-blur-sm font-semibold">
              <Navigation className="w-5 h-5" /> Get Directions
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}