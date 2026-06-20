# Educafe and Resto (ECR) - Enterprise DXP Platform

Selamat datang di repositori resmi **Educafe and Resto (ECR)**! 
Proyek ini adalah sebuah platform *Digital Experience (DXP)* modern bertaraf *Enterprise* yang dirancang khusus untuk industri Kuliner, Restoran, dan Eduwisata. 

Sistem ini dirancang sebagai **White-Label Ready Template**, artinya Anda dapat dengan sangat mudah menjual atau mengkustomisasi platform ini untuk perusahaan lain (hanya dengan mengubah file konfigurasi terpusat).

Proyek ini dibangun menggunakan **Next.js 14 (App Router)**, **React 19**, dan **Tailwind CSS v4** dengan gaya desain premium, super responsif, dan kaya akan *micro-animations* menggunakan **Framer Motion**.

---

## 🌟 Fitur Unggulan

1. **Arsitektur White-Label (Template-Ready)**: 
   - **`src/lib/config.ts`**: Seluruh identitas merek (Nama, Akronim, URL, Kontak, Warna Dasar) dipusatkan di sini.
   - **`src/lib/assets.ts`**: Semua referensi *path* gambar/logo/video dipusatkan. Sangat aman dan mencegah *Path Traversal*.
   - **`src/lib/data.ts`**: Seluruh konten dinamis (Menu, Artikel Blog, Fasilitas, Testimoni) dibuat dalam bentuk *Array of Objects* sehingga siap untuk dihubungkan ke *Backend API* kapan saja.

2. **Asisten AI Terintegrasi (Google Gemini 2.5 Flash)**: 
   Sistem cerdas yang memberikan rekomendasi kombinasi menu terbaik berdasarkan *budget* pelanggan, jumlah orang, dan preferensi selera (Tersedia pada halaman Menu).

3. **Sistem Reservasi Multi-Layer Security**: 
   Sistem pemesanan interaktif yang kebal terhadap *spam* bot dan serangan DDoS:
   - **Rate Limiting (Backend)** berbasis IP (Maksimal 3 permintaan/jam).
   - **Zod Validation** untuk mencegah serangan Injeksi SQL atau XSS.
   - **Cooldown System (Frontend)** menggunakan LocalStorage.

4. **SEO & Kinerja Cepat**:
   Implementasi JSON-LD Schema untuk artikel Blog, struktur semantic HTML, Metadata otomatis, dan performa *build* berkecepatan tinggi menggunakan *Turbopack*.

5. **Desain Premium & Micro-animations**: 
   Tampilan UI/UX modern dengan efek *Glassmorphism*, transisi mulus, dan *parallax* yang memberikan sensasi aplikasi web mahal.

---

## 💻 Prasyarat (Requirements)
Pastikan komputer/server Anda telah menginstal perangkat lunak berikut:
- **Node.js** (Minimal versi v18.17 LTS atau lebih baru)
- **npm** (Node Package Manager)
- **Git** (Opsional)

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

### 3. Konfigurasi Environment Variables (API Keys)
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

## 🏃 Cara Menjalankan Aplikasi

### Mode Pengembangan Lokal (Development)
Untuk menguji dan mengubah-ubah kode aplikasi secara *live-reload*:
```bash
npm run dev
```
Buka browser Anda dan akses: **[http://localhost:3000](http://localhost:3000)**

### Mode Produksi (Deployment / Vercel)
Jika Anda ingin menyiapkan aplikasi untuk di-*hosting* ke publik:
1. Buat versi produksi yang teroptimasi:
   ```bash
   npm run build
   ```
2. Jalankan server produksi:
   ```bash
   npm run start
   ```

---

## 📂 Struktur Direktori Utama

```text
frontend/
├── public/                # Aset publik statis (gambar statis opsional, logo, dll)
├── src/
│   ├── app/               # Next.js App Router (Halaman Utama)
│   │   ├── (public)/      # Semua halaman publik (Beranda, Menu, Galeri, Blog)
│   │   └── api/           # API Endpoints internal (AI & Reservasi)
│   ├── components/        # Komponen React yang dapat digunakan ulang (Navbar, Footer, UI Cards)
│   ├── lib/               # Arsitektur Inti Aplikasi
│   │   ├── config.ts      # IDENTITAS MEREK (Konfigurasi White-label)
│   │   ├── assets.ts      # PUSAT ASET FOTO/VIDEO
│   │   ├── data.ts        # DATABASE MOCKUP (Menu, Blog, dll)
│   │   └── utils.ts       # Fungsi pembantu (Tailwind merge, dll)
```

---

Dibuat dengan ❤️ untuk kebutuhan Platform F&B Modern masa kini.
