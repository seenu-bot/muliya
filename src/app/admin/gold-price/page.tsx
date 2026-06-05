"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { AdminSidebar } from "../components/AdminSidebar";
import { Save, TrendingUp } from "lucide-react";

export default function AdminGoldPrice() {
  const router = useRouter();
  const [prices, setPrices] = React.useState({ "24K": "", "22K": "", "18K": "" });
  const [saving, setSaving] = React.useState(false);
  const [saved, setSaved] = React.useState(false);
  const [history, setHistory] = React.useState<any[]>([]);

  const getToken = () => typeof window !== "undefined" ? (localStorage.getItem("hgc_admin_token") ?? "") : "";
  const getHeaders = () => ({ "Content-Type": "application/json", Authorization: `Bearer ${getToken()}` });

  async function load() {
    const res = await fetch("/api/admin/gold-price", { headers: getHeaders() });
    if (res.status === 401) { router.push("/admin/login"); return; }
    const data = await res.json();
    const map: Record<string, string> = {};
    (data.prices || []).forEach((p: any) => { map[p.carat] = p.pricePerGram; });
    setPrices({ "24K": map["24K"] || "", "22K": map["22K"] || "", "18K": map["18K"] || "" });
    setHistory(data.prices || []);
  }

  async function save() {
    setSaving(true);
    const payload = Object.entries(prices)
      .filter(([, v]) => v)
      .map(([carat, price]) => ({ carat, pricePerGram: Number(price), state: "Karnataka" }));
    const res = await fetch("/api/admin/gold-price", { method: "POST", headers: getHeaders(), body: JSON.stringify(payload) });
    setSaving(false);
    if (res.ok) { setSaved(true); setTimeout(() => setSaved(false), 3000); load(); }
  }

  React.useEffect(() => {
    if (!getToken()) { router.push("/admin/login"); return; }
    load();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <AdminSidebar />
      <div className="ml-64 flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Gold Price</h1>
          <p className="text-gray-500 text-sm mt-0.5">Update today&apos;s gold buying rates</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Update form */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="font-bold text-gray-900 mb-5 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-[#D4A843]" /> Set Today&apos;s Rates (&#8377; per gram)
            </h2>
            <div className="space-y-4">
              {(["24K", "22K", "18K"] as const).map((carat) => (
                <div key={carat} className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-[#D4A843]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-[#D4A843] text-lg">{carat}</span>
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">{carat} Gold (per gram)</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">&#8377;</span>
                      <input
                        type="number"
                        value={prices[carat]}
                        onChange={e => setPrices(p => ({ ...p, [carat]: e.target.value }))}
                        className="w-full border border-gray-300 rounded-lg pl-7 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8102E]/30 focus:border-[#C8102E]"
                        placeholder="e.g. 9250"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {saved && (
              <div className="mt-4 bg-green-50 border border-green-200 text-green-700 rounded-lg px-4 py-2 text-sm">
                &#10003; Rates updated successfully! Website will show new rates within 30 seconds.
              </div>
            )}

            <button onClick={save} disabled={saving} className="mt-6 w-full flex items-center justify-center gap-2 bg-[#C8102E] hover:bg-[#a00d25] disabled:opacity-60 text-white font-bold py-3 rounded-lg text-sm transition-colors">
              <Save className="w-4 h-4" />{saving ? "Saving..." : "Update Gold Rates"}
            </button>
          </div>

          {/* Preview */}
          <div className="bg-[#1a1a1a] rounded-xl p-6 text-white">
            <h2 className="font-bold mb-1 text-[#D4A843]">Live Preview</h2>
            <p className="text-gray-500 text-xs mb-4">This is what visitors see on /check-gold-price</p>
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-2 text-left text-xs text-gray-400 font-medium uppercase">Purity</th>
                  <th className="py-2 text-right text-xs text-gray-400 font-medium uppercase">Per Gram</th>
                  <th className="py-2 text-right text-xs text-gray-400 font-medium uppercase">Per 10g</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {(["24K", "22K", "18K"] as const).map(carat => (
                  <tr key={carat}>
                    <td className="py-3 font-semibold">{carat} Gold</td>
                    <td className="py-3 text-right text-[#D4A843] font-bold">
                      {prices[carat] ? `₹${Number(prices[carat]).toLocaleString("en-IN")}` : "—"}
                    </td>
                    <td className="py-3 text-right text-gray-300">
                      {prices[carat] ? `₹${(Number(prices[carat]) * 10).toLocaleString("en-IN")}` : "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs text-gray-500 mt-4">Last updated: {new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</p>
          </div>
        </div>

        {/* History */}
        {history.length > 0 && (
          <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-50">
              <h2 className="font-bold text-gray-900">Recent Rate History</h2>
            </div>
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  {["Carat", "Rate (per gram)", "State", "Date"].map(h => (
                    <th key={h} className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {history.slice(0, 10).map((p: any) => (
                  <tr key={p._id} className="hover:bg-gray-50">
                    <td className="px-5 py-3 font-semibold text-[#D4A843]">{p.carat}</td>
                    <td className="px-5 py-3 text-gray-900 font-medium">&#8377;{Number(p.pricePerGram).toLocaleString("en-IN")}</td>
                    <td className="px-5 py-3 text-gray-600 text-sm">{p.state}</td>
                    <td className="px-5 py-3 text-gray-400 text-sm">{new Date(p.date).toLocaleDateString("en-IN")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
