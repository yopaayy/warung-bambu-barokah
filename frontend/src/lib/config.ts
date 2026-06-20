// ============================================
// EDUCAFE AND RESTO — Konfigurasi Brand
// ============================================
// File ini adalah SATU-SATUNYA file yang perlu diubah
// saat menjual produk ke client baru.
// Cukup ganti nama, kontak, dan social media di sini.
// ============================================

export const SITE_CONFIG = {
  // === BRAND IDENTITY ===
  nama: "Educafe and Resto",
  namaAkronim: "ECR",
  tagline: "Educafe & Resto",
  deskripsi:
    "Destinasi kuliner, wisata edukasi, dan event gathering keluarga terbesar dengan konsep Eco-Luxury berkonsep arsitektur bambu.",

  // === CONTACT (Dummy/Placeholder) ===
  alamat:
    "Jl. Contoh Alamat No. 123, Kecamatan Contoh, Kabupaten Contoh, Jawa Timur 12345",
  telepon: "+62 812-3456-7890",
  whatsapp: "6281234567890",
  email: "info@example.com",

  // === SOCIAL MEDIA (Dummy/Placeholder) ===
  instagram: "https://www.instagram.com/educafe.resto/",
  facebook: "https://www.facebook.com/educafe.resto/",
  tiktok: "https://tiktok.com/@educafe.resto",
  googleMaps: "https://maps.app.goo.gl/dummylocation",

  // === LOCATION (Dummy) ===
  koordinat: { lat: -7.2575, lng: 112.7521 },
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.5!2d112.75!3d-7.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sid!2sid!4v1700000000000",

  // === OPERATIONAL ===
  jamOperasional: [
    { hari: "Senin - Kamis", jam: "10:00 - 21:00" },
    { hari: "Jumat - Sabtu", jam: "10:00 - 22:00" },
    { hari: "Minggu", jam: "09:00 - 22:00" },
  ],

  // === SEO ===
  domain: "example.com",
  metaKeywords: [
    "educafe and resto",
    "restoran keluarga",
    "wisata kuliner",
    "educafe",
    "outing class",
    "event gathering",
    "restoran keluarga",
    "wisata edukasi anak",
  ],
} as const;
