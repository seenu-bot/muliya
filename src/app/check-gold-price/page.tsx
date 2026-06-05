"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
const BASE = "https://hindustangoldcompany.com";

const states = ["Karnataka", "Andhra Pradesh", "Kerala", "Telangana", "Tamil Nadu", "Maharashtra"];

// Default rates shown if admin hasn't set rates yet
const defaultRates: Record<string, number> = {
  "24K": 9250, "22K": 8479, "18K": 6938,
};

const stateMultipliers: Record<string, number> = {
  Karnataka: 1.000, "Andhra Pradesh": 1.002, Kerala: 1.005,
  Telangana: 1.001, "Tamil Nadu": 1.003, Maharashtra: 1.004,
};

interface DBRate { carat: string; pricePerGram: number; date?: string; }

export default function CheckGoldPricePage() {
  const [weight, setWeight] = React.useState("");
  const [carat, setCarat] = React.useState("22K");
  const [state, setState] = React.useState("Karnataka");
  const [result, setResult] = React.useState<number | null>(null);
  const [dbRates, setDbRates] = React.useState<Record<string, number>>({});
  const [lastUpdated, setLastUpdated] = React.useState<string>("");
  const [loading, setLoading] = React.useState(true);

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
  });

  // Fetch rates from admin panel (MongoDB)
  React.useEffect(() => {
    async function loadRates() {
      try {
        const res = await fetch("/api/public/gold-price");
        if (!res.ok) throw new Error();
        const data = await res.json();
        if (data.prices?.length > 0) {
          const map: Record<string, number> = {};
          let latestDate = "";
          data.prices.forEach((p: DBRate) => {
            map[p.carat] = p.pricePerGram;
            if (p.date && p.date > latestDate) latestDate = p.date;
          });
          setDbRates(map);
          if (latestDate) setLastUpdated(new Date(latestDate).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" }));
        }
      } catch { /* use defaults */ }
      finally { setLoading(false); }
    }
    loadRates();
  }, []);

  function getBaseRate(c: string): number {
    return dbRates[c] ?? defaultRates[c] ?? 0;
  }

  function getRate(c: string, s: string) {
    const base = getBaseRate(c);
    const mult = stateMultipliers[s] ?? 1;
    return { perGram: Math.round(base * mult), per10g: Math.round(base * mult * 10) };
  }

  function calculate() {
    const w = parseFloat(weight);
    if (!w || w <= 0) return;
    setResult(Math.round(w * getRate(carat, state).perGram));
  }

  const isFromDB = Object.keys(dbRates).length > 0;

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#1a1a1a] to-[#3d0000] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Check Gold Price</h1>
          <p className="text-gray-300 mt-3 text-lg">Today&apos;s gold buying rates — updated by our admin panel.</p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-8 flex flex-col items-center gap-3">
            <Image src={`${BASE}/static/img/iso-certified.svg`} alt="ISO 9001-2015 Certified" width={70} height={70} />
            <div>
              <p className="text-gray-700 font-semibold">Gold Rate for Today — 1 Gram Gold in INR</p>
              <p className="text-gray-500 text-sm">{today}</p>
              {isFromDB && lastUpdated && (
                <p className="text-xs text-green-600 font-medium mt-1">✓ Rates updated by admin on {lastUpdated}</p>
              )}
              {!isFromDB && !loading && (
                <p className="text-xs text-amber-600 font-medium mt-1">⚠ Showing indicative rates. Admin: update rates at /admin/gold-price</p>
              )}
              <p className="text-xs text-gray-400 mt-1">* Visit our branch for exact valuation at current MCX rate.</p>
            </div>
          </div>

          {/* State selector */}
          <div className="mb-6 flex flex-wrap items-center gap-3 justify-center">
            <span className="text-sm font-medium text-gray-700">Your State:</span>
            <div className="flex flex-wrap gap-2">
              {states.map(s => (
                <button key={s} onClick={() => { setState(s); setResult(null); }}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${state === s ? "bg-[#C8102E] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Gold Rate Table */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-10">
            <div className="bg-[#1a1a1a] px-6 py-3 flex items-center justify-between">
              <h2 className="text-white font-semibold text-sm">Hindustan Gold Company Buying Rate — {state}</h2>
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${isFromDB ? "bg-green-900 text-green-300" : "bg-yellow-900 text-yellow-300"}`}>
                {loading ? "Loading..." : isFromDB ? "Live Rate" : "Indicative Rate"}
              </span>
            </div>
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Purity</th>
                  <th className="px-6 py-3 text-right text-sm font-semibold text-gray-700">Per Gram (₹)</th>
                  <th className="px-6 py-3 text-right text-sm font-semibold text-gray-700">Per 10g (₹)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {(["24K", "22K", "18K"] as const).map(c => {
                  const r = getRate(c, state);
                  return (
                    <tr key={c} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <span className="font-bold text-gray-900">{c} Gold</span>
                        <span className="text-xs text-gray-400 ml-2">
                          {c === "24K" ? "(99.9% pure)" : c === "22K" ? "(91.6% pure)" : "(75% pure)"}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        {loading ? (
                          <span className="text-gray-300 text-lg font-bold">—</span>
                        ) : (
                          <span className="text-[#C8102E] font-bold text-lg">₹{r.perGram.toLocaleString("en-IN")}</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-right text-gray-700 font-medium">
                        {loading ? "—" : `₹${r.per10g.toLocaleString("en-IN")}`}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Calculator */}
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2d0000] rounded-2xl p-8 text-white mb-10">
            <h2 className="text-2xl font-bold mb-2">Gold Price Calculator</h2>
            <p className="text-gray-400 text-sm mb-6">Enter your gold details to estimate its value at today&apos;s rate.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">State</label>
                <select value={state} onChange={e => { setState(e.target.value); setResult(null); }}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A843]/50">
                  {states.map(s => <option key={s} value={s} className="bg-gray-900">{s}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Gold Purity</label>
                <select value={carat} onChange={e => { setCarat(e.target.value); setResult(null); }}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A843]/50">
                  <option value="24K" className="bg-gray-900">24K — 99.9% pure</option>
                  <option value="22K" className="bg-gray-900">22K — 91.6% pure</option>
                  <option value="18K" className="bg-gray-900">18K — 75% pure</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Weight (grams)</label>
                <input type="number" min="0" step="0.1" value={weight}
                  onChange={e => { setWeight(e.target.value); setResult(null); }}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A843]/50"
                  placeholder="e.g. 10.5" />
              </div>
              <div className="flex flex-col justify-end">
                <button onClick={calculate} disabled={loading}
                  className="bg-[#C8102E] hover:bg-[#a00d25] disabled:opacity-50 text-white font-bold py-3 px-6 rounded-lg transition-colors text-sm">
                  Calculate
                </button>
              </div>
            </div>
            {result !== null && (
              <div className="p-5 bg-[#D4A843]/15 border border-[#D4A843]/30 rounded-xl">
                <p className="text-gray-300 text-sm">Estimated Gold Value</p>
                <p className="text-4xl font-bold text-[#D4A843] mt-1">₹{result.toLocaleString("en-IN")}</p>
                <p className="text-gray-400 text-xs mt-2">
                  {weight}g of {carat} gold @ ₹{getRate(carat, state).perGram.toLocaleString("en-IN")}/g ({state})
                </p>
                <p className="text-gray-500 text-xs mt-1">* Final value confirmed at branch after XRF purity test.</p>
              </div>
            )}
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-4 font-medium">Ready to sell? Visit your nearest branch.</p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link href="/branches" className="bg-[#C8102E] hover:bg-[#a00d25] text-white font-bold px-6 py-3 rounded-lg text-sm transition-colors">
                📍 Find Branch Near Me
              </Link>
              <a href="tel:08088550033" className="border border-[#C8102E] text-[#C8102E] hover:bg-[#C8102E] hover:text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors">
                📞 8088550033
              </a>
              <a href="https://wa.me/919741637635" target="_blank" rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors">
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
