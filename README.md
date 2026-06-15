# Warung Bambu Barokah (WBB) - DXP Platform

Selamat datang di repositori resmi **Warung Bambu Barokah (WBB)**! 
Proyek ini adalah sebuah platform *Digital Experience (DXP)* modern yang dibangun untuk memberikan pengalaman interaktif, elegan, dan profesional bagi pelanggan WBB.

Proyek ini menggunakan **Next.js 14**, **React 19**, dan **Tailwind CSS v4** dengan gaya desain modern, responsif, dan kaya akan animasi (menggunakan Framer Motion).

---

## 🚀 Fitur Utama
1. **Asisten AI Rekomendasi Menu**: Sistem cerdas yang dapat memberikan rekomendasi menu makanan berdasarkan *budget*, jumlah orang, dan selera pengunjung. Didukung oleh **Google Gemini 2.5 Flash**.
2. **Sistem Reservasi Multi-Layer Security**: Sistem pemesanan meja interaktif yang kebal terhadap *spam* bot dan serangan DDoS, berkat proteksi In-Memory Rate Limiting, Cloudflare Turnstile Concept, dan perlindungan LocalStorage.
3. **Menu Interaktif & Galeri HD**: Daftar menu yang dilengkapi modal detail cantik, gambar resolusi tinggi, dan performa pemuatan super cepat.
4. **Desain Premium & Micro-animations**: Tampilan *UI/UX* yang dirancang khusus agar terlihat mewah (*premium feel*) dengan efek transisi kaca (*glassmorphism*) yang mulus.

---

## 💻 Prasyarat (Requirements)
Sebelum memulai instalasi, pastikan komputer/server Anda telah menginstal perangkat lunak berikut:
- **Node.js** (Minimal versi v18.17 atau lebih baru)
- **npm** (Node Package Manager)
- **Git** (Opsional, untuk *cloning* repositori)

---

## 🛠️ Panduan Instalasi & Pemasangan

Ikuti langkah-langkah di bawah ini untuk menjalankan proyek ini di komputer lokal Anda:

### 1. Kloning Repositori & Masuk ke Folder Frontend
Buka terminal / CMD Anda, lalu jalankan:
```bash
git clone https://github.com/yopaayy/warung-bambu-barokah.git
cd warung-bambu-barokah/frontend
```

### 2. Install Dependensi (Library)
Di dalam folder `frontend`, jalankan perintah ini untuk mengunduh semua paket pendukung:
```bash
npm install
```

### 3. Konfigurasi Environment Variables (Kunci Rahasia)
Anda memerlukan API Key dari **Google AI Studio** agar fitur Asisten AI berfungsi.
1. Salin file contoh environment:
   ```bash
   cp .env.example .env.local
   ```
2. Buka file `.env.local` dan masukkan kunci API Gemini Anda:
   ```env
   GEMINI_API_KEY="AIzaSy_MASUKKAN_KUNCI_ANDA_DI_SINI"
   ```

---

## 🏃 Cara Menjalankan Aplikasi (Testing)

### Mode Pengembangan Lokal (Development)
Untuk menguji dan menjalankan aplikasi di komputer Anda secara *live-reload*:
```bash
npm run dev
```
Setelah proses selesai, buka browser Anda dan akses: **[http://localhost:3000](http://localhost:3000)**

### Mode Produksi (Deployment)
Jika Anda ingin menyiapkan aplikasi untuk server publik (seperti Vercel atau VPS):
1. Buat versi produksi yang teroptimasi:
   ```bash
   npm run build
   ```
2. Jalankan server produksi:
   ```bash
   npm run start
   ```

---

## 🛡️ Penjelasan Modul Keamanan (Anti-Spam)
Aplikasi ini sudah dipersenjatai sistem **Anti-Spam Reservasi** dengan 3 perlindungan:
- **Rate Limiting (Backend):** 1 alamat IP maksimal hanya bisa melakukan 3 kali reservasi dalam kurun waktu 1 jam. Jika melebihi batas, server akan menolak dengan *Error 429 (Too Many Requests)*.
- **Validasi Zod:** Semua input form disaring secara ketat agar *hacker* tidak bisa memasukkan skrip bahaya (XSS).
- **Cooldown Browser:** Setelah reservasi berhasil, pengunjung harus menunggu 5 menit sebelum boleh mereservasi lagi dari perangkat yang sama.

---

Dibuat dengan ❤️ untuk **Warung Bambu Barokah**.
