"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import AnimateOnView from "@/components/ui/AnimateOnView";
import { BLOG_POSTS, BLOG_KATEGORI } from "@/lib/data";
import Fireflies from "@/components/ui/Fireflies";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("semua");

  const featuredPost = BLOG_POSTS[0];
  const filteredPosts = BLOG_POSTS.filter(
    (post) => activeCategory === "semua" || post.kategori === activeCategory
  );
  
  // We don't show the featured post in the grid if 'semua' is selected to avoid duplication
  const gridPosts = activeCategory === "semua" ? filteredPosts.slice(1) : filteredPosts;

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
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="font-playfair text-wbb-primary text-4xl md:text-5xl font-bold mb-4">
              Blog & Informasi
            </h1>
            <p className="font-montserrat text-wbb-on-surface-variant text-lg">
              Temukan berbagai artikel menarik seputar kuliner, wisata Blitar, edukasi anak, dan event terbaru di Warung Bambu Barokah.
            </p>
          </div>
        </AnimateOnView>

        {/* Featured Post (Only show on 'semua' category) */}
        {activeCategory === "semua" && (
          <AnimateOnView direction="scale" delay={0.1}>
            <Link href={`/blog/${featuredPost.slug}`} className="block group mb-16">
              <div className="relative rounded-3xl overflow-hidden bg-wbb-surface-container shadow-sm hover:shadow-xl transition-shadow duration-500 flex flex-col md:flex-row">
                <div className="md:w-3/5 relative h-64 md:h-96 overflow-hidden">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
                  <img
                    src={featuredPost.gambar}
                    alt={featuredPost.judul}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-4 py-1.5 bg-wbb-primary text-white text-xs font-bold rounded-full shadow-lg">
                      Terbaru
                    </span>
                  </div>
                </div>
                <div className="md:w-2/5 p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 text-sm text-wbb-on-surface-variant mb-4 font-montserrat">
                    <span>{featuredPost.tanggal}</span>
                    <span>•</span>
                    <span>{featuredPost.waktuBaca}</span>
                  </div>
                  <h2 className="font-playfair text-3xl font-bold text-wbb-on-surface mb-4 group-hover:text-wbb-secondary transition-colors">
                    {featuredPost.judul}
                  </h2>
                  <p className="font-montserrat text-wbb-on-surface-variant line-clamp-3 mb-8">
                    {featuredPost.ringkasan}
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-10 h-10 rounded-full bg-wbb-surface-variant flex items-center justify-center text-wbb-primary font-bold">
                      {featuredPost.penulis.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-sm text-wbb-on-surface">{featuredPost.penulis}</p>
                      <p className="text-xs text-wbb-on-surface-variant">Penulis</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </AnimateOnView>
        )}

        {/* Categories Filter */}
        <AnimateOnView direction="up" delay={0.2}>
          <div className="flex flex-wrap gap-3 mb-10 border-b border-wbb-surface-variant pb-6">
            {BLOG_KATEGORI.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-full font-montserrat font-medium text-sm transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-wbb-secondary text-wbb-primary shadow-md font-bold"
                    : "bg-transparent text-wbb-on-surface-variant hover:bg-wbb-surface-container"
                }`}
                style={activeCategory === cat.id ? { color: "#1c2e12" } : {}}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </AnimateOnView>

        {/* Blog Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {gridPosts.map((post) => (
              <motion.div
                key={post.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group flex flex-col h-full bg-wbb-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-wbb-outline-variant/20"
              >
                <Link href={`/blog/${post.slug}`} className="block relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
                  <img
                    src={post.gambar}
                    alt={post.judul}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-wbb-primary text-xs font-bold rounded-full shadow-sm">
                      {BLOG_KATEGORI.find((c) => c.id === post.kategori)?.label || post.kategori}
                    </span>
                  </div>
                </Link>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-xs text-wbb-outline mb-3 font-montserrat">
                    <span>{post.tanggal}</span>
                    <span>•</span>
                    <span>{post.waktuBaca}</span>
                  </div>
                  
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="font-playfair text-xl font-bold text-wbb-on-surface mb-3 group-hover:text-wbb-secondary transition-colors line-clamp-2">
                      {post.judul}
                    </h3>
                  </Link>
                  
                  <p className="font-montserrat text-sm text-wbb-on-surface-variant line-clamp-3 mb-6 flex-grow">
                    {post.ringkasan}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-wbb-surface-variant/50">
                    <span className="text-sm font-semibold text-wbb-primary">{post.penulis}</span>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-sm font-bold text-wbb-secondary group-hover:text-wbb-primary transition-colors flex items-center gap-1"
                    >
                      Baca Artikel <span className="text-lg leading-none">→</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {gridPosts.length === 0 && (
          <div className="text-center py-20 text-wbb-on-surface-variant font-montserrat">
            Belum ada artikel untuk kategori ini.
          </div>
        )}
      </div>
    </main>
  );
}
