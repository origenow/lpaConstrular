"use client";

import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export function CtaSection() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="py-16 md:py-24 relative overflow-hidden flex flex-col items-center justify-center text-center border-b border-slate-900"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: "url('/background/bg.png')" }}
        aria-hidden="true"
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/30 z-0" aria-hidden="true" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 80, damping: 15 }}
        className="max-w-3xl mx-auto px-margin-mobile relative z-10 flex flex-col items-center gap-6 md:gap-8"
      >
        {/* Typography-optimized Heading using Bebas Neue and leading-tight */}
        <h2
          id="cta-heading"
          className="font-bebas text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-wide leading-none select-none"
        >
          Pronto para tirar sua obra do papel?
        </h2>

        {/* Geometric clean Subtitle (Inter, bold/medium size for perfect WCAG AA contrast) */}
        <p className="font-body-lg text-lg sm:text-xl text-orange-50/90 max-w-xl font-medium leading-relaxed select-none">
          Fale agora com um de nossos especialistas e receba um orçamento personalizado para o seu projeto.
        </p>

        {/* Premium conversion WhatsApp CTA Button */}
        <motion.a
          href="https://wa.me/5511999999999"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            y: -4
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          className="premium-btn-green inline-flex items-center justify-center gap-3 text-white font-semibold text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-5 w-full sm:w-auto cursor-pointer shadow-md select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
        >
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2} />
          <span>Falar no WhatsApp</span>
        </motion.a>
      </motion.div>
    </section>
  );
}
