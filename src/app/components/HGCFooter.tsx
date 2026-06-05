import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const serviceLinks = [
  { label: "Gold Buyers", href: "/services/best-gold" },
  { label: "Release Pledged Gold", href: "/services/release-pledged-gold" },
  { label: "Sell Gold", href: "/services/sell-gold" },
  { label: "Value for Gold", href: "/services/value-for-gold" },
  { label: "Online Gold Price", href: "/check-gold-price" },
  { label: "Gold Buyers Near Me", href: "/gold-buyers" },
];

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Branches", href: "/branches" },
  { label: "Careers", href: "/careers" },
  { label: "Franchise", href: "/franchise" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

const policyLinks = [
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "FAQ", href: "/faq" },
  { label: "Franchise", href: "/franchise" },
];

function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

export function HGCFooter() {
  return (
    <footer className="relative border-t-4 border-[#C8102E] bg-[#0d0d0e] text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-[#D4A843]/50" />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.05fr_1fr] lg:gap-8">
          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-[#D4A843]">
              Quick Links: Our Services
            </h3>
            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1">
              <ul className="space-y-2.5 text-[15px] text-gray-200">
                {serviceLinks.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="transition-colors hover:text-[#D4A843]">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div>
                <h4 className="mb-3 text-sm font-semibold text-[#D4A843]">Quick Links</h4>
                <ul className="grid grid-cols-2 gap-x-5 gap-y-2 text-[15px] text-gray-200 sm:grid-cols-1 lg:grid-cols-2">
                  {quickLinks.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="transition-colors hover:text-[#D4A843]">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-7">
              <p className="mb-3 text-sm font-semibold text-[#D4A843]">Follow Us</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: Facebook, href: "https://www.facebook.com/hindustangold", label: "Facebook" },
                  { icon: Twitter, href: "https://twitter.com/hindustangoldc1", label: "Twitter" },
                  { icon: Instagram, href: "https://www.instagram.com/hindustan_gold_company/", label: "Instagram" },
                  { icon: Linkedin, href: "https://www.linkedin.com/company/82327356/", label: "LinkedIn" },
                  { icon: Youtube, href: "https://www.youtube.com/channel/UCO8nW4-OC6QxSU65XshDVMw/featured", label: "YouTube" },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#C8102E]"
                  >
                    <item.icon className="h-4 w-4" />
                  </a>
                ))}
                <a
                  href="https://wa.me/919741637635"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-green-600"
                >
                  <WhatsAppIcon />
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-[#D4A843]/25 bg-[#151515] p-6 text-center shadow-[0_20px_70px_rgba(0,0,0,0.28)]">
            <a
              href="tel:08088550033"
              className="inline-flex items-center justify-center gap-3 text-3xl font-bold tracking-wide text-[#D4A843] transition-colors hover:text-white"
            >
              <Phone className="h-7 w-7" />
              8088550033
            </a>
            <p className="mt-2 text-sm text-gray-300">Available Mon-Sat, 9AM-7PM</p>

            <a
              href="https://wa.me/919741637635"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-green-700"
            >
              <WhatsAppIcon />
              Chat on WhatsApp
            </a>

            <div className="mt-6 overflow-hidden rounded-lg border border-white/10 bg-white/5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d248781.41384809653!2d77.44047!3d13.022321!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17c0bb35da69%3A0x44a11813eb047605!2sHindustan%20Gold%20Company%20-%20Gold%20Buyers%20in%20Bangalore!5e0!3m2!1sen!2sin!4v1715746033641!5m2!1sen!2sin"
                width="100%"
                height="190"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hindustan Gold Company location"
              />
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start">
              <Image
                src="https://res.cloudinary.com/hindutan-gold-company/image/upload/c_scale,f_auto,q_auto,w_180,h_150/v1588561171/hgc_logo_gtfcyd.png"
                alt="Hindustan Gold Company"
                width={132}
                height={110}
                loading="eager"
                className="object-contain"
              />
            </div>

            <h3 className="mt-5 text-xl font-bold uppercase tracking-[0.12em] text-[#D4A843]">
              Hindustan Gold Company
            </h3>
            <p className="mt-1 text-sm text-gray-400">ISO 9001 - 2015 Certified Company</p>

            <div className="mt-6 space-y-4 text-[15px] text-gray-200">
              <div className="flex items-start justify-center gap-3 lg:justify-start">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#C8102E]" />
                <p>No. 24, 3rd Floor, RK Terminus Ganga Nagara, Bellary Main Road, Bengaluru - 560032</p>
              </div>
              <div className="flex items-center justify-center gap-3 lg:justify-start">
                <Mail className="h-5 w-5 flex-shrink-0 text-[#C8102E]" />
                <a href="mailto:info@hindustangoldcompany.com" className="break-all transition-colors hover:text-[#D4A843]">
                  info@hindustangoldcompany.com
                </a>
              </div>
              <div className="flex items-center justify-center gap-3 lg:justify-start">
                <Phone className="h-5 w-5 flex-shrink-0 text-[#C8102E]" />
                <a href="tel:08088550033" className="font-semibold transition-colors hover:text-[#D4A843]">
                  8088550033
                </a>
              </div>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-3 border-t border-white/10 pt-5 text-sm text-gray-300">
              {policyLinks.map((item) => (
                <Link key={item.href} href={item.href} className="transition-colors hover:text-[#D4A843]">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs leading-relaxed text-gray-500">
          <p>
            <strong className="text-gray-400">Disclaimer:</strong> Hindustan Gold Company is committed to fair trade jewelry and upholds strong values on humanitarian issues. Selling looted or counterfeit gold is considered a criminal offense. Individuals aged 20 or younger can sell gold with parental permission. Our company does not purchase stolen or fake gold.
          </p>
          <p className="mt-4 text-gray-600">Copyright {new Date().getFullYear()}, Hindustan Gold Company. All Rights Reserved.</p>
        </div>
      </div>

      <a
        href="https://wa.me/919741637635"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-colors hover:bg-green-600"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon className="h-7 w-7" />
        <span className="sr-only">Chat on WhatsApp - Need Help?</span>
      </a>
    </footer>
  );
}
