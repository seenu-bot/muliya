"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Phone, User, Calendar, RefreshCw, Download } from "lucide-react";

interface Lead {
  _id: string;
  type: string;
  name: string;
  phone: string;
  email?: string;
  subject?: string;
  message?: string;
  position?: string;
  city?: string;
  investment?: string;
  status: string;
  createdAt: string;
}

const typeColors: Record<string, string> = {
  contact: "bg-blue-100 text-blue-700",
  career: "bg-green-100 text-green-700",
  franchise: "bg-purple-100 text-purple-700",
};

const statusColors: Record<string, string> = {
  new: "bg-red-100 text-red-700",
  contacted: "bg-yellow-100 text-yellow-700",
  resolved: "bg-green-100 text-green-700",
  spam: "bg-gray-100 text-gray-500",
};

export default function AdminLeadsPage() {
  const router = useRouter();
  const [leads, setLeads] = React.useState<Lead[]>([]);
  const [total, setTotal] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  const [filter, setFilter] = React.useState({ type: "", status: "" });
  const [selected, setSelected] = React.useState<Lead | null>(null);

  const getToken = () => (typeof window !== "undefined" ? localStorage.getItem("hgc_admin_token") : null);

  async function fetchLeads() {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (filter.type) params.set("type", filter.type);
      if (filter.status) params.set("status", filter.status);
      const res = await fetch(`/api/admin/leads?${params}`, {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      if (res.status === 401) { router.push("/admin/login"); return; }
      const data = await res.json();
      setLeads(data.leads || []);
      setTotal(data.total || 0);
    } catch {
      // ignore
    } finally {
      setLoading(false);
    }
  }

  async function updateStatus(id: string, status: string) {
    await fetch("/api/admin/leads", {
      method: "PATCH",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${getToken()}` },
      body: JSON.stringify({ id, status }),
    });
    fetchLeads();
  }

  function exportCSV() {
    const headers = ["Name", "Phone", "Email", "Type", "Subject", "City", "Investment", "Status", "Date"];
    const rows = leads.map((l) => [
      l.name, l.phone, l.email || "", l.type, l.subject || l.position || "", l.city || "", l.investment || "", l.status,
      new Date(l.createdAt).toLocaleDateString("en-IN"),
    ]);
    const csv = [headers, ...rows].map((r) => r.map((c) => `"${c}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "hgc_leads.csv"; a.click();
  }

  React.useEffect(() => {
    if (!getToken()) { router.push("/admin/login"); return; }
    fetchLeads();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 bottom-0 w-64 bg-[#1a1a1a] text-white p-4 z-20">
        <div className="flex items-center gap-3 p-2 mb-4">
          <div className="w-8 h-8 bg-[#C8102E] rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0">HGC</div>
          <p className="font-bold text-sm">Admin Panel</p>
        </div>
        <Link href="/admin/dashboard" className="flex items-center gap-2 px-3 py-2 text-gray-400 hover:text-white text-sm rounded-lg hover:bg-white/5 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Dashboard
        </Link>
      </aside>

      <div className="ml-64 flex-1 p-8">
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Leads</h1>
            <p className="text-gray-500 text-sm mt-0.5">{total} total enquiries</p>
          </div>
          <div className="flex gap-2 flex-wrap">
            <button onClick={fetchLeads} className="flex items-center gap-1.5 bg-white border border-gray-200 text-gray-600 text-sm px-3 py-2 rounded-lg hover:bg-gray-50">
              <RefreshCw className="w-3.5 h-3.5" /> Refresh
            </button>
            <button onClick={exportCSV} className="flex items-center gap-1.5 bg-[#C8102E] text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[#a00d25]">
              <Download className="w-3.5 h-3.5" /> Export CSV
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-6 flex flex-wrap gap-3">
          <select value={filter.type} onChange={(e) => setFilter((f) => ({ ...f, type: e.target.value }))}
            className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8102E]/30">
            <option value="">All Types</option>
            <option value="contact">Contact</option>
            <option value="career">Career</option>
            <option value="franchise">Franchise</option>
          </select>
          <select value={filter.status} onChange={(e) => setFilter((f) => ({ ...f, status: e.target.value }))}
            className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8102E]/30">
            <option value="">All Status</option>
            <option value="new">New</option>
            <option value="contacted">Contacted</option>
            <option value="resolved">Resolved</option>
            <option value="spam">Spam</option>
          </select>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          {loading ? (
            <div className="p-10 text-center text-gray-400">Loading leads...</div>
          ) : leads.length === 0 ? (
            <div className="p-10 text-center text-gray-400">
              <p className="text-lg">No leads found</p>
              <p className="text-sm mt-1">Leads will appear here when visitors submit the Contact, Career, or Franchise forms.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-100">
                  <tr>
                    {["Contact", "Type", "Subject / Position", "Status", "Date", "Actions"].map((h) => (
                      <th key={h} className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {leads.map((lead) => (
                    <tr key={lead._id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <User className="w-4 h-4 text-gray-400" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900 text-sm">{lead.name}</p>
                            <a href={`tel:${lead.phone}`} className="text-xs text-[#C8102E] flex items-center gap-1 hover:underline">
                              <Phone className="w-3 h-3" />{lead.phone}
                            </a>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-4">
                        <span className={`text-xs font-medium px-2 py-1 rounded-full capitalize ${typeColors[lead.type] ?? ""}`}>{lead.type}</span>
                      </td>
                      <td className="px-5 py-4 text-sm text-gray-700 max-w-[200px] truncate">
                        {lead.subject || lead.position || lead.city || "â€”"}
                      </td>
                      <td className="px-5 py-4">
                        <select
                          value={lead.status}
                          onChange={(e) => updateStatus(lead._id, e.target.value)}
                          className={`text-xs font-medium px-2 py-1 rounded-full border-0 cursor-pointer focus:outline-none ${statusColors[lead.status] ?? ""}`}
                        >
                          <option value="new">New</option>
                          <option value="contacted">Contacted</option>
                          <option value="resolved">Resolved</option>
                          <option value="spam">Spam</option>
                        </select>
                      </td>
                      <td className="px-5 py-4 text-xs text-gray-400 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(lead.createdAt).toLocaleDateString("en-IN")}
                      </td>
                      <td className="px-5 py-4">
                        <button onClick={() => setSelected(lead)} className="text-xs text-[#C8102E] hover:underline font-medium">
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Detail modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900">Lead Details</h2>
              <button onClick={() => setSelected(null)} className="text-gray-400 hover:text-gray-600 text-xl leading-none">âœ•</button>
            </div>
            <div className="space-y-3 text-sm">
              {[
                ["Name", selected.name],
                ["Phone", selected.phone],
                ["Email", selected.email],
                ["Type", selected.type],
                ["Subject", selected.subject],
                ["Position", selected.position],
                ["City", selected.city],
                ["Investment", selected.investment],
                ["Message", selected.message],
                ["Status", selected.status],
                ["Date", new Date(selected.createdAt).toLocaleString("en-IN")],
              ].filter(([, v]) => v).map(([k, v]) => (
                <div key={k as string} className="flex gap-2">
                  <span className="font-semibold text-gray-500 w-24 flex-shrink-0">{k}:</span>
                  <span className="text-gray-800 break-words">{v}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 flex gap-2">
              <a href={`tel:${selected.phone}`} className="flex-1 bg-[#C8102E] text-white text-sm font-bold py-2 rounded-lg text-center hover:bg-[#a00d25]">
                Call Now
              </a>
              {selected.email && (
                <a href={`mailto:${selected.email}`} className="flex-1 border border-[#C8102E] text-[#C8102E] text-sm font-semibold py-2 rounded-lg text-center hover:bg-[#C8102E] hover:text-white transition-colors">
                  Send Email
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


