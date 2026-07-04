"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Ramesh Reddy",
    location: "Mydukur",
    text: "Sri Sai Venkateswara Engineering did a fantastic job with our farm borewell. They were quick, transparent about pricing, and used genuine materials.",
    rating: 5
  },
  {
    name: "Srinivas Rao",
    location: "Proddatur",
    text: "My submersible pump stopped working suddenly. Their emergency service was a lifesaver. Fixed it within a few hours. Highly recommended!",
    rating: 5
  },
  {
    name: "Venkata Lakshmi",
    location: "Badvel",
    text: "Very professional team. We bought Gajraj motor and Astral pipes from them. Installation was smooth and they left the site clean.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 -skew-y-3 transform origin-bottom-left z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 text-accent font-bold text-xs tracking-widest uppercase mb-4 border border-accent/30"
          >
            Customer Reviews
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-extrabold text-dark mb-4"
          >
            What Our Clients <span className="text-secondary">Say</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-noto-telugu text-xl text-gray-500"
          >
            కస్టమర్ అభిప్రాయాలు
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-bg rounded-3xl p-8 premium-shadow relative"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-primary/10" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              
              <p className="text-gray-600 mb-8 leading-relaxed italic relative z-10">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-dark">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
