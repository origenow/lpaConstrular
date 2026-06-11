import { useState, useEffect, useRef } from "react";

export function useScrollReveal(triggerRatio = 0.15) {
  const ref = useRef<HTMLElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let ticking = false;
    const update = () => {
      ticking = false;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // Entrando pela parte de baixo
      const entering = rect.top >= 0 && rect.top <= vh * (1 - triggerRatio);
      // Já passou o topo mas ainda está visível o suficiente
      const stillVisible = rect.top < 0 && rect.bottom >= vh * 0.75;
      setIsRevealed(entering || stillVisible);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [triggerRatio]);

  return { ref, isRevealed };
}
