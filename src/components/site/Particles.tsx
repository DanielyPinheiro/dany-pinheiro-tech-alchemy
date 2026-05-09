"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type P = { left: number; top: number; size: number; dur: number; delay: number; hue: string };

export function Particles({ count = 22 }: { count?: number }) {
  const [items, setItems] = useState<P[] | null>(null);

  useEffect(() => {
    const hues = ["var(--gold)", "var(--primary)", "var(--pink)"];
    const arr: P[] = Array.from({ length: count }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 2 + Math.random() * 3,
      dur: 8 + Math.random() * 10,
      delay: Math.random() * 6,
      hue: hues[Math.floor(Math.random() * hues.length)],
    }));
    setItems(arr);
  }, [count]);

  if (!items) return null;

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            background: p.hue,
            boxShadow: `0 0 ${p.size * 4}px ${p.hue}`,
            opacity: 0.5,
          }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
