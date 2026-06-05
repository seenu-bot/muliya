"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  BarChart3, Users, MapPin, FileText, HelpCircle,
  Briefcase, Settings, LogOut, TrendingUp, RefreshCw, Database,
} from "lucide-react";

const menuItems = [
  { label: "Leads",      href: "/admin/leads",      icon: Users,     color: "bg-blue-500" },
  { label: "Branches",   href: "/admin/branches",   icon: MapPin,    color: "bg-green-500" },
  { label: "Blog Posts", href: "/admin/blogs",      icon: FileText,  color: "bg-purple-500" },
  { label: "FAQs",       href: "/admin/faqs",       icon: HelpCircle,color: "bg-yellow-500" },
  { label: "Gold Price", href: "/admin/gold-price", icon: TrendingUp,color: "bg-amber-500" },
  { label: "Services",   href: "/admin/services",   icon: Briefcase, color: "bg-orange-500" },
  { label: "Settings",   href: "/admin/settings",   icon: Settings,  color: "bg-gray-500" },
];

const statusColors: Record<string, string> = {
  new: "bg-red-100 text-red-700",
  contacted: "bg-yellow-100 text-yellow-700",
  resolved: "bg-green-100 text-green-700",
};
const typeColors: Record<string, string> = {
  contact: "bg-blue-100 text-blue-700",
  career: "bg-green-100 text-green-700",
  franchise: "bg-purple-100 text-purple-700",
};

interface Stats { totalLeads: number; newLeads: number; branches: number; publishedBlogs: number; activeFAQs: number; }
interface Lead { _id: string; name: string; phone: string; type: string; subject: string; status: string; createdAt: string; }

export default function AdminDashboard() {
  const router = useRouter();
  const [stats, setStats]           = React.useState<Stats | null>(null);
  const [recentLeads, setLeads]     = React.useState<Lead[]>([]);
  const [loading, setLoading]       = React.useState(true);
  const [error, setError]           = React.useState("");
  const [seeding, setSeeding]       = React.useState(false);
  const [seedResult, setSeedResult] = React.useState<Record<string,string> | null>(null);

  function getToken() {
    return typeof window !== "undefined" ? localStorage.getItem("hgc_admin_token") : null;
  }

  async function fetchDashboard() {
    const token = getToken();
    if (!token) { router.push("/admin/login"); return; }
    setLoading(true); setError("");
    try {
      const res = await fetch("/api/admin/dashboard", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.status === 401) { localStorage.removeItem("hgc_admin_token"); router.push("/admin/login"); return; }
      if (!res.ok) throw new Error(`Server error ${res.status}`);
      const data = await res.json();
      setStats(data.stats);
      setLeads(data.recentLeads || []);
    } catch (e: any) {
      setError(e.message || "Could not load dashboard data.");
    } finally { setLoading(false); }
  }

  async function seedData() {
    const token = getToken();
    if (!token) return;
    setSeeding(true); setSeedResult(null);
    try {
      const res = await fetch("/api/admin/seed", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ collections: ["branches", "faqs", "blogs", "goldprice"] }),
      });
      const data = await res.json();
      if (res.ok) { setSeedResult(data.results); fetchDashboard(); }
      else setSeedResult({ error: data.error });
    } finally { setSeeding(false); }
  }

  function logout() { localStorage.removeItem("hgc_admin_token"); router.push("/admin/login"); }

  React.useEffect(() => {
    if (!getToken()) { router.push("/admin/login"); return; }
    fetchDashboard();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 bottom-0 w-64 bg-[#1a1a1a] text-white flex flex-col z-20">
        <div className="p-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#C8102E] rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">HGC</div>
            <div>
              <p className="font-bold text-sm leading-tight">Hindustan Gold Co.</p>
              <p className="text-xs text-gray-400">Admin Panel</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#C8102E] text-white text-sm font-semibold mb-2">
            <BarChart3 className="w-4 h-4" /> Dashboard
          </div>
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 text-sm transition-colors">
              <item.icon className="w-4 h-4" />{item.label}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-white/10">
          <button onClick={logout} className="flex items-center gap-3 px-3 py-2.5 w-full rounded-lg text-gray-400 hover:text-white hover:bg-white/5 text-sm transition-colors">
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="ml-64 flex-1 p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-500 text-sm mt-0.5">Hindustan Gold Company — Admin Panel</p>
          </div>
          <div className="flex gap-2">
            <button onClick={fetchDashboard}
              className="flex items-center gap-1.5 bg-white border border-gray-200 text-gray-600 text-sm px-3 py-2 rounded-lg hover:bg-gray-50">
              <RefreshCw className="w-3.5 h-3.5" /> Refresh
            </button>
          </div>
        </div>

        {/* Seed Data Banner — shown when DB is empty */}
        {!loading && stats && stats.branches === 0 && (
          <div className="mb-6 bg-amber-50 border border-amber-200 rounded-xl p-5">
            <div className="flex items-start gap-4">
              <Database className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="font-bold text-amber-800">Database is empty — Populate with real data</p>
                <p className="text-amber-700 text-sm mt-1">
                  Click below to seed your MongoDB with all real branch data, FAQs, blog posts, and gold prices from the live website.
                  After seeding, all website pages will show live data from your admin panel.
                </p>
                {seedResult && (
                  <div className="mt-3 bg-white rounded-lg p-3 border border-amber-100 text-sm space-y-1">
                    {Object.entries(seedResult).map(([k, v]) => (
                      <p key={k}><span className="font-semibold capitalize">{k}:</span> <span className="text-gray-600">{v}</span></p>
                    ))}
                  </div>
                )}
              </div>
              <button onClick={seedData} disabled={seeding}
                className="flex-shrink-0 flex items-center gap-2 bg-amber-600 hover:bg-amber-700 disabled:opacity-60 text-white font-bold px-4 py-2 rounded-lg text-sm transition-colors">
                <Database className="w-4 h-4" />
                {seeding ? "Seeding..." : "Seed Real Data"}
              </button>
            </div>
          </div>
        )}

        {/* Seed success */}
        {seedResult && stats && stats.branches > 0 && (
          <div className="mb-6 bg-green-50 border border-green-200 rounded-xl p-4">
            <p className="text-green-700 font-semibold text-sm">&#10003; Database seeded successfully! Website now shows live data.</p>
            <div className="mt-2 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-green-600">
              {Object.entries(seedResult).map(([k, v]) => (
                <p key={k}><span className="font-semibold capitalize">{k}:</span> {v}</p>
              ))}
            </div>
          </div>
        )}

        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 text-red-700 rounded-xl px-5 py-3 text-sm">
            {error} <button onClick={fetchDashboard} className="ml-2 underline">Retry</button>
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {[
            { label: "Total Leads",    value: stats?.totalLeads,    color: "text-blue-600",   bg: "bg-blue-50" },
            { label: "New Leads",      value: stats?.newLeads,      color: "text-red-600",    bg: "bg-red-50" },
            { label: "Branches",       value: stats?.branches,      color: "text-green-600",  bg: "bg-green-50" },
            { label: "Blog Posts",     value: stats?.publishedBlogs,color: "text-purple-600", bg: "bg-purple-50" },
            { label: "Active FAQs",    value: stats?.activeFAQs,    color: "text-yellow-600", bg: "bg-yellow-50" },
          ].map((s) => (
            <div key={s.label} className={`${s.bg} rounded-xl p-5 border border-white shadow-sm`}>
              <p className="text-gray-500 text-xs font-medium">{s.label}</p>
              <p className={`text-3xl font-bold mt-1 ${s.color}`}>{loading ? "…" : s.value ?? 0}</p>
            </div>
          ))}
        </div>

        {/* Recent Leads */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-8">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-50">
            <h2 className="font-bold text-gray-900">Recent Leads</h2>
            <Link href="/admin/leads" className="text-sm text-[#C8102E] hover:underline font-medium">View All →</Link>
          </div>
          {loading ? (
            <div className="px-6 py-8 text-center text-gray-400 text-sm">Loading...</div>
          ) : recentLeads.length === 0 ? (
            <div className="px-6 py-8 text-center text-gray-400 text-sm">
              No leads yet. They will appear when visitors submit Contact, Career, or Franchise forms.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    {["Name", "Phone", "Type", "Subject", "Status", "Date"].map(h => (
                      <th key={h} className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {recentLeads.map((lead) => (
                    <tr key={lead._id} className="hover:bg-gray-50">
                      <td className="px-5 py-3 text-sm font-medium text-gray-900">{lead.name}</td>
                      <td className="px-5 py-3 text-sm">
                        <a href={`tel:${lead.phone}`} className="text-[#C8102E] hover:underline">{lead.phone}</a>
                      </td>
                      <td className="px-5 py-3">
                        <span className={`text-xs px-2 py-1 rounded-full capitalize font-medium ${typeColors[lead.type] ?? "bg-gray-100 text-gray-600"}`}>
                          {lead.type}
                        </span>
                      </td>
                      <td className="px-5 py-3 text-sm text-gray-600 max-w-[180px] truncate">{lead.subject}</td>
                      <td className="px-5 py-3">
                        <span className={`text-xs px-2 py-1 rounded-full capitalize font-medium ${statusColors[lead.status] ?? "bg-gray-100 text-gray-600"}`}>
                          {lead.status}
                        </span>
                      </td>
                      <td className="px-5 py-3 text-xs text-gray-400">
                        {new Date(lead.createdAt).toLocaleDateString("en-IN")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Quick links */}
        <div>
          <h2 className="font-bold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {menuItems.map((item) => (
              <Link key={item.label} href={item.href}
                className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex items-center gap-3">
                <div className={`w-9 h-9 ${item.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <item.icon className="w-4 h-4 text-white" />
                </div>
                <p className="font-semibold text-gray-900 text-sm">{item.label}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* How it works info */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-5">
          <h3 className="font-bold text-blue-900 text-sm mb-2">How Dynamic Sync Works</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs text-blue-700">
            <div className="bg-white rounded-lg p-3 border border-blue-100">
              <p className="font-bold">Gold Price</p>
              <p className="mt-1 text-blue-600">Update rates here &#8594; /check-gold-price shows new rates within 30 seconds</p>
            </div>
            <div className="bg-white rounded-lg p-3 border border-blue-100">
              <p className="font-bold">Branches</p>
              <p className="mt-1 text-blue-600">Add/edit branches here &#8594; /branches page updates within 60 seconds</p>
            </div>
            <div className="bg-white rounded-lg p-3 border border-blue-100">
              <p className="font-bold">Blog Posts</p>
              <p className="mt-1 text-blue-600">Publish posts here &#8594; /blog page shows them within 60 seconds</p>
            </div>
            <div className="bg-white rounded-lg p-3 border border-blue-100">
              <p className="font-bold">FAQs</p>
              <p className="mt-1 text-blue-600">Add/edit FAQs here &#8594; /faq page updates within 60 seconds</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
