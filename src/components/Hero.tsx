"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const badges = [
  "Certified Dealer",
  "15+ Years Experience",
  "Fast Service",
  "Genuine Products",
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden hero-gradient">
      {/* Background Animated Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/blueprint.png')] opacity-5 mix-blend-overlay"></div>
        {/* Animated Orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/40 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-secondary/30 rounded-full blur-3xl"
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Content Left */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8">
                <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse"></span>
                <span className="text-xs font-semibold text-white tracking-wider uppercase">Serving Mydukur Since 2009</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-[1.1] mb-4 tracking-tight"
            >
              Trusted Borewell & <br />
              <span className="text-accent">Engineering</span> Experts
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-noto-telugu text-xl md:text-2xl text-white/70 mb-6"
            >
              విశ్వసనీయ బోర్వెల్ నిపుణులు
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg text-white/80 mb-8 max-w-xl leading-relaxed"
            >
              Providing professional borewell drilling, pump installation, repairs and genuine <strong className="text-white">Astral Pipes</strong> with trusted service across Mydukur.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 mb-12"
            >
              <a
                href="tel:9949801904"
                className="flex items-center gap-2 px-8 py-4 bg-accent text-dark font-heading font-bold rounded-full hover:bg-white hover:scale-105 hover:shadow-[0_0_30px_rgba(245,179,33,0.5)] transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href="#services"
                className="flex items-center gap-2 px-8 py-4 bg-white/10 text-white border border-white/20 font-heading font-semibold rounded-full hover:bg-white/20 transition-all duration-300 backdrop-blur-md"
              >
                Our Services
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              {badges.map((badge, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-white/90 font-medium bg-dark/40 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  {badge}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Image Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center hidden md:flex"
          >
            {/* The actual image can be a placeholder div with a nice gradient and icon, or later replaced by the user */}
            <div className="relative w-full aspect-square max-w-[500px] rounded-3xl overflow-hidden glass-card border border-white/30 p-2 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
               <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 to-dark/60 backdrop-blur-sm z-10 rounded-3xl"></div>
               {/* Replace with actual high quality engineering image */}
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579693121516-f36de29d8131?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center">
                  <div className="absolute inset-0 bg-dark/80 mix-blend-multiply"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent"></div>
               </div>
               
               {/* Floating Element */}
               <motion.div 
                 animate={{ y: [-10, 10, -10] }} 
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute -left-6 top-20 z-20 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4"
               >
                 <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xl font-bold">✓</div>
                 <div>
                   <p className="text-dark font-bold">100% Quality</p>
                   <p className="text-xs text-gray-500">Assured Service</p>
                 </div>
               </motion.div>

               <motion.div 
                 animate={{ y: [10, -10, 10] }} 
                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute -right-6 bottom-20 z-20 bg-dark p-4 rounded-2xl shadow-xl border border-white/10 flex items-center gap-4"
               >
                 <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-dark text-xl font-bold">15+</div>
                 <div>
                   <p className="text-white font-bold">Years</p>
                   <p className="text-xs text-white/60">Experience</p>
                 </div>
               </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-white/50"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
      </motion.div>
    </section>
  );
}
