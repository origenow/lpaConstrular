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
      const entered = rect.top <= window.innerHeight * (1 - triggerRatio);
      const isVisible = rect.bottom > 0 && rect.top < window.innerHeight;
      setIsRevealed(entered && isVisible);
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
