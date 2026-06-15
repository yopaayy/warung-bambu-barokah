"use client";

import { motion } from "framer-motion";
import AnimateOnView from "@/components/ui/AnimateOnView";
import { 
  Leaf, 
  Award, 
  HeartHandshake, 
  ShieldCheck, 
  Building2, 
  Users, 
  Target, 
  Sparkles,
  Quote
} from "lucide-react";
import Link from "next/link";
import Fireflies from "@/components/ui/Fireflies";

export default function TentangKamiPage() {
  const misiItems = [
    "Mewujudkan standart management perusahaan yang profesional",
    "Menuju Personal Branding yang memberikan makna positif kepada khalayak",
    "Mengembangkan SDM yang kompeten, professional, dan mengutamakan Keselamatan dan Kesehatan Kerja",
    "Menjalankan usaha dengan hati, penuh integritas, etika, dan budaya kerja yang disiplin, ramah, santun, dan peduli",
    "Menyajikan Produk Berkualitas, Layanan Prima, dan Fasilitas yang Lengkap",
    "Menjalin kemitraan dan kontribusi positif yang berkelanjutan",
    "Mewujudkan kesejahteraan karyawan",
  ];

  return (
    <main className="min-h-screen bg-wbb-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-primary min-h-[60vh] flex items-center justify-center">
        {/* Background Image with Parallax effect */}
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="/images/outing-class/outing-class-main-head-background.png" 
            alt="Warung Bambu Barokah Background" 
            className="w-full h-full object-cover opacity-40"
          />
          {/* Made gradient darker to ensure white text pops */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/70 to-wbb-background" />
        </motion.div>

        {/* Animated Orbs for Premium feel */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-[20%] left-[20%] w-64 h-64 bg-wbb-secondary/30 rounded-full blur-[80px]"
            animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-[20%] right-[20%] w-72 h-72 bg-highlight/20 rounded-full blur-[90px]"
            animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <Fireflies count={15} />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
          <AnimateOnView animation="fade-up">
            {/* Elegant Glass Box Container */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/20 p-10 md:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden group">
              <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shimmer_2s_infinite] -skew-x-12" />
              
              <span className="inline-block py-1.5 px-5 rounded-full bg-wbb-secondary/20 border border-wbb-secondary/30 text-white text-sm font-semibold tracking-widest uppercase mb-6 shadow-xl relative z-10">
                Sejak 27 Juni 2024
              </span>
              
              <h1 
                className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-2xl relative z-10"
                style={{ color: "#ffffff", textShadow: "0px 4px 20px rgba(0,0,0,0.8)" }}
              >
                Selayang Pandang
              </h1>
              
              <p 
                className="font-montserrat text-lg md:text-2xl max-w-3xl mx-auto font-light leading-relaxed relative z-10"
                style={{ color: "#f8f9fa", textShadow: "0px 2px 10px rgba(0,0,0,0.8)" }}
              >
                Warung Bambu Barokah
              </p>
            </div>
          </AnimateOnView>
        </div>

        {/* Bouncing Scroll Indicator (Moved outside container to attach to section bottom) */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-70 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-white text-xs font-montserrat tracking-widest uppercase" style={{ color: "#ffffff" }}>Gulir ke bawah</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <motion.div 
              className="w-1.5 h-2 bg-white rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Story & Philosophy Section */}
      <section className="py-20 md:py-28 relative -mt-10 z-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content (Text) */}
            <AnimateOnView direction="right">
              <div className="space-y-8">
                <div className="flex items-center gap-3 text-wbb-secondary font-bold tracking-widest uppercase text-sm mb-4">
                  <Leaf size={18} />
                  <span>Kisah Kami</span>
                </div>
                
                <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-wbb-primary leading-tight">
                  Destinasi Wisata Kuliner & <span className="text-wbb-secondary">Edukasi Lalu Lintas</span>
                </h2>
                
                <div className="prose prose-lg text-wbb-on-surface-variant font-montserrat leading-relaxed">
                  <p>
                    <strong>Warung Bambu Barokah (WBB)</strong> menyajikan menu produk yang memiliki ciri khas dan memberikan kesan penuh makna <strong>RASA SUASANA ISTIMEWA</strong>.
                  </p>
                  <p>
                    WBB diciptakan dengan suasana alam yang sejuk, asri, ditata estetik, didukung dengan kolam ikan yang luas. Venue pengunjung dibuat di atas kolam ikan berupa gazebo, diiringi suara gemericik air yang memberikan harmoni kenyamanan.
                  </p>
                  <p>
                    Hal inilah yang menjadikan WBB memiliki daya tarik tersendiri—sebuah destinasi yang layak untuk dijadikan tempat persinggahan, tempat bersantai, tempat berkegiatan, maupun tempat mencari inspirasi dan motivasi diri.
                  </p>
                </div>

                <div className="bg-wbb-surface-container p-6 rounded-2xl border-l-4 border-wbb-secondary shadow-sm">
                  <p className="font-playfair text-wbb-primary text-xl italic font-semibold">
                    "BELUM KE BLITAR KALAU BELUM KE WBB."
                  </p>
                </div>
              </div>
            </AnimateOnView>

            {/* Right Content (Values/Features Grid) */}
            <AnimateOnView direction="left" delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Value 1 */}
                <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-2xl bg-wbb-secondary/10 flex items-center justify-center text-wbb-secondary mb-6">
                    <ShieldCheck size={28} />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-wbb-primary mb-3">Sertifikasi Halal</h3>
                  <p className="font-montserrat text-sm text-wbb-on-surface-variant leading-relaxed">
                    Semua menu di WBB memiliki Sertifikasi Halal Resmi (No. ID35210038799460126), menjunjung tinggi komitmen kualitas dan rasa aman bagi pelanggan.
                  </p>
                </div>

                {/* Value 2 */}
                <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-all duration-300 transform hover:-translate-y-1 sm:translate-y-8">
                  <div className="w-14 h-14 rounded-2xl bg-wbb-primary/10 flex items-center justify-center text-wbb-primary mb-6">
                    <Award size={28} />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-wbb-primary mb-3">Kualitas Konsisten</h3>
                  <p className="font-montserrat text-sm text-wbb-on-surface-variant leading-relaxed">
                    Komitmen terhadap pelayanan, kebersihan, kecepatan sajian dengan standar kualitas yang konsisten sebagai unsur utama SOP kami.
                  </p>
                </div>

                {/* Value 3 */}
                <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-2xl bg-wbb-tertiary/10 flex items-center justify-center text-wbb-tertiary mb-6">
                    <Building2 size={28} />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-wbb-primary mb-3">Fasilitas Inklusif</h3>
                  <p className="font-montserrat text-sm text-wbb-on-surface-variant leading-relaxed">
                    Fasilitas umum lengkap: parkir luas, mushola bersih, ruang laktasi, toilet umum terpisah, hingga toilet khusus difabel.
                  </p>
                </div>

                {/* Value 4 */}
                <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-all duration-300 transform hover:-translate-y-1 sm:translate-y-8">
                  <div className="w-14 h-14 rounded-2xl bg-highlight-light/10 flex items-center justify-center text-highlight-light mb-6">
                    <HeartHandshake size={28} />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-wbb-primary mb-3">Pelayanan Sepenuh Hati</h3>
                  <p className="font-montserrat text-sm text-wbb-on-surface-variant leading-relaxed">
                    Kepedulian, keramahan, penuh kekeluargaan, santun, dan kebermanfaatan, yang juga dirasakan kepada pelanggan berkebutuhan khusus.
                  </p>
                </div>

              </div>
            </AnimateOnView>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-24 relative overflow-hidden bg-primary">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-wbb-secondary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-highlight-light/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* VISI */}
            <AnimateOnView direction="up" className="lg:col-span-5">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2.5rem] p-10 md:p-14 h-full shadow-2xl relative overflow-hidden group hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:-translate-y-2 transition-all duration-500">
                <div className="absolute -right-6 -top-6 text-white/5 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-700">
                  <Target size={180} />
                </div>
                
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-wbb-secondary/20 border border-wbb-secondary/30 text-white text-sm font-bold tracking-widest uppercase mb-8 shadow-sm">
                    Visi WBB
                  </div>
                  <h3 
                    className="font-playfair text-3xl font-bold mb-6 leading-relaxed"
                    style={{ color: "#ffffff", textShadow: "0px 2px 10px rgba(0,0,0,0.3)" }}
                  >
                    Mewujudkan perusahaan yang memberikan kepuasan kepada pelanggan dengan <span className="text-wbb-secondary">Rasa Suasana Istimewa</span>.
                  </h3>
                  <p 
                    className="font-montserrat text-base leading-relaxed"
                    style={{ color: "rgba(255, 255, 255, 0.85)" }}
                  >
                    Didukung dengan sumber daya manusia dan management yang profesional, serta komitmen untuk memberikan pelayanan prima, sehingga bisa memberikan kontribusi berkelanjutan.
                  </p>
                </div>
              </div>
            </AnimateOnView>

            {/* MISI */}
            <AnimateOnView direction="up" delay={0.2} className="lg:col-span-7">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 md:p-14 h-full shadow-2xl relative overflow-hidden group hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] hover:-translate-y-2 transition-all duration-500">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-bold tracking-widest uppercase mb-8 shadow-sm">
                  Misi WBB
                </div>
                
                <div className="space-y-6">
                  {misiItems.map((misi, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index, duration: 0.5 }}
                      className="flex items-start gap-4 group/item hover:bg-white/5 p-3 -ml-3 rounded-2xl transition-all duration-300 cursor-default"
                    >
                      <div className="w-8 h-8 rounded-full bg-wbb-secondary/20 border border-wbb-secondary/30 flex items-center justify-center text-wbb-secondary flex-shrink-0 mt-0.5 group-hover/item:bg-wbb-secondary group-hover/item:text-white group-hover/item:scale-110 transition-all duration-300 shadow-sm">
                        <Sparkles size={14} />
                      </div>
                      <p 
                        className="font-montserrat text-base md:text-lg leading-relaxed group-hover/item:translate-x-2 transition-transform duration-300"
                        style={{ color: "rgba(255, 255, 255, 0.9)" }}
                      >
                        {misi}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimateOnView>

          </div>
        </div>
      </section>

      {/* Kolaborasi / Closing Section */}
      <section className="py-24 bg-wbb-surface-container">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <AnimateOnView animation="scale">
            <Users size={48} className="mx-auto text-wbb-secondary mb-6 opacity-80" />
            <h2 className="font-playfair text-wbb-primary text-3xl md:text-4xl font-bold mb-6">
              Kemitraan & Kolaborasi
            </h2>
            <p className="font-montserrat text-wbb-on-surface-variant text-lg leading-relaxed mb-12">
              Kolaborasi WBB dengan pegiat wisata memberikan pelayanan terbaik, berbagai fasilitas dan kontribusi yang mengedepankan <span className="font-bold text-wbb-primary italic">win-win solution concept</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/kontak" className="btn btn-premium px-8 py-4 text-lg">
                Hubungi Kami Sekarang
              </Link>
            </div>
          </AnimateOnView>
        </div>
      </section>
    </main>
  );
}
