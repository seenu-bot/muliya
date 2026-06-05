"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { AdminSidebar } from "../components/AdminSidebar";
import { Plus, Pencil, Trash2, HelpCircle, RefreshCw, X, Check } from "lucide-react";

interface FAQ { _id: string; question: string; answer: string; category: string; isActive: boolean; order: number; }

const emptyFaq = { question: "", answer: "", category: "General", isActive: true, order: 0 };

export default function AdminFAQs() {
  const router = useRouter();
  const [faqs, setFaqs] = React.useState<FAQ[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [modal, setModal] = React.useState<"add" | "edit" | null>(null);
  const [form, setForm] = React.useState<typeof emptyFaq & { _id?: string }>(emptyFaq);
  const [saving, setSaving] = React.useState(false);
  const [deleteId, setDeleteId] = React.useState<string | null>(null);

  const getToken = () => typeof window !== "undefined" ? (localStorage.getItem("hgc_admin_token") ?? "") : "";
  const getHeaders = () => ({ "Content-Type": "application/json", Authorization: `Bearer ${getToken()}` });

  async function load() {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/faqs", { headers: getHeaders() });
      if (res.status === 401) { router.push("/admin/login"); return; }
      const data = await res.json();
      setFaqs(data.faqs || []);
    } finally { setLoading(false); }
  }

  async function save() {
    setSaving(true);
    try {
      const method = modal === "edit" ? "PUT" : "POST";
      const res = await fetch("/api/admin/faqs", { method, headers: getHeaders(), body: JSON.stringify(form) });
      if (res.ok) { setModal(null); load(); }
    } finally { setSaving(false); }
  }

  async function remove(id: string) {
    await fetch("/api/admin/faqs", { method: "DELETE", headers: getHeaders(), body: JSON.stringify({ id }) });
    setDeleteId(null); load();
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
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">FAQs</h1>
            <p className="text-gray-500 text-sm mt-0.5">{faqs.length} questions</p>
          </div>
          <div className="flex gap-2">
            <button onClick={load} className="flex items-center gap-1.5 bg-white border border-gray-200 text-gray-600 text-sm px-3 py-2 rounded-lg hover:bg-gray-50"><RefreshCw className="w-3.5 h-3.5" /> Refresh</button>
            <button onClick={() => { setForm(emptyFaq); setModal("add"); }} className="flex items-center gap-2 bg-[#C8102E] hover:bg-[#a00d25] text-white font-semibold text-sm px-4 py-2 rounded-lg">
              <Plus className="w-4 h-4" /> Add FAQ
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          {loading ? (
            <div className="p-10 text-center text-gray-400">Loading FAQs...</div>
          ) : faqs.length === 0 ? (
            <div className="p-10 text-center text-gray-400">
              <HelpCircle className="w-10 h-10 mx-auto mb-3 opacity-30" />
              <p className="font-medium">No FAQs yet. Click "Add FAQ" to create one.</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-50">
              {faqs.map((faq, i) => (
                <div key={faq._id} className="px-6 py-4 hover:bg-gray-50 flex items-start gap-4">
                  <span className="text-sm font-bold text-gray-300 w-6 flex-shrink-0 mt-0.5">{i + 1}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-900 text-sm">{faq.question}</p>
                    <p className="text-gray-500 text-sm mt-1 line-clamp-2">{faq.answer}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">{faq.category}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${faq.isActive ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                        {faq.isActive ? "Active" : "Inactive"}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-1 flex-shrink-0">
                    <button onClick={() => { setForm(faq); setModal("edit"); }} className="text-blue-500 hover:text-blue-700 p-1 rounded hover:bg-blue-50"><Pencil className="w-4 h-4" /></button>
                    <button onClick={() => setDeleteId(faq._id)} className="text-red-500 hover:text-red-700 p-1 rounded hover:bg-red-50"><Trash2 className="w-4 h-4" /></button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {modal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg">
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <h2 className="text-lg font-bold">{modal === "add" ? "Add FAQ" : "Edit FAQ"}</h2>
              <button onClick={() => setModal(null)}><X className="w-5 h-5 text-gray-400" /></button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Question *</label>
                <input value={form.question} onChange={e => setForm(f => ({ ...f, question: e.target.value }))}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8102E]/30"
                  placeholder="Enter the question" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Answer *</label>
                <textarea value={form.answer} onChange={e => setForm(f => ({ ...f, answer: e.target.value }))} rows={4}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8102E]/30 resize-none"
                  placeholder="Enter the answer" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <input value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8102E]/30"
                    placeholder="General" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Order</label>
                  <input type="number" value={form.order} onChange={e => setForm(f => ({ ...f, order: +e.target.value }))}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8102E]/30" />
                </div>
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" id="active" checked={form.isActive} onChange={e => setForm(f => ({ ...f, isActive: e.target.checked }))} className="w-4 h-4 accent-[#C8102E]" />
                <label htmlFor="active" className="text-sm font-medium text-gray-700">Active (visible on website)</label>
              </div>
            </div>
            <div className="px-6 py-4 border-t flex justify-end gap-3">
              <button onClick={() => setModal(null)} className="px-4 py-2 text-sm text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50">Cancel</button>
              <button onClick={save} disabled={saving} className="flex items-center gap-2 px-5 py-2 bg-[#C8102E] hover:bg-[#a00d25] disabled:opacity-60 text-white text-sm font-bold rounded-lg">
                <Check className="w-4 h-4" />{saving ? "Saving..." : "Save FAQ"}
              </button>
            </div>
          </div>
        </div>
      )}

      {deleteId && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl text-center">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4"><Trash2 className="w-6 h-6 text-red-600" /></div>
            <h3 className="font-bold text-gray-900 text-lg">Delete this FAQ?</h3>
            <div className="mt-5 flex gap-3">
              <button onClick={() => setDeleteId(null)} className="flex-1 border border-gray-200 text-gray-600 text-sm font-semibold py-2 rounded-lg">Cancel</button>
              <button onClick={() => remove(deleteId)} className="flex-1 bg-red-600 hover:bg-red-700 text-white text-sm font-bold py-2 rounded-lg">Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


