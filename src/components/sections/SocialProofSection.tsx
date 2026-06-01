"use client";

import { motion, useInView } from "motion/react";
import { useEffect, useState, useRef } from "react";

interface CounterProps {
  from?: number;
  to: number;
  duration?: number;
  trigger: boolean;
}

function Counter({ from = 0, to, duration = 1.5, trigger }: CounterProps) {
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!trigger) return;
    
    let start: number | null = null;
    let animationFrame: number;
    
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * (to - from) + from));
      
      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(step);
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
    <section id="sobre" ref={containerRef} className="bg-surface py-16 border-y border-border-light overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-margin-desktop">
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
              <Counter to={25} trigger={isInView} />+
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
              <Counter to={4} trigger={isInView} />
            </p>
            <p className="font-label-bold text-sm text-text-secondary uppercase tracking-widest mt-2">
              Unidades Físicas
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
