"use client";

import { motion } from "framer-motion";
import { Droplets, Wrench, Zap, Toolbox, Settings, Activity, ShieldAlert, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Borewell Drilling",
    telugu: "బోర్‌వెల్ డ్రిల్లింగ్",
    desc: "New borewell drilling with modern high-sensor equipment for homes, farms & commercial use.",
  },
  {
    icon: Toolbox,
    title: "Borewell Repairs",
    telugu: "బోర్‌వెల్ మరమ్మత్తు",
    desc: "Quick, reliable repair services for existing borewells. All depths and issues covered.",
  },
  {
    icon: Settings,
    title: "Motor Pump Installation",
    telugu: "మోటార్ పంప్ ఇన్‌స్టాలేషన్",
    desc: "Expert installation of submersible and surface motor pumps for all agricultural and domestic needs.",
  },
  {
    icon: Wrench,
    title: "Pump Repairs",
    telugu: "పంప్ మరమ్మత్తు",
    desc: "Servicing and repairs for all types of motor pumps. Fast turnaround guaranteed.",
  },
  {
    icon: Zap,
    title: "Electrical Motor Winding",
    telugu: "విద్యుత్ మోటార్ వైండింగ్",
    desc: "High-quality copper winding, rewinding, and electrical maintenance for all motors.",
  },
  {
    icon: Activity,
    title: "Pipeline Installation",
    telugu: "పైప్‌లైన్ ఇన్‌స్టాలేషన్",
    desc: "End-to-end piping solutions using genuine Astral pipes for durability.",
  },
  {
    icon: ShieldAlert,
    title: "Emergency Repairs",
    telugu: "అత్యవసర మరమ్మత్తు",
    desc: "24/7 on-call support for sudden motor failures and water supply interruptions.",
  },
  {
    icon: Droplets,
    title: "Water Supply Solutions",
    telugu: "నీటి సరఫరా పరిష్కారాలు",
    desc: "Complete water lifting and pressure solutions for multi-story buildings.",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-bold text-xs tracking-widest uppercase mb-4 border border-secondary/20"
          >
            Our Expertise
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-extrabold text-dark mb-4"
          >
            Premium Engineering <span className="text-secondary">Services</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-noto-telugu text-xl text-gray-500"
          >
            మేము అందించే అత్యుత్తమ సేవలు
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative bg-bg rounded-3xl p-8 transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(29,94,184,0.15)] border border-transparent hover:border-secondary/20 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-secondary/10 to-transparent rounded-bl-full -mr-10 -mt-10 transition-transform duration-500 group-hover:scale-150"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                  <service.icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-xl font-bold text-dark mb-2 group-hover:text-secondary transition-colors">
                  {service.title}
                </h3>
                <p className="font-noto-telugu text-xs text-gray-400 mb-4 pb-4 border-b border-gray-200">
                  {service.telugu}
                </p>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
                
                <a href="#contact" className="inline-flex items-center text-sm font-bold text-primary group-hover:text-secondary transition-colors">
                  Learn More <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
