// ============================================
// EDUCAFE AND RESTO — Data & Konstanta
// ============================================
// File ini berisi data konten (menu, testimoni, galeri, blog, dll).
// Brand identity & contact → lihat config.ts
// Asset paths → lihat assets.ts
// ============================================

// Re-export config agar import existing tetap kompatibel
export { SITE_CONFIG } from "./config";

import { SITE_CONFIG } from "./config";
import {
  PLACEHOLDER_IMAGES,
  OUTING_CLASS_ASSETS,
  GALERI_ASSETS,
  AVATAR_ASSETS,
} from "./assets";

export const NAVIGASI = [
  { label: "Beranda", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Galeri", href: "/galeri" },
  { label: "Tentang Kami", href: "/tentang" },
  { label: "Outing Class", href: "/outing-class" },
  { label: "Blog", href: "/blog" },
  { label: "Kritik & Saran", href: "/kritik-saran" },
] as const;

export const NAVIGASI_CTA = {
  label: "Reservasi",
  href: "/reservasi",
} as const;

// --- Menu Data ---
export interface MenuItem {
  id: string;
  nama: string;
  deskripsi: string;
  harga: number;
  kategori: string;
  gambar: string;
  badge?: string;
  populer?: boolean;
  baru?: boolean;
}

export const KATEGORI_MENU = [
  { id: "semua", label: "Semua", ikon: "🍽️" },
  { id: "new_menu", label: "Menu Baru", ikon: "✨" },
  { id: "ayam_bebek", label: "Ayam & Bebek", ikon: "🍗" },
  { id: "ikan_seafood", label: "Ikan & Seafood", ikon: "🐟" },
  { id: "mie_nasi", label: "Mie & Nasi", ikon: "🍜" },
  { id: "sayur_soup", label: "Sayur, Lauk & Soup", ikon: "🍲" },
  { id: "snack_dessert", label: "Snack & Dessert", ikon: "🍟" },
  { id: "minuman", label: "Minuman", ikon: "☕" },
  { id: "paket", label: "Paket Khusus", ikon: "📦" },
] as const;

export const MENU_ITEMS: MenuItem[] = [
  // NEW MENU
  { id: "n1", nama: "Ikan Dori Aneka Sauce", deskripsi: "Pilihan saus: Lemon, Lada Hitam, Saus Inggris, Telur Asin, Tim Garlic, Mentega", harga: 79000, kategori: "new_menu", gambar: PLACEHOLDER_IMAGES.food, baru: true },
  { id: "n2", nama: "Gurami Sauce Lemon", deskripsi: "Gurami renyah disiram saus lemon yang menyegarkan", harga: 89000, kategori: "new_menu", gambar: PLACEHOLDER_IMAGES.food, baru: true },
  { id: "n3", nama: "Udang Sauce Lemon", deskripsi: "Udang segar dengan baluran saus lemon", harga: 65000, kategori: "new_menu", gambar: PLACEHOLDER_IMAGES.food, baru: true },
  { id: "n4", nama: "Cumi Sauce Lemon", deskripsi: "Cumi lezat dengan saus lemon spesial", harga: 47000, kategori: "new_menu", gambar: PLACEHOLDER_IMAGES.food, baru: true },
  { id: "n5", nama: "Ayam Sauce Lemon", deskripsi: "Ayam goreng disiram saus lemon", harga: 39000, kategori: "new_menu", gambar: PLACEHOLDER_IMAGES.food, baru: true },
  { id: "n6", nama: "Nasi Hot Plate", deskripsi: "Disajikan dengan pilihan telur matang atau setengah matang", harga: 30000, kategori: "new_menu", gambar: PLACEHOLDER_IMAGES.food, baru: true },
  { id: "n7", nama: "Enoki Garlic Crispy", deskripsi: "Jamur enoki goreng renyah dengan aroma bawang putih", harga: 20000, kategori: "new_menu", gambar: PLACEHOLDER_IMAGES.food, baru: true },
  { id: "s1", nama: "Buncis Manis Pedas", deskripsi: "Tumis buncis dengan sensasi manis pedas", harga: 19000, kategori: "new_menu", gambar: PLACEHOLDER_IMAGES.food, baru: true },
  { id: "s2", nama: "Buncis Telur Asin", deskripsi: "Buncis renyah dibalut saus telur asin", harga: 25000, kategori: "new_menu", gambar: PLACEHOLDER_IMAGES.food, baru: true },
  { id: "s3", nama: "Bandeng Bakar", deskripsi: `Ikan bandeng bakar spesial ${SITE_CONFIG.namaAkronim}`, harga: 150000, kategori: "new_menu", gambar: PLACEHOLDER_IMAGES.food, baru: true },
  { id: "s4", nama: "Bakwan Jagung", deskripsi: "Bakwan jagung renyah khas Nusantara", harga: 20000, kategori: "new_menu", gambar: PLACEHOLDER_IMAGES.food, baru: true },
  { id: "s5", nama: "Bubur Ayam Spesial", deskripsi: "Hanya tersedia di hari Senin - Rabu", harga: 25000, kategori: "new_menu", gambar: PLACEHOLDER_IMAGES.food, baru: true },
  { id: "s6", nama: "Sup Asam Pedas", deskripsi: "Sup hangat dengan perpaduan asam pedas yang menggugah selera", harga: 29000, kategori: "new_menu", gambar: PLACEHOLDER_IMAGES.food, baru: true },
  { id: "s7", nama: "Bandeng Goreng", deskripsi: "Tersedia pilihan untuk 2 orang (Rp 85.000) atau 5 orang (Rp 150.000). Harga awal untuk 2 orang.", harga: 85000, kategori: "new_menu", gambar: PLACEHOLDER_IMAGES.food, baru: true },
  { id: "s8", nama: "Rujak Serut", deskripsi: "Rujak buah segar serut dengan bumbu pedas manis", harga: 18000, kategori: "new_menu", gambar: PLACEHOLDER_IMAGES.food, baru: true },
  { id: "s9", nama: "Ayam Ngoyong", deskripsi: "Ayam dengan bumbu ngo hiang khas", harga: 25000, kategori: "new_menu", gambar: PLACEHOLDER_IMAGES.food, baru: true },
  { id: "m1", nama: "Creamy Lotus / Salted Caramel Matcha", deskripsi: "Varian minuman kekinian terbaru", harga: 35000, kategori: "new_menu", gambar: PLACEHOLDER_IMAGES.drink, baru: true },
  { id: "m2", nama: "Pistachio Latte / Choco Oreo / Choco Cheese", deskripsi: "Sensasi perpaduan rasa premium", harga: 30000, kategori: "new_menu", gambar: PLACEHOLDER_IMAGES.drink, baru: true },
  { id: "m3", nama: "Summer Brezee", deskripsi: "Minuman segar penyejuk dahaga", harga: 35000, kategori: "new_menu", gambar: PLACEHOLDER_IMAGES.drink, baru: true },
  { id: "m4", nama: "Teh Tarik Ice", deskripsi: "Teh susu ditarik segar", harga: 19000, kategori: "new_menu", gambar: PLACEHOLDER_IMAGES.drink, baru: true },
  { id: "m5", nama: "Peach Tea", deskripsi: "Teh rasa persik segar", harga: 27000, kategori: "new_menu", gambar: PLACEHOLDER_IMAGES.drink, baru: true },

  // AYAM & BEBEK
  { id: "ab1", nama: "Ayam Bakar Ingkung", deskripsi: `Ayam kampung utuh dibakar dengan bumbu spesial ${SITE_CONFIG.namaAkronim}`, harga: 150000, kategori: "ayam_bebek", gambar: PLACEHOLDER_IMAGES.food, populer: true },
  { id: "ab2", nama: "Ayam Goreng Crispy", deskripsi: "Ayam goreng renyah keluarga besar", harga: 150000, kategori: "ayam_bebek", gambar: PLACEHOLDER_IMAGES.food },
  { id: "ab3", nama: "Ayam Sambal Hijau / Sambal Lalapan", deskripsi: "Disajikan dengan sambal pilihan yang nikmat", harga: 40000, kategori: "ayam_bebek", gambar: PLACEHOLDER_IMAGES.food },
  { id: "ab4", nama: "Ayam Lodho", deskripsi: "Ayam lodho khas Jawa Timur dengan kuah santan kental", harga: 40000, kategori: "ayam_bebek", gambar: PLACEHOLDER_IMAGES.food, badge: "Khas" },
  { id: "ab5", nama: "Ayam Goreng Kremes+Nasi / Ayam Bakar+Nasi", deskripsi: "Paket lengkap ayam dengan nasi putih", harga: 40000, kategori: "ayam_bebek", gambar: PLACEHOLDER_IMAGES.food, populer: true },
  { id: "ab6", nama: "Ayam Bakar Madu / Bakar Mercon", deskripsi: "Pilihan bumbu manis madu atau pedas mercon", harga: 40000, kategori: "ayam_bebek", gambar: PLACEHOLDER_IMAGES.food },
  { id: "ab7", nama: "Ayam Rica-Rica / Steak / Telur Asin", deskripsi: "Tersedia variasi rica-rica, steak ayam, atau baluran saus telur asin", harga: 40000, kategori: "ayam_bebek", gambar: PLACEHOLDER_IMAGES.food },
  { id: "ab8", nama: "Ayam Saus Inggris / Lada Hitam / Mentega", deskripsi: "Pilihan saus favorit: Inggris, Lada Hitam, atau Saus Mentega", harga: 40000, kategori: "ayam_bebek", gambar: PLACEHOLDER_IMAGES.food },
  { id: "ab9", nama: "Ayam Asam Manis (Koloke)", deskripsi: "Daging ayam fillet goreng balut saus asam manis", harga: 40000, kategori: "ayam_bebek", gambar: PLACEHOLDER_IMAGES.food },
  { id: "ab10", nama: "Penyetan Komplit + Nasi", deskripsi: "Lauk penyetan lengkap dengan nasi, tahu, tempe, lalapan", harga: 40000, kategori: "ayam_bebek", gambar: PLACEHOLDER_IMAGES.food },
  { id: "ab11", nama: "Ayam Bawang / Fuyung Hai Ayam", deskripsi: "Ayam goreng bawang harum atau telur dadar fuyung hai ayam", harga: 35000, kategori: "ayam_bebek", gambar: PLACEHOLDER_IMAGES.food },
  { id: "b1", nama: "Bebek Spesial (Bakar Madu/Mercon/Kremes/Rempah)", deskripsi: "Pilihan bumbu bebek: Bakar Madu, Bakar Mercon, Goreng Kremes, atau Goreng Rempah", harga: 45000, kategori: "ayam_bebek", gambar: PLACEHOLDER_IMAGES.food, badge: "Terlaris" },
  { id: "b2", nama: "Kepala Bebek + Jeroan", deskripsi: "Tambahan menu kepala bebek dan jeroan berbumbu", harga: 25000, kategori: "ayam_bebek", gambar: PLACEHOLDER_IMAGES.food },

  // IKAN & SEAFOOD
  { id: "is1", nama: "Gurami Aneka Bumbu", deskripsi: "Asam Manis, Asam Pedas, Bakar Dabu-dabu, Telur Asin, Tim Garlic, Bakar Pedas, Saus Tiga Rasa, Bakar Mercon", harga: 75000, kategori: "ikan_seafood", gambar: PLACEHOLDER_IMAGES.food, populer: true },
  { id: "is2", nama: "Gurami Bakar Madu (4 ons)", deskripsi: "Ikan gurami bakar 4 ons dengan olesan madu spesial", harga: 60000, kategori: "ikan_seafood", gambar: PLACEHOLDER_IMAGES.food },
  { id: "is3", nama: "Gurami Bakar Manis (3 ons)", deskripsi: "Ikan gurami 3 ons bakar manis kecap", harga: 65000, kategori: "ikan_seafood", gambar: PLACEHOLDER_IMAGES.food },
  { id: "is4", nama: "Gurami Lalapan (4 ons)", deskripsi: "Gurami goreng kering 4 ons disajikan dengan lalapan segar", harga: 55000, kategori: "ikan_seafood", gambar: PLACEHOLDER_IMAGES.food },
  { id: "is5", nama: "Nila Aneka Rasa (Mercon/Pedas/Madu/Lalapan)", deskripsi: "Pilihan sajian: Bakar Mercon, Bakar Pedas, Bakar Madu, atau Lalapan", harga: 60000, kategori: "ikan_seafood", gambar: PLACEHOLDER_IMAGES.food },
  { id: "is6", nama: "Lele Bakar Mercon / Bakar Madu", deskripsi: "Lele pilihan dengan siraman saus madu atau mercon", harga: 37000, kategori: "ikan_seafood", gambar: PLACEHOLDER_IMAGES.food },
  { id: "is7", nama: "Lele Mangut / Lele Lalapan", deskripsi: "Sajian tradisional lele mangut berkuah atau lele goreng lalapan", harga: 30000, kategori: "ikan_seafood", gambar: PLACEHOLDER_IMAGES.food },
  { id: "is8", nama: "Belut Rica-Rica", deskripsi: "Daging belut gurih dimasak bumbu rica-rica pedas", harga: 45000, kategori: "ikan_seafood", gambar: PLACEHOLDER_IMAGES.food },
  { id: "sf1", nama: "Udang Telur Asin", deskripsi: "Udang renyah berbalut saus telur asin premium", harga: 50000, kategori: "ikan_seafood", gambar: PLACEHOLDER_IMAGES.food, badge: "Premium" },
  { id: "sf2", nama: "Udang Aneka Saus", deskripsi: "Pilihan saus: Saus Padang, Asam Manis, Goreng Tepung, Lada Hitam", harga: 50000, kategori: "ikan_seafood", gambar: PLACEHOLDER_IMAGES.food },
  { id: "sf3", nama: "Tom Yum Seafood", deskripsi: "Kuah tomyum segar dengan isian aneka seafood", harga: 50000, kategori: "ikan_seafood", gambar: PLACEHOLDER_IMAGES.food },
  { id: "sf4", nama: "Cumi Telur Asin / Sapo Tahu Jepang", deskripsi: "Pilihan cumi telur asin atau hidangan sehat sapo tahu jepang", harga: 47000, kategori: "ikan_seafood", gambar: PLACEHOLDER_IMAGES.food },
  { id: "sf5", nama: "Cumi Aneka Saus", deskripsi: "Pilihan: Asam Manis, Goreng Tepung, Lada Hitam", harga: 45000, kategori: "ikan_seafood", gambar: PLACEHOLDER_IMAGES.food },
  { id: "sf6", nama: "Tom Yum Ayam", deskripsi: "Kuah tomyum asam pedas dengan potongan ayam", harga: 40000, kategori: "ikan_seafood", gambar: PLACEHOLDER_IMAGES.food },

  // MIE & NASI
  { id: "mn1", nama: "Spaghetti Bolognese", deskripsi: "Spaghetti saus daging tomat ala Italia", harga: 40000, kategori: "mie_nasi", gambar: PLACEHOLDER_IMAGES.food },
  { id: "mn2", nama: "Kwetiaw Seafood / Kwetiaw Siram Seafood", deskripsi: "Kwetiaw kenyal dengan isian udang dan cumi", harga: 40000, kategori: "mie_nasi", gambar: PLACEHOLDER_IMAGES.food },
  { id: "mn3", nama: "Kwetiaw Ayam / Bihun Goreng / Mie Goreng", deskripsi: "Sajian mie goreng atau bihun goreng isi ayam", harga: 30000, kategori: "mie_nasi", gambar: PLACEHOLDER_IMAGES.food },
  { id: "mn4", nama: "Mie/Bihun Goreng Seafood", deskripsi: "Mie atau bihun goreng spesial seafood", harga: 35000, kategori: "mie_nasi", gambar: PLACEHOLDER_IMAGES.food },
  { id: "mn5", nama: "Mie Tom Yam", deskripsi: "Mie kuah tom yam pedas asam", harga: 30000, kategori: "mie_nasi", gambar: PLACEHOLDER_IMAGES.food },
  { id: "mn6", nama: "Ta Mie Cap Cay / Mie Goreng Sosis", deskripsi: "Mie gurih dengan siraman cap cay atau potongan sosis", harga: 25000, kategori: "mie_nasi", gambar: PLACEHOLDER_IMAGES.food },
  { id: "mn7", nama: "Mie Semprul / Mie Pedas", deskripsi: "Mie goreng pedas berlevel kekinian", harga: 20000, kategori: "mie_nasi", gambar: PLACEHOLDER_IMAGES.food },
  { id: "mn8", nama: `Nasi Goreng Spesial ${SITE_CONFIG.namaAkronim}`, deskripsi: `Nasi goreng khas bumbu rempah ${SITE_CONFIG.namaAkronim} lengkap dengan lauk`, harga: 40000, kategori: "mie_nasi", gambar: PLACEHOLDER_IMAGES.food, populer: true },
  { id: "mn9", nama: "Nasi Campur Isi Empal Daging", deskripsi: "Nasi campur tradisional dengan empal sapi empuk", harga: 30000, kategori: "mie_nasi", gambar: PLACEHOLDER_IMAGES.food },
  { id: "mn10", nama: "Nasi Goreng Seafood / Nasi Campur Ayam Suwir", deskripsi: "Nasi goreng isi udang & cumi, atau nasi campur ayam", harga: 35000, kategori: "mie_nasi", gambar: PLACEHOLDER_IMAGES.food },
  { id: "mn11", nama: "Nasi Goreng (Ayam/Mawut/Teri/Sosis)", deskripsi: "Berbagai varian nasi goreng pilihan", harga: 27000, kategori: "mie_nasi", gambar: PLACEHOLDER_IMAGES.food },
  { id: "mn12", nama: "Rice Bowl Chicken Katsu", deskripsi: "Nasi mangkuk dengan ayam katsu saus teriyaki", harga: 25000, kategori: "mie_nasi", gambar: PLACEHOLDER_IMAGES.food },
  { id: "mn13", nama: "Nasi Putih", deskripsi: "Satu porsi nasi putih hangat", harga: 8000, kategori: "mie_nasi", gambar: PLACEHOLDER_IMAGES.food },

  // SAYUR, SOUP & LAUK
  { id: "sl1", nama: "Cah Brokoli/Pak Coy Daging Sapi", deskripsi: "Sayuran sehat ditumis dengan irisan daging sapi empuk", harga: 45000, kategori: "sayur_soup", gambar: PLACEHOLDER_IMAGES.food },
  { id: "sl2", nama: "Capcay Seafood", deskripsi: "Sayuran campur dengan udang dan cumi", harga: 40000, kategori: "sayur_soup", gambar: PLACEHOLDER_IMAGES.food },
  { id: "sl3", nama: "Cap Cay Kuah/Goreng / Cah Brokoli Bawang Putih", deskripsi: "Pilihan cap cay atau cah brokoli bening bergizi", harga: 35000, kategori: "sayur_soup", gambar: PLACEHOLDER_IMAGES.food },
  { id: "sl4", nama: "Cah Taoge Ikan Asin", deskripsi: "Tumis tauge renyah dengan taburan ikan asin", harga: 27000, kategori: "sayur_soup", gambar: PLACEHOLDER_IMAGES.food },
  { id: "sl5", nama: "Kangkung Tumis Ayam/Bawang", deskripsi: "Sayur kangkung tumis segar dengan atau tanpa ayam", harga: 22000, kategori: "sayur_soup", gambar: PLACEHOLDER_IMAGES.food },
  { id: "dt1", nama: `Iga Bakar (Madu/Mercon) / Sate Daging ${SITE_CONFIG.namaAkronim}`, deskripsi: "Iga sapi panggang lezat atau sate daging sapi", harga: 60000, kategori: "sayur_soup", gambar: PLACEHOLDER_IMAGES.food, populer: true },
  { id: "dt2", nama: "Beef Steak", deskripsi: "Bistik daging sapi dengan saus dan kentang", harga: 55000, kategori: "sayur_soup", gambar: PLACEHOLDER_IMAGES.food },
  { id: "dt3", nama: "Telur Pizza / Gulung / Orak Arik", deskripsi: "Olahan telur lezat untuk lauk atau cemilan", harga: 25000, kategori: "sayur_soup", gambar: PLACEHOLDER_IMAGES.food },
  { id: "dt4", nama: "Telur Mata Sapi / Telur Dadar", deskripsi: "Lauk pelengkap sempurna", harga: 12000, kategori: "sayur_soup", gambar: PLACEHOLDER_IMAGES.food },
  { id: "sr1", nama: `Soto Daging / Rawon ${SITE_CONFIG.namaAkronim}`, deskripsi: "Kuah segar soto sapi atau rawon hitam khas Jatim", harga: 30000, kategori: "sayur_soup", gambar: PLACEHOLDER_IMAGES.food, populer: true },
  { id: "sr2", nama: "Soto Ayam Kampung / Sayur", deskripsi: "Soto ayam hangat dengan daging ayam kampung", harga: 27000, kategori: "sayur_soup", gambar: PLACEHOLDER_IMAGES.food },
  { id: "sp1", nama: "Soup Iga / Soup Buntut", deskripsi: "Sup bening kaldu tulang iga atau buntut sapi", harga: 59000, kategori: "sayur_soup", gambar: PLACEHOLDER_IMAGES.food, badge: "Premium" },
  { id: "sp2", nama: "Soup Sehat", deskripsi: "Sup kaya vitamin dengan sayur mayor segar", harga: 40000, kategori: "sayur_soup", gambar: PLACEHOLDER_IMAGES.food },
  { id: "sp3", nama: "Soup Telur Tomat / Soup Merah", deskripsi: "Sup merah asam manis atau sup telur tomat oriental", harga: 27000, kategori: "sayur_soup", gambar: PLACEHOLDER_IMAGES.food },
  { id: "sm1", nama: "Sambal Bakar (Ayam/Cumi/Belut/Udang)", deskripsi: "Disajikan panas-panas di atas cobek bakar dengan lauk pilihan", harga: 40000, kategori: "sayur_soup", gambar: PLACEHOLDER_IMAGES.food, populer: true },
  { id: "sm2", nama: "Sambal Belut", deskripsi: "Sambal penyet belut pedas gurih", harga: 39000, kategori: "sayur_soup", gambar: PLACEHOLDER_IMAGES.food },
  { id: "sm3", nama: "Sambal Bakar 4T", deskripsi: "Tahu, Tempe, Telur, Terong dibakar bersama sambal", harga: 35000, kategori: "sayur_soup", gambar: PLACEHOLDER_IMAGES.food },
  { id: "sm4", nama: "Sambal Ekstra (Bawang/Ijo/Matah/Mercon/Dll)", deskripsi: "Pilihan tambahan sambal untuk pelengkap makan", harga: 10000, kategori: "sayur_soup", gambar: PLACEHOLDER_IMAGES.food },

  // SNACK & DESSERT
  { id: "sn1", nama: "Burger Mini / Lumpia Ayam", deskripsi: "Camilan gurih lezat", harga: 29000, kategori: "snack_dessert", gambar: PLACEHOLDER_IMAGES.food },
  { id: "sn2", nama: "Pisang Goreng/Mendoan/Singkong Keju/Pancake", deskripsi: "Gorengan atau kue manis favorit", harga: 25000, kategori: "snack_dessert", gambar: PLACEHOLDER_IMAGES.food },
  { id: "sn3", nama: "Kulit Crispy/Tahu Tuna/Bakwan Jagung", deskripsi: "Camilan krispi untuk bersantai", harga: 20000, kategori: "snack_dessert", gambar: PLACEHOLDER_IMAGES.food },
  { id: "sn4", nama: "Aneka Camilan Spesial (Jamur/Dumpling/Fries/Dll)", deskripsi: "Jamur Crispy, French Fries, Nugget, Onion Ring, Cireng, Roti Maryam, Tahu Petis, Siomay, Sosis Goreng", harga: 20000, kategori: "snack_dessert", gambar: PLACEHOLDER_IMAGES.food },
  { id: "sn5", nama: "Roti Bakar Keju / Chocolate", deskripsi: "Roti panggang manis dengan isian melimpah", harga: 17000, kategori: "snack_dessert", gambar: PLACEHOLDER_IMAGES.food },
  { id: "ds1", nama: `Buah Segar / Es Teler / Salad / Es ${SITE_CONFIG.namaAkronim}`, deskripsi: "Pencuci mulut dingin dan segar", harga: 25000, kategori: "snack_dessert", gambar: PLACEHOLDER_IMAGES.food },
  { id: "ds2", nama: "Gelato Premium", deskripsi: "Varian rasa: Milk Choco, Matcha, Choco Almond, Strawberry, Vanilla", harga: 25000, kategori: "snack_dessert", gambar: PLACEHOLDER_IMAGES.food },
  { id: "ds3", nama: "Rujak Buah / Es Oyen / Es Buah", deskripsi: "Buah-buahan segar bumbu manis atau es sirup manis", harga: 23000, kategori: "snack_dessert", gambar: PLACEHOLDER_IMAGES.food },
  { id: "ds4", nama: "Es Kuwut / Es Tape", deskripsi: "Minuman dingin tradisional pelepas dahaga", harga: 19000, kategori: "snack_dessert", gambar: PLACEHOLDER_IMAGES.drink },

  // MINUMAN
  { id: "mi1", nama: "V-60 / Lotus Coffee / Butterscot Sea Salt", deskripsi: "Kopi premium dari biji pilihan", harga: 35000, kategori: "minuman", gambar: PLACEHOLDER_IMAGES.drink, badge: `Kopi ${SITE_CONFIG.namaAkronim}` },
  { id: "mi2", nama: "Kopi Racikan Susu/Caramel/Hazelnut", deskripsi: "Vanila Cheese Latte, Caramel Machiato, Ice Caramel, Ice Hazelnut", harga: 35000, kategori: "minuman", gambar: PLACEHOLDER_IMAGES.drink },
  { id: "mi3", nama: "Cappucino / Caffe Latte (Hot/Ice) / Mochacino", deskripsi: "Espresso base dengan susu", harga: 29000, kategori: "minuman", gambar: PLACEHOLDER_IMAGES.drink },
  { id: "mi4", nama: "Vietnam Drip / Taro Coffee", deskripsi: "Seduhan kopi tetes atau variasi taro", harga: 27000, kategori: "minuman", gambar: PLACEHOLDER_IMAGES.drink },
  { id: "mi5", nama: "Americano / Kopi Tubruk", deskripsi: `Kopi hitam kuat ala ${SITE_CONFIG.namaAkronim} (Hot/Ice). Tubruk Rp 12k - 15k, Americano Rp 18k - 20k.`, harga: 18000, kategori: "minuman", gambar: PLACEHOLDER_IMAGES.drink },
  { id: "mi6", nama: "Hokaido Strawberry / Matcha Cheese / Snowberry", deskripsi: "Susu krim lembut aneka rasa", harga: 35000, kategori: "minuman", gambar: PLACEHOLDER_IMAGES.drink },
  { id: "mi7", nama: "Choco Banana/Berry / Ice Matcha", deskripsi: "Minuman coklat dan teh hijau", harga: 30000, kategori: "minuman", gambar: PLACEHOLDER_IMAGES.drink },
  { id: "mi8", nama: "Hot/Ice Chocolate/Redvelvet/Taro", deskripsi: "Seduhan manis non-kopi", harga: 28000, kategori: "minuman", gambar: PLACEHOLDER_IMAGES.drink },
  { id: "mi9", nama: "Thai Tea Jumbo (5 Porsi)", deskripsi: "Es teh susu Thailand untuk diminum bersama keluarga", harga: 89000, kategori: "minuman", gambar: PLACEHOLDER_IMAGES.drink, populer: true },
  { id: "mi10", nama: "Aneka Sparkling Squash", deskripsi: "Berry Pop, Lychee, Pepino Applerol, Mango/Strawberry Squash (Rp 28k - 35k)", harga: 30000, kategori: "minuman", gambar: PLACEHOLDER_IMAGES.drink },
  { id: "mi11", nama: "Jus Buah Segar", deskripsi: "Jambu, Semangka, Buah Naga, Melon, Nanas, Apel (Rp 19k), Jus Alpukat (Rp 25k)", harga: 19000, kategori: "minuman", gambar: PLACEHOLDER_IMAGES.drink },
  { id: "mi12", nama: "Wedang Tradisional (Jahe/Madu/Sereh/Uwuh)", deskripsi: "Minuman hangat penjaga stamina. Rentang harga Rp 17.000 - Rp 27.000", harga: 20000, kategori: "minuman", gambar: PLACEHOLDER_IMAGES.drink },
  { id: "mi13", nama: "Teh, Jeruk & Soda", deskripsi: "Teh Manis/Tawar, Lemon Tea, Jeruk Peras, Soda Gembira", harga: 12000, kategori: "minuman", gambar: PLACEHOLDER_IMAGES.drink },

  // PAKET KHUSUS
  { id: "pk1", nama: "Paket Makan Siang Ekonomis (11.00-15.00)", deskripsi: "Paket Hemat Lunch A (Rp 40k) & Paket Hemat Lunch B (Rp 30k)", harga: 40000, kategori: "paket", gambar: PLACEHOLDER_IMAGES.food, badge: "Siang" },
  { id: "pk2", nama: "Spesial Pelajar (10.00-15.00)", deskripsi: "Spanish Latte / Mood Maker harga khusus pelajar", harga: 15000, kategori: "paket", gambar: PLACEHOLDER_IMAGES.drink },
  { id: "pk3", nama: `Paket Keluarga ${SITE_CONFIG.namaAkronim}`, deskripsi: "Ber-5 (Rp 390.000), Ber-10 (Rp 650.000), Ber-15 (Rp 1.050.000)", harga: 390000, kategori: "paket", gambar: PLACEHOLDER_IMAGES.food, populer: true },
  { id: "pk4", nama: "Paket Prasmanan (Min 100 pax)", deskripsi: "Prasmanan 1 (75k/pax), Prasmanan 2 (90k/pax), Prasmanan 3 (100k/pax)", harga: 75000, kategori: "paket", gambar: PLACEHOLDER_IMAGES.food },
  { id: "pk5", nama: "Paket VIP (10 Orang)", deskripsi: "VIP Room 4 jam, Sound, Proyektor, Dekor, Menu lengkap 10 orang", harga: 2000000, kategori: "paket", gambar: PLACEHOLDER_IMAGES.food, badge: "VIP" },
  { id: "pk6", nama: "Paket Outing Class Edukasi", deskripsi: "Edukasi Lalu Lintas, Fun Games, Pakan Ikan/Kelinci, Free Taman Bermain, Konsumsi (Chicken Katsu + Air Mineral)", harga: 65000, kategori: "paket", gambar: OUTING_CLASS_ASSETS.mainBackground, badge: "Educafe" },
];

// --- Testimoni ---
export interface Testimoni {
  id: string;
  nama: string;
  peran: string;
  isi: string;
  rating: number;
  avatar: string;
}

export const TESTIMONI_DATA: Testimoni[] = [
  {
    id: "1",
    nama: "Budi Santoso",
    peran: "Pengunjung Setia",
    isi: "Tempatnya sangat nyaman dengan suasana bambu yang asri. Makanannya enak-enak, terutama Gurame Bakar Madunya. Cocok banget buat makan bersama keluarga!",
    rating: 5,
    avatar: AVATAR_ASSETS.budi,
  },
  {
    id: "2",
    nama: "Ibu Sari Dewi",
    peran: "Guru SD Negeri 3",
    isi: `Outing class di ${SITE_CONFIG.namaAkronim} sangat berkesan untuk anak-anak didik saya. Mereka belajar sambil bermain di taman edukasi lalu lintas. Pasti akan kembali lagi tahun depan!`,
    rating: 5,
    avatar: AVATAR_ASSETS.sari,
  },
  {
    id: "3",
    nama: "Rizki Firmansyah",
    peran: "Event Organizer",
    isi: "Sudah 3 kali mengadakan gathering perusahaan di sini. Pelayanannya profesional, tempatnya luas, dan makanannya selalu dapat pujian dari peserta.",
    rating: 5,
    avatar: AVATAR_ASSETS.rizki,
  },
  {
    id: "4",
    nama: "Anisa Putri",
    peran: "Food Blogger",
    isi: `${SITE_CONFIG.namaAkronim} adalah hidden gem! Konsep Educafe & Resto-nya unik banget. Selain makanan, pemandangan kolam koi dan lorong bambunya sangat instagramable.`,
    rating: 5,
    avatar: AVATAR_ASSETS.anisa,
  },
  {
    id: "5",
    nama: "Pak Haryono",
    peran: "Warga Setia",
    isi: `${SITE_CONFIG.nama} sudah jadi tempat langganan keluarga kami setiap akhir pekan. Anak-anak senang, orang tua pun nyaman. Harga juga sangat terjangkau.`,
    rating: 4,
    avatar: AVATAR_ASSETS.haryono,
  },
];

// --- Statistik ---
export const STATISTIK = [
  { label: "Menu Pilihan", nilai: 50, suffix: "+" },
  { label: "Pengunjung Bulanan", nilai: 3000, suffix: "+" },
  { label: "Event Terselenggara", nilai: 120, suffix: "+" },
  { label: "Outing Class", nilai: 45, suffix: "+" },
] as const;

// --- Area Fasilitas ---
export const FASILITAS = [
  {
    id: "indoor",
    nama: "Ruang Indoor Ber-AC",
    deskripsi: "Ruang makan nyaman dengan pendingin udara untuk kenyamanan maksimal.",
    ikon: "🏠",
    kapasitas: "50 orang",
  },
  {
    id: "outdoor",
    nama: "Area Outdoor Bambu",
    deskripsi: "Makan di tengah rimbunnya bambu dengan udara segar dan suasana alam.",
    ikon: "🎋",
    kapasitas: "100 orang",
  },
  {
    id: "vip",
    nama: "Ruang VIP Eksklusif",
    deskripsi: "Ruang privat untuk acara spesial dan gathering keluarga.",
    ikon: "👑",
    kapasitas: "30 orang",
  },
  {
    id: "lesehan",
    nama: "Saung Lesehan",
    deskripsi: "Nikmati makan lesehan tradisional di saung bambu dengan view kolam koi.",
    ikon: "🪷",
    kapasitas: "40 orang",
  },
  {
    id: "gathering",
    nama: "Aula Gathering",
    deskripsi: "Aula besar untuk seminar, workshop, dan event hingga 200 orang.",
    ikon: "🏛️",
    kapasitas: "200 orang",
  },
] as const;

// --- Galeri Kategori ---
export const GALERI_KATEGORI = [
  { id: "semua", label: "Semua" },
  { id: "kuliner", label: "Kuliner" },
  { id: "wisata", label: "Wisata" },
  { id: "edukasi", label: "Edukasi" },
  { id: "event", label: "Event" },
] as const;

export interface GaleriItem {
  id: string;
  judul: string;
  kategori: string;
  gambar: string;
  deskripsi: string;
}

export const GALERI_DATA: GaleriItem[] = [
  { id: "g1", judul: "Lorong Bambu Ikonik", kategori: "wisata", gambar: GALERI_ASSETS.lorongBambu, deskripsi: `Lorong bambu yang menjadi ikon ${SITE_CONFIG.nama}` },
  { id: "g2", judul: "Kolam Koi Cantik", kategori: "wisata", gambar: GALERI_ASSETS.kolamKoi, deskripsi: "Kolam koi dengan ikan warna-warni yang memukau" },
  { id: "g3", judul: "Gurame Bakar Spesial", kategori: "kuliner", gambar: GALERI_ASSETS.gurameSpesial, deskripsi: `Menu andalan Gurame Bakar Madu ${SITE_CONFIG.namaAkronim}` },
  { id: "g4", judul: "Paket Seafood Premium", kategori: "kuliner", gambar: GALERI_ASSETS.seafoodPremium, deskripsi: "Paket seafood segar langsung dari supplier terpercaya" },
  { id: "g5", judul: "Outing Class TK", kategori: "edukasi", gambar: GALERI_ASSETS.outingTk, deskripsi: "Kegiatan outing class anak TK di taman edukasi" },
  { id: "g6", judul: "Taman Lalu Lintas", kategori: "edukasi", gambar: GALERI_ASSETS.tamanLalin, deskripsi: "Anak-anak belajar rambu lalu lintas dengan menyenangkan" },
  { id: "g7", judul: "Gathering Perusahaan", kategori: "event", gambar: GALERI_ASSETS.gathering, deskripsi: "Acara gathering perusahaan dengan kapasitas besar" },
  { id: "g8", judul: "Ulang Tahun Anak", kategori: "event", gambar: GALERI_ASSETS.ultahAnak, deskripsi: "Perayaan ulang tahun anak yang meriah dan berkesan" },
  { id: "g9", judul: "Suasana Sore Hari", kategori: "wisata", gambar: GALERI_ASSETS.suasanaSore, deskripsi: `Pemandangan sunset indah dari area outdoor ${SITE_CONFIG.namaAkronim}` },
  { id: "g10", judul: "Nasi Goreng Bambu", kategori: "kuliner", gambar: GALERI_ASSETS.nasiGoreng, deskripsi: "Nasi goreng disajikan dalam bambu yang unik" },
  { id: "g11", judul: "Workshop Kreativitas", kategori: "edukasi", gambar: GALERI_ASSETS.workshop, deskripsi: "Workshop kreativitas untuk anak sekolah dasar" },
  { id: "g12", judul: "Live Music Weekend", kategori: "event", gambar: GALERI_ASSETS.liveMusic, deskripsi: "Pertunjukan live music setiap akhir pekan" },
];

// --- Format Rupiah ---
export function formatRupiah(angka: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(angka);
}

// --- Blog ---
export interface BlogPost {
  id: string;
  judul: string;
  slug: string;
  ringkasan: string;
  konten: string;
  gambar: string;
  kategori: string;
  penulis: string;
  tanggal: string;
  waktuBaca: string;
}

export const BLOG_KATEGORI = [
  { id: "semua", label: "Semua" },
  { id: "kuliner", label: "Kuliner" },
  { id: "wisata", label: "Wisata" },
  { id: "edukasi", label: "Edukasi Anak" },
  { id: "event", label: "Event & Promo" },
] as const;

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "b1",
    judul: `5 Menu Seafood Terbaik yang Wajib Dicoba di ${SITE_CONFIG.namaAkronim}`,
    slug: "5-menu-seafood-terbaik",
    ringkasan: `Temukan 5 hidangan seafood terbaik yang menjadi favorit pengunjung ${SITE_CONFIG.nama}. Dari gurame bakar hingga udang galah premium.`,
    konten: "",
    gambar: PLACEHOLDER_IMAGES.blog.seafood,
    kategori: "kuliner",
    penulis: `Tim ${SITE_CONFIG.namaAkronim}`,
    tanggal: "2024-11-15",
    waktuBaca: "5 menit",
  },
  {
    id: "b2",
    judul: "Wisata Edukasi Anak: Belajar Rambu Lalu Lintas Sambil Bermain",
    slug: "wisata-edukasi-anak-lalu-lintas",
    ringkasan: `${SITE_CONFIG.namaAkronim} memiliki taman edukasi lalu lintas lengkap untuk anak-anak. Belajar keselamatan berkendara dengan cara yang menyenangkan.`,
    konten: "",
    gambar: PLACEHOLDER_IMAGES.blog.edukasi,
    kategori: "edukasi",
    penulis: `Tim ${SITE_CONFIG.namaAkronim}`,
    tanggal: "2024-11-10",
    waktuBaca: "4 menit",
  },
  {
    id: "b3",
    judul: `Panduan Lengkap Mengadakan Gathering di ${SITE_CONFIG.nama}`,
    slug: "panduan-gathering",
    ringkasan: `Tips dan panduan lengkap untuk mengadakan acara gathering, outing perusahaan, atau family day di ${SITE_CONFIG.namaAkronim} dengan budget yang fleksibel.`,
    konten: "",
    gambar: PLACEHOLDER_IMAGES.blog.event,
    kategori: "event",
    penulis: `Tim ${SITE_CONFIG.namaAkronim}`,
    tanggal: "2024-11-05",
    waktuBaca: "7 menit",
  },
  {
    id: "b4",
    judul: "Menikmati Sunset di Lorong Bambu: Wisata Alam yang Instagramable",
    slug: "sunset-lorong-bambu",
    ringkasan: `Lorong bambu ${SITE_CONFIG.namaAkronim} bukan hanya tempat makan, tapi juga spot wisata alam yang instagramable dengan pemandangan sunset menakjubkan.`,
    konten: "",
    gambar: PLACEHOLDER_IMAGES.blog.wisata,
    kategori: "wisata",
    penulis: `Tim ${SITE_CONFIG.namaAkronim}`,
    tanggal: "2024-10-28",
    waktuBaca: "3 menit",
  },
];
