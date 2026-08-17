"use client";

import { Menu, X, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Produtos", href: "#produtos" },
  { label: "Lojas", href: "#lojas" },
  { label: "Sobre", href: "#sobre" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const sectionMap: Record<string, string> = {
      produtos: "Produtos",
      lojas: "Lojas",
      sobre: "Sobre",
    };

    function onScroll() {
      const scrollY = window.scrollY;

      if (scrollY < 100) {
        setActiveSection("Home");
        return;
      }

      let current = "Home";
      for (const [id, label] of Object.entries(sectionMap)) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          current = label;
        }
      }
      setActiveSection(current);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleNavClick(label: string) {
    setActiveSection(label);
    setIsMobileMenuOpen(false);
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 15 }}
      className="bg-white/90 backdrop-blur-md border-b border-border-light w-full top-0 z-50 sticky"
    >
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-1 max-w-[1280px] mx-auto">

        <motion.div
          className="flex items-center gap-xs cursor-pointer select-none"
        >
          <Image
            src="/logo/logo_certo.webp"
            alt="A Constrular"
            width={180}
            height={64}
            priority
            className="h-[40px] w-auto object-contain shrink-0"
          />
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-md items-center">
          {navItems.map((item) => {
            const isActive = activeSection === item.label;
            return (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={() => handleNavClick(item.label)}
                whileHover={{ y: -1 }}
                whileTap={{ y: 0 }}
                className={`relative font-medium text-sm transition-colors duration-150 py-1 ${
                  isActive ? "text-primary" : "text-text-secondary hover:text-primary"
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeUnderline"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.a>
            );
          })}

          <motion.a
            href="https://wa.me/553333411200"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="premium-btn inline-flex items-center justify-center gap-2 text-white font-semibold text-sm px-6 py-3 cursor-pointer select-none rounded-[20px]"
          >
            <Phone className="w-4 h-4 shrink-0" />
            Fale Conosco
          </motion.a>
        </nav>

        {/* Mobile Nav Toggle */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-text-primary p-1 border-2 border-transparent active:border-border-light rounded-[20px]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-surface border-t border-border-light absolute w-full left-0 top-[100%] flex flex-col p-6 gap-4 shadow-xl z-40"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => handleNavClick(item.label)}
                className={`font-medium text-body-md py-2.5 border-b border-border-light ${
                  activeSection === item.label
                    ? "text-primary font-semibold"
                    : "text-text-secondary hover:text-primary"
                }`}
              >
                {item.label}
              </a>
            ))}

            <motion.a
              href="https://wa.me/553333411200"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="premium-btn inline-flex items-center justify-center gap-2 text-white font-semibold text-sm px-6 py-3 shadow-sm mt-3 select-none rounded-[20px]"
            >
              <Phone className="w-4 h-4 shrink-0" />
              Fale Conosco
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
