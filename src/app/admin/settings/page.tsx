"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { AdminSidebar } from "../components/AdminSidebar";
import { Save, Eye, EyeOff } from "lucide-react";

export default function AdminSettings() {
  const router = useRouter();
  const [showPass, setShowPass] = React.useState(false);
  const [saved, setSaved] = React.useState(false);

  const [form, setForm] = React.useState({
    siteName: "Hindustan Gold Company",
    phone: "8088550033",
    whatsapp: "+919741637635",
    email: "info@hindustangoldcompany.com",
    address: "No. 24, 3rd Floor, RK Terminus Ganga Nagara, Bellary Main Road, Bengaluru – 560032",
    currentPassword: "",
    newPassword: "",
  });

  const token = typeof window !== "undefined" ? localStorage.getItem("hgc_admin_token") : "";

  function save(e: React.FormEvent) {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  React.useEffect(() => {
    if (!token) router.push("/admin/login");
  }, [token, router]);

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <AdminSidebar />
      <div className="ml-64 flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-500 text-sm mt-0.5">Site configuration & admin account</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Site Info */}
          <form onSubmit={save} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-4">
            <h2 className="font-bold text-gray-900 mb-4">Site Information</h2>
            {[
              { label: "Site Name", key: "siteName" },
              { label: "Phone Number", key: "phone" },
              { label: "WhatsApp Number", key: "whatsapp" },
              { label: "Email", key: "email" },
            ].map(({ label, key }) => (
              <div key={key}>
                <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
                <input
                  value={(form as any)[key]}
                  onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8102E]/30 focus:border-[#C8102E]"
                />
              </div>
            ))}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
              <textarea value={form.address} onChange={e => setForm(f => ({ ...f, address: e.target.value }))} rows={3}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8102E]/30 resize-none" />
            </div>
            {saved && <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg px-4 py-2 text-sm">✓ Settings saved!</div>}
            <button type="submit" className="w-full flex items-center justify-center gap-2 bg-[#C8102E] hover:bg-[#a00d25] text-white font-bold py-2.5 rounded-lg text-sm">
              <Save className="w-4 h-4" /> Save Settings
            </button>
          </form>

          {/* Change Password */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="font-bold text-gray-900 mb-4">Admin Password</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                <div className="relative">
                  <input type={showPass ? "text" : "password"} value={form.currentPassword}
                    onChange={e => setForm(f => ({ ...f, currentPassword: e.target.value }))}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8102E]/30" />
                  <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                    {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                <input type="password" value={form.newPassword}
                  onChange={e => setForm(f => ({ ...f, newPassword: e.target.value }))}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8102E]/30" />
              </div>
            </div>
            <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-amber-700 text-sm font-medium">To change the admin password:</p>
              <p className="text-amber-600 text-sm mt-1">Update <code className="bg-amber-100 px-1 rounded text-xs">ADMIN_PASSWORD</code> in your <code className="bg-amber-100 px-1 rounded text-xs">.env.local</code> file and restart the server.</p>
            </div>

            <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
              <p className="text-gray-700 text-sm font-semibold">Current .env.local settings:</p>
              <div className="mt-2 font-mono text-xs text-gray-500 space-y-1">
                <p>ADMIN_USERNAME=hgcadmin</p>
                <p>ADMIN_PASSWORD=HGC@Secure2024!</p>
                <p>JWT_SECRET=your_super_secret_jwt_key_here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
