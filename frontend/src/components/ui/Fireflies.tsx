"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface FirefliesProps {
  count?: number;
}

export default function Fireflies({ count = 25 }: FirefliesProps) {
  // Use state to avoid hydration mismatch between server and client
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<{ id: number; size: number; left: number; top: number; delay: number; duration: number; xOffset: number; yOffset: number }[]>([]);

  useEffect(() => {
    setMounted(true);
    setParticles(
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        size: Math.random() * 4 + 2, // 2px - 6px
        left: Math.random() * 100, // 0% - 100%
        top: Math.random() * 100, // 0% - 100%
        delay: Math.random() * 5, // 0s - 5s
        duration: Math.random() * 6 + 6, // 6s - 12s for slow smooth floating
        xOffset: (Math.random() - 0.5) * 80, // sway sideways by -40px to 40px
        yOffset: -(Math.random() * 150 + 50), // float up by 50px to 200px
      }))
    );
  }, [count]);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: `${p.left}%`,
            top: `${p.top}%`,
            boxShadow: `0 0 12px 3px rgba(255, 255, 255, 0.4)`,
          }}
          animate={{
            y: [0, p.yOffset],
            x: [0, p.xOffset],
            opacity: [0, 0.8, 0],
            scale: [0, 1.2, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
