"use client";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

const TRANSLATE = {
  up:    { from: "translateY(28px)", to: "translateY(0)" },
  down:  { from: "translateY(-28px)", to: "translateY(0)" },
  left:  { from: "translateX(28px)", to: "translateX(0)" },
  right: { from: "translateX(-28px)", to: "translateX(0)" },
  none:  { from: "none", to: "none" },
};

interface Props {
  children: ReactNode;
  delay?: number;
  direction?: keyof typeof TRANSLATE;
  className?: string;
}

export default function FadeIn({ children, delay = 0, direction = "up", className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -48px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const t = TRANSLATE[direction];
  const style: CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible ? t.to : t.from,
    transition: "opacity 0.65s ease-out, transform 0.65s ease-out",
    transitionDelay: `${delay}ms`,
    willChange: "opacity, transform",
  };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
