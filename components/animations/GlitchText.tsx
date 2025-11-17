'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlitchTextProps {
  children: ReactNode;
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
}

export default function GlitchText({
  children,
  className = '',
  intensity = 'medium',
}: GlitchTextProps) {
  const intensityMap = {
    low: { duration: 0.3, scale: 1.02 },
    medium: { duration: 0.2, scale: 1.05 },
    high: { duration: 0.1, scale: 1.08 },
  };

  const config = intensityMap[intensity];

  return (
    <motion.span
      className={`relative inline-block ${className}`}
      animate={{
        x: [0, -2, 2, -2, 2, 0],
        y: [0, 1, -1, 1, -1, 0],
      }}
      transition={{
        duration: config.duration,
        repeat: Infinity,
        repeatDelay: 3,
        ease: 'easeInOut',
      }}
      style={{
        textShadow: `
          2px 0 #3EDCFF,
          -2px 0 #C8FF3D,
          0 2px #3EDCFF,
          0 -2px #C8FF3D
        `,
      }}
    >
      <motion.span
        className="absolute inset-0 opacity-0"
        animate={{
          x: [0, -3, 3, -3, 3, 0],
          y: [0, 2, -2, 2, -2, 0],
          opacity: [0, 0.8, 0, 0.8, 0, 0],
        }}
        transition={{
          duration: config.duration,
          repeat: Infinity,
          repeatDelay: 3,
          ease: 'easeInOut',
        }}
        style={{
          color: '#3EDCFF',
          filter: 'blur(1px)',
        }}
      >
        {children}
      </motion.span>
      <span className="relative z-10">{children}</span>
    </motion.span>
  );
}

