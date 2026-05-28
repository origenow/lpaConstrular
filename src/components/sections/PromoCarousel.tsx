"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const carouselImages = [
  {
    src: "/carrossel/carrossel.png",
    alt: "Ofertas de Construção - A Constrular"
  },
  {
    src: "/carrossel/c2.png",
    alt: "Variedade em Acabamentos e Ferramentas"
  },
  {
    src: "/carrossel/c3.png",
    alt: "Materiais do Alicerce ao Acabamento"
  }
];

export function PromoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [isHovered, setIsHovered] = useState(false);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      zIndex: 1
    },
    exit: (dir: number) => ({
      x: dir < 0 ? "100%" : "-100%",
      opacity: 0,
      zIndex: 0
    })
  };

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  }, [currentIndex]);

  // Autoplay functionality
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      handleNext();
    }, 5000); // Cycles every 5 seconds

    return () => clearInterval(timer);
  }, [isHovered, handleNext]);

  return (
    <section 
      aria-label="Carrossel de Destaques"
      className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[480px] bg-background overflow-hidden border-b border-border-light group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slides Area */}
      <div className="relative w-full h-full">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { duration: 0.6, ease: "easeInOut" },
              opacity: { duration: 0.3, ease: "easeInOut" }
            }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={carouselImages[currentIndex].src}
              alt={carouselImages[currentIndex].alt}
              fill
              priority
              className="object-cover object-center select-none pointer-events-none"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows (Visible on hover on desktop, always hidden on small mobile) */}
      <button
        onClick={handlePrev}
        aria-label="Slide anterior"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 hover:bg-white text-text-primary rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all border border-border-light cursor-pointer opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity duration-300"
      >
        <ChevronLeft className="w-6 h-6 hover:text-primary transition-colors" />
      </button>

      <button
        onClick={handleNext}
        aria-label="Próximo slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 hover:bg-white text-text-primary rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all border border-border-light cursor-pointer opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity duration-300"
      >
        <ChevronRight className="w-6 h-6 hover:text-primary transition-colors" />
      </button>

      {/* Slide Indicator Dots */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-3 bg-black/10 backdrop-blur-md py-1.5 px-3 rounded-full border border-white/10 select-none">
        {carouselImages.map((_, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Ir para o slide ${index + 1}`}
              className="relative h-2 rounded-full cursor-pointer focus:outline-none transition-all duration-300"
              style={{
                width: isActive ? "24px" : "8px",
                backgroundColor: isActive ? "#EA580C" : "rgba(255, 255, 255, 0.6)"
              }}
            >
              {isActive && (
                <motion.span 
                  layoutId="activeDot"
                  className="absolute inset-0 bg-primary rounded-full shadow-[0_0_8px_rgba(234,88,12,0.6)]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
}
