"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function FloatingBalls() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const balls = Array.from({ length: 8 });

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {balls.map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-blue-500/20 dark:bg-blue-400/10 blur-[80px]"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            x: [
              Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            ],
            y: [
              Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            ],
            scale: [
              Math.random() * 0.5 + 0.5,
              Math.random() * 0.5 + 1,
              Math.random() * 0.5 + 0.5,
            ]
          }}
          transition={{
            duration: Math.random() * 20 + 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            width: Math.random() * 300 + 100 + 'px',
            height: Math.random() * 300 + 100 + 'px',
          }}
        />
      ))}
    </div>
  );
}

