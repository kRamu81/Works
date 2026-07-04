"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Brands", href: "#brands" },
  { name: "Projects", href: "#projects" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b border-transparent",
        isScrolled
          ? "bg-dark/95 backdrop-blur-md shadow-lg border-white/10 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 z-50 group">
          <div className="relative w-10 h-10 md:w-12 md:h-12 bg-white rounded-full p-1 shadow-md transition-transform duration-300 group-hover:scale-105">
            {/* The user will upload logo.png to the public folder */}
            <Image
              src="/logo.png"
              alt="Sri Sai Venkateswara Engineering Logo"
              fill
              className="object-contain p-1"
            />
          </div>
          <div className="flex flex-col transition-colors duration-300 text-white">
            <span className="font-heading font-extrabold text-sm md:text-lg leading-tight tracking-tight">
              Sri Sai Venkateswara
            </span>
            <span className="font-heading font-semibold text-[10px] md:text-xs tracking-widest uppercase text-accent">
              Engineering
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold transition-colors duration-200 hover:text-accent text-white/90 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Call Now Button (Desktop) */}
        <div className="hidden lg:block">
          <a
            href="tel:9949801904"
            className="group relative inline-flex items-center justify-center gap-2 px-6 py-2.5 font-heading font-semibold text-dark bg-accent rounded-full overflow-hidden transition-transform hover:scale-105 hover:shadow-[0_0_20px_rgba(245,179,33,0.4)]"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            <Phone className="w-4 h-4" />
            <span className="relative z-10">Call Now</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden z-50 p-2 -mr-2 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu Dropdown */}
        <div
          className={cn(
            "fixed inset-0 bg-dark z-40 flex flex-col justify-center items-center transition-all duration-500 ease-in-out lg:hidden",
            mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          )}
        >
          <div className="flex flex-col gap-6 items-center text-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-heading font-bold text-white hover:text-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:9949801904"
              className="mt-6 flex items-center justify-center gap-2 px-8 py-4 font-heading font-semibold text-dark bg-accent rounded-full text-lg"
            >
              <Phone className="w-5 h-5" />
              Call 9949801904
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
