'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScaleOnHoverProps {
  children: ReactNode;
  className?: string;
  scale?: number;
  duration?: number;
}

export default function ScaleOnHover({
  children,
  className = '',
  scale = 1.05,
  duration = 0.2,
}: ScaleOnHoverProps) {
  return (
    <motion.div
      className={className}
      whileHover={{ scale }}
      whileTap={{ scale: scale * 0.95 }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 17,
        duration,
      }}
    >
      {children}
    </motion.div>
  );
}

