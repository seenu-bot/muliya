"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { AdminSidebar } from "../components/AdminSidebar";
import { Plus, Pencil, Trash2, FileText, RefreshCw, X, Check, Eye, EyeOff } from "lucide-react";

interface Blog {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  metaTitle?: string;
  metaDesc?: string;
  isPublished: boolean;
  author: string;
  readTime?: string;
  createdAt: string;
}

const emptyBlog = {
  title: "", slug: "", excerpt: "", content: "", category: "Gold Buying",
  tags: [] as string[], metaTitle: "", metaDesc: "",
  isPublished: false, author: "Hindustan Gold Company", readTime: "5 min read",
};

const categories = ["Gold Buying", "Sell Gold", "Pledged Gold", "Cash for Gold", "Gold Price", "News"];

export default function AdminBlogs() {
  const router = useRouter();
  const [blogs, setBlogs] = React.useState<Blog[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [modal, setModal] = React.useState<"add" | "edit" | null>(null);
  const [form, setForm] = React.useState<typeof emptyBlog & { _id?: string }>(emptyBlog);
  const [saving, setSaving] = React.useState(false);
  const [deleteId, setDeleteId] = React.useState<string | null>(null);
  const [tagsInput, setTagsInput] = React.useState("");

  const getToken = () => typeof window !== "undefined" ? (localStorage.getItem("hgc_admin_token") ?? "") : "";
  const getHeaders = () => ({ "Content-Type": "application/json", Authorization: `Bearer ${getToken()}` });

  async function load() {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/blogs", { headers: getHeaders() });
      if (res.status === 401) { router.push("/admin/login"); return; }
      const data = await res.json();
      setBlogs(data.blogs || []);
    } finally { setLoading(false); }
  }

  async function save() {
    setSaving(true);
    try {
      const payload = { ...form, tags: tagsInput.split(",").map(t => t.trim()).filter(Boolean) };
      const method = modal === "edit" ? "PUT" : "POST";
      const res = await fetch("/api/admin/blogs", { method, headers: getHeaders(), body: JSON.stringify(payload) });
      if (res.ok) { setModal(null); load(); }
    } finally { setSaving(false); }
  }

  async function remove(id: string) {
    await fetch("/api/admin/blogs", { method: "DELETE", headers: getHeaders(), body: JSON.stringify({ id }) });
    setDeleteId(null); load();
  }

  async function togglePublish(b: Blog) {
    await fetch("/api/admin/blogs", {
      method: "PUT", headers: getHeaders(),
      body: JSON.stringify({ id: b._id, isPublished: !b.isPublished }),
    });
    load();
  }

  function openAdd() {
    setForm(emptyBlog); setTagsInput(""); setModal("add");
  }
  function openEdit(b: Blog) {
    setForm({ ...b, metaTitle: b.metaTitle ?? "", metaDesc: b.metaDesc ?? "", readTime: b.readTime ?? "5 min read" });
    setTagsInput(b.tags.join(", "));
    setModal("edit");
  }

  // Auto-generate slug from title
  function handleTitleChange(val: string) {
    const slug = val.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    setForm(f => ({ ...f, title: val, slug: f.slug || slug }));
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
            <h1 className="text-2xl font-bold text-gray-900">Blog Posts</h1>
            <p className="text-gray-500 text-sm mt-0.5">{blogs.length} total posts</p>
          </div>
          <div className="flex gap-2">
            <button onClick={load} className="flex items-center gap-1.5 bg-white border border-gray-200 text-gray-600 text-sm px-3 py-2 rounded-lg hover:bg-gray-50">
              <RefreshCw className="w-3.5 h-3.5" /> Refresh
            </button>
            <button onClick={openAdd} className="flex items-center gap-2 bg-[#C8102E] hover:bg-[#a00d25] text-white font-semibold text-sm px-4 py-2 rounded-lg">
              <Plus className="w-4 h-4" /> New Post
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          {loading ? (
            <div className="p-10 text-center text-gray-400">Loading posts...</div>
          ) : blogs.length === 0 ? (
            <div className="p-10 text-center text-gray-400">
              <FileText className="w-10 h-10 mx-auto mb-3 opacity-30" />
              <p className="font-medium">No blog posts yet</p>
            </div>
          ) : (
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  {["Title", "Category", "Author", "Status", "Date", "Actions"].map(h => (
                    <th key={h} className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {blogs.map(b => (
                  <tr key={b._id} className="hover:bg-gray-50">
                    <td className="px-5 py-3 max-w-[260px]">
                      <p className="font-semibold text-gray-900 text-sm truncate">{b.title}</p>
                      <p className="text-xs text-gray-400 truncate">/blog/{b.slug}</p>
                    </td>
                    <td className="px-5 py-3">
                      <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full">{b.category}</span>
                    </td>
                    <td className="px-5 py-3 text-sm text-gray-600">{b.author}</td>
                    <td className="px-5 py-3">
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${b.isPublished ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                        {b.isPublished ? "Published" : "Draft"}
                      </span>
                    </td>
                    <td className="px-5 py-3 text-xs text-gray-400">{new Date(b.createdAt).toLocaleDateString("en-IN")}</td>
                    <td className="px-5 py-3">
                      <div className="flex gap-1">
                        <button onClick={() => togglePublish(b)} title={b.isPublished ? "Unpublish" : "Publish"} className="text-gray-400 hover:text-green-600 p-1 rounded hover:bg-green-50">
                          {b.isPublished ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                        <button onClick={() => openEdit(b)} className="text-blue-500 hover:text-blue-700 p-1 rounded hover:bg-blue-50">
                          <Pencil className="w-4 h-4" />
                        </button>
                        <button onClick={() => setDeleteId(b._id)} className="text-red-500 hover:text-red-700 p-1 rounded hover:bg-red-50">
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

      {/* Modal */}
      {modal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <h2 className="text-lg font-bold">{modal === "add" ? "New Blog Post" : "Edit Post"}</h2>
              <button onClick={() => setModal(null)}><X className="w-5 h-5 text-gray-400" /></button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
                <input value={form.title} onChange={e => handleTitleChange(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8102E]/30 focus:border-[#C8102E]"
                  placeholder="Blog post title" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Slug (URL)</label>
                <input value={form.slug} onChange={e => setForm(f => ({ ...f, slug: e.target.value }))}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8102E]/30 focus:border-[#C8102E]"
                  placeholder="blog-post-url-slug" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8102E]/30">
                    {categories.map(c => <option key={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Read Time</label>
                  <input value={form.readTime} onChange={e => setForm(f => ({ ...f, readTime: e.target.value }))}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8102E]/30"
                    placeholder="5 min read" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Excerpt (short summary) *</label>
                <textarea value={form.excerpt} onChange={e => setForm(f => ({ ...f, excerpt: e.target.value }))} rows={2}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8102E]/30 resize-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Content *</label>
                <textarea value={form.content} onChange={e => setForm(f => ({ ...f, content: e.target.value }))} rows={8}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8102E]/30 resize-y font-mono"
                  placeholder="Write blog content here..." />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tags (comma separated)</label>
                <input value={tagsInput} onChange={e => setTagsInput(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8102E]/30"
                  placeholder="gold buyers, sell gold, bangalore" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">SEO Meta Title</label>
                <input value={form.metaTitle} onChange={e => setForm(f => ({ ...f, metaTitle: e.target.value }))}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8102E]/30" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">SEO Meta Description</label>
                <textarea value={form.metaDesc} onChange={e => setForm(f => ({ ...f, metaDesc: e.target.value }))} rows={2}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8102E]/30 resize-none" />
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" id="pub" checked={form.isPublished}
                  onChange={e => setForm(f => ({ ...f, isPublished: e.target.checked }))}
                  className="w-4 h-4 accent-[#C8102E]" />
                <label htmlFor="pub" className="text-sm font-medium text-gray-700">Publish immediately</label>
              </div>
            </div>
            <div className="px-6 py-4 border-t flex justify-end gap-3">
              <button onClick={() => setModal(null)} className="px-4 py-2 text-sm text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50">Cancel</button>
              <button onClick={save} disabled={saving} className="flex items-center gap-2 px-5 py-2 bg-[#C8102E] hover:bg-[#a00d25] disabled:opacity-60 text-white text-sm font-bold rounded-lg">
                <Check className="w-4 h-4" />{saving ? "Saving..." : "Save Post"}
              </button>
            </div>
          </div>
        </div>
      )}

      {deleteId && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl text-center">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trash2 className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg">Delete this post?</h3>
            <p className="text-gray-500 text-sm mt-1">This cannot be undone.</p>
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


