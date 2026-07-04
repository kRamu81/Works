"use client";

import { motion } from "framer-motion";

const projects = [
  { category: "Drilling", title: "Agricultural Borewell", img: "https://images.unsplash.com/photo-1579693121516-f36de29d8131?q=80&w=600&auto=format&fit=crop", style: "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto h-[300px] md:h-full" },
  { category: "Pump Installation", title: "Commercial Setup", img: "https://images.unsplash.com/photo-1584992236310-6edddc08acff?q=80&w=600&auto=format&fit=crop", style: "aspect-square h-[300px]" },
  { category: "Repair", title: "Motor Winding", img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=600&auto=format&fit=crop", style: "aspect-square h-[300px]" },
  { category: "Pipeline", title: "Astral Fitting", img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=600&auto=format&fit=crop", style: "aspect-square h-[300px]" },
  { category: "Drilling", title: "Domestic Borewell", img: "https://images.unsplash.com/photo-1541888087645-5d9c22e4c278?q=80&w=600&auto=format&fit=crop", style: "aspect-square h-[300px]" },
];

export default function Gallery() {
  return (
    <section id="projects" className="py-24 bg-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs tracking-widest uppercase mb-4 border border-primary/20"
            >
              Our Portfolio
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-heading font-extrabold text-dark"
            >
              Recent <span className="text-gradient">Projects</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-noto-telugu text-lg text-gray-500">ఇటీవలి ప్రాజెక్ట్‌లు</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative rounded-3xl overflow-hidden group cursor-pointer premium-shadow ${project.style}`}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${project.img})` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-3 py-1 bg-accent/90 text-dark text-xs font-bold rounded-full mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
