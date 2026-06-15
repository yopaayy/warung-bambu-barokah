"use client";

import { motion } from "framer-motion";
import AnimateOnView from "@/components/ui/AnimateOnView";
import { MessageSquareHeart, Send, Sparkles, Star, Megaphone } from "lucide-react";
import Link from "next/link";
import Fireflies from "@/components/ui/Fireflies";

export default function KritikSaranPage() {
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeYhtj3_LBDpKsTfU6RnYNQCR5NY0azXL5BfCDxiz061fbdNQ/viewform";

  return (
    <main className="min-h-screen bg-wbb-background pt-24 md:pt-32 pb-20 relative overflow-hidden flex items-center justify-center">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-[10%] left-[15%] w-64 h-64 bg-wbb-primary/10 rounded-full blur-[80px]"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-wbb-secondary/20 rounded-full blur-[100px]"
          animate={{ x: [0, -60, 0], y: [0, -40, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
          <motion.div 
            className="absolute top-[40%] left-[40%] w-40 h-40 bg-highlight-light/20 rounded-full blur-[60px]"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <Fireflies count={15} />
        </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          
          <AnimateOnView animation="fade-up">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center p-4 rounded-full bg-wbb-surface-container-highest shadow-inner mb-6 relative">
                <motion.div 
                  className="absolute inset-0 rounded-full border-2 border-wbb-secondary/50"
                  animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <MessageSquareHeart size={40} className="text-wbb-secondary" />
              </div>
              
              <h1 className="font-playfair text-wbb-primary text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Suara Anda, <br className="hidden md:block"/> Motivasi Kami
              </h1>
              <p className="font-montserrat text-wbb-on-surface-variant text-lg md:text-xl leading-relaxed">
                Kami sangat menghargai setiap masukan dan kritik yang membangun demi meningkatkan kualitas pelayanan <span className="font-bold text-wbb-primary">Warung Bambu Barokah</span>.
              </p>
            </div>
          </AnimateOnView>

          {/* Interactive Card */}
          <AnimateOnView direction="up" delay={0.2}>
            <div className="relative group perspective-1000">
              <motion.div 
                whileHover={{ scale: 1.02, rotateX: 2, rotateY: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white/80 backdrop-blur-xl border border-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] text-center relative overflow-hidden"
              >
                {/* Decorative floating icons inside card */}
                <motion.div 
                  className="absolute top-8 left-8 text-highlight-light/30"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Star size={32} />
                </motion.div>
                <motion.div 
                  className="absolute bottom-10 right-10 text-wbb-tertiary/20"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Megaphone size={40} />
                </motion.div>

                <h3 className="font-playfair text-2xl md:text-3xl font-bold text-wbb-on-surface mb-4">
                  Bantu Kami Menjadi Lebih Baik
                </h3>
                <p className="font-montserrat text-wbb-on-surface-variant mb-10 max-w-lg mx-auto">
                  Pengalaman istimewa Anda adalah prioritas kami. Ceritakan momen berkesan atau berikan saran perbaikan melalui form interaktif kami.
                </p>

                {/* The Call to Action Button */}
                <motion.a 
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-wbb-primary text-white px-8 py-4 rounded-full font-montserrat font-bold text-lg shadow-[0_10px_20px_rgba(28,46,18,0.2)] hover:shadow-[0_15px_30px_rgba(28,46,18,0.3)] transition-shadow relative overflow-hidden group/btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Button shine effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                  
                  <span>Tulis Kritik & Saran</span>
                  <motion.div 
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Send size={20} />
                  </motion.div>
                </motion.a>

                <div className="mt-8 flex items-center justify-center gap-2 text-sm text-wbb-on-surface-variant font-montserrat">
                  <Sparkles size={16} className="text-wbb-secondary" />
                  <span>Waktu pengisian: ~2 menit</span>
                </div>
              </motion.div>
              
              {/* Card glowing shadow */}
              <div className="absolute inset-0 bg-wbb-secondary/20 blur-3xl -z-10 rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </AnimateOnView>

        </div>
      </div>
    </main>
  );
}
