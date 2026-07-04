import Image from "next/image";
import Link from "next/link";
import { Globe, Mail, MessageSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white/80 pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white rounded-full p-1 relative">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-sm leading-tight text-white">
                  Sri Sai Venkateswara
                </span>
                <span className="font-heading font-semibold text-[10px] tracking-widest uppercase text-accent">
                  Engineering
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Premium borewell drilling, motor pump installation, and maintenance services in Mydukur since 2009.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-dark transition-colors">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-dark transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-dark transition-colors">
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#projects" className="hover:text-accent transition-colors">Our Portfolio</a></li>
              <li><a href="#faq" className="hover:text-accent transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Our Services</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#services" className="hover:text-accent transition-colors">Borewell Drilling</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Motor Pump Repair</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Pipeline Installation</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Electrical Motor Winding</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Emergency Services</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li>Mydukur, Andhra Pradesh, India</li>
              <li>9949801904</li>
              <li>Mon - Sun: 9:00 AM - 5:00 PM</li>
            </ul>
            <div className="mt-8">
              <span className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-xs font-bold text-accent">
                ✓ Certified Astral Pipes Dealer
              </span>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} Sri Sai Venkateswara Engineering. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
