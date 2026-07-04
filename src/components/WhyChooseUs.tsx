"use client";

import { motion } from "framer-motion";
import { Star, Clock, Users, Wrench, Shield, CheckCircle, Headphones, BadgeDollarSign } from "lucide-react";

const reasons = [
  { icon: Star, title: "15+ Years Experience" },
  { icon: BadgeDollarSign, title: "Affordable Pricing" },
  { icon: Clock, title: "Quick Response" },
  { icon: Users, title: "Professional Team" },
  { icon: Wrench, title: "Latest Equipment" },
  { icon: Shield, title: "Guaranteed Quality" },
  { icon: CheckCircle, title: "Original Products" },
  { icon: Headphones, title: "Daily Support" },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs tracking-widest uppercase mb-4 border border-primary/20"
            >
              Why Choose Us
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-heading font-extrabold text-dark mb-4"
            >
              Excellence in <br />
              <span className="text-secondary">Every Drop</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-noto-telugu text-xl text-gray-500 mb-6"
            >
              మమ్మల్ని ఎందుకు ఎంచుకోవాలి
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-gray-600 text-lg leading-relaxed mb-8"
            >
              We bring technical precision, high-quality materials, and dedicated customer service to ensure your borewell and water systems operate flawlessly for years to come.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
               <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-dark text-white font-heading font-bold rounded-full hover:bg-secondary hover:shadow-[0_0_20px_rgba(29,94,184,0.4)] transition-all duration-300">
                 Get Free Estimate
               </a>
            </motion.div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {reasons.map((reason, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * (idx % 4) }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="glass-card bg-white p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-bg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <reason.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-sm text-dark">{reason.title}</h4>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
