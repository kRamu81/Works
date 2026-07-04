"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
  { value: 15, suffix: "+", label: "Years Experience", telugu: "సంవత్సరాల అనుభవం" },
  { value: 2000, suffix: "+", label: "Happy Customers", telugu: "సంతోషకరమైన కస్టమర్లు" },
  { value: 5000, suffix: "+", label: "Completed Works", telugu: "పూర్తయిన పనులు" },
  { value: 2, suffix: "", label: "Authorized Brands", telugu: "అధికారిక బ్రాండ్లు" },
  { value: 100, suffix: "%", label: "Customer Satisfaction", telugu: "కస్టమర్ సంతృప్తి" },
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;
    
    // Total duration of animation in ms
    const duration = 2000;
    // Calculate increment step based on total duration and frame rate (approx 60fps)
    let incrementTime = (duration / end) * 1.5; 
    // Cap it so large numbers don't take forever, or small numbers don't jump instantly
    if (incrementTime < 5) incrementTime = 5;
    if (incrementTime > 50) incrementTime = 50;
    
    const step = end > 100 ? Math.ceil(end / (duration / incrementTime)) : 1;

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span className="font-heading font-extrabold text-4xl lg:text-5xl text-accent">
      {count}
      {suffix}
    </span>
  );
};

export default function TrustBar() {
  return (
    <section className="relative -mt-16 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="glass-card bg-white/95 rounded-3xl p-8 lg:p-12 premium-shadow"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4 divide-x divide-gray-100">
          {stats.map((stat, idx) => (
            <div key={idx} className={`flex flex-col items-center text-center ${idx % 2 === 0 ? '' : 'pl-4 lg:pl-0'} lg:px-4`}>
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-sm font-semibold text-dark uppercase tracking-wide">
                {stat.label}
              </p>
              <p className="mt-1 font-noto-telugu text-xs text-gray-500">
                {stat.telugu}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
