"use client";

import { motion } from "framer-motion";
import { 
  BusFront, 
  Gamepad2, 
  Fish, 
  Rabbit, 
  Gift, 
  Smile, 
  UtensilsCrossed, 
  CheckCircle2,
  CalendarDays,
  PhoneCall
} from "lucide-react";
import AnimateOnView from "@/components/ui/AnimateOnView";
import { SITE_CONFIG, formatRupiah } from "@/lib/data";
import { OUTING_CLASS_ASSETS } from "@/lib/assets";
import Fireflies from "@/components/ui/Fireflies";

const FASILITAS = [
  { ikon: BusFront, judul: "Edukasi Lalu Lintas", deskripsi: "Belajar rambu-rambu dan keselamatan jalan raya dengan cara menyenangkan di Taman Lalu Lintas kami." },
  { ikon: Gamepad2, judul: "Fun Games", deskripsi: "Permainan seru interaktif yang melatih kekompakan dan motorik anak-anak." },
  { ikon: Fish, judul: "Pakan Ikan", deskripsi: "Merasakan serunya memberi makan ikan koi langsung di kolam bambu kami." },
  { ikon: Rabbit, judul: "Pakan Kelinci", deskripsi: "Berinteraksi langsung dengan kelinci-kelinci lucu dan jinak di area taman hewan." },
  { ikon: Smile, judul: "Free Taman Bermain", deskripsi: "Akses bebas ke fasilitas playground yang aman dan nyaman untuk anak." },
  { ikon: Gift, judul: "Souvenir Spesial", deskripsi: "Bingkisan menarik untuk dibawa pulang sebagai kenang-kenangan." },
  { ikon: UtensilsCrossed, judul: "Konsumsi (Chicken Katsu)", deskripsi: "Sudah termasuk paket makan siang lezat Chicken Katsu dan Air Mineral." },
];

const GALERI_KESERUAN = [
  { img: 1, judul: "Senyum Bahagia", deskripsi: "Keceriaan anak-anak bermain di ruang terbuka yang asri." },
  { img: 2, judul: "Eksplorasi Alam", deskripsi: "Melatih motorik dan keberanian melalui wahana permainan." },
  { img: 3, judul: "Fokus & Tangkas", deskripsi: "Aktivitas seru yang merangsang kekompakan dan fokus." },
  { img: 4, judul: "Edukasi Rambu", deskripsi: "Pengenalan tertib lalu lintas sejak dini dengan cara *fun*." },
  { img: 5, judul: "Sahabat Satwa", deskripsi: "Interaksi langsung dan memberi pakan kelinci yang lucu." },
  { img: 6, judul: "Serunya Berbagi", deskripsi: "Momen keakraban makan siang bersama teman-teman." },
  { img: 7, judul: "Aman & Nyaman", deskripsi: "Area bermain luas dengan pengawasan untuk keselamatan anak." },
  { img: 8, judul: "Kenangan Manis", deskripsi: "Bawa pulang pengalaman belajar yang tak terlupakan!" },
];

export default function OutingClassPage() {
  const hargaPerPax = 65000;
  
  const pesanWaText = `Halo Admin ${SITE_CONFIG.namaAkronim}! Saya tertarik dengan Paket Edukasi Outing Class (Taman Lalu Lintas) seharga Rp 65.000/pax. Mohon informasi ketersediaan tanggalnya.`;

  return (
    <div className="min-h-screen bg-background pt-20 pb-20">
      
      {/* Hero Banner Section */}
      <section 
        className="relative flex items-center justify-center overflow-hidden w-full bg-primary"
        style={{ minHeight: "70vh" }}
      >
        {/* Background Image: using contain or careful cover to prevent excessive cropping */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('${OUTING_CLASS_ASSETS.mainBackground}')`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
            opacity: 0.8
          }}
        />
        
        {/* Dark Overlay to guarantee text readability */}
        <div className="absolute inset-0 z-10 bg-black/60" />
        <Fireflies count={25} />

        <div className="container mx-auto px-6 py-20 relative z-20 flex flex-col items-center justify-center text-center">
          <AnimateOnView direction="up">
            <div 
              className="bg-black/50 backdrop-blur-md border border-white/20 p-8 md:p-14 rounded-[2rem] shadow-2xl max-w-4xl mx-auto flex flex-col items-center relative overflow-hidden animate-float"
              style={{ willChange: "transform" }}
            >
              
              {/* Decorative Animated Glow inside card */}
              <div 
                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-highlight to-accent animate-pulse-glow" 
              />
              
              <span 
                className="inline-flex items-center gap-2 py-2 px-5 rounded-full border border-white/30 text-xs md:text-sm font-bold tracking-widest uppercase mb-6 shadow-lg"
                style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "#ffffff", backdropFilter: "blur(8px)" }}
              >
                <span className="w-2 h-2 rounded-full bg-highlight animate-pulse" />
                Program Educafe & Rekreasi
              </span>

              <h1 
                className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 leading-tight drop-shadow-xl"
                style={{ fontFamily: "var(--font-heading)", color: "#ffffff" }}
              >
                OUTING CLASS <br/> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-highlight to-highlight-light" style={{ filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.5))" }}>
                  TAMAN LALU LINTAS
                </span>
              </h1>

              <p 
                className="text-base md:text-xl mb-10 drop-shadow-lg font-medium max-w-2xl leading-relaxed"
                style={{ color: "#f8f9fa", textShadow: "0px 2px 4px rgba(0,0,0,0.8)" }}
              >
                Belajar sambil bermain di {SITE_CONFIG.nama}. Hadirkan pengalaman edukasi luar ruang yang interaktif, aman, dan tak terlupakan untuk anak-anak didik Anda!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a 
                  href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(pesanWaText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary px-8 py-4 text-base md:text-lg inline-flex items-center justify-center gap-3 shadow-xl hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                >
                  <CalendarDays size={20} />
                  Reservasi Jadwal
                </a>
                <a 
                  href="#fasilitas"
                  className="btn px-8 py-4 text-base md:text-lg inline-flex items-center justify-center gap-3 shadow-xl backdrop-blur-sm transition-all duration-300 w-full sm:w-auto"
                  style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.3)", color: "#ffffff" }}
                >
                  Lihat Fasilitas
                </a>
              </div>
            </div>
          </AnimateOnView>
        </div>
      </section>

      {/* Pricing & Features Section */}
      <section id="fasilitas" className="py-20 relative z-30 -mt-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
            
            {/* Left Column: Pricing Card */}
            <div className="w-full lg:w-1/3">
              <AnimateOnView direction="right">
                <div className="bg-white rounded-3xl p-8 border border-outline-light shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-accent" />
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-primary mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                      Paket Edukasi Lengkap
                    </h3>
                    <p className="text-text-tertiary text-sm">Hanya dengan satu harga, nikmati semua fasilitas</p>
                  </div>
                  
                  <div className="text-center mb-8 pb-8 border-b border-outline-light">
                    <span className="text-5xl font-black text-accent block mb-2">{formatRupiah(hargaPerPax)}</span>
                    <span className="text-text-secondary font-semibold uppercase tracking-widest text-xs">/ Anak</span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {[
                      "Termasuk pendampingan instruktur",
                      "Area luas & aman untuk anak",
                      "Tersedia mushola & toilet bersih",
                      "Parkir luas untuk bus/rombongan"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-highlight shrink-0 mt-0.5" />
                        <span className="text-sm font-medium text-text-secondary">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <a 
                    href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(pesanWaText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary w-full py-4 justify-center text-sm"
                  >
                    <PhoneCall size={18} />
                    Hubungi Admin
                  </a>
                </div>
              </AnimateOnView>
            </div>

            {/* Right Column: Facilities Grid */}
            <div className="w-full lg:w-2/3">
              <AnimateOnView direction="up">
                <div className="mb-10">
                  <span className="text-accent font-bold tracking-widest uppercase text-sm mb-2 block">
                    Fasilitas & Kegiatan
                  </span>
                  <h2 className="text-3xl font-bold text-primary" style={{ fontFamily: "var(--font-heading)" }}>
                    Apa yang didapatkan anak-anak?
                  </h2>
                </div>
              </AnimateOnView>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {FASILITAS.map((fasilitas, idx) => (
                  <AnimateOnView key={idx} direction="up" delay={idx * 0.1}>
                    <div className="bg-surface-container rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-outline-light group h-full">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 group-hover:-rotate-3" style={{ background: "rgba(158, 196, 106, 0.2)", color: "var(--primary)" }}>
                        <fasilitas.ikon size={24} />
                      </div>
                      <h4 className="text-lg font-bold text-primary mb-2">{fasilitas.judul}</h4>
                      <p className="text-sm text-text-tertiary leading-relaxed">{fasilitas.deskripsi}</p>
                    </div>
                  </AnimateOnView>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-surface-container mt-12">
        <div className="container mx-auto px-6">
          <AnimateOnView direction="up">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                Keseruan Outing Class
              </h2>
              <p className="text-text-secondary">
                Intip momen-momen seru anak-anak saat bermain dan belajar di area Taman Lalu Lintas {SITE_CONFIG.nama}.
              </p>
            </div>
          </AnimateOnView>

          {/* Interactive Card Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GALERI_KESERUAN.map((item, idx) => (
              <AnimateOnView key={idx} direction="up" delay={idx * 0.1}>
                <motion.div 
                  className="bg-white rounded-[2rem] p-3 shadow-sm hover:shadow-2xl transition-shadow duration-300 border border-outline-light group h-full flex flex-col"
                  whileHover={{ y: -8, rotate: idx % 2 === 0 ? 1 : -1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="rounded-3xl overflow-hidden aspect-square bg-surface-container relative mb-4">
                    <img 
                      src={OUTING_CLASS_ASSETS.gallery[item.img - 1]} 
                      alt={`Dokumentasi ${item.judul}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    {/* Overlay Gradient on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="px-3 pb-3 flex-grow flex flex-col">
                    <h4 className="text-lg font-bold text-primary mb-1 group-hover:text-accent transition-colors" style={{ fontFamily: "var(--font-heading)" }}>
                      {item.judul}
                    </h4>
                    <p className="text-sm text-text-tertiary leading-relaxed flex-grow">
                      {item.deskripsi}
                    </p>
                  </div>
                </motion.div>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
}
