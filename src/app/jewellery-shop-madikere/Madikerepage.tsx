"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Clock, Navigation, Mail, Star, Shield, Award, ChevronRight, Gem } from "lucide-react";

const stores = [
  {
    id: "madikeri",
    name: "Muliya Gold & Diamonds Madikeri",
    address: "Shyama Jewels Madikeri LLP, 1, 100, Mahadev Pet Road, Mahadevpet, 5 Ward",
    city: "Madikeri",
    state: "Karnataka",
    pincode: "571201",
    phone: ["+91 9743760916", "+91 8272223916", "+91 9379203916"],
    email: "info@muliyajewels.com",
    hours: "10:00 AM – 8:00 PM, All Days",
    mapUrl: "https://www.google.com/maps?ll=12.425611,75.737784&z=10&t=m&hl=en-GB&gl=US&mapclient=embed&cid=5900960138870449343",
    image: "/images/Madikeri-Showroom.jpg",
  },
  {
    id: "somwarpet",
    name: "Muliya Gold & Diamonds Madikeri (Somwarpet)",
    address: "Shyama Jewels Madikeri LLP (Somwarpet), 3-116-5, Door Numbers J3/4, Sojago Complex, Thyagaraja Road, Somwarpet Town",
    city: "Somwarpet",
    state: "Karnataka",
    pincode: "571236",
    phone: ["+91 8272223916"],
    email: "info@muliyajewels.com",
    hours: "10:00 AM – 8:00 PM, All Days",
    mapUrl: "https://www.google.com/maps?ll=12.598566,75.850348&z=10&t=m&hl=en-GB&gl=US&mapclient=embed&cid=13469068228776164471",
    image: "/images/Somwarpet-Showroom.jpg",
  },
];

const highlights = [
  { name: "Luxury Diamond Creations", desc: "Elegant solitaires, statement rings, pendants, and timeless diamond artistry.", icon: "🏆" },
  { name: "Engagement Rings", desc: "Exquisite Engagement Rings in Madikere crafted to celebrate life’s most meaningful moments.", icon: "💍" },
  { name: "Gold Necklaces", desc: "Elegant Gold Necklace in Madikere collections inspired by tradition and contemporary sophistication.", icon: "📿" },
  { name: "Bridal Jewellery Collections", desc: "Refined bridal ensembles designed for grand celebrations and timeless memories. ", icon: "👑" },
];

const faqs = [
  {
    q: "What is the best jewellery showroom in Madikeri?",
    a: "Muliya Gold & Diamonds on Mahadev Pet Road is widely regarded as the best jewellery showroom in Madikeri (Kodagu). With 30+ years of heritage and BIS hallmarked collections, it serves as Kodagu's most trusted jewellery destination.",
  },
  {
    q: "Where can I buy engagement rings in Madikeri?",
    a: "Our Madikeri showroom carries a wide selection of certified diamond engagement rings and solitaire rings. We also offer custom ring design services tailored to your preferences and budget.",
  },
  {
    q: "What types of gold necklaces are available in Madikeri?",
    a: "At our Madikeri showroom, you'll find 22K and 18K gold necklaces in traditional Kodava styles, temple jewellery, layered chains, coin necklaces, and contemporary designs. All are BIS hallmarked.",
  },
  {
    q: "Do you have a jewellery showroom in Somwarpet (Kodagu)?",
    a: "Yes. We have a second Kodagu showroom in Somwarpet (Madikeri Taluk) at Sojago Complex, Thyagaraja Road, Somwarpet. Contact us at +91 8272223916.",
  },
  {
    q: "What are the timings of the Madikeri jewellery shop?",
    a: "Our Madikeri and Somwarpet showrooms are open 10:00 AM to 8:00 PM, seven days a week.",
  },
];

export default function MadikeriPage() {
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
          <nav className="flex items-center gap-2 text-sm text-white/70 mb-8 justify-center">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/showrooms" className="hover:text-white transition-colors">Showrooms</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white">Madikeri</span>
          </nav>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-white/80 text-sm uppercase tracking-widest mb-3 font-medium">Kodagu · Karnataka</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-5 leading-tight">
              Madikeri’s Destination<br />for Gold Necklace & Engagement Ring Elegance

            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
              Celebrate life’s finest moments with handcrafted jewellery designed to reflect heritage, sophistication, and exceptional artistry - curated for generations across Kodagu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <a
                href={stores[0].mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#E92247] px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition-all shadow-lg"
              >
                <Navigation className="w-5 h-5" /> Get Directions
              </a>
              <a
                href={`tel:${stores[0].phone[0].replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 bg-white/15 text-white border border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white/25 transition-all backdrop-blur-sm"
              >
                <Phone className="w-5 h-5" /> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Store Cards ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {stores.map((store) => (
            <div key={store.id} className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="relative h-56">
                <Image src={store.image} alt={`${store.name} jewellery showroom`} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h2 className="text-xl font-serif text-white">{store.name}</h2>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#E92247]/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-[#E92247]" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-1">Address</p>
                      <p className="text-gray-800 text-sm leading-relaxed">{store.address}, {store.city} – {store.pincode}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#E92247]/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-[#E92247]" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-1">Phone</p>
                      <div className="flex flex-col gap-1">
                        {store.phone.slice(0, 2).map((p, i) => (
                          <a key={i} href={`tel:${p.replace(/\s/g, "")}`} className="text-gray-800 text-sm hover:text-[#E92247] transition-colors">{p}</a>
                        ))}
                        {store.phone.length > 2 && <span className="text-gray-400 text-sm">+{store.phone.length - 2} more</span>}
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
                </div>
                <div className="flex gap-3 mt-6 pt-6 border-t border-gray-100">
                  <a
                    href={store.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-[#E92247] text-white px-4 py-3 rounded-xl hover:bg-[#d11f3f] transition-all font-semibold text-sm"
                  >
                    <Navigation className="w-4 h-4" /> Directions
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
          ))}
        </div>
      </section>

      {/* ── About ── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
            Crafted for Generations of Elegance
          </h2>
          <div className="w-16 h-0.5 bg-[#E92247] mx-auto mb-6" />
          <p className="text-gray-600 text-lg leading-relaxed">
            Recognised as the Best Jewellery Showroom in Madikere, Muliya brings together timeless gold artistry, exquisite diamond creations, and personalised luxury experiences for families across Kodagu. Every collection is thoughtfully designed to reflect sophistication, tradition, and enduring beauty.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mt-4">
            From contemporary statement pieces to bridal heirlooms inspired by South Indian heritage, our showroom showcases jewellery crafted with certified purity, exceptional detailing, and master craftsmanship admired for decades.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mt-4">
            Whether you are searching for signature bridal jewellery, elegant daily wear, or finely crafted diamond creations, every visit is designed to feel refined, memorable, and deeply personal.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { icon: <Shield className="w-6 h-6 text-[#E92247]" />, title: "BIS Hallmarked", desc: "All gold pieces certified to Indian purity standards" },
            { icon: <Award className="w-6 h-6 text-[#E92247]" />, title: "Certified Diamonds", desc: "IGI / GIA certified diamonds on every ring" },
            { icon: <Star className="w-6 h-6 text-[#E92247]" />, title: "Trusted Since Decades", desc: "A legacy brand loved by Kodagu families" },
          ].map((b) => (
            <div key={b.title} className="bg-gray-50 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-[#E92247]/10 rounded-full flex items-center justify-center mx-auto mb-4">{b.icon}</div>
              <p className="font-semibold text-gray-900 mb-1">{b.title}</p>
              <p className="text-sm text-gray-500">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Highlights ── */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
              Discover Signature Collections at Our Madikeri Showroom
            </h2>
            <div className="w-16 h-0.5 bg-[#E92247] mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h) => (
              <div key={h.name} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
                <span className="text-4xl mb-4 block">{h.icon}</span>
                <h3 className="font-serif text-lg text-gray-900 mb-2">{h.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{h.desc}</p>
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
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Visit Our Jewellery Shop in Madikeri</h2>
          <p className="text-gray-400 mb-8 text-lg max-w-xl mx-auto">
            Shop certified gold and diamond jewellery in the heart of Coorg — engagement rings, gold necklaces, and bridal sets.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`tel:${stores[0].phone[0].replace(/\s/g, "")}`} className="flex items-center gap-3 bg-[#E92247] text-white px-8 py-4 rounded-xl hover:bg-[#d11f3f] transition-all shadow-lg font-semibold">
              <Phone className="w-5 h-5" /> {stores[0].phone[0]}
            </a>
            <a href={stores[0].mapUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white/10 text-white px-8 py-4 rounded-xl hover:bg-white/20 transition-all backdrop-blur-sm font-semibold">
              <Navigation className="w-5 h-5" /> Get Directions
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}