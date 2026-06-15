const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, 'src', 'lib', 'data.ts');
let content = fs.readFileSync(dataFilePath, 'utf-8');

const newData = `export const KATEGORI_MENU = [
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
  { id: "n1", nama: "Ikan Dori Aneka Sauce", deskripsi: "Pilihan saus: Lemon, Lada Hitam, Saus Inggris, Telur Asin, Tim Garlic, Mentega", harga: 79000, kategori: "new_menu", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80", baru: true },
  { id: "n2", nama: "Gurami Sauce Lemon", deskripsi: "Gurami renyah disiram saus lemon yang menyegarkan", harga: 89000, kategori: "new_menu", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80", baru: true },
  { id: "n3", nama: "Udang Sauce Lemon", deskripsi: "Udang segar dengan baluran saus lemon", harga: 65000, kategori: "new_menu", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80", baru: true },
  { id: "n4", nama: "Cumi Sauce Lemon", deskripsi: "Cumi lezat dengan saus lemon spesial", harga: 47000, kategori: "new_menu", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80", baru: true },
  { id: "n5", nama: "Ayam Sauce Lemon", deskripsi: "Ayam goreng disiram saus lemon", harga: 39000, kategori: "new_menu", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80", baru: true },
  { id: "n6", nama: "Nasi Hot Plate", deskripsi: "Disajikan dengan pilihan telur matang atau setengah matang", harga: 30000, kategori: "new_menu", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80", baru: true },
  { id: "n7", nama: "Enoki Garlic Crispy", deskripsi: "Jamur enoki goreng renyah dengan aroma bawang putih", harga: 20000, kategori: "new_menu", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80", baru: true },
  { id: "s1", nama: "Buncis Manis Pedas", deskripsi: "Tumis buncis dengan sensasi manis pedas", harga: 19000, kategori: "new_menu", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80", baru: true },
  { id: "s2", nama: "Buncis Telur Asin", deskripsi: "Buncis renyah dibalut saus telur asin", harga: 25000, kategori: "new_menu", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80", baru: true },
  { id: "s3", nama: "Bandeng Bakar", deskripsi: "Ikan bandeng bakar spesial WBB", harga: 150000, kategori: "new_menu", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80", baru: true },
  { id: "s4", nama: "Bakwan Jagung", deskripsi: "Bakwan jagung renyah khas Nusantara", harga: 20000, kategori: "new_menu", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80", baru: true },
  { id: "s5", nama: "Bubur Ayam Spesial", deskripsi: "Hanya tersedia di hari Senin - Rabu", harga: 25000, kategori: "new_menu", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80", baru: true },
  { id: "s6", nama: "Sup Asam Pedas", deskripsi: "Sup hangat dengan perpaduan asam pedas yang menggugah selera", harga: 29000, kategori: "new_menu", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80", baru: true },
  { id: "s7", nama: "Bandeng Goreng", deskripsi: "Tersedia pilihan untuk 2 orang (Rp 85.000) atau 5 orang (Rp 150.000). Harga awal untuk 2 orang.", harga: 85000, kategori: "new_menu", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80", baru: true },
  { id: "s8", nama: "Rujak Serut", deskripsi: "Rujak buah segar serut dengan bumbu pedas manis", harga: 18000, kategori: "new_menu", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80", baru: true },
  { id: "s9", nama: "Ayam Ngoyong", deskripsi: "Ayam dengan bumbu ngo hiang khas", harga: 25000, kategori: "new_menu", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80", baru: true },
  { id: "m1", nama: "Creamy Lotus / Salted Caramel Matcha", deskripsi: "Varian minuman kekinian terbaru", harga: 35000, kategori: "new_menu", gambar: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=400&q=80", baru: true },
  { id: "m2", nama: "Pistachio Latte / Choco Oreo / Choco Cheese", deskripsi: "Sensasi perpaduan rasa premium", harga: 30000, kategori: "new_menu", gambar: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=400&q=80", baru: true },
  { id: "m3", nama: "Summer Brezee", deskripsi: "Minuman segar penyejuk dahaga", harga: 35000, kategori: "new_menu", gambar: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=400&q=80", baru: true },
  { id: "m4", nama: "Teh Tarik Ice", deskripsi: "Teh susu ditarik segar", harga: 19000, kategori: "new_menu", gambar: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=400&q=80", baru: true },
  { id: "m5", nama: "Peach Tea", deskripsi: "Teh rasa persik segar", harga: 27000, kategori: "new_menu", gambar: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=400&q=80", baru: true },

  // AYAM & BEBEK
  { id: "ab1", nama: "Ayam Bakar Ingkung", deskripsi: "Ayam kampung utuh dibakar dengan bumbu spesial WBB", harga: 150000, kategori: "ayam_bebek", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80", populer: true },
  { id: "ab2", nama: "Ayam Goreng Crispy", deskripsi: "Ayam goreng renyah keluarga besar", harga: 150000, kategori: "ayam_bebek", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80" },
  { id: "ab3", nama: "Ayam Sambal Hijau / Sambal Lalapan", deskripsi: "Disajikan dengan sambal pilihan yang nikmat", harga: 40000, kategori: "ayam_bebek", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80" },
  { id: "ab4", nama: "Ayam Lodho", deskripsi: "Ayam lodho khas Jawa Timur dengan kuah santan kental", harga: 40000, kategori: "ayam_bebek", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80", badge: "Khas" },
  { id: "ab5", nama: "Ayam Goreng Kremes+Nasi / Ayam Bakar+Nasi", deskripsi: "Paket lengkap ayam dengan nasi putih", harga: 40000, kategori: "ayam_bebek", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80", populer: true },
  { id: "ab6", nama: "Ayam Bakar Madu / Bakar Mercon", deskripsi: "Pilihan bumbu manis madu atau pedas mercon", harga: 40000, kategori: "ayam_bebek", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80" },
  { id: "ab7", nama: "Ayam Rica-Rica / Steak / Telur Asin", deskripsi: "Tersedia variasi rica-rica, steak ayam, atau baluran saus telur asin", harga: 40000, kategori: "ayam_bebek", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80" },
  { id: "ab8", nama: "Ayam Saus Inggris / Lada Hitam / Mentega", deskripsi: "Pilihan saus favorit: Inggris, Lada Hitam, atau Saus Mentega", harga: 40000, kategori: "ayam_bebek", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80" },
  { id: "ab9", nama: "Ayam Asam Manis (Koloke)", deskripsi: "Daging ayam fillet goreng balut saus asam manis", harga: 40000, kategori: "ayam_bebek", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80" },
  { id: "ab10", nama: "Penyetan Komplit + Nasi", deskripsi: "Lauk penyetan lengkap dengan nasi, tahu, tempe, lalapan", harga: 40000, kategori: "ayam_bebek", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80" },
  { id: "ab11", nama: "Ayam Bawang / Fuyung Hai Ayam", deskripsi: "Ayam goreng bawang harum atau telur dadar fuyung hai ayam", harga: 35000, kategori: "ayam_bebek", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80" },
  { id: "b1", nama: "Bebek Spesial (Bakar Madu/Mercon/Kremes/Rempah)", deskripsi: "Pilihan bumbu bebek: Bakar Madu, Bakar Mercon, Goreng Kremes, atau Goreng Rempah", harga: 45000, kategori: "ayam_bebek", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80", badge: "Terlaris" },
  { id: "b2", nama: "Kepala Bebek + Jeroan", deskripsi: "Tambahan menu kepala bebek dan jeroan berbumbu", harga: 25000, kategori: "ayam_bebek", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80" },

  // IKAN & SEAFOOD
  { id: "is1", nama: "Gurami Aneka Bumbu", deskripsi: "Asam Manis, Asam Pedas, Bakar Dabu-dabu, Telur Asin, Tim Garlic, Bakar Pedas, Saus Tiga Rasa, Bakar Mercon", harga: 75000, kategori: "ikan_seafood", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80", populer: true },
  { id: "is2", nama: "Gurami Bakar Madu (4 ons)", deskripsi: "Ikan gurami bakar 4 ons dengan olesan madu spesial", harga: 60000, kategori: "ikan_seafood", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80" },
  { id: "is3", nama: "Gurami Bakar Manis (3 ons)", deskripsi: "Ikan gurami 3 ons bakar manis kecap", harga: 65000, kategori: "ikan_seafood", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80" },
  { id: "is4", nama: "Gurami Lalapan (4 ons)", deskripsi: "Gurami goreng kering 4 ons disajikan dengan lalapan segar", harga: 55000, kategori: "ikan_seafood", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80" },
  { id: "is5", nama: "Nila Aneka Rasa (Mercon/Pedas/Madu/Lalapan)", deskripsi: "Pilihan sajian: Bakar Mercon, Bakar Pedas, Bakar Madu, atau Lalapan", harga: 60000, kategori: "ikan_seafood", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80" },
  { id: "is6", nama: "Lele Bakar Mercon / Bakar Madu", deskripsi: "Lele pilihan dengan siraman saus madu atau mercon", harga: 37000, kategori: "ikan_seafood", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80" },
  { id: "is7", nama: "Lele Mangut / Lele Lalapan", deskripsi: "Sajian tradisional lele mangut berkuah atau lele goreng lalapan", harga: 30000, kategori: "ikan_seafood", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80" },
  { id: "is8", nama: "Belut Rica-Rica", deskripsi: "Daging belut gurih dimasak bumbu rica-rica pedas", harga: 45000, kategori: "ikan_seafood", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80" },
  { id: "sf1", nama: "Udang Telur Asin", deskripsi: "Udang renyah berbalut saus telur asin premium", harga: 50000, kategori: "ikan_seafood", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80", badge: "Premium" },
  { id: "sf2", nama: "Udang Aneka Saus", deskripsi: "Pilihan saus: Saus Padang, Asam Manis, Goreng Tepung, Lada Hitam", harga: 50000, kategori: "ikan_seafood", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80" },
  { id: "sf3", nama: "Tom Yum Seafood", deskripsi: "Kuah tomyum segar dengan isian aneka seafood", harga: 50000, kategori: "ikan_seafood", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80" },
  { id: "sf4", nama: "Cumi Telur Asin / Sapo Tahu Jepang", deskripsi: "Pilihan cumi telur asin atau hidangan sehat sapo tahu jepang", harga: 47000, kategori: "ikan_seafood", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80" },
  { id: "sf5", nama: "Cumi Aneka Saus", deskripsi: "Pilihan: Asam Manis, Goreng Tepung, Lada Hitam", harga: 45000, kategori: "ikan_seafood", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80" },
  { id: "sf6", nama: "Tom Yum Ayam", deskripsi: "Kuah tomyum asam pedas dengan potongan ayam", harga: 40000, kategori: "ikan_seafood", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80" },

  // MIE & NASI
  { id: "mn1", nama: "Spaghetti Bolognese", deskripsi: "Spaghetti saus daging tomat ala Italia", harga: 40000, kategori: "mie_nasi", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80" },
  { id: "mn2", nama: "Kwetiaw Seafood / Kwetiaw Siram Seafood", deskripsi: "Kwetiaw kenyal dengan isian udang dan cumi", harga: 40000, kategori: "mie_nasi", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80" },
  { id: "mn3", nama: "Kwetiaw Ayam / Bihun Goreng / Mie Goreng", deskripsi: "Sajian mie goreng atau bihun goreng isi ayam", harga: 30000, kategori: "mie_nasi", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80" },
  { id: "mn4", nama: "Mie/Bihun Goreng Seafood", deskripsi: "Mie atau bihun goreng spesial seafood", harga: 35000, kategori: "mie_nasi", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80" },
  { id: "mn5", nama: "Mie Tom Yam", deskripsi: "Mie kuah tom yam pedas asam", harga: 30000, kategori: "mie_nasi", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80" },
  { id: "mn6", nama: "Ta Mie Cap Cay / Mie Goreng Sosis", deskripsi: "Mie gurih dengan siraman cap cay atau potongan sosis", harga: 25000, kategori: "mie_nasi", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80" },
  { id: "mn7", nama: "Mie Semprul / Mie Pedas", deskripsi: "Mie goreng pedas berlevel kekinian", harga: 20000, kategori: "mie_nasi", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80" },
  { id: "mn8", nama: "Nasi Goreng Spesial WBB", deskripsi: "Nasi goreng khas bumbu rempah WBB lengkap dengan lauk", harga: 40000, kategori: "mie_nasi", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80", populer: true },
  { id: "mn9", nama: "Nasi Campur Isi Empal Daging", deskripsi: "Nasi campur tradisional dengan empal sapi empuk", harga: 30000, kategori: "mie_nasi", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80" },
  { id: "mn10", nama: "Nasi Goreng Seafood / Nasi Campur Ayam Suwir", deskripsi: "Nasi goreng isi udang & cumi, atau nasi campur ayam", harga: 35000, kategori: "mie_nasi", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80" },
  { id: "mn11", nama: "Nasi Goreng (Ayam/Mawut/Teri/Sosis)", deskripsi: "Berbagai varian nasi goreng pilihan", harga: 27000, kategori: "mie_nasi", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80" },
  { id: "mn12", nama: "Rice Bowl Chicken Katsu", deskripsi: "Nasi mangkuk dengan ayam katsu saus teriyaki", harga: 25000, kategori: "mie_nasi", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80" },
  { id: "mn13", nama: "Nasi Putih", deskripsi: "Satu porsi nasi putih hangat", harga: 8000, kategori: "mie_nasi", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80" },

  // SAYUR, SOUP & LAUK
  { id: "sl1", nama: "Cah Brokoli/Pak Coy Daging Sapi", deskripsi: "Sayuran sehat ditumis dengan irisan daging sapi empuk", harga: 45000, kategori: "sayur_soup", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80" },
  { id: "sl2", nama: "Capcay Seafood", deskripsi: "Sayuran campur dengan udang dan cumi", harga: 40000, kategori: "sayur_soup", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80" },
  { id: "sl3", nama: "Cap Cay Kuah/Goreng / Cah Brokoli Bawang Putih", deskripsi: "Pilihan cap cay atau cah brokoli bening bergizi", harga: 35000, kategori: "sayur_soup", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80" },
  { id: "sl4", nama: "Cah Taoge Ikan Asin", deskripsi: "Tumis tauge renyah dengan taburan ikan asin", harga: 27000, kategori: "sayur_soup", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80" },
  { id: "sl5", nama: "Kangkung Tumis Ayam/Bawang", deskripsi: "Sayur kangkung tumis segar dengan atau tanpa ayam", harga: 22000, kategori: "sayur_soup", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80" },
  { id: "dt1", nama: "Iga Bakar (Madu/Mercon) / Sate Daging WBB", deskripsi: "Iga sapi panggang lezat atau sate daging sapi", harga: 60000, kategori: "sayur_soup", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80", populer: true },
  { id: "dt2", nama: "Beef Steak", deskripsi: "Bistik daging sapi dengan saus dan kentang", harga: 55000, kategori: "sayur_soup", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80" },
  { id: "dt3", nama: "Telur Pizza / Gulung / Orak Arik", deskripsi: "Olahan telur lezat untuk lauk atau cemilan", harga: 25000, kategori: "sayur_soup", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80" },
  { id: "dt4", nama: "Telur Mata Sapi / Telur Dadar", deskripsi: "Lauk pelengkap sempurna", harga: 12000, kategori: "sayur_soup", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80" },
  { id: "sr1", nama: "Soto Daging / Rawon WBB", deskripsi: "Kuah segar soto sapi atau rawon hitam khas Jatim", harga: 30000, kategori: "sayur_soup", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80", populer: true },
  { id: "sr2", nama: "Soto Ayam Kampung / Sayur", deskripsi: "Soto ayam hangat dengan daging ayam kampung", harga: 27000, kategori: "sayur_soup", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80" },
  { id: "sp1", nama: "Soup Iga / Soup Buntut", deskripsi: "Sup bening kaldu tulang iga atau buntut sapi", harga: 59000, kategori: "sayur_soup", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80", badge: "Premium" },
  { id: "sp2", nama: "Soup Sehat", deskripsi: "Sup kaya vitamin dengan sayur mayor segar", harga: 40000, kategori: "sayur_soup", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80" },
  { id: "sp3", nama: "Soup Telur Tomat / Soup Merah", deskripsi: "Sup merah asam manis atau sup telur tomat oriental", harga: 27000, kategori: "sayur_soup", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80" },
  { id: "sm1", nama: "Sambal Bakar (Ayam/Cumi/Belut/Udang)", deskripsi: "Disajikan panas-panas di atas cobek bakar dengan lauk pilihan", harga: 40000, kategori: "sayur_soup", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80", populer: true },
  { id: "sm2", nama: "Sambal Belut", deskripsi: "Sambal penyet belut pedas gurih", harga: 39000, kategori: "sayur_soup", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80" },
  { id: "sm3", nama: "Sambal Bakar 4T", deskripsi: "Tahu, Tempe, Telur, Terong dibakar bersama sambal", harga: 35000, kategori: "sayur_soup", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80" },
  { id: "sm4", nama: "Sambal Ekstra (Bawang/Ijo/Matah/Mercon/Dll)", deskripsi: "Pilihan tambahan sambal untuk pelengkap makan", harga: 10000, kategori: "sayur_soup", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80" },

  // SNACK & DESSERT
  { id: "sn1", nama: "Burger Mini / Lumpia Ayam", deskripsi: "Camilan gurih lezat", harga: 29000, kategori: "snack_dessert", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80" },
  { id: "sn2", nama: "Pisang Goreng/Mendoan/Singkong Keju/Pancake", deskripsi: "Gorengan atau kue manis favorit", harga: 25000, kategori: "snack_dessert", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80" },
  { id: "sn3", nama: "Kulit Crispy/Tahu Tuna/Bakwan Jagung", deskripsi: "Camilan krispi untuk bersantai", harga: 20000, kategori: "snack_dessert", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80" },
  { id: "sn4", nama: "Aneka Camilan Spesial (Jamur/Dumpling/Fries/Dll)", deskripsi: "Jamur Crispy, French Fries, Nugget, Onion Ring, Cireng, Roti Maryam, Tahu Petis, Siomay, Sosis Goreng", harga: 20000, kategori: "snack_dessert", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80" },
  { id: "sn5", nama: "Roti Bakar Keju / Chocolate", deskripsi: "Roti panggang manis dengan isian melimpah", harga: 17000, kategori: "snack_dessert", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80" },
  { id: "ds1", nama: "Buah Segar / Es Teler / Salad / Es WBB", deskripsi: "Pencuci mulut dingin dan segar", harga: 25000, kategori: "snack_dessert", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80" },
  { id: "ds2", nama: "Gelato Premium", deskripsi: "Varian rasa: Milk Choco, Matcha, Choco Almond, Strawberry, Vanilla", harga: 25000, kategori: "snack_dessert", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80" },
  { id: "ds3", nama: "Rujak Buah / Es Oyen / Es Buah", deskripsi: "Buah-buahan segar bumbu manis atau es sirup manis", harga: 23000, kategori: "snack_dessert", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80" },
  { id: "ds4", nama: "Es Kuwut / Es Tape", deskripsi: "Minuman dingin tradisional pelepas dahaga", harga: 19000, kategori: "snack_dessert", gambar: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=400&q=80" },

  // MINUMAN
  { id: "mi1", nama: "V-60 / Lotus Coffee / Butterscot Sea Salt", deskripsi: "Kopi premium dari biji pilihan", harga: 35000, kategori: "minuman", gambar: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=400&q=80", badge: "Kopi WBB" },
  { id: "mi2", nama: "Kopi Racikan Susu/Caramel/Hazelnut", deskripsi: "Vanila Cheese Latte, Caramel Machiato, Ice Caramel, Ice Hazelnut", harga: 35000, kategori: "minuman", gambar: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=400&q=80" },
  { id: "mi3", nama: "Cappucino / Caffe Latte (Hot/Ice) / Mochacino", deskripsi: "Espresso base dengan susu", harga: 29000, kategori: "minuman", gambar: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=400&q=80" },
  { id: "mi4", nama: "Vietnam Drip / Taro Coffee", deskripsi: "Seduhan kopi tetes atau variasi taro", harga: 27000, kategori: "minuman", gambar: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=400&q=80" },
  { id: "mi5", nama: "Americano / Kopi Tubruk", deskripsi: "Kopi hitam kuat ala WBB (Hot/Ice). Tubruk Rp 12k - 15k, Americano Rp 18k - 20k.", harga: 18000, kategori: "minuman", gambar: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=400&q=80" },
  { id: "mi6", nama: "Hokaido Strawberry / Matcha Cheese / Snowberry", deskripsi: "Susu krim lembut aneka rasa", harga: 35000, kategori: "minuman", gambar: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=400&q=80" },
  { id: "mi7", nama: "Choco Banana/Berry / Ice Matcha", deskripsi: "Minuman coklat dan teh hijau", harga: 30000, kategori: "minuman", gambar: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=400&q=80" },
  { id: "mi8", nama: "Hot/Ice Chocolate/Redvelvet/Taro", deskripsi: "Seduhan manis non-kopi", harga: 28000, kategori: "minuman", gambar: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=400&q=80" },
  { id: "mi9", nama: "Thai Tea Jumbo (5 Porsi)", deskripsi: "Es teh susu Thailand untuk diminum bersama keluarga", harga: 89000, kategori: "minuman", gambar: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=400&q=80", populer: true },
  { id: "mi10", nama: "Aneka Sparkling Squash", deskripsi: "Berry Pop, Lychee, Pepino Applerol, Mango/Strawberry Squash (Rp 28k - 35k)", harga: 30000, kategori: "minuman", gambar: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=400&q=80" },
  { id: "mi11", nama: "Jus Buah Segar", deskripsi: "Jambu, Semangka, Buah Naga, Melon, Nanas, Apel (Rp 19k), Jus Alpukat (Rp 25k)", harga: 19000, kategori: "minuman", gambar: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=400&q=80" },
  { id: "mi12", nama: "Wedang Tradisional (Jahe/Madu/Sereh/Uwuh)", deskripsi: "Minuman hangat penjaga stamina. Rentang harga Rp 17.000 - Rp 27.000", harga: 20000, kategori: "minuman", gambar: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=400&q=80" },
  { id: "mi13", nama: "Teh, Jeruk & Soda", deskripsi: "Teh Manis/Tawar, Lemon Tea, Jeruk Peras, Soda Gembira", harga: 12000, kategori: "minuman", gambar: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=400&q=80" },

  // PAKET KHUSUS
  { id: "pk1", nama: "Paket Makan Siang Ekonomis (11.00-15.00)", deskripsi: "Paket Hemat Lunch A (Rp 40k) & Paket Hemat Lunch B (Rp 30k)", harga: 40000, kategori: "paket", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80", badge: "Siang" },
  { id: "pk2", nama: "Spesial Pelajar (10.00-15.00)", deskripsi: "Spanish Latte / Mood Maker harga khusus pelajar", harga: 15000, kategori: "paket", gambar: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=400&q=80" },
  { id: "pk3", nama: "Paket Keluarga WBB", deskripsi: "Ber-5 (Rp 390.000), Ber-10 (Rp 650.000), Ber-15 (Rp 1.050.000)", harga: 390000, kategori: "paket", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80", populer: true },
  { id: "pk4", nama: "Paket Prasmanan (Min 100 pax)", deskripsi: "Prasmanan 1 (75k/pax), Prasmanan 2 (90k/pax), Prasmanan 3 (100k/pax)", harga: 75000, kategori: "paket", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80" },
  { id: "pk5", nama: "Paket VIP (10 Orang)", deskripsi: "VIP Room 4 jam, Sound, Proyektor, Dekor, Menu lengkap 10 orang", harga: 2000000, kategori: "paket", gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80", badge: "VIP" },
];`;

const startMarker = 'export const KATEGORI_MENU = [';
const endMarker = '];\n\n// --- Testimoni ---';

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf('// --- Testimoni ---');

if (startIndex !== -1 && endIndex !== -1) {
  content = content.slice(0, startIndex) + newData + '\n\n' + content.slice(endIndex);
  fs.writeFileSync(dataFilePath, content);
  console.log('Update successful!');
} else {
  console.log('Markers not found!');
}
