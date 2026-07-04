"use client";

import { motion } from "framer-motion";
import { PhoneCall, MapPin, Calculator, Wrench, CheckCircle } from "lucide-react";

const steps = [
  { icon: PhoneCall, title: "Call Us", desc: "Contact our team for your requirement" },
  { icon: MapPin, title: "Site Visit", desc: "We visit and inspect your location" },
  { icon: Calculator, title: "Estimate", desc: "Transparent pricing & detailed quote" },
  { icon: Wrench, title: "Installation", desc: "Professional execution by experts" },
  { icon: CheckCircle, title: "Support", desc: "Ongoing maintenance and assistance" },
];

export default function WorkProcess() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs tracking-widest uppercase mb-4 border border-primary/20"
          >
            How We Work
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-extrabold text-dark mb-4"
          >
            Our Simple <span className="text-secondary">Process</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-noto-telugu text-xl text-gray-500"
          >
            మా పని విధానం
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-10 right-10 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="flex flex-col items-center text-center relative group"
              >
                {/* Connecting Line (Mobile) */}
                {idx !== steps.length - 1 && (
                  <div className="md:hidden absolute top-24 bottom-[-32px] left-1/2 w-0.5 bg-primary/20 -translate-x-1/2 z-0"></div>
                )}
                
                <div className="w-24 h-24 rounded-2xl bg-white border-2 border-bg shadow-xl flex items-center justify-center text-primary mb-6 relative z-10 group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-primary/20 group-hover:shadow-2xl">
                   <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-accent text-dark font-bold flex items-center justify-center shadow-lg border-2 border-white">
                     {idx + 1}
                   </div>
                   <step.icon className="w-10 h-10" />
                </div>
                
                <h3 className="text-lg font-bold text-dark mb-2 group-hover:text-secondary transition-colors">{step.title}</h3>
                <p className="text-sm text-gray-500 max-w-[180px] leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
