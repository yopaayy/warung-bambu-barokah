"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Star,
  MapPin,
  Users,
  UtensilsCrossed,
  Calendar,
  GraduationCap,
  ArrowRight,
  Sparkles,
  TreePine,
  Clock,
  Quote,
  Navigation,
  Phone,
  Share2,
  Check,
  Bookmark,
} from "lucide-react";
import AnimateOnView from "@/components/ui/AnimateOnView";
import CounterAnimation from "@/components/ui/CounterAnimation";
import Fireflies from "@/components/ui/Fireflies";
import {
  SITE_CONFIG,
  MENU_ITEMS,
  TESTIMONI_DATA,
  STATISTIK,
  FASILITAS,
  BLOG_POSTS,
  formatRupiah,
} from "@/lib/data";

// === HERO SECTION ===
function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(165deg, 
          rgba(28, 46, 18, 0.95) 0%, 
          rgba(45, 77, 32, 0.85) 50%, 
          rgba(79, 122, 55, 0.8) 100%), url('/WBB.svg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      {/* Giant Glowing Orbs & Fireflies */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-[0%] left-[10%] w-96 h-96 bg-[#9ec46a]/30 rounded-full blur-[120px]"
          animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-[#d4af37]/20 rounded-full blur-[150px]"
          animate={{ x: [0, -70, 0], y: [0, -50, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>
      <Fireflies count={25} />
      <motion.div
        className="absolute top-[40%] right-[8%] w-8 h-8 rounded-full opacity-20"
        style={{ background: "var(--highlight)" }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Content */}
      <div className="container mx-auto px-6 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Label */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8"
            style={{
              background: "rgba(158, 196, 106, 0.15)",
              border: "1px solid rgba(158, 196, 106, 0.25)",
            }}
          >
            <Sparkles size={14} style={{ color: "var(--highlight)" }} />
            <span className="text-xs font-semibold tracking-[0.1em] uppercase" style={{ color: "var(--highlight)" }}>
              Destinasi Kuliner & Wisata Edukasi #1 di Blitar
            </span>
          </div>
        </motion.div>

        <motion.h1
          className="text-white mb-6 max-w-4xl mx-auto"
          style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 700, lineHeight: 1.1 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Nikmati Pengalaman Kuliner{" "}
          <span style={{ color: "var(--premium-accent)" }}>Premium</span>{" "}
          di Tengah Harmoni{" "}
          <span style={{ color: "var(--highlight)" }}>Bambu & Alam</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: "rgba(255, 255, 255, 0.75)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Warung Bambu Barokah menghadirkan perpaduan sempurna antara cita rasa autentik Nusantara, 
          wisata edukasi anak, dan tempat gathering keluarga dengan konsep eco-luxury.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link href="/reservasi" className="btn btn-reservasi btn-lg no-underline group">
            <Sparkles size={22} className="text-[#D6B15A] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
            Reservasi Sekarang
            <ChevronRight size={22} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link href="/menu" className="btn btn-lg no-underline" style={{
            background: "rgba(255,255,255,0.1)",
            color: "white",
            border: "1.5px solid rgba(255,255,255,0.25)",
            backdropFilter: "blur(8px)",
          }}>
            Lihat Menu
            <UtensilsCrossed size={18} />
          </Link>
          <Link href="/outing-class" className="btn btn-lg no-underline" style={{
            background: "rgba(255,255,255,0.1)",
            color: "white",
            border: "1.5px solid rgba(255,255,255,0.25)",
            backdropFilter: "blur(8px)",
          }}>
            Outing Class
            <GraduationCap size={18} />
          </Link>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-8 mt-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {[
            { icon: Star, text: "4.8 Rating Google" },
            { icon: MapPin, text: "Blitar, Jawa Timur" },
            { icon: Users, text: "3.000+ Pengunjung/Bulan" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2" style={{ color: "rgba(255,255,255,0.5)" }}>
              <item.icon size={16} style={{ color: "var(--premium-accent)" }} />
              <span className="text-sm font-medium">{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.4)" }}>Gulir ke bawah</span>
        <div className="w-6 h-10 rounded-full border-2 flex justify-center pt-2" style={{ borderColor: "rgba(255,255,255,0.25)" }}>
          <motion.div
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "var(--premium-accent)" }}
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}

// === FEATURED MENU SECTION ===
function FeaturedMenuSection() {
  const popularItems = MENU_ITEMS.filter((item) => item.populer).slice(0, 4);

  return (
    <section className="section" id="menu-unggulan">
      <div className="container mx-auto">
        <AnimateOnView>
          <div className="section-header">
            <span className="section-label">
              <UtensilsCrossed size={14} />
              Menu Unggulan
            </span>
            <h2>Cita Rasa yang Memanjakan Lidah</h2>
            <p>
              Nikmati hidangan terbaik kami yang diracik dari bahan-bahan segar 
              pilihan dengan resep khas Warung Bambu Barokah.
            </p>
          </div>
        </AnimateOnView>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {popularItems.map((item, i) => (
            <AnimateOnView key={item.id} delay={i * 0.1}>
              <div className="card group cursor-pointer flex flex-col justify-between h-full">
                <div>
                  {/* Image Placeholder */}
                  <div
                    className="relative h-48 overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, var(--primary-light), var(--accent))`,
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <UtensilsCrossed size={48} className="opacity-20 text-white" />
                    </div>
                    {/* Badge */}
                    {item.badge && (
                      <div className="absolute top-4 left-4">
                        <span className="badge badge-premium">{item.badge}</span>
                      </div>
                    )}
                    {item.baru && (
                      <div className="absolute top-4 left-4">
                        <span className="badge badge-highlight">Baru</span>
                      </div>
                    )}
                    {/* Overlay on hover */}
                    <div
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: "rgba(28, 46, 18, 0.5)" }}
                    >
                      <span className="btn btn-sm" style={{ background: "white", color: "var(--primary)" }}>
                        Lihat Detail
                      </span>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-6">
                    <h4 
                      className="text-lg font-bold mb-2 line-clamp-2 leading-snug tracking-wide" 
                      style={{ color: "var(--primary)", fontFamily: "var(--font-heading)" }}
                    >
                      {item.nama}
                    </h4>
                    <p className="text-sm text-text-tertiary mb-4 line-clamp-2 leading-relaxed">
                      {item.deskripsi}
                    </p>
                  </div>
                </div>
                {/* Footer Section */}
                <div className="px-6 pb-6 pt-4 border-t border-outline-light flex items-center justify-between">
                  <span className="text-lg font-extrabold tracking-wide" style={{ color: "var(--accent)" }}>
                    {formatRupiah(item.harga)}
                  </span>
                  <div className="flex items-center gap-1" style={{ color: "var(--premium-accent)" }}>
                    <Star size={14} fill="currentColor" />
                    <span className="text-xs font-bold">4.8</span>
                  </div>
                </div>
              </div>
            </AnimateOnView>
          ))}
        </div>

        <AnimateOnView>
          <div className="text-center mt-10">
            <Link href="/menu" className="btn btn-secondary no-underline">
              Lihat Semua Menu
              <ArrowRight size={16} />
            </Link>
          </div>
        </AnimateOnView>
      </div>
    </section>
  );
}

// === FASILITAS SECTION ===
function FasilitasSection() {
  return (
    <section className="section section-alt" id="fasilitas">
      <div className="container mx-auto">
        <AnimateOnView>
          <div className="section-header">
            <span className="section-label">
              <TreePine size={14} />
              Fasilitas Kami
            </span>
            <h2>Tempat Nyaman untuk Setiap Momen</h2>
            <p>
              Berbagai pilihan area dan fasilitas yang dirancang untuk memenuhi 
              kebutuhan Anda, dari makan santai hingga acara besar.
            </p>
          </div>
        </AnimateOnView>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FASILITAS.map((item, i) => (
            <AnimateOnView key={item.id} delay={i * 0.08}>
              <div
                className="p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] group cursor-pointer"
                style={{
                  background: "var(--surface-elevated)",
                  border: "1px solid var(--outline-light)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: "rgba(158, 196, 106, 0.12)" }}
                  >
                    {item.ikon}
                  </div>
                  <div>
                    <h4 className="text-base font-semibold mb-1" style={{ color: "var(--primary)", fontFamily: "var(--font-heading)" }}>
                      {item.nama}
                    </h4>
                    <p className="text-sm mb-2" style={{ color: "var(--text-tertiary)" }}>
                      {item.deskripsi}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold" style={{ color: "var(--accent)" }}>
                      <Users size={12} />
                      Kapasitas {item.kapasitas}
                    </span>
                  </div>
                </div>
              </div>
            </AnimateOnView>
          ))}
        </div>
      </div>
    </section>
  );
}

// === STATISTIK SECTION ===
function StatistikSection() {
  return (
    <section
      className="py-20"
      id="statistik"
      style={{
        background: `linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)`,
      }}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATISTIK.map((stat, i) => (
            <AnimateOnView key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <div
                  className="text-4xl md:text-5xl font-bold mb-2"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--premium-accent)" }}
                >
                  <CounterAnimation target={stat.nilai} suffix={stat.suffix} />
                </div>
                <p className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.7)" }}>
                  {stat.label}
                </p>
              </div>
            </AnimateOnView>
          ))}
        </div>
      </div>
    </section>
  );
}

// === KENAPA WBB SECTION ===
function KenapaWBBSection() {
  const alasan = [
    {
      ikon: <UtensilsCrossed size={24} />,
      judul: "Cita Rasa Autentik",
      deskripsi: "Menu masakan Nusantara premium dengan bahan segar pilihan dan resep turun-temurun yang diracik oleh chef berpengalaman.",
    },
    {
      ikon: <TreePine size={24} />,
      judul: "Konsep Eco-Luxury",
      deskripsi: "Arsitektur bambu alami dengan suasana asri, kolam koi, dan lorong bambu ikonik yang menciptakan pengalaman makan tak terlupakan.",
    },
    {
      ikon: <GraduationCap size={24} />,
      judul: "Wisata Edukasi Anak",
      deskripsi: "Taman edukasi lalu lintas lengkap untuk outing class anak-anak sekolah, menggabungkan belajar dan bermain.",
    },
    {
      ikon: <Calendar size={24} />,
      judul: "Event & Gathering",
      deskripsi: "Fasilitas lengkap untuk berbagai acara, dari ulang tahun keluarga hingga gathering perusahaan dengan kapasitas besar.",
    },
    {
      ikon: <Clock size={24} />,
      judul: "Pelayanan Prima",
      deskripsi: "Tim profesional yang siap melayani dengan sepenuh hati, memastikan setiap kunjungan menjadi pengalaman berkesan.",
    },
    {
      ikon: <Sparkles size={24} />,
      judul: "Harga Terjangkau",
      deskripsi: "Kualitas premium dengan harga yang bersahabat. Tersedia paket keluarga dan paket event yang ekonomis.",
    },
  ];

  return (
    <section className="section" id="kenapa-wbb">
      <div className="container mx-auto">
        <AnimateOnView>
          <div className="section-header">
            <span className="section-label">
              <Sparkles size={14} />
              Mengapa Kami
            </span>
            <h2>Kenapa Memilih Warung Bambu Barokah?</h2>
            <p>
              Lebih dari sekadar tempat makan — kami adalah destinasi pengalaman keluarga 
              yang menghadirkan kebahagiaan di setiap kunjungan.
            </p>
          </div>
        </AnimateOnView>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {alasan.map((item, i) => (
            <AnimateOnView key={item.judul} delay={i * 0.08}>
              <div
                className="p-6 rounded-2xl group transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "var(--surface-elevated)",
                  border: "1px solid var(--outline-light)",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: "linear-gradient(135deg, rgba(79, 122, 55, 0.1), rgba(158, 196, 106, 0.1))",
                    color: "var(--accent)",
                  }}
                >
                  {item.ikon}
                </div>
                <h4 className="text-base font-semibold mb-2" style={{ color: "var(--primary)", fontFamily: "var(--font-heading)" }}>
                  {item.judul}
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-tertiary)" }}>
                  {item.deskripsi}
                </p>
              </div>
            </AnimateOnView>
          ))}
        </div>
      </div>
    </section>
  );
}

// === TESTIMONI SECTION ===
function TestimoniSection() {
  return (
    <section className="section section-alt" id="testimoni">
      <div className="container mx-auto">
        <AnimateOnView>
          <div className="section-header">
            <span className="section-label">
              <Star size={14} />
              Testimoni
            </span>
            <h2>Apa Kata Mereka?</h2>
            <p>
              Cerita dan kesan dari para pengunjung setia Warung Bambu Barokah 
              yang telah merasakan pengalaman terbaik bersama kami.
            </p>
          </div>
        </AnimateOnView>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONI_DATA.slice(0, 3).map((item, i) => (
            <AnimateOnView key={item.id} delay={i * 0.1}>
              <div
                className="p-6 rounded-2xl relative"
                style={{
                  background: "var(--surface-elevated)",
                  border: "1px solid var(--outline-light)",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote size={40} style={{ color: "var(--accent)" }} />
                </div>

                {/* Stars */}
                <div className="flex items-center gap-0.5 mb-4">
                  {Array.from({ length: item.rating }).map((_, idx) => (
                    <Star key={idx} size={16} fill="var(--premium-accent)" style={{ color: "var(--premium-accent)" }} />
                  ))}
                </div>

                {/* Content */}
                <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>
                  &ldquo;{item.isi}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{
                      background: "linear-gradient(135deg, var(--accent), var(--highlight))",
                      color: "white",
                    }}
                  >
                    {item.nama.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "var(--primary)" }}>
                      {item.nama}
                    </p>
                    <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>
                      {item.peran}
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnView>
          ))}
        </div>
      </div>
    </section>
  );
}

// === BLOG PREVIEW SECTION ===
function BlogPreviewSection() {
  return (
    <section className="section" id="blog-terbaru">
      <div className="container mx-auto">
        <AnimateOnView>
          <div className="section-header">
            <span className="section-label">
              <Sparkles size={14} />
              Blog & Artikel
            </span>
            <h2>Berita & Tips Terbaru</h2>
            <p>
              Ikuti cerita, tips kuliner, dan informasi terbaru seputar 
              Warung Bambu Barokah dan wisata kuliner Blitar.
            </p>
          </div>
        </AnimateOnView>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.slice(0, 3).map((post, i) => (
            <AnimateOnView key={post.id} delay={i * 0.1}>
              <Link href={`/blog/${post.slug}`} className="card group block no-underline">
                {/* Image */}
                <div
                  className="h-48 relative overflow-hidden"
                  style={{ background: "linear-gradient(135deg, var(--secondary), var(--accent))" }}
                >
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <Sparkles size={48} className="text-white" />
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="badge badge-highlight">{post.kategori}</span>
                  </div>
                </div>
                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-2 text-xs" style={{ color: "var(--text-tertiary)" }}>
                    <span>{new Date(post.tanggal).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}</span>
                    <span>•</span>
                    <span>{post.waktuBaca} baca</span>
                  </div>
                  <h4 className="text-base font-semibold mb-2 group-hover:text-accent transition-colors line-clamp-2" style={{ color: "var(--primary)", fontFamily: "var(--font-heading)" }}>
                    {post.judul}
                  </h4>
                  <p className="text-sm line-clamp-2" style={{ color: "var(--text-tertiary)" }}>
                    {post.ringkasan}
                  </p>
                </div>
              </Link>
            </AnimateOnView>
          ))}
        </div>

        <AnimateOnView>
          <div className="text-center mt-10">
            <Link href="/blog" className="btn btn-secondary no-underline">
              Lihat Semua Artikel
              <ArrowRight size={16} />
            </Link>
          </div>
        </AnimateOnView>
      </div>
    </section>
  );
}

// === LOKASI SECTION ===
function LokasiSection() {
  return (
    <section className="py-24 relative bg-wbb-surface" id="lokasi-kami">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <AnimateOnView>
            <span className="text-wbb-primary font-bold tracking-wider uppercase text-sm mb-3 block">
              Kunjungi Kami
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-wbb-text" style={{ fontFamily: "var(--font-heading)" }}>
              Lokasi Strategis & Mudah Dijangkau
            </h2>
            <div className="w-20 h-1 bg-wbb-primary mx-auto mt-6 rounded-full" />
          </AnimateOnView>
        </div>

        <AnimateOnView>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl group border border-wbb-primary/10">
            {/* Decorative Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-wbb-primary via-wbb-secondary to-wbb-accent rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            
            <div className="relative bg-white rounded-3xl overflow-hidden flex flex-col lg:flex-row">
              {/* Map Container */}
              <div className="w-full lg:flex-1 h-[400px] lg:h-auto min-h-[550px] relative overflow-hidden bg-gray-100">
                <iframe 
                  src="https://maps.google.com/maps?q=-8.0571952,112.3043922&hl=id&z=17&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 grayscale-[15%] contrast-[1.05] transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-[1.02]"
                ></iframe>
                
                {/* Subtle overlay gradient to blend map with the card */}
                <div className="hidden lg:block absolute inset-y-0 right-0 w-32 pointer-events-none bg-gradient-to-l from-white to-transparent z-10" />
              </div>

              {/* Info Card - Rich UI */}
              <div className="w-full lg:w-[480px] p-8 lg:p-10 flex flex-col justify-center relative bg-white z-20 shadow-[-20px_0_40px_rgba(0,0,0,0.06)]">
                <div className="absolute top-0 right-0 w-40 h-40 bg-wbb-primary/5 rounded-full blur-3xl pointer-events-none" />
                
                <h3 className="text-[1.75rem] font-bold mb-2 text-wbb-text leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
                  Warung Bambu Barokah / WBB
                </h3>
                
                {/* Rating & Categories */}
                <div className="flex flex-wrap items-center gap-2 mb-2 text-sm">
                  <span className="font-bold text-wbb-text">4,8</span>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} fill="currentColor" className={i === 4 ? "opacity-60" : ""} />
                    ))}
                  </div>
                  <span className="text-wbb-on-surface-variant ml-1">(3.837)</span>
                  <span className="text-wbb-on-surface-variant mx-1">•</span>
                  <span className="text-wbb-on-surface-variant">Rp 25–50 rb</span>
                </div>
                
                <p className="text-wbb-on-surface-variant text-sm mb-6 flex items-center gap-2">
                  Restoran Keluarga
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-50 text-blue-600" title="Terverifikasi">
                    <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                  </span>
                </p>

                {/* Action Buttons Row */}
                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-100">
                  <a href="https://google.com/maps/place/Warung+Bambu+Barokah/@-8.0571899,112.3018173,17z/data=!3m1!4b1!4m6!3m5!1s0x2e789363137df03f:0xd1414f5eb4ec16d!8m2!3d-8.0571952!4d112.3043922!16s%2Fg%2F11t1rhp521" target="_blank" rel="noopener noreferrer" className="flex-1 flex flex-col items-center gap-2 group cursor-pointer no-underline">
                    <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center transition-all duration-300 shadow-md group-hover:shadow-lg group-hover:-translate-y-1">
                      <Navigation size={20} className="fill-white/20" />
                    </div>
                    <span className="text-[13px] font-semibold text-blue-600">Rute</span>
                  </a>
                  <button className="flex-1 flex flex-col items-center gap-2 group cursor-pointer border-none bg-transparent p-0">
                    <div className="w-12 h-12 rounded-full bg-white border border-gray-200 text-wbb-primary flex items-center justify-center transition-all duration-300 group-hover:bg-wbb-surface group-hover:border-wbb-primary/30 group-hover:-translate-y-1">
                      <Bookmark size={20} />
                    </div>
                    <span className="text-[13px] font-medium text-wbb-text">Simpan</span>
                  </button>
                  <a href="tel:082245292988" className="flex-1 flex flex-col items-center gap-2 group cursor-pointer no-underline">
                    <div className="w-12 h-12 rounded-full bg-white border border-gray-200 text-wbb-primary flex items-center justify-center transition-all duration-300 group-hover:bg-wbb-surface group-hover:border-wbb-primary/30 group-hover:-translate-y-1">
                      <Phone size={20} />
                    </div>
                    <span className="text-[13px] font-medium text-wbb-text">Telepon</span>
                  </a>
                  <button className="flex-1 flex flex-col items-center gap-2 group cursor-pointer border-none bg-transparent p-0">
                    <div className="w-12 h-12 rounded-full bg-white border border-gray-200 text-wbb-primary flex items-center justify-center transition-all duration-300 group-hover:bg-wbb-surface group-hover:border-wbb-primary/30 group-hover:-translate-y-1">
                      <Share2 size={20} />
                    </div>
                    <span className="text-[13px] font-medium text-wbb-text">Bagikan</span>
                  </button>
                </div>

                {/* Amenities */}
                <div className="flex flex-wrap gap-x-5 gap-y-3 mb-6 pb-6 border-b border-gray-100 text-[13px]">
                  <div className="flex items-center gap-2 text-wbb-text font-medium"><Check size={16} className="text-green-600" /> Makan di tempat</div>
                  <div className="flex items-center gap-2 text-wbb-text font-medium"><Check size={16} className="text-green-600" /> Bawa pulang</div>
                  <div className="flex items-center gap-2 text-wbb-text font-medium"><Check size={16} className="text-green-600" /> Antar tanpa bertemu</div>
                </div>

                {/* Info List */}
                <div className="space-y-5">
                  <div className="flex items-start gap-4 group/item cursor-pointer">
                    <MapPin size={20} className="text-wbb-primary mt-0.5 shrink-0 transition-transform group-hover/item:scale-110" />
                    <p className="text-wbb-text text-[14px] leading-relaxed transition-colors group-hover/item:text-wbb-primary">
                      Dsn. Sukorejo RT1/RW5, Tambakan, Kec. Gandusari, Kabupaten Blitar, Jawa Timur 66187
                    </p>
                  </div>
                  <div className="flex items-start gap-4 group/item cursor-pointer">
                    <Clock size={20} className="text-wbb-primary mt-0.5 shrink-0 transition-transform group-hover/item:scale-110" />
                    <div className="text-[14px] leading-relaxed transition-colors group-hover/item:text-wbb-primary">
                      <span className="text-green-600 font-semibold">Buka</span> <span className="text-wbb-text">· Tutup pukul 21.00</span>
                      <p className="text-wbb-on-surface-variant text-[13px] mt-0.5">Diperbarui oleh pengguna lain 1 minggu yang lalu</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group/item cursor-pointer">
                    <Phone size={20} className="text-wbb-primary mt-0.5 shrink-0 transition-transform group-hover/item:scale-110" />
                    <p className="text-wbb-text text-[14px] transition-colors group-hover/item:text-wbb-primary">
                      0822-4529-2988
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </AnimateOnView>
      </div>
    </section>
  );
}

// === CTA SECTION ===
function CTASection() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      id="cta-utama"
      style={{
        background: `linear-gradient(135deg, var(--primary) 0%, var(--secondary) 50%, var(--accent) 100%)`,
      }}
    >
      {/* Decorative circles */}
      <div
        className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10"
        style={{ background: "var(--highlight)", transform: "translate(30%, -30%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-60 h-60 rounded-full opacity-10"
        style={{ background: "var(--premium-accent)", transform: "translate(-30%, 30%)" }}
      />

      <div className="container mx-auto px-6 text-center relative">
        <AnimateOnView>
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Siap Merasakan Pengalaman Terbaik?
          </h2>
          <p className="text-base md:text-lg max-w-xl mx-auto mb-10" style={{ color: "rgba(255,255,255,0.7)" }}>
            Reservasi meja sekarang atau hubungi kami untuk merencanakan acara spesial Anda 
            di Warung Bambu Barokah.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/reservasi" className="btn btn-reservasi btn-lg no-underline group">
              <Sparkles size={22} className="text-[#D6B15A] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
              Reservasi Sekarang
              <ChevronRight size={22} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent("Halo WBB! Saya ingin reservasi meja / tanya info.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lg no-underline"
              style={{
                background: "rgba(255,255,255,0.12)",
                color: "white",
                border: "1.5px solid rgba(255,255,255,0.25)",
              }}
            >
              Hubungi via WhatsApp
            </a>
          </div>
        </AnimateOnView>
      </div>
    </section>
  );
}

// === MAIN PAGE ===
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedMenuSection />
      <FasilitasSection />
      <StatistikSection />
      <KenapaWBBSection />
      <TestimoniSection />
      <BlogPreviewSection />
      <LokasiSection />
      <CTASection />
    </>
  );
}
