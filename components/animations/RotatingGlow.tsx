'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface RotatingGlowProps {
  children: ReactNode;
  className?: string;
  size?: number;
  speed?: number;
  color?: 'primary' | 'accent' | 'both';
}

export default function RotatingGlow({
  children,
  className = '',
  size = 200,
  speed = 20,
  color = 'both',
}: RotatingGlowProps) {
  const colorMap = {
    primary: 'rgba(200, 255, 61, 0.3)',
    accent: 'rgba(62, 220, 255, 0.3)',
    both: 'rgba(200, 255, 61, 0.2), rgba(62, 220, 255, 0.2)',
  };

  return (
    <div className={`relative ${className}`}>
      <motion.div
        className="absolute inset-0 -z-10 rounded-full blur-2xl"
        style={{
          width: size,
          height: size,
          background: `radial-gradient(circle, ${colorMap[color]})`,
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      {children}
    </div>
  );
}

