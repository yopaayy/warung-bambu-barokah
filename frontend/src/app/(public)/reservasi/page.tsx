"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar as CalendarIcon,
  Users,
  Clock,
  MapPin,
  ChevronRight,
  ChevronLeft,
  Check,
  Sparkles,
  Utensils,
  Phone,
  Mail,
  User,
  MessageSquare,
  AlertCircle,
  HelpCircle,
} from "lucide-react";
import { SITE_CONFIG, FASILITAS, formatRupiah } from "@/lib/data";

// Time slots for reservation
const TIME_SLOTS = [
  { id: "s1", time: "10:00", label: "Pagi" },
  { id: "s2", time: "11:30", label: "Siang" },
  { id: "s3", time: "13:00", label: "Siang" },
  { id: "s4", time: "14:30", label: "Sore" },
  { id: "s5", time: "16:00", label: "Sore" },
  { id: "s6", time: "17:30", label: "Malam" },
  { id: "s7", time: "19:00", label: "Malam" },
  { id: "s8", time: "20:30", label: "Malam" },
];

// Areas and tables
const AREA_TABLES: Record<string, { id: string; num: number; seats: number; status: "tersedia" | "terisi" }[]> = {
  indoor: [
    { id: "t-in-1", num: 1, seats: 2, status: "tersedia" },
    { id: "t-in-2", num: 2, seats: 4, status: "terisi" },
    { id: "t-in-3", num: 3, seats: 4, status: "tersedia" },
    { id: "t-in-4", num: 4, seats: 6, status: "tersedia" },
    { id: "t-in-5", num: 5, seats: 2, status: "terisi" },
    { id: "t-in-6", num: 6, seats: 4, status: "tersedia" },
  ],
  outdoor: [
    { id: "t-out-11", num: 11, seats: 4, status: "tersedia" },
    { id: "t-out-12", num: 12, seats: 4, status: "tersedia" },
    { id: "t-out-13", num: 13, seats: 6, status: "terisi" },
    { id: "t-out-14", num: 14, seats: 6, status: "tersedia" },
    { id: "t-out-15", num: 15, seats: 8, status: "tersedia" },
    { id: "t-out-16", num: 16, seats: 4, status: "terisi" },
  ],
  vip: [
    { id: "t-vip-1", num: 1, seats: 8, status: "tersedia" },
    { id: "t-vip-2", num: 2, seats: 12, status: "tersedia" },
    { id: "t-vip-3", num: 3, seats: 10, status: "terisi" },
  ],
  lesehan: [
    { id: "t-les-21", num: 21, seats: 4, status: "tersedia" },
    { id: "t-les-22", num: 22, seats: 4, status: "terisi" },
    { id: "t-les-23", num: 23, seats: 4, status: "tersedia" },
    { id: "t-les-24", num: 24, seats: 6, status: "tersedia" },
    { id: "t-les-25", num: 25, seats: 6, status: "terisi" },
    { id: "t-les-26", num: 26, seats: 8, status: "tersedia" },
  ],
  gathering: [
    { id: "t-gat-31", num: 31, seats: 20, status: "tersedia" },
    { id: "t-gat-32", num: 32, seats: 30, status: "terisi" },
    { id: "t-gat-33", num: 33, seats: 50, status: "tersedia" },
  ],
};

export default function ReservasiPage() {
  const [step, setStep] = useState<number>(1);
  const [date, setDate] = useState<string>("");
  const [guestCount, setGuestCount] = useState<number>(2);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>("");
  const [selectedArea, setSelectedArea] = useState<string>("indoor");
  const [selectedTable, setSelectedTable] = useState<string>("");
  const [guestDetails, setGuestDetails] = useState({
    name: "",
    phone: "",
    email: "",
    notes: "",
  });

  const [bookingId, setBookingId] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  // Computed data
  const chosenAreaObj = FASILITAS.find((f) => f.id === selectedArea);
  const chosenTableObj = selectedArea
    ? AREA_TABLES[selectedArea]?.find((t) => t.id === selectedTable)
    : null;
  const chosenTimeSlotObj = TIME_SLOTS.find((s) => s.id === selectedTimeSlot);

  // Verification helper for current step
  const isStepValid = (currentStep: number) => {
    if (currentStep === 1) {
      return date !== "" && selectedTimeSlot !== "" && guestCount > 0;
    }
    if (currentStep === 2) {
      return selectedArea !== "" && selectedTable !== "";
    }
    if (currentStep === 3) {
      return (
        guestDetails.name.trim() !== "" &&
        guestDetails.phone.trim() !== "" &&
        guestDetails.email.trim() !== ""
      );
    }
    return false;
  };

  const handleNextStep = () => {
    if (step < 3 && isStepValid(step)) {
      setStep(step + 1);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isStepValid(3)) return;

    // Client-Side Cooldown Check
    const lastReservationStr = localStorage.getItem("wbb_last_reservation");
    if (lastReservationStr) {
      const lastResTime = parseInt(lastReservationStr, 10);
      const COOLDOWN_MS = 5 * 60 * 1000; // 5 menit
      if (Date.now() - lastResTime < COOLDOWN_MS) {
        setErrorMessage("Anda baru saja membuat reservasi. Harap tunggu 5 menit sebelum membuat reservasi baru.");
        return;
      }
    }

    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/reservasi", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          date,
          guestCount,
          timeSlotId: selectedTimeSlot,
          areaId: selectedArea,
          tableId: selectedTable,
          guestDetails,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrorMessage(data.error || "Gagal melakukan reservasi. Silakan coba lagi.");
        setIsLoading(false);
        return;
      }

      // Berhasil
      setBookingId(data.bookingId);
      localStorage.setItem("wbb_last_reservation", Date.now().toString());
      setIsSubmitted(true);
    } catch (err) {
      setErrorMessage("Terjadi kesalahan jaringan. Periksa koneksi Anda.");
    } finally {
      setIsLoading(false);
    }
  };

  // Pre-filled WhatsApp string helper
  const getWhatsAppLink = () => {
    const text = `Halo Admin Warung Bambu Barokah!\n\nSaya telah melakukan reservasi meja online melalui DXP Platform.\n\n*Detail Reservasi:*\n- *Booking ID:* ${bookingId}\n- *Nama:* ${guestDetails.name}\n- *Telepon:* ${guestDetails.phone}\n- *Tanggal:* ${date}\n- *Waktu:* ${chosenTimeSlotObj?.time} (${chosenTimeSlotObj?.label})\n- *Jumlah Tamu:* ${guestCount} Orang\n- *Area:* ${chosenAreaObj?.nama}\n- *Nomor Meja:* Meja ${chosenTableObj?.num}\n- *Catatan:* ${guestDetails.notes || "-"}\n\nMohon konfirmasi pesanan saya. Terima kasih!`;
    return `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background-alt pt-28 pb-20 flex items-center justify-center">
        <div className="container mx-auto px-6 max-w-lg">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-outline-light text-center"
          >
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center text-success mx-auto mb-6">
              <Check size={36} />
            </div>

            <span className="section-label mb-2" style={{ background: "rgba(79, 122, 55, 0.1)", color: "var(--accent)" }}>
              Reservasi Berhasil
            </span>

            <h2 className="text-2xl font-bold text-primary mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              Terima Kasih, {guestDetails.name}!
            </h2>

            <p className="text-sm text-text-tertiary mb-6 leading-relaxed">
              Reservasi meja Anda telah tercatat dalam sistem DXP Warung Bambu Barokah. Silakan kirimkan konfirmasi di bawah ke WhatsApp admin kami untuk mendapatkan update status reservasi secara langsung.
            </p>

            {/* Booking Summary Box */}
            <div className="p-5 rounded-2xl bg-surface-container border border-outline-light text-left text-sm space-y-3 mb-8">
              <div className="flex justify-between pb-2 border-b border-outline-variant/40">
                <span className="font-semibold text-text-tertiary">Booking ID</span>
                <span className="font-bold text-primary">{bookingId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-tertiary">Tanggal & Waktu</span>
                <span className="font-semibold text-primary">{date} • {chosenTimeSlotObj?.time} WIB</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-tertiary">Jumlah Tamu</span>
                <span className="font-semibold text-primary">{guestCount} Orang</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-tertiary">Area & Nomor Meja</span>
                <span className="font-semibold text-primary">{chosenAreaObj?.nama} (Meja {chosenTableObj?.num})</span>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary w-full gap-2 py-3 text-sm font-bold"
              >
                <Phone size={16} />
                Kirim Konfirmasi ke WhatsApp
              </a>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setStep(1);
                  setDate("");
                  setSelectedTimeSlot("");
                  setSelectedTable("");
                  setGuestDetails({ name: "", phone: "", email: "", notes: "" });
                }}
                className="btn btn-ghost w-full text-xs font-semibold text-text-tertiary hover:text-primary py-2"
              >
                Buat Reservasi Baru
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-alt pt-28 pb-20">
      {/* Premium Interactive Header Banner */}
      <section className="relative py-24 overflow-hidden bg-primary mb-12 flex items-center justify-center min-h-[45vh]">
        {/* Background Image (Restaurant Interior) */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.6
          }}
        />
        
        {/* Dark Overlay for Text Legibility */}
        <div className="absolute inset-0 z-10 bg-black/60" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-transparent to-transparent" />

        <div className="container mx-auto px-6 relative z-20 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-black/40 backdrop-blur-md border border-white/20 p-8 md:p-12 rounded-[2rem] shadow-2xl max-w-3xl mx-auto flex flex-col items-center relative overflow-hidden animate-float"
            style={{ willChange: "transform" }}
          >
            {/* Animated Light Sweep */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-highlight to-accent animate-pulse-glow" />

            <span className="inline-flex items-center gap-2 py-1.5 px-5 rounded-full border border-white/30 text-xs md:text-sm font-bold tracking-widest uppercase mb-4 shadow-lg backdrop-blur-md" style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "#ffffff" }}>
              <CalendarIcon size={16} className="animate-pulse text-highlight" />
              Reservasi Online
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 drop-shadow-xl" style={{ fontFamily: "var(--font-heading)", color: "#ffffff" }}>
              Booking Meja Anda
            </h1>
            
            <p className="max-w-2xl mx-auto text-base md:text-lg leading-relaxed drop-shadow-md font-medium" style={{ color: "#f3f4f6", textShadow: "0px 2px 4px rgba(0,0,0,0.8)" }}>
              Pilihlah waktu kunjungan Anda, tentukan saung lesehan atau VIP area yang Anda inginkan, dan pastikan tempat terbaik tersedia untuk momen keluarga Anda.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Container */}
      <div className="container mx-auto px-6">
        
        {/* Visual Step Tracker Banner */}
        <div className="max-w-4xl mx-auto mb-10 bg-white border border-outline-light p-4 rounded-3xl shadow-sm flex items-center justify-around text-xs md:text-sm">
          {[
            { num: 1, label: "Waktu & Tamu" },
            { num: 2, label: "Area & Meja" },
            { num: 3, label: "Data Pemesan" },
          ].map((s) => (
            <div key={s.num} className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                  step >= s.num
                    ? "bg-accent text-white"
                    : "bg-surface-container text-text-tertiary"
                }`}
              >
                {step > s.num ? <Check size={14} /> : s.num}
              </div>
              <span className={`font-semibold ${step === s.num ? "text-primary font-bold" : "text-text-tertiary"}`}>
                {s.label}
              </span>
              {s.num < 3 && <div className="hidden sm:block w-8 md:w-16 h-[2px] bg-outline-light mx-2" />}
            </div>
          ))}
        </div>

        {/* Content Columns */}
        <div className="flex flex-col lg:flex-row gap-8 items-start max-w-6xl mx-auto">
          
          {/* LEFT COLUMN: Active Step Form */}
          <div className="w-full lg:w-2/3 bg-white p-6 md:p-8 rounded-3xl border border-outline-light shadow-sm min-h-[480px] flex flex-col justify-between">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* STEP 1: Time, Date & Guests */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-2 pb-2 border-b border-outline-light">
                    <Sparkles size={18} className="text-premium" />
                    <h3 className="text-md font-bold text-primary" style={{ fontFamily: "var(--font-heading)" }}>
                      Langkah 1: Pilih Waktu & Jumlah Tamu
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Date Picker */}
                    <div>
                      <label className="input-label flex items-center gap-1.5">
                        <CalendarIcon size={14} className="text-accent" />
                        Pilih Tanggal Kunjungan
                      </label>
                      <input
                        type="date"
                        value={date}
                        min={new Date().toISOString().split("T")[0]}
                        onChange={(e) => setDate(e.target.value)}
                        className="input text-sm"
                        required
                      />
                    </div>

                    {/* Guest Count Selector */}
                    <div>
                      <label className="input-label flex items-center gap-1.5">
                        <Users size={14} className="text-accent" />
                        Jumlah Orang / Tamu
                      </label>
                      <div className="flex items-center gap-3 bg-surface-container rounded-xl p-1 border border-outline-light max-w-[180px]">
                        <button
                          type="button"
                          onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                          className="w-10 h-10 rounded-lg flex items-center justify-center bg-white hover:bg-surface-high border border-outline-light font-bold text-primary transition-all active:scale-95"
                        >
                          -
                        </button>
                        <span className="flex-1 text-center font-bold text-primary text-sm">
                          {guestCount} Orang
                        </span>
                        <button
                          type="button"
                          onClick={() => setGuestCount(guestCount + 1)}
                          className="w-10 h-10 rounded-lg flex items-center justify-center bg-white hover:bg-surface-high border border-outline-light font-bold text-primary transition-all active:scale-95"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Time Slots Grid */}
                  <div>
                    <label className="input-label flex items-center gap-1.5 mb-3">
                      <Clock size={14} className="text-accent" />
                      Pilih Jam Kedatangan (Waktu Mulai)
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {TIME_SLOTS.map((slot) => {
                        const isSelected = selectedTimeSlot === slot.id;
                        return (
                          <button
                            key={slot.id}
                            type="button"
                            onClick={() => setSelectedTimeSlot(slot.id)}
                            className={`p-3 rounded-xl border text-center transition-all ${
                              isSelected
                                ? "bg-primary text-white border-primary shadow-md"
                                : "bg-white text-text border-outline-light hover:bg-surface-container"
                            }`}
                          >
                            <span className="block text-sm font-bold">{slot.time}</span>
                            <span className={`text-[10px] ${isSelected ? "text-highlight" : "text-text-tertiary"}`}>
                              Sesi {slot.label}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: Choose Area & Tables */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-2 pb-2 border-b border-outline-light">
                    <Sparkles size={18} className="text-premium" />
                    <h3 className="text-md font-bold text-primary" style={{ fontFamily: "var(--font-heading)" }}>
                      Langkah 2: Pilih Area & Nomor Meja
                    </h3>
                  </div>

                  {/* Area Tabs Grid */}
                  <div>
                    <label className="input-label flex items-center gap-1.5 mb-3">
                      <MapPin size={14} className="text-accent" />
                      Pilih Area Tempat Duduk
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                      {FASILITAS.map((area) => {
                        const isSelected = selectedArea === area.id;
                        return (
                          <button
                            key={area.id}
                            type="button"
                            onClick={() => {
                              setSelectedArea(area.id);
                              setSelectedTable(""); // Reset selected table when area changes
                            }}
                            className={`p-3.5 rounded-xl border text-left flex flex-col justify-between transition-all ${
                              isSelected
                                ? "bg-primary text-white border-primary shadow-md"
                                : "bg-white text-text border-outline-light hover:bg-surface-container"
                            }`}
                          >
                            <span className="text-xl mb-1">{area.ikon}</span>
                            <div>
                              <span className="block text-xs font-bold leading-tight">{area.nama}</span>
                              <span className={`text-[9px] block mt-0.5 ${isSelected ? "text-highlight" : "text-text-tertiary"}`}>
                                Cap: {area.kapasitas}
                              </span>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Table Selection visual grid */}
                  <div>
                    <label className="input-label flex items-center gap-1.5 mb-1">
                      <Utensils size={14} className="text-accent" />
                      Peta Meja pada {chosenAreaObj?.nama}
                    </label>
                    <span className="block text-[10px] text-text-tertiary mb-3">
                      Silakan pilih meja yang kosong (berwarna hijau). Meja berwarna merah sedang digunakan / telah dibooking.
                    </span>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-surface-container border border-outline-light">
                      {AREA_TABLES[selectedArea]?.map((table) => {
                        const isSelected = selectedTable === table.id;
                        const isOccupied = table.status === "terisi";

                        return (
                          <button
                            key={table.id}
                            type="button"
                            disabled={isOccupied}
                            onClick={() => setSelectedTable(table.id)}
                            className={`p-4 rounded-xl border flex flex-col items-center justify-center relative transition-all ${
                              isOccupied
                                ? "bg-error/5 border-error/20 text-error/60 cursor-not-allowed opacity-60"
                                : isSelected
                                  ? "bg-accent text-white border-accent shadow-md scale-105"
                                  : "bg-white text-primary border-outline-light hover:bg-surface-high hover:border-outline"
                            }`}
                          >
                            <span className="text-xs font-bold">Meja {table.num}</span>
                            <span className={`text-[9px] mt-0.5 ${isSelected ? "text-white/80" : "text-text-tertiary"}`}>
                              {table.seats} Kursi
                            </span>

                            {/* Status Dots */}
                            <span
                              className={`absolute top-2 right-2 w-2 h-2 rounded-full ${
                                isOccupied ? "bg-error" : isSelected ? "bg-white" : "bg-success"
                              }`}
                            />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: Contact Details & Notes */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-2 pb-2 border-b border-outline-light">
                    <Sparkles size={18} className="text-premium" />
                    <h3 className="text-md font-bold text-primary" style={{ fontFamily: "var(--font-heading)" }}>
                      Langkah 3: Lengkapi Data Diri Pemesan
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {/* Guest Name */}
                    <div>
                      <label className="input-label flex items-center gap-1.5">
                        <User size={14} className="text-accent" />
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        placeholder="Contoh: Aprilia Ndari"
                        value={guestDetails.name}
                        onChange={(e) => setGuestDetails({ ...guestDetails, name: e.target.value })}
                        className="input text-sm"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Phone Number */}
                      <div>
                        <label className="input-label flex items-center gap-1.5">
                          <Phone size={14} className="text-accent" />
                          Nomor Telepon / WhatsApp
                        </label>
                        <input
                          type="tel"
                          placeholder="Contoh: 08123456789"
                          value={guestDetails.phone}
                          onChange={(e) => setGuestDetails({ ...guestDetails, phone: e.target.value })}
                          className="input text-sm"
                          required
                        />
                      </div>

                      {/* Email Address */}
                      <div>
                        <label className="input-label flex items-center gap-1.5">
                          <Mail size={14} className="text-accent" />
                          Alamat Email
                        </label>
                        <input
                          type="email"
                          placeholder="Contoh: pic@sekolah.com"
                          value={guestDetails.email}
                          onChange={(e) => setGuestDetails({ ...guestDetails, email: e.target.value })}
                          className="input text-sm"
                          required
                        />
                      </div>
                    </div>

                    {/* Special Requests */}
                    <div>
                      <label className="input-label flex items-center gap-1.5">
                        <MessageSquare size={14} className="text-accent" />
                        Catatan Khusus / Permintaan Lainnya
                      </label>
                      <textarea
                        placeholder="Tuliskan permintaan khusus (misal: dekorasi ulang tahun, butuh kursi bayi, area bebas asap rokok)..."
                        value={guestDetails.notes}
                        onChange={(e) => setGuestDetails({ ...guestDetails, notes: e.target.value })}
                        className="input text-sm"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

            </form>

            {/* Error Message Display */}
            {errorMessage && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }} 
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 rounded-xl bg-error/10 border border-error/20 flex items-start gap-3"
              >
                <AlertCircle size={20} className="text-error shrink-0 mt-0.5" />
                <p className="text-sm text-error font-medium leading-relaxed">{errorMessage}</p>
              </motion.div>
            )}

            {/* Bottom Actions Row */}
            <div className="flex justify-between items-center pt-6 mt-8 border-t border-outline-light">
              <button
                type="button"
                onClick={handlePrevStep}
                disabled={step === 1}
                className={`btn btn-sm ${
                  step === 1
                    ? "opacity-40 cursor-not-allowed bg-surface-container text-text-tertiary"
                    : "bg-surface-container text-text hover:bg-surface-high border border-outline-light"
                }`}
              >
                <ChevronLeft size={16} />
                Kembali
              </button>

              {step < 3 ? (
                <button
                  type="button"
                  onClick={handleNextStep}
                  disabled={!isStepValid(step)}
                  className={`btn btn-sm ${
                    isStepValid(step)
                      ? "btn-primary"
                      : "opacity-40 cursor-not-allowed bg-surface-container text-text-tertiary border border-outline-light"
                  }`}
                >
                  Lanjutkan
                  <ChevronRight size={16} />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={!isStepValid(3) || isLoading}
                  className={`btn btn-sm ${
                    isStepValid(3) && !isLoading
                      ? "btn-premium"
                      : "opacity-40 cursor-not-allowed bg-surface-container text-text-tertiary border border-outline-light"
                  }`}
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 rounded-full border-2 border-text-tertiary border-t-transparent animate-spin mr-1" />
                      Memproses...
                    </>
                  ) : (
                    <>
                      Konfirmasi Reservasi
                      <Check size={16} />
                    </>
                  )}
                </button>
              )}
            </div>
          </div>

          {/* RIGHT COLUMN: Reservation Summary Card */}
          <div className="w-full lg:w-1/3 bg-white p-6 rounded-3xl border border-outline-light shadow-sm sticky top-28">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={20} className="text-premium" />
              <h3 className="text-md font-bold text-primary" style={{ fontFamily: "var(--font-heading)" }}>
                Ringkasan Reservasi
              </h3>
            </div>

            <p className="text-xs text-text-secondary mb-6 leading-relaxed">
              Detail waktu kedatangan dan area duduk yang Anda pilih akan terangkum di bawah.
            </p>

            <div className="space-y-4">
              {/* Summary Item list */}
              <div className="space-y-3 p-4 bg-surface-container rounded-2xl border border-outline-light text-xs text-text-secondary">
                {/* Date summary */}
                <div className="flex justify-between">
                  <span className="font-semibold text-text-tertiary">Tanggal</span>
                  <span className="font-bold text-primary">{date || "Belum dipilih"}</span>
                </div>
                {/* Session summary */}
                <div className="flex justify-between">
                  <span className="font-semibold text-text-tertiary">Sesi Kedatangan</span>
                  <span className="font-bold text-primary">
                    {chosenTimeSlotObj ? `${chosenTimeSlotObj.time} (${chosenTimeSlotObj.label})` : "Belum dipilih"}
                  </span>
                </div>
                {/* Guests summary */}
                <div className="flex justify-between">
                  <span className="font-semibold text-text-tertiary">Jumlah Tamu</span>
                  <span className="font-bold text-primary">{guestCount} Orang</span>
                </div>
                {/* Area summary */}
                <div className="flex justify-between">
                  <span className="font-semibold text-text-tertiary">Area Duduk</span>
                  <span className="font-bold text-primary">{chosenAreaObj?.nama || "Indoor"}</span>
                </div>
                {/* Table summary */}
                <div className="flex justify-between">
                  <span className="font-semibold text-text-tertiary">Nomor Meja</span>
                  <span className="font-bold text-accent">
                    {chosenTableObj ? `Meja ${chosenTableObj.num} (${chosenTableObj.seats} Kursi)` : "Belum dipilih"}
                  </span>
                </div>
              </div>

              {/* Information disclaimer box */}
              <div className="flex gap-2 p-4 rounded-2xl bg-amber-50/50 border border-amber-200 text-[10px] leading-relaxed text-amber-800">
                <AlertCircle size={16} className="shrink-0 text-amber-600 mt-0.5" />
                <div>
                  <span className="font-bold block mb-0.5">Informasi Penting</span>
                  Reservasi meja di Warung Bambu Barokah bersifat **GRATIS** dan tanpa biaya pemesanan meja. Meja akan disimpan maksimal selama 30 menit dari sesi kedatangan yang ditentukan.
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
