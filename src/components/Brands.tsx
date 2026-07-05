"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function Brands() {
  return (
    <section id="brands" className="py-24 bg-dark relative overflow-hidden">
      {/* Abstract background graphics */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/30 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/30 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 bg-[url('/blueprint.png')] opacity-10 mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 text-accent font-bold text-xs tracking-widest uppercase mb-4 border border-accent/30"
          >
            Official Partners
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-4"
          >
            Authorized <span className="text-accent">Dealers</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-noto-telugu text-xl text-white/60 mb-6"
          >
            అధికారిక బ్రాండ్లు మరియు భాగస్వాములు
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-white/80 text-lg"
          >
            We partner with industry-leading manufacturers to ensure every installation utilizes the highest quality materials and robust engineering.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Brand 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
            className="glass-card bg-white/5 border border-white/10 hover:border-accent/30 rounded-3xl p-8 text-center relative overflow-hidden group transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent/20 to-accent/10 border border-accent/40 text-accent text-xs font-bold px-3 py-1 rounded-full mb-8">
              <CheckCircle2 className="w-3.5 h-3.5" /> Certified Seller
            </div>
            
            <div className="w-48 h-32 mx-auto bg-white rounded-2xl flex items-center justify-center mb-6 p-6 shadow-[0_4px_20px_rgba(0,0,0,0.15)] group-hover:shadow-[0_8px_30px_rgba(255,255,255,0.1)] group-hover:scale-105 transition-all duration-500">
               <Image src="/astral-logo.svg" alt="Astral Pipes Official Logo" width={140} height={90} className="object-contain w-full h-full" />
            </div>
            
            <h3 className="text-2xl font-bold text-dark mb-2">Astral Pipes</h3>
            <p className="text-dark/80 text-sm leading-relaxed">
              India's leading pipe manufacturer. We provide genuine Astral pipes for all borewell casing and plumbing needs, ensuring decades of leak-free performance.
            </p>
          </motion.div>

          {/* Brand 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
            className="glass-card bg-white/5 border border-white/10 hover:border-accent/30 rounded-3xl p-8 text-center relative overflow-hidden group transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-bl from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent/20 to-accent/10 border border-accent/40 text-accent text-xs font-bold px-3 py-1 rounded-full mb-8">
              <CheckCircle2 className="w-3.5 h-3.5" /> Authorized Dealer
            </div>
            
            <div className="w-48 h-32 mx-auto bg-white rounded-2xl flex items-center justify-center mb-6 p-6 shadow-[0_4px_20px_rgba(0,0,0,0.15)] group-hover:shadow-[0_8px_30px_rgba(255,255,255,0.1)] group-hover:scale-105 transition-all duration-500">
               <Image src="/gajraj-logo.png" alt="Gajraj Motor Pumps Official Logo" width={140} height={90} className="object-contain w-full h-full" />
            </div>
            
            <h3 className="text-2xl font-bold text-dark mb-2">Gajraj Motor Pumps</h3>
            <p className="text-dark/80 text-sm leading-relaxed">
              Highly trusted motor pump brand designed for Indian agriculture and domestic applications. We supply and service the complete range.
            </p>
          </motion.div>

          {/* Brand 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
            className="glass-card bg-white/5 border border-white/10 hover:border-accent/30 rounded-3xl p-8 text-center relative overflow-hidden group transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent/20 to-accent/10 border border-accent/40 text-accent text-xs font-bold px-3 py-1 rounded-full mb-8">
              <CheckCircle2 className="w-3.5 h-3.5" /> Certified Partner
            </div>
            
            <div className="w-48 h-32 mx-auto bg-white rounded-2xl flex items-center justify-center mb-6 p-6 shadow-[0_4px_20px_rgba(0,0,0,0.15)] group-hover:shadow-[0_8px_30px_rgba(255,255,255,0.1)] group-hover:scale-105 transition-all duration-500">
               <Image src="/texla-logo.svg" alt="Texla Motors Official Logo" width={140} height={90} className="object-contain w-full h-full" />
            </div>
            
            <h3 className="text-2xl font-bold text-dark mb-2">Texla Motors</h3>
            <p className="text-dark/80 text-sm leading-relaxed">
              Reliable motor brand trusted for agricultural and industrial pump applications. Built for high performance and rugged environments.
            </p>
          </motion.div>

          {/* Brand 4 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
            className="glass-card bg-white/5 border border-white/10 hover:border-accent/30 rounded-3xl p-8 text-center relative overflow-hidden group transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-bl from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent/20 to-accent/10 border border-accent/40 text-accent text-xs font-bold px-3 py-1 rounded-full mb-8">
              <CheckCircle2 className="w-3.5 h-3.5" /> Authorized Dealer
            </div>
            
            <div className="w-48 h-32 mx-auto bg-white rounded-2xl flex items-center justify-center mb-6 p-6 shadow-[0_4px_20px_rgba(0,0,0,0.15)] group-hover:shadow-[0_8px_30px_rgba(255,255,255,0.1)] group-hover:scale-105 transition-all duration-500">
               <Image src="/finolex-logo.svg" alt="Finolex Cables Official Logo" width={140} height={90} className="object-contain w-full h-full" />
            </div>
            
            <h3 className="text-2xl font-bold text-dark mb-2">Finolex Cables</h3>
            <p className="text-dark/80 text-sm leading-relaxed">
              India's leading cable manufacturer, ensuring safe and durable electrical wiring for all borewell installations and motor setups.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
