"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface SectionCurtainProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  curtainClassName?: string;
  triggerRatio?: number;
  as?: keyof JSX.IntrinsicElements;
}

const SectionCurtain = ({
  children,
  id,
  className = "",
  curtainClassName = "",
  triggerRatio = 0.15,
  as: Tag = "section",
}: SectionCurtainProps) => {
  const { ref, isRevealed } = useScrollReveal(triggerRatio);

  return (
    <Tag
      ref={ref as React.Ref<HTMLElement>}
      id={id}
      className={`relative overflow-hidden ${className}`}
    >
      <div
        className={`section-curtain absolute inset-0 z-0 pointer-events-none ${isRevealed ? "is-revealed" : ""} ${curtainClassName}`}
      />
      <div className="relative z-10">{children}</div>
    </Tag>
  );
};

export default SectionCurtain;
