import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { LayoutDashboard, PenSquare, LogOut, Trash2 } from "lucide-react";

interface Post {
  id: string;
  title: string;
  status: string;
  created_at: string;
  published_at: string | null;
}

const AdminDashboard = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from("posts")
      .select("id, title, status, created_at, published_at")
      .order("created_at", { ascending: false });
    if (error) {
      toast({ title: "Fehler", description: error.message, variant: "destructive" });
    } else {
      setPosts(data || []);
    }
    setLoading(false);
  };

  useEffect(() => { fetchPosts(); }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Post wirklich löschen?")) return;
    const { error } = await supabase.from("posts").delete().eq("id", id);
    if (error) {
      toast({ title: "Fehler", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Post gelöscht" });
      fetchPosts();
    }
  };

  const togglePublish = async (post: Post) => {
    const newStatus = post.status === "published" ? "draft" : "published";
    const updates: Record<string, unknown> = { status: newStatus };
    if (newStatus === "published") updates.published_at = new Date().toISOString();
    const { error } = await supabase.from("posts").update(updates).eq("id", post.id);
    if (error) {
      toast({ title: "Fehler", description: error.message, variant: "destructive" });
    } else {
      toast({ title: newStatus === "published" ? "Veröffentlicht" : "Als Entwurf gespeichert" });
      fetchPosts();
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login");
  };

  const totalPosts = posts.length;
  const published = posts.filter((p) => p.status === "published").length;
  const drafts = posts.filter((p) => p.status === "draft").length;

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex">
      {/* Sidebar */}
      <aside className="w-60 border-r border-white/5 p-6 flex flex-col gap-2 shrink-0">
        <div className="font-inter font-black text-lg text-white mb-8">
          ML <span className="text-[#f59e0b]">ADMIN</span>
        </div>
        <Link to="/admin" className="flex items-center gap-3 text-white/70 hover:text-white py-2 text-sm font-inter transition">
          <LayoutDashboard size={18} /> Dashboard
        </Link>
        <Link to="/admin/posts/new" className="flex items-center gap-3 text-white/70 hover:text-white py-2 text-sm font-inter transition">
          <PenSquare size={18} /> Neuer Post
        </Link>
        <button onClick={handleLogout} className="flex items-center gap-3 text-white/70 hover:text-white py-2 text-sm font-inter transition mt-auto">
          <LogOut size={18} /> Logout
        </button>
      </aside>

      {/* Main */}
      <main className="flex-1 p-8 overflow-auto">
        <h1 className="text-2xl font-inter font-black text-white mb-8">Dashboard</h1>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          {[
            { label: "Gesamt", value: totalPosts },
            { label: "Veröffentlicht", value: published },
            { label: "Entwürfe", value: drafts },
          ].map((s) => (
            <div key={s.label} className="bg-white/5 border border-white/10 rounded-xl p-5">
              <p className="text-white/40 text-xs font-inter uppercase tracking-wider">{s.label}</p>
              <p className="text-3xl font-inter font-black text-white mt-1">{s.value}</p>
            </div>
          ))}
        </div>

        {/* Posts table */}
        {loading ? (
          <p className="text-white/40 font-inter text-sm">Laden...</p>
        ) : posts.length === 0 ? (
          <p className="text-white/40 font-inter text-sm">Noch keine Posts vorhanden.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm font-inter">
              <thead>
                <tr className="border-b border-white/10 text-white/40 text-xs uppercase tracking-wider">
                  <th className="text-left py-3 px-2">Titel</th>
                  <th className="text-left py-3 px-2">Status</th>
                  <th className="text-left py-3 px-2">Datum</th>
                  <th className="text-right py-3 px-2">Aktionen</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => (
                  <tr key={post.id} className="border-b border-white/5 hover:bg-white/[0.02] transition">
                    <td className="py-3 px-2 text-white">{post.title}</td>
                    <td className="py-3 px-2">
                      <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                        post.status === "published"
                          ? "bg-emerald-500/20 text-emerald-400"
                          : "bg-white/10 text-white/50"
                      }`}>
                        {post.status === "published" ? "Veröffentlicht" : "Entwurf"}
                      </span>
                    </td>
                    <td className="py-3 px-2 text-white/40">
                      {new Date(post.created_at).toLocaleDateString("de-CH")}
                    </td>
                    <td className="py-3 px-2 text-right space-x-2">
                      <button
                        onClick={() => togglePublish(post)}
                        className="text-xs text-[#f59e0b] hover:underline font-inter"
                      >
                        {post.status === "published" ? "Unpublish" : "Publish"}
                      </button>
                      <Link
                        to={`/admin/posts/${post.id}/edit`}
                        className="text-xs text-white/50 hover:text-white font-inter"
                      >
                        Bearbeiten
                      </Link>
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="text-white/30 hover:text-red-400 transition"
                      >
                        <Trash2 size={14} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
