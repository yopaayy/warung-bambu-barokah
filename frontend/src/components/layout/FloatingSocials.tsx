"use client";

import { motion } from "framer-motion";
import { Instagram, Facebook } from "lucide-react";
import { SITE_CONFIG } from "@/lib/data";

export default function FloatingSocials() {
  const SOCIALS = [
    {
      name: "Instagram",
      icon: <Instagram size={22} />,
      href: SITE_CONFIG.instagram,
      hoverColor: "group-hover:text-[#E1306C]",
    },
    {
      name: "Facebook",
      icon: <Facebook size={22} />,
      href: SITE_CONFIG.facebook,
      hoverColor: "group-hover:text-[#1877F2]",
    },
    {
      name: "TikTok",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
        </svg>
      ),
      hoverColor: "group-hover:text-black",
      href: SITE_CONFIG.tiktok,
    },
  ];

  return (
    <motion.div 
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1, type: "spring", stiffness: 100 }}
      className="fixed left-0 top-1/2 -translate-y-1/2 z-[100] flex flex-col gap-2 md:gap-3 p-2 md:p-3 bg-white/40 backdrop-blur-md border border-white/60 shadow-2xl rounded-r-2xl md:rounded-r-[2rem]"
    >
      {SOCIALS.map((social) => (
        <motion.a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.15, x: 5 }}
          whileTap={{ scale: 0.95 }}
          className="relative group w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl md:rounded-2xl bg-white/80 border border-white text-primary transition-all duration-300 shadow-sm hover:shadow-lg"
          aria-label={social.name}
        >
          <span className={`transition-colors duration-300 ${social.hoverColor} scale-90 md:scale-100`}>
            {social.icon}
          </span>
          
          {/* Tooltip Hover Effect */}
          <div className="absolute left-full ml-4 px-3 py-1.5 bg-primary text-white text-xs font-bold rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap shadow-xl flex items-center gap-2 pointer-events-none translate-x-[-10px] group-hover:translate-x-0">
            <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rotate-45 rounded-sm" />
            Ikuti {social.name}
          </div>
        </motion.a>
      ))}
    </motion.div>
  );
}
