"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { getImageUrl } from "@/lib/api";

interface CollectionItem {
  id: string;
  name: string;
  desc: string;
  image: string;
  slug: string;
}

const STATIC_COLLECTIONS: CollectionItem[] = [
  { id: "amuliya",     name: "Amuliya Diamonds",          desc: "Exquisite Diamond Craftsmanship",     image: "/images/sector/Amulya.jpg.jpeg",  slug: "amuliya"     },
  { id: "mahathi",     name: "Mahathi Antique Collection", desc: "Timeless Antique Designs",            image: "/images/sector/Mahathi.png",       slug: "mahathi"     },
  { id: "pouranik",    name: "Pouranik Collection",        desc: "Heritage-Inspired Pieces",            image: "/images/sector/Pouranik.png",      slug: "pouranik"    },
  { id: "silveriya",   name: "Muliya Silveriya",           desc: "Premium Silver Jewellery",            image: "/images/sector/Silverio_2.png",    slug: "silveriya"   },
  { id: "nithya",      name: "Nithya 18k Jewellery Series",desc: "Everyday Elegance In 18k Gold",      image: "/images/sector/Nithiya.png",       slug: "nithya"      },
  { id: "mangalsutra", name: "Mangalsutra Collection",     desc: "Sacred Bonds, Beautiful Designs",    image: "/images/sector/Mangalsutra.png",   slug: "mangalsutra" },
];

interface ApiBrand {
  _id: string;
  name: string;
  description?: string;
  imageUrl?: string;
  banner_img?: string[];
  isActive?: boolean;
}

export function DynamicCollectionSection() {
  const [collections, setCollections] = useState<CollectionItem[]>(STATIC_COLLECTIONS);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
    fetch(`${apiUrl}/brand/allbrand`)
      .then((r) => r.json())
      .then((res) => {
        const brands: ApiBrand[] = res?.brands ?? [];
        const active = brands.filter((b) => b.isActive !== false);
        if (active.length > 0) {
          setCollections(
            active.map((b) => ({
              id: b._id,
              name: b.name,
              desc: b.description ?? "",
              image: getImageUrl(b.imageUrl ?? (b.banner_img && b.banner_img[0])),
              slug: b.name.toLowerCase().replace(/\s+/g, "-"),
            }))
          );
        }
        setLoaded(true);
      })
      .catch(() => {
        setLoaded(true); // keep static
      });
  }, []);

  return (
    <>
      {/* ── Mobile: horizontal snap scroll ─────────────────────────────────── */}
      <div className="md:hidden flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory -mx-4 px-4 hide-scrollbar">
        {collections.map((col, idx) => (
          <motion.div
            key={col.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: idx * 0.05 }}
            className="flex-shrink-0 w-[72vw] snap-start"
          >
            <CollectionCard col={col} />
          </motion.div>
        ))}
      </div>

      {/* ── Desktop: responsive grid ────────────────────────────────────────── */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {collections.map((col, idx) => (
          <motion.div
            key={col.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.06 }}
          >
            <CollectionCard col={col} />
          </motion.div>
        ))}
      </div>
    </>
  );
}

/** Full-bleed portrait card with gradient overlay and title. */
function CollectionCard({ col }: { col: CollectionItem }) {
  return (
    <Link href={`/collections/${col.slug}`} className="block group">
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-md ring-1 ring-black/8 bg-neutral-100">
        {/* Cover image */}
        <ImageWithFallback
          src={col.image}
          alt={col.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        />

        {/* Permanent soft gradient at bottom for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Title block — always visible */}
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 translate-y-0 transition-transform duration-400">
          <div className="flex items-end justify-between gap-2">
            <div>
              <h3 className="font-serif text-white text-lg sm:text-xl leading-tight">
                {col.name}
              </h3>
              {col.desc && (
                <p className="mt-1 text-white/75 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                  {col.desc}
                </p>
              )}
            </div>

            {/* Arrow icon */}
            <span className="flex-shrink-0 w-9 h-9 rounded-full bg-white/20 border border-white/35 backdrop-blur-sm flex items-center justify-center text-white group-hover:bg-white group-hover:text-neutral-900 transition-all duration-300">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </div>
        </div>

        {/* Hover shimmer overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/8 via-transparent to-transparent pointer-events-none" />
      </div>
    </Link>
  );
}
