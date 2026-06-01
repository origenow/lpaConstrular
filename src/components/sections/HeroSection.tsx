"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 }
    }
  };

  return (
    <section className="bg-background text-text-primary py-16 md:py-24 overflow-hidden relative border-b border-border-light">
      
      {/* Background Decorative Radial Glow (Warm Orange Accent) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none select-none z-0"></div>
      
      <div className="max-w-[1280px] mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Side Content - First on mobile (order-1) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-md order-1 md:order-none"
        >
          {/* Refined Modern Eyebrow Badge */}
          <motion.span 
            variants={itemVariants}
            className="bg-primary-soft text-primary font-bold text-xs uppercase tracking-widest px-4 py-1.5 self-start rounded-full border border-primary/20 select-none"
          >
            Atendimento direto com nossa equipe
          </motion.span>
          
          {/* Robust Bebas Neue Heading */}
          <motion.h1 
            variants={itemVariants}
            className="font-bebas text-5xl sm:text-6xl lg:text-7xl leading-tight text-text-primary uppercase tracking-wide select-none"
          >
            FAÇA SUA OBRA COM QUEM ENTENDE.
          </motion.h1>
          
          {/* Neutral Clean Body text */}
          <motion.p 
            variants={itemVariants}
            className="font-body-lg text-body-lg text-text-secondary leading-relaxed max-w-lg"
          >
            Tradição e força no mercado de construção. Com 4 unidades estrategicamente localizadas, entregamos o que há de melhor em materiais para sua obra, do alicerce ao acabamento.
          </motion.p>
          
          {/* Conversional Button */}
          <motion.div 
            variants={itemVariants}
            className="pt-sm"
          >
            <motion.button 
              whileHover={{ 
                scale: 1.03
              }}
              whileTap={{ scale: 0.98 }}
              className="premium-btn inline-flex items-center gap-2 text-white font-semibold py-4 px-8 shadow-lg shadow-primary/15 cursor-pointer text-base select-none"
            >
              <span>Solicitar Orçamento</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </motion.div>
        
        {/* Right Side Visuals - Second on mobile (order-2) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.25 }}
          className="relative order-2 md:order-none"
        >
          {/* Premium Industrial Visual Container with organic fluid border-radius */}
          <motion.div 
            whileHover={{ 
              boxShadow: "0px 25px 50px -12px rgba(234,88,12,0.2)"
            }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
            className="bg-surface p-2 rounded-[30%_70%_70%_30%_/_50%_50%_50%_50%] border border-border-light shadow-[0_0_50px_-10px_rgba(234,88,12,0.15)] relative overflow-hidden cursor-pointer group transition-all duration-700 hover:rounded-[50%_50%_30%_70%_/_50%_60%_40%_50%]"
          >
            {/* Morphing Inner Frame */}
            <div className="w-full h-[320px] sm:h-[420px] lg:h-[480px] relative overflow-hidden rounded-[30%_70%_70%_30%_/_50%_50%_50%_50%] transition-all duration-700 group-hover:rounded-[50%_50%_30%_70%_/_50%_60%_40%_50%]">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full relative"
              >
                <Image
                  src="/background/tintasCoral.png"
                  alt="Tintas Coral — A Constrular"
                  fill
                  priority={true}
                  loading="eager"
                  fetchPriority="high"
                  className="object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
        
      </div>
    </section>
  );
}
