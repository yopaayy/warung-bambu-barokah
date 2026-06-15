"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimateOnView from "@/components/ui/AnimateOnView";
import { Search, MapPin, Calendar, Heart } from "lucide-react";
import Fireflies from "@/components/ui/Fireflies";

// Menggunakan aset lokal agar gambar dijamin stabil, resolusi tinggi, dan tidak error/pecah
const galleryItems = [
  { 
    id: 1, 
    category: "Kuliner", 
    title: "Ayam Bakar Madu Spesial", 
    desc: "Dimasak perlahan dengan bumbu rempah rahasia khas Nusantara.",
    src: "/images/outing-class/outing-class-1.png",
    date: "12 Nov 2024",
    likes: 245
  },
  { 
    id: 2, 
    category: "Wisata", 
    title: "Senja di Lorong Bambu", 
    desc: "Spot foto terfavorit pengunjung saat matahari terbenam.",
    src: "/images/outing-class/outing-class-2.png",
    date: "10 Nov 2024",
    likes: 412
  },
  { 
    id: 3, 
    category: "Edukasi", 
    title: "Panen Padi Bersama", 
    desc: "Program edukasi alam untuk anak sekolah dasar.",
    src: "/images/outing-class/outing-class-3.png",
    date: "05 Nov 2024",
    likes: 189
  },
  { 
    id: 4, 
    category: "Event", 
    title: "Wedding Outdoor", 
    desc: "Pernikahan romantis bernuansa alam di area gathering WBB.",
    src: "/images/outing-class/outing-class-4.png",
    date: "01 Nov 2024",
    likes: 530
  },
  { 
    id: 5, 
    category: "Kuliner", 
    title: "Gurame Asam Manis", 
    desc: "Sajian seafood premium hasil budidaya kolam sendiri.",
    src: "/images/outing-class/outing-class-5.png",
    date: "28 Okt 2024",
    likes: 310
  },
  { 
    id: 6, 
    category: "Wisata", 
    title: "Taman Air Mancur", 
    desc: "Suasana sejuk di tengah area makan outdoor kami.",
    src: "/images/outing-class/outing-class-6.png",
    date: "25 Okt 2024",
    likes: 275
  },
  { 
    id: 7, 
    category: "Edukasi", 
    title: "Kelas Lalu Lintas", 
    desc: "Fasilitas simulasi berkendara aman untuk anak-anak TK.",
    src: "/images/outing-class/outing-class-7.png",
    date: "20 Okt 2024",
    likes: 156
  },
  { 
    id: 8, 
    category: "Event", 
    title: "Family Gathering", 
    desc: "Keseruan acara kumpul keluarga besar di akhir pekan.",
    src: "/images/outing-class/outing-class-8.png",
    date: "15 Okt 2024",
    likes: 388
  },
];

const categories = ["Semua", "Kuliner", "Wisata", "Edukasi", "Event"];

export default function GaleriPage() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredItems = galleryItems.filter(
    (item) => activeCategory === "Semua" || item.category === activeCategory
  );

  return (
    <main className="min-h-screen bg-wbb-background pt-24 pb-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-[10%] left-[15%] w-64 h-64 bg-wbb-primary/10 rounded-full blur-[80px]"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-wbb-secondary/20 rounded-full blur-[100px]"
          animate={{ x: [0, -60, 0], y: [0, -40, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div 
          className="absolute top-[40%] left-[40%] w-40 h-40 bg-highlight-light/20 rounded-full blur-[60px]"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <Fireflies count={15} />
      </div>

      <div className="container-wbb relative z-10">
        {/* Header Section */}
        <AnimateOnView direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-wbb-secondary rounded-full mb-8"></div>
            <h1 className="font-playfair text-wbb-primary text-4xl md:text-6xl font-bold mt-8 mb-6 tracking-tight">
              Koleksi Momen WBB
            </h1>
            <p className="font-montserrat text-wbb-on-surface-variant text-lg md:text-xl leading-relaxed">
              Jelajahi visualisasi pengalaman tak terlupakan di Warung Bambu Barokah. Mulai dari kelezatan kuliner premium hingga keseruan wisata edukasi alam.
            </p>
          </div>
        </AnimateOnView>

        {/* Premium Filter Buttons */}
        <AnimateOnView direction="up" delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4 mb-16 relative z-20">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-8 py-3 rounded-full font-montserrat font-bold text-sm tracking-wide transition-all duration-300 overflow-hidden group border ${
                  activeCategory === category
                    ? "border-wbb-primary bg-wbb-primary text-wbb-on-primary shadow-xl scale-105"
                    : "border-wbb-outline-variant/50 bg-wbb-surface text-wbb-on-surface hover:border-wbb-primary/50 hover:bg-wbb-surface-container-high hover:shadow-md"
                }`}
              >
                {/* Subtle shine effect on hover for inactive tabs */}
                <span className={`absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full ${activeCategory !== category && 'group-hover:animate-[shimmer_1.5s_infinite]'} z-0`}></span>
                <span className="relative z-10">{category}</span>
              </button>
            ))}
          </div>
        </AnimateOnView>

        {/* Masonry Grid (Interactive & Premium Card Style) */}
        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-8 space-y-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                className="relative break-inside-avoid group cursor-pointer"
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="group relative rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 bg-black cursor-pointer h-full">
                  
                  {/* Image with Parallax-like slow zoom */}
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-auto object-cover transform transition-transform duration-1000 ease-in-out group-hover:scale-110 opacity-90 group-hover:opacity-100 block"
                    loading="lazy"
                    onError={(e) => {
                      // Prevent infinite loop if local asset is missing
                      e.currentTarget.onerror = null; 
                      e.currentTarget.src = "/images/outing-class/outing-class-main-head-background.png";
                    }}
                  />
                  
                  {/* Dark Gradient Overlay for text contrast (Made darker) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10 opacity-80 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  {/* Top Badge Overlay */}
                  <div className="absolute top-5 left-5 z-20">
                    <span 
                      className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs tracking-widest font-bold rounded-full uppercase shadow-lg transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"
                    >
                      {item.category}
                    </span>
                  </div>

                  {/* Interactive Content Overlay (Bottom) */}
                  <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col justify-end transform transition-all duration-500 z-20">
                    
                    <h3 
                      className="font-playfair text-2xl md:text-3xl font-bold mb-1 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 drop-shadow-2xl"
                      style={{ color: "#ffffff", textShadow: "0px 2px 10px rgba(0,0,0,0.9)" }}
                    >
                      {item.title}
                    </h3>
                    
                    {/* Collapsible Description */}
                    <div className="overflow-hidden">
                      <p 
                        className="font-montserrat text-sm leading-relaxed max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-700 delay-75 mt-2"
                        style={{ color: "#f8f9fa", textShadow: "0px 2px 6px rgba(0,0,0,0.9)" }}
                      >
                        {item.desc}
                      </p>
                    </div>
                    
                    {/* Meta Info (Date & Likes) */}
                    <div 
                      className="flex items-center justify-between text-xs font-montserrat pt-4 mt-2 border-t border-white/40 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150"
                      style={{ color: "#f8f9fa", textShadow: "0px 1px 4px rgba(0,0,0,0.9)" }}
                    >
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-white drop-shadow-md" />
                        <span className="font-semibold">{item.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5 group/like hover:text-red-400 transition-colors">
                        <Heart size={14} className="group-hover/like:fill-red-500 group-hover/like:text-red-500 transition-colors drop-shadow-md" />
                        <span className="font-semibold">{item.likes}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-block p-6 bg-wbb-surface-container rounded-full mb-4">
              <MapPin size={48} className="text-wbb-outline-variant" />
            </div>
            <h3 className="font-playfair text-2xl font-bold text-wbb-on-surface mb-2">Koleksi Tidak Ditemukan</h3>
            <p className="text-wbb-on-surface-variant font-montserrat">
              Belum ada foto yang tersedia untuk kategori ini.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
