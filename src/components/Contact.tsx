"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Clock, MessageSquare, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="absolute top-0 right-0 w-full h-1/2 bg-bg z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs tracking-widest uppercase mb-4 border border-primary/20"
          >
            Get In Touch
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-extrabold text-dark mb-4"
          >
            Contact <span className="text-secondary">Us</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-noto-telugu text-xl text-gray-500"
          >
            మాతో సంప్రదించండి
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-3xl premium-shadow overflow-hidden border border-gray-100">
          
          {/* Left: Info */}
          <div className="p-8 lg:p-12 bg-gradient-to-br from-dark to-primary text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/30 rounded-full blur-[80px]"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px]"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-heading font-bold mb-8">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm mb-1 uppercase tracking-wider">Phone</p>
                    <a href="tel:9949801904" className="text-xl font-bold hover:text-accent transition-colors">9949801904</a>
                    <p className="font-noto-telugu text-sm text-white/50 mt-1">కాల్ చేయండి</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm mb-1 uppercase tracking-wider">Location</p>
                    <p className="text-lg font-medium">Mydukur, Andhra Pradesh</p>
                    <p className="font-noto-telugu text-sm text-white/50 mt-1">మైడుకూర్, ఆంధ్రప్రదేశ్</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm mb-1 uppercase tracking-wider">Working Hours</p>
                    <p className="text-lg font-medium">Mon - Sun: 9:00 AM - 5:00 PM</p>
                    <p className="font-noto-telugu text-sm text-white/50 mt-1">ప్రతి రోజూ: ఉదయం 9 - సాయంత్రం 5</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-white/10">
                <p className="text-white/80 mb-6">Need instant help? Send us a message on WhatsApp.</p>
                <a 
                  href="https://wa.me/919949801904" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-bold hover:bg-[#20bd5a] transition-colors"
                >
                  <MessageSquare className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-dark mb-6">Send us a message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-bg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="99999 99999"
                    className="w-full px-4 py-3 rounded-xl bg-bg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Service Required</label>
                <select className="w-full px-4 py-3 rounded-xl bg-bg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-gray-600">
                  <option>Borewell Drilling</option>
                  <option>Motor Pump Repair</option>
                  <option>New Pump Installation</option>
                  <option>Astral Pipes Enquiry</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Message</label>
                <textarea 
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 rounded-xl bg-bg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="button"
                className="w-full bg-primary hover:bg-secondary text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors group shadow-lg shadow-primary/20"
              >
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}
