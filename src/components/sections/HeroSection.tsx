"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import type React from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function HeroSection() {
  const { ref, isRevealed } = useScrollReveal();

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
    <section ref={ref as React.Ref<HTMLElement>} className="bg-background text-text-primary relative overflow-hidden border-b border-border-light">
      <div className="relative overflow-hidden">
        <div className={`section-curtain absolute inset-0 z-0 pointer-events-none${isRevealed ? " is-revealed" : ""}`} />

        {/* Background Decorative Radial Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none select-none z-0" />

      {/* Left content — constrained to container */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-md md:w-[50%]"
        >
          <motion.span
            variants={itemVariants}
            className="bg-white/30 backdrop-blur-md text-primary font-bold text-xs uppercase tracking-widest px-4 py-1.5 self-start rounded-full border border-white/40 shadow-sm select-none"
          >
            Atendimento direto com nossa equipe
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="font-bebas text-5xl sm:text-6xl lg:text-7xl leading-tight text-text-primary uppercase tracking-wide select-none"
          >
            FAÇA SUA OBRA COM QUEM ENTENDE.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="font-body-lg text-body-lg text-text-secondary leading-relaxed max-w-lg"
          >
            Tradição e força no mercado de construção. Com 6 unidades estrategicamente localizadas, entregamos o que há de melhor em materiais para sua obra, do alicerce ao acabamento.
          </motion.p>

          <motion.div variants={itemVariants} className="pt-sm">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="premium-btn inline-flex items-center gap-2 text-white font-semibold py-3 px-6 shadow-lg shadow-primary/15 cursor-pointer text-sm select-none rounded-[20px]"
            >
              <span>Solicitar Orçamento</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Right image — fora do container, colada na borda direita (desktop) */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.25 }}
        className="hidden md:flex absolute top-0 right-0 bottom-0 w-[50%] items-center overflow-hidden group"
      >
        <motion.div
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full"
        >
          <Image
            src="/background/tintasCoral.png"
            alt="Tintas Coral — A Constrular"
            width={1200}
            height={800}
            priority
            className="w-full h-auto"
          />
        </motion.div>
        {/* Fade na borda esquerda para blend com o fundo */}
        <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background/60 to-transparent pointer-events-none z-10" />
      </motion.div>
      </div>

      {/* Imagem mobile — inline abaixo do texto, fora da cortina */}
      <div className="md:hidden w-full overflow-hidden">
        <Image
          src="/background/tintasCoral.png"
          alt="Tintas Coral — A Constrular"
          width={900}
          height={600}
          className="w-full h-auto"
        />
      </div>

    </section>
  );
}
