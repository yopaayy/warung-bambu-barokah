"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Heart,
  X,
  Sparkles,
  UtensilsCrossed,
  Flame,
  Leaf,
  Users,
  Check,
  TrendingUp,
  Award,
  AlertCircle,
  HelpCircle,
  Send,
  Loader2,
  Bot,
  ArrowRight,
} from "lucide-react";
import AnimateOnView from "@/components/ui/AnimateOnView";
import Fireflies from "@/components/ui/Fireflies";
import {
  MENU_ITEMS,
  KATEGORI_MENU,
  MenuItem,
  formatRupiah,
  SITE_CONFIG,
} from "@/lib/data";
import { BRAND_ASSETS } from "@/lib/assets";

export interface AiMenuItem extends MenuItem {
  alasan?: string;
}

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("semua");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState<boolean>(false);

  // AI Recommendation State
  const [isAiHelperOpen, setIsAiHelperOpen] = useState<boolean>(false);
  const [aiPrompt, setAiPrompt] = useState<string>("");
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [aiRecommendation, setAiRecommendation] = useState<AiMenuItem[] | null>(null);
  const [aiParsedContext, setAiParsedContext] = useState<{ budget: number | null, guests: number, pesanSapaan?: string } | null>(null);

  // Toggle Favorite Handler
  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent opening modal
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  // Filter and Search Logic
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === "semua" || item.kategori === selectedCategory;
      const matchesSearch =
        item.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.deskripsi.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFavorite = !showOnlyFavorites || favorites.includes(item.id);

      return matchesCategory && matchesSearch && matchesFavorite;
    });
  }, [selectedCategory, searchQuery, showOnlyFavorites, favorites]);

  // AI Recommendation Solver (Real LLM via Backend API)
  const handleGetAiRecommendation = async (promptOverride?: string) => {
    const textToAnalyze = promptOverride || aiPrompt;
    if (!textToAnalyze.trim()) return;

    setIsAiHelperOpen(true);
    setIsAnalyzing(true);
    setAiRecommendation(null);
    setAiParsedContext(null);

    try {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: textToAnalyze }),
      });

      if (!response.ok) {
        throw new Error("Gagal memproses AI");
      }

      const data = await response.json();
      
      // Match the IDs back to the actual MENU_ITEMS to get full details (like images)
      const recommendations: AiMenuItem[] = [];
      if (data.rekomendasi && Array.isArray(data.rekomendasi)) {
        for (const item of data.rekomendasi) {
          const found = MENU_ITEMS.find(m => m.id === item.id);
          if (found) {
            recommendations.push({
              ...found,
              alasan: item.alasan
            });
          }
        }
      }

      setAiParsedContext({
        budget: data.budget_terdeteksi || null,
        guests: data.jumlah_orang_terdeteksi || 2,
        pesanSapaan: data.pesan_sapaan || "Halo! Berikut adalah kombinasi hidangan yang cocok untuk Anda."
      });
      setAiRecommendation(recommendations);
    } catch (error) {
      console.error(error);
      setAiParsedContext({
        budget: null, guests: 2, pesanSapaan: "Maaf, Asisten AI sedang mengalami gangguan koneksi atau konfigurasi API belum selesai. Silakan coba lagi nanti."
      });
      setAiRecommendation([]);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleResetAi = () => {
    setAiPrompt("");
    setAiRecommendation(null);
    setAiParsedContext(null);
  };

  return (
    <div className="min-h-screen bg-background-alt pt-28 pb-20">
      {/* Header Banner */}
      <section 
        className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden"
        style={{ 
          background: "linear-gradient(135deg, var(--primary) 0%, #0d1a09 100%)",
        }}
      >
        {/* Deep Background Pattern */}
        <div 
          className="absolute inset-0 z-0 opacity-10 mix-blend-overlay"
          style={{
            backgroundImage: `url('${BRAND_ASSETS.logo}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Giant Glowing Orbs */}
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

        {/* Interactive Floating Particles (Fireflies / Sparks) */}
        <Fireflies count={25} />

        <div className="container mx-auto px-6 text-center relative z-10">
          <AnimateOnView direction="up" delay={0.1}>
            <span 
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6" 
              style={{ 
                background: "rgba(158, 196, 106, 0.15)", 
                border: "1px solid rgba(158, 196, 106, 0.3)",
                color: "var(--highlight)",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
              }}
            >
              <UtensilsCrossed size={16} />
              <span className="text-xs font-bold tracking-[0.15em] uppercase">Menu Kuliner</span>
            </span>
          </AnimateOnView>

          <AnimateOnView direction="up" delay={0.2}>
            <h1 
              className="text-4xl md:text-5xl font-black mb-6" 
              style={{ 
                fontFamily: "var(--font-heading)",
                color: "#ffffff",
                textShadow: "0px 4px 12px rgba(0,0,0,0.4)"
              }}
            >
              Menu Autentik Nusantara
            </h1>
          </AnimateOnView>

          <AnimateOnView direction="up" delay={0.3}>
            <p 
              className="max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-medium"
              style={{ 
                color: "rgba(255,255,255,0.9)",
                textShadow: "0px 2px 4px rgba(0,0,0,0.3)"
              }}
            >
              Dari olahan bambu tradisional hingga hidangan seafood premium segar, temukan kelezatan khas yang kami siapkan khusus untuk Anda dan keluarga.
            </p>
          </AnimateOnView>
        </div>
      </section>

      {/* Main Interactive Container */}
      <div className="container mx-auto px-6">

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* LEFT SIDE: Filter & Search controls */}
          <div className="w-full lg:w-3/4">
            
            {/* Search and Quick Filters bar */}
            <div className="flex flex-col md:flex-row gap-4 mb-8 bg-white p-4 rounded-2xl border border-outline-light shadow-sm">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary" size={18} />
                <input
                  type="text"
                  placeholder="Cari masakan, minuman, atau paket hemat..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="input !pl-10"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-text-tertiary hover:text-primary"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowOnlyFavorites(!showOnlyFavorites)}
                  className={`btn btn-sm ${
                    showOnlyFavorites
                      ? "btn-accent"
                      : "bg-surface-container text-text hover:bg-surface-high border border-outline-light"
                  }`}
                >
                  <Heart size={16} fill={showOnlyFavorites ? "currentColor" : "none"} />
                  Favorit Saya ({favorites.length})
                </button>
              </div>
            </div>

            {/* Categories Tabs */}
            <div className="flex overflow-x-auto gap-2 pb-4 mb-8 no-scrollbar -mx-6 px-6 lg:mx-0 lg:px-0">
              {KATEGORI_MENU.map((kat) => (
                <button
                  key={kat.id}
                  onClick={() => setSelectedCategory(kat.id)}
                  className={`btn btn-sm shrink-0 gap-2 ${
                    selectedCategory === kat.id
                      ? "btn-primary"
                      : "bg-white text-text hover:bg-surface-container border border-outline-light"
                  }`}
                  style={{ borderRadius: "var(--border-radius-full)" }}
                >
                  <span>{kat.ikon}</span>
                  <span>{kat.label}</span>
                </button>
              ))}
            </div>

            {/* Grid List */}
            {filteredItems.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
              >
                <AnimatePresence mode="popLayout">
                  {filteredItems.map((item) => {
                    const isFavorite = favorites.includes(item.id);
                    return (
                      <motion.div
                        layout
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        key={item.id}
                        className="card group cursor-pointer flex flex-col justify-between"
                        onClick={() => setSelectedItem(item)}
                      >
                        <div>
                          {/* Image / Icon Placeholder Container */}
                          <div
                            className="h-52 relative overflow-hidden transition-transform duration-700 group-hover:scale-105"
                            style={{
                              background: `linear-gradient(135deg, var(--primary-light), var(--accent))`,
                            }}
                          >
                            <div className="absolute inset-0 flex items-center justify-center">
                              <UtensilsCrossed size={60} className="opacity-15 text-white" />
                            </div>

                            {/* Floating Badges */}
                            <div className="absolute top-4 left-4 flex flex-col gap-2">
                              {item.badge && (
                                <span className="badge badge-premium">{item.badge}</span>
                              )}
                              {item.baru && (
                                <span className="badge badge-highlight">Baru</span>
                              )}
                            </div>

                            {/* Favorite Heart Button */}
                            <button
                              onClick={(e) => toggleFavorite(item.id, e)}
                              className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center bg-white/85 hover:bg-white text-error border border-outline-light transition-all hover:scale-110 shadow-sm"
                            >
                              <Heart size={18} fill={isFavorite ? "currentColor" : "none"} />
                            </button>

                            {/* Zoom overlay on hover */}
                            <div
                              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                              style={{ background: "rgba(28, 46, 18, 0.4)" }}
                            >
                              <span className="btn btn-sm" style={{ background: "white", color: "var(--primary)" }}>
                                Lihat Detail
                              </span>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="p-6 bg-white">
                            <h3 
                              className="text-lg font-bold mb-2 line-clamp-2 leading-snug tracking-wide" 
                              style={{ color: "var(--primary)", fontFamily: "var(--font-heading)" }}
                            >
                              {item.nama}
                            </h3>
                            <p className="text-sm text-text-tertiary mb-4 line-clamp-2 leading-relaxed">
                              {item.deskripsi}
                            </p>
                          </div>
                        </div>

                        {/* Price & Status (Fixed to Bottom of Card) */}
                        <div className="px-6 pb-6 pt-4 bg-white border-t border-outline-light flex justify-between items-center">
                          <span className="text-lg font-extrabold tracking-wide" style={{ color: "var(--accent)" }}>
                            {formatRupiah(item.harga)}
                          </span>
                          <div className="flex items-center gap-1.5 text-xs font-semibold text-text-secondary">
                            <span className="w-2 h-2 rounded-full" style={{ background: "var(--success)" }} />
                            Tersedia
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </motion.div>
            ) : (
              <div className="text-center py-16 bg-white border border-outline-light rounded-2xl shadow-sm">
                <AlertCircle size={48} className="mx-auto mb-4 text-text-tertiary" />
                <h3 className="text-lg font-semibold text-primary mb-1">Menu Tidak Ditemukan</h3>
                <p className="text-sm text-text-tertiary max-w-md mx-auto">
                  Coba ubah kata kunci pencarian Anda atau pilih kategori menu yang lain.
                </p>
              </div>
            )}
          </div>

          {/* RIGHT SIDE: AI Assistant Recommendations */}
          <div className="w-full lg:w-1/4 bg-white p-6 rounded-2xl border border-outline-light shadow-sm sticky top-28 flex flex-col h-[fit-content]">
            <div className="flex items-center gap-2 mb-4">
              <Bot size={22} className="text-premium" />
              <h3 className="text-md font-bold text-primary" style={{ fontFamily: "var(--font-heading)" }}>
                Asisten AI {SITE_CONFIG.namaAkronim}
              </h3>
            </div>
            
            <p className="text-[13px] text-text-secondary mb-5 leading-relaxed">
              Ceritakan selera, budget, atau jumlah rombongan Anda. AI kami akan meracikkan menu terbaik!
            </p>

            <div className="flex-1 flex flex-col gap-3">
              <div className="relative group">
                <textarea
                  placeholder="Cth: Saya mau makan ikan bakar pedas buat berempat, budget 200rb..."
                  value={aiPrompt}
                  onChange={(e) => setAiPrompt(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleGetAiRecommendation();
                    }
                  }}
                  className="w-full bg-surface-container border border-outline-light rounded-xl p-3 text-[13px] text-text resize-none focus:outline-none focus:border-premium focus:ring-1 focus:ring-premium transition-all min-h-[120px] shadow-inner"
                />
                <button
                  onClick={() => handleGetAiRecommendation()}
                  disabled={!aiPrompt.trim() || isAnalyzing}
                  className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-premium text-white flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 transition-all shadow-md group-focus-within:bg-accent"
                >
                  {isAnalyzing ? <Loader2 size={14} className="animate-spin" /> : <Send size={14} className="ml-0.5" />}
                </button>
              </div>

              {/* Quick Prompts */}
              <div className="flex flex-col gap-2 mt-2">
                <span className="text-[11px] font-semibold text-text-tertiary uppercase tracking-wider mb-1">Coba tanyakan:</span>
                <button onClick={() => { setAiPrompt("Paket makan hemat berdua"); handleGetAiRecommendation("Paket makan hemat berdua"); }} className="text-[12px] text-left p-2.5 rounded-lg border border-outline-light hover:bg-premium/5 hover:border-premium/30 transition-colors text-text-secondary flex gap-2 items-center">
                  <Sparkles size={14} className="text-premium shrink-0" /> Paket makan hemat berdua
                </button>
                <button onClick={() => { setAiPrompt("Rekomendasi menu pedas mantap"); handleGetAiRecommendation("Rekomendasi menu pedas mantap"); }} className="text-[12px] text-left p-2.5 rounded-lg border border-outline-light hover:bg-premium/5 hover:border-premium/30 transition-colors text-text-secondary flex gap-2 items-center">
                  <Flame size={14} className="text-error shrink-0" /> Rekomendasi menu pedas mantap
                </button>
                <button onClick={() => { setAiPrompt("Makan seafood bareng keluarga 5 orang"); handleGetAiRecommendation("Makan seafood bareng keluarga 5 orang"); }} className="text-[12px] text-left p-2.5 rounded-lg border border-outline-light hover:bg-premium/5 hover:border-premium/30 transition-colors text-text-secondary flex gap-2 items-center">
                  <Users size={14} className="text-blue-500 shrink-0" /> Makan seafood keluarga 5 org
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI RECOMMENDATION RESULTS DRAWER / MODAL */}
      <AnimatePresence>
        {isAiHelperOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-primary/45 backdrop-blur-sm z-[300] flex items-center justify-center p-4"
            onClick={() => setIsAiHelperOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-2xl w-full p-6 shadow-xl border border-outline-light flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6 shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-premium/10 rounded-full flex items-center justify-center text-premium">
                    <Bot size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary" style={{ fontFamily: "var(--font-heading)" }}>
                      Asisten AI {SITE_CONFIG.namaAkronim}
                    </h3>
                    <p className="text-[13px] text-text-tertiary">
                      {isAnalyzing ? 'Menganalisis selera Anda...' : aiParsedContext ? `Rekomendasi untuk ${aiParsedContext.guests} Orang` : 'Menyiapkan rekomendasi...'}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsAiHelperOpen(false)}
                  className="p-2 rounded-full hover:bg-surface-container text-text-tertiary transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-4 mb-6 overflow-y-auto pr-2 flex-1">
                {isAnalyzing ? (
                  <div className="flex flex-col items-center justify-center py-12">
                    <div className="relative w-16 h-16 mb-4">
                      <div className="absolute inset-0 border-4 border-premium/20 rounded-full"></div>
                      <div className="absolute inset-0 border-4 border-premium rounded-full border-t-transparent animate-spin"></div>
                      <Bot size={24} className="absolute inset-0 m-auto text-premium animate-pulse" />
                    </div>
                    <p className="text-sm font-semibold text-primary animate-pulse">Sedang meracik rekomendasi terbaik...</p>
                  </div>
                ) : aiRecommendation && aiRecommendation.length > 0 ? (
                  <>
                    <div className="p-4 rounded-xl bg-surface-container text-[13px] text-text-secondary leading-relaxed border border-outline-light flex gap-3">
                      <Sparkles size={18} className="text-premium shrink-0 mt-0.5" />
                      <div>
                        {aiParsedContext?.pesanSapaan}
                        <br />
                        <span className="font-bold text-accent mt-1 inline-block">
                          Estimasi Total: {formatRupiah(aiRecommendation.reduce((sum, item) => sum + item.harga, 0))}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {aiRecommendation.map((item, index) => (
                        <div
                          key={`${item.id}-${index}`}
                          className="flex flex-col gap-2 p-3 rounded-xl border border-outline-light hover:bg-background transition-colors cursor-pointer"
                          onClick={() => {
                            setSelectedItem(item);
                            setIsAiHelperOpen(false);
                          }}
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                              <UtensilsCrossed size={20} className="text-primary" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-bold text-primary truncate">
                                {item.nama}
                              </h4>
                              <p className="text-xs text-text-tertiary truncate">
                                {item.deskripsi}
                              </p>
                            </div>
                            <div className="text-right">
                              <span className="text-sm font-bold text-accent">
                                {formatRupiah(item.harga)}
                              </span>
                            </div>
                          </div>
                          
                          {item.alasan && (
                            <div className="mt-1 pl-16 pr-2">
                              <div className="flex gap-2 p-2.5 rounded-lg bg-premium/5 border border-premium/10">
                                <Bot size={14} className="text-premium shrink-0 mt-0.5" />
                                <p className="text-[11px] text-text-secondary leading-snug italic">
                                  {item.alasan}
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <AlertCircle className="mx-auto text-text-tertiary mb-3" size={36} />
                    <p className="text-sm text-text-secondary">
                      Tidak ada menu yang sesuai dengan rentang anggaran/kriteria. Coba naikkan anggaran Anda.
                    </p>
                  </div>
                )}
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-outline-light shrink-0">
                <button
                  onClick={() => setIsAiHelperOpen(false)}
                  className="btn btn-ghost btn-sm text-xs font-semibold"
                >
                  Tutup
                </button>
                <button
                  onClick={() => {
                    setIsAiHelperOpen(false);
                    // Redirect or pre-fill whatsapp
                    const text = `Halo Admin ${SITE_CONFIG.namaAkronim}! Saya menggunakan asisten AI Rekomendasi Menu dan tertarik memesan: ${aiRecommendation?.map((i) => i.nama).join(", ")}`;
                    window.open(`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
                  }}
                  className="btn btn-primary btn-sm text-xs font-semibold"
                  disabled={!aiRecommendation || aiRecommendation.length === 0}
                >
                  Pesan Paket via WhatsApp
                  <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* DETAIL MENU MODAL */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-primary/45 backdrop-blur-sm z-[300] flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-xl border border-outline-light"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Image Gradient */}
              <div
                className="h-56 relative flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, var(--primary), var(--secondary))`,
                }}
              >
                <UtensilsCrossed size={70} className="text-white opacity-20" />
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-primary border border-outline-light flex items-center justify-center transition-transform hover:scale-105"
                >
                  <X size={18} />
                </button>

                <div className="absolute bottom-4 left-4 flex gap-2">
                  {selectedItem.badge && (
                    <span className="badge badge-premium">{selectedItem.badge}</span>
                  )}
                  {selectedItem.baru && (
                    <span className="badge badge-highlight">Baru</span>
                  )}
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6">
                <div className="flex justify-between items-start gap-4 mb-3">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-accent font-semibold">
                      Kategori {selectedItem.kategori}
                    </span>
                    <h2 className="text-xl font-bold text-primary mt-0.5" style={{ fontFamily: "var(--font-heading)" }}>
                      {selectedItem.nama}
                    </h2>
                  </div>
                  <span className="text-xl font-bold text-accent shrink-0">
                    {formatRupiah(selectedItem.harga)}
                  </span>
                </div>

                <p className="text-sm text-text-secondary leading-relaxed mb-6">
                  {selectedItem.deskripsi}
                </p>

                {/* Nutrition / Specifications Mock Info */}
                <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-surface-container border border-outline-light mb-6">
                  <div className="text-center">
                    <span className="block text-[10px] uppercase text-text-tertiary font-semibold tracking-wider">Kandungan</span>
                    <span className="text-xs font-bold text-primary flex items-center justify-center gap-1 mt-0.5">
                      <Flame size={12} className="text-amber-500" />
                      100% Rempah
                    </span>
                  </div>
                  <div className="text-center border-x border-outline-variant/60">
                    <span className="block text-[10px] uppercase text-text-tertiary font-semibold tracking-wider">Penyajian</span>
                    <span className="text-xs font-bold text-primary flex items-center justify-center gap-1 mt-0.5">
                      <Users size={12} className="text-blue-500" />
                      1-2 Orang
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="block text-[10px] uppercase text-text-tertiary font-semibold tracking-wider">Karakter</span>
                    <span className="text-xs font-bold text-primary flex items-center justify-center gap-1 mt-0.5">
                      <Leaf size={12} className="text-emerald-500" />
                      Alami
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      const text = `Halo Admin ${SITE_CONFIG.namaAkronim}! Saya ingin menanyakan ketersediaan menu "${selectedItem.nama}" atau memesannya untuk reservasi nanti.`;
                      window.open(`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
                    }}
                    className="btn btn-primary flex-1 text-sm font-semibold"
                  >
                    Tanyakan via WhatsApp
                  </button>
                  <button
                    onClick={(e) => {
                      toggleFavorite(selectedItem.id, e);
                    }}
                    className="btn btn-secondary text-sm font-semibold"
                  >
                    <Heart
                      size={18}
                      className={favorites.includes(selectedItem.id) ? "fill-error text-error" : ""}
                    />
                    {favorites.includes(selectedItem.id) ? "Favorit Anda" : "Tambah Favorit"}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
