"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck, Wrench, ThumbsUp } from "lucide-react";
import Image from "next/image";

const features = [
  { icon: Award, title: "15 Years Experience", desc: "Proven track record in borewell drilling" },
  { icon: ShieldCheck, title: "Certified Dealer", desc: "Authorized seller for top pump brands" },
  { icon: Wrench, title: "Experienced Mechanics", desc: "Expert technicians for fast repairs" },
  { icon: ThumbsUp, title: "Quality Service", desc: "100% customer satisfaction guaranteed" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-bg overflow-hidden relative">
      {/* Decorative background blur */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs tracking-widest uppercase mb-6 border border-primary/20">
              About Us
            </div>
            
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-dark mb-2 leading-tight">
              Pioneers in <span className="text-gradient">Borewell & Pump</span> Solutions
            </h2>
            <p className="font-noto-telugu text-xl text-gray-500 mb-8">
              బోర్వెల్ & పంప్ పరిష్కారాలలో మార్గదర్శకులు
            </p>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Sri Sai Venkateswara Engineering has been serving the Mydukur community for over 15 years. We specialize in comprehensive borewell drilling, motor pump installation, repair, and maintenance — offering honest, reliable service every single day.
            </p>
            <p className="font-noto-telugu text-gray-500 border-l-4 border-accent pl-4 mb-10">
              మేము మైడుకూర్ సమాజానికి 15 సంవత్సరాలకు పైగా సేవలందిస్తున్నాము. బోర్‌వెల్ డ్రిల్లింగ్, మోటార్ పంప్ ఇన్‌స్టాలేషన్, మరమ్మత్తు మరియు నిర్వహణలో మేము నిపుణులం.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="glass-card bg-white/60 p-5 rounded-2xl flex gap-4 items-start"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark mb-1">{feature.title}</h4>
                    <p className="text-xs text-gray-500">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] w-full rounded-[2rem] overflow-hidden premium-shadow group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent z-10"></div>
            {/* Replace with actual image */}
            <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
            
            <div className="absolute bottom-8 left-8 right-8 z-20 glass-card bg-white/10 backdrop-blur-md border-white/20 p-6 rounded-2xl">
              <div className="flex items-center gap-4 text-white">
                <div className="w-16 h-16 rounded-full bg-accent text-dark flex items-center justify-center font-bold text-2xl">
                  #1
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl">Top Rated in Mydukur</h3>
                  <p className="text-white/80 text-sm">Trusted by thousands of farmers & homeowners</p>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
