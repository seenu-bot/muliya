import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import { getBranches } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Branches | Hindustan Gold Company | Gold Buyers Near Me",
  description: "Find Hindustan Gold Company branches near you. 89+ branches across Karnataka. Gold buyers in Bangalore, Mysore, Mangalore, Gulbarga and more.",
  alternates: { canonical: "https://hindustangoldcompany.com/branches" },
};

export const revalidate = 60;

const BASE = "https://hindustangoldcompany.com";

const staticBranches = [
  { _id: "1", name: "Majestic", fullName: "Hindustan Gold Buyers Majestic", city: "Bengaluru", state: "Karnataka", address: "No 5 Shree Compex Avenue Road, Bangalore, Bengaluru – 560002", phone: "8088550033", email: "info@hindustangoldcompany.com", mapsLink: "https://maps.app.goo.gl/ueUcWKe2fe67xhf36", img: `${BASE}/static/upload/hindustangold-branch-Hindustan%20gold%20company%20Mejestic-.jpeg`, mapImg: `${BASE}/static/upload/hindustangold-branch-map-location-Hindustan%20gold%20company%20Mejestic-.PNG` },
  { _id: "2", name: "Gulbarga", fullName: "Hindustan Gold Buyers Gulbarga", city: "Gulbarga", state: "Karnataka", address: "Canara Vadiraj Bhavan Complex, Opp Jagat Post Office, Beside City Centre Mall, Main Rd, Kalaburagi – 585101", phone: "8088550033", email: "info@hindustangoldcompany.com", mapsLink: "https://g.page/gold-buyers-Gulbaraga?share", img: `${BASE}/static/upload/hindustangold-branch-Gulbarga-.jpg`, mapImg: `${BASE}/static/upload/hindustangold-branch-map-location-Hindustan%20Gold%20Company%20Gulbarga-.png` },
  { _id: "3", name: "Mysore", fullName: "Hindustan Gold Buyers Mysore", city: "Mysore", state: "Karnataka", address: "#815, 1st Floor, BTC Complex Old Santepet, Mysore – 570024", phone: "8088550033", email: "info@hindustangoldcompany.com", mapsLink: "https://g.page/gold-buyers-mysore?share", img: `${BASE}/static/upload/hindustangold-branch-Mysore-.jpg`, mapImg: `${BASE}/static/upload/hindustangold-branch-map-location-Mysore-.png` },
  { _id: "4", name: "Tumkur", fullName: "Hindustan Gold Buyers Tumkur", city: "Tumkur", state: "Karnataka", address: "Abharaba Arcade, 1st Floor 2nd Shop, Ward No 18, MG Road, Tumkur – 572101", phone: "8088550033", email: "info@hindustangoldcompany.com", mapsLink: "https://g.page/gold-buyers-tumkur?share", img: `${BASE}/static/upload/hindustangold-branch-Tumkur-.jpg`, mapImg: `${BASE}/static/upload/hindustangold-branch-map-location-Tumkur-.png` },
  { _id: "5", name: "Shivamogga", fullName: "Hindustan Gold Buyers Shivamogga", city: "Shivamogga", state: "Karnataka", address: "Shivappa Nayaka Circle, 3rd Floor, Gandhibazzar, Shivamogga – 577201", phone: "8088550033", email: "info@hindustangoldcompany.com", mapsLink: "https://g.page/gold-buyers-shimoga?share", img: `${BASE}/static/upload/hindustangold-branch-Shivamogga-.jpg`, mapImg: `${BASE}/static/upload/hindustangold-branch-map-location-Shivamogga-.png` },
  { _id: "6", name: "Hassan", fullName: "Hindustan Gold Buyers Hassan", city: "Hassan", state: "Karnataka", address: "BM Road, Opp to Malabar Gold & Diamond, Above Muthoot Finance, Hassan – 573201", phone: "8088550033", email: "info@hindustangoldcompany.com", mapsLink: "https://g.page/gold-buyers-in-hassan?share", img: `${BASE}/static/upload/hindustangold-branch-Hassan-.jpg`, mapImg: `${BASE}/static/upload/hindustangold-branch-map-location-Hassan-.png` },
  { _id: "7", name: "Hubli", fullName: "Hindustan Gold Buyers Hubli", city: "Hubli", state: "Karnataka", address: "No 5, First Floor, Madhura Plaza, Opposite to Laxmi Temple, Hubli – 580028", phone: "8088550033", email: "info@hindustangoldcompany.com", mapsLink: "https://g.page/gold-buyers-hubli?share", img: `${BASE}/static/upload/hindustangold-branch-Hubli-.jpg`, mapImg: `${BASE}/static/upload/hindustangold-branch-map-location-Hubli-.png` },
  { _id: "8", name: "Bellary", fullName: "Hindustan Gold Buyers Bellary", city: "Bellary", state: "Karnataka", address: "Municipality Complex Office, Door No F2, Royal Circle, Ballari – 583101", phone: "8088550033", email: "info@hindustangoldcompany.com", mapsLink: "https://g.page/gold-buyers-bellary?share", img: `${BASE}/static/upload/hindustangold-branch-Bellary-.jpg`, mapImg: `${BASE}/static/upload/hindustangold-branch-map-location-Bellary-.png` },
  { _id: "9", name: "Chikkaballapur", fullName: "Hindustan Gold Buyers Chikkaballapur", city: "Chikkaballapur", state: "Karnataka", address: "#1306/1197, 2nd Floor, Bazaar Main Road, Chikkaballapur – 562101", phone: "8088550033", email: "info@hindustangoldcompany.com", mapsLink: "https://g.page/gold-buyers-chikkaballapura?share", img: `${BASE}/static/upload/hindustangold-branch-Chikkabalapur-.jpg`, mapImg: `${BASE}/static/upload/hindustangold-branch-map-location-Chikkabalapur-.png` },
  { _id: "10", name: "Sindhanur", fullName: "Hindustan Gold Buyers Sindhanur", city: "Sindhanur", state: "Karnataka", address: "No.6-1-1928, Ward No.16, Ramakrishna Colony, Gangavathi Road, Sindhanur – 584128", phone: "8088550033", email: "info@hindustangoldcompany.com", mapsLink: "https://g.page/gold-buyers-sindanur?share", img: `${BASE}/static/upload/hindustangold-branch-Hindustan%20Gold%20Company%20Sindhanur-.jpg`, mapImg: `${BASE}/static/upload/hindustangold-branch-map-location-Sindhanur-.png` },
];

export default async function BranchesPage() {
  const dbBranches = await getBranches();
  const branches = dbBranches.length > 0 ? dbBranches : staticBranches;

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#1a1a1a] to-[#3d0000] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Our Branches</h1>
          <p className="text-gray-300 mt-3 text-lg">89+ branches across 3 states. Find your nearest gold buyer.</p>
        </div>
      </section>

      <section className="bg-[#C8102E] py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-6 text-center text-white">
            <div><p className="text-2xl font-bold">89+</p><p className="text-sm text-white/80">Branches</p></div>
            <div><p className="text-2xl font-bold">3</p><p className="text-sm text-white/80">States</p></div>
            <div><p className="text-2xl font-bold">50+</p><p className="text-sm text-white/80">Cities</p></div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {branches.map((branch: any) => (
              <div key={branch._id?.toString() ?? branch.name} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                {branch.img && (
                  <div className="relative h-48 bg-gray-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={branch.img} alt={branch.fullName} className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="p-5">
                  <h2 className="font-bold text-gray-900 text-lg">{branch.fullName}</h2>
                  <div className="mt-3 space-y-2 text-sm text-gray-600">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-[#C8102E] flex-shrink-0 mt-0.5" />
                      <p>{branch.address}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#C8102E] flex-shrink-0" />
                      <a href={`tel:${branch.phone}`} className="hover:text-[#C8102E] transition-colors font-medium">{branch.phone}</a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[#C8102E] flex-shrink-0" />
                      <a href={`mailto:${branch.email}`} className="hover:text-[#C8102E] transition-colors truncate">{branch.email}</a>
                    </div>
                  </div>
                  {branch.mapsLink && (
                    <div className="mt-4 flex items-center gap-3">
                      {branch.mapImg && (
                        <div className="w-16 h-12 rounded-lg overflow-hidden border border-gray-100 flex-shrink-0">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={branch.mapImg} alt={`Map - ${branch.name}`} className="w-full h-full object-cover" />
                        </div>
                      )}
                      <a href={branch.mapsLink} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-[#C8102E] font-semibold hover:underline">
                        Get Directions <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-[#D4A843]/10 rounded-2xl border border-[#D4A843]/20 text-center">
            <p className="text-gray-700 font-semibold text-lg">89+ Branches Across India</p>
            <p className="text-gray-500 text-sm mt-1">We have many more branches across Bangalore and other cities. Call us to find the nearest branch.</p>
            <div className="mt-5 flex gap-3 justify-center flex-wrap">
              <a href="tel:08088550033" className="bg-[#C8102E] hover:bg-[#a00d25] text-white font-bold px-6 py-2.5 rounded-lg text-sm transition-colors inline-flex items-center gap-2">
                <Phone className="w-4 h-4" /> Call: 8088550033
              </a>
              <a href="https://wa.me/919741637635" target="_blank" rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-2.5 rounded-lg text-sm transition-colors">
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
