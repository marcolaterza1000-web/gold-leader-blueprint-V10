
-- Create categories table
CREATE TABLE public.categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL
);

ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read categories" ON public.categories
  FOR SELECT TO anon, authenticated USING (true);

CREATE POLICY "Authenticated users can manage categories" ON public.categories
  FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- Create posts table
CREATE TABLE public.posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content TEXT,
  excerpt TEXT,
  cover_image TEXT,
  status TEXT NOT NULL DEFAULT 'draft',
  published_at TIMESTAMPTZ,
  category_id UUID REFERENCES public.categories(id),
  meta_title TEXT,
  meta_description TEXT
);

ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can read published posts" ON public.posts
  FOR SELECT TO anon, authenticated USING (status = 'published' OR auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can insert posts" ON public.posts
  FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Authenticated users can update posts" ON public.posts
  FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Authenticated users can delete posts" ON public.posts
  FOR DELETE TO authenticated USING (true);

-- Create blog-images storage bucket
INSERT INTO storage.buckets (id, name, public)
VALUES ('blog-images', 'blog-images', true);

CREATE POLICY "Public read access for blog images" ON storage.objects
  FOR SELECT TO anon, authenticated USING (bucket_id = 'blog-images');

CREATE POLICY "Authenticated users can upload blog images" ON storage.objects
  FOR INSERT TO authenticated WITH CHECK (bucket_id = 'blog-images');

CREATE POLICY "Authenticated users can update blog images" ON storage.objects
  FOR UPDATE TO authenticated USING (bucket_id = 'blog-images');

CREATE POLICY "Authenticated users can delete blog images" ON storage.objects
  FOR DELETE TO authenticated USING (bucket_id = 'blog-images');

-- Seed categories
INSERT INTO public.categories (name, slug) VALUES
  ('Training', 'training'),
  ('Ernährung', 'ernaehrung'),
  ('Mental', 'mental'),
  ('HRV & Daten', 'hrv-daten'),
  ('Fallstudien', 'fallstudien');
