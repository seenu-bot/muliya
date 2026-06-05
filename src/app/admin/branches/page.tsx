"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { AdminSidebar } from "../components/AdminSidebar";
import { Plus, Pencil, Trash2, MapPin, RefreshCw, X, Check } from "lucide-react";

interface Branch {
  _id: string; name: string; fullName: string; city: string; state: string;
  address: string; phone: string; email: string; mapsLink?: string; img?: string; isActive: boolean; order: number;
}

const empty: Omit<Branch, "_id"> = {
  name: "", fullName: "", city: "", state: "Karnataka",
  address: "", phone: "8088550033", email: "info@hindustangoldcompany.com",
  mapsLink: "", img: "", isActive: true, order: 0,
};

export default function AdminBranches() {
  const router = useRouter();
  const [branches, setBranches] = React.useState<Branch[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [modal, setModal] = React.useState<"add" | "edit" | null>(null);
  const [form, setForm] = React.useState<Omit<Branch, "_id"> & { _id?: string }>(empty);
  const [saving, setSaving] = React.useState(false);
  const [deleteId, setDeleteId] = React.useState<string | null>(null);

  const getToken = () => typeof window !== "undefined" ? (localStorage.getItem("hgc_admin_token") ?? "") : "";
  const getHeaders = () => ({ "Content-Type": "application/json", Authorization: `Bearer ${getToken()}` });

  async function load() {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/branches", { headers: getHeaders() });
      if (res.status === 401) { router.push("/admin/login"); return; }
      const data = await res.json();
      setBranches(data.branches || []);
    } finally { setLoading(false); }
  }

  async function save() {
    setSaving(true);
    try {
      const method = modal === "edit" ? "PUT" : "POST";
      const res = await fetch("/api/admin/branches", { method, headers: getHeaders(), body: JSON.stringify(form) });
      if (res.ok) { setModal(null); load(); }
    } finally { setSaving(false); }
  }

  async function remove(id: string) {
    await fetch("/api/admin/branches", { method: "DELETE", headers: getHeaders(), body: JSON.stringify({ id }) });
    setDeleteId(null); load();
  }

  React.useEffect(() => {
    if (!getToken()) { router.push("/admin/login"); return; }
    load();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fields = [
    { label: "Branch Name (short)", key: "name",     ph: "e.g. RT Nagar" },
    { label: "Full Name",           key: "fullName",  ph: "e.g. Hindustan Gold Buyers RT Nagar" },
    { label: "City",                key: "city",      ph: "Bengaluru" },
    { label: "State",               key: "state",     ph: "Karnataka" },
    { label: "Full Address",        key: "address",   ph: "Street, Area, City - Pincode" },
    { label: "Phone",               key: "phone",     ph: "8088550033" },
    { label: "Email",               key: "email",     ph: "info@hindustangoldcompany.com" },
    { label: "Google Maps Link",    key: "mapsLink",  ph: "https://maps.app.goo.gl/..." },
    { label: "Branch Image URL",    key: "img",       ph: "https://hindustangoldcompany.com/static/upload/..." },
    { label: "Map Thumbnail URL",   key: "mapImg",    ph: "https://hindustangoldcompany.com/static/upload/...map.png" },
  ] as const;

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <AdminSidebar />
      <div className="ml-64 flex-1 p-8">

        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Branches</h1>
            <p className="text-gray-500 text-sm mt-0.5">{branches.length} total branches</p>
          </div>
          <div className="flex gap-2">
            <button onClick={load} className="flex items-center gap-1.5 bg-white border border-gray-200 text-gray-600 text-sm px-3 py-2 rounded-lg hover:bg-gray-50">
              <RefreshCw className="w-3.5 h-3.5" /> Refresh
            </button>
            <button onClick={() => { setForm(empty); setModal("add"); }}
              className="flex items-center gap-2 bg-[#C8102E] hover:bg-[#a00d25] text-white font-semibold text-sm px-4 py-2 rounded-lg">
              <Plus className="w-4 h-4" /> Add Branch
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          {loading ? (
            <div className="p-10 text-center text-gray-400">Loading branches...</div>
          ) : branches.length === 0 ? (
            <div className="p-10 text-center text-gray-400">
              <MapPin className="w-10 h-10 mx-auto mb-3 opacity-30" />
              <p className="font-medium">No branches yet</p>
              <p className="text-sm mt-1">Click "Add Branch" to add your first branch, or use the Seed Data button on the Dashboard.</p>
            </div>
          ) : (
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  {["Name", "City / State", "Address", "Phone", "Status", "Actions"].map(h => (
                    <th key={h} className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {branches.map(b => (
                  <tr key={b._id} className="hover:bg-gray-50">
                    <td className="px-5 py-3">
                      <p className="font-semibold text-gray-900 text-sm">{b.name}</p>
                      <p className="text-xs text-gray-400">{b.fullName}</p>
                    </td>
                    <td className="px-5 py-3 text-sm text-gray-600">{b.city}, {b.state}</td>
                    <td className="px-5 py-3 text-sm text-gray-600 max-w-[200px] truncate">{b.address}</td>
                    <td className="px-5 py-3 text-sm text-gray-600">{b.phone}</td>
                    <td className="px-5 py-3">
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${b.isActive ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                        {b.isActive ? "Active" : "Inactive"}
                      </span>
                    </td>
                    <td className="px-5 py-3">
                      <div className="flex gap-2">
                        <button onClick={() => { setForm(b); setModal("edit"); }}
                          className="text-blue-500 hover:text-blue-700 p-1 rounded hover:bg-blue-50">
                          <Pencil className="w-4 h-4" />
                        </button>
                        <button onClick={() => setDeleteId(b._id)}
                          className="text-red-500 hover:text-red-700 p-1 rounded hover:bg-red-50">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* Add / Edit Modal */}
      {modal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h2 className="text-lg font-bold text-gray-900">{modal === "add" ? "Add New Branch" : "Edit Branch"}</h2>
              <button onClick={() => setModal(null)} className="text-gray-400 hover:text-gray-600"><X className="w-5 h-5" /></button>
            </div>
            <div className="p-6 space-y-4">
              {fields.map(({ label, key, ph }) => (
                <div key={key}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
                  <input
                    value={(form as any)[key] ?? ""}
                    onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                    placeholder={ph}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8102E]/30 focus:border-[#C8102E]"
                  />
                </div>
              ))}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Display Order</label>
                  <input type="number" value={form.order}
                    onChange={e => setForm(f => ({ ...f, order: +e.target.value }))}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8102E]/30" />
                </div>
                <div className="flex items-end pb-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" checked={form.isActive}
                      onChange={e => setForm(f => ({ ...f, isActive: e.target.checked }))}
                      className="w-4 h-4 accent-[#C8102E]" />
                    <span className="text-sm font-medium text-gray-700">Active (visible on website)</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="px-6 py-4 border-t border-gray-100 flex justify-end gap-3">
              <button onClick={() => setModal(null)}
                className="px-4 py-2 text-sm text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50">Cancel</button>
              <button onClick={save} disabled={saving}
                className="flex items-center gap-2 px-5 py-2 bg-[#C8102E] hover:bg-[#a00d25] disabled:opacity-60 text-white text-sm font-bold rounded-lg">
                <Check className="w-4 h-4" />{saving ? "Saving..." : "Save Branch"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirm */}
      {deleteId && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl text-center">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trash2 className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg">Delete Branch?</h3>
            <p className="text-gray-500 text-sm mt-1">This cannot be undone.</p>
            <div className="mt-5 flex gap-3">
              <button onClick={() => setDeleteId(null)}
                className="flex-1 border border-gray-200 text-gray-600 text-sm font-semibold py-2 rounded-lg">Cancel</button>
              <button onClick={() => remove(deleteId)}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white text-sm font-bold py-2 rounded-lg">Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
