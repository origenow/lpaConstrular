"use client";

import { motion, useInView } from "motion/react";
import { useEffect, useState, useRef } from "react";

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
    <section id="sobre" ref={containerRef} className="bg-surface py-16 border-y border-border-light relative">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-around items-center gap-10 md:gap-lg"
        >

          {/* Stat 1 */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="text-center cursor-pointer p-6 select-none"
          >
            <p className="font-bebas text-5xl md:text-6xl text-primary leading-none">
              <Counter to={34} trigger={isInView} />+
            </p>
            <p className="font-label-bold text-sm text-text-secondary uppercase tracking-widest mt-2">
              Anos de Mercado
            </p>
          </motion.div>

          {/* Stat 2 */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="text-center cursor-pointer p-6 select-none"
          >
            <p className="font-bebas text-5xl md:text-6xl text-primary leading-none">
              <Counter to={15} trigger={isInView} />k
            </p>
            <p className="font-label-bold text-sm text-text-secondary uppercase tracking-widest mt-2">
              Obras Atendidas
            </p>
          </motion.div>

          {/* Stat 3 */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="text-center cursor-pointer p-6 select-none"
          >
            <p className="font-bebas text-5xl md:text-6xl text-primary leading-none">
              <Counter to={6} trigger={isInView} />
            </p>
            <p className="font-label-bold text-sm text-text-secondary uppercase tracking-widest mt-2">
              Unidades Físicas
            </p>
          </motion.div>

        </motion.div>
      </div>

      <svg
        className="absolute -bottom-px left-0 w-full h-12 text-background z-10"
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
