// ============================================
// EDUCAFE AND RESTO — Asset Registry
// ============================================
// Semua path assets di-manage di sini secara terpusat.
// Manfaat:
// 1. Security: Hacker tidak bisa enumerate assets di public folder
// 2. API-ready: Tinggal ganti value jadi URL dari backend API
// 3. Maintenance: Ganti 1 image = edit 1 tempat
// 4. Deploy: Semua path terdaftar, mudah di-optimize
// ============================================

// === BRAND ASSETS ===
export const BRAND_ASSETS = {
  logo: "/logo_ecr.png",
  favicon: "/favicon.ico",
} as const;

// === HERO & BACKGROUND ASSETS ===
export const BACKGROUND_ASSETS = {
  heroOverlay: "/logo_ecr.png",
} as const;

// === OUTING CLASS ASSETS ===
export const OUTING_CLASS_ASSETS = {
  mainBackground: "/images/outing-class/outing-class-main-head-background.png",
  gallery: [
    "/images/outing-class/outing-class-1.png",
    "/images/outing-class/outing-class-2.png",
    "/images/outing-class/outing-class-3.png",
    "/images/outing-class/outing-class-4.png",
    "/images/outing-class/outing-class-5.png",
    "/images/outing-class/outing-class-6.png",
    "/images/outing-class/outing-class-7.png",
    "/images/outing-class/outing-class-8.png",
    "/images/outing-class/outing-class-9.png",
  ],
} as const;

// === PLACEHOLDER IMAGES (External URLs) ===
export const PLACEHOLDER_IMAGES = {
  food: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80",
  drink: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=400&q=80",
  blog: {
    seafood: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?q=80&w=800&h=500&fit=crop",
    edukasi: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=800&h=500&fit=crop",
    event: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&h=500&fit=crop",
    wisata: "https://images.unsplash.com/photo-1542382156909-9ae37b3f56fd?q=80&w=800&h=500&fit=crop",
  },
} as const;

// === GALLERY ASSETS ===
export const GALERI_ASSETS = {
  lorongBambu: "/images/galeri/lorong-bambu.jpg",
  kolamKoi: "/images/galeri/kolam-koi.jpg",
  gurameSpesial: "/images/galeri/gurame-spesial.jpg",
  seafoodPremium: "/images/galeri/seafood-premium.jpg",
  outingTk: "/images/galeri/outing-tk.jpg",
  tamanLalin: "/images/galeri/taman-lalin.jpg",
  gathering: "/images/galeri/gathering.jpg",
  ultahAnak: "/images/galeri/ultah-anak.jpg",
  suasanaSore: "/images/galeri/suasana-sore.jpg",
  nasiGoreng: "/images/galeri/nasi-goreng.jpg",
  workshop: "/images/galeri/workshop.jpg",
  liveMusic: "/images/galeri/live-music.jpg",
} as const;

// === AVATAR ASSETS ===
export const AVATAR_ASSETS = {
  budi: "/images/avatar/budi.jpg",
  sari: "/images/avatar/sari.jpg",
  rizki: "/images/avatar/rizki.jpg",
  anisa: "/images/avatar/anisa.jpg",
  haryono: "/images/avatar/haryono.jpg",
} as const;

// === ICON ASSETS (Next.js defaults) ===
export const ICON_ASSETS = {
  file: "/file.svg",
  globe: "/globe.svg",
  next: "/next.svg",
  vercel: "/vercel.svg",
  window: "/window.svg",
} as const;

// === ASSET REGISTRY (All-in-one lookup) ===
export const ASSETS = {
  brand: BRAND_ASSETS,
  background: BACKGROUND_ASSETS,
  outingClass: OUTING_CLASS_ASSETS,
  placeholder: PLACEHOLDER_IMAGES,
  galeri: GALERI_ASSETS,
  avatar: AVATAR_ASSETS,
  icon: ICON_ASSETS,
} as const;

// === Helper function ===
// Untuk migrasi ke API backend nanti, tinggal extend function ini
export function resolveAssetUrl(path: string): string {
  // Di masa depan, bisa di-prefix dengan API base URL
  // contoh: return `${API_BASE_URL}/assets${path}`;
  return path;
}
