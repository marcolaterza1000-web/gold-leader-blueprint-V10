import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Post {
  id: string;
  title: string;
  slug: string;
  content: string | null;
  excerpt: string | null;
  cover_image: string | null;
  published_at: string | null;
  meta_title: string | null;
  meta_description: string | null;
  categories: { name: string } | null;
}

const formatDate = (dateStr: string) => {
  return new Date(dateStr).toLocaleDateString("de-DE", { day: "numeric", month: "long", year: "numeric" });
};

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    supabase
      .from("posts")
      .select("*, categories(name)")
      .eq("slug", slug)
      .eq("status", "published")
      .single()
      .then(({ data, error }) => {
        if (error || !data) {
          setLoading(false);
          return;
        }
        setPost(data as unknown as Post);
        setLoading(false);

        // SEO
        document.title = data.meta_title || data.title;
        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
          metaDesc = document.createElement("meta");
          metaDesc.setAttribute("name", "description");
          document.head.appendChild(metaDesc);
        }
        metaDesc.setAttribute("content", data.meta_description || data.excerpt || "");
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#f59e0b] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0a0a0a]">
        <Navbar />
        <div className="pt-32 text-center px-6">
          <h1 className="text-4xl font-inter font-black text-white mb-4">404</h1>
          <p className="text-white/40 font-inter mb-8">Beitrag nicht gefunden.</p>
          <Link to="/blog" className="text-[#f59e0b] font-inter font-semibold hover:underline">
            ← Zurück zum Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      {/* Cover */}
      {post.cover_image && (
        <div className="relative h-[50vh] min-h-[400px]">
          <img src={post.cover_image} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-inter font-black text-white leading-tight">{post.title}</h1>
          </div>
        </div>
      )}

      <article className="max-w-3xl mx-auto px-6 py-12">
        <Link to="/blog" className="flex items-center gap-2 text-white/40 hover:text-[#f59e0b] text-sm font-inter mb-8 transition">
          <ArrowLeft size={16} /> Zurück zum Blog
        </Link>

        {!post.cover_image && (
          <h1 className="text-3xl md:text-5xl font-inter font-black text-white leading-tight mb-6">{post.title}</h1>
        )}

        <div className="flex items-center gap-4 mb-10">
          {post.published_at && (
            <span className="text-white/30 text-sm font-inter">{formatDate(post.published_at)}</span>
          )}
          {post.categories?.name && (
            <span className="px-3 py-1 rounded-full bg-[#f59e0b]/10 text-[#f59e0b] text-xs font-inter font-bold uppercase tracking-wider">
              {post.categories.name}
            </span>
          )}
        </div>

        {/* Content */}
        {post.content && (
          <div
            className="text-white font-inter text-lg leading-[1.8] [&_h2]:text-[#f59e0b] [&_h2]:text-2xl [&_h2]:font-black [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-[#f59e0b] [&_h3]:text-xl [&_h3]:font-bold [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:mb-6 [&_a]:text-[#f59e0b] [&_a]:underline [&_a]:underline-offset-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6 [&_li]:mb-2"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        )}

        {/* CTA */}
        <div className="mt-16 p-8 md:p-12 bg-white/[0.03] backdrop-blur-sm border border-white/5 rounded-2xl text-center">
          <h3 className="text-2xl font-inter font-black text-white mb-4">Bereit für mehr Performance?</h3>
          <p className="text-white/40 font-inter mb-6">Vereinbare jetzt dein kostenloses Analyse-Gespräch.</p>
          <a
            href="/#kontakt"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#f59e0b] text-[#0a0a0a] font-inter font-black text-sm hover:brightness-110 transition shadow-[0_2px_16px_rgba(245,158,11,0.3)]"
          >
            Analyse-Gespräch buchen <ArrowRight size={16} />
          </a>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
