import { NextResponse } from "next/server";
import { MENU_ITEMS } from "@/lib/data";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { prompt } = body;

    if (!prompt) {
      return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "GEMINI_API_KEY is not configured on the server." },
        { status: 500 }
      );
    }

    // Simplify menu to save tokens
    const simplifiedMenu = MENU_ITEMS.map((item) => ({
      id: item.id,
      nama: item.nama,
      kategori: item.kategori,
      harga: item.harga,
      deskripsi: item.deskripsi,
      populer: item.populer || false,
      badge: item.badge || null,
    }));

    const systemInstruction = `Kamu adalah Asisten AI cerdas untuk restoran "Warung Bambu Barokah" (WBB) dengan konsep Eco-Luxury di Blitar.
Tugas utamamu adalah meracik/merekomendasikan menu TERBAIK untuk pelanggan berdasarkan prompt mereka.

ATURAN PENTING:
1. Pahami skala budget. "2 juta" = Rp 2.000.000. Jika budget untuk N orang, bagikan budget untuk mencukupi lauk, nasi, dan minum. Jika pelanggan minta "terbaik", prioritaskan menu dengan 'populer' = true atau 'badge'.
2. JANGAN merekomendasikan item di luar daftar menu yang diberikan. Gunakan persis "id" dari menu.
3. Rekomendasikan 2 hingga 4 item saja yang kombinasinya pas (misal: makanan + minuman).
4. Kamu HARUS mengembalikan respons dalam format JSON murni TANPA markdown block (\`\`\`json).

STRUKTUR JSON YANG DIWAJIBKAN:
{
  "budget_terdeteksi": <angka_atau_null>,
  "jumlah_orang_terdeteksi": <angka_minimal_1>,
  "pesan_sapaan": "<Sapaan ramah dan elegan menjelaskan mengapa kombinasi ini dipilih berdasarkan budget/selera mereka>",
  "rekomendasi": [
    {
      "id": "<id_menu_dari_database>",
      "alasan": "<Alasan 1 kalimat yang spesifik, menarik, dan elegan mengapa menu ini cocok untuknya>"
    }
  ]
}

DAFTAR MENU RESTORAN:
${JSON.stringify(simplifiedMenu)}
`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [{ text: prompt }],
            },
          ],
          systemInstruction: {
            parts: [{ text: systemInstruction }],
          },
          generationConfig: {
            temperature: 0.2,
            responseMimeType: "application/json",
          },
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Gemini API Error:", errorText);
      return NextResponse.json({ error: "Failed to fetch from AI provider" }, { status: 502 });
    }

    const data = await response.json();
    const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!rawText) {
      return NextResponse.json({ error: "AI returned empty response" }, { status: 500 });
    }

    // Parse the JSON
    let parsedResult;
    try {
      parsedResult = JSON.parse(rawText);
    } catch (e) {
      // In case Gemini returns markdown block despite the mimeType
      const cleanedText = rawText.replace(/```json\n/g, "").replace(/\n```/g, "");
      parsedResult = JSON.parse(cleanedText);
    }

    return NextResponse.json(parsedResult);
  } catch (error: any) {
    console.error("AI Route Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
