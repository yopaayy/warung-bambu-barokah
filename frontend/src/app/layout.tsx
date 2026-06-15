import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

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
    default: "Warung Bambu Barokah — Destinasi Kuliner, Wisata & Edukasi Blitar",
    template: "%s | Warung Bambu Barokah",
  },
  description:
    "Warung Bambu Barokah (WBB) adalah destinasi kuliner, wisata edukasi, dan event gathering keluarga di Blitar. Nikmati pengalaman makan premium dengan konsep Educafe & Resto berkonsep bambu eco-luxury.",
  keywords: [
    "warung bambu barokah",
    "restoran blitar",
    "wisata kuliner blitar",
    "educafe blitar",
    "outing class blitar",
    "event gathering blitar",
    "restoran keluarga blitar",
    "wisata edukasi anak blitar",
  ],
  authors: [{ name: "Warung Bambu Barokah" }],
  creator: "Warung Bambu Barokah",
  metadataBase: new URL("https://warungbambubarokah.com"),
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "Warung Bambu Barokah",
    title: "Warung Bambu Barokah — Destinasi Kuliner, Wisata & Edukasi Blitar",
    description:
      "Nikmati pengalaman makan premium dengan konsep Educafe & Resto berkonsep bambu eco-luxury di Blitar.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Warung Bambu Barokah — Destinasi Kuliner, Wisata & Edukasi Blitar",
    description:
      "Nikmati pengalaman makan premium dengan konsep Educafe & Resto berkonsep bambu eco-luxury di Blitar.",
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
