import Link from "next/link";
import { AdminSidebar } from "../components/AdminSidebar";
import { ExternalLink } from "lucide-react";

const services = [
  { title: "Gold Buyers", href: "/services/best-gold", editHref: "/services/best-gold", desc: "Best Gold Buyers in India" },
  { title: "Sell Gold", href: "/services/sell-gold", editHref: "/services/sell-gold", desc: "Sell Gold at Best Price" },
  { title: "Release Pledged Gold", href: "/services/release-pledged-gold", editHref: "/services/release-pledged-gold", desc: "Release Pledged Gold Near Me" },
  { title: "Value for Gold", href: "/services/value-for-gold", editHref: "/services/value-for-gold", desc: "Free Gold Valuation" },
];

export default function AdminServices() {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      <AdminSidebar />
      <div className="ml-64 flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Services</h1>
          <p className="text-gray-500 text-sm mt-0.5">Manage service pages</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="font-bold text-gray-900 text-lg">{s.title}</h2>
              <p className="text-gray-500 text-sm mt-1">{s.desc}</p>
              <div className="mt-4 flex gap-3">
                <Link href={s.href} target="_blank"
                  className="flex items-center gap-1.5 text-sm text-[#C8102E] border border-[#C8102E] px-3 py-1.5 rounded-lg hover:bg-[#C8102E] hover:text-white transition-colors">
                  <ExternalLink className="w-3.5 h-3.5" /> View Page
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-5">
          <p className="text-blue-700 font-semibold text-sm">💡 Service pages are managed via code.</p>
          <p className="text-blue-600 text-sm mt-1">
            To edit service content, update the files in <code className="bg-blue-100 px-1.5 py-0.5 rounded text-xs">src/app/services/</code> folder.
            Dynamic service management via DB will be available in the next update.
          </p>
        </div>
      </div>
    </div>
  );
}
