"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How much does borewell drilling cost?",
    telugu: "బోర్‌వెల్ డ్రిల్లింగ్ ఖర్చు ఎంత?",
    answer: "The cost depends on various factors including the depth of drilling, soil type, and the type of casing pipes used. Contact us for a free site visit and estimate."
  },
  {
    question: "Do you provide emergency repairs?",
    telugu: "మీరు అత్యవసర మరమ్మత్తు సేవలు అందిస్తారా?",
    answer: "Yes, we understand the importance of continuous water supply. We provide priority emergency repair services for motor pump failures."
  },
  {
    question: "Which motor brands do you support?",
    telugu: "మీరు ఏ మోటార్ బ్రాండ్‌లకు మద్దతు ఇస్తారు?",
    answer: "While we are authorized dealers for Gajraj Motor Pumps, our expert technicians can service and repair all major brands of submersible and surface motors."
  },
  {
    question: "Do you sell genuine Astral pipes?",
    telugu: "మీరు అసలైన ఆస్ట్రల్ పైపులను విక్రయిస్తారా?",
    answer: "Absolutely. We are a certified dealer for Astral Pipes, ensuring you get 100% genuine products with manufacturer warranties."
  },
  {
    question: "What are your working hours?",
    telugu: "మీ పని వేళలు ఏమిటి?",
    answer: "We are open every day from Monday to Sunday, 9:00 AM to 5:00 PM."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-bg relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-extrabold text-dark mb-4"
          >
            Frequently Asked <span className="text-secondary">Questions</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-noto-telugu text-xl text-gray-500"
          >
            తరచుగా అడిగే ప్రశ్నలు
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden premium-shadow border border-gray-100"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <div>
                  <h3 className="font-bold text-dark text-lg pr-8">{faq.question}</h3>
                  <p className="font-noto-telugu text-xs text-gray-400 mt-1">{faq.telugu}</p>
                </div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === idx ? 'bg-secondary text-white' : 'bg-bg text-gray-400'}`}>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} />
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 pt-2 text-gray-600 border-t border-gray-50">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
