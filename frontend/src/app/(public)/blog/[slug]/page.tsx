import { notFound } from "next/navigation";
import Link from "next/link";
import { BLOG_POSTS, BLOG_KATEGORI } from "@/lib/data";

// Generate metadata for SEO
export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  
  if (!post) return { title: "Artikel Tidak Ditemukan - Warung Bambu Barokah" };
  
  return {
    title: `${post.judul} - Blog Warung Bambu Barokah`,
    description: post.ringkasan,
    openGraph: {
      title: post.judul,
      description: post.ringkasan,
      images: [post.gambar],
      type: "article",
    },
  };
}

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const categoryLabel = BLOG_KATEGORI.find((c) => c.id === post.kategori)?.label || post.kategori;

  // Generate JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.judul,
    image: [post.gambar],
    datePublished: post.tanggal,
    dateModified: post.tanggal,
    author: [{
      "@type": "Person",
      name: post.penulis,
    }],
    description: post.ringkasan,
  };

  // Find related posts (same category, excluding current)
  const relatedPosts = BLOG_POSTS.filter((p) => p.kategori === post.kategori && p.id !== post.id).slice(0, 3);

  return (
    <main className="min-h-screen bg-wbb-background pt-24 pb-20">
      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="container-wbb">
        {/* Breadcrumb & Meta */}
        <div className="max-w-4xl mx-auto mb-8">
          <nav className="flex text-sm text-wbb-on-surface-variant font-montserrat mb-8">
            <Link href="/" className="hover:text-wbb-primary transition-colors">Beranda</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-wbb-primary transition-colors">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-wbb-primary font-medium">{categoryLabel}</span>
          </nav>

          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-wbb-primary font-bold leading-tight mb-6">
            {post.judul}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm font-montserrat border-b border-wbb-surface-variant pb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-wbb-primary text-white flex items-center justify-center font-bold text-lg">
                {post.penulis.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-wbb-on-surface text-base">{post.penulis}</p>
                <p className="text-wbb-on-surface-variant">Penulis Utama</p>
              </div>
            </div>
            
            <div className="h-10 w-px bg-wbb-surface-variant hidden md:block"></div>
            
            <div className="flex gap-6 text-wbb-on-surface-variant">
              <div>
                <p className="font-semibold text-wbb-on-surface mb-1">Diterbitkan</p>
                <p>{new Date(post.tanggal).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
              </div>
              <div>
                <p className="font-semibold text-wbb-on-surface mb-1">Waktu Baca</p>
                <p>{post.waktuBaca}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="max-w-5xl mx-auto mb-16 relative">
          <div className="absolute -inset-4 bg-wbb-secondary-container rounded-[2rem] opacity-30 blur-2xl -z-10"></div>
          <div className="rounded-[2rem] overflow-hidden shadow-2xl relative aspect-[21/9]">
            <img 
              src={post.gambar} 
              alt={post.judul} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content Body */}
        <div className="max-w-3xl mx-auto prose prose-lg prose-headings:font-playfair prose-headings:text-wbb-primary prose-p:font-montserrat prose-p:text-wbb-on-surface prose-a:text-wbb-secondary prose-img:rounded-2xl">
          <p className="lead text-xl text-wbb-on-surface-variant font-medium mb-8">
            {post.ringkasan}
          </p>
          
          {/* Dummy Rich Content to make it engaging */}
          <div className="bg-wbb-surface-container-low p-8 rounded-2xl border-l-4 border-wbb-primary my-10">
            <h3 className="text-2xl mt-0 mb-4 font-bold">✨ Highlights WBB</h3>
            <p className="m-0 text-wbb-on-surface-variant">
              Tahukah Anda? Warung Bambu Barokah didesain sepenuhnya menggunakan material ramah lingkungan dengan mempertahankan arsitektur bambu khas Nusantara untuk memberikan pengalaman "Eco-Luxury" yang sesungguhnya.
            </p>
          </div>

          <h2>Menjelajahi Lebih Dalam</h2>
          <p>
            Warung Bambu Barokah (WBB) terus berinovasi untuk memberikan pengalaman terbaik. Bukan hanya tentang rasa, tetapi tentang cerita di balik setiap sajian. Setiap bahan dipilih dengan teliti dari petani lokal Blitar untuk memastikan kesegaran dan mendukung ekonomi masyarakat sekitar.
          </p>

          <img 
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=400&fit=crop" 
            alt="Suasana WBB" 
            className="my-10 shadow-lg"
          />

          <h2>Kenapa Memilih WBB?</h2>
          <ul>
            <li><strong>Suasana Alam:</strong> Dikelilingi rimbunnya bambu dan suara gemericik air kolam koi.</li>
            <li><strong>Fasilitas Lengkap:</strong> Mulai dari VIP Room hingga Taman Lalu Lintas untuk edukasi anak.</li>
            <li><strong>Menu Beragam:</strong> Seafood, makanan tradisional, hingga dessert kekinian.</li>
          </ul>

          <p>
            Kami selalu menantikan kehadiran Anda dan keluarga untuk mengukir momen indah bersama di Warung Bambu Barokah. Jangan ragu untuk melakukan reservasi terlebih dahulu agar mendapatkan spot terbaik!
          </p>
        </div>

        {/* Related Posts Section */}
        {relatedPosts.length > 0 && (
          <div className="max-w-4xl mx-auto mt-24 pt-16 border-t border-wbb-surface-variant">
            <h2 className="font-playfair text-3xl font-bold text-wbb-primary mb-8 text-center">
              Artikel Terkait
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`} className="group block">
                  <div className="bg-wbb-surface rounded-xl overflow-hidden border border-wbb-outline-variant/30 hover:shadow-lg transition-all h-full flex flex-col">
                    <div className="h-40 overflow-hidden relative">
                      <img 
                        src={relatedPost.gambar} 
                        alt={relatedPost.judul} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-5 flex-grow flex flex-col">
                      <h3 className="font-playfair text-lg font-bold text-wbb-on-surface mb-2 group-hover:text-wbb-secondary transition-colors line-clamp-2">
                        {relatedPost.judul}
                      </h3>
                      <p className="font-montserrat text-sm text-wbb-on-surface-variant line-clamp-2 mt-auto">
                        {relatedPost.ringkasan}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </main>
  );
}
