import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/config";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.nama} — Destinasi Kuliner, Wisata & Edukasi`,
    template: `%s | ${SITE_CONFIG.nama}`,
  },
  description:
    `${SITE_CONFIG.nama} (${SITE_CONFIG.namaAkronim}) adalah destinasi kuliner, wisata edukasi, dan event gathering keluarga. Nikmati pengalaman makan premium dengan konsep ${SITE_CONFIG.tagline} berkonsep bambu eco-luxury.`,
  keywords: SITE_CONFIG.metaKeywords as unknown as string[],
  authors: [{ name: SITE_CONFIG.nama }],
  creator: SITE_CONFIG.nama,
  metadataBase: new URL(`https://${SITE_CONFIG.domain}`),
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: SITE_CONFIG.nama,
    title: `${SITE_CONFIG.nama} — Destinasi Kuliner, Wisata & Edukasi`,
    description:
      `Nikmati pengalaman makan premium dengan konsep ${SITE_CONFIG.tagline} berkonsep bambu eco-luxury.`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.nama} — Destinasi Kuliner, Wisata & Edukasi`,
    description:
      `Nikmati pengalaman makan premium dengan konsep ${SITE_CONFIG.tagline} berkonsep bambu eco-luxury.`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${playfair.variable} ${montserrat.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#1C2E12" />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
