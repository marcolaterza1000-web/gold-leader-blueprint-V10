import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  cover_image: string | null;
  published_at: string | null;
  categories: { name: string } | null;
}

const formatDate = (dateStr: string) => {
  const d = new Date(dateStr);
  return d.toLocaleDateString("de-DE", { day: "numeric", month: "long", year: "numeric" });
};

const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Blog – ML Coaching";
    supabase
      .from("posts")
      .select("id, title, slug, excerpt, cover_image, published_at, categories(name)")
      .eq("status", "published")
      .order("published_at", { ascending: false })
      .then(({ data }) => {
        setPosts((data as unknown as Post[]) || []);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-[#f59e0b] text-xs font-inter font-bold uppercase tracking-[0.2em]">INSIGHTS</span>
            <h1 className="text-4xl md:text-5xl font-inter font-black text-white mt-4">
              Gedanken aus der <span className="text-[#f59e0b]">Praxis.</span>
            </h1>
          </div>

          {/* Loading */}
          {loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white/5 rounded-2xl overflow-hidden animate-pulse">
                  <div className="h-48 bg-white/10" />
                  <div className="p-6 space-y-3">
                    <div className="h-4 w-20 bg-white/10 rounded" />
                    <div className="h-6 w-3/4 bg-white/10 rounded" />
                    <div className="h-4 w-full bg-white/10 rounded" />
                    <div className="h-4 w-2/3 bg-white/10 rounded" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Empty */}
          {!loading && posts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-white/40 font-inter text-lg">Noch keine Beiträge vorhanden.</p>
            </div>
          )}

          {/* Posts grid */}
          {!loading && posts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="group bg-white/[0.03] backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:border-[#f59e0b]/20 transition-all duration-300"
                >
                  {post.cover_image && (
                    <div className="h-48 overflow-hidden">
                      <img
                        src={post.cover_image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    {post.categories?.name && (
                      <span className="inline-block text-[#f59e0b] text-xs font-inter font-bold uppercase tracking-wider mb-3">
                        {post.categories.name}
                      </span>
                    )}
                    <h2 className="text-lg font-inter font-bold text-white group-hover:text-[#f59e0b] transition-colors mb-2">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="text-white/40 text-sm font-inter leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                    )}
                    <div className="flex items-center justify-between">
                      {post.published_at && (
                        <span className="text-white/25 text-xs font-inter">{formatDate(post.published_at)}</span>
                      )}
                      <span className="flex items-center gap-1 text-[#f59e0b] text-sm font-inter font-semibold group-hover:gap-2 transition-all">
                        Weiterlesen <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
