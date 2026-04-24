"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Clock, Navigation, Search, Store, Mail } from "lucide-react";

interface StoreLocation {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  phone: string[];
  email: string;
  hours: string;
  lat: number;
  lng: number;
  image: string;
  mapUrl: string;
}

const stores: StoreLocation[] = [
  {
    id: "1",
    name: "Shyama Muliya Gold & Diamonds Puttur",
    address: "Jewels Puttur LLP 476, 3-515/1, Sulochana Towers, Court Road",
    city: "Puttur",
    state: "Karnataka",
    pincode: "574201",
    phone: ["+91 9844575916", "+91 8251230414"],
    email: "info@muliyajewels.com",
    hours: "10:00 AM - 8:00 PM",
    lat: 12.760619,
    lng: 75.20161,
    image: "/images/Shyama-Jewels-Sourcing.jpg",
    mapUrl: "https://www.google.com/maps?ll=12.760619,75.20161&z=10&t=m&hl=en-GB&gl=US&mapclient=embed&cid=6801615081068646491",
  },
  {
    id: "2",
    name: "Muliya Gold & Diamonds Belthangady",
    address: "Shyama Jewels Belthangady LLP, Raksha Arcade",
    city: "Belthangady",
    state: "Karnataka",
    pincode: "574214",
    phone: ["+91 9343004916", "+91 8256298916"],
    email: "info@muliyajewels.com",
    hours: "10:00 AM - 8:00 PM",
    lat: 12.988838,
    lng: 75.278014,
    image: "/images/Belthangady-Showroom.jpg",
    mapUrl: "https://www.google.com/maps?ll=12.988838,75.278014&z=10&t=m&hl=en-GB&gl=US&mapclient=embed&cid=16178876003588641558",
  },
  {
    id: "3",
    name: "Muliya Gold & Diamonds Bengaluru",
    address: "Shyama Jewels Puttur LLP (BLR) 2 42/28, S-112/B, Sivanchetti Gardens, Gangadhara Chetty Road, Manipal Centre South Block",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560042",
    phone: ["+91 9844692916", "+91 9844701916"],
    email: "info@muliyajewels.com",
    hours: "10:00 AM - 8:00 PM",
    lat: 12.974814,
    lng: 77.614599,
    image: "/images/Bengaluru-showroom.jpg",
    mapUrl: "https://www.google.com/maps?ll=12.974814,77.614599&z=10&t=m&hl=en-GB&gl=US&mapclient=embed&cid=3046056327507354644",
  },
  {
    id: "4",
    name: "Muliya Gold & Diamonds Madikeri",
    address: "Shyama Jewels madikeri LLP, 1, 100, Mahadev pet road, Mahadevpet, 5 ward",
    city: "Madikeri",
    state: "Karnataka",
    pincode: "571201",
    phone: ["+91 9743760916", "+91 8272223916", "+91 9379203916", "+91 9379922916"],
    email: "info@muliyajewels.com",
    hours: "10:00 AM - 8:00 PM",
    lat: 12.425611,
    lng: 75.737784,
    image: "/images/Madikeri-Showroom.jpg",
    mapUrl: "https://www.google.com/maps?ll=12.425611,75.737784&z=10&t=m&hl=en-GB&gl=US&mapclient=embed&cid=5900960138870449343",
  },
  {
    id: "5",
    name: "Muliya Gold & Diamonds Gonikoppal",
    address: "CDM Arcade, Main Rd, opposite Government Hospital",
    city: "Gonikoppal",
    state: "Karnataka",
    pincode: "571213",
    phone: ["+91 9379920916", "+91 9379734916", "+91 8274279916", "+91 8274279816"],
    email: "info@muliyajewels.com",
    hours: "10:00 AM - 8:00 PM",
    lat: 12.184319,
    lng: 75.924317,
    image: "/images/GKPL-v2 showroom.jpg",
    mapUrl: "https://www.google.com/maps?ll=12.184319,75.924317&z=10&t=m&hl=en-GB&gl=US&mapclient=embed&cid=2828124756352911058",
  },
  {
    id: "6",
    name: "Muliya Gold & Diamonds Madikeri (Somwarpet)",
    address: "Shyama Jewels Madikeri LLP (Somwarpet) 3-116-5, Door Numbers J3/4, Sojago Complex, Thyagaraja Road, Somwarpet Town and Taluk, Kodagu District",
    city: "Somwarpet",
    state: "Karnataka",
    pincode: "571236",
    phone: ["+91 8272223916"],
    email: "info@muliyajewels.com",
    hours: "10:00 AM - 8:00 PM",
    lat: 12.598566,
    lng: 75.850348,
    image: "/images/Somwarpet-Showroom.jpg",
    mapUrl: "https://www.google.com/maps?ll=12.598566,75.850348&z=10&t=m&hl=en-GB&gl=US&mapclient=embed&cid=13469068228776164471",
  },
  {
    id: "7",
    name: "Shyama Jewels Sourcing LLP",
    address: "Registered Office - 476/G and H, Indian Arcade, Court road",
    city: "Puttur",
    state: "Karnataka",
    pincode: "574201",
    phone: ["+91 9844575916"],
    email: "info@muliyajewels.com",
    hours: "10:00 AM - 6:00 PM",
    lat: 12.760804,
    lng: 75.201361,
    image: "/images/Shyama-Jewels-Sourcing.jpg",
    mapUrl: "https://www.google.com/maps?ll=12.760804,75.201361&z=10&t=m&hl=en-GB&gl=US&mapclient=embed&q=Court+Road+Puttur,+Karnataka+574201",
  },
  {
    id: "8",
    name: "Shyama Jewels Puttur LLP (Nelyadi)",
    address: "First Floor, I-232/29, Durgashree Towers, Main Road, Nelyadi, Dakshina Kannada",
    city: "Nelyadi",
    state: "Karnataka",
    pincode: "574229",
    phone: ["+91 9844575916"],
    email: "info@muliyajewels.com",
    hours: "10:00 AM - 8:00 PM",
    lat: 12.836301,
    lng: 75.40473,
    image: "/images/Nelyadi-showroom.jpg",
    mapUrl: "https://www.google.com/maps?ll=12.836301,75.40473&z=10&t=m&hl=en-GB&gl=US&mapclient=embed&cid=7304813516227419937",
  },
];

const cities = ["All", "Puttur", "Belthangady", "Bengaluru", "Madikeri", "Gonikoppal", "Somwarpet", "Nelyadi"];

export default function StoreLocatorPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("All");

  const filteredStores = stores.filter((store) => {
    const matchesSearch =
      store.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.pincode.includes(searchQuery);
    const matchesCity = selectedCity === "All" || store.city === selectedCity;
    return matchesSearch && matchesCity;
  });

  const handleGetDirections = (store: StoreLocation) => {
    window.open(store.mapUrl, "_blank");
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-[#E92247] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center">
            <nav className="flex items-center justify-center gap-2 text-sm text-white/70 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Showrooms</span>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">
              Our Showrooms
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
              Visit our exclusive showrooms across Karnataka and experience the finest gold and diamond jewellery
            </p>
          </div>
        </div>
      </div>

      {/* Search & Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          {/* Search */}
          <div className="relative max-w-2xl mx-auto mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by city, name or pincode..."
              className="w-full pl-12 pr-4 py-4 bg-gray-50 rounded-xl border-2 border-transparent focus:border-[#E92247]/30 focus:bg-white focus:ring-0 outline-none text-lg transition-all"
            />
          </div>
          
          {/* City Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2">
            {cities.map((city) => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCity === city
                    ? "bg-[#E92247] text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {city}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-gray-500 text-center text-sm">
          Showing <span className="font-semibold text-gray-900">{filteredStores.length}</span> showroom{filteredStores.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Store Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {filteredStores.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Store className="w-10 h-10 text-gray-400" />
            </div>
            <p className="text-gray-600 text-lg">No showrooms found matching your search</p>
            <button 
              onClick={() => {setSearchQuery(""); setSelectedCity("All");}}
              className="mt-4 text-[#E92247] font-medium hover:underline"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {filteredStores.map((store) => (
              <div 
                key={store.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={store.image}
                    alt={store.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/95 backdrop-blur-sm text-gray-900 px-3 py-1.5 rounded-full text-sm font-medium shadow-sm">
                      {store.city}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h2 className="text-xl md:text-2xl font-serif text-white leading-tight">
                      {store.name}
                    </h2>
                  </div>
                </div>

                {/* Details Container */}
                <div className="p-6">
                  <div className="space-y-4">
                    {/* Address */}
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#E92247]/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-4 h-4 text-[#E92247]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-500 font-medium">Address</p>
                        <p className="text-gray-900 text-sm leading-relaxed">
                          {store.address}, {store.city} - {store.pincode}
                        </p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#E92247]/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-4 h-4 text-[#E92247]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-500 font-medium">Phone</p>
                        <div className="flex flex-wrap gap-x-3 gap-y-1">
                          {store.phone.slice(0, 2).map((p, i) => (
                            <a 
                              key={i} 
                              href={`tel:${p.replace(/\s/g, '')}`}
                              className="text-gray-900 text-sm hover:text-[#E92247] transition-colors"
                            >
                              {p}
                            </a>
                          ))}
                          {store.phone.length > 2 && (
                            <span className="text-gray-400 text-sm">+{store.phone.length - 2} more</span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Timings */}
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#E92247]/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-4 h-4 text-[#E92247]" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium">Open Hours</p>
                        <p className="text-gray-900 text-sm">{store.hours}</p>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-6 pt-6 border-t border-gray-100">
                    <button
                      onClick={() => handleGetDirections(store)}
                      className="flex-1 flex items-center justify-center gap-2 bg-[#E92247] text-white px-4 py-3 rounded-xl hover:bg-[#d11f3f] transition-all font-medium text-sm"
                    >
                      <Navigation className="w-4 h-4" />
                      Directions
                    </button>
                    <a
                      href={`mailto:${store.email}`}
                      className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-gray-200 text-gray-700 hover:border-[#E92247] hover:text-[#E92247] transition-all font-medium text-sm"
                    >
                      <Mail className="w-4 h-4" />
                      Email
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Contact CTA */}
      <div className="bg-gray-900 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Phone className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Need Help Finding a Store?
          </h2>
          <p className="text-gray-400 mb-8 text-lg max-w-xl mx-auto">
            Our customer care team is ready to assist you with directions and showroom information
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+919844575916"
              className="flex items-center gap-3 bg-[#E92247] text-white px-8 py-4 rounded-xl hover:bg-[#d11f3f] transition-all shadow-lg hover:shadow-xl font-medium"
            >
              <Phone className="w-5 h-5" />
              +91 98445 75916
            </a>
            <a
              href="mailto:info@muliyajewels.com"
              className="flex items-center gap-3 bg-white/10 text-white px-8 py-4 rounded-xl hover:bg-white/20 transition-all backdrop-blur-sm font-medium"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
