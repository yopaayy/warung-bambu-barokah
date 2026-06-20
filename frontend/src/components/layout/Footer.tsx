"use client";

import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  ChevronRight,
} from "lucide-react";
import { SITE_CONFIG, NAVIGASI } from "@/lib/data";
import { BRAND_ASSETS } from "@/lib/assets";

export default function Footer() {
  const tahunSekarang = new Date().getFullYear();

  return (
    <footer
      id="footer-utama"
      style={{
        background: "linear-gradient(180deg, var(--primary) 0%, #141F0D 100%)",
        color: "rgba(255, 255, 255, 0.85)",
      }}
    >
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-14 h-14 relative flex items-center justify-center bg-white rounded-full overflow-hidden border-2 border-white/20 shadow-lg">
                <img 
                  src={BRAND_ASSETS.logo} 
                  alt={`Logo ${SITE_CONFIG.namaAkronim}`} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div>
                <h3 className="text-white text-2xl font-black tracking-wide leading-tight" style={{ fontFamily: "var(--font-heading)", color: "#ffffff", textShadow: "0px 2px 4px rgba(0,0,0,0.5)" }}>
                  {SITE_CONFIG.nama}
                </h3>
                <span
                  className="text-xs font-bold tracking-[0.15em] uppercase mt-1 block"
                  style={{ color: "var(--premium-accent)" }}
                >
                  {SITE_CONFIG.tagline}
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.6)" }}>
              {SITE_CONFIG.deskripsi}
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4 mb-4">
              <a
                href={SITE_CONFIG.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.7)",
                }}
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={SITE_CONFIG.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.7)",
                }}
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href={SITE_CONFIG.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.7)",
                }}
                aria-label="TikTok"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.88-2.88A2.89 2.89 0 0 1 9.49 12.4a2.8 2.8 0 0 1 .89.14V9.06A6.27 6.27 0 0 0 9.49 9a6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V9.68A8.16 8.16 0 0 0 20.59 11V7.5a4.83 4.83 0 0 1-1-.81z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4
              className="text-white text-xl font-extrabold tracking-wider mb-6"
              style={{ fontFamily: "var(--font-heading)", color: "#ffffff", textShadow: "0px 1px 2px rgba(0,0,0,0.5)" }}
            >
              Navigasi
            </h4>
            <ul className="space-y-2.5">
              {NAVIGASI.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm flex items-center gap-2 transition-colors duration-200 no-underline"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "var(--highlight)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.6)"; }}
                  >
                    <ChevronRight size={14} />
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/reservasi"
                  className="text-sm flex items-center gap-2 transition-colors duration-200 no-underline"
                  style={{ color: "var(--premium-accent)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "var(--premium-accent-light)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "var(--premium-accent)"; }}
                >
                  <ChevronRight size={14} />
                  Reservasi Meja
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4
              className="text-white text-xl font-extrabold tracking-wider mb-6"
              style={{ fontFamily: "var(--font-heading)", color: "#ffffff", textShadow: "0px 1px 2px rgba(0,0,0,0.5)" }}
            >
              Hubungi Kami
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                <MapPin size={18} className="flex-shrink-0 mt-0.5" style={{ color: "var(--highlight)" }} />
                <span>{SITE_CONFIG.alamat}</span>
              </li>
              <li>
                <a
                  href={`tel:${SITE_CONFIG.telepon}`}
                  className="flex gap-3 text-sm no-underline transition-colors duration-200"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "var(--highlight)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.6)"; }}
                >
                  <Phone size={18} className="flex-shrink-0" style={{ color: "var(--highlight)" }} />
                  {SITE_CONFIG.telepon}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex gap-3 text-sm no-underline transition-colors duration-200"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "var(--highlight)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.6)"; }}
                >
                  <Mail size={18} className="flex-shrink-0" style={{ color: "var(--highlight)" }} />
                  {SITE_CONFIG.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours Column */}
          <div>
            <h4
              className="text-white text-xl font-extrabold tracking-wider mb-6"
              style={{ fontFamily: "var(--font-heading)", color: "#ffffff", textShadow: "0px 1px 2px rgba(0,0,0,0.5)" }}
            >
              Jam Operasional
            </h4>
            <ul className="space-y-3">
              {SITE_CONFIG.jamOperasional.map((jadwal) => (
                <li key={jadwal.hari} className="flex items-start gap-3 text-sm">
                  <Clock size={16} className="flex-shrink-0 mt-0.5" style={{ color: "var(--highlight)" }} />
                  <div>
                    <span className="block text-white font-medium text-sm">{jadwal.hari}</span>
                    <span style={{ color: "rgba(255,255,255,0.5)" }}>{jadwal.jam}</span>
                  </div>
                </li>
              ))}
            </ul>
            {/* CTA */}
            <div className="mt-6">
              <Link
                href="/reservasi"
                className="btn btn-premium w-full no-underline text-sm"
              >
                Reservasi Sekarang
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="border-t py-5"
        style={{ borderColor: "rgba(255,255,255,0.1)" }}
      >
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
          <p>© {tahunSekarang} {SITE_CONFIG.nama}. Seluruh hak cipta dilindungi.</p>
          <p>
            Dibuat dengan ❤️ di Blitar, Jawa Timur
          </p>
        </div>
      </div>
    </footer>
  );
}
