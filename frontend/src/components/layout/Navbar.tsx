"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronRight, Sparkles } from "lucide-react";
import { NAVIGASI, NAVIGASI_CTA, SITE_CONFIG } from "@/lib/data";
import { BRAND_ASSETS } from "@/lib/assets";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const isHomePage = pathname === "/";
  const navBg = isScrolled || !isHomePage;

  return (
    <>
      <header
        id="navbar-utama"
        className="fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out"
        style={{
          zIndex: "var(--z-navbar)",
          background: navBg
            ? "rgba(252, 249, 242, 0.92)"
            : "transparent",
          backdropFilter: navBg ? "blur(16px)" : "none",
          WebkitBackdropFilter: navBg ? "blur(16px)" : "none",
          borderBottom: navBg
            ? "1px solid var(--outline-light)"
            : "1px solid transparent",
          boxShadow: navBg ? "var(--shadow-sm)" : "none",
        }}
      >
        <div className="container mx-auto px-4 xl:px-6 flex items-center justify-between gap-2 xl:gap-8 h-[72px]">
          {/* Logo */}
          <div className="flex-1 flex justify-start">
            <Link href="/" className="flex items-center gap-2 xl:gap-3 no-underline group shrink-0" id="logo-wbb">
              <div className="w-10 h-10 xl:w-14 xl:h-14 relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105 drop-shadow-sm rounded-full overflow-hidden border-2 border-wbb-primary/10 bg-white">
              <img 
                src={BRAND_ASSETS.logo} 
                alt={`Logo ${SITE_CONFIG.namaAkronim}`} 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="flex flex-col whitespace-nowrap">
              <span
                className="text-[15px] xl:text-lg font-bold leading-tight transition-colors duration-300"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: navBg ? "var(--primary)" : isHomePage ? "white" : "var(--primary)",
                }}
              >
                {SITE_CONFIG.nama}
              </span>
              <span
                className="text-[9px] xl:text-[10px] font-semibold tracking-[0.15em] uppercase"
                style={{
                  color: navBg
                    ? "var(--premium-accent)"
                    : isHomePage
                      ? "var(--premium-accent-light)"
                      : "var(--premium-accent)",
                }}
              >
                {SITE_CONFIG.tagline}
              </span>
            </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center gap-0 xl:gap-1.5 shrink-0" id="navigasi-desktop">
            {NAVIGASI.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <div key={item.href} className="flex items-center">
                  <Link
                    href={item.href}
                    className={`relative px-2 xl:px-3 py-2 text-[13px] xl:text-[0.875rem] font-semibold rounded-full transition-all duration-300 no-underline tracking-wide whitespace-nowrap group ${
                      isActive
                        ? "text-wbb-secondary"
                        : navBg || !isHomePage
                          ? "text-wbb-on-surface-variant hover:text-wbb-primary hover:bg-wbb-surface-container"
                          : "text-white/90 hover:text-white hover:bg-white/15"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute bottom-1 left-3 right-3 h-[2px] rounded-full"
                        style={{ background: "var(--accent)" }}
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                  </Link>
                  
                  {/* Interactive Dot Separator */}
                  {index < NAVIGASI.length - 1 && (
                    <span 
                      className={`mx-0.5 xl:mx-1 text-[9px] xl:text-[10px] transition-all duration-300 opacity-20 hover:opacity-100 hover:scale-150 cursor-default ${
                        navBg || !isHomePage ? "text-wbb-primary" : "text-white"
                      }`}
                    >
                      •
                    </span>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Section */}
          <div className="flex-1 flex justify-end items-center gap-2 xl:gap-4">
            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4" id="navbar-cta">
            <a
              href={`tel:${SITE_CONFIG.telepon}`}
              className="btn-ghost flex items-center gap-2 text-sm no-underline whitespace-nowrap"
              style={{
                color: navBg || !isHomePage ? "var(--text-secondary)" : "rgba(255,255,255,0.85)",
              }}
            >
              <Phone size={16} />
              <span className="hidden xl:inline">Hubungi Kami</span>
            </a>
            <Link href={NAVIGASI_CTA.href} className="btn btn-reservasi no-underline group">
              <Sparkles size={20} className="text-[#D6B15A] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
              {NAVIGASI_CTA.label}
              <ChevronRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg transition-colors duration-200"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Menu navigasi"
            id="btn-menu-mobile"
            style={{
              color: navBg || !isHomePage ? "var(--text)" : "white",
              background: isMobileOpen ? "var(--surface-container)" : "transparent",
            }}
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40"
              style={{ zIndex: "calc(var(--z-drawer) - 1)" }}
              onClick={() => setIsMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[300px] flex flex-col"
              style={{
                zIndex: "var(--z-drawer)",
                background: "var(--surface)",
                boxShadow: "var(--shadow-xl)",
              }}
              id="drawer-mobile"
            >
              {/* Drawer Header */}
              <div
                className="flex items-center justify-between px-6 h-[72px] border-b"
                style={{ borderColor: "var(--outline-light)" }}
              >
                <span
                  className="font-bold text-lg"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--primary)" }}
                >
                  Menu
                </span>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-lg"
                  style={{ color: "var(--text-secondary)" }}
                  aria-label="Tutup menu"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Drawer Links */}
              <nav className="flex-1 overflow-y-auto px-4 py-4" id="navigasi-mobile">
                {NAVIGASI.map((item, i) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className="flex items-center justify-between px-4 py-3.5 rounded-xl text-[0.9375rem] font-medium no-underline transition-colors duration-200"
                        style={{
                          color: isActive ? "var(--accent)" : "var(--text-secondary)",
                          background: isActive ? "rgba(79, 122, 55, 0.08)" : "transparent",
                        }}
                      >
                        {item.label}
                        {isActive && (
                          <div
                            className="w-2 h-2 rounded-full"
                            style={{ background: "var(--accent)" }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Drawer Footer */}
              <div className="p-4 space-y-3 border-t" style={{ borderColor: "var(--outline-light)" }}>
                <Link
                  href={NAVIGASI_CTA.href}
                  className="btn btn-reservasi w-full no-underline group"
                >
                  <Sparkles size={20} className="text-[#D6B15A] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                  {NAVIGASI_CTA.label}
                  <ChevronRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary w-full no-underline"
                >
                  <Phone size={16} />
                  Hubungi via WhatsApp
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
