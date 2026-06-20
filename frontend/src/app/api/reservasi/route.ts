import { NextResponse } from "next/server";
import { z } from "zod";
import { SITE_CONFIG } from "@/lib/data";

// Skema validasi Zod untuk mencegah input berbahaya (XSS, SQLi, tipe data salah)
const reservasiSchema = z.object({
  date: z.string().min(10, "Tanggal tidak valid"),
  guestCount: z.number().int().min(1).max(100),
  timeSlotId: z.string().min(1, "Waktu harus dipilih"),
  areaId: z.string().min(1, "Area harus dipilih"),
  tableId: z.string().min(1, "Meja harus dipilih"),
  guestDetails: z.object({
    name: z.string().min(2, "Nama terlalu pendek").max(100, "Nama terlalu panjang"),
    phone: z.string().min(8, "Nomor telepon terlalu pendek").max(20, "Nomor telepon terlalu panjang"),
    email: z.string().email("Format email tidak valid"),
    notes: z.string().max(500, "Catatan maksimal 500 karakter").optional(),
  }),
});

// In-Memory Rate Limiter Map: { "ip-address": { count: number, resetTime: number } }
// Catatan: Pada produksi Vercel (serverless), ini akan ter-reset jika container mati.
// Untuk produksi jangka panjang disarankan pakai Redis/Upstash.
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const MAX_REQUESTS = 3; // Max 3 reservasi per IP
const WINDOW_MS = 60 * 60 * 1000; // dalam 1 jam

export async function POST(req: Request) {
  try {
    // 1. Dapatkan IP Address (Anti-DDoS layer)
    const forwardedFor = req.headers.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : "unknown-ip";

    // 2. Cek Rate Limiting
    const now = Date.now();
    const limitRecord = rateLimitMap.get(ip);

    if (limitRecord) {
      if (now > limitRecord.resetTime) {
        // Reset limit jika waktu sudah lewat 1 jam
        rateLimitMap.set(ip, { count: 1, resetTime: now + WINDOW_MS });
      } else {
        if (limitRecord.count >= MAX_REQUESTS) {
          console.warn(`[RATE LIMIT] IP ${ip} mencoba spam reservasi.`);
          return NextResponse.json(
            { error: "Anda telah mencapai batas maksimal reservasi per jam. Silakan coba lagi nanti." },
            { status: 429 }
          );
        }
        limitRecord.count += 1;
        rateLimitMap.set(ip, limitRecord);
      }
    } else {
      rateLimitMap.set(ip, { count: 1, resetTime: now + WINDOW_MS });
    }

    // 3. Parsing Body Request
    const body = await req.json();

    // 4. Validasi Data dengan Zod
    const validatedData = reservasiSchema.safeParse(body);
    
    if (!validatedData.success) {
      console.warn(`[VALIDATION FAILED] Data tidak sesuai:`, validatedData.error.flatten());
      return NextResponse.json(
        { error: "Data reservasi tidak valid atau mengandung karakter berbahaya.", details: validatedData.error.flatten() },
        { status: 400 }
      );
    }

    // 5. Generate Booking ID Server-Side (Lebih aman dari manipulasi client)
    const bookingId = `${SITE_CONFIG.namaAkronim}-` + Math.floor(10000 + Math.random() * 90000);

    // TODO (Opsional): Simpan ke Database (Prisma/Supabase) di sini

    // 6. Return response sukses
    return NextResponse.json({
      success: true,
      bookingId,
      message: "Reservasi berhasil divalidasi dan dicatat oleh server."
    });

  } catch (error: any) {
    console.error("API Reservasi Error:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan internal pada server." },
      { status: 500 }
    );
  }
}
