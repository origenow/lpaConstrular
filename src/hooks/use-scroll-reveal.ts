import { useState, useEffect, useRef } from "react";

/**
 * Revela a seção quando ela entra no viewport.
 *
 * Usa IntersectionObserver em vez de um listener de scroll: o cálculo acontece
 * fora da main thread, sem getBoundingClientRect() a cada frame — que forçava
 * reflow síncrono durante o scroll.
 */
export function useScrollReveal(triggerRatio = 0.15) {
  const ref = useRef<HTMLElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Espelha o comportamento antigo: dispara quando o topo do elemento passa
    // de (1 - triggerRatio) da altura da janela, encolhendo a "raiz" por baixo.
    const observer = new IntersectionObserver(
      ([entry]) => setIsRevealed(entry.isIntersecting),
      { rootMargin: `0px 0px -${Math.round(triggerRatio * 100)}% 0px`, threshold: 0 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [triggerRatio]);

  return { ref, isRevealed };
}
