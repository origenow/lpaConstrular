"use client";

import { motion, useInView } from "motion/react";
import { useEffect, useState, useRef } from "react";
import type React from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const WHATSAPP_BASE = "https://wa.me/553333411200?text=";

function statWhatsAppUrl(message: string) {
  return WHATSAPP_BASE + encodeURIComponent(message);
}

interface Stat {
  to: number;
  suffix: string;
  label: string;
  message: string;
}

/* Cada card abre o WhatsApp principal com a mensagem do seu proprio topico. */
const stats: Stat[] = [
  {
    to: 34,
    suffix: "+",
    label: "Anos de Mercado",
    message:
      "Olá! Vi no site que a A Constrular tem mais de 34 anos de mercado. Queria falar com um consultor sobre a minha obra.",
  },
  {
    to: 15,
    suffix: "k",
    label: "Obras Atendidas",
    message:
      "Olá! Vi que vocês já atenderam mais de 15 mil obras. Queria um orçamento de materiais para a minha.",
  },
  {
    to: 6,
    suffix: "",
    label: "Unidades Físicas",
    message:
      "Olá! Vi que vocês têm 6 unidades físicas. Qual delas fica mais perto de mim e quais são os horários de funcionamento?",
  },
];

interface CounterProps {
  from?: number;
  to: number;
  duration?: number;
  trigger: boolean;
}

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function Counter({ from = 0, to, duration = 2.5, trigger }: CounterProps) {
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!trigger) return;

    let start: number | null = null;
    let animationFrame: number;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const raw = Math.min((timestamp - start) / (duration * 1000), 1);
      const eased = easeOutExpo(raw);

      setCount(Math.floor(eased * (to - from) + from));

      if (raw < 1) {
        animationFrame = window.requestAnimationFrame(step);
      } else {
        setCount(to);
      }
    };

    animationFrame = window.requestAnimationFrame(step);

    return () => {
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, [from, to, duration, trigger]);

  return <>{count}</>;
}

export function SocialProofSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const { ref: curtainRef, isRevealed } = useScrollReveal();

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="sobre" ref={curtainRef as React.Ref<HTMLElement>} className="bg-surface py-16 border-y border-border-light relative overflow-hidden">
      <div className={`section-curtain absolute inset-0 z-0 pointer-events-none${isRevealed ? " is-revealed" : ""}`} />
      <div ref={containerRef} className="relative z-10 max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-around items-center gap-10 md:gap-lg"
        >

          {stats.map((stat) => (
            <motion.a
              key={stat.label}
              href={statWhatsAppUrl(stat.message)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Falar no WhatsApp sobre ${stat.label}`}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="text-center cursor-pointer p-6 select-none"
            >
              <p className="font-bebas text-5xl md:text-6xl text-primary leading-none">
                <Counter to={stat.to} trigger={isInView} />
                {stat.suffix}
              </p>
              <p className="font-label-bold text-sm text-text-secondary uppercase tracking-widest mt-2">
                {stat.label}
              </p>
            </motion.a>
          ))}

        </motion.div>
      </div>

      <svg
        className="absolute -bottom-px left-0 w-full h-12 text-background z-20"
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,30 C150,60 350,0 600,30 C850,60 1050,0 1200,30 L1200,60 L0,60 Z"
          fill="currentColor"
        />
      </svg>

    </section>
  );
}
