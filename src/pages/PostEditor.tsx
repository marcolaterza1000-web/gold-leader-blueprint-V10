import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { slugify } from "@/lib/slugify";
import TipTapEditor from "@/components/TipTapEditor";
import { ArrowLeft, Upload, Image } from "lucide-react";

interface Category {
  id: string;
  name: string;
}

const PostEditor = () => {
  const { id } = useParams();
  const isEdit = !!id;
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [slugManual, setSlugManual] = useState(false);
  const [content, setContent] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    supabase.from("categories").select("id, name").then(({ data }) => {
      if (data) setCategories(data);
    });
  }, []);

  useEffect(() => {
    if (isEdit) {
      supabase.from("posts").select("*").eq("id", id).single().then(({ data, error }) => {
        if (error || !data) {
          toast({ title: "Post nicht gefunden", variant: "destructive" });
          navigate("/admin");
          return;
        }
        setTitle(data.title);
        setSlug(data.slug);
        setSlugManual(true);
        setContent(data.content || "");
        setExcerpt(data.excerpt || "");
        setCoverImage(data.cover_image || "");
        setCategoryId(data.category_id || "");
        setMetaTitle(data.meta_title || "");
        setMetaDescription(data.meta_description || "");
      });
    }
  }, [id, isEdit, navigate]);

  useEffect(() => {
    if (!slugManual) setSlug(slugify(title));
  }, [title, slugManual]);

  const handleSlugChange = (v: string) => {
    setSlugManual(true);
    setSlug(slugify(v));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const ext = file.name.split(".").pop();
    const path = `${Date.now()}.${ext}`;
    const { error } = await supabase.storage.from("blog-images").upload(path, file);
    if (error) {
      toast({ title: "Upload fehlgeschlagen", description: error.message, variant: "destructive" });
    } else {
      const { data } = supabase.storage.from("blog-images").getPublicUrl(path);
      setCoverImage(data.publicUrl);
    }
    setUploading(false);
  };

  const save = async (publish: boolean) => {
    if (!title.trim() || !slug.trim()) {
      toast({ title: "Titel und Slug sind erforderlich", variant: "destructive" });
      return;
    }
    setSaving(true);
    const postData: Record<string, unknown> = {
      title,
      slug,
      content,
      excerpt,
      cover_image: coverImage || null,
      category_id: categoryId || null,
      meta_title: metaTitle || null,
      meta_description: metaDescription || null,
      status: publish ? "published" : "draft",
    };
    if (publish) postData.published_at = new Date().toISOString();
    if (isEdit) postData.id = id;

    const { error } = await supabase.from("posts").upsert(postData as any);
    setSaving(false);
    if (error) {
      toast({ title: "Fehler beim Speichern", description: error.message, variant: "destructive" });
    } else {
      toast({ title: publish ? "Veröffentlicht!" : "Entwurf gespeichert!" });
      navigate("/admin");
    }
  };

  const inputClass = "w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-inter text-sm placeholder:text-white/30 focus:outline-none focus:border-[#f59e0b]/50";

  return (
    <div className="min-h-screen bg-[#0a0a0a] p-6 md:p-10">
      <div className="max-w-4xl mx-auto">
        <button onClick={() => navigate("/admin")} className="flex items-center gap-2 text-white/50 hover:text-white text-sm font-inter mb-8 transition">
          <ArrowLeft size={16} /> Zurück zum Dashboard
        </button>

        <h1 className="text-2xl font-inter font-black text-white mb-8">
          {isEdit ? "Post bearbeiten" : "Neuer Post"}
        </h1>

        <div className="space-y-6">
          {/* Title */}
          <input
            placeholder="Titel"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`${inputClass} !text-xl !font-bold`}
          />

          {/* Slug */}
          <div>
            <label className="text-white/40 text-xs font-inter uppercase tracking-wider mb-1 block">Slug</label>
            <input value={slug} onChange={(e) => handleSlugChange(e.target.value)} className={inputClass} />
          </div>

          {/* Category */}
          <div>
            <label className="text-white/40 text-xs font-inter uppercase tracking-wider mb-1 block">Kategorie</label>
            <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)} className={`${inputClass} bg-[#0a0a0a]`}>
              <option value="">– Keine –</option>
              {categories.map((c) => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>

          {/* Excerpt */}
          <div>
            <label className="text-white/40 text-xs font-inter uppercase tracking-wider mb-1 block">
              Auszug ({excerpt.length}/200)
            </label>
            <textarea
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value.slice(0, 200))}
              rows={3}
              className={inputClass}
              placeholder="Kurzbeschreibung des Beitrags..."
            />
          </div>

          {/* Cover Image */}
          <div>
            <label className="text-white/40 text-xs font-inter uppercase tracking-wider mb-1 block">Cover-Bild</label>
            {coverImage && (
              <img src={coverImage} alt="Cover" className="w-full h-48 object-cover rounded-lg mb-3" />
            )}
            <label className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-white text-sm font-inter cursor-pointer transition ${uploading ? "opacity-50 pointer-events-none" : ""}`}>
              {uploading ? "Wird hochgeladen..." : <><Upload size={16} /> Bild hochladen</>}
              <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
            </label>
          </div>

          {/* Content */}
          <div>
            <label className="text-white/40 text-xs font-inter uppercase tracking-wider mb-1 block">Inhalt</label>
            <TipTapEditor content={content} onChange={setContent} />
          </div>

          {/* SEO */}
          <div className="border-t border-white/10 pt-6 space-y-4">
            <p className="text-white/40 text-xs font-inter uppercase tracking-wider">SEO (optional)</p>
            <input placeholder="Meta Titel" value={metaTitle} onChange={(e) => setMetaTitle(e.target.value)} className={inputClass} />
            <div>
              <label className="text-white/40 text-xs font-inter uppercase tracking-wider mb-1 block">
                Meta Beschreibung ({metaDescription.length}/160)
              </label>
              <textarea
                value={metaDescription}
                onChange={(e) => setMetaDescription(e.target.value.slice(0, 160))}
                rows={2}
                className={inputClass}
                placeholder="SEO Beschreibung..."
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <button
              onClick={() => save(false)}
              disabled={saving}
              className="px-6 py-3 rounded-full border border-white/10 text-white font-inter text-sm font-semibold hover:bg-white/5 transition disabled:opacity-50"
            >
              Als Entwurf speichern
            </button>
            <button
              onClick={() => save(true)}
              disabled={saving}
              className="px-6 py-3 rounded-full bg-[#f59e0b] text-[#0a0a0a] font-inter text-sm font-black hover:brightness-110 transition disabled:opacity-50"
            >
              Veröffentlichen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostEditor;
